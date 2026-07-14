import React from "react";
import { Link } from "react-router-dom";
import {
  FaBookOpen,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

import "./PopularGuides.css";

// Import guides from GuidesPage - same data source
const guides = [
  {
    title: "2–3 Day Ujjain Itinerary: Complete Travel Guide",
    description:
      "Plan the perfect 2 or 3-day Ujjain trip with Mahakaleshwar Temple, Mahakal Lok, Harsiddhi Temple, Kal Bhairav, Ram Ghat, Mangalnath, Omkareshwar, hotels, transport, budget and local travel tips.",
    image: "/images/mahakaleshwar-hero.webp",
    enLink: "/guide/2-3-day-ujjain-itinerary",
    date: "2026-07-05"
  },
  {
    title: "Ujjain to Omkareshwar Travel Guide: Distance, Route, Taxi, Bus & Train",
    description:
      "Planning a trip from Ujjain to Omkareshwar? Discover the best travel routes, distance, taxi fares, buses, trains, travel time, one-day itinerary, temple timings, and essential tips for visiting Omkareshwar Jyotirlinga.",
    image: "/images/ujjain-to-om.webp",
    enLink: "/guide/ujjain-to-omkareshwar",
    date: "2026-07-05"
  },
  {
    title: "15 Common Mistakes to Avoid During Your Mahakal Temple Visit",
    description:
      "Planning a visit to Mahakaleshwar Temple? Avoid these common mistakes related to Bhasma Aarti, dress code, mobile phones, VIP entry, parking, timings, and temple etiquette.",
    image: "/images/mahakal-visit-mistakes.webp",
    enLink: "/guide/mahakal-visit-mistakes",
    date: "2026-07-05",
  },
  {
    title: "How to Reach Ujjain: Complete Travel Guide by Train, Flight & Road",
    description:
      "Learn how to reach Ujjain by train, flight, and road. Find the nearest airport, railway station, bus routes, travel time, distances from major cities, local transport, and tips for visiting Mahakaleshwar Temple.",
    image: "/images/how-to-reach-ujjain.webp",
    enLink: "/guide/how-to-reach-ujjain",
    date: "2026-07-02",
  },
  {
    title: "Where is Kumbh Mela Held? All 4 Kumbh Mela Locations in India Explained",
    description: "Discover all four Kumbh Mela locations in India—Ujjain, Prayagraj, Haridwar, and Nashik. Learn why Simhastha is celebrated only in Ujjain, explore the history, sacred rivers, mythology, travel tips, FAQs, and everything you need to know about Kumbh Mela.",
    image: "/images/kumbh-locations.webp",
    enLink: "/guide/kumbh-locations",
    date: "2026-06-30",
  },
  {
    title: "Mahakal Bhasma Aarti Guide 2026: Booking, Timings, Dress Code & Entry Rules",
    description: "Complete guide to Mahakal Bhasma Aarti at Mahakaleshwar Temple, Ujjain. Learn about online booking, timings, dress code, entry rules, required documents, VIP and free darshan, and important temple guidelines.",
    image: "/images/bhasma-arti.webp",
    enLink: "/guide/bhasma-arti",
    date: "2026-06-30",
  },
  {
    title: "Complete Guide to Mahakal Darshan at Mahakaleshwar Temple",
    description: "Temple visit guide, booking, costs, rules, spiritual experience",
    image: "/images/mahakal-darshan.webp",
    enLink: "/guide/mahakal-darshan",
    date: "2026-06-28",
  },
  {
    title: "Mahakal Shahi Sawari Ujjain Guide",
    description: "Complete guide for Mahakal Shahi Sawari...",
    image: "/images/mahakal-shahi-sawari.webp",
    enLink: "/guide/mahakal-shahi-sawari",
    date: "2026-06-25",
  },
  {
    title: "Sawan 2026 Ujjain Guide",
    description: "Mahakal Darshan, Sawan Mondays...",
    image: "/images/sawan-2026-ujjain.webp",
    enLink: "/guide/sawan-2026",
    date: "2026-06-24",
  },
  {
    title: "Sawan 2026 Dates Guide",
    description: "Complete Sawan 2026 calendar...",
    image: "/images/sawan-2026.webp",
    enLink: "/guide/sawan-2026-dates",
    date: "2026-06-23",
  },
  {
    title: "Simhastha 2028 Complete Guide",
    description: "Everything about Simhastha 2028",
    image: "/images/simhastha-2028.webp",
    enLink: "/guide/simhastha-2028",
    date: "2026-06-20",
  },
];

const PopularGuides = () => {
  // Get the 3 most recent guides
  const recentGuides = [...guides]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section className="popular-guides">

      <div className="container">

        <div className="section-heading">

          <span className="section-tag">
            POPULAR GUIDES
          </span>

          <h2>
            Start Planning With Our Expert Guides
          </h2>

          <p>
            Read detailed travel guides, temple information,
            accommodation tips and pilgrimage planning resources
            trusted by thousands of visitors.
          </p>

        </div>

        <div className="guides-grid">

          {recentGuides.map((guide, index) => (

            <article
              className="guide-card"
              key={guide.title}
            >

              <Link
              to={guide.enLink}
              className="popular-guide-image"
            >

              <img
                className="popular-guide-img"
                src={guide.image}
                alt={guide.title}
                loading="lazy"
              />

            </Link>

              <div className="guide-content">

                <div className="guide-meta">

                  <span>

                    <FaBookOpen />
                    Guide

                  </span>

                </div>

                <h3>

                  <Link to={guide.enLink}>

                    {guide.title}

                  </Link>

                </h3>

                <p>

                  {guide.description}

                </p>

                <Link
                  to={guide.enLink}
                  className="guide-btn"
                >

                  Read Guide

                  <FaArrowRight />

                </Link>

              </div>

            </article>

          ))}

        </div>

        <div className="guides-footer">

          <Link
            to="/guides"
            className="view-guides-btn"
          >

            Explore All Guides

            <FaArrowRight />

          </Link>

        </div>

      </div>

    </section>
  );
};

export default PopularGuides;