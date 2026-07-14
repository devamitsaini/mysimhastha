/**
 * @typedef {object} ListItemData
 * @property {string} name - Display name of the item.
 * @property {string} [url] - URL of the item.
 * @property {string} [image] - Image URL of the item.
 * @property {string} [description] - Description of the item.
 */

/**
 * Generates a schema.org `ItemList` object wrapping individual `ListItem`
 * entries. Each item is positioned sequentially starting at 1.
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag.
 *
 * @param {ListItemData[]} [items=[]] - Ordered list of items.
 * @returns {object|null} An `ItemList` schema object, or `null` if `items` is
 *   empty or every entry is invalid.
 * @module seo/generators/itemList
 */
export function generateItemListSchema(items = []) {
  try {
    if (!Array.isArray(items) || items.length === 0) {
      return null;
    }

    const validItems = items.filter(
      (item) => item && typeof item.name === "string"
    );

    if (validItems.length === 0) {
      return null;
    }

    return {
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
        if (item.description) listItem.description = item.description;
        return listItem;
      }),
    };
  } catch (error) {
    return null;
  }
}