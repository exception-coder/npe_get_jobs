var ie = Object.defineProperty;
var re = (i, e, t) => e in i ? ie(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var u = (i, e, t) => re(i, typeof e != "symbol" ? e + "" : e, t);
import { CommandType as P, RxDisposable as V, UniverInstanceType as y, ICommandService as B, IUniverInstanceService as I, Inject as w, LocaleService as oe, isInternalEditorID as ce, JSONX as x, Disposable as Q, BuildTextUtils as C, Injector as ae, IConfigService as le, Plugin as ue, merge as de, createInterceptorKey as Z, DOCS_NORMAL_EDITOR_UNIT_ID_KEY as ge, DOCS_FORMULA_BAR_EDITOR_UNIT_ID_KEY as he, DisposableCollection as U, toDisposable as _e, remove as fe, composeInterceptors as Se } from "@univerjs/core";
import { NORMAL_TEXT_SELECTION_PLUGIN_STYLE as Ie, DocumentSkeleton as pe, DocumentViewModel as me, IRenderManagerService as Re } from "@univerjs/engine-render";
import { Subject as ve, BehaviorSubject as O, takeUntil as ee } from "rxjs";
const k = {
  id: "doc.operation.set-selections",
  type: P.OPERATION,
  handler: () => !0
};
var xe = Object.getOwnPropertyDescriptor, Oe = (i, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? xe(e, t) : e, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (s = o(s) || s);
  return s;
}, F = (i, e) => (t, n) => e(t, n, i);
let m = class extends V {
  constructor(e, t) {
    super();
    u(this, "_currentSelection", null);
    u(this, "_textSelectionInfo", /* @__PURE__ */ new Map());
    u(this, "_textSelection$", new ve());
    u(this, "textSelection$", this._textSelection$.asObservable());
    u(this, "_refreshSelection$", new O(null));
    u(this, "refreshSelection$", this._refreshSelection$.asObservable());
    this._commandService = e, this._univerInstanceService = t, this._listenCurrentUnit();
  }
  _listenCurrentUnit() {
    this._univerInstanceService.getCurrentTypeOfUnit$(y.UNIVER_DOC).pipe(ee(this.dispose$)).subscribe((e) => {
      if (e == null)
        return;
      const t = e.getUnitId();
      this._setCurrentSelectionNotRefresh({
        unitId: t,
        subUnitId: t
      });
    });
  }
  __getCurrentSelection() {
    return this._currentSelection;
  }
  getSelectionInfo(e = this._currentSelection) {
    return this._getTextRanges(e);
  }
  refreshSelection(e = this._currentSelection) {
    e != null && this._refresh(e);
  }
  // **Only used in test case** because this does not go through the render layer.
  __TEST_ONLY_setCurrentSelection(e) {
    this._currentSelection = e, this._refresh(e);
  }
  getTextRanges(e = this._currentSelection) {
    var t;
    return (t = this._getTextRanges(e)) == null ? void 0 : t.textRanges;
  }
  getRectRanges(e = this._currentSelection) {
    var t;
    return (t = this._getTextRanges(e)) == null ? void 0 : t.rectRanges;
  }
  getDocRanges(e = this._currentSelection) {
    var r, o;
    const t = (r = this.getTextRanges(e)) != null ? r : [], n = (o = this.getRectRanges(e)) != null ? o : [];
    return [...t, ...n].filter((c) => c.startOffset != null && c.endOffset != null).sort((c, a) => c.startOffset > a.startOffset ? 1 : c.startOffset < a.startOffset ? -1 : 0);
  }
  getActiveTextRange() {
    const e = this._getTextRanges(this._currentSelection);
    if (e == null)
      return;
    const { textRanges: t } = e;
    return t.find((n) => n.isActive);
  }
  /**
   *
   * @deprecated
   */
  getActiveRectRange() {
    const e = this._getTextRanges(this._currentSelection);
    if (e == null)
      return;
    const { rectRanges: t } = e;
    return t.find((n) => n.isActive);
  }
  // **Only used in test case** because this does not go through the render layer.
  __TEST_ONLY_add(e, t = !0) {
    this._currentSelection != null && this._addByParam({
      ...this._currentSelection,
      textRanges: e,
      rectRanges: [],
      segmentId: "",
      segmentPage: -1,
      isEditing: t,
      style: Ie
      // mock style.
    });
  }
  // Use to replace the current editor selection.
  /**
   * @deprecated pls use replaceDocRanges.
   */
  replaceTextRanges(e, t = !0, n) {
    return this.replaceDocRanges(
      e,
      this._currentSelection,
      t,
      n
    );
  }
  replaceDocRanges(e, t = this._currentSelection, n = !0, s) {
    if (t == null)
      return;
    const { unitId: r, subUnitId: o } = t;
    this._refreshSelection$.next({
      unitId: r,
      subUnitId: o,
      docRanges: e,
      isEditing: n,
      options: s
    });
  }
  // Only use in doc-selection-render.controller.ts
  __replaceTextRangesWithNoRefresh(e, t) {
    if (this._currentSelection == null)
      return;
    const n = {
      ...e,
      ...t
    };
    this._replaceByParam(n), this._textSelection$.next(n);
    const { unitId: s, subUnitId: r, segmentId: o, style: c, textRanges: a, rectRanges: l, isEditing: d } = n, h = [...a, ...l].filter((g) => g.startOffset != null && g.endOffset != null).sort((g, _) => g.startOffset > _.startOffset ? 1 : g.startOffset < _.startOffset ? -1 : 0);
    this._commandService.executeCommand(k.id, {
      unitId: s,
      subUnitId: r,
      segmentId: o,
      style: c,
      isEditing: d,
      ranges: h
    });
  }
  dispose() {
    this._textSelection$.complete(), this._refreshSelection$.complete();
  }
  _setCurrentSelectionNotRefresh(e) {
    this._currentSelection = e;
  }
  _getTextRanges(e) {
    var s;
    if (e == null)
      return;
    const { unitId: t, subUnitId: n = "" } = e;
    return (s = this._textSelectionInfo.get(t)) == null ? void 0 : s.get(n);
  }
  _refresh(e) {
    const t = this._getTextRanges(e);
    if (t == null)
      return;
    const { textRanges: n, rectRanges: s } = t, r = [...n, ...s], { unitId: o, subUnitId: c } = e;
    this._refreshSelection$.next({
      unitId: o,
      subUnitId: c,
      docRanges: r,
      isEditing: !1
    });
  }
  _replaceByParam(e) {
    const { unitId: t, subUnitId: n, ...s } = e;
    this._textSelectionInfo.has(t) || this._textSelectionInfo.set(t, /* @__PURE__ */ new Map()), this._textSelectionInfo.get(t).set(n, { ...s });
  }
  _addByParam(e) {
    const { unitId: t, subUnitId: n, ...s } = e;
    this._textSelectionInfo.has(t) || this._textSelectionInfo.set(t, /* @__PURE__ */ new Map());
    const r = this._textSelectionInfo.get(t);
    r.has(n) ? r.get(n).textRanges.push(...e.textRanges) : r.set(n, { ...s });
  }
};
m = Oe([
  F(0, B),
  F(1, I)
], m);
var Ce = Object.getOwnPropertyDescriptor, Me = (i, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? Ce(e, t) : e, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (s = o(s) || s);
  return s;
}, W = (i, e) => (t, n) => e(t, n, i);
let D = class extends V {
  constructor(e, t, n) {
    super();
    u(this, "_skeleton");
    u(this, "_docViewModel");
    u(this, "_currentSkeleton$", new O(null));
    u(this, "currentSkeleton$", this._currentSkeleton$.asObservable());
    // CurrentSkeletonBefore for pre-triggered logic during registration
    u(this, "_currentSkeletonBefore$", new O(null));
    u(this, "currentSkeletonBefore$", this._currentSkeletonBefore$.asObservable());
    u(this, "_currentViewModel$", new O(null));
    u(this, "currentViewModel$", this._currentViewModel$.asObservable());
    this._context = e, this._localeService = t, this._univerInstanceService = n, this._init(), this._univerInstanceService.getCurrentTypeOfUnit$(y.UNIVER_DOC).pipe(ee(this.dispose$)).subscribe((s) => {
      s && s.getUnitId() === this._context.unitId && this._update(s);
    });
  }
  dispose() {
    super.dispose(), this._currentSkeletonBefore$.complete(), this._currentSkeleton$.complete();
  }
  getSkeleton() {
    return this._skeleton;
  }
  getViewModel() {
    return this._docViewModel;
  }
  _init() {
    const e = this._context.unit;
    this._update(e);
  }
  _update(e) {
    const t = this._context.unitId;
    if (e.getBody() == null)
      return;
    this._docViewModel && ce(t) ? (this._docViewModel.reset(e), this._context.unit = e) : this._docViewModel || (this._docViewModel = this._buildDocViewModel(e)), this._skeleton || (this._skeleton = this._buildSkeleton(this._docViewModel));
    const n = this._skeleton;
    n.calculate(), this._currentSkeletonBefore$.next(n), this._currentSkeleton$.next(n), this._currentViewModel$.next(this._docViewModel);
  }
  _buildSkeleton(e) {
    return pe.create(e, this._localeService);
  }
  _buildDocViewModel(e) {
    return new me(e);
  }
};
D = Me([
  W(1, w(oe)),
  W(2, I)
], D);
class te extends V {
  constructor() {
    super();
    u(this, "_docStateChangeParams$", new O(null));
    u(this, "docStateChangeParams$", this._docStateChangeParams$.asObservable());
  }
  emitStateChangeInfo(t) {
    this._docStateChangeParams$.next(t);
  }
  dispose() {
    super.dispose(), this._docStateChangeParams$.complete();
  }
}
const Y = "doc.mutation.rich-text-editing", M = {
  id: Y,
  type: P.MUTATION,
  // eslint-disable-next-line max-lines-per-function
  handler: (i, e) => {
    var G, z;
    const {
      unitId: t,
      segmentId: n = "",
      actions: s,
      textRanges: r,
      prevTextRanges: o,
      trigger: c,
      noHistory: a,
      isCompositionEnd: l,
      noNeedSetTextRange: d,
      debounce: h,
      isEditing: g = !0,
      isSync: _,
      syncer: f
    } = e, R = i.get(I), p = i.get(Re), v = i.get(te), S = R.getUniverDocInstance(t), j = (G = p.getRenderById(t)) == null ? void 0 : G.with(D).getViewModel();
    if (S == null || j == null)
      throw new Error(`DocumentDataModel or documentViewModel not found for unitId: ${t}`);
    const L = i.get(m), b = (z = L.getDocRanges()) != null ? z : [], ne = !!S.getSnapshot().disabled;
    if (x.isNoop(s) || s && s.length === 0 || ne)
      return {
        unitId: t,
        actions: [],
        textRanges: b
      };
    const X = x.invertWithDoc(s, S.getSnapshot());
    S.apply(s), j.reset(S), !d && r && c != null && !_ && queueMicrotask(() => {
      L.replaceDocRanges(r, { unitId: t, subUnitId: t }, g, e.options);
    });
    const se = {
      commandId: Y,
      unitId: t,
      segmentId: n,
      trigger: c,
      noHistory: a,
      debounce: h,
      redoState: {
        actions: s,
        textRanges: r
      },
      undoState: {
        actions: X,
        textRanges: o != null ? o : b
      },
      isCompositionEnd: l,
      isSync: _,
      syncer: f
    };
    return v.emitStateChangeInfo(se), {
      unitId: t,
      actions: X,
      textRanges: b
    };
  }
}, De = {
  id: "doc.mutation.rename-doc",
  type: P.MUTATION,
  handler: (i, e) => {
    const n = i.get(I).getUnit(e.unitId, y.UNIVER_DOC);
    return n ? (n.setName(e.name), !0) : !1;
  }
}, Te = "docs.config", K = {};
var ye = Object.getOwnPropertyDescriptor, we = (i, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? ye(e, t) : e, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (s = o(s) || s);
  return s;
}, $ = (i, e) => (t, n) => e(t, n, i);
let T = class extends Q {
  constructor(i, e, t) {
    super(), this._commandService = i, this._textSelectionManagerService = e, this._univerInstanceService = t, this._initSelectionChange();
  }
  _transformCustomRange(i, e) {
    var o;
    const { startOffset: t, endOffset: n, collapsed: s } = e, r = (o = i.getCustomRanges()) == null ? void 0 : o.filter((c) => !c.wholeEntity || t <= c.startIndex && n > c.endIndex ? !1 : s ? c.startIndex < t && c.endIndex >= n : C.range.isIntersects(t, n - 1, c.startIndex, c.endIndex));
    if (r != null && r.length) {
      let c = t, a = n;
      return r.forEach((l) => {
        c = Math.min(l.startIndex, c), a = Math.max(l.endIndex + 1, a);
      }), {
        ...e,
        startOffset: c,
        endOffset: a,
        collapsed: c === a
      };
    }
    return e;
  }
  _initSelectionChange() {
    this.disposeWithMe(this._commandService.onCommandExecuted((i) => {
      if (i.id === k.id) {
        const e = i.params, { unitId: t, ranges: n, isEditing: s } = e, r = this._univerInstanceService.getUnit(t);
        if (!r)
          return;
        const o = n.map((c) => this._transformCustomRange(r, c));
        o.some((c, a) => n[a] !== c) && this._textSelectionManagerService.replaceTextRanges(o, s);
      }
    }));
  }
};
T = we([
  $(0, B),
  $(1, w(m)),
  $(2, I)
], T);
var be = Object.getOwnPropertyDescriptor, Ue = (i, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? be(e, t) : e, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (s = o(s) || s);
  return s;
}, H = (i, e) => (t, n) => e(t, n, i);
const $e = "DOCS_PLUGIN";
var N;
let q = (N = class extends ue {
  // static override type = UniverInstanceType.UNIVER_DOC;
  constructor(i = K, e, t) {
    super(), this._config = i, this._injector = e, this._configService = t;
    const { ...n } = de(
      {},
      K,
      this._config
    );
    this._configService.setConfig(Te, n);
  }
  onStarting() {
    this._initializeDependencies(), this._initializeCommands();
  }
  _initializeCommands() {
    [
      M,
      De,
      k
    ].forEach((i) => {
      this._injector.get(B).registerCommand(i);
    });
  }
  _initializeDependencies() {
    [
      [m],
      [te],
      [T]
    ].forEach((i) => this._injector.add(i));
  }
  onReady() {
    this._injector.get(T);
  }
}, u(N, "pluginName", $e), N);
q = Ue([
  H(1, w(ae)),
  H(2, le)
], q);
const Ee = Z("CUSTOM_RANGE"), Ne = Z("CUSTOM_DECORATION"), E = {
  CUSTOM_RANGE: Ee,
  CUSTOM_DECORATION: Ne
};
var Pe = Object.getOwnPropertyDescriptor, Ve = (i, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? Pe(e, t) : e, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (s = o(s) || s);
  return s;
}, Be = (i, e) => (t, n) => e(t, n, i);
let J = class extends Q {
  constructor(e, t) {
    super();
    u(this, "_interceptorsByName", /* @__PURE__ */ new Map());
    this._context = e, this._docSkeletonManagerService = t;
    const n = this._docSkeletonManagerService.getViewModel(), s = n.getDataModel().getUnitId();
    if (s === ge || s === he)
      return;
    this.disposeWithMe(this.interceptDocumentViewModel(n)), this.disposeWithMe(this.intercept(E.CUSTOM_RANGE, {
      priority: -1,
      handler: (o, c, a) => a(o)
    }));
    let r = new U();
    n.segmentViewModels$.subscribe((o) => {
      r.dispose(), r = new U(), o.forEach((c) => {
        r.add(this.interceptDocumentViewModel(c));
      });
    }), this.disposeWithMe(r);
  }
  intercept(e, t) {
    const n = e;
    this._interceptorsByName.has(n) || this._interceptorsByName.set(n, []);
    const s = this._interceptorsByName.get(n);
    return s.push(t), this._interceptorsByName.set(
      n,
      s.sort((r, o) => {
        var c, a;
        return ((c = o.priority) != null ? c : 0) - ((a = r.priority) != null ? a : 0);
      })
    ), this.disposeWithMe(_e(() => fe(this._interceptorsByName.get(n), t)));
  }
  fetchThroughInterceptors(e) {
    const t = e, n = this._interceptorsByName.get(t);
    return Se(n || []);
  }
  interceptDocumentViewModel(e) {
    const t = new U();
    return t.add(e.registerCustomRangeInterceptor({
      getCustomRange: (n) => {
        var s;
        return this.fetchThroughInterceptors(E.CUSTOM_RANGE)(
          e.getCustomRangeRaw(n),
          {
            index: n,
            unitId: e.getDataModel().getUnitId(),
            customRanges: (s = e.getDataModel().getCustomRanges()) != null ? s : []
          }
        );
      },
      getCustomDecoration: (n) => {
        var s;
        return this.fetchThroughInterceptors(E.CUSTOM_DECORATION)(
          e.getCustomDecorationRaw(n),
          {
            index: n,
            unitId: e.getDataModel().getUnitId(),
            customDecorations: (s = e.getDataModel().getCustomDecorations()) != null ? s : []
          }
        );
      }
    })), t;
  }
};
J = Ve([
  Be(1, w(D))
], J);
function A(i, e = "") {
  if (!e)
    return ["body"];
  const { headers: t, footers: n } = i.getSnapshot();
  if (t == null && n == null)
    throw new Error("Document data model must have headers or footers when update by segment id");
  if ((t == null ? void 0 : t[e]) != null)
    return ["headers", e, "body"];
  if ((n == null ? void 0 : n[e]) != null)
    return ["footers", e, "body"];
  throw new Error("Segment id not found in headers or footers");
}
function Xe(i, e, t) {
  const { unitId: n, segmentId: s } = e, o = i.get(I).getUnit(n);
  if (!o)
    return !1;
  const c = {
    id: M.id,
    params: {
      unitId: e.unitId,
      actions: [],
      textRanges: void 0
    }
  }, a = x.getInstance(), l = C.customRange.add({ ...e, body: t });
  if (!l)
    return !1;
  const d = A(o, s);
  return c.params.actions = a.editOp(l.serialize(), d), c;
}
function Ge(i, e) {
  var S;
  const { rangeId: t, rangeType: n, wholeEntity: s, properties: r, unitId: o, selections: c } = e, a = i.get(m), l = i.get(I), d = c != null ? c : a.getTextRanges({ unitId: o, subUnitId: o }), h = (S = d == null ? void 0 : d[0]) == null ? void 0 : S.segmentId;
  if (!(d != null && d.length))
    return !1;
  const g = l.getUnit(o, y.UNIVER_DOC);
  if (!g)
    return !1;
  const _ = g.getSelfOrHeaderFooterModel(h).getBody();
  if (!_)
    return !1;
  const f = C.customRange.add({
    ranges: d,
    rangeId: t,
    rangeType: n,
    segmentId: h,
    wholeEntity: s,
    properties: r,
    body: _
  });
  if (!f)
    return !1;
  const R = x.getInstance(), p = {
    id: M.id,
    params: {
      unitId: o,
      actions: [],
      textRanges: f.selections,
      segmentId: h
    },
    textX: f
  }, v = A(g, h);
  return p.params.actions = R.editOp(f.serialize(), v), p;
}
function ze(i, e) {
  const { unitId: t, segmentId: n, insert: s } = e, o = i.get(I).getUnit(t);
  if (!o)
    return !1;
  const c = {
    id: M.id,
    params: {
      unitId: e.unitId,
      actions: [],
      textRanges: void 0,
      segmentId: n
    }
  }, a = x.getInstance(), l = C.customRange.delete({
    documentDataModel: o,
    rangeId: e.rangeId,
    insert: s,
    segmentId: n
  });
  if (!l)
    return !1;
  const d = A(o, n);
  return c.params.actions = a.editOp(l.serialize(), d), c.params.textRanges = l.selections, c;
}
function Fe(i, e) {
  var f, R, p, v;
  const { unitId: t, body: n, doc: s } = e;
  let r = s;
  if (r || (r = i.get(I).getUnit(t)), !r)
    return !1;
  const o = (f = e.selection) == null ? void 0 : f.segmentId, c = (R = r.getSelfOrHeaderFooterModel(o)) == null ? void 0 : R.getBody();
  if (!c) return !1;
  const a = i.get(m), l = (p = e.selection) != null ? p : a.getActiveTextRange();
  if (!l || !c)
    return !1;
  const d = (v = e.textRanges) != null ? v : [{
    startOffset: l.startOffset + n.dataStream.length,
    endOffset: l.startOffset + n.dataStream.length,
    collapsed: !0,
    segmentId: o
  }], h = C.selection.replace({
    selection: l,
    body: n,
    doc: r
  });
  if (!h)
    return !1;
  const g = {
    id: M.id,
    params: {
      unitId: t,
      actions: [],
      textRanges: d,
      debounce: !0,
      segmentId: o
    },
    textX: h
  }, _ = x.getInstance();
  return g.params.actions = _.editOp(h.serialize()), g;
}
export {
  E as DOC_INTERCEPTOR_POINT,
  J as DocInterceptorService,
  m as DocSelectionManagerService,
  D as DocSkeletonManagerService,
  te as DocStateEmitService,
  M as RichTextEditingMutation,
  k as SetTextSelectionsOperation,
  q as UniverDocsPlugin,
  Ge as addCustomRangeBySelectionFactory,
  Xe as addCustomRangeFactory,
  ze as deleteCustomRangeFactory,
  Fe as replaceSelectionFactory
};
