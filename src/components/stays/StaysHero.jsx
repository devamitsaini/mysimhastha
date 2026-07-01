import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useStaysStats } from "../../hooks/useStays";

/**
 * Hero Section Component
 * Displays welcome message, search box, and key statistics
 */
const StaysHero = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { stats, loading, error } = useStaysStats();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <section className="stays-hero" aria-labelledby="hero-title">
      <div className="stays-hero-bg" aria-hidden="true" />

      <div className="stays-hero-content">
        {/* Main Title */}
        <h1 id="hero-title" className="stays-hero-title">
          Find Your Perfect Stay in Ujjain
        </h1>

        {/* Subtitle */}
        <p className="stays-hero-subtitle">
          Discover verified hotels, dharamshalas, ashrams and guest houses near
          Mahakaleshwar Temple and major pilgrimage sites.
        </p>

        {/* Search Box */}
        <form className="stays-hero-search" onSubmit={handleSearch}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <Search
              size={20}
              style={{
                color: '#7A5D4F',
                position: 'absolute',
                marginLeft: '8px',
                pointerEvents: 'none',
              }}
            />
            <input
              type="text"
              placeholder="Search hotels, dharamshalas, ashrams..."
              value={searchQuery}
              onChange={handleInputChange}
              aria-label="Search accommodation in Ujjain"
              style={{ paddingLeft: '36px' }}
            />
          </div>
          <button
            type="submit"
            className="stays-hero-search-btn"
            aria-label="Search"
          >
            Search
          </button>
        </form>

        {/* Statistics */}
        {!loading && (
          <div className="stays-hero-stats">
            <div className="stays-hero-stat">
              <div className="stays-hero-stat-value">
                {stats.totalStays || 0}+
              </div>
              <div className="stays-hero-stat-label">Verified Stays</div>
            </div>

            <div className="stays-hero-stat">
              <div className="stays-hero-stat-value">
                {stats.averageRating || 0}
              </div>
              <div className="stays-hero-stat-label">Average Rating</div>
            </div>

            <div className="stays-hero-stat">
              <div className="stays-hero-stat-value">
                {stats.verifiedCount || 0}
              </div>
              <div className="stays-hero-stat-label">Verified Properties</div>
            </div>

            <div className="stays-hero-stat">
              <div className="stays-hero-stat-value">
                Budget to Luxury
              </div>
              <div className="stays-hero-stat-label">Price Range</div>
            </div>
          </div>
        )}

        {error && (
          <div
            style={{
              marginTop: '24px',
              padding: '12px 16px',
              background: 'rgba(198, 40, 40, 0.1)',
              color: '#C62828',
              borderRadius: '8px',
              fontSize: '14px',
            }}
          >
            Unable to load statistics at this moment
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(StaysHero);
