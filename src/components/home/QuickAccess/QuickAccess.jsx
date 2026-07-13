import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPray,
  FaFire,
  FaHotel,
  FaHome,
  FaUtensils,
  FaCalendarAlt,
  FaPlaceOfWorship,
  FaVideo,
  FaMapMarkerAlt,
  FaExclamationTriangle,
  FaNewspaper,
  FaParking,
  FaBus,
  FaShoppingBag,
  FaRoute,
} from "react-icons/fa";
import "./QuickAccess.css";

const handleComingSoon = (e) => {
  e.preventDefault();
  alert("🔧 This feature will be live soon! Stay tuned for updates on MySimhastha.");
};

const QuickAccess = () => {
  const [showAll, setShowAll] = useState(false);

  const quickAccessItems = [
    {
      icon: FaPray,
      label: "Mahakal\nDarshan",
      route: "/guide/mahakal-darshan",
      color: "#F97316",
      clickable: true,
    },
    {
      icon: FaFire,
      label: "Bhasma\nAarti",
      route: "/guide/bhasma-arti",
      color: "#EF4444",
      clickable: true,
    },
    {
      icon: FaHotel,
      label: "Hotels &\nStays",
      route: "/stays",
      color: "#3B82F6",
      clickable: true,
    },
    {
      icon: FaCalendarAlt,
      label: "Snan\nCalendar",
      route: "/snan-calendar",
      color: "#F59E0B",
      clickable: true,
    },
    {
      icon: FaPlaceOfWorship,
      label: "Temple &\nTiming",
      route: "/temples",
      color: "#6366F1",
      clickable: true,
    },
    {
      icon: FaVideo,
      label: "Live\nDarshan",
      route: "/live-darshan",
      color: "#8B5CF6",
      badge: "LIVE",
      clickable: true,
    },
    {
      icon: FaMapMarkerAlt,
      label: "How to\nReach",
      route: "/guide/how-to-reach-ujjain",
      color: "#10B981",
      clickable: true,
    },
    {
      icon: FaExclamationTriangle,
      label: "Emergency\nHelp",
      route: "/missing-persons",
      color: "#EF4444",
      clickable: true,
    },
    {
      icon: FaNewspaper,
      label: "News",
      route: "/news",
      color: "#F59E0B",
      clickable: true,
    },
    {
      icon: FaUtensils,
      label: "Restaurant",
      route: "/restaurants",
      color: "#DC2626",
      clickable: false,
    },
    {
      icon: FaRoute,
      label: "Trip\nPlanner",
      route: "/guide/2-3-day-ujjain-itinerary",
      color: "#0EA5E9",
      clickable: true,
    },
    {
      icon: FaExclamationTriangle,
      label: "Report\nMissing",
      route: "/missing-persons",
      color: "#DC2626",
      clickable: true,
    },
    // Coming soon items (not clickable)
    {
      icon: FaCalendarAlt,
      label: "Events",
      route: "/events",
      color: "#0891B2",
      clickable: false,
    },
    {
      icon: FaParking,
      label: "Parking",
      route: "/parking",
      color: "#6366F1",
      clickable: false,
    },
    {
      icon: FaBus,
      label: "Transport",
      route: "/transport",
      color: "#EF4444",
      clickable: false,
    },
    {
      icon: FaHome,
      label: "Hostel",
      route: "/hostel",
      color: "#16A34A",
      clickable: false,
    },
    {
      icon: FaMapMarkerAlt,
      label: "Locker",
      route: "/locker",
      color: "#0891B2",
      clickable: false,
    },
    {
      icon: FaShoppingBag,
      label: "Shopping",
      route: "/shopping",
      color: "#EC4899",
      clickable: false,
    },
  ];

  const visibleItems = showAll ? quickAccessItems : quickAccessItems.slice(0, 8);

  const QuickAccessCard = ({ item }) => {
    if (item.clickable) {
      return (
        <Link to={item.route} className="quick-access-card">
          <div className="quick-access-icon" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
            <item.icon />
            {item.badge && <span className="live-badge">{item.badge}</span>}
          </div>
          <span className="quick-access-label" style={{ whiteSpace: "pre-line" }}>
            {item.label}
          </span>
        </Link>
      );
    }

    return (
      <div className="quick-access-card quick-access-card-disabled" onClick={handleComingSoon}>
        <div className="quick-access-icon" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
          <item.icon />
          {item.badge && <span className="live-badge">{item.badge}</span>}
        </div>
        <span className="quick-access-label" style={{ whiteSpace: "pre-line" }}>
          {item.label}
        </span>
      </div>
    );
  };

  return (
    <section className="quick-access-section">
      <div className="quick-access-container">
        <div className="section-header">
          <h2>Quick Access</h2>
          
          <span className="view-all-link" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "View All"}
            <span className="arrow">›</span>
          </span>
      
        </div>

        <div className="quick-access-grid">
          {visibleItems.map((item, index) => (
            <QuickAccessCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;