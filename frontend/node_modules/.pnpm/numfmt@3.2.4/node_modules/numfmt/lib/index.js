import {
  TOKEN_GENERAL, TOKEN_HASH, TOKEN_ZERO, TOKEN_QMARK, TOKEN_SLASH, TOKEN_GROUP, TOKEN_SCALE,
  TOKEN_COMMA, TOKEN_BREAK, TOKEN_TEXT, TOKEN_PLUS, TOKEN_MINUS, TOKEN_POINT, TOKEN_SPACE,
  TOKEN_PERCENT, TOKEN_DIGIT, TOKEN_CALENDAR, TOKEN_ERROR, TOKEN_DATETIME, TOKEN_DURATION,
  TOKEN_CONDITION, TOKEN_DBNUM, TOKEN_NATNUM, TOKEN_LOCALE, TOKEN_COLOR, TOKEN_MODIFIER,
  TOKEN_AMPM, TOKEN_ESCAPED, TOKEN_STRING, TOKEN_SKIP, TOKEN_EXP, TOKEN_FILL, TOKEN_PAREN,
  TOKEN_CHAR
} from './constants.js';

export {
  getLocale,
  parseLocale,
  addLocale
} from './locale.js';

import { defaultOptions } from './options.js';

export { round } from './round.js';
export { dec2frac } from './dec2frac.js';

import { dateToSerial as handleDates } from './serialDate.js';
export { dateToSerial, dateFromSerial } from './serialDate.js';

export {
  parseNumber,
  parseDate,
  parseTime,
  parseBool,
  parseValue
} from './parseValue.js';

import { formatColor as fmtColor, formatValue as fmtValue } from './formatNumber.js';
import { info, dateInfo, isDate, isPercent, isText } from './formatInfo.js';
import { parsePattern } from './parsePattern.js';

export { tokenize } from './tokenize.js';

const _parseDataCache = Object.create({});
function prepareFormatterData (pattern, shouldThrow = false) {
  if (!pattern) { pattern = 'General'; }

  let parseData = _parseDataCache[pattern];
  if (!parseData) {
    try {
      parseData = parsePattern(pattern);
      _parseDataCache[pattern] = parseData;
    }
    catch (err) {
      // if the options say to throw errors, then do so
      if (shouldThrow) {
        throw err;
      }
      // else we set the parsedata to error
      const errPart = {
        tokens: [ { type: 'error' } ],
        error: err.message
      };
      parseData = {
        pattern: pattern,
        partitions: [ errPart, errPart, errPart, errPart ],
        error: err.message,
        locale: null
      };
    }
  }
  return parseData;
}

/**
 * Formats a value as a string and returns the result.
 *
 * - Dates are normalized to spreadsheet style serial dates and then formatted.
 * - Booleans are emitted as uppercase "TRUE" or "FALSE".
 * - Null and Undefined will return an empty string "".
 * - Any non number values will be stringified and passed through the text section of the format pattern.
 * - NaNs and infinites will use the corresponding strings from the active locale.
 *
 * @param {string} pattern - A format pattern in the ECMA-376 number format.
 * @param {*} value - The value to format.
 * @param {object} [options={}]  Options
 * @param {string} [options.locale=""]
 *    A BCP 47 string tag. Locale default is english with a `\u00a0`
 *    grouping symbol (see [addLocale](#addLocale))
 * @param {string} [options.overflow="######"]
 *    The string emitted when a formatter fails to format a date that is out
 *    of bounds.
 * @param {string} [options.invalid="######"]
 *    The string emitted when no-throw mode fails to parse a pattern.
 * @param {boolean} [options.throws=true]
 *    Should the formatter throw an error if a provided pattern is invalid.
 *    If false, a formatter will be constructed which instead outputs an error
 *    string (see _invalid_ in this table).
 * @param {boolean} [options.nbsp=false]
 *    By default the output will use a regular space, but in many cases you
 *    may desire a non-breaking-space instead.
 * @param {boolean} [options.leap1900=true]
 *    Simulate the Lotus 1-2-3 [1900 leap year bug](https://docs.microsoft.com/en-us/office/troubleshoot/excel/wrongly-assumes-1900-is-leap-year).
 *    It is a requirement in the Ecma OOXML specification so it is on by default.
 * @param {boolean} [options.dateErrorThrows=false]
 *    Should the formatter throw an error when trying to format a date that is
 *    out of bounds?
 * @param {boolean} [options.dateErrorNumber=true]
 *    Should the formatter switch to a General number format when trying to
 *    format a date that is out of bounds?
 * @param {boolean} [options.bigintErrorNumber=false]
 *    Should the formatter switch to a plain string number format when trying to
 *    format a bigint that is out of bounds?
 * @param {boolean} [options.dateSpanLarge=true]
 *    Extends the allowed range of dates from Excel bounds (1900–9999) to
 *    Google Sheet bounds (0–99999).
 * @param {boolean} [options.ignoreTimezone=false]
 *    Normally when date objects are used with the formatter, time zone is taken
 *    into account. This makes the formatter ignore the timezone offset.
 * @param {boolean} [options.skipChar='']
 *    When the formatter encounters `_` it normally emits a single space instead
 *    of the `_` and the next character (like Excel TEXT function does). Setting
 *    this to a character will make the formatter emit that followed by the next
 *    one.
 * @param {boolean} [options.fillChar='']
 *    When the formatter encounters `*` it normally emits nothing instead of the
 *    `*` and the next character (like Excel TEXT function does). Setting this
 *    to a character will make the formatter emit that followed by the next one.
 * @returns {string} A formatted value
 */
