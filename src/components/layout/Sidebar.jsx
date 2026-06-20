  import React from "react";
  import "../../styles/sidebar.css";
  import { useNavigate } from "react-router-dom";

  const Sidebar = ({ drawerOpen, setDrawerOpen, setPage }) => {
    const navigate = useNavigate();
    const nav = (path) => {
  navigate(path);
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

    <button className="menu-item" onClick={() => nav("/home")}>
      <span>🏠 Home</span>
      <span>›</span>
    </button>

    <button className="menu-item" onClick={() => nav("/snan-calendar")}>
      <span>📅 Snan Calendar</span>
      <span>›</span>
    </button>

    <button className="menu-item" onClick={() => nav("/simhastha-2028")}>
      <span>🚩 Simhastha 2028</span>
      <span>›</span>
    </button>

    <button className="menu-item" onClick={() => nav("/live-darshan")}>
      <span>📺 Live Darshan</span>
      <span>›</span>
    </button>

    <button className="menu-item" onClick={() => nav("/missing-persons")}>
      <span>🔍 Missing Persons</span>
      <span>›</span>
    </button>

    <button className="menu-item" onClick={() => nav("/hotels")}>
      <span>🏨 Hotels & Stays</span>
      <span>›</span>
    </button>

    <button className="menu-item" onClick={() => nav("/hotels")}>
      <span>🚕 Cab & Transport</span>
      <span>›</span>
    </button>

    <button className="menu-item" onClick={() => nav("/blog")}>
      <span>📰 Blogs & Updates</span>
        <span>›</span>
  </button>
    <button className="menu-item" onClick={() => nav("/about")}>
      <span>📖 About Us</span>
      <span>›</span>
    </button>

  </div>
        </div>
      </>
    );
  };

  export default Sidebar;