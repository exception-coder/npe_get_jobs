import { createElementVNode as _createElementVNode, mergeProps as _mergeProps, createVNode as _createVNode, normalizeStyle as _normalizeStyle, normalizeClass as _normalizeClass, withDirectives as _withDirectives } from "vue";
// Components
import { VIconBtn } from "../../labs/VIconBtn/index.js"; // Composables
import { makeCalendarBaseProps } from "./composables/calendarBase.js";
import { makeCalendarWithIntervalsProps, useCalendarWithIntervals } from "./composables/calendarWithIntervals.js"; // Directives
import vResize from "../../directives/resize/index.js"; // Utilities
import { nextTick, onMounted, ref } from 'vue';
import { convertToUnit, defineComponent, getPrefixedEventHandlers, noop, useRender } from "../../util/index.js"; // Types
export const VCalendarDaily = defineComponent({
  name: 'VCalendarDaily',
  directives: {
    vResize
  },
  props: {
    color: String,
    shortWeekdays: {
      type: Boolean,
      default: true
    },
    shortIntervals: {
      type: Boolean,
      default: true
    },
    hideHeader: Boolean,
    ...makeCalendarBaseProps(),
    ...makeCalendarWithIntervalsProps()
  },
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const scrollPush = ref(0);
    const pane = ref();
    const base = useCalendarWithIntervals(props);
    function init() {
      nextTick(onResize);
    }
    function onResize() {
      scrollPush.value = getScrollPush();
    }
    function getScrollPush() {
      return base.scrollAreaRef.value && pane.value ? base.scrollAreaRef.value.offsetWidth - pane.value.offsetWidth : 0;
    }
    function genHead() {
      return _createElementVNode("div", {
        "class": "v-calendar-daily__head",
        "style": {
          marginRight: scrollPush.value + 'px'
        }
      }, [genHeadIntervals(), genHeadDays()]);
    }
    function genHeadIntervals() {
      const width = convertToUnit(props.intervalWidth);
      return _createElementVNode("div", {
        "class": "v-calendar-daily__intervals-head",
        "style": {
          width
        }
      }, [slots['interval-header']?.()]);
    }
    function genHeadDays() {
      return base.days.value.map(genHeadDay);
    }
    function genHeadDay(day, index) {
      const events = getPrefixedEventHandlers(attrs, ':day', nativeEvent => ({
        nativeEvent,
        ...base.getSlotScope(day)
      }));
      return _createElementVNode("div", _mergeProps({
        "key": day.date,
        "class": ['v-calendar-daily_head-day', base.getRelativeClasses(day)]
      }, events), [genHeadWeekday(day), genHeadDayLabel(day), genDayHeader(day, index)]);
    }
    function genDayHeader(day, index) {
      return slots['day-header']?.({
        week: base.days.value,
        ...day,
        index
      }) ?? [];
    }
    function genHeadWeekday(day) {
      const color = day.present ? props.color : undefined;
      return _createElementVNode("div", _mergeProps(base.getColorProps({
        text: color
      }), {
        "class": "v-calendar-daily_head-weekday"
      }), [base.weekdayFormatter.value(day, props.shortWeekdays)]);
    }
    function genHeadDayLabel(day) {
      return _createElementVNode("div", {
        "class": "v-calendar-daily_head-day-label"
      }, [slots['day-label-header']?.(day) ?? genHeadDayButton(day)]);
    }
    function genHeadDayButton(day) {
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
        default: () => [base.dayFormatter.value(day, false)]
      });
    }
    function genBody() {
      return _createElementVNode("div", {
        "class": "v-calendar-daily__body"
      }, [genScrollArea()]);
    }
    function genScrollArea() {
      return _createElementVNode("div", {
        "ref": base.scrollAreaRef,
        "class": "v-calendar-daily__scroll-area"
      }, [genPane()]);
    }
    function genPane() {
      return _createElementVNode("div", {
        "ref": pane,
        "class": "v-calendar-daily__pane",
        "style": {
          height: convertToUnit(base.bodyHeight.value)
        }
      }, [genDayContainer()]);
    }
    function genDayContainer() {
      return _createElementVNode("div", {
        "class": "v-calendar-daily__day-container"
      }, [genBodyIntervals(), slots.days?.() ?? genDays()]);
    }
    function genDays() {
      return base.days.value.map((day, index) => {
        const events = getPrefixedEventHandlers(attrs, ':time', nativeEvent => ({
          nativeEvent,
          ...base.getSlotScope(base.getTimestampAtEvent(nativeEvent, day))
        }));
        return _createElementVNode("div", _mergeProps({
          "key": day.date,
          "class": ['v-calendar-daily__day', base.getRelativeClasses(day)]
        }, events), [genDayIntervals(index), genDayBody(day)]);
      });
    }
    function genDayBody(day) {
      return slots['day-body']?.(base.getSlotScope(day)) ?? [];
    }
    function genDayIntervals(index) {
      return base.intervals.value[index].map(genDayInterval);
    }
    function genDayInterval(interval) {
      const height = convertToUnit(props.intervalHeight);
      const styler = props.intervalStyle || base.intervalStyleDefault;
      return _createElementVNode("div", {
        "class": "v-calendar-daily__day-interval",
        "key": interval.time,
        "style": _normalizeStyle([{
          height
        }, styler(interval)])
      }, [slots.interval?.(base.getSlotScope(interval))]);
    }
    function genBodyIntervals() {
      const width = convertToUnit(props.intervalWidth);
      const events = getPrefixedEventHandlers(attrs, ':interval', nativeEvent => ({
        nativeEvent,
        ...base.getTimestampAtEvent(nativeEvent, base.parsedStart.value)
      }));
      return _createElementVNode("div", _mergeProps({
        "class": "v-calendar-daily__intervals-body",
        "style": {
          width
        }
      }, events), [genIntervalLabels()]);
    }
    function genIntervalLabels() {
      if (!base.intervals.value.length) return null;
      return base.intervals.value[0].map(genIntervalLabel);
    }
    function genIntervalLabel(interval) {
      const height = convertToUnit(props.intervalHeight);
      const short = props.shortIntervals;
      const shower = props.showIntervalLabel || base.showIntervalLabelDefault;
      const show = shower(interval);
      const label = show ? base.intervalFormatter.value(interval, short) : undefined;
      return _createElementVNode("div", {
        "key": interval.time,
        "class": "v-calendar-daily__interval",
        "style": {
          height
        }
      }, [_createElementVNode("div", {
        "class": "v-calendar-daily__interval-text"
      }, [label])]);
    }
    onMounted(init);
    useRender(() => _withDirectives(_createElementVNode("div", {
      "class": _normalizeClass(['v-calendar-daily', attrs.class]),
      "onDragstart": e => e.preventDefault()
    }, [!props.hideHeader ? genHead() : undefined, genBody()]), [[vResize, onResize, void 0, {
      quiet: true
    }]]));
    return {
      ...base,
      scrollPush,
      pane,
      init,
      onResize,
      getScrollPush
    };
  }
});
//# sourceMappingURL=VCalendarDaily.js.map