/**
 * @typedef {object} HowToStep
 * @property {string} name - Short title of the step.
 * @property {string} text - Instruction text for the step.
 * @property {string} [url] - Optional deep-link to the step.
 * @property {string} [image] - Optional image URL for the step.
 */

/**
 * @typedef {object} HowToData
 * @property {string} title - Title of the how-to guide.
 * @property {string} [description] - Description of the how-to guide.
 * @property {HowToStep[]} [steps] - Ordered list of steps.
 * @property {string} [estimatedTime] - Estimated time as ISO 8601 duration
 *   (e.g. "PT30M" for 30 minutes).
 * @property {string[]} [tools] - List of required tools.
 * @property {string[]} [supplies] - List of required supplies.
 */

/**
 * Generates a schema.org `HowTo` object.
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag. Used for guides such as "how to
 * book Bhasma Aarti", "how to reach Mahakal", "how to reach Omkareshwar" via
 * generic fields (no hardcoded names).
 *
 * @param {HowToData} [data={}] - The how-to data.
 * @returns {object|null} A `HowTo` schema object, or `null` if the required
 *   `title` is missing.
 * @module seo/generators/howTo
 */
export function generateHowToSchema(data = {}) {
  try {
    const { title, description, steps, estimatedTime, tools, supplies } = data || {};

    if (!title || typeof title !== "string") {
      return null;
    }

    const schema = {
      "@type": "HowTo",
      name: title,
    };

    if (description) {
      schema.description = description;
    }

    if (estimatedTime) {
      schema.totalTime = estimatedTime;
    }

    if (Array.isArray(steps) && steps.length > 0) {
      schema.step = steps
        .filter((s) => s && typeof s.text === "string")
        .map((s, index) => {
          const step = {
            "@type": "HowToStep",
            position: index + 1,
            name: s.name || `Step ${index + 1}`,
            text: s.text,
          };
          if (s.url) step.url = s.url;
          if (s.image) step.image = s.image;
          return step;
        });
    }

    if (Array.isArray(tools) && tools.length > 0) {
      schema.tool = tools.map((t) => ({ "@type": "HowToTool", name: t }));
    }

    if (Array.isArray(supplies) && supplies.length > 0) {
      schema.supply = supplies.map((s) => ({ "@type": "HowToSupply", name: s }));
    }

    return schema;
  } catch (error) {
    return null;
  }
}