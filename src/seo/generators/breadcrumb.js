/**
 * @typedef {object} BreadcrumbItem
 * @property {string} label - Human-readable label for the crumb.
 * @property {string} url - Absolute URL of the crumb target.
 */

/**
 * Generates a schema.org `BreadcrumbList` object.
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag. Each item is positioned
 * sequentially starting at 1.
 *
 * @param {BreadcrumbItem[]} [items=[]] - Ordered list of breadcrumb entries.
 * @returns {object|null} A `BreadcrumbList` schema object, or `null` if `items`
 *   is not a non-empty array.
 * @module seo/generators/breadcrumb
 */
export function generateBreadcrumbSchema(items = []) {
  try {
    if (!Array.isArray(items) || items.length === 0) {
      return null;
    }

    const validItems = items.filter(
      (item) => item && typeof item.label === "string" && typeof item.url === "string"
    );

    if (validItems.length === 0) {
      return null;
    }

    return {
      "@type": "BreadcrumbList",
      itemListElement: validItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        item: item.url,
      })),
    };
  } catch (error) {
    return null;
  }
}