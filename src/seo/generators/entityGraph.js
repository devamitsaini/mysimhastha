import { SITE_URL, SITE_NAME, SITE_LOGO } from "../constants/defaults";
import { ORGANIZATION_ID } from "../constants/organization";

/**
 * @typedef {object} EntityGraphData
 * @property {string} [headline] - Title of the current page (used as the central
 *   focus of the graph).
 * @property {string} [pageUrl] - URL of the current page.
 * @property {string} [description] - Description of the current page.
 * @property {string} [image] - Primary image URL for the page.
 * @property {string} [language] - Language code.
 * @property {Array<{name: string, url?: string, image?: string}>} [mentions] - Array
 *   of entities mentioned on the page (e.g. temples, destinations, guides).
 * @property {Array<{name: string, url?: string}>} [locations] - Hierarchical locations
 *   from specific to general (e.g. ["Ujjain", "Madhya Pradesh", "India"]).
 * @property {string} [keyword] - Central topic keyword (e.g. "Simhastha").
 * @property {string} [category] - Content category (e.g. "Travel Guide", "Hotels").
 */

/**
 * Generates a connected entity graph for AI SEO and semantic search.
 *
 * This is the most architecturally significant generator. It creates a single
 * `@graph` array that connects entities via `@id`, `about`, `mentions`,
 * `containedInPlace`, `knowsAbout`, `subjectOf`, `isPartOf`, etc.
 *
 * The graph is designed to help search engines (Google AI Overviews, ChatGPT,
 * Gemini, Claude, Perplexity, Bing AI) and voice assistants understand the
 * complete semantic context of a page and its relationship to the site.
 *
 * Returns an array of plain JavaScript objects — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag.
 *
 * Example structure for a guide about Mahakaleshwar:
 *   MySimhastha → Website → Guide → [Temple] → [Destination] → [State] → [Country]
 *
 * @param {EntityGraphData} [data={}] - Entity graph data.
 * @returns {object[]} Array of connected schema.org objects (may be empty).
 * @module seo/generators/entityGraph
 */
export function generateEntityGraph(data = {}) {
  try {
    const {
      headline,
      pageUrl,
      description,
      image,
      language = "en",
      mentions,
      locations,
      keyword,
      category,
    } = data || {};

    const graph = [];

    // ── 1. Site Brand / Entity ──────────────────────────────────────────
    graph.push({
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: SITE_LOGO },
      description: "MySimhastha is a pilgrimage and travel guide for the Simhastha Kumbh Mela.",
      knowsAbout: keyword
        ? [{ "@type": "Thing", name: keyword }]
        : [
            { "@type": "Thing", name: "Simhastha" },
            { "@type": "Thing", name: "Pilgrimage" },
            { "@type": "Thing", name: "Temples" },
          ],
    });

    // ── 2. Current Page Entity ──────────────────────────────────────────
    if (headline && pageUrl) {
      const pageEntity = {
        "@type": "WebPage",
        "@id": pageUrl,
        name: headline,
        url: pageUrl,
        inLanguage: language,
        about: {
          "@type": "Thing",
          name: headline,
        },
      };

      if (description) pageEntity.description = description;
      if (image) pageEntity.image = image;
      if (keyword) pageEntity.keywords = keyword;

      graph.push(pageEntity);
    }

    // ── 3. Hierarchical Locations ──────────────────────────────────────
    if (Array.isArray(locations) && locations.length > 0) {
      // Build containedInPlace chain: specific → general
      for (let i = 0; i < locations.length; i++) {
        const loc = locations[i];
        if (!loc || typeof loc.name !== "string") continue;

        const place = {
          "@type": "Place",
          name: loc.name,
          url: loc.url || `${SITE_URL}/destination/${loc.name.toLowerCase()}`,
        };

        // Link to the next broader location
        if (i < locations.length - 1) {
          const next = locations[i + 1];
          place.containedInPlace = {
            "@type": "Place",
            name: next.name,
            url: next.url || `${SITE_URL}/destination/${next.name.toLowerCase()}`,
          };
        }

        graph.push(place);
      }
    }

    // ── 4. Mentions (temples, attractions, guides, etc.) ────────────────
    if (Array.isArray(mentions) && mentions.length > 0) {
      mentions.forEach((m) => {
        if (!m || typeof m.name !== "string") return;

        const mention = {
          "@type": "Thing",
          name: m.name,
        };
        if (m.url) mention.url = m.url;
        if (m.image) mention.image = m.image;

        // If we have a pageUrl, link the page as subjectOf
        if (pageUrl) {
          mention.subjectOf = {
            "@type": "WebPage",
            "@id": pageUrl,
          };
        }

        graph.push(mention);
      });
    }

    // ── 5. Category / Topic Entity ─────────────────────────────────────
    if (category) {
      graph.push({
        "@type": "Thing",
        name: category,
        subjectOf: pageUrl ? { "@type": "WebPage", "@id": pageUrl } : undefined,
      });
    }

    return graph;
  } catch (error) {
    return [];
  }
}