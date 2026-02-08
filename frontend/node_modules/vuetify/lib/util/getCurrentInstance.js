// Utilities
import { getCurrentInstance as _getCurrentInstance } from 'vue';
import { toKebabCase } from "./helpers.js";
export function getCurrentInstance(name, message) {
  const vm = _getCurrentInstance();
  if (!vm) {
    throw new Error(`[Vuetify] ${name} ${message || 'must be called from inside a setup function'}`);
  }
  return vm;
}
export function getCurrentInstanceName() {
  let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'composables';
  const vm = getCurrentInstance(name).type;
  return toKebabCase(vm?.aliasName || vm?.name);
}
//# sourceMappingURL=getCurrentInstance.js.map