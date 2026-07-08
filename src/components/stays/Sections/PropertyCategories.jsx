import React from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiGrid,
  FiUsers,
  FiArrowRight,
} from "react-icons/fi";
import { MdTempleHindu } from "react-icons/md";

import "./PropertyCategories.css";

const categories = [
  {
    name: "Hotels",
    icon: <FiHome />,
    count: 248,
    type: "Hotel",
  },
  {
    name: "Homestays",
    icon: <FiUsers />,
    count: 61,
    type: "Homestay",
  },
  {
    name: "Guest Houses",
    icon: <FiGrid />,
    count: 29,
    type: "Guest House",
  },
  {
    name: "Dharamshalas",
    icon: <MdTempleHindu />,
    count: 34,
    type: "Dharamshala",
  },
];

export default function PropertyCategories() {
  return (
    <section className="property-types">

      <div className="stay-container">

        <div className="section-heading">

          <h2>Browse by Stay Type</h2>

          <p>
            Choose the accommodation that best fits your journey to Ujjain.
          </p>

        </div>

        <div className="category-grid">

          {categories.map((item) => (

            <Link
              key={item.name}
              to={`/stays/list?type=${encodeURIComponent(item.type)}`}
              className="category-card"
            >

              <div className="category-icon">
                {item.icon}
              </div>

              <h3>{item.name}</h3>

              <span>{item.count}+ Properties</span>

              <small>

                Explore

                <FiArrowRight />

              </small>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}