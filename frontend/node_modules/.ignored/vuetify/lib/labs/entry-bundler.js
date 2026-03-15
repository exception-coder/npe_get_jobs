/* eslint-disable local-rules/sort-imports */
// Components
import * as components from "./allComponents.js";
import * as directives from "../directives/index.js";
import { createVuetify as _createVuetify } from "../framework.js"; // Types
export * from "../entry-bundler.js";
export { components };
export const createVuetify = function () {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _createVuetify({
    components,
    directives,
    ...options
  });
};
//# sourceMappingURL=entry-bundler.js.map