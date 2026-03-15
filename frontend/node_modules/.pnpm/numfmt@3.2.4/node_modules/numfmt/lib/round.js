/**
 * Return a number rounded to the specified amount of places. This is the
 * rounding function used internally by the formatter (symmetric arithmetic
 * rounding).
 *
 * @param {number} number - The number to round.
 * @param {number} [places=0] - The number of decimals to round to.
 * @returns {number} A rounded number.
 */
export function round (number, places = 0) {
  if (typeof number !== 'number') {
    return number;
  }
  if (number < 0) {
    return -round(-number, places);
  }
  if (places) {
    const p = 10 ** (places) || 1;
    return round(number * p, 0) / p;
  }
  return Math.round(number);
}
