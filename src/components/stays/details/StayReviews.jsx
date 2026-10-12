import { useEffect, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { fetchStayReviews } from "../../../services/staysService";
import ReviewStars from "./ReviewStars";
import StayReviewCard from "./StayReviewCard";
import StayReviewForm from "./StayReviewForm";

function ReviewSkeleton() {
  return (
    <div className="review-card review-skeleton">
      <div className="review-card-header">
        <div className="review-avatar skeleton-block" />
        <div className="review-meta">
          <div className="skeleton-line" style={{ width: "40%" }} />
          <div className="skeleton-line" style={{ width: "30%" }} />
        </div>
      </div>
      <div className="skeleton-line" style={{ width: "90%", marginTop: 12 }} />
      <div className="skeleton-line" style={{ width: "70%" }} />
    </div>
  );
}

export default function StayReviews({ stay }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState("");

  async function loadReviews() {
    setLoading(true);
    try {
      const { data } = await fetchStayReviews(stay.id);
      setReviews(data || []);
    } catch (err) {
      setReviews([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (stay?.id) loadReviews();
  }, [stay?.id]);

  function showToast(message) {
    setToast(message);
    setTimeout(() => setToast(""), 3500);
  }

  const average = Number(stay.rating) || 0;
  const count = Number(stay.review_count) || 0;
  // Live verification (2026-10-12): stay_reviews has 0 rows, while
  // stays.rating/review_count come from the enrichment import. Label the
  // stored figure as an overall rating — never as MySimhastha guest reviews.

  return (
    <section className="details-card stay-reviews">
      <h2>Guest Reviews</h2>

      {/* Overall rating card (imported listing data, not on-site reviews) */}
      <div className="review-summary">
        <div className="review-summary-score">
          <span className="review-average">{average.toFixed(1)}</span>
          <ReviewStars value={Math.round(average)} size={22} />
          <span className="review-count">
            {count > 0 ? `${count} Overall Ratings` : "No ratings yet"}
          </span>
        </div>
      </div>

      {/* Reviews list */}
      {loading ? (
        <div className="reviews-list">
          <ReviewSkeleton />
          <ReviewSkeleton />
        </div>
      ) : reviews.length === 0 ? (
        <p className="review-empty">
          No MySimhastha guest reviews yet. Be the first to review this property.
        </p>
      ) : (
        <div className="reviews-list">
          {reviews.map((review) => (
            <StayReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}

      {/* Submission form */}
      <div className="review-form-wrap">
        <StayReviewForm stayId={stay.id} onSuccess={() =>
          showToast("Thank you! Your review has been submitted for approval.")
        } />
      </div>

      {toast && (
        <div className="review-toast">
          <FiCheckCircle />
          {toast}
        </div>
      )}
    </section>
  );
}