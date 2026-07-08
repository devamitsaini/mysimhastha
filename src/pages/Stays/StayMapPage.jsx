import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FiMap,
  FiArrowLeft,
  FiExternalLink,
} from "react-icons/fi";

import "./StayMapPage.css";

export default function StayMapPage() {
  const navigate = useNavigate();

  return (
    <div className="stay-map-page">

      <div className="stay-map-container">

        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          <FiArrowLeft />
          Back
        </button>

        <div className="map-coming-card">

          <FiMap className="map-icon" />

          <h1>Interactive Hotel Map</h1>

          <p>
            We're building a premium map experience where you
            can explore verified hotels, nearby stays,
            Mahakal Temple distance and directions.
          </p>

          <button
            className="open-google-btn"
            onClick={() =>
              window.open(
                "https://www.google.com/maps/search/hotels+near+Mahakaleshwar+Temple+Ujjain",
                "_blank"
              )
            }
          >
            <FiExternalLink />
            Open Google Maps
          </button>

        </div>

      </div>

    </div>
  );
}