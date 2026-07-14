import React from "react";
import { Helmet } from "react-helmet-async";

/**
 * Default robots directive applied when none is supplied.
 * @type {string}
 */
const DEFAULT_ROBOTS = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

/**
 * Default site name used for Open Graph / Twitter tags.
 * This is a project-level constant, intentionally NOT page-specific
 * (no "Mahakal", "Guide", etc. is hardcoded anywhere in this module).
 * @type {string}
 */
const DEFAULT_SITE_NAME = "MySimhastha";

/**
 * Map a simple language code to an Open Graph locale.
 * @param {string} lang - Language code (e.g. "en", "hi").
 * @returns {string} Open Graph locale (e.g. "en_IN", "hi_IN").
 */
function toOgLocale(lang) {
  if (!lang) return "en_IN";
  const lower = String(lang).toLowerCase();
  if (lower.startsWith("hi")) return "hi_IN";
  if (lower.startsWith("en")) return "en_IN";
  return `${lower}_IN`;
}

/**
 * SEO is a reusable, page-agnostic component that manages the classic
 * document-level metadata for a page. It is strictly limited to:
 *
 *   - Title
 *   - Meta Description
 *   - Canonical URL
 *   - Robots directive
 *   - Open Graph tags
 *   - Twitter Card tags
 *   - Language alternate (hreflang) links
 *
 * IMPORTANT: This component deliberately contains NO JSON-LD. Structured data
 * is the sole responsibility of {@link SchemaProvider} / {@link SchemaInjector}.
 * Keeping the two concerns separate makes each independently reusable and avoids
 * duplicate or conflicting tags.
 *
 * @param {object} props - Component props.
 * @param {string} props.title - Page title (required).
 * @param {string} [props.description] - Meta description.
 * @param {string} [props.canonical] - Absolute canonical URL.
 * @param {string} [props.image] - Absolute or root-relative social share image URL.
 * @param {string} [props.keywords] - Comma/space separated keywords.
 * @param {string} [props.lang="en"] - Primary language code of the page.
 * @param {string} [props.published] - ISO publish timestamp (article meta).
 * @param {string} [props.modified] - ISO modification timestamp (article meta).
 * @param {Array<{hrefLang: string, href: string}>} [props.alternates] - Optional
 *   list of language alternate links. When omitted, a single `x-default`
 *   alternate pointing at `canonical` is emitted if a canonical is present.
 * @param {string} [props.robots] - Robots directive; defaults to {@link DEFAULT_ROBOTS}.
 * @param {string} [props.siteName] - Site name for OG/Twitter; defaults to
 *   {@link DEFAULT_SITE_NAME}.
 * @returns {JSX.Element} A `Helmet` element containing only meta/link tags.
 */
export default function SEO({
  title,
  description,
  canonical,
  image,
  keywords,
  lang = "en",
  published,
  modified,
  alternates,
  robots = DEFAULT_ROBOTS,
  siteName = DEFAULT_SITE_NAME,
}) {
  const ogLocale = toOgLocale(lang);

  const languageAlternates = Array.isArray(alternates)
    ? alternates
    : canonical
    ? [{ hrefLang: "x-default", href: canonical }]
    : [];

  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Language alternate URLs */}
      {languageAlternates.map((alt) => (
        <link
          key={alt.hrefLang}
          rel="alternate"
          hrefLang={alt.hrefLang}
          href={alt.href}
        />
      ))}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {canonical && <meta property="og:url" content={canonical} />}
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:alt" content={title} />}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={ogLocale} />
      {published && <meta property="article:published_time" content={published} />}
      {modified && <meta property="article:modified_time" content={modified} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
      {image && <meta name="twitter:image:alt" content={title} />}
      {canonical && <meta name="twitter:url" content={canonical} />}
    </Helmet>
  );
}