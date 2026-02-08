// Composables
import { makeDelayProps, useDelay } from "../../composables/delay.js";
import { useProxiedModel } from "../../composables/proxiedModel.js"; // Utilities
import { genericComponent, propsFactory } from "../../util/index.js";
export const makeVHoverProps = propsFactory({
  disabled: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  ...makeDelayProps()
}, 'VHover');
export const VHover = genericComponent()({
  name: 'VHover',
  props: makeVHoverProps(),
  emits: {
    'update:modelValue': value => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isHovering = useProxiedModel(props, 'modelValue');
    const {
      runOpenDelay,
      runCloseDelay
    } = useDelay(props, value => !props.disabled && (isHovering.value = value));
    return () => slots.default?.({
      isHovering: isHovering.value,
      props: {
        onMouseenter: runOpenDelay,
        onMouseleave: runCloseDelay
      }
    });
  }
});
//# sourceMappingURL=VHover.js.map