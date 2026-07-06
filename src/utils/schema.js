import SITE from "../config/siteConfig";
import ORGANIZATION from "../config/organization";

export const getOrganizationSchema = () => ORGANIZATION;

export const getWebPageSchema = (guide) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: `${SITE.url}/${guide.language === "hi" ? "hi/" : ""}guide/${guide.slug}`,
  name: guide.title,
  description: guide.description,
  inLanguage: guide.language,
  isPartOf: {
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url
  }
});

export const getArticleSchema = (guide = {}) => ({

  "@context": "https://schema.org",

  "@type": "Article",

  headline: guide.title || "",

  description: guide.description || "",

  image: [

    `${SITE.url}${guide.hero?.image || SITE.defaultImage}`

  ],

  datePublished:

    guide.seo?.publishedTime || new Date().toISOString(),

  dateModified:

    guide.seo?.modifiedTime || new Date().toISOString(),

  author: {

    "@type": "Organization",

    name: guide.author || SITE.name

  },

  publisher: {

    "@type": "Organization",

    name: SITE.name,

    logo: {

      "@type": "ImageObject",

      url: `${SITE.url}${SITE.logo}`

    }

  },

  mainEntityOfPage:

    `${SITE.url}/guide/${guide.slug || "demo"}`

});

export const getFAQSchema = (faq = []) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
});

export const getBreadcrumbSchema = (guide) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE.url
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: `${SITE.url}/guides`
    },
    {
      "@type": "ListItem",
      position: 3,
      name: guide.title,
      item: `${SITE.url}/guide/${guide.slug}`
    }
  ]
});