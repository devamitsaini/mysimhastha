import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiGrid,
  FiUsers,
  FiArrowRight,
} from "react-icons/fi";
import { MdTempleHindu } from "react-icons/md";

import { fetchStayCountsByType } from "../../../services/staysService";

import "./PropertyCategories.css";

const iconMap = {
  "Hotel": <FiHome />,
  "Homestay": <FiUsers />,
  "Guest House": <FiGrid />,
  "Dharamshala": <MdTempleHindu />,
};

export default function PropertyCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCategories() {
      try {
        const { data } = await fetchStayCountsByType();
        const mappedCategories = (data || []).map(item => ({
          name: item.stay_type,
          type: item.stay_type,
          count: item.count,
          icon: iconMap[item.stay_type] || <FiHome />,
        }));
        setCategories(mappedCategories);
      } catch (error) {
        console.error('Error loading categories:', error);
      } finally {
        setLoading(false);
      }
    }

    loadCategories();
  }, []);

  if (loading) {
    return (
      <section className="property-types">
        <div className="stay-container">
          <div className="section-heading">
            <h2>Browse by Stay Type</h2>
            <p>Choose the accommodation that best fits your journey to Ujjain.</p>
          </div>
          <div className="category-grid">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="category-card loading-skeleton">
                <div className="skeleton-overlay"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (categories.length === 0) {
    return null;
  }

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
