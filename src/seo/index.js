/**
 * Public entry point for the reusable SEO & JSON-LD architecture.
 *
 * This barrel module exposes the building blocks every future page will
 * compose together:
 *
 *   - {@link SEO}            : document-level metadata (title, description,
 *                              canonical, robots, Open Graph, Twitter, hreflang).
 *                              Contains NO JSON-LD by design.
 *   - {@link SchemaProvider} : the orchestrator that maps a semantic `type` +
 *                              `data` to one or more schema.org objects and
 *                              delegates rendering to {@link SchemaInjector}.
 *   - {@link SchemaInjector} : renders a SINGLE consolidated JSON-LD `<script>`
 *                              from an array of schema.org objects.
 *   - {@link useSEO}         : React hook that prepares SEO metadata with
 *                              auto-generated canonical URL, image fallback,
 *                              and language alternates.
 *   - {@link useSchema}      : React hook that prepares schema props with
 *                              automatic memoization and dev-mode validation.
 *
 * Pages should import from this module only, e.g.:
 *
 *   import { SEO, SchemaProvider, useSEO, useSchema } from "../seo";
 *
 * @module seo
 */

export { default as SEO } from "./SEO";
export { default as SchemaProvider } from "./SchemaProvider";
export { default as SchemaInjector } from "./SchemaInjector";
export { useSEO } from "./hooks/useSEO";
export { useSchema } from "./hooks/useSchema";
