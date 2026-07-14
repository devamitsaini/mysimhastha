import { SITE_URL, SITE_NAME, SITE_LOGO } from "./defaults";

/**
 * Builds the reusable Organization schema object shared by multiple generators
 * (Organization, WebSite publisher, Article publisher/author, etc.).
 *
 * Centralizing this prevents duplication of the site's identity across every
 * generator. It returns a plain object (no JSX, no Helmet) so it can be embedded
 * directly inside any `@graph` array.
 *
 * @returns {object} A schema.org `Organization` object.
 * @module seo/constants/organization
 */
export function buildOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: SITE_LOGO,
      width: 512,
      height: 512,
    },
    image: SITE_LOGO,
    sameAs: [
      "https://twitter.com/mysimhastha",
      "https://www.instagram.com/mysimhastha",
      "https://www.youtube.com/@mysimhastha",
      "https://www.facebook.com/mysimhastha",
    ],
    email: "contact@mysimhastha.com",
    telephone: "+91-0000000000",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Madhya Pradesh",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-0000000000",
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
    founder: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    description:
      "MySimhastha is a pilgrimage and travel guide for the Simhastha Kumbh Mela, covering temples, stays, events and travel planning.",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    knowsAbout: [
      "Pilgrimage",
      "Simhastha Kumbh Mela",
      "Temples",
      "Travel",
      "Accommodation",
    ],
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
      url: SITE_URL,
      logo: SITE_LOGO,
    },
  };
}

/**
 * Convenience reference to the Organization `@id` used for `publisher` /
 * `author` cross-references inside other schemas.
 * @type {string}
 */
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;