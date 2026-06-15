import React from 'react';
import { DARSHAN_FEEDS } from '../data/simhasthaData'; // Data import
import LiveDarshanCard from '../components/common/LiveDarshanCard'; // Component import

function LiveDarshanPage() {
  return (
    <div className="page-wrap">
      {/* Hero Section */}
      <div className="page-hero" data-shlok="जय महाकाल" style={{ background: "linear-gradient(160deg, #0A0400, #1A0000)" }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontFamily: "var(--ui)", fontSize: "11px", fontWeight: 900, letterSpacing: "1px", textTransform: "uppercase", color: "rgba(255,200,100,.7)", marginBottom: "8px" }}>📡 LIVE STREAMS</div>
          <div className="page-hero-hi">लाइव दर्शन · आरती समय</div>
          <div className="page-hero-title">Live Darshan — Sacred Ujjain</div>
          <p className="page-hero-sub">HD streams from 6 sacred locations. All Aarti timings listed. Streams go live from April 13, 2028.</p>
        </div>
      </div>
      
      {/* Content Section */}
      <section className="section">
        <div className="container">
          <div className="darshan-grid">
            {DARSHAN_FEEDS.map((d, i) => (
              <LiveDarshanCard key={i} d={d} />
            ))}
          </div>
          
          <div style={{ background: "var(--cream2)", border: "1px solid var(--border)", borderRadius: "14px", padding: "20px 24px", marginTop: "24px", display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <div style={{ fontSize: "24px" }}>🔔</div>
            <div>
              <div style={{ fontFamily: "var(--serif)", fontSize: "16px", fontWeight: 700, color: "var(--deep)", marginBottom: "3px" }}>Get Notified When Streams Go Live</div>
              <div style={{ fontFamily: "var(--ui)", fontSize: "13px", color: "var(--muted)" }}>All streams go live from April 13, 2028. Register your email for early access.</div>
            </div>
            <button className="btn btn-primary" style={{ marginLeft: "auto" }} onClick={() => alert("Notification registration:\ndarshan@kumbhportal.in")}>Register for Early Access →</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LiveDarshanPage;