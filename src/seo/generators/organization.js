import { buildOrganizationSchema } from "../constants/organization";

/**
 * Generates a schema.org `Organization` object.
 *
 * This is a thin, reusable wrapper around the shared organization builder in
 * `../constants/organization`. It returns a plain JavaScript object only — it
 * never renders JSX, never uses Helmet, and never emits a `<script>` tag.
 *
 * @returns {object|null} An `Organization` schema object, or `null` if the
 *   underlying builder fails to produce a valid object.
 * @module seo/generators/organization
 */
export function generateOrganizationSchema() {
  try {
    const organization = buildOrganizationSchema();

    if (!organization || !organization["@type"] || !organization.name) {
      return null;
    }

    return organization;
  } catch (error) {
    return null;
  }
}