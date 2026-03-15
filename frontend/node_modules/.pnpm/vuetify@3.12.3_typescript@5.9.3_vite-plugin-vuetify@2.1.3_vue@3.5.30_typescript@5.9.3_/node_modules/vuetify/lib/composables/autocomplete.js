// Utilities
import { shallowRef, toRef, useId } from 'vue';
import { propsFactory } from "../util/index.js"; // Types
// Types
// Composables
export const makeAutocompleteProps = propsFactory({
  autocomplete: String
}, 'autocomplete');
export function useAutocomplete(props) {
  const uniqueId = useId();
  const reloadTrigger = shallowRef(0);
  const isSuppressing = toRef(() => props.autocomplete === 'suppress');
  const fieldName = toRef(() => {
    if (!props.name) return undefined;
    return isSuppressing.value ? `${props.name}-${uniqueId}-${reloadTrigger.value}` : props.name;
  });
  const fieldAutocomplete = toRef(() => {
    return isSuppressing.value ? 'off' : props.autocomplete;
  });
  return {
    isSuppressing,
    fieldAutocomplete,
    fieldName,
    update: () => reloadTrigger.value = new Date().getTime()
  };
}
//# sourceMappingURL=autocomplete.js.map