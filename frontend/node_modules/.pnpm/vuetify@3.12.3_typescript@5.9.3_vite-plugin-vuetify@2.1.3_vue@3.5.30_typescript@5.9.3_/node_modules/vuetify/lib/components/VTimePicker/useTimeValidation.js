// Utilities
import { computed } from 'vue';
import { incrementHour, incrementMinuteOrSecond } from "./util.js";
import { propsFactory } from "../../util/index.js"; // Types
export const makeTimeValidationProps = propsFactory({
  allowedHours: [Function, Array],
  allowedMinutes: [Function, Array],
  allowedSeconds: [Function, Array],
  max: String,
  min: String
}, 'time-validation');
export function useTimeValidation(props) {
  const isAllowedHour = computed(() => {
    const minHour = props.min ? Number(props.min.split(':')[0]) : 0;
    const maxHour = props.max ? Number(props.max.split(':')[0]) : 23;
    return val => {
      if (val < minHour) return false;
      if (val > maxHour) return false;
      if (Array.isArray(props.allowedHours)) return props.allowedHours.includes(val);
      if (typeof props.allowedHours === 'function') return props.allowedHours(val);
      return true;
    };
  });
  const isAllowedMinute = computed(() => {
    const [minHour, minMinute] = props.min ? props.min.split(':').map(Number) : [0, 0];
    const [maxHour, maxMinute] = props.max ? props.max.split(':').map(Number) : [23, 59];
    const minTime = minHour * 60 + minMinute;
    const maxTime = maxHour * 60 + maxMinute;
    return (hour24hr, val) => {
      if (hour24hr !== null) {
        const time = 60 * hour24hr + val;
        if (time < minTime) return false;
        if (time > maxTime) return false;
      }
      if (Array.isArray(props.allowedMinutes)) return props.allowedMinutes.includes(val);
      if (typeof props.allowedMinutes === 'function') return props.allowedMinutes(val);
      return true;
    };
  });
  const isAllowedSecond = computed(() => {
    const [minHour, minMinute, minSecond] = props.min ? props.min.split(':').map(Number) : [0, 0, 0];
    const [maxHour, maxMinute, maxSecond] = props.max ? props.max.split(':').map(Number) : [23, 59, 59];
    const minTime = minHour * 3600 + minMinute * 60 + (minSecond || 0);
    const maxTime = maxHour * 3600 + maxMinute * 60 + (maxSecond || 0);
    return (hour24hr, minute, val) => {
      if (hour24hr !== null && minute !== null) {
        const time = 3600 * hour24hr + 60 * minute + val;
        if (time < minTime) return false;
        if (time > maxTime) return false;
      }
      if (Array.isArray(props.allowedSeconds)) return props.allowedSeconds.includes(val);
      if (typeof props.allowedSeconds === 'function') return props.allowedSeconds(val);
      return true;
    };
  });
  function findNextAllowed(type, value, increment) {
    let currentHour = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    let currentMinute = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    const isAllowed = type === 'hour' ? isAllowedHour.value : type === 'minute' ? v => isAllowedMinute.value(currentHour, v) : v => isAllowedSecond.value(currentHour, currentMinute, v);
    const nextValue = type === 'hour' ? v => incrementHour(v, increment, null).value : v => incrementMinuteOrSecond(v, increment);
    const limit = type === 'hour' ? 24 : 60;
    for (let i = 1; i <= limit; i++) {
      value = nextValue(value);
      if (isAllowed(value)) break;
    }
    return value;
  }
  return {
    isAllowedHour,
    isAllowedMinute,
    isAllowedSecond,
    findNextAllowed
  };
}
//# sourceMappingURL=useTimeValidation.js.map