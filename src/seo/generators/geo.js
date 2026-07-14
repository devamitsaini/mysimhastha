/**
 * Generates a schema.org `GeoCoordinates` object.
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag. This is a reusable building block
 * consumed by Place / TouristAttraction / TouristDestination / Event schemas.
 *
 * @param {object} [geo={}] - The geo data.
 * @param {number|string} [geo.latitude] - Latitude coordinate.
 * @param {number|string} [geo.longitude] - Longitude coordinate.
 * @returns {object|null} A `GeoCoordinates` schema object, or `null` if either
 *   coordinate is missing or not a finite number.
 * @module seo/generators/geo
 */
export function generateGeoSchema(geo = {}) {
  try {
    const { latitude, longitude } = geo || {};

    const lat = Number(latitude);
    const lng = Number(longitude);

    if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
      return null;
    }

    return {
      "@type": "GeoCoordinates",
      latitude: lat,
      longitude: lng,
    };
  } catch (error) {
    return null;
  }
}