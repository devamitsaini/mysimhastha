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
  FaArrowRight,
} from "react-icons/fa";

import "./ExploreCategories.css";

const categories = [
  {
    title: "Hotels",
    count: "250+",
    icon: <FaHotel />,
    link: "/hotels",
    color: "#2563EB",
  },
  {
    title: "Stays",
    count: "500+",
    icon: <FaHome />,
    link: "/stays",
    color: "#16A34A",
  },
  {
    title: "Temples",
    count: "30+",
    icon: <FaPlaceOfWorship />,
    link: "/temples",
    color: "#F97316",
  },
  {
    title: "Guides",
    count: "150+",
    icon: <FaBookOpen />,
    link: "/guide",
    color: "#8B5CF6",
  },
  {
    title: "Restaurants",
    count: "100+",
    icon: <FaUtensils />,
    link: "/restaurants",
    color: "#DC2626",
  },
  {
    title: "Events",
    count: "20+",
    icon: <FaCalendarAlt />,
    link: "/events",
    color: "#0891B2",
  },
  {
    title: "News",
    count: "Latest",
    icon: <FaNewspaper />,
    link: "/news",
    color: "#F59E0B",
  },
  {
    title: "Explore",
    count: "50+",
    icon: <FaMapMarkedAlt />,
    link: "/explore",
    color: "#10B981",
  },
  {
    title: "Parking",
    count: "15+",
    icon: <FaParking />,
    link: "/parking",
    color: "#6366F1",
  },
  {
    title: "Transport",
    count: "Guide",
    icon: <FaBus />,
    link: "/transport",
    color: "#EF4444",
  },
  {
    title: "Shopping",
    count: "Markets",
    icon: <FaShoppingBag />,
    link: "/shopping",
    color: "#EC4899",
  },
  {
    title: "Trip Planner",
    count: "AI",
    icon: <FaRoute />,
    link: "/trip-planner",
    color: "#0EA5E9",
  },
];

const ExploreCategories = () => {
  return (
    <section className="explore-categories">

      <div className="container">

        <div className="section-heading">

          <span className="section-tag">
            EXPLORE
          </span>

          <h2>
            Everything You Need In One Place
          </h2>

          <p>
            Discover hotels, temples, travel guides,
            restaurants, parking, transport and much
            more to plan your perfect pilgrimage.
          </p>

        </div>

        <div className="categories-grid">

          {categories.map((item, index) => (

            <Link
              key={index}
              to={item.link}
              className="category-card"
            >

              <div
                className="category-icon"
                style={{
                  background: item.color,
                }}
              >
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <span>{item.count}</span>

              <div className="category-arrow">

                Explore

                <FaArrowRight />

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
};

export default ExploreCategories;