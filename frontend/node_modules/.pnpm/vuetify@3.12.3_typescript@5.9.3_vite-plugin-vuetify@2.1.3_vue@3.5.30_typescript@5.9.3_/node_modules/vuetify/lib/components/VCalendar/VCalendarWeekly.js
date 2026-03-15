import { createElementVNode as _createElementVNode, mergeProps as _mergeProps, createVNode as _createVNode, normalizeClass as _normalizeClass } from "vue";
// Components
import { VIconBtn } from "../../labs/VIconBtn/index.js"; // Composables
import { makeCalendarBaseProps, useCalendarBase } from "./composables/calendarBase.js";
import { useTheme } from "../../composables/index.js"; // Utilities
import { computed } from 'vue';
import { createDayList, createNativeLocaleFormatter, getDayIdentifier, validateNumber } from "./util/timestamp.js";
import { defineComponent, getPrefixedEventHandlers, noop, useRender } from "../../util/index.js"; // Types
export const VCalendarWeekly = defineComponent({
  name: 'VCalendarWeekly',
  props: {
    minWeeks: {
      validate: validateNumber,
      default: 1
    },
    monthFormat: Function,
    showWeek: Boolean,
    color: String,
    shortWeekdays: {
      type: Boolean,
      default: true
    },
    showMonthOnFirst: {
      type: Boolean,
      default: true
    },
    shortMonths: {
      type: Boolean,
      default: true
    },
    hideHeader: Boolean,
    ...makeCalendarBaseProps()
  },
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const base = useCalendarBase(props);
    const theme = useTheme();
    const parsedMinWeeks = computed(() => {
      return parseInt(String(props.minWeeks));
    });
    const days = computed(() => {
      const minDays = parsedMinWeeks.value * base.parsedWeekdays.value.length;
      const start = base.getStartOfWeek(base.parsedStart.value);
      const end = base.getEndOfWeek(base.parsedEnd.value);
      return createDayList(start, end, base.times.today, base.weekdaySkips.value, Number.MAX_SAFE_INTEGER, minDays);
    });
    const todayWeek = computed(() => {
      const today = base.times.today;
      const start = base.getStartOfWeek(today);
      const end = base.getEndOfWeek(today);
      return createDayList(start, end, today, base.weekdaySkips.value, base.parsedWeekdays.value.length, base.parsedWeekdays.value.length);
    });
    const monthFormatter = computed(() => {
      if (props.monthFormat) {
        // TODO: what happens when this is a string?
        return props.monthFormat;
      }
      return createNativeLocaleFormatter(base.locale.current.value, (_tms, short) => ({
        timeZone: 'UTC',
        month: short ? 'short' : 'long'
      }));
    });
    function isOutside(day) {
      const dayIdentifier = getDayIdentifier(day);
      return dayIdentifier < getDayIdentifier(base.parsedStart.value) || dayIdentifier > getDayIdentifier(base.parsedEnd.value);
    }
    function genHead() {
      return _createElementVNode("div", {
        "class": "v-calendar-weekly__head",
        "role": "row"
      }, [genHeadDays()]);
    }
    function genHeadDays() {
      const header = todayWeek.value.map(genHeadDay);
      if (props.showWeek) {
        header.unshift(_createElementVNode("div", {
          "class": "v-calendar-weekly__head-weeknumber"
        }, null));
      }
      return header;
    }
    function genHeadDay(day, index) {
      const outside = isOutside(days.value[index]);
      const color = day.present ? props.color : undefined;
      return _createElementVNode("div", _mergeProps(base.getColorProps({
        text: color
      }), {
        "key": day.date,
        "class": ['v-calendar-weekly__head-weekday', base.getRelativeClasses(day, outside)],
        "role": "columnheader"
      }), [base.weekdayFormatter.value(day, props.shortWeekdays)]);
    }
    function genWeeks() {
      const daysValue = days.value;
      const weekDays = base.parsedWeekdays.value.length;
      const weeks = [];
      for (let i = 0; i < daysValue.length; i += weekDays) {
        weeks.push(genWeek(daysValue.slice(i, i + weekDays), getWeekNumber(daysValue[i])));
      }
      return weeks;
    }
    function genWeek(week, weekNumber) {
      const weekNodes = week.map((day, index) => genDay(day, index, week));
      if (props.showWeek) {
        weekNodes.unshift(genWeekNumber(weekNumber));
      }
      return _createElementVNode("div", {
        "key": week[0].date,
        "class": "v-calendar-weekly__week",
        "role": "row"
      }, [weekNodes]);
    }
    function getWeekNumber(determineDay) {
      return base.getWeekNumber(determineDay);
    }
    function genWeekNumber(weekNumber) {
      return _createElementVNode("div", {
        "class": "v-calendar-weekly__weeknumber"
      }, [_createElementVNode("small", null, [String(weekNumber)])]);
    }
    function genDay(day, index, week) {
      const outside = isOutside(day);
      const events = getPrefixedEventHandlers(attrs, ':day', nativeEvent => {
        return {
          nativeEvent,
          ...day
        };
      });
      return _createElementVNode("div", _mergeProps({
        "key": day.date,
        "class": ['v-calendar-weekly__day', base.getRelativeClasses(day, outside)],
        "role": "cell"
      }, events), [genDayLabel(day), slots.day?.({
        outside,
        index,
        week,
        ...day
      })]);
    }
    function genDayLabel(day) {
      return _createElementVNode("div", {
        "class": "v-calendar-weekly__day-label"
      }, [slots['day-label']?.(day) ?? genDayLabelButton(day)]);
    }
    function genDayLabelButton(day) {
      const hasMonth = day.day === 1 && props.showMonthOnFirst;
      const events = getPrefixedEventHandlers(attrs, ':date', nativeEvent => ({
        nativeEvent,
        ...day
      }));
      return _createVNode(VIconBtn, _mergeProps({
        "active": day.present,
        "activeColor": props.color,
        "variant": "outlined",
        "baseVariant": "text",
        "onUpdate:active": noop
      }, events), {
        default: () => [hasMonth ? monthFormatter.value(day, props.shortMonths) + ' ' + base.dayFormatter.value(day, false) : base.dayFormatter.value(day, false)]
      });
    }
    useRender(() => _createElementVNode("div", {
      "class": _normalizeClass(['v-calendar-weekly', theme.themeClasses.value]),
      "onDragstart": e => e.preventDefault()
    }, [!props.hideHeader ? genHead() : undefined, genWeeks()]));
    return {
      ...base,
      days,
      todayWeek,
      monthFormatter,
      isOutside
    };
  }
});
//# sourceMappingURL=VCalendarWeekly.js.map