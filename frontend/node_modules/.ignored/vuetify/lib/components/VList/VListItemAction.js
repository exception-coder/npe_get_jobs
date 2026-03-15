import { normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createVNode as _createVNode } from "vue";
// Composables
import { makeComponentProps } from "../../composables/component.js";
import { makeTagProps } from "../../composables/tag.js"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.js";
export const makeVListItemActionProps = propsFactory({
  start: Boolean,
  end: Boolean,
  ...makeComponentProps(),
  ...makeTagProps()
}, 'VListItemAction');
export const VListItemAction = genericComponent()({
  name: 'VListItemAction',
  props: makeVListItemActionProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => _createVNode(props.tag, {
      "class": _normalizeClass(['v-list-item-action', {
        'v-list-item-action--start': props.start,
        'v-list-item-action--end': props.end
      }, props.class]),
      "style": _normalizeStyle(props.style)
    }, slots));
    return {};
  }
});
//# sourceMappingURL=VListItemAction.js.map