import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { HOTELS_DATA } from '../data/simhasthaData';
import '../index.css';

function HotelsPage() {
  const hotelsRef = useRef(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All"); // Tab logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Tabs
  const categories = [
  { name: "All", icon: "🏠" },
  { name: "Hotel", icon: "🏨" },
  { name: "Dharamshala", icon: "🛕" },
  { name: "Restaurant", icon: "🍽️" },
  { name: "Cab Service", icon: "🚕" },
  { name: "Guide", icon: "🧭" }
];

  // Search & Filter Logic
  const filtered = HOTELS_DATA.filter(h => {
    const matchesSearch = h.name.toLowerCase().includes(search.toLowerCase()) || 
                          h.type.toLowerCase().includes(search.toLowerCase()) || 
                          h.location.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || h.type === filter;
    return matchesSearch && matchesFilter;
  });

  // Pagination Logic
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const currentItems = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const handleFilterChange = (cat) => {
  setFilter(cat);
  setCurrentPage(1);
};

const goToPage = (page) => {
  setCurrentPage(page);

  hotelsRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};


  return (
    <>
  <Helmet>
    <title>
      Hotels Near Mahakal Temple Ujjain | Simhastha 2028 Stay Guide
    </title>

    <meta
      name="description"
      content="Find hotels, dharamshalas, restaurants, guides and accommodation near Mahakal Temple for Simhastha 2028 Ujjain."
    />

    <link
  rel="canonical"
  href="https://www.mysimhastha.com/hotels"
/>

    <meta
      property="og:title"
      content="Hotels Near Mahakal Temple Ujjain | Simhastha 2028"
    />

    <meta
      property="og:description"
      content="Book hotels and accommodation near Mahakal Temple and Simhastha 2028 pilgrimage locations."
    />

    <meta
      property="og:url"
      content="https://www.mysimhastha.com/hotels"
    />
  </Helmet>
    <div className="page-wrap">
      {/* Hero */}
      <div className="page-hero hotels-hero">
        <div style={{ position: "absolute", inset: 0, fontFamily: "var(--deva)", fontSize: "clamp(60px,10vw,120px)", color: "#fff", opacity: .025, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none",background: "linear-gradient(135deg,#3a1000,#6b2200)" }}>अतिथि देवो भव</div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "32px", marginBottom: "6px" }}>🏨</div>
          <div className="page-hero-title">Hotels and Stays</div>
          <p className="page-hero-sub">Verified partner accommodations and services for your comfortable pilgrimage</p>
        </div>
      </div>
       <section ref={hotelsRef} className="section">
  <div className="container">

    {/* Search Bar */}
    <div className="hotel-search-wrap">
      <svg
        className="hotel-search-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20L17 17" />
      </svg>

      <input
        type="text"
        className="hotel-search"
        placeholder="Search hotels, restaurants, guides..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
      />
    </div>

    {/* Filter Tabs */}
    <div className="hotels-filters">
      {categories.map((cat) => (
        <button
          key={cat.name}
          className={`hotel-filter-btn ${
            filter === cat.name ? "active" : ""
          }`}
          onClick={() => handleFilterChange(cat.name)}
        >
          {cat.icon} {cat.name}
        </button>
      ))}
    </div>

    {/* Grid */}
    <div className="hotels-grid">
      {currentItems.map((h, i) => (
        <div
          key={i}
          className="hotel-card"
          onClick={() =>
            alert(`${h.name}\n\nPrice: ${h.price}\nPhone: ${h.phone}`)
          }
        >
          <div className="hcard-img">
            {h.img ? (
              <img src={h.img} alt={h.name} loading="lazy" />
            ) : (
              <div style={{ fontSize: "70px" }}>
                {h.type === "Hotel"
                  ? "🏨"
                  : h.type === "Dharamshala"
                  ? "🏛️"
                  : "🧭"}
              </div>
            )}

            <div className="hcard-tags">
              <span className="hcard-tag">{h.type}</span>
              {h.featured && (
                <span className="hcard-tag featured">
                  Featured
                </span>
              )}
            </div>
          </div>

          <div className="hcard-body">
            <div className="hcard-top">
              <div className="hcard-name">{h.name}</div>
              <div className="hcard-rating">⭐ {h.rating}</div>
            </div>

            <div className="hcard-desc">{h.desc}</div>

            <div className="hcard-meta">
              <div>📍 {h.location}</div>
              <div>📞 {h.phone}</div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "10px"
              }}
            >
              <span className="hcard-price">{h.price}</span>

              <button
                className="btn btn-primary btn-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  alert("Booking opens October 2027.");
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>


          {/* Pagination */}
{totalPages > 1 && (
  <div className="pagination">
    <button
      className="page-btn"
      disabled={currentPage === 1}
      onClick={() => goToPage(currentPage - 1)}
    >
      ←
    </button>

    {Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i}
        className={`page-btn ${
          currentPage === i + 1 ? "active" : ""
        }`}
        onClick={() => goToPage(i + 1)}
      >
        {i + 1}
      </button>
    ))}

    <button
      className="page-btn"
      disabled={currentPage === totalPages}
      onClick={() => goToPage(currentPage + 1)}
    >
      →
    </button>
  </div>
)}

          {filtered.length === 0 && <div style={{ textAlign: "center", padding: "48px 0" }}>No results found.</div>}
        </div>
      </section>
    </div>
    </>
  );
}

export default HotelsPage;