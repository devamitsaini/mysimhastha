  import React from 'react';
  import logo from "../../assets/logo.webp";
  import { Link, useNavigate } from "react-router-dom";
  import {FaInstagram,FaYoutube,FaFacebook, FaReddit} from "react-icons/fa";

  import { FaXTwitter } from "react-icons/fa6";

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

              <div className="footer-social">
    <a
      href="https://instagram.com/mysimhastha"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <FaInstagram />
    </a>

    <a
    href="https://www.facebook.com/share/1JdQSG3nFz/?mibextid=wwXIfr"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <FaFacebook />
  </a>

    <a
    href="https://reddit.com/r/Simhastha2028"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Reddit"
  >
    <FaReddit />
  </a>

    <a
      href="https://x.com/mysimhastha"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="X"
    >
      <FaXTwitter />
    </a>

    <a
      href="https://youtube.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="YouTube"
    >
      <FaYoutube />
    </a>
  </div>

              <div className="foot-shlok">
    ॥ हर हर महादेव ॥<br />
    Your Trusted Guide to Simhastha 2028 & Mahakaleshwar Temple
  </div>
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
        <Link to="/stays">
          Hotels & Stays
        </Link>
      </li>

      <li>
        <Link to="/live-darshan">
          Live Darshan
        </Link>
      </li>

      <li>
        <Link to="/missing-persons">
          Missing Persons
        </Link>
      </li>

      <li>
        <Link to="/news">
          News
        </Link>
      </li>

      <li>
        <Link to="/blog">
          Blog
        </Link>
      </li>
    </ul>
  </div>
              
              <div className="fc">
  <div className="fc-title">About MySimhastha</div>

  <ul>
    <li>
      <Link to="/about">
        About Us
      </Link>
    </li>

    <li>
      <button
        type="button"
        onClick={() => navSection("/", "NRI")}
      >
        NRI & Global Devotees
      </button>
    </li>

    <li>
      <Link to="/blog">
        Travel Guides
      </Link>
    </li>

    <li>
      <Link to="/news">
        Latest News
      </Link>
    </li>

    <li>
      <Link to="/stays">
        Partner With Us
      </Link>
    </li>
  </ul>
</div>

              <div className="fc">
  <div className="fc-title">Contact</div>

  <ul>
    <li>
      <a href="mailto:info@mysimhastha.com">
        info@mysimhastha.com
      </a>
    </li>

    <li>
      <a
        href="https://www.instagram.com/mysimhastha"
        target="_blank"
        rel="noopener noreferrer"
      >
       Instagram
      </a>
    </li>

    <li>
      <a
        href="https://x.com/mysimhastha"
        target="_blank"
        rel="noopener noreferrer"
      >
        X (Twitter)
      </a>
    </li>

    <li>
      <a
        href="https://www.reddit.com/r/Simhastha2028"
        target="_blank"
        rel="noopener noreferrer"
      >
        Reddit Community
      </a>
    </li>
  </ul>
</div>

              <div className="fc">
    <div className="fc-title">Popular Guides</div>

    <ul>
      <li><Link to="/guide/simhastha-2028">Simhastha 2028 Guide</Link></li>
      <li><Link to="/guide/mahakal-darshan">Mahakal Darshan</Link></li>
      <li><Link to="/guide/bhasma-arti">Bhasma Aarti</Link></li>
      <li><Link to="/guide/kumbh-locations">Kumbh Mela Locations</Link></li>
      <li><Link to="/guide/sawan-2026">Sawan Guide</Link></li>
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