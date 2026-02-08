// Utilities
import { callEvent, isOn } from "./helpers.js";
export function getPrefixedEventHandlers(attrs, suffix, getData) {
  return Object.keys(attrs).filter(key => isOn(key) && key.endsWith(suffix)).reduce((acc, key) => {
    acc[key.slice(0, -suffix.length)] = event => callEvent(attrs[key], event, getData(event));
    return acc;
  }, {});
}
//# sourceMappingURL=events.js.map