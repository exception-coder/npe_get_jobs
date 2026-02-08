// Utilities
import { getCurrentInstance } from "./getCurrentInstance.js"; // Types
export function useRender(render) {
  const vm = getCurrentInstance('useRender');
  vm.render = render;
}
//# sourceMappingURL=useRender.js.map