import { createVNode as _createVNode, createElementVNode as _createElementVNode, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle } from "vue";
// Styles
import "./VInput.css";

// Components
import { useInputIcon } from "./InputIcon.js";
import { VMessages } from "../VMessages/VMessages.js"; // Composables
import { makeComponentProps } from "../../composables/component.js";
import { makeDensityProps, useDensity } from "../../composables/density.js";
import { makeDimensionProps, useDimension } from "../../composables/dimensions.js";
import { IconValue } from "../../composables/icons.js";
import { useRtl } from "../../composables/locale.js";
import { makeThemeProps, provideTheme } from "../../composables/theme.js";
import { makeValidationProps, useValidation } from "../../composables/validation.js"; // Utilities
import { computed, toRef, useId } from 'vue';
import { EventProp, genericComponent, pick, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVInputProps = propsFactory({
  id: String,
  appendIcon: IconValue,
  baseColor: String,
  centerAffix: {
    type: Boolean,
    default: true
  },
  color: String,
  glow: Boolean,
  iconColor: [Boolean, String],
  prependIcon: IconValue,
  hideDetails: [Boolean, String],
  hideSpinButtons: Boolean,
  hint: String,
  persistentHint: Boolean,
  messages: {
    type: [Array, String],
    default: () => []
  },
  direction: {
    type: String,
    default: 'horizontal',
    validator: v => ['horizontal', 'vertical'].includes(v)
  },
  'onClick:prepend': EventProp(),
  'onClick:append': EventProp(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...pick(makeDimensionProps(), ['maxWidth', 'minWidth', 'width']),
  ...makeThemeProps(),
  ...makeValidationProps()
}, 'VInput');
export const VInput = genericComponent()({
  name: 'VInput',
  props: {
    ...makeVInputProps()
  },
  emits: {
    'update:modelValue': value => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots,
      emit
    } = _ref;
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      themeClasses
    } = provideTheme(props);
    const {
      rtlClasses
    } = useRtl();
    const {
      InputIcon
    } = useInputIcon(props);
    const uid = useId();
    const id = computed(() => props.id || `input-${uid}`);
    const {
      errorMessages,
      isDirty,
      isDisabled,
      isReadonly,
      isPristine,
      isValid,
      isValidating,
      reset,
      resetValidation,
      validate,
      validationClasses
    } = useValidation(props, 'v-input', id);
    const messages = computed(() => {
      if (props.errorMessages?.length || !isPristine.value && errorMessages.value.length) {
        return errorMessages.value;
      } else if (props.hint && (props.persistentHint || props.focused)) {
        return props.hint;
      } else {
        return props.messages;
      }
    });
    const hasMessages = toRef(() => messages.value.length > 0);
    const hasDetails = toRef(() => !props.hideDetails || props.hideDetails === 'auto' && (hasMessages.value || !!slots.details));
    const messagesId = computed(() => hasDetails.value ? `${id.value}-messages` : undefined);
    const slotProps = computed(() => ({
      id,
      messagesId,
      isDirty,
      isDisabled,
      isReadonly,
      isPristine,
      isValid,
      isValidating,
      hasDetails,
      reset,
      resetValidation,
      validate
    }));
    const color = toRef(() => {
      return props.error || props.disabled ? undefined : props.focused ? props.color : props.baseColor;
    });
    const iconColor = toRef(() => {
      if (!props.iconColor) return undefined;
      return props.iconColor === true ? color.value : props.iconColor;
    });
    useRender(() => {
      const hasPrepend = !!(slots.prepend || props.prependIcon);
      const hasAppend = !!(slots.append || props.appendIcon);
      return _createElementVNode("div", {
        "class": _normalizeClass(['v-input', `v-input--${props.direction}`, {
          'v-input--center-affix': props.centerAffix,
          'v-input--focused': props.focused,
          'v-input--glow': props.glow,
          'v-input--hide-spin-buttons': props.hideSpinButtons
        }, densityClasses.value, themeClasses.value, rtlClasses.value, validationClasses.value, props.class]),
        "style": _normalizeStyle([dimensionStyles.value, props.style])
      }, [hasPrepend && _createElementVNode("div", {
        "key": "prepend",
        "class": "v-input__prepend"
      }, [slots.prepend ? slots.prepend(slotProps.value) : props.prependIcon && _createVNode(InputIcon, {
        "key": "prepend-icon",
        "name": "prepend",
        "color": iconColor.value
      }, null)]), slots.default && _createElementVNode("div", {
        "class": "v-input__control"
      }, [slots.default?.(slotProps.value)]), hasAppend && _createElementVNode("div", {
        "key": "append",
        "class": "v-input__append"
      }, [slots.append ? slots.append(slotProps.value) : props.appendIcon && _createVNode(InputIcon, {
        "key": "append-icon",
        "name": "append",
        "color": iconColor.value
      }, null)]), hasDetails.value && _createElementVNode("div", {
        "id": messagesId.value,
        "class": "v-input__details",
        "role": "alert",
        "aria-live": "polite"
      }, [_createVNode(VMessages, {
        "active": hasMessages.value,
        "messages": messages.value
      }, {
        message: slots.message
      }), slots.details?.(slotProps.value)])]);
    });
    return {
      reset,
      resetValidation,
      validate,
      isValid,
      errorMessages
    };
  }
});
//# sourceMappingURL=VInput.js.map