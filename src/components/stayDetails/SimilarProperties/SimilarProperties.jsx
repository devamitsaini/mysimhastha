import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

import "./SimilarProperties.css";

const SimilarProperties = ({ stay }) => {
  const navigate = useNavigate();

  // Sample similar properties - in production, this would be fetched based on stay data
  const similarProperties = [
    {
      id: 1,
      name: "Rudrakash Residency",
      type: "Hotel",
      rating: 4.6,
      reviews: 892,
      distance: "1.5 km from Mahakaleshwar Temple",
      price: 4199,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Shree Niwas Homestay",
      type: "Homestay",
      rating: 4.7,
      reviews: 651,
      distance: "700 m from Temple",
      price: 2099,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="sd-section">
      <div className="sd-similar-header">
        <h2 className="sd-section-title">Similar Properties</h2>
        <button className="sd-see-all">See all</button>
      </div>

      <div className="sd-similar-grid">
        {similarProperties.map((property) => (
          <div key={property.id} className="sd-similar-card">
            <div className="sd-similar-image">
              <img 
                src={property.image} 
                alt={property.name}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300?text=Hotel';
                }}
              />
              <button className="sd-similar-wishlist">
                <Heart size={18} />
              </button>
            </div>
            
            <div className="sd-similar-content">
              <h3>{property.name}</h3>
              <span className="sd-similar-type">{property.type}</span>
              
              <div className="sd-similar-rating">
                <span className="sd-similar-rating-score">{property.rating}</span>
                <span className="sd-similar-rating-label">Very Good</span>
                <span className="sd-similar-reviews">• {property.reviews} reviews</span>
              </div>

              <div className="sd-similar-distance">
                📍 {property.distance}
              </div>

              <div className="sd-similar-footer">
                <div className="sd-similar-price">
                  <span>₹{property.price.toLocaleString()}</span>
                  <span className="sd-similar-period">/ night</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimilarProperties;