import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiStar } from "react-icons/fi";

import FeaturedStayCard from "../Cards/FeaturedStayCard";
import { fetchFeaturedStays } from "../../../services/staysService";

import "./FeaturedProperties.css";

export default function FeaturedProperties() {

  const [stays, setStays] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFeaturedStays();
  }, []);

  async function loadFeaturedStays() {

    setLoading(true);

    const { data } = await fetchFeaturedStays(6);

    setStays(data || []);

    setLoading(false);

  }

  return (

    <section className="featured-section">

      <div className="stay-container">

        <div className="featured-header">

          <div>

            <span className="featured-tag">

              <FiStar />

              Featured Stays

            </span>

            <h2>

              Handpicked Accommodation Near
              <br />
              Mahakaleshwar Temple

            </h2>

            <p>

              Verified hotels, homestays, guest houses and
              dharamshalas selected for pilgrims visiting Ujjain.

            </p>

          </div>

          <Link
            to="/stays/list"
            className="view-all-btn"
          >

            View All

            <FiArrowRight />

          </Link>

        </div>

        {loading ? (

          <div className="loading-state">

            Loading Featured Properties...

          </div>

        ) : (

          <div className="featured-stays-grid">

            {stays.map((stay) => (

              <FeaturedStayCard
                key={stay.id}
                stay={stay}
              />

            ))}

          </div>

        )}

      </div>

    </section>

  );

}