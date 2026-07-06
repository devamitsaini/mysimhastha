import { Link } from "react-router-dom";
import {
  FiMapPin,
  FiPhone,
  FiHeart,
  FiCheckCircle,
  FiCamera,
  FiMessageCircle,
  FiStar
} from "react-icons/fi";

import "./ListingPropertyCard.css";

export default function ListingPropertyCard({ stay }) {
  return (
    <div className="listing-card">

      {/* IMAGE */}

      <div className="listing-image">

        <img
          src={stay.image || stay.featured_image || "/images/hero-image.webp"}
          alt="{stay.name}"
        />

        <button className="wishlist-btn">
          <FiHeart />
        </button>

        <span className="photo-count">
          <FiCamera />
          12 Photos
        </span>

        <span className="rating-chip">
          <FiStar />
          {stay.rating || "New"}
        </span>

      </div>

      {/* CONTENT */}

      <div className="listing-content">

        <div className="listing-top">

          <div>

            <h2>Hotel Rudra Palace</h2>

            <div className="listing-badges">

              <span className="verified">
                <FiCheckCircle />
                Verified
              </span>

              <span>Couple Friendly</span>

              <span>Free Cancellation</span>

            </div>

          </div>

          <div className="price-box">

            <small>Starting From</small>

            <h3>{stay.starting_price || stay.price_from || "Contact"}</h3>

            <p>/night</p>

          </div>

        </div>

        <div className="listing-location">

          <FiMapPin />

          {stay.distance_mahakal
 ? `${stay.distance_mahakal} from Mahakal`
 : stay.locality || stay.city}

        </div>

        <p className="listing-description">

          {stay.short_description ||
            stay.description ||
            "Comfortable stay near Mahakal Temple."}

        </p>

        <div className="amenities">

          <span>AC</span>
          <span>WiFi</span>
          <span>Parking</span>
          <span>Lift</span>
          <span>Family Rooms</span>

        </div>

        <div className="bottom-row">

          <span className="reviews">
            ⭐ {stay.rating || 0} • {stay.review_count || 0} Reviews
          </span>

          <div className="actions">

            <a href={`tel:${stay.phone || ""}`} className="call-btn">
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