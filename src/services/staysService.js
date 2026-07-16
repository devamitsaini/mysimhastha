
import { createClient } from '@supabase/supabase-js';


// Initialize Supabase client
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || '';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not configured');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Fetch all active stays with pagination
 */
export const fetchAllStays = async (filters = {}) => {
  const {
    page = 1,
    limit = 12,
    search = "",
    stayType = "all",
    location = "",
    budget = "",
    priceMin = 0,
    priceMax = 0,
    rating = 0,
    verified = false,
    sort = "featured",
  } = filters;

  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase
    .from("stays")
    .select("*", { count: "exact" });

  if (search) {
    query = query.or(
      `name.ilike.%${search}%,locality.ilike.%${search}%,city.ilike.%${search}%`
    );
  }

  if (stayType !== "all") {
    query = query.eq("stay_type", stayType);
  }

  if (location) {
    query = query.or(
      `locality.ilike.%${location}%,city.ilike.%${location}%`
    );
  }

  if (budget) {
    if (budget.includes("-")) {
      const [min, max] = budget.split("-").map(Number);
      if (!isNaN(min)) {
        query = query.gte("price_from", min);
      }
      if (!isNaN(max)) {
        query = query.lte("price_from", max);
      }
    } else if (budget.endsWith("+")) {
      const min = Number(budget.replace("+", ""));
      if (!isNaN(min)) {
        query = query.gte("price_from", min);
      }
    }
  }

  // Apply price range from min/max (used by the FiltersSidebar budget radios)
  if (priceMin || priceMax) {
    if (priceMin) {
      query = query.gte("price_from", priceMin);
    }
    if (priceMax) {
      query = query.lte("price_from", priceMax);
    }
  }

  if (rating > 0) {
    query = query.gte("rating", rating);
  }

  if (verified) {
    query = query.eq("verified", true);
  }

  switch (sort) {
    case "price_low":
      query = query.order("price_from", { ascending: true });
      break;

    case "price_high":
      query = query.order("starting_price", { ascending: false });
      break;

    case "rating":
      query = query.order("rating", { ascending: false });
      break;

    case "newest":
      query = query.order("created_at", { ascending: false });
      break;

    default:
      query = query
        .order("featured", { ascending: false })
        .order("rating", { ascending: false });
  }

  const { data, error, count } = await query.range(from, to);

  return {
    data: data || [],
    count: count || 0,
    error,
  };
};
/**
 * Fetch featured stays (limited)
 */
export const fetchFeaturedStays = async (limit = 6) => {
  try {
    const { data, error } = await supabase
      .from("stays")
      .select("*")
      .eq("active", true)
      .order("rating", { ascending: false })
      .order("review_count", { ascending: false })
      .limit(limit);

    if (error) {
      console.error("Error fetching featured stays:", error);
      return { data: [], error };
    }

    return {
      data: data || [],
      error: null,
    };
  } catch (error) {
    console.error(error);
    return {
      data: [],
      error,
    };
  }
};
/**
 * Fetch single stay by ID
 */
export const fetchStayById = async (id) => {
  try {
    const { data, error } = await supabase
      .from('stays')
      .select('*')
      .eq('id', id)
      .eq('active', true)
      .single();

    if (error) {
      console.error('Error fetching stay:', error);
      return { data: null, error };
    }

    return { data, error: null };
  } catch (error) {
    console.error('Unexpected error fetching stay:', error);
    return { data: null, error };
  }
};

/**
 * Fetch stay by slug
 */
