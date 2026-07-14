/**
 * Project-wide default constants for the SEO / JSON-LD engine.
 *
 * These values are intentionally site-level (not page-level) so that every
 * generator can import them without duplicating literals. Nothing here is
 * page-specific or tied to a single guide/stay/temple.
 *
 * @module seo/constants/defaults
 */

/**
 * Canonical absolute base URL of the site.
 * @type {string}
 */
export const SITE_URL = "https://www.mysimhastha.com";

/**
 * Human-readable site name used across Open Graph, Twitter and schema objects.
 * @type {string}
 */
export const SITE_NAME = "MySimhastha";

/**
 * Absolute URL of the site logo (used by Organization / Publisher objects).
 * @type {string}
 */
export const SITE_LOGO = `${SITE_URL}/logo.png`;

/**
 * Default language code for pages that do not specify one.
 * @type {string}
 */
export const DEFAULT_LANGUAGE = "en";

/**
 * Twitter handle used for social cards.
 * @type {string}
 */
export const TWITTER_HANDLE = "@mysimhastha";

/**
 * Current copyright year, evaluated once at module load.
 * @type {number}
 */
export const CURRENT_YEAR = new Date().getFullYear();