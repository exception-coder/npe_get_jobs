// Utilities
import { computed, toRef, toValue } from 'vue';
import { clamp } from "../../util/index.js";
import { roundedArc, simpleArc } from "../../util/svg-arc-corners.js"; // Types
export function formatTextTemplate(template, item) {
  return item ? template.replaceAll('[title]', item.title).replaceAll('[value]', String(item.value)) : undefined;
}
export function usePieArc(props, isHovering) {
  const hoverZoomRatio = toRef(() => clamp(Number(props.hoverScale ?? 0), 0, 0.25));
  const normalizedValue = toRef(() => clamp(props.value - 100 * Number(props.gap ?? 0) / 360, 0.01, 99.99));
  const normalizedInnerCut = toRef(() => {
    const min = Number(props.rounded ?? 0) > 0 ? 0.2 : 0;
    return clamp(Number(props.innerCut ?? 0) / 100, min, 1);
  });
  const radians = computed(() => (360 * (-normalizedValue.value / 100) + 90) * (Math.PI / 180));
  const arcWidth = computed(() => 50 * (1 - normalizedInnerCut.value) * (isHovering.value ? 1 : 1 - hoverZoomRatio.value));
  const outerX = toRef(() => 50 + 50 * Math.cos(radians.value));
  const outerY = toRef(() => 50 - 50 * Math.sin(radians.value));
  return {
    hoverZoomRatio,
    normalizedValue,
    normalizedInnerCut,
    outerX,
    outerY,
    arcWidth
  };
}
export function useOuterSlicePath(_ref) {
  let {
    angle,
    radius,
    size,
    width,
    rounded
  } = _ref;
  return computed(() => roundedArc([50, 50], toValue(radius), toValue(angle), toValue(angle) + 360 * toValue(size) / 100,
  // angle end,
  toValue(width), toValue(rounded)));
}
export function useInnerSlicePath(_ref2) {
  let {
    angle,
    radius,
    size
  } = _ref2;
  return computed(() => simpleArc([50, 50], toValue(radius), toValue(angle), toValue(angle) + 360 * toValue(size) / 100 // angle end,
  ));
}
//# sourceMappingURL=utils.js.map