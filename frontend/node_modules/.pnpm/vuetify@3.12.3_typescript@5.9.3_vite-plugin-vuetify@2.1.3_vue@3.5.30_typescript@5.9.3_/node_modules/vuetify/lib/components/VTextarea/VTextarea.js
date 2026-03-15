import { Fragment as _Fragment, createElementVNode as _createElementVNode, mergeProps as _mergeProps, withDirectives as _withDirectives, vModelText as _vModelText, normalizeClass as _normalizeClass, createVNode as _createVNode } from "vue";
// Styles
import "./VTextarea.css";
import "../VTextField/VTextField.css";

// Components
import { VCounter } from "../VCounter/VCounter.js";
import { VField } from "../VField/index.js";
import { makeVFieldProps } from "../VField/VField.js";
import { makeVInputProps, VInput } from "../VInput/VInput.js"; // Composables
import { useDisplay } from "../../composables/index.js";
import { makeAutocompleteProps, useAutocomplete } from "../../composables/autocomplete.js";
import { useAutofocus } from "../../composables/autofocus.js";
import { useFocus } from "../../composables/focus.js";
import { forwardRefs } from "../../composables/forwardRefs.js";
import { useProxiedModel } from "../../composables/proxiedModel.js"; // Directives
import vIntersect from "../../directives/intersect/index.js"; // Utilities
import { computed, nextTick, onBeforeUnmount, onMounted, ref, shallowRef, watch, watchEffect } from 'vue';
import { callEvent, clamp, convertToUnit, filterInputAttrs, genericComponent, omit, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVTextareaProps = propsFactory({
  autoGrow: Boolean,
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: Function,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  noResize: Boolean,
  rows: {
    type: [Number, String],
    default: 5,
    validator: v => !isNaN(parseFloat(v))
  },
  maxHeight: {
    type: [Number, String],
    validator: v => !isNaN(parseFloat(v))
  },
  maxRows: {
    type: [Number, String],
    validator: v => !isNaN(parseFloat(v))
  },
  suffix: String,
  modelModifiers: Object,
  ...makeAutocompleteProps(),
  ...omit(makeVInputProps(), ['direction']),
  ...makeVFieldProps()
}, 'VTextarea');
export const VTextarea = genericComponent()({
  name: 'VTextarea',
  directives: {
    vIntersect
  },
  inheritAttrs: false,
  props: makeVTextareaProps(),
  emits: {
    'click:control': e => true,
    'mousedown:control': e => true,
    'update:focused': focused => true,
    'update:modelValue': val => true,
    'update:rows': rows => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const model = useProxiedModel(props, 'modelValue');
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const {
      onIntersect
    } = useAutofocus(props);
    const counterValue = computed(() => {
      return typeof props.counterValue === 'function' ? props.counterValue(model.value) : (model.value || '').toString().length;
    });
    const max = computed(() => {
      if (attrs.maxlength) return attrs.maxlength;
      if (!props.counter || typeof props.counter !== 'number' && typeof props.counter !== 'string') return undefined;
      return props.counter;
    });
    const vInputRef = ref();
    const vFieldRef = ref();
    const controlHeight = shallowRef('');
    const textareaRef = ref();
    const scrollbarWidth = ref(0);
    const {
      platform
    } = useDisplay();
    const autocomplete = useAutocomplete(props);
    const isActive = computed(() => props.persistentPlaceholder || isFocused.value || props.active);
    function onFocus() {
      if (autocomplete.isSuppressing.value) {
        autocomplete.update();
      }
      if (textareaRef.value !== document.activeElement) {
        textareaRef.value?.focus();
      }
      if (!isFocused.value) focus();
    }
    function onControlClick(e) {
      onFocus();
      emit('click:control', e);
    }
    function onControlMousedown(e) {
      emit('mousedown:control', e);
    }
    function onClear(e) {
      e.stopPropagation();
      onFocus();
      nextTick(() => {
        model.value = '';
        callEvent(props['onClick:clear'], e);
      });
    }
    function onInput(e) {
      const el = e.target;
      if (!props.modelModifiers?.trim) {
        model.value = el.value;
        return;
      }
      const value = el.value;
      const start = el.selectionStart;
      const end = el.selectionEnd;
      model.value = value;
      nextTick(() => {
        let offset = 0;
        if (value.trimStart().length === el.value.length) {
          // #22307 - Whitespace has been removed from the
          // start, offset the caret position to compensate
          offset = value.length - el.value.length;
        }
        if (start != null) el.selectionStart = start - offset;
        if (end != null) el.selectionEnd = end - offset;
      });
    }
    const sizerRef = ref();
    const rows = ref(Number(props.rows));
    const isPlainOrUnderlined = computed(() => ['plain', 'underlined'].includes(props.variant));
    watchEffect(() => {
      if (!props.autoGrow) rows.value = Number(props.rows);
    });
    function calculateInputHeight() {
      nextTick(() => {
        if (!textareaRef.value) return;
        if (platform.value.firefox) {
          scrollbarWidth.value = 12;
          return;
        }
        const {
          offsetWidth,
          clientWidth
        } = textareaRef.value;
        scrollbarWidth.value = Math.max(0, offsetWidth - clientWidth);
      });
      if (!props.autoGrow) return;
      nextTick(() => {
        if (!sizerRef.value || !vFieldRef.value) return;
        const style = getComputedStyle(sizerRef.value);
        const fieldStyle = getComputedStyle(vFieldRef.value.$el);
        const padding = parseFloat(style.getPropertyValue('--v-field-padding-top')) + parseFloat(style.getPropertyValue('--v-input-padding-top')) + parseFloat(style.getPropertyValue('--v-field-padding-bottom'));
        const height = sizerRef.value.scrollHeight;
        const lineHeight = parseFloat(style.lineHeight);
        const minHeight = Math.max(parseFloat(props.rows) * lineHeight + padding, parseFloat(fieldStyle.getPropertyValue('--v-input-control-height')));
        const maxHeight = props.maxHeight ? parseFloat(props.maxHeight) : parseFloat(props.maxRows) * lineHeight + padding || Infinity;
        const newHeight = clamp(height ?? 0, minHeight, maxHeight);
        rows.value = Math.floor((newHeight - padding) / lineHeight);
        controlHeight.value = convertToUnit(newHeight);
      });
    }
    onMounted(calculateInputHeight);
    watch(model, calculateInputHeight);
    watch(() => props.rows, calculateInputHeight);
    watch(() => props.maxHeight, calculateInputHeight);
    watch(() => props.maxRows, calculateInputHeight);
    watch(() => props.density, calculateInputHeight);
    watch(rows, val => {
      emit('update:rows', val);
    });
    let observer;
    watch(sizerRef, val => {
      if (val) {
        observer = new ResizeObserver(calculateInputHeight);
        observer.observe(sizerRef.value);
      } else {
        observer?.disconnect();
      }
    });
    onBeforeUnmount(() => {
      observer?.disconnect();
    });
    useRender(() => {
      const hasCounter = !!(slots.counter || props.counter || props.counterValue);
      const hasDetails = !!(hasCounter || slots.details);
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const {
        modelValue: _,
        ...inputProps
      } = VInput.filterProps(props);
      const fieldProps = {
        ...VField.filterProps(props),
        'onClick:clear': onClear
      };
      return _createVNode(VInput, _mergeProps({
        "ref": vInputRef,
        "modelValue": model.value,
        "onUpdate:modelValue": $event => model.value = $event,
        "class": ['v-textarea v-text-field', {
          'v-textarea--prefixed': props.prefix,
          'v-textarea--suffixed': props.suffix,
          'v-text-field--prefixed': props.prefix,
          'v-text-field--suffixed': props.suffix,
          'v-textarea--auto-grow': props.autoGrow,
          'v-textarea--no-resize': props.noResize || props.autoGrow,
          'v-input--plain-underlined': isPlainOrUnderlined.value
        }, props.class],
        "style": [{
          '--v-textarea-max-height': props.maxHeight ? convertToUnit(props.maxHeight) : undefined,
          '--v-textarea-scroll-bar-width': convertToUnit(scrollbarWidth.value)
        }, props.style]
      }, rootAttrs, inputProps, {
        "centerAffix": rows.value === 1 && !isPlainOrUnderlined.value,
        "focused": isFocused.value
      }), {
        ...slots,
        default: _ref2 => {
          let {
            id,
            isDisabled,
            isDirty,
            isReadonly,
            isValid,
            hasDetails
          } = _ref2;
          return _createVNode(VField, _mergeProps({
            "ref": vFieldRef,
            "style": {
              '--v-textarea-control-height': controlHeight.value
            },
            "onClick": onControlClick,
            "onMousedown": onControlMousedown,
            "onClick:prependInner": props['onClick:prependInner'],
            "onClick:appendInner": props['onClick:appendInner']
          }, fieldProps, {
            "id": id.value,
            "active": isActive.value || isDirty.value,
            "labelId": `${id.value}-label`,
            "centerAffix": rows.value === 1 && !isPlainOrUnderlined.value,
            "dirty": isDirty.value || props.dirty,
            "disabled": isDisabled.value,
            "focused": isFocused.value,
            "details": hasDetails.value,
            "error": isValid.value === false
          }), {
            ...slots,
            default: _ref3 => {
              let {
                props: {
                  class: fieldClass,
                  ...slotProps
                },
                controlRef
              } = _ref3;
              return _createElementVNode(_Fragment, null, [props.prefix && _createElementVNode("span", {
                "class": "v-text-field__prefix"
              }, [props.prefix]), _withDirectives(_createElementVNode("textarea", _mergeProps({
                "ref": val => textareaRef.value = controlRef.value = val,
                "class": fieldClass,
                "value": model.value,
                "onInput": onInput,
                "autofocus": props.autofocus,
                "readonly": isReadonly.value,
                "disabled": isDisabled.value,
                "placeholder": props.placeholder,
                "rows": props.rows,
                "name": autocomplete.fieldName.value,
                "autocomplete": autocomplete.fieldAutocomplete.value,
                "onFocus": onFocus,
                "onBlur": blur,
                "aria-labelledby": `${id.value}-label`
              }, slotProps, inputAttrs), null), [[vIntersect, {
                handler: onIntersect
              }, null, {
                once: true
              }]]), props.autoGrow && _withDirectives(_createElementVNode("textarea", {
                "class": _normalizeClass([fieldClass, 'v-textarea__sizer']),
                "id": `${slotProps.id}-sizer`,
                "onUpdate:modelValue": $event => model.value = $event,
                "ref": sizerRef,
                "readonly": true,
                "aria-hidden": "true"
              }, null), [[_vModelText, model.value]]), props.suffix && _createElementVNode("span", {
                "class": "v-text-field__suffix"
              }, [props.suffix])]);
            }
          });
        },
        details: hasDetails ? slotProps => _createElementVNode(_Fragment, null, [slots.details?.(slotProps), hasCounter && _createElementVNode(_Fragment, null, [_createElementVNode("span", null, null), _createVNode(VCounter, {
          "active": props.persistentCounter || isFocused.value,
          "value": counterValue.value,
          "max": max.value,
          "disabled": props.disabled
        }, slots.counter)])]) : undefined
      });
    });
    return forwardRefs({}, vInputRef, vFieldRef, textareaRef);
  }
});
//# sourceMappingURL=VTextarea.js.map