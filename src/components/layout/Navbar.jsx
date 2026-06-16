    /* eslint-disable react/prop-types */
  import { useState, useEffect, useRef } from "react";
  import logo from "../../assets/logo.PNG";

  const SERVICES = [
      { icon: "🏨", label: "Hotels & Stay",      page: "hotels" },
      { icon: "🍱", label: "Food & Prasad",       page: "hotels" },
      { icon: "🚕", label: "Cab & Transport",     page: "hotels" },
      { icon: "🎪", label: "Darshan Booking",     page: "live-darshan" },
      { icon: "🎟", label: "Event Passes",        page: "hotels" },
      { icon: "🗺️", label: "Guided Tours",        page: "hotels" },
    ];

    export default function Navbar({ page, setPage, drawerOpen, setDrawerOpen }) {
      const [scrolled, setScrolled]       = useState(false);
      const [servicesOpen, setServicesOpen] = useState(false);
      const dropRef = useRef(null);

      useEffect(() => {
        const h = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", h, { passive: true });
        return () => window.removeEventListener("scroll", h);
      }, []);

      // Close dropdown on outside click
      useEffect(() => {
        const handler = (e) => {
          if (dropRef.current && !dropRef.current.contains(e.target)) {
            setServicesOpen(false);
          }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
      }, []);

      const nav = (p) => {
        setPage(p);
        setServicesOpen(false);
        setDrawerOpen(false);
        window.scrollTo(0, 0);
      };

      const servicesBtnActive = ["hotels", "live-darshan"].includes(page);

      return (
        <>
          <nav className={`navbar${scrolled ? " scrolled" : ""}`} role="navigation" aria-label="Main navigation">
            <div className="container">
              <div className="nav-inner">
                {/* Logo */}
                <div className="nav-logo" onClick={() => nav("home")} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && nav("home")} aria-label="Go to home">
                  <div className="nav-logo-icon">
                      <img
                        src={logo}
                        alt="MySimhastha - Simhastha 2028 Ujjain"
                        className="logo-img"
                      />
                    </div>
                  <div>
                    <div className="nav-logo-main"> MySimhastha </div>
                    <div className="nav-logo-sub"> Ujjain Simhastha 2028 </div>
                  </div>
                </div>

                {/* Desktop links */}
                <ul className="nav-links" role="list">
                  <li>
                    <button
                      className={page === "snan-calendar" ? "active" : ""}
                      onClick={() => nav("snan-calendar")}
                    >
                      Snan Calendar
                    </button>
                  </li>
                  <li>
                    <button
                      className={page === "simhastha-2028" ? "active" : ""}
                      onClick={() => nav("simhastha-2028")}
                    >
                      Simhastha 2028
                    </button>
                  </li>

                  {/* Services dropdown */}
                  <li ref={dropRef} style={{ position: "relative" }}>
                    <button
                      className={`nav-services-btn${servicesBtnActive || servicesOpen ? " active" : ""}`}
                      onClick={() => setServicesOpen((o) => !o)}
                      aria-haspopup="true"
                      aria-expanded={servicesOpen}
                    >
                      Services
                      <svg
                        width="12" height="12" viewBox="0 0 12 12" fill="currentColor"
                        style={{ marginLeft: "4px", transition: "transform .2s", transform: servicesOpen ? "rotate(180deg)" : "none" }}
                        aria-hidden="true"
                      >
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                      </svg>
                    </button>

                    {servicesOpen && (
                      <div className="nav-dropdown" role="menu" aria-label="Services menu">
                        {SERVICES.map((s) => (
                          <button
                            key={s.label}
                            className="nav-dropdown-item"
                            role="menuitem"
                            onClick={() => nav(s.page)}
                          >
                            <span className="nd-icon" aria-hidden="true">{s.icon}</span>
                            <span>{s.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </li>

                  <li>
                    <button
                      className={page === "blog" ? "active" : ""}
                      onClick={() => nav("blog")}
                    >
                      Blog
                    </button>
                  </li>
                  <li>
                    <button onClick={() => nav("about")}> About </button>
                  </li>
                </ul>

                {/* Hamburger */}
                <div className="nav-right">
                  <button
                    className={`hamburger${drawerOpen ? " open" : ""}`}
                    onClick={() => setDrawerOpen((o) => !o)}
                    aria-label={drawerOpen ? "Close menu" : "Open menu"}
                    aria-expanded={drawerOpen}
                  >
                    <span /><span /><span />
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </>
      );
    }