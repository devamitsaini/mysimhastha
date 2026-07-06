import { useState } from "react";
import { Users, BedDouble, ChevronDown } from "lucide-react";

import "./RoomTypes.css";

const RoomTypes = ({ stay }) => {
  if (!stay) return null;

  // Sample room data - in production, this would come from stay.room_options
  const rooms = [
    {
      name: "Deluxe Room",
      guests: 2,
      bed: "1 King Bed",
      size: "220 sq.ft.",
      view: "City View",
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop",
      rates: [
        {
          label: "Flexible Rate",
          price: 5499,
          taxes: 899,
          cancellation: "Free cancellation till 26 Apr",
        },
        {
          label: "Pay at Hotel",
          price: 5999,
          taxes: 899,
          cancellation: "Pay at property, free cancellation till 26 Apr",
        },
      ],
    },
    {
      name: "Superior Room",
      guests: 3,
      bed: "1 King Bed",
      size: "280 sq.ft.",
      view: "Temple View",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      rates: [
        {
          label: "Flexible Rate",
          price: 6199,
          taxes: 999,
          cancellation: "Free cancellation till 26 Apr",
        },
        {
          label: "Pay at Hotel",
          price: 6699,
          taxes: 999,
          cancellation: "Pay at property, free cancellation till 26 Apr",
        },
      ],
    },
  ];

  const [expandedRoom, setExpandedRoom] = useState(null);
  const [selectedRate, setSelectedRate] = useState({});

  const toggleRoom = (index) => {
    setExpandedRoom((prev) => (prev === index ? null : index));
  };

  const chooseRate = (roomIndex, rateIndex) => {
    setSelectedRate((prev) => ({ ...prev, [roomIndex]: rateIndex }));
  };

  return (
    <section className="sd-section">
      <div className="sd-room-header">
        <h2 className="sd-section-title">Choose Your Room</h2>
        <button className="sd-see-all">See all rooms</button>
      </div>

      <div className="sd-rooms-list">
        {rooms.map((room, index) => {
          const isExpanded = expandedRoom === index;
          const activeRateIdx = selectedRate[index] ?? 0;
          const activeRate = room.rates[activeRateIdx];

          return (
            <div key={index} className="sd-room-card">
              <div className="sd-room-top">
                <div className="sd-room-image">
                  <img
                    src={room.image}
                    alt={room.name}
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x300?text=Room";
                    }}
                  />
                </div>

                <div className="sd-room-content">
                  <h3>{room.name}</h3>

                  <div className="sd-room-details">
                    <span>
                      <Users size={14} /> {room.guests} Guests
                    </span>
                    <span>
                      <BedDouble size={14} /> {room.bed}
                    </span>
                  </div>

                  <div className="sd-room-amenities">
                    <span className="sd-room-amenity-tag sd-room-amenity-tag--green">
                      Breakfast Included
                    </span>
                    <span className="sd-room-amenity-tag sd-room-amenity-tag--green">
                      Free Cancellation
                    </span>
                  </div>

                  <button
                    className="sd-room-more-details"
                    onClick={() => toggleRoom(index)}
                  >
                    More details
                    <ChevronDown
                      size={14}
                      className={isExpanded ? "sd-rotate" : ""}
                    />
                  </button>

                  {isExpanded && (
                    <div className="sd-room-extra-details">
                      <span>Room Size: {room.size}</span>
                      <span>View: {room.view}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Rate Options */}
              <div className="sd-rate-options">
                {room.rates.map((rate, rateIdx) => {
                  const isActive = rateIdx === activeRateIdx;

                  return (
                    <label
                      key={rateIdx}
                      className={`sd-rate-option ${isActive ? "is-active" : ""}`}
                    >
                      <input
                        type="radio"
                        name={`rate-${index}`}
                        checked={isActive}
                        onChange={() => chooseRate(index, rateIdx)}
                      />

                      <div className="sd-rate-option-info">
                        <span className="sd-rate-option-label">
                          {rate.label}
                        </span>
                        <span className="sd-rate-option-cancellation">
                          {rate.cancellation}
                        </span>
                      </div>

                      <div className="sd-rate-option-price">
                        <span className="sd-rate-option-amount">
                          ₹{rate.price.toLocaleString()}
                        </span>
                        <span className="sd-rate-option-period">
                          / night + ₹{rate.taxes.toLocaleString()} taxes &amp; fees
                        </span>
                      </div>
                    </label>
                  );
                })}
              </div>

              <div className="sd-room-footer">
                <div className="sd-room-price">
                  <span className="sd-room-amount">
                    ₹{activeRate.price.toLocaleString()}
                  </span>
                  <span className="sd-room-period">/ night</span>
                </div>
                <button className="sd-btn-select">SELECT</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RoomTypes;
