var z = Object.defineProperty;
var Y = (t, e, r) => e in t ? z(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var c = (t, e, r) => Y(t, typeof e != "symbol" ? e + "" : e, r);
import { Disposable as $, Tools as K, ILogService as f, CommandType as g, IResourceManagerService as X, IUniverInstanceService as Z, Inject as V, UniverInstanceType as q, toDisposable as ee, ICommandService as T, IUndoRedoService as A, Plugin as te, merge as ae, Injector as H, IConfigService as re, DataValidationOperator as s, LocaleService as oe } from "@univerjs/core";
import { Subject as ne, debounceTime as ie, BehaviorSubject as se } from "rxjs";
function Q(t) {
  return {
    type: t.type,
    operator: t.operator,
    formula1: t.formula1,
    formula2: t.formula2,
    allowBlank: t.allowBlank
  };
}
function j(t) {
  return {
    error: t.error,
    errorStyle: t.errorStyle,
    errorTitle: t.errorTitle,
    imeMode: t.imeMode,
    prompt: t.prompt,
    promptTitle: t.promptTitle,
    showDropDown: t.showDropDown,
    showErrorMessage: t.showErrorMessage,
    showInputMessage: t.showInputMessage,
    renderMode: t.renderMode,
    bizInfo: t.bizInfo
  };
}
var p = /* @__PURE__ */ ((t) => (t[t.SETTING = 0] = "SETTING", t[t.RANGE = 1] = "RANGE", t[t.OPTIONS = 2] = "OPTIONS", t[t.ALL = 3] = "ALL", t))(p || {}), de = Object.getOwnPropertyDescriptor, le = (t, e, r, a) => {
  for (var o = a > 1 ? void 0 : a ? de(e, r) : e, n = t.length - 1, i; n >= 0; n--)
    (i = t[n]) && (o = i(o) || o);
  return o;
}, ue = (t, e) => (r, a) => e(r, a, t);
let h = class extends $ {
  constructor(e) {
    super();
    c(this, "_model", /* @__PURE__ */ new Map());
    c(this, "_ruleChange$", new ne());
    c(this, "ruleChange$", this._ruleChange$.asObservable());
    c(this, "ruleChangeDebounce$", this.ruleChange$.pipe(ie(20)));
    this._logService = e, this.disposeWithMe({
      dispose: () => {
        this._ruleChange$.complete();
      }
    });
  }
  _ensureMap(e, r) {
    this._model.has(e) || this._model.set(e, /* @__PURE__ */ new Map());
    const a = this._model.get(e);
    if (a.has(r))
      return a.get(r);
    const o = { map: /* @__PURE__ */ new Map(), list: [] };
    return a.set(r, o), o;
  }
  _addSubUnitRule(e, r, a) {
    const { map: o, list: n } = e, l = (Array.isArray(r) ? r : [r]).filter((d) => !o.has(d.uid));
    typeof a == "number" && a < n.length ? n.splice(a, 0, ...l) : n.push(...l), l.forEach((d) => {
      o.set(d.uid, d);
    });
  }
  _removeSubUnitRule(e, r) {
    const { map: a, list: o } = e, n = o.findIndex((i) => i.uid === r);
    n > -1 && (o.splice(n, 1), a.delete(r));
  }
  _updateSubUnitRule(e, r, a) {
    const { map: o, list: n } = e, i = o.get(r), l = n.findIndex((u) => r === u.uid);
    if (!i)
      throw new Error(`Data validation rule is not found, ruleId: ${r}.`);
    const d = { ...i };
    switch (a.type) {
      case p.RANGE: {
        d.ranges = a.payload;
        break;
      }
      case p.SETTING: {
        Object.assign(d, Q(a.payload));
        break;
      }
      case p.OPTIONS: {
        Object.assign(d, j(a.payload));
        break;
      }
      case p.ALL: {
        Object.assign(d, a.payload);
        break;
      }
    }
    return n[l] = d, o.set(r, d), d;
  }
  _addRuleSideEffect(e, r, a, o) {
    if (!this._ensureMap(e, r).map.get(a.uid))
      return {
        rule: a,
        type: "add",
        unitId: e,
        subUnitId: r,
        source: o
      };
  }
  addRule(e, r, a, o, n) {
    try {
      const i = this._ensureMap(e, r), d = (Array.isArray(a) ? a : [a]).map((u) => this._addRuleSideEffect(e, r, u, o));
      this._addSubUnitRule(i, a, n), d.forEach((u) => {
        u && this._ruleChange$.next(u);
      });
    } catch (i) {
      this._logService.error(i);
    }
  }
  updateRule(e, r, a, o, n) {
    try {
      const i = this._ensureMap(e, r), l = K.deepClone(i.map.get(a));
      if (!l)
        throw new Error(`Data validation rule is not found, ruleId: ${a}.`);
      const d = this._updateSubUnitRule(i, a, o);
      this._ruleChange$.next({
        rule: d,
        type: "update",
        unitId: e,
        subUnitId: r,
        source: n,
        updatePayload: o,
        oldRule: l
      });
    } catch (i) {
      this._logService.error(i);
    }
  }
  removeRule(e, r, a, o) {
    try {
      const n = this._ensureMap(e, r), i = n.map.get(a);
      i && (this._removeSubUnitRule(n, a), this._ruleChange$.next({
        rule: i,
        type: "remove",
        unitId: e,
        subUnitId: r,
        source: o
      }));
    } catch (n) {
      this._logService.error(n);
    }
  }
  getRuleById(e, r, a) {
    return this._ensureMap(e, r).map.get(a);
  }
  getRuleIndex(e, r, a) {
    return this._ensureMap(e, r).list.findIndex((n) => n.uid === a);
  }
  getRules(e, r) {
    return [...this._ensureMap(e, r).list];
  }
  getUnitRules(e) {
    const r = this._model.get(e);
    if (!r)
      return [];
    const a = [];
    return r.forEach((o, n) => {
      a.push([n, o.list]);
    }), a;
  }
  deleteUnitRules(e) {
    this._model.delete(e);
  }
  getSubUnitIds(e) {
    var r, a;
    return Array.from((a = (r = this._model.get(e)) == null ? void 0 : r.keys()) != null ? a : []);
  }
  getAll() {
    return Array.from(this._model.keys()).map((e) => [e, this.getUnitRules(e)]);
  }
};
h = le([
  ue(0, f)
], h);
const S = {
  type: g.MUTATION,
  id: "data-validation.mutation.addRule",
  handler(t, e) {
    if (!e)
      return !1;
    const { unitId: r, subUnitId: a, rule: o, index: n, source: i = "command" } = e;
    return t.get(h).addRule(r, a, o, i, n), !0;
  }
}, N = {
  type: g.MUTATION,
  id: "data-validation.mutation.removeRule",
  handler(t, e) {
    if (!e)
      return !1;
    const { unitId: r, subUnitId: a, ruleId: o, source: n = "command" } = e, i = t.get(h);
    return Array.isArray(o) ? o.forEach((l) => {
      i.removeRule(r, a, l, n);
    }) : i.removeRule(r, a, o, n), !0;
  }
}, v = {
  type: g.MUTATION,
  id: "data-validation.mutation.updateRule",
  handler(t, e) {
    if (!e)
      return !1;
    const { unitId: r, subUnitId: a, ruleId: o, payload: n, source: i = "command" } = e;
    return t.get(h).updateRule(r, a, o, n, i), !0;
  }
};
var ce = Object.getOwnPropertyDescriptor, me = (t, e, r, a) => {
  for (var o = a > 1 ? void 0 : a ? ce(e, r) : e, n = t.length - 1, i; n >= 0; n--)
    (i = t[n]) && (o = i(o) || o);
  return o;
}, L = (t, e) => (r, a) => e(r, a, t);
const he = "SHEET_DATA_VALIDATION_PLUGIN";
let I = class extends $ {
  constructor(t, e, r) {
    super(), this._resourceManagerService = t, this._univerInstanceService = e, this._dataValidationModel = r, this._initSnapshot();
  }
  _initSnapshot() {
    const t = (r) => {
      const a = this._dataValidationModel.getUnitRules(r), o = {};
      return a ? (a.forEach(([n, i]) => {
        o[n] = i;
      }), JSON.stringify(o)) : "";
    }, e = (r) => {
      if (!r)
        return {};
      try {
        return JSON.parse(r);
      } catch {
        return {};
      }
    };
    this.disposeWithMe(
      this._resourceManagerService.registerPluginResource({
        pluginName: he,
        businesses: [q.UNIVER_SHEET],
        toJson: (r) => t(r),
        parseJson: (r) => e(r),
        onUnLoad: (r) => {
          this._dataValidationModel.deleteUnitRules(r);
        },
        onLoad: (r, a) => {
          Object.keys(a).forEach((o) => {
            a[o].forEach((i) => {
              this._dataValidationModel.addRule(r, o, i, "patched");
            });
          });
        }
      })
    );
  }
};
I = me([
  L(0, X),
  L(1, Z),
  L(2, V(h))
], I);
var pe = /* @__PURE__ */ ((t) => (t.SHEET = "sheet", t))(pe || {});
class F {
  constructor() {
    c(this, "_validatorByScopes", /* @__PURE__ */ new Map());
    c(this, "_validatorMap", /* @__PURE__ */ new Map());
    c(this, "_validatorsChange$", new se(void 0));
    c(this, "validatorsChange$", this._validatorsChange$.asObservable());
  }
  _addValidatorToScope(e, r) {
    this._validatorByScopes.has(r) || this._validatorByScopes.set(r, []);
    const a = this._validatorByScopes.get(r);
    if (a.findIndex((o) => o.id === e.id) > -1)
      throw new Error(`Validator item with the same id ${e.id} has already been added!`);
    a.push(e);
  }
  _removeValidatorFromScope(e, r) {
    const a = this._validatorByScopes.get(r);
    if (!a)
      return;
    const o = a.findIndex((n) => n.id === e.id);
    o > -1 && a.splice(o, 1);
  }
  register(e) {
    return this._validatorMap.set(e.id, e), Array.isArray(e.scopes) ? e.scopes.forEach((r) => {
      this._addValidatorToScope(e, r);
    }) : this._addValidatorToScope(e, e.scopes), this._validatorsChange$.next(), ee(() => {
      this._validatorMap.delete(e.id), Array.isArray(e.scopes) ? e.scopes.forEach((r) => {
        this._removeValidatorFromScope(e, r);
      }) : this._removeValidatorFromScope(e, e.scopes), this._validatorsChange$.next();
    });
  }
  getValidatorItem(e) {
    return this._validatorMap.get(e);
  }
  getValidatorsByScope(e) {
    return this._validatorByScopes.get(e);
  }
}
const Ee = {
  type: g.COMMAND,
  id: "data-validation.command.addRule",
  async handler(t, e) {
    if (t.get(f).error("[Deprecated]: `AddDataValidationCommand` is deprecated, please use `AddSheetDataValidationCommand` in `@univerjs/sheets-data-validation` instead!"), !e)
      return !1;
    const { rule: a, unitId: o, subUnitId: n } = e, i = t.get(T), l = t.get(A), d = {
      ...e,
      rule: {
        ...e.rule,
        ranges: [e.rule.range]
      }
    }, u = [{
      id: S.id,
      params: d
    }], m = [{
      id: N.id,
      params: {
        unitId: o,
        subUnitId: n,
        ruleId: a.uid
      }
    }];
    return l.pushUndoRedo({
      unitID: o,
      redoMutations: u,
      undoMutations: m
    }), await i.executeCommand(S.id, d), !0;
  }
}, ge = {
  type: g.COMMAND,
  id: "data-validation.command.removeRule",
  handler(t, e) {
    if (t.get(f).error("[Deprecated]: `RemoveDataValidationCommand` is deprecated, please use `RemoveSheetDataValidationCommand` in `@univerjs/sheets-data-validation` instead!"), !e)
      return !1;
    const { unitId: a, subUnitId: o, ruleId: n } = e, i = t.get(T), l = t.get(A), d = t.get(h), u = [{
      id: N.id,
      params: e
    }], m = [{
      id: S.id,
      params: {
        unitId: a,
        subUnitId: o,
        rule: {
          ...d.getRuleById(a, o, n)
        },
        index: d.getRuleIndex(a, o, n)
      }
    }];
    return l.pushUndoRedo({
      undoMutations: m,
      redoMutations: u,
      unitID: e.unitId
    }), i.executeCommand(N.id, e), !0;
  }
}, _e = {
  type: g.COMMAND,
  id: "data-validation.command.updateDataValidationSetting",
  handler(t, e) {
    if (t.get(f).warn("[Deprecated]: `UpdateDataValidationOptionsCommand` is deprecated, please use `UpdateSheetDataValidationOptionsCommand` in `@univerjs/sheets-data-validation` instead!"), !e)
      return !1;
    const a = t.get(T), o = t.get(A), n = t.get(h), { unitId: i, subUnitId: l, ruleId: d, options: u } = e, m = n.getRuleById(i, l, d);
    if (!m)
      return !1;
    const E = {
      unitId: i,
      subUnitId: l,
      ruleId: d,
      payload: {
        type: p.OPTIONS,
        payload: u
      }
    }, _ = [{
      id: v.id,
      params: E
    }], M = {
      unitId: i,
      subUnitId: l,
      ruleId: d,
      payload: {
        type: p.OPTIONS,
        payload: j(m)
      }
    }, R = [{
      id: v.id,
      params: M
    }];
    return o.pushUndoRedo({
      unitID: i,
      redoMutations: _,
      undoMutations: R
    }), a.executeCommand(v.id, E), !0;
  }
}, ve = {
  type: g.COMMAND,
  id: "data-validation.command.updateDataValidationOptions",
  handler(t, e) {
    if (t.get(f).error("[Deprecated]: `UpdateDataValidationSettingCommand` is deprecated, please use `UpdateSheetDataValidationSettingCommand` in `@univerjs/sheets-data-validation` instead!"), !e)
      return !1;
    const a = t.get(T), o = t.get(A), n = t.get(h), i = t.get(F), { unitId: l, subUnitId: d, ruleId: u, setting: m } = e, E = i.getValidatorItem(m.type);
    if (!E)
      return !1;
    const _ = n.getRuleById(l, d, u);
    if (!_)
      return !1;
    const M = { ..._, ...m };
    if (!E.validatorFormula(M, l, d).success)
      return !1;
    const R = {
      unitId: l,
      subUnitId: d,
      ruleId: u,
      payload: {
        type: p.SETTING,
        payload: {
          ...m,
          ...E.normalizeFormula(M, l, d)
        }
      }
    }, W = [{
      id: v.id,
      params: R
    }], k = {
      unitId: l,
      subUnitId: d,
      ruleId: u,
      payload: {
        type: p.SETTING,
        payload: Q(_)
      }
    }, J = [{
      id: v.id,
      params: k
    }];
    return o.pushUndoRedo({
      unitID: l,
      redoMutations: W,
      undoMutations: J
    }), a.executeCommand(v.id, R), !0;
  }
}, Ne = {
  type: g.COMMAND,
  id: "data-validation.command.removeAll",
  handler(t, e) {
    if (t.get(f).error("[Deprecated]: `RemoveAllDataValidationCommand` is deprecated, please use `RemoveSheetAllDataValidationCommand` in `@univerjs/sheets-data-validation` instead!"), !e)
      return !1;
    const { unitId: a, subUnitId: o } = e, n = t.get(T), i = t.get(h), l = t.get(A), d = [...i.getRules(a, o)], u = {
      unitId: a,
      subUnitId: o,
      ruleId: d.map((_) => _.uid)
    }, m = [{
      id: N.id,
      params: u
    }], E = [{
      id: S.id,
      params: {
        unitId: a,
        subUnitId: o,
        rule: d
      }
    }];
    return l.pushUndoRedo({
      redoMutations: m,
      undoMutations: E,
      unitID: a
    }), n.executeCommand(N.id, u), !0;
  }
}, fe = "data-validation.config", U = {};
var Te = Object.getOwnPropertyDescriptor, Se = (t, e, r, a) => {
  for (var o = a > 1 ? void 0 : a ? Te(e, r) : e, n = t.length - 1, i; n >= 0; n--)
    (i = t[n]) && (o = i(o) || o);
  return o;
}, y = (t, e) => (r, a) => e(r, a, t);
const Ae = "UNIVER_DATA_VALIDATION_PLUGIN";
var O;
let C = (O = class extends te {
  constructor(t = U, e, r, a) {
    super(), this._config = t, this._injector = e, this._commandService = r, this._configService = a;
    const { ...o } = ae(
      {},
      U,
      this._config
    );
    this._configService.setConfig(fe, o);
  }
  onStarting() {
    [
      [h],
      [F],
      [I]
    ].forEach((t) => this._injector.add(t)), [
      // command
      Ee,
      Ne,
      _e,
      ve,
      ge,
      // mutation
      S,
      v,
      N
    ].forEach((t) => {
      this._commandService.registerCommand(t);
    });
  }
  onReady() {
    this._injector.get(I);
  }
}, c(O, "pluginName", Ae), c(O, "type", q.UNIVER_SHEET), O);
C = Se([
  y(1, V(H)),
  y(2, T),
  y(3, re)
], C);
s.BETWEEN + "", s.EQUAL + "", s.GREATER_THAN + "", s.GREATER_THAN_OR_EQUAL + "", s.LESS_THAN + "", s.LESS_THAN_OR_EQUAL + "", s.NOT_BETWEEN + "", s.NOT_EQUAL + "";
const D = {
  [s.BETWEEN]: "dataValidation.ruleName.between",
  [s.EQUAL]: "dataValidation.ruleName.equal",
  [s.GREATER_THAN]: "dataValidation.ruleName.greaterThan",
  [s.GREATER_THAN_OR_EQUAL]: "dataValidation.ruleName.greaterThanOrEqual",
  [s.LESS_THAN]: "dataValidation.ruleName.lessThan",
  [s.LESS_THAN_OR_EQUAL]: "dataValidation.ruleName.lessThanOrEqual",
  [s.NOT_BETWEEN]: "dataValidation.ruleName.notBetween",
  [s.NOT_EQUAL]: "dataValidation.ruleName.notEqual",
  NONE: "dataValidation.ruleName.legal"
}, b = {
  [s.BETWEEN]: "dataValidation.errorMsg.between",
  [s.EQUAL]: "dataValidation.errorMsg.equal",
  [s.GREATER_THAN]: "dataValidation.errorMsg.greaterThan",
  [s.GREATER_THAN_OR_EQUAL]: "dataValidation.errorMsg.greaterThanOrEqual",
  [s.LESS_THAN]: "dataValidation.errorMsg.lessThan",
  [s.LESS_THAN_OR_EQUAL]: "dataValidation.errorMsg.lessThanOrEqual",
  [s.NOT_BETWEEN]: "dataValidation.errorMsg.notBetween",
  [s.NOT_EQUAL]: "dataValidation.errorMsg.notEqual",
  NONE: "dataValidation.errorMsg.legal"
}, Ue = {
  [s.BETWEEN]: "dataValidation.textLength.errorMsg.between",
  [s.EQUAL]: "dataValidation.textLength.errorMsg.equal",
  [s.GREATER_THAN]: "dataValidation.textLength.errorMsg.greaterThan",
  [s.GREATER_THAN_OR_EQUAL]: "dataValidation.textLength.errorMsg.greaterThanOrEqual",
  [s.LESS_THAN]: "dataValidation.textLength.errorMsg.lessThan",
  [s.LESS_THAN_OR_EQUAL]: "dataValidation.textLength.errorMsg.lessThanOrEqual",
  [s.NOT_BETWEEN]: "dataValidation.textLength.errorMsg.notBetween",
  [s.NOT_EQUAL]: "dataValidation.textLength.errorMsg.notEqual"
}, Ce = [
  s.BETWEEN,
  s.NOT_BETWEEN
];
var Me = Object.getOwnPropertyDescriptor, Re = (t, e, r, a) => {
  for (var o = a > 1 ? void 0 : a ? Me(e, r) : e, n = t.length - 1, i; n >= 0; n--)
    (i = t[n]) && (o = i(o) || o);
  return o;
}, w = (t, e) => (r, a) => e(r, a, t);
const B = "{FORMULA1}", x = "{FORMULA2}", P = "{TYPE}", Oe = {
  [s.BETWEEN]: "dataValidation.operators.between",
  [s.EQUAL]: "dataValidation.operators.equal",
  [s.GREATER_THAN]: "dataValidation.operators.greaterThan",
  [s.GREATER_THAN_OR_EQUAL]: "dataValidation.operators.greaterThanOrEqual",
  [s.LESS_THAN]: "dataValidation.operators.lessThan",
  [s.LESS_THAN_OR_EQUAL]: "dataValidation.operators.lessThanOrEqual",
  [s.NOT_BETWEEN]: "dataValidation.operators.notBetween",
  [s.NOT_EQUAL]: "dataValidation.operators.notEqual"
};
var Ve = /* @__PURE__ */ ((t) => (t.DATE = "date", t.TIME = "time", t.DATETIME = "datetime", t.LIST = "list", t.MULTIPLE_LIST = "multipleList", t.COLOR = "color", t.CASCADE = "cascade", t))(Ve || {});
let G = class {
  // #endregion
  constructor(t, e) {
    c(this, "offsetFormulaByRange", !0);
    // #region UI related
    c(this, "formulaInput");
    c(this, "canvasRender", null);
    c(this, "dropdownType");
    c(this, "optionsInput");
    c(this, "skipDefaultFontRender");
    this.localeService = t, this.injector = e;
  }
  get operatorNames() {
    return this.operators.map((t) => this.localeService.t(Oe[t]));
  }
  get titleStr() {
    return this.localeService.t(this.title);
  }
  generateRuleName(t) {
    var r, a;
    if (!t.operator)
      return this.localeService.t(D.NONE).replace(P, this.titleStr);
    const e = this.localeService.t(D[t.operator]).replace(B, (r = t.formula1) != null ? r : "").replace(x, (a = t.formula2) != null ? a : "");
    return `${this.titleStr} ${e}`;
  }
  generateRuleErrorMessage(t, e) {
    var a, o;
    return t.operator ? `${this.localeService.t(b[t.operator]).replace(B, (a = t.formula1) != null ? a : "").replace(x, (o = t.formula2) != null ? o : "")}` : this.localeService.t(b.NONE).replace(P, this.titleStr);
  }
  getExtraStyle(t, e, r, a, o) {
  }
  getRuleFinalError(t, e) {
    return t.showErrorMessage && t.error ? t.error : this.generateRuleErrorMessage(t, e);
  }
  isEmptyCellValue(t) {
    return t === "" || t === void 0 || t === null;
  }
  normalizeFormula(t, e, r) {
    return {
      formula1: t.formula1,
      formula2: t.formula2
    };
  }
  async isValidType(t, e, r) {
    return !0;
  }
  transform(t, e, r) {
    return t;
  }
  async validatorIsEqual(t, e, r) {
    const { formula1: a } = e, { value: o } = t;
    return Number.isNaN(a) ? !0 : o === a;
  }
  async validatorIsNotEqual(t, e, r) {
    const { formula1: a } = e;
    return Number.isNaN(a) ? !0 : t.value !== a;
  }
  async validatorIsBetween(t, e, r) {
    const { formula1: a, formula2: o } = e;
    if (Number.isNaN(a) || Number.isNaN(o))
      return !0;
    const n = Math.min(a, o), i = Math.max(a, o);
    return t.value >= n && t.value <= i;
  }
  async validatorIsNotBetween(t, e, r) {
    const { formula1: a, formula2: o } = e;
    if (Number.isNaN(a) || Number.isNaN(o))
      return !0;
    const n = Math.min(a, o), i = Math.max(a, o);
    return t.value < n || t.value > i;
  }
  async validatorIsGreaterThan(t, e, r) {
    const { formula1: a } = e;
    return Number.isNaN(a) ? !0 : t.value > a;
  }
  async validatorIsGreaterThanOrEqual(t, e, r) {
    const { formula1: a } = e;
    return Number.isNaN(a) ? !0 : t.value >= a;
  }
  async validatorIsLessThan(t, e, r) {
    const { formula1: a } = e;
    return Number.isNaN(a) ? !0 : t.value < a;
  }
  async validatorIsLessThanOrEqual(t, e, r) {
    const { formula1: a } = e;
    return Number.isNaN(a) ? !0 : t.value <= a;
  }
  async validator(t, e) {
    const { value: r, unitId: a, subUnitId: o } = t, n = this.isEmptyCellValue(r), { allowBlank: i = !0, operator: l } = e;
    if (n)
      return i;
    const d = await this.parseFormula(e, a, o, t.row, t.column);
    if (!d.isFormulaValid || !await this.isValidType(t, d, e))
      return !1;
    if (!l)
      return !0;
    const u = this.transform(t, d, e);
    switch (l) {
      case s.BETWEEN:
        return this.validatorIsBetween(u, d, e);
      case s.EQUAL:
        return this.validatorIsEqual(u, d, e);
      case s.GREATER_THAN:
        return this.validatorIsGreaterThan(u, d, e);
      case s.GREATER_THAN_OR_EQUAL:
        return this.validatorIsGreaterThanOrEqual(u, d, e);
      case s.LESS_THAN:
        return this.validatorIsLessThan(u, d, e);
      case s.LESS_THAN_OR_EQUAL:
        return this.validatorIsLessThanOrEqual(u, d, e);
      case s.NOT_BETWEEN:
        return this.validatorIsNotBetween(u, d, e);
      case s.NOT_EQUAL:
        return this.validatorIsNotEqual(u, d, e);
      default:
        throw new Error("Unknown operator.");
    }
  }
};
G = Re([
  w(0, V(oe)),
  w(1, V(H))
], G);
export {
  S as AddDataValidationMutation,
  G as BaseDataValidator,
  h as DataValidationModel,
  I as DataValidationResourceController,
  Ve as DataValidatorDropdownType,
  pe as DataValidatorRegistryScope,
  F as DataValidatorRegistryService,
  B as FORMULA1,
  x as FORMULA2,
  N as RemoveDataValidationMutation,
  Ce as TWO_FORMULA_OPERATOR_COUNT,
  P as TYPE,
  Ue as TextLengthErrorTitleMap,
  C as UniverDataValidationPlugin,
  v as UpdateDataValidationMutation,
  p as UpdateRuleType,
  j as getRuleOptions,
  Q as getRuleSetting
};
