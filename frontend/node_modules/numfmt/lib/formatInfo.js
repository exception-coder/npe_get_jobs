import { u_YEAR, u_MONTH, u_DAY, u_HOUR, u_MIN, u_SEC, reCurrencySymbols } from './constants.js';

export function isPercent (partitions) {
  return !!(
    (partitions[0] && partitions[0].percent) ||
    (partitions[1] && partitions[1].percent) ||
    (partitions[2] && partitions[2].percent) ||
    (partitions[3] && partitions[3].percent)
  );
}

export function isDate (partitions) {
  return !!(
    (partitions[0] && partitions[0].date) ||
    (partitions[1] && partitions[1].date) ||
    (partitions[2] && partitions[2].date) ||
    (partitions[3] && partitions[3].date)
  );
}

export function isText (partitions) {
  const [ part1, part2, part3, part4 ] = partitions;
  return !!(
    (!part1 || part1.generated) &&
    (!part2 || part2.generated) &&
    (!part3 || part3.generated) &&
    (part4 && part4.text && !part4.generated)
  );
}

const level = {
  text: 15,
  datetime: 10.8,
  date: 10.8,
  time: 10.8,
  percent: 10.6,
  currency: 10.4,
  grouped: 10.2,
  scientific: 6,
  number: 4,
  fraction: 2,
  general: 0,
  error: 0
};

const dateCodes = [
  [ 'DMY', 1 ],
  [ 'DM', 2 ],
  [ 'MY', 3 ],
  [ 'MDY', 4 ],
  [ 'MD', 5 ],
  [ 'hmsa', 6 ],
  [ 'hma', 7 ],
  [ 'hms', 8 ],
  [ 'hm', 9 ]
];

/**
 * @typedef {object} FormatInfo
 *   An object of information properties based on a format pattern.
 * @property {(
 *   "currency" | "date" | "datetime" |
 *   "error" | "fraction" | "general" |
 *   "grouped" | "number" | "percent" |
 *   "scientific" | "text" | "time"
 * )} type
 *     A string identifier for the type of the number formatter.
 * @property {boolean} isDate
 *     Corresponds to the output from isDateFormat.
 * @property {boolean} isText
 *     Corresponds to the output from isTextFormat.
 * @property {boolean} isPercent
 *     Corresponds to the output from isPercentFormat.
 * @property {number} maxDecimals
 *     The maximum number of decimals this format will emit.
 * @property {0|1} color
 *     1 if the format uses color on the negative portion of the string, else
 *     a 0. This replicates Excel's `CELL("color")` functionality.
 * @property {0|1} parentheses
 *     1 if the positive portion of the number format contains an open
 *     parenthesis, else a 0. This is replicates Excel's `CELL("parentheses")`
 *     functionality.
 * @property {0|1} grouped
 *     1 if the positive portion of the format uses a thousands separator,
 *     else a 0.
 * @property {string} code
 *     Corresponds to Excel's `CELL("format")` functionality. It should match
 *     Excel's esoteric behaviour fairly well.
 *     [See Microsoft's documentation.](https://support.microsoft.com/en-us/office/cell-function-51bd39a5-f338-4dbe-a33f-955d67c2b2cf)
 * @property {number} scale
 *     The multiplier used when formatting the number (100 for percentages).
 * @property {number} level
 *     An arbirarty number that represents the format's specificity if you want
 *     to compare one to another. Integer comparisons roughly match Excel's
 *     resolutions when it determines which format wins out.
 */

