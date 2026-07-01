import React, { useEffect } from 'react';
import { X, Phone, MessageCircle, Navigation, Globe, MapPin } from 'lucide-react';
import {
  formatPriceRange,
  getDistanceToMahakal,
  estimateTravelTime,
  formatTravelTime,
  formatDistance,
  buildWhatsAppUrl,
  buildGoogleMapsUrl,
} from "../../utils/staysUtils";

import {
  NEARBY_TEMPLES,
  NEARBY_GHATS,
} from "../../utils/staysConstants";

import { useKeyboardNavigation } from "../../hooks/useStays";

/**
 * Stay Detail Modal Component
 * Displays comprehensive information about a stay property
 */
const StayDetailModal = ({ stay, isOpen, onClose }) => {
  // Handle escape key
  useKeyboardNavigation(onClose);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !stay) return null;

  // Calculate distance and travel time
  const distance = getDistanceToMahakal(stay.latitude, stay.longitude);
  const travelTime = estimateTravelTime(distance);

  // Prepare action URLs
  const whatsappUrl = buildWhatsAppUrl(stay.whatsapp || stay.phone, stay.name);
  const mapsUrl = buildGoogleMapsUrl(stay.latitude, stay.longitude, stay.name);

  // Handle calls
  const handleCall = () => {
    if (stay.phone) {
      window.location.href = `tel:${stay.phone}`;
    }
  };

  const handleWhatsApp = () => {
    if (whatsappUrl) {
      window.open(whatsappUrl, '_blank');
    }
  };

  const handleDirections = () => {
    if (mapsUrl) {
      window.open(mapsUrl, '_blank');
    }
  };

  const handleWebsite = () => {
    if (stay.website) {
      window.open(stay.website, '_blank');
    }
  };

  return (
    <div
      className="stays-modal-backdrop"
      onClick={onClose}
      role="presentation"
      aria-hidden={!isOpen}
    >
      <div
        className="stays-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          className="stays-modal-close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={24} />
        </button>

        {/* Image Gallery */}
        {(stay.featured_image || stay.image) && (
          <div
            style={{
              width: '100%',
              height: '300px',
              overflow: 'hidden',
              background: '#F5F3F0',
            }}
          >
            <img
              src={stay.featured_image || stay.image}
              alt={`${stay.name} primary image`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        )}

        {/* Header */}
        <div className="stays-modal-header">
          <h2 id="modal-title" className="stays-modal-title">
            {stay.name}
          </h2>
          <p
            style={{
              marginTop: '8px',
              fontSize: '14px',
              color: '#7A5D4F',
            }}
          >
            {stay.stay_type} • {stay.locality}
          </p>
        </div>

        {/* Body Content */}
        <div className="stays-modal-body">
          {/* Key Information Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              marginBottom: '24px',
              padding: '16px',
              background: '#F9F7F3',
              borderRadius: '12px',
            }}
          >
            {/* Rating */}
            {stay.rating && (
              <div>
                <p style={{ fontSize: '12px', color: '#7A5D4F', marginBottom: '4px' }}>
                  Rating
                </p>
                <p style={{ fontSize: '18px', fontWeight: 700, color: '#D4520A' }}>
                  {stay.rating.toFixed(1)}/5
                </p>
                <p style={{ fontSize: '12px', color: '#9A9490' }}>
                  {stay.review_count || 0} reviews
                </p>
              </div>
            )}

            {/* Price */}
            <div>
              <p style={{ fontSize: '12px', color: '#7A5D4F', marginBottom: '4px' }}>
                Price Per Night
              </p>
              <p style={{ fontSize: '18px', fontWeight: 700, color: '#D4520A' }}>
                {formatPriceRange(stay.price_from, stay.price_to)}
              </p>
            </div>

            {/* Distance */}
            {distance && (
              <div>
                <p style={{ fontSize: '12px', color: '#7A5D4F', marginBottom: '4px' }}>
                  From Mahakal Temple
                </p>
                <p style={{ fontSize: '18px', fontWeight: 700, color: '#D4520A' }}>
                  {formatDistance(distance)}
                </p>
                <p style={{ fontSize: '12px', color: '#9A9490' }}>
                  ~{formatTravelTime(travelTime)}
                </p>
              </div>
            )}

            {/* Address */}
            <div>
              <p style={{ fontSize: '12px', color: '#7A5D4F', marginBottom: '4px' }}>
                Location
              </p>
              <p style={{ fontSize: '14px', color: '#2C1810', lineHeight: 1.4 }}>
                {stay.address || stay.locality}
              </p>
            </div>
          </div>

          {/* Description */}
          {stay.description && (
            <div style={{ marginBottom: '24px' }}>
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  marginBottom: '12px',
                  color: '#2C1810',
                }}
              >
                About This Property
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.8,
                  color: '#7A5D4F',
                }}
              >
                {stay.description}
              </p>
            </div>
          )}

          {/* Nearby Temples */}
          <div style={{ marginBottom: '24px' }}>
            <h3
              style={{
                fontSize: '16px',
                fontWeight: 700,
                marginBottom: '12px',
                color: '#2C1810',
              }}
            >
              Nearby Sacred Sites
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px' }}>
              {NEARBY_TEMPLES.slice(0, 4).map((temple, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '12px',
                    background: 'rgba(212, 82, 10, 0.05)',
                    borderRadius: '8px',
                    borderLeft: '3px solid #D4520A',
                  }}
                >
                  <p style={{ fontSize: '13px', fontWeight: 600, color: '#2C1810' }}>
                    {temple.name}
                  </p>
                  <p style={{ fontSize: '12px', color: '#7A5D4F', marginTop: '4px' }}>
                    {temple.distance}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Action Buttons */}
          <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #E8E6E2' }}>
            <h3
              style={{
                fontSize: '16px',
                fontWeight: 700,
                marginBottom: '16px',
                color: '#2C1810',
              }}
            >
              Get in Touch
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '12px', marginBottom: '16px' }}>
              {stay.phone && (
                <button
                  onClick={handleCall}
                  style={{
                    padding: '12px 16px',
                    background: '#D4520A',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontSize: '14px',
                    transition: 'all 300ms ease-out',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#A63E08';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = '#D4520A';
                    e.target.style.transform = 'none';
                  }}
                >
                  <Phone size={16} />
                  Call
                </button>
              )}

              {whatsappUrl && (
                <button
                  onClick={handleWhatsApp}
                  style={{
                    padding: '12px 16px',
                    background: '#25D366',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontSize: '14px',
                    transition: 'all 300ms ease-out',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'none';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </button>
              )}

              {mapsUrl && (
                <button
                  onClick={handleDirections}
                  style={{
                    padding: '12px 16px',
                    background: '#1565C0',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontSize: '14px',
                    transition: 'all 300ms ease-out',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'none';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <Navigation size={16} />
                  Directions
                </button>
              )}

              {stay.website && (
                <button
                  onClick={handleWebsite}
                  style={{
                    padding: '12px 16px',
                    background: '#555',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontSize: '14px',
                    transition: 'all 300ms ease-out',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'none';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <Globe size={16} />
                  Website
                </button>
              )}
            </div>

            {/* Phone/WhatsApp Display */}
            {(stay.phone || stay.whatsapp) && (
              <div
                style={{
                  padding: '12px 16px',
                  background: '#F9F7F3',
                  borderRadius: '8px',
                  marginBottom: '16px',
                }}
              >
                {stay.phone && (
                  <p style={{ fontSize: '13px', color: '#2C1810' }}>
                    <strong>Phone:</strong> {stay.phone}
                  </p>
                )}
                {stay.whatsapp && (
                  <p style={{ fontSize: '13px', color: '#2C1810', marginTop: '4px' }}>
                    <strong>WhatsApp:</strong> {stay.whatsapp}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(StayDetailModal);
