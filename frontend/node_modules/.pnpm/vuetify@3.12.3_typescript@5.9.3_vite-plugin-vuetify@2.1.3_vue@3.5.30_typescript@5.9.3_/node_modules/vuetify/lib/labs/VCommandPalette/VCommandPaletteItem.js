import { createVNode as _createVNode } from "vue";
// Components
import { VHotkey } from "../../components/VHotkey/index.js";
import { VListItem } from "../../components/VList/index.js"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVCommandPaletteItemProps = propsFactory({
  item: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  onExecute: Function
}, 'VCommandPaletteItem');
export const VCommandPaletteItemComponent = genericComponent()({
  name: 'VCommandPaletteItem',
  props: makeVCommandPaletteItemProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => _createVNode(VListItem, {
      "index": props.index,
      "value": props.item.value,
      "title": props.item.title,
      "subtitle": props.item.subtitle,
      "prependIcon": props.item.prependIcon,
      "prependAvatar": props.item.prependAvatar,
      "appendIcon": props.item.appendIcon,
      "appendAvatar": props.item.appendAvatar,
      "onClick": props.onExecute
    }, {
      prepend: slots.prepend,
      title: slots.title,
      append: slots.append ?? (props.item.hotkey ? () => _createVNode(VHotkey, {
        "keys": props.item.hotkey
      }, null) : undefined)
    }));
  }
});
//# sourceMappingURL=VCommandPaletteItem.js.map