import { createIdentifier as P, CommandType as C, Inject as N, IUniverInstanceService as M, ICommandService as j, IResourceManagerService as G, Disposable as T, UniverInstanceType as I, DrawingTypeEnum as D, generateRandomId as H, DependentOn as J, Injector as V, IConfigService as W, Plugin as L, merge as F } from "@univerjs/core";
import { UnitDrawingService as x, IDrawingManagerService as O, UniverDrawingPlugin as A } from "@univerjs/drawing";
import { SheetInterceptorService as B, RemoveSheetCommand as $, CopySheetCommand as K } from "@univerjs/sheets";
var Y = /* @__PURE__ */ ((e) => (e.Position = "0", e.Both = "1", e.None = "2", e))(Y || {});
class k extends x {
}
const E = P("sheets-drawing.sheet-drawing.service");
var h = /* @__PURE__ */ ((e) => (e[e.INSERT = 0] = "INSERT", e[e.REMOVE = 1] = "REMOVE", e[e.UPDATE = 2] = "UPDATE", e[e.ARRANGE = 3] = "ARRANGE", e[e.GROUP = 4] = "GROUP", e[e.UNGROUP = 5] = "UNGROUP", e))(h || {});
const g = {
  id: "sheet.mutation.set-drawing-apply",
  type: C.MUTATION,
  handler: (e, i) => {
    const t = e.get(O), r = e.get(E), { op: n, unitId: s, subUnitId: o, type: c, objects: a } = i;
    switch (t.applyJson1(s, o, n), r.applyJson1(s, o, n), c) {
      case 0:
        t.addNotification(a), r.addNotification(a);
        break;
      case 1:
        t.removeNotification(a), r.removeNotification(a);
        break;
      case 2:
        t.updateNotification(a), r.updateNotification(a);
        break;
      case 3:
        t.orderNotification(a), r.orderNotification(a);
        break;
      case 4:
        t.groupUpdateNotification(a);
        break;
      case 5:
        t.ungroupUpdateNotification(a);
        break;
    }
    return !0;
  }
};
var q = Object.getOwnPropertyDescriptor, z = (e, i, t, r) => {
  for (var n = r > 1 ? void 0 : r ? q(i, t) : i, s = e.length - 1, o; s >= 0; s--)
    (o = e[s]) && (n = o(n) || n);
  return n;
}, d = (e, i) => (t, r) => i(t, r, e);
const R = "SHEET_DRAWING_PLUGIN";
let p = class extends T {
  constructor(e, i, t, r, n, s) {
    super(), this._sheetInterceptorService = e, this._univerInstanceService = i, this._commandService = t, this._sheetDrawingService = r, this._drawingManagerService = n, this._resourceManagerService = s, this._initSnapshot(), this._initSheetChange(), this.disposeWithMe(this._commandService.registerCommand(g));
  }
  _initSnapshot() {
    const e = (t, r) => {
      const n = r || this._sheetDrawingService.getDrawingDataForUnit(t);
      return n ? JSON.stringify(n) : "";
    }, i = (t) => {
      if (!t)
        return {};
      try {
        return JSON.parse(t);
      } catch {
        return {};
      }
    };
    this.disposeWithMe(
      this._resourceManagerService.registerPluginResource({
        pluginName: R,
        businesses: [I.UNIVER_SHEET],
        toJson: (t, r) => e(t, r),
        parseJson: (t) => i(t),
        onUnLoad: (t) => {
          this._sheetDrawingService.removeDrawingDataForUnit(t), this._drawingManagerService.removeDrawingDataForUnit(t);
        },
        onLoad: (t, r) => {
          this._sheetDrawingService.registerDrawingData(t, r), this._drawingManagerService.registerDrawingData(t, r);
        }
      })
    );
  }
  // eslint-disable-next-line max-lines-per-function
  _initSheetChange() {
    this.disposeWithMe(
      this._sheetInterceptorService.interceptCommand({
        // eslint-disable-next-line max-lines-per-function
        getMutations: (e) => {
          var i;
          if (e.id === $.id) {
            const t = e.params, r = t.unitId || this._univerInstanceService.getCurrentUnitOfType(I.UNIVER_SHEET).getUnitId(), n = t.subUnitId || ((i = this._univerInstanceService.getCurrentUnitOfType(I.UNIVER_SHEET).getActiveSheet()) == null ? void 0 : i.getSheetId());
            if (!r || !n)
              return { redos: [], undos: [] };
            const s = this._sheetDrawingService.getDrawingData(r, n), o = Object.values(s).filter((_) => _.drawingType !== D.DRAWING_CHART);
            if (o.length === 0)
              return { redos: [], undos: [] };
            const c = this._sheetDrawingService.getBatchRemoveOp(o), { unitId: a, subUnitId: u, undo: v, redo: U, objects: S } = c;
            return {
              redos: [
                {
                  id: g.id,
                  params: {
                    op: U,
                    unitId: a,
                    subUnitId: u,
                    objects: S,
                    type: h.REMOVE
                  }
                }
              ],
              undos: [
                {
                  id: g.id,
                  params: {
                    op: v,
                    unitId: a,
                    subUnitId: u,
                    objects: S,
                    type: h.INSERT
                  }
                }
              ]
            };
          } else if (e.id === K.id) {
            const t = e.params, { unitId: r, subUnitId: n, targetSubUnitId: s } = t;
            if (!r || !n || !s)
              return { redos: [], undos: [] };
            const o = this._sheetDrawingService.getDrawingData(r, n), c = Object.values(o).filter((m) => m.drawingType !== D.DRAWING_CHART).map((m) => ({
              ...m,
              subUnitId: s,
              drawingId: H(6)
            }));
            if (c.length === 0)
              return { redos: [], undos: [] };
            const a = this._sheetDrawingService.getBatchAddOp(c), { unitId: u, subUnitId: v, undo: U, redo: S, objects: _ } = a;
            return {
              redos: [
                {
                  id: g.id,
                  params: {
                    op: S,
                    unitId: u,
                    subUnitId: v,
                    objects: _,
                    type: h.INSERT
                  }
                }
              ],
              undos: [
                {
                  id: g.id,
                  params: {
                    op: U,
                    unitId: u,
                    subUnitId: v,
                    objects: _,
                    type: h.REMOVE
                  }
                }
              ]
            };
          }
          return { redos: [], undos: [] };
        }
      })
    );
  }
};
p = z([
  d(0, N(B)),
  d(1, N(M)),
  d(2, j),
  d(3, E),
  d(4, O),
  d(5, G)
], p);
const Q = "sheets-drawing.config", b = {};
var X = Object.defineProperty, Z = Object.getOwnPropertyDescriptor, y = (e, i, t) => i in e ? X(e, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[i] = t, ee = (e, i, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Z(i, t) : i, s = e.length - 1, o; s >= 0; s--)
    (o = e[s]) && (n = o(n) || n);
  return n;
}, w = (e, i) => (t, r) => i(t, r, e), l = (e, i, t) => y(e, typeof i != "symbol" ? i + "" : i, t);
let f = class extends L {
  constructor(e = b, i, t) {
    super(), this._config = e, this._injector = i, this._configService = t;
    const { ...r } = F(
      {},
      b,
      this._config
    );
    this._configService.setConfig(Q, r);
  }
  onStarting() {
    [
      [p],
      [E, { useClass: k }]
    ].forEach((e) => this._injector.add(e)), this._injector.get(p);
  }
};
l(f, "pluginName", R);
l(f, "type", I.UNIVER_SHEET);
f = ee([
  J(A),
  w(1, N(V)),
  w(2, W)
], f);
export {
  h as DrawingApplyType,
  E as ISheetDrawingService,
  R as SHEET_DRAWING_PLUGIN,
  g as SetDrawingApplyMutation,
  Y as SheetDrawingAnchorType,
  f as UniverSheetsDrawingPlugin
};
