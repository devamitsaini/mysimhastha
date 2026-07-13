import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaClock,
  FaWalking,
  FaArrowRight,
  FaPlaceOfWorship,
} from "react-icons/fa";

import "./SacredPlaces.css";

const places = [
  {
    id: 1,
    title: "Mahakaleshwar Jyotirlinga",
    image: "/images/Temple/mahakal.webp",
    distance: "0 km",
    timing: "4:00 AM - 11:00 PM",
    duration: "2-3 Hours",
    description: "One of the twelve Jyotirlingas and the spiritual heart of Ujjain.",
    link: "/guide/mahakal-darshan",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Mahakaleshwar+Temple+Ujjain",
  },
  {
    id: 2,
    title: "Harsiddhi Mata Temple",
    image: "/images/Temple/harsiddhi.webp",
    distance: "700 m",
    timing: "5:00 AM - 10:00 PM",
    duration: "45 Minutes",
    description: "One of the 51 Shakti Peethas dedicated to Goddess Harsiddhi.",
    link: "/guide/harsiddhi-temple",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Harsiddhi+Mata+Temple+Ujjain",
  },
  {
    id: 3,
    title: "Kal Bhairav Temple",
    image: "/images/Temple/kalbhairav.webp",
    distance: "5 km",
    timing: "5:00 AM - 9:00 PM",
    duration: "1 Hour",
    description: "Temple of Lord Kal Bhairav, guardian deity of Ujjain.",
    link: "/guide/kal-bhairav",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Kal+Bhairav+Temple+Ujjain",
  },
  {
    id: 4,
    title: "Chintaman Ganesh Temple",
    image: "/images/Temple/ganeshmandir.webp",
    distance: "6 km",
    timing: "5:00 AM - 9:00 PM",
    duration: "45 Minutes",
    description: "Ancient self-manifested Ganesh Temple, one of the most visited in Ujjain.",
    link: "/guide/chintaman-ganesh",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Chintaman+Ganesh+Temple+Ujjain",
  },
  {
    id: 5,
    title: "Sandipani Ashram",
    image: "/images/Temple/sandipaniashram.webp",
    distance: "8 km",
    timing: "8:00 AM - 6:00 PM",
    duration: "1-2 Hours",
    description: "Ancient gurukul of Lord Krishna with historical significance.",
    link: "/guide/sandipani-ashram",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Sandipani+Ashram+Ujjain",
  },
  {
    id: 6,
    title: "Mangalnath Temple",
    image: "/images/Temple/mangalnath.webp",
    distance: "7 km",
    timing: "5:00 AM - 9:00 PM",
    duration: "1 Hour",
    description: "Temple dedicated to Lord Mars, birthplace of Mangal graha.",
    link: "/guide/mangalnath-temple",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Mangalnath+Temple+Ujjain",
  },
];

const SacredPlaces = () => {
  const handleViewAllTemples = (e) => {
    e.preventDefault();
    alert("Page coming soon!");
  };

  return (
    <section className="sacred-places">

      <div className="container">

        <div className="section-heading">

          <span className="section-tag">
            SACRED PLACES
          </span>

          <h2>
            Explore Ujjain's Sacred Destinations
          </h2>

          <p>
            Discover the most important temples, ghats and spiritual
            landmarks that make Ujjain one of India's holiest cities.
          </p>

        </div>

        <div className="places-grid">

          {places.map((place) => (

            <article
              key={place.id}
              className="place-card"
            >

              <Link
                to={place.link}
                className="place-image"
              >

                <img
                  src={place.image}
                  alt={place.title}
                  loading="lazy"
                />

                <div className="place-badge">

                  <FaPlaceOfWorship />

                  Sacred Site

                </div>

              </Link>

              <div className="place-content">

                <h3>

                  {place.title}

                </h3>

                <p>

                  {place.description}

                </p>

                <div className="place-info">

                  <span>

                    <FaMapMarkerAlt />

                    {place.distance}

                  </span>

                  <span>

                    <FaClock />

                    {place.timing}

                  </span>

                  <span>

                    <FaWalking />

                    {place.duration}

                  </span>

                </div>

                <a
                  href={place.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="place-btn"
                >

                  View on Map

                  <FaMapMarkerAlt />

                </a>

              </div>

            </article>

          ))}

        </div>

        <div className="places-footer">

          <Link
            to="/temples"
            className="view-places-btn"
          >

            Explore All Temples

            <FaArrowRight />

          </Link>

        </div>

      </div>

    </section>
  );
};

export default SacredPlaces;