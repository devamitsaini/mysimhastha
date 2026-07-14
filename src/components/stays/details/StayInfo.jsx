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

// Format a number as Indian currency, e.g. 1500 -> "₹1,500".
function formatPrice(value) {
  const num = Number(value);
  if (!num) return null;
  return `₹${num.toLocaleString("en-IN")}`;
}

// Format a distance in meters, e.g. 1800 -> "1.8 km".
function formatDistance(meters) {
  const num = Number(meters);
  if (!num) return null;
  return num >= 1000
    ? `${(num / 1000).toFixed(1)} km`
    : `${num} m`;
}

export default function StayInfo({ stay }) {
  const price = formatPrice(stay.starting_price || stay.price_from);
  const distance = formatDistance(stay.distance_mahakal);

  return (
    <section className="stay-info-card">
      <div className="stay-info-header">
        <div>
          <h1>{stay.name}</h1>

          <div className="stay-rating">
            <FiStar />

            {stay.review_count > 0 ? (
              <>
                <strong>{stay.rating}</strong>
                <small>({stay.review_count} Reviews)</small>
              </>
            ) : (
              <small>New Property</small>
            )}

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

            {stay.featured && <span className="featured">Featured</span>}

            {stay.stay_type && <span>{stay.stay_type}</span>}
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
            <span>{stay.stay_type || "N/A"}</span>
          </div>
        </div>

        <div>
          <FiClock />

          <div>
            <strong>Starting Price</strong>
            <span>{price || "Contact"}</span>
          </div>
        </div>

        <div>
          <FiMapPin />

          <div>
            <strong>Distance</strong>
            <span>
              {distance
                ? `${distance} from Mahakaleshwar Temple`
                : "Distance Not Available"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}