import {
  Phone,
  MessageCircle,
  Navigation,
  Heart,
  Share2,
  Star,
  ShieldCheck,
  Zap,
  Landmark,
  BadgeIndianRupee,
} from "lucide-react";

import { useState } from "react";

import { formatPrice } from "../../../utils/staysUtils";

import "./BookingCard.css";

const BookingCard = ({ stay }) => {
  if (!stay) return null;

  const [saved, setSaved] = useState(false);

  // Format Price
  const price = stay.price_from
    ? formatPrice(stay.price_from)
    : "Price on Request";

  // Call
  const handleCall = () => {
    if (stay.phone) {
      window.location.href = `tel:${stay.phone}`;
    }
  };

  // WhatsApp
  const handleWhatsApp = () => {
    const phone = stay.whatsapp || stay.phone;

    if (!phone) return;

    const cleanedPhone = phone.replace(/\D/g, "");

    window.open(
      `https://wa.me/${cleanedPhone}`,
      "_blank"
    );
  };

  // Google Maps
  const handleDirections = () => {
    if (stay.latitude && stay.longitude) {
      window.open(
        `https://www.google.com/maps?q=${stay.latitude},${stay.longitude}`,
        "_blank"
      );
      return;
    }

    if (stay.address) {
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          `${stay.address}, Ujjain`
        )}`,
        "_blank"
      );
    }
  };

  // Share
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: stay.name,
          text:
            stay.short_description ||
            `Check out ${stay.name} on MySimhastha`,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Save (temporary, visual only until favorites backend is wired)
  const handleSave = () => {
    setSaved((prev) => !prev);
  };

  return (
  <aside className="booking-card">

    <div className="booking-top">

      {stay.rating && (

        <div className="booking-rating-chip">
          <Star size={13} fill="currentColor" />
          {stay.rating}
        </div>

      )}

      {stay.verified && (

        <div className="booking-verified">
          <ShieldCheck size={13} />
          Verified Property
        </div>

      )}

    </div>

    <div className="booking-price">

      <span className="booking-from">
        Starting From
      </span>

      <h2>{price}</h2>

      <small>/ night</small>

      {stay.review_count > 0 && (
        <p className="booking-review-count">
          {stay.review_count} Reviews
        </p>
      )}

    </div>

    <button
      className="booking-btn primary"
      onClick={handleCall}
      disabled={!stay.phone}
    >
      <Phone size={18}/>
      Call Hotel
    </button>

    <button
      className="booking-btn whatsapp"
      onClick={handleWhatsApp}
      disabled={!stay.phone && !stay.whatsapp}
    >
      <MessageCircle size={18}/>
      WhatsApp
    </button>

    <button
      className="booking-btn outline"
      onClick={handleDirections}
      disabled={!stay.latitude && !stay.address}
    >
      <Navigation size={18}/>
      Get Directions
    </button>

    <div className="booking-actions">

      <button
        className={saved ? "active" : ""}
        onClick={handleSave}
      >
        <Heart size={18} fill={saved ? "currentColor" : "none"}/>
        {saved ? "Saved" : "Save"}
      </button>

      <button onClick={handleShare}>
        <Share2 size={18}/>
        Share
      </button>

    </div>

    <div className="booking-divider"></div>

    <div className="booking-benefits">

      <div>
        <Zap size={15} />
        Usually responds within 5 minutes
      </div>

      <div>
        <Landmark size={15} />
        Near Mahakal Temple
      </div>

      <div>
        <BadgeIndianRupee size={15} />
        No Booking Charges
      </div>

      {stay.verified && (

        <div>
          <ShieldCheck size={15} />
          Personally Verified
        </div>

      )}

    </div>

  </aside>
);
};

export default BookingCard;
