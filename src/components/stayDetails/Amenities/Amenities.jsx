import { useState } from "react";

import {
  Wifi,
  Car,
  Utensils,
  Snowflake,
  Bath,
  ShieldCheck,
  Tv,
  Coffee,
  Dumbbell,
  Waves,
  BatteryCharging,
  Clock3,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

import { getAmenities } from "../../../utils/getAmenities";

import "./Amenities.css";

const Amenities = ({ stay }) => {
  if (!stay) return null;

  // Real amenity list — from stay.amenities if present in Supabase,
  // otherwise a sensible default set based on stay_type.
  const activeAmenities = getAmenities(stay);

  const has = (label, fallbackField) =>
    activeAmenities.includes(label) || Boolean(stay[fallbackField]);

  const amenities = [
    {
      icon: Wifi,
      label: "Free WiFi",
      available: has("Free WiFi", "wifi"),
    },
    {
      icon: Car,
      label: "Parking",
      available: has("Parking", "parking"),
    },
    {
      icon: Utensils,
      label: "Restaurant",
      available: has("Restaurant", "restaurant"),
    },
    {
      icon: Snowflake,
      label: "Air Conditioning",
      available: has("Air Conditioning", "ac"),
    },
    {
      icon: Bath,
      label: "Hot Water",
      available: has("Hot Water", "hot_water"),
    },
    {
      icon: ShieldCheck,
      label: "24×7 Security",
      available: Boolean(stay.security),
    },
    {
      icon: Tv,
      label: "Television",
      available: Boolean(stay.tv),
    },
    {
      icon: Coffee,
      label: "Breakfast",
      available: Boolean(stay.breakfast),
    },
    {
      icon: Dumbbell,
      label: "Gym",
      available: Boolean(stay.gym),
    },
    {
      icon: Waves,
      label: "Swimming Pool",
      available: Boolean(stay.pool),
    },
    {
      icon: BatteryCharging,
      label: "Power Backup",
      available: Boolean(stay.power_backup),
    },
    {
      icon: Clock3,
      label: "24×7 Reception",
      available: has("24×7 Reception", "reception"),
    },
  ];

  // Show available amenities first, so the preview is useful at a glance
  const sortedAmenities = [...amenities].sort(
    (a, b) => (b.available ? 1 : 0) - (a.available ? 1 : 0)
  );

  const PREVIEW_COUNT = 6;

  const [showAll, setShowAll] = useState(false);

  const visibleAmenities = showAll
    ? sortedAmenities
    : sortedAmenities.slice(0, PREVIEW_COUNT);

  return (
    <section className="hotel-amenities">

      <div className="amenities-header">

        <h2>Amenities</h2>

        <span>
          {amenities.filter(a => a.available).length} Available
        </span>

      </div>

      <div className="amenities-grid">

        {visibleAmenities.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.label}
              className={`amenity-card ${
                item.available
                  ? "available"
                  : "disabled"
              }`}
            >

              <div className="amenity-icon">

                <Icon size={22} />

              </div>

              <div className="amenity-content">

                <h4>{item.label}</h4>

                <small>

                  {item.available
                    ? "Available"
                    : "Not Available"}

                </small>

              </div>

              {item.available && (

                <CheckCircle2
                  size={20}
                  className="amenity-check"
                />

              )}

            </div>

          );

        })}

      </div>

      {sortedAmenities.length > PREVIEW_COUNT && (

        <button
          className="view-all-amenities"
          onClick={() => setShowAll((prev) => !prev)}
        >

          {showAll
            ? "Show Less"
            : `View All Amenities (${sortedAmenities.length})`}

          <ChevronDown
            size={16}
            className={showAll ? "rotate" : ""}
          />

        </button>

      )}

    </section>
  );
};

export default Amenities;
