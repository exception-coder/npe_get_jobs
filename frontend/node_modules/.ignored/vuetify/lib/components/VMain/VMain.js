import { createElementVNode as _createElementVNode, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createVNode as _createVNode } from "vue";
// Styles
import "./VMain.css";

// Composables
import { makeComponentProps } from "../../composables/component.js";
import { makeDimensionProps, useDimension } from "../../composables/dimensions.js";
import { useLayout } from "../../composables/layout.js";
import { useSsrBoot } from "../../composables/ssrBoot.js";
import { makeTagProps } from "../../composables/tag.js"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.js";
export const makeVMainProps = propsFactory({
  scrollable: Boolean,
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeTagProps({
    tag: 'main'
  })
}, 'VMain');
export const VMain = genericComponent()({
  name: 'VMain',
  props: makeVMainProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      mainStyles
    } = useLayout();
    const {
      ssrBootStyles
    } = useSsrBoot();
    useRender(() => _createVNode(props.tag, {
      "class": _normalizeClass(['v-main', {
        'v-main--scrollable': props.scrollable
      }, props.class]),
      "style": _normalizeStyle([mainStyles.value, ssrBootStyles.value, dimensionStyles.value, props.style])
    }, {
      default: () => [props.scrollable ? _createElementVNode("div", {
        "class": "v-main__scroller"
      }, [slots.default?.()]) : slots.default?.()]
    }));
    return {};
  }
});
//# sourceMappingURL=VMain.js.map