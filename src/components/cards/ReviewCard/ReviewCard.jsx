import React from "react";
import {
  FaStar,
  FaCheckCircle,
  FaThumbsUp,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./ReviewCard.css";

const ReviewCard = ({
  name,
  avatar,
  location,
  rating,
  date,
  title,
  review,
  tripType,
  helpful = 0,
  verified = true,
}) => {
  return (
    <article className="review-card">

      <div className="review-header">

        <div className="review-user">

          <img
            src={avatar}
            alt={name}
          />

          <div>

            <h3>

              {name}

              {verified && (
                <FaCheckCircle className="verified-icon" />
              )}

            </h3>

            <p>

              <FaMapMarkerAlt />

              {location}

            </p>

          </div>

        </div>

        <div className="review-rating">

          <FaStar />

          <span>{rating}</span>

        </div>

      </div>

      <div className="review-meta">

        <span>{tripType}</span>

        <span>{date}</span>

      </div>

      <h4>{title}</h4>

      <p className="review-text">
        {review}
      </p>

      <div className="review-footer">

        <button>

          <FaThumbsUp />

          Helpful ({helpful})

        </button>

      </div>

    </article>
  );
};

export default ReviewCard;