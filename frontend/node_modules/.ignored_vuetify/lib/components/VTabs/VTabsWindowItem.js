import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
// Components
import { makeVWindowItemProps, VWindowItem } from "../VWindow/VWindowItem.js"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.js";
export const makeVTabsWindowItemProps = propsFactory({
  ...makeVWindowItemProps()
}, 'VTabsWindowItem');
export const VTabsWindowItem = genericComponent()({
  name: 'VTabsWindowItem',
  props: makeVTabsWindowItemProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      const windowItemProps = VWindowItem.filterProps(props);
      return _createVNode(VWindowItem, _mergeProps({
        "_as": "VTabsWindowItem"
      }, windowItemProps, {
        "class": ['v-tabs-window-item', props.class],
        "style": props.style
      }), slots);
    });
    return {};
  }
});
//# sourceMappingURL=VTabsWindowItem.js.map