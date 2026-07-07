import { MAHAKAL_TEMPLE } from './staysConstants';

/**
 * Format price in Indian Rupees
 */
export const formatPrice = (price) => {
  if (!price && price !== 0) return '—';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

/**
 * Format price range with from-to
 */
export const formatPriceRange = (priceFrom, priceTo) => {
  if (!priceFrom && !priceTo) return 'Price on request';
  if (priceFrom && !priceTo) return `${formatPrice(priceFrom)}+`;
  if (!priceFrom && priceTo) return `Upto ${formatPrice(priceTo)}`;
  return `${formatPrice(priceFrom)} - ${formatPrice(priceTo)}`;
};

/**
 * Calculate distance between two coordinates in km
 * Using Haversine formula
 */
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance.toFixed(1);
};

/**
 * Calculate distance from stay to Mahakal Temple
 */
export const getDistanceToMahakal = (latitude, longitude) => {
  if (!latitude || !longitude) return null;
  return calculateDistance(
    latitude,
    longitude,
    MAHAKAL_TEMPLE.latitude,
    MAHAKAL_TEMPLE.longitude
  );
};

/**
 * Estimate travel time based on distance (in minutes)
 * Assumes average speed of 20-25 km/h in city traffic
 */
export const estimateTravelTime = (distance) => {
  if (!distance) return null;
  const minutes = Math.ceil((distance / 0.4) * 1); // ~2.4 min per km
  return minutes;
};

/**
 * Format travel time for display
 */
export const formatTravelTime = (minutes) => {
  if (!minutes) return '';
  if (minutes < 1) return '<1 min';
  if (minutes === 1) return '1 min';
  return `${minutes} min`;
};

/**
 * Format distance with unit
 */
export const formatDistance = (km) => {
  if (!km) return '—';
  if (km < 1) return '<1 km';
  return `${km} km`;
};

/**
 * Get distance badge text (distance + travel time)
 */
export const getDistanceBadgeText = (latitude, longitude) => {
  const distance = getDistanceToMahakal(latitude, longitude);
  if (!distance) return null;
  const travelTime = estimateTravelTime(distance);
  return `${formatDistance(distance)} • ${formatTravelTime(travelTime)}`;
};

/**
 * Format rating with stars
 */
export const formatRating = (rating) => {
  if (!rating) return 'No ratings';
  return `${rating} / 5`;
};

/**
 * Generate star fill percentage for visual rating
 */
export const getStarPercentage = (rating) => {
  if (!rating) return 0;
  return (rating / 5) * 100;
};

/**
 * Format review count
 */
export const formatReviewCount = (count) => {
  if (!count) return 'No reviews';
  if (count === 1) return '1 review';
  return `${count} reviews`;
};

/**
 * Truncate text to word boundary
 */
export const truncateText = (text, maxChars = 150) => {
  if (!text || text.length <= maxChars) return text;
  const truncated = text.substring(0, maxChars);
  const lastSpace = truncated.lastIndexOf(' ');
  return truncated.substring(0, lastSpace) + '...';
};

/**
 * Generate slug from name
 */
export const generateSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

/**
 * Extract domain from URL
 */
export const extractDomain = (url) => {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.replace('www.', '');
  } catch {
    return null;
  }
};

/**
 * Format phone number for Indian format
 */
export const formatPhoneNumber = (phone) => {
  if (!phone) return null;
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10) {
    return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
  }
  return phone;
};

/**
 * Check if stay matches search query
 */
export const matchesSearchQuery = (stay, query) => {
  if (!query) return true;
  const lowerQuery = query.toLowerCase();
  return (
    stay.name.toLowerCase().includes(lowerQuery) ||
    stay.description?.toLowerCase().includes(lowerQuery) ||
    stay.short_description?.toLowerCase().includes(lowerQuery) ||
    stay.locality?.toLowerCase().includes(lowerQuery) ||
    stay.stay_type?.toLowerCase().includes(lowerQuery)
  );
};

/**
 * Filter stays by criteria
 */
export const filterStays = (stays, filters) => {
  return stays.filter((stay) => {
    // Search query
    if (!matchesSearchQuery(stay, filters.searchQuery)) return false;

    // Stay type
    if (filters.stayType && stay.stay_type !== filters.stayType) return false;

    // Area/locality
    if (filters.area && stay.locality !== filters.area) return false;

    // Price range
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      const stayPrice = stay.price_from || 0;
      if (stayPrice < min || stayPrice > max) return false;
    }

    // Rating
    if (filters.rating > 0 && (!stay.rating || stay.rating < filters.rating)) {
      return false;
    }

    // Verified only
    if (filters.verified && !stay.verified) return false;

    // Featured only
    if (filters.featured && !stay.featured) return false;

    return true;
  });
};

