import { mergeProps as _mergeProps, createVNode as _createVNode, createElementVNode as _createElementVNode, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle } from "vue";
// Styles
import "./VIconBtn.css";

// Components
import { VDefaultsProvider } from "../../components/VDefaultsProvider/index.js";
import { VIcon } from "../../components/VIcon/index.js";
import { VProgressCircular } from "../../components/VProgressCircular/index.js"; // Composables
import { makeBorderProps, useBorder } from "../../composables/border.js";
import { makeComponentProps } from "../../composables/component.js";
import { makeElevationProps, useElevation } from "../../composables/elevation.js";
import { makeIconSizeProps, useIconSizes } from "../../composables/iconSizes.js";
import { useProxiedModel } from "../../composables/proxiedModel.js";
import { makeRoundedProps, useRounded } from "../../composables/rounded.js";
import { makeTagProps } from "../../composables/tag.js";
import { makeThemeProps, provideTheme } from "../../composables/theme.js";
import { genOverlays, makeVariantProps, useVariant } from "../../composables/variant.js"; // Utilities
import { toDisplayString } from 'vue';
import { convertToUnit, genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVIconBtnProps = propsFactory({
  active: {
    type: Boolean,
    default: undefined
  },
  activeColor: String,
  activeIcon: [String, Function, Object],
  activeVariant: String,
  baseVariant: {
    type: String,
    default: 'tonal'
  },
  disabled: Boolean,
  height: [Number, String],
  width: [Number, String],
  hideOverlay: Boolean,
  icon: [String, Function, Object],
  iconColor: String,
  loading: Boolean,
  opacity: [Number, String],
  readonly: Boolean,
  rotate: [Number, String],
  size: {
    type: [Number, String],
    default: 'default'
  },
  sizes: {
    type: Array,
    default: () => [['x-small', 16], ['small', 24], ['default', 40], ['large', 48], ['x-large', 56]]
  },
  text: {
    type: [String, Number, Boolean],
    default: undefined
  },
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeIconSizeProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: 'button'
  }),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: 'flat'
  })
}, 'VIconBtn');
export const VIconBtn = genericComponent()({
  name: 'VIconBtn',
  props: makeVIconBtnProps(),
  emits: {
    'update:active': value => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const isActive = useProxiedModel(props, 'active');
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(() => ({
      color: (() => {
        if (props.disabled) return undefined;
        if (!isActive.value) return props.color;
        // Use an inline fallback as opposed to setting a default color
        // because non-toggle buttons are default flat whereas toggle
        // buttons are default tonal and active flat. The exact use
        // case for this is a toggle button with no active color.
        return props.activeColor ?? props.color ?? 'surface-variant';
      })(),
      variant: (() => {
        if (isActive.value === undefined) return props.variant;
        if (isActive.value) return props.activeVariant ?? props.variant;
        return props.baseVariant ?? props.variant;
      })()
    }));
    const btnSizeMap = new Map(props.sizes);
    function onClick() {
      if (props.disabled || props.readonly || isActive.value === undefined || props.tag === 'a' && attrs.href) return;
      isActive.value = !isActive.value;
    }
    useRender(() => {
      const icon = isActive.value ? props.activeIcon ?? props.icon : props.icon;
      const _btnSize = props.size;
      const hasNamedSize = btnSizeMap.has(_btnSize);
      const btnSize = hasNamedSize ? btnSizeMap.get(_btnSize) : _btnSize;
      const btnHeight = props.height ?? btnSize;
      const btnWidth = props.width ?? btnSize;
      const {
        iconSize
      } = useIconSizes(props, () => new Map(props.iconSizes).get(_btnSize));
      const iconProps = {
        icon,
        size: iconSize.value,
        color: props.iconColor,
        opacity: props.opacity
      };
      return _createVNode(props.tag, {
        "type": props.tag === 'button' ? 'button' : undefined,
        "class": _normalizeClass([{
          'v-icon-btn': true,
          'v-icon-btn--active': isActive.value,
          'v-icon-btn--disabled': props.disabled,
          'v-icon-btn--loading': props.loading,
          'v-icon-btn--readonly': props.readonly,
          [`v-icon-btn--${props.size}`]: true
        }, themeClasses.value, colorClasses.value, borderClasses.value, elevationClasses.value, roundedClasses.value, variantClasses.value, props.class]),
        "style": _normalizeStyle([{
          '--v-icon-btn-rotate': convertToUnit(props.rotate, 'deg'),
          '--v-icon-btn-height': convertToUnit(btnHeight),
          '--v-icon-btn-width': convertToUnit(btnWidth)
        }, colorStyles.value, props.style]),
        "tabindex": props.disabled || props.readonly ? -1 : 0,
        "onClick": onClick
      }, {
        default: () => [genOverlays(!props.hideOverlay, 'v-icon-btn'), _createElementVNode("div", {
          "class": "v-icon-btn__content",
          "data-no-activator": ""
        }, [!slots.default && icon ? _createVNode(VIcon, _mergeProps({
          "key": "content-icon"
        }, iconProps), null) : _createVNode(VDefaultsProvider, {
          "key": "content-defaults",
          "disabled": !icon,
          "defaults": {
            VIcon: {
              ...iconProps
            }
          }
        }, {
          default: () => slots.default?.() ?? toDisplayString(props.text)
        })]), !!props.loading && _createElementVNode("span", {
          "key": "loader",
          "class": "v-icon-btn__loader"
        }, [slots.loader?.() ?? _createVNode(VProgressCircular, {
          "color": typeof props.loading === 'boolean' ? undefined : props.loading,
          "indeterminate": "disable-shrink",
          "width": "2",
          "size": iconSize.value
        }, null)])]
      });
    });
    return {};
  }
});
//# sourceMappingURL=VIconBtn.js.map