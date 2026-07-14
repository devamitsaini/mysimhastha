/**
 * @typedef {object} FAQItem
 * @property {string} question - The question text.
 * @property {string} answer - The answer text (plain text or HTML string).
 */

/**
 * Generates a schema.org `FAQPage` object.
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag. Each question/answer pair becomes a
 * `Question` node with an accepted `Answer`.
 *
 * @param {FAQItem[]} [faqs=[]] - List of question/answer pairs.
 * @returns {object|null} An `FAQPage` schema object, or `null` if `faqs` is not
 *   a non-empty array of valid entries.
 * @module seo/generators/faq
 */
export function generateFAQSchema(faqs = []) {
  try {
    if (!Array.isArray(faqs) || faqs.length === 0) {
      return null;
    }

    const validFaqs = faqs.filter(
      (item) => item && typeof item.question === "string" && typeof item.answer === "string"
    );

    if (validFaqs.length === 0) {
      return null;
    }

    return {
      "@type": "FAQPage",
      mainEntity: validFaqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };
  } catch (error) {
    return null;
  }
}