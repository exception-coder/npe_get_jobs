// Composables
import { useDisplay } from "./display.js"; // Utilities
import { onMounted, shallowRef } from 'vue';
import { IN_BROWSER } from "../util/index.js";
export function useHydration() {
  if (!IN_BROWSER) return shallowRef(false);
  const {
    ssr
  } = useDisplay();
  if (ssr) {
    const isMounted = shallowRef(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return isMounted;
  } else {
    return shallowRef(true);
  }
}
//# sourceMappingURL=hydration.js.map