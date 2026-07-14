import { generateImageSchema } from "./image";

/**
 * @typedef {object} ImageGalleryData
 * @property {string} [title] - Title of the gallery.
 * @property {string} [description] - Description of the gallery.
 * @property {string[]} [images] - Array of image URLs.
 * @property {string} [url] - Canonical URL of the gallery page.
 */

/**
 * Generates a schema.org `ImageGallery` object.
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag. It automatically converts the
 * `images` array into an array of `ImageObject` nodes.
 *
 * @param {ImageGalleryData} [data={}] - The gallery data.
 * @returns {object|null} An `ImageGallery` schema object, or `null` if the
 *   required `title` is missing.
 * @module seo/generators/imageGallery
 */
export function generateImageGallerySchema(data = {}) {
  try {
    const { title, description, images, url } = data || {};

    if (!title || typeof title !== "string") {
      return null;
    }

    const schema = {
      "@type": "ImageGallery",
      name: title,
    };

    if (description) schema.description = description;
    if (url) schema.url = url;

    if (Array.isArray(images) && images.length > 0) {
      schema.image = images
        .map((imgUrl) => generateImageSchema({ url: imgUrl, title, caption: title }))
        .filter(Boolean);
    }

    return schema;
  } catch (error) {
    return null;
  }
}