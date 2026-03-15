import { createElementVNode as _createElementVNode, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle } from "vue";
// Styles
import "./VSliderTrack.css";

// Components
import { VSliderSymbol } from "./slider.js"; // Composables
import { useBackgroundColor } from "../../composables/color.js";
import { makeComponentProps } from "../../composables/component.js";
import { useRounded } from "../../composables/rounded.js"; // Utilities
import { computed, inject } from 'vue';
import { convertToUnit, genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVSliderTrackProps = propsFactory({
  start: {
    type: Number,
    required: true
  },
  stop: {
    type: Number,
    required: true
  },
  ...makeComponentProps()
}, 'VSliderTrack');
export const VSliderTrack = genericComponent()({
  name: 'VSliderTrack',
  props: makeVSliderTrackProps(),
  emits: {},
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const slider = inject(VSliderSymbol);
    if (!slider) throw new Error('[Vuetify] v-slider-track must be inside v-slider or v-range-slider');
    const {
      color,
      parsedTicks,
      rounded,
      showTicks,
      tickSize,
      trackColor,
      trackFillColor,
      trackSize,
      vertical,
      min,
      max,
      indexFromEnd
    } = slider;
    const {
      roundedClasses
    } = useRounded(rounded);
    const {
      backgroundColorClasses: trackFillColorClasses,
      backgroundColorStyles: trackFillColorStyles
    } = useBackgroundColor(trackFillColor);
    const {
      backgroundColorClasses: trackColorClasses,
      backgroundColorStyles: trackColorStyles
    } = useBackgroundColor(trackColor);
    const startDir = computed(() => `inset-${vertical.value ? 'block' : 'inline'}-${indexFromEnd.value ? 'end' : 'start'}`);
    const endDir = computed(() => vertical.value ? 'height' : 'width');
    const backgroundStyles = computed(() => {
      return {
        [startDir.value]: '0%',
        [endDir.value]: '100%'
      };
    });
    const trackFillWidth = computed(() => props.stop - props.start);
    const trackFillStyles = computed(() => {
      return {
        [startDir.value]: convertToUnit(props.start, '%'),
        [endDir.value]: convertToUnit(trackFillWidth.value, '%')
      };
    });
    const computedTicks = computed(() => {
      if (!showTicks.value) return [];
      const ticks = vertical.value ? parsedTicks.value.slice().reverse() : parsedTicks.value;
      return ticks.map((tick, index) => {
        const directionValue = tick.value !== min.value && tick.value !== max.value ? convertToUnit(tick.position, '%') : undefined;
        return _createElementVNode("div", {
          "key": tick.value,
          "class": _normalizeClass(['v-slider-track__tick', {
            'v-slider-track__tick--filled': tick.position >= props.start && tick.position <= props.stop,
            'v-slider-track__tick--first': tick.value === min.value,
            'v-slider-track__tick--last': tick.value === max.value
          }]),
          "style": {
            [startDir.value]: directionValue
          }
        }, [(tick.label || slots['tick-label']) && _createElementVNode("div", {
          "class": "v-slider-track__tick-label"
        }, [slots['tick-label']?.({
          tick,
          index
        }) ?? tick.label])]);
      });
    });
    useRender(() => {
      return _createElementVNode("div", {
        "class": _normalizeClass(['v-slider-track', roundedClasses.value, props.class]),
        "style": _normalizeStyle([{
          '--v-slider-track-size': convertToUnit(trackSize.value),
          '--v-slider-tick-size': convertToUnit(tickSize.value)
        }, props.style])
      }, [_createElementVNode("div", {
        "class": _normalizeClass(['v-slider-track__background', trackColorClasses.value, {
          'v-slider-track__background--opacity': !!color.value || !trackFillColor.value
        }]),
        "style": {
          ...backgroundStyles.value,
          ...trackColorStyles.value
        }
      }, null), _createElementVNode("div", {
        "class": _normalizeClass(['v-slider-track__fill', trackFillColorClasses.value]),
        "style": {
          ...trackFillStyles.value,
          ...trackFillColorStyles.value
        }
      }, null), showTicks.value && _createElementVNode("div", {
        "class": _normalizeClass(['v-slider-track__ticks', {
          'v-slider-track__ticks--always-show': showTicks.value === 'always'
        }])
      }, [computedTicks.value])]);
    });
    return {};
  }
});
//# sourceMappingURL=VSliderTrack.js.map