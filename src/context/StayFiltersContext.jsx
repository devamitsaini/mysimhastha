import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

import {
  useSearchParams,
} from "react-router-dom";

import { fetchAllStays } from "../services/staysService";

const StayFiltersContext = createContext();

export function StayFiltersProvider({ children }) {

  const [searchParams, setSearchParams] = useSearchParams();
  const [stays, setStays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  const [search, setSearch] = useState(
  searchParams.get("search") || ""
);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [stayType, setStayType] = useState(
  searchParams.get("type") || "all"
);

  const [priceMin, setPriceMin] = useState(
  Number(searchParams.get("min")) || 0
);
  const [priceMax, setPriceMax] = useState(
  Number(searchParams.get("max")) || 0
);

  const [rating, setRating] = useState(0);

  const [verified, setVerified] = useState(false);

  const [featured, setFeatured] = useState(false);

  const [sort, setSort] = useState(
  searchParams.get("sort") || "featured"
);

  const [page, setPage] = useState(1);

  /* ==========================
   USER LOCATION
========================== */

const [userLocation, setUserLocation] = useState(null);

/* ==========================
   HAVERSINE DISTANCE
========================== */

function getDistance(lat1, lon1, lat2, lon2) {

  const R = 6371;

  const dLat = (lat2 - lat1) * Math.PI / 180;

  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  return R * 2 * Math.atan2(
    Math.sqrt(a),
    Math.sqrt(1 - a)
  );

}

/* ==========================
   FIND NEARBY HOTELS
========================== */

const findNearbyHotels = useCallback(() => {

  if (!navigator.geolocation) {

    alert("Geolocation is not supported.");

    return;

  }

  navigator.geolocation.getCurrentPosition(

    ({ coords }) => {

      setUserLocation({

        latitude: coords.latitude,

        longitude: coords.longitude,

      });

    },

    () => {

      alert("Please allow location access to use Near Me.");

    },

    {

      enableHighAccuracy: true,

      timeout: 10000,

      maximumAge: 0,

    }

  );

}, []);

  /* ==========================
     Debounce Search
  ========================== */

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  /* Reload when location changes */

useEffect(() => {

  if (userLocation) {

    loadStays();

  }

}, [userLocation]);

  useEffect(() => {

  const params = {};

  if (search) params.search = search;

  if (stayType !== "all")
    params.type = stayType;

  if (priceMin)
    params.min = priceMin;

  if (priceMax)
    params.max = priceMax;

  if (sort !== "featured")
    params.sort = sort;

  setSearchParams(params);

}, [
  search,
  stayType,
  priceMin,
  priceMax,
  sort,
  setSearchParams,
]);
  /* ==========================
     Load Stays
  ========================== */

  async function loadStays() {
    setLoading(true);

    try {
      const { data, count } = await fetchAllStays({
  page,
  limit: 20,
  search: debouncedSearch,
  stayType,
  priceMin,
  priceMax,
  rating,
  verified,
  featured,
  sort,
});

let updatedStays = data || [];

/* ==========================
   NEAR ME SORTING
========================== */

if (userLocation) {

  updatedStays = updatedStays.map((stay) => {

    console.log(stay.name, stay.latitude, stay.longitude);
    
    if (!stay.latitude || !stay.longitude) {

      return {
        ...stay,
        distance: Number.MAX_SAFE_INTEGER,
      };

    }

    const distance = getDistance(
      userLocation.latitude,
      userLocation.longitude,
      Number(stay.latitude),
      Number(stay.longitude)
    );

    return {
      ...stay,
      distance,
    };

  });

  updatedStays.sort(
    (a, b) => a.distance - b.distance
  );

}

setStays(updatedStays);

setCount(count || 0);
    } catch (error) {
      console.error("Error loading stays:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadStays();
  }, [
  debouncedSearch,
  stayType,
  priceMin,
  priceMax,
  rating,
  verified,
  featured,
  sort,
  page,
  userLocation,
]);

  /* ==========================
     Clear Filters
  ========================== */

  function clearFilters() {
    setSearch("");
    setStayType("all");
    setPriceMin(0);
    setPriceMax(0);
    setRating(0);
    setVerified(false);
    setFeatured(false);
    setSort("featured");
    setPage(1);
  }

  return (
    <StayFiltersContext.Provider
      value={{
        stays,
        loading,
        count,

        search,
        setSearch,

        stayType,
        setStayType,

        priceMin,
        setPriceMin,

        priceMax,
        setPriceMax,

        rating,
        setRating,

        verified,
        setVerified,

        featured,
        setFeatured,

        sort,
        setSort,

        page,
        setPage,

        userLocation,
        findNearbyHotels,

        clearFilters,

        refresh: loadStays,
      }}
    >
      {children}
    </StayFiltersContext.Provider>
  );
}

export function useStayFilters() {
  return useContext(StayFiltersContext);
}