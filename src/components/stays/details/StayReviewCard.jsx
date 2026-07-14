import { FiCheckCircle, FiAward, FiMessageSquare } from "react-icons/fi";
import ReviewStars from "./ReviewStars";

// Format an ISO date string into a readable form, e.g. "12 Mar 2026".
function formatDate(value) {
  if (!value) return "";
  const d = new Date(value);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function StayReviewCard({ review }) {
  return (
    <div className="review-card">
      <div className="review-card-header">
        <div className="review-avatar" aria-hidden="true">
          {(review.name || "A").charAt(0).toUpperCase()}
        </div>

        <div className="review-meta">
          <div className="review-name-row">
            <strong className="review-name">{review.name}</strong>

            {review.verified_stay && (
              <span className="review-badge verified">
                <FiCheckCircle />
                Verified Stay
              </span>
            )}

            {review.is_featured && (
              <span className="review-badge featured">
                <FiAward />
                Featured
              </span>
            )}
          </div>

          <ReviewStars value={review.rating} size={16} />
        </div>
      </div>

      {review.title && <h4 className="review-title">{review.title}</h4>}

      <p className="review-text">{review.review}</p>

      <div className="review-footer">
        {review.visit_date && (
          <span className="review-visit">
            Visited: {formatDate(review.visit_date)}
          </span>
        )}
        <span className="review-date">{formatDate(review.created_at)}</span>
      </div>

      {review.owner_reply && (
        <div className="review-owner-reply">
          <FiMessageSquare />
          <div>
            <strong>Response from property</strong>
            <p>{review.owner_reply}</p>
          </div>
        </div>
      )}
    </div>
  );
}