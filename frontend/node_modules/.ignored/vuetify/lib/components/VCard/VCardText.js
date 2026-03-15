import { normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createVNode as _createVNode } from "vue";
// Composables
import { makeComponentProps } from "../../composables/component.js";
import { makeTagProps } from "../../composables/tag.js"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.js";
export const makeVCardTextProps = propsFactory({
  opacity: [Number, String],
  ...makeComponentProps(),
  ...makeTagProps()
}, 'VCardText');
export const VCardText = genericComponent()({
  name: 'VCardText',
  props: makeVCardTextProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => _createVNode(props.tag, {
      "class": _normalizeClass(['v-card-text', props.class]),
      "style": _normalizeStyle([{
        '--v-card-text-opacity': props.opacity
      }, props.style])
    }, slots));
    return {};
  }
});
//# sourceMappingURL=VCardText.js.map