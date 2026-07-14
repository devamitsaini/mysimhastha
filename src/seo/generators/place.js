import { generateGeoSchema } from "./geo";
import { generateImageSchema } from "./image";

/**
 * @typedef {object} PlaceData
 * @property {string} name - Name of the place.
 * @property {string} [description] - Description of the place.
 * @property {string} [address] - Street address line.
 * @property {string} [city] - City / locality.
 * @property {string} [state] - State / region.
 * @property {string} [country] - Country name.
 * @property {string} [postalCode] - Postal code.
 * @property {number|string} [latitude] - Latitude coordinate.
 * @property {number|string} [longitude] - Longitude coordinate.
 * @property {string} [telephone] - Contact phone number.
 * @property {string} [website] - Official website URL.
 * @property {string[]} [images] - List of image URLs.
 * @property {string[]} [sameAs] - List of equivalent social/profile URLs.
 */

/**
 * Generates a schema.org `Place` object.
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag. It automatically embeds a
 * `PostalAddress`, `GeoCoordinates` (when coordinates are valid) and an array
 * of `ImageObject` nodes (when images are supplied), and an optional `sameAs`.
 *
 * @param {PlaceData} [place={}] - The place data.
 * @returns {object|null} A `Place` schema object, or `null` if the required
 *   `name` is missing.
 * @module seo/generators/place
 */
export function generatePlaceSchema(place = {}) {
  try {
    const {
      name,
      description,
      address,
      city,
      state,
      country,
      postalCode,
      latitude,
      longitude,
      telephone,
      website,
      images,
      sameAs,
    } = place || {};

    if (!name || typeof name !== "string") {
      return null;
    }

    const schema = {
      "@type": "Place",
      name,
    };

    if (description) {
      schema.description = description;
    }

    const hasAddressPart = address || city || state || country || postalCode;
    if (hasAddressPart) {
      schema.address = {
        "@type": "PostalAddress",
      };
      if (address) schema.address.streetAddress = address;
      if (city) schema.address.addressLocality = city;
      if (state) schema.address.addressRegion = state;
      if (country) schema.address.addressCountry = country;
      if (postalCode) schema.address.postalCode = postalCode;
    }

    const geo = generateGeoSchema({ latitude, longitude });
    if (geo) {
      schema.geo = geo;
    }

    if (telephone) {
      schema.telephone = telephone;
    }

    if (website) {
      schema.url = website;
    }

    if (Array.isArray(images) && images.length > 0) {
      schema.image = images
        .map((url) => generateImageSchema({ url, title: name, caption: name }))
        .filter(Boolean);
    }

    if (Array.isArray(sameAs) && sameAs.length > 0) {
      schema.sameAs = sameAs;
    }

    return schema;
  } catch (error) {
    return null;
  }
}