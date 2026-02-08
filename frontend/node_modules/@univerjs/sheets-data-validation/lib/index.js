var St = Object.defineProperty;
var Et = (o, a, e) => a in o ? St(o, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[a] = e;
var m = (o, a, e) => Et(o, typeof a != "symbol" ? a + "" : a, e);
import { Inject as v, ICommandService as U, IUniverInstanceService as O, Disposable as W, ObjectMatrix as Se, getIntersectRange as ot, UniverInstanceType as N, Range as L, Rectangle as I, isFormulaString as S, DataValidationType as T, getOriginCellValue as Vt, RBush as Mt, debounce as yt, Tools as E, DataValidationStatus as b, WrapStrategy as ve, DataValidationOperator as h, numfmt as P, dayjs as st, DataValidationRenderMode as Pe, CommandType as z, IUndoRedoService as Z, sequenceExecute as Ae, isRangesEqual as nt, IPermissionService as Tt, generateRandomId as Ye, toDisposable as Xe, Injector as Ke, CellValueType as Ft, RxDisposable as Nt, LifecycleService as Ct, LifecycleStages as et, bufferDebounceTime as Ot, DependentOn as wt, IConfigService as It, Plugin as At, merge as Dt } from "@univerjs/core";
import { DataValidationModel as De, DataValidatorRegistryService as q, UpdateRuleType as M, BaseDataValidator as G, TextLengthErrorTitleMap as bt, AddDataValidationMutation as D, RemoveDataValidationMutation as A, UpdateDataValidationMutation as y, getRuleSetting as Lt, getRuleOptions as Ut, UniverDataValidationPlugin as Bt } from "@univerjs/data-validation";
import { ERROR_TYPE_SET as xt, LexerTreeBuilder as Y, isReferenceString as lt, sequenceNodeType as Pt, deserializeRangeWithSheet as Ht, deserializeRangeWithSheetWithCache as Wt, operatorToken as $t } from "@univerjs/engine-formula";
import { SetRangeValuesMutation as se, RemoveSheetMutation as ut, getSheetCommandTarget as ze, SetRangeValuesUndoMutationFactory as dt, WorksheetViewPermission as kt, RefRangeService as jt, handleCommonDefaultRangeChangeWithEffectRefCommands as Qt, SheetInterceptorService as ct, RemoveSheetCommand as qt, CopySheetCommand as Gt, SheetsSelectionsService as ht, ClearSelectionAllCommand as Yt } from "@univerjs/sheets";
import { Subject as Ge, bufferWhen as Xt, filter as tt } from "rxjs";
import { RegisterOtherFormulaService as mt, FormulaRefRangeService as gt } from "@univerjs/sheets-formula";
var Kt = Object.getOwnPropertyDescriptor, zt = (o, a, e, t) => {
  for (var r = t > 1 ? void 0 : t ? Kt(a, e) : a, i = o.length - 1, s; i >= 0; i--)
    (s = o[i]) && (r = s(r) || r);
  return r;
}, He = (o, a) => (e, t) => a(e, t, o);
let Q = class extends W {
  constructor(a, e, t) {
    super();
    m(this, "_cacheMatrix", /* @__PURE__ */ new Map());
    m(this, "_dirtyRanges$", new Ge());
    m(this, "dirtyRanges$", this._dirtyRanges$.asObservable());
    this._commandService = a, this._univerInstanceService = e, this._sheetDataValidationModel = t, this._initDirtyRanges(), this._initSheetRemove();
  }
  _initDirtyRanges() {
    this.disposeWithMe(this._commandService.onCommandExecuted((a) => {
      if (a.id === se.id) {
        const { cellValue: e, unitId: t, subUnitId: r } = a.params;
        if (e) {
          const i = new Se(e).getDataRange();
          if (i.endRow === -1) return;
          const l = this._sheetDataValidationModel.getRules(t, r).map((u) => u.ranges).flat().map((u) => ot(u, i)).filter(Boolean);
          l.length && this.markRangeDirty(t, r, l, !0);
        }
      }
    }));
  }
  _initSheetRemove() {
    this.disposeWithMe(this._commandService.onCommandExecuted((a) => {
      var e;
      if (a.id === ut.id) {
        const { unitId: t, subUnitId: r } = a.params;
        (e = this._cacheMatrix.get(t)) == null || e.delete(r);
      }
    })), this.disposeWithMe(this._univerInstanceService.unitDisposed$.subscribe((a) => {
      a.type === N.UNIVER_SHEET && this._cacheMatrix.delete(a.getUnitId());
    }));
  }
  _ensureCache(a, e) {
    let t = this._cacheMatrix.get(a);
    t || (t = /* @__PURE__ */ new Map(), this._cacheMatrix.set(a, t));
    let r = t.get(e);
    return r || (r = new Se(), t.set(e, r)), r;
  }
  ensureCache(a, e) {
    return this._ensureCache(a, e);
  }
  addRule(a, e, t) {
    this.markRangeDirty(a, e, t.ranges);
  }
  removeRule(a, e, t) {
    this._deleteRange(a, e, t.ranges);
  }
  markRangeDirty(a, e, t, r) {
    const i = this._ensureCache(a, e);
    t.forEach((s) => {
      L.foreach(s, (n, l) => {
        i.getValue(n, l) !== void 0 && i.setValue(n, l, void 0);
      });
    }), this._dirtyRanges$.next({ unitId: a, subUnitId: e, ranges: t, isSetRange: r });
  }
  _deleteRange(a, e, t) {
    const r = this._ensureCache(a, e);
    t.forEach((i) => {
      L.foreach(i, (s, n) => {
        r.realDeleteValue(s, n);
      });
    }), this._dirtyRanges$.next({ unitId: a, subUnitId: e, ranges: t });
  }
  getValue(a, e, t, r) {
    return this._ensureCache(a, e).getValue(t, r);
  }
};
Q = zt([
  He(0, v(U)),
  He(1, v(O)),
  He(2, v(De))
], Q);
function oe(o) {
  var a, e;
  return (e = (a = o == null ? void 0 : o[0]) == null ? void 0 : a[0]) == null ? void 0 : e.v;
}
function pe(o) {
  var a;
  return (a = o == null ? void 0 : o[0]) == null ? void 0 : a[0];
}
function C(o) {
  return !xt.has(o);
}
function de(o, a) {
  var t;
  const e = a.getValidatorItem(o);
  return (t = e == null ? void 0 : e.offsetFormulaByRange) != null ? t : !1;
}
var Zt = Object.getOwnPropertyDescriptor, Jt = (o, a, e, t) => {
  for (var r = t > 1 ? void 0 : t ? Zt(a, e) : a, i = o.length - 1, s; i >= 0; i--)
    (s = o[i]) && (r = s(r) || r);
  return r;
}, re = (o, a) => (e, t) => a(e, t, o);
let H = class extends W {
  constructor(a, e, t, r, i) {
    super();
    /**
     * Map of origin formula of rule
     */
    m(this, "_ruleFormulaMap", /* @__PURE__ */ new Map());
    m(this, "_ruleFormulaMap2", /* @__PURE__ */ new Map());
    this._instanceSrv = a, this._registerOtherFormulaService = e, this._dataValidationModel = t, this._dataValidationCacheService = r, this._validatorRegistryService = i, this._initFormulaResultHandler(), this._initDirtyRanges();
  }
  dispose() {
    super.dispose(), this._ruleFormulaMap.clear(), this._ruleFormulaMap2.clear();
  }
  _initFormulaResultHandler() {
    this.disposeWithMe(this._registerOtherFormulaService.formulaResult$.subscribe((a) => {
      for (const e in a) {
        const t = a[e];
        if (this._instanceSrv.getUnitType(e) === N.UNIVER_SHEET)
          for (const i in t) {
            const s = t[i], { ruleFormulaMap: n } = this._ensureMaps(e, i);
            s.forEach((l) => {
              var c, g;
              const u = n.get((c = l.extra) == null ? void 0 : c.ruleId), d = this._dataValidationModel.getRuleById(e, i, (g = l.extra) == null ? void 0 : g.ruleId);
              d && u && this._dataValidationCacheService.markRangeDirty(e, i, d.ranges);
            });
          }
      }
    }));
  }
  _ensureMaps(a, e) {
    let t = this._ruleFormulaMap.get(a), r = this._ruleFormulaMap2.get(a);
    t || (t = /* @__PURE__ */ new Map(), this._ruleFormulaMap.set(a, t)), r || (r = /* @__PURE__ */ new Map(), this._ruleFormulaMap2.set(a, r));
    let i = t.get(e);
    i || (i = /* @__PURE__ */ new Map(), t.set(e, i));
    let s = r.get(e);
    return s || (s = /* @__PURE__ */ new Map(), r.set(e, s)), { ruleFormulaMap: i, ruleFormulaMap2: s };
  }
  _registerFormula(a, e, t, r, i) {
    return this._registerOtherFormulaService.registerFormulaWithRange(a, e, r, i, { ruleId: t });
  }
  _handleDirtyRanges(a, e, t) {
    this._dataValidationModel.getRules(a, e).forEach((i) => {
      const s = i.ranges;
      I.doAnyRangesIntersect(s, t) && this.makeRuleDirty(a, e, i.uid);
    });
  }
  _initDirtyRanges() {
    this.disposeWithMe(this._dataValidationCacheService.dirtyRanges$.subscribe((a) => {
      a.isSetRange && this._handleDirtyRanges(a.unitId, a.subUnitId, a.ranges);
    }));
  }
  deleteByRuleId(a, e, t) {
    const { ruleFormulaMap: r, ruleFormulaMap2: i } = this._ensureMaps(a, e), s = this._dataValidationModel.getRuleById(a, e, t), n = r.get(t);
    if (!s || !n)
      return;
    const l = r.get(t);
    l && (r.delete(t), this._registerOtherFormulaService.deleteFormula(a, e, [l.formulaId]));
    const u = i.get(t);
    u && (i.delete(t), this._registerOtherFormulaService.deleteFormula(a, e, [u.formulaId]));
  }
  _addFormulaByRange(a, e, t, r, i, s) {
    const { ruleFormulaMap: n, ruleFormulaMap2: l } = this._ensureMaps(a, e), u = s[0].startRow, d = s[0].startColumn;
    if (r && S(r)) {
      const c = this._registerFormula(a, e, t, r, s);
      n.set(t, {
        formula: r,
        originCol: d,
        originRow: u,
        formulaId: c
      });
    }
    if (i && S(i)) {
      const c = this._registerFormula(a, e, t, i, s);
      l.set(t, {
        formula: i,
        originCol: d,
        originRow: u,
        formulaId: c
      });
    }
  }
  addRule(a, e, t) {
    if (de(t.type, this._validatorRegistryService)) {
      const { ranges: r, formula1: i, formula2: s, uid: n } = t;
      this._addFormulaByRange(a, e, n, i, s, r);
    }
  }
  async getCellFormulaValue(a, e, t, r, i) {
    var f, p;
    const { ruleFormulaMap: s } = this._ensureMaps(a, e), n = s.get(t);
    if (!n)
      return Promise.resolve(void 0);
    const l = await this._registerOtherFormulaService.getFormulaValue(a, e, n.formulaId), { originRow: u, originCol: d } = n, c = r - u, g = i - d;
    return pe((p = (f = l == null ? void 0 : l.result) == null ? void 0 : f[c]) == null ? void 0 : p[g]);
  }
  async getCellFormula2Value(a, e, t, r, i) {
    var f, p;
    const { ruleFormulaMap2: s } = this._ensureMaps(a, e), n = s.get(t);
    if (!n)
      return Promise.resolve(void 0);
    const l = await this._registerOtherFormulaService.getFormulaValue(a, e, n.formulaId), { originRow: u, originCol: d } = n, c = r - u, g = i - d;
    return pe((p = (f = l == null ? void 0 : l.result) == null ? void 0 : f[c]) == null ? void 0 : p[g]);
  }
  getCellFormulaValueSync(a, e, t, r, i) {
    var f, p;
    const { ruleFormulaMap: s } = this._ensureMaps(a, e), n = s.get(t);
    if (!n)
      return;
    const l = this._registerOtherFormulaService.getFormulaValueSync(a, e, n.formulaId), { originRow: u, originCol: d } = n, c = r - u, g = i - d;
    return pe((p = (f = l == null ? void 0 : l.result) == null ? void 0 : f[c]) == null ? void 0 : p[g]);
  }
  getCellFormula2ValueSync(a, e, t, r, i) {
    var f, p;
    const { ruleFormulaMap2: s } = this._ensureMaps(a, e), n = s.get(t);
    if (!n)
      return;
    const l = this._registerOtherFormulaService.getFormulaValueSync(a, e, n.formulaId), { originRow: u, originCol: d } = n, c = r - u, g = i - d;
    return pe((p = (f = l == null ? void 0 : l.result) == null ? void 0 : f[c]) == null ? void 0 : p[g]);
  }
  getRuleFormulaInfo(a, e, t) {
    const { ruleFormulaMap: r } = this._ensureMaps(a, e);
    return r.get(t);
  }
  makeRuleDirty(a, e, t) {
    var s, n, l, u;
    const r = (n = (s = this._ruleFormulaMap.get(a)) == null ? void 0 : s.get(e)) == null ? void 0 : n.get(t), i = (u = (l = this._ruleFormulaMap2.get(a)) == null ? void 0 : l.get(e)) == null ? void 0 : u.get(t);
    r && this._registerOtherFormulaService.markFormulaDirty(a, e, r.formulaId), i && this._registerOtherFormulaService.markFormulaDirty(a, e, i.formulaId);
  }
};
H = Jt([
  re(0, O),
  re(1, v(mt)),
  re(2, v(De)),
  re(3, v(Q)),
  re(4, v(q))
], H);
var ea = Object.getOwnPropertyDescriptor, ta = (o, a, e, t) => {
  for (var r = t > 1 ? void 0 : t ? ea(a, e) : a, i = o.length - 1, s; i >= 0; i--)
    (s = o[i]) && (r = s(r) || r);
  return r;
}, ie = (o, a) => (e, t) => a(e, t, o);
let K = class extends W {
  constructor(a, e, t, r, i) {
    super();
    m(this, "_formulaRuleMap", /* @__PURE__ */ new Map());
    this._instanceService = a, this._registerOtherFormulaService = e, this._dataValidationCacheService = t, this._dataValidationModel = r, this._validatorRegistryService = i, this._initFormulaResultHandler();
  }
  _initFormulaResultHandler() {
    this.disposeWithMe(this._registerOtherFormulaService.formulaResult$.subscribe((a) => {
      for (const e in a) {
        const t = a[e];
        if (this._instanceService.getUnitType(e) === N.UNIVER_SHEET)
          for (const i in t) {
            const s = t[i], n = this._ensureRuleFormulaMap(e, i);
            s.forEach((l) => {
              var u, d;
              if (n.get((u = l.extra) == null ? void 0 : u.ruleId)) {
                const c = this._dataValidationModel.getRuleById(e, i, (d = l.extra) == null ? void 0 : d.ruleId);
                c && this._dataValidationCacheService.markRangeDirty(e, i, c.ranges);
              }
            });
          }
      }
    }));
  }
  _ensureRuleFormulaMap(a, e) {
    let t = this._formulaRuleMap.get(a);
    t || (t = /* @__PURE__ */ new Map(), this._formulaRuleMap.set(a, t));
    let r = t.get(e);
    return r || (r = /* @__PURE__ */ new Map(), t.set(e, r)), r;
  }
  _registerSingleFormula(a, e, t, r) {
    const i = [{ startColumn: 0, endColumn: 0, startRow: 0, endRow: 0 }];
    return this._registerOtherFormulaService.registerFormulaWithRange(a, e, t, i, { ruleId: r });
  }
  addRule(a, e, t) {
    if (!de(t.type, this._validatorRegistryService) && t.type !== T.CHECKBOX) {
      const { formula1: r, formula2: i, uid: s } = t, n = S(r), l = S(i);
      if (!n && !l)
        return;
      const u = this._ensureRuleFormulaMap(a, e), d = [void 0, void 0];
      if (n) {
        const c = this._registerSingleFormula(a, e, r, s);
        d[0] = { id: c, text: r };
      }
      if (l) {
        const c = this._registerSingleFormula(a, e, i, s);
        d[1] = { id: c, text: i };
      }
      u.set(s, d);
    }
  }
  removeRule(a, e, t) {
    const i = this._ensureRuleFormulaMap(a, e).get(t);
    if (!i)
      return;
    const [s, n] = i, l = [s == null ? void 0 : s.id, n == null ? void 0 : n.id].filter(Boolean);
    l.length && this._registerOtherFormulaService.deleteFormula(a, e, l);
  }
  getRuleFormulaResult(a, e, t) {
    const i = this._ensureRuleFormulaMap(a, e).get(t);
    if (!i)
      return Promise.resolve(null);
    const s = async (n) => n && this._registerOtherFormulaService.getFormulaValue(a, e, n.id);
    return Promise.all([
      s(i[0]),
      s(i[1])
    ]);
  }
  getRuleFormulaResultSync(a, e, t) {
    const i = this._ensureRuleFormulaMap(a, e).get(t);
    if (i)
      return i.map((s) => {
        if (s)
          return this._registerOtherFormulaService.getFormulaValueSync(a, e, s.id);
      });
  }
  getRuleFormulaInfo(a, e, t) {
    return this._ensureRuleFormulaMap(a, e).get(t);
  }
};
K = ta([
  ie(0, O),
  ie(1, v(mt)),
  ie(2, v(Q)),
  ie(3, v(De)),
  ie(4, v(q))
], K);
function ne(o) {
  return Vt(o);
}
function pt(o) {
  var a;
  return String((a = ne(o)) != null ? a : "");
}
class Ze {
  constructor(a, e, t, r, i = !1) {
    m(this, "_map");
    m(this, "_tree", new Mt());
    m(this, "_dirty", !0);
    m(this, "_buildTree", () => {
      if (!this._dirty || this._disableTree)
        return;
      this._tree.clear();
      const a = [];
      this._map.forEach((e, t) => {
        e.forEach((r) => {
          a.push({
            minX: r.startRow,
            maxX: r.endRow,
            minY: r.startColumn,
            maxY: r.endColumn,
            ruleId: t
          });
        });
      }), this._tree.load(a), this._dirty = !1;
    });
    m(this, "_debonceBuildTree", yt(this._buildTree, 0));
    this._unitId = e, this._subUnitId = t, this._univerInstanceService = r, this._disableTree = i, this._map = a, this._buildTree();
  }
  get _worksheet() {
    var a;
    return (a = this._univerInstanceService.getUnit(this._unitId, N.UNIVER_SHEET)) == null ? void 0 : a.getSheetBySheetId(this._subUnitId);
  }
  _addRule(a, e) {
    if (!this._worksheet)
      return;
    const t = I.mergeRanges(e.map((r) => L.transformRange(r, this._worksheet)));
    this._map.forEach((r, i) => {
      const s = I.subtractMulti(r, t);
      s.length === 0 ? this._map.delete(i) : this._map.set(i, s);
    }), this._dirty = !0, this._map.set(a, t), this._debonceBuildTree();
  }
  addRule(a) {
    this._addRule(a.uid, a.ranges);
  }
  removeRange(a) {
    if (!this._worksheet)
      return;
    const e = a.map((t) => L.transformRange(t, this._worksheet));
    this._map.forEach((t, r) => {
      const i = I.subtractMulti(t, e);
      i.length === 0 ? this._map.delete(r) : this._map.set(r, i);
    }), this._dirty = !0, this._debonceBuildTree();
  }
  _removeRule(a) {
    this._map.delete(a), this._dirty = !0, this._debonceBuildTree();
  }
  removeRule(a) {
    this._removeRule(a.uid);
  }
  updateRange(a, e) {
    this._removeRule(a), this._addRule(a, e);
  }
  addRangeRules(a) {
    a.forEach(({ id: e, ranges: t }) => {
      if (!t.length)
        return;
      let r = this._map.get(e);
      r ? (this._map.set(e, I.mergeRanges([...r, ...t])), r = this._map.get(e)) : (r = t, this._map.set(e, r)), this._map.forEach((i, s) => {
        if (s === e)
          return;
        const n = I.subtractMulti(i, t);
        n.length === 0 ? this._map.delete(s) : this._map.set(s, n);
      });
    }), this._dirty = !0, this._debonceBuildTree();
  }
  diff(a) {
    const e = [];
    let t = 0;
    return a.forEach((r, i) => {
      var l;
      const s = (l = this._map.get(r.uid)) != null ? l : [], n = r.ranges;
      s.length !== 0 && (s.length !== n.length || s.some((u, d) => !I.equals(u, n[d]))) && e.push({
        type: "update",
        ruleId: r.uid,
        oldRanges: n,
        newRanges: I.sort(s),
        rule: r
      }), s.length === 0 && (e.push({
        type: "delete",
        rule: r,
        index: i - t
      }), t++);
    }), e;
  }
  diffWithAddition(a, e) {
    const t = [];
    let r = 0;
    return a.forEach((i, s) => {
      var u;
      const n = (u = this._map.get(i.uid)) != null ? u : [], l = i.ranges;
      n.length !== 0 && (n.length !== l.length || n.some((d, c) => !I.equals(d, l[c]))) && t.push({
        type: "update",
        ruleId: i.uid,
        oldRanges: l,
        newRanges: I.sort(n),
        rule: i
      }), n.length === 0 && (t.push({
        type: "delete",
        rule: i,
        index: s - r
      }), r++);
    }), Array.from(e).forEach((i) => {
      var n;
      const s = (n = this._map.get(i.uid)) != null ? n : [];
      t.push({
        type: "add",
        rule: {
          ...i,
          ranges: I.sort(s)
        }
      });
    }), t;
  }
  clone() {
    return new Ze(
      new Map(E.deepClone(Array.from(this._map.entries()))),
      this._unitId,
      this._subUnitId,
      this._univerInstanceService,
      // disable tree on cloned matrix, cause there is no need to search
      !0
    );
  }
  getValue(a, e) {
    this._dirty && this._buildTree();
    const t = this._tree.search({
      minX: a,
      maxX: a,
      minY: e,
      maxY: e
    });
    return t.length > 0 ? t[0].ruleId : void 0;
  }
}
var aa = Object.getOwnPropertyDescriptor, ra = (o, a, e, t) => {
  for (var r = t > 1 ? void 0 : t ? aa(a, e) : a, i = o.length - 1, s; i >= 0; i--)
    (s = o[i]) && (r = s(r) || r);
  return r;
}, X = (o, a) => (e, t) => a(e, t, o);
let F = class extends W {
  constructor(a, e, t, r, i, s, n) {
    super();
    m(this, "_ruleMatrixMap", /* @__PURE__ */ new Map());
    m(this, "_validStatusChange$", new Ge());
    m(this, "_ruleChange$", new Ge());
    m(this, "ruleChange$", this._ruleChange$.asObservable());
    m(this, "validStatusChange$", this._validStatusChange$.asObservable());
    this._dataValidationModel = a, this._univerInstanceService = e, this._dataValidatorRegistryService = t, this._dataValidationCacheService = r, this._dataValidationFormulaService = i, this._dataValidationCustomFormulaService = s, this._commandService = n, this._initRuleUpdateListener(), this.disposeWithMe(() => {
      this._ruleChange$.complete(), this._validStatusChange$.complete();
    }), this._initUniverInstanceListener();
  }
  _initUniverInstanceListener() {
    this.disposeWithMe(
      this._univerInstanceService.unitDisposed$.subscribe((a) => {
        this._ruleMatrixMap.delete(a.getUnitId());
      })
    ), this.disposeWithMe(
      this._commandService.onCommandExecuted((a) => {
        if (a.id === ut.id) {
          const { unitId: e, subUnitId: t } = a.params, r = this._ruleMatrixMap.get(e);
          r && r.delete(t);
        }
      })
    );
  }
  _initRuleUpdateListener() {
    const a = this._dataValidationModel.getAll();
    for (const [e, t] of a)
      for (const [r, i] of t)
        for (const s of i)
          this._addRule(e, r, s), this._ruleChange$.next({
            type: "add",
            unitId: e,
            subUnitId: r,
            rule: s,
            source: "patched"
          });
    this.disposeWithMe(
      this._dataValidationModel.ruleChange$.subscribe((e) => {
        switch (e.type) {
          case "add":
            this._addRule(e.unitId, e.subUnitId, e.rule);
            break;
          case "update":
            this._updateRule(e.unitId, e.subUnitId, e.rule.uid, e.oldRule, e.updatePayload);
            break;
          case "remove":
            this._removeRule(e.unitId, e.subUnitId, e.rule);
            break;
        }
        this._ruleChange$.next(e);
      })
    );
  }
  _ensureRuleMatrix(a, e) {
    let t = this._ruleMatrixMap.get(a);
    t || (t = /* @__PURE__ */ new Map(), this._ruleMatrixMap.set(a, t));
    let r = t.get(e);
    return r || (r = new Ze(/* @__PURE__ */ new Map(), a, e, this._univerInstanceService), t.set(e, r)), r;
  }
  _addRuleSideEffect(a, e, t) {
    this._ensureRuleMatrix(a, e).addRule(t), this._dataValidationCacheService.addRule(a, e, t), this._dataValidationFormulaService.addRule(a, e, t), this._dataValidationCustomFormulaService.addRule(a, e, t);
  }
  _addRule(a, e, t) {
    (Array.isArray(t) ? t : [t]).forEach((i) => {
      this._addRuleSideEffect(a, e, i);
    });
  }
  _updateRule(a, e, t, r, i) {
    const s = this._ensureRuleMatrix(a, e), n = {
      ...r,
      ...i.payload
    };
    i.type === M.RANGE ? s.updateRange(t, i.payload) : i.type === M.ALL && s.updateRange(t, i.payload.ranges), this._dataValidationCacheService.removeRule(a, e, r), this._dataValidationCacheService.addRule(a, e, n), this._dataValidationFormulaService.removeRule(a, e, r.uid), this._dataValidationFormulaService.addRule(a, e, n), this._dataValidationCustomFormulaService.deleteByRuleId(a, e, t), this._dataValidationCustomFormulaService.addRule(a, e, n);
  }
  _removeRule(a, e, t) {
    this._ensureRuleMatrix(a, e).removeRule(t), this._dataValidationCacheService.removeRule(a, e, t), this._dataValidationCustomFormulaService.deleteByRuleId(a, e, t.uid);
  }
  getValidator(a) {
    return this._dataValidatorRegistryService.getValidatorItem(a);
  }
  getRuleIdByLocation(a, e, t, r) {
    return this._ensureRuleMatrix(a, e).getValue(t, r);
  }
  getRuleByLocation(a, e, t, r) {
    const i = this.getRuleIdByLocation(a, e, t, r);
    if (i)
      return this._dataValidationModel.getRuleById(a, e, i);
  }
  validator(a, e, t) {
    const { col: r, row: i, unitId: s, subUnitId: n, worksheet: l } = e, u = (p, R) => {
      t && t(p, R), R && this._validStatusChange$.next({
        unitId: s,
        subUnitId: n,
        ruleId: a.uid,
        status: p,
        row: i,
        col: r
      });
    }, d = l.getCellValueOnly(i, r), c = this.getValidator(a.type), g = l.getCellRaw(i, r), f = ne(g);
    if (c) {
      const p = this._dataValidationCacheService.ensureCache(s, n), R = p.getValue(i, r);
      return R == null ? (p.setValue(i, r, b.VALIDATING), c.validator(
        {
          value: f,
          unitId: s,
          subUnitId: n,
          row: i,
          column: r,
          worksheet: e.worksheet,
          workbook: e.workbook,
          interceptValue: ne(d),
          t: g == null ? void 0 : g.t
        },
        a
      ).then((V) => {
        const _ = V ? b.VALID : b.INVALID, w = p.getValue(i, r);
        _ === b.VALID ? p.realDeleteValue(i, r) : p.setValue(i, r, _), u(_, R !== w);
      }), b.VALIDATING) : (u(R != null ? R : b.VALID, !1), R != null ? R : b.VALID);
    } else
      return u(b.VALID, !1), b.VALID;
  }
  getRuleObjectMatrix(a, e) {
    return this._ensureRuleMatrix(a, e);
  }
  getRuleById(a, e, t) {
    return this._dataValidationModel.getRuleById(a, e, t);
  }
  getRuleIndex(a, e, t) {
    return this._dataValidationModel.getRuleIndex(a, e, t);
  }
  getRules(a, e) {
    return [...this._dataValidationModel.getRules(a, e)];
  }
  getUnitRules(a) {
    return this._dataValidationModel.getUnitRules(a);
  }
  deleteUnitRules(a) {
    return this._dataValidationModel.deleteUnitRules(a);
  }
  getSubUnitIds(a) {
    return this._dataValidationModel.getSubUnitIds(a);
  }
  getAll() {
    return this._dataValidationModel.getAll();
  }
};
F = ra([
  X(0, v(De)),
  X(1, O),
  X(2, v(q)),
  X(3, v(Q)),
  X(4, v(K)),
  X(5, v(H)),
  X(6, U)
], F);
const Ee = 1, Ve = 0;
function at(o, a) {
  return E.isBlank(o) ? a.t("dataValidation.validFail.value") : S(o) ? a.t("dataValidation.validFail.primitive") : "";
}
const fe = (o) => E.isDefine(o) && String(o).toLowerCase() === "true" ? "1" : String(o).toLowerCase() === "false" ? "0" : o;
class ia extends G {
  constructor() {
    super(...arguments);
    m(this, "id", T.CHECKBOX);
    m(this, "title", "dataValidation.checkbox.title");
    m(this, "operators", []);
    m(this, "scopes", ["sheet"]);
    m(this, "order", 41);
    m(this, "offsetFormulaByRange", !1);
    m(this, "_formulaService", this.injector.get(K));
    m(this, "skipDefaultFontRender", (e, t, r) => {
      const { unitId: i, subUnitId: s } = r, { formula1: n, formula2: l } = this.parseFormulaSync(e, i, s), u = `${t != null ? t : ""}`;
      return !u || u === `${n}` || u === `${l}`;
    });
  }
  validatorFormula(e, t, r) {
    const { formula1: i, formula2: s } = e, n = i === s;
    if (E.isBlank(i) && E.isBlank(s))
      return {
        success: !0
      };
    if (n)
      return {
        success: !1,
        formula1: this.localeService.t("dataValidation.validFail.checkboxEqual"),
        formula2: this.localeService.t("dataValidation.validFail.checkboxEqual")
      };
    const l = at(i, this.localeService), u = at(s, this.localeService);
    return {
      success: !l && !u,
      formula1: l,
      formula2: u
    };
  }
  async parseFormula(e, t, r) {
    var c, g, f, p;
    const { formula1: i = Ee, formula2: s = Ve } = e, n = await this._formulaService.getRuleFormulaResult(t, r, e.uid), l = S(i) ? oe((g = (c = n == null ? void 0 : n[0]) == null ? void 0 : c.result) == null ? void 0 : g[0][0]) : i, u = S(s) ? oe((p = (f = n == null ? void 0 : n[1]) == null ? void 0 : f.result) == null ? void 0 : p[0][0]) : s, d = C(String(l)) && C(String(u));
    return {
      formula1: fe(l),
      formula2: fe(u),
      originFormula1: l,
      originFormula2: u,
      isFormulaValid: d
    };
  }
  getExtraStyle(e, t) {
    return {
      tb: ve.CLIP
    };
  }
  parseFormulaSync(e, t, r) {
    var c, g, f, p;
    const { formula1: i = Ee, formula2: s = Ve } = e, n = this._formulaService.getRuleFormulaResultSync(t, r, e.uid), l = S(i) ? oe((g = (c = n == null ? void 0 : n[0]) == null ? void 0 : c.result) == null ? void 0 : g[0][0]) : i, u = S(s) ? oe((p = (f = n == null ? void 0 : n[1]) == null ? void 0 : f.result) == null ? void 0 : p[0][0]) : s, d = C(String(l)) && C(String(u));
    return {
      formula1: fe(l),
      formula2: fe(u),
      originFormula1: l,
      originFormula2: u,
      isFormulaValid: d
    };
  }
  async isValidType(e, t, r) {
    const { value: i, unitId: s, subUnitId: n } = e, { formula1: l, formula2: u, originFormula1: d, originFormula2: c } = await this.parseFormula(r, s, n);
    return !E.isDefine(l) || !E.isDefine(u) ? !0 : E.isDefine(i) && (String(i) === String(l) || String(i) === String(u) || String(i) === String(d != null ? d : "") || String(i) === String(c != null ? c : ""));
  }
  generateRuleErrorMessage(e) {
    return this.localeService.t("dataValidation.checkbox.error");
  }
  generateRuleName(e) {
    return this.titleStr;
  }
}
const oa = {
  [h.BETWEEN]: "dataValidation.date.operators.between",
  [h.EQUAL]: "dataValidation.date.operators.equal",
  [h.GREATER_THAN]: "dataValidation.date.operators.greaterThan",
  [h.GREATER_THAN_OR_EQUAL]: "dataValidation.date.operators.greaterThanOrEqual",
  [h.LESS_THAN]: "dataValidation.date.operators.lessThan",
  [h.LESS_THAN_OR_EQUAL]: "dataValidation.date.operators.lessThanOrEqual",
  [h.NOT_BETWEEN]: "dataValidation.date.operators.notBetween",
  [h.NOT_EQUAL]: "dataValidation.date.operators.notEqual"
};
h.BETWEEN + "", h.EQUAL + "", h.GREATER_THAN + "", h.GREATER_THAN_OR_EQUAL + "", h.LESS_THAN + "", h.LESS_THAN_OR_EQUAL + "", h.NOT_BETWEEN + "", h.NOT_EQUAL + "";
const rt = {
  [h.BETWEEN]: "dataValidation.date.ruleName.between",
  [h.EQUAL]: "dataValidation.date.ruleName.equal",
  [h.GREATER_THAN]: "dataValidation.date.ruleName.greaterThan",
  [h.GREATER_THAN_OR_EQUAL]: "dataValidation.date.ruleName.greaterThanOrEqual",
  [h.LESS_THAN]: "dataValidation.date.ruleName.lessThan",
  [h.LESS_THAN_OR_EQUAL]: "dataValidation.date.ruleName.lessThanOrEqual",
  [h.NOT_BETWEEN]: "dataValidation.date.ruleName.notBetween",
  [h.NOT_EQUAL]: "dataValidation.date.ruleName.notEqual",
  NONE: "dataValidation.date.ruleName.legal"
}, sa = {
  [h.BETWEEN]: "dataValidation.date.errorMsg.between",
  [h.EQUAL]: "dataValidation.date.errorMsg.equal",
  [h.GREATER_THAN]: "dataValidation.date.errorMsg.greaterThan",
  [h.GREATER_THAN_OR_EQUAL]: "dataValidation.date.errorMsg.greaterThanOrEqual",
  [h.LESS_THAN]: "dataValidation.date.errorMsg.lessThan",
  [h.LESS_THAN_OR_EQUAL]: "dataValidation.date.errorMsg.lessThanOrEqual",
  [h.NOT_BETWEEN]: "dataValidation.date.errorMsg.notBetween",
  [h.NOT_EQUAL]: "dataValidation.date.errorMsg.notEqual",
  NONE: "dataValidation.date.errorMsg.legal"
}, be = [
  h.BETWEEN,
  h.NOT_BETWEEN
], le = "{FORMULA1}", ue = "{FORMULA2}";
function Ka(o) {
  return o.filter(Boolean).join(",");
}
function _e(o) {
  return o.split(",").filter(Boolean);
}
function za(o) {
  const a = ne(o);
  return a == null ? "" : a.toString();
}
function Le(o, a, e) {
  const { formula1: t, formula2: r } = a, i = a.ranges[0].startRow, s = a.ranges[0].startColumn, n = e.row - i, l = e.col - s, u = S(t) ? o.moveFormulaRefOffset(t, l, n, !0) : t, d = S(r) ? o.moveFormulaRefOffset(r, l, n, !0) : r;
  return {
    transformedFormula1: u,
    transformedFormula2: d
  };
}
const We = (o) => {
  var e, t;
  if (o == null || typeof o == "boolean")
    return;
  if (typeof o == "number" || !Number.isNaN(+o))
    return +o;
  const a = (e = P.parseDate(o)) == null ? void 0 : e.v;
  return E.isDefine(a) ? a : (t = P.parseDate(st(o).format("YYYY-MM-DD HH:mm:ss"))) == null ? void 0 : t.v;
};
class na extends G {
  constructor() {
    super(...arguments);
    m(this, "id", T.DATE);
    m(this, "title", "dataValidation.date.title");
    m(this, "order", 40);
    m(this, "operators", [
      h.BETWEEN,
      h.EQUAL,
      h.GREATER_THAN,
      h.GREATER_THAN_OR_EQUAL,
      h.LESS_THAN,
      h.LESS_THAN_OR_EQUAL,
      h.NOT_BETWEEN,
      h.NOT_EQUAL
    ]);
    m(this, "scopes", ["sheet"]);
    m(this, "_customFormulaService", this.injector.get(H));
    m(this, "_lexerTreeBuilder", this.injector.get(Y));
  }
  async parseFormula(e, t, r, i, s) {
    const n = await this._customFormulaService.getCellFormulaValue(t, r, e.uid, i, s), l = await this._customFormulaService.getCellFormula2Value(t, r, e.uid, i, s), { formula1: u, formula2: d } = e, c = C(String(n == null ? void 0 : n.v)) && C(String(l == null ? void 0 : l.v));
    return {
      formula1: We(S(u) ? n == null ? void 0 : n.v : u),
      formula2: We(S(d) ? l == null ? void 0 : l.v : d),
      isFormulaValid: c
    };
  }
  async isValidType(e) {
    const { interceptValue: t, value: r } = e;
    return typeof r == "number" && typeof t == "string" ? !!P.parseDate(t) : typeof t == "string" ? !!P.parseDate(t) : !1;
  }
  _validatorSingleFormula(e) {
    return !E.isBlank(e) && (S(e) || !Number.isNaN(+e) || !!(e && P.parseDate(e)));
  }
  validatorFormula(e, t, r) {
    const i = e.operator;
    if (!i)
      return {
        success: !0
      };
    const s = this._validatorSingleFormula(e.formula1), n = this.localeService.t("dataValidation.validFail.date");
    if (be.includes(i)) {
      const u = this._validatorSingleFormula(e.formula2);
      return {
        success: s && u,
        formula1: s ? void 0 : n,
        formula2: u ? void 0 : n
      };
    }
    return {
      success: s,
      formula1: s ? void 0 : n
    };
  }
  normalizeFormula(e, t, r) {
    const { formula1: i, formula2: s, bizInfo: n } = e, l = (u) => {
      var c;
      if (!u)
        return u;
      let d;
      if (!Number.isNaN(+u))
        d = P.dateFromSerial(+u);
      else {
        const g = (c = P.parseDate(u)) == null ? void 0 : c.v;
        if (g == null)
          return "";
        d = P.dateFromSerial(g);
      }
      return st(`${d[0]}/${d[1]}/${d[2]} ${d[3]}:${d[4]}:${d[5]}`).format(n != null && n.showTime ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD");
    };
    return {
      formula1: S(i) ? i : l(`${i}`),
      formula2: S(s) ? s : l(`${s}`)
    };
  }
  transform(e, t, r) {
    const { value: i } = e;
    return {
      ...e,
      value: We(i)
    };
  }
  get operatorNames() {
    return this.operators.map((e) => this.localeService.t(oa[e]));
  }
  generateRuleName(e) {
    var r, i;
    if (!e.operator)
      return this.localeService.t(rt.NONE);
    const t = this.localeService.t(rt[e.operator]).replace(le, (r = e.formula1) != null ? r : "").replace(ue, (i = e.formula2) != null ? i : "");
    return `${this.titleStr} ${t}`;
  }
  generateRuleErrorMessage(e, t) {
    if (!e.operator)
      return this.titleStr;
    const { transformedFormula1: r, transformedFormula2: i } = Le(this._lexerTreeBuilder, e, t);
    return `${this.localeService.t(sa[e.operator]).replace(le, r != null ? r : "").replace(ue, i != null ? i : "")}`;
  }
}
h.BETWEEN + "", h.EQUAL + "", h.GREATER_THAN + "", h.GREATER_THAN_OR_EQUAL + "", h.LESS_THAN + "", h.LESS_THAN_OR_EQUAL + "", h.NOT_BETWEEN + "", h.NOT_EQUAL + "";
h.BETWEEN + "", h.EQUAL + "", h.GREATER_THAN + "", h.GREATER_THAN_OR_EQUAL + "", h.LESS_THAN + "", h.LESS_THAN_OR_EQUAL + "", h.NOT_BETWEEN + "", h.NOT_EQUAL + "";
const Me = {
  [h.BETWEEN]: "dataValidation.errorMsg.between",
  [h.EQUAL]: "dataValidation.errorMsg.equal",
  [h.GREATER_THAN]: "dataValidation.errorMsg.greaterThan",
  [h.GREATER_THAN_OR_EQUAL]: "dataValidation.errorMsg.greaterThanOrEqual",
  [h.LESS_THAN]: "dataValidation.errorMsg.lessThan",
  [h.LESS_THAN_OR_EQUAL]: "dataValidation.errorMsg.lessThanOrEqual",
  [h.NOT_BETWEEN]: "dataValidation.errorMsg.notBetween",
  [h.NOT_EQUAL]: "dataValidation.errorMsg.notEqual",
  NONE: "dataValidation.errorMsg.legal"
};
function ye(o) {
  return +o;
}
class la extends G {
  constructor() {
    super(...arguments);
    m(this, "_customFormulaService", this.injector.get(H));
    m(this, "id", T.DECIMAL);
    m(this, "_lexerTreeBuilder", this.injector.get(Y));
    m(this, "title", "dataValidation.decimal.title");
    m(this, "order", 20);
    m(this, "operators", [
      h.BETWEEN,
      h.EQUAL,
      h.GREATER_THAN,
      h.GREATER_THAN_OR_EQUAL,
      h.LESS_THAN,
      h.LESS_THAN_OR_EQUAL,
      h.NOT_BETWEEN,
      h.NOT_EQUAL
    ]);
    m(this, "scopes", ["sheet"]);
  }
  _isFormulaOrNumber(e) {
    return !E.isBlank(e) && (S(e) || !Number.isNaN(+e));
  }
  async isValidType(e, t, r) {
    const { value: i } = e;
    return !Number.isNaN(ye(i));
  }
  transform(e, t, r) {
    const { value: i } = e;
    return {
      ...e,
      value: ye(i)
    };
  }
  _parseNumber(e) {
    return e == null ? Number.NaN : +e;
  }
  async parseFormula(e, t, r, i, s) {
    const n = await this._customFormulaService.getCellFormulaValue(t, r, e.uid, i, s), l = await this._customFormulaService.getCellFormula2Value(t, r, e.uid, i, s), { formula1: u, formula2: d } = e, c = C(String(n == null ? void 0 : n.v)) && C(String(l == null ? void 0 : l.v));
    return {
      formula1: this._parseNumber(S(u) ? n == null ? void 0 : n.v : u),
      formula2: this._parseNumber(S(d) ? l == null ? void 0 : l.v : d),
      isFormulaValid: c
    };
  }
  validatorFormula(e, t, r) {
    const i = e.operator;
    if (!i)
      return {
        success: !0
      };
    const s = E.isDefine(e.formula1) && this._isFormulaOrNumber(e.formula1), n = E.isDefine(e.formula2) && this._isFormulaOrNumber(e.formula2), l = be.includes(i), u = this.localeService.t("dataValidation.validFail.number");
    return l ? {
      success: s && n,
      formula1: s ? void 0 : u,
      formula2: n ? void 0 : u
    } : {
      success: s,
      formula1: s ? "" : u
    };
  }
  generateRuleErrorMessage(e, t) {
    if (!e.operator)
      return this.localeService.t(Me.NONE).replace("{TYPE}", this.titleStr);
    const { transformedFormula1: r, transformedFormula2: i } = Le(this._lexerTreeBuilder, e, t);
    return `${this.localeService.t(Me[e.operator]).replace(le, r != null ? r : "").replace(ue, i != null ? i : "")}`;
  }
}
function $e(o) {
  if (!o)
    return [];
  const a = /* @__PURE__ */ new Set();
  return o.forEach(
    (e) => {
      e.forEach((t) => {
        var i, s;
        const r = ne(t);
        if (r != null) {
          if (typeof r != "string" && typeof (t == null ? void 0 : t.s) == "object" && ((s = (i = t.s) == null ? void 0 : i.n) != null && s.pattern)) {
            a.add(P.format(t.s.n.pattern, r, { throws: !1 }));
            return;
          }
          C(r.toString()) && a.add(r.toString());
        }
      });
    }
  ), [...a];
}
const ua = [
  "if",
  "indirect",
  "choose",
  "offset"
];
function da(o, a) {
  if (!S(o) || lt(o.slice(1)))
    return !0;
  const t = a.sequenceNodesBuilder(o);
  return t && t.some((r) => typeof r == "object" && r.nodeType === Pt.FUNCTION && ua.indexOf(r.token.toLowerCase()) > -1);
}
function ca(o, a) {
  const { formula1: e = "", ranges: t } = o;
  if (lt(e.slice(1))) {
    const i = Ht(e.slice(1));
    if ((!i.sheetName || i.sheetName === a) && t.some((s) => I.intersects(s, i.range)))
      return !0;
  }
  return !1;
}
class ft extends G {
  constructor() {
    super(...arguments);
    m(this, "formulaService", this.injector.get(K));
    m(this, "_lexer", this.injector.get(Y));
    m(this, "_univerInstanceService", this.injector.get(O));
    m(this, "order", 50);
    m(this, "offsetFormulaByRange", !1);
    m(this, "id", T.LIST);
    m(this, "title", "dataValidation.list.title");
    m(this, "operators", []);
    m(this, "scopes", ["sheet"]);
    m(this, "skipDefaultFontRender", (e) => e.renderMode !== Pe.TEXT);
  }
  validatorFormula(e, t, r) {
    var u, d, c;
    const i = !E.isBlank(e.formula1), s = da((u = e.formula1) != null ? u : "", this._lexer), n = (c = (d = this._univerInstanceService.getUnit(t, N.UNIVER_SHEET)) == null ? void 0 : d.getSheetBySheetId(r)) == null ? void 0 : c.getName(), l = ca(e, n != null ? n : "");
    return {
      success: !!(i && s && !l),
      formula1: i ? s ? l ? this.localeService.t("dataValidation.validFail.listIntersects") : void 0 : this.localeService.t("dataValidation.validFail.listInvalid") : this.localeService.t("dataValidation.validFail.list")
    };
  }
  getExtraStyle(e, t, { style: r }) {
    var s;
    const i = (s = r.tb !== ve.OVERFLOW ? r.tb : ve.CLIP) != null ? s : ve.WRAP;
    if (e.type === T.LIST && (e.renderMode === Pe.ARROW || e.renderMode === Pe.TEXT)) {
      const n = this.getListWithColorMap(e), l = `${t != null ? t : ""}`, u = n[l];
      if (u)
        return {
          bg: {
            rgb: u
          },
          tb: i
        };
    }
    return {
      tb: i
    };
  }
  parseCellValue(e) {
    const t = e.toString();
    return _e(t);
  }
  async parseFormula(e, t, r) {
    var l, u;
    const i = await this.formulaService.getRuleFormulaResult(t, r, e.uid), s = oe((u = (l = i == null ? void 0 : i[0]) == null ? void 0 : l.result) == null ? void 0 : u[0][0]);
    return {
      formula1: void 0,
      formula2: void 0,
      isFormulaValid: C(String(s))
    };
  }
  async isValidType(e, t, r) {
    var g, f;
    const { value: i, unitId: s, subUnitId: n } = e, { formula1: l = "" } = r, u = await this.formulaService.getRuleFormulaResult(s, n, r.uid), d = S(l) ? $e((f = (g = u == null ? void 0 : u[0]) == null ? void 0 : g.result) == null ? void 0 : f[0][0]) : _e(l);
    return this.parseCellValue(i).every((p) => d.includes(p));
  }
  generateRuleName() {
    return this.localeService.t("dataValidation.list.name");
  }
  generateRuleErrorMessage() {
    return this.localeService.t("dataValidation.list.error");
  }
  getList(e, t, r) {
    var g, f, p, R;
    const { formula1: i = "" } = e, s = this.injector.get(O), n = (g = t ? s.getUniverSheetInstance(t) : void 0) != null ? g : s.getCurrentUnitForType(N.UNIVER_SHEET);
    if (!n) return [];
    const l = (f = r ? n.getSheetBySheetId(r) : void 0) != null ? f : n.getActiveSheet();
    if (!l) return [];
    const u = n.getUnitId(), d = l.getSheetId(), c = this.formulaService.getRuleFormulaResultSync(u, d, e.uid);
    return S(i) ? $e((R = (p = c == null ? void 0 : c[0]) == null ? void 0 : p.result) == null ? void 0 : R[0][0]) : _e(i);
  }
  async getListAsync(e, t, r) {
    var g, f, p, R;
    const { formula1: i = "" } = e, s = this.injector.get(O), n = (g = t ? s.getUniverSheetInstance(t) : void 0) != null ? g : s.getCurrentUnitForType(N.UNIVER_SHEET);
    if (!n) return [];
    const l = (f = r ? n.getSheetBySheetId(r) : void 0) != null ? f : n.getActiveSheet();
    if (!l) return [];
    const u = n.getUnitId(), d = l.getSheetId(), c = await this.formulaService.getRuleFormulaResult(u, d, e.uid);
    return S(i) ? $e((R = (p = c == null ? void 0 : c[0]) == null ? void 0 : p.result) == null ? void 0 : R[0][0]) : _e(i);
  }
  getListWithColor(e, t, r) {
    const i = this.getList(e, t, r), s = (e.formula2 || "").split(",");
    return i.map((n, l) => ({ label: n, color: s[l] }));
  }
  getListWithColorMap(e, t, r) {
    const i = this.getListWithColor(e, t, r), s = {};
    return i.forEach((n) => {
      n.color && (s[n.label] = n.color);
    }), s;
  }
}
class ha extends G {
  constructor() {
    super(...arguments);
    m(this, "id", T.TEXT_LENGTH);
    m(this, "title", "dataValidation.textLength.title");
    m(this, "_lexerTreeBuilder", this.injector.get(Y));
    m(this, "order", 30);
    m(this, "operators", [
      h.BETWEEN,
      h.EQUAL,
      h.GREATER_THAN,
      h.GREATER_THAN_OR_EQUAL,
      h.LESS_THAN,
      h.LESS_THAN_OR_EQUAL,
      h.NOT_BETWEEN,
      h.NOT_EQUAL
    ]);
    m(this, "scopes", ["sheet"]);
    m(this, "_customFormulaService", this.injector.get(H));
  }
  _isFormulaOrInt(e) {
    return !E.isBlank(e) && (S(e) || !Number.isNaN(+e) && Number.isInteger(+e));
  }
  validatorFormula(e, t, r) {
    const i = e.operator;
    if (!i)
      return {
        success: !1
      };
    const s = E.isDefine(e.formula1) && this._isFormulaOrInt(e.formula1), n = E.isDefine(e.formula2) && this._isFormulaOrInt(e.formula2), l = be.includes(i), u = this.localeService.t("dataValidation.validFail.number");
    return l ? {
      success: s && n,
      formula1: s ? void 0 : u,
      formula2: n ? void 0 : u
    } : {
      success: s,
      formula1: u
    };
  }
  _parseNumber(e) {
    return e == null ? Number.NaN : +e;
  }
  async parseFormula(e, t, r, i, s) {
    const n = await this._customFormulaService.getCellFormulaValue(t, r, e.uid, i, s), l = await this._customFormulaService.getCellFormula2Value(t, r, e.uid, i, s), { formula1: u, formula2: d } = e, c = C(String(n == null ? void 0 : n.v)) && C(String(l == null ? void 0 : l.v));
    return {
      formula1: this._parseNumber(S(u) ? n == null ? void 0 : n.v : u),
      formula2: this._parseNumber(S(d) ? l == null ? void 0 : l.v : d),
      isFormulaValid: c
    };
  }
  transform(e, t, r) {
    return {
      ...e,
      value: e.value.toString().length
    };
  }
  async isValidType(e, t, r) {
    const { value: i } = e;
    return typeof i == "string" || typeof i == "number";
  }
  generateRuleErrorMessage(e, t) {
    if (!e.operator)
      return this.titleStr;
    const { transformedFormula1: r, transformedFormula2: i } = Le(this._lexerTreeBuilder, e, t);
    return `${this.localeService.t(bt[e.operator]).replace(le, r != null ? r : "").replace(ue, i != null ? i : "")}`;
  }
}
function _t(o) {
  var e, t;
  return o ? o.p ? !((t = (e = o.p.body) == null ? void 0 : e.dataStream) != null ? t : "").slice(0, -2).trim() : E.isBlank(o.v) : !0;
}
function Ue(o, a, e, t, r = "command", i = !0) {
  const s = t.get(Y), n = t.get(q), l = [], u = [], d = t.get(F), c = t.get(O), g = ze(c, { unitId: o, subUnitId: a });
  if (!g)
    return {
      redoMutations: l,
      undoMutations: u
    };
  const { worksheet: f } = g, p = new Se();
  let R = !1;
  function V(_, w) {
    i && _.forEach(($) => {
      L.foreach($, (B, k) => {
        const x = f.getCellRaw(B, k), J = pt(x);
        (_t(x) || J === w) && !(x != null && x.p) && (R = !0, p.setValue(B, k, {
          v: w,
          p: null
        }));
      });
    });
  }
  if (e.forEach((_) => {
    switch (_.type) {
      case "delete":
        l.push({
          id: A.id,
          params: {
            unitId: o,
            subUnitId: a,
            ruleId: _.rule.uid,
            source: r
          }
        }), u.unshift({
          id: D.id,
          params: {
            unitId: o,
            subUnitId: a,
            rule: _.rule,
            index: _.index,
            source: r
          }
        });
        break;
      case "update": {
        if (de(_.rule.type, n)) {
          const $ = _.oldRanges[0].startRow, B = _.oldRanges[0].startColumn, k = _.newRanges[0].startRow, x = _.newRanges[0].startColumn, J = k - $, ce = x - B, he = S(_.rule.formula1) ? s.moveFormulaRefOffset(_.rule.formula1, ce, J) : _.rule.formula1, me = S(_.rule.formula2) ? s.moveFormulaRefOffset(_.rule.formula2, ce, J) : _.rule.formula2;
          he !== _.rule.formula1 || me !== _.rule.formula2 || !nt(_.newRanges, _.oldRanges) ? (l.push({
            id: y.id,
            params: {
              unitId: o,
              subUnitId: a,
              ruleId: _.ruleId,
              payload: {
                type: M.ALL,
                payload: {
                  formula1: he,
                  formula2: me,
                  ranges: _.newRanges
                }
              }
            }
          }), u.unshift({
            id: y.id,
            params: {
              unitId: o,
              subUnitId: a,
              ruleId: _.ruleId,
              payload: {
                type: M.ALL,
                payload: {
                  formula1: _.rule.formula1,
                  formula2: _.rule.formula2,
                  ranges: _.oldRanges
                }
              }
            }
          })) : (l.push({
            id: y.id,
            params: {
              unitId: o,
              subUnitId: a,
              ruleId: _.ruleId,
              payload: {
                type: M.RANGE,
                payload: _.newRanges
              },
              source: r
            }
          }), u.unshift({
            id: y.id,
            params: {
              unitId: o,
              subUnitId: a,
              ruleId: _.ruleId,
              payload: {
                type: M.RANGE,
                payload: _.oldRanges
              },
              source: r
            }
          }));
        } else
          l.push({
            id: y.id,
            params: {
              unitId: o,
              subUnitId: a,
              ruleId: _.ruleId,
              payload: {
                type: M.RANGE,
                payload: _.newRanges
              },
              source: r
            }
          }), u.unshift({
            id: y.id,
            params: {
              unitId: o,
              subUnitId: a,
              ruleId: _.ruleId,
              payload: {
                type: M.RANGE,
                payload: _.oldRanges
              },
              source: r
            }
          });
        const w = d.getRuleById(o, a, _.ruleId);
        if (w && w.type === T.CHECKBOX) {
          const B = d.getValidator(T.CHECKBOX).parseFormulaSync(w, o, a);
          V(_.newRanges, B.formula2);
        }
        break;
      }
      case "add": {
        if (l.push({
          id: D.id,
          params: {
            unitId: o,
            subUnitId: a,
            rule: _.rule,
            source: r
          }
        }), u.unshift({
          id: A.id,
          params: {
            unitId: o,
            subUnitId: a,
            ruleId: _.rule.uid,
            source: r
          }
        }), _.rule.type === T.CHECKBOX) {
          const $ = d.getValidator(T.CHECKBOX).parseFormulaSync(_.rule, o, a);
          V(_.rule.ranges, $.originFormula2);
        }
        break;
      }
    }
  }), R) {
    const _ = {
      id: se.id,
      params: {
        unitId: o,
        subUnitId: a,
        cellValue: p.getData()
      }
    }, w = {
      id: se.id,
      params: dt(t, _.params)
    };
    l.push(_), u.push(w);
  }
  return {
    redoMutations: l,
    undoMutations: u
  };
}
const ma = {
  type: z.COMMAND,
  id: "sheet.command.updateDataValidationRuleRange",
  handler(o, a) {
    if (!a)
      return !1;
    const { unitId: e, subUnitId: t, ranges: r, ruleId: i } = a, s = o.get(F), n = o.get(U), l = o.get(Z);
    if (!s.getRuleById(e, t, i))
      return !1;
    const d = s.getRuleObjectMatrix(e, t).clone();
    d.updateRange(i, r);
    const c = d.diff(s.getRules(e, t)), { redoMutations: g, undoMutations: f } = Ue(e, t, c, o);
    return l.pushUndoRedo({
      undoMutations: f,
      redoMutations: g,
      unitID: e
    }), Ae(g, n), !0;
  }
}, ga = {
  type: z.COMMAND,
  id: "sheet.command.addDataValidation",
  handler(o, a) {
    if (!a)
      return !1;
    const { unitId: e, subUnitId: t, rule: r } = a, i = o.get(F), s = o.get(U), n = o.get(Z), l = i.getRuleObjectMatrix(e, t).clone();
    l.addRule(r);
    const u = l.diff(i.getRules(e, t)), d = i.getValidator(r.type), c = {
      unitId: e,
      subUnitId: t,
      rule: {
        ...r,
        ...d == null ? void 0 : d.normalizeFormula(r, e, t)
      }
    }, { redoMutations: g, undoMutations: f } = Ue(e, t, u, o);
    return g.push({
      id: D.id,
      params: c
    }), f.unshift({
      id: A.id,
      params: {
        unitId: e,
        subUnitId: t,
        ruleId: r.uid
      }
    }), n.pushUndoRedo({
      unitID: e,
      redoMutations: g,
      undoMutations: f
    }), Ae(g, s), !0;
  }
}, pa = {
  type: z.COMMAND,
  id: "sheets.command.update-data-validation-setting",
  // eslint-disable-next-line max-lines-per-function
  handler(o, a) {
    if (!a)
      return !1;
    const e = o.get(U), t = o.get(Z), r = o.get(F), i = o.get(q), { unitId: s, subUnitId: n, ruleId: l, setting: u } = a, d = i.getValidatorItem(u.type);
    if (!d)
      return !1;
    const c = r.getRuleById(s, n, l);
    if (!c)
      return !1;
    const g = { ...c, ...u };
    if (!d.validatorFormula(g, s, n).success)
      return !1;
    const f = {
      unitId: s,
      subUnitId: n,
      ruleId: l,
      payload: {
        type: M.SETTING,
        payload: {
          ...u,
          ...d.normalizeFormula(g, s, n)
        }
      }
    }, p = [{
      id: y.id,
      params: f
    }], R = {
      unitId: s,
      subUnitId: n,
      ruleId: l,
      payload: {
        type: M.SETTING,
        payload: Lt(c)
      }
    }, V = [{
      id: y.id,
      params: R
    }];
    if (u.type === T.CHECKBOX) {
      const w = c.ranges, $ = o.get(O), B = ze($, { unitId: s, subUnitId: n });
      if (B) {
        const k = new Se(), { worksheet: x } = B, { formula2: J = Ve, formula1: ce = Ee } = c, { formula2: he = Ve, formula1: me = Ee } = u;
        let Be = !1;
        if (w.forEach((ge) => {
          L.foreach(ge, (ae, xe) => {
            const j = x.getCellRaw(ae, xe), Je = pt(j);
            (_t(j) || Je === String(J)) && !(j != null && j.p) ? (k.setValue(ae, xe, {
              v: he,
              p: null
            }), Be = !0) : Je === String(ce) && !(j != null && j.p) && (k.setValue(ae, xe, {
              v: me,
              p: null
            }), Be = !0);
          });
        }), Be) {
          const ge = {
            id: se.id,
            params: {
              unitId: s,
              subUnitId: n,
              cellValue: k.getData()
            }
          }, ae = {
            id: se.id,
            params: dt(o, ge.params)
          };
          p.push(ge), V.push(ae);
        }
      }
    }
    return Ae(p, e).result ? (t.pushUndoRedo({
      unitID: s,
      redoMutations: p,
      undoMutations: V
    }), !0) : !1;
  }
}, fa = {
  type: z.COMMAND,
  id: "sheets.command.update-data-validation-options",
  handler(o, a) {
    if (!a)
      return !1;
    const e = o.get(U), t = o.get(Z), r = o.get(F), { unitId: i, subUnitId: s, ruleId: n, options: l } = a, u = r.getRuleById(i, s, n);
    if (!u)
      return !1;
    const d = {
      unitId: i,
      subUnitId: s,
      ruleId: n,
      payload: {
        type: M.OPTIONS,
        payload: l
      }
    }, c = [{
      id: y.id,
      params: d
    }], g = {
      unitId: i,
      subUnitId: s,
      ruleId: n,
      payload: {
        type: M.OPTIONS,
        payload: Ut(u)
      }
    }, f = [{
      id: y.id,
      params: g
    }];
    return t.pushUndoRedo({
      unitID: i,
      redoMutations: c,
      undoMutations: f
    }), e.executeCommand(y.id, d), !0;
  }
}, _a = {
  type: z.COMMAND,
  id: "sheets.command.clear-range-data-validation",
  handler(o, a) {
    if (!a)
      return !1;
    const { unitId: e, subUnitId: t, ranges: r } = a, i = o.get(U), s = o.get(O), n = ze(s, { unitId: e, subUnitId: t }), l = o.get(F);
    if (!n) return !1;
    const u = o.get(Z), d = l.getRuleObjectMatrix(e, t).clone();
    d.removeRange(r);
    const c = d.diff(l.getRules(e, t)), { redoMutations: g, undoMutations: f } = Ue(e, t, c, o);
    return u.pushUndoRedo({
      unitID: e,
      redoMutations: g,
      undoMutations: f
    }), Ae(g, i).result;
  }
}, Ra = {
  type: z.COMMAND,
  id: "sheet.command.remove-all-data-validation",
  handler(o, a) {
    if (!a)
      return !1;
    const { unitId: e, subUnitId: t } = a, r = o.get(U), i = o.get(F), s = o.get(Z), n = [...i.getRules(e, t)], l = {
      unitId: e,
      subUnitId: t,
      ruleId: n.map((c) => c.uid)
    }, u = [{
      id: A.id,
      params: l
    }], d = [{
      id: D.id,
      params: {
        unitId: e,
        subUnitId: t,
        rule: n
      }
    }];
    return s.pushUndoRedo({
      redoMutations: u,
      undoMutations: d,
      unitID: e
    }), r.executeCommand(A.id, l), !0;
  }
}, va = (o, a) => {
  const e = o.get(F), { unitId: t, subUnitId: r, ruleId: i, source: s } = a;
  if (Array.isArray(i)) {
    const l = i.map((u) => e.getRuleById(t, r, u)).filter(Boolean);
    return [{
      id: D.id,
      params: {
        unitId: t,
        subUnitId: r,
        rule: l,
        source: s
      }
    }];
  }
  return [{
    id: D.id,
    params: {
      unitId: t,
      subUnitId: r,
      rule: {
        ...e.getRuleById(t, r, i)
      },
      index: e.getRuleIndex(t, r, i)
    }
  }];
}, Sa = {
  type: z.COMMAND,
  id: "sheet.command.remove-data-validation-rule",
  handler(o, a) {
    if (!a)
      return !1;
    const { unitId: e, subUnitId: t, ruleId: r } = a, i = o.get(U), s = o.get(Z), n = o.get(F), l = [{
      id: A.id,
      params: a
    }], u = [{
      id: D.id,
      params: {
        unitId: e,
        subUnitId: t,
        rule: {
          ...n.getRuleById(e, t, r)
        },
        index: n.getRuleIndex(e, t, r)
      }
    }];
    return s.pushUndoRedo({
      undoMutations: u,
      redoMutations: l,
      unitID: a.unitId
    }), i.executeCommand(A.id, a), !0;
  }
}, Ea = "SHEET_DATA_VALIDATION_PLUGIN";
var Rt = /* @__PURE__ */ ((o) => (o[o.View = 0] = "View", o[o.Edit = 1] = "Edit", o[o.ManageCollaborator = 2] = "ManageCollaborator", o[o.Print = 3] = "Print", o[o.Duplicate = 4] = "Duplicate", o[o.Comment = 5] = "Comment", o[o.Copy = 6] = "Copy", o[o.Share = 7] = "Share", o[o.Export = 8] = "Export", o[o.MoveWorksheet = 9] = "MoveWorksheet", o[o.DeleteWorksheet = 10] = "DeleteWorksheet", o[o.HideWorksheet = 11] = "HideWorksheet", o[o.RenameWorksheet = 12] = "RenameWorksheet", o[o.CreateWorksheet = 13] = "CreateWorksheet", o[o.SetWorksheetStyle = 14] = "SetWorksheetStyle", o[o.EditWorksheetCell = 15] = "EditWorksheetCell", o[o.InsertHyperlink = 16] = "InsertHyperlink", o[o.Sort = 17] = "Sort", o[o.Filter = 18] = "Filter", o[o.PivotTable = 19] = "PivotTable", o[o.FloatImg = 20] = "FloatImg", o[o.History = 21] = "History", o[o.RwHgtClWdt = 22] = "RwHgtClWdt", o[o.ViemRwHgtClWdt = 23] = "ViemRwHgtClWdt", o[o.ViewFilter = 24] = "ViewFilter", o[o.MoveSheet = 25] = "MoveSheet", o[o.DeleteSheet = 26] = "DeleteSheet", o[o.HideSheet = 27] = "HideSheet", o[o.CopySheet = 28] = "CopySheet", o[o.RenameSheet = 29] = "RenameSheet", o[o.CreateSheet = 30] = "CreateSheet", o[o.SelectProtectedCells = 31] = "SelectProtectedCells", o[o.SelectUnProtectedCells = 32] = "SelectUnProtectedCells", o[o.SetCellStyle = 33] = "SetCellStyle", o[o.SetCellValue = 34] = "SetCellValue", o[o.SetRowStyle = 35] = "SetRowStyle", o[o.SetColumnStyle = 36] = "SetColumnStyle", o[o.InsertRow = 37] = "InsertRow", o[o.InsertColumn = 38] = "InsertColumn", o[o.DeleteRow = 39] = "DeleteRow", o[o.DeleteColumn = 40] = "DeleteColumn", o[o.EditExtraObject = 41] = "EditExtraObject", o[o.Delete = 42] = "Delete", o[o.RecoverHistory = 43] = "RecoverHistory", o[o.ViewHistory = 44] = "ViewHistory", o[o.CreatePermissionObject = 45] = "CreatePermissionObject", o[o.UNRECOGNIZED = -1] = "UNRECOGNIZED", o))(Rt || {}), Va = Object.getOwnPropertyDescriptor, Ma = (o, a, e, t) => {
  for (var r = t > 1 ? void 0 : t ? Va(a, e) : a, i = o.length - 1, s; i >= 0; i--)
    (s = o[i]) && (r = s(r) || r);
  return r;
}, ke = (o, a) => (e, t) => a(e, t, o);
let Te = class extends W {
  constructor(o, a, e) {
    super(), this._univerInstanceService = o, this._permissionService = a, this._lexerTreeBuilder = e;
  }
  getFormulaRefCheck(o) {
    var e, t;
    const a = this._lexerTreeBuilder.sequenceNodesBuilder(o);
    if (!a)
      return !0;
    for (let r = 0; r < a.length; r++) {
      const i = a[r];
      if (typeof i == "string")
        continue;
      const { token: s } = i, n = Wt(s), l = this._univerInstanceService.getCurrentUnitForType(N.UNIVER_SHEET);
      let u = l.getActiveSheet();
      const d = l.getUnitId();
      if (n.sheetName) {
        if (u = l.getSheetBySheetName(n.sheetName), !u)
          return !1;
        const R = u == null ? void 0 : u.getSheetId();
        if (!this._permissionService.getPermissionPoint(new kt(d, R).id)) return !1;
      }
      if (!u)
        return !1;
      const { startRow: c, endRow: g, startColumn: f, endColumn: p } = n.range;
      for (let R = c; R <= g; R++)
        for (let V = f; V <= p; V++) {
          const _ = (t = (e = u.getCell(R, V)) == null ? void 0 : e.selectionProtection) == null ? void 0 : t[0];
          if ((_ == null ? void 0 : _[Rt.View]) === !1)
            return !1;
        }
    }
    return !0;
  }
};
Te = Ma([
  ke(0, O),
  ke(1, Tt),
  ke(2, v(Y))
], Te);
const ya = "sheets-data-validation.config", it = {};
var Ta = Object.getOwnPropertyDescriptor, Fa = (o, a, e, t) => {
  for (var r = t > 1 ? void 0 : t ? Ta(a, e) : a, i = o.length - 1, s; i >= 0; i--)
    (s = o[i]) && (r = s(r) || r);
  return r;
}, je = (o, a) => (e, t) => a(e, t, o);
let Fe = class extends W {
  constructor(a, e, t) {
    super();
    m(this, "_disposableMap", /* @__PURE__ */ new Map());
    m(this, "registerRule", (a, e, t) => {
      de(t.type, this._validatorRegistryService) && this.register(a, e, t);
    });
    this._dataValidationModel = a, this._formulaRefRangeService = e, this._validatorRegistryService = t, this._initRefRange();
  }
  _getIdWithUnitId(a, e, t) {
    return `${a}_${e}_${t}`;
  }
  // eslint-disable-next-line max-lines-per-function
  register(a, e, t) {
    const r = t.ranges, i = t.formula1, s = t.formula2, n = this._formulaRefRangeService.registerRangeFormula(a, e, r, [i != null ? i : "", s != null ? s : ""], (u) => {
      if (u.length === 0)
        return {
          undos: [{
            id: D.id,
            params: {
              unitId: a,
              subUnitId: e,
              rule: t,
              source: "patched"
            }
          }],
          redos: [{
            id: A.id,
            params: {
              unitId: a,
              subUnitId: e,
              ruleId: t.uid,
              source: "patched"
            }
          }]
        };
      const d = [], c = [], g = u[0];
      d.push({
        id: y.id,
        params: {
          unitId: a,
          subUnitId: e,
          ruleId: t.uid,
          payload: {
            type: M.ALL,
            payload: {
              ranges: g.ranges,
              formula1: g.formulas[0],
              formula2: g.formulas[1]
            }
          },
          source: "patched"
        }
      }), c.push({
        id: y.id,
        params: {
          unitId: a,
          subUnitId: e,
          ruleId: t.uid,
          payload: {
            type: M.ALL,
            payload: {
              ranges: r,
              formula1: i,
              formula2: s
            }
          },
          source: "patched"
        }
      });
      for (let f = 1; f < u.length; f++) {
        const p = u[f], R = Ye();
        d.push({
          id: D.id,
          params: {
            unitId: a,
            subUnitId: e,
            rule: {
              ...t,
              uid: R,
              formula1: p.formulas[0],
              formula2: p.formulas[1],
              ranges: p.ranges
            },
            source: "patched"
          }
        }), c.push({
          id: A.id,
          params: {
            unitId: a,
            subUnitId: e,
            ruleId: R,
            source: "patched"
          }
        });
      }
      return {
        undos: c,
        redos: d
      };
    }), l = this._getIdWithUnitId(a, e, t.uid);
    this._disposableMap.set(l, n);
  }
  _initRefRange() {
    const a = this._dataValidationModel.getAll();
    for (const [e, t] of a)
      for (const [r, i] of t)
        for (const s of i)
          this.registerRule(e, r, s);
    this.disposeWithMe(
      this._dataValidationModel.ruleChange$.subscribe((e) => {
        const { unitId: t, subUnitId: r, rule: i } = e;
        switch (e.type) {
          case "add": {
            const s = e.rule;
            this.registerRule(e.unitId, e.subUnitId, s);
            break;
          }
          case "remove": {
            const s = this._disposableMap.get(this._getIdWithUnitId(t, r, i.uid));
            s && s.dispose();
            break;
          }
          case "update": {
            const s = e.rule, n = this._disposableMap.get(this._getIdWithUnitId(t, r, s.uid));
            n && n.dispose(), this.registerRule(e.unitId, e.subUnitId, s);
            break;
          }
        }
      })
    ), this.disposeWithMe(Xe(() => {
      this._disposableMap.forEach((e) => {
        e.dispose();
      }), this._disposableMap.clear();
    }));
  }
};
Fe = Fa([
  je(0, v(F)),
  je(1, v(gt)),
  je(2, v(q))
], Fe);
var Na = Object.getOwnPropertyDescriptor, Ca = (o, a, e, t) => {
  for (var r = t > 1 ? void 0 : t ? Na(a, e) : a, i = o.length - 1, s; i >= 0; i--)
    (s = o[i]) && (r = s(r) || r);
  return r;
}, ee = (o, a) => (e, t) => a(e, t, o);
let Ne = class extends W {
  constructor(a, e, t, r, i, s) {
    super();
    m(this, "_disposableMap", /* @__PURE__ */ new Map());
    m(this, "registerRule", (a, e, t) => {
      de(t.type, this._validatorRegistryService) || (this.register(a, e, t), this.registerFormula(a, e, t));
    });
    this._dataValidationModel = a, this._injector = e, this._refRangeService = t, this._dataValidationFormulaService = r, this._formulaRefRangeService = i, this._validatorRegistryService = s, this._initRefRange();
  }
  _getIdWithUnitId(a, e, t) {
    return `${a}_${e}_${t}`;
  }
  // eslint-disable-next-line max-lines-per-function
  registerFormula(a, e, t) {
    var u;
    const r = t.uid, i = this._getIdWithUnitId(a, e, r), s = (u = this._disposableMap.get(i)) != null ? u : /* @__PURE__ */ new Set(), n = (d, c) => {
      const g = this._dataValidationModel.getRuleById(a, e, r);
      if (!g)
        return { redos: [], undos: [] };
      const f = g[d];
      if (!f || f === c)
        return { redos: [], undos: [] };
      const p = {
        unitId: a,
        subUnitId: e,
        ruleId: t.uid,
        payload: {
          type: M.SETTING,
          payload: {
            type: g.type,
            formula1: g.formula1,
            formula2: g.formula2,
            [d]: c
          }
        },
        source: "patched"
      }, R = {
        unitId: a,
        subUnitId: e,
        ruleId: t.uid,
        payload: {
          type: M.SETTING,
          payload: {
            type: g.type,
            formula1: g.formula1,
            formula2: g.formula2
          }
        },
        source: "patched"
      }, V = [
        {
          id: y.id,
          params: p
        }
      ], _ = [
        {
          id: y.id,
          params: R
        }
      ];
      return { redos: V, undos: _ };
    }, l = this._dataValidationFormulaService.getRuleFormulaInfo(a, e, r);
    if (l) {
      const [d, c] = l;
      if (d) {
        const g = this._formulaRefRangeService.registerFormula(
          a,
          e,
          d.text,
          (f) => n("formula1", f)
        );
        s.add(() => g.dispose());
      }
      if (c) {
        const g = this._formulaRefRangeService.registerFormula(
          a,
          e,
          c.text,
          (f) => n("formula2", f)
        );
        s.add(() => g.dispose());
      }
    }
  }
  register(a, e, t) {
    var l;
    const r = (u) => {
      const d = [...t.ranges], g = d.map((p) => Qt(p, u)).filter((p) => !!p).flat();
      if (nt(g, d))
        return { redos: [], undos: [] };
      if (g.length) {
        const p = {
          unitId: a,
          subUnitId: e,
          ruleId: t.uid,
          payload: {
            type: M.RANGE,
            payload: g
          },
          source: "patched"
        }, R = [{ id: y.id, params: p }], V = [{
          id: y.id,
          params: {
            unitId: a,
            subUnitId: e,
            ruleId: t.uid,
            payload: {
              type: M.RANGE,
              payload: d
            },
            source: "patched"
          }
        }];
        return { redos: R, undos: V };
      } else {
        const p = { unitId: a, subUnitId: e, ruleId: t.uid }, R = [{ id: A.id, params: p }], V = va(this._injector, p);
        return { redos: R, undos: V };
      }
    }, i = [];
    t.ranges.forEach((u) => {
      const d = this._refRangeService.registerRefRange(u, r, a, e);
      i.push(() => d.dispose());
    });
    const s = this._getIdWithUnitId(a, e, t.uid), n = (l = this._disposableMap.get(s)) != null ? l : /* @__PURE__ */ new Set();
    n.add(() => i.forEach((u) => u())), this._disposableMap.set(s, n);
  }
  _initRefRange() {
    const a = this._dataValidationModel.getAll();
    for (const [e, t] of a)
      for (const [r, i] of t)
        for (const s of i)
          this.registerRule(e, r, s);
    this.disposeWithMe(
      this._dataValidationModel.ruleChange$.subscribe((e) => {
        const { unitId: t, subUnitId: r, rule: i } = e;
        switch (e.type) {
          case "add": {
            const s = e.rule;
            this.registerRule(e.unitId, e.subUnitId, s);
            break;
          }
          case "remove": {
            const s = this._disposableMap.get(this._getIdWithUnitId(t, r, i.uid));
            s && s.forEach((n) => n());
            break;
          }
          case "update": {
            const s = e.rule, n = this._disposableMap.get(this._getIdWithUnitId(t, r, s.uid));
            n && n.forEach((l) => l()), this.registerRule(e.unitId, e.subUnitId, s);
            break;
          }
        }
      })
    ), this.disposeWithMe(Xe(() => {
      this._disposableMap.forEach((e) => {
        e.forEach((t) => t());
      }), this._disposableMap.clear();
    }));
  }
};
Ne = Ca([
  ee(0, v(F)),
  ee(1, v(Ke)),
  ee(2, v(jt)),
  ee(3, v(K)),
  ee(4, v(gt)),
  ee(5, v(q))
], Ne);
var Oa = Object.getOwnPropertyDescriptor, wa = (o, a, e, t) => {
  for (var r = t > 1 ? void 0 : t ? Oa(a, e) : a, i = o.length - 1, s; i >= 0; i--)
    (s = o[i]) && (r = s(r) || r);
  return r;
}, Qe = (o, a) => (e, t) => a(e, t, o);
let Ce = class extends W {
  constructor(o, a, e) {
    super(), this._sheetInterceptorService = o, this._univerInstanceService = a, this._sheetDataValidationModel = e, this._initSheetChange();
  }
  // eslint-disable-next-line max-lines-per-function
  _initSheetChange() {
    this.disposeWithMe(
      this._sheetInterceptorService.interceptCommand({
        // eslint-disable-next-line max-lines-per-function
        getMutations: (o) => {
          var a;
          if (o.id === qt.id) {
            const e = o.params, t = e.unitId || this._univerInstanceService.getCurrentUnitForType(N.UNIVER_SHEET).getUnitId(), r = this._univerInstanceService.getUniverSheetInstance(t);
            if (!r)
              return { redos: [], undos: [] };
            const i = e.subUnitId || ((a = r.getActiveSheet()) == null ? void 0 : a.getSheetId());
            if (!i)
              return { redos: [], undos: [] };
            const s = this._sheetDataValidationModel.getRules(t, i);
            if (s.length === 0)
              return { redos: [], undos: [] };
            const n = s.map((d) => d.uid), l = {
              unitId: t,
              subUnitId: i,
              ruleId: n,
              source: "patched"
            }, u = {
              unitId: t,
              subUnitId: i,
              rule: [...s],
              source: "patched"
            };
            return {
              redos: [{
                id: A.id,
                params: l
              }],
              undos: [{
                id: D.id,
                params: u
              }]
            };
          } else if (o.id === Gt.id) {
            const e = o.params, { unitId: t, subUnitId: r, targetSubUnitId: i } = e;
            if (!t || !r || !i)
              return { redos: [], undos: [] };
            const s = this._sheetDataValidationModel.getRules(t, r);
            if (s.length === 0)
              return { redos: [], undos: [] };
            const n = s.map((l) => ({ ...l, uid: Ye(6) }));
            return {
              redos: [
                {
                  id: D.id,
                  params: {
                    unitId: t,
                    subUnitId: i,
                    rule: n,
                    source: "patched"
                  }
                }
              ],
              undos: [
                {
                  id: A.id,
                  params: {
                    unitId: t,
                    subUnitId: i,
                    ruleId: n.map((l) => l.uid),
                    source: "patched"
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
Ce = wa([
  Qe(0, v(ct)),
  Qe(1, v(O)),
  Qe(2, v(F))
], Ce);
class Ia extends G {
  constructor() {
    super(...arguments);
    m(this, "id", T.ANY);
    m(this, "title", "dataValidation.any.title");
    m(this, "operators", []);
    m(this, "scopes", ["sheet"]);
    m(this, "order", 0);
    m(this, "offsetFormulaByRange", !1);
  }
  async parseFormula(e, t, r) {
    return {
      formula1: e.formula1,
      formula2: e.formula2,
      isFormulaValid: !0
    };
  }
  validatorFormula(e, t, r) {
    return {
      success: !0
    };
  }
  async isValidType(e, t, r) {
    return !0;
  }
  generateRuleErrorMessage(e) {
    return this.localeService.t("dataValidation.any.error");
  }
}
class Aa extends G {
  constructor() {
    super(...arguments);
    m(this, "id", T.CUSTOM);
    m(this, "title", "dataValidation.custom.title");
    m(this, "operators", []);
    m(this, "scopes", ["sheet"]);
    m(this, "order", 60);
    m(this, "_customFormulaService", this.injector.get(H));
    m(this, "_lexerTreeBuilder", this.injector.get(Y));
  }
  validatorFormula(e, t, r) {
    var u;
    const i = S(e.formula1), s = (u = e.formula1) != null ? u : "", l = this._lexerTreeBuilder.checkIfAddBracket(s) === 0 && s.startsWith($t.EQUALS);
    return {
      success: i && l,
      formula1: i && l ? "" : this.localeService.t("dataValidation.validFail.formula")
    };
  }
  async parseFormula(e, t, r) {
    return {
      formula1: void 0,
      formula2: void 0,
      isFormulaValid: !0
    };
  }
  async isValidType(e, t, r) {
    const { column: i, row: s, unitId: n, subUnitId: l } = e, u = await this._customFormulaService.getCellFormulaValue(n, l, r.uid, s, i), d = u == null ? void 0 : u.v;
    return C(String(d)) && E.isDefine(d) && d !== "" ? u.t === Ft.BOOLEAN ? !!d : typeof d == "boolean" ? d : typeof d == "number" ? !!d : typeof d == "string" ? C(d) : !!d : !1;
  }
  generateRuleErrorMessage(e) {
    return this.localeService.t("dataValidation.custom.error");
  }
  generateRuleName(e) {
    var t;
    return this.localeService.t("dataValidation.custom.ruleName").replace("{FORMULA1}", (t = e.formula1) != null ? t : "");
  }
}
class Da extends ft {
  constructor() {
    super(...arguments);
    m(this, "id", T.LIST_MULTIPLE);
    m(this, "title", "dataValidation.listMultiple.title");
    m(this, "offsetFormulaByRange", !1);
    m(this, "skipDefaultFontRender", () => !0);
  }
}
class ba extends G {
  constructor() {
    super(...arguments);
    m(this, "_customFormulaService", this.injector.get(H));
    m(this, "_lexerTreeBuilder", this.injector.get(Y));
    m(this, "id", T.WHOLE);
    m(this, "title", "dataValidation.whole.title");
    m(this, "order", 10);
    m(this, "operators", [
      h.BETWEEN,
      h.EQUAL,
      h.GREATER_THAN,
      h.GREATER_THAN_OR_EQUAL,
      h.LESS_THAN,
      h.LESS_THAN_OR_EQUAL,
      h.NOT_BETWEEN,
      h.NOT_EQUAL
    ]);
    m(this, "scopes", ["sheet"]);
  }
  _isFormulaOrInt(e) {
    return !E.isBlank(e) && (S(e) || !Number.isNaN(+e) && Number.isInteger(+e));
  }
  async isValidType(e, t, r) {
    const { value: i } = e, s = ye(i);
    return !Number.isNaN(s) && Number.isInteger(s);
  }
  transform(e, t, r) {
    const { value: i } = e;
    return {
      ...e,
      value: ye(i)
    };
  }
  _parseNumber(e) {
    return e == null ? Number.NaN : +e;
  }
  async parseFormula(e, t, r, i, s) {
    const n = await this._customFormulaService.getCellFormulaValue(t, r, e.uid, i, s), l = await this._customFormulaService.getCellFormula2Value(t, r, e.uid, i, s), { formula1: u, formula2: d } = e, c = S(u) ? n == null ? void 0 : n.v : u, g = S(d) ? l == null ? void 0 : l.v : d, f = C(`${c}`) && C(`${g}`);
    return {
      formula1: this._parseNumber(c),
      formula2: this._parseNumber(g),
      isFormulaValid: f
    };
  }
  validatorFormula(e, t, r) {
    const i = e.operator;
    if (!i)
      return {
        success: !0
      };
    const s = E.isDefine(e.formula1) && this._isFormulaOrInt(e.formula1), n = E.isDefine(e.formula2) && this._isFormulaOrInt(e.formula2), l = be.includes(i), u = this.localeService.t("dataValidation.validFail.number");
    return l ? {
      success: s && n,
      formula1: s ? void 0 : u,
      formula2: n ? void 0 : u
    } : {
      success: s,
      formula1: u
    };
  }
  generateRuleErrorMessage(e, t) {
    if (!e.operator)
      return this.localeService.t(Me.NONE).replace("{TYPE}", this.titleStr);
    const { transformedFormula1: r, transformedFormula2: i } = Le(this._lexerTreeBuilder, e, t);
    return `${this.localeService.t(Me[e.operator]).replace(le, r != null ? r : "").replace(ue, i != null ? i : "")}`;
  }
}
var La = Object.getOwnPropertyDescriptor, Ua = (o, a, e, t) => {
  for (var r = t > 1 ? void 0 : t ? La(a, e) : a, i = o.length - 1, s; i >= 0; i--)
    (s = o[i]) && (r = s(r) || r);
  return r;
}, te = (o, a) => (e, t) => a(e, t, o);
let Oe = class extends Nt {
  constructor(o, a, e, t, r, i) {
    super(), this._univerInstanceService = o, this._dataValidatorRegistryService = a, this._injector = e, this._selectionManagerService = t, this._sheetInterceptorService = r, this._sheetDataValidationModel = i, this._init();
  }
  _init() {
    this._registerValidators(), this._initCommandInterceptor();
  }
  _registerValidators() {
    [
      Ia,
      la,
      ba,
      ha,
      na,
      ia,
      ft,
      Da,
      Aa
    ].forEach((o) => {
      const a = this._injector.createInstance(o);
      this.disposeWithMe(this._dataValidatorRegistryService.register(a)), this.disposeWithMe(Xe(() => this._injector.delete(o)));
    });
  }
  _initCommandInterceptor() {
    this._sheetInterceptorService.interceptCommand({
      getMutations: (o) => {
        var a;
        if (o.id === Yt.id) {
          const e = this._univerInstanceService.getCurrentUnitForType(N.UNIVER_SHEET), t = e.getUnitId(), r = e.getActiveSheet();
          if (!r)
            throw new Error("No active sheet found");
          const i = r.getSheetId(), s = (a = this._selectionManagerService.getCurrentSelections()) == null ? void 0 : a.map((c) => c.range), n = this._sheetDataValidationModel.getRuleObjectMatrix(t, i).clone();
          s && n.removeRange(s);
          const l = n.diff(this._sheetDataValidationModel.getRules(t, i)), { redoMutations: u, undoMutations: d } = Ue(t, i, l, this._injector, "patched");
          return {
            undos: d,
            redos: u
          };
        }
        return {
          undos: [],
          redos: []
        };
      }
    });
  }
};
Oe = Ua([
  te(0, O),
  te(1, v(q)),
  te(2, v(Ke)),
  te(3, v(ht)),
  te(4, v(ct)),
  te(5, v(F))
], Oe);
var Ba = Object.getOwnPropertyDescriptor, xa = (o, a, e, t) => {
  for (var r = t > 1 ? void 0 : t ? Ba(a, e) : a, i = o.length - 1, s; i >= 0; i--)
    (s = o[i]) && (r = s(r) || r);
  return r;
}, Re = (o, a) => (e, t) => a(e, t, o);
let we = class extends W {
  constructor(o, a, e, t) {
    super(), this._univerInstanceService = o, this._sheetDataValidationModel = a, this._dataValidationCacheService = e, this._lifecycleService = t, this._initRecalculate();
  }
  _initRecalculate() {
    const o = (a) => {
      if (a.length === 0)
        return;
      const e = this._univerInstanceService.getCurrentUnitForType(N.UNIVER_SHEET), t = e == null ? void 0 : e.getActiveSheet(), r = {};
      a.flat().forEach((i) => {
        r[i.unitId] || (r[i.unitId] = {}), r[i.unitId][i.subUnitId] || (r[i.unitId][i.subUnitId] = []);
        const s = this._univerInstanceService.getUnit(i.unitId, N.UNIVER_SHEET), n = s == null ? void 0 : s.getSheetBySheetId(i.subUnitId);
        n && r[i.unitId][i.subUnitId].push(...i.ranges.map((l) => L.transformRange(l, n)));
      }), Object.entries(r).forEach(([i, s]) => {
        Object.entries(s).forEach(([n, l]) => {
          (e == null ? void 0 : e.getUnitId()) === i && (t == null ? void 0 : t.getSheetId()) === n ? this.validatorRanges(i, n, l) : requestIdleCallback(() => {
            this.validatorRanges(i, n, l);
          });
        });
      });
    };
    this.disposeWithMe(this._dataValidationCacheService.dirtyRanges$.pipe(Xt(() => this._lifecycleService.lifecycle$.pipe(tt((a) => a === et.Rendered)))).subscribe(o)), this.disposeWithMe(this._dataValidationCacheService.dirtyRanges$.pipe(tt(() => this._lifecycleService.stage >= et.Rendered), Ot(20)).subscribe(o));
  }
  async _validatorByCell(o, a, e, t) {
    const r = o.getUnitId(), i = a.getSheetId();
    if (!E.isDefine(e) || !E.isDefine(t))
      throw new Error(`row or col is not defined, row: ${e}, col: ${t}`);
    const s = this._sheetDataValidationModel.getRuleByLocation(r, i, e, t);
    return s ? new Promise((n) => {
      this._sheetDataValidationModel.validator(s, { unitId: r, subUnitId: i, row: e, col: t, worksheet: a, workbook: o }, (l) => {
        n(l);
      });
    }) : b.VALID;
  }
  async validatorCell(o, a, e, t) {
    const r = this._univerInstanceService.getUnit(o, N.UNIVER_SHEET);
    if (!r)
      throw new Error(`cannot find current workbook, unitId: ${o}`);
    const i = r.getSheetBySheetId(a);
    if (!i)
      throw new Error(`cannot find current worksheet, sheetId: ${a}`);
    return this._validatorByCell(r, i, e, t);
  }
  validatorRanges(o, a, e) {
    if (!e.length)
      return Promise.resolve([]);
    const t = this._univerInstanceService.getUnit(o, N.UNIVER_SHEET);
    if (!t)
      throw new Error(`cannot find current workbook, unitId: ${o}`);
    const r = t.getSheetBySheetId(a);
    if (!r)
      throw new Error(`cannot find current worksheet, sheetId: ${a}`);
    const s = this._sheetDataValidationModel.getRules(o, a).map((l) => l.ranges).flat(), n = e.map((l) => s.map((u) => ot(l, u))).flat().filter(Boolean);
    return Promise.all(n.map((l) => {
      const u = [];
      return L.foreach(l, (d, c) => {
        u.push(this._validatorByCell(t, r, d, c));
      }), Promise.all(u);
    }));
  }
  async validatorWorksheet(o, a) {
    const e = this._univerInstanceService.getUnit(o, N.UNIVER_SHEET);
    if (!e)
      throw new Error(`cannot find current workbook, unitId: ${o}`);
    const t = e.getSheetBySheetId(a);
    if (!t)
      throw new Error(`cannot find current worksheet, sheetId: ${a}`);
    const r = this._sheetDataValidationModel.getRules(o, a);
    return await Promise.all(
      r.map((i) => Promise.all(
        i.ranges.map((s) => {
          const n = [];
          return L.foreach(s, (l, u) => {
            n.push(this._validatorByCell(e, t, l, u));
          }), Promise.all(n);
        })
      ))
    ), this._dataValidationCacheService.ensureCache(o, a);
  }
  async validatorWorkbook(o) {
    const a = this._sheetDataValidationModel.getSubUnitIds(o), e = await Promise.all(a.map((r) => this.validatorWorksheet(o, r))), t = {};
    return e.forEach((r, i) => {
      t[a[i]] = r;
    }), t;
  }
  getDataValidations(o, a, e) {
    const t = this._sheetDataValidationModel.getRuleObjectMatrix(o, a), r = /* @__PURE__ */ new Set();
    return e.forEach((s) => {
      L.foreach(s, (n, l) => {
        const u = t.getValue(n, l);
        u && r.add(u);
      });
    }), Array.from(r).map((s) => this._sheetDataValidationModel.getRuleById(o, a, s)).filter(Boolean);
  }
  getDataValidation(o, a, e) {
    return this.getDataValidations(o, a, e)[0];
  }
};
we = xa([
  Re(0, O),
  Re(1, v(F)),
  Re(2, v(Q)),
  Re(3, v(Ct))
], we);
var Pa = Object.defineProperty, Ha = Object.getOwnPropertyDescriptor, Wa = (o, a, e) => a in o ? Pa(o, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[a] = e, $a = (o, a, e, t) => {
  for (var r = t > 1 ? void 0 : t ? Ha(a, e) : a, i = o.length - 1, s; i >= 0; i--)
    (s = o[i]) && (r = s(r) || r);
  return r;
}, qe = (o, a) => (e, t) => a(e, t, o), vt = (o, a, e) => Wa(o, typeof a != "symbol" ? a + "" : a, e);
let Ie = class extends At {
  constructor(o = it, a, e, t) {
    super(), this._config = o, this._injector = a, this._commandService = e, this._configService = t;
    const { ...r } = Dt(
      {},
      it,
      this._config
    );
    this._configService.setConfig(ya, r);
  }
  onStarting() {
    [
      [Q],
      [K],
      [H],
      [we],
      [F],
      [Oe],
      [Te],
      [Ce],
      [Ne],
      [Fe]
    ].forEach((o) => {
      this._injector.add(o);
    }), [
      ga,
      ma,
      pa,
      fa,
      Sa,
      Ra,
      _a
    ].forEach((o) => {
      this._commandService.registerCommand(o);
    }), this._injector.get(Q), this._injector.get(we), this._injector.get(Oe), this._injector.get(Fe), this._injector.get(Ne);
  }
  onReady() {
    this._injector.get(Ce);
  }
  onRendered() {
    this._injector.get(Te);
  }
};
vt(Ie, "pluginName", Ea);
vt(Ie, "type", N.UNIVER_SHEET);
Ie = $a([
  wt(Bt),
  qe(1, v(Ke)),
  qe(2, U),
  qe(3, It)
], Ie);
function Za(o) {
  const e = o.get(ht).getCurrentSelections().map((i) => i.range);
  return {
    uid: Ye(6),
    type: T.DECIMAL,
    operator: h.EQUAL,
    formula1: "100",
    ranges: e != null ? e : [{ startColumn: 0, endColumn: 0, startRow: 0, endRow: 0 }]
  };
}
const Ja = "data-validation.custom-formula-input", er = "data-validation.formula-input", tr = "data-validation.list-formula-input", ar = "data-validation.checkbox-formula-input";
export {
  ga as AddSheetDataValidationCommand,
  er as BASE_FORMULA_INPUT_NAME,
  Ee as CHECKBOX_FORMULA_1,
  Ve as CHECKBOX_FORMULA_2,
  ar as CHECKBOX_FORMULA_INPUT_NAME,
  Ja as CUSTOM_FORMULA_INPUT_NAME,
  ia as CheckboxValidator,
  _a as ClearRangeDataValidationCommand,
  Ea as DATA_VALIDATION_PLUGIN_NAME,
  Q as DataValidationCacheService,
  H as DataValidationCustomFormulaService,
  Te as DataValidationFormulaController,
  K as DataValidationFormulaService,
  na as DateValidator,
  tr as LIST_FORMULA_INPUT_NAME,
  Da as ListMultipleValidator,
  ft as ListValidator,
  Ra as RemoveSheetAllDataValidationCommand,
  Sa as RemoveSheetDataValidationCommand,
  F as SheetDataValidationModel,
  we as SheetsDataValidationValidatorService,
  Ie as UniverSheetsDataValidationPlugin,
  fa as UpdateSheetDataValidationOptionsCommand,
  ma as UpdateSheetDataValidationRangeCommand,
  pa as UpdateSheetDataValidationSettingCommand,
  Za as createDefaultNewRule,
  _e as deserializeListOptions,
  ye as getCellValueNumber,
  ne as getCellValueOrigin,
  za as getDataValidationCellValue,
  Ue as getDataValidationDiffMutations,
  pe as getFormulaCellData,
  oe as getFormulaResult,
  Le as getTransformedFormula,
  C as isLegalFormulaResult,
  Ka as serializeListOptions,
  fe as transformCheckboxValue
};
