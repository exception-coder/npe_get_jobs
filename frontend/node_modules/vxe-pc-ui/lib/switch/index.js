"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.VxeSwitch = exports.Switch = void 0;
var _core = require("@vxe-ui/core");
var _switch = _interopRequireDefault(require("./src/switch"));
var _dynamics = require("../dynamics");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const VxeSwitch = exports.VxeSwitch = Object.assign(_switch.default, {
  install: function (app) {
    app.component(_switch.default.name, _switch.default);
  }
});
_dynamics.dynamicApp.use(VxeSwitch);
_core.VxeUI.component(_switch.default);
const Switch = exports.Switch = VxeSwitch;
var _default = exports.default = VxeSwitch;