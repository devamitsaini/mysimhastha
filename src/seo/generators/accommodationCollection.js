import { generateItemListSchema } from "./itemList";

/**
 * @typedef {object} AccommodationCollectionData
 * @property {string} title - Title of the collection page (e.g. "Hotels in Ujjain").
 * @property {string} [description] - Description of the collection page.
 * @property {string} [url] - Canonical URL of the collection page.
 * @property {Array<{name: string, url?: string, image?: string, description?: string}>} [items] - List of accommodation items.
 * @property {string} [category] - Category label (e.g. "Hotels", "Homestays").
 */

/**
 * Generates a schema.org `CollectionPage` + `ItemList` for accommodation
 * listing pages (Hotels, Homestays, Guest Houses, Ashrams, Dharamshalas, etc.).
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag.
 *
 * @param {AccommodationCollectionData} [data={}] - The collection data.
 * @returns {object|null} A `CollectionPage` schema object, or `null` if the
 *   required `title` is missing.
 * @module seo/generators/accommodationCollection
 */
export function generateAccommodationCollectionSchema(data = {}) {
  try {
    const { title, description, url, items, category } = data || {};

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

    if (category) {
      schema.about = {
        "@type": "Thing",
        name: category,
      };
    }

    const itemList = generateItemListSchema(items);
    if (itemList) {
      schema.mainEntity = itemList;
    }

    return schema;
  } catch (error) {
    return null;
  }
}