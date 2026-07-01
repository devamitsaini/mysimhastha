import { Navigation } from "lucide-react";
import "./MapSection.css";

const MapSection = ({ stay }) => {
  if (!stay) return null;

  const mapUrl =
    stay.latitude && stay.longitude
      ? `https://www.google.com/maps?q=${stay.latitude},${stay.longitude}&z=15&output=embed`
      : `https://www.google.com/maps?q=${encodeURIComponent(
          stay.address || stay.name + ", Ujjain"
        )}&z=15&output=embed`;

  const directionsUrl =
    stay.latitude && stay.longitude
      ? `https://www.google.com/maps?q=${stay.latitude},${stay.longitude}`
      : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          stay.address || stay.name + ", Ujjain"
        )}`;

  return (
    <section className="hotel-map">

      <div className="map-header">

        <h2>Location</h2>

        <button
          onClick={() => window.open(directionsUrl, "_blank")}
        >
          <Navigation size={18} />
          Get Directions
        </button>

      </div>

      <iframe
        title={stay.name}
        src={mapUrl}
        loading="lazy"
        allowFullScreen
      />

    </section>
  );
};

export default MapSection;