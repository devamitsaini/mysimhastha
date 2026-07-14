import { generateItemListSchema } from "./itemList";

/**
 * @typedef {object} SearchResultsData
 * @property {string} [query] - The user's search query.
 * @property {object} [filters] - Active filters (e.g. { type: "hotel", city: "ujjain" }).
 * @property {Array<{name: string, url?: string, image?: string, description?: string}>} [results] - List of result items.
 */

/**
 * Generates a schema.org `SearchResultsPage` object with an embedded `ItemList`
 * describing the results.
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag.
 *
 * @param {SearchResultsData} [data={}] - The search results data.
 * @returns {object|null} A `SearchResultsPage` schema object, or `null` if the
 *   required `query` is missing.
 * @module seo/generators/searchResults
 */
export function generateSearchResultsSchema(data = {}) {
  try {
    const { query, filters, results } = data || {};

    if (!query || typeof query !== "string") {
      return null;
    }

    const schema = {
      "@type": "SearchResultsPage",
      name: `Results for "${query}"`,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: [],
        numberOfItems: 0,
      },
    };

    const itemList = generateItemListSchema(results);
    if (itemList) {
      schema.mainEntity = itemList;
    }

    if (filters && typeof filters === "object") {
      schema.mainEntityOfPage = {
        "@type": "WebPage",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      };
    }

    return schema;
  } catch (error) {
    return null;
  }
}