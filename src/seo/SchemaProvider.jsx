import React from "react";
import SchemaInjector from "./SchemaInjector";
import { generateItemListSchema } from "./generators/itemList";

import { generateOrganizationSchema } from "./generators/organization";
import { generateWebsiteSchema } from "./generators/website";
import { generateWebPageSchema } from "./generators/webpage";
import { generateArticleSchema } from "./generators/article";
import { generateBreadcrumbSchema } from "./generators/breadcrumb";
import { generateImageSchema } from "./generators/image";
import { generateFAQSchema } from "./generators/faq";
import { generatePlaceSchema } from "./generators/place";
import { generateTouristAttractionSchema } from "./generators/touristAttraction";
import { generateTouristDestinationSchema } from "./generators/touristDestination";
import { generateEventSchema } from "./generators/event";
import { generateHowToSchema } from "./generators/howTo";
import { generateCollectionPageSchema } from "./generators/collectionPage";
import { generateHotelSchema } from "./generators/hotel";
import { generateLodgingBusinessSchema } from "./generators/lodgingBusiness";
import { generateLocalBusinessSchema } from "./generators/localBusiness";
import { generateOfferSchema } from "./generators/offer";
import { generateAggregateRatingSchema } from "./generators/aggregateRating";
import { generateReviewSchema } from "./generators/review";
import { generateAccommodationCollectionSchema } from "./generators/accommodationCollection";
import { generateHomeSchema } from "./generators/home";
import { generateSearchActionSchema } from "./generators/searchAction";
import { generateSiteNavigationSchema } from "./generators/siteNavigation";
import { generateSpeakableSchema } from "./generators/speakable";
import { generatePersonSchema } from "./generators/person";
import { generateBrandSchema } from "./generators/brand";
import { generateServiceSchema } from "./generators/service";
import { generateVideoSchema } from "./generators/video";
import { generateImageGallerySchema } from "./generators/imageGallery";
import { generateEntityGraph } from "./generators/entityGraph";

/**
 * Compact helper that drops `null`/`undefined` entries so a generator that
 * returns `null` (missing required data) never pollutes the final graph.
 * @param {Array<object|null>} entries - Mixed list of schema objects / nulls.
 * @returns {object[]} Only the truthy schema objects.
 */
function compact(entries) {
  return entries.filter(Boolean);
}

/**
 * Build the site-wide schemas shared by (almost) every page: the Organization
 * identity and the WebSite node. Centralizing this avoids duplicating these
 * nodes across every content-type branch below.
 *
 * @returns {object[]} Shared schema objects (may be empty if generators fail).
 */
function buildSiteSchemas() {
  return compact([generateOrganizationSchema(), generateWebsiteSchema()]);
}

/**
 * Build the page-level schemas common to content pages that have a URL, title
 * and (optionally) an image: WebPage, ImageObject and BreadcrumbList.
 *
 * @param {object} data - The page data.
 * @returns {object[]} Page-level schema objects.
 */
function buildPageSchemas(data) {
  const { url, title, description, image, language, breadcrumbs } = data || {};

  return compact([
    generateWebPageSchema({ title, description, url, image, language }),
    generateImageSchema({ url: image, title, caption: title }),
    generateBreadcrumbSchema(breadcrumbs),
  ]);
}

/**
 * Build an Article schema (used by guide / blog content types) when the
 * required `title` and `url` are present.
 *
 * @param {object} data - The page data.
 * @returns {object|null} An Article schema or null.
 */
function buildArticleSchema(data) {
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
    language,
  } = data || {};

  return generateArticleSchema({
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
    language,
  });
}

/**
 * Build an FAQPage schema when FAQ items are supplied.
 * @param {object} data - The page data.
 * @returns {object|null} An FAQPage schema or null.
 */
function buildFaqSchema(data) {
  const { faqs } = data || {};
  return generateFAQSchema(faqs);
}

/**
 * Build a Place schema (used by temple / destination / event types) when a
 * `place` object is supplied in the page data.
 * @param {object} data - The page data.
 * @returns {object|null} A Place schema or null.
 */
