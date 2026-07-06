import React from "react";
import { Link } from "react-router-dom";
import {
  FiMapPin,
  FiStar,
  FiHeart,
  FiCheckCircle,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import "./PropertyCard.css";

export default function FeaturedStayCard({ stay }) {

  if (!stay) return null;

  const image =
    stay.featured_image ||
    stay.image ||
    "/images/hero-image.webp";

  return (

    <div className="stay-card">

      <div className="stay-card-image">

        <img
          src={image}
          alt={stay.name}
          loading="lazy"
        />

        <button className="wishlist-btn">

          <FiHeart />

        </button>

        {stay.verified && (

          <div className="verified-badge">

            <FiCheckCircle />

            Verified

          </div>

        )}

        <div className="rating-badge">

          <FiStar />

          {stay.rating || "4.5"}

        </div>

      </div>

      <div className="stay-card-body">

        <span className="stay-type">

          {stay.stay_type || "Hotel"}

        </span>

        <h3>

          {stay.name}

        </h3>

        <div className="stay-location">

          <FiMapPin />

          {stay.locality || stay.city || "Ujjain"}

        </div>

        <div className="stay-info">

          {stay.distance_mahakal && (

            <span>

              📍 {stay.distance_mahakal} m from Mahakal

            </span>

          )}

          {stay.review_count > 0 && (

            <span>

              {stay.review_count} Reviews

            </span>

          )}

        </div>

        <div className="stay-price-row">

          <div>

            <small>Starting From</small>

            <h2>

              ₹{stay.price_from || "999"}

            </h2>

          </div>

        </div>

        <div className="stay-actions">

          <Link
            className="details-btn"
            to={`/stays/${stay.slug}`}
          >
            View Details
          </Link>

          {stay.whatsapp && (

            <a
              href={`https://wa.me/${stay.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >

              <FaWhatsapp />

              WhatsApp

            </a>

          )}

        </div>

      </div>

    </div>

  );

}