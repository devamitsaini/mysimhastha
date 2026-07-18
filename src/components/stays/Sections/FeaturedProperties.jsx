import React from "react";
import { Link } from "react-router-dom";
import {
  FiStar,
  FiCheckCircle,
  FiArrowRight,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

import "./FeaturedProperties.css";

export default function FeaturedProperties() {
  const demoCards = [
    {
      id: 1,
      type: "Luxury Hotel",
      location: "Near Mahakaleshwar Temple",
      price: "Starting ₹2,499",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
    },
    {
      id: 2,
      type: "Premium Homestay",
      location: "Ram Ghat, Ujjain",
      price: "Starting ₹1,499",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
    },
    {
      id: 3,
      type: "Family Guest House",
      location: "Freeganj, Ujjain",
      price: "Starting ₹999",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
    },
  ];

  const benefits = [
    "Homepage Featured Placement",
    "Priority Stay Listing",
    "Verified Partner Badge",
    "Direct Customer Enquiries",
  ];

  const stats = [
    {
      label: "Daily Visitors",
      value: "1K+",
    },
    {
      label: "Active Listings",
      value: "100+",
    },
    {
      label: "Slots",
      value: "Limited",
    },
  ];

  const partnershipEmail = "business@mysimhastha.com";
  const partnershipPhone = "+91 99999 99999";
  const partnershipResponseTime =
    "Usually replies within 24 hours.";

  return (
    <section className="featured-section">
      <div className="stay-container">
        {/* ================= Partner Card ================= */}

        <div className="featured-partner-card">
          <div className="featured-left">
            <span className="featured-tag">
              <FiStar />
              Become a Featured Stay Partner
            </span>

            <h2>
              Put Your Property in Front of
              <br />
              Thousands of Pilgrims
            </h2>

            <p>
              Showcase your property on
              <strong> MySimhastha</strong> and receive
              direct enquiries from pilgrims
              planning their visit.
            </p>

            <div className="featured-benefits">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="benefit-item"
                >
                  <FiCheckCircle />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="featured-right">
            <div className="contact-card">
              <h3>Ready to Grow?</h3>

              <p>
                Contact our partnership team and
                get your accommodation featured.
              </p>

              <div className="contact-row">
                <FiMail />
                <a href={`mailto:${partnershipEmail}`}>
                  {partnershipEmail}
                </a>
              </div>

              <div className="contact-row">
                <FiPhone />
                <a href={`tel:${partnershipPhone}`}>
                  {partnershipPhone}
                </a>
              </div>

              <p className="reply-text">
                {partnershipResponseTime}
              </p>

              <Link
                className="partner-btn"
                to="/list-your-property"
              >
                Become a Featured Partner
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>

        {/* ================= Premium Preview ================= */}

        <div className="featured-preview-section">
          <div className="preview-header">
            <span className="preview-tag">
              Premium Placement Preview
            </span>

            <h2>Your Property Could Be Here</h2>

            <p>
              Stand out from the crowd with a featured listing.
            </p>

            <div className="preview-stats">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="stat-item"
                >
                  <div className="stat-value">
                    {stat.value}
                  </div>

                  <div className="stat-label">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="preview-grid">
            {demoCards.map((card) => (
              <Link
                key={card.id}
                to="/list-your-property"
                className="preview-card"
              >
                <div
                  className="preview-image"
                  style={{
                    backgroundImage: `url(${card.image})`,
                  }}
                >
                  <div className="featured-ribbon">
                    ⭐ FEATURED
                  </div>

                  <div className="preview-overlay">
                    <span>Your Property</span>
                    <strong>Could Be Here</strong>
                  </div>
                </div>

                <div className="preview-body">
                  <div className="preview-rating">
                    ⭐⭐⭐⭐⭐
                    <span> Premium Listing</span>
                  </div>

                  <h3>{card.type}</h3>

                  <div className="preview-location">
                    <FiMapPin />
                    <span>{card.location}</span>
                  </div>

                  <div className="preview-price">
                    {card.price}
                  </div>

                  <div className="preview-btn">
                    Become Featured
                    <FiArrowRight />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}