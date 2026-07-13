import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

import "./CountdownHub.css";

/* Simhastha 2028 starts 14 May 2028 */
const TARGET_DATE = new Date("2028-03-27T00:00:00+05:30").getTime();

function getTimeLeft() {
  const diff = Math.max(TARGET_DATE - Date.now(), 0);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const CountdownHub = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-hub">

      <div className="container">

        <div className="countdown-card">

          <div className="countdown-card-head">

            <div className="countdown-title">
              <div className="countdown-icon">
                <img src="/images/trishul-icon.png" alt="Trishul" />
              </div>
              <div className="countdown-title-text">
                <h3>Simhastha 2028</h3>
                <p>The Sacred Kumbh at Ujjain</p>
              </div>
            </div>
            <div className="countdown-date">
              <FaCalendarAlt />
              <span>27 March – 27 May 2028</span>
            </div>
          </div>
          <div className="countdown-stats">
            <div className="stat-box">
              <h4>{timeLeft.days}</h4>
              <span>Days</span>
            </div>
            <span className="colon">:</span>
            <div className="stat-box">
              <h4>{timeLeft.hours}</h4>
              <span>Hours</span>
            </div>
            <span className="colon">:</span>
            <div className="stat-box">
              <h4>{timeLeft.minutes}</h4>
              <span>Minutes</span>
            </div>
            <span className="colon">:</span>
            <div className="stat-box">
              <h4>{timeLeft.seconds}</h4>
              <span>Seconds</span>
            </div>
          </div>
          <Link to="/simhastha-2028" className="countdown-link">
            View Snan Calendar <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CountdownHub;