import { FiPhone, FiMessageCircle } from "react-icons/fi";

// Format a number as Indian currency, e.g. 1500 -> "₹1,500".
function formatPrice(value) {
  const num = Number(value);
  if (!num) return null;
  return `₹${num.toLocaleString("en-IN")}`;
}

export default function MobileStickyBar({ stay }) {
  const phone = (stay?.phone || "").trim();
  const phoneDigits = phone.replace(/\D/g, "").replace(/^0/, "");
  const whatsappDigits = (stay?.whatsapp || "")
    .replace(/\D/g, "")
    .replace(/^0/, "");
  // Prefer an explicit WhatsApp number, else fall back to the phone number.
  const whatsappTarget = whatsappDigits || phoneDigits;

  const price = formatPrice(stay?.starting_price || stay?.price_from);

  return (
    <div className="mobile-sticky-bar">
      <div className="mobile-price">
        <small>Starting From</small>
        <strong>{price}</strong>
      </div>

      <div className="mobile-buttons">
        {phone ? (
          <a href={`tel:${phoneDigits || phone}`} className="mobile-call">
            <FiPhone />
            Call
          </a>
        ) : (
          <span className="mobile-call mobile-call-disabled" aria-disabled="true">
            <FiPhone />
            Call
          </span>
        )}

        {whatsappTarget ? (
          <a
            href={`https://wa.me/${whatsappTarget}`}
            target="_blank"
            rel="noreferrer"
            className="mobile-whatsapp"
          >
            <FiMessageCircle />
            WhatsApp
          </a>
        ) : (
          <span className="mobile-whatsapp mobile-whatsapp-disabled" aria-disabled="true">
            <FiMessageCircle />
            WhatsApp
          </span>
        )}
      </div>
    </div>
  );
}