import {
  FiPhone,
  FiMessageCircle,
  FiNavigation,
  FiGlobe,
  FiMail,
  FiHeart,
  FiShare2,
} from "react-icons/fi";

import "./StickyContactCard.css";

export default function StickyContactCard({ stay }) {
  const phone = stay.phone || "";
  const whatsapp = stay.whatsapp || stay.phone || "";
  const maps = stay.google_maps_url || "";
  const website = stay.website || "";
  const email = stay.email || "";

  // Debug: Log contact info
  ("StickyContactCard - stay data:", {
    phone,
    whatsapp,
    hasPhone: !!phone,
    hasWhatsapp: !!whatsapp,
    stayKeys: Object.keys(stay || {})
  });

  return (
    <aside className="sticky-contact-card">

  {/* PRICE */}

  <div className="price-card">

    <small>Starting From</small>

    <h2>
      {stay.starting_price ||
        stay.price_from ||
        "Contact"}
    </h2>

    <span>Per Night</span>

  </div>

  {/* CONTACT */}

  <div className="contact-actions">

    <a
      href={phone ? `tel:${phone}` : "#"}
      className="primary-btn"
      onClick={(e) => !phone && e.preventDefault()}
    >
      <FiPhone />
      Call
    </a>

    <a
      href={whatsapp ? `https://wa.me/${whatsapp}` : "#"}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-btn"
      onClick={(e) => !whatsapp && e.preventDefault()}
    >
      <FiMessageCircle />
      WhatsApp
    </a>

  </div>

  {/* MAP */}

  {maps && (
    <a
      href={maps}
      target="_blank"
      rel="noreferrer"
      className="outline-btn"
    >
      <FiNavigation />
      Get Directions
    </a>
  )}

  {/* SAVE / SHARE */}

  <div className="secondary-actions">

    <button>

      <FiHeart />

      Save

    </button>

    <button
      onClick={() =>
        navigator.share
          ? navigator.share({
              title: stay.name,
              text: stay.name,
              url: window.location.href,
            })
          : navigator.clipboard.writeText(
              window.location.href
            )
      }
    >

      <FiShare2 />

      Share

    </button>

  </div>

  {/* CONTACT INFO */}

  {(website || email) && (

    <div className="booking-note">

      <strong>Contact Information</strong>

      {website && (

        <p>

          <FiGlobe />

          <a
            href={website}
            target="_blank"
            rel="noreferrer"
          >
            Visit Website
          </a>

        </p>

      )}

      {email && (

        <p>

          <FiMail />

          <a href={`mailto:${email}`}>
            {email}
          </a>

        </p>

      )}

    </div>

  )}

  {/* WHY */}

  <div className="booking-note">

    <strong>Why MySimhastha?</strong>

    <ul>

      <li>✔ Verified Property</li>

      <li>✔ Direct Contact</li>

      <li>✔ No Booking Commission</li>

      <li>✔ Trusted During Simhastha</li>

    </ul>

  </div>

</aside>
  );
}