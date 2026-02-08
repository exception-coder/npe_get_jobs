import { createElementVNode as _createElementVNode } from "vue";
// Composables
import { useProxiedModel } from "../../composables/proxiedModel.js";
import { makeRevealProps, useReveal } from "../../composables/reveal.js"; // Utilities
import { computed, toRef } from 'vue';
import { useInnerSlicePath, useOuterSlicePath, usePieArc } from "./utils.js";
import { easingPatterns, genericComponent, propsFactory, useTransition } from "../../util/index.js"; // Types
export const makeVPieSegmentProps = propsFactory({
  active: Boolean,
  rotate: [Number, String],
  value: {
    type: Number,
    default: 0
  },
  color: String,
  innerCut: [Number, String],
  hoverScale: {
    type: [Number, String],
    default: 0.05
  },
  gap: [Number, String],
  rounded: [Number, String],
  animation: {
    type: [Boolean, Object],
    default: false
  },
  pattern: String,
  hideSlice: Boolean,
  ...makeRevealProps()
}, 'VPieSegment');
export const VPieSegment = genericComponent()({
  name: 'VPieSegment',
  props: makeVPieSegmentProps(),
  emits: {
    'update:active': val => true
  },
  setup(props) {
    const isActive = useProxiedModel(props, 'active');
    const {
      state: revealState,
      duration: revealDuration
    } = useReveal(props);
    const transitionConfig = computed(() => {
      const defaultEasing = 'easeInOutCubic';
      const defaultDuration = 400;
      const easingName = typeof props.animation === 'object' ? props.animation.easing ?? defaultEasing : defaultEasing;
      return {
        duration: ['initial', 'pending'].includes(revealState.value) ? revealDuration.value : typeof props.animation === 'object' ? props.animation.duration : props.animation ? defaultDuration : 0,
        transition: easingPatterns[easingName]
      };
    });
    const {
      hoverZoomRatio,
      normalizedValue,
      normalizedInnerCut,
      outerX,
      outerY,
      arcWidth
    } = usePieArc(props, isActive);
    const arcSize = toRef(() => revealState.value === 'initial' ? 0 : normalizedValue.value);
    const currentArcSize = useTransition(arcSize, transitionConfig);
    const angle = toRef(() => revealState.value === 'initial' ? 0 : Number(props.rotate ?? 0) + Number(props.gap ?? 0) / 2);
    const currentAngle = useTransition(angle, transitionConfig);
    const arcRadius = toRef(() => 50 * (isActive.value ? 1 : 1 - hoverZoomRatio.value));
    const currentArcRadius = useTransition(arcRadius, transitionConfig);
    const currentArcWidth = useTransition(arcWidth, transitionConfig);
    const outerSlicePath = useOuterSlicePath({
      angle: currentAngle,
      radius: currentArcRadius,
      size: currentArcSize,
      width: currentArcWidth,
      rounded: () => Number(props.rounded ?? 0)
    });
    const innerSlicePath = useInnerSlicePath({
      angle: currentAngle,
      radius: () => currentArcRadius.value - currentArcWidth.value,
      size: currentArcSize
    });
    const overlayPath = toRef(() => `M 50 0 A 50 50 0 ${normalizedValue.value > 50 ? 1 : 0} 1 ${outerX.value} ${outerY.value} L 50 50`);
    return () => _createElementVNode("g", {
      "class": "v-pie-segment",
      "style": {
        color: props.color
      }
    }, [_createElementVNode("path", {
      "key": "outer-slice",
      "fill": "currentColor",
      "shape-rendering": "geometricPrecision",
      "d": outerSlicePath.value
    }, null), props.pattern && _createElementVNode("path", {
      "key": "pattern-overlay",
      "shape-rendering": "geometricPrecision",
      "fill": props.pattern,
      "d": outerSlicePath.value
    }, null), !props.hideSlice && normalizedInnerCut.value > 0 && _createElementVNode("path", {
      "key": "inner-slice",
      "fill": "oklch(from currentColor l c h / calc(alpha / 2))",
      "d": innerSlicePath.value
    }, null), ['disabled', 'done'].includes(revealState.value) && _createElementVNode("path", {
      "transform": `rotate(${currentAngle.value} 50 50)`,
      "class": "v-pie-segment__overlay",
      "d": overlayPath.value,
      "onMouseenter": () => isActive.value = true,
      "onMouseleave": () => isActive.value = false
    }, null)]);
  }
});
//# sourceMappingURL=VPieSegment.js.map