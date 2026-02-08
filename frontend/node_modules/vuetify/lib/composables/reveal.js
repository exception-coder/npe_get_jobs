// Utilities
import { onMounted, shallowRef, toRef } from 'vue';
import { propsFactory } from "../util/index.js"; // Types
// Types
// Composables
export const makeRevealProps = propsFactory({
  reveal: {
    type: [Boolean, Object],
    default: false
  }
}, 'reveal');
export function useReveal(props) {
  const defaultDuration = 900;
  const duration = toRef(() => typeof props.reveal === 'object' ? Math.max(0, Number(props.reveal.duration ?? defaultDuration)) : defaultDuration);
  const state = shallowRef(props.reveal ? 'initial' : 'disabled');
  onMounted(async () => {
    if (props.reveal) {
      state.value = 'initial';
      await new Promise(resolve => requestAnimationFrame(resolve));
      state.value = 'pending';
      await new Promise(resolve => setTimeout(resolve, duration.value));
      state.value = 'done';
    }
  });
  return {
    duration,
    state
  };
}
//# sourceMappingURL=reveal.js.map