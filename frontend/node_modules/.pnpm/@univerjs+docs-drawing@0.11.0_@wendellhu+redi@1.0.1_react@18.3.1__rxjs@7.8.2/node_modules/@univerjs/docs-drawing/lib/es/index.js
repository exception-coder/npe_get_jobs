var f = Object.defineProperty;
var p = (r, t, e) => t in r ? f(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var _ = (r, t, e) => p(r, typeof t != "symbol" ? t + "" : t, e);
import { createIdentifier as U, Disposable as I, UniverInstanceType as g, IResourceManagerService as O, IUniverInstanceService as C, Plugin as N, merge as P, touchDependencies as M, Inject as m, Injector as R, IConfigService as b } from "@univerjs/core";
import { UnitDrawingService as j, IDrawingManagerService as y } from "@univerjs/drawing";
class d extends j {
}
const l = U("univer.doc.plugin.doc-drawing.service");
var E = Object.getOwnPropertyDescriptor, G = (r, t, e, n) => {
  for (var i = n > 1 ? void 0 : n ? E(t, e) : t, a = r.length - 1, s; a >= 0; a--)
    (s = r[a]) && (i = s(i) || i);
  return i;
}, o = (r, t) => (e, n) => t(e, n, r);
const w = "DOC_DRAWING_PLUGIN";
let D = class extends I {
  constructor(r, t, e, n) {
    super(), this._docDrawingService = r, this._drawingManagerService = t, this._resourceManagerService = e, this._univerInstanceService = n, this._init();
  }
  _init() {
    this._initSnapshot();
  }
  _initSnapshot() {
    const r = (e) => {
      const n = this._univerInstanceService.getUnit(e, g.UNIVER_DOC);
      if (n) {
        const i = n.getSnapshot().drawings, a = n.getSnapshot().drawingsOrder, s = {
          data: i != null ? i : {},
          order: a != null ? a : []
        };
        return JSON.stringify(s);
      }
      return "";
    }, t = (e) => {
      if (!e)
        return { data: {}, order: [] };
      try {
        return JSON.parse(e);
      } catch {
        return { data: {}, order: [] };
      }
    };
    this.disposeWithMe(
      this._resourceManagerService.registerPluginResource({
        pluginName: w,
        businesses: [g.UNIVER_DOC],
        toJson: (e) => r(e),
        parseJson: (e) => t(e),
        onUnLoad: (e) => {
          this._setDrawingDataForUnit(e, { data: {}, order: [] });
        },
        onLoad: (e, n) => {
          var i, a;
          this._setDrawingDataForUnit(e, { data: (i = n.data) != null ? i : {}, order: (a = n.order) != null ? a : [] });
        }
      })
    );
  }
  _setDrawingDataForUnit(r, t) {
    const e = this._univerInstanceService.getUnit(r);
    e != null && (e.resetDrawing(t.data, t.order), this.loadDrawingDataForUnit(r));
  }
  loadDrawingDataForUnit(r) {
    const t = this._univerInstanceService.getUnit(r, g.UNIVER_DOC);
    if (!t)
      return !1;
    const e = r, n = t.getDrawings(), i = t.getDrawingsOrder();
    if (!n || !i)
      return !1;
    Object.keys(n).forEach((s) => {
      const S = n[s];
      n[s] = { ...S };
    });
    const a = {
      [e]: {
        unitId: r,
        subUnitId: e,
        data: n,
        order: i
      }
    };
    return this._docDrawingService.registerDrawingData(r, a), this._drawingManagerService.registerDrawingData(r, a), !0;
  }
};
D = G([
  o(0, l),
  o(1, y),
  o(2, O),
  o(3, C)
], D);
const F = "docs-drawing.config", v = {};
var J = Object.getOwnPropertyDescriptor, L = (r, t, e, n) => {
  for (var i = n > 1 ? void 0 : n ? J(t, e) : t, a = r.length - 1, s; a >= 0; a--)
    (s = r[a]) && (i = s(i) || i);
  return i;
}, u = (r, t) => (e, n) => t(e, n, r), c;
let h = (c = class extends N {
  constructor(r = v, t, e) {
    super(), this._config = r, this._injector = t, this._configService = e;
    const { ...n } = P(
      {},
      v,
      this._config
    );
    this._configService.setConfig(F, n);
  }
  onStarting() {
    [
      [D],
      [d],
      [l, { useClass: d }]
    ].forEach((r) => this._injector.add(r)), M(this._injector, [
      [D]
    ]);
  }
}, _(c, "pluginName", w), _(c, "type", g.UNIVER_DOC), c);
h = L([
  u(1, m(R)),
  u(2, b)
], h);
export {
  w as DOCS_DRAWING_PLUGIN,
  D as DocDrawingController,
  d as DocDrawingService,
  l as IDocDrawingService,
  h as UniverDocsDrawingPlugin
};
