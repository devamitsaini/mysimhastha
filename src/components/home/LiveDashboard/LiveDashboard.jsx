import React from "react";
import { Link } from "react-router-dom";
import {
  FaCloudSun,
  FaOm,
  FaUsers,
  FaRoad,
  FaCalendarAlt,
  FaBullhorn,
} from "react-icons/fa";
import "./LiveDashboard.css";

const dashboardItems = [
  {
    title: "Weather",
    value: "31°C",
    subtitle: "Sunny",
    icon: <FaCloudSun />,
    color: "#F59E0B",
    link: "/guide/weather-in-ujjain",
    updated: "Updated 5 mins ago",
  },
  {
    title: "Temple Status",
    value: "Open",
    subtitle: "Darshan Available",
    icon: <FaOm />,
    color: "#F97316",
    link: "/guide/mahakal-darshan",
    updated: "Updated Now",
  },
  {
    title: "Crowd Level",
    value: "Moderate",
    subtitle: "~25 mins wait",
    icon: <FaUsers />,
    color: "#2563EB",
    link: "/guide/mahakal-crowd",
    updated: "Updated 10 mins ago",
  },
  {
    title: "Traffic",
    value: "Smooth",
    subtitle: "No Major Delays",
    icon: <FaRoad />,
    color: "#16A34A",
    link: "/guide/parking-near-mahakal",
    updated: "Updated 2 mins ago",
  },
  {
    title: "Today's Events",
    value: "3 Events",
    subtitle: "View Schedule",
    icon: <FaCalendarAlt />,
    color: "#8B5CF6",
    link: "/events",
    updated: "Today's Schedule",
  },
  {
    title: "Travel Alerts",
    value: "2 Alerts",
    subtitle: "Latest Updates",
    icon: <FaBullhorn />,
    color: "#DC2626",
    link: "/news",
    updated: "Updated 1 min ago",
  },
];

const LiveDashboard = () => {
  return (
    <section className="live-dashboard">
      <div className="container">

        <div className="section-heading">
          <span className="section-tag">LIVE UPDATES</span>

          <h2>Today's Ujjain</h2>

          <p>
            Stay updated with the latest weather, temple status,
            crowd information, traffic and important alerts before
            starting your pilgrimage.
          </p>
        </div>

        <div className="dashboard-grid">
          {dashboardItems.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="dashboard-card"
            >
              <div
                className="dashboard-icon"
                style={{ background: item.color }}
              >
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <h4>{item.value}</h4>

              <p>{item.subtitle}</p>

              <span>{item.updated}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveDashboard;