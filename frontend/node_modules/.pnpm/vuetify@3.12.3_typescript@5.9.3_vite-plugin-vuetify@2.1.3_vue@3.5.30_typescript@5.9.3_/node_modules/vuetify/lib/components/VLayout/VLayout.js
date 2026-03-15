import { normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createElementVNode as _createElementVNode } from "vue";
// Styles
import "./VLayout.css";

// Composables
import { makeComponentProps } from "../../composables/component.js";
import { makeDimensionProps, useDimension } from "../../composables/dimensions.js";
import { createLayout, makeLayoutProps } from "../../composables/layout.js"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.js";
export const makeVLayoutProps = propsFactory({
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeLayoutProps()
}, 'VLayout');
export const VLayout = genericComponent()({
  name: 'VLayout',
  props: makeVLayoutProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      layoutClasses,
      layoutStyles,
      getLayoutItem,
      items,
      layoutRef
    } = createLayout(props);
    const {
      dimensionStyles
    } = useDimension(props);
    useRender(() => _createElementVNode("div", {
      "ref": layoutRef,
      "class": _normalizeClass([layoutClasses.value, props.class]),
      "style": _normalizeStyle([dimensionStyles.value, layoutStyles.value, props.style])
    }, [slots.default?.()]));
    return {
      getLayoutItem,
      items
    };
  }
});
//# sourceMappingURL=VLayout.js.map