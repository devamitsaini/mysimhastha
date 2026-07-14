import { SITE_URL, SITE_NAME, SITE_LOGO } from "../constants/defaults";

/**
 * Generates a schema.org `Brand` object.
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag. Represents the "MySimhastha" brand
 * with logo, URL, and description.
 *
 * @param {object} [data={}] - Optional brand data overrides.
 * @param {string} [data.name] - Brand name (defaults to site name).
 * @param {string} [data.url] - Brand URL.
 * @param {string} [data.logo] - Brand logo URL.
 * @param {string} [data.description] - Brand description.
 * @returns {object|null} A `Brand` schema object.
 * @module seo/generators/brand
 */
export function generateBrandSchema(data = {}) {
  try {
    const {
      name = SITE_NAME,
      url = SITE_URL,
      logo = SITE_LOGO,
      description,
    } = data || {};

    if (!name) {
      return null;
    }

    const schema = {
      "@type": "Brand",
      "@id": `${SITE_URL}/#brand`,
      name,
      url,
      logo: {
        "@type": "ImageObject",
        url: logo,
      },
    };

    if (description) {
      schema.description = description;
    }

    return schema;
  } catch (error) {
    return null;
  }
}