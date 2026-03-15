// Composables
import { useTimes } from "./times.js";
import { computeColor } from "../../../composables/color.js";
import { useDate } from "../../../composables/date/index.js";
import { provideLocale } from "../../../composables/locale.js"; // Utilities
import { computed } from 'vue';
import { createDayList, createNativeLocaleFormatter, getEndOfMonth, getEndOfWeek, getStartOfMonth, getStartOfWeek, getTimestampIdentifier, getWeekdaySkips, parseDate, parseTimestamp, validateTimestamp, validateWeekdays } from "../util/timestamp.js";
import { propsFactory } from "../../../util/index.js"; // Types
export const makeCalendarBaseProps = propsFactory({
  start: {
    type: [String, Number, Date],
    validate: validateTimestamp,
    default: () => parseDate(new Date()).date
  },
  end: {
    type: [String, Number, Date],
    validate: validateTimestamp
  },
  weekdays: {
    type: [Array, String],
    default: () => [0, 1, 2, 3, 4, 5, 6],
    validate: validateWeekdays
  },
  firstDayOfWeek: [Number, String],
  firstDayOfYear: [Number, String],
  weekdayFormat: {
    type: Function,
    default: null
  },
  dayFormat: {
    type: Function,
    default: null
  },
  locale: String,
  now: {
    type: String,
    validator: validateTimestamp
  },
  type: {
    type: String,
    default: 'month'
  }
}, 'VCalendar-base');
export function useCalendarBase(props) {
  const {
    times,
    updateTimes
  } = useTimes({
    now: props.now
  });
  const locale = provideLocale(props);
  const adapter = useDate();
  const parsedStart = computed(() => {
    if (props.type === 'month') {
      return getStartOfMonth(parseTimestamp(props.start, true));
    }
    return parseTimestamp(props.start, true);
  });
  const parsedEnd = computed(() => {
    const start = parsedStart.value;
    const end = props.end ? parseTimestamp(props.end) || start : start;
    const value = getTimestampIdentifier(end) < getTimestampIdentifier(start) ? start : end;
    if (props.type === 'month') {
      return getEndOfMonth(value);
    }
    return value;
  });
  const parsedValue = computed(() => {
    return validateTimestamp(props.modelValue) ? parseTimestamp(props.modelValue, true) : parsedStart.value || times.today;
  });
  const parsedWeekdays = computed(() => {
    const weekdays = Array.isArray(props.weekdays) ? props.weekdays : (props.weekdays || '').split(',').map(x => parseInt(x, 10));
    const first = adapter.toJsDate(adapter.startOfWeek(adapter.date(), props.firstDayOfWeek)).getDay();
    return [...weekdays.toSorted().filter(v => v >= first), ...weekdays.toSorted().filter(v => v < first)];
  });
  const effectiveWeekdays = computed(() => {
    const start = parsedValue.value;
    const days = parseInt(String(props.categoryDays)) || 1;
    switch (props.type) {
      case 'day':
        return [start.weekday];
      case '4day':
        return [start.weekday, (start.weekday + 1) % 7, (start.weekday + 2) % 7, (start.weekday + 3) % 7];
      case 'category':
        return Array.from({
          length: days
        }, (_, i) => (start.weekday + i) % 7);
      default:
        return parsedWeekdays.value;
    }
  });
  const weekdaySkips = computed(() => {
    return getWeekdaySkips(parsedWeekdays.value);
  });
  const days = computed(() => {
    return createDayList(parsedStart.value, parsedEnd.value, times.today, weekdaySkips.value);
  });
  const dayFormatter = computed(() => {
    if (props.dayFormat) {
      return props.dayFormat;
    }
    return createNativeLocaleFormatter(locale.current.value, () => ({
      timeZone: 'UTC',
      day: 'numeric'
    }));
  });
  const weekdayFormatter = computed(() => {
    if (props.weekdayFormat) {
      return props.weekdayFormat;
    }
    return createNativeLocaleFormatter(locale.current.value, (_tms, short) => ({
      timeZone: 'UTC',
      weekday: short ? 'short' : 'long'
    }));
  });
  function getColorProps(colors) {
    return computeColor(colors);
  }
  function getRelativeClasses(timestamp) {
    let outside = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return {
      'v-present': timestamp.present,
      'v-past': timestamp.past,
      'v-future': timestamp.future,
      'v-outside': outside
    };
  }
  function getWeekNumber(timestamp) {
    return adapter.getWeek(adapter.date(timestamp.date), props.firstDayOfWeek, props.firstDayOfYear);
  }
  function _getStartOfWeek(timestamp) {
    return getStartOfWeek(timestamp, parsedWeekdays.value, times.today);
  }
  function _getEndOfWeek(timestamp) {
    return getEndOfWeek(timestamp, parsedWeekdays.value, times.today);
  }
  function getFormatter(options) {
    return createNativeLocaleFormatter(locale.current.value, () => options);
  }
  return {
    times,
    locale,
    parsedValue,
    parsedWeekdays,
    effectiveWeekdays,
    weekdaySkips,
    parsedStart,
    parsedEnd,
    days,
    dayFormatter,
    weekdayFormatter,
    getColorProps,
    getRelativeClasses,
    getWeekNumber,
    getStartOfWeek: _getStartOfWeek,
    getEndOfWeek: _getEndOfWeek,
    getFormatter,
    updateTimes
  };
}
//# sourceMappingURL=calendarBase.js.map