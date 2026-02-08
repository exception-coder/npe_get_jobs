// Utilities
import { getCurrentInstance } from "../util/index.js";
export function useScopeId() {
  const vm = getCurrentInstance('useScopeId');
  const scopeId = vm.vnode.scopeId;
  return {
    scopeId: scopeId ? {
      [scopeId]: ''
    } : undefined
  };
}
//# sourceMappingURL=scopeId.js.map