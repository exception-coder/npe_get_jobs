/* eslint-disable array-element-newline */
import { currencySymbols, reCurrencySymbols } from './constants.js';
import { defaultLocale, getLocale } from './locale.js';

/**
 * @typedef {object} ParseData
 * @property {number | boolean} v - the value
 * @property {string} [z] - number format pattern
 */

/*
This is a list of the allowed date formats. The test file contains
the full list of permuations and the resulting values and formats.

Legend:
  "-" - Date separator (any of "/" | "-" | " " | "."⁽¹⁾ | ", "⁽²⁾)
  " " - Whitespace
  "j" - Day without leading zero (1-31)
  "d" - Day with leading zero (00-31)
  "D" - Abbreviated day name ("Sun"-"Sat")
  "l" - Full day name ("Sunday"-"Saturday")
  "n" - Month without leading zero (1-12)
  "m" - Month with leading zero (01-12)
  "F" - Full month name ("January"-"December")
  "M" - Abbreviated month name ("Jan"-"Dec")
  "y" - Year without century (00-99)
  "Y" - Year of our lord (1900-9999)
  "x" - Time of day (all formats: "10 PM", "10:11:12", ...)
  "!" - Only use in "date-first" locales: 4.2.2000 = 4 feb.
  "?" - Only use in "month-first" locales: 2.4.2000 = 4 feb.

¹ Only considered valid if there are three or more sections to the date.
² Comma is only allowed if followed by a space.

Time is appended to each of these as they are inserted into the
collection of valid dates below.
*/
const okDateFormats = [
  // day-month-year
  '!d-m-y', '!d-m-Y', '!j-m-y', '!j-m-Y',
  '!d-n-y', '!d-n-Y', '!j-n-y', '!j-n-Y',
  // month-day-year
  '?m-d-y', '?m-d-Y', '?m-j-y', '?m-j-Y',
  '?n-d-y', '?n-d-Y', '?n-j-y', '?n-j-Y',
  // unab
  'd-M-y', 'd-M-Y', 'j-M-y', 'j-M-Y',
  'M-d-y', 'M-d-Y', 'M-j-y', 'M-j-Y',
  'd-F-y', 'd-F-Y', 'F-d-y', 'F-d-Y',
  'F-j-y', 'F-j-Y', 'j-F-y', 'j-F-Y',
  'y-F-d', 'y-F-j', 'y-M-d', 'y-M-j',
  'Y-F-d', 'Y-F-j', 'Y-M-d', 'Y-m-d',
  'Y-M-j', 'Y-m-j', 'Y-n-d', 'Y-n-j',
  'j-F', // 2-April
  'j-M', // 2-Apr
  'd-F', // 02-April
  'd-M', // 02-Apr
  'n-d', // 4-02
  'n-j', // 4-2
  'n-Y', // 4-1908
  'm-d', // 04-02
  'm-j', // 04-2
  'm-Y', // 04-1908
  'M-Y', // Apr-1908
  'M-y', // Apr-08
  'F-y', // April-08
  'F-Y', // April-1908
  'Y-M', // 1908-Apr
  'Y-n', // 1908-4
  'Y-m', // 1908-04
  'Y-F', // 1908-April
  'Y-M'  // 1908-Apr
];

// letter to excel
const tx0 = { j: 'd', d: 'd', D: 'ddd', l: 'dddd', n: 'm', m: 'm', M: 'mmm', F: 'mmmm', y: 'yy', Y: 'yyyy' };
const tx00 = { j: 'dd', d: 'dd', D: 'ddd', l: 'dddd', n: 'mm', m: 'mm', M: 'mmm', F: 'mmmm', y: 'yy', Y: 'yyyy' };

