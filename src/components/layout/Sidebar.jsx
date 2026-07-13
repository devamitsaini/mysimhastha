  import React from "react";
  import "../../styles/sidebar.css";
  import { useNavigate } from "react-router-dom";
  import { 
    FaHome, 
    FaCalendarAlt, 
    FaFlag, 
    FaTv, 
    FaSearch, 
    FaHotel, 
    FaNewspaper, 
    FaBookOpen 
  } from "react-icons/fa";

  const Sidebar = ({ drawerOpen, setDrawerOpen}) => {
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

    <button className="menu-item" onClick={() => nav("/")}>
      <span><FaHome size={18} /> Home</span>
      <span>›</span>
    </button>

    <button className="menu-item" onClick={() => nav("/snan-calendar")}>
      <span><FaCalendarAlt size={18} /> Snan Calendar</span>
      <span>›</span>
    </button>

    <button className="menu-item" onClick={() => nav("/simhastha-2028")}>
      <span><FaFlag size={18} /> Simhastha 2028</span>
      <span>›</span>
    </button>

    <button className="menu-item" onClick={() => nav("/live-darshan")}>
      <span><FaTv size={18} /> Live Darshan</span>
      <span>›</span>
    </button>

    <button className="menu-item" onClick={() => nav("/missing-persons")}>
      <span><FaSearch size={18} /> Missing Persons</span>
      <span>›</span>
    </button>

    <button className="menu-item" onClick={() => nav("/hotels")}>
      <span><FaHotel size={18} /> Hotels & Stays</span>
      <span>›</span>
    </button>

    {/*<button className="menu-item" onClick={() => nav("/hotels")}>
      <span>🚕 Cab & Transport</span>
      <span>›</span>
    </button>*/}

    <button className="menu-item" onClick={() => nav("/blog")}>
      <span><FaNewspaper size={18} /> Blogs & Updates</span>
        <span>›</span>
  </button>
    <button className="menu-item" onClick={() => nav("/about")}>
      <span><FaBookOpen size={18} /> About Us</span>
      <span>›</span>
    </button>

  </div>
        </div>
      </>
    );
  };

  export default Sidebar;