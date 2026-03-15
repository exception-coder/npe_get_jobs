import { normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createElementVNode as _createElementVNode, createVNode as _createVNode } from "vue";
// Components
import { VDefaultsProvider } from "../VDefaultsProvider/index.js";
import { VIcon } from "../VIcon/index.js"; // Composables
import { useBackgroundColor } from "../../composables/color.js";
import { makeComponentProps } from "../../composables/component.js";
import { makeElevationProps, useElevation } from "../../composables/elevation.js";
import { IconValue } from "../../composables/icons.js";
import { makeRoundedProps, useRounded } from "../../composables/rounded.js";
import { makeSizeProps, useSize } from "../../composables/size.js"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.js";
export const makeVTimelineDividerProps = propsFactory({
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  icon: IconValue,
  iconColor: String,
  lineColor: String,
  ...makeComponentProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeElevationProps()
}, 'VTimelineDivider');
export const VTimelineDivider = genericComponent()({
  name: 'VTimelineDivider',
  props: makeVTimelineDividerProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props, 'v-timeline-divider__dot');
    const {
      backgroundColorStyles,
      backgroundColorClasses
    } = useBackgroundColor(() => props.dotColor);
    const {
      roundedClasses
    } = useRounded(props, 'v-timeline-divider__dot');
    const {
      elevationClasses
    } = useElevation(props);
    const {
      backgroundColorClasses: lineColorClasses,
      backgroundColorStyles: lineColorStyles
    } = useBackgroundColor(() => props.lineColor);
    useRender(() => _createElementVNode("div", {
      "class": _normalizeClass(['v-timeline-divider', {
        'v-timeline-divider--fill-dot': props.fillDot
      }, props.class]),
      "style": _normalizeStyle(props.style)
    }, [_createElementVNode("div", {
      "class": _normalizeClass(['v-timeline-divider__before', lineColorClasses.value]),
      "style": _normalizeStyle(lineColorStyles.value)
    }, null), !props.hideDot && _createElementVNode("div", {
      "key": "dot",
      "class": _normalizeClass(['v-timeline-divider__dot', elevationClasses.value, roundedClasses.value, sizeClasses.value]),
      "style": _normalizeStyle(sizeStyles.value)
    }, [_createElementVNode("div", {
      "class": _normalizeClass(['v-timeline-divider__inner-dot', backgroundColorClasses.value, roundedClasses.value]),
      "style": _normalizeStyle(backgroundColorStyles.value)
    }, [!slots.default ? _createVNode(VIcon, {
      "key": "icon",
      "color": props.iconColor,
      "icon": props.icon,
      "size": props.size
    }, null) : _createVNode(VDefaultsProvider, {
      "key": "icon-defaults",
      "disabled": !props.icon,
      "defaults": {
        VIcon: {
          color: props.iconColor,
          icon: props.icon,
          size: props.size
        }
      }
    }, slots.default)])]), _createElementVNode("div", {
      "class": _normalizeClass(['v-timeline-divider__after', lineColorClasses.value]),
      "style": _normalizeStyle(lineColorStyles.value)
    }, null)]));
    return {};
  }
});
//# sourceMappingURL=VTimelineDivider.js.map