// date formats are stored as a token-tree in a trie
// for minimal looping and branching while parsing
const dateTrieDM = {};
const dateTrieMD = {};
function packDate (f, node, allowType = 1) {
  if (f) {
    const char = f[0];
    const next = f.slice(1);
    if (char === '!') {
      packDate(next, node, 4);
    }
    else if (char === '?') {
      packDate(next, node, 2);
    }
    else {
      node[char] = node[char] || {};
      packDate(next, node[char], allowType);
    }
  }
  else {
    node.$ = allowType;
  }
}
function addFormatToTrie (fmt, trie) {
  // add date to token tree
  packDate(fmt, trie);
  // add a variant of the date with time suffixed
  // Excel allows time first, but Sheets and GRID do not
  packDate(fmt + ' x', trie);
  // add a variant of the date with weekdays pre-/suffixed
  packDate(fmt + ' l', trie);
  packDate(fmt + ' l x', trie);
  packDate('l ' + fmt, trie);
  packDate('l ' + fmt + ' x', trie);
  packDate(fmt + ' D', trie);
  packDate(fmt + ' D x', trie);
  packDate('D ' + fmt, trie);
  packDate('D ' + fmt + ' x', trie);
}
okDateFormats.forEach(fmt => {
  (fmt[0] !== '?') && addFormatToTrie(fmt, dateTrieDM);
  (fmt[0] !== '!') && addFormatToTrie(fmt, dateTrieMD);
});

const currentYear = new Date().getUTCFullYear();

const PT = '.';
const CM = ',';
const SP = ' ';
const NS = ' ';
const NN = ' ';
const AP = "'";
const AG = '٬';
const dec2group = {
  '.': [ CM, NS, NN, AP, AG ],
  ',': [ PT, NS, NN, AP, AG ],
  '٫': [ PT, NS, NN, AP, AG ]
};
const isDigit = d => d && d.length === 1 && d >= '0' && d <= '9';

/**
 * Parse a numeric string input and return its value and format. If the input
 * was not recognized or valid, the function returns a `null`, for valid input
 * it returns an object with two properties:
 * 
 * * `v`: the parsed value.
 * * `z`: the number format of the input (if applicable).
 * 
 * @see parseValue
 * @param {string} value The number to parse
 * @param {object} [options={}]  Options
 * @param {string} [options.locale=""]
 *    A BCP 47 string tag. Locale default is english with a `\u00a0`
 *    grouping symbol (see [addLocale](#addLocale))
 * @returns {ParseData | null} An object of the parsed value and a corresponding format string
 */
