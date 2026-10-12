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
  const phone = (stay.phone || "").trim();
  // Normalize to digits for tel:/wa.me links; keep a display version.
  const phoneDigits = phone.replace(/\D/g, "").replace(/^0/, "");
  const whatsappDigits = (stay.whatsapp || "")
    .replace(/\D/g, "")
    .replace(/^0/, "");
  // Prefer an explicit WhatsApp number, else fall back to the phone number.
  const whatsappTarget = whatsappDigits || phoneDigits;
  const website = (stay.website || "").trim();
  const email = (stay.email || "").trim();

  // Directions: prefer the stored map link, else build from coordinates.
  const hasCoords =
    stay.latitude != null &&
    stay.longitude != null &&
    stay.latitude !== "" &&
    stay.longitude !== "";
  const directionsUrl =
    stay.google_maps_url ||
    (hasCoords
      ? `https://www.google.com/maps?q=${stay.latitude},${stay.longitude}`
      : "");
  const hasContact = phone || whatsappTarget || website || email;

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

    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast("Link copied to clipboard!");
    } catch {
      showToast("Could not copy link");
    }
  }

  return (
    <aside className="sticky-contact-card">
      {formatPrice(stay.starting_price || stay.price_from) && (
        <div className="price-card">
          <small>Starting From</small>
          <h2>{formatPrice(stay.starting_price || stay.price_from)}</h2>
          <span>Per Night</span>
        </div>
      )}

      <div className="contact-actions">
        {phone ? (
          <a href={`tel:${phoneDigits || phone}`} className="primary-btn">
            <FiPhone />
            Call
          </a>
        ) : (
          <span className="primary-btn primary-btn-disabled" aria-disabled="true">
            <FiPhone />
            Call
          </span>
        )}

        {whatsappTarget ? (
          <a
            href={`https://wa.me/${whatsappTarget}`}
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            <FiMessageCircle />
            WhatsApp
          </a>
        ) : (
          <span className="whatsapp-btn whatsapp-btn-disabled" aria-disabled="true">
            <FiMessageCircle />
            WhatsApp
          </span>
        )}
      </div>

      {directionsUrl ? (
        <a
          href={directionsUrl}
          target="_blank"
          rel="noreferrer"
          className="outline-btn"
        >
          <FiNavigation />
          Get Directions
        </a>
      ) : null}

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
    </aside>
  );
}