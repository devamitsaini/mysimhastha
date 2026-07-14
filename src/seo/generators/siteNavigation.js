import { SITE_URL } from "../constants/defaults";

/**
 * @typedef {object} NavItem
 * @property {string} name - Navigation link label.
 * @property {string} url - Absolute URL of the target page.
 * @property {number} [position] - Explicit position (defaults to sequential).
 */

/**
 * Generates a schema.org `ItemList` of `SiteNavigationElement` objects.
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag. When no custom items are provided,
 * it defaults to the primary MySimhastha navigation structure (no hardcoded
 * "Mahakal") using labels such as Home, Guides, Temples, Stays, Gallery, Blogs,
 * News, Simhastha.
 *
 * @param {NavItem[]} [items] - Custom navigation items. When omitted or empty,
 *   the default site-wide navigation is used.
 * @returns {object|null} An `ItemList` of `SiteNavigationElement` items, or
 *   `null` if no valid items are available.
 * @module seo/generators/siteNavigation
 */
export function generateSiteNavigationSchema(items) {
  try {
    const defaultItems = [
      { name: "Home", url: `${SITE_URL}/` },
      { name: "Guides", url: `${SITE_URL}/guides` },
      { name: "Temples", url: `${SITE_URL}/temples` },
      { name: "Stays", url: `${SITE_URL}/stays` },
      { name: "Gallery", url: `${SITE_URL}/gallery` },
      { name: "Blogs", url: `${SITE_URL}/blogs` },
      { name: "News", url: `${SITE_URL}/news` },
      { name: "Simhastha 2028", url: `${SITE_URL}/simhastha-2028` },
    ];

    const navItems = (Array.isArray(items) && items.length > 0) ? items : defaultItems;

    const validItems = navItems.filter(
      (item) => item && typeof item.name === "string" && typeof item.url === "string"
    );

    if (validItems.length === 0) {
      return null;
    }

    return {
      "@type": "ItemList",
      itemListElement: validItems.map((item, index) => ({
        "@type": "SiteNavigationElement",
        name: item.name,
        url: item.url,
        position: typeof item.position === "number" ? item.position : index + 1,
      })),
    };
  } catch (error) {
    return null;
  }
}