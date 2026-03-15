var N = Object.defineProperty;
var x = (n, e, r) => e in n ? N(n, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[e] = r;
var o = (n, e, r) => x(n, typeof e != "symbol" ? e + "" : e, r);
import { Range as M, Inject as f, Disposable as m, Injector as C, IConfigService as y, Plugin as G, merge as O, UniverInstanceType as w } from "@univerjs/core";
import { SheetPrintInterceptorService as U } from "@univerjs/sheets-ui";
import { SheetExtension as D, IRenderManagerService as T } from "@univerjs/engine-render";
const l = "SheetGraphicsExtension", j = 35;
class g extends D {
  constructor() {
    super(...arguments);
    o(this, "uKey", l);
    o(this, "Z_INDEX", j);
    o(this, "_graphicsRenderMap", /* @__PURE__ */ new Map());
  }
  registerRenderer(r, t) {
    this._graphicsRenderMap.set(r, t);
  }
  draw(r, t, s, i, { viewRanges: c }) {
    const v = Array.from(this._graphicsRenderMap.keys());
    c.forEach((P) => {
      M.foreach(P, (R, u) => {
        const d = s.getCellByIndexWithNoHeader(R, u);
        d && v.forEach((S) => {
          const a = this._graphicsRenderMap.get(S);
          a == null || a(r, s, d);
        });
      });
    });
  }
  dispose() {
    this._graphicsRenderMap.clear();
  }
  copy() {
    const r = new g();
    return this._graphicsRenderMap.forEach((t, s) => {
      r.registerRenderer(s, t);
    }), r;
  }
}
var L = Object.getOwnPropertyDescriptor, A = (n, e, r, t) => {
  for (var s = t > 1 ? void 0 : t ? L(e, r) : e, i = n.length - 1, c; i >= 0; i--)
    (c = n[i]) && (s = c(s) || s);
  return s;
}, H = (n, e) => (r, t) => e(r, t, n);
let _ = class extends m {
  constructor(e, r) {
    super();
    o(this, "_graphicsExtensionInstance", null);
    this._context = e, this._sheetPrintInterceptorService = r, this._initRender(), this._initPrinting();
  }
  _initRender() {
    const e = this._context.mainComponent;
    e && !e.getExtensionByKey(l) && (this._graphicsExtensionInstance = new g(), e.register(this._graphicsExtensionInstance));
  }
  _initPrinting() {
    this.disposeWithMe(this._sheetPrintInterceptorService.interceptor.intercept(
      this._sheetPrintInterceptorService.interceptor.getInterceptPoints().PRINTING_COMPONENT_COLLECT,
      {
        handler: (e, r, t) => {
          const { spreadsheet: s } = r;
          return this._graphicsExtensionInstance && s.register(this._graphicsExtensionInstance.copy()), t(e);
        }
      }
    ));
  }
  registerRenderer(e, r) {
    var t;
    (t = this._graphicsExtensionInstance) == null || t.registerRenderer(e, r);
  }
};
_ = A([
  H(1, f(U))
], _);
const K = "graphics.config", I = {};
var b = Object.getOwnPropertyDescriptor, B = (n, e, r, t) => {
  for (var s = t > 1 ? void 0 : t ? b(e, r) : e, i = n.length - 1, c; i >= 0; i--)
    (c = n[i]) && (s = c(s) || s);
  return s;
}, h = (n, e) => (r, t) => e(r, t, n);
const W = "UNIVER_SHEET_DRAWING_PLUGIN";
var p;
let E = (p = class extends G {
  constructor(n = I, e, r, t) {
    super(), this._config = n, this._injector = e, this._configService = r, this._renderManagerService = t;
    const { ...s } = O(
      {},
      I,
      this._config
    );
    this._configService.setConfig(K, s);
  }
  onRendered() {
    [
      [_]
    ].forEach((n) => {
      this._renderManagerService.registerRenderModule(w.UNIVER_SHEET, n);
    });
  }
}, o(p, "pluginName", W), p);
E = B([
  h(1, f(C)),
  h(2, y),
  h(3, T)
], E);
export {
  _ as SheetGraphicsRenderController,
  E as UniverSheetsGraphicsPlugin
};
