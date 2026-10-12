import { useState } from "react";
import {
  FiClock,
  FiHome,
  FiUsers,
  FiGlobe,
} from "react-icons/fi";

import "./AboutProperty.css";

// Format a stored time value for display. Accepts "HH:MM[:SS]" or full
// ISO/time strings; falls back to the raw value when unparseable, and
// "Not available" when missing — never an invented default time.
function formatTime(value) {
  if (value == null || String(value).trim() === "") return "Not available";

  const raw = String(value).trim();
  const match = raw.match(/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/);

  if (match) {
    const hours = Number(match[1]);
    const minutes = Number(match[2]);
    if (hours > 23 || minutes > 59) return raw;
    const suffix = hours >= 12 ? "PM" : "AM";
    const twelve = hours % 12 === 0 ? 12 : hours % 12;
    return `${twelve}:${String(minutes).padStart(2, "0")} ${suffix}`;
  }

  const parsed = new Date(raw);
  if (!isNaN(parsed.getTime())) {
    return parsed.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  }

  return raw;
}

export default function AboutProperty({ stay }) {
  const [expanded, setExpanded] = useState(false);

  if (!stay) return null;

  const shortDescription = stay.short_description;
  const longDescription = stay.description;

  const hasDescription = Boolean(shortDescription || longDescription);
  const showLong = shortDescription ? expanded : true;

  const checkIn = formatTime(stay.check_in_time);

  const checkOut = formatTime(stay.check_out_time);

  const suitableFor = stay.suitable_for?.length > 0 ? stay.suitable_for.join(", ") : null;

  const languages = stay.languages?.length > 0 ? stay.languages.join(", ") : null;

  return (
    <section className="details-card">
      <h2>About this Property</h2>

      {hasDescription ? (
        <p>
          {shortDescription}
          {showLong && longDescription && <> {longDescription}</>}
        </p>
      ) : (
        <p style={{ color: "#64748b", fontSize: "14px" }}>
          Description not available for this property.
        </p>
      )}

      {shortDescription && longDescription && (
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
            <span>{checkIn}</span>
          </div>
        </div>

        <div>
          <FiClock />
          <div>
            <strong>Check Out</strong>
            <span>{checkOut}</span>
          </div>
        </div>

        <div>
          <FiHome />
          <div>
            <strong>Property Type</strong>
            <span>{stay.stay_type || "Not available"}</span>
          </div>
        </div>

        {suitableFor && (
          <div>
            <FiUsers />
            <div>
              <strong>Suitable For</strong>
              <span>{suitableFor}</span>
            </div>
          </div>
        )}

        {languages && (
          <div>
            <FiGlobe />
            <div>
              <strong>Languages</strong>
              <span>{languages}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}