import { Link } from "react-router-dom";
import {
  FiMapPin,
  FiPhone,
  FiHeart,
  FiCheckCircle,
  FiCamera,
  FiMessageCircle,
  FiStar,
} from "react-icons/fi";

import "./ListingPropertyCard.css";

export default function ListingPropertyCard({ stay }) {
  return (
    <div className="listing-card">

      {/* IMAGE */}

      <div className="listing-image">

        <img
          src={stay.image || stay.featured_image || "/images/mahakal-lok.webp"}
          alt={stay.name}
        />

        <button className="wishlist-btn">
          <FiHeart />
        </button>

        <span className="photo-count">
          <FiCamera />
          12 Photos
        </span>

      </div>

      {/* CONTENT */}

      <div className="listing-content">

        <div className="listing-top">

          <div className="listing-title-wrap">

            {/* Mobile Rating */}

            <div className="mobile-title-row">

              <h2>{stay.name}</h2>

              <div className="mobile-rating">

                <FiStar />

                <span>{stay.rating || "New"}</span>

                <small>({stay.review_count || 0})</small>

              </div>

            </div>

            <div className="listing-badges">

              <span className="verified">
                <FiCheckCircle />
                Verified
              </span>

              <span>Couple Friendly</span>

              <span>Free Cancellation</span>

            </div>

          </div>

          {/* Desktop Price - Top Right */}

          <div className="price-box desktop-price">

            <small>Starting From</small>

            <h3>{stay.starting_price || stay.price_from || "Contact"}</h3>

            <p>/night</p>

          </div>

        </div>

        <div className="listing-location">

  <FiMapPin />

  {typeof stay.distance === "number" &&
  stay.distance !== Number.MAX_SAFE_INTEGER ? (
    <>
      {stay.distance < 1
        ? `${Math.round(stay.distance * 1000)} m away`
        : `${stay.distance.toFixed(1)} km away`}
    </>
  ) : (
    <>
      {stay.distance_mahakal
        ? `${stay.distance_mahakal} from Mahakal`
        : stay.locality || stay.city}
    </>
  )}

</div>

        <p className="listing-description">

          Spacious AC rooms with free WiFi,
          parking, hot water, attached bathrooms,
          lift and family-friendly facilities.

        </p>

        <div className="amenities">

          <span>AC</span>
          <span>WiFi</span>
          <span>Parking</span>
          <span>Lift</span>
          <span>Family Rooms</span>

        </div>

        {/* Mobile Price - Bottom */}

        <div className="price-box mobile-price">

          <small>Starting From</small>

          <h3>{stay.starting_price || stay.price_from || "Contact"}</h3>

          <p>/night</p>

        </div>

        {/* Desktop Bottom Actions */}

        <div className="listing-footer">

    <div className="trust-badge">

        <FiCheckCircle />

        Verified by MySimhastha

    </div>

    <div className="actions">

        <a
            href={`tel:${stay.phone || ""}`}
            className="call-btn"
        >
            <FiPhone />
            Call
        </a>

        <a
            href={`https://wa.me/${stay.whatsapp || stay.phone || ""}`}
            className="wa-btn"
        >
            <FiMessageCircle />
            WhatsApp
        </a>

        <Link
            to={`/stays/${stay.slug}`}
            className="details-btn"
        >
            View Details
        </Link>

    </div>

</div>

      </div>

    </div>
  );
}