import { FiX } from "react-icons/fi";

import { useStayFilters } from "../../../context/StayFiltersContext";

import "./ActiveFilters.css";

export default function ActiveFilters() {

  const {
    search,
    setSearch,

    stayType,
    setStayType,

    priceMin,
    priceMax,
    setPriceMin,
    setPriceMax,

    rating,
    setRating,

    verified,
    setVerified,

    featured,
    setFeatured,

    location,
    setLocation,

    budget,
    setBudget,
  } = useStayFilters();

  const chips = [];

  if (search) {
    chips.push({
      label: search,
      remove: () => setSearch(""),
    });
  }

  if (stayType !== "all") {
    chips.push({
      label: stayType,
      remove: () => setStayType("all"),
    });
  }

  if (priceMax > 0) {
    chips.push({
      label: `₹${priceMin} - ₹${priceMax}`,
      remove: () => {
        setPriceMin(0);
        setPriceMax(0);
      },
    });
  }

  if (priceMin >= 5000 && priceMax === 0) {
    chips.push({
      label: "₹5000+",
      remove: () => {
        setPriceMin(0);
        setPriceMax(0);
      },
    });
  }

  if (verified) {
    chips.push({
      label: "Verified",
      remove: () => setVerified(false),
    });
  }

  if (featured) {
    chips.push({
      label: "Featured",
      remove: () => setFeatured(false),
    });
  }

  if (rating > 0) {
    chips.push({
      label: `${rating}+ Stars`,
      remove: () => setRating(0),
    });
  }

  if (location) {
    chips.push({
      label: location,
      remove: () => setLocation(""),
    });
  }

  if (budget) {
    const budgetLabels = {
      "0-1000": "Below ₹1000",
      "1000-2000": "₹1000 – ₹2000",
      "2000-5000": "₹2000 – ₹5000",
      "5000+": "₹5000+"
    };
    chips.push({
      label: budgetLabels[budget] || budget,
      remove: () => setBudget(""),
    });
  }

  if (chips.length === 0) return null;

  return (

    <div className="active-filters">

      {chips.map((chip, index) => (

        <button
          key={index}
          className="filter-chip"
          onClick={chip.remove}
        >

          {chip.label}

          <FiX />

        </button>

      ))}

    </div>

  );

}