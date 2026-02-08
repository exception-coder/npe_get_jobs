import { normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createElementVNode as _createElementVNode } from "vue";
// Styles
import "./VLabel.css";

// Composables
import { makeComponentProps } from "../../composables/component.js";
import { makeThemeProps } from "../../composables/theme.js"; // Utilities
import { EventProp, genericComponent, propsFactory, useRender } from "../../util/index.js";
export const makeVLabelProps = propsFactory({
  text: String,
  onClick: EventProp(),
  ...makeComponentProps(),
  ...makeThemeProps()
}, 'VLabel');
export const VLabel = genericComponent()({
  name: 'VLabel',
  props: makeVLabelProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => _createElementVNode("label", {
      "class": _normalizeClass(['v-label', {
        'v-label--clickable': !!props.onClick
      }, props.class]),
      "style": _normalizeStyle(props.style),
      "onClick": props.onClick
    }, [props.text, slots.default?.()]));
    return {};
  }
});
//# sourceMappingURL=VLabel.js.map