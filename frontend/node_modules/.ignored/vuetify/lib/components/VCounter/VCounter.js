import { vShow as _vShow, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createElementVNode as _createElementVNode, withDirectives as _withDirectives, createVNode as _createVNode } from "vue";
// Styles
import "./VCounter.css";

// Components
import { VSlideYTransition } from "../transitions/index.js"; // Composables
import { makeComponentProps } from "../../composables/component.js";
import { makeTransitionProps, MaybeTransition } from "../../composables/transition.js"; // Utilities
import { toRef } from 'vue';
import { genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVCounterProps = propsFactory({
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...makeComponentProps(),
  ...makeTransitionProps({
    transition: {
      component: VSlideYTransition
    }
  })
}, 'VCounter');
export const VCounter = genericComponent()({
  name: 'VCounter',
  functional: true,
  props: makeVCounterProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const counter = toRef(() => {
      return props.max ? `${props.value} / ${props.max}` : String(props.value);
    });
    useRender(() => _createVNode(MaybeTransition, {
      "transition": props.transition
    }, {
      default: () => [_withDirectives(_createElementVNode("div", {
        "class": _normalizeClass(['v-counter', {
          'text-error': props.max && !props.disabled && parseFloat(props.value) > parseFloat(props.max)
        }, props.class]),
        "style": _normalizeStyle(props.style)
      }, [slots.default ? slots.default({
        counter: counter.value,
        max: props.max,
        value: props.value
      }) : counter.value]), [[_vShow, props.active]])]
    }));
    return {};
  }
});
//# sourceMappingURL=VCounter.js.map