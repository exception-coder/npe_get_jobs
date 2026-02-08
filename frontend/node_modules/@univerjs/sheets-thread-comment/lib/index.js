var A = Object.defineProperty;
var W = (a, e, r) => e in a ? A(a, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[e] = r;
var _ = (a, e, r) => W(a, typeof e != "symbol" ? e + "" : e, r);
import { Inject as h, IUniverInstanceService as $, Disposable as y, ObjectMatrix as j, UniverInstanceType as g, ICommandService as O, sequenceExecuteAsync as L, toDisposable as N, generateRandomId as b, DependentOn as V, Injector as B, Plugin as H, touchDependencies as F } from "@univerjs/core";
import { singleReferenceToGrid as p, serializeRange as T } from "@univerjs/engine-formula";
import { RefRangeService as k, SheetsSelectionsService as z, handleCommonRangeChangeWithEffectRefCommandsSkipNoInterests as G, SheetInterceptorService as q, RemoveSheetCommand as J, CopySheetCommand as K } from "@univerjs/sheets";
import { ThreadCommentModel as R, AddCommentMutation as w, DeleteCommentMutation as I, UpdateCommentRefMutation as E, IThreadCommentDataSourceService as Q, UniverThreadCommentPlugin as X } from "@univerjs/thread-comment";
import { Subject as Y } from "rxjs";
var Z = Object.getOwnPropertyDescriptor, ee = (a, e, r, t) => {
  for (var n = t > 1 ? void 0 : t ? Z(e, r) : e, s = a.length - 1, o; s >= 0; s--)
    (o = a[s]) && (n = o(n) || n);
  return n;
}, x = (a, e) => (r, t) => e(r, t, a);
let C = class extends y {
  constructor(e, r) {
    super();
    _(this, "_matrixMap", /* @__PURE__ */ new Map());
    _(this, "_locationMap", /* @__PURE__ */ new Map());
    _(this, "_commentUpdate$", new Y());
    _(this, "commentUpdate$", this._commentUpdate$.asObservable());
    this._threadCommentModel = e, this._univerInstanceService = r, this._init(), this.disposeWithMe(() => {
      this._commentUpdate$.complete();
    });
  }
  _init() {
    this._initData(), this._initUpdateTransform();
  }
  _ensureCommentMatrix(e, r) {
    let t = this._matrixMap.get(e);
    t || (t = /* @__PURE__ */ new Map(), this._matrixMap.set(e, t));
    let n = t.get(r);
    return n || (n = new j(), t.set(r, n)), n;
  }
  _ensureCommentLocationMap(e, r) {
    let t = this._locationMap.get(e);
    t || (t = /* @__PURE__ */ new Map(), this._locationMap.set(e, t));
    let n = t.get(r);
    return n || (n = /* @__PURE__ */ new Map(), t.set(r, n)), n;
  }
  _addCommentToMatrix(e, r, t, n) {
    var o;
    const s = (o = e.getValue(r, t)) != null ? o : /* @__PURE__ */ new Set();
    s.add(n), e.setValue(r, t, s);
  }
  _deleteCommentFromMatrix(e, r, t, n) {
    if (r >= 0 && t >= 0) {
      const s = e.getValue(r, t);
      s && s.has(n) && (s.delete(n), s.size === 0 && e.realDeleteValue(r, t));
    }
  }
  _ensure(e, r) {
    const t = this._ensureCommentMatrix(e, r), n = this._ensureCommentLocationMap(e, r);
    return { matrix: t, locationMap: n };
  }
  _initData() {
    const e = this._threadCommentModel.getAll();
    for (const r of e)
      for (const t of r.threads) {
        const { unitId: n, subUnitId: s, root: o } = t;
        this._addComment(n, s, o);
      }
  }
  _addComment(e, r, t) {
    const n = p(t.ref), s = t.parentId, { row: o, column: i } = n, c = t.id, { matrix: m, locationMap: d } = this._ensure(e, r);
    !s && o >= 0 && i >= 0 && (this._addCommentToMatrix(m, o, i, c), d.set(c, { row: o, column: i })), s || this._commentUpdate$.next({
      unitId: e,
      subUnitId: r,
      payload: t,
      type: "add",
      isRoot: !s,
      ...n
    });
  }
  // eslint-disable-next-line max-lines-per-function
  _initUpdateTransform() {
    this.disposeWithMe(this._threadCommentModel.commentUpdate$.subscribe((e) => {
      const { unitId: r, subUnitId: t } = e;
      try {
        if (this._univerInstanceService.getUnitType(r) !== g.UNIVER_SHEET)
          return;
      } catch {
      }
      const { matrix: n, locationMap: s } = this._ensure(r, t);
      switch (e.type) {
        case "add": {
          this._addComment(e.unitId, e.subUnitId, e.payload);
          break;
        }
        case "delete": {
          const { isRoot: o, comment: i } = e.payload;
          if (o) {
            const c = p(i.ref), { row: m, column: d } = c;
            this._deleteCommentFromMatrix(n, m, d, i.id), this._commentUpdate$.next({
              ...e,
              ...c
            });
          }
          break;
        }
        case "update": {
          const { commentId: o } = e.payload, i = this._threadCommentModel.getComment(r, t, o);
          if (!i)
            return;
          const c = p(i.ref);
          this._commentUpdate$.next({
            ...e,
            ...c
          });
          break;
        }
        case "updateRef": {
          const o = p(e.payload.ref), { commentId: i } = e.payload, c = s.get(i);
          if (!c)
            return;
          const { row: m, column: d } = c;
          this._deleteCommentFromMatrix(n, m, d, i), s.delete(i), o.row >= 0 && o.column >= 0 && (this._addCommentToMatrix(n, o.row, o.column, i), s.set(i, { row: o.row, column: o.column })), this._commentUpdate$.next({
            ...e,
            ...o
          });
          break;
        }
        case "resolve": {
          const { unitId: o, subUnitId: i, payload: c } = e, { locationMap: m } = this._ensure(o, i), d = m.get(c.commentId);
          d && this._commentUpdate$.next({
            ...e,
            ...d
          });
          break;
        }
      }
    }));
  }
  getByLocation(e, r, t, n) {
    var i;
    return (i = this.getAllByLocation(e, r, t, n).filter((c) => !c.resolved)[0]) == null ? void 0 : i.id;
  }
  getAllByLocation(e, r, t, n) {
    const o = this._ensureCommentMatrix(e, r).getValue(t, n);
    return o ? Array.from(o).map((i) => this.getComment(e, r, i)).filter(Boolean) : [];
  }
  getComment(e, r, t) {
    return this._threadCommentModel.getComment(e, r, t);
  }
  getCommentWithChildren(e, r, t, n) {
    const s = this.getByLocation(e, r, t, n);
    if (!s)
      return;
    const o = this.getComment(e, r, s);
    if (o)
      return this._threadCommentModel.getThread(e, r, o.threadId);
  }
  showCommentMarker(e, r, t, n) {
    const s = this.getByLocation(e, r, t, n);
    if (!s)
      return !1;
    const o = this.getComment(e, r, s);
    return !!(o && !o.resolved);
  }
  getSubUnitAll(e, r) {
    return this._threadCommentModel.getUnit(e).filter((t) => t.subUnitId === r).map((t) => t.root);
  }
};
C = ee([
  x(0, h(R)),
  x(1, $)
], C);
var te = Object.getOwnPropertyDescriptor, re = (a, e, r, t) => {
  for (var n = t > 1 ? void 0 : t ? te(e, r) : e, s = a.length - 1, o; s >= 0; s--)
    (o = a[s]) && (n = o(n) || n);
  return n;
}, u = (a, e) => (r, t) => e(r, t, a);
let M = class extends y {
  constructor(e, r, t, n, s) {
    super();
    _(this, "_disposableMap", /* @__PURE__ */ new Map());
    _(this, "_watcherMap", /* @__PURE__ */ new Map());
    _(this, "_handleRangeChange", (e, r, t, n, s) => {
      const o = t.id, i = {
        startColumn: t.column,
        endColumn: t.column,
        startRow: t.row,
        endRow: t.row
      };
      return n ? {
        redos: [{
          id: E.id,
          params: {
            unitId: e,
            subUnitId: r,
            payload: {
              ref: T(n),
              commentId: o
            },
            silent: s
          }
        }],
        undos: [{
          id: E.id,
          params: {
            unitId: e,
            subUnitId: r,
            payload: {
              ref: T(i),
              commentId: o
            },
            silent: s
          }
        }]
      } : {
        redos: [{
          id: I.id,
          params: {
            unitId: e,
            subUnitId: r,
            commentId: o
          }
        }],
        undos: [{
          id: w.id,
          params: {
            unitId: e,
            subUnitId: r,
            comment: t,
            sync: !0
          }
        }]
      };
    });
    this._refRangeService = e, this._sheetsThreadCommentModel = r, this._threadCommentModel = t, this._selectionManagerService = n, this._commandService = s, this._initData(), this._initRefRange();
  }
  _getIdWithUnitId(e, r, t) {
    return `${e}-${r}-${t}`;
  }
  _register(e, r, t) {
    const n = t.id, s = {
      startColumn: t.column,
      endColumn: t.column,
      startRow: t.row,
      endRow: t.row
    };
    this._disposableMap.set(
      this._getIdWithUnitId(e, r, n),
      this._refRangeService.registerRefRange(s, (o) => {
        const i = G(s, o, { selectionManagerService: this._selectionManagerService }), c = Array.isArray(i) ? i[0] : i;
        return c && c.startColumn === s.startColumn && c.startRow === s.startRow ? {
          undos: [],
          redos: []
        } : this._handleRangeChange(e, r, t, c, !1);
      }, e, r)
    );
  }
  _watch(e, r, t) {
    const n = t.id, s = {
      startColumn: t.column,
      endColumn: t.column,
      startRow: t.row,
      endRow: t.row
    };
    this._watcherMap.set(
      this._getIdWithUnitId(e, r, n),
      this._refRangeService.watchRange(e, r, s, (o, i) => {
        const { redos: c } = this._handleRangeChange(e, r, t, i, !0);
        L(c, this._commandService, { onlyLocal: !0 });
      }, !0)
    );
  }
  _unwatch(e, r, t) {
    var s;
    const n = this._getIdWithUnitId(e, r, t);
    (s = this._watcherMap.get(n)) == null || s.dispose(), this._watcherMap.delete(n);
  }
  _unregister(e, r, t) {
    var s;
    const n = this._getIdWithUnitId(e, r, t);
    (s = this._disposableMap.get(n)) == null || s.dispose(), this._disposableMap.delete(n);
  }
  _initData() {
    const e = this._threadCommentModel.getAll();
    for (const r of e)
      for (const t of r.threads) {
        const { unitId: n, subUnitId: s, root: o } = t, i = p(o.ref), c = {
          ...o,
          ...i
        };
        this._register(n, s, c), this._watch(n, s, c);
      }
  }
  _initRefRange() {
    this.disposeWithMe(
      this._sheetsThreadCommentModel.commentUpdate$.subscribe((e) => {
        const { unitId: r, subUnitId: t } = e;
        switch (e.type) {
          case "add": {
            if (e.payload.parentId)
              return;
            const n = {
              ...e.payload,
              row: e.row,
              column: e.column
            };
            this._register(e.unitId, e.subUnitId, n), this._watch(e.unitId, e.subUnitId, n);
            break;
          }
          case "delete": {
            this._unregister(r, t, e.payload.commentId), this._unwatch(r, t, e.payload.commentId);
            break;
          }
          case "updateRef": {
            const n = this._sheetsThreadCommentModel.getComment(r, t, e.payload.commentId);
            if (!n)
              return;
            this._unregister(r, t, e.payload.commentId);
            const s = {
              ...n,
              row: e.row,
              column: e.column
            };
            e.silent || (this._unwatch(r, t, e.payload.commentId), this._watch(r, t, s)), this._register(e.unitId, e.subUnitId, s);
            break;
          }
        }
      })
    ), this.disposeWithMe(N(() => {
      this._disposableMap.forEach((e) => {
        e.dispose();
      }), this._disposableMap.clear();
    }));
  }
};
M = re([
  u(0, h(k)),
  u(1, h(C)),
  u(2, h(R)),
  u(3, h(z)),
  u(4, O)
], M);
const ne = {};
var se = Object.getOwnPropertyDescriptor, oe = (a, e, r, t) => {
  for (var n = t > 1 ? void 0 : t ? se(e, r) : e, s = a.length - 1, o; s >= 0; s--)
    (o = a[s]) && (n = o(n) || n);
  return n;
}, f = (a, e) => (r, t) => e(r, t, a);
let v = class extends y {
  constructor(a, e, r, t) {
    super(), this._univerInstanceService = a, this._sheetInterceptorService = e, this._threadCommentModel = r, this._threadCommentDataSourceService = t, this._initSheetChange();
  }
  // eslint-disable-next-line max-lines-per-function
  _initSheetChange() {
    this.disposeWithMe(
      this._sheetInterceptorService.interceptCommand({
        // eslint-disable-next-line max-lines-per-function
        getMutations: (a) => {
          var e;
          if (a.id === J.id) {
            const r = a.params, t = r.unitId || this._univerInstanceService.getCurrentUnitOfType(g.UNIVER_SHEET).getUnitId(), n = r.subUnitId || ((e = this._univerInstanceService.getCurrentUnitOfType(g.UNIVER_SHEET).getActiveSheet()) == null ? void 0 : e.getSheetId());
            if (!t || !n)
              return { redos: [], undos: [] };
            const s = this._threadCommentModel.ensureMap(t, n), o = Array.from(s.values()).filter((d) => !d.parentId), i = this._threadCommentDataSourceService.syncUpdateMutationToColla, c = [], m = [];
            return o.forEach(({ children: d, ...l }) => {
              c.push({
                id: I.id,
                params: {
                  unitId: t,
                  subUnitId: n,
                  commentId: l.id
                }
              }), m.push({
                id: w.id,
                params: {
                  unitId: t,
                  subUnitId: n,
                  comment: {
                    ...l,
                    children: i ? d : void 0
                  },
                  sync: !i
                }
              });
            }), { redos: c, undos: m };
          } else if (a.id === K.id) {
            const r = a.params, { unitId: t, subUnitId: n, targetSubUnitId: s } = r;
            if (!t || !n || !s)
              return { redos: [], undos: [] };
            const o = this._threadCommentModel.ensureMap(t, n), i = Array.from(o.values()).map((l) => ({
              ...l,
              subUnitId: s,
              id: b(),
              threadId: b()
            })).filter((l) => !l.parentId), c = this._threadCommentDataSourceService.syncUpdateMutationToColla, m = [], d = [];
            return i.forEach(({ children: l, ...U }) => {
              m.push({
                id: w.id,
                params: {
                  unitId: t,
                  subUnitId: s,
                  comment: {
                    ...U,
                    children: c ? l : void 0
                  },
                  sync: !c
                }
              }), d.push({
                id: I.id,
                params: {
                  unitId: t,
                  subUnitId: s,
                  commentId: U.id
                }
              });
            }), { redos: m, undos: d };
          }
          return { redos: [], undos: [] };
        }
      })
    );
  }
};
v = oe([
  f(0, $),
  f(1, h(q)),
  f(2, h(R)),
  f(3, Q)
], v);
const ae = "SHEET_THREAD_COMMENT_BASE_PLUGIN";
var ie = Object.defineProperty, ce = Object.getOwnPropertyDescriptor, de = (a, e, r) => e in a ? ie(a, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[e] = r, me = (a, e, r, t) => {
  for (var n = t > 1 ? void 0 : t ? ce(e, r) : e, s = a.length - 1, o; s >= 0; s--)
    (o = a[s]) && (n = o(n) || n);
  return n;
}, D = (a, e) => (r, t) => e(r, t, a), P = (a, e, r) => de(a, typeof e != "symbol" ? e + "" : e, r);
let S = class extends H {
  constructor(a = ne, e, r) {
    super(), this._config = a, this._injector = e, this._commandService = r;
  }
  onStarting() {
    [
      [C],
      [M],
      [v]
    ].forEach((a) => {
      this._injector.add(a);
    }), F(this._injector, [
      [M],
      [v]
    ]);
  }
};
P(S, "pluginName", ae);
P(S, "type", g.UNIVER_SHEET);
S = me([
  V(X),
  D(1, h(B)),
  D(2, h(O))
], S);
export {
  C as SheetsThreadCommentModel,
  M as SheetsThreadCommentRefRangeController,
  S as UniverSheetsThreadCommentPlugin
};