export const fetchStayBySlug = async (slug) => {
  try {
    const { data, error } = await supabase
      .from('stays')
      .select('*')
      .eq('slug', slug)
      .eq('active', true)
      .single();

    if (error) {
      console.error('Error fetching stay by slug:', error);
      return { data: null, error };
    }

    // Also fetch rules from the normalized stay_rules table
    const { data: rulesData, error: rulesError } = await supabase
      .from('stay_rules')
      .select('rule_key, rule_label, rule_value')
      .eq('stay_id', data.id)
      .order('display_order', { ascending: true });

    if (!rulesError && rulesData?.length > 0) {
      data.rules_structured = rulesData;
    }

    // Also fetch nearby places from the normalized stay_nearby_places table
    const { data: nearbyData, error: nearbyError } = await supabase
      .from('stay_nearby_places')
      .select('place_name, place_type, distance_meters')
      .eq('stay_id', data.id)
      .order('distance_meters', { ascending: true });

    if (!nearbyError && nearbyData?.length > 0) {
      // Map DB fields (place_name, place_type, distance_meters) to what the component expects (name, type, distance)
      data.nearby_places = nearbyData.map((p) => ({
        name: p.place_name,
        type: p.place_type || 'Popular attraction',
        distance: p.distance_meters,
      }));
    }

    // Also fetch room types so we can derive a fallback starting price
    const { data: roomTypesData, error: roomTypesError } = await supabase
      .from('stay_room_types')
      .select('price_from')
      .eq('stay_id', data.id)
      .not('price_from', 'is', null)
      .order('price_from', { ascending: true })
      .limit(1);

    if (!roomTypesError && roomTypesData?.length > 0) {
      const minRoomPrice = Number(roomTypesData[0].price_from);
      if (
        minRoomPrice > 0 &&
        (!data.starting_price && !data.price_from)
      ) {
        data.starting_price = minRoomPrice;
      }
    }

    // Normalize alternate price column names/formats onto starting_price
    const rawPrice = data.starting_price || data.price_from || data.price || data.rate || data.cost || data.amount || data.price_per_night || data.min_price || data.base_price;
    if (!rawPrice) {
      // keep existing fallback to room-types minimum handled above
    } else {
      const parsed = Number(String(rawPrice).replace(/[^0-9.]/g, ''));
      if (parsed > 0) {
        data.starting_price = parsed;
      }
    }

    return { data, error: null };
  } catch (error) {
    console.error('Unexpected error fetching stay by slug:', error);
    return { data: null, error };
  }
};

/**
 * Fetch stays by locality (area)
 */
export const fetchStaysByLocality = async (locality, limit = 20) => {
  try {
    const { data, error } = await supabase
      .from('stays')
      .select('*')
      .eq('active', true)
      .eq('locality', locality)
      .order('featured', { ascending: false })
      .order('rating', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Error fetching stays by locality:', error);
      return { data: [], error };
    }

    return { data: data || [], error: null };
  } catch (error) {
    console.error('Unexpected error fetching stays by locality:', error);
    return { data: [], error };
  }
};

/**
 * Fetch stays by type
 */
export const fetchStaysByType = async (stayType, limit = 20) => {
  try {
    const { data, error } = await supabase
      .from('stays')
      .select('*')
      .eq('active', true)
      .eq('stay_type', stayType)
      .order('featured', { ascending: false })
      .order('rating', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Error fetching stays by type:', error);
      return { data: [], error };
    }

    return { data: data || [], error: null };
  } catch (error) {
    console.error('Unexpected error fetching stays by type:', error);
    return { data: [], error };
  }
};

/**
 * Get all unique localities for filter dropdown
 */
export const fetchAllLocalities = async () => {
  try {
    const { data, error } = await supabase
      .from('stays')
      .select('locality')
      .eq('active', true)
      .not('locality', 'is', null);

    if (error) {
      console.error('Error fetching localities:', error);
      return { data: [], error };
    }

    // Get unique localities
    const localities = [...new Set((data || []).map((item) => item.locality))];
    return { data: localities.sort(), error: null };
  } catch (error) {
    console.error('Unexpected error fetching localities:', error);
    return { data: [], error };
  }
};

/**
 * Get all unique stay types for filter dropdown
 */
