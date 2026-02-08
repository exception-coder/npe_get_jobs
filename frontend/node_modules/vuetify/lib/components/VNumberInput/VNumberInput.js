import { createVNode as _createVNode, createElementVNode as _createElementVNode, Fragment as _Fragment, mergeProps as _mergeProps } from "vue";
// Styles
import "./VNumberInput.css";

// Components
import { VBtn } from "../VBtn/index.js";
import { VDefaultsProvider } from "../VDefaultsProvider/index.js";
import { VDivider } from "../VDivider/index.js";
import { makeVTextFieldProps, VTextField } from "../VTextField/VTextField.js"; // Composables
import { useHold } from "./hold.js";
import { useForm } from "../../composables/form.js";
import { forwardRefs } from "../../composables/forwardRefs.js";
import { useLocale } from "../../composables/locale.js";
import { useProxiedModel } from "../../composables/proxiedModel.js"; // Utilities
import { computed, nextTick, onMounted, ref, shallowRef, toRef, watch, watchEffect } from 'vue';
import { clamp, escapeForRegex, extractNumber, genericComponent, omit, propsFactory, useRender } from "../../util/index.js"; // Types
const makeVNumberInputProps = propsFactory({
  controlVariant: {
    type: String,
    default: 'default'
  },
  inset: Boolean,
  hideInput: Boolean,
  modelValue: {
    type: Number,
    default: null
  },
  min: {
    type: Number,
    default: Number.MIN_SAFE_INTEGER
  },
  max: {
    type: Number,
    default: Number.MAX_SAFE_INTEGER
  },
  step: {
    type: Number,
    default: 1
  },
  precision: {
    type: Number,
    default: 0
  },
  minFractionDigits: {
    type: Number,
    default: null
  },
  decimalSeparator: {
    type: String,
    validator: v => !v || v.length === 1
  },
  ...omit(makeVTextFieldProps(), ['modelValue', 'validationValue'])
}, 'VNumberInput');
export const VNumberInput = genericComponent()({
  name: 'VNumberInput',
  props: {
    ...makeVNumberInputProps()
  },
  emits: {
    'update:focused': val => true,
    'update:modelValue': val => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const vTextFieldRef = ref();
    const {
      holdStart,
      holdStop
    } = useHold({
      toggleUpDown
    });
    const form = useForm(props);
    const controlsDisabled = computed(() => form.isDisabled.value || form.isReadonly.value);
    const isFocused = shallowRef(props.focused);
    const {
      decimalSeparator: decimalSeparatorFromLocale
    } = useLocale();
    const decimalSeparator = computed(() => props.decimalSeparator?.[0] || decimalSeparatorFromLocale.value);
    function correctPrecision(val) {
      let precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : props.precision;
      let trim = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      const fixed = precision == null ? String(val) : val.toFixed(precision);
      if (isFocused.value && trim) {
        return Number(fixed).toString() // trim zeros
        .replace('.', decimalSeparator.value);
      }
      if (props.minFractionDigits === null || precision !== null && precision < props.minFractionDigits) {
        return fixed.replace('.', decimalSeparator.value);
      }
      let [baseDigits, fractionDigits] = fixed.split('.');
      fractionDigits = (fractionDigits ?? '').padEnd(props.minFractionDigits, '0').replace(new RegExp(`(?<=\\d{${props.minFractionDigits}})0+$`, 'g'), '');
      return [baseDigits, fractionDigits].filter(Boolean).join(decimalSeparator.value);
    }
    const model = useProxiedModel(props, 'modelValue', null, val => val ?? null, val => val == null ? val ?? null : clamp(Number(val), props.min, props.max));
    const _inputText = shallowRef(null);
    watchEffect(() => {
      if (isFocused.value && !controlsDisabled.value && Number(_inputText.value?.replace(decimalSeparator.value, '.')) === model.value) {
        // ignore external changes while typing
        // e.g. 5.01{backspace}2 » should result in 5.02
        //      but we emit '5' in and want to preserve '5.0'
      } else if (model.value == null) {
        _inputText.value = null;
      } else if (!isNaN(model.value)) {
        _inputText.value = correctPrecision(model.value);
      }
    });
    const inputText = computed({
      get: () => _inputText.value,
      set(val) {
        if (val === null || val === '') {
          model.value = null;
          _inputText.value = null;
          return;
        }
        const parsedValue = Number(val.replace(decimalSeparator.value, '.'));
        if (!isNaN(parsedValue) && parsedValue <= props.max && parsedValue >= props.min) {
          model.value = parsedValue;
          _inputText.value = val;
        }
      }
    });
    const canIncrease = computed(() => {
      if (controlsDisabled.value) return false;
      return (model.value ?? 0) + props.step <= props.max;
    });
    const canDecrease = computed(() => {
      if (controlsDisabled.value) return false;
      return (model.value ?? 0) - props.step >= props.min;
    });
    const controlVariant = computed(() => {
      return props.hideInput ? 'stacked' : props.controlVariant;
    });
    const incrementIcon = toRef(() => controlVariant.value === 'split' ? '$plus' : '$collapse');
    const decrementIcon = toRef(() => controlVariant.value === 'split' ? '$minus' : '$expand');
    const controlNodeSize = toRef(() => controlVariant.value === 'split' ? 'default' : 'small');
    const controlNodeDefaultHeight = toRef(() => controlVariant.value === 'stacked' ? 'auto' : '100%');
    const incrementSlotProps = {
      props: {
        onClick: onControlClick,
        onPointerup: onControlMouseup,
        onPointerdown: onUpControlMousedown,
        onPointercancel: onControlMouseup
      }
    };
    const decrementSlotProps = {
      props: {
        onClick: onControlClick,
        onPointerup: onControlMouseup,
        onPointerdown: onDownControlMousedown,
        onPointercancel: onControlMouseup
      }
    };
    watch(() => props.precision, () => formatInputValue());
    watch(() => props.minFractionDigits, () => formatInputValue());
    onMounted(() => {
      clampModel();
    });
    function inferPrecision(value) {
      if (value == null) return 0;
      const str = value.toString();
      const idx = str.indexOf('.');
      return ~idx ? str.length - idx : 0;
    }
    function toggleUpDown() {
      let increment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (controlsDisabled.value) return;
      if (model.value == null) {
        inputText.value = correctPrecision(clamp(0, props.min, props.max));
        return;
      }
      let inferredPrecision = Math.max(inferPrecision(model.value), inferPrecision(props.step));
      if (props.precision != null) inferredPrecision = Math.max(inferredPrecision, props.precision);
      if (increment) {
        if (canIncrease.value) inputText.value = correctPrecision(model.value + props.step, inferredPrecision);
      } else {
        if (canDecrease.value) inputText.value = correctPrecision(model.value - props.step, inferredPrecision);
      }
    }
    function onBeforeinput(e) {
      if (!e.data) return;
      const inputElement = e.target;
      const {
        value: existingTxt,
        selectionStart,
        selectionEnd
      } = inputElement ?? {};
      const potentialNewInputVal = existingTxt ? existingTxt.slice(0, selectionStart) + e.data + existingTxt.slice(selectionEnd) : e.data;
      const potentialNewNumber = extractNumber(potentialNewInputVal, props.precision, decimalSeparator.value);

      // Allow only numbers, "-" and {decimal separator}
      // Allow "-" and {decimal separator} only once
      // Allow "-" only at the start
      if (!new RegExp(`^-?\\d*${escapeForRegex(decimalSeparator.value)}?\\d*$`).test(potentialNewInputVal)) {
        e.preventDefault();
        inputElement.value = potentialNewNumber;
        nextTick(() => inputText.value = potentialNewNumber);
      }
      if (props.precision == null) return;

      // Ignore decimal digits above precision limit
      if (potentialNewInputVal.split(decimalSeparator.value)[1]?.length > props.precision) {
        e.preventDefault();
        inputElement.value = potentialNewNumber;
        nextTick(() => inputText.value = potentialNewNumber);
        const cursorPosition = (selectionStart ?? 0) + e.data.length;
        inputElement.setSelectionRange(cursorPosition, cursorPosition);
      }
      // Ignore decimal separator when precision = 0
      if (props.precision === 0 && potentialNewInputVal.endsWith(decimalSeparator.value)) {
        e.preventDefault();
        inputElement.value = potentialNewNumber;
        nextTick(() => inputText.value = potentialNewNumber);
      }
    }
    async function onKeydown(e) {
      if (['Enter', 'ArrowLeft', 'ArrowRight', 'Backspace', 'Delete', 'Tab'].includes(e.key) || e.ctrlKey) return;
      if (['ArrowDown', 'ArrowUp'].includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
        clampModel();
        // _model is controlled, so need to wait until props['modelValue'] is updated
        await nextTick();
        if (e.key === 'ArrowDown') {
          toggleUpDown(false);
        } else {
          toggleUpDown();
        }
      }
    }
    function onControlClick(e) {
      e.stopPropagation();
    }
    function onControlMouseup(e) {
      const el = e.currentTarget;
      el?.releasePointerCapture(e.pointerId);
      e.preventDefault();
      holdStop();
    }
    function onUpControlMousedown(e) {
      const el = e.currentTarget;
      el?.setPointerCapture(e.pointerId);
      e.preventDefault();
      e.stopPropagation();
      holdStart('up');
    }
    function onDownControlMousedown(e) {
      const el = e.currentTarget;
      el?.setPointerCapture(e.pointerId);
      e.preventDefault();
      e.stopPropagation();
      holdStart('down');
    }
    function clampModel() {
      if (controlsDisabled.value) return;
      if (!vTextFieldRef.value) return;
      const actualText = vTextFieldRef.value.value;
      const parsedValue = Number(actualText.replace(decimalSeparator.value, '.'));
      if (actualText && !isNaN(parsedValue)) {
        inputText.value = correctPrecision(clamp(parsedValue, props.min, props.max));
      } else {
        inputText.value = null;
      }
    }
    function formatInputValue() {
      if (controlsDisabled.value) return;
      inputText.value = model.value !== null && !isNaN(model.value) ? correctPrecision(model.value, props.precision, false) : null;
    }
    function trimDecimalZeros() {
      if (controlsDisabled.value) return;
      if (model.value === null || isNaN(model.value)) {
        inputText.value = null;
        return;
      }
      inputText.value = model.value.toString().replace('.', decimalSeparator.value);
    }
    function onFocus() {
      trimDecimalZeros();
    }
    function onBlur() {
      clampModel();
    }
    useRender(() => {
      const {
        modelValue: _,
        type,
        ...textFieldProps
      } = VTextField.filterProps(props);
      function incrementControlNode() {
        return !slots.increment ? _createVNode(VBtn, {
          "aria-hidden": "true",
          "data-testid": "increment",
          "disabled": !canIncrease.value,
          "height": controlNodeDefaultHeight.value,
          "icon": incrementIcon.value,
          "key": "increment-btn",
          "onClick": onControlClick,
          "onPointerdown": onUpControlMousedown,
          "onPointerup": onControlMouseup,
          "onPointercancel": onControlMouseup,
          "size": controlNodeSize.value,
          "variant": "text",
          "tabindex": "-1"
        }, null) : _createVNode(VDefaultsProvider, {
          "key": "increment-defaults",
          "defaults": {
            VBtn: {
              disabled: !canIncrease.value,
              height: controlNodeDefaultHeight.value,
              size: controlNodeSize.value,
              icon: incrementIcon.value,
              variant: 'text'
            }
          }
        }, {
          default: () => [slots.increment(incrementSlotProps)]
        });
      }
      function decrementControlNode() {
        return !slots.decrement ? _createVNode(VBtn, {
          "aria-hidden": "true",
          "data-testid": "decrement",
          "disabled": !canDecrease.value,
          "height": controlNodeDefaultHeight.value,
          "icon": decrementIcon.value,
          "key": "decrement-btn",
          "onClick": onControlClick,
          "onPointerdown": onDownControlMousedown,
          "onPointerup": onControlMouseup,
          "onPointercancel": onControlMouseup,
          "size": controlNodeSize.value,
          "variant": "text",
          "tabindex": "-1"
        }, null) : _createVNode(VDefaultsProvider, {
          "key": "decrement-defaults",
          "defaults": {
            VBtn: {
              disabled: !canDecrease.value,
              height: controlNodeDefaultHeight.value,
              size: controlNodeSize.value,
              icon: decrementIcon.value,
              variant: 'text'
            }
          }
        }, {
          default: () => [slots.decrement(decrementSlotProps)]
        });
      }
      function controlNode() {
        return _createElementVNode("div", {
          "class": "v-number-input__control"
        }, [decrementControlNode(), _createVNode(VDivider, {
          "vertical": controlVariant.value !== 'stacked'
        }, null), incrementControlNode()]);
      }
      function dividerNode() {
        return !props.hideInput && !props.inset ? _createVNode(VDivider, {
          "vertical": true
        }, null) : undefined;
      }
      const appendInnerControl = controlVariant.value === 'split' ? _createElementVNode("div", {
        "class": "v-number-input__control"
      }, [_createVNode(VDivider, {
        "vertical": true
      }, null), incrementControlNode()]) : props.reverse || controlVariant.value === 'hidden' ? undefined : _createElementVNode(_Fragment, null, [dividerNode(), controlNode()]);
      const hasAppendInner = slots['append-inner'] || appendInnerControl;
      const prependInnerControl = controlVariant.value === 'split' ? _createElementVNode("div", {
        "class": "v-number-input__control"
      }, [decrementControlNode(), _createVNode(VDivider, {
        "vertical": true
      }, null)]) : props.reverse && controlVariant.value !== 'hidden' ? _createElementVNode(_Fragment, null, [controlNode(), dividerNode()]) : undefined;
      const hasPrependInner = slots['prepend-inner'] || prependInnerControl;
      return _createVNode(VTextField, _mergeProps({
        "ref": vTextFieldRef
      }, textFieldProps, {
        "modelValue": inputText.value,
        "onUpdate:modelValue": $event => inputText.value = $event,
        "focused": isFocused.value,
        "onUpdate:focused": $event => isFocused.value = $event,
        "validationValue": model.value,
        "onBeforeinput": onBeforeinput,
        "onFocus": onFocus,
        "onBlur": onBlur,
        "onKeydown": onKeydown,
        "class": ['v-number-input', {
          'v-number-input--default': controlVariant.value === 'default',
          'v-number-input--hide-input': props.hideInput,
          'v-number-input--inset': props.inset,
          'v-number-input--reverse': props.reverse,
          'v-number-input--split': controlVariant.value === 'split',
          'v-number-input--stacked': controlVariant.value === 'stacked'
        }, props.class],
        "style": props.style,
        "inputmode": "decimal"
      }), {
        ...slots,
        'append-inner': hasAppendInner ? function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _createElementVNode(_Fragment, null, [slots['append-inner']?.(...args), appendInnerControl]);
        } : undefined,
        'prepend-inner': hasPrependInner ? function () {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          return _createElementVNode(_Fragment, null, [prependInnerControl, slots['prepend-inner']?.(...args)]);
        } : undefined
      });
    });
    return forwardRefs({}, vTextFieldRef);
  }
});
//# sourceMappingURL=VNumberInput.js.map