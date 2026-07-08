import { useState } from "react";
import ListingHeader from "../../components/stays/Listing/ListingHeader";
import FiltersSidebar from "../../components/stays/Listing/FiltersSidebar";
import PropertyList from "../../components/stays/Listing/PropertyList";
import { StayFiltersProvider } from "../../context/StayFiltersContext";

import "./StayListingPage.css";

export default function StayListingPage() {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showMobileSort, setShowMobileSort] = useState(false);

  return (
    <StayFiltersProvider>

<div className="stay-list-page">

      <ListingHeader 
        onOpenFilters={() => setShowMobileFilters(true)}
        onOpenSort={() => setShowMobileSort(true)}
      />

      <div className="stay-container">

        <div className="listing-layout">

          {/* Left Sidebar - Desktop */}
          <FiltersSidebar />

          {/* Right Content */}
          <PropertyList />

        </div>

      </div>

      {/* Mobile Filters Bottom Sheet */}
      {showMobileFilters && (
        <div className="mobile-filters-overlay" onClick={() => setShowMobileFilters(false)}>
          <div className="mobile-filters-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-filters-header">
              <h3>Filters</h3>
              <button onClick={() => setShowMobileFilters(false)}>✕</button>
            </div>
            <div className="mobile-filters-content">
              <FiltersSidebar />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Sort Bottom Sheet */}
      {showMobileSort && (
        <div className="mobile-filters-overlay" onClick={() => setShowMobileSort(false)}>
          <div className="mobile-filters-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-filters-header">
              <h3>Sort By</h3>
              <button onClick={() => setShowMobileSort(false)}>✕</button>
            </div>
            <div className="mobile-filters-content">
              <SortOptions onClose={() => setShowMobileSort(false)} />
            </div>
          </div>
        </div>
      )}

    </div>

</StayFiltersProvider>
  );
}

// Sort Options Component for Mobile
function SortOptions({ onClose }) {
  const { sort, setSort } = require("../../context/StayFiltersContext").useStayFilters();

  const options = [
    { value: "featured", label: "Recommended" },
    { value: "price_low", label: "Price: Low to High" },
    { value: "price_high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
    { value: "newest", label: "Newest" },
  ];

  return (
    <div className="sort-options">
      {options.map((option) => (
        <label key={option.value} className="sort-option">
          <input
            type="radio"
            name="sort"
            value={option.value}
            checked={sort === option.value}
            onChange={(e) => {
              setSort(e.target.value);
              onClose();
            }}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
}
