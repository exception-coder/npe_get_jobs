import { createVNode as _createVNode, createTextVNode as _createTextVNode, createElementVNode as _createElementVNode, Fragment as _Fragment, normalizeClass as _normalizeClass } from "vue";
// Styles
import "./VTimePickerControls.css";

// Components
import { VTimePickerField } from "./VTimePickerField.js";
import { VBtn } from "../VBtn/index.js"; // Composables
import { useLocale } from "../../composables/locale.js";
import { useProxiedModel } from "../../composables/proxiedModel.js"; // Utilities
import { computed, nextTick, ref, watch } from 'vue';
import { makeTimeValidationProps, useTimeValidation } from "./useTimeValidation.js";
import { convert12to24, convert24to12, extractInteger, pad } from "./util.js";
import { clamp, genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVTimePickerControlsProps = propsFactory({
  ampm: Boolean,
  color: String,
  disabled: Boolean,
  inputHints: Boolean,
  hour: [Number, String],
  minute: [Number, String],
  second: [Number, String],
  period: String,
  readonly: Boolean,
  useSeconds: Boolean,
  value: Number,
  viewMode: String,
  ...makeTimeValidationProps()
}, 'VTimePickerControls');
export const VTimePickerControls = genericComponent()({
  name: 'VTimePickerControls',
  props: makeVTimePickerControlsProps(),
  emits: {
    'update:period': data => true,
    'update:viewMode': data => true,
    'update:hour': v => true,
    'update:minute': v => true,
    'update:second': v => true
  },
  setup(props, _ref) {
    let {
      emit
    } = _ref;
    const {
      t
    } = useLocale();
    const {
      isAllowedHour,
      isAllowedMinute,
      isAllowedSecond,
      findNextAllowed
    } = useTimeValidation(props);
    const currentHour = computed(() => props.hour !== null ? props.ampm ? convert12to24(Number(props.hour), props.period ?? 'am') : Number(props.hour) : null);
    const currentMinute = computed(() => props.minute !== null ? Number(props.minute) : null);
    const isHourValid = computed(() => {
      if (props.hour === null) return true;
      return isAllowedHour.value?.(Number(currentHour.value)) ?? true;
    });
    const isMinuteValid = computed(() => {
      if (props.minute === null) return true;
      return isAllowedMinute.value?.(currentHour.value, Number(props.minute)) ?? true;
    });
    const isSecondValid = computed(() => {
      if (props.second === null) return true;
      return isAllowedSecond.value?.(currentHour.value, currentMinute.value, Number(props.second)) ?? true;
    });
    const transformHours = {
      in: v => {
        if (v == null || isNaN(Number(v))) return null;
        const val = Number(v);
        return props.ampm ? pad(convert24to12(val)) : pad(val);
      },
      out: v => {
        if (isNaN(Number(v)) || v == null || v === '') return null;
        const val = typeof v === 'string' ? extractInteger(v) : Number(v);
        if (val === null) return null;
        return props.ampm ? convert12to24(val, props.period ?? 'am') : clamp(val, 0, 23);
      }
    };
    const hour = useProxiedModel(props, 'hour', undefined, transformHours.in, transformHours.out);
    const transformMinutesOrSeconds = {
      in: v => v != null && !isNaN(Number(v)) ? pad(`${v}`) : null,
      out: v => {
        if (isNaN(Number(v)) || v == null || v === '') return null;
        const val = typeof v === 'string' ? extractInteger(v) : Number(v);
        return val !== null ? clamp(val, 0, 59) : null;
      }
    };
    const minute = useProxiedModel(props, 'minute', undefined, transformMinutesOrSeconds.in, transformMinutesOrSeconds.out);
    const second = useProxiedModel(props, 'second', undefined, transformMinutesOrSeconds.in, transformMinutesOrSeconds.out);
    function onHourFieldKeydown(e) {
      if (!['ArrowUp', 'ArrowDown'].includes(e.key)) return;
      e.preventDefault();
      e.stopPropagation();
      const isAm = props.period === 'am';
      const current = props.ampm ? convert12to24(Number(hour.value ?? 0), isAm ? 'am' : 'pm') : Number(hour.value ?? 0);
      const next = findNextAllowed('hour', current, e.key === 'ArrowUp');
      const togglePeriod = isAm && next >= 12 || !isAm && next < 12;
      if (props.ampm && togglePeriod) {
        emit('update:period', props.period === 'am' ? 'pm' : 'am');
        nextTick(() => hour.value = pad(next));
      } else {
        hour.value = pad(next);
      }
    }
    function onMinuteFieldKeydown(e) {
      if (!['ArrowUp', 'ArrowDown'].includes(e.key)) return;
      e.preventDefault();
      e.stopPropagation();
      const current = Number(minute.value ?? 0);
      const next = findNextAllowed('minute', current, e.key === 'ArrowUp', currentHour.value);
      minute.value = pad(next);
    }
    function onSecondFieldKeydown(e) {
      if (!['ArrowUp', 'ArrowDown'].includes(e.key)) return;
      e.preventDefault();
      e.stopPropagation();
      const current = Number(second.value ?? 0);
      const next = findNextAllowed('second', current, e.key === 'ArrowUp', currentHour.value, currentMinute.value);
      second.value = pad(next);
    }
    function createInputInterceptor(valueTransformOut, compare, apply) {
      return e => {
        if (!e.data) return;
        const inputElement = e.target;
        const {
          value: existingTxt,
          selectionStart,
          selectionEnd
        } = inputElement ?? {};
        if (extractInteger(e.data) === null) {
          e.preventDefault();
          return;
        }
        const potentialNewInputVal = existingTxt ? existingTxt.slice(0, selectionStart) + e.data + existingTxt.slice(selectionEnd) : e.data;
        if (potentialNewInputVal.length > 2) {
          if (selectionStart === selectionEnd && selectionEnd === 0 && e.data.trim().startsWith('0')) {
            e.preventDefault();
            inputElement.value = potentialNewInputVal.trim().substring(0, 2);
            apply(inputElement.value);
            if (e.data.trim().length === 1) {
              inputElement.setSelectionRange(1, 1);
            }
            return;
          }
          if (selectionStart === selectionEnd && selectionEnd === 1 && existingTxt.startsWith('0')) {
            e.preventDefault();
            inputElement.value = potentialNewInputVal.trim().substring(0, 2);
            apply(inputElement.value);
            return;
          }
          const maxValue = props.viewMode === 'hour' ? props.ampm ? 12 : 23 : 59;
          const value = extractInteger(potentialNewInputVal);
          if (value > maxValue) {
            e.preventDefault();
            inputElement.value = pad(String(extractInteger(e.data)).substring(0, 2));
            apply(inputElement.value);
            return;
          }
        }
        const potentialNewNumber = valueTransformOut(potentialNewInputVal);
        if (compare(potentialNewNumber)) {
          // ignore input when results in the same number
          // prevents typing more digits
          e.preventDefault();
        }
      };
    }
    function setPeriod(val) {
      emit('update:period', val);
    }
    const hourInputRef = ref();
    const minuteInputRef = ref();
    const secondInputRef = ref();
    watch(() => props.viewMode, (_, old) => {
      switch (old) {
        case 'hour':
          hourInputRef.value.blur();
          break;
        case 'minute':
          minuteInputRef.value.blur();
          break;
        case 'second':
          secondInputRef.value.blur();
          break;
      }
    });
    const hourInputFilter = createInputInterceptor(transformHours.out, v => transformHours.in(v) === hour.value, v => hour.value = v);
    const minuteInputFilter = createInputInterceptor(transformMinutesOrSeconds.out, v => transformMinutesOrSeconds.in(v) === minute.value, v => minute.value = v);
    const secondInputFilter = createInputInterceptor(transformMinutesOrSeconds.out, v => transformMinutesOrSeconds.in(v) === second.value, v => second.value = v);
    useRender(() => {
      return _createElementVNode("div", {
        "class": "v-time-picker-controls"
      }, [_createElementVNode("div", {
        "class": _normalizeClass({
          'v-time-picker-controls__time': true,
          'v-time-picker-controls__time--with-ampm': props.ampm,
          'v-time-picker-controls__time--with-seconds': props.useSeconds
        })
      }, [_createVNode(VTimePickerField, {
        "ref": hourInputRef,
        "active": props.viewMode === 'hour',
        "color": props.color,
        "disabled": props.disabled,
        "label": t('$vuetify.timePicker.hour'),
        "showHint": props.inputHints,
        "error": isHourValid.value ? undefined : t('$vuetify.timePicker.notAllowed'),
        "modelValue": hour.value,
        "onUpdate:modelValue": v => hour.value = v,
        "onKeydown": onHourFieldKeydown,
        "onBeforeinput": hourInputFilter,
        "onFocus": () => emit('update:viewMode', 'hour')
      }, null), _createElementVNode("span", {
        "class": "v-time-picker-controls__time__separator"
      }, [_createTextVNode(":")]), _createVNode(VTimePickerField, {
        "ref": minuteInputRef,
        "active": props.viewMode === 'minute',
        "color": props.color,
        "disabled": props.disabled,
        "label": t('$vuetify.timePicker.minute'),
        "showHint": props.inputHints,
        "error": isMinuteValid.value ? undefined : t('$vuetify.timePicker.notAllowed'),
        "modelValue": minute.value,
        "onUpdate:modelValue": v => minute.value = v,
        "onKeydown": onMinuteFieldKeydown,
        "onBeforeinput": minuteInputFilter,
        "onFocus": () => emit('update:viewMode', 'minute')
      }, null), props.useSeconds && _createElementVNode("span", {
        "key": "secondsDivider",
        "class": "v-time-picker-controls__time__separator"
      }, [_createTextVNode(":")]), props.useSeconds && _createElementVNode(_Fragment, null, [_createVNode(VTimePickerField, {
        "key": "secondsVal",
        "ref": secondInputRef,
        "active": props.viewMode === 'second',
        "color": props.color,
        "disabled": props.disabled,
        "label": t('$vuetify.timePicker.second'),
        "showHint": props.inputHints,
        "error": isSecondValid.value ? undefined : t('$vuetify.timePicker.notAllowed'),
        "modelValue": second.value,
        "onUpdate:modelValue": v => second.value = v,
        "onKeydown": onSecondFieldKeydown,
        "onBeforeinput": secondInputFilter,
        "onFocus": () => emit('update:viewMode', 'second')
      }, null)]), props.ampm && _createElementVNode("div", {
        "class": "v-time-picker-controls__ampm"
      }, [_createVNode(VBtn, {
        "active": props.period === 'am',
        "color": props.period === 'am' ? props.color : undefined,
        "class": _normalizeClass({
          'v-time-picker-controls__ampm__am': true,
          'v-time-picker-controls__ampm__btn': true,
          'v-time-picker-controls__ampm__btn__active': props.period === 'am'
        }),
        "disabled": props.disabled,
        "text": t('$vuetify.timePicker.am'),
        "variant": props.disabled && props.period === 'am' ? 'elevated' : 'tonal',
        "onClick": () => props.period !== 'am' ? setPeriod('am') : null
      }, null), _createVNode(VBtn, {
        "active": props.period === 'pm',
        "color": props.period === 'pm' ? props.color : undefined,
        "class": _normalizeClass({
          'v-time-picker-controls__ampm__pm': true,
          'v-time-picker-controls__ampm__btn': true,
          'v-time-picker-controls__ampm__btn__active': props.period === 'pm'
        }),
        "disabled": props.disabled,
        "text": t('$vuetify.timePicker.pm'),
        "variant": props.disabled && props.period === 'pm' ? 'elevated' : 'tonal',
        "onClick": () => props.period !== 'pm' ? setPeriod('pm') : null
      }, null)])])]);
    });
    return {};
  }
});
//# sourceMappingURL=VTimePickerControls.js.map