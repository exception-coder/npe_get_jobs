import { createVNode as _createVNode, createElementVNode as _createElementVNode, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle } from "vue";
// Styles
import "./VBanner.css";

// Components
import { VBannerActions } from "./VBannerActions.js";
import { VBannerText } from "./VBannerText.js";
import { VAvatar } from "../VAvatar/index.js";
import { VDefaultsProvider } from "../VDefaultsProvider/index.js"; // Composables
import { makeBorderProps, useBorder } from "../../composables/border.js";
import { useBackgroundColor } from "../../composables/color.js";
import { makeComponentProps } from "../../composables/component.js";
import { provideDefaults } from "../../composables/defaults.js";
import { makeDensityProps, useDensity } from "../../composables/density.js";
import { makeDimensionProps, useDimension } from "../../composables/dimensions.js";
import { makeDisplayProps, useDisplay } from "../../composables/display.js";
import { makeElevationProps, useElevation } from "../../composables/elevation.js";
import { IconValue } from "../../composables/icons.js";
import { makeLocationProps, useLocation } from "../../composables/location.js";
import { makePositionProps, usePosition } from "../../composables/position.js";
import { makeRoundedProps, useRounded } from "../../composables/rounded.js";
import { makeTagProps } from "../../composables/tag.js";
import { makeThemeProps, provideTheme } from "../../composables/theme.js"; // Utilities
import { toRef } from 'vue';
import { genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVBannerProps = propsFactory({
  avatar: String,
  bgColor: String,
  color: String,
  icon: IconValue,
  lines: String,
  stacked: Boolean,
  sticky: Boolean,
  text: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeDisplayProps({
    mobile: null
  }),
  ...makeElevationProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, 'VBanner');
export const VBanner = genericComponent()({
  name: 'VBanner',
  props: makeVBannerProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.bgColor);
    const {
      borderClasses
    } = useBorder(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      displayClasses,
      mobile
    } = useDisplay(props);
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
    const {
      themeClasses
    } = provideTheme(props);
    const color = toRef(() => props.color);
    const density = toRef(() => props.density);
    provideDefaults({
      VBannerActions: {
        color,
        density
      }
    });
    useRender(() => {
      const hasText = !!(props.text || slots.text);
      const hasPrependMedia = !!(props.avatar || props.icon);
      const hasPrepend = !!(hasPrependMedia || slots.prepend);
      return _createVNode(props.tag, {
        "class": _normalizeClass(['v-banner', {
          'v-banner--stacked': props.stacked || mobile.value,
          'v-banner--sticky': props.sticky,
          [`v-banner--${props.lines}-line`]: !!props.lines
        }, themeClasses.value, backgroundColorClasses.value, borderClasses.value, densityClasses.value, displayClasses.value, elevationClasses.value, positionClasses.value, roundedClasses.value, props.class]),
        "style": _normalizeStyle([backgroundColorStyles.value, dimensionStyles.value, locationStyles.value, props.style]),
        "role": "banner"
      }, {
        default: () => [hasPrepend && _createElementVNode("div", {
          "key": "prepend",
          "class": "v-banner__prepend"
        }, [!slots.prepend ? _createVNode(VAvatar, {
          "key": "prepend-avatar",
          "color": color.value,
          "density": density.value,
          "icon": props.icon,
          "image": props.avatar
        }, null) : _createVNode(VDefaultsProvider, {
          "key": "prepend-defaults",
          "disabled": !hasPrependMedia,
          "defaults": {
            VAvatar: {
              color: color.value,
              density: density.value,
              icon: props.icon,
              image: props.avatar
            }
          }
        }, slots.prepend)]), _createElementVNode("div", {
          "class": "v-banner__content"
        }, [hasText && _createVNode(VBannerText, {
          "key": "text"
        }, {
          default: () => [slots.text?.() ?? props.text]
        }), slots.default?.()]), slots.actions && _createVNode(VBannerActions, {
          "key": "actions"
        }, slots.actions)]
      });
    });
  }
});
//# sourceMappingURL=VBanner.js.map