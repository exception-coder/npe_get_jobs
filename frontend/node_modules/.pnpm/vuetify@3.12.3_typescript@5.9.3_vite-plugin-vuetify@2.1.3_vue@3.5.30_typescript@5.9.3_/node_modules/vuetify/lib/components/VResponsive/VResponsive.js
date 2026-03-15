import { normalizeStyle as _normalizeStyle, createElementVNode as _createElementVNode, normalizeClass as _normalizeClass } from "vue";
// Styles
import "./VResponsive.css";

// Composables
import { makeComponentProps } from "../../composables/component.js";
import { makeDimensionProps, useDimension } from "../../composables/dimensions.js"; // Utilities
import { computed } from 'vue';
import { genericComponent, propsFactory, useRender } from "../../util/index.js";
export function useAspectStyles(props) {
  return {
    aspectStyles: computed(() => {
      const ratio = Number(props.aspectRatio);
      return ratio ? {
        paddingBottom: String(1 / ratio * 100) + '%'
      } : undefined;
    })
  };
}
export const makeVResponsiveProps = propsFactory({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,
  ...makeComponentProps(),
  ...makeDimensionProps()
}, 'VResponsive');
export const VResponsive = genericComponent()({
  name: 'VResponsive',
  props: makeVResponsiveProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      aspectStyles
    } = useAspectStyles(props);
    const {
      dimensionStyles
    } = useDimension(props);
    useRender(() => _createElementVNode("div", {
      "class": _normalizeClass(['v-responsive', {
        'v-responsive--inline': props.inline
      }, props.class]),
      "style": _normalizeStyle([dimensionStyles.value, props.style])
    }, [_createElementVNode("div", {
      "class": "v-responsive__sizer",
      "style": _normalizeStyle(aspectStyles.value)
    }, null), slots.additional?.(), slots.default && _createElementVNode("div", {
      "class": _normalizeClass(['v-responsive__content', props.contentClass])
    }, [slots.default()])]));
    return {};
  }
});
//# sourceMappingURL=VResponsive.js.map