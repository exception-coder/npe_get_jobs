"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _comp = require("../../ui/src/comp");
var _ui = require("../../ui");
var _loading = _interopRequireDefault(require("../../loading/src/loading"));
var _xeUtils = _interopRequireDefault(require("xe-utils"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = (0, _comp.defineVxeComponent)({
  name: 'VxeLayoutBody',
  props: {
    loading: Boolean,
    padding: Boolean,
    size: {
      type: String,
      default: () => (0, _ui.getConfig)().layoutBody.size || (0, _ui.getConfig)().size
    }
  },
  emits: [],
  setup(props, context) {
    const {
      slots,
      emit
    } = context;
    const xID = _xeUtils.default.uniqueId();
    const refElem = (0, _vue.ref)();
    const {
      computeSize
    } = (0, _ui.useSize)(props);
    const reactData = (0, _vue.reactive)({});
    const refMaps = {
      refElem
    };
    const computeMaps = {
      computeSize
    };
    const $xeLayoutBody = {
      xID,
      props,
      context,
      reactData,
      getRefMaps: () => refMaps,
      getComputeMaps: () => computeMaps
    };
    const dispatchEvent = (type, params, evnt) => {
      emit(type, (0, _ui.createEvent)(evnt, {
        $layoutBody: $xeLayoutBody
      }, params));
    };
    const layoutBodyMethods = {
      dispatchEvent
    };
    const layoutBodyPrivateMethods = {};
    Object.assign($xeLayoutBody, layoutBodyMethods, layoutBodyPrivateMethods);
    const renderVN = () => {
      const {
        loading,
        padding
      } = props;
      const vSize = computeSize.value;
      const defaultSlot = slots.default;
      return (0, _vue.h)('div', {
        ref: refElem,
        class: ['vxe-layout-body', {
          [`size--${vSize}`]: vSize,
          'is--loading': loading,
          'is--padding': padding
        }]
      }, [(0, _vue.h)('div', {
        class: 'vxe-layout-body--inner'
      }, defaultSlot ? defaultSlot({}) : []),
      /**
       * 加载中
       */
      (0, _vue.h)(_loading.default, {
        class: 'vxe-list-view--loading',
        modelValue: loading
      })]);
    };
    $xeLayoutBody.renderVN = renderVN;
    return $xeLayoutBody;
  },
  render() {
    return this.renderVN();
  }
});