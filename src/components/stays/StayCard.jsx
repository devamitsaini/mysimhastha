import { useState } from "react";

import {
  Star,
  MapPin,
  Phone,
  MessageCircle,
  Navigation,
  ShieldCheck,
  Heart,
  Crown,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import {
  formatPrice,
  getDistanceBadgeText,
  isNearMahakal,
  buildWhatsAppUrl,
  buildGoogleMapsUrl,
} from "../../utils/staysUtils";

import { getAmenities } from "../../utils/getAmenities";
import { amenityIcons } from "../../utils/amenityIcons";

import "./StayCardV2.css";

const StayCardV2 = ({ stay }) => {

  const navigate = useNavigate();

  const [saved, setSaved] = useState(false);

  const image =
    stay.featured_image ||
    stay.image ||
    "/images/default-hotel.jpg";

  const rawPrice =
    stay.starting_price ||
    stay.price_from ||
    null;

  const priceDisplay = rawPrice
    ? formatPrice(rawPrice)
    : "Price on Request";

  const ratingValue = Number(stay.rating) || 0;
  const filledStars = Math.round(ratingValue);

  const topAmenities = getAmenities(stay).slice(0, 3);

  const distanceBadge = getDistanceBadgeText(
    stay.latitude,
    stay.longitude
  );

  const nearMahakal = isNearMahakal(
    stay.latitude,
    stay.longitude
  );

  const whatsappUrl = buildWhatsAppUrl(stay.phone, stay.name);
  const mapsUrl = buildGoogleMapsUrl(
    stay.latitude,
    stay.longitude,
    stay.name
  );

  const handleWishlist = (e) => {
    e.stopPropagation();
    setSaved((prev) => !prev);
  };

  const handleCall = (e) => {
    e.stopPropagation();
    if (stay.phone) window.location.href = `tel:${stay.phone}`;
  };

  const handleWhatsApp = (e) => {
    e.stopPropagation();
    if (whatsappUrl) window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleDirections = (e) => {
    e.stopPropagation();
    if (mapsUrl) window.open(mapsUrl, "_blank", "noopener,noreferrer");
  };

  return (

    <article className="stay-card-v2">

      {/* IMAGE */}

      <div className="stay-card-v2-image">

        <img
          src={image}
          alt={stay.name}
        />

        <div className="stay-card-v2-overlay">

          <div className="badge-stack">

            {stay.verified && (

              <span className="verified-badge">

                <ShieldCheck size={14} />

                Verified

              </span>

            )}

            {stay.featured && (

              <span className="featured-badge">

                <Crown size={13} />

                Featured

              </span>

            )}

          </div>

          <button
            className={`wishlist-btn ${saved ? "active" : ""}`}
            onClick={handleWishlist}
            aria-label="Save to wishlist"
          >

            <Heart
              size={18}
              fill={saved ? "currentColor" : "none"}
            />

          </button>

        </div>

      </div>

      {/* CONTENT */}

      <div className="stay-card-v2-content">

        <div className="stay-card-v2-toprow">

          <span className="stay-type-pill">

            {stay.stay_type}

          </span>

          {nearMahakal && (

            <span className="near-mahakal-pill">

              Near Mahakal

            </span>

          )}

        </div>

        <h3 className="stay-title">

          {stay.name}

        </h3>

        {/* Rating */}

        <div className="stay-rating-row">

          <div className="stay-stars">

            {[1, 2, 3, 4, 5].map((i) => (

              <Star
                key={i}
                size={15}
                fill={i <= filledStars ? "currentColor" : "none"}
              />

            ))}

          </div>

          <strong>

            {stay.rating || "New"}

          </strong>

          <span>

            ({stay.review_count || 0} Reviews)

          </span>

        </div>

        {/* Location */}

        <div className="stay-location-row">

          <MapPin size={15} />

          <span>

            {stay.locality || stay.city}

          </span>

          {distanceBadge && (

            <span className="distance-chip">

              {distanceBadge}

            </span>

          )}

        </div>

        {/* Amenities */}

        <div className="stay-amenities">

          {topAmenities.map((amenity) => {

            const meta = amenityIcons[amenity] || amenityIcons.default;
            const Icon = meta.icon;

            return (

              <span
                key={amenity}
                title={meta.description}
              >

                <Icon size={15} />

                {amenity}

              </span>

            );

          })}

        </div>

        {/* Price */}

        <div className="stay-price-block">

          <small>

            Starting From

          </small>

          <h2>

            {priceDisplay}

          </h2>

          {rawPrice && (

            <span>

              / night

            </span>

          )}

        </div>

        {/* Primary Button */}

        <button
          className="details-btn"
          onClick={() =>
            navigate(`/stays/${stay.slug}`)
          }
        >

          View Details

        </button>

        {/* Quick Actions */}

        <div className="quick-actions">

          <button
            onClick={handleCall}
            disabled={!stay.phone}
          >

            <Phone size={17} />

            Call

          </button>

          <button
            onClick={handleWhatsApp}
            disabled={!whatsappUrl}
          >

            <MessageCircle size={17} />

            WhatsApp

          </button>

          <button
            onClick={handleDirections}
            disabled={!mapsUrl}
          >

            <Navigation size={17} />

            Directions

          </button>

        </div>

      </div>

    </article>

  );

};

export default StayCardV2;
