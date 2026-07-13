import React from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Amit Sharma",
    city: "Delhi",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    trip: "Mahakal Darshan",
    review:
      "MySimhastha helped us find a verified hotel within walking distance of Mahakal Temple. The guides were accurate, easy to follow and saved us a lot of time.",
  },
  {
    id: 2,
    name: "Priya Patel",
    city: "Ahmedabad",
    image:
      "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    trip: "Family Trip",
    review:
      "The stay recommendations, parking guide and temple timings were extremely useful. Everything matched perfectly during our visit.",
  },
  {
    id: 3,
    name: "Rahul Verma",
    city: "Mumbai",
    image:
      "https://randomuser.me/api/portraits/men/54.jpg",
    rating: 5,
    trip: "Simhastha Planning",
    review:
      "One website for everything — hotels, temple guides, restaurants and travel planning. Looking forward to using it for Simhastha 2028.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">

      <div className="container">

        <div className="section-heading">

          <span className="section-tag">
            PILGRIM REVIEWS
          </span>

          <h2>
            Trusted By Devotees Across India
          </h2>

          <p>
            Thousands of pilgrims rely on MySimhastha for
            verified accommodation, temple guides and
            travel planning.
          </p>

        </div>

        <div className="testimonial-grid">

          {testimonials.map((item) => (

            <div
              className="testimonial-card"
              key={item.id}
            >

              <FaQuoteLeft className="quote-icon" />

              <div className="rating">

                {[...Array(item.rating)].map((_, i) => (

                  <FaStar key={i} />

                ))}

              </div>

              <p className="review">

                "{item.review}"

              </p>

              <div className="traveller">

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>

                  <h4>

                    {item.name}

                  </h4>

                  <span>

                    {item.city}

                  </span>

                </div>

              </div>

              <div className="trip-type">

                <FaCheckCircle />

                {item.trip}

              </div>

            </div>

          ))}

        </div>

        <div className="testimonial-bottom">

          <div className="review-stats">

            <div>

              <h3>1K+</h3>

              <span>Pilgrims Helped</span>

            </div>

            <div>

              <h3>4.9/5</h3>

              <span>Average Rating</span>

            </div>

            <div>

              <h3>100+</h3>

              <span>Verified Stays</span>

            </div>

          </div>

          <Link
            to="/reviews"
            className="review-btn"
          >

            Read More Reviews

            <FaArrowRight />

          </Link>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;