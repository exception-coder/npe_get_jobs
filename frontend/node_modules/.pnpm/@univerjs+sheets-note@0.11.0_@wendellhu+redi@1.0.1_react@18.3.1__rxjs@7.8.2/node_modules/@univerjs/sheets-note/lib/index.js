var W = Object.defineProperty;
var L = (i, r, e) => r in i ? W(i, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[r] = e;
var l = (i, r, e) => L(i, typeof r != "symbol" ? r + "" : r, e);
import { Disposable as x, ObjectMatrix as H, CommandType as p, IUniverInstanceService as P, ICommandService as N, IResourceManagerService as J, Inject as g, UniverInstanceType as v, sequenceExecuteAsync as G, DependentOn as z, IConfigService as F, Injector as q, Plugin as K, merge as Y, touchDependencies as O } from "@univerjs/core";
import { getSheetCommandTarget as T, SheetsSelectionsService as y, SheetInterceptorService as B, RemoveSheetCommand as Q, CopySheetCommand as X, RefRangeService as Z, handleCommonRangeChangeWithEffectRefCommandsSkipNoInterests as k, UniverSheetsPlugin as ee } from "@univerjs/sheets";
import { Subject as te, filter as U, map as E } from "rxjs";
class u extends x {
  constructor() {
    super(...arguments);
    l(this, "_noteMatrix", /* @__PURE__ */ new Map());
    l(this, "_change$", new te());
    l(this, "change$", this._change$.asObservable());
  }
  _ensureNoteMatrix(e, s) {
    let t = this._noteMatrix.get(e);
    t || (t = /* @__PURE__ */ new Map(), this._noteMatrix.set(e, t));
    let n = t.get(s);
    return n || (n = new H(), t.set(s, n)), n;
  }
  getSheetShowNotes$(e, s) {
    return this._change$.pipe(
      U(({ unitId: t, sheetId: n }) => t === e && n === s),
      E(() => {
        const t = this._ensureNoteMatrix(e, s), n = [];
        return t.forValue((o, a, c) => {
          c.show && n.push({ loc: { row: o, col: a, unitId: e, subUnitId: s }, note: c });
        }), n;
      })
    );
  }
  getCellNoteChange$(e, s, t, n) {
    return this._change$.pipe(
      U(({ unitId: o, sheetId: a, row: c, col: h }) => o === e && a === s && c === t && h === n),
      E(({ note: o }) => o)
    );
  }
  updateNote(e, s, t, n, o, a) {
    const c = this._ensureNoteMatrix(e, s), h = c.getValue(t, n);
    c.setValue(t, n, o), this._change$.next({ unitId: e, sheetId: s, row: t, col: n, type: "update", note: o, oldNote: h, silent: a });
  }
  removeNote(e, s, t, n, o) {
    const a = this._ensureNoteMatrix(e, s), c = a.getValue(t, n);
    a.realDeleteValue(t, n), this._change$.next({ unitId: e, sheetId: s, row: t, col: n, type: "update", note: null, oldNote: c, silent: o });
  }
  toggleNotePopup(e, s, t, n, o) {
    const a = this._ensureNoteMatrix(e, s), c = a.getValue(t, n);
    if (c) {
      c.show = !c.show;
      const h = { ...c, show: c.show };
      a.setValue(t, n, h), this._change$.next({
        unitId: e,
        sheetId: s,
        row: t,
        col: n,
        type: "update",
        note: h,
        oldNote: c,
        silent: o
      });
    }
  }
  updateNotePosition(e, s, t, n, o, a, c) {
    const h = this._ensureNoteMatrix(e, s), d = h.getValue(t, n);
    d && (h.realDeleteValue(t, n), h.setValue(o, a, d), this._change$.next({
      unitId: e,
      sheetId: s,
      row: t,
      col: n,
      type: "ref",
      newPosition: { row: o, col: a },
      note: d,
      silent: c
    }));
  }
  getNote(e, s, t, n) {
    return this._ensureNoteMatrix(e, s).getValue(t, n);
  }
  getUnitNotes(e) {
    return this._noteMatrix.get(e);
  }
  getSheetNotes(e, s) {
    const t = this._noteMatrix.get(e);
    if (t)
      return t.get(s);
  }
  getNotes() {
    return this._noteMatrix;
  }
  deleteUnitNotes(e) {
    this._noteMatrix.delete(e);
  }
}
const _ = {
  id: "sheet.mutation.update-note",
  type: p.MUTATION,
  handler: (i, r) => {
    const { unitId: e, sheetId: s, row: t, col: n, note: o, silent: a } = r;
    return i.get(u).updateNote(e, s, t, n, o, a), !0;
  }
}, m = {
  id: "sheet.mutation.remove-note",
  type: p.MUTATION,
  handler: (i, r) => {
    const { unitId: e, sheetId: s, row: t, col: n, silent: o } = r;
    return i.get(u).removeNote(e, s, t, n, o), !0;
  }
}, D = {
  id: "sheet.mutation.toggle-note-popup",
  type: p.MUTATION,
  handler: (i, r) => {
    const { unitId: e, sheetId: s, row: t, col: n, silent: o } = r;
    return i.get(u).toggleNotePopup(e, s, t, n, o), !0;
  }
}, R = {
  id: "sheet.mutation.update-note-position",
  type: p.MUTATION,
  handler: (i, r) => {
    const { unitId: e, sheetId: s, row: t, col: n, newPosition: o, silent: a } = r;
    return i.get(u).updateNotePosition(e, s, t, n, o.row, o.col, a), !0;
  }
}, se = {
  id: "sheet.command.delete-note",
  type: p.COMMAND,
  handler: (i, r) => {
    const e = i.get(P), s = T(e);
    if (!s) return !1;
    const n = i.get(y).getCurrentLastSelection();
    if (!(n != null && n.primary)) return !1;
    const { actualColumn: o, actualRow: a } = n.primary;
    return i.get(N).executeCommand(m.id, {
      unitId: s.unitId,
      sheetId: s.subUnitId,
      row: a,
      col: o
    });
  }
}, ne = {
  id: "sheet.command.toggle-note-popup",
  type: p.COMMAND,
  handler: (i, r) => {
    const e = i.get(P), s = T(e);
    if (!s) return !1;
    const n = i.get(y).getCurrentLastSelection();
    if (!(n != null && n.primary)) return !1;
    const { actualColumn: o, actualRow: a } = n.primary;
    return i.get(N).executeCommand(D.id, {
      unitId: s.unitId,
      sheetId: s.subUnitId,
      row: a,
      col: o
    });
  }
}, re = {
  id: "sheet.command.update-note",
  type: p.COMMAND,
  handler: (i, r) => i.get(N).syncExecuteCommand(_.id, r)
}, V = "SHEET_NOTE_PLUGIN";
var oe = Object.getOwnPropertyDescriptor, ie = (i, r, e, s) => {
  for (var t = s > 1 ? void 0 : s ? oe(r, e) : r, n = i.length - 1, o; n >= 0; n--)
    (o = i[n]) && (t = o(t) || t);
  return t;
}, f = (i, r) => (e, s) => r(e, s, i);
let M = class extends x {
  constructor(i, r, e, s) {
    super(), this._resourceManagerService = i, this._univerInstanceService = r, this._sheetInterceptorService = e, this._sheetsNoteModel = s, this._initSnapshot(), this._initSheetChange();
  }
  _initSnapshot() {
    const i = (e) => {
      const s = this._sheetsNoteModel.getUnitNotes(e);
      if (!s)
        return "";
      const t = {};
      return s.forEach((n, o) => {
        const a = {};
        n.forValue((c, h, d) => {
          a[c] || (a[c] = {}), a[c][h] = d;
        }), Object.keys(a).length > 0 && (t[o] = a);
      }), JSON.stringify(t);
    }, r = (e) => {
      if (!e)
        return {};
      try {
        return JSON.parse(e);
      } catch {
        return {};
      }
    };
    this.disposeWithMe(
      this._resourceManagerService.registerPluginResource({
        pluginName: V,
        businesses: [v.UNIVER_SHEET],
        toJson: (e) => i(e),
        parseJson: (e) => r(e),
        onUnLoad: (e) => {
          this._sheetsNoteModel.deleteUnitNotes(e);
        },
        onLoad: (e, s) => {
          Object.entries(s).forEach(([t, n]) => {
            Object.entries(n).forEach(([o, a]) => {
              Object.entries(a).forEach(([c, h]) => {
                this._sheetsNoteModel.updateNote(
                  e,
                  t,
                  Number(o),
                  Number(c),
                  h
                );
              });
            });
          });
        }
      })
    );
  }
  // eslint-disable-next-line max-lines-per-function
  _initSheetChange() {
    this.disposeWithMe(
      this._sheetInterceptorService.interceptCommand({
        // eslint-disable-next-line max-lines-per-function
        getMutations: (i) => {
          var r;
          if (i.id === Q.id) {
            const e = i.params, s = e.unitId || this._univerInstanceService.getCurrentUnitOfType(v.UNIVER_SHEET).getUnitId(), t = e.subUnitId || ((r = this._univerInstanceService.getCurrentUnitOfType(v.UNIVER_SHEET).getActiveSheet()) == null ? void 0 : r.getSheetId());
            if (!s || !t)
              return { redos: [], undos: [] };
            const n = this._sheetsNoteModel.getSheetNotes(s, t);
            if (!n)
              return { redos: [], undos: [] };
            const o = [], a = [];
            return n.forValue((c, h, d) => {
              o.push({
                id: m.id,
                params: {
                  unitId: s,
                  sheetId: t,
                  row: c,
                  col: h
                }
              }), a.push({
                id: _.id,
                params: {
                  unitId: s,
                  sheetId: t,
                  row: c,
                  col: h,
                  note: d
                }
              });
            }), { redos: o, undos: a };
          } else if (i.id === X.id) {
            const e = i.params, { unitId: s, subUnitId: t, targetSubUnitId: n } = e;
            if (!s || !t || !n)
              return { redos: [], undos: [] };
            const o = this._sheetsNoteModel.getSheetNotes(s, t);
            if (!o)
              return { redos: [], undos: [] };
            const a = [], c = [];
            return o.forValue((h, d, A) => {
              a.push({
                id: _.id,
                params: {
                  unitId: s,
                  sheetId: n,
                  row: h,
                  col: d,
                  note: A
                }
              }), c.push({
                id: m.id,
                params: {
                  unitId: s,
                  sheetId: n,
                  row: h,
                  col: d
                }
              });
            }), { redos: a, undos: c };
          }
          return { redos: [], undos: [] };
        }
      })
    );
  }
};
M = ie([
  f(0, J),
  f(1, P),
  f(2, g(B)),
  f(3, g(u))
], M);
const ae = "sheets-note.config", b = {};
var ce = Object.getOwnPropertyDescriptor, he = (i, r, e, s) => {
  for (var t = s > 1 ? void 0 : s ? ce(r, e) : r, n = i.length - 1, o; n >= 0; n--)
    (o = i[n]) && (t = o(t) || t);
  return t;
}, S = (i, r) => (e, s) => r(e, s, i);
let I = class extends x {
  constructor(r, e, s, t) {
    super();
    l(this, "_disposableMap", /* @__PURE__ */ new Map());
    l(this, "_watcherMap", /* @__PURE__ */ new Map());
    l(this, "_handleRangeChange", (r, e, s, t, n, o, a) => o ? {
      redos: [{
        id: R.id,
        params: {
          unitId: r,
          sheetId: e,
          row: t,
          col: n,
          newPosition: {
            row: o.startRow,
            col: o.startColumn
          },
          silent: a
        }
      }],
      undos: [{
        id: R.id,
        params: {
          unitId: r,
          sheetId: e,
          row: o.startRow,
          col: o.startColumn,
          newPosition: {
            row: t,
            col: n
          },
          note: s,
          silent: a
        }
      }]
    } : {
      redos: [{
        id: m.id,
        params: {
          unitId: r,
          sheetId: e,
          row: t,
          col: n
        }
      }],
      undos: [{
        id: _.id,
        params: {
          unitId: r,
          sheetId: e,
          row: t,
          col: n,
          note: s
        }
      }]
    });
    this._refRangeService = r, this._sheetsNoteModel = e, this._selectionManagerService = s, this._commandService = t, this._initData(), this._initRefRange();
  }
  _getIdWithUnitId(r, e, s, t) {
    return `${r}-${e}-${s}-${t}`;
  }
  _register(r, e, s, t, n) {
    const o = {
      startColumn: n,
      endColumn: n,
      startRow: t,
      endRow: t
    };
    this._disposableMap.set(
      this._getIdWithUnitId(r, e, t, n),
      this._refRangeService.registerRefRange(o, (a) => {
        const c = k(o, a, { selectionManagerService: this._selectionManagerService }), h = Array.isArray(c) ? c[0] : c;
        return h && h.startColumn === o.startColumn && h.startRow === o.startRow ? {
          undos: [],
          redos: []
        } : this._handleRangeChange(r, e, s, t, n, h, !1);
      }, r, e)
    );
  }
  _watch(r, e, s, t, n) {
    const o = {
      startColumn: n,
      endColumn: n,
      startRow: t,
      endRow: t
    };
    this._watcherMap.set(
      this._getIdWithUnitId(r, e, t, n),
      this._refRangeService.watchRange(r, e, o, (a, c) => {
        const { redos: h } = this._handleRangeChange(r, e, s, a.startRow, a.startColumn, c, !0);
        G(h, this._commandService, { onlyLocal: !0 });
      }, !0)
    );
  }
  _unwatch(r, e, s, t) {
    var o;
    const n = this._getIdWithUnitId(r, e, s, t);
    (o = this._watcherMap.get(n)) == null || o.dispose(), this._watcherMap.delete(n);
  }
  _unregister(r, e, s, t) {
    var o;
    const n = this._getIdWithUnitId(r, e, s, t);
    (o = this._disposableMap.get(n)) == null || o.dispose(), this._disposableMap.delete(n);
  }
  _initData() {
    const r = this._sheetsNoteModel.getNotes();
    for (const [e, s] of r)
      for (const [t, n] of s)
        n.forValue((o, a, c) => (c && (this._register(e, t, c, o, a), this._watch(e, t, c, o, a)), !0));
  }
  _initRefRange() {
    this.disposeWithMe(
      this._sheetsNoteModel.change$.subscribe((r) => {
        switch (r.type) {
          case "update": {
            const { unitId: e, sheetId: s, row: t, col: n, note: o } = r, a = this._getIdWithUnitId(e, s, t, n);
            o ? this._disposableMap.has(a) || (this._register(e, s, o, t, n), this._watch(e, s, o, t, n)) : (this._unregister(e, s, t, n), this._unwatch(e, s, t, n));
            break;
          }
          case "ref": {
            const { unitId: e, sheetId: s, row: t, col: n, newPosition: o, note: a, silent: c } = r;
            this._unregister(e, s, t, n), c || (this._unwatch(e, s, t, n), this._watch(e, s, a, o.row, o.col)), this._register(e, s, a, o.row, o.col);
            break;
          }
        }
      })
    );
  }
};
I = he([
  S(0, g(Z)),
  S(1, g(u)),
  S(2, g(y)),
  S(3, N)
], I);
var de = Object.getOwnPropertyDescriptor, ue = (i, r, e, s) => {
  for (var t = s > 1 ? void 0 : s ? de(r, e) : r, n = i.length - 1, o; n >= 0; n--)
    (o = i[n]) && (t = o(t) || t);
  return t;
}, le = (i, r) => (e, s) => r(e, s, i);
let C = class extends x {
  constructor(i) {
    super(), this._commandService = i, this._initialize();
  }
  _initialize() {
    [
      R,
      D,
      _,
      m,
      se,
      ne,
      re
    ].forEach((i) => {
      this.disposeWithMe(
        this._commandService.registerCommand(i)
      );
    });
  }
};
C = ue([
  le(0, N)
], C);
var pe = Object.defineProperty, ge = Object.getOwnPropertyDescriptor, _e = (i, r, e) => r in i ? pe(i, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[r] = e, me = (i, r, e, s) => {
  for (var t = s > 1 ? void 0 : s ? ge(r, e) : r, n = i.length - 1, o; n >= 0; n--)
    (o = i[n]) && (t = o(t) || t);
  return t;
}, $ = (i, r) => (e, s) => r(e, s, i), j = (i, r, e) => _e(i, typeof r != "symbol" ? r + "" : r, e);
let w = class extends K {
  constructor(i = b, r, e) {
    super(), this._config = i, this._configService = r, this._injector = e;
    const { ...s } = Y(
      {},
      b,
      this._config
    );
    this._configService.setConfig(ae, s);
  }
  onStarting() {
    [
      [u],
      [C],
      [M],
      [I]
    ].forEach((i) => {
      this._injector.add(i);
    }), O(this._injector, [
      [u],
      [C],
      [M]
    ]);
  }
  onReady() {
    O(this._injector, [
      [I]
    ]);
  }
};
j(w, "pluginName", V);
j(w, "type", v.UNIVER_SHEET);
w = me([
  z(ee),
  $(1, F),
  $(2, g(q))
], w);
export {
  m as RemoveNoteMutation,
  se as SheetDeleteNoteCommand,
  ne as SheetToggleNotePopupCommand,
  re as SheetUpdateNoteCommand,
  u as SheetsNoteModel,
  M as SheetsNoteResourceController,
  D as ToggleNotePopupMutation,
  w as UniverSheetsNotePlugin,
  _ as UpdateNoteMutation,
  R as UpdateNotePositionMutation
};
