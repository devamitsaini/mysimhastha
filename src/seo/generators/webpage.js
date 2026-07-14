import { SITE_URL, SITE_NAME, DEFAULT_LANGUAGE } from "../constants/defaults";

/**
 * @typedef {object} WebPageData
 * @property {string} [title] - The page title / name.
 * @property {string} [description] - The page description.
 * @property {string} [url] - Absolute URL of the page.
 * @property {string} [image] - Absolute or root-relative image URL.
 * @property {string} [language] - Language code (e.g. "en", "hi").
 */

/**
 * Generates a schema.org `WebPage` object.
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag. The `isPartOf` reference links the
 * page back to the site's `WebSite` node.
 *
 * @param {WebPageData} [data={}] - The page data.
 * @returns {object|null} A `WebPage` schema object, or `null` if the required
 *   `url` is missing.
 * @module seo/generators/webpage
 */
export function generateWebPageSchema(data = {}) {
  try {
    const { title, description, url, image, language = DEFAULT_LANGUAGE } = data;

    if (!url) {
      return null;
    }

    const webPage = {
      "@type": "WebPage",
      "@id": url,
      url,
      name: title || SITE_NAME,
      inLanguage: language,
      isPartOf: {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
      },
    };

    if (description) {
      webPage.description = description;
    }

    if (image) {
      webPage.primaryImageOfPage = {
        "@type": "ImageObject",
        url: image,
      };
    }

    return webPage;
  } catch (error) {
    return null;
  }
}