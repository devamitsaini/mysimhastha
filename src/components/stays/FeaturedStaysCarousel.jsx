import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import StayCard from './StayCard';
import { useFeaturedStays, useFavorites } from '../../hooks/useStays';
/**
 * Featured Stays Carousel Component
 * Displays a horizontal scrolling carousel of featured properties
 */
const FeaturedStaysCarousel = ({ onViewDetails }) => {
  const { stays, loading, error } = useFeaturedStays(6);
  const { isFavorite, toggleFavorite } = useFavorites();
  const carouselRef = React.useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 320; // Card width + gap
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if (error) {
    return null;
  }

  if (loading || stays.length === 0) {
    return null;
  }

  return (
    <section className="stays-featured" aria-labelledby="featured-title">
      <div className="stays-featured-container">
        <div className="stays-featured-header">
          <h2 id="featured-title" className="stays-featured-title">
            Featured Stays
          </h2>
          <p className="stays-featured-subtitle">
            Handpicked premium properties near Mahakaleshwar Temple
          </p>
        </div>

        {/* Carousel Container */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'stretch',
            gap: '16px',
          }}
        >
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll('left')}
            className="stays-carousel-btn-left"
            aria-label="Scroll left"
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 100,
              background: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid #E8E6E2',
              borderRadius: '8px',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 300ms ease-out',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#D4520A';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.9)';
              e.target.style.color = 'inherit';
            }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="stays-featured-carousel"
            role="region"
            aria-label="Featured stays carousel"
            style={{
              paddingLeft: '60px',
              paddingRight: '60px',
            }}
          >
            <div style={{ color: "red", fontSize: "30px", padding: "40px" }}>
  Carousel Loaded
</div>
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll('right')}
            className="stays-carousel-btn-right"
            aria-label="Scroll right"
            style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 100,
              background: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid #E8E6E2',
              borderRadius: '8px',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 300ms ease-out',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#D4520A';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.9)';
              e.target.style.color = 'inherit';
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(FeaturedStaysCarousel);