function buildPlaceSchema(data) {
  const { place } = data || {};
  return place ? generatePlaceSchema(place) : null;
}

/**
 * Build a TouristAttraction schema (used by temple type) when a `attraction`
 * object is supplied in the page data.
 * @param {object} data - The page data.
 * @returns {object|null} A TouristAttraction schema or null.
 */
function buildTouristAttractionSchema(data) {
  const { attraction } = data || {};
  return attraction ? generateTouristAttractionSchema(attraction) : null;
}

/**
 * Build a TouristDestination schema (used by destination type) when a
 * `destination` object is supplied in the page data.
 * @param {object} data - The page data.
 * @returns {object|null} A TouristDestination schema or null.
 */
function buildTouristDestinationSchema(data) {
  const { destination } = data || {};
  return destination ? generateTouristDestinationSchema(destination) : null;
}

/**
 * Build an Event schema (used by event type) when an `event` object is supplied
 * in the page data.
 * @param {object} data - The page data.
 * @returns {object|null} An Event schema or null.
 */
function buildEventSchema(data) {
  const { event } = data || {};
  return event ? generateEventSchema(event) : null;
}

/**
 * Build a HowTo schema (used by howto type) when a `howTo` object is supplied in
 * the page data.
 * @param {object} data - The page data.
 * @returns {object|null} A HowTo schema or null.
 */
function buildHowToSchema(data) {
  const { howTo } = data || {};
  return howTo ? generateHowToSchema(howTo) : null;
}

/**
 * Build a CollectionPage schema (used by collection type) when a `collection`
 * object is supplied in the page data.
 * @param {object} data - The page data.
 * @returns {object|null} A CollectionPage schema or null.
 */
function buildCollectionPageSchema(data) {
  const { collection } = data || {};
  return collection ? generateCollectionPageSchema(collection) : null;
}

/**
 * Build a Hotel schema (used by hotel type) when a `stay` object is supplied.
 * @param {object} data - The page data.
 * @returns {object|null} A Hotel schema or null.
 */
function buildHotelSchema(data) {
  const { stay } = data || {};
  return stay ? generateHotelSchema(stay) : null;
}

/**
 * Build a LodgingBusiness schema (used by homestay/guesthouse/ashram/dharamshala
 * types) when a `stay` object is supplied. The `subtype` field on the stay
 * object controls the exact @type (e.g. "GuestHouse", "Hostel", "Resort").
 * @param {object} data - The page data.
 * @returns {object|null} A LodgingBusiness schema or null.
 */
function buildLodgingBusinessSchema(data) {
  const { stay } = data || {};
  return stay ? generateLodgingBusinessSchema(stay) : null;
}

/**
 * Build a LocalBusiness schema (used by localbusiness type) when a `business`
 * object is supplied.
 * @param {object} data - The page data.
 * @returns {object|null} A LocalBusiness schema or null.
 */
function buildLocalBusinessSchema(data) {
  const { business } = data || {};
  return business ? generateLocalBusinessSchema(business) : null;
}

/**
 * Build an AccommodationCollection schema (used by stays type) when a
 * `collection` object is supplied.
 * @param {object} data - The page data.
 * @returns {object|null} A CollectionPage schema or null.
 */
function buildAccommodationCollectionSchema(data) {
  const { collection } = data || {};
  return collection ? generateAccommodationCollectionSchema(collection) : null;
}

/**
 * Build an ItemList schema (used by stays type) when an `itemList` object with
 * an `items` array is supplied in the page data.
 * @param {object} data - The page data.
 * @returns {object|null} An ItemList schema or null.
 */
function buildItemListSchema(data) {
  const { itemList } = data || {};
  if (!itemList) return null;
  const items = Array.isArray(itemList) ? itemList : itemList.items;
  return generateItemListSchema(items || []);
}

/**
 * Build a SpeakableSpecification schema (used by content pages) when
 * `speakableSelectors` are supplied in the page data.
 * @param {object} data - The page data.
 * @returns {object|null} A SpeakableSpecification schema or null.
 */