export function parseNumber (value, options = {}) {
  const l10n = getLocale(options.locale || '') || defaultLocale;
  // we base everything on the decimal separator
  const dec = l10n.decimal;
  // base allowed grouping chars on decimal
  const grp = [ ...(dec2group[dec] || [ AP, AG ]) ];
  if (!grp.includes(l10n.group) && l10n.group !== SP && l10n.group !== dec) {
    grp.push(l10n.group);
  }
  let num = '';
  let exp = '';
  let sign = 1;
  let format = '';
  let minus = false;
  let openParen = false;
  let closeParen = false;
  let percent = false;
  let currency = false;
  let currencySymbol = null;
  let currencyTrailing = false;
  let i = 0;
  // prefix
  const prefixChars = [ SP, NS, NN, '+', '%', '(', '-' ].concat(currencySymbols);
  while (prefixChars.includes(value[i])) {
    const char = value[i];
    if (char === '-') {
      if (minus || openParen) { return null; }
      minus = true;
      sign = -1;
    }
    else if (reCurrencySymbols.test(char)) {
      if (currency) { return null; }
      currency = true;
      currencySymbol = char;
    }
    else if (char === '(') {
      if (openParen || minus) { return null; }
      openParen = true;
      sign = -1;
    }
    else if (char === '%') {
      if (percent) { return null; }
      percent = true;
    }
    i++;
  }
  // number
  let haveDecimal = false;
  let g;
  if (value[i] === dec || isDigit(value[i])) {
    while (i < value.length) {
      const ch = value[i];
      // can maybe allow space as the grouping operator if we find that it is
      // immediately followed by a digit or decimal?
      if (!g && grp.includes(ch)) {
        g = ch;
        // skip
      }
      else if (g && g === ch) {
        // skip
      }
      else if (ch === dec) {
        if (haveDecimal) {
          break;
        }
        num += '.';
        haveDecimal = true;
      }
      else if (isDigit(ch)) {
        num += ch;
      }
      else {
        break;
      }
      i++;
    }
  }
  // exponent
  if (value[i] === 'e' || value[i] === 'E') {
    exp += value[i];
    i++;
    if (value[i] === '+' || value[i] === '-') {
      exp += value[i];
      i++;
    }
    const d = i;
    while (isDigit(value[i])) {
      exp += value[i];
      i++;
    }
    if (d === i) {
      // contains no digits
      return null;
    }
  }
  // suffix
  const suffixChars = [ SP, NS, NN, '%', '$', ')' ].concat(currencySymbols);
  while (suffixChars.includes(value[i])) {
    const char = value[i];
    // only 1 occurance of these is allowed
    if (reCurrencySymbols.test(char)) {
      if (currency) { return null; }
      currency = true;
      currencySymbol = char;
      currencyTrailing = true;
    }
    else if (char === ')') {
      if (closeParen || !openParen) { return null; }
      closeParen = true;
    }
    else if (char === '%') {
      if (percent) { return null; }
      percent = true;
    }
    i++;
  }

  if (i !== value.length) {
    return null;
  }

  // is number ok?
  let numberValue = parseFloat(num + exp);
  if (!isFinite(numberValue)) {
    return null;
  }

  if (exp) {
    if (percent || currency) {
      return null;
    }
    // allow parens and minus, but not %$
    format = '0.00E+00';
  }
  else if (percent) {
    if (currency) {
      // Sheets allows this: $123% => $1.23 (Excel does not)
      return null;
    }
    // numpart dictates how "deep" the format is: "0" vs "0.00"
    format = num.includes('.')
      ? '0.00%'
      : '0%';
    numberValue *= 0.01;
  }
  else if (currency) {
    // numpart dictates how "deep" the format is: "0" vs "0.00"
    const currencyFormat = num.includes('.')
      ? '#,##0.00'
      : '#,##0';
    if (currencyTrailing) {
      format = currencyFormat + currencySymbol;
    }
    else {
      format = currencySymbol + currencyFormat;
    }
  }
  else if (g) {
    format = num.includes('.')
      ? '#,##0.00'
      : '#,##0';
  }
  // we may want to lower the fidelity of the number: +num.toFixed(13)
  const ret = { v: numberValue * sign };
  if (format) {
    ret.z = format;
  }
  return ret;
}

export function isValidDate (y, m, d) {
  // day can't be 0
  if (d < 1) {
    return false;
  }
  // month must be 1-12
  if (m < 1 || m > 12) {
    return false;
  }
  // february
  if (m === 2) {
    const isLeapYear = (((y % 4 === 0) && (y % 100 !== 0)) || (y % 400 === 0));
    // 1900 is a leap year in Excel
    const febDays = (isLeapYear || y === 1900) ? 29 : 28;
    if (d > febDays) {
      return false;
    }
  }
  // test any other month
  else if (
    ((m === 4 || m === 6 || m === 9 || m === 11) && d > 30) ||
    ((m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10 || m === 12) && d > 31)) {
    return false;
  }
  return true;
}

// should really match { ’'   } and all whitespace
const matchRec = (str, data, skipPeriod = false) => {
  for (const item of data) {
    if (str.startsWith(item[0])) {
      // if the match is followed by a "." we'll skip it if the abbr. is by
      // convention abbreviated in the locale.
      let l = item[0].length;
      if (skipPeriod && (item[2] === 'D' || item[2] === 'M') && str[l] === '.') {
        l++;
      }
      return [ str.slice(0, l), item ];
    }
  }
  return [ '', null ];
};

