import { createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, mergeProps as _mergeProps, withDirectives as _withDirectives } from "vue";
// Styles
import "./calendarWithEvents.css";

// Composables
import { useCalendarBase } from "./calendarBase.js"; // Directives
import vRipple from "../../../directives/ripple/index.js"; // Utilities
import { computed, ref } from 'vue';
import { CalendarEventOverlapModes } from "../modes/index.js";
import { isEventHiddenOn, isEventOn, isEventOnDay, isEventOverlapping, isEventStart, parseEvent } from "../util/events.js";
import { diffMinutes, getDayIdentifier } from "../util/timestamp.js";
import { getPrefixedEventHandlers, propsFactory } from "../../../util/index.js"; // Types
// Constants
const WIDTH_FULL = 100;
const WIDTH_START = 95;
// const MINUTES_IN_DAY = 1440

// Prevent import from being erased
void vRipple;
export const makeCalendarWithEventsProps = propsFactory({
  events: {
    type: Array,
    default: () => []
  },
  eventStart: {
    type: String,
    default: 'start'
  },
  eventEnd: {
    type: String,
    default: 'end'
  },
  eventTimed: {
    type: [String, Function],
    default: 'timed'
  },
  eventCategory: {
    type: [String, Function],
    default: 'category'
  },
  eventHeight: {
    type: Number,
    default: 20
  },
  eventColor: {
    type: [String, Function],
    default: 'primary'
  },
  eventTextColor: {
    type: [String, Function]
  },
  eventName: {
    type: [String, Function],
    default: 'name'
  },
  eventOverlapThreshold: {
    type: [String, Number],
    default: 60
  },
  eventOverlapMode: {
    type: [String, Function],
    default: 'stack',
    validate: mode => mode in CalendarEventOverlapModes || typeof mode === 'function'
  },
  eventMore: {
    type: Boolean,
    default: true
  },
  eventMoreText: {
    type: String,
    default: '$vuetify.calendar.moreEvents'
  },
  eventRipple: {
    type: [Boolean, Object],
    default: null
  },
  eventMarginBottom: {
    type: Number,
    default: 1
  }
}, 'VCalendar-events');
export function useCalendarWithEvents(props, slots, attrs) {
  const base = useCalendarBase(props);
  const noEvents = computed(() => {
    return !Array.isArray(props.events) || props.events.length === 0;
  });
  const categoryMode = computed(() => {
    return props.type === 'category';
  });
  const eventTimedFunction = computed(() => {
    return typeof props.eventTimed === 'function' ? props.eventTimed : event => !!event[props.eventTimed];
  });
  const eventCategoryFunction = computed(() => {
    return typeof props.eventCategory === 'function' ? props.eventCategory : event => event[props.eventCategory];
  });
  const parsedEvents = computed(() => {
    if (!props.events) return [];
    return props.events.map((event, index) => parseEvent(event, index, props.eventStart || '', props.eventEnd || '', eventTimedFunction.value(event), categoryMode.value ? eventCategoryFunction.value(event) : false));
  });
  const parsedEventOverlapThreshold = computed(() => {
    return parseInt(String(props.eventOverlapThreshold || 0));
  });
  const eventTextColorFunction = computed(() => {
    return typeof props.eventTextColor === 'function' ? props.eventTextColor : () => props.eventTextColor;
  });
  const eventNameFunction = computed(() => {
    return typeof props.eventName === 'function' ? props.eventName : (event, timedEvent) => event.input[props.eventName] || '';
  });
  const eventModeFunction = computed(() => {
    return typeof props.eventOverlapMode === 'function' ? props.eventOverlapMode : CalendarEventOverlapModes[props.eventOverlapMode];
  });
  const eventWeekdays = computed(() => {
    return base.effectiveWeekdays.value;
  });
  function eventColorFunction(e) {
    return typeof props.eventColor === 'function' ? props.eventColor(e) : e.color || props.eventColor;
  }
  const eventsRef = ref([]);
  function updateEventVisibility() {
    if (noEvents.value || !props.eventMore) {
      return;
    }
    const eventHeight = props.eventHeight || 0;
    const eventsMap = getEventsMap();
    for (const date in eventsMap) {
      const {
        parent,
        events,
        more
      } = eventsMap[date];
      if (!more) {
        break;
      }
      const parentBounds = parent.getBoundingClientRect();
      const last = events.length - 1;
      const eventsSorted = events.map(event => ({
        event,
        bottom: event.getBoundingClientRect().bottom
      })).sort((a, b) => a.bottom - b.bottom);
      let hidden = 0;
      for (let i = 0; i <= last; i++) {
        const bottom = eventsSorted[i].bottom;
        const hide = i === last ? bottom > parentBounds.bottom : bottom + eventHeight > parentBounds.bottom;
        if (hide) {
          eventsSorted[i].event.style.display = 'none';
          hidden++;
        }
      }

      // TODO: avoid direct DOM manipulation
      if (hidden) {
        more.style.display = '';
        more.innerHTML = base.locale.t(props.eventMoreText, hidden);
      } else {
        more.style.display = 'none';
      }
    }
  }
  function getEventsMap() {
    const eventsMap = {};
    const elements = eventsRef.value;
    if (!elements || !elements.length) {
      return eventsMap;
    }
    elements.forEach(el => {
      const date = el.getAttribute('data-date');
      if (el.parentElement && date) {
        if (!(date in eventsMap)) {
          eventsMap[date] = {
            parent: el.parentElement,
            more: null,
            events: []
          };
        }
        if (el.getAttribute('data-more')) {
          eventsMap[date].more = el;
        } else {
          eventsMap[date].events.push(el);
          el.style.display = '';
        }
      }
    });
    return eventsMap;
  }
  function genDayEvent(_ref, day) {
    let {
      event
    } = _ref;
    const eventHeight = props.eventHeight || 0;
    const eventMarginBottom = props.eventMarginBottom || 0;
    const dayIdentifier = getDayIdentifier(day);
    const week = day.week;
    const start = dayIdentifier === event.startIdentifier;
    let end = dayIdentifier === event.endIdentifier;
    let width = WIDTH_START;
    if (!categoryMode.value) {
      for (let i = day.index + 1; i < week.length; i++) {
        const weekdayIdentifier = getDayIdentifier(week[i]);
        if (event.endIdentifier >= weekdayIdentifier) {
          width += WIDTH_FULL;
          end = end || weekdayIdentifier === event.endIdentifier;
        } else {
          end = true;
          break;
        }
      }
    }
    const scope = {
      eventParsed: event,
      day,
      start,
      end,
      timed: false
    };
    return genEvent(event, scope, false, {
      class: ['v-event', {
        'v-event-start': start,
        'v-event-end': end
      }],
      style: {
        height: `${eventHeight}px`,
        width: `${width}%`,
        marginBottom: `${eventMarginBottom}px`
      },
      'data-date': day.date
    });
  }
  function genTimedEvent(_ref2, day) {
    let {
      event,
      left,
      width
    } = _ref2;
    const startDelta = day.timeDelta(event.start, day);
    const endDelta = day.timeDelta(event.end, day);
    if (endDelta === false || startDelta === false || endDelta < 0 || startDelta >= 1 || isEventHiddenOn(event, day)) {
      return false;
    }
    const dayIdentifier = getDayIdentifier(day);
    const start = event.startIdentifier >= dayIdentifier;
    const end = event.endIdentifier > dayIdentifier;
    const top = day.timeToY(event.start, day);
    const bottom = day.timeToY(event.end, day);
    const height = Math.max(props.eventHeight || 0, bottom - top);
    const scope = {
      eventParsed: event,
      day,
      start,
      end,
      timed: true
    };
    return genEvent(event, scope, true, {
      class: 'v-event-timed',
      style: {
        top: `${top}px`,
        height: `${height}px`,
        left: `${left}%`,
        width: `${width}%`
      }
    });
  }
  function genEvent(event, scopeInput, timedEvent, data) {
    const slot = slots.event;
    const text = eventTextColorFunction.value(event.input);
    const background = eventColorFunction(event.input);
    const overlapsNoon = event.start.hour < 12 && event.end.hour >= 12;
    const singline = diffMinutes(event.start, event.end) <= parsedEventOverlapThreshold.value;
    const formatTime = (withTime, ampm) => {
      const formatter = base.getFormatter({
        timeZone: 'UTC',
        hour: 'numeric',
        minute: withTime.minute > 0 ? 'numeric' : undefined
      });
      return formatter(withTime, true);
    };
    const timeSummary = () => formatTime(event.start, overlapsNoon) + ' - ' + formatTime(event.end, true);
    const eventSummary = () => {
      const name = eventNameFunction.value(event, timedEvent);
      if (event.start.hasTime) {
        if (timedEvent) {
          const time = timeSummary();
          const delimiter = singline ? ', ' : _createElementVNode("br", null, null);
          return _createElementVNode("span", {
            "class": "v-event-summary"
          }, [_createElementVNode("strong", null, [name]), delimiter, time]);
        } else {
          const time = formatTime(event.start, true);
          return _createElementVNode("span", {
            "class": "v-event-summary"
          }, [_createElementVNode("strong", null, [time]), _createTextVNode(" "), name]);
        }
      }
      return _createElementVNode("span", {
        "class": "v-event-summary"
      }, [name]);
    };
    const scope = {
      ...scopeInput,
      event: event.input,
      outside: scopeInput.day.outside,
      singline,
      overlapsNoon,
      formatTime,
      timeSummary,
      eventSummary
    };
    const events = getPrefixedEventHandlers(attrs, ':event', nativeEvent => ({
      ...scope,
      nativeEvent
    }));
    return _withDirectives(_createElementVNode("div", _mergeProps(base.getColorProps({
      text,
      background
    }), events, data, {
      "ref_for": true,
      "ref": eventsRef
    }), [slot?.(scope) ?? genName(eventSummary)]), [[vRipple, props.eventRipple ?? true]]);
  }
  function genName(eventSummary) {
    return _createElementVNode("div", {
      "class": "pl-1"
    }, [eventSummary()]);
  }
  function genPlaceholder(day) {
    const height = (props.eventHeight || 0) + (props.eventMarginBottom || 0);
    return _createElementVNode("div", {
      "style": {
        height: `${height}px`
      },
      "data-date": day.date,
      "ref_for": true,
      "ref": eventsRef
    }, null);
  }
  function genMore(day) {
    const eventHeight = props.eventHeight || 0;
    const eventMarginBottom = props.eventMarginBottom || 0;
    const events = getPrefixedEventHandlers(attrs, ':more', nativeEvent => ({
      nativeEvent,
      ...day
    }));
    return _withDirectives(_createElementVNode("div", _mergeProps({
      "class": ['v-event-more pl-1', {
        'v-outside': day.outside
      }],
      "data-date": day.date,
      "data-more": "1",
      "style": {
        display: 'none',
        height: `${eventHeight}px`,
        marginBottom: `${eventMarginBottom}px`
      },
      "ref_for": true,
      "ref": eventsRef
    }, events), null), [[vRipple, props.eventRipple ?? true]]);
  }
  function getVisibleEvents() {
    const days = base.days.value;
    const start = getDayIdentifier(days[0]);
    const end = getDayIdentifier(days[days.length - 1]);
    return parsedEvents.value.filter(event => isEventOverlapping(event, start, end));
  }
  function isEventForCategory(event, category) {
    return !categoryMode.value || typeof category === 'object' && category.categoryName && category.categoryName === event.category || typeof event.category === 'string' && category === event.category || typeof event.category !== 'string' && category === null;
  }
  function getEventsForDay(day) {
    const identifier = getDayIdentifier(day);
    const firstWeekday = eventWeekdays.value[0];
    return parsedEvents.value.filter(event => isEventStart(event, day, identifier, firstWeekday));
  }
  function getEventsForDayAll(day) {
    const identifier = getDayIdentifier(day);
    const firstWeekday = eventWeekdays.value[0];
    return parsedEvents.value.filter(event => event.allDay && (categoryMode.value ? isEventOn(event, identifier) : isEventStart(event, day, identifier, firstWeekday)) && isEventForCategory(event, day.category));
  }
  function getEventsForDayTimed(day) {
    return parsedEvents.value.filter(event => !event.allDay && isEventOnDay(event, day, day.intervalRange) && isEventForCategory(event, day.category));
  }
  function getScopedSlots() {
    if (noEvents.value) {
      return {
        ...slots
      };
    }
    const mode = eventModeFunction.value(parsedEvents.value, eventWeekdays.value[0], parsedEventOverlapThreshold.value);
    const isNode = input => !!input;
    const getSlotChildren = (day, getter, mapper, timed) => {
      const events = getter(day);
      const visuals = mode(day, events, timed, categoryMode.value);
      if (timed) {
        return visuals.map(visual => mapper(visual, day)).filter(isNode);
      }
      const children = [];
      visuals.forEach((visual, index) => {
        while (children.length < visual.column) {
          children.push(genPlaceholder(day));
        }
        const mapped = mapper(visual, day);
        if (mapped) {
          children.push(mapped);
        }
      });
      return children;
    };
    return {
      ...slots,
      day: day => {
        let children = getSlotChildren(day, getEventsForDay, genDayEvent, false);
        if (children && children.length > 0 && props.eventMore) {
          children.push(genMore(day));
        }
        if (slots.day) {
          const slot = slots.day(day);
          if (slot) {
            children = children ? children.concat(slot) : slot;
          }
        }
        return children;
      },
      'day-header': day => {
        let children = getSlotChildren(day, getEventsForDayAll, genDayEvent, false);
        if (slots['day-header']) {
          const slot = slots['day-header'](day);
          if (slot) {
            children = children ? children.concat(slot) : slot;
          }
        }
        return children;
      },
      'day-body': day => {
        const events = getSlotChildren(day, getEventsForDayTimed, genTimedEvent, true);
        let children = [_createElementVNode("div", {
          "class": "v-event-timed-container"
        }, [events])];
        if (slots['day-body']) {
          const slot = slots['day-body'](day);
          if (slot) {
            children = children.concat(slot);
          }
        }
        return children;
      }
    };
  }
  return {
    ...base,
    noEvents,
    parsedEvents,
    parsedEventOverlapThreshold,
    eventTimedFunction,
    eventCategoryFunction,
    eventTextColorFunction,
    eventNameFunction,
    eventModeFunction,
    eventWeekdays,
    categoryMode,
    eventColorFunction,
    eventsRef,
    updateEventVisibility,
    getEventsMap,
    genDayEvent,
    genTimedEvent,
    genEvent,
    genName,
    genPlaceholder,
    genMore,
    getVisibleEvents,
    isEventForCategory,
    getEventsForDay,
    getEventsForDayAll,
    getEventsForDayTimed,
    getScopedSlots
  };
}
//# sourceMappingURL=calendarWithEvents.js.map