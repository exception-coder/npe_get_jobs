import { createElementVNode as _createElementVNode, createVNode as _createVNode, mergeProps as _mergeProps, vShow as _vShow, withDirectives as _withDirectives, Fragment as _Fragment, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle } from "vue";
// Styles
import "./VField.css";

// Components
import { VFieldLabel } from "./VFieldLabel.js";
import { VExpandXTransition } from "../transitions/index.js";
import { VDefaultsProvider } from "../VDefaultsProvider/index.js";
import { useInputIcon } from "../VInput/InputIcon.js"; // Composables
import { useBackgroundColor, useTextColor } from "../../composables/color.js";
import { makeComponentProps } from "../../composables/component.js";
import { makeFocusProps, useFocus } from "../../composables/focus.js";
import { IconValue } from "../../composables/icons.js";
import { LoaderSlot, makeLoaderProps, useLoader } from "../../composables/loader.js";
import { useRtl } from "../../composables/locale.js";
import { makeRoundedProps, useRounded } from "../../composables/rounded.js";
import { makeThemeProps, provideTheme } from "../../composables/theme.js"; // Utilities
import { computed, ref, toRef, useId, watch } from 'vue';
import { animate, convertToUnit, EventProp, genericComponent, nullifyTransforms, PREFERS_REDUCED_MOTION, propsFactory, standardEasing, useRender } from "../../util/index.js"; // Types
const allowedVariants = ['underlined', 'outlined', 'filled', 'solo', 'solo-inverted', 'solo-filled', 'plain'];
export const makeVFieldProps = propsFactory({
  appendInnerIcon: IconValue,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: IconValue,
    default: '$clear'
  },
  active: Boolean,
  centerAffix: {
    type: Boolean,
    default: undefined
  },
  color: String,
  baseColor: String,
  dirty: Boolean,
  disabled: {
    type: Boolean,
    default: null
  },
  glow: Boolean,
  error: Boolean,
  flat: Boolean,
  iconColor: [Boolean, String],
  label: String,
  persistentClear: Boolean,
  prependInnerIcon: IconValue,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: 'filled',
    validator: v => allowedVariants.includes(v)
  },
  'onClick:clear': EventProp(),
  'onClick:appendInner': EventProp(),
  'onClick:prependInner': EventProp(),
  ...makeComponentProps(),
  ...makeLoaderProps(),
  ...makeRoundedProps(),
  ...makeThemeProps()
}, 'VField');
export const VField = genericComponent()({
  name: 'VField',
  inheritAttrs: false,
  props: {
    id: String,
    details: Boolean,
    labelId: String,
    ...makeFocusProps(),
    ...makeVFieldProps()
  },
  emits: {
    'update:focused': focused => true,
    'update:modelValue': value => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      loaderClasses
    } = useLoader(props);
    const {
      focusClasses,
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const {
      InputIcon
    } = useInputIcon(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      rtlClasses
    } = useRtl();
    const isActive = toRef(() => props.dirty || props.active);
    const hasLabel = toRef(() => !!(props.label || slots.label));
    const hasFloatingLabel = toRef(() => !props.singleLine && hasLabel.value);
    const uid = useId();
    const id = computed(() => props.id || `input-${uid}`);
    const messagesId = toRef(() => !props.details ? undefined : `${id.value}-messages`);
    const labelRef = ref();
    const floatingLabelRef = ref();
    const controlRef = ref();
    const isPlainOrUnderlined = computed(() => ['plain', 'underlined'].includes(props.variant));
    const color = computed(() => {
      return props.error || props.disabled ? undefined : isActive.value && isFocused.value ? props.color : props.baseColor;
    });
    const iconColor = computed(() => {
      if (!props.iconColor || props.glow && !isFocused.value) return undefined;
      return props.iconColor === true ? color.value : props.iconColor;
    });
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.bgColor);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(color);
    watch(isActive, val => {
      if (hasFloatingLabel.value && !PREFERS_REDUCED_MOTION()) {
        const el = labelRef.value.$el;
        const targetEl = floatingLabelRef.value.$el;
        requestAnimationFrame(() => {
          const rect = nullifyTransforms(el);
          const targetRect = targetEl.getBoundingClientRect();
          const x = targetRect.x - rect.x;
          const y = targetRect.y - rect.y - (rect.height / 2 - targetRect.height / 2);
          const targetWidth = targetRect.width / 0.75;
          const width = Math.abs(targetWidth - rect.width) > 1 ? {
            maxWidth: convertToUnit(targetWidth)
          } : undefined;
          const style = getComputedStyle(el);
          const targetStyle = getComputedStyle(targetEl);
          const duration = parseFloat(style.transitionDuration) * 1000 || 150;
          const scale = parseFloat(targetStyle.getPropertyValue('--v-field-label-scale'));
          const color = targetStyle.getPropertyValue('color');
          el.style.visibility = 'visible';
          targetEl.style.visibility = 'hidden';
          animate(el, {
            transform: `translate(${x}px, ${y}px) scale(${scale})`,
            color,
            ...width
          }, {
            duration,
            easing: standardEasing,
            direction: val ? 'normal' : 'reverse'
          }).finished.then(() => {
            el.style.removeProperty('visibility');
            targetEl.style.removeProperty('visibility');
          });
        });
      }
    }, {
      flush: 'post'
    });
    const slotProps = computed(() => ({
      isActive,
      isFocused,
      controlRef,
      iconColor,
      blur,
      focus
    }));
    const floatingLabelProps = toRef(() => {
      const ariaHidden = !isActive.value;
      return {
        'aria-hidden': ariaHidden,
        for: ariaHidden ? undefined : id.value
      };
    });
    const mainLabelProps = toRef(() => {
      const ariaHidden = hasFloatingLabel.value && isActive.value;
      return {
        'aria-hidden': ariaHidden,
        for: ariaHidden ? undefined : id.value
      };
    });
    function onClick(e) {
      if (e.target !== document.activeElement) {
        e.preventDefault();
      }
    }
    useRender(() => {
      const isOutlined = props.variant === 'outlined';
      const hasPrepend = !!(slots['prepend-inner'] || props.prependInnerIcon);
      const hasClear = !!(props.clearable || slots.clear) && !props.disabled;
      const hasAppend = !!(slots['append-inner'] || props.appendInnerIcon || hasClear);
      const label = () => slots.label ? slots.label({
        ...slotProps.value,
        label: props.label,
        props: {
          for: id.value
        }
      }) : props.label;
      return _createElementVNode("div", _mergeProps({
        "class": ['v-field', {
          'v-field--active': isActive.value,
          'v-field--appended': hasAppend,
          'v-field--center-affix': props.centerAffix ?? !isPlainOrUnderlined.value,
          'v-field--disabled': props.disabled,
          'v-field--dirty': props.dirty,
          'v-field--error': props.error,
          'v-field--glow': props.glow,
          'v-field--flat': props.flat,
          'v-field--has-background': !!props.bgColor,
          'v-field--persistent-clear': props.persistentClear,
          'v-field--prepended': hasPrepend,
          'v-field--reverse': props.reverse,
          'v-field--single-line': props.singleLine,
          'v-field--no-label': !label(),
          [`v-field--variant-${props.variant}`]: true
        }, themeClasses.value, backgroundColorClasses.value, focusClasses.value, loaderClasses.value, roundedClasses.value, rtlClasses.value, props.class],
        "style": [backgroundColorStyles.value, props.style],
        "onClick": onClick
      }, attrs), [_createElementVNode("div", {
        "class": "v-field__overlay"
      }, null), _createVNode(LoaderSlot, {
        "name": "v-field",
        "active": !!props.loading,
        "color": props.error ? 'error' : typeof props.loading === 'string' ? props.loading : props.color
      }, {
        default: slots.loader
      }), hasPrepend && _createElementVNode("div", {
        "key": "prepend",
        "class": "v-field__prepend-inner"
      }, [slots['prepend-inner'] ? slots['prepend-inner'](slotProps.value) : props.prependInnerIcon && _createVNode(InputIcon, {
        "key": "prepend-icon",
        "name": "prependInner",
        "color": iconColor.value
      }, null)]), _createElementVNode("div", {
        "class": "v-field__field",
        "data-no-activator": ""
      }, [['filled', 'solo', 'solo-inverted', 'solo-filled'].includes(props.variant) && hasFloatingLabel.value && _createVNode(VFieldLabel, _mergeProps({
        "key": "floating-label",
        "ref": floatingLabelRef,
        "class": [textColorClasses.value],
        "floating": true
      }, floatingLabelProps.value, {
        "style": textColorStyles.value
      }), {
        default: () => [label()]
      }), hasLabel.value && _createVNode(VFieldLabel, _mergeProps({
        "key": "label",
        "ref": labelRef,
        "id": props.labelId
      }, mainLabelProps.value), {
        default: () => [label()]
      }), slots.default?.({
        ...slotProps.value,
        props: {
          id: id.value,
          class: 'v-field__input',
          'aria-describedby': messagesId.value
        },
        focus,
        blur
      }) ?? _createElementVNode("div", {
        "id": id.value,
        "class": "v-field__input",
        "aria-describedby": messagesId.value
      }, null)]), hasClear && _createVNode(VExpandXTransition, {
        "key": "clear"
      }, {
        default: () => [_withDirectives(_createElementVNode("div", {
          "class": "v-field__clearable",
          "onMousedown": e => {
            e.preventDefault();
            e.stopPropagation();
          }
        }, [_createVNode(VDefaultsProvider, {
          "defaults": {
            VIcon: {
              icon: props.clearIcon
            }
          }
        }, {
          default: () => [slots.clear ? slots.clear({
            ...slotProps.value,
            props: {
              onFocus: focus,
              onBlur: blur,
              onClick: props['onClick:clear'],
              tabindex: -1
            }
          }) : _createVNode(InputIcon, {
            "name": "clear",
            "onFocus": focus,
            "onBlur": blur,
            "tabindex": -1
          }, null)]
        })]), [[_vShow, props.dirty]])]
      }), hasAppend && _createElementVNode("div", {
        "key": "append",
        "class": "v-field__append-inner"
      }, [slots['append-inner'] ? slots['append-inner'](slotProps.value) : props.appendInnerIcon && _createVNode(InputIcon, {
        "key": "append-icon",
        "name": "appendInner",
        "color": iconColor.value
      }, null)]), _createElementVNode("div", {
        "class": _normalizeClass(['v-field__outline', textColorClasses.value]),
        "style": _normalizeStyle(textColorStyles.value)
      }, [isOutlined && _createElementVNode(_Fragment, null, [_createElementVNode("div", {
        "class": "v-field__outline__start"
      }, null), hasFloatingLabel.value && _createElementVNode("div", {
        "class": "v-field__outline__notch"
      }, [_createVNode(VFieldLabel, _mergeProps({
        "ref": floatingLabelRef,
        "floating": true
      }, floatingLabelProps.value), {
        default: () => [label()]
      })]), _createElementVNode("div", {
        "class": "v-field__outline__end"
      }, null)]), isPlainOrUnderlined.value && hasFloatingLabel.value && _createVNode(VFieldLabel, _mergeProps({
        "ref": floatingLabelRef,
        "floating": true
      }, floatingLabelProps.value), {
        default: () => [label()]
      })])]);
    });
    return {
      controlRef,
      fieldIconColor: iconColor
    };
  }
});
//# sourceMappingURL=VField.js.map