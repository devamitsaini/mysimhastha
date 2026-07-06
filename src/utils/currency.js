// Static, approximate conversion rates against INR.
// These are NOT live exchange rates — there is no FX API wired in.
// Update RATES manually if you want to keep them roughly current,
// or swap convertPrice() to call a live rates API later.

export const CURRENCIES = [
  { code: "INR", symbol: "₹", label: "INR", locale: "en-IN" },
  { code: "USD", symbol: "$", label: "USD", locale: "en-US" },
  { code: "EUR", symbol: "€", label: "EUR", locale: "de-DE" },
];

// 1 INR = X units of currency
const RATES = {
  INR: 1,
  USD: 0.012,
  EUR: 0.011,
};

export const convertPrice = (inrAmount, currencyCode = "INR") => {
  if (!inrAmount && inrAmount !== 0) return null;
  const rate = RATES[currencyCode] || 1;
  return inrAmount * rate;
};

/**
 * Formats an INR amount in the selected currency.
 * Non-INR values are approximate (static rate) and are
 * suffixed with "approx" so nobody mistakes it for a live quote.
 */
export const formatCurrency = (inrAmount, currencyCode = "INR") => {
  if (!inrAmount && inrAmount !== 0) return "—";

  const currency = CURRENCIES.find((c) => c.code === currencyCode) || CURRENCIES[0];
  const converted = convertPrice(inrAmount, currencyCode);

  const formatted = new Intl.NumberFormat(currency.locale, {
    style: "currency",
    currency: currency.code,
    maximumFractionDigits: currencyCode === "INR" ? 0 : 2,
  }).format(converted);

  return currencyCode === "INR" ? formatted : `${formatted} (approx)`;
};
