import {
  FiFilter,
  FiCheck,
  FiRotateCcw,
  FiStar,
  FiX,
} from "react-icons/fi";

import "./Filters.css";

const STAY_TYPES = [
  { label: "All", value: "all", count: 120 },
  { label: "Hotels", value: "Hotel", count: 74 },
  { label: "Dharamshala", value: "Dharamshala", count: 18 },
  { label: "Ashram", value: "Ashram", count: 12 },
  { label: "Guest House", value: "Guest House", count: 16 },
];

const RATINGS = [0, 5, 4, 3];

const Filters = ({
  filters,
  setFilters,
  isMobileOpen = false,
  onCloseMobile = () => {},
}) => {
  const activeFilters = [
    filters.search,
    filters.stayType !== "all",
    filters.rating > 0,
    filters.verified,
    filters.featured,
  ].filter(Boolean).length;

  const changeStayType = (stayType) => {
    setFilters((prev) => ({ ...prev, stayType, page: 1 }));
  };

  const changeRating = (rating) => {
    setFilters((prev) => ({ ...prev, rating, page: 1 }));
  };

  const toggleVerified = () => {
    setFilters((prev) => ({ ...prev, verified: !prev.verified, page: 1 }));
  };

  const toggleFeatured = () => {
    setFilters((prev) => ({ ...prev, featured: !prev.featured, page: 1 }));
  };

  const clearFilters = () => {
    setFilters((prev) => ({
      ...prev,
      search: "",
      stayType: "all",
      rating: 0,
      verified: false,
      featured: false,
      sort: "featured",
      page: 1,
    }));
  };

  const FiltersBody = (
    <>
      {/* Stay Type */}
      <div className="filter-group">
        <h4>Stay Type</h4>

        {STAY_TYPES.map((item) => (
          <div className="filter-option" key={item.value}>
            <div className="filter-option-left">
              <input
                type="radio"
                name="stayType"
                checked={filters.stayType === item.value}
                onChange={() => changeStayType(item.value)}
              />
              <label>{item.label}</label>
            </div>

            <span className="filter-count">{item.count}</span>
          </div>
        ))}
      </div>

      {/* Rating */}
      <div className="filter-group">
        <h4>Minimum Rating</h4>

        {RATINGS.map((rating) => (
          <div className="filter-option" key={rating}>
            <div className="filter-option-left">
              <input
                type="radio"
                name="rating"
                checked={filters.rating === rating}
                onChange={() => changeRating(rating)}
              />
              <label>
                {rating === 0 ? "Any Rating" : `${"⭐".repeat(rating)} ${rating}+`}
              </label>
            </div>
          </div>
        ))}
      </div>

      {/* Other */}
      <div className="filter-group">
        <h4>Other</h4>

        <div className="filter-checkbox">
          <input type="checkbox" checked={filters.verified} onChange={toggleVerified} />
          <FiCheck />
          <label>Verified Only</label>
        </div>

        <div className="filter-checkbox">
          <input type="checkbox" checked={filters.featured} onChange={toggleFeatured} />
          <FiStar />
          <label>Featured Only</label>
        </div>
      </div>

      {activeFilters > 0 && (
        <button className="apply-filter-btn" onClick={clearFilters}>
          <FiRotateCcw />
          Clear Filters
        </button>
      )}
    </>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <div className="filters">
        <div className="filters-header">
          <div className="filters-title">
            <FiFilter size={20} />
            <h3>Filters</h3>
          </div>

          <button className="reset-filter" onClick={clearFilters}>
            Reset
          </button>
        </div>

        {FiltersBody}
      </div>

      {/* Mobile bottom sheet, opened from HotelListing's mobile toolbar */}
      <div className={`filters-mobile-sheet ${isMobileOpen ? "open" : ""}`}>
        <div className="filters-sheet-header">
          <div className="filters-title">
            <FiFilter size={18} />
            <h3>Filters</h3>
          </div>

          <button
            type="button"
            className="filters-sheet-close"
            onClick={onCloseMobile}
            aria-label="Close filters"
          >
            <FiX size={20} />
          </button>
        </div>

        <div className="filters-sheet-body">{FiltersBody}</div>

        <div className="filters-sheet-footer">
          <button type="button" className="filters-sheet-reset" onClick={clearFilters}>
            Reset
          </button>

          <button
            type="button"
            className="filters-sheet-apply"
            onClick={onCloseMobile}
          >
            Show Results
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="filters-sheet-backdrop" onClick={onCloseMobile} />
      )}
    </>
  );
};

export default Filters;
