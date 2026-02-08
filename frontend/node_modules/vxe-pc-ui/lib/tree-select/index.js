"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.VxeTreeSelect = exports.TreeSelect = void 0;
var _core = require("@vxe-ui/core");
var _treeSelect = _interopRequireDefault(require("./src/tree-select"));
var _dynamics = require("../dynamics");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const VxeTreeSelect = exports.VxeTreeSelect = Object.assign({}, _treeSelect.default, {
  install(app) {
    app.component(_treeSelect.default.name, _treeSelect.default);
  }
});
_dynamics.dynamicApp.use(VxeTreeSelect);
_core.VxeUI.component(_treeSelect.default);
const TreeSelect = exports.TreeSelect = VxeTreeSelect;
var _default = exports.default = VxeTreeSelect;