export const fetchAllStayTypes = async () => {
  try {
    const { data, error } = await supabase
      .from('stays')
      .select('stay_type')
      .eq('active', true)
      .not('stay_type', 'is', null);

    if (error) {
      console.error('Error fetching stay types:', error);
      return { data: [], error };
    }

    // Get unique stay types
    const types = [...new Set((data || []).map((item) => item.stay_type))];
    return { data: types.sort(), error: null };
  } catch (error) {
    console.error('Unexpected error fetching stay types:', error);
    return { data: [], error };
  }
};

/**
 * Get stays statistics (for hero section)
 */
export const fetchStaysStats = async () => {
  try {
    const { data, error, count } = await supabase
      .from('stays')
      .select('rating, review_count', { count: 'exact' })
      .eq('active', true);

    if (error) {
      console.error('Error fetching stays stats:', error);
      return {
        totalStays: 0,
        averageRating: 0,
        totalReviews: 0,
        verifiedCount: 0,
        error,
      };
    }

    const stays = data || [];

    // Calculate average rating
    const totalRating = stays.reduce((sum, stay) => sum + (stay.rating || 0), 0);
    const averageRating =
      stays.length > 0 ? (totalRating / stays.length).toFixed(1) : 0;

    // Calculate total reviews
    const totalReviews = stays.reduce(
      (sum, stay) => sum + (stay.review_count || 0),
      0
    );

    // Get verified count
    const verifiedCount = await fetchVerifiedCount();

    return {
      totalStays: count || 0,
      averageRating: parseFloat(averageRating),
      totalReviews,
      verifiedCount,
      error: null,
    };
  } catch (error) {
    console.error('Unexpected error fetching stats:', error);
    return {
      totalStays: 0,
      averageRating: 0,
      totalReviews: 0,
      verifiedCount: 0,
      error,
    };
  }
};

/**
 * Get verified stays count
 */
export const fetchVerifiedCount = async () => {
  try {
    const { count, error } = await supabase
      .from('stays')
      .select('id', { count: 'exact' })
      .eq('active', true)
      .eq('verified', true);

    if (error) {
      console.error('Error fetching verified count:', error);
      return 0;
    }

    return count || 0;
  } catch (error) {
    console.error('Unexpected error fetching verified count:', error);
    return 0;
  }
};

/**
 * Search stays (fuzzy/full text search)
 */
export const searchStays = async (searchQuery, limit = 12) => {
  if (!searchQuery || searchQuery.trim().length === 0) {
    return { data: [], error: null };
  }

  try {
    const { data, error } = await supabase
      .from('stays')
      .select('*')
      .eq('active', true)
      .or(
        `name.ilike.%${searchQuery}%,short_description.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%,locality.ilike.%${searchQuery}%`
      )
      .order('featured', { ascending: false })
      .order('rating', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Error searching stays:', error);
      return { data: [], error };
    }

    return { data: data || [], error: null };
  } catch (error) {
    console.error('Unexpected error searching stays:', error);
    return { data: [], error };
  }
};

/**
 * Get price range stats
 */
export const fetchPriceStats = async () => {
  try {
    const { data, error } = await supabase
      .from('stays')
      .select('price_from, price_to')
      .eq('active', true)
      .not('price_from', 'is', null);

    if (error) {
      console.error('Error fetching price stats:', error);
      return { minPrice: 0, maxPrice: 10000, error };
    }

    const prices = (data || []).map((stay) => stay.price_from);
    const minPrice = Math.min(...prices.filter((p) => p));
    const maxPrice = Math.max(...prices.filter((p) => p));

    return {
      minPrice: minPrice || 0,
      maxPrice: maxPrice || 10000,
      error: null,
    };
  } catch (error) {
    console.error('Unexpected error fetching price stats:', error);
    return { minPrice: 0, maxPrice: 10000, error };
  }
};

/**
 * Batch fetch stays by IDs
 */
export const fetchStaysByIds = async (ids) => {
  if (!ids || ids.length === 0) {
    return { data: [], error: null };
  }

  try {
    const { data, error } = await supabase
      .from('stays')
      .select('*')
      .eq('active', true)
      .in('id', ids);

    if (error) {
      console.error('Error fetching stays by IDs:', error);
      return { data: [], error };
    }

    return { data: data || [], error: null };
  } catch (error) {
    console.error('Unexpected error fetching stays by IDs:', error);
    return { data: [], error };
  }
};