const nextToken = (str, node, data, lData) => {
  const path = data.path || '';
  const matchOrder = Object.keys(node);
  for (let i = 0; i < matchOrder.length; i++) {
    let r;
    const t = matchOrder[i];
    if (!node[t]) {
      continue;
    }
    if (t === '$' || t === '€') {
      // if string is done, then we can return
      if (!str) {
        r = data;
      }
    }
    else if (t === '-') {
      const m = /^(\s*([./-]|,\s)\s*|\s+)/.exec(str);
      if (m) {
        const sep = (m[1] === '-' || m[1] === '/' || m[1] === '.') ? m[1] : ' ';
        // don't allow mixing date separators
        if (!data.sep || data.sep === sep) {
          const s = m[0].replace(/\s+/g, ' ');
          r = nextToken(str.slice(m[0].length), node[t], { ...data, sep, path: path + s }, lData);
        }
      }
    }
    else if (t === ' ') {
      const m = /^[,.]?\s+/.exec(str);
      if (m) {
        const s = m[0].replace(/\s+/g, ' ');
        r = nextToken(str.slice(m[0].length), node[t], { ...data, path: path + s }, lData);
      }
    }
    else if (t === 'j' || t === 'd') {
      const m = /^(0?[1-9]|1\d|2\d|3[01])\b/.exec(str);
      if (m) {
        r = nextToken(str.slice(m[0].length), node[t], { ...data, day: m[0], path: path + t }, lData);
      }
    }
    else if (t === 'n' || t === 'm') {
      const m = /^(0?[1-9]|1[012])\b/.exec(str);
      if (m) {
        r = nextToken(str.slice(m[0].length), node[t], { ...data, month: +m[0], _mon: m[0], path: path + t }, lData);
      }
    }
    else if (t === 'F' || t === 'M') {
      const [ m, match ] = matchRec(str, lData.mon, lData.mp);
      if (match && match[2] === t) {
        r = nextToken(str.slice(m.length), node[t],
          { ...data, month: match[1], _mon: m, path: path + t }, lData);
      }
    }
    else if (t === 'l' || t === 'D') {
      const [ m, match ] = matchRec(str, lData.day, lData.dp);
      if (match && match[2] === t) {
        // the value is ignored
        r = nextToken(str.slice(m.length), node[t], { ...data, path: path + t }, lData);
      }
    }
    else if (t === 'y') {
      const m = /^\d\d\b/.exec(str);
      if (m) {
        const y = (+m[0] >= 30) ? +m[0] + 1900 : +m[0] + 2000;
        r = nextToken(str.slice(m[0].length), node[t], { ...data, year: y, path: path + t }, lData);
      }
    }
    else if (t === 'Y') {
      const m = /^\d\d\d\d\b/.exec(str);
      if (m) {
        r = nextToken(str.slice(m[0].length), node[t], { ...data, year: +m[0], path: path + t }, lData);
      }
    }
    else if (t === 'x') {
      const time = parseTime(str, { locale: lData.locale });
      if (time) {
        r = nextToken('', node[t], { ...data, time: time.v, tf: time.z, path: path + t }, lData);
      }
    }
    else {
      throw new Error(`Unknown date token "${t}"`);
    }
    if (r) {
      // reject invalid dates so we continue traversing the tree
      if (isValidDate(data.year || 1916, data.month || 1, data.day ? +data.day : 1)) {
        return r;
      }
    }
  }
};

const normDateStr = s => (
  s.replace(/\s+/g, ' ').trim()
    .replace(/’/, "'")
    .replace(/\.$/, '')
    .toLowerCase()
);

const getLookups = (arr, sym) => {
  const s = arr.map((d, i) => [ normDateStr(d), i + 1, sym ]);
  s.sort((a, b) => b[0].length - a[0].length);
  return s;
};

/**
 * Parse a date or datetime string input and return its value and format. If
 * the input was not recognized or valid, the function returns a `null`, for
 * valid input it returns an object with two properties:
 *
 * - `v`: the parsed value.
 * - `z`: the number format of the input (if applicable).
 *
 * @see parseValue
 * @param {string} value The date to parse
 * @param {object} [options={}]  Options
 * @param {string} [options.locale=""]
 *    A BCP 47 string tag. Locale default is english with a `\u00a0`
 *    grouping symbol (see [addLocale](#addLocale))
 * @returns {ParseData | null} An object of the parsed value and a corresponding format string
 */
