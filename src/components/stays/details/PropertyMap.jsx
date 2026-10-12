import { FiExternalLink, FiMapPin } from "react-icons/fi";

export default function PropertyMap({ stay }) {
  const hasCoords =
    stay.latitude != null &&
    stay.longitude != null &&
    stay.latitude !== "" &&
    stay.longitude !== "";

  // Use the stored map link when available; otherwise generate from coordinates.
  const mapUrl =
    stay.google_maps_url ||
    (hasCoords
      ? `https://www.google.com/maps?q=${stay.latitude},${stay.longitude}&z=16&output=embed`
      : null);

  // Link used by the "Open in Google Maps" button.
  const openUrl =
    stay.google_maps_url ||
    (hasCoords
      ? `https://www.google.com/maps?q=${stay.latitude},${stay.longitude}`
      : null);

  return (
    <section className="details-card">
      <h2>Location</h2>

      <div className="property-map">
        {mapUrl ? (
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
        ) : (
          <div className="property-map-empty">
            Map not available for this property.
          </div>
        )}
      </div>

      {openUrl ? (
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
      ) : (
        <p style={{ marginTop: "16px" }}>
          Coordinates and a map link are not available for this property.
        </p>
      )}
    </section>
  );
}