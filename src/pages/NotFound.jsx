import React from 'react';

function NotFoundPage({ setPage }) {
  return (
    <div className="page-wrap" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "80vh", textAlign: "center" }}>
      <div className="container">
        <div style={{ fontSize: "80px", marginBottom: "16px" }}>🕉️</div>
        <h1 style={{ fontFamily: "var(--serif)", fontSize: "48px", color: "var(--deep)" }}>404</h1>
        <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>Yatri, lagta hai aap galat marg par aa gaye hain.</h2>
        <p style={{ color: "var(--muted)", marginBottom: "32px" }}>The page you are looking for does not exist or has been moved.</p>
        
        <button className="btn btn-primary btn-lg" onClick={() => setPage("home")}>
          Wapas Home Chalein →
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;