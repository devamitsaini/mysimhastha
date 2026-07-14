import { SITE_URL } from "../constants/defaults";
import { generateSearchActionSchema } from "./searchAction";
import { generateImageGallerySchema } from "./imageGallery";
import { generateSpeakableSchema } from "./speakable";
import { generateBrandSchema } from "./brand";
import { generateSiteNavigationSchema } from "./siteNavigation";
import { generateServiceSchema } from "./service";
import { generateTouristDestinationSchema } from "./touristDestination";
import { generateEventSchema } from "./event";

/**
 * @typedef {object} HomeData
 * @property {object} [searchAction] - Custom search action data passed to
 *   `generateSearchActionSchema` (optional).
 * @property {object} [gallery] - Gallery data passed to
 *   `generateImageGallerySchema` (optional).
 * @property {object} [destination] - Destination data passed to
 *   `generateTouristDestinationSchema` (optional).
 * @property {object} [event] - Event data passed to `generateEventSchema` (optional).
 * @property {Array} [navigation] - Custom navigation items (optional).
 * @property {Array<{name: string, description?: string, category?: string}>} [services] - Array
 *   of service definitions. Each entry has `name`, optional `description` and `category`.
 */

/**
 * Generates a comprehensive home page schema array that includes:
 *   - SearchAction
 *   - SiteNavigationElement list
 *   - SpeakableSpecification
 *   - Brand
 *   - ImageGallery (if data.gallery is provided)
 *   - TouristDestination (if data.destination is provided)
 *   - Event (if data.event is provided)
 *   - Services (if data.services is provided)
 *
 * The Organization, Website, and WebPage schemas are NOT built here — they are
 * handled by the standard `buildSiteSchemas` / `buildPageSchemas` helpers inside
 * SchemaProvider so they are never duplicated.
 *
 * Returns an array of plain JavaScript objects only — never renders JSX, never
 * uses Helmet, and never emits a `<script>` tag. The array is intended to be
 * spread into the final `@graph` array by SchemaProvider.
 *
 * @param {HomeData} [data={}] - Optional data to enrich the home page schema.
 * @returns {object[]} Array of schema.org objects (may be empty).
 * @module seo/generators/home
 */
export function generateHomeSchema(data = {}) {
  try {
    const schemas = [];

    // SearchAction
    const searchAction = generateSearchActionSchema(data.searchAction);
    if (searchAction) schemas.push(searchAction);

    // Navigation
    const navigation = generateSiteNavigationSchema(data.navigation);
    if (navigation) schemas.push(navigation);

    // Speakable
    const speakable = generateSpeakableSchema();
    if (speakable) schemas.push(speakable);

    // Brand
    const brand = generateBrandSchema();
    if (brand) schemas.push(brand);

    // ImageGallery
    const gallery = generateImageGallerySchema(data.gallery);
    if (gallery) schemas.push(gallery);

    // TouristDestination
    const destination = generateTouristDestinationSchema(data.destination);
    if (destination) schemas.push(destination);

    // Event
    const event = generateEventSchema(data.event);
    if (event) schemas.push(event);

    // Services
    if (Array.isArray(data.services) && data.services.length > 0) {
      data.services.forEach((svc) => {
        const service = generateServiceSchema(svc);
        if (service) schemas.push(service);
      });
    }

    return schemas;
  } catch (error) {
    return [];
  }
}