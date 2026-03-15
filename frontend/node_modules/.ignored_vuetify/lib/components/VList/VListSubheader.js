import { createElementVNode as _createElementVNode, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createVNode as _createVNode } from "vue";
// Composables
import { useTextColor } from "../../composables/color.js";
import { makeComponentProps } from "../../composables/component.js";
import { makeTagProps } from "../../composables/tag.js"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.js";
export const makeVListSubheaderProps = propsFactory({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...makeComponentProps(),
  ...makeTagProps()
}, 'VListSubheader');
export const VListSubheader = genericComponent()({
  name: 'VListSubheader',
  props: makeVListSubheaderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(() => props.color);
    useRender(() => {
      const hasText = !!(slots.default || props.title);
      return _createVNode(props.tag, {
        "class": _normalizeClass(['v-list-subheader', {
          'v-list-subheader--inset': props.inset,
          'v-list-subheader--sticky': props.sticky
        }, textColorClasses.value, props.class]),
        "style": _normalizeStyle([{
          textColorStyles
        }, props.style])
      }, {
        default: () => [hasText && _createElementVNode("div", {
          "class": "v-list-subheader__text"
        }, [slots.default?.() ?? props.title])]
      });
    });
    return {};
  }
});
//# sourceMappingURL=VListSubheader.js.map