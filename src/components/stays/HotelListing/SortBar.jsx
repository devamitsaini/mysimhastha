import { FiChevronDown, FiCheck, FiX } from "react-icons/fi";

import "./SortBar.css";

export const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "rating", label: "Highest Rated" },
  { value: "price_low", label: "Price: Low → High" },
  { value: "price_high", label: "Price: High → Low" },
  { value: "distance", label: "Nearest Mahakal" },
  { value: "newest", label: "Newest" },
];

const SortBar = ({
  filters,
  setFilters,
  isMobileOpen = false,
  onCloseMobile = () => {},
}) => {
  const changeSort = (value) => {
    setFilters((prev) => ({
      ...prev,
      sort: value,
      page: 1,
    }));
  };

  return (
    <>
      {/* Desktop / tablet inline sort bar */}
      <div className="sort-bar">
        <div className="sort-result">
          <strong>Sort By</strong>
        </div>

        <div className="sort-select">
          <FiChevronDown className="sort-icon" />

          <select value={filters.sort} onChange={(e) => changeSort(e.target.value)}>
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Mobile bottom sheet, opened from HotelListing's mobile toolbar */}
      <div className={`sort-mobile-sheet ${isMobileOpen ? "open" : ""}`}>
        <div className="sort-sheet-header">
          <strong>Sort By</strong>
          <button
            type="button"
            className="sort-sheet-close"
            onClick={onCloseMobile}
            aria-label="Close sort options"
          >
            <FiX size={20} />
          </button>
        </div>

        <div className="sort-sheet-options">
          {SORT_OPTIONS.map((opt) => (
            <button
              type="button"
              key={opt.value}
              className={`sort-sheet-option ${
                filters.sort === opt.value ? "active" : ""
              }`}
              onClick={() => {
                changeSort(opt.value);
                onCloseMobile();
              }}
            >
              <span>{opt.label}</span>
              {filters.sort === opt.value && <FiCheck size={18} />}
            </button>
          ))}
        </div>
      </div>

      {isMobileOpen && (
        <div className="sort-sheet-backdrop" onClick={onCloseMobile} />
      )}
    </>
  );
};

export default SortBar;