function buildSpeakableSchema(data) {
  const { speakableSelectors } = data || {};
  return generateSpeakableSchema(speakableSelectors);
}

/**
 * Build schema from generateHomeSchema which returns an array of home-specific
 * schema objects (SearchAction, Navigation, Brand, etc.).
 * @param {object} data - The page data.
 * @returns {object[]} Array of home page schema objects.
 */
function buildHomeSchemas(data) {
  return generateHomeSchema(data);
}

/**
 * Build an ImageGallery schema (used by gallery type) when a `gallery` object
 * is supplied.
 * @param {object} data - The page data.
 * @returns {object|null} An ImageGallery schema or null.
 */
function buildImageGallerySchema(data) {
  const { gallery } = data || {};
  return gallery ? generateImageGallerySchema(gallery) : null;
}

/**
 * Build a VideoObject schema (used by video type) when a `video` object is
 * supplied.
 * @param {object} data - The page data.
 * @returns {object|null} A VideoObject schema or null.
 */
function buildVideoSchema(data) {
  const { video } = data || {};
  return video ? generateVideoSchema(video) : null;
}

/**
 * Build a Service schema (used by service type) when a `service` object is
 * supplied.
 * @param {object} data - The page data.
 * @returns {object|null} A Service schema or null.
 */
function buildServiceSchema(data) {
  const { service } = data || {};
  return service ? generateServiceSchema(service) : null;
}

/**
 * Build an EntityGraph (used by home / any page) when an `entityGraph` object
 * is supplied. Returns an array to be spread into the final graph.
 * @param {object} data - The page data.
 * @returns {object[]} Array of entity graph objects.
 */
function buildEntityGraph(data) {
  const { entityGraph } = data || {};
  return entityGraph ? generateEntityGraph(entityGraph) : [];
}

/**
 * Registry mapping each supported semantic `type` to a function that returns
 * the array of schema.org objects for that page.
 *
 * This is the single place where the `type` -> schema mapping lives. It is
 * deliberately decoupled from any page so the system stays reusable and
 * extensible: adding a new content type only requires adding one entry here.
 *
 * Every branch composes the shared site/page schemas plus type-specific ones,
 * and the result is always a flat array that {@link SchemaInjector} wraps in a
 * single `@graph` (so we NEVER emit multiple JSON-LD scripts).
 *
 * @type {Record<string, (data: object, options: object) => object[]>}
 */
