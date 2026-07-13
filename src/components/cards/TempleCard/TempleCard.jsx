import React from "react";
import { Link } from "react-router-dom";
import {
  FaClock,
  FaMapMarkerAlt,
  FaArrowRight,
  FaPlaceOfWorship,
  FaStar,
} from "react-icons/fa";

import "./TempleCard.css";

const TempleCard = ({
  image,
  name,
  distance,
  timings,
  description,
  slug,
  featured = false,
}) => {
  return (
    <article
      className={`temple-card ${
        featured ? "featured" : ""
      }`}
    >

      <Link
        to={slug}
        className="temple-image"
      >

        <img
          src={image}
          alt={name}
          loading="lazy"
        />

        <span className="temple-tag">

          <FaPlaceOfWorship />

          Temple

        </span>

        {featured && (

          <span className="featured-tag">

            <FaStar />

            Must Visit

          </span>

        )}

      </Link>

      <div className="temple-content">

        <h3>

          <Link to={slug}>
            {name}
          </Link>

        </h3>

        <p>

          {description}

        </p>

        <div className="temple-info">

          <span>

            <FaMapMarkerAlt />

            {distance}

          </span>

          <span>

            <FaClock />

            {timings}

          </span>

        </div>

        <Link
          to={slug}
          className="temple-btn"
        >

          Explore Temple

          <FaArrowRight />

        </Link>

      </div>

    </article>
  );
};

export default TempleCard;