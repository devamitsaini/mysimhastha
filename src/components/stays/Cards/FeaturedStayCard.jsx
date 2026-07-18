import React from "react";
import { Link } from "react-router-dom";

import {
  FiMapPin,
  FiStar,
  FiHeart,
  FiCheckCircle,
  FiPhone,
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";

import "./PropertyCard.css";

export default function FeaturedStayCard({ stay }) {
  if (!stay) return null;

  const image =
    stay.featured_image ||
    stay.image ||
    "/images/featured1.webp";

  return (
    <article className="stay-card">
      {/* IMAGE */}
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

      {/* BODY */}
      <div className="stay-card-body">
        <div className="stay-top">
          <span className="stay-type">
            {stay.stay_type || "Hotel"}
          </span>

          {stay.popular && (
            <span className="popular-tag">
              Popular
            </span>
          )}
        </div>

        <h3>{stay.name}</h3>

        <div className="stay-location">
          <FiMapPin />
          <span>
            {stay.locality || stay.city || "Ujjain"}
          </span>
        </div>

        <div className="stay-info">
          {stay.distance_mahakal && (
            <span>
              📍 {stay.distance_mahakal} m
            </span>
          )}

          {stay.review_count > 0 && (
            <span>
              {stay.review_count}+ Reviews
            </span>
          )}

          {stay.verified && (
            <span>
              ✓ Verified
            </span>
          )}
        </div>

        <div className="stay-price-row">
          <div>
            <small>Starting from</small>
            <h2>
              ₹{stay.price_from || stay.starting_price || "999"}
              <span>/night</span>
            </h2>
          </div>
        </div>

        <div className="stay-actions">
          <Link
            to={`/stays/${stay.slug}`}
            className="details-btn"
          >
            View Details
          </Link>

          {stay.whatsapp ? (
            <a
              href={`https://wa.me/${stay.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              <FaWhatsapp />
            </a>
          ) : stay.phone ? (
            <a
              href={`tel:${stay.phone}`}
              className="whatsapp-btn"
            >
              <FiPhone />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}