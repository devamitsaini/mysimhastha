import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
  FaEye,
  FaNewspaper,
  FaFire,
} from "react-icons/fa";

import "./NewsCard.css";

const NewsCard = ({
  image,
  category,
  title,
  description,
  date,
  readTime,
  views,
  slug,
  featured = false,
}) => {
  return (
    <article
      className={`news-card ${
        featured ? "featured" : ""
      }`}
    >

      <Link
        to={slug}
        className="news-card-image"
      >

        <img
          src={image}
          alt={title}
          loading="lazy"
        />

        <span className="news-category">
          {category}
        </span>

        {featured && (

          <span className="news-featured">

            <FaFire />

            Breaking

          </span>

        )}

      </Link>

      <div className="news-card-content">

        <div className="news-meta">

          <span>

            <FaCalendarAlt />

            {date}

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
          className="news-read-btn"
        >

          Read Article

          <FaArrowRight />

        </Link>

      </div>

    </article>
  );
};

export default NewsCard;