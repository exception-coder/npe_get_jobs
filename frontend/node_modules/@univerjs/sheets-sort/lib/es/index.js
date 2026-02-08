var H = Object.defineProperty;
var q = (e, t, r) => t in e ? H(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var F = (e, t, r) => q(e, typeof t != "symbol" ? t + "" : t, r);
import { IUniverInstanceService as O, ICommandService as R, Inject as w, Disposable as P, Rectangle as p, CommandType as K, sequenceExecute as W, CellValueType as h, UniverInstanceType as Y, DependentOn as z, Injector as J, IConfigService as Q, Plugin as X, merge as Z } from "@univerjs/core";
import { getSheetCommandTarget as U, ReorderRangeCommand as k, UniverSheetsPlugin as ee } from "@univerjs/sheets";
import { FormulaDataModel as te, UniverFormulaEnginePlugin as re } from "@univerjs/engine-formula";
var m = /* @__PURE__ */ ((e) => (e.DESC = "desc", e.ASC = "asc", e))(m || {});
const N = (e) => e.replace(/-/gi, "").replace(/'/gi, ""), ne = (e, t) => {
  const r = e === null || e === "", n = t === null || t === "";
  return r && n ? 0 : r ? 1 : n ? -1 : null;
}, oe = (e, t, r) => {
  const n = typeof e == "number", o = typeof t == "number";
  return n && o ? e < t ? r === m.ASC ? -1 : 1 : e > t ? r === m.ASC ? 1 : -1 : 0 : n ? r === m.ASC ? 1 : -1 : o ? r === m.ASC ? -1 : 1 : null;
}, se = (e, t, r) => {
  const n = typeof e == "string", o = typeof t == "string";
  if (n && (e = N(e.toLocaleLowerCase())), o && (t = N(t.toLocaleLowerCase())), !n && !o)
    return null;
  if (n && o) {
    const s = e, i = t;
    return s < i ? r === m.ASC ? -1 : 1 : s > i ? r === m.ASC ? 1 : -1 : 0;
  }
  return n ? r === m.ASC ? 1 : -1 : o ? r === m.ASC ? -1 : 1 : null;
}, T = (e) => !e || Object.keys(e).length === 0 || (e == null ? void 0 : e.v) == null && (e == null ? void 0 : e.p) == null;
var ie = Object.getOwnPropertyDescriptor, ue = (e, t, r, n) => {
  for (var o = n > 1 ? void 0 : n ? ie(t, r) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = i(o) || o);
  return o;
}, S = (e, t) => (r, n) => t(r, n, e);
let g = class extends P {
  constructor(t, r, n) {
    super();
    F(this, "_compareFns", []);
    this._univerInstanceService = t, this._commandService = r, this._formulaDataModel = n;
  }
  mergeCheck(t) {
    var l;
    const { unitId: r, subUnitId: n, range: o } = t, s = (l = this._univerInstanceService.getUnit(r)) == null ? void 0 : l.getSheetBySheetId(n);
    if (!s)
      return !1;
    const i = s.getMergeData().filter((u) => p.contains(o, u));
    return i.length === 0 ? !0 : le(o, i);
  }
  emptyCheck(t) {
    var i;
    const { unitId: r, subUnitId: n, range: o } = t, s = (i = this._univerInstanceService.getUnit(r)) == null ? void 0 : i.getSheetBySheetId(n);
    if (!s)
      return !1;
    for (let l = o.startRow; l <= o.endRow; l++)
      for (let u = o.startColumn; u <= o.endColumn; u++)
        if (!T(s.getCellRaw(l, u)))
          return !0;
    return !1;
  }
  singleCheck(t) {
    return t.range.startRow !== t.range.endRow;
  }
  formulaCheck(t) {
    var i, l;
    const { unitId: r, subUnitId: n, range: o } = t, s = (l = (i = this._formulaDataModel.getArrayFormulaRange()) == null ? void 0 : i[r]) == null ? void 0 : l[n];
    for (const u in s) {
      const a = s[Number(u)];
      for (const f in a) {
        const d = a[Number(f)];
        if (d && p.intersects(o, d))
          return !1;
      }
    }
    return !0;
  }
  registerCompareFn(t) {
    this._compareFns.unshift(t);
  }
  getAllCompareFns() {
    return this._compareFns;
  }
  applySort(t, r, n) {
    var i;
    const { unitId: o, subUnitId: s } = U(this._univerInstanceService) || {};
    this._commandService.executeCommand(M.id, {
      orderRules: t.orderRules,
      range: t.range,
      hasTitle: (i = t.hasTitle) != null ? i : !1,
      unitId: r || o,
      subUnitId: n || s
    });
  }
};
g = ue([
  S(0, O),
  S(1, R),
  S(2, w(te))
], g);
function le(e, t) {
  const r = e.endRow - e.startRow + 1, n = e.endColumn - e.startColumn + 1;
  let o = null, s = null;
  const i = r * n;
  let l = 0;
  for (const u of t)
    if (u.startRow >= e.startRow && u.endRow <= e.endRow && u.startColumn >= e.startColumn && u.endColumn <= e.endColumn) {
      const a = u.endRow - u.startRow + 1, f = u.endColumn - u.startColumn + 1;
      if (o === null && s === null)
        o = a, s = f;
      else if (a !== o || f !== s)
        return !1;
      l += a * f;
    }
  return l === i;
}
const M = {
  id: "sheet.command.sort-range",
  type: K.COMMAND,
  handler: (e, t) => {
    const { range: r, orderRules: n, hasTitle: o, unitId: s, subUnitId: i } = t, l = e.get(g), u = e.get(O), { worksheet: a } = U(u, t) || {};
    if (!a)
      return !1;
    const f = a.getMergeData().filter((c) => p.contains(r, c)), d = f.map((c) => c.startRow), { startRow: I, endRow: $ } = r, j = o ? I + 1 : I, _ = [], b = [];
    for (let c = j; c <= $; c++)
      a.getRowFiltered(c) || a.getRowRawVisible(c) !== !1 && (f.length && !d.includes(c) || (_.push({
        index: c,
        value: ce(a, c, n)
      }), b.push(c)));
    const V = l.getAllCompareFns();
    _.sort(me(n, ae(V)));
    const A = {};
    _.forEach(({ index: c, value: Re }, B) => {
      A[b[B]] = c;
    });
    const L = {
      id: k.id,
      params: {
        unitId: s,
        subUnitId: i,
        range: r,
        order: A
      }
    }, G = e.get(R);
    return W([L], G).result;
  }
};
function ce(e, t, r) {
  const n = [];
  return r.forEach(({ colIndex: o }) => {
    n.push(e.getCellRaw(t, o));
  }), n;
}
function ae(e) {
  return (t, r, n) => {
    for (let o = 0; o < e.length; o++) {
      const s = e[o](t, r, n);
      if (s != null)
        return s;
    }
    return 0;
  };
}
function me(e, t) {
  return function(r, n) {
    let o = null;
    for (let s = 0; s < e.length; s++) {
      const i = r.value[s], l = n.value[s];
      if (o = t(e[s].type, i, l), o !== 0 && o !== null && o !== void 0)
        return o;
    }
    return 0;
  };
}
const fe = "sheets-sort.config", D = {};
var ge = Object.getOwnPropertyDescriptor, de = (e, t, r, n) => {
  for (var o = n > 1 ? void 0 : n ? ge(t, r) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = i(o) || o);
  return o;
}, E = (e, t) => (r, n) => t(r, n, e);
let v = class extends P {
  constructor(e, t) {
    super(), this._commandService = e, this._sortService = t, this._initCommands(), this._registerCompareFns();
  }
  _initCommands() {
    [
      M
    ].forEach((e) => this.disposeWithMe(this._commandService.registerCommand(e)));
  }
  _registerCompareFns() {
    const e = (t, r, n) => {
      const o = this._getCommonValue(r), s = this._getCommonValue(n), i = [
        ne,
        se,
        oe
      ];
      for (let l = 0; l < i.length; l++) {
        const u = i[l](o, s, t);
        if (u !== null)
          return u;
      }
      return null;
    };
    this._sortService.registerCompareFn(e);
  }
  _getCommonValue(e) {
    var r, n;
    if (T(e))
      return null;
    const t = (n = (r = e == null ? void 0 : e.p) == null ? void 0 : r.body) == null ? void 0 : n.dataStream;
    return t || ((e == null ? void 0 : e.t) === h.NUMBER ? Number.parseFloat(`${e.v}`) : (e == null ? void 0 : e.t) === h.STRING ? typeof e.v == "number" ? e.v : `${e.v}` : (e == null ? void 0 : e.t) === h.BOOLEAN ? `${e.v}` : (e == null ? void 0 : e.t) === h.FORCE_STRING ? Number.parseFloat(`${e.v}`) : `${e == null ? void 0 : e.v}`);
  }
};
v = de([
  E(0, R),
  E(1, w(g))
], v);
var he = Object.defineProperty, ve = Object.getOwnPropertyDescriptor, Ce = (e, t, r) => t in e ? he(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, _e = (e, t, r, n) => {
  for (var o = n > 1 ? void 0 : n ? ve(t, r) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = i(o) || o);
  return o;
}, y = (e, t) => (r, n) => t(r, n, e), x = (e, t, r) => Ce(e, typeof t != "symbol" ? t + "" : t, r);
const Se = "SHEET_SORT_PLUGIN";
let C = class extends X {
  constructor(e = D, t, r) {
    super(), this._config = e, this._injector = t, this._configService = r;
    const { ...n } = Z(
      {},
      D,
      this._config
    );
    this._configService.setConfig(fe, n);
  }
  onStarting() {
    [
      [v],
      [g]
    ].forEach((e) => this._injector.add(e));
  }
  onReady() {
    this._injector.get(v);
  }
};
x(C, "type", Y.UNIVER_SHEET);
x(C, "pluginName", Se);
C = _e([
  z(ee, re),
  y(1, w(J)),
  y(2, Q)
], C);
export {
  g as SheetsSortService,
  M as SortRangeCommand,
  m as SortType,
  C as UniverSheetsSortPlugin
};
