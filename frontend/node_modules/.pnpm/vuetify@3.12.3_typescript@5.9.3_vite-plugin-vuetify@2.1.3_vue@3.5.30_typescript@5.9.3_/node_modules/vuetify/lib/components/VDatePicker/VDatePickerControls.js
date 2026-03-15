import { createVNode as _createVNode, Fragment as _Fragment, createElementVNode as _createElementVNode, normalizeClass as _normalizeClass } from "vue";
// Styles
import "./VDatePickerControls.css";

// Components
import { VBtn } from "../VBtn/index.js";
import { VDefaultsProvider } from "../VDefaultsProvider/index.js";
import { VSpacer } from "../VGrid/index.js"; // Composables
import { IconValue } from "../../composables/icons.js";
import { useLocale } from "../../composables/locale.js"; // Utilities
import { computed } from 'vue';
import { convertToUnit, genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVDatePickerControlsProps = propsFactory({
  active: {
    type: [String, Array],
    default: undefined
  },
  controlHeight: [Number, String],
  controlVariant: {
    type: String,
    default: 'docked'
  },
  noMonthPicker: Boolean,
  disabled: {
    type: [Boolean, String, Array],
    default: null
  },
  nextIcon: {
    type: IconValue,
    default: '$next'
  },
  prevIcon: {
    type: IconValue,
    default: '$prev'
  },
  modeIcon: {
    type: IconValue,
    default: '$subgroup'
  },
  text: String,
  monthText: String,
  yearText: String,
  viewMode: {
    type: String,
    default: 'month'
  }
}, 'VDatePickerControls');
export const VDatePickerControls = genericComponent()({
  name: 'VDatePickerControls',
  props: makeVDatePickerControlsProps(),
  emits: {
    'click:year': () => true,
    'click:month': () => true,
    'click:prev': () => true,
    'click:next': () => true,
    'click:prev-year': () => true,
    'click:next-year': () => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const disableMonth = computed(() => {
      return Array.isArray(props.disabled) ? props.disabled.includes('text') : !!props.disabled;
    });
    const disableYear = computed(() => {
      return Array.isArray(props.disabled) ? props.disabled.includes('mode') : !!props.disabled;
    });
    const disablePrevMonth = computed(() => {
      return Array.isArray(props.disabled) ? props.disabled.includes('prev-month') : !!props.disabled;
    });
    const disableNextMonth = computed(() => {
      return Array.isArray(props.disabled) ? props.disabled.includes('next-month') : !!props.disabled;
    });
    const disablePrevYear = computed(() => {
      return Array.isArray(props.disabled) ? props.disabled.includes('prev-year') : !!props.disabled;
    });
    const disableNextYear = computed(() => {
      return Array.isArray(props.disabled) ? props.disabled.includes('next-year') : !!props.disabled;
    });
    function onClickPrevMonth() {
      emit('click:prev');
    }
    function onClickNextMonth() {
      emit('click:next');
    }
    function onClickPrevYear() {
      emit('click:prev-year');
    }
    function onClickNextYear() {
      emit('click:next-year');
    }
    function onClickYear() {
      emit('click:year');
    }
    function onClickMonth() {
      emit('click:month');
    }
    useRender(() => {
      const innerDefaults = {
        VBtn: {
          density: 'comfortable',
          variant: 'text'
        }
      };
      const prevMonth = _createVNode(VBtn, {
        "data-testid": "prev-month",
        "disabled": disablePrevMonth.value,
        "icon": props.prevIcon,
        "aria-label": t('$vuetify.datePicker.ariaLabel.previousMonth'),
        "onClick": onClickPrevMonth
      }, null);
      const nextMonth = _createVNode(VBtn, {
        "data-testid": "next-month",
        "disabled": disableNextMonth.value,
        "icon": props.nextIcon,
        "aria-label": t('$vuetify.datePicker.ariaLabel.nextMonth'),
        "onClick": onClickNextMonth
      }, null);
      const prevYear = _createVNode(VBtn, {
        "data-testid": "prev-year",
        "disabled": disablePrevYear.value,
        "icon": props.prevIcon,
        "aria-label": t('$vuetify.datePicker.ariaLabel.previousYear'),
        "onClick": onClickPrevYear
      }, null);
      const nextYear = _createVNode(VBtn, {
        "data-testid": "next-year",
        "disabled": disableNextYear.value,
        "icon": props.nextIcon,
        "aria-label": t('$vuetify.datePicker.ariaLabel.nextYear'),
        "onClick": onClickNextYear
      }, null);
      const onlyMonthBtn = _createVNode(VBtn, {
        "class": "v-date-picker-controls__only-month-btn",
        "data-testid": "month-btn",
        "density": "default",
        "disabled": disableMonth.value,
        "text": props.monthText,
        "appendIcon": props.modeIcon,
        "rounded": true,
        "aria-label": t('$vuetify.datePicker.ariaLabel.selectMonth'),
        "onClick": onClickMonth
      }, null);
      const onlyYearBtn = _createVNode(VBtn, {
        "class": "v-date-picker-controls__only-year-btn",
        "data-testid": "year-btn",
        "density": "default",
        "disabled": disableYear.value,
        "text": props.yearText,
        "appendIcon": props.modeIcon,
        "rounded": true,
        "aria-label": t('$vuetify.datePicker.ariaLabel.selectYear'),
        "onClick": onClickYear
      }, null);
      const monthYearBtn = _createVNode(VBtn, {
        "class": "v-date-picker-controls__year-btn",
        "data-testid": "year-btn",
        "density": "default",
        "disabled": disableYear.value,
        "text": props.text,
        "appendIcon": props.modeIcon,
        "rounded": true,
        "aria-label": t('$vuetify.datePicker.ariaLabel.selectYear'),
        "onClick": onClickYear
      }, null);
      const monthYearSplit = _createElementVNode(_Fragment, null, [_createVNode(VBtn, {
        "class": "v-date-picker-controls__month-btn",
        "data-testid": "month-btn",
        "height": "36",
        "disabled": disableMonth.value,
        "text": props.text,
        "rounded": true,
        "aria-label": t('$vuetify.datePicker.ariaLabel.selectMonth'),
        "onClick": onClickMonth
      }, null), _createVNode(VBtn, {
        "class": "v-date-picker-controls__mode-btn",
        "data-testid": "year-btn",
        "disabled": disableYear.value,
        "icon": props.modeIcon,
        "aria-label": t('$vuetify.datePicker.ariaLabel.selectYear'),
        "onClick": onClickYear
      }, null)]);
      const slotProps = {
        viewMode: props.viewMode,
        disabled: Array.isArray(props.disabled) ? props.disabled : [],
        monthYearText: props.text ?? '',
        monthText: props.monthText ?? '',
        yearText: props.yearText ?? '',
        openMonths: onClickMonth,
        openYears: onClickYear,
        prevMonth: onClickPrevMonth,
        nextMonth: onClickNextMonth,
        prevYear: onClickPrevYear,
        nextYear: onClickNextYear
      };
      const modalControls = _createElementVNode(_Fragment, null, [props.noMonthPicker ? monthYearBtn : monthYearSplit, _createVNode(VSpacer, null, null), _createElementVNode("div", {
        "class": "v-date-picker-controls__month"
      }, [prevMonth, nextMonth])]);
      const dockedControls = _createElementVNode(_Fragment, null, [_createElementVNode("div", {
        "class": "v-date-picker-controls__month"
      }, [prevMonth, onlyMonthBtn, nextMonth]), _createVNode(VSpacer, null, null), _createElementVNode("div", {
        "class": "v-date-picker-controls__year"
      }, [prevYear, onlyYearBtn, nextYear])]);
      return _createVNode(VDefaultsProvider, {
        "defaults": innerDefaults
      }, {
        default: () => [_createElementVNode("div", {
          "class": _normalizeClass(['v-date-picker-controls', `v-date-picker-controls--variant-${props.controlVariant}`]),
          "style": {
            '--v-date-picker-controls-height': convertToUnit(props.controlHeight)
          }
        }, [slots.default?.(slotProps) ?? _createElementVNode(_Fragment, null, [props.controlVariant === 'modal' && modalControls, props.controlVariant === 'docked' && dockedControls])])]
      });
    });
    return {};
  }
});
//# sourceMappingURL=VDatePickerControls.js.map