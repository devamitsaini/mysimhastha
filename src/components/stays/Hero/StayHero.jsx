import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FiShield,
  FiHome,
  FiMapPin,
} from "react-icons/fi";

import SearchBar from "../Search/SearchBar";
import "./StayHero.css";

export default function StayHero() {
  const navigate = useNavigate();

  const quickLinks = [
    "Hotels",
    "Homestays",
    "Dharamshalas",
    "Guest Houses",
  ];

  return (
    <section className="stay-hero">

      <div className="stay-hero-overlay"></div>

      <div className="stay-container">

        <div className="stay-hero-card">

          {/* LEFT */}

          <div className="hero-left">

            <div className="stay-badge">
              <FiShield />
              Verified Accommodation Directory
            </div>

            <h1>
              Find Comfortable Stays
              <span>Near Mahakaleshwar Temple, Ujjain</span>
            </h1>

            <p>
              Explore verified hotels, homestays, guest houses, and dharamshalas with direct owner contact, real photos, and convenient locations.
            </p>


            <div className="stay-quick-links">

              <span>Popular</span>

              {quickLinks.map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    navigate(
                      `/stays/list?type=${encodeURIComponent(item)}`
                    )
                  }
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

          {/* RIGHT */}

          <div className="hero-right">

            <SearchBar />

          </div>

        </div>

      </div>

    </section>
  );
}