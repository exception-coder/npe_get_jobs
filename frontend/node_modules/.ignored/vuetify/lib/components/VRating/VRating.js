import { Fragment as _Fragment, createElementVNode as _createElementVNode, mergeProps as _mergeProps, createVNode as _createVNode, normalizeClass as _normalizeClass, createTextVNode as _createTextVNode, normalizeStyle as _normalizeStyle } from "vue";
// Styles
import "./VRating.css";

// Components
import { VBtn } from "../VBtn/index.js"; // Composables
import { makeComponentProps } from "../../composables/component.js";
import { makeDensityProps } from "../../composables/density.js";
import { IconValue } from "../../composables/icons.js";
import { useLocale } from "../../composables/locale.js";
import { useProxiedModel } from "../../composables/proxiedModel.js";
import { makeSizeProps } from "../../composables/size.js";
import { makeTagProps } from "../../composables/tag.js";
import { makeThemeProps, provideTheme } from "../../composables/theme.js"; // Utilities
import { computed, shallowRef, useId } from 'vue';
import { clamp, createRange, genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVRatingProps = propsFactory({
  name: String,
  itemAriaLabel: {
    type: String,
    default: '$vuetify.rating.ariaLabel.item'
  },
  activeColor: String,
  color: String,
  clearable: Boolean,
  disabled: Boolean,
  emptyIcon: {
    type: IconValue,
    default: '$ratingEmpty'
  },
  fullIcon: {
    type: IconValue,
    default: '$ratingFull'
  },
  halfIncrements: Boolean,
  hover: Boolean,
  length: {
    type: [Number, String],
    default: 5
  },
  readonly: Boolean,
  modelValue: {
    type: [Number, String],
    default: 0
  },
  itemLabels: Array,
  itemLabelPosition: {
    type: String,
    default: 'top',
    validator: v => ['top', 'bottom'].includes(v)
  },
  ripple: Boolean,
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeSizeProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, 'VRating');
export const VRating = genericComponent()({
  name: 'VRating',
  props: makeVRatingProps(),
  emits: {
    'update:modelValue': value => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const {
      themeClasses
    } = provideTheme(props);
    const rating = useProxiedModel(props, 'modelValue');
    const normalizedValue = computed(() => clamp(parseFloat(rating.value), 0, Number(props.length)));
    const range = computed(() => createRange(Number(props.length), 1));
    const increments = computed(() => range.value.flatMap(v => props.halfIncrements ? [v - 0.5, v] : [v]));
    const hoverIndex = shallowRef(-1);
    const itemState = computed(() => increments.value.map(value => {
      const isHovering = props.hover && hoverIndex.value > -1;
      const isFilled = normalizedValue.value >= value;
      const isHovered = hoverIndex.value >= value;
      const isFullIcon = isHovering ? isHovered : isFilled;
      const icon = isFullIcon ? props.fullIcon : props.emptyIcon;
      const activeColor = props.activeColor ?? props.color;
      const color = isFilled || isHovered ? activeColor : props.color;
      return {
        isFilled,
        isHovered,
        icon,
        color
      };
    }));
    const eventState = computed(() => [0, ...increments.value].map(value => {
      function onMouseenter() {
        hoverIndex.value = value;
      }
      function onMouseleave() {
        hoverIndex.value = -1;
      }
      function onClick() {
        if (props.disabled || props.readonly) return;
        rating.value = normalizedValue.value === value && props.clearable ? 0 : value;
      }
      return {
        onMouseenter: props.hover ? onMouseenter : undefined,
        onMouseleave: props.hover ? onMouseleave : undefined,
        onClick
      };
    }));
    const uid = useId();
    const name = computed(() => props.name ?? `v-rating-${uid}`);
    function VRatingItem(_ref2) {
      let {
        value,
        index,
        showStar = true
      } = _ref2;
      const {
        onMouseenter,
        onMouseleave,
        onClick
      } = eventState.value[index + 1];
      const id = `${name.value}-${String(value).replace('.', '-')}`;
      const btnProps = {
        color: itemState.value[index]?.color,
        density: props.density,
        disabled: props.disabled,
        icon: itemState.value[index]?.icon,
        ripple: props.ripple,
        size: props.size,
        variant: 'plain'
      };
      return _createElementVNode(_Fragment, null, [_createElementVNode("label", {
        "for": id,
        "class": _normalizeClass({
          'v-rating__item--half': props.halfIncrements && value % 1 > 0,
          'v-rating__item--full': props.halfIncrements && value % 1 === 0
        }),
        "onMouseenter": onMouseenter,
        "onMouseleave": onMouseleave,
        "onClick": onClick
      }, [_createElementVNode("span", {
        "class": "v-rating__hidden"
      }, [t(props.itemAriaLabel, value, props.length)]), !showStar ? undefined : slots.item ? slots.item({
        ...itemState.value[index],
        props: btnProps,
        value,
        index,
        rating: normalizedValue.value
      }) : _createVNode(VBtn, _mergeProps({
        "aria-label": t(props.itemAriaLabel, value, props.length)
      }, btnProps), null)]), _createElementVNode("input", {
        "class": "v-rating__hidden",
        "name": name.value,
        "id": id,
        "type": "radio",
        "value": value,
        "checked": normalizedValue.value === value,
        "tabindex": -1,
        "readonly": props.readonly,
        "disabled": props.disabled
      }, null)]);
    }
    function createLabel(labelProps) {
      if (slots['item-label']) return slots['item-label'](labelProps);
      if (labelProps.label) return _createElementVNode("span", null, [labelProps.label]);
      return _createElementVNode("span", null, [_createTextVNode("\xA0")]);
    }
    useRender(() => {
      const hasLabels = !!props.itemLabels?.length || slots['item-label'];
      return _createVNode(props.tag, {
        "class": _normalizeClass(['v-rating', {
          'v-rating--hover': props.hover,
          'v-rating--readonly': props.readonly
        }, themeClasses.value, props.class]),
        "style": _normalizeStyle(props.style)
      }, {
        default: () => [_createVNode(VRatingItem, {
          "value": 0,
          "index": -1,
          "showStar": false
        }, null), range.value.map((value, i) => _createElementVNode("div", {
          "class": "v-rating__wrapper"
        }, [hasLabels && props.itemLabelPosition === 'top' ? createLabel({
          value,
          index: i,
          label: props.itemLabels?.[i]
        }) : undefined, _createElementVNode("div", {
          "class": "v-rating__item"
        }, [props.halfIncrements ? _createElementVNode(_Fragment, null, [_createVNode(VRatingItem, {
          "value": value - 0.5,
          "index": i * 2
        }, null), _createVNode(VRatingItem, {
          "value": value,
          "index": i * 2 + 1
        }, null)]) : _createVNode(VRatingItem, {
          "value": value,
          "index": i
        }, null)]), hasLabels && props.itemLabelPosition === 'bottom' ? createLabel({
          value,
          index: i,
          label: props.itemLabels?.[i]
        }) : undefined]))]
      });
    });
    return {};
  }
});
//# sourceMappingURL=VRating.js.map