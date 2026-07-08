import React from "react";
import { Link } from "react-router-dom";
import { FiMapPin, FiArrowRight } from "react-icons/fi";

import "./PopularLocations.css";

const placeholder =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80";

const locations = [
  {
    name: "Near Mahakal",
    properties: 128,
    query: "Mahakal Temple",
  },
  {
    name: "Mahakal Lok",
    properties: 86,
    query: "Mahakal Lok",
  },
  {
    name: "Ram Ghat",
    properties: 52,
    query: "Ram Ghat",
  },
  {
    name: "Freeganj",
    properties: 71,
    query: "Freeganj",
  },
  {
    name: "Railway Station",
    properties: 48,
    query: "Railway Station",
  },
  {
    name: "Nanakheda",
    properties: 37,
    query: "Nanakheda",
  },
];

export default function PopularLocations() {
  return (
    <section className="popular-locations">

      <div className="stay-container">

        <div className="section-heading">

          <h2>Browse by Location</h2>

          <p>
            Discover stays in the most popular areas of Ujjain.
          </p>

        </div>

        <div className="locations-grid">

          {locations.map((location) => (

            <Link
              key={location.name}
              className="location-card"
              to={`/stays/list?location=${encodeURIComponent(
                location.query
              )}`}
            >

              <img
                src={placeholder}
                alt={location.name}
                loading="lazy"
              />

              <div className="location-overlay">

                <FiMapPin />

                <h3>{location.name}</h3>

                <span>{location.properties}+ Properties</span>

                <small>

                  Explore

                  <FiArrowRight />

                </small>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}