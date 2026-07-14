/**
 * @typedef {object} ContactPointData
 * @property {string} [telephone] - Contact phone number.
 * @property {string} [email] - Contact email address.
 * @property {string} [contactType] - Type of contact (e.g. "reservations",
 *   "customer support"). Defaults to "reservations".
 * @property {string} [areaServed] - Geographic area served (e.g. "IN").
 * @property {string[]} [availableLanguage] - Languages available (e.g. ["en", "hi"]).
 * @property {string} [url] - Website or booking URL.
 */

/**
 * Generates a schema.org `ContactPoint` object.
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag. This is a reusable building block
 * consumed by Hotel / LodgingBusiness / LocalBusiness / Place schemas.
 *
 * @param {ContactPointData} [cp={}] - The contact point data.
 * @returns {object|null} A `ContactPoint` schema object, or `null` if no
 *   meaningful contact info is provided.
 * @module seo/generators/contactPoint
 */
export function generateContactPointSchema(cp = {}) {
  try {
    const {
      telephone,
      email,
      contactType = "reservations",
      areaServed,
      availableLanguage,
      url,
    } = cp || {};

    if (!telephone && !email && !url) {
      return null;
    }

    const schema = {
      "@type": "ContactPoint",
      contactType,
    };

    if (telephone) schema.telephone = telephone;
    if (email) schema.email = email;
    if (areaServed) schema.areaServed = areaServed;
    if (Array.isArray(availableLanguage) && availableLanguage.length > 0) {
      schema.availableLanguage = availableLanguage;
    }
    if (url) schema.url = url;

    return schema;
  } catch (error) {
    return null;
  }
}