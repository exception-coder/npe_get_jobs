import { Fragment as _Fragment, createElementVNode as _createElementVNode, normalizeClass as _normalizeClass, createVNode as _createVNode, mergeProps as _mergeProps, normalizeStyle as _normalizeStyle } from "vue";
// Styles
import "./VOtpInput.css";

// Components
import { makeVFieldProps, VField } from "../VField/VField.js";
import { VOverlay } from "../VOverlay/VOverlay.js";
import { VProgressCircular } from "../VProgressCircular/VProgressCircular.js"; // Composables
import { provideDefaults } from "../../composables/defaults.js";
import { makeDimensionProps, useDimension } from "../../composables/dimensions.js";
import { makeFocusProps, useFocus } from "../../composables/focus.js";
import { useIntersectionObserver } from "../../composables/intersectionObserver.js";
import { useLocale } from "../../composables/locale.js";
import { useProxiedModel } from "../../composables/proxiedModel.js";
import { useToggleScope } from "../../composables/toggleScope.js"; // Utilities
import { computed, effectScope, nextTick, ref, toRef, watch, watchEffect } from 'vue';
import { filterInputAttrs, focusChild, genericComponent, pick, propsFactory, useRender } from "../../util/index.js"; // Types
// Types
export const makeVOtpInputProps = propsFactory({
  autofocus: Boolean,
  divider: String,
  focusAll: Boolean,
  label: {
    type: String,
    default: '$vuetify.input.otp'
  },
  length: {
    type: [Number, String],
    default: 6
  },
  modelValue: {
    type: [Number, String],
    default: undefined
  },
  placeholder: String,
  type: {
    type: String,
    default: 'number'
  },
  ...makeDimensionProps(),
  ...makeFocusProps(),
  ...pick(makeVFieldProps({
    variant: 'outlined'
  }), ['baseColor', 'bgColor', 'class', 'color', 'disabled', 'error', 'loading', 'rounded', 'style', 'theme', 'variant'])
}, 'VOtpInput');
export const VOtpInput = genericComponent()({
  name: 'VOtpInput',
  props: makeVOtpInputProps(),
  emits: {
    finish: val => true,
    'update:focused': val => true,
    'update:modelValue': val => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const model = useProxiedModel(props, 'modelValue', '', val => val == null ? [] : String(val).split(''), val => val.join(''));
    const {
      t
    } = useLocale();
    const length = computed(() => Number(props.length));
    const fields = computed(() => Array(length.value).fill(0));
    const focusIndex = ref(-1);
    const contentRef = ref();
    const inputRef = ref([]);
    const current = computed(() => inputRef.value[focusIndex.value]);
    let _isComposing = false;
    useToggleScope(() => props.autofocus, () => {
      const intersectScope = effectScope();
      intersectScope.run(() => {
        const {
          intersectionRef,
          isIntersecting
        } = useIntersectionObserver();
        watchEffect(() => {
          intersectionRef.value = inputRef.value[0];
        });
        watch(isIntersecting, v => {
          if (!v) return;
          intersectionRef.value?.focus();
          intersectScope.stop();
        });
      });
    });
    function onInput() {
      // The maxlength attribute doesn't work for the number type input, so the text type is used.
      // The following logic simulates the behavior of a number input.
      if (isValidNumber(current.value.value)) {
        current.value.value = '';
        return;
      }
      if (_isComposing) return;
      const array = model.value.slice();
      const value = current.value.value;
      array[focusIndex.value] = value;
      let target = null;
      if (focusIndex.value > model.value.length) {
        target = model.value.length + 1;
      } else if (focusIndex.value + 1 !== length.value) {
        target = 'next';
      }
      model.value = array;
      if (target) focusChild(contentRef.value, target);
    }
    function onCompositionend() {
      _isComposing = false;
      onInput();
    }
    function onKeydown(e) {
      const array = model.value.slice();
      const index = focusIndex.value;
      let target = null;
      if (!['ArrowLeft', 'ArrowRight', 'Backspace', 'Delete'].includes(e.key)) return;
      e.preventDefault();
      if (e.key === 'ArrowLeft') {
        target = 'prev';
      } else if (e.key === 'ArrowRight') {
        target = 'next';
      } else if (['Backspace', 'Delete'].includes(e.key)) {
        array[focusIndex.value] = '';
        model.value = array;
        if (focusIndex.value > 0 && e.key === 'Backspace') {
          target = 'prev';
        } else {
          requestAnimationFrame(() => {
            inputRef.value[index]?.select();
          });
        }
      }
      requestAnimationFrame(() => {
        if (target != null) {
          focusChild(contentRef.value, target);
        }
      });
    }
    function onPaste(index, e) {
      e.preventDefault();
      e.stopPropagation();
      const clipboardText = e?.clipboardData?.getData('Text').trim().slice(0, length.value) ?? '';
      const finalIndex = clipboardText.length - 1 === -1 ? index : clipboardText.length - 1;
      if (isValidNumber(clipboardText)) return;
      model.value = clipboardText.split('');
      focusIndex.value = finalIndex;
    }
    function reset() {
      model.value = [];
    }
    function onFocus(e, index) {
      focus();
      focusIndex.value = index;
    }
    function onBlur() {
      blur();
      focusIndex.value = -1;
    }
    function isValidNumber(value) {
      return props.type === 'number' && /[^0-9]/g.test(value);
    }
    provideDefaults({
      VField: {
        color: toRef(() => props.color),
        bgColor: toRef(() => props.color),
        baseColor: toRef(() => props.baseColor),
        disabled: toRef(() => props.disabled),
        error: toRef(() => props.error),
        variant: toRef(() => props.variant)
      }
    }, {
      scoped: true
    });
    watch(model, val => {
      if (val.length === length.value) {
        emit('finish', val.join(''));
      }
    }, {
      deep: true
    });
    watch(focusIndex, val => {
      if (val < 0) return;
      nextTick(() => {
        inputRef.value[val]?.select();
      });
    });
    useRender(() => {
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      return _createElementVNode("div", _mergeProps({
        "class": ['v-otp-input', {
          'v-otp-input--divided': !!props.divider
        }, props.class],
        "style": [props.style]
      }, rootAttrs), [_createElementVNode("div", {
        "ref": contentRef,
        "class": "v-otp-input__content",
        "style": _normalizeStyle([dimensionStyles.value])
      }, [fields.value.map((_, i) => _createElementVNode(_Fragment, null, [props.divider && i !== 0 && _createElementVNode("span", {
        "class": "v-otp-input__divider"
      }, [props.divider]), _createVNode(VField, {
        "focused": isFocused.value && props.focusAll || focusIndex.value === i,
        "key": i
      }, {
        ...slots,
        loader: undefined,
        default: () => {
          return _createElementVNode("input", {
            "ref": val => inputRef.value[i] = val,
            "aria-label": t(props.label, i + 1),
            "autofocus": i === 0 && props.autofocus,
            "autocomplete": "one-time-code",
            "class": _normalizeClass(['v-otp-input__field']),
            "disabled": props.disabled,
            "inputmode": props.type === 'number' ? 'numeric' : 'text',
            "min": props.type === 'number' ? 0 : undefined,
            "maxlength": i === 0 ? length.value : '1',
            "placeholder": props.placeholder,
            "type": props.type === 'number' ? 'text' : props.type,
            "value": model.value[i],
            "onInput": onInput,
            "onFocus": e => onFocus(e, i),
            "onBlur": onBlur,
            "onKeydown": onKeydown,
            "onCompositionstart": () => _isComposing = true,
            "onCompositionend": onCompositionend,
            "onPaste": event => onPaste(i, event)
          }, null);
        }
      })])), _createElementVNode("input", _mergeProps({
        "class": "v-otp-input-input",
        "type": "hidden"
      }, inputAttrs, {
        "value": model.value.join('')
      }), null), _createVNode(VOverlay, {
        "contained": true,
        "contentClass": "v-otp-input__loader",
        "modelValue": !!props.loading,
        "persistent": true
      }, {
        default: () => [slots.loader?.() ?? _createVNode(VProgressCircular, {
          "color": typeof props.loading === 'boolean' ? undefined : props.loading,
          "indeterminate": true,
          "size": "24",
          "width": "2"
        }, null)]
      }), slots.default?.()])]);
    });
    return {
      blur: () => {
        inputRef.value?.some(input => input.blur());
      },
      focus: () => {
        inputRef.value?.[0].focus();
      },
      reset,
      isFocused
    };
  }
});
//# sourceMappingURL=VOtpInput.js.map