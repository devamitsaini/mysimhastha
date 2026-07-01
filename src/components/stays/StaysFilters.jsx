import React, { useState, useEffect } from 'react';
import { ChevronDown, X } from 'lucide-react';
import {
  STAY_TYPE_OPTIONS,
  RATING_RANGES,
  PRICE_RANGES,
  POPULAR_AREAS,
} from "../../utils/staysConstants";

import { useFilterOptions } from "../../hooks/useStays";

/**
 * Filters Sidebar Component
 * Manages filtering by stay type, location, price, rating, and verification status
 */
const StaysFilters = ({
  filters,
  onFilterChange,
  onResetFilters,
  isLoading = false,
}) => {
  const { localities, stayTypes } = useFilterOptions();
  const [expandedSections, setExpandedSections] = useState({
    type: true,
    area: true,
    price: true,
    rating: false,
    verified: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleStayTypeChange = (type) => {
    onFilterChange({
      stayType: filters.stayType === type ? '' : type,
    });
  };

  const handleAreaChange = (area) => {
    onFilterChange({
      area: filters.area === area ? '' : area,
    });
  };

  const handlePriceChange = (range) => {
    const currentRange = filters.priceRange;
    const isSame =
      currentRange &&
      currentRange[0] === range[0] &&
      currentRange[1] === range[1];

    onFilterChange({
      priceRange: isSame ? null : range,
    });
  };

  const handleRatingChange = (rating) => {
    onFilterChange({
      rating: filters.rating === rating ? 0 : rating,
    });
  };

  const handleVerifiedChange = () => {
    onFilterChange({
      verified: !filters.verified,
    });
  };

  const handleFeaturedChange = () => {
    onFilterChange({
      featured: !filters.featured,
    });
  };

  // Check if any filters are active
  const hasActiveFilters =
    filters.stayType ||
    filters.area ||
    filters.priceRange ||
    filters.rating > 0 ||
    filters.verified ||
    filters.featured;

  return (
    <aside className="stays-sidebar" role="complementary" aria-label="Filters">
      {/* Reset Filters Button */}
      {hasActiveFilters && (
        <button
          className="stays-filter-reset"
          onClick={onResetFilters}
          aria-label="Reset all filters"
        >
          Reset Filters
        </button>
      )}

      {/* Stay Type Filter */}
      <div className="stays-filter-group">
        <button
          className="stays-filter-title"
          onClick={() => toggleSection('type')}
          aria-expanded={expandedSections.type}
          aria-controls="filter-type"
        >
          <span>Type of Stay</span>
          <ChevronDown
            size={18}
            style={{
              transform: expandedSections.type ? 'rotate(180deg)' : 'none',
              transition: 'transform 300ms ease-out',
            }}
          />
        </button>

        {expandedSections.type && (
          <div id="filter-type" role="group" aria-label="Stay type options">
            {STAY_TYPE_OPTIONS.map((option) => (
              <label
                key={option.value}
                className="stays-filter-option"
                htmlFor={`type-${option.value}`}
              >
                <input
                  id={`type-${option.value}`}
                  type="checkbox"
                  checked={filters.stayType === option.value}
                  onChange={() => handleStayTypeChange(option.value)}
                  disabled={isLoading}
                  aria-label={option.label}
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Area Filter */}
      <div className="stays-filter-group">
        <button
          className="stays-filter-title"
          onClick={() => toggleSection('area')}
          aria-expanded={expandedSections.area}
          aria-controls="filter-area"
        >
          <span>Area / Locality</span>
          <ChevronDown
            size={18}
            style={{
              transform: expandedSections.area ? 'rotate(180deg)' : 'none',
              transition: 'transform 300ms ease-out',
            }}
          />
        </button>

        {expandedSections.area && (
          <div id="filter-area" role="group" aria-label="Area options">
            {(localities.length > 0 ? localities : POPULAR_AREAS).map(
              (area) => (
                <label
                  key={area}
                  className="stays-filter-option"
                  htmlFor={`area-${area}`}
                >
                  <input
                    id={`area-${area}`}
                    type="checkbox"
                    checked={filters.area === area}
                    onChange={() => handleAreaChange(area)}
                    disabled={isLoading}
                    aria-label={area}
                  />
                  <span>{area}</span>
                </label>
              )
            )}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="stays-filter-group">
        <button
          className="stays-filter-title"
          onClick={() => toggleSection('price')}
          aria-expanded={expandedSections.price}
          aria-controls="filter-price"
        >
          <span>Price Range</span>
          <ChevronDown
            size={18}
            style={{
              transform: expandedSections.price ? 'rotate(180deg)' : 'none',
              transition: 'transform 300ms ease-out',
            }}
          />
        </button>

        {expandedSections.price && (
          <div id="filter-price" role="group" aria-label="Price range options">
            {PRICE_RANGES.map((range) => (
              <label
                key={range.value.join('-')}
                className="stays-filter-option"
                htmlFor={`price-${range.value.join('-')}`}
              >
                <input
                  id={`price-${range.value.join('-')}`}
                  type="checkbox"
                  checked={
                    filters.priceRange &&
                    filters.priceRange[0] === range.min &&
                    filters.priceRange[1] === range.max
                  }
                  onChange={() => handlePriceChange([range.min, range.max])}
                  disabled={isLoading}
                  aria-label={range.label}
                />
                <span>{range.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Rating Filter */}
      <div className="stays-filter-group">
        <button
          className="stays-filter-title"
          onClick={() => toggleSection('rating')}
          aria-expanded={expandedSections.rating}
          aria-controls="filter-rating"
        >
          <span>Minimum Rating</span>
          <ChevronDown
            size={18}
            style={{
              transform: expandedSections.rating ? 'rotate(180deg)' : 'none',
              transition: 'transform 300ms ease-out',
            }}
          />
        </button>

        {expandedSections.rating && (
          <div id="filter-rating" role="group" aria-label="Rating options">
            {RATING_RANGES.map((range) => (
              <label
                key={range.value}
                className="stays-filter-option"
                htmlFor={`rating-${range.value}`}
              >
                <input
                  id={`rating-${range.value}`}
                  type="checkbox"
                  checked={filters.rating === range.value}
                  onChange={() => handleRatingChange(range.value)}
                  disabled={isLoading}
                  aria-label={`${range.label} rating`}
                />
                <span>{range.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Verification Filter */}
      <div className="stays-filter-group">
        <label
          className="stays-filter-option"
          htmlFor="verified-checkbox"
          style={{ padding: '12px 0' }}
        >
          <input
            id="verified-checkbox"
            type="checkbox"
            checked={filters.verified}
            onChange={handleVerifiedChange}
            disabled={isLoading}
            aria-label="Show only verified properties"
          />
          <span style={{ fontWeight: 600 }}>Verified Only</span>
        </label>
      </div>

      {/* Featured Filter */}
      <div className="stays-filter-group">
        <label
          className="stays-filter-option"
          htmlFor="featured-checkbox"
          style={{ padding: '12px 0' }}
        >
          <input
            id="featured-checkbox"
            type="checkbox"
            checked={filters.featured}
            onChange={handleFeaturedChange}
            disabled={isLoading}
            aria-label="Show only featured properties"
          />
          <span style={{ fontWeight: 600 }}>Featured Only</span>
        </label>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div
          className="stays-filter-group"
          style={{
            background: 'rgba(212, 82, 10, 0.05)',
            borderLeft: '4px solid #D4520A',
          }}
        >
          <p
            style={{
              fontSize: '12px',
              color: '#7A5D4F',
              marginBottom: '8px',
              fontWeight: 600,
            }}
          >
            Active Filters:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {filters.stayType && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 8px',
                  background: 'rgba(212, 82, 10, 0.1)',
                  borderRadius: '4px',
                  fontSize: '12px',
                }}
              >
                {filters.stayType}
                <X size={12} style={{ cursor: 'pointer' }} />
              </span>
            )}
            {filters.area && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 8px',
                  background: 'rgba(212, 82, 10, 0.1)',
                  borderRadius: '4px',
                  fontSize: '12px',
                }}
              >
                {filters.area}
                <X size={12} style={{ cursor: 'pointer' }} />
              </span>
            )}
            {filters.verified && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 8px',
                  background: 'rgba(46, 125, 50, 0.1)',
                  borderRadius: '4px',
                  fontSize: '12px',
                }}
              >
                Verified
                <X size={12} style={{ cursor: 'pointer' }} />
              </span>
            )}
          </div>
        </div>
      )}
    </aside>
  );
};

export default React.memo(StaysFilters);
