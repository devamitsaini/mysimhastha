import React from "react";
import { Link } from "react-router-dom";
import {
  FaHotel,
  FaHome,
  FaPlaceOfWorship,
  FaBookOpen,
  FaUtensils,
  FaCalendarAlt,
  FaNewspaper,
  FaMapMarkedAlt,
  FaParking,
  FaBus,
  FaShoppingBag,
  FaRoute,
  FaCar,
  FaCloudSun,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

import "./ExploreAndPlan.css";

const handleComingSoon = (e) => {
  e.preventDefault();
  alert("Page coming soon!");
};

const categories = [
  {
    title: "Hotels",
    count: "250+",
    icon: <FaHotel />,
    link: "/stays?filter=hotels",
    color: "#2563EB",
    clickable: true,
  },
  {
    title: "Stays",
    count: "500+",
    icon: <FaHome />,
    link: "/stays",
    color: "#16A34A",
    clickable: true,
  },
  {
    title: "Temples",
    count: "30+",
    icon: <FaPlaceOfWorship />,
    link: "/temples",
    color: "#F97316",
    clickable: false,
  },
  {
    title: "Guides",
    count: "150+",
    icon: <FaBookOpen />,
    link: "/guides",
    color: "#8B5CF6",
    clickable: true,
  },
  {
    title: "Restaurants",
    count: "100+",
    icon: <FaUtensils />,
    link: "/restaurants",
    color: "#DC2626",
    clickable: false,
  },
  {
    title: "Events",
    count: "20+",
    icon: <FaCalendarAlt />,
    link: "/events",
    color: "#0891B2",
    clickable: false,
  },
  {
    title: "News",
    count: "Latest",
    icon: <FaNewspaper />,
    link: "/news",
    color: "#F59E0B",
    clickable: true,
  },
  {
    title: "Explore",
    count: "50+",
    icon: <FaMapMarkedAlt />,
    link: "/explore",
    color: "#10B981",
    clickable: false,
  },
  {
    title: "Parking",
    count: "15+",
    icon: <FaParking />,
    link: "/parking",
    color: "#6366F1",
    clickable: false,
  },
  {
    title: "Transport",
    count: "Guide",
    icon: <FaBus />,
    link: "/transport",
    color: "#EF4444",
    clickable: false,
  },
  {
    title: "Shopping",
    count: "Markets",
    icon: <FaShoppingBag />,
    link: "/shopping",
    color: "#EC4899",
    clickable: false,
  },
  {
    title: "Trip Planner",
    count: "AI",
    icon: <FaRoute />,
    link: "/trip-planner",
    color: "#0EA5E9",
    clickable: false,
  },
];

const tools = [
  {
    title: "Snan Calendar",
    icon: <FaCalendarAlt />,
    color: "#F97316",
    description: "View important bathing dates, festival calendar and religious events.",
    link: "/snan-calendar",
    clickable: true,
  },
  {
    title: "Find Hotels",
    icon: <FaHotel />,
    color: "#16A34A",
    description: "Search verified hotels, guest houses, dharamshalas and homestays.",
    link: "/stays",
    clickable: true,
  },
];

const CategoryCard = ({ item }) => {
  if (item.clickable) {
    return (
      <Link to={item.link} className="category-card">
        <div className="category-icon" style={{ background: item.color }}>
          {item.icon}
        </div>
        <h3>{item.title}</h3>
        <span>{item.count}</span>
        <div className="category-arrow">
          Explore <FaArrowRight />
        </div>
      </Link>
    );
  }

  return (
    <div className="category-card category-card-disabled" onClick={handleComingSoon}>
      <div className="category-icon" style={{ background: item.color }}>
        {item.icon}
      </div>
      <h3>{item.title}</h3>
      <span>{item.count}</span>
      <div className="category-arrow">
        Explore <FaArrowRight />
      </div>
    </div>
  );
};

const ToolCard = ({ tool }) => {
  if (tool.clickable) {
    return (
      <Link to={tool.link} className="tool-card">
        <div className="tool-icon" style={{ background: tool.color }}>
          {tool.icon}
        </div>
        <h3>{tool.title}</h3>
        <p>{tool.description}</p>
        <div className="tool-link">
          Open Tool <FaArrowRight />
        </div>
      </Link>
    );
  }

  return (
    <div className="tool-card tool-card-disabled" onClick={handleComingSoon}>
      <div className="tool-icon" style={{ background: tool.color }}>
        {tool.icon}
      </div>
      <h3>{tool.title}</h3>
      <p>{tool.description}</p>
      <div className="tool-link">
        Open Tool <FaArrowRight />
      </div>
    </div>
  );
};

const ExploreAndPlan = () => {
  return (
    <section className="explore-plan-section">

      <div className="container">

        <div className="section-heading">

          <span className="section-tag">
            EXPLORE & PLAN
          </span>

          <h2>
            Everything For Your Ujjain Journey
          </h2>

          <p>
            Discover hotels, temples, guides, and powerful travel tools
            to plan a hassle-free spiritual journey to Ujjain.
          </p>

        </div>

        {/* Explore Subgroup */}
        <div className="subgroup">
          <span className="subgroup-label">Explore</span>
          <div className="categories-grid">
            {categories.map((item, index) => (
              <CategoryCard key={index} item={item} />
            ))}
          </div>
        </div>

        {/* Tools Subgroup */}
        <div className="subgroup">
          <span className="subgroup-label">Plan & Tools</span>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <ToolCard key={index} tool={tool} />
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};

export default ExploreAndPlan;