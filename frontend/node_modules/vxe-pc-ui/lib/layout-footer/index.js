"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.VxeLayoutFooter = exports.LayoutFooter = void 0;
var _core = require("@vxe-ui/core");
var _layoutFooter = _interopRequireDefault(require("./src/layout-footer"));
var _dynamics = require("../dynamics");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const VxeLayoutFooter = exports.VxeLayoutFooter = Object.assign({}, _layoutFooter.default, {
  install(app) {
    app.component(_layoutFooter.default.name, _layoutFooter.default);
  }
});
_dynamics.dynamicApp.use(VxeLayoutFooter);
_core.VxeUI.component(_layoutFooter.default);
const LayoutFooter = exports.LayoutFooter = VxeLayoutFooter;
var _default = exports.default = VxeLayoutFooter;