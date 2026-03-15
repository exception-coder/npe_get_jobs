import { normalizeStyle as _normalizeStyle, createElementVNode as _createElementVNode, createVNode as _createVNode, normalizeClass as _normalizeClass } from "vue";
// Components
import { VTimelineDivider } from "./VTimelineDivider.js"; // Composables
import { makeComponentProps } from "../../composables/component.js";
import { makeDimensionProps, useDimension } from "../../composables/dimensions.js";
import { makeElevationProps } from "../../composables/elevation.js";
import { IconValue } from "../../composables/icons.js";
import { makeRoundedProps } from "../../composables/rounded.js";
import { makeSizeProps } from "../../composables/size.js";
import { makeTagProps } from "../../composables/tag.js"; // Utilities
import { ref, shallowRef, watch } from 'vue';
import { convertToUnit, genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
// Types
export const makeVTimelineItemProps = propsFactory({
  density: String,
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  hideOpposite: {
    type: Boolean,
    default: undefined
  },
  icon: IconValue,
  iconColor: String,
  lineInset: [Number, String],
  side: {
    type: String,
    validator: v => v == null || ['start', 'end'].includes(v)
  },
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeTagProps()
}, 'VTimelineItem');
export const VTimelineItem = genericComponent()({
  name: 'VTimelineItem',
  props: makeVTimelineItemProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      dimensionStyles
    } = useDimension(props);
    const dotSize = shallowRef(0);
    const dotRef = ref();
    watch(dotRef, newValue => {
      if (!newValue) return;
      dotSize.value = newValue.$el.querySelector('.v-timeline-divider__dot')?.getBoundingClientRect().width ?? 0;
    }, {
      flush: 'post'
    });
    useRender(() => _createElementVNode("div", {
      "class": _normalizeClass(['v-timeline-item', {
        'v-timeline-item--fill-dot': props.fillDot,
        'v-timeline-item--side-start': props.side === 'start',
        'v-timeline-item--side-end': props.side === 'end'
      }, props.class]),
      "style": _normalizeStyle([{
        '--v-timeline-dot-size': convertToUnit(dotSize.value),
        '--v-timeline-line-inset': props.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${convertToUnit(props.lineInset)})` : convertToUnit(0)
      }, props.style])
    }, [_createElementVNode("div", {
      "class": "v-timeline-item__body",
      "style": _normalizeStyle(dimensionStyles.value)
    }, [slots.default?.()]), _createVNode(VTimelineDivider, {
      "ref": dotRef,
      "hideDot": props.hideDot,
      "icon": props.icon,
      "iconColor": props.iconColor,
      "size": props.size,
      "elevation": props.elevation,
      "dotColor": props.dotColor,
      "fillDot": props.fillDot,
      "rounded": props.rounded
    }, {
      default: slots.icon
    }), props.density !== 'compact' && _createElementVNode("div", {
      "class": "v-timeline-item__opposite"
    }, [!props.hideOpposite && slots.opposite?.()])]));
    return {};
  }
});
//# sourceMappingURL=VTimelineItem.js.map