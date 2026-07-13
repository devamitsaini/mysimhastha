import React from "react";
import { Link } from "react-router-dom";
import {
  FaRobot,
  FaArrowRight,
  FaMapMarkedAlt,
  FaHotel,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

import "./TripPlannerCTA.css";

const TripPlannerCTA = () => {
  return (
    <section className="trip-planner-cta">

      <div className="container">

        <div className="planner-card">

          <div className="planner-left">

            <span className="planner-tag">
              AI TRIP PLANNER
            </span>

            <h2>
              Plan Your Entire Ujjain Trip
              <br />
              In Under 30 Seconds
            </h2>

            <p>
              Tell us where you're travelling from, your budget,
              number of days and purpose of visit. Our AI creates
              a complete itinerary with hotel recommendations,
              temple timings, attractions, restaurants and travel
              tips.
            </p>

            <div className="planner-features">

              <div>
                <FaCheckCircle />
                Personalized Itinerary
              </div>

              <div>
                <FaCheckCircle />
                Hotel Suggestions
              </div>

              <div>
                <FaCheckCircle />
                Temple Timings
              </div>

              <div>
                <FaCheckCircle />
                Budget Estimation
              </div>

            </div>

            <Link
              to="/trip-planner"
              className="planner-btn"
            >
              Start Planning

              <FaArrowRight />
            </Link>

          </div>

          <div className="planner-right">

            <div className="planner-preview">

              <div className="planner-icon">

                <FaRobot />

              </div>

              <h3>Your Trip Preview</h3>

              <div className="preview-list">

                <div className="preview-item">

                  <FaMapMarkedAlt />

                  <div>

                    <strong>2 Day Itinerary</strong>

                    <span>Mahakal + Ujjain Tour</span>

                  </div>

                </div>

                <div className="preview-item">

                  <FaHotel />

                  <div>

                    <strong>Verified Stay</strong>

                    <span>Near Mahakal Temple</span>

                  </div>

                </div>

                <div className="preview-item">

                  <FaCalendarAlt />

                  <div>

                    <strong>Bhasma Aarti</strong>

                    <span>Reporting Time Included</span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default TripPlannerCTA;