export function format (pattern, value, options = {}) {
  const opts = Object.assign({}, defaultOptions, options);
  const data = prepareFormatterData(pattern, opts.throws);
  const val = handleDates(value, opts) ?? value;
  return fmtValue(val, data, opts);
}

/**
 * Find the color appropriate to a value as dictated by a format pattern.
 * 
 * If the pattern defines colors, this function will emit the color appropriate
 * to the value. If no colors were specified this function returns `undefined`.
 * 
 * ```js
 * const color = formatColor("[green]#,##0;[red]-#,##0", -10);
 * console.log(color); // "red"
 * const color = formatColor("[green]#,##0;-#,##0", -10);
 * console.log(color); // null
 * ```
 *
 * @param {string} pattern - A format pattern in the ECMA-376 number format.
 * @param {*} value - The value to format.
 * @param {object} [options={}]  Options
 * @param {boolean} [options.throws=true]
 *    Should the formatter throw an error if a provided pattern is invalid.
 *    If false, a formatter will be constructed which instead outputs an error
 *    string (see _invalid_ in this table).
 * @param {boolean} [options.ignoreTimezone=false]
 *    Normally when date objects are used with the formatter, time zone is taken
 *    into account. This makes the formatter ignore the timezone offset.
 * @param {boolean} [options.indexColors=true]
 *    When indexed color modifiers are used (`[Color 1]`) the formatter will
 *    convert the index into the corresponding hex color of the default palette.
 *    When this option is set to false, the number will instead by emitted
 *    allowing you to index against a custom palette.
 * @returns {string|number|null}
 *    A string color value as described by the pattern or a number if the
 *    indexColors option has been set to false.
 */
export function formatColor (pattern, value, options) {
  const opts = Object.assign({}, defaultOptions, options);
  const data = prepareFormatterData(pattern, opts.throws);
  const val = handleDates(value, opts) ?? value;
  return fmtColor(val, data, opts);
}

// FIXME: what is a a section?...
/**
 * Determine if a given format pattern is a date pattern.
 *
 * The pattern is considered a date pattern if any of its sections contain a
 * date symbol (such as `Y` or `H`). Each section is restricted to be
 * _either_ a number or date format.
 *
 * @param {string} pattern - A format pattern in the ECMA-376 number format.
 * @returns {boolean} True if the specified pattern is date pattern, False otherwise.
 */
export function isDateFormat (pattern) {
  const data = prepareFormatterData(pattern, false);
  return isDate(data.partitions);
}

/**
 * Determine if a given format pattern is a percentage pattern.
 * 
 * The pattern is considered a percentage pattern if any of its sections
 * contains an unescaped percentage symbol.
 *
 * @param {string} pattern - A format pattern in the ECMA-376 number format.
 * @returns {boolean} True if the specified pattern is date pattern, False otherwise.
 */
export function isPercentFormat (pattern) {
  const data = prepareFormatterData(pattern, false);
  return isPercent(data.partitions);
}

/**
 * Determine if a given format pattern is a text only pattern.
 * 
 * The pattern is considered text only if its definition is composed of a single
 * section that includes that text symbol (`@`).
 * 
 * For example `@` or `@" USD"` are text patterns but `#;@` is not.
 *
 * @param {string} pattern - A format pattern in the ECMA-376 number format.
 * @returns {boolean} True if the specified pattern is date pattern, False otherwise.
 */
export function isTextFormat (pattern) {
  const data = prepareFormatterData(pattern, false);
  return isText(data.partitions);
}

/**
 * Determine if a given format pattern is valid.
 *
 * @param {string} pattern - A format pattern in the ECMA-376 number format.
 * @returns {boolean} True if the specified pattern is valid, False otherwise.
 */
export function isValidFormat (pattern) {
  try {
    prepareFormatterData(pattern, true);
    return true;
  }
  catch (err) {
    return false;
  }
}

/**
 * Returns an object detailing the properties and internals of a format parsed
 * format pattern.
 *
 * @param {string} pattern - A format pattern in the ECMA-376 number format.
 * @param {object} [options={}]  Options
 * @param {string} [options.currency]
 *   Limit the patterns identified as currency to those that use the give string.
 *   If nothing is provided, patterns will be tagged as currency if one of the
 *   following currency symbols is used: ¤$£¥֏؋৳฿៛₡₦₩₪₫€₭₮₱₲₴₸₹₺₼₽₾₿
 * @returns {FormatInfo} An object of format properties.
 */
