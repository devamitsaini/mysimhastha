import React from "react";
import { Link } from "react-router-dom";
import {
  FaPlaceOfWorship,
  FaMountain,
  FaWater,
  FaUtensils,
  FaCamera,
  FaHistory,
  FaArrowRight,
} from "react-icons/fa";

import "./ExploreUjjain.css";

const places = [
  {
    title: "Sacred Temples",
    icon: <FaPlaceOfWorship />,
    description:
      "Explore Mahakaleshwar Jyotirlinga, Kal Bhairav, Harsiddhi, Chintaman Ganesh and many more ancient temples.",
    image:
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d",
    link: "/temples",
    color: "#F97316",
  },
  {
    title: "Mahakal Lok",
    icon: <FaHistory />,
    description:
      "Walk through one of India's largest spiritual corridors featuring magnificent sculptures and architecture.",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
    link: "/guide/mahakal-lok",
    color: "#2563EB",
  },
  {
    title: "Ram Ghat",
    icon: <FaWater />,
    description:
      "Experience the peaceful Shipra River, evening aarti and the spiritual heart of Ujjain.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    link: "/guide/ram-ghat",
    color: "#0EA5E9",
  },
  {
    title: "Food & Markets",
    icon: <FaUtensils />,
    description:
      "Taste authentic Ujjaini poha, kachori, sweets and discover famous local shopping markets.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    link: "/restaurants",
    color: "#16A34A",
  },
  {
    title: "Photography Spots",
    icon: <FaCamera />,
    description:
      "Discover sunrise, sunset and iconic photography locations around temples and the Shipra River.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    link: "/explore",
    color: "#8B5CF6",
  },
  {
    title: "Nearby Attractions",
    icon: <FaMountain />,
    description:
      "Plan day trips to Omkareshwar, Dewas Tekri, Mandu and other nearby destinations.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    link: "/guide/omkareshwar",
    color: "#DC2626",
  },
];

const ExploreUjjain = () => {
  return (
    <section className="explore-ujjain">

      <div className="container">

        <div className="section-heading">

          <span className="section-tag">
            EXPLORE UJJAIN
          </span>

          <h2>
            Discover The Spiritual City Beyond Mahakal
          </h2>

          <p>
            Explore ancient temples, holy ghats, spiritual landmarks,
            authentic food, nearby attractions and unforgettable
            experiences that make Ujjain one of India's holiest cities.
          </p>

        </div>

        <div className="explore-grid">

          {places.map((place, index) => (

            <Link
              to={place.link}
              className="explore-card"
              key={index}
            >

              <div className="explore-image">

                <img
                  src={place.image}
                  alt={place.title}
                  loading="lazy"
                />

                <div
                  className="explore-icon"
                  style={{
                    background: place.color,
                  }}
                >
                  {place.icon}
                </div>

              </div>

              <div className="explore-content">

                <h3>{place.title}</h3>

                <p>{place.description}</p>

                <div className="explore-link">

                  Explore

                  <FaArrowRight />

                </div>

              </div>

            </Link>

          ))}

        </div>

        <div className="explore-bottom">

          <Link
            to="/explore"
            className="explore-btn"
          >
            Explore Complete Ujjain

            <FaArrowRight />

          </Link>

        </div>

      </div>

    </section>
  );
};

export default ExploreUjjain;