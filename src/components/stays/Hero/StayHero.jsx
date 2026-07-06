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

          

            <h1>
              Find Comfortable Stays
              <span>In Ujjain</span>
            </h1>

            <p>
              Discover verified hotels, homestays, dharamshalas and guest
              houses across Ujjain for your comfortable and secure journey.
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