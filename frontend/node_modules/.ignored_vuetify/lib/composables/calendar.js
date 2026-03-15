// Composables
import { useDate } from "./date/date.js";
import { useProxiedModel } from "./proxiedModel.js"; // Utilities
import { computed } from 'vue';
import { propsFactory, wrapInArray } from "../util/index.js"; // Types
// Types
// Composables
export const makeCalendarProps = propsFactory({
  allowedDates: [Array, Function],
  disabled: {
    type: Boolean,
    default: null
  },
  displayValue: null,
  modelValue: Array,
  month: [Number, String],
  max: null,
  min: null,
  showAdjacentMonths: Boolean,
  year: [Number, String],
  weekdays: {
    type: Array,
    default: () => [0, 1, 2, 3, 4, 5, 6]
  },
  weeksInMonth: {
    type: String,
    default: 'dynamic'
  },
  firstDayOfWeek: {
    type: [Number, String],
    default: undefined
  },
  firstDayOfYear: {
    type: [Number, String],
    default: undefined
  },
  weekdayFormat: String
}, 'calendar');
export function useCalendar(props) {
  const adapter = useDate();
  const model = useProxiedModel(props, 'modelValue', [], v => wrapInArray(v).map(i => adapter.date(i)));
  const displayValue = computed(() => {
    if (props.displayValue) return adapter.date(props.displayValue);
    if (model.value.length > 0) return adapter.date(model.value[0]);
    if (props.min) return adapter.date(props.min);
    if (Array.isArray(props.allowedDates)) return adapter.date(props.allowedDates[0]);
    return adapter.date();
  });
  const year = useProxiedModel(props, 'year', undefined, v => {
    const value = v != null ? Number(v) : adapter.getYear(displayValue.value);
    return adapter.startOfYear(adapter.setYear(adapter.date(), value));
  }, v => adapter.getYear(v));
  const month = useProxiedModel(props, 'month', undefined, v => {
    const value = v != null ? Number(v) : adapter.getMonth(displayValue.value);
    const date = adapter.setYear(adapter.startOfMonth(adapter.date()), adapter.getYear(year.value));
    return adapter.setMonth(date, value);
  }, v => adapter.getMonth(v));
  const weekdayLabels = computed(() => {
    const firstDayOfWeek = adapter.toJsDate(adapter.startOfWeek(adapter.date(), props.firstDayOfWeek)).getDay();
    return adapter.getWeekdays(props.firstDayOfWeek, props.weekdayFormat).filter((_, i) => props.weekdays.includes((i + firstDayOfWeek) % 7));
  });
  const weeksInMonth = computed(() => {
    const weeks = adapter.getWeekArray(month.value, props.firstDayOfWeek);
    const days = weeks.flat();

    // Make sure there's always 6 weeks in month (6 * 7 days)
    // if weeksInMonth is 'static'
    const daysInMonth = 6 * 7;
    if (props.weeksInMonth === 'static' && days.length < daysInMonth) {
      const lastDay = days[days.length - 1];
      let week = [];
      for (let day = 1; day <= daysInMonth - days.length; day++) {
        week.push(adapter.addDays(lastDay, day));
        if (day % 7 === 0) {
          weeks.push(week);
          week = [];
        }
      }
    }
    return weeks;
  });
  function genDays(days, today) {
    return days.filter(date => {
      return props.weekdays.includes(adapter.toJsDate(date).getDay());
    }).map((date, index) => {
      const isoDate = adapter.toISO(date);
      const isAdjacent = !adapter.isSameMonth(date, month.value);
      const isStart = adapter.isSameDay(date, adapter.startOfMonth(month.value));
      const isEnd = adapter.isSameDay(date, adapter.endOfMonth(month.value));
      const isSame = adapter.isSameDay(date, month.value);
      const weekdaysCount = props.weekdays.length;
      return {
        date,
        formatted: adapter.format(date, 'keyboardDate'),
        isAdjacent,
        isDisabled: isDisabled(date),
        isEnd,
        isHidden: isAdjacent && !props.showAdjacentMonths,
        isSame,
        isSelected: model.value.some(value => adapter.isSameDay(date, value)),
        isStart,
        isToday: adapter.isSameDay(date, today),
        isWeekEnd: index % weekdaysCount === weekdaysCount - 1,
        isWeekStart: index % weekdaysCount === 0,
        isoDate,
        localized: adapter.format(date, 'dayOfMonth'),
        month: adapter.getMonth(date),
        year: adapter.getYear(date)
      };
    });
  }
  const daysInWeek = computed(() => {
    const lastDay = adapter.startOfWeek(displayValue.value, props.firstDayOfWeek);
    const week = [];
    for (let day = 0; day <= 6; day++) {
      week.push(adapter.addDays(lastDay, day));
    }
    const today = adapter.date();
    return genDays(week, today);
  });
  const daysInMonth = computed(() => {
    const days = weeksInMonth.value.flat();
    const today = adapter.date();
    return genDays(days, today);
  });
  const weekNumbers = computed(() => {
    return weeksInMonth.value.map(week => {
      return week.length ? adapter.getWeek(week[0], props.firstDayOfWeek, props.firstDayOfYear) : null;
    });
  });
  const {
    minDate,
    maxDate
  } = useCalendarRange(props);
  function isDisabled(value) {
    if (props.disabled) return true;
    const date = adapter.date(value);
    if (minDate.value && adapter.isBefore(adapter.endOfDay(date), minDate.value)) return true;
    if (maxDate.value && adapter.isAfter(date, maxDate.value)) return true;
    if (Array.isArray(props.allowedDates) && props.allowedDates.length > 0) {
      return !props.allowedDates.some(d => adapter.isSameDay(adapter.date(d), date));
    }
    if (typeof props.allowedDates === 'function') {
      return !props.allowedDates(date);
    }
    return false;
  }
  return {
    displayValue,
    daysInMonth,
    daysInWeek,
    genDays,
    model,
    weeksInMonth,
    weekdayLabels,
    weekNumbers
  };
}
export function useCalendarRange(props) {
  const adapter = useDate();
  const minDate = computed(() => {
    if (!props.min) return null;
    const date = adapter.date(props.min);
    return adapter.isValid(date) ? date : null;
  });
  const maxDate = computed(() => {
    if (!props.max) return null;
    const date = adapter.date(props.max);
    return adapter.isValid(date) ? date : null;
  });
  function clampDate(date) {
    if (minDate.value && adapter.isBefore(date, minDate.value)) {
      return minDate.value;
    }
    if (maxDate.value && adapter.isAfter(date, maxDate.value)) {
      return maxDate.value;
    }
    return date;
  }
  function isInAllowedRange(date) {
    return (!minDate.value || adapter.isAfter(date, minDate.value)) && (!maxDate.value || adapter.isBefore(date, maxDate.value));
  }
  return {
    minDate,
    maxDate,
    clampDate,
    isInAllowedRange
  };
}
//# sourceMappingURL=calendar.js.map