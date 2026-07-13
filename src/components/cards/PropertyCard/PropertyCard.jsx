import React from "react";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaMapMarkerAlt,
  FaWifi,
  FaParking,
  FaSnowflake,
  FaCheckCircle,
  FaArrowRight,
  FaHeart,
} from "react-icons/fa";

import "./PropertyCard.css";

const PropertyCard = ({
  image,
  name,
  location,
  distance,
  price,
  rating,
  reviews,
  slug,
  verified = true,
  featured = false,
  amenities = [],
}) => {
  return (
    <article
      className={`property-card ${
        featured ? "featured" : ""
      }`}
    >

      <Link
        to={slug}
        className="property-image"
      >

        <img
          src={image}
          alt={name}
          loading="lazy"
        />

        {verified && (

          <span className="property-verified">

            <FaCheckCircle />

            Verified

          </span>

        )}

        <span className="property-distance">

          {distance}

        </span>

        <button className="wishlist-btn">

          <FaHeart />

        </button>

      </Link>

      <div className="property-content">

        <div className="property-rating">

          <FaStar />

          <span>{rating}</span>

          <small>

            ({reviews})

          </small>

        </div>

        <h3>

          <Link to={slug}>

            {name}

          </Link>

        </h3>

        <p className="property-location">

          <FaMapMarkerAlt />

          {location}

        </p>

        <div className="property-amenities">

          {amenities.includes("wifi") && (

            <span>

              <FaWifi />

              WiFi

            </span>

          )}

          {amenities.includes("parking") && (

            <span>

              <FaParking />

              Parking

            </span>

          )}

          {amenities.includes("ac") && (

            <span>

              <FaSnowflake />

              AC

            </span>

          )}

        </div>

        <div className="property-footer">

          <div>

            <h4>

              {price}

            </h4>

            <span>

              per night

            </span>

          </div>

          <Link
            to={slug}
            className="property-btn"
          >

            View

            <FaArrowRight />

          </Link>

        </div>

      </div>

    </article>
  );
};

export default PropertyCard;