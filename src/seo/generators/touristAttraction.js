import { generateGeoSchema } from "./geo";
import { generateImageSchema } from "./image";

/**
 * @typedef {object} TouristAttractionData
 * @property {string} name - Name of the attraction (temple, museum, ghat, ...).
 * @property {string} [description] - Description of the attraction.
 * @property {string} [url] - Canonical URL of the attraction page.
 * @property {string[]} [images] - List of image URLs.
 * @property {string} [openingHours] - Opening hours spec (e.g. "Mo-Su 06:00-21:00").
 * @property {number|string} [latitude] - Latitude coordinate.
 * @property {number|string} [longitude] - Longitude coordinate.
 * @property {string} [address] - Street address line.
 * @property {string} [city] - City / locality.
 * @property {string} [state] - State / region.
 * @property {string} [country] - Country name.
 */

/**
 * Generates a schema.org `TouristAttraction` object.
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag. It embeds a `Place` base, a
 * `GeoCoordinates` node (when valid), `ImageObject` nodes (when supplied) and
 * an `openingHoursSpecification` derived from a simple `openingHours` string.
 *
 * @param {TouristAttractionData} [data={}] - The attraction data.
 * @returns {object|null} A `TouristAttraction` schema object, or `null` if the
 *   required `name` is missing.
 * @module seo/generators/touristAttraction
 */
export function generateTouristAttractionSchema(data = {}) {
  try {
    const {
      name,
      description,
      url,
      images,
      openingHours,
      latitude,
      longitude,
      address,
      city,
      state,
      country,
    } = data || {};

    if (!name || typeof name !== "string") {
      return null;
    }

    const schema = {
      "@type": "TouristAttraction",
      name,
    };

    if (description) {
      schema.description = description;
    }

    if (url) {
      schema.url = url;
    }

    // Place base
    const hasAddressPart = address || city || state || country;
    if (hasAddressPart) {
      schema.address = { "@type": "PostalAddress" };
      if (address) schema.address.streetAddress = address;
      if (city) schema.address.addressLocality = city;
      if (state) schema.address.addressRegion = state;
      if (country) schema.address.addressCountry = country;
    }

    const geo = generateGeoSchema({ latitude, longitude });
    if (geo) {
      schema.geo = geo;
    }

    if (Array.isArray(images) && images.length > 0) {
      schema.image = images
        .map((imgUrl) => generateImageSchema({ url: imgUrl, title: name, caption: name }))
        .filter(Boolean);
    }

    if (openingHours && typeof openingHours === "string") {
      schema.openingHoursSpecification = [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: openingHours,
          closes: openingHours,
        },
      ];
    }

    return schema;
  } catch (error) {
    return null;
  }
}