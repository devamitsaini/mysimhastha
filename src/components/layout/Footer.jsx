import React from 'react';
import logo from "../../assets/logo.webp";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const nav = (path) => {
  navigate(path);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const navSection = (path, sectionId) => {
  navigate(path);

  setTimeout(() => {
    const el = document.getElementById(sectionId);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, 300);
};
  return (
    
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-col-brand">
            <div className="fl-logo">
  <img
    src={logo}
    alt="MySimhastha Logo"
    className="footer-logo-img"
  />

  <div>
    <div className="fl-name">MySimhastha</div>
    <div className="fl-sub">Ujjain Simhastha 2028</div>
  </div>
</div>
            <p className="brand-desc">India's most complete sacred pilgrimage portal.</p>
            <div className="foot-shlok">॥ हर हर महादेव · जय महाकाल ॥<br/>शिप्रायां स्नानमात्रेण पाप मुक्तो भवेन्नरः।</div>
          </div>
          
          <div className="foot-links-grid">
            <div className="fc">
  <div className="fc-title">Simhastha 2028</div>
  <ul>
    {[
      ["Snan Calendar", "/snan-calendar", "snan-calendar"],
["Live Darshan", "/live-darshan", null],
["Temples & Ghats", "/simhastha-2028", "temples-ghats"],
["Heritage", "/simhastha-2028", "heritage"],
["Zones & Routes", "/simhastha-2028", "zones-routes"],
    ].map(([label, page, section]) => (
      <li key={label}>
        <button
          onClick={() => {
  if (section) {
    navSection(page, section);
  } else {
    nav(page);
  }
}}
        >
          {label}
        </button>
      </li>
    ))}
  </ul>
</div>
            
            <div className="fc">
              <div className="fc-title">Services</div>
              <ul>
  <li>
    <button onClick={() => nav("/hotels")}>
      Hotels & Stays
    </button>
  </li>

  <li>
    <button onClick={() => nav("/missing-persons")}>
      Missing Persons
    </button>
  </li>

  <li>
    <button onClick={() => nav("/blog")}>
      Blog
    </button>
  </li>

  <li>
    <button onClick={() => nav("/news")}>
      News
    </button>
  </li>
</ul>
            </div>
            
            <div className="fc">
              <div className="fc-title">About Us</div>
              <ul>
                {[
  ["Our Mission", "/about", "our-mission"],
["For Global Devotees", "/", "NRI"],
["Partner With Us", "/hotels", null],
].map(([label, page, section]) => (
  <li key={label}>
    <button
      type="button"
      onClick={() => {
  if (section) {
    navSection(page, section);
  } else {
    nav(page);
  }
}}
    >
      {label}
    </button>
  </li>
))}
              </ul>
            </div>

            <div className="fc">
              <div className="fc-title">Contact</div>
              <ul>
                <li><button onClick={() => alert("mysimhastha@gmail.com")}>mysimhastha@gmail.com</button></li>
                <li><button onClick={() => alert("Helpline: 1800-XXX-XXXX (24/7)")}>Helpline: 1800-XXX-XXXX</button></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <p>© 2026 mysimhastha.com · All rights reserved</p>
          <p className="foot-hi">जय महाकाल · उज्जैन</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;