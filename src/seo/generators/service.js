import { SITE_URL, SITE_NAME } from "../constants/defaults";

/**
 * @typedef {object} ServiceData
 * @property {string} name - Name of the service.
 * @property {string} [description] - Service description.
 * @property {string} [url] - Service page URL.
 * @property {string} [providerName] - Provider name (defaults to site name).
 * @property {string[]} [areaServed] - Geographic areas (e.g. ["Ujjain", "Omkareshwar"]).
 * @property {string} [category] - Service category (e.g. "Travel Guide").
 */

/**
 * Generates a schema.org `Service` object.
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag. Supports generic services like
 * Travel Guide, Pilgrimage Planning, Accommodation Finder, Temple Guide,
 * Local Guide — no hardcoded page names.
 *
 * @param {ServiceData} [data={}] - The service data.
 * @returns {object|null} A `Service` schema object, or `null` if the required
 *   `name` is missing.
 * @module seo/generators/service
 */
export function generateServiceSchema(data = {}) {
  try {
    const { name, description, url, providerName = SITE_NAME, areaServed, category } = data || {};

    if (!name || typeof name !== "string") {
      return null;
    }

    const schema = {
      "@type": "Service",
      name,
      provider: {
        "@type": "Organization",
        name: providerName,
        url: SITE_URL,
      },
    };

    if (description) schema.description = description;
    if (url) schema.url = url;
    if (category) schema.category = category;

    if (Array.isArray(areaServed) && areaServed.length > 0) {
      schema.areaServed = areaServed.map((a) => ({
        "@type": "City",
        name: a,
      }));
    }

    return schema;
  } catch (error) {
    return null;
  }
}