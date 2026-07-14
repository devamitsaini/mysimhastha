import { generateGeoSchema } from "./geo";
import { generateImageSchema } from "./image";

/**
 * @typedef {object} TouristDestinationData
 * @property {string} destination - Name of the destination (e.g. Ujjain).
 * @property {string} [description] - Description of the destination.
 * @property {string[]} [images] - List of image URLs.
 * @property {object} [geo] - Geo data `{ latitude, longitude }`.
 * @property {string} [latitude] - Latitude coordinate (alternative to `geo`).
 * @property {string} [longitude] - Longitude coordinate (alternative to `geo`).
 */

/**
 * Generates a schema.org `TouristDestination` object.
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag. It embeds a `Place` base, a
 * `GeoCoordinates` node (when valid) and `ImageObject` nodes (when supplied).
 *
 * @param {TouristDestinationData} [data={}] - The destination data.
 * @returns {object|null} A `TouristDestination` schema object, or `null` if the
 *   required `destination` name is missing.
 * @module seo/generators/touristDestination
 */
export function generateTouristDestinationSchema(data = {}) {
  try {
    const { destination, description, images, geo, latitude, longitude } = data || {};

    if (!destination || typeof destination !== "string") {
      return null;
    }

    const schema = {
      "@type": "TouristDestination",
      name: destination,
    };

    if (description) {
      schema.description = description;
    }

    const geoCoords = generateGeoSchema(geo || { latitude, longitude });
    if (geoCoords) {
      schema.geo = geoCoords;
    }

    if (Array.isArray(images) && images.length > 0) {
      schema.image = images
        .map((url) => generateImageSchema({ url, title: destination, caption: destination }))
        .filter(Boolean);
    }

    return schema;
  } catch (error) {
    return null;
  }
}