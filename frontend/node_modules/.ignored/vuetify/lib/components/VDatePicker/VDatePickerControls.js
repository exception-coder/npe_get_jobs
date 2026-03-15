import { createVNode as _createVNode, createElementVNode as _createElementVNode, normalizeClass as _normalizeClass } from "vue";
// Styles
import "./VDatePickerControls.css";

// Components
import { VBtn } from "../VBtn/index.js";
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
    'click:text': () => true
  },
  setup(props, _ref) {
    let {
      emit
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
    const disablePrev = computed(() => {
      return Array.isArray(props.disabled) ? props.disabled.includes('prev') : !!props.disabled;
    });
    const disableNext = computed(() => {
      return Array.isArray(props.disabled) ? props.disabled.includes('next') : !!props.disabled;
    });
    function onClickPrev() {
      emit('click:prev');
    }
    function onClickNext() {
      emit('click:next');
    }
    function onClickYear() {
      emit('click:year');
    }
    function onClickMonth() {
      emit('click:month');
    }
    useRender(() => {
      // TODO: add slot support and scope defaults
      return _createElementVNode("div", {
        "class": _normalizeClass(['v-date-picker-controls']),
        "style": {
          '--v-date-picker-controls-height': convertToUnit(props.controlHeight)
        }
      }, [_createVNode(VBtn, {
        "class": "v-date-picker-controls__month-btn",
        "data-testid": "month-btn",
        "disabled": disableMonth.value,
        "text": props.text,
        "variant": "text",
        "rounded": true,
        "onClick": onClickMonth
      }, null), _createVNode(VBtn, {
        "class": "v-date-picker-controls__mode-btn",
        "data-testid": "year-btn",
        "disabled": disableYear.value,
        "density": "comfortable",
        "icon": props.modeIcon,
        "variant": "text",
        "aria-label": t('$vuetify.datePicker.ariaLabel.selectYear'),
        "onClick": onClickYear
      }, null), _createVNode(VSpacer, null, null), _createElementVNode("div", {
        "class": "v-date-picker-controls__month"
      }, [_createVNode(VBtn, {
        "data-testid": "prev-month",
        "disabled": disablePrev.value,
        "density": "comfortable",
        "icon": props.prevIcon,
        "variant": "text",
        "aria-label": t('$vuetify.datePicker.ariaLabel.previousMonth'),
        "onClick": onClickPrev
      }, null), _createVNode(VBtn, {
        "data-testid": "next-month",
        "disabled": disableNext.value,
        "icon": props.nextIcon,
        "density": "comfortable",
        "variant": "text",
        "aria-label": t('$vuetify.datePicker.ariaLabel.nextMonth'),
        "onClick": onClickNext
      }, null)])]);
    });
    return {};
  }
});
//# sourceMappingURL=VDatePickerControls.js.map