export function info (partitions, currencyId = null) {
  const [ partPos, partNeg ] = partitions;
  const frac_max = partPos.frac_max;
  const info = {
    type: 'general',
    isDate: isDate(partitions),
    isText: isText(partitions),
    isPercent: isPercent(partitions),
    maxDecimals: partPos.general ? 9 : frac_max,
    scale: partPos.scale ?? 1,
    color: 0,
    parentheses: 0,
    grouped: partPos.grouping ? 1 : 0
  };

  // currency identifier may be passed in, but otherwise we report
  // if we find any known glyph in the tokens
  const isCurrency = (!info.isDate && !info.isText && !partPos.error) && partPos.tokens.some(tok => (
    tok.type === 'string' &&
    (currencyId
      ? tok.value === currencyId
      : reCurrencySymbols.test(tok.value))
  ));

  let codeType = 'G';
  let codeNum = (frac_max >= 0) ? Math.min(15, frac_max) : '';
  let codeParens = '';
  let codeDash = '';

  if (partNeg && partNeg.color) {
    codeDash = '-';
    info.color = 1;
  }
  if (partPos.parens) {
    codeParens = '()';
    info.parentheses = 1;
  }

  if (isCurrency) {
    codeType = 'C';
    info.type = 'currency';
  }
  else if (partPos.error) {
    info.type = 'error';
    info.maxDecimals = 0;
  }
  else if (info.isDate) {
    let haveTime = 0;
    let haveDate = 0;
    let order = '';
    // This is equivalent to how Excel does this.
    // It has to get the order right but then ignores any trailing tokens.
    // So:  "mmm dd yyyy" matches "mdy" = D4
    // But: "mmm dd dd yyyy" matches "md" = D5
    partPos.tokens.forEach(tok => {
      const type = tok.type;
      // 'year' || 'year-short' || 'b-year' || 'b-year-short'
      if (/^(b-)?year/.test(type)) {
        order += 'Y';
        haveDate++;
      }
      // 'month' || 'monthname-single' || 'monthname-short' || 'monthname'
      else if (type.startsWith('month')) {
        order += 'M';
        haveDate++;
      }
      // 'weekday-short' || 'weekday' || 'day'
      else if (/^(week)?day/.test(type)) {
        order += 'D';
        haveDate++;
      }
      else if (type === 'hour' || type === 'min' || type === 'sec' || type === 'ampm') {
        order += type[0];
        haveTime++;
      }
    });
    info.type = 'date';
    if (haveDate && haveTime) {
      info.type = 'datetime';
    }
    else if (!haveDate && haveTime) {
      info.type = 'time';
    }
    const code = dateCodes.find(d => order.startsWith(d[0]));
    codeType = code ? 'D' : 'G';
    codeNum = code ? code[1] : '';
  }
  else if (info.isText) {
    codeType = 'G';
    info.type = 'text';
    codeNum = '';
    info.maxDecimals = 0;
  }
  else if (partPos.general) {
    codeType = 'G';
    info.type = 'general';
    codeNum = '';
  }
  else if (partPos.fractions) {
    codeType = 'G';
    info.type = 'fraction';
    codeNum = '';
  }
  else if (partPos.exponential) {
    codeType = 'S';
    info.type = 'scientific';
  }
  else if (info.isPercent) {
    codeType = 'P';
    info.type = 'percent';
  }
  else if (partPos.grouping) {
    codeType = ',';
    info.type = 'grouped';
  }
  else if (partPos.int_max || frac_max) {
    codeType = 'F';
    info.type = 'number';
  }

  info.code = codeType + codeNum + codeDash + codeParens;

  // Excel can combine some codes, but not all.
  // When integer value of two is equal and it can't combine,
  // the "first" one wins out.
  info.level = level[info.type];

  return Object.freeze(info);
}

/**
 * @typedef {object} FormatDateInfo
 *   An object detailing which date specifiers are used in a format pattern.
 * @property {boolean} year
 *   true if the pattern uses years else false.
 * @property {boolean} month
 *   true if the pattern uses months else false.
 * @property {boolean} day
 *   true if the pattern uses day of the month else false.
 * @property {boolean} hours
 *   true if the pattern uses hours else false.
 * @property {boolean} minutes
 *   true if the pattern uses minutes else false.
 * @property {boolean} seconds
 *   true if the pattern uses seconds else false.
 * @property {12|24} clockType
 *   12 if the pattern uses AM/PM clock else 24.
 */

export function dateInfo (partitions) {
  const [ partPos ] = partitions;
  const r = {
    year: !!(partPos.date & u_YEAR),
    month: !!(partPos.date & u_MONTH),
    day: !!(partPos.date & u_DAY),
    hours: !!(partPos.date & u_HOUR),
    minutes: !!(partPos.date & u_MIN),
    seconds: !!(partPos.date & u_SEC),
    clockType: partPos.clock === 12 ? 12 : 24
  };
  return r;
}
