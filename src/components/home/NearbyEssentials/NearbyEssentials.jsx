import React from "react";
import { Link } from "react-router-dom";
import {
  FaHospital,
  FaParking,
  FaUtensils,
  FaTrain,
  FaBus,
  FaGasPump,
  FaUniversity,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import "./NearbyEssentials.css";

const essentials = [
  {
    title: "Restaurants",
    icon: <FaUtensils />,
    color: "#F97316",
    description:
      "Discover the best vegetarian restaurants, breakfast spots, cafes and local food near Mahakal Temple.",
    places: "120+ Places",
    link: "/restaurants",
  },
  {
    title: "Parking",
    icon: <FaParking />,
    color: "#2563EB",
    description:
      "Find verified parking areas near Mahakal Temple, Ram Ghat and Mahakal Lok with updated information.",
    places: "25+ Parking Areas",
    link: "/parking",
  },
  {
    title: "Hospitals",
    icon: <FaHospital />,
    color: "#DC2626",
    description:
      "Locate nearby hospitals, emergency services, medical stores and healthcare facilities.",
    places: "35+ Hospitals",
    link: "/hospitals",
  },
  {
    title: "Railway Station",
    icon: <FaTrain />,
    color: "#16A34A",
    description:
      "Travel information, nearby hotels, transport options and railway station guide.",
    places: "Complete Guide",
    link: "/guide/ujjain-railway-station",
  },
  {
    title: "Bus Stand",
    icon: <FaBus />,
    color: "#0EA5E9",
    description:
      "Find ISBT, city bus stops, local buses and interstate transport information.",
    places: "Travel Guide",
    link: "/transport",
  },
  {
    title: "Petrol Pumps",
    icon: <FaGasPump />,
    color: "#F59E0B",
    description:
      "Locate nearby fuel stations, EV charging points and highway service centres.",
    places: "40+ Locations",
    link: "/petrol-pumps",
  },
  {
    title: "ATM & Banks",
    icon: <FaUniversity />,
    color: "#8B5CF6",
    description:
      "Find nearby ATMs, banks, currency exchange and financial services.",
    places: "75+ ATMs",
    link: "/atm",
  },
  {
    title: "Tourist Places",
    icon: <FaMapMarkerAlt />,
    color: "#10B981",
    description:
      "Explore Mahakal Lok, Ram Ghat, Kal Bhairav, Harsiddhi and famous attractions.",
    places: "50+ Attractions",
    link: "/explore",
  },
];

const NearbyEssentials = () => {
  return (
    <section className="nearby-essentials">

      <div className="container">

        <div className="section-heading">

          <span className="section-tag">
            ESSENTIAL SERVICES
          </span>

          <h2>
            Everything You Need Nearby
          </h2>

          <p>
            Easily find restaurants, hospitals, parking, railway station,
            petrol pumps, ATMs and essential services for a smooth and
            comfortable pilgrimage in Ujjain.
          </p>

        </div>

        <div className="essentials-grid">

          {essentials.map((item, index) => (

            <Link
              key={index}
              to={item.link}
              className="essential-card"
            >

              <div
                className="essential-icon"
                style={{
                  background: item.color,
                }}
              >
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <span className="essential-count">
                {item.places}
              </span>

              <div className="essential-link">

                Explore

                <FaArrowRight />

              </div>

            </Link>

          ))}

        </div>

        <div className="essential-footer">

          <Link
            to="/explore"
            className="essential-btn"
          >

            Explore Ujjain

            <FaArrowRight />

          </Link>

        </div>

      </div>

    </section>
  );
};

export default NearbyEssentials;