/**
 * Sort stays by criteria
 */
export const sortStays = (stays, sortBy) => {
  const sorted = [...stays];

  switch (sortBy) {
    case 'rating':
      return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));

    case 'price_low':
      return sorted.sort((a, b) => (a.price_from || 0) - (b.price_from || 0));

    case 'reviews':
      return sorted.sort(
        (a, b) => (b.review_count || 0) - (a.review_count || 0)
      );

    case 'verified':
      return sorted.sort((a, b) => (b.verified ? 1 : 0) - (a.verified ? 1 : 0));

    case 'recommended':
    default:
      // Recommended: featured first, then verified, then high rating, then review count
      return sorted.sort((a, b) => {
        if (a.featured !== b.featured) return b.featured ? 1 : -1;
        if (a.verified !== b.verified) return b.verified ? 1 : -1;
        const ratingDiff = (b.rating || 0) - (a.rating || 0);
        if (ratingDiff !== 0) return ratingDiff;
        return (b.review_count || 0) - (a.review_count || 0);
      });
  }
};

/**
 * Format date for metadata
 */
export const formatDateISO = (date) => {
  if (!date) return new Date().toISOString();
  return new Date(date).toISOString();
};

/**
 * Get initials from name
 */
export const getInitials = (name) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

/**
 * Determine if element is in viewport
 */
export const isInViewport = (element) => {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom > 0 &&
    rect.left < window.innerWidth &&
    rect.right > 0
  );
};

/**
 * Debounce function for search
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Lazy load image with fallback
 */
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Get image alt text
 */
export const getImageAltText = (stay, imageType = 'featured') => {
  if (imageType === 'featured') {
    return `${stay.name} - ${stay.stay_type} in ${stay.locality}, Ujjain`;
  }
  return `${stay.name} accommodation image`;
};

/**
 * Build Google Maps URL
 */
export const buildGoogleMapsUrl = (latitude, longitude, name) => {
  if (!latitude || !longitude) return null;
  return `https://maps.google.com/?q=${latitude},${longitude}`;
};

/**
 * Build WhatsApp URL for booking
 */
export const buildWhatsAppUrl = (phone, stayName) => {
  if (!phone) return null;
  const message = `Hello! I'm interested in booking at ${stayName}. Please provide availability and rates.`;
  const cleanPhone = phone.replace(/\D/g, '');
  return `https://wa.me/91${cleanPhone.slice(-10)}?text=${encodeURIComponent(message)}`;
};

/**
 * Get stay type icon name
 */
export const getStayTypeIcon = (stayType) => {
  const iconMap = {
    Hotel: 'Building2',
    Dharamshala: 'Home',
    Ashram: 'Scroll',
    'Guest House': 'House',
    Homestay: 'Users',
  };
  return iconMap[stayType] || 'MapPin';
};

/**
 * Check if stay is near Mahakal (within 2km)
 */
export const isNearMahakal = (latitude, longitude) => {
  const distance = getDistanceToMahakal(latitude, longitude);
  return distance && parseFloat(distance) <= 2;
};

/**
 * Get badge text for stay
 */
export const getStayBadges = (stay) => {
  const badges = [];
  if (stay.verified) badges.push({ text: 'Verified', type: 'verified' });
  if (stay.featured) badges.push({ text: 'Featured', type: 'featured' });
  if (isNearMahakal(stay.latitude, stay.longitude)) {
    badges.push({ text: 'Near Mahakal', type: 'location' });
  }
  return badges;
};

/**
 * Sanitize HTML string for display
 */
export const sanitizeHtml = (html) => {
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
};

/**
 * Generate metadata for social sharing
 */
export const generateShareMetadata = (stay) => {
  return {
    title: `${stay.name} - ${stay.stay_type} in Ujjain`,
    description: stay.short_description || stay.description,
    image: stay.featured_image || stay.image,
    url: `https://www.mysimhastha.com/stays/${stay.slug}`,
  };
};

/**
 * Check if browser supports feature
 */
export const supportsFeature = (feature) => {
  const features = {
    intersectionObserver: 'IntersectionObserver' in window,
    lazyLoading: 'loading' in HTMLImageElement.prototype,
    webP: false, // Check via canvas if needed
  };
  return features[feature] || false;
};

/**
 * Generate tracking ID for analytics
 */
export const generateTrackingId = (stayId) => {
  return `stay_${stayId}_${Date.now()}`;
};
