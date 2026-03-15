import { normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createVNode as _createVNode } from "vue";
// Styles
import "./VSheet.css";

// Composables
import { makeBorderProps, useBorder } from "../../composables/border.js";
import { useBackgroundColor } from "../../composables/color.js";
import { makeComponentProps } from "../../composables/component.js";
import { makeDimensionProps, useDimension } from "../../composables/dimensions.js";
import { makeElevationProps, useElevation } from "../../composables/elevation.js";
import { makeLocationProps, useLocation } from "../../composables/location.js";
import { makePositionProps, usePosition } from "../../composables/position.js";
import { makeRoundedProps, useRounded } from "../../composables/rounded.js";
import { makeTagProps } from "../../composables/tag.js";
import { makeThemeProps, provideTheme } from "../../composables/theme.js"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.js";
export const makeVSheetProps = propsFactory({
  color: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, 'VSheet');
export const VSheet = genericComponent()({
  name: 'VSheet',
  props: makeVSheetProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      borderClasses
    } = useBorder(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    useRender(() => _createVNode(props.tag, {
      "class": _normalizeClass(['v-sheet', themeClasses.value, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, positionClasses.value, roundedClasses.value, props.class]),
      "style": _normalizeStyle([backgroundColorStyles.value, dimensionStyles.value, locationStyles.value, props.style])
    }, slots));
    return {};
  }
});
//# sourceMappingURL=VSheet.js.map