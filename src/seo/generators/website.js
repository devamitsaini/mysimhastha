import { SITE_URL, SITE_NAME, CURRENT_YEAR, DEFAULT_LANGUAGE } from "../constants/defaults";
import { buildOrganizationSchema, ORGANIZATION_ID } from "../constants/organization";

/**
 * Generates a schema.org `WebSite` object with a site-wide search action.
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag. The publisher is cross-referenced to
 * the shared Organization via its `@id` to avoid duplicating the full object.
 *
 * @returns {object|null} A `WebSite` schema object, or `null` if the site URL
 *   is missing.
 * @module seo/generators/website
 */
export function generateWebsiteSchema() {
  try {
    if (!SITE_URL) {
      return null;
    }

    const organization = buildOrganizationSchema();

    const website = {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
      },
      inLanguage: DEFAULT_LANGUAGE,
      copyrightYear: CURRENT_YEAR,
      copyrightHolder: {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    };

    // Keep the publisher object self-contained if the shared builder is absent.
    if (!organization) {
      delete website.publisher;
    }

    return website;
  } catch (error) {
    return null;
  }
}