import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaArrowRight,
  FaOm,
} from "react-icons/fa";

import "./CountdownTimer.css";

const TARGET_DATE = new Date("2028-05-14T00:00:00+05:30").getTime();

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const diff = Math.max(TARGET_DATE - Date.now(), 0);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
  <section className="countdown-section">
    <div className="countdown-container">

      {/* LEFT */}
      <div className="countdown-left">
        <div className="countdown-icon">
          <FaOm />
        </div>

        <div className="countdown-heading">
          <h2>Simhastha 2028</h2>
          <p>The Sacred Kumbh at Ujjain</p>
        </div>
      </div>

      {/* CENTER */}
      <div className="countdown-center">
        <div className="time-block">
          <div className="time-value">{timeLeft.days}</div>
          <span>Days</span>
        </div>

        <div className="time-separator">:</div>

        <div className="time-block">
          <div className="time-value">{timeLeft.hours}</div>
          <span>Hours</span>
        </div>

        <div className="time-separator">:</div>

        <div className="time-block">
          <div className="time-value">{timeLeft.minutes}</div>
          <span>Minutes</span>
        </div>

        <div className="time-separator">:</div>

        <div className="time-block">
          <div className="time-value">{timeLeft.seconds}</div>
          <span>Seconds</span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="countdown-right">
        <div className="countdown-date">
          <FaCalendarAlt />
          <span>27 March - 27 May 2028</span>
        </div>
      </div>

      {/* BUTTON (Moved outside countdown-right) */}
      <Link
        to="/simhastha-2028"
        className="countdown-btn"
      >
        Explore Simhastha
        <FaArrowRight />
      </Link>

    </div>
  </section>
);
};

export default CountdownTimer;