import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiShield } from "react-icons/fi";

import SearchBar from "../Search/SearchBar";
import { fetchAllStayTypes } from "../../../services/staysService";
import "./StayHero.css";

export default function StayHero() {
  const navigate = useNavigate();
  const [quickLinks, setQuickLinks] = useState([]);

  useEffect(() => {
    async function loadHeroData() {
      try {
        const { data: types } = await fetchAllStayTypes();
        
        // Create quick links from stay types
        if (types && types.length > 0) {
          const links = types.slice(0, 4).map(type => ({
            label: type,
            value: type
          }));
          setQuickLinks(links);
        } else {
          // Fallback quick links
          setQuickLinks([
            { label: "Hotels", value: "Hotel" },
            { label: "Homestays", value: "Homestay" },
            { label: "Dharamshalas", value: "Dharamshala" },
            { label: "Guest Houses", value: "Guest House" },
          ]);
        }
      } catch (error) {
        console.error('Error loading hero data:', error);
      }
    }

    loadHeroData();
  }, []);

 const heroTitle = "Find Comfortable Stays";

const heroHighlight = "Near Mahakaleshwar Temple, Ujjain";

const heroDescription =
  "Explore verified hotels, homestays, guest houses and dharamshalas with direct owner contact, real photos and convenient locations.";

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
              {heroTitle}
              <span>{heroHighlight}</span>
            </h1>

            <p className="ms-hero-description">
              {heroDescription}
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
