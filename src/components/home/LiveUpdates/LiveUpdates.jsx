import React from "react";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaCloudSun,
  FaClock,
  FaCar,
  FaCalendarCheck,
} from "react-icons/fa";
import "./LiveUpdates.css";

const LiveUpdates = () => {
  const liveUpdates = [
    {
      icon: FaUsers,
      label: "Crowd Status",
      value: "Moderate",
      subtext: "Normal Rush",
      color: "#F97316",
      route: "/crowd-status",
      clickable: false,
    },
    {
      icon: FaCloudSun,
      label: "Weather",
      value: "29°C",
      subtext: "Partly Cloudy",
      color: "#3B82F6",
      route: "/weather",
      clickable: false,
    },
    {
      icon: FaClock,
      label: "Temple Timings",
      value: "4:00 AM – 11:00 PM",
      subtext: "Mahakaleshwar",
      color: "#6366F1",
      route: "/temple-timings",
      clickable: false,
    },
    {
      icon: FaCar,
      label: "Road Updates",
      value: "Normal",
      subtext: "No congestion",
      color: "#10B981",
      route: "/road-updates",
      clickable: false,
    },
    {
      icon: FaCalendarCheck,
      label: "Upcoming Event",
      value: "30 July",
      subtext: "Shravan Month",
      color: "#F59E0B",
      route: "/guide/sawan-2026-dates",
      clickable: true,
    },
  ];

  return (
    <section className="live-updates-section">
      <div className="live-updates-container">
        <div className="section-header">
          <div className="section-title">
            <h2>Live Updates in Ujjain</h2>
            <span className="live-indicator">
              <span className="live-dot"></span>
              Live
            </span>
          </div>
          {/*}
          <Link to="/updates" className="view-all-link">
            View All
            <span className="arrow">›</span>
          </Link>
          */}
        </div>

        <div className="live-updates-grid">
          {liveUpdates.map((item, index) => (
            <UpdateCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const UpdateCard = ({ item }) => {
  const cardContent = (
    <>
      <div className="update-icon" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
        <item.icon />
      </div>
      <div className="update-content">
        <div className="update-label">{item.label}</div>
        <div className="update-value" style={{ color: item.color }}>
          {item.value}
        </div>
        <div className="update-subtext">{item.subtext}</div>
      </div>
    </>
  );

  if (item.clickable) {
    return (
      <Link to={item.route} className="update-card">
        {cardContent}
      </Link>
    );
  }

  return (
    <div className="update-card update-card-disabled">
      {cardContent}
    </div>
  );
};

export default LiveUpdates;