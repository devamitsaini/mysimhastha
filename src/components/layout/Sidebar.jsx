import React from 'react';

const Sidebar = ({ drawerOpen, setDrawerOpen, setPage }) => {
  const nav = (p) => {
    setPage(p);
    setDrawerOpen(false); // Sidebar band ho jaye
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Overlay to close sidebar on click outside */}
      <div 
        className={`drawer-overlay ${drawerOpen ? "open" : ""}`} 
        onClick={() => setDrawerOpen(false)} 
      />

      <div className={`drawer ${drawerOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <span>MENU</span>
          <button onClick={() => setDrawerOpen(false)}>✕</button>
        </div>

        <div className="drawer-body">
          <div className="d-links">
            <button className="d-link-bold" onClick={() => nav("simhastha-2028")}>Simhastha 2028</button>
            <button className="d-link-bold" onClick={() => nav("live-darshan")}>Live Darshan</button>
            <button className="d-link-bold" onClick={() => nav("missing-persons")}>Missing Persons</button>
          </div>

          <div className="d-title">SERVICES</div>
          
          <div className="d-service-links">
             {/* Yahan tumne wahi links use kiye jo Footer mein the */}
             <button onClick={() => nav("hotels")}>Hotels & Stays</button>
             <button onClick={() => nav("hotels")}>Restaurants</button>
             <button onClick={() => nav("hotels")}>Cab Services</button>
             <button onClick={() => nav("hotels")}>Guides & Pandits</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;