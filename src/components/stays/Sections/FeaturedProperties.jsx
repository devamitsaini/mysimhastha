import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiStar,
  FiCheckCircle,
  FiArrowRight,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

import { fetchFeaturedStays } from "../../../services/staysService";
import FeaturedStayCard from "../Cards/FeaturedStayCard";

import "./FeaturedProperties.css";

export default function FeaturedProperties() {
  const [stays, setStays] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const { data: featuredStays } = await fetchFeaturedStays(3);
        setStays(featuredStays || []);
      } catch (error) {
        console.error('Error loading featured properties:', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const demoCards = stays.length > 0 
    ? stays.map(stay => ({
        type: stay.stay_type || 'Hotel',
        location: stay.locality || stay.city || 'Ujjain',
        price: `Starting ₹${stay.starting_price || stay.price_from || '999'}`,
        image: stay.featured_image || stay.image || "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
        slug: stay.slug
      }))
    : [];

 const benefits = [
  "Homepage Featured Placement",
  "Priority Stay Listing",
  "Verified Partner Badge",
  "Direct Customer Enquiries",
];

const stats = [
  {
    label: "Daily Visitors",
    value: "1K+",
  },
  {
    label: "Active Listings",
    value: "100+",
  },
  {
    label: "Slots",
    value: "Limited",
  },
];

const partnershipEmail = "business@mysimhastha.com";

const partnershipPhone = "+91 99999 99999";

const partnershipResponseTime =
  "Usually replies within 24 hours.";

  return (
    <section className="featured-section">

      <div className="stay-container">

        <div className="featured-partner-card">

          {/* LEFT */}

          <div className="featured-left">

            <span className="featured-tag">
              <FiStar />
              Become a Featured Stay Partner
            </span>

            <h2>
              Put Your Property in Front of
              <br />
              Thousands of Pilgrims
            </h2>

            <p>
              Showcase your property on
              <strong> MySimhastha</strong> and receive
              direct enquiries from pilgrims
              planning their visit.
            </p>

            <div className="featured-benefits">

              {benefits.map((item) => (

                <div
                  key={item}
                  className="benefit-item"
                >
                  <FiCheckCircle />
                  <span>{item}</span>
                </div>

              ))}

            </div>

          </div>

          {/* RIGHT */}

          <div className="featured-right">

        

            <div className="contact-card">

              <h3>
                Ready to Grow?
              </h3>

              <p>
                Contact our partnership team and
                get your accommodation featured.
              </p>

              <div className="contact-row">
                <FiMail />
                <a href={`mailto:${partnershipEmail}`}>
                  {partnershipEmail}
                </a>
              </div>

              <div className="contact-row">
                <FiPhone />
                <a href={`tel:${partnershipPhone}`}>
                  {partnershipPhone}
                </a>
              </div>

              <p className="reply-text">
                {partnershipResponseTime}
              </p>

              <Link
                className="partner-btn"
                to="/list-your-property"
              >
                Become a Featured Partner

                <FiArrowRight />
              </Link>

            </div>

          </div>

        </div>
        

       {/* ===========================================
    PREMIUM PREVIEW
=========================================== */}

<div className="featured-preview-section">

  <div className="preview-header">

    <span className="preview-tag">
      Premium Placement Preview
    </span>

    <h2>Your Property Could Be Here</h2>

    <p>
      Stand out from the crowd with a featured listing.
    
    </p>

    <div className="preview-stats">

      {stats.map((stat, index) => (

        <div key={index} className="stat-item">

          <div className="stat-value">{stat.value}</div>

          <div className="stat-label">{stat.label}</div>

        </div>

      ))}

    </div>

  </div>

  <div className="preview-grid">

    {demoCards.map((card, index) => (

      <Link
        key={card.slug || index}
        to={card.slug ? `/stays/${card.slug}` : "/list-your-property"}
        className="preview-card"
      >

        <div
          className="preview-image"
          style={{
            backgroundImage: `url(${card.image})`,
          }}
        >

          <div className="featured-ribbon">

            ⭐ FEATURED

          </div>

          <div className="preview-overlay">

            <span>Your Property</span>

            <strong>Could Be Here</strong>

          </div>

        </div>

        <div className="preview-body">

          <div className="preview-rating">

            ⭐⭐⭐⭐⭐

            <span> Premium Listing</span>

          </div>

          <h3>{card.type}</h3>

          <div className="preview-location">

            <FiMapPin />

            <span>{card.location}</span>

          </div>

          <div className="preview-price">

            {card.price}

          </div>

          <div className="preview-btn">

            Become Featured

            <FiArrowRight />

          
          </div>

        </div>

      </Link>

    ))}

  </div>

</div>

      </div>

    </section>

  );

}





/*import React, { useEffect, useState } from "react";
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

}*/