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

  const description = stay.short_description || stay.description || `${stay.name} is one of the most preferred ${stay.stay_type || "stays"} in Ujjain.`;
  
  const checkIn = stay.check_in_time 
    ? new Date(`2000-01-01T${stay.check_in_time}`).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
    : "12:00 PM";
  
  const checkOut = stay.check_out_time 
    ? new Date(`2000-01-01T${stay.check_out_time}`).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
    : "10:00 AM";
  
  const suitableFor = stay.suitable_for?.length > 0 
    ? stay.suitable_for.join(", ") 
    : "Families & Pilgrims";
  
  const languages = stay.languages?.length > 0 
    ? stay.languages.join(", ") 
    : "Hindi & English";

  return (
    <section className="details-card">

      <h2>About this Property</h2>

      <p>

        {description}

        {expanded && stay.description && (
          <>
            {" "}
            {stay.description}
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

            <span>{stay.stay_type || "Hotel"}</span>

          </div>

        </div>

        <div>

          <FiUsers />

          <div>

            <strong>Suitable For</strong>

            <span>{suitableFor}</span>

          </div>

        </div>

        <div>

          <FiGlobe />

          <div>

            <strong>Languages</strong>

            <span>{languages}</span>

          </div>

        </div>

      </div>

    </section>
  );
}
