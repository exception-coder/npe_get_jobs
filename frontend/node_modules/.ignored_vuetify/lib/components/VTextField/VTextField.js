import { mergeProps as _mergeProps, createElementVNode as _createElementVNode, withDirectives as _withDirectives, Fragment as _Fragment, normalizeClass as _normalizeClass, createVNode as _createVNode } from "vue";
// Styles
import "./VTextField.css";

// Components
import { VCounter } from "../VCounter/VCounter.js";
import { makeVFieldProps, VField } from "../VField/VField.js";
import { makeVInputProps, VInput } from "../VInput/VInput.js"; // Composables
import { makeAutocompleteProps, useAutocomplete } from "../../composables/autocomplete.js";
import { useAutofocus } from "../../composables/autofocus.js";
import { useFocus } from "../../composables/focus.js";
import { forwardRefs } from "../../composables/forwardRefs.js";
import { useProxiedModel } from "../../composables/proxiedModel.js"; // Directives
import vIntersect from "../../directives/intersect/index.js"; // Utilities
import { cloneVNode, computed, nextTick, ref } from 'vue';
import { callEvent, filterInputAttrs, genericComponent, omit, propsFactory, useRender } from "../../util/index.js"; // Types
const activeTypes = ['color', 'file', 'time', 'date', 'datetime-local', 'week', 'month'];
export const makeVTextFieldProps = propsFactory({
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: [Number, Function],
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  role: String,
  type: {
    type: String,
    default: 'text'
  },
  modelModifiers: Object,
  ...makeAutocompleteProps(),
  ...makeVInputProps(),
  ...makeVFieldProps()
}, 'VTextField');
export const VTextField = genericComponent()({
  name: 'VTextField',
  directives: {
    vIntersect
  },
  inheritAttrs: false,
  props: makeVTextFieldProps(),
  emits: {
    'click:control': e => true,
    'mousedown:control': e => true,
    'update:focused': focused => true,
    'update:modelValue': val => true
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
      return typeof props.counterValue === 'function' ? props.counterValue(model.value) : typeof props.counterValue === 'number' ? props.counterValue : (model.value ?? '').toString().length;
    });
    const max = computed(() => {
      if (attrs.maxlength) return attrs.maxlength;
      if (!props.counter || typeof props.counter !== 'number' && typeof props.counter !== 'string') return undefined;
      return props.counter;
    });
    const isPlainOrUnderlined = computed(() => ['plain', 'underlined'].includes(props.variant));
    const vInputRef = ref();
    const vFieldRef = ref();
    const inputRef = ref();
    const autocomplete = useAutocomplete(props);
    const isActive = computed(() => activeTypes.includes(props.type) || props.persistentPlaceholder || isFocused.value || props.active);
    function onFocus() {
      if (autocomplete.isSuppressing.value) {
        autocomplete.update();
      }
      if (!isFocused.value) focus();
      nextTick(() => {
        if (inputRef.value !== document.activeElement) {
          inputRef.value?.focus();
        }
      });
    }
    function onControlMousedown(e) {
      emit('mousedown:control', e);
      if (e.target === inputRef.value) return;
      onFocus();
      e.preventDefault();
    }
    function onControlClick(e) {
      emit('click:control', e);
    }
    function onClear(e, reset) {
      e.stopPropagation();
      onFocus();
      nextTick(() => {
        reset();
        callEvent(props['onClick:clear'], e);
      });
    }
    function onInput(e) {
      const el = e.target;
      if (!(props.modelModifiers?.trim && ['text', 'search', 'password', 'tel', 'url'].includes(props.type))) {
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
    useRender(() => {
      const hasCounter = !!(slots.counter || props.counter !== false && props.counter != null);
      const hasDetails = !!(hasCounter || slots.details);
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const {
        modelValue: _,
        ...inputProps
      } = VInput.filterProps(props);
      const fieldProps = VField.filterProps(props);
      return _createVNode(VInput, _mergeProps({
        "ref": vInputRef,
        "modelValue": model.value,
        "onUpdate:modelValue": $event => model.value = $event,
        "class": ['v-text-field', {
          'v-text-field--prefixed': props.prefix,
          'v-text-field--suffixed': props.suffix,
          'v-input--plain-underlined': isPlainOrUnderlined.value
        }, props.class],
        "style": props.style
      }, rootAttrs, inputProps, {
        "centerAffix": !isPlainOrUnderlined.value,
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
            hasDetails,
            reset
          } = _ref2;
          return _createVNode(VField, _mergeProps({
            "ref": vFieldRef,
            "onMousedown": onControlMousedown,
            "onClick": onControlClick,
            "onClick:clear": e => onClear(e, reset),
            "role": props.role
          }, omit(fieldProps, ['onClick:clear']), {
            "id": id.value,
            "active": isActive.value || isDirty.value,
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
              const inputNode = _withDirectives(_createElementVNode("input", _mergeProps({
                "ref": val => inputRef.value = controlRef.value = val,
                "value": model.value,
                "onInput": onInput,
                "autofocus": props.autofocus,
                "readonly": isReadonly.value,
                "disabled": isDisabled.value,
                "name": autocomplete.fieldName.value,
                "autocomplete": autocomplete.fieldAutocomplete.value,
                "placeholder": props.placeholder,
                "size": 1,
                "role": props.role,
                "type": props.type,
                "onFocus": focus,
                "onBlur": blur
              }, slotProps, inputAttrs), null), [[vIntersect, {
                handler: onIntersect
              }, null, {
                once: true
              }]]);
              return _createElementVNode(_Fragment, null, [props.prefix && _createElementVNode("span", {
                "class": "v-text-field__prefix"
              }, [_createElementVNode("span", {
                "class": "v-text-field__prefix__text"
              }, [props.prefix])]), slots.default ? _createElementVNode("div", {
                "class": _normalizeClass(fieldClass),
                "data-no-activator": ""
              }, [slots.default(), inputNode]) : cloneVNode(inputNode, {
                class: fieldClass
              }), props.suffix && _createElementVNode("span", {
                "class": "v-text-field__suffix"
              }, [_createElementVNode("span", {
                "class": "v-text-field__suffix__text"
              }, [props.suffix])])]);
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
    return forwardRefs({}, vInputRef, vFieldRef, inputRef);
  }
});
//# sourceMappingURL=VTextField.js.map