export function parseDate (value, options = {}) {
  const l10n = getLocale(options.locale || '') || defaultLocale;
  const lData = {
    mon: getLookups(l10n.mmmm, 'F').concat(getLookups(l10n.mmm, 'M')),
    mp: l10n.mmm[0].at(-1) === '.',
    day: getLookups(l10n.dddd, 'l').concat(getLookups(l10n.ddd, 'D')),
    dp: l10n.ddd[0].at(-1) === '.',
    locale: options.locale
  };
  // possible shortcut: quickly dismiss if there isn't a number?
  const date = nextToken(
    normDateStr(value),
    l10n.preferMDY ? dateTrieMD : dateTrieDM,
    { path: '' },
    lData
  );
  if (date) {
    // disallow matches where two tokens are separated by a period
    if (date.sep === '.' && date.path.length === 3) {
      return null;
    }
    const year = +(date.year ?? currentYear);
    if (!date.day) {
      date.day = 1;
    }
    let epoch = -Infinity;
    if (year < 1900) {
      return null;
    }
    else if (year <= 1900 && date.month <= 2) {
      epoch = 25568;
    }
    else if (year < 10000) {
      epoch = 25569;
    }
    const dateValue = (Date.UTC(year, date.month - 1, date.day) / 864e5) + epoch + (date.time || 0);
    if (dateValue >= 0 && dateValue <= 2958465) {
      const lead0 = (
        // either has a leading zero
        (date._mon[0] === '0' || date.day[0] === '0') ||
        // both are 2-digits long
        (date._mon.length === 2 && date.day.length === 2)
      );
      const format = date.path.replace(/[jdlDnmMFyYx]/g, a => {
        if (a === 'x') { return date.tf || ''; }
        return (lead0 ? tx00[a] : tx0[a]) || a;
      });
      return { v: dateValue, z: format };
    }
  }
  return null;
}

const normAMPMStr = s => (
  s.replace(/\s+/g, '').trim()
    .replace(/\./g, '')
    .toLowerCase()
);

/**
 * Parse a time string input and return its value and format. If the input was
 * not recognized or valid, the function returns a `null`, for valid input it
 * returns an object with two properties:
 *
 * - `v`: the parsed value.
 * - `z`: the number format of the input (if applicable).
 *
 * @see parseValue
 * @param {string} value The date to parse
 * @param {object} [options={}]  Options
 * @param {string} [options.locale=""]
 *    A BCP 47 string tag. Locale default is english with a `\u00a0`
 *    grouping symbol (see [addLocale](#addLocale))
 * @returns {ParseData | null} An object of the parsed value and a corresponding format string
 */
export function parseTime (value, options = {}) {
  const l10n = getLocale(options.locale || '') || defaultLocale;
  const parts = /^\s*([10]?\d|2[0-4])(?::([0-5]\d|\d))?(?::([0-5]\d|\d))?(\.\d{1,10})?(?=\s*[^\s\d]|$)/.exec(value);
  let ampm = '';
  if (parts) {
    const tail = normAMPMStr(value.slice(parts[0].length));
    if (tail === normAMPMStr(l10n.ampm[0]) || tail === 'a' || tail === 'am') {
      ampm = 'a';
    }
    else if (tail === normAMPMStr(l10n.ampm[1]) || tail === 'p' || tail === 'pm') {
      ampm = 'p';
    }
    else if (tail) {
      return null;
    }
  }
  if (parts) {
    const [ , h, m, s, f ] = parts;
    // don't allow milliseconds without seconds
    if (f && !s) {
      return null;
    }
    // single number must also include AM/PM part
    if (!ampm && !m && !s) {
      return null;
    }
    // AM/PM part must align with hours
    let hrs = +(h || 0) * 1;
    if (ampm) {
      if (hrs >= 13) {
        return null;
      }
      // console.error(am);
      // valid -- Ertu með far eð
      // 00:00 AM - 12:00 AM
      if (ampm === 'p') {
        hrs += 12;
      }
    }
    const min = +(m || 0) * 1;
    const sec = +(s || 0) * 1;
    const mss = +(f || 0) * 1;
    return {
      v: ((hrs * 60 * 60) + (min * 60) + sec + mss) / (60 * 60 * 24),
      z: (
        (h.length === 2 ? 'hh' : 'h') +
        ':mm' +
        (s ? ':ss' : '') +
        (ampm ? ' AM/PM' : '')
      )
    };
  }
  return null;
}

