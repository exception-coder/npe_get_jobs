import { normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createElementVNode as _createElementVNode } from "vue";
// Composables
import { makeComponentProps } from "../../composables/component.js"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.js";
export const makeVBreadcrumbsDividerProps = propsFactory({
  divider: [Number, String],
  ...makeComponentProps()
}, 'VBreadcrumbsDivider');
export const VBreadcrumbsDivider = genericComponent()({
  name: 'VBreadcrumbsDivider',
  props: makeVBreadcrumbsDividerProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => _createElementVNode("li", {
      "aria-hidden": "true",
      "class": _normalizeClass(['v-breadcrumbs-divider', props.class]),
      "style": _normalizeStyle(props.style)
    }, [slots?.default?.() ?? props.divider]));
    return {};
  }
});
//# sourceMappingURL=VBreadcrumbsDivider.js.map