import React, { useState } from "react";
import { SEO, SchemaProvider } from "../seo";
import {
  FaMapMarkerAlt,
  FaClock,
  FaRupeeSign,
  FaOm,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";
import "../styles/TemplePage.css";

// Temple data for Ujjain, Omkareshwar, and Baglamukhi Mata
const templesData = [
  // Ujjain Temples (11)
  {
    id: 1,
    name: "Mahakaleshwar Jyotirlinga",
    location: "Ujjain, Madhya Pradesh",
    timing: "4:00 AM - 11:00 PM",
    charges: "Free Entry | Special Darshan: ₹200-500",
    image: "/images/Temple/mahakal.webp",
    description: "One of the twelve Jyotirlingas and the spiritual heart of Ujjain. Famous for Bhasma Aarti at dawn.",
    category: "Ujjain",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Mahakaleshwar+Temple+Ujjain",
    isJyotirlinga: true,
  },
  {
    id: 2,
    name: "Harsiddhi Mata Temple",
    location: "Ujjain, Madhya Pradesh",
    timing: "5:00 AM - 10:00 PM",
    charges: "Free Entry",
    image: "/images/Temple/harsiddhi.webp",
    description: "One of the 51 Shakti Peethas dedicated to Goddess Harsiddhi. Known for evening aarti.",
    category: "Ujjain",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Harsiddhi+Mata+Temple+Ujjain",
    isShaktiPeetha: true,
  },
  {
    id: 3,
    name: "Kal Bhairav Temple",
    location: "Ujjain, Madhya Pradesh",
    timing: "5:00 AM - 9:00 PM",
    charges: "Free Entry",
    image: "/images/Temple/kalbhairav.webp",
    description: "Temple of Lord Kal Bhairav, guardian deity of Ujjain. Unique tradition of offering liquor.",
    category: "Ujjain",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Kal+Bhairav+Temple+Ujjain",
  },
  {
    id: 4,
    name: "Chintaman Ganesh Temple",
    location: "Ujjain, Madhya Pradesh",
    timing: "5:00 AM - 9:00 PM",
    charges: "Free Entry",
    image: "/images/Temple/ganeshmandir.webp",
    description: "Ancient self-manifested Ganesh Temple. One of the most visited temples in Ujjain.",
    category: "Ujjain",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Chintaman+Ganesh+Temple+Ujjain",
  },
  {
    id: 5,
    name: "Sandipani Ashram",
    location: "Ujjain, Madhya Pradesh",
    timing: "8:00 AM - 6:00 PM",
    charges: "₹50 Entry",
    image: "/images/Temple/sandipaniashram.webp",
    description: "Ancient gurukul of Lord Krishna. Historical and spiritual significance.",
    category: "Ujjain",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Sandipani+Ashram+Ujjain",
  },
  {
    id: 6,
    name: "Mangalnath Temple",
    location: "Ujjain, Madhya Pradesh",
    timing: "5:00 AM - 9:00 PM",
    charges: "Free Entry",
    image: "/images/Temple/mangalnath.webp",
    description: "Temple dedicated to Lord Mars (Mangal). Birthplace of Mangal graha.",
    category: "Ujjain",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Mangalnath+Temple+Ujjain",
  },
  {
    id: 7,
    name: "Gopal Mandir",
    location: "Ujjain, Madhya Pradesh",
    timing: "6:00 AM - 8:00 PM",
    charges: "Free Entry",
    image: "/images/Temple/gopalmandir.webp",
    description: "Beautiful temple dedicated to Lord Krishna with intricate marble work.",
    category: "Ujjain",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Gopal+Mandir+Ujjain",
  },

  // Omkareshwar Temples (8)
  {
    id: 12,
    name: "Omkareshwar Jyotirlinga",
    location: "Omkareshwar, Madhya Pradesh",
    timing: "5:00 AM - 10:00 PM",
    charges: "Free Entry | Special Darshan: ₹100-300",
    image: "/images/Temple/omkareshwar.webp",
    description: "One of the twelve Jyotirlingas on the sacred island of Omkareshwar.",
    category: "Omkareshwar",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Omkareshwar+Jyotirlinga",
    isJyotirlinga: true,
  },
 
  {
    id: 21,
    name: "Maa Baglamukhi Mandir",
    location: "Nalkheda, Madhya Pradesh",
    timing: "5:30 AM - 8:30 PM",
    charges: "Free Entry",
    image: "/images/Temple/baglamukhi.webp",
    description: "Another sacred shrine dedicated to Goddess Baglamukhi in Nalkheda.",
    category: "Baglamukhi Mata",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Baglamukhi+Devi+Mandir+Ujjain",
  },
];

const TemplesPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Ujjain", "Omkareshwar", "Baglamukhi Mata"];

  const filteredTemples = activeCategory === "All"
    ? templesData
    : templesData.filter((temple) => temple.category === activeCategory);

  return (
    <>
      <SEO
        title="Sacred Temples of Ujjain | Mahakaleshwar, Omkareshwar, Baglamukhi Mata"
        description="Explore 11+ sacred temples in Ujjain including Mahakaleshwar Jyotirlinga, Kal Bhairav, Harsiddhi Mata. Get timings, entry fees, and complete darshan guide."
        canonical="https://www.mysimhastha.com/temples"
      />

      <SchemaProvider
        type="temple"
        data={{
          title: "Sacred Temples of Ujjain | Mahakaleshwar, Omkareshwar, Baglamukhi Mata",
          description: "Explore 11+ sacred temples in Ujjain including Mahakaleshwar Jyotirlinga, Kal Bhairav, Harsiddhi Mata. Get timings, entry fees, and complete darshan guide.",
          url: "https://www.mysimhastha.com/temples",
          about: "Temples of Ujjain",
          breadcrumbs: [
            { label: "Home", url: "https://www.mysimhastha.com" },
            { label: "Temples in Ujjain", url: "https://www.mysimhastha.com/temples" },
          ],
          itemList: {
            name: "Sacred Temples of Ujjain, Omkareshwar & Baglamukhi Mata",
            description: "List of prominent temples in and around Ujjain for pilgrims and travelers.",
            items: templesData.map((t) => ({
              name: t.name,
              description: t.description,
              url: t.mapLink,
            })),
          },
        }}
      />

      <div className="temples-page">
        <div className="container">
          {/* Header */}
          <div className="temples-header">
            <span className="temples-tag">Sacred Temples</span>
            <h1>Explore Sacred Temples of Ujjain</h1>
            <p>
              Discover 11+ sacred temples in and around Ujjain including Mahakaleshwar Jyotirlinga,
              Omkareshwar, and Baglamukhi Mata with complete darshan timings, entry fees, and locations.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="temples-tabs">
            {categories.map((category) => (
              <button
                key={category}
                className={`temples-tab${activeCategory === category ? " active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Temples Grid */}
          <div className="temples-grid">
            {filteredTemples.map((temple) => (
              <article key={temple.id} className="temple-card">
                <div className="temple-image">
                  <img
                    src={temple.image}
                    alt={temple.name}
                    loading="lazy"
                  />
                  {temple.isJyotirlinga && (
                    <span className="temple-badge jyotirlinga">
                      <FaOm /> Jyotirlinga
                    </span>
                  )}
                  {temple.isShaktiPeetha && (
                    <span className="temple-badge shakti-peetha">
                      <FaStar /> Shakti Peetha
                    </span>
                  )}
                  {temple.isMahavidya && (
                    <span className="temple-badge mahavidya">
                      <FaStar /> Mahavidya
                    </span>
                  )}
                </div>

                <div className="temple-content">
                  <h2 className="temple-name">{temple.name}</h2>
                  <p className="temple-description">{temple.description}</p>

                  <div className="temple-info">
                    <div className="temple-info-item">
                      <FaMapMarkerAlt className="temple-icon" />
                      <span>{temple.location}</span>
                    </div>
                    <div className="temple-info-item">
                      <FaClock className="temple-icon" />
                      <span>{temple.timing}</span>
                    </div>
                    <div className="temple-info-item">
                      <FaRupeeSign className="temple-icon" />
                      <span>{temple.charges}</span>
                    </div>
                  </div>

                  <a
                    href={temple.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="temple-btn"
                  >
                    View on Map
                    <FaArrowRight />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="temples-summary">
            <div className="temples-summary-item">
              <span className="temples-summary-number">{templesData.length}</span>
              <span className="temples-summary-label">Total Temples</span>
            </div>
            <div className="temples-summary-item">
              <span className="temples-summary-number">{templesData.filter(t => t.isJyotirlinga).length}</span>
              <span className="temples-summary-label">Jyotirlingas</span>
            </div>
            <div className="temples-summary-item">
              <span className="temples-summary-number">{templesData.filter(t => t.isShaktiPeetha).length}</span>
              <span className="temples-summary-label">Shakti Peetha</span>
            </div>
            <div className="temples-summary-item">
              <span className="temples-summary-number">{templesData.filter(t => t.isMahavidya).length}</span>
              <span className="temples-summary-label">Mahavidya Temple</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplesPage;