import { FiExternalLink, FiMapPin } from "react-icons/fi";

export default function PropertyMap({ stay }) {
  const hasCoords =
    stay.latitude != null &&
    stay.longitude != null &&
    stay.latitude !== "" &&
    stay.longitude !== "";

  // Generate the embed URL from coordinates (no stored embed URLs).
  const mapUrl = hasCoords
    ? `https://www.google.com/maps?q=${stay.latitude},${stay.longitude}&z=16&output=embed`
    : `https://www.google.com/maps?q=${encodeURIComponent(
        `${stay.name}, ${stay.address || stay.locality || "Ujjain"}`
      )}&output=embed`;

  // Link used by the "Open in Google Maps" button.
  const openUrl = hasCoords
    ? `https://www.google.com/maps?q=${stay.latitude},${stay.longitude}`
    : `https://www.google.com/maps?q=${encodeURIComponent(
        `${stay.name}, ${stay.address || stay.locality || "Ujjain"}`
      )}`;

  return (
    <section className="details-card">
      <h2>Location</h2>

      <div className="property-map">
        <iframe
          title={`${stay.name} Location`}
          src={mapUrl}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          style={{
            width: "100%",
            height: "400px",
            border: 0,
            borderRadius: "12px",
          }}
        />
      </div>

      <a
        className="outline-btn"
        href={openUrl}
        target="_blank"
        rel="noreferrer"
        style={{ marginTop: "16px", display: "inline-flex", gap: "8px" }}
      >
        <FiExternalLink />
        <FiMapPin />
        Open in Google Maps
      </a>
    </section>
  );
}