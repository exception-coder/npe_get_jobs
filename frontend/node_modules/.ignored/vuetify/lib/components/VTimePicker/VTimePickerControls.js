import { normalizeClass as _normalizeClass, createVNode as _createVNode, createTextVNode as _createTextVNode, createElementVNode as _createElementVNode } from "vue";
// Styles
import "./VTimePickerControls.css";

// Components
import { pad } from "./util.js";
import { VBtn } from "../VBtn/index.js"; // Composables
import { useLocale } from "../../composables/locale.js"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVTimePickerControlsProps = propsFactory({
  ampm: Boolean,
  color: String,
  disabled: Boolean,
  hour: Number,
  minute: Number,
  second: Number,
  period: String,
  readonly: Boolean,
  useSeconds: Boolean,
  value: Number,
  viewMode: String
}, 'VTimePickerControls');
export const VTimePickerControls = genericComponent()({
  name: 'VTimePickerControls',
  props: makeVTimePickerControlsProps(),
  emits: {
    'update:period': data => true,
    'update:viewMode': data => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    useRender(() => {
      let hour = props.hour;
      if (props.ampm) {
        hour = hour ? (hour - 1) % 12 + 1 : 12;
      }
      return _createElementVNode("div", {
        "class": "v-time-picker-controls"
      }, [_createElementVNode("div", {
        "class": _normalizeClass({
          'v-time-picker-controls__time': true,
          'v-time-picker-controls__time--with-seconds': props.useSeconds
        })
      }, [_createVNode(VBtn, {
        "active": props.viewMode === 'hour',
        "color": props.viewMode === 'hour' ? props.color : undefined,
        "disabled": props.disabled,
        "variant": "tonal",
        "class": _normalizeClass({
          'v-time-picker-controls__time__btn': true,
          'v-time-picker-controls__time--with-ampm__btn': props.ampm,
          'v-time-picker-controls__time--with-seconds__btn': props.useSeconds
        }),
        "text": props.hour == null ? '--' : pad(`${hour}`),
        "onClick": () => emit('update:viewMode', 'hour')
      }, null), _createElementVNode("span", {
        "class": _normalizeClass(['v-time-picker-controls__time__separator', {
          'v-time-picker-controls--with-seconds__time__separator': props.useSeconds
        }])
      }, [_createTextVNode(":")]), _createVNode(VBtn, {
        "active": props.viewMode === 'minute',
        "color": props.viewMode === 'minute' ? props.color : undefined,
        "class": _normalizeClass({
          'v-time-picker-controls__time__btn': true,
          'v-time-picker-controls__time__btn__active': props.viewMode === 'minute',
          'v-time-picker-controls__time--with-ampm__btn': props.ampm,
          'v-time-picker-controls__time--with-seconds__btn': props.useSeconds
        }),
        "disabled": props.disabled,
        "variant": "tonal",
        "text": props.minute == null ? '--' : pad(props.minute),
        "onClick": () => emit('update:viewMode', 'minute')
      }, null), props.useSeconds && _createElementVNode("span", {
        "class": _normalizeClass(['v-time-picker-controls__time__separator', {
          'v-time-picker-controls--with-seconds__time__separator': props.useSeconds
        }]),
        "key": "secondsDivider"
      }, [_createTextVNode(":")]), props.useSeconds && _createVNode(VBtn, {
        "key": "secondsVal",
        "active": props.viewMode === 'second',
        "color": props.viewMode === 'second' ? props.color : undefined,
        "variant": "tonal",
        "onClick": () => emit('update:viewMode', 'second'),
        "class": _normalizeClass({
          'v-time-picker-controls__time__btn': true,
          'v-time-picker-controls__time__btn__active': props.viewMode === 'second',
          'v-time-picker-controls__time--with-seconds__btn': props.useSeconds
        }),
        "disabled": props.disabled,
        "text": props.second == null ? '--' : pad(props.second)
      }, null), props.ampm && _createElementVNode("div", {
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
        "onClick": () => props.period !== 'am' ? emit('update:period', 'am') : null
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
        "onClick": () => props.period !== 'pm' ? emit('update:period', 'pm') : null
      }, null)])])]);
    });
    return {};
  }
});
//# sourceMappingURL=VTimePickerControls.js.map