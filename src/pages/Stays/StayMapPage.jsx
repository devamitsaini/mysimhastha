import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FiMap,
  FiArrowLeft,
  FiExternalLink,
} from "react-icons/fi";
import { SEO, SchemaProvider } from "../../seo";

import "./StayMapPage.css";

export default function StayMapPage() {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Stays Map in Ujjain | Hotels & Dharamshalas Near Mahakal | MySimhastha"
        description="Explore hotels, homestays, guest houses and dharamshalas in Ujjain on an interactive map near Mahakaleshwar Temple and Ram Ghat."
        canonical="https://www.mysimhastha.com/stays/map"
      />

      <SchemaProvider
        type="stays"
        data={{
          title: "Stays Map in Ujjain | Hotels & Dharamshalas Near Mahakal",
          description: "Explore hotels, homestays, guest houses and dharamshalas in Ujjain on an interactive map near Mahakaleshwar Temple and Ram Ghat.",
          url: "https://www.mysimhastha.com/stays/map",
          about: "Accommodation",
          breadcrumbs: [
            { label: "Home", url: "https://www.mysimhastha.com" },
            { label: "Stays", url: "https://www.mysimhastha.com/stays" },
            { label: "Map", url: "https://www.mysimhastha.com/stays/map" },
          ],
        }}
      />

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
    </>
  );
}
