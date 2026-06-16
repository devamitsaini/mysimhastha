import React from 'react';

function Footer({ setPage }) {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-col-brand">
            <div className="fl-logo">
              <div className="fl-mark"></div>
              <div>
                <div className="fl-name">उज्जैन सिंहस्थ</div>
                <div className="fl-sub">SIMHASTHA 2028</div>
              </div>
            </div>
            <p className="brand-desc">India's most complete sacred pilgrimage portal.</p>
            <div className="foot-shlok">॥ हर हर महादेव · जय महाकाल ॥<br/>शिप्रायां स्नानमात्रेण पाप मुक्तो भवेन्नरः।</div>
          </div>
          
          <div className="foot-links-grid">
            <div className="fc">
              <div className="fc-title">Simhastha 2028</div>
              <ul>
                {[["Snan Calendar", "simhastha-2028"], ["Live Darshan", "live-darshan"], ["Temples & Ghats", "simhastha-2028"], ["Heritage", "simhastha-2028"], ["Zones & Routes", "simhastha-2028"]].map(([l, p]) => (
                  <li key={l}><button onClick={() => { setPage(p); window.scrollTo(0,0); }}>{l}</button></li>
                ))}
              </ul>
            </div>
            
            <div className="fc">
              <div className="fc-title">Services</div>
              <ul>
                {[["Hotels & Stays", "hotels"], ["Missing Persons", "missing-persons"], ["Transport", "hotels"], ["Guide", "hotels"]].map(([l, p]) => (
                  <li key={l}><button onClick={() => { setPage(p); window.scrollTo(0,0); }}>{l}</button></li>
                ))}
              </ul>
            </div>
            
            <div className="fc">
              <div className="fc-title">About Us</div>
              <ul>
                {[
                  ["Our Mission", "simhastha-2028"],
                  ["Simhastha 2028", "simhastha-2028"],
                  ["For Global Devotees", "home"],
                  ["Partner With Us", "hotels"],
                ].map(([l, p]) => (
                  <li key={l}><button type="button" onClick={() => { setPage(p); window.scrollTo(0, 0); }}>{l}</button></li>
                ))}
              </ul>
            </div>

            <div className="fc">
              <div className="fc-title">Contact</div>
              <ul>
                <li><button onClick={() => alert("info@mysimhastha.com")}>info@mysimhastha.com</button></li>
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