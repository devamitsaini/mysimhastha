import {
  FiPhone,
  FiMessageCircle,
  FiNavigation,
  FiGlobe,
  FiMail,
  FiHeart,
  FiShare2,
} from "react-icons/fi";

export default function StickyContactCard({ stay }) {
  const phone = stay.phone || "";
  const whatsapp = stay.whatsapp || stay.phone || "";
  const maps = stay.google_maps_url || "";
  const website = stay.website || "";
  const email = stay.email || "";

  return (
    <aside className="sticky-contact-card">

      <div className="price-card">

        <small>Starting From</small>

        <h2>
          {stay.starting_price ||
            stay.price_from ||
            "Contact"}
        </h2>

        <span>Per Night</span>

      </div>

      {phone && (
        <a
          href={`tel:${phone}`}
          className="primary-btn"
          style={{
            height: '52px',
            fontSize: '15px',
            fontWeight: '700',
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)'
          }}
        >
          <FiPhone style={{ fontSize: '20px' }} />
          Call Property
        </a>
      )}

      {whatsapp && (
        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="whatsapp-btn"
          style={{
            height: '52px',
            fontSize: '15px',
            fontWeight: '700',
            boxShadow: '0 4px 12px rgba(22, 163, 74, 0.25)'
          }}
        >
          <FiMessageCircle style={{ fontSize: '20px' }} />
          WhatsApp
        </a>
      )}

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

      <div className="booking-note">

        <strong>Why MySimhastha?</strong>

        <ul>

          <li>✔ Verified Property</li>

          <li>✔ Direct Contact</li>

          <li>No Booking Commission</li>

          <li>Trusted During Simhastha</li>

        </ul>

      </div>

    </aside>
  );
}