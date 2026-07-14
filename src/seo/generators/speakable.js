/**
 * Generates a schema.org `SpeakableSpecification` object.
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag. This is used for AI Voice Search,
 * Google Assistant, Gemini and other voice-enabled agents.
 *
 * The `cssSelector` array contains CSS selectors that identify the content
 * sections suitable for text-to-speech / voice synthesis.
 *
 * @param {string[]} [cssSelectors] - Array of CSS selectors pointing to
 *   speakable content. Defaults to a reasonable set for the MySimhastha
 *   content structure (no hardcoded page-specific selectors).
 * @returns {object|null} A `SpeakableSpecification` schema object, or `null`
 *   if the selector array is empty.
 * @module seo/generators/speakable
 */
export function generateSpeakableSchema(cssSelectors) {
  try {
    const selectors = Array.isArray(cssSelectors) && cssSelectors.length > 0
      ? cssSelectors
      : [".content", ".main-content", "[data-speakable]"];

    if (selectors.length === 0) {
      return null;
    }

    return {
      "@type": "SpeakableSpecification",
      cssSelector: selectors,
    };
  } catch (error) {
    return null;
  }
}