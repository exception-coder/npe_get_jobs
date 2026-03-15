import { createElementVNode as _createElementVNode, mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
// Styles
import "./VTimePicker.css";

// Components
import { VTimePickerClock } from "./VTimePickerClock.js";
import { VTimePickerControls } from "./VTimePickerControls.js";
import { makeVPickerProps, VPicker } from "../../labs/VPicker/VPicker.js"; // Composables
import { makeDensityProps, useDensity } from "../../composables/density.js";
import { useLocale } from "../../composables/locale.js";
import { useProxiedModel } from "../../composables/proxiedModel.js"; // Utilities
import { computed, onMounted, ref, toRef, watch } from 'vue';
import { makeTimeValidationProps, useTimeValidation } from "./useTimeValidation.js";
import { convert12to24, convert24to12, pad } from "./util.js";
import { genericComponent, omit, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVTimePickerProps = propsFactory({
  disabled: Boolean,
  format: {
    type: String,
    default: 'ampm'
  },
  viewMode: {
    type: String,
    default: 'hour'
  },
  period: {
    type: String,
    default: 'am',
    validator: v => ['am', 'pm'].includes(v)
  },
  modelValue: null,
  readonly: Boolean,
  scrollable: Boolean,
  useSeconds: Boolean,
  variant: {
    type: String,
    default: 'dial'
  },
  ...makeTimeValidationProps(),
  ...omit(makeVPickerProps({
    title: '$vuetify.timePicker.title'
  }), ['landscape']),
  ...makeDensityProps()
}, 'VTimePicker');
export const VTimePicker = genericComponent()({
  name: 'VTimePicker',
  props: makeVTimePickerProps(),
  emits: {
    'update:hour': val => true,
    'update:minute': val => true,
    'update:period': val => true,
    'update:second': val => true,
    'update:modelValue': val => true,
    'update:viewMode': val => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const {
      densityClasses
    } = useDensity(props);
    const inputHour = ref(null);
    const inputMinute = ref(null);
    const inputSecond = ref(null);
    const lazyInputHour = ref(null);
    const lazyInputMinute = ref(null);
    const lazyInputSecond = ref(null);
    const period = useProxiedModel(props, 'period', 'am');
    const viewMode = useProxiedModel(props, 'viewMode', 'hour');
    const controlsRef = ref(null);
    const clockRef = ref(null);
    const isAmPm = computed(() => {
      return props.format === 'ampm';
    });
    const {
      isAllowedHour,
      isAllowedMinute,
      isAllowedSecond
    } = useTimeValidation(props);
    const shouldClear = toRef(() => {
      return props.modelValue !== null && inputHour.value === null && inputMinute.value === null && (!props.useSeconds || inputSecond.value === null);
    });
    function emitValue() {
      const value = genValue();
      if (value !== null && value !== props.modelValue) {
        emit('update:modelValue', value);
      }
      if (shouldClear.value) {
        emit('update:modelValue', null);
      }
    }
    watch(inputHour, emitValue);
    watch(inputMinute, emitValue);
    watch(inputSecond, emitValue);
    watch(period, (newPeriod, oldPeriod) => {
      if (inputHour.value == null || newPeriod === oldPeriod) return;
      if (newPeriod === 'pm' && inputHour.value < 12) {
        inputHour.value = inputHour.value + 12;
      } else if (newPeriod === 'am' && inputHour.value >= 12) {
        inputHour.value = inputHour.value - 12;
      }
    });
    watch(() => props.modelValue, val => setInputData(val));
    watch(() => props.useSeconds, (val, old) => {
      if (old && !val && viewMode.value === 'second') {
        viewMode.value = 'minute';
      }
      if (!val && inputSecond.value !== null) {
        inputSecond.value = null;
      }
    });
    onMounted(() => {
      setInputData(props.modelValue);
    });
    function genValue() {
      if (inputHour.value != null && inputMinute.value != null && (!props.useSeconds || inputSecond.value != null)) {
        return `${pad(inputHour.value)}:${pad(inputMinute.value)}` + (props.useSeconds ? `:${pad(inputSecond.value)}` : '');
      }
      return null;
    }
    function setInputData(value) {
      if (value == null || value === '') {
        inputHour.value = null;
        inputMinute.value = null;
        inputSecond.value = null;
      } else if (value instanceof Date) {
        inputHour.value = value.getHours();
        inputMinute.value = value.getMinutes();
        inputSecond.value = value.getSeconds();
      } else {
        const [hour,, minute,, second, period] = value.trim().toLowerCase().match(/^(\d+):(\d+)(:(\d+))?([ap]m)?$/) || new Array(6);
        inputHour.value = period ? convert12to24(parseInt(hour, 10), period) : parseInt(hour, 10);
        inputMinute.value = parseInt(minute, 10);
        inputSecond.value = parseInt(second || 0, 10);
      }
      period.value = inputHour.value == null || inputHour.value < 12 ? 'am' : 'pm';
    }
    function onInput(value) {
      if (viewMode.value === 'hour') {
        inputHour.value = isAmPm.value ? convert12to24(value, period.value) : value;
      } else if (viewMode.value === 'minute') {
        inputMinute.value = value;
      } else {
        inputSecond.value = value;
      }
    }
    function onChange(value) {
      switch (viewMode.value || 'hour') {
        case 'hour':
          emit('update:hour', value);
          break;
        case 'minute':
          emit('update:minute', value);
          break;
        case 'second':
          emit('update:second', value);
          break;
        default:
          break;
      }
      const emitChange = inputHour.value !== null && inputMinute.value !== null && (props.useSeconds ? inputSecond.value !== null : true);
      if (viewMode.value === 'hour') {
        viewMode.value = 'minute';
      } else if (props.useSeconds && viewMode.value === 'minute') {
        viewMode.value = 'second';
      }
      if (inputHour.value === lazyInputHour.value && inputMinute.value === lazyInputMinute.value && (!props.useSeconds || inputSecond.value === lazyInputSecond.value)) return;
      const time = genValue();
      if (time === null) return;
      lazyInputHour.value = inputHour.value;
      lazyInputMinute.value = inputMinute.value;
      props.useSeconds && (lazyInputSecond.value = inputSecond.value);
      emitChange && emitValue();
    }
    useRender(() => {
      const pickerProps = omit(VPicker.filterProps(props), ['hideHeader']);
      const timePickerControlsProps = VTimePickerControls.filterProps(props);
      const timePickerClockProps = VTimePickerClock.filterProps(omit(props, ['format', 'modelValue', 'min', 'max']));
      const clockValidation = viewMode.value === 'hour' ? isAllowedHour.value : viewMode.value === 'minute' ? v => isAllowedMinute.value(inputHour.value, v) : v => isAllowedSecond.value(inputHour.value, inputMinute.value, v);
      return _createVNode(VPicker, _mergeProps(pickerProps, {
        "color": undefined,
        "class": ['v-time-picker', `v-time-picker--variant-${props.variant}`, props.class, densityClasses.value],
        "hideHeader": props.hideHeader && props.variant !== 'input',
        "style": props.style
      }), {
        title: () => slots.title?.() ?? _createElementVNode("div", {
          "class": "v-time-picker__title"
        }, [t(props.title)]),
        header: () => _createVNode(VTimePickerControls, _mergeProps(timePickerControlsProps, {
          "ampm": isAmPm.value,
          "hour": inputHour.value,
          "minute": inputMinute.value,
          "period": period.value,
          "second": inputSecond.value,
          "viewMode": viewMode.value,
          "inputHints": props.variant === 'input',
          "onUpdate:hour": val => inputHour.value = val,
          "onUpdate:minute": val => inputMinute.value = val,
          "onUpdate:second": val => inputSecond.value = val,
          "onUpdate:period": val => period.value = val,
          "onUpdate:viewMode": value => viewMode.value = value,
          "ref": controlsRef
        }), null),
        default: () => _createVNode(VTimePickerClock, _mergeProps(timePickerClockProps, {
          "allowedValues": clockValidation,
          "double": viewMode.value === 'hour' && !isAmPm.value,
          "format": viewMode.value === 'hour' ? isAmPm.value ? convert24to12 : val => val : val => pad(val, 2),
          "max": viewMode.value === 'hour' ? isAmPm.value && period.value === 'am' ? 11 : 23 : 59,
          "min": viewMode.value === 'hour' && isAmPm.value && period.value === 'pm' ? 12 : 0,
          "size": 20,
          "step": viewMode.value === 'hour' ? 1 : 5,
          "modelValue": viewMode.value === 'hour' ? inputHour.value : viewMode.value === 'minute' ? inputMinute.value : inputSecond.value,
          "onChange": onChange,
          "onInput": onInput,
          "ref": clockRef
        }), null),
        actions: slots.actions
      });
    });
  }
});
//# sourceMappingURL=VTimePicker.js.map