import { useState } from "react";
import {
  FiClock,
  FiHome,
  FiUsers,
  FiGlobe,
} from "react-icons/fi";

import "./AboutProperty.css";

export default function AboutProperty({ stay }) {

  const [expanded, setExpanded] = useState(false);

  if (!stay) return null;

  return (
    <section className="details-card">

      <h2>About this Property</h2>

      <p>

        {stay.short_description ||
          `${stay.name} is one of the most preferred ${
            stay.stay_type || "stays"
          } in Ujjain. Conveniently located near Mahakaleshwar Temple, the property offers comfortable accommodation, modern amenities, and easy access to Mahakal Lok, Ram Ghat, railway station, and other major attractions.`}

        {expanded && (
          <>
            {" "}

            {stay.description
              ? stay.description
              : `Guests can enjoy ${
                  stay.ac ? "air-conditioned rooms, " : ""
                }${stay.wifi ? "free WiFi, " : ""}${
                  stay.parking ? "parking facilities, " : ""
                }${
                  stay.hot_water ? "hot water, " : ""
                }family-friendly rooms, and a peaceful stay suitable for pilgrims, tourists, families, and groups visiting Ujjain throughout the year.`}

          </>
        )}

      </p>

      {(stay.description || stay.short_description) && (
        <button
          className="read-more-btn"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}

      <div className="property-highlights">

        <div>

          <FiClock />

          <div>

            <strong>Check In</strong>

            <span>12:00 PM</span>

          </div>

        </div>

        <div>

          <FiClock />

          <div>

            <strong>Check Out</strong>

            <span>10:00 AM</span>

          </div>

        </div>

        <div>

          <FiHome />

          <div>

            <strong>Property Type</strong>

            <span>{stay.stay_type || "Hotel"}</span>

          </div>

        </div>

        <div>

          <FiUsers />

          <div>

            <strong>Suitable For</strong>

            <span>Families & Pilgrims</span>

          </div>

        </div>

        <div>

          <FiGlobe />

          <div>

            <strong>Languages</strong>

            <span>Hindi & English</span>

          </div>

        </div>

      </div>

    </section>
  );
}