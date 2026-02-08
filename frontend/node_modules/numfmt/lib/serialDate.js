import { toYMD } from './toYMD.js';
const floor = Math.floor;
const DAYSIZE = 86400;

/**
 * Convert a native JavaScript Date, or array to an spreadsheet serial date.
 *
 * Returns a serial date number if input was a Date object or an array of
 * numbers, a null.
 *
 * ```js
 * // input as Date
 * dateToSerial(new Date(1978, 5, 17)); // 28627
 * // input as [ Y, M, D, h, m, s ]
 * dateToSerial([ 1978, 5, 17 ]); // 28627
 * // other input
 * dateToSerial("something else"); // null
 * ````
 *
 * @param {Date | Array<number>} date The date
 * @param {object} [options={}]  Options
 * @param {boolean} [options.ignoreTimezone=false]
 *   Normally time zone will be taken into account. This makes the conversion to
 *   serial date ignore the timezone offset.
 * @returns {number | null} The date as a spreadsheet serial date, or null.
 */
export function dateToSerial (date, options) {
  let ts = null;
  if (Array.isArray(date)) {
    const [ y, m, d, hh, mm, ss ] = date;
    ts = Date.UTC(y, m == null ? 0 : m - 1, d ?? 1, hh || 0, mm || 0, ss || 0);
  }
  // dates are changed to serial
  else if (date instanceof Date) {
    ts = date * 1;
    if (!options || !options.ignoreTimezone) {
      // Many timezones are offset in seconds but getTimezoneOffset() returns
      // time "rounded" to minutes so it is basically usable. 😿
      const dt = new Date();
      dt.setUTCFullYear(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
      );
      dt.setUTCHours(
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
      );
      // timestamp
      ts = dt * 1;
    }
  }
  if (ts != null && isFinite(ts)) {
    const d = (ts / 864e5);
    return d - (d <= -25509 ? -25568 : -25569);
  }
  return null;
}

/**
 * Convert a spreadsheet serial date to an array of date parts.
 * Accurate to a second.
 *
 * ```js
 * // output as [ Y, M, D, h, m, s ]
 * dateFromSerial(28627); // [ 1978, 5, 17, 0, 0, 0 ]
 * ````
 *
 * @param {number} serialDate The date
 * @param {object} [options={}] The options
 * @param {boolean} [options.leap1900=true]
 *   Simulate the Lotus 1-2-3 [1900 leap year bug](https://docs.microsoft.com/en-us/office/troubleshoot/excel/wrongly-assumes-1900-is-leap-year).
 * @returns {Array<number>} returns an array of date parts
 */
export function dateFromSerial (serialDate, options) {
  let date = (serialDate | 0);
  const t = DAYSIZE * (serialDate - date);
  let time = floor(t); // in seconds
  // date "epsilon" correction
  if ((t - time) > 0.9999) {
    time += 1;
    if (time === DAYSIZE) {
      time = 0;
      date += 1;
    }
  }
  // serial date/time to gregorian calendar
  const x = (time < 0) ? DAYSIZE + time : time;
  const [ y, m, d ] = toYMD(serialDate, 0, options && options.leap1900);
  const hh = floor((x / 60) / 60) % 60;
  const mm = floor(x / 60) % 60;
  const ss = floor(x) % 60;
  // return the parts
  return [ y, m, d, hh, mm, ss ];
}
