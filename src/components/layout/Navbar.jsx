    /* eslint-disable react/prop-types */
  import { useState, useEffect, useRef } from "react";
  import logo from "../../assets/logo.webp";
  import i18n from "../../i18n";
  import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

  const SERVICES = [
      { icon: "🏨", label: "Hotels & Stay",      page: "/hotels" },
      { icon: "🍱", label: "Food & Prasad",       page: "/hotels" },
      { icon: "🚕", label: "Cab & Transport",     page: "/hotels" },
      { icon: "🎪", label: "Darshan Booking",     page: "/live-darshan" },
      { icon: "🎟", label: "Event Passes",        page: "/hotels" },
      { icon: "🗺️", label: "Guided Tours",        page: "/hotels" },
    ];

    export default function Navbar({ drawerOpen, setDrawerOpen }) {

      const location = useLocation();
      const [scrolled, setScrolled]       = useState(false);
      const [servicesOpen, setServicesOpen] = useState(false);
      const dropRef = useRef(null);
      const langRef = useRef(null);
      const { t } = useTranslation();
      const [languageOpen, setLanguageOpen] = useState(false);
      const currentLang = i18n.language || "en";
      const navigate = useNavigate();
      
      const changeGoogleLanguage = (lang) => {
  const combo = document.querySelector(".goog-te-combo");

  if (!combo) {
    alert("Google Translate is still loading.");
    return;
  }

  combo.value = lang;
  combo.dispatchEvent(new Event("change"));

  setLanguageOpen(false);
};

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

    if (langRef.current && !langRef.current.contains(e.target)) {
      setLanguageOpen(false);
    }
  };

  document.addEventListener("mousedown", handler);

  return () => document.removeEventListener("mousedown", handler);
}, []);

      const nav = (path) => {
  navigate(path);

  setServicesOpen(false);
  setDrawerOpen(false);

  window.scrollTo(0, 0);
};

      const servicesBtnActive =
  location.pathname === "/hotels" ||
  location.pathname === "/live-darshan";
    
      
      return (
        <>
          <nav className={`navbar${scrolled ? " scrolled" : ""}`} role="navigation" aria-label="Main navigation">
            <div className="container">
              <div className="nav-inner">
                {/* Logo */}
                <div
  className="nav-logo"
  onClick={() => nav("/")}
  role="button"
  tabIndex={0}
  onKeyDown={(e) => e.key === "Enter" && nav("/")}
>
                  <div className="nav-logo-icon">
                      <img
                        src={logo}
                        alt="MySimhastha - Simhastha 2028 Ujjain"
                        className="logo-img"
                      />
                    </div>
                  <div>
                    <div className="nav-logo-main"> My Simhastha </div>
                    <div className="nav-logo-sub"> Ujjain Simhastha 2028 </div>
                  </div>
                </div>

                {/* Desktop links */}
                <ul className="nav-links" role="list">
                  <li>
                    <button
                      className={location.pathname === "/snan-calendar" ? "active" : ""}
                      onClick={() => nav("/snan-calendar")}
                    >
                      {t("snanCalendar")}
                    </button>
                  </li>
                  <li>
                    <button
                      className={location.pathname === "/simhastha-2028" ? "active" : ""}
                      onClick={() => nav("/simhastha-2028")}
                    >
                      {t("simhastha2028")}
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
                      {t("services")}
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
    className={location.pathname === "/missing-persons" ? "active" : ""}
    onClick={() => nav("/missing-persons")}
  >
    {t("missingPersons")}
  </button>
</li>
                  <li>
  <button
    className={location.pathname === "/blog" ? "active" : ""}
    onClick={() => nav("/blog")}
  >
    {t("blog")}
  </button>
</li>



<li>
  <button
    className={location.pathname === "/about" ? "active" : ""}
    onClick={() => nav("/about")}
  >
    {t("about")}
  </button>
</li>
                </ul>

                {/* Hamburger */}
<div className="nav-right">

  {/* Language Switcher */}
  <div ref={langRef} style={{ position: "relative" }}>
    <button
      className="lang-switch"
      onClick={() => setLanguageOpen(!languageOpen)}
    >
      {currentLang === "hi" ? "हिन्दी" : "English"}

      <span
        style={{
          transition: "0.2s",
          transform: languageOpen ? "rotate(180deg)" : "rotate(0deg)"
        }}
      >
        ▼
      </span>
    </button>

    {languageOpen && (
      <div className="language-dropdown">

        {/* i18next */}
        <button
          onClick={() => {
            localStorage.setItem("lang", "en");
            i18n.changeLanguage("en");
            setLanguageOpen(false);
          }}
        >
          🇺🇸 English
        </button>

        <button
          onClick={() => {
            localStorage.setItem("lang", "hi");
            i18n.changeLanguage("hi");
            setLanguageOpen(false);
          }}
        >
          🇮🇳 हिन्दी
        </button>

        <hr />

        {/* Google Translate */}
        <button onClick={() => changeGoogleLanguage("mr")}>🇮🇳 मराठी</button>
        <button onClick={() => changeGoogleLanguage("gu")}>🇮🇳 ગુજરાતી</button>
        <button onClick={() => changeGoogleLanguage("bn")}>🇮🇳 বাংলা</button>
        <button onClick={() => changeGoogleLanguage("ta")}>🇮🇳 தமிழ்</button>
        <button onClick={() => changeGoogleLanguage("te")}>🇮🇳 తెలుగు</button>
        <button onClick={() => changeGoogleLanguage("kn")}>🇮🇳 ಕನ್ನಡ</button>

      </div>
    )}
  </div>

  {/* Hamburger */}
  <button
    className={`hamburger${drawerOpen ? " open" : ""}`}
    onClick={() => setDrawerOpen((o) => !o)}
    aria-label={drawerOpen ? "Close menu" : "Open menu"}
    aria-expanded={drawerOpen}
  >
    <span />
    <span />
    <span />
  </button>

</div>

</div>
              </div>
      
          </nav>
        </>
      );
}