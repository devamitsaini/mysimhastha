import React, { useState } from "react";
import {
  FaEnvelope,
  FaCheckCircle,
  FaBell,
  FaArrowRight,
} from "react-icons/fa";

import "./Newsletter.css";
import { subscribeToNewsletter } from "../../../services/newsletterService";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    setLoading(true);

    const result = await subscribeToNewsletter(email);

    if (result.success) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    } else {
      setError(result.error);
    }

    setLoading(false);
  };

  return (
    <section className="newsletter">

      <div className="newsletter-container">

        <div className="newsletter-left">

          <span className="newsletter-tag">

            STAY UPDATED

          </span>

          <h2>

            Never Miss An Important
            <br />
            Ujjain Update

          </h2>

          <p>

            Receive verified temple updates,
            Simhastha announcements,
            Bhasma Aarti information,
            accommodation alerts and
            important travel advisories directly
            in your inbox.

          </p>

          <div className="newsletter-features">

            <div>

              <FaCheckCircle />

              Temple Updates

            </div>

            <div>

              <FaCheckCircle />

              Simhastha Alerts

            </div>

            <div>

              <FaCheckCircle />

              Hotel Availability

            </div>

            <div>

              <FaCheckCircle />

              Travel Advisories

            </div>

          </div>

        </div>

        <div className="newsletter-right">

          <div className="newsletter-card">

            <div className="newsletter-icon">

              <FaBell />

            </div>

            <h3>

              Subscribe For Free

            </h3>

            <p>

              Join thousands of pilgrims receiving
              important updates.

            </p>

            <form onSubmit={handleSubmit}>

              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                disabled={loading}
                className={error ? "error" : ""}
              />

              <button type="submit" disabled={loading}>

                {loading ? "Subscribing..." : "Subscribe"}

                <FaArrowRight />

              </button>

            </form>

            {error && (

              <div className="newsletter-error">

                {error}

              </div>

            )}

            {subscribed && (

              <div className="newsletter-success">

                <FaCheckCircle />

                Successfully Subscribed!

              </div>

            )}

            <small>

              We respect your privacy.
              No spam. Unsubscribe anytime.

            </small>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Newsletter;