import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { SITE_URL } from "../constants/defaults";

/**
 * @typedef {object} SEOData
 * @property {string} title - Page title.
 * @property {string} [description] - Meta description.
 * @property {string} [canonical] - Absolute canonical URL.
 * @property {string} [image] - Social share image URL.
 * @property {string} [keywords] - Comma/space separated keywords.
 * @property {string} [lang] - Language code (defaults to "en").
 * @property {string} [published] - ISO publish timestamp.
 * @property {string} [modified] - ISO modification timestamp.
 * @property {Array<{hrefLang: string, href: string}>} [alternates] - Language alternates.
 * @property {string} [robots] - Robots directive.
 */

/**
 * Custom hook that prepares SEO metadata for a page.
 *
 * Automatically:
 *   - Detects the canonical URL from React Router's `pathname`
 *   - Falls back to the site default image when no page image is provided
 *   - Generates language alternates for en/hi when a slug is provided
 *   - Memoizes the result to avoid unnecessary re-renders
 *
 * @param {SEOData} pageSEO - Page-specific SEO overrides.
 * @param {object} [options] - Additional options.
 * @param {string} [options.slug] - URL slug for language alternate generation.
 * @param {string} [options.lang] - Primary language code.
 * @param {string} [options.type] - Page type prefix for URL (e.g. "guide", "blog").
 * @returns {SEOData} Prepared SEO data ready to pass to `<SEO />`.
 *
 * @example
 * ```jsx
 * const seo = useSEO({ title: "My Page", description: "..." }, { slug: "my-page", type: "guide" });
 * <SEO {...seo} />
 * ```
 */
export function useSEO(pageSEO = {}, options = {}) {
  const { pathname } = useLocation();

  return useMemo(() => {
    const { slug, lang = "en", type } = options;
    const { title, description, image, keywords, published, modified, robots } = pageSEO;

    // Build canonical URL
    let canonical = pageSEO.canonical;
    if (!canonical) {
      if (slug && type) {
        const prefix = lang === "hi" ? `/hi/${type}` : `/${type}`;
        canonical = `${SITE_URL}${prefix}/${slug}`;
      } else {
        canonical = `${SITE_URL}${pathname}`;
      }
    }

    // Default image
    const ogImage = image || `${SITE_URL}/og-image.jpg`;

    // Language alternates
    const alternates = [];
    if (slug && type) {
      alternates.push(
        { hrefLang: "en", href: `${SITE_URL}/${type}/${slug}` },
        { hrefLang: "hi", href: `${SITE_URL}/hi/${type}/${slug}` },
        { hrefLang: "x-default", href: `${SITE_URL}/${type}/${slug}` }
      );
    }

    return {
      title,
      description,
      canonical,
      image: ogImage,
      keywords,
      lang,
      published,
      modified,
      alternates: alternates.length > 0 ? alternates : undefined,
      robots,
    };
  }, [pageSEO, options, pathname]);
}
