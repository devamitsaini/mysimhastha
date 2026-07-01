import { useState } from "react";
import { FiSliders, FiFilter, FiShield, FiAward } from "react-icons/fi";

import SearchBar from "../SearchBar";
import Filters from "./Filters";
import SortBar from "./SortBar";
import StayGrid from "./StayGrid";
import Pagination from "./Pagination";

import "./HotelListing.css";

const HotelListing = ({ filters, setFilters }) => {
  const [total, setTotal] = useState(0);

  // null | "sort" | "filter" — which mobile bottom sheet is open
  const [mobilePanel, setMobilePanel] = useState(null);

  const activeFilterCount = [
    filters.search,
    filters.stayType !== "all",
    filters.rating > 0,
    filters.verified,
    filters.featured,
  ].filter(Boolean).length;

  const toggleQuickFilter = (key) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key], page: 1 }));
  };

  return (
    <section className="hotel-listing">
      <div className="container">
        <SearchBar filters={filters} setFilters={setFilters} />
      </div>

      {/* Mobile-only chip row — MakeMyTrip style, sits right under the search bar */}
      <div className="mobile-chip-row">
        <button
          type="button"
          className={`chip ${mobilePanel === "sort" ? "active" : ""}`}
          onClick={() => setMobilePanel(mobilePanel === "sort" ? null : "sort")}
        >
          <FiSliders size={14} />
          Sort
        </button>

        <button
          type="button"
          className={`chip ${mobilePanel === "filter" ? "active" : ""}`}
          onClick={() => setMobilePanel(mobilePanel === "filter" ? null : "filter")}
        >
          <FiFilter size={14} />
          All Filters
          {activeFilterCount > 0 && (
            <span className="chip-badge">{activeFilterCount}</span>
          )}
        </button>

        <button
          type="button"
          className={`chip ${filters.verified ? "chip-toggled" : ""}`}
          onClick={() => toggleQuickFilter("verified")}
        >
          <FiShield size={14} />
          Verified
        </button>

        <button
          type="button"
          className={`chip ${filters.featured ? "chip-toggled" : ""}`}
          onClick={() => toggleQuickFilter("featured")}
        >
          <FiAward size={14} />
          Featured
        </button>
      </div>

      <div className="container hotel-layout">
        <aside className="filters-sidebar">
          <Filters
            filters={filters}
            setFilters={setFilters}
            isMobileOpen={mobilePanel === "filter"}
            onCloseMobile={() => setMobilePanel(null)}
          />
        </aside>

        <main className="listing-content">
          <SortBar
            filters={filters}
            setFilters={setFilters}
            isMobileOpen={mobilePanel === "sort"}
            onCloseMobile={() => setMobilePanel(null)}
          />

          <div className="stay-grid-header">
            <h3>
              {total} {total === 1 ? "Stay" : "Stays"} Found
            </h3>
          </div>

          <StayGrid filters={filters} setTotal={setTotal} />

          <Pagination filters={filters} setFilters={setFilters} total={total} />
        </main>
      </div>
    </section>
  );
};

export default HotelListing;
