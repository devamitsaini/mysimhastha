import { useState } from "react";
import {
  FiPhone,
  FiMessageCircle,
  FiNavigation,
  FiGlobe,
  FiMail,
  FiHeart,
  FiShare2,
  FiCheck,
} from "react-icons/fi";

import "./StickyContactCard.css";

// Format a number as Indian currency, e.g. 1500 -> "₹1,500".
function formatPrice(value) {
  const num = Number(value);
  if (!num) return null;
  return `₹${num.toLocaleString("en-IN")}`;
}

export default function StickyContactCard({ stay }) {
  const phone = stay.phone || "";
  const whatsapp =
  (stay.whatsapp || stay.phone || "")
    .replace(/\D/g, "")
    .replace(/^0/, "");
  const website = stay.website || "";
  const email = stay.email || "";

  const [toast, setToast] = useState("");

  function showToast(message) {
    setToast(message);
    setTimeout(() => setToast(""), 2500);
  }

  async function handleShare() {
    const shareData = {
      title: stay.name,
      text: stay.name,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled — no-op.
      }
      return;
    }

    // Fallback: copy link to clipboard and show a toast.
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast("Link copied to clipboard!");
    } catch {
      showToast("Could not copy link");
    }
  }

  return (
    <aside className="sticky-contact-card">
      {/* PRICE */}

      {formatPrice(stay.starting_price || stay.price_from) && (
  <div className="price-card">
    <small>Starting From</small>

    <h2>{formatPrice(stay.starting_price || stay.price_from)}</h2>

    <span>Per Night</span>
  </div>
)}

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
          href={whatsapp ? `https://wa.me/91${whatsapp}` : "#"}
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

      {stay.latitude && stay.longitude ? (
        <a
          href={`https://www.google.com/maps?q=${stay.latitude},${stay.longitude}`}
          target="_blank"
          rel="noreferrer"
          className="outline-btn"
        >
          <FiNavigation />
          Get Directions
        </a>
      ) : (
        stay.google_maps_url && (
          <a
            href={stay.google_maps_url}
            target="_blank"
            rel="noreferrer"
            className="outline-btn"
          >
            <FiNavigation />
            Get Directions
          </a>
        )
      )}

      {/* SAVE / SHARE */}

      <div className="secondary-actions">
        <button type="button">
          <FiHeart />
          Save
        </button>

        <button type="button" onClick={handleShare}>
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
              <a href={website} target="_blank" rel="noreferrer">
                Visit Website
              </a>
            </p>
          )}

          {email && (
            <p>
              <FiMail />
              <a href={`mailto:${email}`}>{email}</a>
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

      {/* TOAST */}

      {toast && (
        <div className="share-toast">
          <FiCheck />
          {toast}
        </div>
      )}
    </aside>
  );
}