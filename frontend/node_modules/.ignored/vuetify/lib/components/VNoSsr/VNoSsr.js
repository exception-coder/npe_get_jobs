// Composables
import { useHydration } from "../../composables/hydration.js"; // Utilities
import { defineComponent } from "../../util/index.js";
export const VNoSsr = defineComponent({
  name: 'VNoSsr',
  setup(_, _ref) {
    let {
      slots
    } = _ref;
    const show = useHydration();
    return () => show.value && slots.default?.();
  }
});
//# sourceMappingURL=VNoSsr.js.map