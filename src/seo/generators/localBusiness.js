import { generateGeoSchema } from "./geo";
import { generateImageSchema } from "./image";
import { generateContactPointSchema } from "./contactPoint";
import { generateAggregateRatingSchema } from "./aggregateRating";
import { generateOfferSchema } from "./offer";
import { generateReviewSchema } from "./review";

/**
 * @typedef {object} LocalBusinessData
 * @property {string} name - Business name.
 * @property {string} [description] - Business description.
 * @property {string[]} [images] - List of image URLs.
 * @property {string} [address] - Street address.
 * @property {string} [city] - City.
 * @property {string} [state] - State.
 * @property {string} [country] - Country.
 * @property {string} [postalCode] - Postal code.
 * @property {number|string} [latitude] - Latitude.
 * @property {number|string} [longitude] - Longitude.
 * @property {string} [phone] - Phone number.
 * @property {string} [email] - Email address.
 * @property {string} [website] - Website URL.
 * @property {string} [openingHours] - Opening hours string (e.g. "Mo-Su 09:00-18:00").
 * @property {number|string} [rating] - Average rating (0–5).
 * @property {number|string} [reviewCount] - Number of reviews.
 * @property {Array} [reviews] - Individual reviews.
 * @property {number|string} [priceFrom] - Starting price.
 * @property {string} [currency] - Currency code.
 * @property {string} [subtype] - Schema.org type override (defaults to "LocalBusiness").
 */

/**
 * Generates a schema.org `LocalBusiness` object.
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag. Automatically embeds a PostalAddress,
 * GeoCoordinates, ContactPoint, AggregateRating, Offer, Reviews, and
 * openingHoursSpecification.
 *
 * @param {LocalBusinessData} [data={}] - The local business data.
 * @returns {object|null} A `LocalBusiness` schema object, or `null` if the
 *   required `name` is missing.
 * @module seo/generators/localBusiness
 */
export function generateLocalBusinessSchema(data = {}) {
  try {
    const {
      name,
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
      openingHours,
      rating,
      reviewCount,
      reviews,
      priceFrom,
      currency = "INR",
      subtype = "LocalBusiness",
    } = data || {};

    if (!name || typeof name !== "string") {
      return null;
    }

    const schema = {
      "@type": subtype,
      name,
    };

    if (description) schema.description = description;
    if (website) schema.url = website;

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

    if (Array.isArray(reviews) && reviews.length > 0) {
      const parsedReviews = reviews
        .map((r) => generateReviewSchema(r))
        .filter(Boolean);
      if (parsedReviews.length > 0) schema.review = parsedReviews;
    }

    if (priceFrom) {
      const offer = generateOfferSchema({
        price: priceFrom,
        currency,
        availability: "InStock",
        url: website,
      });
      if (offer) schema.offers = offer;
    }

    const cp = generateContactPointSchema({
      telephone: phone,
      email,
      url: website,
      contactType: "customer support",
      availableLanguage: ["en", "hi"],
      areaServed: "IN",
    });
    if (cp) schema.contactPoint = cp;

    // Opening hours
    if (openingHours && typeof openingHours === "string") {
      schema.openingHoursSpecification = [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: openingHours,
          closes: openingHours,
        },
      ];
    }

    return schema;
  } catch (error) {
    return null;
  }
}