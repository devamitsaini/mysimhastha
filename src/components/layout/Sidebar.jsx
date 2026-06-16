import React from "react";
import "../../styles/sidebar.css";

const Sidebar = ({ drawerOpen, setDrawerOpen, setPage }) => {
  const nav = (page) => {
    setPage(page);
    setDrawerOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`drawer-overlay ${drawerOpen ? "open" : ""}`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* Drawer */}
      <div className={`drawer ${drawerOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <span>MENU</span>

          <button
            className="drawer-close"
            onClick={() => setDrawerOpen(false)}
          >
            ✕
          </button>
        </div>

        <div className="drawer-body">

          {/* MAIN NAVIGATION */}
          <div className="d-links">
            <button onClick={() => nav("home")}>
              🏠 Home
            </button>

            <button onClick={() => nav("snan-calendar")}>
              📅 Snan Calendar
            </button>

            <button onClick={() => nav("simhastha-2028")}>
               Simhastha 2028
            </button>

            <button onClick={() => nav("live-darshan")}>
              📺 Live Darshan
            </button>

            <button onClick={() => nav("missing-persons")}>
              🔍 Missing Persons
            </button>
          </div>

          <div className="d-divider" />

          {/* SERVICES */}
          <div className="d-title">SERVICES</div>

          <div className="d-service-links">
            <button onClick={() => nav("hotels")}>
              🏨 Hotels & Stays
            </button>

            {/*<button>
              🍛 Food & Prasad
            </button>*/}

            <button onClick={() => nav("hotels")}>
              🚕 Cab & Transport
            </button>

            {/*<button onClick={() => nav("hotels")}>
              🎟️ Darshan Booking
            </button>*/}

            {/*<button>
              🎫 Event Passes
            </button>*/}

            <button onClick={() => nav("hotels")}>
              🗺️ Guided Tours
            </button>
          </div>

          <div className="d-divider" />

          {/* INFORMATION */}
          <div className="d-title">INFORMATION</div>

          <div className="d-service-links">
            <button onClick={() => nav("about")}>
              📖 About US
            </button>

            <button onClick={() => nav("blog")}>
              📰 Blogs & Updates
            </button>
          </div>

          <div className="d-divider" />

          {/* FOOTER */}
          <div className="drawer-footer">
            <div className="footer-logo">
               MySimhastha
            </div>

            <div className="footer-text">
              Kumbh Digital Portal
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Sidebar;