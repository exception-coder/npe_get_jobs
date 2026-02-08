import { Fragment as _Fragment, normalizeClass as _normalizeClass, createElementVNode as _createElementVNode } from "vue";
// Composables
import { useColor } from "./color.js"; // Utilities
import { toRef, toValue } from 'vue';
import { getCurrentInstanceName, propsFactory } from "../util/index.js"; // Types
export const allowedVariants = ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain'];
export function genOverlays(isClickable, name) {
  return _createElementVNode(_Fragment, null, [isClickable && _createElementVNode("span", {
    "key": "overlay",
    "class": _normalizeClass(`${name}__overlay`)
  }, null), _createElementVNode("span", {
    "key": "underlay",
    "class": _normalizeClass(`${name}__underlay`)
  }, null)]);
}
export const makeVariantProps = propsFactory({
  color: String,
  variant: {
    type: String,
    default: 'elevated',
    validator: v => allowedVariants.includes(v)
  }
}, 'variant');
export function useVariant(props) {
  let name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getCurrentInstanceName();
  const variantClasses = toRef(() => {
    const {
      variant
    } = toValue(props);
    return `${name}--variant-${variant}`;
  });
  const {
    colorClasses,
    colorStyles
  } = useColor(() => {
    const {
      variant,
      color
    } = toValue(props);
    return {
      [['elevated', 'flat'].includes(variant) ? 'background' : 'text']: color
    };
  });
  return {
    colorClasses,
    colorStyles,
    variantClasses
  };
}
//# sourceMappingURL=variant.js.map