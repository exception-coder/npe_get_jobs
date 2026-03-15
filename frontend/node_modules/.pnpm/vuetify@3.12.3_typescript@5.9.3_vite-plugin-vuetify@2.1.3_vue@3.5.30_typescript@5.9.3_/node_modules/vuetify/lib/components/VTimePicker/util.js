// Types

export function pad(n) {
  let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return String(n).padStart(length, '0');
}
export function convert24to12(hour) {
  return hour ? (hour - 1) % 12 + 1 : 12;
}
export function convert12to24(hour, period) {
  return hour % 12 + (period === 'pm' ? 12 : 0);
}
export function extractInteger(v) {
  const digits = v.replaceAll(/\D/g, '');
  return digits.length > 0 ? Number(digits) : null;
}
export function incrementHour(hour, increment, period) {
  if (period) {
    if (hour === 12 && increment) {
      return {
        value: 1
      };
    }
    if (hour === 11 && increment) {
      return {
        value: 12,
        togglePeriod: true
      };
    }
    if (hour === 12 && !increment) {
      return {
        value: 11,
        togglePeriod: true
      };
    }
    if (hour === 1 && !increment) {
      return {
        value: 12
      };
    }
  } else {
    if (hour === 23 && increment) {
      return {
        value: 0
      };
    }
    if (hour === 0 && !increment) {
      return {
        value: 23
      };
    }
  }
  return {
    value: hour + (increment ? 1 : -1)
  };
}
export function incrementMinuteOrSecond(val, increment) {
  if (val === 59 && increment) return 0;
  if (val === 0 && !increment) return 59;
  return val + (increment ? 1 : -1);
}
//# sourceMappingURL=util.js.map