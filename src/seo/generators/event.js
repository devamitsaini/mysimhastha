import { generateGeoSchema } from "./geo";
import { generateImageSchema } from "./image";
import { ORGANIZATION_ID } from "../constants/organization";

/**
 * @typedef {object} EventData
 * @property {string} title - Event name.
 * @property {string} [description] - Event description.
 * @property {object} [location] - Location data passed to the Place builder
 *   (name, address, city, state, country, latitude, longitude, ...).
 * @property {string} [organizer] - Organizer display name (defaults to site).
 * @property {string} startDate - ISO start datetime.
 * @property {string} [endDate] - ISO end datetime.
 * @property {string} [image] - Primary event image URL.
 * @property {string} [status] - Event status (e.g. "EventScheduled").
 * @property {string} [attendanceMode] - Attendance mode (e.g. "OfflineEventAttendanceMode").
 */

/**
 * Generates a schema.org `Event` object.
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag. The organizer is cross-referenced
 * to the shared Organization via its `@id`. Supports Simhastha, Shahi Sawari,
 * Mahashivratri, Bhasma Aarti, etc. through generic fields (no hardcoded names).
 *
 * @param {EventData} [data={}] - The event data.
 * @returns {object|null} An `Event` schema object, or `null` if the required
 *   `title` or `startDate` is missing.
 * @module seo/generators/event
 */
export function generateEventSchema(data = {}) {
  try {
    const {
      title,
      description,
      location,
      organizer,
      startDate,
      endDate,
      image,
      status,
      attendanceMode,
    } = data || {};

    if (!title || !startDate) {
      return null;
    }

    const schema = {
      "@type": "Event",
      name: title,
      startDate,
      eventStatus: status || "EventScheduled",
      eventAttendanceMode: attendanceMode || "OfflineEventAttendanceMode",
      organizer: {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: organizer || undefined,
      },
    };

    if (description) {
      schema.description = description;
    }

    if (endDate) {
      schema.endDate = endDate;
    }

    if (location && typeof location === "object") {
      const { latitude, longitude, ...placeRest } = location;
      schema.location = {
        "@type": "Place",
        ...placeRest,
      };
      const geo = generateGeoSchema({ latitude, longitude });
      if (geo) {
        schema.location.geo = geo;
      }
    }

    if (image) {
      const img = generateImageSchema({ url: image, title, caption: title });
      if (img) {
        schema.image = img;
      }
    }

    return schema;
  } catch (error) {
    return null;
  }
}