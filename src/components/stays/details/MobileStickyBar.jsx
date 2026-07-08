import { FiPhone, FiMessageCircle } from "react-icons/fi";

export default function MobileStickyBar({ stay }) {
  const phone = stay?.phone || "";
  const whatsapp = stay?.whatsapp || stay?.phone || "";

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

        <a
          href={phone ? `tel:${phone}` : "#"}
          className="mobile-call"
          onClick={(e) => !phone && e.preventDefault()}
        >
          <FiPhone />
          Call
        </a>

        <a
          href={whatsapp ? `https://wa.me/${whatsapp}` : "#"}
          target="_blank"
          rel="noreferrer"
          className="mobile-whatsapp"
          onClick={(e) => !whatsapp && e.preventDefault()}
        >
          <FiMessageCircle />
          WhatsApp
        </a>

      </div>

    </div>
  );
}