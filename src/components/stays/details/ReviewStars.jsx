import { useState } from "react";
import { FiStar } from "react-icons/fi";

/**
 * Display (or pick) a 1–5 star rating.
 *
 * - Read-only by default: renders filled stars based on `value`.
 * - Interactive when `onChange` is provided: clickable stars for the form.
 */
export default function ReviewStars({ value = 0, onChange, size = 18 }) {
  const [hover, setHover] = useState(0);

  const interactive = typeof onChange === "function";
  const active = hover || value;

  return (
    <div
      className="review-stars"
      style={{ display: "inline-flex", gap: "2px" }}
      role={interactive ? "radiogroup" : "img"}
      aria-label={`Rating: ${value} out of 5`}
    >
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= active;

        const starEl = (
          <FiStar
            style={{
              width: size,
              height: size,
              color: filled ? "#f59e0b" : "#cbd5e1",
              fill: filled ? "#f59e0b" : "none",
              cursor: interactive ? "pointer" : "default",
              transition: "color 0.15s, fill 0.15s",
            }}
          />
        );

        if (!interactive) {
          return <span key={star}>{starEl}</span>;
        }

        return (
          <button
            type="button"
            key={star}
            className="review-star-btn"
            aria-label={`${star} star${star > 1 ? "s" : ""}`}
            aria-checked={value === star}
            role="radio"
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            onClick={() => onChange(star)}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              lineHeight: 0,
            }}
          >
            {starEl}
          </button>
        );
      })}
    </div>
  );
}