import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMapPin, FiStar } from "react-icons/fi";

import { fetchSimilarStays } from "../../../services/staysService";

export default function SimilarStays({ stay }) {

  const [stays, setStays] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function load() {

      const { data } = await fetchSimilarStays(stay);

      setStays(data || []);

      setLoading(false);

    }

    if (stay) {
      load();
    }

  }, [stay]);

  if (loading) {
    return (
      <section className="details-card">
        <h2>Similar Stays</h2>
        <p>Loading...</p>
      </section>
    );
  }

  if (stays.length === 0) {
    return null;
  }

  return (

    <section className="details-card">

      <h2>Similar Stays</h2>

      <div className="similar-grid">

        {stays.map((hotel) => (

          <Link
            key={hotel.id}
            to={`/stays/${hotel.slug}`}
            className="similar-card"
          >

            <img
              src={
                hotel.image ||
                hotel.featured_image ||
                "/images/hero-image.webp"
              }
              alt={hotel.name}
            />

            <div className="similar-content">

              <h3>{hotel.name}</h3>

              <p>

                <FiMapPin />

                {" "}

                {hotel.locality || hotel.city}

              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "12px",
                }}
              >

                <strong className="similar-price">

                  {hotel.starting_price ||
                    hotel.price_from ||
                    "Contact"}

                </strong>

                <span>

                  <FiStar
                    style={{
                      color: "#f59e0b",
                    }}
                  />

                  {" "}

                  {hotel.rating || "New"}

                </span>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>

  );

}