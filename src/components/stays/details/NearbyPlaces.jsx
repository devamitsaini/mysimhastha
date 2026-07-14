import { FiMapPin, FiNavigation } from "react-icons/fi";

// Format a distance given in meters into a human-readable string.
function formatDistance(meters) {
  if (meters == null || isNaN(meters)) return "";

  if (meters < 1000) {
    return `${meters} m`;
  }

  return `${(meters / 1000).toFixed(1)} km`;
}

export default function NearbyPlaces({ stay }) {
  const places = stay.nearby_places || [];

  if (places.length === 0) {
    return null;
  }

  return (
    <section className="details-card">
      <h2>Nearby Places</h2>

      <div className="nearby-list">
        {places.map((place, index) => (
          <div className="nearby-item" key={place.name || index}>
            <div className="nearby-left">
              <FiMapPin />

              <div>
                <h4>{place.name}</h4>
                <span>{place.type || "Popular attraction"}</span>
              </div>
            </div>

            <span className="distance-chip">
              <FiNavigation />
              {formatDistance(place.distance)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}