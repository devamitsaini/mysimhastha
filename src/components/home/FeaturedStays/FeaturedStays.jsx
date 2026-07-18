import React, { memo } from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaWifi,
  FaParking,
  FaSnowflake,
  FaUsers,
  FaStar,
  FaHeart,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import "./FeaturedStays.css";

const stays = [
  {
    id: 1,
    name: "Your Property Name",
    image: "/images/featured1.webp",
    distance: "700m from Mahakal",
    price: "₹1,800",
    rating: "4.8",
    reviews: "324",
    location: "Mahakal Temple Road",
    slug: "/stay/hotel-rudra-palace",
  },
  {
    id: 2,
    name: "Your Property Name",
    image: "/images/featured2.webp",
    distance: "1.2 km from Mahakal",
    price: "₹2,400",
    rating: "4.7",
    reviews: "212",
    location: "Freeganj",
    slug: "/stay/shivam-residency",
  },
  {
    id: 3,
    name: "Your Property Name",
    image: "/images/featured3.webp",
    distance: "500m from Mahakal",
    price: "₹1,200",
    rating: "4.6",
    reviews: "165",
    location: "Mahakal Area",
    slug: "/stay/mahakal-guest-house",
  },
  {
    id: 4,
    name: "Your Property Name",
    image: "/images/featured4.webp",
    distance: "2 km from Mahakal",
    price: "₹3,100",
    rating: "4.9",
    reviews: "492",
    location: "Nanakheda",
    slug: "/stay/royal-heritage",
  },
];

const FeaturedStays = memo(() => {
  return (
    <section className="featured-stays">
      <div className="container">
        <div className="section-heading">
          <span className="section-tag">ADVERTISEMENT</span>

          <h2>Want to see your property here?</h2>

          <p>
            Get featured and fill the form first, then showcase your property
            to thousands of pilgrims visiting Mahakaleshwar Temple daily.
          </p>
        </div>

        <div className="featured-tabs">
          <button className="active">All</button>
          <button>Hotels</button>
          <button>Homestays</button>
          <button>Guest Houses</button>
          <button>Dharamshalas</button>
        </div>

        <div
          className="featured-grid"
          role="list"
        >
          {stays.map((stay) => (
            <div
              className="stay-card"
              key={stay.id}
              role="listitem"
            >
              <div className="stay-image">
                <img
                  src={stay.image}

                  /*
                  Future responsive images:

                  srcSet={`
                    ${stay.image.replace(".webp","-300.webp")} 300w,
                    ${stay.image.replace(".webp","-600.webp")} 600w
                  `}
                  sizes="(max-width:768px) 200px, 600px"
                  */

                  alt={stay.name}
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="400"
                />

                <div className="verified-badge">
                  <FaCheckCircle aria-hidden="true" />
                  Verified
                </div>

                <div className="distance-badge">
                  {stay.distance}
                </div>

                <button
                  className="wishlist-btn"
                  aria-label={`Add ${stay.name} to wishlist`}
                  type="button"
                >
                  <FaHeart aria-hidden="true" />
                </button>
              </div>

              <div className="stay-content">
                <div className="rating-row">
                  <div className="rating">
                    <FaStar aria-hidden="true" />

                    {stay.rating}

                    <span>({stay.reviews})</span>
                  </div>
                </div>

                <h3>{stay.name}</h3>

                <p className="location">
                  <FaMapMarkerAlt aria-hidden="true" />
                  {stay.location}
                </p>

                <div className="amenities">
                  <span>
                    <FaWifi aria-hidden="true" />
                    WiFi
                  </span>

                  <span>
                    <FaParking aria-hidden="true" />
                    Parking
                  </span>

                  <span>
                    <FaSnowflake aria-hidden="true" />
                    AC
                  </span>

                  <span>
                    <FaUsers aria-hidden="true" />
                    Family
                  </span>
                </div>

                <div className="stay-footer">
                  <div>
                    <h4>{stay.price}</h4>
                    <span>per night</span>
                  </div>

                  <Link
                    to="/list-your-property"
                    className="details-btn"
                  >
                    Get Featured
                    <FaArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="featured-bottom">
          <Link
            to="/list-your-property"
            className="view-all-btn"
          >
            Get Featured
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
});

FeaturedStays.displayName = "FeaturedStays";

export default FeaturedStays;