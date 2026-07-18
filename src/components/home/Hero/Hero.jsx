import React from "react";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaRoute,
  FaHotel,
} from "react-icons/fa";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="home-hero">

      <div className="hero-wrapper">

        {/* LEFT CONTENT */}
        <div className="hero-left">

          <div className="hero-badge">
            <FaShieldAlt />
            <span>Trusted by Pilgrims</span>
          </div>

          <h1 className="hero-title">
            Your Complete Guide to{" "}
            <br />
            <span className="hero-blue">
              Ujjain, Mahakal &{" "}
            </span>
            <span className="hero-orange">
              Simhastha 2028
            </span>
          </h1>

          <p className="hero-description">
            Verified information, temple guides,
            stays, transport and everything you need
            for a blessed pilgrimage.
          </p>

          <div className="hero-features">

            <div className="feature-chip">
              <FaCheckCircle />
              <span>Verified Info</span>
            </div>

            <div className="feature-chip">
              <FaCheckCircle />
              <span>Updated Daily</span>
            </div>

            <div className="feature-chip">
              <FaCheckCircle />
              <span>Pilgrim Focused</span>
            </div>

          </div>

          <div className="hero-buttons">

            <Link
              to="/trip-planner"
              className="hero-btn hero-btn-primary"
            >
              <FaRoute />
              <span>Plan My Trip</span>
            </Link>

            <Link
              to="/stays"
              className="hero-btn hero-btn-secondary"
            >
              <FaHotel />
              <span>Book a Stay</span>
            </Link>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">

          <img
  src="/images/hero.webp"
  alt="Simhastha 2028 Ujjain Mahakal Temple"
  className="hero-image"
  width="1600"
  height="900"
    decoding="async"
/>

  <div className="image-glow"></div>
       
        </div>

      </div>

    </section>
  );
};

export default Hero;