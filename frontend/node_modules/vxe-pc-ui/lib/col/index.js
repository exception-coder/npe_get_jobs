"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.VxeCol = exports.Col = void 0;
var _core = require("@vxe-ui/core");
var _col = _interopRequireDefault(require("../row/src/col"));
var _dynamics = require("../dynamics");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const VxeCol = exports.VxeCol = Object.assign({}, _col.default, {
  install(app) {
    app.component(_col.default.name, _col.default);
  }
});
_dynamics.dynamicApp.use(VxeCol);
_core.VxeUI.component(_col.default);
const Col = exports.Col = VxeCol;
var _default = exports.default = VxeCol;