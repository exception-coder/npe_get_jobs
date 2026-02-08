import { normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createVNode as _createVNode } from "vue";
// Styles
import "./VKbd.css";

// Composables
import { makeBorderProps, useBorder } from "../../composables/border.js";
import { useBackgroundColor } from "../../composables/color.js";
import { makeComponentProps } from "../../composables/component.js";
import { makeElevationProps, useElevation } from "../../composables/elevation.js";
import { makeRoundedProps, useRounded } from "../../composables/rounded.js";
import { makeTagProps } from "../../composables/tag.js";
import { makeThemeProps, provideTheme } from "../../composables/theme.js"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.js";
export const makeVKbdProps = propsFactory({
  color: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: 'kbd'
  }),
  ...makeThemeProps(),
  ...makeElevationProps()
}, 'VKbd');
export const VKbd = genericComponent()({
  name: 'VKbd',
  props: makeVKbdProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      elevationClasses
    } = useElevation(props);
    useRender(() => _createVNode(props.tag, {
      "class": _normalizeClass(['v-kbd', themeClasses.value, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, roundedClasses.value, props.class]),
      "style": _normalizeStyle([backgroundColorStyles.value, props.style])
    }, slots));
    return {};
  }
});
//# sourceMappingURL=VKbd.js.map