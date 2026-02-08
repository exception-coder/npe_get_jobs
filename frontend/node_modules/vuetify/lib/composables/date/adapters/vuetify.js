// Utilities
import { consoleWarn, createRange, padStart } from "../../../util/index.js"; // Types
function weekInfo(locale) {
  // https://simplelocalize.io/data/locales/
  // then `new Intl.Locale(...).getWeekInfo()`
  const code = locale.slice(-2).toUpperCase();
  switch (true) {
    case locale === 'GB-alt-variant':
      {
        return {
          firstDay: 0,
          firstWeekSize: 4
        };
      }
    case locale === '001':
      {
        return {
          firstDay: 1,
          firstWeekSize: 1
        };
      }
    case `AG AS BD BR BS BT BW BZ CA CO DM DO ET GT GU HK HN ID IL IN JM JP KE
    KH KR LA MH MM MO MT MX MZ NI NP PA PE PH PK PR PY SA SG SV TH TT TW UM US
    VE VI WS YE ZA ZW`.includes(code):
      {
        return {
          firstDay: 0,
          firstWeekSize: 1
        };
      }
    case `AI AL AM AR AU AZ BA BM BN BY CL CM CN CR CY EC GE HR KG KZ LB LK LV
    MD ME MK MN MY NZ RO RS SI TJ TM TR UA UY UZ VN XK`.includes(code):
      {
        return {
          firstDay: 1,
          firstWeekSize: 1
        };
      }
    case `AD AN AT AX BE BG CH CZ DE DK EE ES FI FJ FO FR GB GF GP GR HU IE IS
    IT LI LT LU MC MQ NL NO PL RE RU SE SK SM VA`.includes(code):
      {
        return {
          firstDay: 1,
          firstWeekSize: 4
        };
      }
    case `AE AF BH DJ DZ EG IQ IR JO KW LY OM QA SD SY`.includes(code):
      {
        return {
          firstDay: 6,
          firstWeekSize: 1
        };
      }
    case code === 'MV':
      {
        return {
          firstDay: 5,
          firstWeekSize: 1
        };
      }
    case code === 'PT':
      {
        return {
          firstDay: 0,
          firstWeekSize: 4
        };
      }
    default:
      return null;
  }
}
function getWeekArray(date, locale, firstDayOfWeek) {
  const weeks = [];
  let currentWeek = [];
  const firstDayOfMonth = startOfMonth(date);
  const lastDayOfMonth = endOfMonth(date);
  const first = firstDayOfWeek ?? weekInfo(locale)?.firstDay ?? 0;
  const firstDayWeekIndex = (firstDayOfMonth.getDay() - first + 7) % 7;
  const lastDayWeekIndex = (lastDayOfMonth.getDay() - first + 7) % 7;
  for (let i = 0; i < firstDayWeekIndex; i++) {
    const adjacentDay = new Date(firstDayOfMonth);
    adjacentDay.setDate(adjacentDay.getDate() - (firstDayWeekIndex - i));
    currentWeek.push(adjacentDay);
  }
  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    const day = new Date(date.getFullYear(), date.getMonth(), i);

    // Add the day to the current week
    currentWeek.push(day);

    // If the current week has 7 days, add it to the weeks array and start a new week
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }
  for (let i = 1; i < 7 - lastDayWeekIndex; i++) {
    const adjacentDay = new Date(lastDayOfMonth);
    adjacentDay.setDate(adjacentDay.getDate() + i);
    currentWeek.push(adjacentDay);
  }
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }
  return weeks;
}
function startOfWeek(date, locale, firstDayOfWeek) {
  let day = (firstDayOfWeek ?? weekInfo(locale)?.firstDay ?? 0) % 7;

  // prevent infinite loop
  if (![0, 1, 2, 3, 4, 5, 6].includes(day)) {
    consoleWarn('Invalid firstDayOfWeek, expected discrete number in range [0-6]');
    day = 0;
  }
  const d = new Date(date);
  while (d.getDay() !== day) {
    d.setDate(d.getDate() - 1);
  }
  return d;
}
function endOfWeek(date, locale) {
  const d = new Date(date);
  const lastDay = ((weekInfo(locale)?.firstDay ?? 0) + 6) % 7;
  while (d.getDay() !== lastDay) {
    d.setDate(d.getDate() + 1);
  }
  return d;
}
function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}
function endOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}
function parseLocalDate(value) {
  const parts = value.split('-').map(Number);

  // new Date() uses local time zone when passing individual date component values
  return new Date(parts[0], parts[1] - 1, parts[2]);
}
const _YYYMMDD = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function date(value) {
  if (value == null) return new Date();
  if (value instanceof Date) return value;
  if (typeof value === 'string') {
    let parsed;
    if (_YYYMMDD.test(value)) {
      return parseLocalDate(value);
    } else {
      parsed = Date.parse(value);
    }
    if (!isNaN(parsed)) return new Date(parsed);
  }
  return null;
}
const sundayJanuarySecond2000 = new Date(2000, 0, 2);
function getWeekdays(locale, firstDayOfWeek, weekdayFormat) {
  const daysFromSunday = firstDayOfWeek ?? weekInfo(locale)?.firstDay ?? 0;
  return createRange(7).map(i => {
    const weekday = new Date(sundayJanuarySecond2000);
    weekday.setDate(sundayJanuarySecond2000.getDate() + daysFromSunday + i);
    return new Intl.DateTimeFormat(locale, {
      weekday: weekdayFormat ?? 'narrow'
    }).format(weekday);
  });
}
function format(value, formatString, locale, formats) {
  const newDate = date(value) ?? new Date();
  const customFormat = formats?.[formatString];
  if (typeof customFormat === 'function') {
    return customFormat(newDate, formatString, locale);
  }
  let options = {};
  switch (formatString) {
    case 'fullDate':
      options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      };
      break;
    case 'fullDateWithWeekday':
      options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      break;
    case 'normalDate':
      const day = newDate.getDate();
      const month = new Intl.DateTimeFormat(locale, {
        month: 'long'
      }).format(newDate);
      return `${day} ${month}`;
    case 'normalDateWithWeekday':
      options = {
        weekday: 'short',
        day: 'numeric',
        month: 'short'
      };
      break;
    case 'shortDate':
      options = {
        month: 'short',
        day: 'numeric'
      };
      break;
    case 'year':
      options = {
        year: 'numeric'
      };
      break;
    case 'month':
      options = {
        month: 'long'
      };
      break;
    case 'monthShort':
      options = {
        month: 'short'
      };
      break;
    case 'monthAndYear':
      options = {
        month: 'long',
        year: 'numeric'
      };
      break;
    case 'monthAndDate':
      options = {
        month: 'long',
        day: 'numeric'
      };
      break;
    case 'weekday':
      options = {
        weekday: 'long'
      };
      break;
    case 'weekdayShort':
      options = {
        weekday: 'short'
      };
      break;
    case 'dayOfMonth':
      return new Intl.NumberFormat(locale).format(newDate.getDate());
    case 'hours12h':
      options = {
        hour: 'numeric',
        hour12: true
      };
      break;
    case 'hours24h':
      options = {
        hour: 'numeric',
        hour12: false
      };
      break;
    case 'minutes':
      options = {
        minute: 'numeric'
      };
      break;
    case 'seconds':
      options = {
        second: 'numeric'
      };
      break;
    case 'fullTime':
      options = {
        hour: 'numeric',
        minute: 'numeric'
      };
      break;
    case 'fullTime12h':
      options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      };
      break;
    case 'fullTime24h':
      options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
      };
      break;
    case 'fullDateTime':
      options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      };
      break;
    case 'fullDateTime12h':
      options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      };
      break;
    case 'fullDateTime24h':
      options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
      };
      break;
    case 'keyboardDate':
      options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      };
      break;
    case 'keyboardDateTime':
      options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric'
      };
      return new Intl.DateTimeFormat(locale, options).format(newDate).replace(/, /g, ' ');
    case 'keyboardDateTime12h':
      options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      };
      return new Intl.DateTimeFormat(locale, options).format(newDate).replace(/, /g, ' ');
    case 'keyboardDateTime24h':
      options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
      };
      return new Intl.DateTimeFormat(locale, options).format(newDate).replace(/, /g, ' ');
    default:
      options = customFormat ?? {
        timeZone: 'UTC',
        timeZoneName: 'short'
      };
  }
  return new Intl.DateTimeFormat(locale, options).format(newDate);
}
function toISO(adapter, value) {
  const date = adapter.toJsDate(value);
  const year = date.getFullYear();
  const month = padStart(String(date.getMonth() + 1), 2, '0');
  const day = padStart(String(date.getDate()), 2, '0');
  return `${year}-${month}-${day}`;
}
function parseISO(value) {
  const [year, month, day] = value.split('-').map(Number);
  return new Date(year, month - 1, day);
}
function addMinutes(date, amount) {
  const d = new Date(date);
  d.setMinutes(d.getMinutes() + amount);
  return d;
}
function addHours(date, amount) {
  const d = new Date(date);
  d.setHours(d.getHours() + amount);
  return d;
}
function addDays(date, amount) {
  const d = new Date(date);
  d.setDate(d.getDate() + amount);
  return d;
}
function addWeeks(date, amount) {
  const d = new Date(date);
  d.setDate(d.getDate() + amount * 7);
  return d;
}
function addMonths(date, amount) {
  const d = new Date(date);
  d.setDate(1);
  d.setMonth(d.getMonth() + amount);
  return d;
}
function getYear(date) {
  return date.getFullYear();
}
function getMonth(date) {
  return date.getMonth();
}
function getWeek(date, locale, firstDayOfWeek, firstDayOfYear) {
  const weekInfoFromLocale = weekInfo(locale);
  const weekStart = firstDayOfWeek ?? weekInfoFromLocale?.firstDay ?? 0;
  const minWeekSize = weekInfoFromLocale?.firstWeekSize ?? 1;
  return firstDayOfYear !== undefined ? calculateWeekWithFirstDayOfYear(date, locale, weekStart, firstDayOfYear) : calculateWeekWithMinWeekSize(date, locale, weekStart, minWeekSize);
}
function calculateWeekWithFirstDayOfYear(date, locale, weekStart, firstDayOfYear) {
  const firstDayOfYearOffset = (7 + firstDayOfYear - weekStart) % 7;
  const currentWeekStart = startOfWeek(date, locale, weekStart);
  const currentWeekEnd = addDays(currentWeekStart, 6);
  function yearStartWeekdayOffset(year) {
    return (7 + new Date(year, 0, 1).getDay() - weekStart) % 7;
  }
  let year = getYear(date);
  if (year < getYear(currentWeekEnd) && yearStartWeekdayOffset(year + 1) <= firstDayOfYearOffset) {
    year++;
  }
  const yearStart = new Date(year, 0, 1);
  const offset = yearStartWeekdayOffset(year);
  const d1w1 = offset <= firstDayOfYearOffset ? addDays(yearStart, -offset) : addDays(yearStart, 7 - offset);
  return 1 + getDiff(endOfDay(date), startOfDay(d1w1), 'weeks');
}
function calculateWeekWithMinWeekSize(date, locale, weekStart, minWeekSize) {
  const currentWeekEnd = addDays(startOfWeek(date, locale, weekStart), 6);
  function firstWeekSize(year) {
    const yearStart = new Date(year, 0, 1);
    return 7 - getDiff(yearStart, startOfWeek(yearStart, locale, weekStart), 'days');
  }
  let year = getYear(date);
  if (year < getYear(currentWeekEnd) && firstWeekSize(year + 1) >= minWeekSize) {
    year++;
  }
  const yearStart = new Date(year, 0, 1);
  const size = firstWeekSize(year);
  const d1w1 = size >= minWeekSize ? addDays(yearStart, size - 7) : addDays(yearStart, size);
  return 1 + getDiff(endOfDay(date), startOfDay(d1w1), 'weeks');
}
function getDate(date) {
  return date.getDate();
}
function getNextMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 1);
}
function getPreviousMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() - 1, 1);
}
function getHours(date) {
  return date.getHours();
}
function getMinutes(date) {
  return date.getMinutes();
}
function startOfYear(date) {
  return new Date(date.getFullYear(), 0, 1);
}
function endOfYear(date) {
  return new Date(date.getFullYear(), 11, 31);
}
function isWithinRange(date, range) {
  return isAfter(date, range[0]) && isBefore(date, range[1]);
}
function isValid(date) {
  const d = new Date(date);
  return d instanceof Date && !isNaN(d.getTime());
}
function isAfter(date, comparing) {
  return date.getTime() > comparing.getTime();
}
function isAfterDay(date, comparing) {
  return isAfter(startOfDay(date), startOfDay(comparing));
}
function isBefore(date, comparing) {
  return date.getTime() < comparing.getTime();
}
function isEqual(date, comparing) {
  return date.getTime() === comparing.getTime();
}
function isSameDay(date, comparing) {
  return date.getDate() === comparing.getDate() && date.getMonth() === comparing.getMonth() && date.getFullYear() === comparing.getFullYear();
}
function isSameMonth(date, comparing) {
  return date.getMonth() === comparing.getMonth() && date.getFullYear() === comparing.getFullYear();
}
function isSameYear(date, comparing) {
  return date.getFullYear() === comparing.getFullYear();
}
function getDiff(date, comparing, unit) {
  const d = new Date(date);
  const c = new Date(comparing);
  switch (unit) {
    case 'years':
      return d.getFullYear() - c.getFullYear();
    case 'quarters':
      return Math.floor((d.getMonth() - c.getMonth() + (d.getFullYear() - c.getFullYear()) * 12) / 4);
    case 'months':
      return d.getMonth() - c.getMonth() + (d.getFullYear() - c.getFullYear()) * 12;
    case 'weeks':
      return Math.floor((d.getTime() - c.getTime()) / (1000 * 60 * 60 * 24 * 7));
    case 'days':
      return Math.floor((d.getTime() - c.getTime()) / (1000 * 60 * 60 * 24));
    case 'hours':
      return Math.floor((d.getTime() - c.getTime()) / (1000 * 60 * 60));
    case 'minutes':
      return Math.floor((d.getTime() - c.getTime()) / (1000 * 60));
    case 'seconds':
      return Math.floor((d.getTime() - c.getTime()) / 1000);
    default:
      {
        return d.getTime() - c.getTime();
      }
  }
}
function setHours(date, count) {
  const d = new Date(date);
  d.setHours(count);
  return d;
}
function setMinutes(date, count) {
  const d = new Date(date);
  d.setMinutes(count);
  return d;
}
function setMonth(date, count) {
  const d = new Date(date);
  d.setMonth(count);
  return d;
}
function setDate(date, day) {
  const d = new Date(date);
  d.setDate(day);
  return d;
}
function setYear(date, year) {
  const d = new Date(date);
  d.setFullYear(year);
  return d;
}
function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
}
function endOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);
}
export class VuetifyDateAdapter {
  constructor(options) {
    this.locale = options.locale;
    this.formats = options.formats;
  }
  date(value) {
    return date(value);
  }
  toJsDate(date) {
    return date;
  }
  toISO(date) {
    return toISO(this, date);
  }
  parseISO(date) {
    return parseISO(date);
  }
  addMinutes(date, amount) {
    return addMinutes(date, amount);
  }
  addHours(date, amount) {
    return addHours(date, amount);
  }
  addDays(date, amount) {
    return addDays(date, amount);
  }
  addWeeks(date, amount) {
    return addWeeks(date, amount);
  }
  addMonths(date, amount) {
    return addMonths(date, amount);
  }
  getWeekArray(date, firstDayOfWeek) {
    const firstDay = firstDayOfWeek !== undefined ? Number(firstDayOfWeek) : undefined;
    return getWeekArray(date, this.locale, firstDay);
  }
  startOfWeek(date, firstDayOfWeek) {
    const firstDay = firstDayOfWeek !== undefined ? Number(firstDayOfWeek) : undefined;
    return startOfWeek(date, this.locale, firstDay);
  }
  endOfWeek(date) {
    return endOfWeek(date, this.locale);
  }
  startOfMonth(date) {
    return startOfMonth(date);
  }
  endOfMonth(date) {
    return endOfMonth(date);
  }
  format(date, formatString) {
    return format(date, formatString, this.locale, this.formats);
  }
  isEqual(date, comparing) {
    return isEqual(date, comparing);
  }
  isValid(date) {
    return isValid(date);
  }
  isWithinRange(date, range) {
    return isWithinRange(date, range);
  }
  isAfter(date, comparing) {
    return isAfter(date, comparing);
  }
  isAfterDay(date, comparing) {
    return isAfterDay(date, comparing);
  }
  isBefore(date, comparing) {
    return !isAfter(date, comparing) && !isEqual(date, comparing);
  }
  isSameDay(date, comparing) {
    return isSameDay(date, comparing);
  }
  isSameMonth(date, comparing) {
    return isSameMonth(date, comparing);
  }
  isSameYear(date, comparing) {
    return isSameYear(date, comparing);
  }
  setMinutes(date, count) {
    return setMinutes(date, count);
  }
  setHours(date, count) {
    return setHours(date, count);
  }
  setMonth(date, count) {
    return setMonth(date, count);
  }
  setDate(date, day) {
    return setDate(date, day);
  }
  setYear(date, year) {
    return setYear(date, year);
  }
  getDiff(date, comparing, unit) {
    return getDiff(date, comparing, unit);
  }
  getWeekdays(firstDayOfWeek, weekdayFormat) {
    const firstDay = firstDayOfWeek !== undefined ? Number(firstDayOfWeek) : undefined;
    return getWeekdays(this.locale, firstDay, weekdayFormat);
  }
  getYear(date) {
    return getYear(date);
  }
  getMonth(date) {
    return getMonth(date);
  }
  getWeek(date, firstDayOfWeek, firstDayOfYear) {
    const firstDay = firstDayOfWeek !== undefined ? Number(firstDayOfWeek) : undefined;
    const firstWeekStart = firstDayOfYear !== undefined ? Number(firstDayOfYear) : undefined;
    return getWeek(date, this.locale, firstDay, firstWeekStart);
  }
  getDate(date) {
    return getDate(date);
  }
  getNextMonth(date) {
    return getNextMonth(date);
  }
  getPreviousMonth(date) {
    return getPreviousMonth(date);
  }
  getHours(date) {
    return getHours(date);
  }
  getMinutes(date) {
    return getMinutes(date);
  }
  startOfDay(date) {
    return startOfDay(date);
  }
  endOfDay(date) {
    return endOfDay(date);
  }
  startOfYear(date) {
    return startOfYear(date);
  }
  endOfYear(date) {
    return endOfYear(date);
  }
}
//# sourceMappingURL=vuetify.js.map