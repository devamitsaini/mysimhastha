import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMapPin, FiArrowRight } from "react-icons/fi";

import { fetchStayCountsByLocality } from "../../../services/staysService";

import "./PopularLocations.css";

const placeholder = "/images/locations/location-placeholder.webp";

export default function PopularLocations() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLocations() {
      try {
        const { data } = await fetchStayCountsByLocality();
        
        const mappedLocations = (data || []).map(item => ({
          name: item.locality,
          properties: item.count,
          query: item.locality,
        }));

        setLocations(mappedLocations);
      } catch (error) {
        console.error("Error loading locations:", error);
      } finally {
        setLoading(false);
      }
    }

    loadLocations();
  }, []);

  if (loading) {
    return (
      <section className="popular-locations">
        <div className="stay-container">
          <div className="section-heading">
            <h2>Browse by Location</h2>
            <p>Discover stays in the most popular areas of Ujjain.</p>
          </div>
          <div className="locations-grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="location-card loading-skeleton">
                <div className="skeleton-overlay"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

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
  decoding="async"
  width="600"
  height="400"
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
