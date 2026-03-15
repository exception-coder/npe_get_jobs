// Utilities
import { propsFactory } from "../util/propsFactory.js"; // Types
// TODO: import from vue once upstream PR is merged
// https://github.com/vuejs/core/pull/14441
// Composables
export const makeComponentProps = propsFactory({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, 'component');
//# sourceMappingURL=component.js.map