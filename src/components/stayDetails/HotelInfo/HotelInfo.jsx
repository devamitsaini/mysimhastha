import { useState } from "react";

import {
  Star,
  MapPin,
  ShieldCheck,
  Clock3,
  Users,
  Hotel,
  BedDouble,
  ChevronDown,
} from "lucide-react";

import { getAmenities } from "../../../utils/getAmenities";
import { amenityIcons } from "../../../utils/amenityIcons";

import "./HotelInfo.css";

const HotelInfo = ({ stay }) => {
  if (!stay) return null;

  const distance =
    stay.distance_to_mahakal ||
    stay.distance ||
    "Near Mahakaleshwar Temple";

  const highlights = getAmenities(stay).slice(0, 4);

  const [aboutExpanded, setAboutExpanded] = useState(false);

  const description =
    stay.description ||
    stay.short_description ||
    "No description available.";

  const isLongDescription = description.length > 220;

  return (
    <section className="hotel-info">

      {/* Header */}

      <div className="hotel-info-header">

        <div>

          <div className="hotel-info-rating">

            {stay.rating && (

  <div className="hotel-rating-block">

    <div className="hotel-stars">

      {[...Array(5)].map((_, index) => (

  <Star
    key={index}
    size={16}
    fill={
      index < Math.round(stay.rating)
        ? "currentColor"
        : "none"
    }
  />

))}

    </div>

    <div className="hotel-rating-info">

  <strong>
    {stay.rating}{" "}

    {stay.rating >= 4.8
      ? "Exceptional"
      : stay.rating >= 4.5
      ? "Excellent"
      : stay.rating >= 4
      ? "Very Good"
      : "Good"}
  </strong>

  <small>
    {stay.review_count || 0} Reviews
  </small>

</div>

  </div>

)}

            {stay.verified && (
              <span className="verified-badge">
                <ShieldCheck size={15} />
                Verified
              </span>
            )}

          </div>

          <h1 className="hotel-title">

            {stay.name}

          </h1>

          <div className="hotel-location">

            <MapPin size={17} />

            <span>

              {stay.address ||
                stay.locality ||
                stay.city}

            </span>

          </div>

          <div className="hotel-highlights">

            {highlights.map((amenity) => {

              const meta = amenityIcons[amenity] || amenityIcons.default;
              const Icon = meta.icon;

              return (

                <div
                  className="highlight-pill"
                  key={amenity}
                  title={meta.description}
                >

                  <Icon size={15} />

                  {amenity}

                </div>

              );

            })}

          </div>

<div className="hotel-distance">

  <MapPin size={16} />

  <span>{distance}</span>

</div>

        </div>

      </div>

      {/* Property Tags */}

      <div className="hotel-tags">

        <span>{stay.stay_type}</span>

        {stay.featured && (
          <span>Featured</span>
        )}

        {stay.verified && (
          <span>Verified</span>
        )}

        <span>Near Mahakal</span>

      </div>

      {/* About */}

      <div className="hotel-section">

        <h2>

          About the Property

        </h2>

        <p className={aboutExpanded ? "" : "clamped"}>

          {description}

        </p>

        {isLongDescription && (

          <button
            className="view-all-toggle"
            onClick={() => setAboutExpanded((prev) => !prev)}
          >

            {aboutExpanded ? "Show Less" : "View All"}

            <ChevronDown
              size={15}
              className={aboutExpanded ? "rotate" : ""}
            />

          </button>

        )}

      </div>

      {/* Property Overview */}

      <div className="hotel-section">

        <h2>

          Property Overview

        </h2>

        <div className="property-grid">

          <div className="property-item">

            <Clock3 size={18} />

            <div>

              <strong>

                Check-in

              </strong>

              <span>

                {stay.check_in || "12:00 PM"}

              </span>

            </div>

          </div>

          <div className="property-item">

            <Clock3 size={18} />

            <div>

              <strong>

                Check-out

              </strong>

              <span>

                {stay.check_out || "11:00 AM"}

              </span>

            </div>

          </div>

          <div className="property-item">

            <Users size={18} />

            <div>

              <strong>

                Guests

              </strong>

              <span>

                {stay.max_guests || "2 Adults"}

              </span>

            </div>

          </div>

          <div className="property-item">

            <BedDouble size={18} />

            <div>

              <strong>

                Rooms

              </strong>

              <span>

                {stay.room_type || "Standard Rooms"}

              </span>

            </div>

          </div>

          <div className="property-item">

            <Hotel size={18} />

            <div>

              <strong>

                Property Type

              </strong>

              <span>

                {stay.stay_type}

              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default HotelInfo;