export function getFormatInfo (pattern, options = {}) {
  const data = prepareFormatterData(pattern, false);
  if (!data.info) {
    data.info = info(data.partitions, options?.currency);
  }
  return data.info;
}

/**
 * Gets information about date codes use in a format string.
 *
 * @param {string} pattern - A format pattern in the ECMA-376 number format.
 * @returns {FormatDateInfo} An object of format date properties.
 */
export function getFormatDateInfo (pattern) {
  const data = prepareFormatterData(pattern, false);
  if (!data.dateInfo) {
    data.dateInfo = dateInfo(data.partitions);
  }
  return data.dateInfo;
}

/**
 * A dictionary of the types used to identify token variants.
 *
 * @readonly
 * @constant {Object<string>} tokenTypes
 * @property {string} AMPM - AM/PM operator (`AM/PM`, `A/P`)
 * @property {string} BREAK - Semicolon operator indicating a break between format sections (`;`)
 * @property {string} CALENDAR - Calendar modifier (`B2`)
 * @property {string} CHAR - Single non-operator character (`m`)
 * @property {string} COLOR - Color modifier (`[Black]`, `[color 5]`)
 * @property {string} COMMA - Plain non-operator comma (`,`)
 * @property {string} CONDITION - Condition modifier for a section (`[>=10]`)
 * @property {string} DATETIME - Date-time operator (`mmmm`, `YY`)
 * @property {string} DBNUM - Number display modifier (`[DBNum23]`)
 * @property {string} DIGIT - A digit between 1 and 9 (`3`)
 * @property {string} DURATION - Time duration (`[ss]`)
 * @property {string} ERROR - Unidentifiable or illegal character (`Ň`)
 * @property {string} ESCAPED - Escaped character (`\E`)
 * @property {string} EXP - Exponent operator (`E+`)
 * @property {string} FILL - Fill with char operator and operand (`*_`)
 * @property {string} GENERAL - General format operator (`General`)
 * @property {string} GROUP - Number grouping operator (`,`)
 * @property {string} HASH - Hash operator (digit if available) (`#`)
 * @property {string} LOCALE - Locale modifier (`[$-1E020404]`)
 * @property {string} MINUS - Minus sign (`-`)
 * @property {string} MODIFIER - An unidentified modifier (`[Schwarz]`)
 * @property {string} NATNUM - Number display modifier (`[NatNum3]`)
 * @property {string} PAREN - Parenthesis character (`)`)
 * @property {string} PERCENT - Percent operator (`%`)
 * @property {string} PLUS - Plus sign (`+`)
 * @property {string} POINT - Decimal point operator (`.`)
 * @property {string} QMARK - Question mark operator (digit or space if not available) (`?`)
 * @property {string} SCALE - Scaling operator (`,`)
 * @property {string} SKIP - Skip with char operator and operand (`*_`)
 * @property {string} SLASH - Slash operator (`/`)
 * @property {string} SPACE - Space (` `)
 * @property {string} STRING - Quoted string (`"days"`)
 * @property {string} TEXT - Text output operator (`@`)
 * @property {string} ZERO - Zero operator (digit or zero if not available) (`0`)
 * @see tokenize
 */
export const tokenTypes = Object.freeze({
  AMPM: TOKEN_AMPM,
  BREAK: TOKEN_BREAK,
  CALENDAR: TOKEN_CALENDAR,
  CHAR: TOKEN_CHAR,
  COLOR: TOKEN_COLOR,
  COMMA: TOKEN_COMMA,
  CONDITION: TOKEN_CONDITION,
  DATETIME: TOKEN_DATETIME,
  DBNUM: TOKEN_DBNUM,
  DIGIT: TOKEN_DIGIT,
  DURATION: TOKEN_DURATION,
  ERROR: TOKEN_ERROR,
  ESCAPED: TOKEN_ESCAPED,
  EXP: TOKEN_EXP,
  FILL: TOKEN_FILL,
  GENERAL: TOKEN_GENERAL,
  GROUP: TOKEN_GROUP,
  HASH: TOKEN_HASH,
  LOCALE: TOKEN_LOCALE,
  MINUS: TOKEN_MINUS,
  MODIFIER: TOKEN_MODIFIER,
  NATNUM: TOKEN_NATNUM,
  PAREN: TOKEN_PAREN,
  PERCENT: TOKEN_PERCENT,
  PLUS: TOKEN_PLUS,
  POINT: TOKEN_POINT,
  QMARK: TOKEN_QMARK,
  SCALE: TOKEN_SCALE,
  SKIP: TOKEN_SKIP,
  SLASH: TOKEN_SLASH,
  SPACE: TOKEN_SPACE,
  STRING: TOKEN_STRING,
  TEXT: TOKEN_TEXT,
  ZERO: TOKEN_ZERO
});
