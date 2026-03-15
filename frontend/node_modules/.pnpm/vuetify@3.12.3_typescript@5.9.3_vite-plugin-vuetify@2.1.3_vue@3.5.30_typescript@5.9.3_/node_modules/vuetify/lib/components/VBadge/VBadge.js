import { createVNode as _createVNode, vShow as _vShow, mergeProps as _mergeProps, createElementVNode as _createElementVNode, withDirectives as _withDirectives } from "vue";
// Styles
import "./VBadge.css";

// Components
import { VIcon } from "../VIcon/index.js"; // Composables
import { useBackgroundColor, useTextColor } from "../../composables/color.js";
import { makeComponentProps } from "../../composables/component.js";
import { makeDimensionProps, useDimension } from "../../composables/dimensions.js";
import { IconValue } from "../../composables/icons.js";
import { useLocale } from "../../composables/locale.js";
import { makeLocationProps, useLocation } from "../../composables/location.js";
import { makeRoundedProps, useRounded } from "../../composables/rounded.js";
import { makeTagProps } from "../../composables/tag.js";
import { makeThemeProps, useTheme } from "../../composables/theme.js";
import { makeTransitionProps, MaybeTransition } from "../../composables/transition.js"; // Utilities
import { genericComponent, pickWithRest, propsFactory, useRender } from "../../util/index.js";
export const makeVBadgeProps = propsFactory({
  bordered: Boolean,
  color: String,
  content: [Number, String],
  dot: Boolean,
  floating: Boolean,
  icon: IconValue,
  inline: Boolean,
  label: {
    type: String,
    default: '$vuetify.badge'
  },
  max: [Number, String],
  modelValue: {
    type: Boolean,
    default: true
  },
  offsetX: [Number, String],
  offsetY: [Number, String],
  textColor: String,
  ...makeComponentProps(),
  ...makeLocationProps({
    location: 'top end'
  }),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeTransitionProps({
    transition: 'scale-rotate-transition'
  }),
  ...makeDimensionProps()
}, 'VBadge');
export const VBadge = genericComponent()({
  name: 'VBadge',
  inheritAttrs: false,
  props: makeVBadgeProps(),
  setup(props, ctx) {
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      t
    } = useLocale();
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(() => props.textColor);
    const {
      themeClasses
    } = useTheme();
    const {
      locationStyles
    } = useLocation(props, true, side => {
      const base = props.floating ? props.dot ? 2 : 4 : props.dot ? 8 : 12;
      return base + (['top', 'bottom'].includes(side) ? Number(props.offsetY ?? 0) : ['left', 'right'].includes(side) ? Number(props.offsetX ?? 0) : 0);
    });
    const {
      dimensionStyles
    } = useDimension(props);
    useRender(() => {
      const value = Number(props.content);
      const content = !props.max || isNaN(value) ? props.content : value <= Number(props.max) ? value : `${props.max}+`;
      const [badgeAttrs, attrs] = pickWithRest(ctx.attrs, ['aria-atomic', 'aria-label', 'aria-live', 'role', 'title']);
      return _createVNode(props.tag, _mergeProps({
        "class": ['v-badge', {
          'v-badge--bordered': props.bordered,
          'v-badge--dot': props.dot,
          'v-badge--floating': props.floating,
          'v-badge--inline': props.inline
        }, props.class]
      }, attrs, {
        "style": props.style
      }), {
        default: () => [_createElementVNode("div", {
          "class": "v-badge__wrapper"
        }, [ctx.slots.default?.(), _createVNode(MaybeTransition, {
          "transition": props.transition
        }, {
          default: () => [_withDirectives(_createElementVNode("span", _mergeProps({
            "class": ['v-badge__badge', themeClasses.value, backgroundColorClasses.value, roundedClasses.value, textColorClasses.value],
            "style": [backgroundColorStyles.value, textColorStyles.value, dimensionStyles.value, props.inline ? {} : locationStyles.value],
            "aria-atomic": "true",
            "aria-label": t(props.label, value),
            "aria-live": "polite",
            "role": "status"
          }, badgeAttrs), [props.dot ? undefined : ctx.slots.badge ? ctx.slots.badge?.() : props.icon ? _createVNode(VIcon, {
            "icon": props.icon
          }, null) : content]), [[_vShow, props.modelValue]])]
        })])]
      });
    });
    return {};
  }
});
//# sourceMappingURL=VBadge.js.map