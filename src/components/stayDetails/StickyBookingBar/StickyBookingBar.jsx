import { Phone, MessageCircle } from "lucide-react";

import { formatPrice } from "../../../utils/staysUtils";

import "./StickyBookingBar.css";

const StickyBookingBar = ({ stay }) => {
  if (!stay) return null;

  const price = stay.price_from
    ? formatPrice(stay.price_from)
    : "Price on Request";

  const handleCall = () => {
    if (stay.phone) {
      window.location.href = `tel:${stay.phone}`;
    }
  };

  const handleWhatsApp = () => {
    const phone = stay.whatsapp || stay.phone;

    if (!phone) return;

    const cleanedPhone = phone.replace(/\D/g, "");

    window.open(
      `https://wa.me/${cleanedPhone}`,
      "_blank"
    );
  };

  return (
    <div className="sticky-booking-bar">

      <div className="sticky-price">

        <small>Starting From</small>

        <strong>{price}</strong>

        <span>/ night</span>

      </div>

      <div className="sticky-actions">

        <button
          className="sticky-btn call"
          onClick={handleCall}
          disabled={!stay.phone}
        >

          <Phone size={17} />

          Call

        </button>

        <button
          className="sticky-btn whatsapp"
          onClick={handleWhatsApp}
          disabled={!stay.phone && !stay.whatsapp}
        >

          <MessageCircle size={17} />

          WhatsApp

        </button>

      </div>

    </div>
  );
};

export default StickyBookingBar;
