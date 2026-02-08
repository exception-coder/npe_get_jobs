// Utilities
import { propsFactory } from "../util/index.js"; // Types
// Types
// Composables
export const makeTagProps = propsFactory({
  tag: {
    type: [String, Object, Function],
    default: 'div'
  }
}, 'tag');
//# sourceMappingURL=tag.js.map