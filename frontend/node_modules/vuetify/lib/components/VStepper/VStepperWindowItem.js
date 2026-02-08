import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
// Components
import { makeVWindowItemProps, VWindowItem } from "../VWindow/VWindowItem.js"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.js";
export const makeVStepperWindowItemProps = propsFactory({
  ...makeVWindowItemProps()
}, 'VStepperWindowItem');
export const VStepperWindowItem = genericComponent()({
  name: 'VStepperWindowItem',
  props: makeVStepperWindowItemProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      const windowItemProps = VWindowItem.filterProps(props);
      return _createVNode(VWindowItem, _mergeProps({
        "_as": "VStepperWindowItem"
      }, windowItemProps, {
        "class": ['v-stepper-window-item', props.class],
        "style": props.style
      }), slots);
    });
    return {};
  }
});
//# sourceMappingURL=VStepperWindowItem.js.map