"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.VxeDrawer = exports.DrawerController = exports.Drawer = void 0;
var _core = require("@vxe-ui/core");
var _xeUtils = _interopRequireDefault(require("xe-utils"));
var _drawer = _interopRequireWildcard(require("./src/drawer"));
var _dynamics = require("../dynamics");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function handleDrawer(options) {
  // 使用动态组件渲染动态弹框
  (0, _dynamics.checkDynamic)();
  return new Promise(resolve => {
    if (options && options.id && _drawer.allActiveDrawers.some(comp => comp.props.id === options.id)) {
      resolve('exist');
    } else {
      const _onHide = options.onHide;
      const drawerOpts = Object.assign(options, {
        key: _xeUtils.default.uniqueId(),
        modelValue: true,
        onHide(params) {
          const drawerList = _dynamics.dynamicStore.drawers;
          if (_onHide) {
            _onHide(params);
          }
          _dynamics.dynamicStore.drawers = drawerList.filter(item => item.key !== drawerOpts.key);
          resolve(params.type);
        }
      });
      _dynamics.dynamicStore.drawers.push(drawerOpts);
    }
  });
}
function getDrawer(id) {
  return _xeUtils.default.find(_drawer.allActiveDrawers, $drawer => $drawer.props.id === id);
}
/**
 * 全局关闭动态的活动窗口（只能用于关闭动态的创建的活动窗口）
 * 如果传 id 则关闭指定的窗口
 * 如果不传则关闭所有窗口
 */
function closeDrawer(id) {
  const drawers = id ? [getDrawer(id)] : _drawer.allActiveDrawers;
  const restPromises = [];
  drawers.forEach($drawer => {
    if ($drawer) {
      restPromises.push($drawer.close());
    }
  });
  return Promise.all(restPromises);
}
function openDrawer(options) {
  return handleDrawer(Object.assign({}, options));
}
const DrawerController = exports.DrawerController = {
  get: getDrawer,
  close: closeDrawer,
  open: openDrawer
};
const VxeDrawer = exports.VxeDrawer = Object.assign(_drawer.default, {
  install: function (app) {
    app.component(_drawer.default.name, _drawer.default);
  }
});
_core.VxeUI.drawer = DrawerController;
_dynamics.dynamicApp.use(VxeDrawer);
_core.VxeUI.component(_drawer.default);
const Drawer = exports.Drawer = VxeDrawer;
var _default = exports.default = VxeDrawer;