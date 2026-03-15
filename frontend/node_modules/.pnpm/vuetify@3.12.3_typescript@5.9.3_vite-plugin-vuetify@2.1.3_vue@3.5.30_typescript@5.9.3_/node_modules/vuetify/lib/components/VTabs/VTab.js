import { Fragment as _Fragment, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createElementVNode as _createElementVNode, mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
// Styles
import "./VTab.css";

// Components
import { makeVBtnProps, VBtn } from "../VBtn/VBtn.js"; // Composables
import { useBackgroundColor, useTextColor } from "../../composables/color.js";
import { forwardRefs } from "../../composables/forwardRefs.js"; // Utilities
import { computed, ref } from 'vue';
import { VTabsSymbol } from "./shared.js";
import { animate, genericComponent, omit, propsFactory, standardEasing, useRender } from "../../util/index.js"; // Types
export const makeVTabProps = propsFactory({
  fixed: Boolean,
  sliderColor: String,
  sliderTransition: String,
  sliderTransitionDuration: [String, Number],
  hideSlider: Boolean,
  inset: Boolean,
  direction: {
    type: String,
    default: 'horizontal'
  },
  ...omit(makeVBtnProps({
    selectedClass: 'v-tab--selected',
    variant: 'text'
  }), ['active', 'block', 'flat', 'location', 'position', 'symbol'])
}, 'VTab');
export const VTab = genericComponent()({
  name: 'VTab',
  props: makeVTabProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      textColorClasses: sliderColorClasses,
      textColorStyles: sliderColorStyles
    } = useTextColor(() => props.sliderColor);
    const {
      backgroundColorClasses: insetColorClasses,
      backgroundColorStyles: insetColorStyles
    } = useBackgroundColor(() => props.sliderColor);
    const rootEl = ref();
    const sliderEl = ref();
    const isHorizontal = computed(() => props.direction === 'horizontal');
    const isSelected = computed(() => rootEl.value?.group?.isSelected.value ?? false);
    function fade(nextEl, prevEl) {
      return {
        opacity: [0, 1]
      };
    }
    function grow(nextEl, prevEl) {
      return props.direction === 'vertical' ? {
        transform: ['scaleY(0)', 'scaleY(1)']
      } : {
        transform: ['scaleX(0)', 'scaleX(1)']
      };
    }
    function shift(nextEl, prevEl) {
      const prevBox = prevEl.getBoundingClientRect();
      const nextBox = nextEl.getBoundingClientRect();
      const xy = isHorizontal.value ? 'x' : 'y';
      const XY = isHorizontal.value ? 'X' : 'Y';
      const rightBottom = isHorizontal.value ? 'right' : 'bottom';
      const widthHeight = isHorizontal.value ? 'width' : 'height';
      const prevPos = prevBox[xy];
      const nextPos = nextBox[xy];
      const delta = prevPos > nextPos ? prevBox[rightBottom] - nextBox[rightBottom] : prevBox[xy] - nextBox[xy];
      const origin = Math.sign(delta) > 0 ? isHorizontal.value ? 'right' : 'bottom' : Math.sign(delta) < 0 ? isHorizontal.value ? 'left' : 'top' : 'center';
      const size = Math.abs(delta) + (Math.sign(delta) < 0 ? prevBox[widthHeight] : nextBox[widthHeight]);
      const scale = size / Math.max(prevBox[widthHeight], nextBox[widthHeight]) || 0;
      const initialScale = prevBox[widthHeight] / nextBox[widthHeight] || 0;
      const sigma = 1.5;
      return {
        transform: [`translate${XY}(${delta}px) scale${XY}(${initialScale})`, `translate${XY}(${delta / sigma}px) scale${XY}(${(scale - 1) / sigma + 1})`, 'none'],
        transformOrigin: Array(3).fill(origin)
      };
    }
    function updateSlider(_ref2) {
      let {
        value
      } = _ref2;
      if (value) {
        const prevEl = rootEl.value?.$el.parentElement?.querySelector('.v-tab--selected .v-tab__slider');
        const nextEl = sliderEl.value;
        if (!prevEl || !nextEl) return;
        const color = getComputedStyle(prevEl).backgroundColor;
        const keyframes = {
          fade,
          grow,
          shift
        }[props.sliderTransition ?? 'shift'] ?? shift;
        const duration = Number(props.sliderTransitionDuration) || ({
          fade: 400,
          grow: 350,
          shift: 225
        }[props.sliderTransition ?? 'shift'] ?? 225);
        animate(nextEl, {
          backgroundColor: [color, color],
          ...keyframes(nextEl, prevEl)
        }, {
          duration,
          easing: standardEasing
        });
      }
    }
    useRender(() => {
      const btnProps = VBtn.filterProps(props);
      return _createVNode(VBtn, _mergeProps({
        "symbol": VTabsSymbol,
        "ref": rootEl,
        "class": ['v-tab', props.class, isSelected.value && props.inset ? insetColorClasses.value : []],
        "style": [props.style, isSelected.value && props.inset ? insetColorStyles.value : [], {
          backgroundColor: isSelected.value && props.inset ? 'transparent !important' : undefined
        }],
        "tabindex": isSelected.value ? 0 : -1,
        "role": "tab",
        "aria-selected": String(isSelected.value),
        "active": false
      }, btnProps, attrs, {
        "block": props.fixed,
        "maxWidth": props.fixed ? 300 : undefined,
        "onGroup:selected": updateSlider
      }), {
        ...slots,
        default: () => _createElementVNode(_Fragment, null, [slots.default?.() ?? props.text, !props.hideSlider && _createElementVNode("div", {
          "ref": sliderEl,
          "class": _normalizeClass(['v-tab__slider', props.inset ? insetColorClasses.value : sliderColorClasses.value]),
          "style": _normalizeStyle([sliderColorStyles.value, props.inset ? insetColorStyles.value : sliderColorClasses.value])
        }, null)])
      });
    });
    return forwardRefs({}, rootEl);
  }
});
//# sourceMappingURL=VTab.js.map