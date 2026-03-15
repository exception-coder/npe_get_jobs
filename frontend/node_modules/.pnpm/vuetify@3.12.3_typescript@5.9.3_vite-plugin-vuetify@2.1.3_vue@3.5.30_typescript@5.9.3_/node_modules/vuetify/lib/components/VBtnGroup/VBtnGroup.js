import { normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createVNode as _createVNode } from "vue";
// Styles
import "./VBtnGroup.css";

// Composables
import { makeBorderProps, useBorder } from "../../composables/border.js";
import { makeComponentProps } from "../../composables/component.js";
import { provideDefaults } from "../../composables/defaults.js";
import { makeDensityProps, useDensity } from "../../composables/density.js";
import { makeElevationProps, useElevation } from "../../composables/elevation.js";
import { makeRoundedProps, useRounded } from "../../composables/rounded.js";
import { makeTagProps } from "../../composables/tag.js";
import { makeThemeProps, provideTheme } from "../../composables/theme.js";
import { makeVariantProps } from "../../composables/variant.js"; // Utilities
import { toRef } from 'vue';
import { genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVBtnGroupProps = propsFactory({
  baseColor: String,
  divided: Boolean,
  direction: {
    type: String,
    default: 'horizontal'
  },
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps()
}, 'VBtnGroup');
export const VBtnGroup = genericComponent()({
  name: 'VBtnGroup',
  props: makeVBtnGroupProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    provideDefaults({
      VBtn: {
        height: toRef(() => props.direction === 'horizontal' ? 'auto' : null),
        baseColor: toRef(() => props.baseColor),
        color: toRef(() => props.color),
        density: toRef(() => props.density),
        flat: true,
        variant: toRef(() => props.variant)
      }
    });
    useRender(() => {
      return _createVNode(props.tag, {
        "class": _normalizeClass(['v-btn-group', `v-btn-group--${props.direction}`, {
          'v-btn-group--divided': props.divided
        }, themeClasses.value, borderClasses.value, densityClasses.value, elevationClasses.value, roundedClasses.value, props.class]),
        "style": _normalizeStyle(props.style)
      }, slots);
    });
  }
});
//# sourceMappingURL=VBtnGroup.js.map