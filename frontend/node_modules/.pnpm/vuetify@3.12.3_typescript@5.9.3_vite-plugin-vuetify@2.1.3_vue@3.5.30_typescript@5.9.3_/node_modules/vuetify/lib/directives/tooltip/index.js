// Components
import { VTooltip } from "../../components/VTooltip/index.js"; // Composables
import { useDirectiveComponent } from "../../composables/directiveComponent.js"; // Utilities
import { isObject } from "../../util/index.js"; // Types
export const Tooltip = useDirectiveComponent(VTooltip, binding => {
  const disabled = isObject(binding.value) ? !binding.value.text : ['', false, null].includes(binding.value); // undefined means true

  return {
    activator: disabled ? null : 'parent',
    location: binding.arg?.replace('-', ' '),
    text: typeof binding.value === 'boolean' ? undefined : binding.value
  };
});
export default Tooltip;
//# sourceMappingURL=index.js.map