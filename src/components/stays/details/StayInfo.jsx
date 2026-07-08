import {
  FiMapPin,
  FiStar,
  FiCheckCircle,
  FiClock,
  FiHome,
  FiPhone,
  FiMessageCircle,
} from "react-icons/fi";
import "./StayInfo.css";

export default function StayInfo({ stay }) {
  return (
    <section className="stay-info-card">

      <div className="stay-info-header">

        <div>

          <h1>{stay.name}</h1>

          <div className="stay-rating">

            <FiStar />

            <strong>{stay.rating || "New"}</strong>

            <small>
              ({stay.review_count || 0} Reviews)
            </small>

            {(stay.phone || stay.whatsapp) && (
              <div className="rating-actions">

                {stay.phone && (
                  <a
                    href={`tel:${stay.phone}`}
                    className="rating-action-btn"
                    title="Call"
                  >
                    <FiPhone />
                  </a>
                )}

                {stay.whatsapp && (
                  <a
                    href={`https://wa.me/${stay.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="rating-action-btn"
                    title="WhatsApp"
                  >
                    <FiMessageCircle />
                  </a>
                )}

              </div>
            )}

          </div>

          <div className="stay-badges">

            {stay.verified && (
              <span className="verified">
                <FiCheckCircle />
                Verified
              </span>
            )}

            {stay.stay_type && (
              <span>{stay.stay_type}</span>
            )}

            {stay.featured && (
              <span>Featured</span>
            )}

          </div>

        </div>

      </div>

      <div className="stay-location-row">

        <FiMapPin />

        <span>

          {[stay.address, stay.locality, stay.city, stay.state]
            .filter(Boolean)
            .join(", ")}

        </span>

      </div>

      <div className="stay-highlights">

        <div>

          <FiHome />

          <div>

            <strong>Property Type</strong>

            <span>{stay.stay_type || "Stay"}</span>

          </div>

        </div>

        <div>

          <FiClock />

          <div>

            <strong>Starting Price</strong>

            <span>
              {stay.starting_price ||
                stay.price_from ||
                "Contact"}
            </span>

          </div>

        </div>

        <div>

          <FiMapPin />

          <div>

            <strong>Distance</strong>

            <span>
              {stay.distance_mahakal
                ? `${stay.distance_mahakal} from Mahakal Temple`
                : "Near Mahakal Temple"}
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}