// Utilities
import { defer, propsFactory } from "../util/index.js"; // Types
// Composables
export const makeDelayProps = propsFactory({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, 'delay');
export function useDelay(props, cb) {
  let clearDelay = () => {};
  function runDelay(isOpening, options) {
    clearDelay?.();
    const delay = isOpening ? props.openDelay : props.closeDelay;
    const normalizedDelay = Math.max(options?.minDelay ?? 0, Number(delay ?? 0));
    return new Promise(resolve => {
      clearDelay = defer(normalizedDelay, () => {
        cb?.(isOpening);
        resolve(isOpening);
      });
    });
  }
  function runOpenDelay() {
    return runDelay(true);
  }
  function runCloseDelay(options) {
    return runDelay(false, options);
  }
  return {
    clearDelay,
    runOpenDelay,
    runCloseDelay
  };
}
//# sourceMappingURL=delay.js.map