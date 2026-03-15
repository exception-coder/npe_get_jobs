import { createElementVNode as _createElementVNode, createVNode as _createVNode, mergeProps as _mergeProps, Fragment as _Fragment } from "vue";
// Styles
import "./VDatePicker.css";

// Components
import { makeVDatePickerControlsProps, VDatePickerControls } from "./VDatePickerControls.js";
import { VDatePickerHeader } from "./VDatePickerHeader.js";
import { makeVDatePickerMonthProps, VDatePickerMonth } from "./VDatePickerMonth.js";
import { makeVDatePickerMonthsProps, VDatePickerMonths } from "./VDatePickerMonths.js";
import { makeVDatePickerYearsProps, VDatePickerYears } from "./VDatePickerYears.js";
import { VFadeTransition } from "../transitions/index.js";
import { VDefaultsProvider } from "../VDefaultsProvider/index.js";
import { makeVPickerProps, VPicker } from "../../labs/VPicker/VPicker.js"; // Composables
import { useCalendarRange } from "../../composables/calendar.js";
import { useDate } from "../../composables/date/index.js";
import { daysDiff } from "../../composables/date/date.js";
import { useLocale, useRtl } from "../../composables/locale.js";
import { useProxiedModel } from "../../composables/proxiedModel.js"; // Utilities
import { computed, shallowRef, toRef, watch } from 'vue';
import { genericComponent, omit, propsFactory, useRender, wrapInArray } from "../../util/index.js"; // Types
// Types
export const makeVDatePickerProps = propsFactory({
  // TODO: implement in v3.5
  // calendarIcon: {
  //   type: String,
  //   default: '$calendar',
  // },
  // keyboardIcon: {
  //   type: String,
  //   default: '$edit',
  // },
  // inputMode: {
  //   type: String as PropType<'calendar' | 'keyboard'>,
  //   default: 'calendar',
  // },
  // inputText: {
  //   type: String,
  //   default: '$vuetify.datePicker.input.placeholder',
  // },
  // inputPlaceholder: {
  //   type: String,
  //   default: 'dd/mm/yyyy',
  // },
  header: {
    type: String,
    default: '$vuetify.datePicker.header'
  },
  headerColor: String,
  ...makeVDatePickerControlsProps(),
  ...makeVDatePickerMonthProps({
    weeksInMonth: 'static'
  }),
  ...omit(makeVDatePickerMonthsProps(), ['modelValue']),
  ...omit(makeVDatePickerYearsProps(), ['modelValue']),
  ...makeVPickerProps({
    title: '$vuetify.datePicker.title'
  }),
  modelValue: null
}, 'VDatePicker');
export const VDatePicker = genericComponent()({
  name: 'VDatePicker',
  props: makeVDatePickerProps(),
  emits: {
    'update:modelValue': date => true,
    'update:month': date => true,
    'update:year': date => true,
    // 'update:inputMode': (date: any) => true,
    'update:viewMode': date => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const adapter = useDate();
    const {
      t
    } = useLocale();
    const {
      rtlClasses
    } = useRtl();
    const model = useProxiedModel(props, 'modelValue', undefined, v => wrapInArray(v).map(i => adapter.date(i)), v => props.multiple ? v : v[0]);
    const viewMode = useProxiedModel(props, 'viewMode');
    // const inputMode = useProxiedModel(props, 'inputMode')

    const {
      minDate,
      maxDate,
      clampDate
    } = useCalendarRange(props);
    const internal = computed(() => {
      const today = adapter.date();
      const value = model.value?.[0] ? adapter.date(model.value[0]) : clampDate(today);
      return value && adapter.isValid(value) ? value : today;
    });
    const headerColor = toRef(() => props.headerColor ?? props.color);
    const _month = useProxiedModel(props, 'month');
    const month = computed({
      get: () => Number(_month.value ?? adapter.getMonth(adapter.startOfMonth(internal.value))),
      set: v => _month.value = v
    });
    const _year = useProxiedModel(props, 'year');
    const year = computed({
      get: () => Number(_year.value ?? adapter.getYear(adapter.startOfYear(adapter.setMonth(internal.value, month.value)))),
      set: v => _year.value = v
    });
    const isReversing = shallowRef(false);
    const header = computed(() => {
      if (props.multiple && model.value.length > 1) {
        return t('$vuetify.datePicker.itemsSelected', model.value.length);
      }
      return model.value[0] && adapter.isValid(model.value[0]) ? adapter.format(adapter.date(model.value[0]), 'normalDateWithWeekday') : t(props.header);
    });
    const text = computed(() => {
      let date = adapter.date();
      date = adapter.setDate(date, 1);
      date = adapter.setMonth(date, month.value);
      date = adapter.setYear(date, year.value);
      return adapter.format(date, 'monthAndYear');
    });
    // const headerIcon = toRef(() => props.inputMode === 'calendar' ? props.keyboardIcon : props.calendarIcon)
    const headerTransition = toRef(() => `date-picker-header${isReversing.value ? '-reverse' : ''}-transition`);
    const disabled = computed(() => {
      if (props.disabled) return true;
      const targets = [];
      if (viewMode.value !== 'month') {
        targets.push(...['prev', 'next']);
      } else {
        let _date = adapter.date();
        _date = adapter.startOfMonth(_date);
        _date = adapter.setMonth(_date, month.value);
        _date = adapter.setYear(_date, year.value);
        if (minDate.value) {
          const date = adapter.addDays(adapter.startOfMonth(_date), -1);
          adapter.isAfter(minDate.value, date) && targets.push('prev');
        }
        if (maxDate.value) {
          const date = adapter.addDays(adapter.endOfMonth(_date), 1);
          adapter.isAfter(date, maxDate.value) && targets.push('next');
        }
      }
      return targets;
    });
    const allowedYears = computed(() => {
      return props.allowedYears || isYearAllowed;
    });
    const allowedMonths = computed(() => {
      return props.allowedMonths || isMonthAllowed;
    });
    function isAllowedInRange(start, end) {
      const allowedDates = props.allowedDates;
      if (typeof allowedDates !== 'function') return true;
      const days = 1 + daysDiff(adapter, start, end);
      for (let i = 0; i < days; i++) {
        if (allowedDates(adapter.addDays(start, i))) return true;
      }
      return false;
    }
    function isYearAllowed(year) {
      if (typeof props.allowedDates === 'function') {
        const startOfYear = adapter.parseISO(`${year}-01-01`);
        return isAllowedInRange(startOfYear, adapter.endOfYear(startOfYear));
      }
      if (Array.isArray(props.allowedDates) && props.allowedDates.length) {
        for (const date of props.allowedDates) {
          if (adapter.getYear(adapter.date(date)) === year) return true;
        }
        return false;
      }
      return true;
    }
    function isMonthAllowed(month) {
      if (typeof props.allowedDates === 'function') {
        const monthTwoDigits = String(month + 1).padStart(2, '0');
        const startOfMonth = adapter.parseISO(`${year.value}-${monthTwoDigits}-01`);
        return isAllowedInRange(startOfMonth, adapter.endOfMonth(startOfMonth));
      }
      if (Array.isArray(props.allowedDates) && props.allowedDates.length) {
        for (const date of props.allowedDates) {
          if (adapter.getYear(adapter.date(date)) === year.value && adapter.getMonth(adapter.date(date)) === month) return true;
        }
        return false;
      }
      return true;
    }

    // function onClickAppend () {
    //   inputMode.value = inputMode.value === 'calendar' ? 'keyboard' : 'calendar'
    // }

    function onClickNext() {
      if (month.value < 11) {
        month.value++;
      } else {
        year.value++;
        month.value = 0;
        onUpdateYear();
      }
      onUpdateMonth();
    }
    function onClickPrev() {
      if (month.value > 0) {
        month.value--;
      } else {
        year.value--;
        month.value = 11;
        onUpdateYear();
      }
      onUpdateMonth();
    }
    function onClickDate() {
      viewMode.value = 'month';
    }
    function onClickMonth() {
      viewMode.value = viewMode.value === 'months' ? 'month' : 'months';
    }
    function onClickYear() {
      viewMode.value = viewMode.value === 'year' ? 'month' : 'year';
    }
    function onUpdateMonth() {
      if (viewMode.value === 'months') onClickMonth();
    }
    function onUpdateYear() {
      if (viewMode.value === 'year') onClickYear();
    }
    watch(model, (val, oldVal) => {
      const arrBefore = wrapInArray(oldVal);
      const arrAfter = wrapInArray(val);
      if (!arrAfter.length) return;
      const before = adapter.date(arrBefore[arrBefore.length - 1]);
      const after = adapter.date(arrAfter[arrAfter.length - 1]);
      const newMonth = adapter.getMonth(after);
      const newYear = adapter.getYear(after);
      if (newMonth !== month.value) {
        month.value = newMonth;
        onUpdateMonth();
      }
      if (newYear !== year.value) {
        year.value = newYear;
        onUpdateYear();
      }
      isReversing.value = adapter.isBefore(before, after);
    });
    useRender(() => {
      const pickerProps = VPicker.filterProps(props);
      const datePickerControlsProps = VDatePickerControls.filterProps(props);
      const datePickerHeaderProps = VDatePickerHeader.filterProps(props);
      const datePickerMonthProps = VDatePickerMonth.filterProps(props);
      const datePickerMonthsProps = omit(VDatePickerMonths.filterProps(props), ['modelValue']);
      const datePickerYearsProps = omit(VDatePickerYears.filterProps(props), ['modelValue']);
      const headerProps = {
        color: headerColor.value,
        header: header.value,
        transition: headerTransition.value
      };
      return _createVNode(VPicker, _mergeProps(pickerProps, {
        "color": headerColor.value,
        "class": ['v-date-picker', `v-date-picker--${viewMode.value}`, {
          'v-date-picker--show-week': props.showWeek
        }, rtlClasses.value, props.class],
        "style": props.style
      }), {
        title: () => slots.title?.() ?? _createElementVNode("div", {
          "class": "v-date-picker__title"
        }, [t(props.title)]),
        header: () => slots.header ? _createVNode(VDefaultsProvider, {
          "defaults": {
            VDatePickerHeader: {
              ...headerProps
            }
          }
        }, {
          default: () => [slots.header?.(headerProps)]
        }) : _createVNode(VDatePickerHeader, _mergeProps({
          "key": "header"
        }, datePickerHeaderProps, headerProps, {
          "onClick": viewMode.value !== 'month' ? onClickDate : undefined
        }), {
          prepend: slots.prepend,
          append: slots.append
        }),
        default: () => _createElementVNode(_Fragment, null, [_createVNode(VDatePickerControls, _mergeProps(datePickerControlsProps, {
          "disabled": disabled.value,
          "text": text.value,
          "onClick:next": onClickNext,
          "onClick:prev": onClickPrev,
          "onClick:month": onClickMonth,
          "onClick:year": onClickYear
        }), null), _createVNode(VFadeTransition, {
          "hideOnLeave": true
        }, {
          default: () => [viewMode.value === 'months' ? _createVNode(VDatePickerMonths, _mergeProps({
            "key": "date-picker-months"
          }, datePickerMonthsProps, {
            "modelValue": month.value,
            "onUpdate:modelValue": [$event => month.value = $event, onUpdateMonth],
            "min": minDate.value,
            "max": maxDate.value,
            "year": year.value,
            "allowedMonths": allowedMonths.value
          }), {
            month: slots.month
          }) : viewMode.value === 'year' ? _createVNode(VDatePickerYears, _mergeProps({
            "key": "date-picker-years"
          }, datePickerYearsProps, {
            "modelValue": year.value,
            "onUpdate:modelValue": [$event => year.value = $event, onUpdateYear],
            "min": minDate.value,
            "max": maxDate.value,
            "allowedYears": allowedYears.value
          }), {
            year: slots.year
          }) : _createVNode(VDatePickerMonth, _mergeProps({
            "key": "date-picker-month"
          }, datePickerMonthProps, {
            "modelValue": model.value,
            "onUpdate:modelValue": $event => model.value = $event,
            "month": month.value,
            "onUpdate:month": [$event => month.value = $event, onUpdateMonth],
            "year": year.value,
            "onUpdate:year": [$event => year.value = $event, onUpdateYear],
            "min": minDate.value,
            "max": maxDate.value
          }), {
            day: slots.day
          })]
        })]),
        actions: slots.actions
      });
    });
    return {};
  }
});
//# sourceMappingURL=VDatePicker.js.map