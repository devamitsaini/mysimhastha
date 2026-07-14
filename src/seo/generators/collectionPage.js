/**
 * @typedef {object} CollectionItem
 * @property {string} name - Display name of the item.
 * @property {string} [url] - URL of the item.
 * @property {string} [image] - Image URL of the item.
 */

/**
 * @typedef {object} CollectionPageData
 * @property {string} title - Title of the collection page.
 * @property {string} [description] - Description of the collection page.
 * @property {string} [url] - Canonical URL of the collection page.
 * @property {CollectionItem[]} [items] - List of items in the collection.
 */

/**
 * Generates a schema.org `CollectionPage` object wrapping an `ItemList`.
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag. Each item becomes a positioned
 * `ListItem` inside the `mainEntity` `ItemList`.
 *
 * @param {CollectionPageData} [data={}] - The collection page data.
 * @returns {object|null} A `CollectionPage` schema object, or `null` if the
 *   required `title` is missing.
 * @module seo/generators/collectionPage
 */
export function generateCollectionPageSchema(data = {}) {
  try {
    const { title, description, url, items } = data || {};

    if (!title || typeof title !== "string") {
      return null;
    }

    const schema = {
      "@type": "CollectionPage",
      name: title,
    };

    if (description) {
      schema.description = description;
    }

    if (url) {
      schema.url = url;
    }

    if (Array.isArray(items) && items.length > 0) {
      const validItems = items.filter(
        (item) => item && typeof item.name === "string"
      );

      schema.mainEntity = {
        "@type": "ItemList",
        numberOfItems: validItems.length,
        itemListElement: validItems.map((item, index) => {
          const listItem = {
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
          };
          if (item.url) listItem.url = item.url;
          if (item.image) listItem.image = item.image;
          return listItem;
        }),
      };
    }

    return schema;
  } catch (error) {
    return null;
  }
}