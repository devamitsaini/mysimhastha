import React from "react";
import { Link } from "react-router-dom";
import {
  FaRoute,
  FaCalendarAlt,
  FaHotel,
  FaCar,
  FaMapMarkedAlt,
  FaPlaceOfWorship,
  FaCloudSun,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

import "./PilgrimTools.css";

const tools = [
  {
    title: "Trip Planner",
    icon: <FaRoute />,
    color: "#2563EB",
    description:
      "Create your personalized Ujjain itinerary based on duration, budget and travel preferences.",
    link: "/trip-planner",
  },
  {
    title: "Snan Calendar",
    icon: <FaCalendarAlt />,
    color: "#F97316",
    description:
      "View important bathing dates, festival calendar and religious events.",
    link: "/snan-calendar",
  },
  {
    title: "Find Hotels",
    icon: <FaHotel />,
    color: "#16A34A",
    description:
      "Search verified hotels, guest houses, dharamshalas and homestays.",
    link: "/stays",
  },
  {
    title: "Parking Guide",
    icon: <FaCar />,
    color: "#DC2626",
    description:
      "Locate nearby parking areas around Mahakal Temple and major attractions.",
    link: "/parking",
  },
  {
    title: "Temple Guide",
    icon: <FaPlaceOfWorship />,
    color: "#8B5CF6",
    description:
      "Explore famous temples, timings, rituals and visitor information.",
    link: "/temples",
  },
  {
    title: "Ujjain Map",
    icon: <FaMapMarkedAlt />,
    color: "#0891B2",
    description:
      "Navigate temples, hotels, restaurants and attractions with ease.",
    link: "/explore",
  },
  {
    title: "Weather",
    icon: <FaCloudSun />,
    color: "#F59E0B",
    description:
      "Check live weather before planning your pilgrimage.",
    link: "/weather",
  },
  {
    title: "Aarti Timings",
    icon: <FaClock />,
    color: "#EC4899",
    description:
      "View Mahakal Aarti timings and important temple schedules.",
    link: "/guide/bhasma-aarti",
  },
];

const PilgrimTools = () => {
  return (
    <section className="pilgrim-tools">

      <div className="container">

        <div className="section-heading">

          <span className="section-tag">
            PILGRIM TOOLS
          </span>

          <h2>
            Everything You Need To Plan Your Journey
          </h2>

          <p>
            Powerful travel tools to help you plan,
            navigate and enjoy a hassle-free spiritual
            journey to Ujjain.
          </p>

        </div>

        <div className="tools-grid">

          {tools.map((tool, index) => (

            <Link
              key={index}
              to={tool.link}
              className="tool-card"
            >

              <div
                className="tool-icon"
                style={{
                  background: tool.color,
                }}
              >

                {tool.icon}

              </div>

              <h3>

                {tool.title}

              </h3>

              <p>

                {tool.description}

              </p>

              <div className="tool-link">

                Open Tool

                <FaArrowRight />

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
};

export default PilgrimTools;