var X2 = Object.defineProperty;
var K2 = (s, r, t) => r in s ? X2(s, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[r] = t;
var m = (s, r, t) => K2(s, typeof r != "symbol" ? r + "" : r, t);
import { generateRandomId as U2, Tools as J, CommandType as T, IUndoRedoService as e2, ICommandService as P, IUniverInstanceService as q, ObjectMatrix as O, Range as U, sequenceExecute as T2, Inject as x, Disposable as M2, RefAlias as Y2, CellValueType as _, BooleanNumber as V2, LRUMap as O2, ColorKit as $2, dayjs as v, Injector as y2, RTree as J2, IResourceManagerService as z2, merge as P2, UniverInstanceType as m2, isInternalEditorID as Q2, Rectangle as n2, Plugin as e0, touchDependencies as t0, IConfigService as n0 } from "@univerjs/core";
import { isRangesEqual as X1 } from "@univerjs/core";
import { getSheetCommandTarget as t2, SheetsSelectionsService as r0, findAllRectangle as s0, createTopMatrixFromMatrix as i0, SheetInterceptorService as a0, RemoveSheetCommand as o0, CopySheetCommand as l0, ReorderRangeMutation as c0, MoveRangeMutation as u0, MoveColsMutation as d0, MoveRowsMutation as h0, InsertRowMutation as g0, RemoveRowMutation as C0, RemoveColMutation as D0, InsertColMutation as f0, SetRangeValuesMutation as m0 } from "@univerjs/sheets";
import { Subject as g2, BehaviorSubject as w0 } from "rxjs";
import { IActiveDirtyManagerService as F0, SetFormulaCalculationResultMutation as v0, SetOtherFormulaMutation as p0, RemoveOtherFormulaMutation as E0, ERROR_TYPE_SET as S2, BooleanValue as b2 } from "@univerjs/engine-formula";
import { distinctUntilChanged as A0, bufferTime as x0, filter as _0, map as M0 } from "rxjs/operators";
import { isObject as y0, SpreadsheetExtensionRegistry as W2, SheetExtension as q2, FIX_ONE_PIXEL_BLUR_OFFSET as R0 } from "@univerjs/engine-render";
const Z2 = "SHEET_CONDITIONAL_FORMATTING_PLUGIN";
var L = /* @__PURE__ */ ((s) => (s.beginsWith = "beginsWith", s.endsWith = "endsWith", s.containsText = "containsText", s.notContainsText = "notContainsText", s.equal = "equal", s.notEqual = "notEqual", s.containsBlanks = "containsBlanks", s.notContainsBlanks = "notContainsBlanks", s.containsErrors = "containsErrors", s.notContainsErrors = "notContainsErrors", s))(L || {}), k = /* @__PURE__ */ ((s) => (s.today = "today", s.yesterday = "yesterday", s.tomorrow = "tomorrow", s.last7Days = "last7Days", s.thisMonth = "thisMonth", s.lastMonth = "lastMonth", s.nextMonth = "nextMonth", s.thisWeek = "thisWeek", s.lastWeek = "lastWeek", s.nextWeek = "nextWeek", s))(k || {}), F = /* @__PURE__ */ ((s) => (s.greaterThan = "greaterThan", s.greaterThanOrEqual = "greaterThanOrEqual", s.lessThan = "lessThan", s.lessThanOrEqual = "lessThanOrEqual", s.notBetween = "notBetween", s.between = "between", s.equal = "equal", s.notEqual = "notEqual", s))(F || {}), S = /* @__PURE__ */ ((s) => (s.highlightCell = "highlightCell", s.dataBar = "dataBar", s.colorScale = "colorScale", s.iconSet = "iconSet", s))(S || {}), A = /* @__PURE__ */ ((s) => (s.uniqueValues = "uniqueValues", s.duplicateValues = "duplicateValues", s.rank = "rank", s.text = "text", s.timePeriod = "timePeriod", s.number = "number", s.average = "average", s.formula = "formula", s))(A || {}), I = /* @__PURE__ */ ((s) => (s.num = "num", s.min = "min", s.max = "max", s.percent = "percent", s.percentile = "percentile", s.formula = "formula", s))(I || {});
const V1 = "#fff", O1 = "#000000", $1 = () => ({
  cfId: void 0,
  ranges: [],
  stopIfTrue: !1,
  rule: {
    type: "highlightCell",
    subType: "text",
    operator: "containsText"
    /* containsText */
  }
}), P1 = (s, r) => {
  switch (s) {
    case "text": {
      if ([
        "beginsWith",
        "containsText",
        "endsWith",
        "equal",
        "notContainsText",
        "notEqual"
        /* notEqual */
      ].includes(r))
        return "";
      break;
    }
    case "number":
      return [
        "between",
        "notBetween"
        /* notBetween */
      ].includes(r) ? [10, 100] : 10;
  }
  return "";
}, W1 = (s, r) => {
  switch (s) {
    case "formula":
      return "=";
    case "max":
    case "min":
      return "";
    case "percent":
    case "percentile":
    case "num":
      return r !== void 0 ? r : 10;
  }
  return "";
}, X = (s, r, t) => {
  if (!r)
    return null;
  const e = r.findIndex((n) => t(n) === s.id);
  if (e < 0)
    return null;
  switch (s.type) {
    case "after":
      return e + 1;
    case "before":
      return e - 1;
    case "self":
      return e;
  }
}, I0 = (s, r, t, e) => {
  if (!t)
    return null;
  const n = X(s, t, e);
  let i = X(r, t, e);
  if (n === null || i === null || n === i)
    return;
  const a = t.splice(n, 1)[0];
  switch (n < i && (i = X(r, t, e)), r.type) {
    case "before": {
      t.splice(i + 1, 0, a);
      break;
    }
    case "self":
    case "after": {
      t.splice(i, 0, a);
      break;
    }
  }
}, G2 = (s, r, t, e) => {
  if (s.type === "after" && ["after", "before"].includes(r.type))
    return [s, r];
  const n = { ...s }, i = { ...r };
  if (n.type !== "after") {
    const a = X(n, t, e);
    if (a === null)
      return null;
    if (a - 1 < 0) {
      const u = t[a + 1];
      if (u)
        n.id = e(u), n.type = "before";
      else
        return null;
    } else {
      const u = e(t[a - 1]);
      n.id = u, n.type = "after";
    }
  }
  if (!["after", "before"].includes(i.type)) {
    const a = X(i, t, e);
    if (a === null)
      return null;
    if (a === 0)
      i.type = "before";
    else if (a - 1 >= 0) {
      const u = e(t[a - 1]);
      i.id = u, i.type = "after";
    } else if (a + 1 <= t.length - 1) {
      const u = e(t[a + 1]);
      i.id = u, i.type = "before";
    } else
      return null;
  }
  return n.id === i.id && n.type === i.type ? null : [n, i];
}, S0 = (s, r) => {
  if (["after", "before"].includes(r.type)) {
    if (s.type === "after")
      return [r, s];
    if (s.type === "before")
      return [r, { ...s, type: "self" }];
  }
  return null;
}, q1 = (s, r) => s.id === r.id && s.type === r.type, b0 = () => `${U2(8)}`;
class M {
  constructor() {
    //  Map<unitID ,<sheetId ,IConditionFormattingRule[]>>
    m(this, "_model", /* @__PURE__ */ new Map());
    m(this, "_ruleChange$", new g2());
    m(this, "$ruleChange", this._ruleChange$.asObservable());
  }
  _ensureList(r, t) {
    let e = this.getSubunitRules(r, t);
    if (!e) {
      e = [];
      let n = this._model.get(r);
      n || (n = /* @__PURE__ */ new Map(), this._model.set(r, n)), n.set(t, e);
    }
    return e;
  }
  getRule(r, t, e) {
    const n = this.getSubunitRules(r, t);
    return n ? n.find((i) => i.cfId === e) : null;
  }
  getUnitRules(r) {
    return this._model.get(r) || null;
  }
  getSubunitRules(r, t) {
    var n;
    return ((n = this._model.get(r)) == null ? void 0 : n.get(t)) || null;
  }
  deleteRule(r, t, e) {
    const n = this.getSubunitRules(r, t);
    if (n) {
      const i = n.findIndex((u) => u.cfId === e), a = n[i];
      a && (n.splice(i, 1), this._ruleChange$.next({ rule: a, subUnitId: t, unitId: r, type: "delete" }));
    }
  }
  setRule(r, t, e, n) {
    const a = this._ensureList(r, t).find((u) => u.cfId === n);
    if (a) {
      const u = J.deepClone(a);
      Object.assign(a, e), this._ruleChange$.next({ rule: a, subUnitId: t, unitId: r, type: "set", oldRule: u });
    }
  }
  addRule(r, t, e) {
    const n = this._ensureList(r, t);
    n.find((a) => a.cfId === e.cfId) || n.unshift(e), this._ruleChange$.next({ rule: e, subUnitId: t, unitId: r, type: "add" });
  }
  /**
   * example [1,2,3,4,5,6],if you move behind 5 to 2, then cfId=5,targetId=2.
   * if targetId does not exist, it defaults to top
   */
  moveRulePriority(r, t, e, n) {
    const i = this._ensureList(r, t), a = X(e, i, (l) => l.cfId), u = X(n, i, (l) => l.cfId);
    if (u === null || a === null || u === a)
      return;
    const o = i[a];
    o && (I0(e, n, i, (l) => l.cfId), this._ruleChange$.next({ rule: o, subUnitId: t, unitId: r, type: "sort" }));
  }
  createCfId(r, t) {
    return b0();
  }
  deleteUnitId(r) {
    this._model.delete(r);
  }
}
const i2 = {
  type: T.MUTATION,
  id: "sheet.mutation.move-conditional-rule",
  handler(s, r) {
    if (!r)
      return !1;
    const { unitId: t, subUnitId: e, start: n, end: i } = r;
    return s.get(M).moveRulePriority(t, e, n, i), !0;
  }
}, L0 = (s) => {
  const { unitId: r, subUnitId: t } = s, e = S0(s.start, s.end);
  if (!e)
    return [];
  const [n, i] = e;
  return [
    { id: i2.id, params: { unitId: r, subUnitId: t, start: n, end: i } }
  ];
}, w2 = (s, r) => {
  const t = s.get(M), { unitId: e, subUnitId: n, cfId: i } = r, a = [...t.getSubunitRules(e, n) || []], u = a.findIndex((l) => l.cfId === i), o = a[u - 1];
  if (u > -1) {
    const l = a[u], d = [{
      id: a2.id,
      params: { unitId: e, subUnitId: n, rule: J.deepClone(l) }
    }];
    if (a.splice(u, 1), u !== 0) {
      const c = a[0];
      if (c) {
        const g = G2({ id: c.cfId, type: "before" }, { id: o.cfId, type: "after" }, a, (w) => w.cfId);
        if (!g)
          return d;
        const [h, D] = g, f = {
          unitId: e,
          subUnitId: n,
          start: h,
          end: D
        };
        d.push({ id: i2.id, params: f });
      }
    }
    return d;
  }
  return [];
}, K = {
  type: T.MUTATION,
  id: "sheet.mutation.delete-conditional-rule",
  handler(s, r) {
    if (!r)
      return !1;
    const { unitId: t, subUnitId: e, cfId: n } = r;
    return s.get(M).deleteRule(t, e, n), !0;
  }
}, H2 = (s, r) => ({ id: K.id, params: { unitId: r.unitId, subUnitId: r.subUnitId, cfId: r.rule.cfId } }), a2 = {
  type: T.MUTATION,
  id: "sheet.mutation.add-conditional-rule",
  handler(s, r) {
    if (!r)
      return !1;
    const { unitId: t, subUnitId: e, rule: n } = r;
    return s.get(M).addRule(t, e, n), !0;
  }
}, k0 = {
  type: T.COMMAND,
  id: "sheet.command.add-conditional-rule",
  handler(s, r) {
    if (!r)
      return !1;
    const { rule: t } = r, e = s.get(e2), n = s.get(P), i = s.get(M), a = s.get(q), u = t2(a, r);
    if (!u) return !1;
    const { unitId: o, subUnitId: l } = u, d = i.createCfId(o, l), c = { unitId: o, subUnitId: l, rule: { ...t, cfId: t.cfId || d } }, g = H2(s, c), h = n.syncExecuteCommand(a2.id, c);
    return h && e.pushUndoRedo({
      unitID: o,
      redoMutations: [{ id: a2.id, params: c }],
      undoMutations: [g]
    }), h;
  }
}, o2 = {
  type: T.MUTATION,
  id: "sheet.mutation.set-conditional-rule",
  handler(s, r) {
    if (!r)
      return !1;
    const { unitId: t, subUnitId: e, rule: n } = r, i = r.cfId || r.rule.cfId;
    return s.get(M).setRule(t, e, n, i), !0;
  }
}, j2 = (s, r) => {
  const t = s.get(M), { unitId: e, subUnitId: n } = r, i = r.cfId || r.rule.cfId, a = t.getRule(e, n, i);
  return a ? [{
    id: o2.id,
    params: {
      unitId: e,
      subUnitId: n,
      cfId: i,
      rule: J.deepClone(a)
    }
  }] : [];
}, B0 = {
  type: T.COMMAND,
  id: "sheet.command.clear-range-conditional-rule",
  handler(s, r) {
    var f;
    if (!r)
      return !1;
    const t = s.get(M), e = s.get(q), n = s.get(P), i = s.get(e2), a = s.get(r0), u = t2(e, r);
    if (!u) return !1;
    const { unitId: o, subUnitId: l } = u, d = ((f = a.getCurrentSelections()) == null ? void 0 : f.map((w) => w.range)) || [], c = t.getSubunitRules(o, l);
    if (!(c != null && c.length) || !d.length)
      return !1;
    const g = [], h = [];
    c.forEach((w) => {
      const p = new O();
      w.ranges.forEach((E) => {
        U.foreach(E, (R, b) => {
          p.setValue(R, b, 1);
        });
      }), d.forEach((E) => {
        U.foreach(E, (R, b) => {
          p.realDeleteValue(R, b);
        });
      });
      const y = s0(i0(p));
      if (y.length) {
        const E = { ...w, ranges: y }, R = { unitId: o, subUnitId: l, rule: E }, b = j2(s, R);
        g.push({ id: o2.id, params: R }), h.push(...b);
      } else {
        const E = { unitId: o, subUnitId: l, cfId: w.cfId }, R = w2(s, E);
        g.push({ id: K.id, params: E }), h.push(...R);
      }
    });
    const D = T2(g, n).result;
    return D && i.pushUndoRedo({
      unitID: o,
      redoMutations: g,
      undoMutations: h
    }), D;
  }
}, N0 = {
  type: T.COMMAND,
  id: "sheet.command.clear-worksheet-conditional-rule",
  handler(s, r) {
    const t = s.get(M), e = s.get(q), n = s.get(P), i = s.get(e2), a = t2(e, r);
    if (!a) return !1;
    const { unitId: u, subUnitId: o } = a, l = t.getSubunitRules(u, o);
    if (!(l != null && l.length))
      return !1;
    const d = l.map((D) => ({ cfId: D.cfId, unitId: u, subUnitId: o })), c = d.map((D) => ({ id: K.id, params: D })), g = d.map((D) => w2(s, D)[0]), h = T2(c, n).result;
    return h && i.pushUndoRedo({
      unitID: u,
      redoMutations: c,
      undoMutations: g
    }), h;
  }
}, U0 = {
  type: T.COMMAND,
  id: "sheet.command.delete-conditional-rule",
  handler(s, r) {
    if (!r)
      return !1;
    const t = s.get(e2), e = s.get(P), n = s.get(q), i = t2(n, r);
    if (!i) return !1;
    const { unitId: a, subUnitId: u } = i, o = { unitId: a, subUnitId: u, cfId: r.cfId }, l = w2(s, o), d = e.syncExecuteCommand(K.id, o);
    return d && t.pushUndoRedo({ unitID: a, undoMutations: l, redoMutations: [{ id: K.id, params: o }] }), d;
  }
}, T0 = {
  type: T.COMMAND,
  id: "sheet.command.move-conditional-rule",
  handler(s, r) {
    if (!r)
      return !1;
    const t = s.get(e2), e = s.get(P), n = s.get(q), i = s.get(M), a = t2(n, r);
    if (!a) return !1;
    const { unitId: u, subUnitId: o } = a, l = G2(r.start, r.end, i.getSubunitRules(u, o) || [], (f) => f.cfId);
    if (!l)
      return !1;
    const [d, c] = l, g = { unitId: u, subUnitId: o, start: d, end: c }, h = L0(g), D = e.syncExecuteCommand(i2.id, g);
    return D && t.pushUndoRedo({
      unitID: u,
      redoMutations: [{ id: i2.id, params: g }],
      undoMutations: h
    }), D;
  }
}, V0 = {
  type: T.COMMAND,
  id: "sheet.command.set-conditional-rule",
  handler(s, r) {
    if (!r)
      return !1;
    const t = s.get(e2), e = s.get(P), n = s.get(q), i = t2(n, r);
    if (!i) return !1;
    const { unitId: a, subUnitId: u } = i, o = { unitId: a, subUnitId: u, rule: r.rule, cfId: r.cfId }, l = j2(s, o), d = e.syncExecuteCommand(o2.id, o);
    return d && t.pushUndoRedo({ unitID: a, undoMutations: l, redoMutations: [{ id: o2.id, params: o }] }), d;
  }
}, h2 = {
  type: T.MUTATION,
  id: "sheet.mutation.conditional-formatting-formula-mark-dirty",
  handler() {
    return !0;
  }
};
var O0 = Object.getOwnPropertyDescriptor, $0 = (s, r, t, e) => {
  for (var n = e > 1 ? void 0 : e ? O0(r, t) : r, i = s.length - 1, a; i >= 0; i--)
    (a = s[i]) && (n = a(n) || n);
  return n;
}, E2 = (s, r) => (t, e) => r(t, e, s), N = /* @__PURE__ */ ((s) => (s[s.NOT_REGISTER = 1] = "NOT_REGISTER", s[s.SUCCESS = 2] = "SUCCESS", s[s.WAIT = 3] = "WAIT", s[s.ERROR = 4] = "ERROR", s))(N || {});
const P0 = (s) => {
  const r = s && s[0] && s[0][0];
  return (r == null ? void 0 : r.t) === _.BOOLEAN ? r.v === V2.TRUE || r.v === !0 : r ? r.v : !1;
};
let z = class extends M2 {
  constructor(r, t, e) {
    super();
    // Cache Formula ID and formula mapping.
    m(this, "_formulaMap", /* @__PURE__ */ new Map());
    m(this, "_result$", new g2());
    m(this, "result$", this._result$.asObservable());
    this._commandService = r, this._activeDirtyManagerService = t, this._conditionalFormattingRuleModel = e, this._initFormulaCalculationResultChange(), this._initRuleChange();
  }
  _initRuleChange() {
    const r = (t) => {
      switch (t.type) {
        case S.colorScale:
          return t.config.some((e) => e.value.type === I.formula);
        case S.dataBar:
          return [t.config.max, t.config.min].some((e) => e.type === I.formula);
        case S.iconSet:
          return t.config.some((e) => e.value.type === I.formula);
      }
    };
    this.disposeWithMe(this._conditionalFormattingRuleModel.$ruleChange.subscribe((t) => {
      const { unitId: e, subUnitId: n, rule: i, oldRule: a } = t;
      t.type === "delete" && this._removeFormulaByCfId(e, n, i.cfId), t.type === "set" && (r(i.rule) || a && r(a.rule)) && this._removeFormulaByCfId(e, n, i.cfId);
    }));
  }
  _initFormulaCalculationResultChange() {
    this.disposeWithMe(this._commandService.onCommandExecuted((r) => {
      if (r.id === v0.id) {
        const t = r.params;
        for (const e in t.unitOtherData)
          for (const n in t.unitOtherData[e])
            for (const i in t.unitOtherData[e][n]) {
              const a = new O(t.unitOtherData[e][n][i]), u = this._ensureSubunitFormulaMap(e, n).getValue(i, ["formulaId"]);
              if (!u)
                continue;
              const o = u.ranges;
              if (!o)
                continue;
              const l = u.result, d = o[0].startRow, c = o[0].startColumn;
              a.forValue((D, f, w) => {
                l.setValue(d + D, c + f, P0(w));
              }), u.status = 2;
              const h = this._getAllFormulaResultByCfId(e, n, u.cfId).every(
                (D) => D.status === 2
                /* SUCCESS */
              );
              this._result$.next({ ...u, isAllFinished: h });
            }
      }
    })), this._activeDirtyManagerService.register(h2.id, {
      commandId: h2.id,
      getDirtyData(r) {
        return {
          dirtyUnitOtherFormulaMap: r.params
        };
      }
    });
  }
  _ensureSubunitFormulaMap(r, t) {
    let e = this._formulaMap.get(r);
    e || (e = /* @__PURE__ */ new Map(), this._formulaMap.set(r, e));
    let n = e.get(t);
    return n || (n = new Y2([], ["formulaId", "id"]), e.set(t, n)), n;
  }
  getSubUnitFormulaMap(r, t) {
    var e;
    return (e = this._formulaMap.get(r)) == null ? void 0 : e.get(t);
  }
  registerFormulaWithRange(r, t, e, n, i = [{ startRow: 0, endRow: 0, startColumn: 0, endColumn: 0 }]) {
    const a = this._ensureSubunitFormulaMap(r, t), u = this.createCFormulaId(e, n);
    if (a.getValue(u, ["id"]))
      return;
    const o = this._createFormulaId(r, t);
    a.addValue({
      formulaText: n,
      unitId: r,
      subUnitId: t,
      cfId: e,
      id: u,
      ranges: i,
      formulaId: o,
      status: 3,
      result: new O()
    });
    const l = {
      unitId: r,
      subUnitId: t,
      formulaMap: {
        [o]: {
          f: n,
          ranges: i
        }
      }
    };
    this._commandService.executeCommand(p0.id, l, { onlyLocal: !0 }).then(() => {
      this._commandService.executeCommand(h2.id, { [r]: { [t]: { [o]: !0 } } }, { onlyLocal: !0 });
    });
  }
  _removeFormulaByCfId(r, t, e) {
    const i = this.deleteCache(r, t, e).map((a) => a.formulaId);
    this._commandService.executeCommand(E0.id, { unitId: r, subUnitId: t, formulaIdList: i }, { onlyLocal: !0 });
  }
  getFormulaResultWithCoords(r, t, e, n, i = 0, a = 0) {
    const u = this.getSubUnitFormulaMap(r, t);
    if (!u)
      return {
        status: 1
        /* NOT_REGISTER */
      };
    const o = u.getValue(this.createCFormulaId(e, n), ["id"]);
    return o ? o.status === 2 && o.result ? {
      result: o.result.getValue(i, a),
      status: 2
      /* SUCCESS */
    } : o.status === 3 ? {
      status: 3
      /* WAIT */
    } : {
      status: 4
      /* ERROR */
    } : {
      status: 1
      /* NOT_REGISTER */
    };
  }
  getFormulaMatrix(r, t, e, n) {
    const i = this.getSubUnitFormulaMap(r, t);
    if (!i)
      return {
        status: 1
        /* NOT_REGISTER */
      };
    const a = i.getValue(this.createCFormulaId(e, n), ["id"]);
    if (!a)
      return {
        status: 1
        /* NOT_REGISTER */
      };
    if (a.status === 2 && a.result)
      return {
        result: a.result,
        status: 2
        /* SUCCESS */
      };
  }
  /**
   * If `formulaText` is not provided, then all caches related to `cfId` will be deleted.
   */
  deleteCache(r, t, e, n) {
    const i = this.getSubUnitFormulaMap(r, t);
    if (!i)
      return [];
    if (n) {
      const a = this.createCFormulaId(e, n);
      return i.deleteValue(a, ["id"]), [];
    } else {
      const a = i.getValues().filter((u) => u.cfId === e);
      return a.forEach((u) => {
        i.deleteValue(u.formulaId, ["formulaId"]);
      }), a;
    }
  }
  _getAllFormulaResultByCfId(r, t, e) {
    const n = this.getSubUnitFormulaMap(r, t);
    return n ? n.getValues().filter((a) => a.cfId === e) : [];
  }
  /**
   * The external environment is not aware of`formulaId`;it communicates internally with the formula engine.
   */
  _createFormulaId(r, t) {
    return `sheet.cf_${r}_${t}_${U2(8)}`;
  }
  /**
   * A conditional formatting may have multiple formulas;if the formulas are identical,then the results will be consistent.
   */
  createCFormulaId(r, t) {
    return `${r}_${t}`;
  }
};
z = $0([
  E2(0, x(P)),
  E2(1, x(F0)),
  E2(2, x(M))
], z);
var V = /* @__PURE__ */ ((s) => (s.preComputingStart = "preComputingStart", s.preComputing = "preComputing", s.preComputingEnd = "preComputingEnd", s.preComputingError = "preComputingError", s))(V || {});
class F2 {
  constructor(r) {
    /**
     * 3nd-level cache
     */
    m(this, "_cache");
    m(this, "_preComputingStatus$", new w0(
      "preComputingStart"
      /* preComputingStart */
    ));
    m(this, "preComputingStatus$", this._preComputingStatus$.asObservable().pipe(A0()));
    /**
     * 2nd-level cache
     */
    m(this, "_preComputingCache");
    m(this, "_rule");
    this._context = r, this._cache = new O2(r.limit), this._rule = r.rule, this._preComputingCache = null, this._initClearCacheListener();
  }
  setCacheLength(r) {
    this._cache.limit = r;
  }
  clearCache() {
    this._cache.clear();
  }
  resetPreComputingCache() {
    this._preComputingStatus$.next(
      "preComputingStart"
      /* preComputingStart */
    ), this._preComputingCache = null;
  }
  updateRule(r) {
    this._rule = r, this.resetPreComputingCache();
  }
  getCell(r, t) {
    const e = this._createKey(r, t);
    if (this._preComputingStatus$.getValue() === "preComputing")
      return this._cache.get(e);
    let n = this.getPreComputingResult(r, t);
    if (n === null && (this._preComputingStatus$.next(
      "preComputingStart"
      /* preComputingStart */
    ), this.preComputing(r, t, this._getContext()), n = this.getPreComputingResult(r, t), n === null))
      return this._cache.get(e);
    if (this._preComputingStatus$.next(
      "preComputingEnd"
      /* preComputingEnd */
    ), this._cache.has(e))
      return this._cache.get(e);
    const i = this.getCellResult(r, t, n, this._getContext());
    return i !== null && this._setCache(r, t, i), i;
  }
  setPreComputingCache(r) {
    this._preComputingCache = r;
  }
  getPreComputingResult(r, t) {
    return this._preComputingCache;
  }
  _createKey(r, t) {
    return `${r}_${t}`;
  }
  _setCache(r, t, e) {
    const n = this._createKey(r, t);
    this._cache.set(n, e);
  }
  _getContext() {
    return { ...this._context, rule: this._rule };
  }
  _initClearCacheListener() {
    this.preComputingStatus$.subscribe((r) => {
      r === "preComputingEnd" && this.clearCache();
    });
  }
}
class W0 extends F2 {
  preComputing(r, t, e) {
    const n = e.rule, i = e.worksheet, a = new O();
    !n.rule.config.every((d) => d.value.type === I.num) && R2(n.ranges, i.getMaxRows() - 1, i.getMaxColumns() - 1).forEach((c) => {
      U.foreach(c, (g, h) => {
        const D = e.getCellValue(g, h), f = D && D.v;
        if (!B(f) && (D == null ? void 0 : D.t) === _.NUMBER) {
          const w = Number(f);
          !Number.isNaN(w) && a.setValue(g, h, w);
        }
      });
    });
    const o = [...n.rule.config].sort((d, c) => d.index - c.index).map((d) => ({
      value: D2(d.value, a, {
        ...e,
        cfId: n.cfId
      }),
      color: new $2(d.color)
    }));
    if (!o.some((d) => y0(d.value) ? d.value.status !== N.SUCCESS : !1)) {
      const d = o.map((c) => c.color).reduce((c, g, h) => (c.result.push({ color: g, value: c.sortValue[h] }), c), {
        result: [],
        sortValue: o.map((c) => c.value.result).sort((c, g) => c - g)
      }).result;
      this.setPreComputingCache(d), this._preComputingStatus$.next(V.preComputingEnd);
      return;
    }
    this._preComputingStatus$.next(V.preComputing);
  }
  getCellResult(r, t, e, n) {
    if (!e)
      return null;
    const i = n.getCellValue(r, t);
    if (i.t === _.NUMBER) {
      const a = Number(i.v);
      if (!Number.isNaN(a))
        return s1(e, a);
    }
  }
}
const q0 = "sheet-conditional-rule-data-bar", L2 = "#ffbe38", k2 = "#abd91a", Z0 = "#000", G0 = 34, H0 = (s) => {
  const { startRow: r, endRow: t, startColumn: e, endColumn: n } = s;
  return `${r}-${t}-${e}-${n}`;
};
class j0 extends q2 {
  constructor() {
    super(...arguments);
    m(this, "_paddingRightAndLeft", 2);
    m(this, "_paddingTopAndBottom", 2);
    m(this, "uKey", q0);
    m(this, "Z_INDEX", G0);
    m(this, "_radius", 1);
  }
  // eslint-disable-next-line max-lines-per-function
  draw(t, e, n, i) {
    const { worksheet: a } = n;
    if (!a)
      return !1;
    const u = /* @__PURE__ */ new Set();
    t.save(), U.foreach(n.rowColumnSegment, (o, l) => {
      if (!a.getRowVisible(o) || !a.getColVisible(l))
        return;
      const d = n.getCellWithCoordByIndex(o, l, !1), { isMerged: c, isMergedMainCell: g, mergeInfo: h } = d;
      let D = a.getCell(o, l);
      if (c && (D = a.getCell(h.startRow, h.startColumn)), !(D != null && D.dataBar) || !this.isRenderDiffRangesByCell(h, i))
        return;
      if (c || g) {
        const $ = H0(h);
        if (u.has($))
          return;
        u.add($);
      }
      const { color: f, value: w, startPoint: p, isGradient: y } = D.dataBar, { startX: E, endX: R, startY: b, endY: v2 } = c || g ? h : d, l2 = R - E, p2 = v2 + R0 - b, Z = l2 - this._paddingRightAndLeft * 2, I2 = p2 - this._paddingTopAndBottom * 2;
      if (w > 0) {
        const $ = Math.max(Z * (1 - p / 100) * w / 100, 1), G = E + this._paddingRightAndLeft + p / 100 * Z, H = b + this._paddingTopAndBottom;
        if (y) {
          const j = t.createLinearGradient(G, H, G + $, H);
          j.addColorStop(0, f), j.addColorStop(1, "rgb(255 255 255)"), t.fillStyle = j, t.strokeStyle = f, t.lineWidth = 1;
        } else
          t.fillStyle = f;
        this._drawRectWithRoundedCorner(t, G, H, $, I2, !1, !0, !0, !1), y && t.stroke();
      } else {
        const $ = Math.max(Z * p / 100 * Math.abs(w) / 100, 1), G = E + this._paddingRightAndLeft + p / 100 * Z - $, H = b + this._paddingTopAndBottom;
        if (y) {
          const j = t.createLinearGradient(G, H, G + $, H);
          j.addColorStop(0, "rgb(255 255 255)"), j.addColorStop(1, f), t.fillStyle = j, t.strokeStyle = f, t.lineWidth = 1;
        } else
          t.fillStyle = f;
        this._drawRectWithRoundedCorner(t, G, H, $, I2, !0, !1, !1, !0), y && t.stroke();
      }
    }), t.restore();
  }
  _drawRectWithRoundedCorner(t, e, n, i, a, u, o, l, d) {
    const c = this._radius;
    !a || !i || (t.beginPath(), t.moveTo(e + c, n), t.lineTo(e + i - c, n), o ? t.arcTo(e + i, n, e + i, n + c, c) : t.lineTo(e + i, n), t.lineTo(e + i, n + a - c), l ? t.arcTo(e + i, n + a, e + i - c, n + a, c) : t.lineTo(e + i, n + a), t.lineTo(e + c, n + a), d ? t.arcTo(e, n + a, e, n + a - c, c) : t.lineTo(e, n + a), t.lineTo(e, n + c), u ? t.arcTo(e, n, e + c, n, c) : t.lineTo(e, n), t.closePath(), t.fill());
  }
}
W2.add(j0);
const c2 = (s) => Math.max(Math.min(100, s), 0), X0 = (s, r, t) => {
  const e = t(s, r);
  if (e && e.t === _.NUMBER) {
    const n = Number(e.v);
    return Number.isNaN(n) ? null : n;
  }
  return null;
};
class K0 extends F2 {
  preComputing(r, t, e) {
    const n = e.rule, i = n.rule, a = e.worksheet, u = new O();
    ![n.rule.config.max, n.rule.config.min].every((h) => h.type === I.num) && R2(n.ranges, a.getMaxRows() - 1, a.getMaxColumns() - 1).forEach((D) => {
      U.foreach(D, (f, w) => {
        const p = e.getCellValue(f, w), y = p && p.v;
        if (!B(y) && (p == null ? void 0 : p.t) === _.NUMBER) {
          const E = Number(y);
          !Number.isNaN(E) && u.setValue(f, w, E);
        }
      });
    });
    const l = D2(i.config.min, u, { ...e, cfId: n.cfId }), d = D2(i.config.max, u, { ...e, cfId: n.cfId });
    let c = 0, g = 0;
    if (l.status === N.SUCCESS) {
      const h = Number(l.result);
      c = Number.isNaN(h) ? 0 : h;
    } else {
      this._preComputingStatus$.next(V.preComputing);
      return;
    }
    if (d.status === N.SUCCESS) {
      const h = Number(d.result), D = Number.isNaN(h) ? 0 : h;
      g = Math.max(D, c), c = Math.min(D, c);
      let f = 50;
      if (c < 0 && g <= 0)
        f = 100;
      else if (c < 0 && g > 0) {
        const w = Math.abs(g) + Math.abs(c);
        f = Math.abs(c) / w * 100;
      } else c >= 0 && g > 0 && (f = 0);
      this.setPreComputingCache({ min: c, max: g, startPoint: f }), this._preComputingStatus$.next(V.preComputingEnd);
      return;
    }
    this._preComputingStatus$.next(V.preComputing);
  }
  // eslint-disable-next-line complexity
  getCellResult(r, t, e, n) {
    const { min: i, max: a, startPoint: u } = e, l = n.rule.rule, d = l.isShowValue, c = l.config.isGradient, g = X0(r, t, n.getCellValue);
    if (!(g === null || g < i || i === a || a < i)) {
      if (g === 0)
        return { color: Z0, startPoint: u, value: 0, isGradient: c, isShowValue: d };
      if (i < 0 && a <= 0) {
        const h = a - i, D = c2((a - g) / h * 100);
        return D === 0 ? void 0 : { color: l.config.nativeColor || k2, startPoint: u, value: -D, isGradient: c, isShowValue: d };
      } else if (i < 0 && a > 0)
        if (g > 0) {
          const h = c2(Math.min(g / a, 1) * 100);
          return h === 0 ? void 0 : { color: l.config.positiveColor || L2, startPoint: u, value: h, isGradient: c, isShowValue: d };
        } else {
          const h = c2(Math.min(Math.abs(g) / Math.abs(i), 1) * 100);
          return h === 0 ? void 0 : { color: l.config.nativeColor || k2, startPoint: u, value: -h, isGradient: c, isShowValue: d };
        }
      else if (i >= 0 && a > 0) {
        const h = a - i, D = 0, f = c2((1 - (a - g) / h) * 100);
        return f === 0 ? void 0 : { color: l.config.positiveColor || L2, startPoint: D, value: f, isGradient: c, isShowValue: d };
      }
    }
  }
}
class Y0 extends F2 {
  // eslint-disable-next-line max-lines-per-function
  preComputing(r, t, e) {
    const n = e.rule.rule, i = e.rule.ranges, u = (() => {
      switch (n.subType) {
        case A.average: {
          let o = 0, l = 0;
          return i.forEach((d) => {
            U.foreach(d, (c, g) => {
              const h = e.getCellValue(c, g), D = W(h || void 0);
              h && h.t === _.NUMBER && D !== void 0 && (o += Number(D) || 0, l++);
            });
          }), { value: o / l, type: n.subType };
        }
        case A.uniqueValues:
        case A.duplicateValues: {
          const o = /* @__PURE__ */ new Map();
          return i.forEach((l) => {
            U.foreach(l, (d, c) => {
              const g = e.getCellValue(d, c), h = W(g || void 0);
              if (h !== void 0) {
                const D = o.get(h);
                D ? o.set(h, D + 1) : o.set(h, 1);
              }
            });
          }), { value: o, type: n.subType };
        }
        case A.rank: {
          let o = [];
          i.forEach((c) => {
            U.foreach(c, (g, h) => {
              const D = e.getCellValue(g, h), f = W(D || void 0);
              D && D.t === _.NUMBER && f !== void 0 && o.push(Number(f) || 0);
            });
          }), o.sort((c, g) => g - c);
          const l = e.rule.rule;
          if (l.isPercent) {
            l.isBottom && (o = o.toReversed());
            const c = J.clamp(l.value, 0, 100) / 100, g = Math.floor(c * o.length), h = J.clamp(g - 1, 0, o.length - 1);
            return { value: o[h], type: n.subType };
          }
          const d = Math.floor(J.clamp(l.isBottom ? l.value - 1 : l.value, 0, o.length));
          return l.isBottom ? { value: o[o.length - d - 1], type: n.subType } : { value: o[Math.max(d - 1, 0)], type: n.subType };
        }
        case A.formula: {
          const o = n, l = e.accessor.get(z);
          l.registerFormulaWithRange(e.unitId, e.subUnitId, e.rule.cfId, o.value, e.rule.ranges);
          const d = l.getFormulaMatrix(e.unitId, e.subUnitId, e.rule.cfId, o.value);
          return d && d.status === N.SUCCESS ? (this._preComputingStatus$.next(V.preComputingEnd), {
            value: d.result,
            type: n.subType
          }) : (this._preComputingStatus$.next(V.preComputing), null);
        }
        case A.timePeriod:
          switch (n.operator) {
            case k.last7Days:
              return {
                value: {
                  start: v().subtract(7, "day").valueOf(),
                  end: v().valueOf()
                },
                type: n.subType
              };
            case k.lastMonth:
              return {
                value: {
                  start: v().startOf("month").subtract(1, "month").valueOf(),
                  end: v().endOf("month").subtract(1, "month").valueOf()
                },
                type: n.subType
              };
            case k.lastWeek:
              return {
                value: {
                  start: v().startOf("week").subtract(1, "week").valueOf(),
                  end: v().endOf("week").subtract(1, "week").valueOf()
                },
                type: n.subType
              };
            case k.nextMonth:
              return {
                value: {
                  start: v().startOf("month").add(1, "month").valueOf(),
                  end: v().endOf("month").add(1, "month").valueOf()
                },
                type: n.subType
              };
            case k.nextWeek:
              return {
                value: {
                  start: v().startOf("week").add(1, "week").valueOf(),
                  end: v().endOf("week").add(1, "week").valueOf()
                },
                type: n.subType
              };
            case k.thisMonth:
              return {
                value: {
                  start: v().startOf("month").valueOf(),
                  end: v().endOf("month").valueOf()
                },
                type: n.subType
              };
            case k.thisWeek:
              return {
                value: {
                  start: v().startOf("week").valueOf(),
                  end: v().endOf("week").valueOf()
                },
                type: n.subType
              };
            case k.today:
              return {
                value: {
                  start: v().startOf("day").valueOf(),
                  end: v().endOf("day").valueOf()
                },
                type: n.subType
              };
            case k.tomorrow:
              return {
                value: {
                  start: v().startOf("day").add(1, "day").valueOf(),
                  end: v().endOf("day").add(1, "day").valueOf()
                },
                type: n.subType
              };
            case k.yesterday:
              return {
                value: {
                  start: v().startOf("day").subtract(1, "day").valueOf(),
                  end: v().endOf("day").subtract(1, "day").valueOf()
                },
                type: n.subType
              };
          }
      }
    })();
    this.setPreComputingCache(u);
  }
  // eslint-disable-next-line max-lines-per-function
  getCellResult(r, t, e, n) {
    const i = n.getCellValue(r, t), a = n.rule.rule;
    return (() => {
      switch (a.subType) {
        case A.number: {
          const l = i && Number(i.v), d = (i == null ? void 0 : i.t) === _.NUMBER, c = a;
          return d ? B(l) || Number.isNaN(l) ? void 0 : r2({ operator: c.operator, value: c.value || 0 }, l || 0) : !![F.notEqual, F.notBetween].includes(c.operator);
        }
        case A.text: {
          const l = a, d = W(i), c = d === null ? "" : String(d), g = l.value || "";
          switch (l.operator) {
            case L.beginsWith:
              return c.startsWith(g);
            case L.containsBlanks:
              return /^\s*$/.test(c);
            case L.notContainsBlanks:
              return !/^\s*$/.test(c);
            case L.containsErrors:
              return S2.has(c);
            case L.notContainsErrors:
              return !S2.has(c);
            case L.containsText:
              return c.indexOf(g) > -1;
            case L.notContainsText:
              return c.indexOf(g) === -1;
            case L.endsWith:
              return c.endsWith(g);
            case L.equal:
              return c === g;
            case L.notEqual:
              return c !== g;
            default:
              return !1;
          }
        }
        case A.timePeriod: {
          const l = W(i);
          if (B(l) || Number.isNaN(Number(l)) || (i == null ? void 0 : i.t) !== _.NUMBER || !e)
            return;
          const d = n1(Number(l)), { start: c, end: g } = e.value;
          return d >= c && d <= g;
        }
        case A.average: {
          const l = i && i.v, d = Number(l), c = (i == null ? void 0 : i.t) === _.NUMBER, g = a;
          if (!c)
            return F.notEqual === g.operator;
          if (B(l) || Number.isNaN(d) || !e)
            return !1;
          const h = e.value;
          switch (g.operator) {
            case F.greaterThan:
              return d > h;
            case F.greaterThanOrEqual:
              return d >= h;
            case F.lessThan:
              return d < h;
            case F.lessThanOrEqual:
              return d <= h;
            case F.equal:
              return C2(d, h);
            case F.notEqual:
              return !C2(d, h);
            default:
              return !1;
          }
        }
        case A.rank: {
          const l = W(i), d = Number(l);
          if (B(l) || Number.isNaN(d) || (i == null ? void 0 : i.t) !== _.NUMBER || !e)
            return !1;
          const c = e.value;
          return a.isBottom ? d <= c : d >= c;
        }
        case A.uniqueValues: {
          const l = W(i);
          return B(l) || !e ? !1 : e.value.get(l) === 1;
        }
        case A.duplicateValues: {
          const l = W(i);
          return B(l) || !e ? !1 : e.value.get(l) !== 1;
        }
        case A.formula: {
          const l = e == null ? void 0 : e.value;
          return l ? l.getValue(r, t) === !0 : !1;
        }
      }
    })() ? a.style : {};
  }
}
const J0 = (s, r, t) => {
  const e = t(s, r);
  if (e && e.t === _.NUMBER) {
    const n = Number(e.v);
    return Number.isNaN(n) ? null : n;
  }
  return null;
};
class z0 extends F2 {
  preComputing(r, t, e) {
    const n = e.rule.rule, i = e.worksheet, a = new O();
    !n.config.every((d) => d.value.type === I.num) && R2(e.rule.ranges, i.getMaxRows() - 1, i.getMaxColumns() - 1).forEach((c) => {
      U.foreach(c, (g, h) => {
        const D = e.getCellValue(g, h), f = D && D.v;
        if (!B(f) && (D == null ? void 0 : D.t) === _.NUMBER) {
          const w = Number(f);
          !Number.isNaN(w) && a.setValue(g, h, w);
        }
      });
    });
    const o = n.config.map((d) => D2(d.value, a, { ...e, cfId: e.rule.cfId }));
    if (!o.some((d) => d.status !== N.SUCCESS)) {
      const d = o.map((c, g) => ({
        operator: n.config[g].operator,
        value: Number(c.result) || 0
      })).reduce((c, g, h, D) => {
        const f = n.config[h];
        if (!h || h === D.length - 1)
          c.push({ ...g, iconId: f.iconId, iconType: f.iconType });
        else {
          const w = D[h - 1];
          r2(w, g.value) || c.push({ ...g, iconId: f.iconId, iconType: f.iconType });
        }
        return c;
      }, []);
      this.setPreComputingCache(d), this._preComputingStatus$.next(V.preComputingEnd);
      return;
    }
    this._preComputingStatus$.next(V.preComputing);
  }
  getCellResult(r, t, e, n) {
    if (!e)
      return null;
    const i = J0(r, t, n.getCellValue);
    if (i === null)
      return;
    const a = n.rule.rule, u = a.isShowValue === void 0 ? !0 : !!a.isShowValue;
    for (let o = 0; o < e.length; o++) {
      const l = e[o], d = { ...l }, c = { ...l }, { iconId: g, iconType: h } = l;
      if (o === 0) {
        if (r2(l, i))
          return { iconId: g, iconType: h, isShowValue: u };
      } else {
        if (o === e.length - 1)
          return { iconId: g, iconType: h, isShowValue: u };
        {
          const D = e[o - 1];
          if (c.operator = r1(D.operator), c.value = D.value, r2(d, i) && r2(c, i))
            return { iconId: g, iconType: h, isShowValue: u };
        }
      }
    }
  }
}
var Q0 = Object.getOwnPropertyDescriptor, e1 = (s, r, t, e) => {
  for (var n = e > 1 ? void 0 : e ? Q0(r, t) : r, i = s.length - 1, a; i >= 0; i--)
    (a = s[i]) && (n = a(n) || n);
  return n;
}, u2 = (s, r) => (t, e) => r(t, e, s);
const A2 = 1e3 * 3 * 3;
let Q = class extends M2 {
  constructor(r, t, e, n) {
    super();
    //  Map<unitID ,<sheetId ,ObjectMatrix>>
    m(this, "_calculateUnitManagers", /* @__PURE__ */ new Map());
    m(this, "_rTreeManager", new J2());
    /**
     * 1nd-level cache
     */
    m(this, "_cellCache", new O2(A2));
    m(this, "_markDirty$", new g2());
    /**
     * The rendering layer listens to this variable to determine whether a reRender is necessary.
     * @memberof ConditionalFormattingViewModel
     */
    m(this, "markDirty$", this._markDirty$.asObservable());
    /**
     `isNeedResetPreComputingCache` indicates whether it is necessary to remove the 2nd-level cache for each rule individually.
     Generally, when the logic of a rule calculation is modified, the cache for that rule needs to be removed.
     Changes in style/priority do not require the clearing of the 2nd-level cache.
     Rule changes/region changes require the removal of the 2nd-level cache.
     There is also a situation where preComputing is asynchronously calculated.
     After the calculation is finished, it is only for marking as dirty, and the 2nd-level cache need to be cleared.
     * @param {boolean} [isNeedResetPreComputingCache]
     */
    m(this, "_markRuleDirtyAtOnce", (r, t, e, n = !0) => {
      if (this._cellCache.clear(), n) {
        const a = this._ensureCalculateUnitManager(r, t).get(e);
        a && a.resetPreComputingCache();
      }
      this._markDirty$.next({
        unitId: r,
        subUnitId: t,
        cfId: e
      });
    });
    /**
     * For the same condition format being marked dirty multiple times at the same time,
     * it will cause the style cache to be cleared, thereby causing the screen to flicker.
     * Here,multiple dirties are merged into one..
     */
    m(this, "markRuleDirty", (() => {
      const r = new g2();
      return this.disposeWithMe(r.pipe(x0(100), _0((t) => !!t.length), M0((t) => {
        const e = /* @__PURE__ */ new Set(), n = [];
        return t.forEach((i) => {
          const a = `${i.unitId}_${i.subUnitId}_${i.cfId}`;
          if (e.has(a)) {
            if (i.isNeedResetPreComputingCache) {
              const u = n.find((o) => o.cfId === i.cfId);
              u.isNeedResetPreComputingCache = !0;
            }
            return;
          }
          e.add(a), n.push({ ...i });
        }), n;
      })).subscribe((t) => {
        t.forEach((e) => {
          this._markRuleDirtyAtOnce(e.unitId, e.subUnitId, e.cfId, e.isNeedResetPreComputingCache);
        });
      })), (t, e, n, i = !0) => {
        r.next({ unitId: t, subUnitId: e, cfId: n, isNeedResetPreComputingCache: i });
      };
    })());
    this._injector = r, this._conditionalFormattingRuleModel = t, this._conditionalFormattingFormulaService = e, this._univerInstanceService = n, this._initRuleListener(), this._handleCustomFormulasSeparately(), this._initCFFormulaListener();
  }
  _initCFFormulaListener() {
    this.disposeWithMe(
      this._conditionalFormattingFormulaService.result$.subscribe(({ unitId: r, subUnitId: t, cfId: e, isAllFinished: n }) => {
        n && this._markRuleDirtyAtOnce(r, t, e, n);
      })
    );
  }
  getCellCfs(r, t, e, n) {
    const i = this._createCacheKey(r, t, e, n);
    if (this._cellCache.has(i))
      return this._cellCache.get(i);
    const a = this._getCellCfs(r, t, e, n);
    return a.length && this._cellCache.set(i, a), a;
  }
  _getCellCfs(r, t, e, n) {
    var d;
    const i = (d = this._conditionalFormattingRuleModel.getSubunitRules(r, t)) != null ? d : [], a = this._ensureCalculateUnitManager(r, t), u = this._rTreeManager.bulkSearch([{ unitId: r, sheetId: t, range: { startColumn: n, endColumn: n, startRow: e, endRow: e } }]), o = i.filter((c) => u.has(c.cfId));
    return o.length ? o.map((c) => {
      const g = a.get(c.cfId);
      return g ? {
        cfId: c.cfId,
        result: g.getCell(e, n)
      } : null;
    }).filter((c) => !!c).map((c, g) => ({ ...c, priority: g })) : [];
  }
  dispose() {
    this._calculateUnitManagers.clear(), this._cellCache.clear(), this._rTreeManager.clear(), super.dispose();
  }
  _handleCustomFormulasSeparately() {
    this.disposeWithMe(
      this._conditionalFormattingRuleModel.$ruleChange.subscribe((r) => {
        if (r.type === "set") {
          const { unitId: t, subUnitId: e } = r, n = r.oldRule;
          n.rule.type === S.highlightCell && n.rule.subType === A.formula && this._conditionalFormattingFormulaService.deleteCache(t, e, n.cfId);
        }
      })
    );
  }
  _initRuleListener() {
    this.disposeWithMe(
      this._conditionalFormattingRuleModel.$ruleChange.subscribe((r) => {
        const { unitId: t, subUnitId: e, rule: n } = r, { cfId: i, ranges: a } = n, u = this._ensureCalculateUnitManager(t, e);
        switch (this.markRuleDirty(t, e, i), r.type) {
          case "add": {
            this._rTreeManager.bulkInsert(a.map((l) => ({ unitId: t, sheetId: e, id: i, range: l })));
            const o = this._createRuleCalculateUnitInstance(t, e, n);
            if (!o)
              return;
            u.set(n.cfId, o);
            break;
          }
          case "delete": {
            this._rTreeManager.bulkRemove(a.map((o) => ({ unitId: t, sheetId: e, id: i, range: o }))), u.delete(n.cfId);
            break;
          }
          case "set": {
            const o = r.oldRule;
            if (this._rTreeManager.bulkRemove(o.ranges.map((l) => ({ unitId: t, sheetId: e, id: o.cfId, range: l }))), this._rTreeManager.bulkInsert(a.map((l) => ({ unitId: t, sheetId: e, id: i, range: l }))), o.rule.type !== n.rule.type) {
              const l = this._createRuleCalculateUnitInstance(t, e, n);
              if (!l)
                return;
              u.delete(o.cfId), u.set(n.cfId, l);
            } else {
              const l = u.get(o.cfId);
              if (!l)
                return;
              l.updateRule(n);
            }
          }
        }
      })
    );
  }
  _ensureCalculateUnitManager(r, t) {
    let e = this._calculateUnitManagers.get(r);
    e || (e = /* @__PURE__ */ new Map(), this._calculateUnitManagers.set(r, e));
    let n = e.get(t);
    return n || (n = /* @__PURE__ */ new Map(), e.set(t, n)), n;
  }
  _createRuleCalculateUnitInstance(r, t, e) {
    const n = this._univerInstanceService.getUnit(r), i = n == null ? void 0 : n.getSheetBySheetId(t);
    if (!n || !i)
      return;
    const a = {
      workbook: n,
      worksheet: i,
      unitId: r,
      subUnitId: t,
      accessor: this._injector,
      rule: e,
      limit: A2,
      getCellValue: (u, o) => i.getCellRaw(u, o) || {}
    };
    switch (e.rule.type) {
      case S.colorScale:
        return new W0(a);
      case S.dataBar:
        return new K0(a);
      case S.highlightCell:
        return new Y0(a);
      case S.iconSet:
        return new z0(a);
    }
  }
  _createCacheKey(r, t, e, n) {
    return `${r}_${t}_${e}_${n}`;
  }
  setCacheLength(r = A2) {
    this._cellCache.limit !== r && (this._cellCache.limit = r, this._calculateUnitManagers.forEach((t) => {
      t.forEach((e) => {
        e.forEach((n) => {
          n.setCacheLength(r);
        });
      });
    }));
  }
};
Q = e1([
  u2(0, x(y2)),
  u2(1, x(M)),
  u2(2, x(z)),
  u2(3, q)
], Q);
function C2(s, r) {
  return Math.abs(s - r) < Number.EPSILON;
}
const B = (s) => [void 0, null].includes(s), W = (s) => {
  var e, n;
  if (!s)
    return null;
  if (s.t === _.BOOLEAN)
    return s.v === V2.TRUE ? b2.TRUE : b2.FALSE;
  const r = s.v, t = (n = (e = s.p) == null ? void 0 : e.body) == null ? void 0 : n.dataStream.replace(/\r\n$/, "");
  return B(r) ? B(t) ? null : t : r;
}, x2 = 86400;
function t1(s, r = !0) {
  if (r && s >= 0) {
    if (s === 0)
      return [1900, 1, 0];
    if (s === 60)
      return [1900, 2, 29];
    if (s < 60)
      return [1900, s < 32 ? 1 : 2, (s - 1) % 31 + 1];
  }
  let t = s + 68569 + 2415019;
  const e = Math.floor(4 * t / 146097);
  t = t - Math.floor((146097 * e + 3) / 4);
  const n = Math.floor(4e3 * (t + 1) / 1461001);
  t = t - Math.floor(1461 * n / 4) + 31;
  const i = Math.floor(80 * t / 2447), a = t - Math.floor(2447 * i / 80);
  t = Math.floor(i / 11);
  const u = i + 2 - 12 * t;
  return [100 * (e - 49) + n + t | 0, u | 0, a | 0];
}
const n1 = (s) => {
  let r = s | 0;
  const t = x2 * (s - r);
  let e = Math.floor(t);
  t - e > 0.9999 && (e += 1, e === x2 && (e = 0, r += 1));
  const n = e < 0 ? x2 + e : e, [i, a, u] = t1(s, !0), o = Math.floor(n / 60 / 60) % 60, l = Math.floor(n / 60) % 60, d = Math.floor(n) % 60;
  return v(`${i}/${a}/${u} ${o}:${l}:${d}`).valueOf();
}, D2 = (s, r, t) => {
  switch (s.type) {
    case I.max: {
      let e = 0;
      return r.forValue((n, i, a) => {
        a > e && (e = a);
      }), {
        status: N.SUCCESS,
        result: e
      };
    }
    case I.min: {
      let e;
      return r.forValue((n, i, a) => {
        e === void 0 && (e = a), a < e && (e = a);
      }), {
        status: N.SUCCESS,
        result: e
      };
    }
    case I.percent: {
      let e, n;
      r.forValue((u, o, l) => {
        (e === void 0 || n === void 0) && (e = l, n = l), l > e && (e = l), l < n && (n = l);
      });
      const i = (e || 0) - (n || 0), a = Math.max(Math.min(Number(s.value) || 0, 100), 0);
      return {
        status: N.SUCCESS,
        result: i * (a / 100) + (n || 0)
      };
    }
    case I.percentile: {
      const e = r.toNativeArray().sort((l, d) => l - d), n = Math.max(Math.min(Number(s.value) || 0, 100), 0), i = (e.length - 1) * n / 100, a = Math.floor(i), u = i - a, o = e[a] + (e[Math.min(a + 1, e.length - 1)] - e[a]) * u;
      return {
        status: N.SUCCESS,
        result: o
      };
    }
    case I.formula: {
      const { accessor: e, unitId: n, subUnitId: i, cfId: a } = t, u = String(s.value), o = e.get(z);
      return o.registerFormulaWithRange(n, i, a, u), o.getFormulaResultWithCoords(n, i, a, u);
    }
    case I.num:
    default: {
      const e = Number(s.value);
      return {
        status: N.SUCCESS,
        result: Number.isNaN(e) ? 0 : e
      };
    }
  }
}, Z1 = (s, r, t, e) => {
  const { accessor: n } = e, i = n.get(Q), a = new O();
  return t.ranges.forEach((u) => {
    U.foreach(u, (o, l) => {
      const d = i.getCellCfs(s, r, o, l);
      if (d) {
        const c = d.find((g) => g.cfId === t.cfId);
        c != null && c.result && a.setValue(o, l, c.result);
      }
    });
  }), a;
}, r2 = (s, r) => {
  switch (s.operator) {
    case F.between: {
      if (typeof s.value != "object" || !s.value.length)
        return;
      const t = Math.min(...s.value), e = Math.max(...s.value);
      return r >= t && r <= e;
    }
    case F.notBetween: {
      if (typeof s.value != "object" || !s.value.length)
        return;
      const t = Math.min(...s.value), e = Math.max(...s.value);
      return !(r >= t && r <= e);
    }
    case F.equal: {
      const t = s.value || 0;
      return C2(t, r);
    }
    case F.notEqual: {
      const t = s.value || 0;
      return !C2(t, r);
    }
    case F.greaterThan: {
      const t = s.value || 0;
      return r > t;
    }
    case F.greaterThanOrEqual: {
      const t = s.value || 0;
      return r >= t;
    }
    case F.lessThan: {
      const t = s.value || 0;
      return r < t;
    }
    case F.lessThanOrEqual: {
      const t = s.value || 0;
      return r <= t;
    }
    default:
      return !1;
  }
}, r1 = (s) => {
  switch (s) {
    case F.greaterThan:
      return F.lessThanOrEqual;
    case F.greaterThanOrEqual:
      return F.lessThan;
    case F.lessThan:
      return F.greaterThanOrEqual;
    case F.lessThanOrEqual:
      return F.greaterThan;
  }
  return s;
}, s1 = (s, r) => {
  const t = (i) => i.a !== void 0 ? i : { ...i, a: 1 }, e = s.findIndex((i) => i.value >= r), n = e - 1;
  if (e === 0)
    return s[0].color.toRgbString();
  if (n >= 0) {
    const i = s[n], a = s[e];
    if (i.color.isValid && a.color.isValid) {
      const u = t(i.color.toRgb()), o = t(a.color.toRgb()), l = a.value - i.value, d = (r - i.value) / l, c = ["r", "g", "b", "a"].reduce((h, D) => {
        const f = u[D];
        return h[D] = (o[D] - f) * d + f, h;
      }, {});
      return new $2(c).toRgbString();
    }
  } else
    return s[s.length - 1].color.toRgbString();
}, R2 = (s, r, t) => s.map((e) => {
  if (e.startColumn > t || e.startRow > r)
    return null;
  const n = { ...e };
  return n.endRow = Math.min(n.endRow, r), n.endColumn = Math.min(n.endColumn, t), n;
}).filter((e) => !!e);
function G1(s) {
  let r = 0;
  return new O(s).forValue((t, e, n) => {
    r = Math.max(Number.isNaN(r) ? 0 : r, Number(n));
  }), r;
}
const i1 = { mistake: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%229.99999%22%20cy%3D%2210%22%20r%3D%227.03704%22%20fill%3D%22%23FE4B4B%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6.87359%206.87332C6.6146%207.13231%206.6146%207.55221%206.87359%207.8112L9.062%209.99961L6.87356%2012.188C6.61457%2012.447%206.61457%2012.8669%206.87356%2013.1259C7.13255%2013.3849%207.55245%2013.3849%207.81144%2013.1259L9.99987%2010.9375L12.1882%2013.1258C12.4472%2013.3848%2012.8671%2013.3848%2013.1261%2013.1258C13.3851%2012.8669%2013.3851%2012.447%2013.1261%2012.188L10.9378%209.99961L13.1261%207.81127C13.3851%207.55228%2013.3851%207.13238%2013.1261%206.87339C12.8671%206.61441%2012.4472%206.61441%2012.1882%206.87339L9.99987%209.06173L7.81147%206.87332C7.55248%206.61433%207.13257%206.61433%206.87359%206.87332Z%22%20fill%3D%22%23FFFFFF%22%2F%3E%0A%3C%2Fsvg%3E%0A", warn: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%229.99999%22%20cy%3D%2210%22%20r%3D%227.03704%22%20fill%3D%22%23FFBD37%22%2F%3E%0A%3Cpath%20d%3D%22M9.16817%206.67735C9.16646%206.61745%209.1656%206.5875%209.16653%206.56236C9.18103%206.16817%209.49136%205.84883%209.88497%205.82306C9.91008%205.82141%209.94004%205.82141%209.99996%205.82141V5.82141C10.0599%205.82141%2010.0899%205.82141%2010.115%205.82306C10.5086%205.84883%2010.8189%206.16817%2010.8334%206.56236C10.8343%206.5875%2010.8335%206.61745%2010.8318%206.67735L10.7043%2011.131C10.6934%2011.5121%2010.3812%2011.8154%209.99995%2011.8154V11.8154C9.61866%2011.8154%209.30655%2011.5121%209.29564%2011.131L9.16817%206.67735Z%22%20fill%3D%22%23FFFFFF%22%2F%3E%0A%3Crect%20x%3D%229.31488%22%20y%3D%2212.8086%22%20width%3D%221.37006%22%20height%3D%221.37006%22%20rx%3D%220.685032%22%20fill%3D%22%23FFFFFF%22%2F%3E%0A%3C%2Fsvg%3E%0A", correct: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M17.037%2010C17.037%2013.8865%2013.8864%2017.0371%209.99999%2017.0371C6.11354%2017.0371%202.96295%2013.8865%202.96295%2010C2.96295%206.1136%206.11354%202.96301%209.99999%202.96301C13.8864%202.96301%2017.037%206.1136%2017.037%2010Z%22%20fill%3D%22%2359D01E%22%2F%3E%0A%3Cpath%20d%3D%22M13.9239%207.17477C13.6638%206.91472%2013.2422%206.91472%2012.9821%207.17477L8.74433%2011.4126L7.01786%209.6861C6.75781%209.42606%206.33619%209.42606%206.07614%209.6861C5.81609%209.94615%205.81609%2010.3678%206.07614%2010.6278L8.27349%2012.8252C8.53354%2013.0852%208.95516%2013.0852%209.21521%2012.8252L9.2195%2012.8209L13.9239%208.1165C14.1839%207.85645%2014.1839%207.43482%2013.9239%207.17477Z%22%20fill%3D%22%23FFFFFF%22%2F%3E%0A%3C%2Fsvg%3E%0A" }, a1 = { starEmpty: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.3437%203.3312L11.6861%206.67412C11.8451%207.0699%2012.2165%207.33978%2012.6421%207.36863L16.2362%207.61233C16.5693%207.63492%2016.7048%208.05202%2016.4486%208.26608L13.6841%2010.5758C13.3568%2010.8493%2013.215%2011.2859%2013.319%2011.6996L14.1979%2015.1931C14.2793%2015.5168%2013.9245%2015.7746%2013.6418%2015.5971L10.5908%2013.6817C10.2296%2013.4549%209.77045%2013.4549%209.40924%2013.6817L6.35828%2015.5971C6.07553%2015.7746%205.72072%2015.5168%205.80217%2015.1931L6.68105%2011.6996C6.7851%2011.2859%206.64322%2010.8493%206.31592%2010.5758L3.55145%208.26607C3.29525%208.05202%203.43078%207.63492%203.76386%207.61233L7.358%207.36863C7.78352%207.33978%208.15498%207.0699%208.31391%206.67412L9.65633%203.3312C9.78074%203.0214%2010.2193%203.0214%2010.3437%203.3312Z%22%20fill%3D%22%23fff%22%20stroke%3D%22%23FFBD37%22%20stroke-width%3D%220.740741%22%2F%3E%0A%3C%2Fsvg%3E%0A", starIncomplete: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.3437%203.3312L11.6861%206.67412C11.845%207.0699%2012.2165%207.33978%2012.642%207.36863L16.2361%207.61233C16.5692%207.63492%2016.7047%208.05202%2016.4485%208.26608L13.6841%2010.5758C13.3568%2010.8493%2013.2149%2011.2859%2013.3189%2011.6996L14.1978%2015.1931C14.2793%2015.5168%2013.9245%2015.7746%2013.6417%2015.5971L10.5908%2013.6817C10.2295%2013.4549%209.77039%2013.4549%209.40918%2013.6817L6.35822%2015.5971C6.07547%2015.7746%205.72066%2015.5168%205.80211%2015.1931L6.68098%2011.6996C6.78504%2011.2859%206.64316%2010.8493%206.31586%2010.5758L3.55139%208.26607C3.29519%208.05202%203.43072%207.63492%203.7638%207.61233L7.35793%207.36863C7.78346%207.33978%208.15491%207.0699%208.31385%206.67412L9.65627%203.3312C9.78068%203.0214%2010.2192%203.0214%2010.3437%203.3312Z%22%20fill%3D%22%23fff%22%20stroke%3D%22%23FFBD37%22%20stroke-width%3D%220.740741%22%2F%3E%0A%3Cmask%20id%3D%22mask1_613_177%22%20style%3D%22mask-type%3Aalpha%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2210%22%20height%3D%2220%22%3E%0A%3Crect%20width%3D%2210%22%20height%3D%2220%22%20fill%3D%22%23C4C4C4%22%2F%3E%0A%3C%2Fmask%3E%0A%3Cg%20mask%3D%22url(%23mask1_613_177)%22%3E%0A%3Cpath%20d%3D%22M10.3437%203.3312L11.6861%206.67412C11.845%207.0699%2012.2165%207.33978%2012.642%207.36863L16.2361%207.61233C16.5692%207.63492%2016.7047%208.05202%2016.4485%208.26608L13.6841%2010.5758C13.3568%2010.8493%2013.2149%2011.2859%2013.3189%2011.6996L14.1978%2015.1931C14.2793%2015.5168%2013.9245%2015.7746%2013.6417%2015.5971L10.5908%2013.6817C10.2295%2013.4549%209.77039%2013.4549%209.40918%2013.6817L6.35822%2015.5971C6.07547%2015.7746%205.72066%2015.5168%205.80211%2015.1931L6.68098%2011.6996C6.78504%2011.2859%206.64316%2010.8493%206.31586%2010.5758L3.55139%208.26607C3.29519%208.05202%203.43072%207.63492%203.7638%207.61233L7.35793%207.36863C7.78346%207.33978%208.15491%207.0699%208.31385%206.67412L9.65627%203.3312C9.78068%203.0214%2010.2192%203.0214%2010.3437%203.3312Z%22%20fill%3D%22%23FFBD37%22%20stroke%3D%22%23FFBD37%22%20stroke-width%3D%220.740741%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A", starFull: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.3437%203.3312L11.6861%206.67412C11.8451%207.0699%2012.2165%207.33978%2012.6421%207.36863L16.2362%207.61233C16.5693%207.63492%2016.7048%208.05202%2016.4486%208.26608L13.6841%2010.5758C13.3568%2010.8493%2013.215%2011.2859%2013.319%2011.6996L14.1979%2015.1931C14.2793%2015.5168%2013.9245%2015.7746%2013.6418%2015.5971L10.5908%2013.6817C10.2296%2013.4549%209.77045%2013.4549%209.40924%2013.6817L6.35828%2015.5971C6.07553%2015.7746%205.72072%2015.5168%205.80217%2015.1931L6.68105%2011.6996C6.7851%2011.2859%206.64322%2010.8493%206.31592%2010.5758L3.55145%208.26607C3.29525%208.05202%203.43078%207.63492%203.76386%207.61233L7.358%207.36863C7.78352%207.33978%208.15498%207.0699%208.31391%206.67412L9.65633%203.3312C9.78074%203.0214%2010.2193%203.0214%2010.3437%203.3312Z%22%20fill%3D%22%23FFBD37%22%20stroke%3D%22%23FFBD37%22%20stroke-width%3D%220.740741%22%2F%3E%0A%3C%2Fsvg%3E%0A" }, o1 = { progress0: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%2210%22%20cy%3D%229.99993%22%20r%3D%226.66667%22%20stroke%3D%22%237A7A7A%22%20stroke-width%3D%220.740741%22%2F%3E%0A%3C%2Fsvg%3E%0A", progress25: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%2210%22%20cy%3D%229.99993%22%20r%3D%226.66667%22%20stroke%3D%22%237A7A7A%22%20stroke-width%3D%220.740741%22%2F%3E%0A%3Cpath%20d%3D%22M16.2963%209.99991C16.2963%209.17307%2016.1335%208.35432%2015.8171%207.59042C15.5006%206.82652%2015.0369%206.13242%2014.4522%205.54776C13.8675%204.96309%2013.1734%204.49931%2012.4095%204.18289C11.6456%203.86647%2010.8269%203.70361%2010%203.70361L10%209.99991H16.2963Z%22%20fill%3D%22%237A7A7A%22%2F%3E%0A%3C%2Fsvg%3E%0A", progress50: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%2210%22%20cy%3D%229.99993%22%20r%3D%226.66667%22%20stroke%3D%22%237A7A7A%22%20stroke-width%3D%220.740741%22%2F%3E%0A%3Cpath%20d%3D%22M10%2016.2962C11.6699%2016.2962%2013.2714%2015.6328%2014.4522%2014.4521C15.633%2013.2713%2016.2963%2011.6698%2016.2963%209.99991C16.2963%208.33003%2015.633%206.72854%2014.4522%205.54776C13.2714%204.36697%2011.6699%203.70361%2010%203.70361L10%209.99991L10%2016.2962Z%22%20fill%3D%22%237A7A7A%22%2F%3E%0A%3C%2Fsvg%3E%0A", progress75: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%2210%22%20cy%3D%229.99993%22%20r%3D%226.66667%22%20stroke%3D%22%237A7A7A%22%20stroke-width%3D%220.740741%22%2F%3E%0A%3Cpath%20d%3D%22M3.70374%209.99991C3.70374%2011.2452%204.07301%2012.4625%204.76485%2013.4979C5.4567%2014.5334%206.44005%2015.3404%207.59054%2015.8169C8.74104%2016.2935%2010.007%2016.4182%2011.2284%2016.1752C12.4497%2015.9323%2013.5716%2015.3326%2014.4522%2014.4521C15.3327%2013.5715%2015.9324%2012.4496%2016.1753%2011.2283C16.4183%2010.0069%2016.2936%208.74092%2015.8171%207.59042C15.3405%206.43992%2014.5335%205.45658%2013.4981%204.76473C12.4626%204.07288%2011.2453%203.70361%2010%203.70361L10%209.99991L3.70374%209.99991Z%22%20fill%3D%22%237A7A7A%22%2F%3E%0A%3C%2Fsvg%3E%0A", progress100: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%2210%22%20cy%3D%229.99993%22%20r%3D%226.66667%22%20stroke%3D%22%237A7A7A%22%20stroke-width%3D%220.740741%22%2F%3E%0A%3Ccircle%20cx%3D%2210%22%20cy%3D%229.99991%22%20r%3D%226.2963%22%20fill%3D%22%237A7A7A%22%2F%3E%0A%3C%2Fsvg%3E%0A" }, l1 = { signal0: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%2214.4764%22%20y%3D%222.98926%22%20width%3D%222.3%22%20height%3D%2214.0597%22%20rx%3D%220.5%22%20fill%3D%22%23E5E5E5%22%2F%3E%0A%3Crect%20x%3D%2210.7255%22%20y%3D%225.93921%22%20width%3D%222.3%22%20height%3D%2211.1096%22%20rx%3D%220.5%22%20fill%3D%22%23E5E5E5%22%2F%3E%0A%3Crect%20x%3D%226.97455%22%20y%3D%229.70435%22%20width%3D%222.3%22%20height%3D%227.3443%22%20rx%3D%220.5%22%20fill%3D%22%23E5E5E5%22%2F%3E%0A%3Crect%20x%3D%223.22363%22%20y%3D%2213.3302%22%20width%3D%222.3%22%20height%3D%223.71851%22%20rx%3D%220.5%22%20fill%3D%22%23E5E5E5%22%2F%3E%0A%3C%2Fsvg%3E%0A", signal25: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%2214.4764%22%20y%3D%222.98926%22%20width%3D%222.3%22%20height%3D%2214.0597%22%20rx%3D%220.5%22%20fill%3D%22%23E5E5E5%22%2F%3E%0A%3Crect%20x%3D%2210.7255%22%20y%3D%225.93921%22%20width%3D%222.3%22%20height%3D%2211.1096%22%20rx%3D%220.5%22%20fill%3D%22%23E5E5E5%22%2F%3E%0A%3Crect%20x%3D%226.97455%22%20y%3D%229.70435%22%20width%3D%222.3%22%20height%3D%227.3443%22%20rx%3D%220.5%22%20fill%3D%22%23E5E5E5%22%2F%3E%0A%3Crect%20x%3D%223.22363%22%20y%3D%2213.3302%22%20width%3D%222.3%22%20height%3D%223.71851%22%20rx%3D%220.5%22%20fill%3D%22%230493EE%22%2F%3E%0A%3C%2Fsvg%3E%0A", signal50: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%2214.4764%22%20y%3D%222.98926%22%20width%3D%222.3%22%20height%3D%2214.0597%22%20rx%3D%220.5%22%20fill%3D%22%23E5E5E5%22%2F%3E%0A%3Crect%20x%3D%2210.7255%22%20y%3D%225.93921%22%20width%3D%222.3%22%20height%3D%2211.1096%22%20rx%3D%220.5%22%20fill%3D%22%23E5E5E5%22%2F%3E%0A%3Crect%20x%3D%226.97455%22%20y%3D%229.70435%22%20width%3D%222.3%22%20height%3D%227.3443%22%20rx%3D%220.5%22%20fill%3D%22%230493EE%22%2F%3E%0A%3Crect%20x%3D%223.22363%22%20y%3D%2213.3302%22%20width%3D%222.3%22%20height%3D%223.71851%22%20rx%3D%220.5%22%20fill%3D%22%230493EE%22%2F%3E%0A%3C%2Fsvg%3E%0A", signal75: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%2214.4764%22%20y%3D%222.98926%22%20width%3D%222.3%22%20height%3D%2214.0597%22%20rx%3D%220.5%22%20fill%3D%22%23E5E5E5%22%2F%3E%0A%3Crect%20x%3D%2210.7255%22%20y%3D%225.93921%22%20width%3D%222.3%22%20height%3D%2211.1096%22%20rx%3D%220.5%22%20fill%3D%22%230493EE%22%2F%3E%0A%3Crect%20x%3D%226.97455%22%20y%3D%229.70435%22%20width%3D%222.3%22%20height%3D%227.3443%22%20rx%3D%220.5%22%20fill%3D%22%230493EE%22%2F%3E%0A%3Crect%20x%3D%223.22363%22%20y%3D%2213.3302%22%20width%3D%222.3%22%20height%3D%223.71851%22%20rx%3D%220.5%22%20fill%3D%22%230493EE%22%2F%3E%0A%3C%2Fsvg%3E%0A", signal100: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%2214.4764%22%20y%3D%222.98926%22%20width%3D%222.3%22%20height%3D%2214.0597%22%20rx%3D%220.5%22%20fill%3D%22%230493EE%22%2F%3E%0A%3Crect%20x%3D%2210.7255%22%20y%3D%225.93933%22%20width%3D%222.3%22%20height%3D%2211.1096%22%20rx%3D%220.5%22%20fill%3D%22%230493EE%22%2F%3E%0A%3Crect%20x%3D%226.97455%22%20y%3D%229.70447%22%20width%3D%222.3%22%20height%3D%227.3443%22%20rx%3D%220.5%22%20fill%3D%22%230493EE%22%2F%3E%0A%3Crect%20x%3D%223.22363%22%20y%3D%2213.3302%22%20width%3D%222.3%22%20height%3D%223.71851%22%20rx%3D%220.5%22%20fill%3D%22%230493EE%22%2F%3E%0A%3C%2Fsvg%3E%0A" }, c1 = { guffaw: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M16.887%2010C16.887%2013.8037%2013.8036%2016.8871%209.99999%2016.8871C6.19638%2016.8871%203.11295%2013.8037%203.11295%2010C3.11295%206.19644%206.19638%203.11301%209.99999%203.11301C13.8036%203.11301%2016.887%206.19644%2016.887%2010Z%22%20fill%3D%22%23FFBD37%22%20stroke%3D%22%238F5F00%22%20stroke-width%3D%220.3%22%2F%3E%0A%3Crect%20x%3D%227.40741%22%20y%3D%227.40735%22%20width%3D%221.48148%22%20height%3D%221.48148%22%20rx%3D%220.740741%22%20fill%3D%22%238F5F00%22%2F%3E%0A%3Crect%20x%3D%2211.1111%22%20y%3D%227.40735%22%20width%3D%221.48148%22%20height%3D%221.48148%22%20rx%3D%220.740741%22%20fill%3D%22%238F5F00%22%2F%3E%0A%3Cpath%20d%3D%22M12.5355%2013.5821C13.0482%2013.1841%2013.3951%2012.6107%2013.5405%2012.0327C13.5934%2011.8226%2013.5051%2011.6349%2013.3518%2011.5331C13.2036%2011.4346%2013.0031%2011.4203%2012.8265%2011.5131C11.0615%2012.4407%208.94609%2012.4427%207.1828%2011.513C7.00629%2011.4199%206.80602%2011.4343%206.65798%2011.5329C6.50518%2011.6346%206.41701%2011.8217%206.46844%2012.0312C6.61029%2012.609%206.95079%2013.1833%207.46449%2013.5821C8.14361%2014.1093%209.05608%2014.3999%2010%2014.3999C10.9439%2014.3999%2011.8564%2014.1093%2012.5355%2013.5821Z%22%20fill%3D%22white%22%20stroke%3D%22%238F5F00%22%20stroke-width%3D%220.4%22%2F%3E%0A%3C%2Fsvg%3E%0A", smile: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%229.99999%22%20cy%3D%2210%22%20r%3D%226.88704%22%20fill%3D%22%23FFBD37%22%20stroke%3D%22%238F5F00%22%20stroke-width%3D%220.3%22%2F%3E%0A%3Crect%20x%3D%227.40741%22%20y%3D%227.40735%22%20width%3D%221.48148%22%20height%3D%221.48148%22%20rx%3D%220.740741%22%20fill%3D%22%238F5F00%22%2F%3E%0A%3Crect%20x%3D%2211.1111%22%20y%3D%227.40735%22%20width%3D%221.48148%22%20height%3D%221.48148%22%20rx%3D%220.740741%22%20fill%3D%22%238F5F00%22%2F%3E%0A%3Cpath%20d%3D%22M7.03705%2011.8518C7.03705%2011.8518%207.77779%2013.7037%2010%2013.7037C12.2222%2013.7037%2012.963%2011.8518%2012.963%2011.8518%22%20stroke%3D%22%238F5F00%22%20stroke-width%3D%220.962963%22%20stroke-linecap%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E%0A", noninductive: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%229.99999%22%20cy%3D%2210%22%20r%3D%226.88704%22%20fill%3D%22%23FFBD37%22%20stroke%3D%22%238F5F00%22%20stroke-width%3D%220.3%22%2F%3E%0A%3Crect%20x%3D%227.40741%22%20y%3D%227.9259%22%20width%3D%221.48148%22%20height%3D%221.11111%22%20rx%3D%220.555556%22%20fill%3D%22%238F5F00%22%2F%3E%0A%3Crect%20x%3D%2211.1111%22%20y%3D%227.9259%22%20width%3D%221.48148%22%20height%3D%221.11111%22%20rx%3D%220.555556%22%20fill%3D%22%238F5F00%22%2F%3E%0A%3Cpath%20d%3D%22M7.03705%2012.5927C7.03705%2012.5927%208.14816%2012.5927%2010.3704%2012.5927C12.5926%2012.5927%2012.963%2012.5927%2012.963%2012.5927%22%20stroke%3D%22%238F5F00%22%20stroke-width%3D%220.962963%22%20stroke-linecap%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E%0A", dissatisfied: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%229.99999%22%20cy%3D%2210%22%20r%3D%226.88704%22%20fill%3D%22%23FFBD37%22%20stroke%3D%22%238F5F00%22%20stroke-width%3D%220.3%22%2F%3E%0A%3Crect%20x%3D%227.40741%22%20y%3D%227.40735%22%20width%3D%221.48148%22%20height%3D%221.48148%22%20rx%3D%220.740741%22%20fill%3D%22%238F5F00%22%2F%3E%0A%3Crect%20x%3D%2211.1111%22%20y%3D%227.40735%22%20width%3D%221.48148%22%20height%3D%221.48148%22%20rx%3D%220.740741%22%20fill%3D%22%238F5F00%22%2F%3E%0A%3Cpath%20d%3D%22M7.03705%2013.7037C7.03705%2013.7037%207.77779%2011.8519%2010%2011.8519C12.2222%2011.8519%2012.963%2013.7037%2012.963%2013.7037%22%20stroke%3D%22%238F5F00%22%20stroke-width%3D%220.962963%22%20stroke-linecap%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E%0A", impatient: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%229.99999%22%20cy%3D%2210%22%20r%3D%226.88704%22%20fill%3D%22%23FFBD37%22%20stroke%3D%22%238F5F00%22%20stroke-width%3D%220.3%22%2F%3E%0A%3Crect%20x%3D%227.40741%22%20y%3D%227.40735%22%20width%3D%221.48148%22%20height%3D%221.48148%22%20rx%3D%220.740741%22%20fill%3D%22%238F5F00%22%2F%3E%0A%3Crect%20x%3D%2211.1111%22%20y%3D%227.40735%22%20width%3D%221.48148%22%20height%3D%221.48148%22%20rx%3D%220.740741%22%20fill%3D%22%238F5F00%22%2F%3E%0A%3Cpath%20d%3D%22M7.47573%2011.731C6.96306%2012.129%206.61613%2012.7024%206.47071%2013.2804C6.41784%2013.4905%206.50617%2013.6782%206.65942%2013.78C6.80761%2013.8785%207.00813%2013.8928%207.18477%2013.8C8.9498%2012.8724%2011.0652%2012.8704%2012.8285%2013.8002C13.005%2013.8932%2013.2052%2013.8788%2013.3533%2013.7802C13.5061%2013.6785%2013.5942%2013.4914%2013.5428%2013.2819C13.401%2012.7041%2013.0605%2012.1298%2012.5468%2011.731C11.8676%2011.2038%2010.9552%2010.9132%2010.0112%2010.9132C9.06732%2010.9132%208.15485%2011.2038%207.47573%2011.731Z%22%20fill%3D%22white%22%20stroke%3D%22%238F5F00%22%20stroke-width%3D%220.4%22%2F%3E%0A%3C%2Fsvg%3E%0A" }, u1 = /* @__PURE__ */ JSON.parse('{"down-red":"data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M8.90467%203.99244C8.84611%204.1338%208.84611%204.31301%208.84611%204.67143V13.716L5.92068%2010.7906C5.66724%2010.5371%205.54052%2010.4104%205.39916%2010.3519C5.21067%2010.2738%204.9989%2010.2738%204.81041%2010.3519C4.66905%2010.4104%204.54233%2010.5371%204.28889%2010.7906C4.03545%2011.044%203.90873%2011.1707%203.85018%2011.3121C3.77211%2011.5006%203.77211%2011.7124%203.85018%2011.9008C3.90873%2012.0422%204.03545%2012.1689%204.28889%2012.4224L9.03476%2017.1682C9.07839%2017.2127%209.12737%2017.2617%209.18231%2017.3166L9.18239%2017.3167L9.18241%2017.3167C9.40545%2017.5398%209.53035%2017.6647%209.65346%2017.7313C9.67085%2017.7408%209.6882%2017.7492%209.70577%2017.7564C9.89425%2017.8345%2010.106%2017.8345%2010.2945%2017.7564C10.4359%2017.6979%2010.5626%2017.5712%2010.816%2017.3177C10.8986%2017.2352%2010.9677%2017.1661%2011.0253%2017.1056L15.7095%2012.4214L15.7095%2012.4213C15.963%2012.1679%2016.0897%2012.0412%2016.1482%2011.8998C16.2263%2011.7114%2016.2263%2011.4996%2016.1482%2011.3111C16.0897%2011.1697%2015.963%2011.043%2015.7095%2010.7896C15.4561%2010.5361%2015.3294%2010.4094%2015.188%2010.3509C14.9995%2010.2728%2014.7878%2010.2728%2014.5993%2010.3509C14.4579%2010.4094%2014.3312%2010.5361%2014.0778%2010.7896L14.0777%2010.7896L11.1538%2013.7135V4.67142C11.1538%204.31301%2011.1538%204.1338%2011.0953%203.99244C11.0172%203.80395%2010.8674%203.6542%2010.6789%203.57613C10.5376%203.51758%2010.3584%203.51758%209.99996%203.51758C9.64154%203.51758%209.46233%203.51758%209.32097%203.57613C9.13249%203.6542%208.98274%203.80395%208.90467%203.99244Z%22%20fill%3D%22%23FE4B4B%22%2F%3E%0A%3C%2Fsvg%3E%0A","right-gold":"data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M3.32508%2011.7609C3.46644%2011.8194%203.64565%2011.8194%204.00407%2011.8194H13.049L10.1235%2014.745C9.87002%2014.9984%209.7433%2015.1251%209.68475%2015.2665C9.60668%2015.455%209.60668%2015.6668%209.68475%2015.8552C9.7433%2015.9966%209.87002%2016.1233%2010.1235%2016.3768C10.3769%2016.6302%2010.5036%2016.7569%2010.645%2016.8155C10.8335%2016.8935%2011.0452%2016.8935%2011.2337%2016.8155C11.3751%2016.7569%2011.5018%2016.6302%2011.7552%2016.3768L16.5105%2011.6215C16.5524%2011.5803%2016.5983%2011.5344%2016.6493%2011.4834L16.6495%2011.4831C16.8561%2011.2765%2016.9785%2011.1542%2017.0484%2011.0394C17.0648%2011.0128%2017.0782%2010.9866%2017.0893%2010.9599C17.1674%2010.7714%2017.1674%2010.5596%2017.0893%2010.3711C17.0308%2010.2298%2016.904%2010.1031%2016.6506%209.84962C16.5685%209.76752%2016.4997%209.69872%2016.4394%209.64123L11.7542%204.95601C11.5007%204.70257%2011.374%204.57585%2011.2327%204.5173C11.0442%204.43923%2010.8324%204.43923%2010.6439%204.5173C10.5026%204.57585%2010.3758%204.70257%2010.1224%204.95601L10.1224%204.95601C9.86895%205.20945%209.74223%205.33617%209.68368%205.47753C9.60561%205.66601%209.60561%205.87779%209.68368%206.06627C9.74223%206.20764%209.86895%206.33436%2010.1224%206.5878L13.0463%209.51175H4.00407C3.64565%209.51175%203.46644%209.51175%203.32508%209.5703C3.1366%209.64837%202.98685%209.79812%202.90877%209.98661C2.85022%2010.128%202.85022%2010.3072%202.85022%2010.6656C2.85022%2011.024%202.85022%2011.2032%202.90877%2011.3446C2.98685%2011.5331%203.1366%2011.6828%203.32508%2011.7609Z%22%20fill%3D%22%23FFBD37%22%2F%3E%0A%3C%2Fsvg%3E%0A","up-green":"data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11.0936%2017.3406C11.1522%2017.1992%2011.1522%2017.02%2011.1522%2016.6616V7.61701L14.0776%2010.5424C14.3311%2010.7959%2014.4578%2010.9226%2014.5991%2010.9811C14.7876%2011.0592%2014.9994%2011.0592%2015.1879%2010.9811C15.3292%2010.9226%2015.456%2010.7959%2015.7094%2010.5424C15.9628%2010.289%2016.0896%2010.1623%2016.1481%2010.0209C16.2262%209.83243%2016.2262%209.62066%2016.1481%209.43217C16.0896%209.29081%2015.9628%209.16409%2015.7094%208.91065L10.9645%204.16576C10.9207%204.12105%2010.8714%204.07178%2010.8161%204.01648L10.8159%204.0163C10.5916%203.792%2010.4666%203.66696%2010.3428%203.60058C10.3261%203.59154%2010.3094%203.58358%2010.2925%203.57658C10.104%203.49851%209.89226%203.49851%209.70378%203.57658C9.56242%203.63514%209.4357%203.76186%209.18226%204.0153C9.09955%204.09801%209.03034%204.16722%208.97258%204.22785L4.28878%208.91166C4.03534%209.1651%203.90862%209.29182%203.85006%209.43318C3.77199%209.62166%203.77199%209.83344%203.85006%2010.0219C3.90862%2010.1633%204.03534%2010.29%204.28878%2010.5434C4.54221%2010.7969%204.66893%2010.9236%204.8103%2010.9822C4.99878%2011.0602%205.21056%2011.0602%205.39904%2010.9822C5.5404%2010.9236%205.66712%2010.7969%205.92056%2010.5434L5.92056%2010.5434L8.84449%207.61951V16.6616C8.84449%2017.02%208.84449%2017.1992%208.90305%2017.3406C8.98112%2017.5291%209.13087%2017.6788%209.31935%2017.7569C9.46072%2017.8154%209.63992%2017.8154%209.99834%2017.8154C10.3568%2017.8154%2010.536%2017.8154%2010.6773%2017.7569C10.8658%2017.6788%2011.0156%2017.5291%2011.0936%2017.3406Z%22%20fill%3D%22%2359D01E%22%2F%3E%0A%3C%2Fsvg%3E%0A","rightAndDown-gold":"data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M4.5062%206.72126C4.56476%206.86262%204.69148%206.98934%204.94492%207.24278L11.3404%2013.6382L7.20313%2013.6382C6.84471%2013.6382%206.66551%2013.6382%206.52414%2013.6968C6.33566%2013.7749%206.18591%2013.9246%206.10784%2014.1131C6.04928%2014.2545%206.04928%2014.4337%206.04928%2014.7921C6.04928%2015.1505%206.04928%2015.3297%206.10784%2015.4711C6.18591%2015.6596%206.33566%2015.8093%206.52414%2015.8874C6.66551%2015.9459%206.84471%2015.9459%207.20313%2015.9459L13.9194%2015.9459C13.9805%2015.9465%2014.0484%2015.9465%2014.1243%2015.9465H14.1243C14.4353%2015.9465%2014.6114%2015.9465%2014.7449%2015.9082C14.7659%2015.9023%2014.7859%2015.8954%2014.8052%2015.8874C14.9937%2015.8093%2015.1434%2015.6596%2015.2215%2015.4711C15.2801%2015.3297%2015.2801%2015.1505%2015.2801%2014.7921C15.2801%2014.6767%2015.2801%2014.5799%2015.2781%2014.497L15.2781%207.86957C15.2781%207.51115%2015.2781%207.33194%2015.2195%207.19058C15.1415%207.0021%2014.9917%206.85235%2014.8032%206.77428C14.6619%206.71572%2014.4827%206.71572%2014.1243%206.71572C13.7658%206.71572%2013.5866%206.71572%2013.4453%206.77428C13.2568%206.85235%2013.107%207.0021%2013.029%207.19058C12.9704%207.33194%2012.9704%207.51115%2012.9704%207.86957L12.9704%2012.0047L6.5767%205.61099C6.32326%205.35755%206.19654%205.23083%206.05518%205.17228C5.8667%205.09421%205.65492%205.09421%205.46644%205.17228C5.32508%205.23083%205.19836%205.35755%204.94492%205.61099C4.69148%205.86443%204.56476%205.99115%204.5062%206.13251C4.42813%206.32099%204.42813%206.53277%204.5062%206.72126Z%22%20fill%3D%22%23FFBD37%22%2F%3E%0A%3C%2Fsvg%3E%0A","rightAndUp-gold":"data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6.05431%2016.1597C6.19567%2016.1012%206.32239%2015.9745%206.57583%2015.721L12.9712%209.32568L12.9712%2013.4626C12.9712%2013.821%2012.9712%2014.0002%2013.0297%2014.1416C13.1078%2014.3301%2013.2576%2014.4798%2013.446%2014.5579C13.5874%2014.6164%2013.7666%2014.6164%2014.125%2014.6164C14.4834%2014.6164%2014.6626%2014.6164%2014.804%2014.5579C14.9925%2014.4798%2015.1422%2014.3301%2015.2203%2014.1416C15.2789%2014.0002%2015.2789%2013.821%2015.2789%2013.4626L15.2789%206.75233C15.2795%206.68972%2015.2795%206.62004%2015.2795%206.54182L15.2795%206.54157C15.2795%206.22585%2015.2795%206.04918%2015.2395%205.91495C15.2339%205.89605%2015.2276%205.878%2015.2203%205.86053C15.1422%205.67204%2014.9925%205.52229%2014.804%205.44422C14.6626%205.38567%2014.4834%205.38567%2014.125%205.38567L14.125%205.38567C14.0075%205.38567%2013.9093%205.38567%2013.8254%205.38773L7.20256%205.38773C6.84414%205.38773%206.66493%205.38773%206.52357%205.44628C6.33509%205.52436%206.18534%205.6741%206.10727%205.86259C6.04871%206.00395%206.04871%206.18315%206.04871%206.54156V6.54157L6.04871%206.54159C6.04871%206.9%206.04871%207.0792%206.10727%207.22056C6.18534%207.40905%206.33509%207.55879%206.52357%207.63687C6.66493%207.69542%206.84414%207.69542%207.20256%207.69542H11.3379L4.94405%2014.0892C4.69061%2014.3427%204.56389%2014.4694%204.50533%2014.6108C4.42726%2014.7992%204.42726%2015.011%204.50533%2015.1995C4.56389%2015.3409%204.69061%2015.4676%204.94405%2015.721C5.19749%2015.9745%205.32421%2016.1012%205.46557%2016.1597C5.65405%2016.2378%205.86583%2016.2378%206.05431%2016.1597Z%22%20fill%3D%22%23FFBD37%22%2F%3E%0A%3C%2Fsvg%3E%0A","down-gray":"data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M8.90467%203.99244C8.84611%204.1338%208.84611%204.31301%208.84611%204.67143V13.716L5.92068%2010.7906C5.66724%2010.5371%205.54052%2010.4104%205.39916%2010.3519C5.21067%2010.2738%204.9989%2010.2738%204.81041%2010.3519C4.66905%2010.4104%204.54233%2010.5371%204.28889%2010.7906C4.03545%2011.044%203.90873%2011.1707%203.85018%2011.3121C3.77211%2011.5006%203.77211%2011.7124%203.85018%2011.9008C3.90873%2012.0422%204.03545%2012.1689%204.28889%2012.4224L9.03476%2017.1682C9.07839%2017.2127%209.12737%2017.2617%209.18231%2017.3166L9.18239%2017.3167L9.18241%2017.3167C9.40545%2017.5398%209.53035%2017.6647%209.65346%2017.7313C9.67085%2017.7408%209.6882%2017.7492%209.70577%2017.7564C9.89425%2017.8345%2010.106%2017.8345%2010.2945%2017.7564C10.4359%2017.6979%2010.5626%2017.5712%2010.816%2017.3177C10.8986%2017.2352%2010.9677%2017.1661%2011.0253%2017.1056L15.7095%2012.4214L15.7095%2012.4213C15.963%2012.1679%2016.0897%2012.0412%2016.1482%2011.8998C16.2263%2011.7114%2016.2263%2011.4996%2016.1482%2011.3111C16.0897%2011.1697%2015.963%2011.043%2015.7095%2010.7896C15.4561%2010.5361%2015.3294%2010.4094%2015.188%2010.3509C14.9995%2010.2728%2014.7878%2010.2728%2014.5993%2010.3509C14.4579%2010.4094%2014.3312%2010.5361%2014.0778%2010.7896L14.0777%2010.7896L11.1538%2013.7135V4.67142C11.1538%204.31301%2011.1538%204.1338%2011.0953%203.99244C11.0172%203.80395%2010.8674%203.6542%2010.6789%203.57613C10.5376%203.51758%2010.3584%203.51758%209.99996%203.51758C9.64154%203.51758%209.46233%203.51758%209.32097%203.57613C9.13249%203.6542%208.98274%203.80395%208.90467%203.99244Z%22%20fill%3D%22%23999999%22%2F%3E%0A%3C%2Fsvg%3E%0A","right-gray":"data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M3.32508%2011.7609C3.46644%2011.8194%203.64565%2011.8194%204.00407%2011.8194H13.049L10.1235%2014.745C9.87002%2014.9984%209.7433%2015.1251%209.68475%2015.2665C9.60668%2015.455%209.60668%2015.6668%209.68475%2015.8552C9.7433%2015.9966%209.87002%2016.1233%2010.1235%2016.3768C10.3769%2016.6302%2010.5036%2016.7569%2010.645%2016.8155C10.8335%2016.8935%2011.0452%2016.8935%2011.2337%2016.8155C11.3751%2016.7569%2011.5018%2016.6302%2011.7552%2016.3768L16.5105%2011.6215C16.5524%2011.5803%2016.5983%2011.5344%2016.6493%2011.4834L16.6495%2011.4831C16.8561%2011.2765%2016.9785%2011.1542%2017.0484%2011.0394C17.0648%2011.0128%2017.0782%2010.9866%2017.0893%2010.9599C17.1674%2010.7714%2017.1674%2010.5596%2017.0893%2010.3711C17.0308%2010.2298%2016.904%2010.1031%2016.6506%209.84962C16.5685%209.76752%2016.4997%209.69872%2016.4394%209.64123L11.7542%204.95601C11.5007%204.70257%2011.374%204.57585%2011.2327%204.5173C11.0442%204.43923%2010.8324%204.43923%2010.6439%204.5173C10.5026%204.57585%2010.3758%204.70257%2010.1224%204.95601L10.1224%204.95601C9.86895%205.20945%209.74223%205.33617%209.68368%205.47753C9.60561%205.66601%209.60561%205.87779%209.68368%206.06627C9.74223%206.20764%209.86895%206.33436%2010.1224%206.5878L13.0463%209.51175H4.00407C3.64565%209.51175%203.46644%209.51175%203.32508%209.5703C3.1366%209.64837%202.98685%209.79812%202.90877%209.98661C2.85022%2010.128%202.85022%2010.3072%202.85022%2010.6656C2.85022%2011.024%202.85022%2011.2032%202.90877%2011.3446C2.98685%2011.5331%203.1366%2011.6828%203.32508%2011.7609Z%22%20fill%3D%22%23999999%22%2F%3E%0A%3C%2Fsvg%3E%0A","up-gray":"data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11.0936%2017.3406C11.1522%2017.1992%2011.1522%2017.02%2011.1522%2016.6616V7.61701L14.0776%2010.5424C14.3311%2010.7959%2014.4578%2010.9226%2014.5991%2010.9811C14.7876%2011.0592%2014.9994%2011.0592%2015.1879%2010.9811C15.3292%2010.9226%2015.456%2010.7959%2015.7094%2010.5424C15.9628%2010.289%2016.0896%2010.1623%2016.1481%2010.0209C16.2262%209.83243%2016.2262%209.62066%2016.1481%209.43217C16.0896%209.29081%2015.9628%209.16409%2015.7094%208.91065L10.9645%204.16576C10.9207%204.12105%2010.8714%204.07178%2010.8161%204.01648L10.8159%204.0163C10.5916%203.792%2010.4666%203.66696%2010.3428%203.60058C10.3261%203.59154%2010.3094%203.58358%2010.2925%203.57658C10.104%203.49851%209.89226%203.49851%209.70378%203.57658C9.56242%203.63514%209.4357%203.76186%209.18226%204.0153C9.09955%204.09801%209.03034%204.16722%208.97258%204.22785L4.28878%208.91166C4.03534%209.1651%203.90862%209.29182%203.85006%209.43318C3.77199%209.62166%203.77199%209.83344%203.85006%2010.0219C3.90862%2010.1633%204.03534%2010.29%204.28878%2010.5434C4.54221%2010.7969%204.66893%2010.9236%204.8103%2010.9822C4.99878%2011.0602%205.21056%2011.0602%205.39904%2010.9822C5.5404%2010.9236%205.66712%2010.7969%205.92056%2010.5434L5.92056%2010.5434L8.84449%207.61951V16.6616C8.84449%2017.02%208.84449%2017.1992%208.90305%2017.3406C8.98112%2017.5291%209.13087%2017.6788%209.31935%2017.7569C9.46072%2017.8154%209.63992%2017.8154%209.99834%2017.8154C10.3568%2017.8154%2010.536%2017.8154%2010.6773%2017.7569C10.8658%2017.6788%2011.0156%2017.5291%2011.0936%2017.3406Z%22%20fill%3D%22%23999999%22%2F%3E%0A%3C%2Fsvg%3E%0A","rightAndDown-gray":"data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M4.5062%206.72126C4.56476%206.86262%204.69148%206.98934%204.94492%207.24278L11.3404%2013.6382L7.20313%2013.6382C6.84471%2013.6382%206.66551%2013.6382%206.52414%2013.6968C6.33566%2013.7749%206.18591%2013.9246%206.10784%2014.1131C6.04928%2014.2545%206.04928%2014.4337%206.04928%2014.7921C6.04928%2015.1505%206.04928%2015.3297%206.10784%2015.4711C6.18591%2015.6596%206.33566%2015.8093%206.52414%2015.8874C6.66551%2015.9459%206.84471%2015.9459%207.20313%2015.9459L13.9194%2015.9459C13.9805%2015.9465%2014.0484%2015.9465%2014.1243%2015.9465H14.1243C14.4353%2015.9465%2014.6114%2015.9465%2014.7449%2015.9082C14.7659%2015.9023%2014.7859%2015.8954%2014.8052%2015.8874C14.9937%2015.8093%2015.1434%2015.6596%2015.2215%2015.4711C15.2801%2015.3297%2015.2801%2015.1505%2015.2801%2014.7921C15.2801%2014.6767%2015.2801%2014.5799%2015.2781%2014.497L15.2781%207.86957C15.2781%207.51115%2015.2781%207.33194%2015.2195%207.19058C15.1415%207.0021%2014.9917%206.85235%2014.8032%206.77428C14.6619%206.71572%2014.4827%206.71572%2014.1243%206.71572C13.7658%206.71572%2013.5866%206.71572%2013.4453%206.77428C13.2568%206.85235%2013.107%207.0021%2013.029%207.19058C12.9704%207.33194%2012.9704%207.51115%2012.9704%207.86957L12.9704%2012.0047L6.5767%205.61099C6.32326%205.35755%206.19654%205.23083%206.05518%205.17228C5.8667%205.09421%205.65492%205.09421%205.46644%205.17228C5.32508%205.23083%205.19836%205.35755%204.94492%205.61099C4.69148%205.86443%204.56476%205.99115%204.5062%206.13251C4.42813%206.32099%204.42813%206.53277%204.5062%206.72126Z%22%20fill%3D%22%23999999%22%2F%3E%0A%3C%2Fsvg%3E%0A","rightAndUp-gray":"data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6.05431%2016.1597C6.19567%2016.1012%206.32239%2015.9745%206.57583%2015.721L12.9712%209.32568L12.9712%2013.4626C12.9712%2013.821%2012.9712%2014.0002%2013.0297%2014.1416C13.1078%2014.3301%2013.2576%2014.4798%2013.446%2014.5579C13.5874%2014.6164%2013.7666%2014.6164%2014.125%2014.6164C14.4834%2014.6164%2014.6626%2014.6164%2014.804%2014.5579C14.9925%2014.4798%2015.1422%2014.3301%2015.2203%2014.1416C15.2789%2014.0002%2015.2789%2013.821%2015.2789%2013.4626L15.2789%206.75233C15.2795%206.68972%2015.2795%206.62004%2015.2795%206.54182L15.2795%206.54157C15.2795%206.22585%2015.2795%206.04918%2015.2395%205.91495C15.2339%205.89605%2015.2276%205.878%2015.2203%205.86053C15.1422%205.67204%2014.9925%205.52229%2014.804%205.44422C14.6626%205.38567%2014.4834%205.38567%2014.125%205.38567L14.125%205.38567C14.0075%205.38567%2013.9093%205.38567%2013.8254%205.38773L7.20256%205.38773C6.84414%205.38773%206.66493%205.38773%206.52357%205.44628C6.33509%205.52436%206.18534%205.6741%206.10727%205.86259C6.04871%206.00395%206.04871%206.18315%206.04871%206.54156V6.54157L6.04871%206.54159C6.04871%206.9%206.04871%207.0792%206.10727%207.22056C6.18534%207.40905%206.33509%207.55879%206.52357%207.63687C6.66493%207.69542%206.84414%207.69542%207.20256%207.69542H11.3379L4.94405%2014.0892C4.69061%2014.3427%204.56389%2014.4694%204.50533%2014.6108C4.42726%2014.7992%204.42726%2015.011%204.50533%2015.1995C4.56389%2015.3409%204.69061%2015.4676%204.94405%2015.721C5.19749%2015.9745%205.32421%2016.1012%205.46557%2016.1597C5.65405%2016.2378%205.86583%2016.2378%206.05431%2016.1597Z%22%20fill%3D%22%23999999%22%2F%3E%0A%3C%2Fsvg%3E%0A"}'), d1 = { cross: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%223.70374%22%20y%3D%228.14795%22%20width%3D%2212.5926%22%20height%3D%223.7037%22%20rx%3D%220.740741%22%20fill%3D%22%23FFBD37%22%2F%3E%0A%3C%2Fsvg%3E%0A", up: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9.44533%205.81157C9.74012%205.47858%2010.2598%205.47858%2010.5546%205.81157L16.2868%2012.2867C16.71%2012.7647%2016.3706%2013.5184%2015.7322%2013.5184H4.26776C3.62933%2013.5184%203.28995%2012.7647%203.71313%2012.2867L9.44533%205.81157Z%22%20fill%3D%22%2359D01E%22%2F%3E%0A%3C%2Fsvg%3E%0A", down: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.5547%2014.1884C10.2599%2014.5214%209.74019%2014.5214%209.4454%2014.1884L3.71321%207.71335C3.29002%207.23532%203.6294%206.48161%204.26784%206.48161L15.7322%206.48161C16.3707%206.48161%2016.7101%207.23532%2016.2869%207.71335L10.5547%2014.1884Z%22%20fill%3D%22%23FE4B4B%22%2F%3E%0A%3C%2Fsvg%3E%0A", "rhomboid-red": "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M2.1415%2011.1984C1.8412%2010.9074%201.8412%2010.4256%202.1415%2010.1346L9.48467%203.01785C9.77196%202.73942%2010.2284%202.73942%2010.5157%203.01786L17.8586%2010.1346C18.1589%2010.4256%2018.1589%2010.9074%2017.8586%2011.1984L10.5157%2018.3151C10.2284%2018.5936%209.77196%2018.5936%209.48467%2018.3152L2.1415%2011.1984Z%22%20fill%3D%22%23FE4B4B%22%2F%3E%0A%3C%2Fsvg%3E%0A", "roundness-greed": "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%2210%22%20cy%3D%2210.6664%22%20r%3D%227.03704%22%20fill%3D%22%2359D01E%22%2F%3E%0A%3C%2Fsvg%3E%0A", "roundness-gold": "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%2210%22%20cy%3D%2210.6664%22%20r%3D%227.03704%22%20fill%3D%22%23FFBD37%22%2F%3E%0A%3C%2Fsvg%3E%0A", "roundness-red": "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%2210%22%20cy%3D%2210.6664%22%20r%3D%227.03704%22%20fill%3D%22%23FE4B4B%22%2F%3E%0A%3C%2Fsvg%3E%0A", "roundness-pink": "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%2210%22%20cy%3D%2210.6664%22%20r%3D%227.03704%22%20fill%3D%22%23FB9D9D%22%2F%3E%0A%3C%2Fsvg%3E%0A", "roundness-gray": "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%2210%22%20cy%3D%2210.6664%22%20r%3D%227.03704%22%20fill%3D%22%23999999%22%2F%3E%0A%3C%2Fsvg%3E%0A", "roundness-black": "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%2210%22%20cy%3D%2210.6664%22%20r%3D%227.03704%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E%0A", "triangle-gold": "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_613_237)%22%3E%0A%3Cpath%20d%3D%22M9.32308%204.41301C9.58368%203.82623%2010.4164%203.82623%2010.677%204.413L15.9526%2016.2917C16.1701%2016.7815%2015.8115%2017.3331%2015.2756%2017.3331H4.72454C4.18858%2017.3331%203.83002%2016.7815%204.04756%2016.2917L9.32308%204.41301Z%22%20fill%3D%22%23FFBD37%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_613_237%22%3E%0A%3Crect%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22white%22%20transform%3D%22translate(0%200.666504)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A", "indicate-greed": "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%222.76941%22%20y%3D%222.76941%22%20width%3D%2214.4612%22%20height%3D%2214.4612%22%20rx%3D%223%22%20fill%3D%22black%22%2F%3E%0A%3Ccircle%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%224.5%22%20fill%3D%22%2359D01E%22%2F%3E%0A%3C%2Fsvg%3E%0A", "indicate-gold": "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%222.76941%22%20y%3D%222.76941%22%20width%3D%2214.4612%22%20height%3D%2214.4612%22%20rx%3D%223%22%20fill%3D%22black%22%2F%3E%0A%3Ccircle%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%224.5%22%20fill%3D%22%23FFBD37%22%2F%3E%0A%3C%2Fsvg%3E%0A", "indicate-red": "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%222.76941%22%20y%3D%222.76941%22%20width%3D%2214.4612%22%20height%3D%2214.4612%22%20rx%3D%223%22%20fill%3D%22black%22%2F%3E%0A%3Ccircle%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%224.5%22%20fill%3D%22%23FE4B4B%22%2F%3E%0A%3C%2Fsvg%3E%0A" }, h1 = { mistake2: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M4.12194%206.33702C4.1805%206.47839%204.30722%206.6051%204.56066%206.85854L8.36822%2010.6661L4.56062%2014.4737C4.30718%2014.7272%204.18046%2014.8539%204.12191%2014.9952C4.04384%2015.1837%204.04384%2015.3955%204.12191%2015.584C4.18046%2015.7253%204.30718%2015.8521%204.56062%2016.1055C4.81406%2016.3589%204.94078%2016.4857%205.08214%2016.5442C5.27062%2016.6223%205.4824%2016.6223%205.67089%2016.5442C5.81225%2016.4857%205.93897%2016.3589%206.19241%2016.1055L10%2012.2979L13.8074%2016.1053C14.0609%2016.3588%2014.1876%2016.4855%2014.329%2016.544C14.5174%2016.6221%2014.7292%2016.6221%2014.9177%2016.544C15.0591%2016.4855%2015.1858%2016.3588%2015.4392%2016.1053L15.4392%2016.1053C15.6927%2015.8519%2015.8194%2015.7252%2015.8779%2015.5838C15.956%2015.3953%2015.956%2015.1835%2015.8779%2014.9951C15.8194%2014.8537%2015.6927%2014.727%2015.4392%2014.4735L15.4392%2014.4735L11.6318%2010.6661L15.4392%206.85872C15.6926%206.60528%2015.8193%206.47856%2015.8779%206.3372C15.956%206.14871%2015.956%205.93694%2015.8779%205.74845C15.8193%205.60709%2015.6926%205.48037%2015.4392%205.22693C15.1857%204.97349%2015.059%204.84677%2014.9177%204.78822C14.7292%204.71015%2014.5174%204.71015%2014.3289%204.78822C14.1876%204.84677%2014.0608%204.97349%2013.8074%205.22693L10%209.03433L6.19244%205.22676C5.939%204.97332%205.81228%204.8466%205.67092%204.78805C5.48244%204.70997%205.27066%204.70997%205.08218%204.78805C4.94082%204.8466%204.8141%204.97332%204.56066%205.22676L4.56066%205.22676C4.30722%205.4802%204.1805%205.60692%204.12194%205.74828C4.04387%205.93676%204.04387%206.14854%204.12194%206.33702Z%22%20fill%3D%22%23FE4B4B%22%2F%3E%0A%3C%2Fsvg%3E%0A", warn2: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8.49778%205.00963C8.48513%204.56774%208.47881%204.3468%208.56086%204.17746C8.63301%204.02856%208.75124%203.90689%208.89802%203.83052C9.06494%203.74365%209.28597%203.74365%209.72805%203.74365H10.272C10.714%203.74365%2010.9351%203.74365%2011.102%203.83052C11.2488%203.9069%2011.367%204.02856%2011.4392%204.17746C11.5212%204.3468%2011.5149%204.56775%2011.5022%205.00964L11.2644%2013.3173C11.2524%2013.737%2011.2464%2013.9468%2011.1609%2014.1065C11.0857%2014.2471%2010.9687%2014.3609%2010.826%2014.432C10.6639%2014.5129%2010.454%2014.5129%2010.0342%2014.5129H9.96582C9.54601%2014.5129%209.33611%2014.5129%209.17397%2014.432C9.0313%2014.3609%208.91426%2014.2471%208.83904%2014.1065C8.75357%2013.9468%208.74756%2013.737%208.73555%2013.3173L8.49778%205.00963Z%22%20fill%3D%22%23FFBD37%22%2F%3E%0A%3Crect%20x%3D%228.76917%22%20y%3D%2215.2817%22%20width%3D%222.46154%22%20height%3D%222.46154%22%20rx%3D%220.769231%22%20fill%3D%22%23FFBD37%22%2F%3E%0A%3C%2Fsvg%3E%0A", correct2: "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_613_248)%22%3E%0A%3Cpath%20d%3D%22M15.689%205.69723C15.5476%205.75578%2015.4209%205.8825%2015.1675%206.13594L7.82436%2013.4791L4.83279%2010.4875C4.57935%2010.2341%204.45263%2010.1073%204.31127%2010.0488C4.12278%209.97071%203.91101%209.97071%203.72252%2010.0488C3.58116%2010.1073%203.45444%2010.2341%203.201%2010.4875C2.94756%2010.7409%202.82084%2010.8676%202.76229%2011.009C2.68422%2011.1975%202.68422%2011.4093%202.76229%2011.5978C2.82084%2011.7391%202.94756%2011.8658%203.201%2012.1193L7.0085%2015.9268C7.26194%2016.1802%207.38866%2016.3069%207.53002%2016.3655C7.7185%2016.4436%207.93028%2016.4436%208.11876%2016.3655C8.26013%2016.3069%208.38685%2016.1802%208.64028%2015.9268C8.66387%2015.9032%208.68636%2015.8807%208.7078%2015.8592L16.7993%207.76772C17.0527%207.51428%2017.1794%207.38756%2017.238%207.2462C17.3161%207.05772%2017.3161%206.84594%2017.238%206.65746C17.1794%206.5161%2017.0527%206.38938%2016.7993%206.13594C16.5458%205.8825%2016.4191%205.75578%2016.2777%205.69723C16.0893%205.61915%2015.8775%205.61915%2015.689%205.69723Z%22%20fill%3D%22%2359D01E%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_613_248%22%3E%0A%3Crect%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22white%22%20transform%3D%22translate(0%200.666504)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" }, g1 = { "flag-green": "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M15.4274%204.74935C14.0982%205.1012%2013.1363%205.13675%2012.3604%205.03379C11.5776%204.93009%2010.9487%204.68342%2010.2456%204.40416L10.2246%204.39527C9.53411%204.1212%208.76945%203.8175%207.81312%203.69157C6.84279%203.56268%205.71016%203.61898%204.24802%204.0049C4.09343%204.04217%203.95538%204.13393%203.85649%204.26515C3.7576%204.39636%203.70374%204.55925%203.70374%204.72712V17.3197C3.70374%2017.5162%203.79534%2017.7046%203.92654%2017.8435C4.05773%2017.9824%204.25893%2018.0605%204.44448%2018.0605C4.63002%2018.0605%204.84911%2017.9824%204.98031%2017.8435C5.11151%2017.7046%205.18522%2017.5162%205.18522%2017.3197V14.9123V12.5049C6.24649%2012.2738%206.97081%2012.2605%207.63962%2012.3486C8.42246%2012.4523%209.05139%2012.699%209.75448%2012.9782L9.77546%2012.9871C10.466%2013.2612%2011.2306%2013.5649%2012.1869%2013.6908C13.1601%2013.8197%2014.2976%2013.7627%2015.7667%2013.3738C15.8866%2013.3421%2016.0727%2013.2135%2016.1483%2013.111C16.2238%2013.0084%2016.2963%2012.8204%2016.2963%2012.6553V5.46787C16.2963%205.35535%2016.2721%205.24432%2016.2255%205.1432C16.1788%205.04208%2016.1111%204.95353%2016.0274%204.88428C15.9436%204.81502%2015.846%204.76688%2015.7421%204.7435C15.6382%204.72012%2015.494%204.73173%2015.4274%204.74935Z%22%20fill%3D%22%2359D01E%22%2F%3E%0A%3C%2Fsvg%3E%0A", "flag-gold": "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M15.4274%204.74935C14.0982%205.1012%2013.1363%205.13675%2012.3604%205.03379C11.5776%204.93009%2010.9487%204.68342%2010.2456%204.40416L10.2246%204.39527C9.53411%204.1212%208.76945%203.8175%207.81312%203.69157C6.84279%203.56268%205.71016%203.61898%204.24802%204.0049C4.09343%204.04217%203.95538%204.13393%203.85649%204.26515C3.7576%204.39636%203.70374%204.55925%203.70374%204.72712V17.3197C3.70374%2017.5162%203.79534%2017.7046%203.92654%2017.8435C4.05773%2017.9824%204.25893%2018.0605%204.44448%2018.0605C4.63002%2018.0605%204.84911%2017.9824%204.98031%2017.8435C5.11151%2017.7046%205.18522%2017.5162%205.18522%2017.3197V14.9123V12.5049C6.24649%2012.2738%206.97081%2012.2605%207.63962%2012.3486C8.42246%2012.4523%209.05139%2012.699%209.75448%2012.9782L9.77546%2012.9871C10.466%2013.2612%2011.2306%2013.5649%2012.1869%2013.6908C13.1601%2013.8197%2014.2976%2013.7627%2015.7667%2013.3738C15.8866%2013.3421%2016.0727%2013.2135%2016.1483%2013.111C16.2238%2013.0084%2016.2963%2012.8204%2016.2963%2012.6553V5.46787C16.2963%205.35535%2016.2721%205.24432%2016.2255%205.1432C16.1788%205.04208%2016.1111%204.95353%2016.0274%204.88428C15.9436%204.81502%2015.846%204.76688%2015.7421%204.7435C15.6382%204.72012%2015.494%204.73173%2015.4274%204.74935Z%22%20fill%3D%22%23FFBD37%22%2F%3E%0A%3C%2Fsvg%3E%0A", "flag-red": "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M15.4274%204.74935C14.0982%205.1012%2013.1363%205.13675%2012.3604%205.03379C11.5776%204.93009%2010.9487%204.68342%2010.2456%204.40416L10.2246%204.39527C9.53411%204.1212%208.76945%203.8175%207.81312%203.69157C6.84279%203.56268%205.71016%203.61898%204.24802%204.0049C4.09343%204.04217%203.95538%204.13393%203.85649%204.26515C3.7576%204.39636%203.70374%204.55925%203.70374%204.72712V17.3197C3.70374%2017.5162%203.79534%2017.7046%203.92654%2017.8435C4.05773%2017.9824%204.25893%2018.0605%204.44448%2018.0605C4.63002%2018.0605%204.84911%2017.9824%204.98031%2017.8435C5.11151%2017.7046%205.18522%2017.5162%205.18522%2017.3197V14.9123V12.5049C6.24649%2012.2738%206.97081%2012.2605%207.63962%2012.3486C8.42246%2012.4523%209.05139%2012.699%209.75448%2012.9782L9.77546%2012.9871C10.466%2013.2612%2011.2306%2013.5649%2012.1869%2013.6908C13.1601%2013.8197%2014.2976%2013.7627%2015.7667%2013.3738C15.8866%2013.3421%2016.0727%2013.2135%2016.1483%2013.111C16.2238%2013.0084%2016.2963%2012.8204%2016.2963%2012.6553V5.46787C16.2963%205.35535%2016.2721%205.24432%2016.2255%205.1432C16.1788%205.04208%2016.1111%204.95353%2016.0274%204.88428C15.9436%204.81502%2015.846%204.76688%2015.7421%204.7435C15.6382%204.72012%2015.494%204.73173%2015.4274%204.74935Z%22%20fill%3D%22%23FE4B4B%22%2F%3E%0A%3C%2Fsvg%3E%0A" }, C1 = { "cell-0": "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%224%22%20y%3D%2211.001%22%20width%3D%225%22%20height%3D%225%22%20rx%3D%221%22%20fill%3D%22%23E5E5E5%22%2F%3E%0A%3Crect%20x%3D%2211%22%20y%3D%2211.001%22%20width%3D%225%22%20height%3D%225%22%20rx%3D%221%22%20fill%3D%22%23E5E5E5%22%2F%3E%0A%3Crect%20x%3D%224%22%20y%3D%224.00098%22%20width%3D%225%22%20height%3D%225%22%20rx%3D%221%22%20fill%3D%22%23E5E5E5%22%2F%3E%0A%3Crect%20x%3D%2211%22%20y%3D%224.00098%22%20width%3D%225%22%20height%3D%225%22%20rx%3D%221%22%20fill%3D%22%23E5E5E5%22%2F%3E%0A%3C%2Fsvg%3E%0A", "cell-25": "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%224%22%20y%3D%2211.001%22%20width%3D%225%22%20height%3D%225%22%20rx%3D%221%22%20fill%3D%22%23E5E5E5%22%2F%3E%0A%3Crect%20x%3D%2211%22%20y%3D%2211.001%22%20width%3D%225%22%20height%3D%225%22%20rx%3D%221%22%20fill%3D%22%23E5E5E5%22%2F%3E%0A%3Crect%20x%3D%224.25%22%20y%3D%224.25098%22%20width%3D%224.5%22%20height%3D%224.5%22%20rx%3D%220.75%22%20fill%3D%22%230493EE%22%20stroke%3D%22%230493EE%22%20stroke-width%3D%220.5%22%2F%3E%0A%3Crect%20x%3D%2211%22%20y%3D%224.00098%22%20width%3D%225%22%20height%3D%225%22%20rx%3D%221%22%20fill%3D%22%23E5E5E5%22%2F%3E%0A%3C%2Fsvg%3E%0A", "cell-50": "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%224%22%20y%3D%2211.001%22%20width%3D%225%22%20height%3D%225%22%20rx%3D%221%22%20fill%3D%22%23E5E5E5%22%2F%3E%0A%3Crect%20x%3D%2211%22%20y%3D%2211.001%22%20width%3D%225%22%20height%3D%225%22%20rx%3D%221%22%20fill%3D%22%23E5E5E5%22%2F%3E%0A%3Crect%20x%3D%224.25%22%20y%3D%224.25098%22%20width%3D%224.5%22%20height%3D%224.5%22%20rx%3D%220.75%22%20fill%3D%22%230493EE%22%20stroke%3D%22%230493EE%22%20stroke-width%3D%220.5%22%2F%3E%0A%3Crect%20x%3D%2211.25%22%20y%3D%224.25098%22%20width%3D%224.5%22%20height%3D%224.5%22%20rx%3D%220.75%22%20fill%3D%22%230493EE%22%20stroke%3D%22%230493EE%22%20stroke-width%3D%220.5%22%2F%3E%0A%3C%2Fsvg%3E%0A", "cell-75": "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%224.25%22%20y%3D%2211.251%22%20width%3D%224.5%22%20height%3D%224.5%22%20rx%3D%220.75%22%20fill%3D%22%230493EE%22%20stroke%3D%22%230493EE%22%20stroke-width%3D%220.5%22%2F%3E%0A%3Crect%20x%3D%2211%22%20y%3D%2211.001%22%20width%3D%225%22%20height%3D%225%22%20rx%3D%221%22%20fill%3D%22%23E5E5E5%22%2F%3E%0A%3Crect%20x%3D%224.25%22%20y%3D%224.25098%22%20width%3D%224.5%22%20height%3D%224.5%22%20rx%3D%220.75%22%20fill%3D%22%230493EE%22%20stroke%3D%22%230493EE%22%20stroke-width%3D%220.5%22%2F%3E%0A%3Crect%20x%3D%2211.25%22%20y%3D%224.25098%22%20width%3D%224.5%22%20height%3D%224.5%22%20rx%3D%220.75%22%20fill%3D%22%230493EE%22%20stroke%3D%22%230493EE%22%20stroke-width%3D%220.5%22%2F%3E%0A%3C%2Fsvg%3E%0A", "cell-100": "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%224.25%22%20y%3D%2211.251%22%20width%3D%224.5%22%20height%3D%224.5%22%20rx%3D%220.75%22%20fill%3D%22%230493EE%22%20stroke%3D%22%230493EE%22%20stroke-width%3D%220.5%22%2F%3E%0A%3Crect%20x%3D%2211.25%22%20y%3D%2211.251%22%20width%3D%224.5%22%20height%3D%224.5%22%20rx%3D%220.75%22%20fill%3D%22%230493EE%22%20stroke%3D%22%230493EE%22%20stroke-width%3D%220.5%22%2F%3E%0A%3Crect%20x%3D%224.25%22%20y%3D%224.25098%22%20width%3D%224.5%22%20height%3D%224.5%22%20rx%3D%220.75%22%20fill%3D%22%230493EE%22%20stroke%3D%22%230493EE%22%20stroke-width%3D%220.5%22%2F%3E%0A%3Crect%20x%3D%2211.25%22%20y%3D%224.25098%22%20width%3D%224.5%22%20height%3D%224.5%22%20rx%3D%220.75%22%20fill%3D%22%230493EE%22%20stroke%3D%22%230493EE%22%20stroke-width%3D%220.5%22%2F%3E%0A%3C%2Fsvg%3E%0A" }, C = {
  feedback: i1,
  star: a1,
  progress: o1,
  signal: l1,
  feeling: c1,
  arrow: u1,
  shape: d1,
  feedback2: h1,
  flag: g1,
  cell: C1
}, D1 = [
  {
    title: "sheet.cf.iconSet.direction",
    group: [
      { name: "3Arrows", list: [C.arrow["up-green"], C.arrow["right-gold"], C.arrow["down-red"]] },
      { name: "3ArrowsGray", list: [C.arrow["up-gray"], C.arrow["right-gray"], C.arrow["down-gray"]] },
      { name: "4Arrows", list: [C.arrow["up-green"], C.arrow["rightAndUp-gold"], C.arrow["rightAndDown-gold"], C.arrow["down-red"]] },
      { name: "4ArrowsGray", list: [C.arrow["up-gray"], C.arrow["rightAndUp-gray"], C.arrow["rightAndDown-gray"], C.arrow["down-gray"]] },
      { name: "5Arrows", list: [C.arrow["up-green"], C.arrow["rightAndUp-gold"], C.arrow["right-gold"], C.arrow["rightAndDown-gold"], C.arrow["down-red"]] },
      { name: "5ArrowsGray", list: [C.arrow["up-gray"], C.arrow["rightAndUp-gray"], C.arrow["right-gray"], C.arrow["rightAndDown-gray"], C.arrow["down-gray"]] },
      { name: "3Triangles", list: [C.shape.up, C.shape.cross, C.shape.down] }
    ]
  },
  {
    title: "sheet.cf.iconSet.shape",
    group: [
      {
        name: "3TrafficLights1",
        list: [C.shape["roundness-greed"], C.shape["roundness-gold"], C.shape["roundness-red"]]
      },
      {
        name: "3Signs",
        list: [C.shape["roundness-greed"], C.shape["triangle-gold"], C.shape["rhomboid-red"]]
      },
      { name: "3TrafficLights2", list: [C.shape["indicate-greed"], C.shape["indicate-gold"], C.shape["indicate-red"]] },
      {
        name: "4RedToBlack",
        list: [C.shape["roundness-red"], C.shape["roundness-pink"], C.shape["roundness-gray"], C.shape["roundness-black"]]
      },
      {
        name: "4TrafficLights",
        list: [C.shape["roundness-greed"], C.shape["roundness-gold"], C.shape["roundness-red"], C.shape["roundness-black"]]
      }
    ]
  },
  {
    title: "sheet.cf.iconSet.mark",
    group: [
      {
        name: "3Symbols",
        list: [C.feedback.correct, C.feedback.warn, C.feedback.mistake]
      },
      {
        name: "3Symbols2",
        list: [C.feedback2.correct2, C.feedback2.warn2, C.feedback2.mistake2]
      },
      {
        name: "3Flags",
        list: [C.flag["flag-green"], C.flag["flag-gold"], C.flag["flag-red"]]
      }
    ]
  },
  {
    title: "sheet.cf.iconSet.rank",
    group: [
      {
        name: "4Rating",
        list: [C.signal.signal25, C.signal.signal50, C.signal.signal75, C.signal.signal100]
      },
      {
        name: "5Rating",
        list: [C.signal.signal0, C.signal.signal25, C.signal.signal50, C.signal.signal75, C.signal.signal100]
      },
      {
        name: "5Quarters",
        list: [C.progress.progress100, C.progress.progress75, C.progress.progress50, C.progress.progress25, C.progress.progress0]
      },
      {
        name: "_5Felling",
        list: [C.feeling.guffaw, C.feeling.smile, C.feeling.noninductive, C.feeling.dissatisfied, C.feeling.impatient]
      },
      {
        name: "5Boxes",
        list: [C.cell["cell-100"], C.cell["cell-75"], C.cell["cell-50"], C.cell["cell-25"], C.cell["cell-0"]]
      },
      {
        name: "3Stars",
        list: [C.star.starFull, C.star.starIncomplete, C.star.starEmpty]
      }
    ]
  }
], f2 = D1.reduce((s, r) => {
  const { group: t } = r;
  for (const e of t)
    s[e.name] = e.list;
  return s;
}, {});
for (const s in f2) {
  const r = f2[s];
  Object.freeze(r);
}
const f1 = "EMPTY_ICON_TYPE", m1 = "ssheets-conditional-formatting.config", B2 = {};
var w1 = Object.getOwnPropertyDescriptor, F1 = (s, r, t, e) => {
  for (var n = e > 1 ? void 0 : e ? w1(r, t) : r, i = s.length - 1, a; i >= 0; i--)
    (a = s[i]) && (n = a(n) || n);
  return n;
}, Y = (s, r) => (t, e) => r(t, e, s);
let s2 = class extends M2 {
  constructor(s, r, t, e, n, i) {
    super(), this._conditionalFormattingRuleModel = s, this._injector = r, this._univerInstanceService = t, this._resourceManagerService = e, this._sheetInterceptorService = n, this._commandService = i, this._initCellChange(), this._initSnapshot(), this._initSheetChange();
  }
  get _conditionalFormattingViewModelV2() {
    return this._injector.get(Q);
  }
  composeStyle(s, r, t, e) {
    const n = this._conditionalFormattingViewModelV2.getCellCfs(s, r, t, e);
    if (n && (n != null && n.length)) {
      const i = n.map((o) => this._conditionalFormattingRuleModel.getRule(s, r, o.cfId)).filter((o) => !!o).reverse(), a = i.findIndex((o) => o == null ? void 0 : o.stopIfTrue);
      return a > -1 && i.splice(a + 1), i.reduce((o, l) => {
        var g;
        const d = l.rule.type, c = n.find((h) => h.cfId === l.cfId);
        if (d === S.highlightCell)
          c.result && P2(o, { style: c.result });
        else if (d === S.colorScale) {
          const h = c == null ? void 0 : c.result;
          h && typeof h == "string" && (o.style = { ...(g = o.style) != null ? g : {}, bg: { rgb: h } });
        } else if (d === S.dataBar) {
          const h = c == null ? void 0 : c.result;
          h && (o.dataBar = h, o.isShowValue = h.isShowValue);
        } else if (d === S.iconSet) {
          const h = c == null ? void 0 : c.result;
          h && (o.iconSet = h, o.isShowValue = h.isShowValue);
        }
        return o;
      }, {});
    }
    return null;
  }
  _initSnapshot() {
    const s = (t) => {
      const e = this._conditionalFormattingRuleModel.getUnitRules(t), n = {};
      return e ? (e.forEach((i, a) => {
        n[a] = i;
      }), JSON.stringify(n)) : "";
    }, r = (t) => {
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
        pluginName: Z2,
        businesses: [m2.UNIVER_SHEET],
        toJson: (t) => s(t),
        parseJson: (t) => r(t),
        onUnLoad: (t) => {
          this._conditionalFormattingRuleModel.deleteUnitId(t), !Q2(t) && this._conditionalFormattingViewModelV2.dispose();
        },
        onLoad: (t, e) => {
          Object.keys(e).forEach((n) => {
            [...e[n]].reverse().forEach((a) => {
              this._conditionalFormattingRuleModel.addRule(t, n, a);
            });
          });
        }
      })
    );
  }
  _initSheetChange() {
    this.disposeWithMe(
      this._sheetInterceptorService.interceptCommand({
        getMutations: (s) => {
          if (s.id === o0.id) {
            const r = s.params, t = r.unitId || v1(this._univerInstanceService), e = r.subUnitId || p1(this._univerInstanceService);
            if (!e)
              return { redos: [], undos: [] };
            const n = this._conditionalFormattingRuleModel.getSubunitRules(t, e);
            if (!n)
              return { redos: [], undos: [] };
            const i = [], a = [];
            return n.forEach((u) => {
              const o = {
                unitId: t,
                subUnitId: e,
                cfId: u.cfId
              };
              i.push({
                id: K.id,
                params: o
              }), a.push(...w2(this._injector, o));
            }), {
              redos: i,
              undos: a
            };
          } else if (s.id === l0.id) {
            const r = s.params, { unitId: t, subUnitId: e, targetSubUnitId: n } = r;
            if (!t || !e || !n)
              return { redos: [], undos: [] };
            const i = this._conditionalFormattingRuleModel.getSubunitRules(t, e);
            if (!i)
              return { redos: [], undos: [] };
            const a = [], u = [];
            return i.forEach((o) => {
              const l = {
                unitId: t,
                subUnitId: n,
                rule: {
                  ...o,
                  cfId: this._conditionalFormattingRuleModel.createCfId(t, n)
                }
              };
              a.push({ id: a2.id, params: l }), u.push(H2(this._injector, l));
            }), { redos: a, undos: u };
          }
          return { redos: [], undos: [] };
        }
      })
    );
  }
  // eslint-disable-next-line max-lines-per-function
  _initCellChange() {
    this.disposeWithMe(
      // eslint-disable-next-line max-lines-per-function
      this._commandService.onCommandExecuted((s) => {
        const r = (t, e, n) => {
          const i = /* @__PURE__ */ new Set();
          return n.forEach(([a, u]) => {
            const o = this._conditionalFormattingViewModelV2.getCellCfs(t, e, a, u);
            o == null || o.forEach((l) => i.add(l.cfId));
          }), [...i].map((a) => this._conditionalFormattingRuleModel.getRule(t, e, a)).filter((a) => !!a);
        };
        switch (s.id) {
          case m0.id: {
            const t = s.params, { subUnitId: e, unitId: n, cellValue: i } = t, a = [];
            new O(i).forValue((o, l, d) => {
              d && Object.keys(d).some((g) => ["p", "v"].includes(g)) && a.push([o, l]);
            }), r(n, e, a).forEach((o) => {
              this._conditionalFormattingViewModelV2.markRuleDirty(n, e, o.cfId);
            });
            break;
          }
          case f0.id:
          case D0.id: {
            const { range: t, unitId: e, subUnitId: n } = s.params, i = this._conditionalFormattingRuleModel.getSubunitRules(e, n), a = { ...t, endColumn: Number.MAX_SAFE_INTEGER };
            i && i.filter((o) => o.ranges.some((l) => n2.intersects(l, a))).forEach((o) => {
              this._conditionalFormattingViewModelV2.markRuleDirty(e, n, o.cfId);
            });
            break;
          }
          case C0.id:
          case g0.id: {
            const { range: t, unitId: e, subUnitId: n } = s.params, i = this._conditionalFormattingRuleModel.getSubunitRules(e, n), a = { ...t, endRow: Number.MAX_SAFE_INTEGER };
            i && i.filter((o) => o.ranges.some((l) => n2.intersects(l, a))).forEach((o) => {
              this._conditionalFormattingViewModelV2.markRuleDirty(e, n, o.cfId);
            });
            break;
          }
          case h0.id: {
            const { sourceRange: t, targetRange: e, unitId: n, subUnitId: i } = s.params, a = this._conditionalFormattingRuleModel.getSubunitRules(n, i), u = {
              startRow: Math.min(t.startRow, e.startRow),
              endRow: Number.MAX_SAFE_INTEGER,
              startColumn: 0,
              endColumn: Number.MAX_SAFE_INTEGER
            };
            a && a.filter((l) => l.ranges.some((d) => n2.intersects(d, u))).forEach((l) => {
              this._conditionalFormattingViewModelV2.markRuleDirty(n, i, l.cfId);
            });
            break;
          }
          case d0.id: {
            const { sourceRange: t, targetRange: e, unitId: n, subUnitId: i } = s.params, a = this._conditionalFormattingRuleModel.getSubunitRules(n, i), u = {
              startRow: 0,
              endRow: Number.MAX_SAFE_INTEGER,
              startColumn: Math.min(t.startColumn, e.startColumn),
              endColumn: Number.MAX_SAFE_INTEGER
            };
            a && a.filter((l) => l.ranges.some((d) => n2.intersects(d, u))).forEach((l) => {
              this._conditionalFormattingViewModelV2.markRuleDirty(n, i, l.cfId);
            });
            break;
          }
          case u0.id: {
            const { unitId: t, to: e, from: n } = s.params, i = (a) => {
              const u = [];
              new O(a.value).forValue((l, d) => {
                u.push([l, d]);
              }), r(t, a.subUnitId, u).forEach((l) => {
                this._conditionalFormattingViewModelV2.markRuleDirty(t, a.subUnitId, l.cfId);
              });
            };
            i(e), i(n);
            break;
          }
          case c0.id: {
            const { range: t, unitId: e, subUnitId: n } = s.params, i = this._conditionalFormattingRuleModel.getSubunitRules(e, n);
            i && i.filter((u) => u.ranges.some((o) => n2.intersects(o, t))).forEach((u) => {
              this._conditionalFormattingViewModelV2.markRuleDirty(e, n, u.cfId);
            });
            break;
          }
        }
      })
    );
  }
};
s2 = F1([
  Y(0, x(M)),
  Y(1, x(y2)),
  Y(2, x(q)),
  Y(3, x(z2)),
  Y(4, x(a0)),
  Y(5, x(P))
], s2);
const v1 = (s) => s.getCurrentUnitForType(m2.UNIVER_SHEET).getUnitId(), p1 = (s) => {
  var r;
  return (r = s.getCurrentUnitForType(m2.UNIVER_SHEET).getActiveSheet()) == null ? void 0 : r.getSheetId();
};
var E1 = Object.getOwnPropertyDescriptor, A1 = (s, r, t, e) => {
  for (var n = e > 1 ? void 0 : e ? E1(r, t) : r, i = s.length - 1, a; i >= 0; i--)
    (a = s[i]) && (n = a(n) || n);
  return n;
}, _2 = (s, r) => (t, e) => r(t, e, s), d2;
let N2 = (d2 = class extends e0 {
  constructor(s = B2, r, t, e) {
    super(), this._config = s, this._injector = r, this._commandService = t, this._configService = e;
    const { ...n } = P2(
      {},
      B2,
      this._config
    );
    this._configService.setConfig(m1, n), [
      [s2],
      [z],
      [M],
      [Q]
    ].forEach((i) => {
      this._injector.add(i);
    }), [
      k0,
      B0,
      N0,
      U0,
      T0,
      V0,
      a2,
      K,
      o2,
      i2,
      h2
    ].forEach((i) => {
      this._commandService.registerCommand(i);
    });
  }
  onStarting() {
    this._injector.get(s2), t0(this._injector, [[s2], [Q]]);
  }
}, m(d2, "pluginName", Z2), m(d2, "type", m2.UNIVER_SHEET), d2);
N2 = A1([
  _2(1, x(y2)),
  _2(2, x(P)),
  _2(3, n0)
], N2);
const x1 = "sheet-conditional-rule-icon", _1 = 35, M1 = 15, y1 = 2, R1 = (s) => {
  const { startRow: r, endRow: t, startColumn: e, endColumn: n } = s;
  return `${r}-${t}-${e}-${n}`;
};
class I1 extends q2 {
  constructor() {
    super();
    m(this, "_paddingRightAndLeft", y1);
    m(this, "_width", M1);
    m(this, "_imageMap", /* @__PURE__ */ new Map());
    m(this, "uKey", x1);
    m(this, "Z_INDEX", _1);
    m(this, "_radius", 1);
    this._init();
  }
  draw(t, e, n, i) {
    const { worksheet: a } = n;
    if (!a)
      return !1;
    const u = /* @__PURE__ */ new Set();
    t.save(), U.foreach(n.rowColumnSegment, (o, l) => {
      if (!a.getRowVisible(o) || !a.getColVisible(l))
        return;
      const d = n.getCellWithCoordByIndex(o, l, !1), { isMerged: c, isMergedMainCell: g, mergeInfo: h } = d;
      let D = a.getCell(o, l);
      if (c && (D = a.getCell(h.startRow, h.startColumn)), !(D != null && D.iconSet))
        return;
      const { iconType: f, iconId: w } = D.iconSet;
      if (f === f1)
        return;
      const p = this._imageMap.get(this._createKey(f, w));
      if (!p || !this.isRenderDiffRangesByCell(h, i))
        return;
      if (c || g) {
        const Z = R1(h);
        if (u.has(Z))
          return;
        u.add(Z);
      }
      const { startX: y, endX: E, startY: R, endY: b } = c || g ? h : d, v2 = E - y, l2 = b - R;
      if (this._width > l2 || this._width > v2 + this._paddingRightAndLeft * 2)
        return;
      const p2 = (l2 - this._width) / 2 + R;
      t.drawImage(p, y + this._paddingRightAndLeft, p2, this._width, this._width);
    }), t.restore();
  }
  _init() {
    for (const t in f2)
      f2[t].forEach((n, i) => {
        const a = this._createKey(t, String(i)), u = new Image();
        u.onload = () => {
          this._imageMap.set(a, u);
        }, u.src = n;
      });
  }
  _createKey(t, e) {
    return `${t}_${e}`;
  }
}
W2.add(I1);
function S1(s) {
  if (typeof s != "object" || s === null)
    return s;
  const r = {};
  for (const t in s)
    if (s.hasOwnProperty(t)) {
      const e = S1(s[t]);
      e !== void 0 && (r[t] = e);
    }
  return r;
}
export {
  k0 as AddCfCommand,
  a2 as AddConditionalRuleMutation,
  H2 as AddConditionalRuleMutationUndoFactory,
  F as CFNumberOperator,
  S as CFRuleType,
  A as CFSubRuleType,
  L as CFTextOperator,
  k as CFTimePeriodOperator,
  I as CFValueType,
  A2 as CONDITIONAL_FORMATTING_VIEWPORT_CACHE_LENGTH,
  B0 as ClearRangeCfCommand,
  N0 as ClearWorksheetCfCommand,
  h2 as ConditionalFormattingFormulaMarkDirty,
  z as ConditionalFormattingFormulaService,
  I1 as ConditionalFormattingIcon,
  M as ConditionalFormattingRuleModel,
  s2 as ConditionalFormattingService,
  Q as ConditionalFormattingViewModel,
  V1 as DEFAULT_BG_COLOR,
  O1 as DEFAULT_FONT_COLOR,
  y1 as DEFAULT_PADDING,
  M1 as DEFAULT_WIDTH,
  j0 as DataBar,
  U0 as DeleteCfCommand,
  K as DeleteConditionalRuleMutation,
  w2 as DeleteConditionalRuleMutationUndoFactory,
  f1 as EMPTY_ICON_TYPE,
  N as FormulaResultStatus,
  x1 as IconUKey,
  T0 as MoveCfCommand,
  i2 as MoveConditionalRuleMutation,
  L0 as MoveConditionalRuleMutationUndoFactory,
  Z2 as SHEET_CONDITIONAL_FORMATTING_PLUGIN,
  V0 as SetCfCommand,
  o2 as SetConditionalRuleMutation,
  N2 as UniverSheetsConditionalFormattingPlugin,
  S0 as anchorUndoFactory,
  r2 as compareWithNumber,
  b0 as createCfId,
  $1 as createDefaultRule,
  P1 as createDefaultValue,
  W1 as createDefaultValueByValueType,
  q0 as dataBarUKey,
  k2 as defaultDataBarNativeColor,
  L2 as defaultDataBarPositiveColor,
  Z0 as defaultPlaceholderColor,
  R2 as filterRange,
  X as findIndexByAnchor,
  Z1 as getCacheStyleMatrix,
  W as getCellValue,
  s1 as getColorScaleFromValue,
  G1 as getMaxInFormulaResult,
  r1 as getOppositeOperator,
  D2 as getValueByType,
  D1 as iconGroup,
  f2 as iconMap,
  q1 as isAnchorEqual,
  C2 as isFloatsEqual,
  B as isNullable,
  X1 as isRangesEqual,
  I0 as moveByAnchor,
  S1 as removeUndefinedAttr,
  n1 as serialTimeToTimestamp,
  j2 as setConditionalRuleMutationUndoFactory,
  t1 as toYMD_1900,
  G2 as transformSupportSymmetryAnchor
};
