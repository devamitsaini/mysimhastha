import { useEffect, useState } from "react";

import { fetchSimilarStays } from "../../../services/staysService";

import { formatPrice } from "../../../utils/staysUtils";

import { MapPin, Star } from "lucide-react";

import { useNavigate } from "react-router-dom";

import "./SimilarHotels.css";

const SimilarHotels = ({ stay }) => {

  const navigate = useNavigate();

  const [hotels, setHotels] = useState([]);

  useEffect(() => {

    if (!stay || !stay.id || !stay.stay_type) return;

    loadHotels();

}, [stay]);

  const loadHotels = async () => {

    const result = await fetchSimilarStays(stay);

    if (!result.error) {
        setHotels(result.data);
    }

};

  if (!hotels.length) return null;

  return (

    <section className="similar-hotels">

      <h2>You May Also Like</h2>

      <div className="similar-grid">

        {hotels.map((hotel) => {

          const rawPrice = hotel.starting_price || hotel.price_from;

          return (

          <div
            className="similar-card"
            key={hotel.id}
            onClick={() => navigate(`/stays/${hotel.slug}`)}
          >

            <img
              src={
                hotel.featured_image ||
                hotel.image ||
                "/images/default-hotel.jpg"
              }
              alt={hotel.name}
            />

            <div className="similar-content">

              <span className="similar-type">

                {hotel.stay_type}

              </span>

              <h3>{hotel.name}</h3>

              <div className="similar-location">

                <MapPin size={15} />

                {hotel.locality || hotel.city}

              </div>

              <div className="similar-bottom">

                <div className="similar-rating">

                  <Star
                    size={15}
                    fill="currentColor"
                  />

                  {hotel.rating || "New"}

                </div>

                <div className="similar-price">

                  {rawPrice ? formatPrice(rawPrice) : "Contact"}

                </div>

              </div>

            </div>

          </div>

          );

        })}

      </div>

    </section>

  );

};

export default SimilarHotels;
