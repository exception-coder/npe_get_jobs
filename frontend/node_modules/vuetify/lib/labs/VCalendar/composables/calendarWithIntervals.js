// Composables
import { useCalendarBase } from "./calendarBase.js"; // Utilities
import { computed, shallowRef } from 'vue';
import { copyTimestamp, createDayList, createIntervalList, createNativeLocaleFormatter, MINUTES_IN_DAY, parseTime, updateMinutes, validateNumber, validateTime } from "../util/timestamp.js";
import { propsFactory } from "../../../util/index.js"; // Types
export const makeCalendarWithIntervalsProps = propsFactory({
  maxDays: {
    type: Number,
    default: 7
  },
  intervalHeight: {
    type: [Number, String],
    default: 48,
    validate: validateNumber
  },
  intervalWidth: {
    type: [Number, String],
    default: 60,
    validate: validateNumber
  },
  intervalMinutes: {
    type: [Number, String],
    default: 60,
    validate: validateNumber
  },
  firstInterval: {
    type: [Number, String],
    default: 0,
    validate: validateNumber
  },
  firstTime: {
    type: [Number, String, Object],
    validate: validateTime
  },
  intervalCount: {
    type: [Number, String],
    default: 24,
    validate: validateNumber
  },
  intervalFormat: {
    type: Function,
    default: null
  },
  intervalStyle: {
    type: Function,
    default: null
  },
  showIntervalLabel: {
    type: Function,
    default: null
  }
}, 'VCalendar-intervals');
export function useCalendarWithIntervals(props) {
  const base = useCalendarBase(props);
  const scrollAreaRef = shallowRef();
  const parsedFirstInterval = computed(() => {
    return parseInt(String(props.firstInterval || 0));
  });
  const parsedIntervalMinutes = computed(() => {
    return parseInt(String(props.intervalMinutes || 60));
  });
  const parsedIntervalCount = computed(() => {
    return parseInt(String(props.intervalCount || 24));
  });
  const parsedIntervalHeight = computed(() => {
    return parseFloat(String(props.intervalHeight || 48));
  });
  const parsedFirstTime = computed(() => {
    return parseTime(props.firstTime);
  });
  const firstMinute = computed(() => {
    const time = parsedFirstTime.value;
    return time !== false && time >= 0 && time <= MINUTES_IN_DAY ? time : parsedFirstInterval.value * parsedIntervalMinutes.value;
  });
  const bodyHeight = computed(() => {
    return parsedIntervalCount.value * parsedIntervalHeight.value;
  });
  const days = computed(() => {
    return createDayList(base.parsedStart.value, base.parsedEnd.value, base.times.today, base.weekdaySkips.value, props.maxDays);
  });
  const intervals = computed(() => {
    const daysValue = days.value;
    const first = firstMinute.value;
    const minutes = parsedIntervalMinutes.value;
    const count = parsedIntervalCount.value;
    const now = base.times.now;
    return daysValue.map(d => createIntervalList(d, first, minutes, count, now));
  });
  const intervalFormatter = computed(() => {
    if (props.intervalFormat) {
      return props.intervalFormat;
    }
    return createNativeLocaleFormatter(base.locale.current.value, (tms, short) => !short ? {
      timeZone: 'UTC',
      hour: '2-digit',
      minute: '2-digit'
    } : tms.minute === 0 ? {
      timeZone: 'UTC',
      hour: 'numeric'
    } : {
      timeZone: 'UTC',
      hour: 'numeric',
      minute: '2-digit'
    });
  });
  function showIntervalLabelDefault(interval) {
    const first = intervals.value[0][0];
    const isFirst = first.hour === interval.hour && first.minute === interval.minute;
    return !isFirst;
  }
  function intervalStyleDefault(_interval) {
    return undefined;
  }
  function getTimestampAtEvent(e, day) {
    const timestamp = copyTimestamp(day);
    const bounds = e.currentTarget.getBoundingClientRect();
    const baseMinutes = firstMinute.value;
    const touchEvent = e;
    const mouseEvent = e;
    const touches = touchEvent.changedTouches || touchEvent.touches;
    const clientY = touches && touches[0] ? touches[0].clientY : mouseEvent.clientY;
    const addIntervals = (clientY - bounds.top) / parsedIntervalHeight.value;
    const addMinutes = Math.floor(addIntervals * parsedIntervalMinutes.value);
    const minutes = baseMinutes + addMinutes;
    return updateMinutes(timestamp, minutes, base.times.now);
  }
  function getSlotScope(timestamp) {
    const scope = copyTimestamp(timestamp);
    scope.timeToY = timeToY;
    scope.timeDelta = timeDelta;
    scope.minutesToPixels = minutesToPixels;
    scope.week = days.value;
    return scope;
  }
  function scrollToTime(time) {
    const y = timeToY(time);
    const pane = scrollAreaRef.value;
    if (y === false || !pane) {
      return false;
    }
    pane.scrollTop = y;
    return true;
  }
  function minutesToPixels(minutes) {
    return minutes / parsedIntervalMinutes.value * parsedIntervalHeight.value;
  }
  function timeToY(time) {
    let clamp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    let y = timeDelta(time);
    if (y !== false) {
      y *= bodyHeight.value;
      if (clamp) {
        if (y < 0) {
          y = 0;
        }
        if (y > bodyHeight.value) {
          y = bodyHeight.value;
        }
      }
    }
    return y;
  }
  function timeDelta(time) {
    const minutes = parseTime(time);
    if (minutes === false) {
      return false;
    }
    const min = firstMinute.value;
    const gap = parsedIntervalCount.value * parsedIntervalMinutes.value;
    return (minutes - min) / gap;
  }
  return {
    ...base,
    scrollAreaRef,
    parsedFirstInterval,
    parsedIntervalMinutes,
    parsedIntervalCount,
    parsedIntervalHeight,
    parsedFirstTime,
    firstMinute,
    bodyHeight,
    days,
    intervals,
    intervalFormatter,
    showIntervalLabelDefault,
    intervalStyleDefault,
    getTimestampAtEvent,
    getSlotScope,
    scrollToTime,
    minutesToPixels,
    timeToY,
    timeDelta
  };
}
//# sourceMappingURL=calendarWithIntervals.js.map