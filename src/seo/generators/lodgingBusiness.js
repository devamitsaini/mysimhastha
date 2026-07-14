import { generateGeoSchema } from "./geo";
import { generateImageSchema } from "./image";
import { generateContactPointSchema } from "./contactPoint";
import { generateAggregateRatingSchema } from "./aggregateRating";
import { generateOfferSchema } from "./offer";
import { generateReviewSchema } from "./review";
import { SITE_URL } from "../constants/defaults";

/**
 * Generates a schema.org `LodgingBusiness` object.
 *
 * Used for Guest House, Homestay, Ashram, Dharamshala, Hostel, Camping,
 * Rental Room, Apartment and other non-hotel accommodation types (the `@type`
 * field is customizable via the `subtype` option).
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag.
 *
 * @param {object} [stay={}] - Accommodation data. Same shape as the Hotel
 *   generator's `StayData` (see `hotel.js` for full typedef).
 * @param {string} [stay.subtype] - Schema.org type override (defaults to
 *   "LodgingBusiness"). Can be set to any subtype such as "GuestHouse",
 *   "Hostel", "Motel", "Resort" etc.
 * @returns {object|null} A `LodgingBusiness` schema object, or `null` if the
 *   required `name` is missing.
 * @module seo/generators/lodgingBusiness
 */
export function generateLodgingBusinessSchema(stay = {}) {
  try {
    const {
      name,
      slug,
      description,
      images,
      address,
      city,
      state,
      country,
      postalCode,
      latitude,
      longitude,
      phone,
      email,
      website,
      checkIn,
      checkOut,
      priceFrom,
      priceTo,
      currency = "INR",
      amenities,
      rating,
      reviewCount,
      reviews,
      subtype = "LodgingBusiness",
      policies,
    } = stay || {};

    if (!name || typeof name !== "string") {
      return null;
    }

    const schema = {
      "@type": subtype,
      name,
    };

    if (description) schema.description = description;

    if (slug || website) {
      schema.url = website || `${SITE_URL}/stay/${slug}`;
    }

    // Address
    const hasAddr = address || city || state || country || postalCode;
    if (hasAddr) {
      schema.address = { "@type": "PostalAddress" };
      if (address) schema.address.streetAddress = address;
      if (city) schema.address.addressLocality = city;
      if (state) schema.address.addressRegion = state;
      if (country) schema.address.addressCountry = country;
      if (postalCode) schema.address.postalCode = postalCode;
    }

    const geo = generateGeoSchema({ latitude, longitude });
    if (geo) schema.geo = geo;

    if (Array.isArray(images) && images.length > 0) {
      schema.image = images
        .map((url) => generateImageSchema({ url, title: name, caption: name }))
        .filter(Boolean);
      if (schema.image.length === 0) delete schema.image;
    }

    const aggRating = generateAggregateRatingSchema({ rating, reviewCount });
    if (aggRating) schema.aggregateRating = aggRating;

    if (priceFrom) {
      const offer = generateOfferSchema({
        price: priceTo || priceFrom,
        currency,
        availability: "InStock",
        url: schema.url,
      });
      if (offer) schema.offers = offer;
    }

    if (Array.isArray(reviews) && reviews.length > 0) {
      const parsedReviews = reviews
        .map((r) => generateReviewSchema(r))
        .filter(Boolean);
      if (parsedReviews.length > 0) schema.review = parsedReviews;
    }

    const cp = generateContactPointSchema({
      telephone: phone,
      email,
      url: website || schema.url,
      contactType: "reservations",
      availableLanguage: ["en", "hi"],
      areaServed: "IN",
    });
    if (cp) schema.contactPoint = cp;

    if (Array.isArray(amenities) && amenities.length > 0) {
      schema.amenityFeature = amenities.map((a) => ({
        "@type": "LocationFeatureSpecification",
        name: a,
        value: true,
      }));
    }

    if (checkIn) schema.checkinTime = checkIn;
    if (checkOut) schema.checkoutTime = checkOut;

    if (policies && typeof policies === "object") {
      schema.petsAllowed = policies.petsAllowed || undefined;
    }

    return schema;
  } catch (error) {
    return null;
  }
}