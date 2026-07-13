import { useState } from "react";

export default function GuideFeedback() {
  const [submitted, setSubmitted] = useState(false);

  const handleFeedback = (helpful) => {
    ("Guide Feedback:", helpful ? "Helpful" : "Needs Improvement");

    // Later you can save this to Supabase

    setSubmitted(true);
  };

  return (
    <section className="guide-section feedback-section">
      <h2>Was this guide helpful?</h2>

      <p>
        Your feedback helps us improve our travel guides for future pilgrims.
      </p>

      <div className="feedback-buttons">
        <button
          onClick={() => handleFeedback(true)}
          disabled={submitted}
          className="feedback-btn yes"
          aria-label="This guide was helpful"
        >
          👍 Yes, Very Helpful!
        </button>

        <button
          onClick={() => handleFeedback(false)}
          disabled={submitted}
          className="feedback-btn no"
          aria-label="This guide needs improvement"
        >
          👎 Needs Improvement
        </button>
      </div>

      {submitted && (
        <p className="feedback-success">
          Thank you for your feedback! ❤️
        </p>
      )}
    </section>
  );
}