const GENERATORS = {
  guide: (data) =>
    compact([
      ...buildSiteSchemas(),
      ...buildPageSchemas(data),
      buildArticleSchema(data),
      buildFaqSchema(data),
    ]),

  blog: (data) =>
    compact([
      ...buildSiteSchemas(),
      ...buildPageSchemas(data),
      buildArticleSchema(data),
      buildFaqSchema(data),
    ]),

  hotel: (data) =>
    compact([
      ...buildSiteSchemas(),
      ...buildPageSchemas(data),
      buildHotelSchema(data),
      buildFaqSchema(data),
    ]),

  homestay: (data) =>
    compact([
      ...buildSiteSchemas(),
      ...buildPageSchemas(data),
      buildLodgingBusinessSchema(data),
      buildFaqSchema(data),
    ]),

  guesthouse: (data) =>
    compact([
      ...buildSiteSchemas(),
      ...buildPageSchemas(data),
      buildLodgingBusinessSchema(data),
      buildFaqSchema(data),
    ]),

  ashram: (data) =>
    compact([
      ...buildSiteSchemas(),
      ...buildPageSchemas(data),
      buildLodgingBusinessSchema(data),
      buildFaqSchema(data),
    ]),

  dharamshala: (data) =>
    compact([
      ...buildSiteSchemas(),
      ...buildPageSchemas(data),
      buildLodgingBusinessSchema(data),
      buildFaqSchema(data),
    ]),

  localbusiness: (data) =>
    compact([
      ...buildSiteSchemas(),
      ...buildPageSchemas(data),
      buildLocalBusinessSchema(data),
      buildFaqSchema(data),
    ]),

  stays: (data) =>
    compact([
      ...buildSiteSchemas(),
      ...buildPageSchemas(data),
      buildArticleSchema(data),
      buildFaqSchema(data),
      buildHowToSchema(data),
      buildItemListSchema(data),
      buildSpeakableSchema(data),
      buildAccommodationCollectionSchema(data),
    ]),

  temple: (data) =>
    compact([
      ...buildSiteSchemas(),
      ...buildPageSchemas(data),
      buildPlaceSchema(data),
      buildTouristAttractionSchema(data),
      buildItemListSchema(data),
      buildFaqSchema(data),
    ]),

  destination: (data) =>
    compact([
      ...buildSiteSchemas(),
      ...buildPageSchemas(data),
      buildTouristDestinationSchema(data),
      buildPlaceSchema(data),
    ]),

  event: (data) =>
    compact([
      ...buildSiteSchemas(),
      ...buildPageSchemas(data),
      buildEventSchema(data),
      buildPlaceSchema(data),
    ]),

  howto: (data) =>
    compact([
      ...buildSiteSchemas(),
      ...buildPageSchemas(data),
      buildHowToSchema(data),
      buildFaqSchema(data),
    ]),

  collection: (data) =>
    compact([...buildSiteSchemas(), ...buildPageSchemas(data), buildCollectionPageSchema(data)]),

  gallery: (data) =>
    compact([
      ...buildSiteSchemas(),
      ...buildPageSchemas(data),
      buildImageGallerySchema(data),
    ]),

  video: (data) =>
    compact([
      ...buildSiteSchemas(),
      ...buildPageSchemas(data),
      buildVideoSchema(data),
    ]),

  service: (data) =>
    compact([
      ...buildSiteSchemas(),
      ...buildPageSchemas(data),
      buildServiceSchema(data),
    ]),

  search: (data) =>
    compact([...buildSiteSchemas(), ...buildPageSchemas(data)]),

  home: (data) =>
    compact([
      ...buildSiteSchemas(),
      ...buildPageSchemas(data),
      ...buildHomeSchemas(data),
      ...buildEntityGraph(data),
    ]),
};

/**
 * Build the list of schema.org objects for a given content type.
 *
 * @param {string} type - The semantic content type (guide, stay, home, ...).
 * @param {object} data - The source data used to build the schema(s).
 * @param {object} options - Optional configuration (reserved for future use).
 * @returns {object[]} An array of schema.org objects (may be empty).
 */
function buildSchemas(type, data, options) {
  const generator = GENERATORS[type];

  if (typeof generator !== "function") {
    return [];
  }

  return generator(data || {}, options || {});
}

/**
 * SchemaProvider is the heart of the JSON-LD architecture.
 *
 * It is a thin, reusable orchestrator that:
 *   1. Receives a semantic `type`, the page `data`, and optional `options`.
 *   2. Delegates schema generation to the appropriate generator in the
 *      `GENERATORS` registry, producing a single flat array of schema objects.
 *   3. Hands that array to {@link SchemaInjector}, which renders a single
 *      consolidated `<script type="application/ld+json">` tag.
 *
 * It contains NO hardcoded schema and NO page-specific logic, so any future
 * page can simply wrap its content with:
 *
 * ```jsx
 * <SchemaProvider type="guide" data={guide} />
 * ```
 *
 * @param {object} props - Component props.
 * @param {string} props.type - Semantic content type (guide, stay, home,
 *   gallery, blog, temple, search, event, ...).
 * @param {object} [props.data] - Source data used to build the schema(s).
 * @param {object} [props.options] - Optional configuration forwarded to the
 *   underlying generator(s).
 * @returns {JSX.Element} The rendered {@link SchemaInjector}.
 */
const SchemaProvider = React.memo(function SchemaProvider({ type, data, options = {} }) {
  const schemas = buildSchemas(type, data, options);

  return <SchemaInjector schemas={schemas} />;
});

export default SchemaProvider;
