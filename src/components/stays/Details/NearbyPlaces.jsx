import {
  FiMapPin,
  FiNavigation,
} from "react-icons/fi";

export default function NearbyPlaces() {

  const places = [
    {
      name: "Mahakaleshwar Temple",
      distance: "450 m",
    },
    {
      name: "Mahakal Lok",
      distance: "700 m",
    },
    {
      name: "Ram Ghat",
      distance: "1.2 km",
    },
    {
      name: "Ujjain Railway Station",
      distance: "2.8 km",
    },
  ];

  return (
    <section className="details-card">

      <h2>Nearby Places</h2>

      <div className="nearby-list">

        {places.map((place) => (

          <div
            key={place.name}
            className="nearby-item"
          >

            <div className="nearby-left">

              <FiMapPin />

              <div>

                <h4>{place.name}</h4>

                <span>Popular attraction</span>

              </div>

            </div>

            <span className="distance-chip">

              <FiNavigation />

              {place.distance}

            </span>

          </div>

        ))}

      </div>

    </section>
  );
}