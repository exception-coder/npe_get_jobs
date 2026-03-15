import { normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createVNode as _createVNode } from "vue";
// Styles
import "./VIcon.css";

// Composables
import { useTextColor } from "../../composables/color.js";
import { makeComponentProps } from "../../composables/component.js";
import { IconValue, useIcon } from "../../composables/icons.js";
import { makeSizeProps, useSize } from "../../composables/size.js";
import { makeTagProps } from "../../composables/tag.js";
import { makeThemeProps, useTheme } from "../../composables/theme.js"; // Utilities
import { shallowRef, Text } from 'vue';
import { convertToUnit, flattenFragments, genericComponent, propsFactory, useRender } from "../../util/index.js";
export const makeVIconProps = propsFactory({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: IconValue,
  opacity: [String, Number],
  ...makeComponentProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: 'i'
  }),
  ...makeThemeProps()
}, 'VIcon');
export const VIcon = genericComponent()({
  name: 'VIcon',
  props: makeVIconProps(),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const slotIcon = shallowRef();
    const {
      themeClasses
    } = useTheme();
    const {
      iconData
    } = useIcon(() => slotIcon.value || props.icon);
    const {
      sizeClasses
    } = useSize(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(() => props.color);
    useRender(() => {
      const slotValue = slots.default?.();
      if (slotValue) {
        slotIcon.value = flattenFragments(slotValue).filter(node => node.type === Text && node.children && typeof node.children === 'string')[0]?.children;
      }
      const hasClick = !!(attrs.onClick || attrs.onClickOnce);
      return _createVNode(iconData.value.component, {
        "tag": props.tag,
        "icon": iconData.value.icon,
        "class": _normalizeClass(['v-icon', 'notranslate', themeClasses.value, sizeClasses.value, textColorClasses.value, {
          'v-icon--clickable': hasClick,
          'v-icon--disabled': props.disabled,
          'v-icon--start': props.start,
          'v-icon--end': props.end
        }, props.class]),
        "style": _normalizeStyle([{
          '--v-icon-opacity': props.opacity
        }, !sizeClasses.value ? {
          fontSize: convertToUnit(props.size),
          height: convertToUnit(props.size),
          width: convertToUnit(props.size)
        } : undefined, textColorStyles.value, props.style]),
        "role": hasClick ? 'button' : undefined,
        "aria-hidden": !hasClick,
        "tabindex": hasClick ? props.disabled ? -1 : 0 : undefined
      }, {
        default: () => [slotValue]
      });
    });
    return {};
  }
});
//# sourceMappingURL=VIcon.js.map