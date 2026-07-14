/**
 * @typedef {object} OfferData
 * @property {number|string} [price] - The price amount.
 * @property {string} [currency] - ISO currency code (e.g. "INR").
 * @property {string} [availability] - Availability status (e.g.
 *   "InStock", "LimitedAvailability"). Defaults to "InStock".
 * @property {string} [url] - Booking / offer URL.
 * @property {string} [validFrom] - ISO date when the offer becomes valid.
 * @property {string} [name] - Name of the offer (e.g. "Standard Room").
 * @property {string} [description] - Description of the offer.
 * @property {string} [category] - Offer category (e.g. "Room").
 */

/**
 * Generates a schema.org `Offer` object.
 *
 * Returns a plain JavaScript object only — never renders JSX, never uses
 * Helmet, and never emits a `<script>` tag. This is a reusable building block
 * consumed by Hotel / LodgingBusiness / LocalBusiness schemas.
 *
 * @param {OfferData} [data={}] - The offer data.
 * @returns {object|null} An `Offer` schema object, or `null` if `price` is not
 *   a positive finite number.
 * @module seo/generators/offer
 */
export function generateOfferSchema(data = {}) {
  try {
    const {
      price,
      currency = "INR",
      availability = "InStock",
      url,
      validFrom,
      name,
      description,
      category,
    } = data || {};

    const priceValue = Number(price);

    if (!Number.isFinite(priceValue) || priceValue < 0) {
      return null;
    }

    const schema = {
      "@type": "Offer",
      price: priceValue,
      priceCurrency: currency,
      availability: `https://schema.org/${availability}`,
    };

    if (url) schema.url = url;
    if (validFrom) schema.validFrom = validFrom;
    if (name) schema.name = name;
    if (description) schema.description = description;
    if (category) schema.category = category;

    return schema;
  } catch (error) {
    return null;
  }
}