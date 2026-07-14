import { SITE_NAME, CURRENT_YEAR, DEFAULT_LANGUAGE } from "../constants/defaults";
import { ORGANIZATION_ID } from "../constants/organization";

/**
 * @typedef {object} ArticleData
 * @property {string} title - The article headline.
 * @property {string} [description] - Short description / abstract.
 * @property {string} [image] - Absolute or root-relative image URL.
 * @property {string} [published] - ISO publish timestamp.
 * @property {string} [modified] - ISO modification timestamp.
 * @property {string} [keywords] - Comma/space separated keywords.
 * @property {string} [author] - Author display name (defaults to the site).
 * @property {string} url - Canonical URL of the article.
 * @property {string} [articleSection] - Section/category name.
 * @property {string} [about] - Topic the article is about.
 * @property {string} [language] - Language code (e.g. "en", "hi").
 */

/**
 * Generates a schema.org `Article` object.
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag. The publisher and author are
 * cross-referenced to the shared Organization via its `@id` to avoid
 * duplicating the full object.
 *
 * @param {ArticleData} [article={}] - The article data.
 * @returns {object|null} An `Article` schema object, or `null` if the required
 *   `title` or `url` is missing.
 * @module seo/generators/article
 */
export function generateArticleSchema(article = {}) {
  try {
    const {
      title,
      description,
      image,
      published,
      modified,
      keywords,
      author,
      url,
      articleSection,
      about,
      language = DEFAULT_LANGUAGE,
    } = article;

    if (!title || !url) {
      return null;
    }

    const schema = {
      "@type": "Article",
      "@id": `${url}/#article`,
      headline: title,
      alternativeHeadline: title,
      inLanguage: language,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
      url,
      isAccessibleForFree: true,
      publisher: {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
      },
      author: {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: author || SITE_NAME,
      },
      copyrightHolder: {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
      },
      copyrightYear: CURRENT_YEAR,
      license: url,
    };

    if (description) {
      schema.description = description;
    }

    if (keywords) {
      schema.keywords = keywords;
    }

    if (image) {
      schema.image = [
        {
          "@type": "ImageObject",
          url: image,
        },
      ];
    }

    if (published) {
      schema.datePublished = published;
    }

    if (modified) {
      schema.dateModified = modified;
    } else if (published) {
      schema.dateModified = published;
    }

    if (articleSection) {
      schema.articleSection = articleSection;
    }

    if (about) {
      schema.about = {
        "@type": "Thing",
        name: about,
      };
    }

    return schema;
  } catch (error) {
    return null;
  }
}