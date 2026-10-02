/**
 * Sale settings. While the current time is before `endsAt`, the site shows the
 * discount banner, the countdown and the sale price. After that it switches
 * back to `regularPrice` automatically — no redeploy needed.
 *
 * Make sure the checkout (Shopify) charges the same price shown here.
 */
export const SALE = {
  label: "October Sale",
  price: 32.99,
  regularPrice: 52.99,
  // End of October 5th, US Eastern time (11:59:59 PM EDT).
  endsAt: new Date("2026-10-05T23:59:59-04:00"),
};

export const SALE_SAVINGS = Math.round((SALE.regularPrice - SALE.price) * 100) / 100;
export const SALE_PERCENT_OFF = Math.round((SALE_SAVINGS / SALE.regularPrice) * 100);

export const formatPrice = (value: number) => `$${value.toFixed(2)}`;
