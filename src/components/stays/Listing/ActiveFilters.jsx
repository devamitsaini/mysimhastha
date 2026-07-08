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

    verified,
    setVerified,

    featured,
    setFeatured,
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