"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkDynamic = checkDynamic;
exports.dynamicStore = exports.dynamicApp = void 0;
var _vue = require("vue");
var _comp = require("../ui/src/comp");
var _core = require("@vxe-ui/core");
let dynamicContainerElem;
const dynamicStore = exports.dynamicStore = (0, _vue.reactive)({
  modals: [],
  drawers: [],
  globalLoading: null,
  globalWatermark: null
});
/**
 * 动态组件
 */
const VxeDynamics = (0, _comp.defineVxeComponent)({
  setup() {
    const VxeUIModalComponent = _core.VxeUI.getComponent('vxe-modal');
    const VxeUIDrawerComponent = _core.VxeUI.getComponent('vxe-drawer');
    const VxeUILoadingComponent = _core.VxeUI.getComponent('vxe-loading');
    const VxeUIWatermarkComponent = _core.VxeUI.getComponent('vxe-watermark');
    return () => {
      const {
        modals,
        drawers,
        globalWatermark,
        globalLoading
      } = dynamicStore;
      return [modals.length ? (0, _vue.h)('div', {
        key: 1,
        class: 'vxe-dynamics--modal'
      }, modals.map(item => (0, _vue.h)(VxeUIModalComponent, item))) : (0, _vue.createCommentVNode)(), drawers.length ? (0, _vue.h)('div', {
        key: 2,
        class: 'vxe-dynamics--drawer'
      }, drawers.map(item => (0, _vue.h)(VxeUIDrawerComponent, item))) : (0, _vue.createCommentVNode)(), globalWatermark ? (0, _vue.h)(VxeUIWatermarkComponent, globalWatermark) : (0, _vue.createCommentVNode)(), globalLoading ? (0, _vue.h)(VxeUILoadingComponent, globalLoading) : (0, _vue.createCommentVNode)()];
    };
  }
});
const dynamicApp = exports.dynamicApp = (0, _vue.createApp)(VxeDynamics);
function checkDynamic() {
  if (!dynamicContainerElem) {
    dynamicContainerElem = document.createElement('div');
    dynamicContainerElem.className = 'vxe-dynamics';
    document.body.appendChild(dynamicContainerElem);
    dynamicApp.mount(dynamicContainerElem);
  }
}