/**
 * Parse a string input and return its boolean value. If the input was not
 * recognized or valid, the function returns a `null`, for valid input it
 * returns an object with one property:
 *
 * - `v`: the parsed value.
 *
 * @see parseValue
 * @param {string} value The supposed boolean to parse
 * @param {object} [options={}]  Options
 * @param {string} [options.locale=""]
 *    A BCP 47 string tag. Locale default is english with a `\u00a0`
 *    grouping symbol (see [addLocale](#addLocale))
 * @returns {ParseData | null} An object of the parsed value and a corresponding format string
 */
export function parseBool (value, options = {}) {
  const l10n = getLocale(options.locale || '') || defaultLocale;
  const v = value.trim().toLowerCase();
  const bT = l10n.bool[0].toLowerCase();
  if (v === 'true' || v === bT) {
    return { v: true };
  }
  const bF = l10n.bool[1].toLowerCase();
  if (v === 'false' || v === bF) {
    return { v: false };
  }
  return null;
}

/**
 * Attempt to parse a "spreadsheet input" string input and return its value and
 * format. If the input was not recognized or valid, the function returns a
 * `null`, for valid input it returns an object with two properties:
 *
 * - `v`: The parsed value. For dates, this will be an Excel style serial date.
 * - `z`: (Optionally) the number format string of the input. This property will
 *        not be present if it amounts to the `General` format.
 * 
 * `parseValue()` recognizes a wide range of dates and date-times, times,
 * numbers, and booleans. Some examples:
 *
 * ```js
 * // basic number
 * parseValue("-123");// { v: -123 }
 * // formatted number
 * parseValue("$1,234"); // { v: 1234, z: "$#,##0" }
 * // a percent
 * parseValue("12.3%"); // { v: 0.123, z: "0.00%" }
 * // a date
 * parseValue("07 October 1984"); // { v: 30962, z: 'dd mmmm yyyy' }
 * // an ISO formatted date-time
 * parseValue("1984-09-10 11:12:13.1234"); // { v: 30935.46681855787, z: "yyyy-mm-dd hh:mm:ss" }
 * // a boolean
 * parseValue("false"); // { v: false }
 * ```
 *
 * The formatting string outputted may not correspond exactly to the input.
 * Rather, is it composed of certain elements which the input controls. This is
 * comparable to how Microsoft Excel and Google Sheets parse pasted input. Some
 * things you may expect:
 *
 * - Whitespace is ignored.
 * - Decimal fractions are always represented by `.00` regardless of how many
 *   digits were shown in the input.
 * - Negatives denoted by parentheses [`(1,234)`] will not include the
 *   parentheses in the format string (the value will still by negative.)
 * - All "scientific notation" returns the same format: `0.00E+00`.
 *
 * Internally the parser calls, `parseNumber`, `parseDate`,
 * `parseTime` and `parseBool`. They work in the same way except
 * with a more limited scope. You may want those function if you are limiting
 * input to a smaller scope.
 *
 * Be warned that the parser do not (yet) take locale into account so all input
 * is assumed to be in "en-US". This means that `1,234.5` will parse, but
 * `1.234,5` will not. Similarly, the order of date parts will be US centric.
 * This may change in the future so be careful what options you pass the
 * functions.
 *
 * @param {string} value The value to parse
 * @param {object} [options={}]  Options
 * @param {string} [options.locale=""]
 *    A BCP 47 string tag. Locale default is english with a `\u00a0`
 *    grouping symbol (see [addLocale](#addLocale))
 * @returns {ParseData | null} An object of the parsed value and a corresponding format string
 */
export function parseValue (value, options) {
  return (
    parseNumber(value, options) ??
    parseDate(value, options) ??
    parseTime(value, options) ??
    parseBool(value, options)
  );
}
