import {
  FiWifi,
  FiTruck,
  FiCoffee,
  FiHome,
  FiUsers,
  FiShield,
  FiMonitor,
  FiSun,
} from "react-icons/fi";

export default function Amenities({ stay }) {
  const amenities = [];

  if (stay?.wifi)
    amenities.push({
      icon: <FiWifi />,
      title: "Free WiFi",
    });

  if (stay?.parking)
    amenities.push({
      icon: <FiTruck />,
      title: "Parking",
    });

  if (stay?.restaurant)
    amenities.push({
      icon: <FiCoffee />,
      title: "Restaurant",
    });

  if (stay?.lift)
    amenities.push({
      icon: <FiHome />,
      title: "Lift",
    });

  if (stay?.family_room)
    amenities.push({
      icon: <FiUsers />,
      title: "Family Rooms",
    });

  if (stay?.power_backup)
    amenities.push({
      icon: <FiShield />,
      title: "Power Backup",
    });

  if (stay?.ac)
    amenities.push({
      icon: <FiMonitor />,
      title: "Air Conditioning",
    });

  if (stay?.hot_water)
    amenities.push({
      icon: <FiSun />,
      title: "Hot Water",
    });

  if (stay?.wheelchair)
    amenities.push({
      icon: <FiUsers />,
      title: "Wheelchair Accessible",
    });

  if (stay?.ev_charging)
    amenities.push({
      icon: <FiTruck />,
      title: "EV Charging",
    });

  if (amenities.length === 0) {
    return null;
  }

  return (
    <section className="details-card">
      <h2>Amenities</h2>

      <div className="amenities-grid">
        {amenities.map((item) => (
          <div
            className="amenity-item"
            key={item.title}
          >
            {item.icon}
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}