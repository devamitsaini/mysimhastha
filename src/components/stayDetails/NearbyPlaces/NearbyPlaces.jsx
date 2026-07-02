import { useState } from "react";

import {
  Landmark,
  Waves,
  Train,
  Bus,
  Plane,
  Navigation,
} from "lucide-react";

import { NEARBY_TEMPLES, NEARBY_GHATS } from "../../../utils/staysConstants";

import "./NearbyPlaces.css";

const NearbyPlaces = ({ stay }) => {
  if (!stay) return null;

  const transportPlaces = [
    {
      icon: <Train size={20} />,
      name: "Ujjain Junction",
      distance: stay.distance_to_station || "2.8 km",
    },
    {
      icon: <Bus size={20} />,
      name: "Nanakheda Bus Stand",
      distance: stay.distance_to_busstand || "4 km",
    },
    {
      icon: <Plane size={20} />,
      name: "Indore Airport",
      distance: stay.distance_to_airport || "55 km",
    },
  ];

  const tabs = [
    {
      id: "temples",
      label: "Temples",
      icon: <Landmark size={16} />,
      places: NEARBY_TEMPLES.map((t) => ({
        icon: <Landmark size={20} />,
        name: t.name,
        distance: t.distance,
        tag: t.type,
      })),
    },
    {
      id: "ghats",
      label: "Ghats",
      icon: <Waves size={16} />,
      places: NEARBY_GHATS.map((g) => ({
        icon: <Waves size={20} />,
        name: g.name,
        distance: g.distance,
      })),
    },
    {
      id: "transport",
      label: "Transport",
      icon: <Train size={16} />,
      places: transportPlaces,
    },
  ];

  const [activeTab, setActiveTab] = useState("temples");

  const activePlaces =
    tabs.find((t) => t.id === activeTab)?.places || [];

  return (
    <section className="nearby-section">

      <h2>Nearby Places</h2>

      <div className="nearby-tabs">

        {tabs.map((tab) => (

          <button
            key={tab.id}
            className={`nearby-tab ${
              activeTab === tab.id ? "active" : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >

            {tab.icon}

            {tab.label}

          </button>

        ))}

      </div>

      <div className="nearby-grid">

        {activePlaces.map((place) => (

          <div
            className="nearby-card"
            key={place.name}
          >

            <div className="nearby-icon">

              {place.icon}

            </div>

            <div className="nearby-info">

              <h4>{place.name}</h4>

              <span>

                {place.distance}

                {place.tag && (
                  <em className="nearby-tag">{place.tag}</em>
                )}

              </span>

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
