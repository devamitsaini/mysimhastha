/**
 * @typedef {object} ImageData
 * @property {string} url - Absolute or root-relative URL of the image.
 * @property {string} [caption] - Caption / alt text for the image.
 * @property {string} [title] - Title of the image.
 * @property {number} [width] - Intrinsic width in pixels.
 * @property {number} [height] - Intrinsic height in pixels.
 */

/**
 * Generates a schema.org `ImageObject` object.
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag.
 *
 * @param {ImageData} [image={}] - The image data.
 * @returns {object|null} An `ImageObject` schema object, or `null` if the
 *   required `url` is missing.
 * @module seo/generators/image
 */
export function generateImageSchema(image = {}) {
  try {
    const { url, caption, title, width, height } = image;

    if (!url || typeof url !== "string") {
      return null;
    }

    const schema = {
      "@type": "ImageObject",
      url,
      contentUrl: url,
    };

    if (title) {
      schema.name = title;
    }

    if (caption) {
      schema.caption = caption;
    }

    if (typeof width === "number" && width > 0) {
      schema.width = width;
    }

    if (typeof height === "number" && height > 0) {
      schema.height = height;
    }

    return schema;
  } catch (error) {
    return null;
  }
}