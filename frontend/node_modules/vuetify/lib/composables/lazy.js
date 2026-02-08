// Utilities
import { shallowRef, toRef, watch } from 'vue';
import { propsFactory } from "../util/index.js"; // Types
export const makeLazyProps = propsFactory({
  eager: Boolean
}, 'lazy');
export function useLazy(props, active) {
  const isBooted = shallowRef(false);
  const hasContent = toRef(() => isBooted.value || props.eager || active.value);
  watch(active, () => isBooted.value = true);
  function onAfterLeave() {
    if (!props.eager) isBooted.value = false;
  }
  return {
    isBooted,
    hasContent,
    onAfterLeave
  };
}
//# sourceMappingURL=lazy.js.map