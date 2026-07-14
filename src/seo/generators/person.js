/**
 * @typedef {object} PersonData
 * @property {string} name - The person's full name.
 * @property {string} [description] - Short bio or description.
 * @property {string} [url] - URL to the person's profile page.
 * @property {string} [image] - Profile image URL.
 * @property {string} [sameAs] - Social / profile link.
 * @property {string} [role] - Role within the organization (e.g. "Author",
 *   "Editor", "Contributor"). Defaults to "Author".
 */

/**
 * Generates a schema.org `Person` object.
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag. Used for authors, editors,
 * contributors, etc.
 *
 * @param {PersonData} [data={}] - The person data.
 * @returns {object|null} A `Person` schema object, or `null` if the required
 *   `name` is missing.
 * @module seo/generators/person
 */
export function generatePersonSchema(data = {}) {
  try {
    const { name, description, url, image, sameAs, role } = data || {};

    if (!name || typeof name !== "string") {
      return null;
    }

    const schema = {
      "@type": "Person",
      name,
    };

    if (description) schema.description = description;
    if (url) schema.url = url;
    if (image) schema.image = image;
    if (sameAs) schema.sameAs = sameAs;
    if (role) schema.jobTitle = role;

    return schema;
  } catch (error) {
    return null;
  }
}