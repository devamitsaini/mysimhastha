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

// Map amenity labels (as stored in the DB) to React icon components.
// Icons are resolved in React — never stored in the database.
const iconMap = {
  // Exact matches from the example dataset
  Kitchen: <FiHome />,
  Refrigerator: <FiBox />,
  "RO Water": <FiDroplet />,
  CCTV: <FiCamera />,
  "Daily Housekeeping": <FiCheck />,
  Terrace: <FiSun />,
  Towels: <FiCheckCircle />,
  Toiletries: <FiDroplet />,
  "24x7 Assistance": <FiCheckCircle />,
  "Pets Allowed": <FiUsers />,

  // Additional common amenities
  Parking: <FiTruck />,
  WiFi: <FiWifi />,
  "Free WiFi": <FiWifi />,
  AC: <FiWind />,
  "Air Conditioning": <FiWind />,
  Restaurant: <FiCoffee />,
  Lift: <FiHome />,
  "Power Backup": <FiZap />,
  "Hot Water": <FiDroplet />,
  Wheelchair: <FiUserCheck />,
  "EV Charging": <FiZap />,
  "Family Room": <FiUsers />,
  Security: <FiShield />,
  TV: <FiTv />,
  "Smart TV": <FiTv />,
  Balcony: <FiSun />,
  Reception: <FiMapPin />,
  Locker: <FiLock />,
  "Luggage Storage": <FiPackage />,
  Garden: <FiSun />,
  "Smoking Area": <FiUsers />,
  Dormitory: <FiUsers />,
};

// Display order for nicer sorting (anything else falls to the end, alphabetically).
const order = [
  "Parking",
  "WiFi",
  "Free WiFi",
  "AC",
  "Air Conditioning",
  "Restaurant",
  "Kitchen",
  "Refrigerator",
  "RO Water",
  "CCTV",
  "Daily Housekeeping",
  "Terrace",
  "Balcony",
  "Towels",
  "Toiletries",
  "24x7 Assistance",
  "Pets Allowed",
  "Lift",
  "Power Backup",
  "Hot Water",
  "Wheelchair",
  "EV Charging",
  "Family Room",
  "Security",
  "TV",
  "Smart TV",
  "Reception",
  "Locker",
  "Luggage Storage",
  "Garden",
  "Smoking Area",
  "Dormitory",
];

function sortAmenities(list) {
  return [...list].sort((a, b) => {
    const ia = order.indexOf(a);
    const ib = order.indexOf(b);
    if (ia === -1 && ib === -1) return a.localeCompare(b);
    if (ia === -1) return 1;
    if (ib === -1) return -1;
    return ia - ib;
  });
}

export default function Amenities({ stay }) {
  const amenities = sortAmenities(stay.amenities || []);

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
        {amenities.map((label) => (
          <div className="amenity-item" key={label}>
            {iconMap[label] || <FiCheckCircle />}
            <h4>{label}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}