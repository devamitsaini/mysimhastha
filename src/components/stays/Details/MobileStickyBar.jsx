import { FiPhone, FiMessageCircle } from "react-icons/fi";

export default function MobileStickyBar({ stay }) {
  const phone = stay?.phone || "";
  const whatsapp = stay?.whatsapp || stay?.phone || "";

  if (!phone && !whatsapp) return null;

  return (
    <div className="mobile-sticky-bar">

      <div className="mobile-price">

        <small>Starting From</small>

        <strong>
          {stay.starting_price ||
            stay.price_from ||
            "Contact"}
        </strong>

      </div>

      <div className="mobile-buttons">

        {phone && (
          <a
            href={`tel:${phone}`}
            className="mobile-call"
          >
            <FiPhone />
            Call
          </a>
        )}

        {whatsapp && (
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="mobile-whatsapp"
          >
            <FiMessageCircle />
            WhatsApp
          </a>
        )}

      </div>

    </div>
  );
}