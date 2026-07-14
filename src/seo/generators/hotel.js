import { generateGeoSchema } from "./geo";
import { generateImageSchema } from "./image";
import { generateContactPointSchema } from "./contactPoint";
import { generateAggregateRatingSchema } from "./aggregateRating";
import { generateOfferSchema } from "./offer";
import { generateReviewSchema } from "./review";
import { SITE_URL } from "../constants/defaults";

/**
 * @typedef {object} StayData
 * @property {string} name - Accommodation name.
 * @property {string} [slug] - URL slug.
 * @property {string} [description] - Description of the accommodation.
 * @property {string[]} [images] - List of image URLs.
 * @property {string} [address] - Street address line.
 * @property {string} [city] - City / locality.
 * @property {string} [state] - State / region.
 * @property {string} [country] - Country name.
 * @property {string} [postalCode] - Postal code.
 * @property {number|string} [latitude] - Latitude coordinate.
 * @property {number|string} [longitude] - Longitude coordinate.
 * @property {string} [phone] - Contact phone number.
 * @property {string} [email] - Contact email address.
 * @property {string} [website] - Official website or booking URL.
 * @property {string} [checkIn] - Check-in time (e.g. "14:00").
 * @property {string} [checkOut] - Check-out time (e.g. "11:00").
 * @property {number|string} [priceFrom] - Starting price.
 * @property {number|string} [priceTo] - Maximum price.
 * @property {string} [currency] - ISO currency code (defaults to "INR").
 * @property {string[]} [amenities] - List of amenities (e.g. ["Free WiFi", "Parking"]).
 * @property {number|string} [rating] - Average rating (0–5).
 * @property {number|string} [reviewCount] - Number of reviews.
 * @property {Array<{author?: string, rating?: number, review?: string, datePublished?: string, url?: string}>} [reviews] - List of individual reviews.
 * @property {object} [policies] - Custom policies object (reserved for future use).
 */

/**
 * Generates a schema.org `Hotel` object.
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag. Automatically embeds:
 * - PostalAddress
 * - GeoCoordinates
 * - ImageObject
 * - AggregateRating
 * - Offer
 * - Review
 * - ContactPoint
 * - amenityFeature
 * - checkinTime / checkoutTime
 *
 * Supports Google Rich Results, Google Hotel Results, and AI search engines.
 *
 * @param {StayData} [stay={}] - The accommodation data.
 * @returns {object|null} A `Hotel` schema object, or `null` if the required
 *   `name` is missing.
 * @module seo/generators/hotel
 */
export function generateHotelSchema(stay = {}) {
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
      policies,
    } = stay || {};

    if (!name || typeof name !== "string") {
      return null;
    }

    const schema = {
      "@type": "Hotel",
      name,
    };

    if (description) {
      schema.description = description;
    }

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

    // Geo
    const geo = generateGeoSchema({ latitude, longitude });
    if (geo) schema.geo = geo;

    // Images
    if (Array.isArray(images) && images.length > 0) {
      schema.image = images
        .map((url) => generateImageSchema({ url, title: name, caption: name }))
        .filter(Boolean);
      if (schema.image.length === 0) delete schema.image;
    }

    // AggregateRating
    const aggRating = generateAggregateRatingSchema({ rating, reviewCount });
    if (aggRating) schema.aggregateRating = aggRating;

    // Offer (price)
    if (priceFrom) {
      const offer = generateOfferSchema({
        price: priceTo || priceFrom,
        currency,
        availability: "InStock",
        url: schema.url,
      });
      if (offer) schema.offers = offer;
    }

    // Reviews
    if (Array.isArray(reviews) && reviews.length > 0) {
      const parsedReviews = reviews
        .map((r) => generateReviewSchema(r))
        .filter(Boolean);
      if (parsedReviews.length > 0) schema.review = parsedReviews;
    }

    // ContactPoint
    const cp = generateContactPointSchema({
      telephone: phone,
      email,
      url: website || schema.url,
      contactType: "reservations",
      availableLanguage: ["en", "hi"],
      areaServed: "IN",
    });
    if (cp) schema.contactPoint = cp;

    // amenityFeature
    if (Array.isArray(amenities) && amenities.length > 0) {
      schema.amenityFeature = amenities.map((a) => ({
        "@type": "LocationFeatureSpecification",
        name: a,
        value: true,
      }));
    }

    // Check-in / Check-out
    if (checkIn) schema.checkinTime = checkIn;
    if (checkOut) schema.checkoutTime = checkOut;

    // Policies (reserved for future use)
    if (policies && typeof policies === "object") {
      schema.petsAllowed = policies.petsAllowed || undefined;
    }

    return schema;
  } catch (error) {
    return null;
  }
}