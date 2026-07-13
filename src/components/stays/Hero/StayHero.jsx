import React from "react";
import { useNavigate } from "react-router-dom";
import { FiShield } from "react-icons/fi";

import SearchBar from "../Search/SearchBar";
import "./StayHero.css";

export default function StayHero() {
  const navigate = useNavigate();

  const quickLinks = [
    { label: "Hotels", value: "Hotel" },
    { label: "Homestays", value: "Homestay" },
    { label: "Dharamshalas", value: "Dharamshala" },
    { label: "Guest Houses", value: "Guest House" },
  ];

  return (
    <section className="ms-hero">

      <div className="ms-hero-overlay"></div>

      <div className="ms-hero-container">

        <div className="ms-hero-card">

          {/* LEFT */}

          <div className="ms-hero-left">

            <div className="ms-hero-badge">
              <FiShield />
              <span>Verified Accommodation Directory</span>
            </div>

            <h1 className="ms-hero-title">
              Find Comfortable Stays
              <span>Near Mahakaleshwar Temple, Ujjain</span>
            </h1>

            <p className="ms-hero-description">
              Explore verified hotels, homestays, guest houses, and
              dharamshalas with direct owner contact, real photos, and
              convenient locations.
            </p>

            <div className="ms-hero-links">

              <span className="ms-hero-links-title">
                Popular
              </span>

              {quickLinks.map((item) => (
                <button
                  key={item.value}
                  className="ms-hero-tag"
                  onClick={() =>
                    navigate(
                      `/stays/list?type=${encodeURIComponent(item.value)}`
                    )
                  }
                >
                  {item.label}
                </button>
              ))}

            </div>

          </div>

          {/* RIGHT */}

          <div className="ms-hero-right">

            <SearchBar />

          </div>

        </div>

      </div>

    </section>
  );
}