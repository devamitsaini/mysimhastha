/**
 * @typedef {object} AggregateRatingData
 * @property {number|string} [rating] - Average rating value (0–5).
 * @property {number|string} [reviewCount] - Total number of reviews.
 * @property {number} [bestRating] - Maximum rating value (defaults to 5).
 * @property {number} [worstRating] - Minimum rating value (defaults to 1).
 */

/**
 * Generates a schema.org `AggregateRating` object.
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag. This is a reusable building block
 * consumed by Hotel / LodgingBusiness / LocalBusiness schemas.
 *
 * @param {AggregateRatingData} [data={}] - The aggregate rating data.
 * @returns {object|null} An `AggregateRating` schema object, or `null` if
 *   neither `rating` nor `reviewCount` is a positive finite number.
 * @module seo/generators/aggregateRating
 */
export function generateAggregateRatingSchema(data = {}) {
  try {
    const {
      rating,
      reviewCount,
      bestRating = 5,
      worstRating = 1,
    } = data || {};

    const ratingValue = Number(rating);
    const reviewCountValue = Number(reviewCount);
    const hasRating = Number.isFinite(ratingValue) && ratingValue > 0;
    const hasReviews = Number.isFinite(reviewCountValue) && reviewCountValue > 0;

    if (!hasRating && !hasReviews) {
      return null;
    }

    const schema = {
      "@type": "AggregateRating",
      bestRating: Number(bestRating) || 5,
      worstRating: Number(worstRating) || 1,
    };

    if (hasRating) {
      schema.ratingValue = ratingValue;
    }

    if (hasReviews) {
      schema.reviewCount = reviewCountValue;
    }

    return schema;
  } catch (error) {
    return null;
  }
}