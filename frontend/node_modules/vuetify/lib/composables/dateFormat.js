// Composables
import { useDate } from "./date/date.js"; // Utilities
import { toRef } from 'vue';
import { consoleWarn, propsFactory } from "../util/index.js"; // Types
// Types
class DateFormatSpec {
  constructor(order,
  // mdy | dmy | ymd
  separator // / | - | .
  ) {
    this.order = order;
    this.separator = separator;
  }
  get format() {
    return this.order.split('').map(sign => `${sign}${sign}`).join(this.separator).replace('yy', 'yyyy');
  }
  static canBeParsed(v) {
    if (typeof v !== 'string') return false;
    const lowercase = v.toLowerCase();
    return ['y', 'm', 'd'].every(sign => lowercase.includes(sign)) && ['/', '-', '.'].some(sign => v.includes(sign));
  }
  static parse(v) {
    if (!DateFormatSpec.canBeParsed(v)) {
      throw new Error(`[${v}] cannot be parsed into date format specification`);
    }
    const order = v.toLowerCase().split('').filter((c, i, all) => 'dmy'.includes(c) && all.indexOf(c) === i).join('');
    const separator = ['/', '-', '.'].find(sign => v.includes(sign));
    return new DateFormatSpec(order, separator);
  }
}
export const makeDateFormatProps = propsFactory({
  inputFormat: {
    type: String,
    validator: v => !v || DateFormatSpec.canBeParsed(v)
  }
}, 'date-format');
export function useDateFormat(props, locale) {
  const adapter = useDate();
  function inferFromLocale() {
    const localeForDateFormat = locale.value ?? 'en-US';
    const formatFromLocale = Intl.DateTimeFormat(localeForDateFormat, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).format(adapter.toJsDate(adapter.parseISO('1999-12-07'))).replace(/(07)|(٠٧)|(٢٩)|(۱۶)|(০৭)/, 'dd').replace(/(12)|(١٢)|(٠٨)|(۰۹)|(১২)/, 'mm').replace(/(1999)|(2542)|(١٩٩٩)|(١٤٢٠)|(۱۳۷۸)|(১৯৯৯)/, 'yyyy').replace(/[^ymd\-/.]/g, '').replace(/\.$/, '');
    if (!DateFormatSpec.canBeParsed(formatFromLocale)) {
      consoleWarn(`Date format inferred from locale [${localeForDateFormat}] is invalid: [${formatFromLocale}]`);
      return 'mm/dd/yyyy';
    }
    return formatFromLocale;
  }
  const currentFormat = toRef(() => {
    return DateFormatSpec.canBeParsed(props.inputFormat) ? DateFormatSpec.parse(props.inputFormat) : DateFormatSpec.parse(inferFromLocale());
  });
  function parseDate(dateString) {
    function parseDateParts(text) {
      const parts = text.trim().split(currentFormat.value.separator);
      return {
        y: Number(parts[currentFormat.value.order.indexOf('y')]),
        m: Number(parts[currentFormat.value.order.indexOf('m')]),
        d: Number(parts[currentFormat.value.order.indexOf('d')])
      };
    }
    function validateDateParts(dateParts) {
      const {
        y: year,
        m: month,
        d: day
      } = dateParts;
      if (!year || !month || !day) return null;
      if (month < 1 || month > 12) return null;
      if (day < 1 || day > 31) return null;
      return {
        year: autoFixYear(year),
        month,
        day
      };
    }
    function autoFixYear(year) {
      const currentYear = adapter.getYear(adapter.date());
      if (year > 100 || currentYear % 100 >= 50) {
        return year;
      }
      const currentCentury = ~~(currentYear / 100) * 100;
      return year < 50 ? currentCentury + year : currentCentury - 100 + year;
    }
    const dateParts = parseDateParts(dateString);
    const validatedParts = validateDateParts(dateParts);
    if (!validatedParts) return null;
    const {
      year,
      month,
      day
    } = validatedParts;
    const pad = v => String(v).padStart(2, '0');
    return adapter.parseISO(`${year}-${pad(month)}-${pad(day)}`);
  }
  function isValid(text) {
    return !!parseDate(text);
  }
  function formatDate(value) {
    const parts = adapter.toISO(value).split('T')[0].split('-');
    return currentFormat.value.order.split('').map(sign => parts['ymd'.indexOf(sign)]).join(currentFormat.value.separator);
  }
  return {
    isValid,
    parseDate,
    formatDate,
    parserFormat: toRef(() => currentFormat.value.format)
  };
}
//# sourceMappingURL=dateFormat.js.map