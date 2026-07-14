import { useState } from "react";
import { FiSend, FiCheckCircle } from "react-icons/fi";
import ReviewStars from "./ReviewStars";

const EMPTY = {
  name: "",
  email: "",
  phone: "",
  rating: 0,
  title: "",
  review: "",
  visit_date: "",
  certified: false,
};

export default function StayReviewForm({ stayId, onSuccess }) {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function validate() {
    const next = {};

    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.rating) next.rating = "Please select a rating.";
    if (!form.review.trim()) {
      next.review = "Review is required.";
    } else if (form.review.trim().length < 20) {
      next.review = "Review must be at least 20 characters.";
    }
    if (!form.certified) next.certified = "Please confirm the certification.";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      const { createStayReview } = await import("../../services/staysService");
      const { error } = await createStayReview({
        stay_id: stayId,
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        rating: form.rating,
        title: form.title.trim(),
        review: form.review.trim(),
        visit_date: form.visit_date || null,
        verified_stay: false,
      });

      if (error) {
        setErrors({ form: "Something went wrong. Please try again." });
        return;
      }

      setForm(EMPTY);
      onSuccess && onSuccess();
    } catch (err) {
      setErrors({ form: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="review-form" onSubmit={handleSubmit} noValidate>
      <h3>Write a Review</h3>

      <div className="review-form-grid">
        <div className="form-field">
          <label htmlFor="rv-name">
            Name <span className="req">*</span>
          </label>
          <input
            id="rv-name"
            type="text"
            value={form.name}
            placeholder="Your name"
            onChange={(e) => update("name", e.target.value)}
          />
          {errors.name && <span className="form-error">{errors.name}</span>}
        </div>

        <div className="form-field">
          <label htmlFor="rv-email">Email</label>
          <input
            id="rv-email"
            type="email"
            value={form.email}
            placeholder="you@example.com"
            onChange={(e) => update("email", e.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="rv-phone">Phone</label>
          <input
            id="rv-phone"
            type="tel"
            value={form.phone}
            placeholder="+91 00000 00000"
            onChange={(e) => update("phone", e.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="rv-visit">Visit Date</label>
          <input
            id="rv-visit"
            type="date"
            value={form.visit_date}
            onChange={(e) => update("visit_date", e.target.value)}
          />
        </div>
      </div>

      <div className="form-field">
        <label>
          Rating <span className="req">*</span>
        </label>
        <ReviewStars
          value={form.rating}
          onChange={(r) => update("rating", r)}
          size={26}
        />
        {errors.rating && <span className="form-error">{errors.rating}</span>}
      </div>

      <div className="form-field">
        <label htmlFor="rv-title">Review Title</label>
        <input
          id="rv-title"
          type="text"
          value={form.title}
          placeholder="Summarize your experience"
          onChange={(e) => update("title", e.target.value)}
        />
      </div>

      <div className="form-field">
        <label htmlFor="rv-review">
          Review <span className="req">*</span>
        </label>
        <textarea
          id="rv-review"
          rows={4}
          value={form.review}
          placeholder="Share details about your stay (minimum 20 characters)"
          onChange={(e) => update("review", e.target.value)}
        />
        {errors.review && <span className="form-error">{errors.review}</span>}
      </div>

      <label className="review-certify">
        <input
          type="checkbox"
          checked={form.certified}
          onChange={(e) => update("certified", e.target.checked)}
        />
        <span>
          I certify this review is based on my genuine stay.
        </span>
      </label>
      {errors.certified && (
        <span className="form-error">{errors.certified}</span>
      )}

      {errors.form && <span className="form-error">{errors.form}</span>}

      <button type="submit" className="review-submit" disabled={submitting}>
        <FiSend />
        {submitting ? "Submitting..." : "Submit Review"}
      </button>
    </form>
  );
}