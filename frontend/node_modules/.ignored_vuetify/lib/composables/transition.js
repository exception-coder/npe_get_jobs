// Utilities
import { h, mergeProps, Transition, TransitionGroup } from 'vue';
import { isObject, onlyDefinedProps, propsFactory } from "../util/index.js"; // Types
export const makeTransitionProps = propsFactory({
  transition: {
    type: null,
    default: 'fade-transition',
    validator: val => val !== true
  }
}, 'transition');
export const MaybeTransition = (props, _ref) => {
  let {
    slots
  } = _ref;
  const {
    transition,
    disabled,
    group,
    ...rest
  } = props;
  const {
    component = group ? TransitionGroup : Transition,
    ...customProps
  } = isObject(transition) ? transition : {};
  let transitionProps;
  if (isObject(transition)) {
    transitionProps = mergeProps(customProps, onlyDefinedProps({
      disabled,
      group
    }), rest);
  } else {
    transitionProps = mergeProps({
      name: disabled || !transition ? '' : transition
    }, rest);
  }
  return h(component, transitionProps, slots);
};
//# sourceMappingURL=transition.js.map