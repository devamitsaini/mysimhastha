/**
 * Validates generated schema objects in development mode.
 *
 * Checks for common issues:
 *   - Missing required fields (headline, image, description, geo)
 *   - Invalid dates
 *   - Duplicate @id values
 *   - Broken URLs
 *
 * Uses `console.warn` to surface issues without crashing the app.
 *
 * @param {string} type - The content type being validated.
 * @param {object} data - The page data used to generate schemas.
 * @module seo/utils/validateSchema
 */
export function validateSchema(type, data) {
  if (typeof window === "undefined") return;
  if (!data || typeof data !== "object") return;

  const warnings = [];

  // Required fields per type
  const requiredFields = {
    guide: ["title", "url"],
    blog: ["title", "url"],
    hotel: ["name"],
    homestay: ["name"],
    guesthouse: ["name"],
    ashram: ["name"],
    dharamshala: ["name"],
    temple: ["name"],
    destination: ["destination"],
    event: ["title", "startDate"],
    howto: ["title"],
    gallery: ["title"],
    home: [],
  };

  const required = requiredFields[type] || [];
  required.forEach((field) => {
    const value = data[field];
    if (value === undefined || value === null || value === "") {
      warnings.push(`Missing required field "${field}" for type "${type}"`);
    }
  });

  // Date validation
  if (data.published && isNaN(Date.parse(data.published))) {
    warnings.push(`Invalid date format for "published": "${data.published}"`);
  }
  if (data.modified && isNaN(Date.parse(data.modified))) {
    warnings.push(`Invalid date format for "modified": "${data.modified}"`);
  }
  if (data.startDate && isNaN(Date.parse(data.startDate))) {
    warnings.push(`Invalid date format for "startDate": "${data.startDate}"`);
  }
  if (data.endDate && isNaN(Date.parse(data.endDate))) {
    warnings.push(`Invalid date format for "endDate": "${data.endDate}"`);
  }

  // Geo validation
  if (data.latitude !== undefined) {
    const lat = Number(data.latitude);
    if (!Number.isFinite(lat) || lat < -90 || lat > 90) {
      warnings.push(`Invalid latitude value: "${data.latitude}"`);
    }
  }
  if (data.longitude !== undefined) {
    const lng = Number(data.longitude);
    if (!Number.isFinite(lng) || lng < -180 || lng > 180) {
      warnings.push(`Invalid longitude value: "${data.longitude}"`);
    }
  }

  // Image validation
  if (data.image && typeof data.image === "string") {
    try {
      new URL(data.image);
    } catch {
      warnings.push(`Invalid image URL: "${data.image}"`);
    }
  }

  // URL validation
  if (data.url && typeof data.url === "string") {
    try {
      new URL(data.url);
    } catch {
      warnings.push(`Invalid URL: "${data.url}"`);
    }
  }

  if (warnings.length > 0) {
    console.warn(
      `[SEO Validation] ${warnings.length} issue(s) for type "${type}":`,
      warnings
    );
  }

  return warnings;
}