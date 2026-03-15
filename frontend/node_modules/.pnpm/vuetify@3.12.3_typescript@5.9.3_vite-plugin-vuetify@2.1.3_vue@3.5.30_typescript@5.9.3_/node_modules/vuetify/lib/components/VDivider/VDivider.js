import { normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createElementVNode as _createElementVNode } from "vue";
// Styles
import "./VDivider.css";

// Composables
import { useTextColor } from "../../composables/color.js";
import { makeComponentProps } from "../../composables/component.js";
import { makeThemeProps, provideTheme } from "../../composables/theme.js"; // Utilities
import { computed, toRef } from 'vue';
import { convertToUnit, genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
const allowedVariants = ['dotted', 'dashed', 'solid', 'double'];
export const makeVDividerProps = propsFactory({
  color: String,
  contentOffset: [Number, String, Array],
  gradient: Boolean,
  inset: Boolean,
  length: [Number, String],
  opacity: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  variant: {
    type: String,
    default: 'solid',
    validator: v => allowedVariants.includes(v)
  },
  ...makeComponentProps(),
  ...makeThemeProps()
}, 'VDivider');
export const VDivider = genericComponent()({
  name: 'VDivider',
  props: makeVDividerProps(),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(() => props.color);
    const dividerStyles = computed(() => {
      const styles = {};
      if (props.length) {
        styles[props.vertical ? 'height' : 'width'] = convertToUnit(props.length);
      }
      if (props.thickness) {
        styles[props.vertical ? 'borderRightWidth' : 'borderTopWidth'] = convertToUnit(props.thickness);
      }
      return styles;
    });
    const contentStyles = toRef(() => {
      const margin = Array.isArray(props.contentOffset) ? props.contentOffset[0] : props.contentOffset;
      const shift = Array.isArray(props.contentOffset) ? props.contentOffset[1] : 0;
      return {
        marginBlock: props.vertical && margin ? convertToUnit(margin) : undefined,
        marginInline: !props.vertical && margin ? convertToUnit(margin) : undefined,
        transform: shift ? `translate${props.vertical ? 'X' : 'Y'}(${convertToUnit(shift)})` : undefined
      };
    });
    useRender(() => {
      const divider = _createElementVNode("hr", {
        "class": _normalizeClass([{
          'v-divider': true,
          'v-divider--gradient': props.gradient && !slots.default,
          'v-divider--inset': props.inset,
          'v-divider--vertical': props.vertical
        }, themeClasses.value, textColorClasses.value, props.class]),
        "style": _normalizeStyle([dividerStyles.value, textColorStyles.value, {
          '--v-border-opacity': props.opacity
        }, {
          'border-style': props.variant
        }, props.style]),
        "aria-orientation": !attrs.role || attrs.role === 'separator' ? props.vertical ? 'vertical' : 'horizontal' : undefined,
        "role": `${attrs.role || 'separator'}`
      }, null);
      if (!slots.default) return divider;
      return _createElementVNode("div", {
        "class": _normalizeClass(['v-divider__wrapper', {
          'v-divider__wrapper--gradient': props.gradient,
          'v-divider__wrapper--inset': props.inset,
          'v-divider__wrapper--vertical': props.vertical
        }])
      }, [divider, _createElementVNode("div", {
        "class": "v-divider__content",
        "style": _normalizeStyle(contentStyles.value)
      }, [slots.default()]), divider]);
    });
    return {};
  }
});
//# sourceMappingURL=VDivider.js.map