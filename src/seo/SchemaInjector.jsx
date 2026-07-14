import React from "react";
import { Helmet } from "react-helmet-async";

/**
 * SchemaInjector renders a single, consolidated JSON-LD document.
 *
 * It takes an array of schema.org objects and wraps them in a single
 * `@context` / `@graph` envelope, then emits exactly ONE
 * `<script type="application/ld+json">` tag through `react-helmet-async`.
 *
 * Design rules enforced here:
 *   - NEVER emit more than one JSON-LD script tag. Multiple schemas are merged
 *     into a single `@graph` array so crawlers receive one cohesive document.
 *   - This component is purely presentational: it contains no schema logic and
 *     no page-specific knowledge. It only serializes whatever it is given.
 *
 * @param {object} props - Component props.
 * @param {object[]} [props.schemas=[]] - An array of schema.org objects to be
 *   embedded inside the `@graph` array. Empty/non-array input yields an empty
 *   graph so the output is always valid JSON-LD.
 * @returns {JSX.Element} A `Helmet` element containing a single JSON-LD script.
 */
export default function SchemaInjector({ schemas = [] }) {
  const graph = Array.isArray(schemas) ? schemas : [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}