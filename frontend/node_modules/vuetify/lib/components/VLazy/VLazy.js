import { createVNode as _createVNode, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, withDirectives as _withDirectives } from "vue";
// Composables
import { makeComponentProps } from "../../composables/component.js";
import { makeDimensionProps, useDimension } from "../../composables/dimensions.js";
import { useProxiedModel } from "../../composables/proxiedModel.js";
import { makeTagProps } from "../../composables/tag.js";
import { makeTransitionProps, MaybeTransition } from "../../composables/transition.js"; // Directives
import vIntersect from "../../directives/intersect/index.js"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVLazyProps = propsFactory({
  modelValue: Boolean,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: undefined,
      rootMargin: undefined,
      threshold: undefined
    })
  },
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeTagProps(),
  ...makeTransitionProps({
    transition: 'fade-transition'
  })
}, 'VLazy');
export const VLazy = genericComponent()({
  name: 'VLazy',
  directives: {
    vIntersect
  },
  props: makeVLazyProps(),
  emits: {
    'update:modelValue': value => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      dimensionStyles
    } = useDimension(props);
    const isActive = useProxiedModel(props, 'modelValue');
    function onIntersect(isIntersecting) {
      if (isActive.value) return;
      isActive.value = isIntersecting;
    }
    useRender(() => _withDirectives(_createVNode(props.tag, {
      "class": _normalizeClass(['v-lazy', props.class]),
      "style": _normalizeStyle([dimensionStyles.value, props.style])
    }, {
      default: () => [isActive.value && _createVNode(MaybeTransition, {
        "transition": props.transition,
        "appear": true
      }, {
        default: () => [slots.default?.()]
      })]
    }), [[vIntersect, {
      handler: onIntersect,
      options: props.options
    }, null]]));
    return {};
  }
});
//# sourceMappingURL=VLazy.js.map