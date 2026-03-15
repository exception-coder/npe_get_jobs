import { createVNode as _createVNode } from "vue";
// Components
import { VListItem } from "../../components/VList/VListItem.js";
import { makeVTooltipProps, VTooltip } from "../../components/VTooltip/VTooltip.js"; // Composables
import { makeTransitionProps, MaybeTransition } from "../../composables/transition.js"; // Utilities
import { toRef } from 'vue';
import { formatTextTemplate } from "./utils.js";
import { genericComponent, pick, propsFactory } from "../../util/index.js"; // Types
export const makeVPieTooltipProps = propsFactory({
  modelValue: Boolean,
  target: Object,
  item: {
    type: Object,
    default: null
  },
  titleFormat: {
    type: [String, Function],
    default: '[title]'
  },
  subtitleFormat: {
    type: [String, Function],
    default: '[value]'
  },
  ...makeTransitionProps(),
  ...pick(makeVTooltipProps(), ['offset'])
}, 'VPieTooltip');
export const VPieTooltip = genericComponent()({
  name: 'VPieTooltip',
  props: makeVPieTooltipProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const tooltipTitleFormatFunction = toRef(() => segment => {
      return typeof props.titleFormat === 'function' ? props.titleFormat(segment) : formatTextTemplate(props.titleFormat, segment);
    });
    const tooltipSubtitleFormatFunction = toRef(() => segment => {
      return typeof props.subtitleFormat === 'function' ? props.subtitleFormat(segment) : formatTextTemplate(props.subtitleFormat, segment);
    });
    return () => _createVNode(VTooltip, {
      "offset": props.offset,
      "modelValue": props.modelValue,
      "target": props.target,
      "contentClass": "v-pie__tooltip-content"
    }, {
      default: () => [!!props.item && (slots.default?.({
        item: props.item
      }) ?? _createVNode(MaybeTransition, {
        "transition": props.transition,
        "mode": "out-in"
      }, {
        default: () => [_createVNode(VListItem, {
          "key": props.item.key,
          "density": "compact",
          "title": tooltipTitleFormatFunction.value(props.item),
          "subtitle": tooltipSubtitleFormatFunction.value(props.item)
        }, {
          prepend: slots.prepend ? () => slots.prepend({
            item: props.item
          }) : undefined
        })]
      }))]
    });
  }
});
//# sourceMappingURL=VPieTooltip.js.map