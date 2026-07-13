import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaClock,
  FaBookOpen,
  FaEye,
  FaFire,
} from "react-icons/fa";

import "./GuideCard.css";

const GuideCard = ({
  image,
  category,
  title,
  description,
  readTime,
  views,
  slug,
  featured = false,
}) => {
  return (
    <article
      className={`guide-card ${
        featured ? "featured" : ""
      }`}
    >
      <Link
        to={slug}
        className="guide-card-image"
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
        />

        <span className="guide-category">
          {category}
        </span>

        {featured && (
          <span className="guide-featured">
            <FaFire />
            Featured
          </span>
        )}
      </Link>

      <div className="guide-card-content">

        <div className="guide-meta">

          <span>
            <FaBookOpen />
            Guide
          </span>

          <span>
            <FaClock />
            {readTime}
          </span>

          <span>
            <FaEye />
            {views}
          </span>

        </div>

        <h3>

          <Link to={slug}>
            {title}
          </Link>

        </h3>

        <p>

          {description}

        </p>

        <Link
          to={slug}
          className="guide-read-btn"
        >

          Read Guide

          <FaArrowRight />

        </Link>

      </div>

    </article>
  );
};

export default GuideCard;