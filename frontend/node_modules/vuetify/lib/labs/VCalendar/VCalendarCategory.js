import { createElementVNode as _createElementVNode, mergeProps as _mergeProps, normalizeStyle as _normalizeStyle, createVNode as _createVNode } from "vue";
// Components
import { VCalendarDaily } from "./VCalendarDaily.js"; // Composables
import { makeCalendarBaseProps } from "./composables/calendarBase.js";
import { makeCalendarWithIntervalsProps, useCalendarWithIntervals } from "./composables/calendarWithIntervals.js"; // Utilities
import { computed } from 'vue';
import { getParsedCategories } from "./util/parser.js";
import { convertToUnit, defineComponent, getPrefixedEventHandlers, useRender } from "../../util/index.js"; // Types
export const VCalendarCategory = defineComponent({
  name: 'VCalendarCategory',
  props: {
    categories: {
      type: [Array, String],
      default: ''
    },
    categoryText: [String, Function],
    categoryForInvalid: {
      type: String,
      default: ''
    },
    ...makeCalendarBaseProps(),
    ...makeCalendarWithIntervalsProps()
  },
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const base = useCalendarWithIntervals(props);
    const parsedCategories = computed(() => {
      return getParsedCategories(props.categories, props.categoryText);
    });
    function getCategoryScope(scope, category) {
      const cat = typeof category === 'object' && category && category.categoryName === props.categoryForInvalid ? null : category;
      return {
        ...scope,
        category: cat
      };
    }
    function genDayHeader(scope) {
      return _createElementVNode("div", {
        "class": "v-calendar-category__columns"
      }, [parsedCategories.value.map(category => {
        return genDayHeaderCategory(scope, getCategoryScope(scope, category));
      })]);
    }
    function genDayHeaderCategory(day, scope) {
      const headerTitle = typeof scope.category === 'object' ? scope.category.categoryName : scope.category;
      const events = getPrefixedEventHandlers(attrs, ':dayCategory', () => {
        return getCategoryScope(base.getSlotScope(day) || day, scope.category);
      });
      return _createElementVNode("div", _mergeProps({
        "class": "v-calendar-category__column-header"
      }, events), [slots.category?.(scope) ?? genDayHeaderCategoryTitle(headerTitle), slots['day-header']?.(scope)]);
    }
    function genDayHeaderCategoryTitle(categoryName) {
      return _createElementVNode("div", {
        "class": "v-calendar-category__category"
      }, [categoryName === null ? props.categoryForInvalid : categoryName]);
    }
    function genDays() {
      const days = [];
      base.days.value.forEach((d, j) => {
        const day = new Array(parsedCategories.value.length || 1);
        day.fill(d);
        days.push(...day.map((v, i) => genDay(v, j, i)));
      });
      return days;
    }
    function genDay(day, index, categoryIndex) {
      const category = parsedCategories.value[categoryIndex];
      const events = getPrefixedEventHandlers(attrs, ':time', e => {
        return base.getSlotScope(base.getTimestampAtEvent(e, day));
      });
      return _createElementVNode("div", _mergeProps({
        "key": day.date + '-' + categoryIndex,
        "class": ['v-calendar-daily__day', base.getRelativeClasses(day)]
      }, events), [genDayIntervals(index, category), genDayBody(day, category)]);
    }
    function genDayIntervals(index, category) {
      return base.intervals.value[index].map(v => genDayInterval(v, category));
    }
    function genDayInterval(interval, category) {
      const height = convertToUnit(props.intervalHeight);
      const styler = props.intervalStyle || base.intervalStyleDefault;
      return _createElementVNode("div", {
        "key": interval.time,
        "class": "v-calendar-daily__day-interval",
        "style": _normalizeStyle([{
          height
        }, styler({
          ...interval,
          category
        })])
      }, [slots.interval?.(getCategoryScope(base.getSlotScope(interval), category))]);
    }
    function genDayBody(day, category) {
      return _createElementVNode("div", {
        "class": "v-calendar-category__columns"
      }, [genDayBodyCategory(day, category)]);
    }
    function genDayBodyCategory(day, category) {
      const events = getPrefixedEventHandlers(attrs, ':timeCategory', e => {
        return getCategoryScope(base.getSlotScope(base.getTimestampAtEvent(e, day)), category);
      });
      return _createElementVNode("div", _mergeProps({
        "class": "v-calendar-category__column"
      }, events), [slots['day-body']?.(getCategoryScope(base.getSlotScope(day), category))]);
    }
    useRender(() => _createVNode(VCalendarDaily, _mergeProps({
      "class": ['v-calendar-daily', 'v-calendar-category']
    }, props), {
      ...slots,
      days: genDays,
      'day-header': genDayHeader
    }));
    return {
      ...base,
      parsedCategories
    };
  }
});
//# sourceMappingURL=VCalendarCategory.js.map