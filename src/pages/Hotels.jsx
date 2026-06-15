import React, { useState } from 'react';
import { HOTELS_DATA } from '../data/simhasthaData';
import '../index.css'; 

function HotelsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All"); // Tab logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Tabs
  const categories = ["All", "Hotel", "Dharamshala", "Restaurant", "Cab Service", "Guide"];

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

  // Tab change hone par page reset
  const handleFilterChange = (cat) => {
    setFilter(cat);
    setCurrentPage(1);
  };

  return (
    <div className="page-wrap">
      {/* Hero */}
      <div className="page-hero" style={{ background: "linear-gradient(160deg,#1A1000,#0A0600)" }}>
        <div style={{ position: "absolute", inset: 0, fontFamily: "var(--deva)", fontSize: "clamp(60px,10vw,120px)", color: "#fff", opacity: .025, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>अतिथि देवो भव</div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "32px", marginBottom: "6px" }}>🏨</div>
          <div className="page-hero-title">Hotels and Stays</div>
          <p className="page-hero-sub">Verified partner accommodations and services for your comfortable pilgrimage</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Search Bar */}
          <div style={{ display: "flex", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
            <div style={{ position: "relative", flex: 1, minWidth: "220px" }}>
              <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)" }}>🔍</span>
              <input 
                type="text" 
                placeholder="Search by name, location..." 
                value={search} 
                onChange={e => { setSearch(e.target.value); setCurrentPage(1); }} 
                style={{ paddingLeft: "38px", width: "100%", padding: "11px 14px", border: "1.5px solid var(--border)", borderRadius: "10px", outline: "none" }}
              />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="hotels-filters" style={{ marginBottom: "32px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`hotel-filter-btn ${filter === cat ? "active" : ""}`} 
                onClick={() => handleFilterChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="hotels-grid">
            {currentItems.map((h, i) => (
              <div key={i} className="hotel-card" onClick={() => alert(`${h.name}\n\nPrice: ${h.price}\nPhone: ${h.phone}`)}>
                <div className="hcard-img">
                  {h.img ? <img src={h.img} alt={h.name} loading="lazy" /> : <div style={{ fontSize: "70px" }}>{h.type === "Hotel" ? "🏨" : h.type === "Dharamshala" ? "🏛️" : "🧭"}</div>}
                  <div className="hcard-tags"><span className="hcard-tag">{h.type}</span>{h.featured && <span className="hcard-tag featured">Featured</span>}</div>
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
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
                    <span className="hcard-price">{h.price}</span>
                    <button className="btn btn-primary btn-sm" onClick={e => { e.stopPropagation(); alert("Booking opens October 2027."); }}>Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination" style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "24px" }}>
              <button className="btn btn-outline" disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}>◀ Prev</button>
              <span style={{ alignSelf: "center" }}>Page {currentPage} of {totalPages}</span>
              <button className="btn btn-outline" disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)}>Next ▶</button>
            </div>
          )}

          {filtered.length === 0 && <div style={{ textAlign: "center", padding: "48px 0" }}>No results found.</div>}
        </div>
      </section>
    </div>
  );
}

export default HotelsPage;