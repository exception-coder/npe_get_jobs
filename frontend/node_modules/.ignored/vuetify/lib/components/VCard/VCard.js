import { createVNode as _createVNode, createElementVNode as _createElementVNode, mergeProps as _mergeProps, withDirectives as _withDirectives } from "vue";
/* eslint-disable complexity */

// Styles
import "./VCard.css";

// Components
import { VCardActions } from "./VCardActions.js";
import { VCardItem } from "./VCardItem.js";
import { VCardText } from "./VCardText.js";
import { VDefaultsProvider } from "../VDefaultsProvider/index.js";
import { VImg } from "../VImg/index.js"; // Composables
import { makeBorderProps, useBorder } from "../../composables/border.js";
import { makeComponentProps } from "../../composables/component.js";
import { makeDensityProps, useDensity } from "../../composables/density.js";
import { makeDimensionProps, useDimension } from "../../composables/dimensions.js";
import { makeElevationProps, useElevation } from "../../composables/elevation.js";
import { IconValue } from "../../composables/icons.js";
import { LoaderSlot, makeLoaderProps, useLoader } from "../../composables/loader.js";
import { makeLocationProps, useLocation } from "../../composables/location.js";
import { makePositionProps, usePosition } from "../../composables/position.js";
import { makeRoundedProps, useRounded } from "../../composables/rounded.js";
import { makeRouterProps, useLink } from "../../composables/router.js";
import { makeTagProps } from "../../composables/tag.js";
import { makeThemeProps, provideTheme } from "../../composables/theme.js";
import { genOverlays, makeVariantProps, useVariant } from "../../composables/variant.js"; // Directives
import vRipple from "../../directives/ripple/index.js"; // Utilities
import { shallowRef, watch } from 'vue';
import { genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVCardProps = propsFactory({
  appendAvatar: String,
  appendIcon: IconValue,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: undefined
  },
  prependAvatar: String,
  prependIcon: IconValue,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  subtitle: {
    type: [String, Number, Boolean],
    default: undefined
  },
  text: {
    type: [String, Number, Boolean],
    default: undefined
  },
  title: {
    type: [String, Number, Boolean],
    default: undefined
  },
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLoaderProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: 'elevated'
  })
}, 'VCard');
export const VCard = genericComponent()({
  name: 'VCard',
  directives: {
    vRipple
  },
  props: makeVCardProps(),
  setup(props, _ref) {
    let {
      attrs,
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
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      loaderClasses
    } = useLoader(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const link = useLink(props, attrs);
    const loadingColor = shallowRef(undefined);
    watch(() => props.loading, (val, old) => {
      loadingColor.value = !val && typeof old === 'string' ? old : typeof val === 'boolean' ? undefined : val;
    }, {
      immediate: true
    });
    useRender(() => {
      const isLink = props.link !== false && link.isLink.value;
      const isClickable = !props.disabled && props.link !== false && (props.link || link.isClickable.value);
      const Tag = isLink ? 'a' : props.tag;
      const hasTitle = !!(slots.title || props.title != null);
      const hasSubtitle = !!(slots.subtitle || props.subtitle != null);
      const hasHeader = hasTitle || hasSubtitle;
      const hasAppend = !!(slots.append || props.appendAvatar || props.appendIcon);
      const hasPrepend = !!(slots.prepend || props.prependAvatar || props.prependIcon);
      const hasImage = !!(slots.image || props.image);
      const hasCardItem = hasHeader || hasPrepend || hasAppend;
      const hasText = !!(slots.text || props.text != null);
      return _withDirectives(_createVNode(Tag, _mergeProps(link.linkProps, {
        "class": ['v-card', {
          'v-card--disabled': props.disabled,
          'v-card--flat': props.flat,
          'v-card--hover': props.hover && !(props.disabled || props.flat),
          'v-card--link': isClickable
        }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, loaderClasses.value, positionClasses.value, roundedClasses.value, variantClasses.value, props.class],
        "style": [colorStyles.value, dimensionStyles.value, locationStyles.value, props.style],
        "onClick": isClickable && link.navigate,
        "tabindex": props.disabled ? -1 : undefined
      }), {
        default: () => [hasImage && _createElementVNode("div", {
          "key": "image",
          "class": "v-card__image"
        }, [!slots.image ? _createVNode(VImg, {
          "key": "image-img",
          "cover": true,
          "src": props.image
        }, null) : _createVNode(VDefaultsProvider, {
          "key": "image-defaults",
          "disabled": !props.image,
          "defaults": {
            VImg: {
              cover: true,
              src: props.image
            }
          }
        }, slots.image)]), _createVNode(LoaderSlot, {
          "name": "v-card",
          "active": !!props.loading,
          "color": loadingColor.value
        }, {
          default: slots.loader
        }), hasCardItem && _createVNode(VCardItem, {
          "key": "item",
          "prependAvatar": props.prependAvatar,
          "prependIcon": props.prependIcon,
          "title": props.title,
          "subtitle": props.subtitle,
          "appendAvatar": props.appendAvatar,
          "appendIcon": props.appendIcon
        }, {
          default: slots.item,
          prepend: slots.prepend,
          title: slots.title,
          subtitle: slots.subtitle,
          append: slots.append
        }), hasText && _createVNode(VCardText, {
          "key": "text"
        }, {
          default: () => [slots.text?.() ?? props.text]
        }), slots.default?.(), slots.actions && _createVNode(VCardActions, null, {
          default: slots.actions
        }), genOverlays(isClickable, 'v-card')]
      }), [[vRipple, isClickable && props.ripple]]);
    });
    return {};
  }
});
//# sourceMappingURL=VCard.js.map