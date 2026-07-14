/**
 * @typedef {object} ReviewData
 * @property {string} [author] - Reviewer name.
 * @property {number|string} [rating] - Numeric rating (0–5).
 * @property {string} [review] - Full review text.
 * @property {string} [datePublished] - ISO date of the review.
 * @property {string} [url] - URL of the review.
 */

/**
 * Generates a schema.org `Review` object.
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag. This is a reusable building block
 * consumed by Hotel / LodgingBusiness / LocalBusiness schemas.
 *
 * @param {ReviewData} [data={}] - The review data.
 * @returns {object|null} A `Review` schema object, or `null` if no review text
 *   or rating is provided.
 * @module seo/generators/review
 */
export function generateReviewSchema(data = {}) {
  try {
    const { author, rating, review: reviewText, datePublished, url } = data || {};

    if (!reviewText && !rating) {
      return null;
    }

    const schema = {
      "@type": "Review",
    };

    if (reviewText) {
      schema.reviewBody = reviewText;
    }

    if (author) {
      schema.author = {
        "@type": "Person",
        name: author,
      };
    }

    if (rating) {
      const ratingValue = Number(rating);
      if (Number.isFinite(ratingValue) && ratingValue > 0) {
        schema.reviewRating = {
          "@type": "Rating",
          ratingValue,
          bestRating: 5,
          worstRating: 1,
        };
      }
    }

    if (datePublished) {
      schema.datePublished = datePublished;
    }

    if (url) {
      schema.url = url;
    }

    return schema;
  } catch (error) {
    return null;
  }
}