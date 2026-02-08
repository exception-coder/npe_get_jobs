// Components
import { VTooltip } from "../../components/VTooltip/index.js"; // Composables
import { useDirectiveComponent } from "../../composables/directiveComponent.js"; // Types
export const Tooltip = useDirectiveComponent(VTooltip, binding => {
  return {
    activator: 'parent',
    location: binding.arg?.replace('-', ' '),
    text: typeof binding.value === 'boolean' ? undefined : binding.value
  };
});
export default Tooltip;
//# sourceMappingURL=index.js.map