// Utilities
import { nextTick, watch } from 'vue';

// Types

export function useSelectLink(link, select) {
  watch(() => link.isActive?.value, isActive => {
    if (link.isLink.value && isActive != null && select) {
      nextTick(() => {
        select(isActive);
      });
    }
  }, {
    immediate: true
  });
}
//# sourceMappingURL=selectLink.js.map