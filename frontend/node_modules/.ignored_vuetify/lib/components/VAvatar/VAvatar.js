import { createVNode as _createVNode, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle } from "vue";
// Styles
import "./VAvatar.css";

// Components
import { VDefaultsProvider } from "../VDefaultsProvider/index.js";
import { VIcon } from "../VIcon/index.js";
import { VImg } from "../VImg/index.js"; // Composables
import { makeBorderProps, useBorder } from "../../composables/border.js";
import { makeComponentProps } from "../../composables/component.js";
import { makeDensityProps, useDensity } from "../../composables/density.js";
import { IconValue } from "../../composables/icons.js";
import { makeRoundedProps, useRounded } from "../../composables/rounded.js";
import { makeSizeProps, useSize } from "../../composables/size.js";
import { makeTagProps } from "../../composables/tag.js";
import { makeThemeProps, provideTheme } from "../../composables/theme.js";
import { genOverlays, makeVariantProps, useVariant } from "../../composables/variant.js"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.js";
export const makeVAvatarProps = propsFactory({
  start: Boolean,
  end: Boolean,
  icon: IconValue,
  image: String,
  text: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: 'flat'
  })
}, 'VAvatar');
export const VAvatar = genericComponent()({
  name: 'VAvatar',
  props: makeVAvatarProps(),
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
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props);
    useRender(() => _createVNode(props.tag, {
      "class": _normalizeClass(['v-avatar', {
        'v-avatar--start': props.start,
        'v-avatar--end': props.end
      }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, roundedClasses.value, sizeClasses.value, variantClasses.value, props.class]),
      "style": _normalizeStyle([colorStyles.value, sizeStyles.value, props.style])
    }, {
      default: () => [!slots.default ? props.image ? _createVNode(VImg, {
        "key": "image",
        "src": props.image,
        "alt": "",
        "cover": true
      }, null) : props.icon ? _createVNode(VIcon, {
        "key": "icon",
        "icon": props.icon
      }, null) : props.text : _createVNode(VDefaultsProvider, {
        "key": "content-defaults",
        "defaults": {
          VImg: {
            cover: true,
            src: props.image
          },
          VIcon: {
            icon: props.icon
          }
        }
      }, {
        default: () => [slots.default()]
      }), genOverlays(false, 'v-avatar')]
    }));
    return {};
  }
});
//# sourceMappingURL=VAvatar.js.map