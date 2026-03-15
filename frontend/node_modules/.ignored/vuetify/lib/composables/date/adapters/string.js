// Composables
import { VuetifyDateAdapter } from "./vuetify.js"; // Types
export class StringDateAdapter {
  constructor(options) {
    var _this = this;
    this.base = new VuetifyDateAdapter({
      locale: options.locale,
      formats: options.formats && Object.fromEntries(Object.entries(options.formats).map(_ref => {
        let [k, v] = _ref;
        return [k, typeof v === 'function' ? function (date) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          return v(_this.base.toISO(date), ...args);
        } : v];
      }))
    });
  }
  addDays(date, amount) {
    return this.base.toISO(this.base.addDays(this.base.date(date), amount));
  }
  addHours(date, amount) {
    return this.base.toISO(this.base.addHours(this.base.date(date), amount));
  }
  addMinutes(date, amount) {
    return this.base.toISO(this.base.addMinutes(this.base.date(date), amount));
  }
  addMonths(date, amount) {
    return this.base.toISO(this.base.addMonths(this.base.date(date), amount));
  }
  addWeeks(date, amount) {
    return this.base.toISO(this.base.addWeeks(this.base.date(date), amount));
  }
  date(value) {
    return this.base.toISO(this.base.date(value));
  }
  endOfDay(date) {
    return this.base.toISO(this.base.endOfDay(this.base.date(date)));
  }
  endOfMonth(date) {
    return this.base.toISO(this.base.endOfMonth(this.base.date(date)));
  }
  endOfWeek(date) {
    return this.base.toISO(this.base.endOfWeek(this.base.date(date)));
  }
  endOfYear(date) {
    return this.base.toISO(this.base.endOfYear(this.base.date(date)));
  }
  format(date, formatString) {
    return this.base.format(this.base.date(date), formatString);
  }
  getDate(date) {
    return this.base.getDate(this.base.date(date));
  }
  getDiff(date, comparing, unit) {
    return this.base.getDiff(this.base.date(date), comparing, unit);
  }
  getHours(date) {
    return this.base.getHours(this.base.date(date));
  }
  getMinutes(date) {
    return this.base.getMinutes(this.base.date(date));
  }
  getMonth(date) {
    return this.base.getMonth(this.base.date(date));
  }
  getWeek(date, firstDayOfWeek, firstDayOfYear) {
    return this.base.getWeek(this.base.date(date), firstDayOfWeek, firstDayOfYear);
  }
  getNextMonth(date) {
    return this.base.toISO(this.base.getNextMonth(this.base.date(date)));
  }
  getPreviousMonth(date) {
    return this.base.toISO(this.base.getPreviousMonth(this.base.date(date)));
  }
  getWeekArray(date, firstDayOfWeek) {
    return this.base.getWeekArray(this.base.date(date), firstDayOfWeek).map(week => {
      return week.map(day => {
        return this.base.toISO(day);
      });
    });
  }
  getWeekdays(firstDayOfWeek, weekdayFormat) {
    return this.base.getWeekdays(firstDayOfWeek, weekdayFormat);
  }
  getYear(date) {
    return this.base.getYear(this.base.date(date));
  }
  isAfter(date, comparing) {
    return this.base.isAfter(this.base.date(date), this.base.date(comparing));
  }
  isAfterDay(date, comparing) {
    return this.base.isAfterDay(this.base.date(date), this.base.date(comparing));
  }
  isBefore(date, comparing) {
    return this.base.isBefore(this.base.date(date), this.base.date(comparing));
  }
  isEqual(date, comparing) {
    return this.base.isEqual(this.base.date(date), this.base.date(comparing));
  }
  isSameDay(date, comparing) {
    return this.base.isSameDay(this.base.date(date), this.base.date(comparing));
  }
  isSameMonth(date, comparing) {
    return this.base.isSameMonth(this.base.date(date), this.base.date(comparing));
  }
  isSameYear(date, comparing) {
    return this.base.isSameYear(this.base.date(date), this.base.date(comparing));
  }
  isValid(date) {
    return this.base.isValid(date);
  }
  isWithinRange(date, range) {
    return this.base.isWithinRange(this.base.date(date), [this.base.date(range[0]), this.base.date(range[1])]);
  }
  parseISO(date) {
    return this.base.toISO(this.base.parseISO(date));
  }
  setDate(date, day) {
    return this.base.toISO(this.base.setDate(this.base.date(date), day));
  }
  setHours(date, hours) {
    return this.base.toISO(this.base.setHours(this.base.date(date), hours));
  }
  setMinutes(date, minutes) {
    return this.base.toISO(this.base.setMinutes(this.base.date(date), minutes));
  }
  setMonth(date, month) {
    return this.base.toISO(this.base.setMonth(this.base.date(date), month));
  }
  setYear(date, year) {
    return this.base.toISO(this.base.setYear(this.base.date(date), year));
  }
  startOfDay(date) {
    return this.base.toISO(this.base.startOfDay(this.base.date(date)));
  }
  startOfMonth(date) {
    return this.base.toISO(this.base.startOfMonth(this.base.date(date)));
  }
  startOfWeek(date, firstDayOfWeek) {
    return this.base.toISO(this.base.startOfWeek(this.base.date(date), firstDayOfWeek));
  }
  startOfYear(date) {
    return this.base.toISO(this.base.startOfYear(this.base.date(date)));
  }
  toISO(date) {
    return this.base.toISO(this.base.date(date));
  }
  toJsDate(value) {
    return this.base.date(value);
  }
}
//# sourceMappingURL=string.js.map