/**
 * Get recently added stays
 */
export const fetchRecentlyAddedStays = async (limit = 6) => {
  try {
    const { data, error } = await supabase
      .from('stays')
      .select('*')
      .eq('active', true)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Error fetching recently added:', error);
      return { data: [], error };
    }

    return { data: data || [], error: null };
  } catch (error) {
    console.error('Unexpected error fetching recently added:', error);
    return { data: [], error };
  }
};

/**
 * Subscribe to real-time changes on stays table
 */
export const subscribeToStaysChanges = (callback) => {
  const subscription = supabase
    .channel('public:stays')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'stays',
      },
      (payload) => {
        callback(payload);
      }
    )
    .subscribe();

  return subscription;
};

/**
 * Unsubscribe from changes
 */
export const unsubscribeFromStaysChanges = (subscription) => {
  if (subscription) {
    supabase.removeChannel(subscription);
  }
};
export const fetchSimilarStays = async (stay) => {
  const { data, error } = await supabase
    .from("stays")
    .select("*")
    .eq("stay_type", stay.stay_type)
    .eq("active", true)
    .neq("id", stay.id)
    .order("rating", { ascending: false })
    .order("featured", { ascending: false })
    .limit(3);

  return { data: data || [], error };
};

export const fetchHeroFilters = async () => {
  try {
    const [types, locations] = await Promise.all([
      fetchAllStayTypes(),
      fetchAllLocalities(),
    ]);

    return {
      stayTypes: types.data || [],
      locations: locations.data || [],
      error: null,
    };
  } catch (error) {
    return {
      stayTypes: [],
      locations: [],
      error,
    };
  }
};
export const fetchStayCountsByLocality = async () => {
  try {
    const { data, error } = await supabase
      .from("stays")
      .select("locality")
      .eq("active", true);

    if (error) {
      return { data: {}, error };
    }

    const counts = {};

    (data || []).forEach((item) => {
      if (!item.locality) return;
      counts[item.locality] = (counts[item.locality] || 0) + 1;
    });

    return { data: counts, error: null };
  } catch (error) {
    return { data: {}, error };
  }
};

export const fetchStayCountsByType = async () => {
  try {
    const { data, error } = await supabase
      .from("stays")
      .select("stay_type")
      .eq("active", true);

    if (error) {
      return { data: {}, error };
    }

    const counts = {};

    (data || []).forEach((item) => {
      if (!item.stay_type) return;
      counts[item.stay_type] = (counts[item.stay_type] || 0) + 1;
    });

    return { data: counts, error: null };
  } catch (error) {
    return { data: {}, error };
  }
};

/**
 * Fetch approved reviews for a stay, newest first.
 */
export const fetchStayReviews = async (stayId) => {
  try {
    const { data, error } = await supabase
      .from("stay_reviews")
      .select("*")
      .eq("stay_id", stayId)
      .eq("status", "approved")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching reviews:", error);
      return { data: [], error };
    }

    return { data: data || [], error: null };
  } catch (error) {
    console.error("Unexpected error fetching reviews:", error);
    return { data: [], error };
  }
};

/**
 * Submit a new review. It is inserted with status 'pending' for moderation.
 */
export const createStayReview = async (review) => {
  try {
    const { data, error } = await supabase
      .from("stay_reviews")
      .insert([
        {
          stay_id: review.stay_id,
          name: review.name,
          email: review.email || null,
          phone: review.phone || null,
          rating: review.rating,
          title: review.title || null,
          review: review.review,
          visit_date: review.visit_date || null,
          verified_stay: Boolean(review.verified_stay),
          status: "pending",
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Error submitting review:", error);
      return { data: null, error };
    }

    return { data, error: null };
  } catch (error) {
    console.error("Unexpected error submitting review:", error);
    return { data: null, error };
  }
};
