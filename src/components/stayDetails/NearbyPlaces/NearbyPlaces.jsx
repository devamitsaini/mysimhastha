import {
  Landmark,
  Train,
  Bus,
  Plane,
  Navigation,
} from "lucide-react";

import "./NearbyPlaces.css";

const NearbyPlaces = ({ stay }) => {
  if (!stay) return null;

  const places = [
    {
      icon: <Landmark size={22} />,
      name: "Mahakaleshwar Temple",
      distance: stay.distance_to_mahakal || "1.2 km",
    },
    {
      icon: <Landmark size={22} />,
      name: "Mahakal Lok",
      distance: stay.distance_to_mahakal_lok || "1.5 km",
    },
    {
      icon: <Train size={22} />,
      name: "Ujjain Junction",
      distance: stay.distance_to_station || "2.8 km",
    },
    {
      icon: <Bus size={22} />,
      name: "Nanakheda Bus Stand",
      distance: stay.distance_to_busstand || "4 km",
    },
    {
      icon: <Plane size={22} />,
      name: "Indore Airport",
      distance: stay.distance_to_airport || "55 km",
    },
  ];

  return (
    <section className="nearby-section">

      <h2>Nearby Places</h2>

      <div className="nearby-grid">

        {places.map((place) => (

          <div
            className="nearby-card"
            key={place.name}
          >

            <div className="nearby-icon">

              {place.icon}

            </div>

            <div className="nearby-info">

              <h4>{place.name}</h4>

              <span>{place.distance}</span>

            </div>

            <Navigation
              size={18}
              className="nearby-arrow"
            />

          </div>

        ))}

      </div>

    </section>
  );
};

export default NearbyPlaces;