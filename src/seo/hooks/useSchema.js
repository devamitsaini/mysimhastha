import { useMemo } from "react";
import { validateSchema } from "../utils/validateSchema";

/**
 * Custom hook that prepares page data for SchemaProvider with automatic
 * memoization and optional development-mode validation.
 *
 * @param {string} type - The semantic content type (guide, hotel, temple, ...).
 * @param {object} data - The page data to pass to SchemaProvider.
 * @param {object} [options] - Additional options.
 * @param {boolean} [options.validate] - Whether to validate schemas in
 *   development mode (defaults to true).
 * @returns {{ type: string, data: object, options: object }} Prepared props
 *   for SchemaProvider.
 *
 * @example
 * ```jsx
 * const schemaProps = useSchema("guide", { title: "...", url: "..." });
 * <SchemaProvider {...schemaProps} />
 * ```
 */
export function useSchema(type, data = {}, options = {}) {
  return useMemo(() => {
    const { validate = process.env.NODE_ENV === "development", ...rest } = options;

    if (validate) {
      validateSchema(type, data);
    }

    return {
      type,
      data,
      options: rest,
    };
  }, [type, data, options]);
}