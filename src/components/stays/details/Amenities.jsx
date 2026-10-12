import {
  FiWifi,
  FiTruck,
  FiCoffee,
  FiHome,
  FiUsers,
  FiShield,
  FiWind,
  FiDroplet,
  FiBox,
  FiTv,
  FiSun,
  FiCheckCircle,
  FiCamera,
  FiCheck,
  FiMapPin,
  FiLock,
  FiPackage,
  FiZap,
  FiUserCheck,
} from "react-icons/fi";

// Map amenity keys (as stored in the DB) to user-friendly display labels.
const labelMap = {
  wifi: "WiFi",
  free_wifi: "WiFi",
  "air_conditioning": "Air Conditioning",
  ac: "Air Conditioning",
  "airport_shuttle": "Airport Shuttle",
  breakfast: "Breakfast",
  parking: "Parking",
  pool: "Pool",
  lift: "Lift",
  "family_room": "Family Room",
  "power_backup": "Power Backup",
  "hot_water": "Hot Water",
  "ev_charging": "EV Charging",
  wheelchair: "Wheelchair Access",
  restaurant: "Restaurant",
  "daily_housekeeping": "Daily Housekeeping",
  cctv: "CCTV",
  "24x7_assistance": "24x7 Assistance",
  "pets_allowed": "Pets Allowed",
  // Raw labels already stored on enriched rows.
  "parking": "Parking",
  "breakfast": "Breakfast",
  "air_conditioning": "Air Conditioning",
  "airport_shuttle": "Airport Shuttle",
};

// Icons for known amenity labels.
const iconMap = {
  WiFi: FiWifi,
  "Air Conditioning": FiWind,
  "Airport Shuttle": FiTruck,
  Breakfast: FiCoffee,
  Parking: FiTruck,
  Pool: FiSun,
  Lift: FiHome,
  "Family Room": FiUsers,
  "Power Backup": FiZap,
  "Hot Water": FiDroplet,
  "EV Charging": FiZap,
  "Wheelchair Access": FiUserCheck,
  Restaurant: FiCoffee,
  "Daily Housekeeping": FiCheck,
  CCTV: FiCamera,
  "24x7 Assistance": FiCheckCircle,
  "Pets Allowed": FiUsers,
};

function sortAmenities(list) {
  return [...list].sort((a, b) => a.label.localeCompare(b.label));
}

export default function Amenities({ stay }) {
  const amenities = (stay.amenities || [])
    .map((key) => {
      const raw = String(key || "").trim();
      if (!raw) return null;
      const label = labelMap[raw.toLowerCase()] || raw;
      const Icon = iconMap[label] || FiCheckCircle;
      return { label, icon: <Icon /> };
    })
    .filter(Boolean)
    .sort(sortAmenities);

  if (amenities.length === 0) {
    return (
      <section className="details-card">
        <h2>Amenities</h2>
        <p style={{ color: "#64748b", fontSize: "14px", margin: 0 }}>
          Contact the property for detailed amenities information.
        </p>
      </section>
    );
  }

  return (
    <section className="details-card">
      <h2>Amenities</h2>

      <div className="amenities-grid">
        {amenities.map(({ label, icon }) => (
          <div className="amenity-item" key={label}>
            {icon}
            <h4>{label}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}