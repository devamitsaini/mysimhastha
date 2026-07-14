import { SITE_URL } from "../constants/defaults";

/**
 * @typedef {object} SearchActionData
 * @property {string} [queryInput] - Name of the query parameter (defaults to
 *   "search_term_string").
 * @property {string} [urlTemplate] - Full URL template with `{search_term_string}`
 *   placeholder. Defaults to the site-wide search.
 * @property {string} [targetName] - Human-readable name for the search target
 *   (e.g. "Search MySimhastha").
 */

/**
 * Generates a schema.org `SearchAction` object.
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag. This is a reusable building block
 * consumed by WebSite / WebPage / Home schemas.
 *
 * @param {SearchActionData} [data={}] - The search action data.
 * @returns {object|null} A `SearchAction` schema object, or `null` if the
 *   required `urlTemplate` cannot be determined.
 * @module seo/generators/searchAction
 */
export function generateSearchActionSchema(data = {}) {
  try {
    const {
      queryInput = "search_term_string",
      urlTemplate = `${SITE_URL}/search?q={search_term_string}`,
      targetName,
    } = data || {};

    if (!urlTemplate) {
      return null;
    }

    const schema = {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate,
      },
      "query-input": `required name=${queryInput}`,
    };

    if (targetName) {
      schema.name = targetName;
    }

    return schema;
  } catch (error) {
    return null;
  }
}