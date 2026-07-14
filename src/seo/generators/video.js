import { generateImageSchema } from "./image";

/**
 * @typedef {object} VideoData
 * @property {string} title - Video title.
 * @property {string} [description] - Video description.
 * @property {string} url - Full video URL (e.g. YouTube embed or hosted URL).
 * @property {string} [thumbnailUrl] - Thumbnail image URL.
 * @property {string} [uploadDate] - ISO date the video was published.
 * @property {string} [duration] - ISO 8601 duration (e.g. "PT30M").
 * @property {string} [contentUrl] - Direct content URL (if different from `url`).
 * @property {string} [embedUrl] - Embed URL (e.g. YouTube embed).
 * @property {string} [caption] - Caption for the video.
 */

/**
 * Generates a schema.org `VideoObject` schema object.
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag. Supports Live Darshan, Temple
 * Videos, Guide Videos, etc. via generic fields (no hardcoded names).
 *
 * @param {VideoData} [data={}] - The video data.
 * @returns {object|null} A `VideoObject` schema object, or `null` if the
 *   required `title` or `url` is missing.
 * @module seo/generators/video
 */
export function generateVideoSchema(data = {}) {
  try {
    const {
      title,
      description,
      url,
      thumbnailUrl,
      uploadDate,
      duration,
      contentUrl,
      embedUrl,
      caption,
    } = data || {};

    if (!title || !url) {
      return null;
    }

    const schema = {
      "@type": "VideoObject",
      name: title,
      url,
    };

    if (description) schema.description = description;
    if (uploadDate) schema.uploadDate = uploadDate;
    if (duration) schema.duration = duration;
    if (contentUrl) schema.contentUrl = contentUrl;
    if (embedUrl) schema.embedUrl = embedUrl;
    if (caption) schema.caption = caption;

    if (thumbnailUrl) {
      schema.thumbnail = generateImageSchema({ url: thumbnailUrl, title, caption: caption || title });
    }

    return schema;
  } catch (error) {
    return null;
  }
}