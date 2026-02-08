"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNumber = handleNumber;
exports.toFloatValueFixed = toFloatValueFixed;
var _xeUtils = _interopRequireDefault(require("xe-utils"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function handleNumber(val) {
  return _xeUtils.default.isString(val) ? val.replace(/[^0-9e.-]/g, '') : val;
}
function toFloatValueFixed(inputValue, digitsValue) {
  if (/^-/.test('' + inputValue)) {
    return _xeUtils.default.toFixed(_xeUtils.default.ceil(inputValue, digitsValue), digitsValue);
  }
  return _xeUtils.default.toFixed(_xeUtils.default.floor(inputValue, digitsValue), digitsValue);
}