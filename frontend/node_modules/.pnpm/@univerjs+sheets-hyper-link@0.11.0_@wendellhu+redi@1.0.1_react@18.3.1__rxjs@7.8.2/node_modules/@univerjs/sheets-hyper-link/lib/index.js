var $e = Object.defineProperty;
var Ae = (s, e, t) => e in s ? $e(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var w = (s, e, t) => Ae(s, typeof e != "symbol" ? e + "" : e, t);
import { Disposable as T, ObjectMatrix as Z, UniverInstanceType as I, IUniverInstanceService as k, CommandType as L, ICommandService as b, IUndoRedoService as Se, Tools as Y, BuildTextUtils as ee, CustomRangeType as U, TextX as ce, CellValueType as Re, sequenceExecute as G, generateRandomId as le, getBodySlice as De, Inject as M, sequenceExecuteAsync as We, isValidRange as Ie, toDisposable as Be, DisposableCollection as je, Rectangle as Fe, Range as Ke, DOCS_NORMAL_EDITOR_UNIT_ID_KEY as Ye, IResourceManagerService as Ge, LocaleService as ze, DependentOn as Je, Injector as Xe, IConfigService as qe, Plugin as Qe, merge as Ze, registerDependencies as et, touchDependencies as tt } from "@univerjs/core";
import { addCustomRangeBySelectionFactory as nt, deleteCustomRangeFactory as rt, replaceSelectionFactory as Ne } from "@univerjs/docs";
import { SheetInterceptorService as ue, getSheetCommandTarget as j, SetRangeValuesMutation as V, SetRangeValuesUndoMutationFactory as Me, RefRangeService as Oe, SheetsSelectionsService as He, handleCommonRangeChangeWithEffectRefCommandsSkipNoInterests as st, handleDefaultRangeChangeWithEffectRefCommandsSkipNoInterests as it, RemoveSheetCommand as at, handleDefaultRangeChangeWithEffectRefCommands as ot, SetRangeValuesCommand as dt, ClearSelectionContentCommand as ct, ClearSelectionAllCommand as lt, ClearSelectionFormatCommand as ut, AFTER_CELL_EDIT as pt, UniverSheetsPlugin as ht } from "@univerjs/sheets";
import { Subject as gt } from "rxjs";
import { deserializeRangeWithSheet as Ce, serializeRange as B, IDefinedNamesService as ft, serializeRangeWithSheet as mt } from "@univerjs/engine-formula";
var _t = Object.getOwnPropertyDescriptor, yt = (s, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? _t(e, t) : e, i = s.length - 1, a; i >= 0; i--)
    (a = s[i]) && (r = a(r) || r);
  return r;
}, vt = (s, e) => (t, n) => e(t, n, s);
let R = class extends T {
  constructor(e) {
    super();
    w(this, "_linkUpdate$", new gt());
    w(this, "linkUpdate$", this._linkUpdate$.asObservable());
    w(this, "_linkMap", /* @__PURE__ */ new Map());
    w(this, "_linkPositionMap", /* @__PURE__ */ new Map());
    this._univerInstanceService = e, this.disposeWithMe({
      dispose: () => {
        this._linkUpdate$.complete();
      }
    });
  }
  _ensureMap(e, t) {
    let n = this._linkMap.get(e);
    n || (n = /* @__PURE__ */ new Map(), this._linkMap.set(e, n));
    let r = n.get(t);
    r || (r = new Z(), n.set(t, r));
    let i = this._linkPositionMap.get(e);
    i || (i = /* @__PURE__ */ new Map(), this._linkPositionMap.set(e, i));
    let a = i.get(t);
    return a || (a = /* @__PURE__ */ new Map(), i.set(t, a)), {
      matrix: r,
      positionMap: a
    };
  }
  addHyperLink(e, t, n) {
    const { matrix: r, positionMap: i } = this._ensureMap(e, t);
    return r.setValue(n.row, n.column, n), i.set(n.id, { row: n.row, column: n.column, link: n }), this._linkUpdate$.next({
      unitId: e,
      subUnitId: t,
      payload: n,
      type: "add"
    }), !0;
  }
  updateHyperLink(e, t, n, r, i = !1) {
    const { matrix: a, positionMap: o } = this._ensureMap(e, t), c = o.get(n);
    if (!c)
      return !0;
    const d = a.getValue(c.row, c.column);
    return d && (Object.assign(d, r), this._linkUpdate$.next({
      unitId: e,
      subUnitId: t,
      payload: {
        display: d.display,
        payload: d.payload
      },
      id: n,
      type: "update",
      silent: i
    })), !0;
  }
  updateHyperLinkRef(e, t, n, r, i = !1) {
    const { matrix: a, positionMap: o } = this._ensureMap(e, t), c = o.get(n);
    if (!c)
      return !0;
    let d = a.getValue(c.row, c.column);
    return !d || d.id !== n ? d = c.link : a.realDeleteValue(c.row, c.column), Object.assign(d, r), o.set(n, { ...r, link: d }), a.setValue(r.row, r.column, d), this._linkUpdate$.next({
      unitId: e,
      subUnitId: t,
      payload: r,
      id: n,
      type: "updateRef",
      silent: i
    }), !0;
  }
  removeHyperLink(e, t, n) {
    const { matrix: r, positionMap: i } = this._ensureMap(e, t), a = i.get(n);
    if (!a)
      return !1;
    i.delete(n);
    const o = r.getValue(a.row, a.column);
    return o && o.id === n && r.realDeleteValue(a.row, a.column), this._linkUpdate$.next({
      unitId: e,
      subUnitId: t,
      payload: a.link,
      type: "remove"
    }), !0;
  }
  getHyperLink(e, t, n) {
    const { matrix: r, positionMap: i } = this._ensureMap(e, t), a = i.get(n);
    if (a)
      return r.getValue(a.row, a.column);
  }
  getHyperLinkByLocation(e, t, n, r) {
    const { matrix: i } = this._ensureMap(e, t);
    return i.getValue(n, r);
  }
  getHyperLinkByLocationSync(e, t, n, r) {
    var l, u, h, g, p;
    const { matrix: i } = this._ensureMap(e, t), a = this._univerInstanceService.getUnit(e, I.UNIVER_SHEET), o = (l = a == null ? void 0 : a.getSheetBySheetId(t)) == null ? void 0 : l.getCellRaw(n, r), c = ((p = (g = o == null ? void 0 : o.v) != null ? g : (h = (u = o == null ? void 0 : o.p) == null ? void 0 : u.body) == null ? void 0 : h.dataStream.slice(0, -2)) != null ? p : "").toString(), d = i.getValue(n, r);
    if (d)
      return {
        ...d,
        display: c
      };
  }
  getSubUnit(e, t) {
    const { matrix: n } = this._ensureMap(e, t), r = [];
    return n.forValue((i, a, o) => {
      o && r.push(o);
    }), r;
  }
  getUnit(e) {
    const t = this._linkMap.get(e);
    return t ? Array.from(t.keys()).map((n) => {
      const r = this.getSubUnit(e, n);
      return {
        unitId: e,
        subUnitId: n,
        links: r
      };
    }) : [];
  }
  deleteUnit(e) {
    const t = this.getUnit(e);
    this._linkMap.delete(e), this._linkPositionMap.delete(e), this._linkUpdate$.next({
      type: "unload",
      unitId: e,
      unitLinks: t
    });
  }
  getAll() {
    return Array.from(this._linkMap.keys()).map((t) => this.getUnit(t));
  }
};
R = yt([
  vt(0, k)
], R);
const D = {
  type: L.MUTATION,
  id: "sheets.mutation.add-hyper-link",
  handler(s, e) {
    if (!e)
      return !1;
    const t = s.get(R), { unitId: n, subUnitId: r, link: i } = e;
    return t.addHyperLink(n, r, i);
  }
}, N = {
  type: L.MUTATION,
  id: "sheets.mutation.remove-hyper-link",
  handler(s, e) {
    if (!e)
      return !1;
    const t = s.get(R), { unitId: n, subUnitId: r, id: i } = e;
    return t.removeHyperLink(n, r, i);
  }
}, St = {
  type: L.COMMAND,
  id: "sheets.command.add-hyper-link",
  // eslint-disable-next-line max-lines-per-function
  async handler(s, e) {
    if (!e) return !1;
    const t = s.get(b), n = s.get(Se), r = s.get(k), i = s.get(R), a = s.get(ue), o = j(r, e);
    if (!o) return !1;
    const { unitId: c, subUnitId: d, workbook: l, worksheet: u } = o, { link: h } = e, { payload: g, display: p, row: f, column: m, id: _ } = h, C = u.getCell(f, m), y = u.getBlankCellDocumentModel(C, f, m), v = y.documentModel.getSnapshot(), S = Y.deepClone(v.body);
    if (!S) return !1;
    let P;
    if (p ? P = ee.selection.replace({
      selection: {
        startOffset: 0,
        endOffset: S.dataStream.length - 2,
        collapsed: S.dataStream.length - 2 === 0
      },
      body: {
        dataStream: `${p}`,
        customRanges: [{
          startIndex: 0,
          endIndex: p.length - 1,
          rangeType: U.HYPERLINK,
          rangeId: _,
          properties: {
            url: g
            // refId: id,
          }
        }]
      },
      doc: y.documentModel
    }) : P = ee.customRange.add({
      body: S,
      ranges: [{ startOffset: 0, endOffset: S.dataStream.length - 2, collapsed: !1 }],
      rangeId: _,
      rangeType: U.HYPERLINK,
      properties: {
        url: g,
        refId: _
      }
    }), !P) return !1;
    const F = ce.apply(S, P.serialize()), O = {
      p: {
        ...v,
        body: F
      },
      t: Re.STRING
    }, A = a.onWriteCell(l, u, f, m, O), W = {
      unitId: c,
      subUnitId: d,
      cellValue: {
        [h.row]: {
          [h.column]: A
        }
      }
    }, pe = {
      id: V.id,
      params: W
    }, z = Me(s, W), he = {
      id: V.id,
      params: z
    }, K = [pe], H = [he], x = i.getHyperLinkByLocation(c, d, f, m);
    return x && (K.push({
      id: N.id,
      params: {
        unitId: c,
        subUnitId: d,
        id: x.id
      }
    }), H.push({
      id: D.id,
      params: {
        unitId: c,
        subUnitId: d,
        link: x
      }
    })), await G(K, t) ? await a.onValidateCell(l, u, f, m) === !1 ? (G(H, t), !1) : (n.pushUndoRedo({
      redoMutations: K,
      undoMutations: H,
      unitID: c
    }), !0) : !1;
  }
}, Rt = {
  id: "sheets.command.add-rich-hyper-link",
  type: L.COMMAND,
  handler: async (s, e) => {
    if (!e)
      return !1;
    const { documentId: t, link: n } = e, r = s.get(b), i = le(), { payload: a } = n, o = nt(s, {
      unitId: t,
      rangeId: i,
      rangeType: U.HYPERLINK,
      properties: {
        url: a,
        refId: i
      }
    });
    return o ? r.syncExecuteCommand(o.id, o.params) : !1;
  }
}, It = {
  type: L.COMMAND,
  id: "sheets.command.cancel-hyper-link",
  // eslint-disable-next-line max-lines-per-function
  handler(s, e) {
    var O, A;
    if (!e) return !1;
    const t = s.get(b), n = s.get(Se), r = s.get(k), i = s.get(R), a = j(r, e);
    if (!a) return !1;
    const { row: o, column: c, id: d } = e, { unitId: l, subUnitId: u, worksheet: h } = a, g = h.getCell(o, c);
    if (!g) return !1;
    const p = h.getCellDocumentModelWithFormula(g, o, c);
    if (!(p != null && p.documentModel)) return !1;
    const f = Y.deepClone(p.documentModel.getSnapshot()), m = (A = (O = f.body) == null ? void 0 : O.customRanges) == null ? void 0 : A.find((W) => `${W.rangeId}` === d);
    if (!m) return !1;
    const _ = ee.customRange.delete({ documentDataModel: p.documentModel, rangeId: m.rangeId });
    if (!_) return !1;
    const C = ce.apply(f.body, _.serialize()), y = [], v = [], S = {
      unitId: l,
      subUnitId: u,
      cellValue: {
        [o]: {
          [c]: {
            p: {
              ...f,
              body: C
            },
            t: Re.STRING
          }
        }
      }
    };
    y.push({
      id: V.id,
      params: S
    });
    const P = Me(s, S);
    v.push({
      id: V.id,
      params: P
    });
    const F = i.getHyperLinkByLocation(l, u, o, c);
    return F && (y.push({
      id: N.id,
      params: {
        unitId: l,
        subUnitId: u,
        id: d
      }
    }), v.push({
      id: D.id,
      params: {
        unitId: l,
        subUnitId: u,
        link: {
          ...F
        }
      }
    })), G(y, t).result ? (n.pushUndoRedo({
      redoMutations: y,
      undoMutations: v,
      unitID: l
    }), !0) : !1;
  }
}, Mt = {
  type: L.COMMAND,
  id: "sheets.command.cancel-rich-hyper-link",
  handler(s, e) {
    var l, u;
    if (!e)
      return !1;
    const { id: t, documentId: n } = e, r = s.get(b), a = s.get(k).getUnit(n, I.UNIVER_DOC), o = (u = (l = a == null ? void 0 : a.getBody()) == null ? void 0 : l.customRanges) == null ? void 0 : u.find((h) => h.rangeId === t);
    let c = null;
    o && o.endIndex === a.getBody().dataStream.length - 3 && (c = {
      dataStream: " "
    });
    const d = rt(s, { unitId: n, rangeId: t, insert: c });
    return d ? r.syncExecuteCommand(d.id, d.params) : !1;
  }
}, Ct = {
  type: L.COMMAND,
  id: "sheets.command.update-hyper-link",
  // eslint-disable-next-line max-lines-per-function
  async handler(s, e) {
    var we, ke, Le;
    if (!e) return !1;
    const t = s.get(b), n = s.get(Se), r = s.get(k), i = s.get(R), a = s.get(ue), o = j(r, {
      unitId: e.unitId,
      subUnitId: e.subUnitId
    });
    if (!o) return !1;
    const { payload: c, row: d, column: l, id: u } = e, { workbook: h, worksheet: g, unitId: p, subUnitId: f } = o, { payload: m, display: _ = "" } = c, C = g.getCell(d, l);
    if (!C) return !1;
    const y = g.getCellDocumentModelWithFormula(C, d, l);
    if (!(y != null && y.documentModel)) return !1;
    const v = y.documentModel.getSnapshot(), S = (ke = (we = v.body) == null ? void 0 : we.customRanges) == null ? void 0 : ke.find((Ee) => `${Ee.rangeId}` === u);
    if (!S) return !1;
    const P = le(), $ = (Le = De(y.documentModel.getBody(), S.startIndex, S.endIndex + 1).textRuns) == null ? void 0 : Le[0];
    $ && ($.ed = _.length + 1);
    const O = Ne(s, {
      unitId: p,
      body: {
        dataStream: `${_}`,
        customRanges: [{
          rangeId: P,
          rangeType: U.HYPERLINK,
          startIndex: 0,
          endIndex: _.length - 1,
          properties: {
            url: m
          }
        }],
        textRuns: $ ? [$] : void 0
      },
      selection: {
        startOffset: S.startIndex,
        endOffset: S.endIndex + 1,
        collapsed: !1
      },
      doc: y.documentModel
    });
    if (!O)
      return !1;
    const A = ce.apply(Y.deepClone(v.body), O.textX.serialize()), W = {
      p: {
        ...v,
        body: A
      },
      t: Re.STRING
    }, pe = a.onWriteCell(h, g, d, l, W), z = {
      id: V.id,
      params: {
        unitId: p,
        subUnitId: f,
        cellValue: {
          [d]: {
            [l]: pe
          }
        }
      }
    }, he = Me(s, z.params), K = {
      id: V.id,
      params: he
    }, H = [z], x = [K], J = i.getHyperLinkByLocation(p, f, d, l);
    return J && (H.push({
      id: N.id,
      params: {
        unitId: p,
        subUnitId: f,
        id: J.id
      }
    }), x.push({
      id: D.id,
      params: {
        unitId: p,
        subUnitId: f,
        link: J
      }
    })), G(H, t) ? await a.onValidateCell(h, g, d, l) === !1 ? (G(x, t), !1) : (n.pushUndoRedo({
      redoMutations: H,
      undoMutations: x,
      unitID: p
    }), !0) : !1;
  }
}, wt = {
  type: L.COMMAND,
  id: "sheets.command.update-rich-hyper-link",
  handler: (s, e) => {
    var p, f, m, _;
    if (!e)
      return !1;
    const { documentId: t, payload: n, id: r } = e, i = s.get(k), a = s.get(b), o = i.getUnit(t, I.UNIVER_DOC);
    if (!o)
      return !1;
    const c = (f = (p = o.getBody()) == null ? void 0 : p.customRanges) == null ? void 0 : f.find((C) => C.rangeId === r);
    if (!c)
      return !1;
    const d = (m = e.payload.display) != null ? m : "", l = le(), h = (_ = De(o.getBody(), c.startIndex, c.endIndex + 1).textRuns) == null ? void 0 : _[0];
    h && (h.ed = d.length + 1);
    const g = Ne(s, {
      unitId: t,
      body: {
        dataStream: `${d}`,
        customRanges: [{
          rangeId: l,
          rangeType: U.HYPERLINK,
          startIndex: 0,
          endIndex: d.length - 1,
          properties: {
            url: n.payload
          }
        }],
        textRuns: h ? [h] : void 0
      },
      selection: {
        startOffset: c.startIndex,
        endOffset: c.endIndex + 1,
        collapsed: !1
      },
      doc: o
    });
    return g ? a.syncExecuteCommand(g.id, g.params) : !1;
  }
}, _e = {
  type: L.MUTATION,
  id: "sheets.mutation.update-hyper-link",
  handler(s, e) {
    if (!e)
      return !1;
    const t = s.get(R), { unitId: n, subUnitId: r, payload: i, id: a } = e;
    return t.updateHyperLink(n, r, a, i, !1);
  }
}, ye = {
  type: L.MUTATION,
  id: "sheets.mutation.update-hyper-link-ref",
  handler(s, e) {
    if (!e)
      return !1;
    const t = s.get(R), { unitId: n, subUnitId: r, id: i, row: a, column: o, silent: c } = e;
    return t.updateHyperLinkRef(n, r, i, { row: a, column: o }, c);
  }
}, Q = {
  type: L.MUTATION,
  id: "sheets.mutation.update-rich-hyper-link",
  handler(s, e) {
    var g, p, f;
    if (!e)
      return !1;
    const { unitId: t, subUnitId: n, row: r, col: i, id: a, url: o } = e, c = s.get(k), d = j(c, { unitId: t, subUnitId: n });
    if (!d)
      return !1;
    const { worksheet: l } = d, u = l.getCellRaw(r, i), h = (f = (p = (g = u == null ? void 0 : u.p) == null ? void 0 : g.body) == null ? void 0 : p.customRanges) == null ? void 0 : f.find((m) => m.rangeType === U.HYPERLINK && m.rangeId === a);
    return h && (h.properties.url = o), !0;
  }
}, kt = "sheets-hyper-link.config", Ue = {}, xe = "SHEET_HYPER_LINK_PLUGIN", te = "err";
var Lt = Object.getOwnPropertyDescriptor, Et = (s, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? Lt(e, t) : e, i = s.length - 1, a; i >= 0; i--)
    (a = s[i]) && (r = a(r) || r);
  return r;
}, X = (s, e) => (t, n) => e(t, n, s);
let ne = class extends T {
  constructor(e, t, n, r) {
    super();
    w(this, "_disposableMap", /* @__PURE__ */ new Map());
    w(this, "_watchDisposableMap", /* @__PURE__ */ new Map());
    w(this, "_rangeDisableMap", /* @__PURE__ */ new Map());
    w(this, "_rangeWatcherMap", /* @__PURE__ */ new Map());
    w(this, "_handlePositionChange", (e, t, n, r, i) => {
      const a = {
        startColumn: n.column,
        endColumn: n.column,
        startRow: n.row,
        endRow: n.row
      };
      return r ? {
        redos: [{
          id: ye.id,
          params: {
            unitId: e,
            subUnitId: t,
            id: n.id,
            row: r.startRow,
            column: r.startColumn,
            silent: i
          }
        }],
        undos: [{
          id: ye.id,
          params: {
            unitId: e,
            subUnitId: t,
            id: n.id,
            row: a.startRow,
            column: a.startColumn,
            silent: i
          }
        }]
      } : {
        redos: [{
          id: N.id,
          params: {
            unitId: e,
            subUnitId: t,
            id: n.id
          }
        }],
        undos: [{
          id: D.id,
          params: {
            unitId: e,
            subUnitId: t,
            link: n
          }
        }]
      };
    });
    this._refRangeService = e, this._hyperLinkModel = t, this._selectionManagerService = n, this._commandService = r, this._initData(), this._initRefRange();
  }
  _registerPosition(e, t, n) {
    const r = n.id, i = {
      startColumn: n.column,
      endColumn: n.column,
      startRow: n.row,
      endRow: n.row
    }, a = (o) => {
      const c = st(i, o, { selectionManagerService: this._selectionManagerService }), d = Array.isArray(c) ? c[0] : c;
      return d && d.startColumn === i.startColumn && d.startRow === i.startRow ? {
        undos: [],
        redos: []
      } : this._handlePositionChange(e, t, n, d, !1);
    };
    this._disposableMap.set(r, this._refRangeService.registerRefRange(i, a, e, t));
  }
  _watchPosition(e, t, n) {
    const r = n.id, i = {
      startColumn: n.column,
      endColumn: n.column,
      startRow: n.row,
      endRow: n.row
    };
    this._watchDisposableMap.set(r, this._refRangeService.watchRange(e, t, i, (a, o) => {
      const { redos: c } = this._handlePositionChange(e, t, n, o, !0);
      We(c, this._commandService, { onlyLocal: !0 });
    }, !0));
  }
  _unregisterPosition(e) {
    const t = this._disposableMap.get(e);
    t == null || t.dispose(), this._disposableMap.delete(e);
  }
  _unwatchPosition(e) {
    const t = this._watchDisposableMap.get(e);
    t == null || t.dispose(), this._watchDisposableMap.delete(e);
  }
  _registerRange(e, t, n, r = !1) {
    var i, a, o;
    if (n.startsWith("#")) {
      const c = new URLSearchParams(n.slice(1)), d = {
        gid: (i = c.get("gid")) != null ? i : "",
        range: (a = c.get("range")) != null ? a : "",
        rangeid: (o = c.get("rangeid")) != null ? o : ""
      };
      if (d.range && d.gid) {
        const l = d.gid, u = Ce(d.range).range;
        if (Ie(u) && d.range !== te) {
          const h = (g) => {
            const p = it(u, g, { selectionManagerService: this._selectionManagerService });
            return p && B(p) === B(u) ? {
              redos: [],
              undos: []
            } : {
              redos: [{
                id: _e.id,
                params: {
                  unitId: e,
                  subUnitId: l,
                  id: t,
                  payload: {
                    payload: `#gid=${l}&range=${p ? B(p) : "err"}`
                  }
                }
              }],
              undos: [{
                id: _e.id,
                params: {
                  unitId: e,
                  subUnitId: l,
                  id: t,
                  payload: {
                    payload: n
                  }
                }
              }]
            };
          };
          this._rangeDisableMap.set(t, this._refRangeService.registerRefRange(u, h, e, l)), r || this._rangeWatcherMap.set(t, this._refRangeService.watchRange(e, l, u, (g, p) => {
            this._hyperLinkModel.updateHyperLink(e, l, t, {
              payload: `#gid=${l}&range=${p ? B(p) : "err"}`
            }, !0);
          }, !0));
        }
      }
    }
  }
  _unregisterRange(e) {
    const t = this._rangeDisableMap.get(e);
    t == null || t.dispose(), this._rangeDisableMap.delete(e);
  }
  _unwatchRange(e) {
    const t = this._rangeWatcherMap.get(e);
    t == null || t.dispose(), this._rangeWatcherMap.delete(e);
  }
  _initData() {
    this._hyperLinkModel.getAll().forEach((t) => {
      t.forEach((n) => {
        const { unitId: r, subUnitId: i, links: a } = n;
        a.forEach((o) => {
          this._registerPosition(r, i, o), this._watchPosition(r, i, o), this._registerRange(r, o.id, o.payload);
        });
      });
    });
  }
  _initRefRange() {
    this.disposeWithMe(
      this._hyperLinkModel.linkUpdate$.subscribe((e) => {
        switch (e.type) {
          case "add": {
            this._registerPosition(e.unitId, e.subUnitId, e.payload), this._watchPosition(e.unitId, e.subUnitId, e.payload), this._registerRange(e.unitId, e.payload.id, e.payload.payload);
            break;
          }
          case "remove": {
            this._unregisterPosition(e.payload.id), this._unwatchPosition(e.payload.id), this._unregisterRange(e.payload.id), this._unwatchRange(e.payload.id);
            break;
          }
          case "updateRef": {
            const { unitId: t, subUnitId: n, id: r, silent: i } = e, a = this._hyperLinkModel.getHyperLink(t, n, r);
            if (!a)
              return;
            this._unregisterPosition(r), this._registerPosition(t, n, a), i || (this._unwatchPosition(r), this._watchPosition(t, n, a));
            break;
          }
          case "unload": {
            const { unitLinks: t } = e;
            t.forEach((n) => {
              const { links: r } = n;
              r.forEach((i) => {
                this._unregisterPosition(i.id), this._unwatchPosition(i.id), this._unregisterRange(i.id), this._unwatchRange(i.id);
              });
            });
            break;
          }
          case "update": {
            e.silent || this._unwatchRange(e.id), this._unregisterRange(e.id), this._registerRange(e.unitId, e.id, e.payload.payload, e.silent);
            break;
          }
        }
      })
    ), this.disposeWithMe(Be(() => {
      this._disposableMap.forEach((e) => {
        e.dispose();
      }), this._disposableMap.clear();
    }));
  }
};
ne = Et([
  X(0, M(Oe)),
  X(1, M(R)),
  X(2, M(He)),
  X(3, b)
], ne);
var Ut = Object.getOwnPropertyDescriptor, bt = (s, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? Ut(e, t) : e, i = s.length - 1, a; i >= 0; i--)
    (a = s[i]) && (r = a(r) || r);
  return r;
}, ge = (s, e) => (t, n) => e(t, n, s);
let re = class extends T {
  constructor(s, e, t) {
    super(), this._sheetInterceptorService = s, this._univerInstanceService = e, this._hyperLinkModel = t, this._initSheetChange();
  }
  _initSheetChange() {
    this.disposeWithMe(
      this._sheetInterceptorService.interceptCommand({
        getMutations: (s) => {
          var e;
          if (s.id === at.id) {
            const t = s.params, n = t.unitId ? this._univerInstanceService.getUnit(t.unitId) : this._univerInstanceService.getCurrentUnitForType(I.UNIVER_SHEET);
            if (!n)
              return { redos: [], undos: [] };
            const r = n.getUnitId(), i = t.subUnitId || ((e = n.getActiveSheet()) == null ? void 0 : e.getSheetId());
            if (!i)
              return { redos: [], undos: [] };
            const a = this._hyperLinkModel.getSubUnit(r, i), o = a.map((d) => ({
              id: N.id,
              params: {
                unitId: r,
                subUnitId: i,
                id: d.id
              }
            })), c = a.map((d) => ({
              id: D.id,
              params: {
                unitId: r,
                subUnitId: i,
                link: d
              }
            }));
            return { redos: o, undos: c };
          }
          return { redos: [], undos: [] };
        }
      })
    );
  }
};
re = bt([
  ge(0, M(ue)),
  ge(1, k),
  ge(2, M(R))
], re);
var Pt = Object.getOwnPropertyDescriptor, Dt = (s, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? Pt(e, t) : e, i = s.length - 1, a; i >= 0; i--)
    (a = s[i]) && (r = a(r) || r);
  return r;
}, fe = (s, e) => (t, n) => e(t, n, s);
let se = class extends T {
  constructor(e, t, n) {
    super();
    w(this, "_refRangeMap", /* @__PURE__ */ new Map());
    this._commandService = e, this._univerInstanceService = t, this._refRangeService = n, this._initWorkbookLoad(), this._initWorkbookUnload(), this._initSetRangesListener();
  }
  _enusreMap(e, t) {
    let n = this._refRangeMap.get(e);
    n || (n = /* @__PURE__ */ new Map(), this._refRangeMap.set(e, n));
    let r = n.get(t);
    return r || (r = new Z(), n.set(t, r)), r;
  }
  _isLegalRangeUrl(e, t) {
    var r, i, a;
    const n = this._univerInstanceService.getUnit(e, I.UNIVER_SHEET);
    if (!n)
      return null;
    if (t && t.startsWith("#")) {
      const o = new URLSearchParams(t.slice(1)), c = {
        gid: (r = o.get("gid")) != null ? r : "",
        range: (i = o.get("range")) != null ? i : "",
        rangeid: (a = o.get("rangeid")) != null ? a : ""
      };
      if (c.range && c.gid) {
        const d = c.gid, l = n.getSheetBySheetId(d);
        if (!l)
          return null;
        const u = Ce(c.range).range;
        if (Ie(u, l) && c.range !== te)
          return {
            range: u,
            worksheet: l
          };
      }
    }
    return null;
  }
  _registerRange(e, t, n, r, i) {
    var o, c, d, l;
    const a = this._enusreMap(e, t);
    if ((c = (o = i.body) == null ? void 0 : o.customRanges) != null && c.some((u) => {
      var h;
      return u.rangeType === U.HYPERLINK && this._isLegalRangeUrl(e, (h = u.properties) == null ? void 0 : h.url);
    })) {
      const u = new je();
      let h = !1;
      (l = (d = i.body) == null ? void 0 : d.customRanges) == null || l.forEach((g) => {
        var p;
        if (g.rangeType === U.HYPERLINK) {
          const f = (p = g.properties) == null ? void 0 : p.url, m = this._isLegalRangeUrl(e, f);
          if (m) {
            const { range: _, worksheet: C } = m;
            h = !0, u.add(
              this._refRangeService.registerRefRange(
                _,
                (y) => {
                  const v = ot(_, y);
                  return v && Fe.equals(v, _) ? {
                    preRedos: [],
                    preUndos: [],
                    redos: [],
                    undos: []
                  } : {
                    preRedos: [{
                      id: Q.id,
                      params: {
                        unitId: e,
                        subUnitId: t,
                        row: n,
                        col: r,
                        id: g.rangeId,
                        url: `#gid=${t}&range=${v ? B(v) : te}`
                      }
                    }],
                    undos: [{
                      id: Q.id,
                      params: {
                        unitId: e,
                        subUnitId: t,
                        row: n,
                        col: r,
                        id: g.rangeId,
                        url: f
                      }
                    }],
                    redos: []
                  };
                },
                C.getUnitId(),
                C.getSheetId()
              )
            );
          }
        }
      }), h && a.setValue(n, r, u);
    }
  }
  _initWorkbookLoad() {
    const e = (t) => {
      const n = t.getUnitId();
      t.getSheets().forEach((r) => {
        const i = r.getSheetId(), a = this._enusreMap(n, i);
        r.getCellMatrix().forValue((o, c, d) => {
          const l = a.getValue(o, c);
          l && l.dispose(), d && d.p && this._registerRange(n, i, o, c, d.p);
        });
      });
    };
    this._univerInstanceService.getAllUnitsForType(I.UNIVER_SHEET).forEach((t) => {
      e(t);
    }), this.disposeWithMe(
      this._univerInstanceService.unitAdded$.subscribe((t) => {
        t.type === I.UNIVER_SHEET && e(t);
      })
    );
  }
  _initWorkbookUnload() {
    this.disposeWithMe(
      this._univerInstanceService.unitDisposed$.subscribe((e) => {
        if (e.type === I.UNIVER_SHEET) {
          const t = e, n = t.getUnitId();
          t.getSheets().forEach((r) => {
            const i = r.getSheetId();
            this._enusreMap(n, i).forValue((o, c, d) => {
              d && d.dispose();
            });
          }), this._refRangeMap.delete(n);
        }
      })
    );
  }
  _initSetRangesListener() {
    this.disposeWithMe(
      this._commandService.onCommandExecuted((e) => {
        if (e.id === V.id) {
          const t = e.params, { unitId: n, subUnitId: r, cellValue: i } = t, a = this._enusreMap(n, r);
          i && new Z(i).forValue((o, c, d) => {
            const l = a.getValue(o, c);
            l && l.dispose(), d && d.p && this._registerRange(n, r, o, c, d.p);
          });
        }
      })
    ), this.disposeWithMe(
      this._commandService.onCommandExecuted((e) => {
        if (e.id === Q.id) {
          const t = e.params, { unitId: n, subUnitId: r, row: i, col: a } = t, o = j(this._univerInstanceService, { unitId: n, subUnitId: r }), d = this._enusreMap(n, r).getValue(i, a);
          if (d && d.dispose(), o) {
            const { worksheet: l } = o, u = l.getCellRaw(i, a);
            u && u.p && this._registerRange(n, r, i, a, u.p);
          }
        }
      })
    );
  }
};
se = Dt([
  fe(0, b),
  fe(1, k),
  fe(2, M(Oe))
], se);
var Nt = Object.getOwnPropertyDescriptor, Ot = (s, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? Nt(e, t) : e, i = s.length - 1, a; i >= 0; i--)
    (a = s[i]) && (r = a(r) || r);
  return r;
}, q = (s, e) => (t, n) => e(t, n, s);
let ie = class extends T {
  constructor(s, e, t, n) {
    super(), this._sheetInterceptorService = s, this._hyperLinkModel = e, this._selectionManagerService = t, this._univerInstanceService = n, this._initCommandInterceptor(), this._initAfterEditor();
  }
  _initCommandInterceptor() {
    this._initSetRangeValuesCommandInterceptor(), this._initClearSelectionCommandInterceptor();
  }
  _initSetRangeValuesCommandInterceptor() {
    this.disposeWithMe(this._sheetInterceptorService.interceptCommand({
      getMutations: (s) => {
        if (s.id === dt.id) {
          const e = s.params, { unitId: t, subUnitId: n } = e, r = [], i = [];
          return e.cellValue && new Z(e.cellValue).forValue((a, o) => {
            const c = this._hyperLinkModel.getHyperLinkByLocation(t, n, a, o);
            c && (r.push({
              id: N.id,
              params: {
                unitId: t,
                subUnitId: n,
                id: c.id
              }
            }), i.push({
              id: D.id,
              params: {
                unitId: t,
                subUnitId: n,
                link: c
              }
            }));
          }), {
            undos: i,
            redos: r
          };
        }
        return {
          redos: [],
          undos: []
        };
      }
    }));
  }
  _initClearSelectionCommandInterceptor() {
    this.disposeWithMe(this._sheetInterceptorService.interceptCommand({
      getMutations: (s) => {
        if (s.id === ct.id || s.id === lt.id || s.id === ut.id) {
          const e = [], t = [], n = this._selectionManagerService.getCurrentLastSelection(), r = j(this._univerInstanceService);
          if (n && r) {
            const { unitId: i, subUnitId: a } = r;
            Ke.foreach(n.range, (o, c) => {
              const d = this._hyperLinkModel.getHyperLinkByLocation(i, a, o, c);
              d && (e.push({
                id: N.id,
                params: {
                  unitId: i,
                  subUnitId: a,
                  id: d.id
                }
              }), t.push({
                id: D.id,
                params: {
                  unitId: i,
                  subUnitId: a,
                  link: d
                }
              }));
            });
          }
          return {
            redos: e,
            undos: t
          };
        }
        return {
          redos: [],
          undos: []
        };
      }
    }));
  }
  _initAfterEditor() {
    this.disposeWithMe(this._sheetInterceptorService.writeCellInterceptor.intercept(pt, {
      handler: (s, e, t) => {
        if (!s || s.p)
          return t(s);
        if (typeof s.v == "string" && Y.isLegalUrl(s.v) && s.v[s.v.length - 1] !== " ") {
          const { unitId: n, subUnitId: r, row: i, col: a } = e, o = Y.normalizeUrl(s.v), c = this._univerInstanceService.getUnit(n, I.UNIVER_SHEET), d = c == null ? void 0 : c.getSheetBySheetId(r);
          if (!d)
            return t(s);
          const l = d.getBlankCellDocumentModel(s, i, a);
          if (!l.documentModel)
            return t(s);
          const u = ee.selection.replace({
            selection: {
              startOffset: 0,
              endOffset: s.v.length,
              collapsed: !1
            },
            body: {
              dataStream: `${s.v}`,
              customRanges: [{
                startIndex: 0,
                endIndex: s.v.length - 1,
                rangeId: le(),
                rangeType: U.HYPERLINK,
                properties: {
                  url: o
                }
              }]
            },
            doc: l.documentModel
          });
          if (!u)
            return t(s);
          const h = l.documentModel.getBody();
          return ce.apply(h, u.serialize()), t({
            ...s,
            p: {
              id: Ye,
              body: h,
              documentStyle: {
                pageSize: {
                  width: 1 / 0,
                  height: 1 / 0
                }
              }
            }
          });
        }
        return t(s);
      }
    }));
  }
};
ie = Ot([
  q(0, M(ue)),
  q(1, M(R)),
  q(2, M(He)),
  q(3, k)
], ie);
var Ht = Object.getOwnPropertyDescriptor, xt = (s, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? Ht(e, t) : e, i = s.length - 1, a; i >= 0; i--)
    (a = s[i]) && (r = a(r) || r);
  return r;
}, be = (s, e) => (t, n) => e(t, n, s);
let ae = class extends T {
  constructor(s, e) {
    super(), this._resourceManagerService = s, this._hyperLinkModel = e, this._initSnapshot();
  }
  _initSnapshot() {
    const s = (t) => {
      const n = this._hyperLinkModel.getUnit(t), r = {};
      return n ? (n.forEach((i) => {
        r[i.subUnitId] = i.links.map(({ display: a, ...o }) => o);
      }), JSON.stringify(r)) : "";
    }, e = (t) => {
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
        pluginName: xe,
        businesses: [I.UNIVER_SHEET],
        toJson: (t) => s(t),
        parseJson: (t) => e(t),
        onUnLoad: (t) => {
          this._hyperLinkModel.deleteUnit(t);
        },
        onLoad: async (t, n) => {
          Object.keys(n).forEach((r) => {
            n[r].forEach((a) => {
              this._hyperLinkModel.addHyperLink(t, r, a);
            });
          });
        }
      })
    );
  }
};
ae = xt([
  be(0, Ge),
  be(1, M(R))
], ae);
var Vt = Object.getOwnPropertyDescriptor, Tt = (s, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? Vt(e, t) : e, i = s.length - 1, a; i >= 0; i--)
    (a = s[i]) && (r = a(r) || r);
  return r;
}, $t = (s, e) => (t, n) => e(t, n, s);
let oe = class extends T {
  constructor(s) {
    super(), this._commandService = s, this._registerCommands();
  }
  _registerCommands() {
    [
      St,
      Ct,
      It,
      wt,
      Mt,
      Rt,
      D,
      _e,
      N,
      ye,
      Q
    ].forEach((s) => {
      this._commandService.registerCommand(s);
    });
  }
};
oe = Tt([
  $t(0, b)
], oe);
var E = /* @__PURE__ */ ((s) => (s.SHEET = "gid", s.RANGE = "range", s.DEFINE_NAME = "rangeid", s.INVALID = "invalid", s.URL = "url", s))(E || {}), At = Object.getOwnPropertyDescriptor, Wt = (s, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? At(e, t) : e, i = s.length - 1, a; i >= 0; i--)
    (a = s[i]) && (r = a(r) || r);
  return r;
}, me = (s, e) => (t, n) => e(t, n, s);
let ve = class {
  constructor(s, e, t) {
    this._univerInstanceService = s, this._localeService = e, this._definedNamesService = t;
  }
  buildHyperLink(s, e, t) {
    return `#${E.SHEET}=${e}${t ? `&${typeof t == "string" ? E.DEFINE_NAME : E.RANGE}=${typeof t == "string" ? t : B(t)}` : ""}`;
  }
  parseHyperLink(s) {
    var e, t, n, r;
    if (s.startsWith("#")) {
      const i = new URLSearchParams(s.slice(1)), a = {
        gid: (e = i.get("gid")) != null ? e : "",
        range: (t = i.get("range")) != null ? t : "",
        rangeid: (n = i.get("rangeid")) != null ? n : "",
        unitid: (r = i.get("unitid")) != null ? r : ""
      }, o = this._getURLName(a);
      return {
        type: o.type,
        name: o.name,
        url: s,
        searchObj: a
      };
    } else
      return {
        type: E.URL,
        name: s,
        url: s,
        searchObj: null
      };
  }
  _getURLName(s) {
    var d;
    const { gid: e, range: t, rangeid: n, unitid: r } = s, i = r ? this._univerInstanceService.getUnit(r, I.UNIVER_SHEET) : this._univerInstanceService.getCurrentUnitForType(I.UNIVER_SHEET), a = {
      type: E.INVALID,
      name: this._localeService.t("hyperLink.message.refError")
    };
    if (!i)
      return a;
    const o = e ? i.getSheetBySheetId(e) : i.getActiveSheet(), c = (d = o == null ? void 0 : o.getName()) != null ? d : "";
    if (t) {
      if (!o) return a;
      const l = Ce(t).range;
      return Ie(l, o) && t !== te ? {
        type: E.RANGE,
        name: mt(c, l)
      } : a;
    }
    if (n) {
      const l = this._definedNamesService.getValueById(i.getUnitId(), n);
      return l ? {
        type: E.DEFINE_NAME,
        name: l.formulaOrRefString
      } : a;
    }
    if (e) {
      const l = i.getSheetBySheetId(e);
      return l ? {
        type: E.SHEET,
        name: l.getName()
      } : a;
    }
    return a;
  }
};
ve = Wt([
  me(0, k),
  me(1, M(ze)),
  me(2, ft)
], ve);
var Bt = Object.defineProperty, jt = Object.getOwnPropertyDescriptor, Ft = (s, e, t) => e in s ? Bt(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Kt = (s, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? jt(e, t) : e, i = s.length - 1, a; i >= 0; i--)
    (a = s[i]) && (r = a(r) || r);
  return r;
}, Pe = (s, e) => (t, n) => e(t, n, s), Ve = (s, e, t) => Ft(s, typeof e != "symbol" ? e + "" : e, t);
let de = class extends Qe {
  constructor(s = Ue, e, t) {
    super(), this._config = s, this._injector = e, this._configService = t;
    const { ...n } = Ze(
      {},
      Ue,
      this._config
    );
    this._configService.setConfig(kt, n);
  }
  onStarting() {
    et(this._injector, [
      [R],
      [ve],
      [ae],
      [oe],
      [ne],
      [ie],
      [re],
      [se]
    ]), tt(this._injector, [
      [ne],
      [ae],
      [oe],
      [ie],
      [re],
      [se]
    ]);
  }
};
Ve(de, "pluginName", xe);
Ve(de, "type", I.UNIVER_SHEET);
de = Kt([
  Je(ht),
  Pe(1, M(Xe)),
  Pe(2, qe)
], de);
export {
  St as AddHyperLinkCommand,
  D as AddHyperLinkMutation,
  Rt as AddRichHyperLinkCommand,
  It as CancelHyperLinkCommand,
  Mt as CancelRichHyperLinkCommand,
  te as ERROR_RANGE,
  R as HyperLinkModel,
  N as RemoveHyperLinkMutation,
  E as SheetHyperLinkType,
  ve as SheetsHyperLinkParserService,
  de as UniverSheetsHyperLinkPlugin,
  Ct as UpdateHyperLinkCommand,
  _e as UpdateHyperLinkMutation,
  ye as UpdateHyperLinkRefMutation,
  wt as UpdateRichHyperLinkCommand
};
