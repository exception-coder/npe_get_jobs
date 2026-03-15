var st = Object.defineProperty;
var rt = (t, e, n) => e in t ? st(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var o = (t, e, n) => rt(t, typeof e != "symbol" ? e + "" : e, n);
import { createIdentifier as at, Inject as $, Injector as ue, IContextService as J, Disposable as Q, DisposableCollection as ot, toDisposable as O, IUniverInstanceService as fe, ICommandService as U, CommandType as b, LocaleService as B, FOCUSING_SHEET as pe, EDITOR_ACTIVATED as _e, UniverInstanceType as ct, RxDisposable as lt, IConfigService as dt, Plugin as ht, merge as ut } from "@univerjs/core";
import { IConfirmService as ft, IMessageService as ge, useDependency as m, useObservable as P, useDebounceFn as pt, ILayoutService as me, KeyCode as C, MetaKeys as D, getMenuHiddenObservable as _t, MenuItemType as gt, RibbonDataGroup as mt, IMenuManagerService as St, IShortcutService as vt, IDialogService as Ct, ComponentManager as Mt } from "@univerjs/ui";
import { MessageType as N, Input as Se, Pager as Rt, FormLayout as R, Select as k, FormDualColumnLayout as re, Checkbox as ae, Button as j } from "@univerjs/design";
import { RENDER_RAW_FORMULA_KEY as bt } from "@univerjs/engine-render";
import { throttleTime as It, BehaviorSubject as T, combineLatest as ve, debounceTime as Ft, Subject as Ce, fromEvent as Dt, map as yt, takeUntil as oe } from "rxjs";
import { useRef as G, createElement as Me, forwardRef as X, useState as Pt, useCallback as u, useEffect as A, useMemo as ee, useImperativeHandle as Tt } from "react";
import { jsx as c, jsxs as F, Fragment as H } from "react/jsx-runtime";
const Re = "FIND_REPLACE_INPUT_FOCUS", be = "FIND_REPLACE_DIALOG_FOCUS", Ie = "FIND_REPLACE_REPLACE_REVEALED";
var xt = Object.getOwnPropertyDescriptor, Fe = (t, e, n, i) => {
  for (var s = i > 1 ? void 0 : i ? xt(e, n) : e, r = t.length - 1, a; r >= 0; r--)
    (a = t[r]) && (s = a(s) || s);
  return s;
}, L = (t, e) => (n, i) => e(n, i, t);
class gi extends Q {
}
const f = at("find-replace.service");
function Et(t) {
  return typeof t.findString < "u" || typeof t.inputtingFindString < "u" || typeof t.findDirection < "u" || typeof t.matchesTheWholeCell < "u" || typeof t.caseSensitive < "u" || typeof t.findScope < "u" || typeof t.findBy < "u";
}
let K = class extends Q {
  constructor(e, n, i, s) {
    super();
    o(this, "currentMatch$", new T(null));
    o(this, "replaceables$", new T([]));
    /** All find models returned by providers. */
    o(this, "_findModels", []);
    /** The find model that the current match is from. */
    o(this, "_matchingModel", null);
    o(this, "_matches", []);
    o(this, "_currentSearchingDisposables", null);
    this._state = e, this._providers = n, this._univerInstanceService = i, this._commandService = s, this.disposeWithMe(
      this._state.stateUpdates$.pipe(It(200, void 0, { leading: !0, trailing: !0 })).subscribe(async (r) => {
        const a = this._state.state;
        Et(r) && (a.findString !== "" && !a.replaceRevealed ? (await this._startSearching(), this._state.changeState({ findCompleted: !0 })) : r.replaceRevealed !== !0 && this._stopSearching());
      })
    );
  }
  get searched() {
    return this._findModels.length > 0;
  }
  dispose() {
    super.dispose(), this._stopSearching(), this.currentMatch$.complete(), this.replaceables$.complete(), this._state.changeState({ ...te(), revealed: !1 });
  }
  async start() {
    if (!this._state.findString)
      return { results: [] };
    const e = await this._startSearching();
    return this._state.changeState({ findCompleted: !0 }), e;
  }
  focusSelection() {
    var e;
    (e = this._matchingModel) == null || e.focusSelection();
  }
  /** Call this method to start a `searching`. */
  async _startSearching() {
    if (!this._state.findString)
      return { results: [] };
    const e = Array.from(this._providers), n = this._findModels = (await Promise.all(e.map((s) => s.find({
      findString: this._state.findString,
      findDirection: this._state.findDirection,
      findScope: this._state.findScope,
      findBy: this._state.findBy,
      replaceRevealed: this._state.replaceRevealed,
      caseSensitive: this._state.caseSensitive,
      matchesTheWholeCell: this._state.matchesTheWholeCell
    })))).flat();
    this._subscribeToModelsChanges(n);
    const i = this._matches = n.map((s) => s.getMatches()).flat();
    return this.replaceables$.next(i.filter((s) => s.replaceable)), i.length ? (this._moveToInitialMatch(n), this._state.changeState({ matchesCount: i.length }), { results: i }) : (this._state.changeState({ matchesCount: 0, matchesPosition: 0 }), { results: [] });
  }
  /** Terminate the current searching session, when searching string is empty. */
  _stopSearching() {
    var e;
    this._providers.forEach((n) => n.terminate()), this._findModels = [], this._matches = [], this._matchingModel = null, (e = this._currentSearchingDisposables) == null || e.dispose(), this._currentSearchingDisposables = null, this.currentMatch$.next(null), this.replaceables$.next([]), this._state.changeState({
      findCompleted: !1,
      matchesCount: 0,
      matchesPosition: 0
    });
  }
  // When a document's content changes, we should reset all matches and try to move to the next match.
  _subscribeToModelsChanges(e) {
    const n = this._currentSearchingDisposables = new ot(), i = ve(e.map((s) => s.matchesUpdate$)).pipe(Ft(220)).subscribe(([...s]) => {
      const r = this._matches = s.flat();
      r.length ? (this._moveToInitialMatch(this._findModels, !0), this._state.changeState({ matchesCount: r.length }), this.replaceables$.next(r.filter((a) => a.replaceable))) : (this._state.changeState({ matchesCount: 0, matchesPosition: 0 }), this.replaceables$.next([]));
    });
    e.forEach((s) => n.add(O(s.activelyChangingMatch$.subscribe((r) => {
      const a = this._matches.findIndex((l) => l === r);
      this._state.changeState({ matchesPosition: a + 1 });
    })))), n.add(O(i));
  }
  async replace() {
    return this._matchingModel ? this._matchingModel.replace(this._state.replaceString) : !1;
  }
  async replaceAll() {
    const e = await Promise.all(this._findModels.map((n) => n.replaceAll(this._state.replaceString))).then((n) => n.reduce((i, s) => (i.success += s.success, i.failure += s.failure, i), { success: 0, failure: 0 }));
    return e.failure === 0 && this._stopSearching(), e;
  }
  getCurrentMatch() {
    return this._state.matchesPosition > 0 ? this._matches[this._state.matchesPosition - 1] : null;
  }
  _markMatch(e) {
    const n = this._matches.findIndex((i) => i === e);
    this.currentMatch$.next(e), this._state.changeState({ matchesPosition: n + 1 });
  }
  moveToNextMatch() {
    if (!this._matchingModel)
      return;
    const e = this._findModels.length === 1, n = this._matchingModel.moveToNextMatch({ loop: e });
    if (n)
      return this._markMatch(n), n;
    {
      const i = this._findModels.findIndex((s) => s === this._matchingModel);
      return this._moveToNextUnitMatch(i);
    }
  }
  _moveToNextUnitMatch(e) {
    const n = this._findModels.length;
    for (let i = (e + 1) % n; i !== e; ) {
      const s = this._findModels[i], r = s.moveToNextMatch({ ignoreSelection: !0 });
      if (r)
        return this._matchingModel = s, this._markMatch(r), r;
      i = (i + 1) % n;
    }
    if (this._matchingModel) {
      const i = this._matchingModel.moveToNextMatch({ ignoreSelection: !0 });
      return i && this._markMatch(i), i;
    }
  }
  moveToPreviousMatch() {
    if (!this._matchingModel)
      return;
    const e = this._findModels.length === 1, n = this._matchingModel.moveToPreviousMatch({ loop: e });
    if (n) {
      const i = this._matches.findIndex((s) => s === n);
      return this.currentMatch$.next(n), this._state.changeState({ matchesPosition: i + 1 }), n;
    } else {
      const i = this._findModels.length, s = this._findModels.findIndex((a) => a === this._matchingModel);
      for (let a = (s - 1 + i) % i; a !== s; ) {
        const l = this._findModels[a], d = l.moveToPreviousMatch({ ignoreSelection: !0 });
        if (d)
          return this._matchingModel = l, this._markMatch(d), d;
        a = (a - 1) % i;
      }
      const r = this._matchingModel.moveToPreviousMatch({ ignoreSelection: !0 });
      return r && this._markMatch(r), r;
    }
  }
  _moveToInitialMatch(e, n = !1) {
    var r;
    const i = (r = this._univerInstanceService.getFocusedUnit()) == null ? void 0 : r.getUnitId();
    if (!i)
      return -1;
    const s = e.findIndex((a) => a.unitId === i);
    if (s !== -1) {
      this._matchingModel = e[s];
      const a = this._matchingModel.moveToNextMatch({ stayIfOnMatch: !0, noFocus: n });
      if (a)
        return this._markMatch(a), s;
    }
    return this._moveToNextUnitMatch(s), 0;
  }
};
K = Fe([
  L(2, fe),
  L(3, U)
], K);
var q = /* @__PURE__ */ ((t) => (t.ROW = "row", t.COLUMN = "column", t))(q || {}), Z = /* @__PURE__ */ ((t) => (t.VALUE = "value", t.FORMULA = "formula", t))(Z || {}), z = /* @__PURE__ */ ((t) => (t.SUBUNIT = "subunit", t.UNIT = "unit", t))(z || {});
function te() {
  return {
    caseSensitive: !1,
    findBy: "value",
    findCompleted: !1,
    findDirection: "row",
    findScope: "subunit",
    findString: "",
    inputtingFindString: "",
    matchesCount: 0,
    matchesPosition: 0,
    matchesTheWholeCell: !1,
    replaceRevealed: !1,
    replaceString: "",
    revealed: !0
  };
}
class Nt {
  constructor() {
    o(this, "_stateUpdates$", new Ce());
    o(this, "stateUpdates$", this._stateUpdates$.asObservable());
    o(this, "_state$", new T(te()));
    o(this, "state$", this._state$.asObservable());
    o(this, "_findString", "");
    o(this, "_inputtingFindString", "");
    o(this, "_replaceString", "");
    o(this, "_revealed", !1);
    o(this, "_replaceRevealed", !1);
    o(this, "_matchesPosition", 0);
    o(this, "_matchesCount", 0);
    o(this, "_caseSensitive", !0);
    o(this, "_matchesTheWholeCell", !1);
    o(this, "_findDirection", "row");
    o(this, "_findScope", "subunit");
    o(this, "_findBy", "value");
    o(this, "_findCompleted", !1);
  }
  get state() {
    return this._state$.getValue();
  }
  get inputtingFindString() {
    return this._inputtingFindString;
  }
  get findString() {
    return this._findString;
  }
  get revealed() {
    return this._revealed;
  }
  get replaceRevealed() {
    return this._replaceRevealed;
  }
  get matchesPosition() {
    return this._matchesPosition;
  }
  get matchesCount() {
    return this._matchesCount;
  }
  get replaceString() {
    return this._replaceString;
  }
  get caseSensitive() {
    return this._caseSensitive;
  }
  get matchesTheWholeCell() {
    return this._matchesTheWholeCell;
  }
  get findDirection() {
    return this._findDirection;
  }
  get findScope() {
    return this._findScope;
  }
  get findBy() {
    return this._findBy;
  }
  get findCompleted() {
    return this._findCompleted;
  }
  // eslint-disable-next-line max-lines-per-function, complexity
  changeState(e) {
    let n = !1;
    const i = {};
    typeof e.findString < "u" && e.findString !== this._findString && (this._findString = e.findString, i.findString = this._findString, n = !0), typeof e.revealed < "u" && e.revealed !== this._revealed && (this._revealed = e.revealed, i.revealed = e.revealed, n = !0), typeof e.replaceRevealed < "u" && e.replaceRevealed !== this._replaceRevealed && (this._replaceRevealed = e.replaceRevealed, i.replaceRevealed = e.replaceRevealed, n = !0), typeof e.replaceString < "u" && e.replaceString !== this._replaceString && (this._replaceString = e.replaceString, i.replaceString = e.replaceString, n = !0), typeof e.matchesCount < "u" && e.matchesCount !== this._matchesCount && (this._matchesCount = e.matchesCount, i.matchesCount = e.matchesCount, n = !0), typeof e.matchesPosition < "u" && e.matchesPosition !== this._matchesPosition && (this._matchesPosition = e.matchesPosition, i.matchesPosition = e.matchesPosition, n = !0), typeof e.findBy < "u" && e.findBy !== this._findBy && (this._findBy = e.findBy, i.findBy = e.findBy, n = !0), typeof e.findScope < "u" && e.findScope !== this._findScope && (this._findScope = e.findScope, i.findScope = e.findScope, n = !0), typeof e.findDirection < "u" && e.findDirection !== this._findDirection && (this._findDirection = e.findDirection, i.findDirection = e.findDirection, n = !0), typeof e.caseSensitive < "u" && e.caseSensitive !== this._caseSensitive && (this._caseSensitive = e.caseSensitive, i.caseSensitive = e.caseSensitive, n = !0), typeof e.matchesTheWholeCell < "u" && e.matchesTheWholeCell !== this._matchesTheWholeCell && (this._matchesTheWholeCell = e.matchesTheWholeCell, i.matchesTheWholeCell = e.matchesTheWholeCell, n = !0), typeof e.inputtingFindString < "u" && e.inputtingFindString !== this._inputtingFindString && (this._inputtingFindString = e.inputtingFindString, i.inputtingFindString = e.inputtingFindString, n = !0), typeof e.findCompleted < "u" && e.findCompleted !== this._findCompleted && (this._findCompleted = e.findCompleted, i.findCompleted = e.findCompleted, n = !0), n && (this._state$.next({
      caseSensitive: this._caseSensitive,
      findBy: this._findBy,
      findCompleted: this._findCompleted,
      findDirection: this._findDirection,
      findScope: this._findScope,
      findString: this._findString,
      inputtingFindString: this._inputtingFindString,
      matchesCount: this._matchesCount,
      matchesPosition: this._matchesPosition,
      matchesTheWholeCell: this._matchesTheWholeCell,
      replaceRevealed: this._replaceRevealed,
      revealed: this._revealed
    }), this._stateUpdates$.next(i));
  }
}
let Y = class extends Q {
  constructor(e, n) {
    super();
    o(this, "_providers", /* @__PURE__ */ new Set());
    o(this, "_state", new Nt());
    o(this, "_model");
    o(this, "_currentMatch$", new T(null));
    o(this, "currentMatch$", this._currentMatch$.asObservable());
    o(this, "_replaceables$", new T([]));
    o(this, "replaceables$", this._replaceables$.asObservable());
    o(this, "_focusSignal$", new Ce());
    o(this, "focusSignal$", this._focusSignal$.asObservable());
    this._injector = e, this._contextService = n;
  }
  get stateUpdates$() {
    return this._state.stateUpdates$;
  }
  get state$() {
    return this._state.state$;
  }
  get revealed() {
    return this._state.revealed;
  }
  get replaceRevealed() {
    return this._state.replaceRevealed;
  }
  dispose() {
    super.dispose(), this._currentMatch$.next(null), this._currentMatch$.complete(), this._replaceables$.next([]), this._replaceables$.complete(), this._focusSignal$.complete();
  }
  getProviders() {
    return this._providers;
  }
  getCurrentMatch() {
    var e;
    return (e = this._model) == null ? void 0 : e.getCurrentMatch();
  }
  getFindString() {
    return this._state.findString;
  }
  changeFindString(e) {
    this._state.changeState({ findString: e });
  }
  focusFindInput() {
    this._focusSignal$.next();
  }
  changeInputtingFindString(e) {
    e ? this._state.changeState({ inputtingFindString: e }) : this._state.changeState({ inputtingFindString: "", findString: "" });
  }
  changeReplaceString(e) {
    this._state.changeState({ replaceString: e });
  }
  changeMatchesTheWholeCell(e) {
    this._state.changeState({ matchesTheWholeCell: e });
  }
  changeCaseSensitive(e) {
    this._state.changeState({ caseSensitive: e });
  }
  changeFindBy(e) {
    this._state.changeState({ findBy: e }), this._toggleDisplayRawFormula(
      e === "formula"
      /* FORMULA */
    );
  }
  changeFindScope(e) {
    this._state.changeState({ findScope: e });
  }
  changeFindDirection(e) {
    this._state.changeState({ findDirection: e });
  }
  moveToNextMatch() {
    this._model && (this._state.replaceRevealed && !this._model.searched ? (this._state.changeState({ findString: this._state.inputtingFindString }), this._model.start()) : this._model.moveToNextMatch(), this._focusSignal$.next());
  }
  moveToPreviousMatch() {
    this._model && (this._state.replaceRevealed && !this._model.searched ? (this._state.changeState({ findString: this._state.inputtingFindString }), this._model.start()) : this._model.moveToPreviousMatch(), this._focusSignal$.next());
  }
  async replace() {
    return this._model ? this._model.replace() : !1;
  }
  async replaceAll() {
    if (!this._model)
      throw new Error("[FindReplaceService] replaceAll: model is not initialized!");
    return this._model.replaceAll();
  }
  revealReplace() {
    this._state.changeState({ replaceRevealed: !0, inputtingFindString: this._state.findString }), this._toggleRevealReplace(!0);
  }
  focusSelection() {
    var e;
    (e = this._model) == null || e.focusSelection();
  }
  start(e = !1) {
    if (this._providers.size === 0)
      return !1;
    this._model = this._injector.createInstance(K, this._state, this._providers), this._model.currentMatch$.subscribe((i) => this._currentMatch$.next(i)), this._model.replaceables$.subscribe((i) => this._replaceables$.next(i));
    const n = te();
    return e && (n.replaceRevealed = !0), this._state.changeState(n), this._toggleRevealReplace(e), !0;
  }
  find() {
    var e;
    (e = this._model) == null || e.start();
  }
  terminate() {
    var e;
    (e = this._model) == null || e.dispose(), this._model = null, this._toggleDisplayRawFormula(!1), this._toggleRevealReplace(!1);
  }
  registerFindReplaceProvider(e) {
    return this._providers.add(e), O(() => this._providers.delete(e));
  }
  _toggleRevealReplace(e) {
    this._contextService.setContextValue(Ie, e);
  }
  _toggleDisplayRawFormula(e) {
    this._contextService.setContextValue(bt, e);
  }
};
Y = Fe([
  L(0, $(ue)),
  L(1, J)
], Y);
const De = {
  id: "ui.command.replace-current-match",
  type: b.COMMAND,
  handler: (t) => t.get(f).replace()
}, $t = "CONFIRM_REPLACE_ALL", ye = {
  id: "ui.command.replace-all-matches",
  type: b.COMMAND,
  handler: async (t) => {
    const e = t.get(ft), n = t.get(B), i = t.get(ge);
    if (!await e.confirm({
      id: $t,
      title: { title: n.t("find-replace.replace.confirm.title") },
      cancelText: n.t("button.cancel"),
      confirmText: n.t("button.confirm")
    }))
      return !1;
    const r = await t.get(f).replaceAll(), { success: a, failure: l } = r;
    return l > 0 ? (a === 0 ? i.show({
      type: N.Error,
      content: n.t("find-replace.replace.all-failure")
    }) : i.show({
      type: N.Warning,
      content: n.t("find-replace.replace.partial-success", `${a}`, `${l}`)
    }), !1) : (i.show({
      type: N.Success,
      content: n.t("find-replace.replace.all-success", `${a}`)
    }), !0);
  }
}, x = {
  id: "ui.operation.open-find-dialog",
  type: b.OPERATION,
  handler: (t) => {
    const e = t.get(f);
    return e.revealed ? e.focusFindInput() : e.start(), !0;
  }
}, ie = {
  id: "ui.operation.open-replace-dialog",
  type: b.OPERATION,
  handler: (t) => {
    const e = t.get(f);
    return e.revealed ? e.replaceRevealed ? e.focusFindInput() : e.revealReplace() : e.start(!0), !0;
  }
}, Pe = {
  type: b.OPERATION,
  id: "ui.operation.go-to-next-match",
  handler: (t) => (t.get(f).moveToNextMatch(), !0)
}, Te = {
  type: b.OPERATION,
  id: "ui.operation.go-to-previous-match",
  handler: (t) => (t.get(f).moveToPreviousMatch(), !0)
}, xe = {
  type: b.OPERATION,
  id: "ui.operation.focus-selection",
  handler: (t) => (t.get(f).focusSelection(), !0)
};
function Ee({ ref: t, ...e }) {
  const { icon: n, id: i, className: s, extend: r, ...a } = e, l = `univerjs-icon univerjs-icon-${i} ${s || ""}`.trim(), d = G(`_${Lt()}`);
  return Ne(n, `${i}`, {
    defIds: n.defIds,
    idSuffix: d.current
  }, {
    ref: t,
    className: l,
    ...a
  }, r);
}
function Ne(t, e, n, i, s) {
  return Me(t.tag, {
    key: e,
    ...Ot(t, n, s),
    ...i
  }, (At(t, n).children || []).map((r, a) => Ne(r, `${e}-${t.tag}-${a}`, n, void 0, s)));
}
function Ot(t, e, n) {
  const i = { ...t.attrs };
  n != null && n.colorChannel1 && i.fill === "colorChannel1" && (i.fill = n.colorChannel1), t.tag === "mask" && i.id && (i.id = i.id + e.idSuffix), Object.entries(i).forEach(([r, a]) => {
    r === "mask" && typeof a == "string" && (i[r] = a.replace(/url\(#(.*)\)/, `url(#$1${e.idSuffix})`));
  });
  const { defIds: s } = e;
  return !s || s.length === 0 || (t.tag === "use" && i["xlink:href"] && (i["xlink:href"] = i["xlink:href"] + e.idSuffix), Object.entries(i).forEach(([r, a]) => {
    typeof a == "string" && (i[r] = a.replace(/url\(#(.*)\)/, `url(#$1${e.idSuffix})`));
  })), i;
}
function At(t, e) {
  var i;
  const { defIds: n } = e;
  return !n || n.length === 0 ? t : t.tag === "defs" && ((i = t.children) != null && i.length) ? {
    ...t,
    children: t.children.map((s) => typeof s.attrs.id == "string" && n && n.includes(s.attrs.id) ? {
      ...s,
      attrs: {
        ...s.attrs,
        id: s.attrs.id + e.idSuffix
      }
    } : s)
  } : t;
}
function Lt() {
  return Math.random().toString(36).substring(2, 8);
}
Ee.displayName = "UniverIcon";
const wt = {
  tag: "svg",
  attrs: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 16 16",
    width: "1em",
    height: "1em"
  },
  children: [{
    tag: "path",
    attrs: {
      fill: "currentColor",
      d: "M7.71899 1.36938C4.37604 1.36938 1.66602 4.07941 1.66602 7.42236C1.66602 10.7653 4.37604 13.4753 7.71899 13.4753C9.16744 13.4753 10.4971 12.9666 11.5389 12.118L13.6598 14.4109C13.8848 14.6542 14.2644 14.669 14.5077 14.444C14.7509 14.219 14.7657 13.8393 14.5407 13.5961L12.3906 11.2716C13.2536 10.2254 13.772 8.88442 13.772 7.42236C13.772 4.07941 11.0619 1.36938 7.71899 1.36938ZM2.86602 7.42236C2.86602 4.74215 5.03878 2.56938 7.71899 2.56938C10.3992 2.56938 12.572 4.74215 12.572 7.42236C12.572 10.1026 10.3992 12.2753 7.71899 12.2753C5.03878 12.2753 2.86602 10.1026 2.86602 7.42236Z",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }
  }]
}, $e = X(function(e, n) {
  return Me(Ee, Object.assign({}, e, {
    id: "search-icon",
    ref: n,
    icon: wt
  }));
});
$e.displayName = "SearchIcon";
function Oe(t) {
  const {
    findCompleted: e,
    localeService: n,
    matchesCount: i,
    matchesPosition: s,
    initialFindString: r,
    findReplaceService: a,
    onChange: l,
    ...d
  } = t, [_, p] = Pt(r), I = e && i === 0 ? n.t("find-replace.dialog.no-result") : i === 0 ? " " : void 0;
  function S(g) {
    s === i && g === 1 ? a.moveToNextMatch() : s === 1 && g === i || g < s ? a.moveToPreviousMatch() : a.moveToNextMatch();
  }
  return /* @__PURE__ */ c("div", { className: "univer-relative univer-flex univer-items-center univer-gap-2", onDrag: (g) => g.stopPropagation(), children: /* @__PURE__ */ c(
    Se,
    {
      "data-u-comp": "search-input",
      autoFocus: !0,
      placeholder: n.t("find-replace.dialog.find-placeholder"),
      value: _,
      onChange: (g) => {
        p(g), l == null || l(g);
      },
      slot: /* @__PURE__ */ c(
        Rt,
        {
          loop: !0,
          text: I,
          value: s,
          total: i,
          onChange: S
        }
      ),
      ...d
    }
  ) });
}
function Ae(t, e) {
  const n = u(() => {
    var s;
    (s = document.querySelector(".univer-find-input input")) == null || s.focus();
  }, []), i = u(() => {
    const s = document.querySelectorAll("[data-u-comp=find-replace-dialog] [data-u-comp=search-input]");
    return Array.from(s).some((r) => r === document.activeElement);
  }, []);
  return Tt(e, () => ({ focus: n, selectHasFocus: i })), A(() => {
    const s = t.focusSignal$.subscribe(() => n());
    return () => s.unsubscribe();
  }, [t, n]), { focus: n, selectHasFocus: i };
}
const Ut = X(function(e, n) {
  const i = m(B), s = m(f), r = m(U), a = P(s.state$, void 0, !0), { findCompleted: l, findString: d, matchesCount: _, matchesPosition: p } = a, M = u(() => {
    r.executeCommand(ie.id);
  }, [r]), I = pt((S) => s.changeFindString(S), 500);
  return Ae(s, n), /* @__PURE__ */ F(H, { children: [
    /* @__PURE__ */ c(
      Oe,
      {
        findCompleted: l,
        matchesCount: _,
        matchesPosition: p,
        findReplaceService: s,
        localeService: i,
        initialFindString: d,
        onChange: I
      }
    ),
    /* @__PURE__ */ c("div", { className: "univer-mt-4 univer-text-center", children: /* @__PURE__ */ c(
      "a",
      {
        className: "hover:univer-text-primary-500/80 univer-cursor-pointer univer-text-sm univer-text-primary-500 univer-transition-colors",
        onClick: M,
        children: i.t("find-replace.dialog.advanced-finding")
      }
    ) })
  ] });
}), Bt = X(function(e, n) {
  const i = m(f), s = m(B), r = m(U), a = m(ge), l = P(i.currentMatch$, void 0, !0), d = P(i.replaceables$, void 0, !0), _ = P(i.state$, void 0, !0), {
    matchesCount: p,
    matchesPosition: M,
    findString: I,
    inputtingFindString: S,
    replaceString: g,
    caseSensitive: Ue,
    matchesTheWholeCell: Be,
    findDirection: We,
    findScope: ke,
    findBy: je,
    findCompleted: W
  } = _, Ve = S.length === 0, Ge = p === 0 || !(l != null && l.replaceable), He = d.length === 0, Ke = u(
    (h) => i.changeInputtingFindString(h),
    [i]
  ), qe = u(
    (h) => i.changeReplaceString(h),
    [i]
  ), { focus: Ze } = Ae(i, n), ze = u(() => {
    I === S ? i.moveToNextMatch() : (i.changeFindString(S), i.find());
  }, [I, S, i]), Ye = u(() => r.executeCommand(De.id), [r]), Je = u(async () => {
    await r.executeCommand(ye.id), Ze();
  }, [r]), Qe = u((h) => {
    i.changeFindDirection(h);
  }, [i]), Xe = u((h) => {
    i.changeFindScope(h);
  }, [i]), et = u((h) => {
    i.changeFindBy(h);
  }, [i]), tt = kt(s), it = jt(s), nt = Vt(s);
  return A(() => {
    W && p === 0 && a.show({
      content: s.t("find-replace.dialog.no-match"),
      type: N.Warning,
      duration: 5e3
    });
  }, [W, p, a, s]), /* @__PURE__ */ F("div", { children: [
    /* @__PURE__ */ c(R, { label: s.t("find-replace.dialog.find"), children: /* @__PURE__ */ c(
      Oe,
      {
        findCompleted: W,
        className: "univer-find-input",
        matchesCount: p,
        matchesPosition: M,
        findReplaceService: i,
        localeService: s,
        initialFindString: S,
        onChange: Ke
      }
    ) }),
    /* @__PURE__ */ c(R, { label: s.t("find-replace.dialog.replace"), children: /* @__PURE__ */ c(
      Se,
      {
        placeholder: s.t("find-replace.dialog.replace-placeholder"),
        value: g,
        onChange: (h) => qe(h)
      }
    ) }),
    /* @__PURE__ */ c(R, { label: s.t("find-replace.dialog.find-direction.title"), children: /* @__PURE__ */ c(k, { value: We, options: it, onChange: Qe }) }),
    /* @__PURE__ */ c(re, { children: /* @__PURE__ */ F(H, { children: [
      /* @__PURE__ */ c(R, { label: s.t("find-replace.dialog.find-scope.title"), children: /* @__PURE__ */ c(k, { value: ke, options: tt, onChange: Xe }) }),
      /* @__PURE__ */ c(R, { label: s.t("find-replace.dialog.find-by.title"), children: /* @__PURE__ */ c(k, { value: je, options: nt, onChange: et }) })
    ] }) }),
    /* @__PURE__ */ c(re, { children: /* @__PURE__ */ F(H, { children: [
      /* @__PURE__ */ c(R, { children: /* @__PURE__ */ c(
        ae,
        {
          checked: Ue,
          onChange: (h) => {
            i.changeCaseSensitive(h);
          },
          children: s.t("find-replace.dialog.case-sensitive")
        }
      ) }),
      /* @__PURE__ */ c(R, { children: /* @__PURE__ */ c(
        ae,
        {
          checked: Be,
          onChange: (h) => {
            i.changeMatchesTheWholeCell(h);
          },
          children: s.t("find-replace.dialog.match-the-whole-cell")
        }
      ) })
    ] }) }),
    /* @__PURE__ */ F("div", { className: "univer-mt-6 univer-flex univer-justify-between", children: [
      /* @__PURE__ */ c(j, { variant: "primary", onClick: ze, disabled: Ve, children: s.t("find-replace.dialog.find") }),
      /* @__PURE__ */ F("span", { className: "univer-inline-flex univer-gap-2", children: [
        /* @__PURE__ */ c(j, { disabled: Ge, onClick: Ye, children: s.t("find-replace.dialog.replace") }),
        /* @__PURE__ */ c(j, { disabled: He, onClick: Je, children: s.t("find-replace.dialog.replace-all") })
      ] })
    ] })
  ] });
});
function Wt() {
  const t = m(f), e = m(me), n = m(J), i = P(t.state$, void 0, !0), s = G(null);
  A(() => {
    let d;
    return s.current && (d = e.registerContainerElement(s.current)), () => d == null ? void 0 : d.dispose();
  }, [e]);
  const r = G(null), a = u(
    (d) => n.setContextValue(be, d),
    [n]
  ), l = u(
    (d) => n.setContextValue(Re, d),
    [n]
  );
  return A(() => {
    var _;
    const d = Dt(document, "focusin").subscribe((p) => {
      var M;
      p.target && ((M = s.current) != null && M.contains(p.target)) ? a(!0) : a(!1), !r.current || !r.current.selectHasFocus() ? l(!1) : l(!0);
    });
    return (_ = r.current) == null || _.focus(), a(!0), l(!0), () => {
      d.unsubscribe(), a(!1);
    };
  }, [a, l]), /* @__PURE__ */ c("div", { ref: s, "data-u-comp": "find-replace-dialog", children: i.replaceRevealed ? /* @__PURE__ */ c(Bt, { ref: r }) : /* @__PURE__ */ c(Ut, { ref: r }) });
}
function kt(t) {
  const e = t.getCurrentLocale();
  return ee(() => [
    { label: t.t("find-replace.dialog.find-scope.current-sheet"), value: z.SUBUNIT },
    { label: t.t("find-replace.dialog.find-scope.workbook"), value: z.UNIT }
  ], [e]);
}
function jt(t) {
  const e = t.getCurrentLocale();
  return ee(() => [
    { label: t.t("find-replace.dialog.find-direction.row"), value: q.ROW },
    { label: t.t("find-replace.dialog.find-direction.column"), value: q.COLUMN }
  ], [e]);
}
function Vt(t) {
  const e = t.getCurrentLocale();
  return ee(() => [
    { label: t.t("find-replace.dialog.find-by.value"), value: Z.VALUE },
    { label: t.t("find-replace.dialog.find-by.formula"), value: Z.FORMULA }
  ], [e]);
}
function y(t) {
  return t.getContextValue(be);
}
function Gt(t) {
  return t.getContextValue(Ie);
}
function Le(t) {
  return t.getContextValue(Re);
}
const E = "7_find-replace-shortcuts";
function ne(t) {
  return t.getContextValue(pe);
}
function se(t) {
  return !t.getContextValue(_e);
}
const Ht = {
  id: x.id,
  description: "find-replace.shortcut.open-find-dialog",
  binding: C.F | D.CTRL_COMMAND,
  group: E,
  preconditions(t) {
    return !y(t) && ne(t) && se(t);
  }
}, Kt = {
  id: x.id,
  description: "find-replace.shortcut.open-find-dialog",
  binding: C.F | D.CTRL_COMMAND,
  mac: C.F | D.MAC_CTRL,
  preconditions(t) {
    return !y(t) && ne(t) && se(t);
  }
}, qt = {
  id: ie.id,
  description: "find-replace.shortcut.open-replace-dialog",
  binding: C.H | D.CTRL_COMMAND,
  mac: C.H | D.MAC_CTRL,
  group: E,
  preconditions(t) {
    return ne(t) && se(t) && (!y(t) || !Gt(t));
  }
}, Zt = {
  id: Pe.id,
  description: "find-replace.shortcut.go-to-next-match",
  binding: C.ENTER,
  group: E,
  priority: 1e3,
  preconditions(t) {
    return Le(t) && y(t);
  }
}, zt = {
  id: Te.id,
  description: "find-replace.shortcut.go-to-previous-match",
  binding: C.ENTER | D.SHIFT,
  group: E,
  priority: 1e3,
  preconditions(t) {
    return Le(t) && y(t);
  }
}, Yt = {
  id: xe.id,
  description: "find-replace.shortcut.focus-selection",
  binding: C.ESC,
  group: E,
  priority: 1e3,
  preconditions(t) {
    return y(t);
  }
};
function Jt(t) {
  const e = t.get(J);
  return {
    id: x.id,
    icon: "SearchIcon",
    tooltip: "find-replace.toolbar",
    type: gt.BUTTON,
    hidden$: _t(t, ct.UNIVER_SHEET),
    disabled$: ve([
      e.subscribeContextValue$(_e),
      e.subscribeContextValue$(pe)
    ]).pipe(yt(([n, i]) => n || !i))
  };
}
const Qt = {
  [mt.ORGANIZATION]: {
    [x.id]: {
      order: 2,
      menuItemFactory: Jt
    }
  }
};
var Xt = Object.getOwnPropertyDescriptor, ei = (t, e, n, i) => {
  for (var s = i > 1 ? void 0 : i ? Xt(e, n) : e, r = t.length - 1, a; r >= 0; r--)
    (a = t[r]) && (s = a(s) || s);
  return s;
}, v = (t, e) => (n, i) => e(n, i, t);
const ce = "DESKTOP_FIND_REPLACE_DIALOG", we = 350, ti = 20, ii = 64;
let w = class extends lt {
  constructor(e, n, i, s, r, a, l, d, _) {
    super();
    o(this, "_closingListenerDisposable");
    this._univerInstanceService = e, this._menuManagerService = n, this._shortcutService = i, this._commandService = s, this._findReplaceService = r, this._dialogService = a, this._layoutService = l, this._localeService = d, this._componentManager = _, this._initCommands(), this._initUI(), this._initShortcuts();
  }
  dispose() {
    var e;
    super.dispose(), (e = this._closingListenerDisposable) == null || e.dispose(), this._closingListenerDisposable = null;
  }
  _initCommands() {
    [
      x,
      ie,
      Pe,
      Te,
      ye,
      De,
      xe
    ].forEach((e) => {
      this.disposeWithMe(this._commandService.registerCommand(e));
    });
  }
  _initShortcuts() {
    [
      qt,
      Ht,
      Kt,
      zt,
      Zt,
      Yt
    ].forEach((e) => this.disposeWithMe(this._shortcutService.registerShortcut(e)));
  }
  _initUI() {
    [
      ["FindReplaceDialog", Wt],
      ["SearchIcon", $e]
    ].forEach(([e, n]) => {
      this.disposeWithMe(
        this._componentManager.register(e, n)
      );
    }), this._menuManagerService.mergeMenu(Qt), this._findReplaceService.stateUpdates$.pipe(oe(this.dispose$)).subscribe((e) => {
      e.revealed === !0 && this._openPanel();
    });
  }
  _openPanel() {
    this._dialogService.open({
      id: ce,
      draggable: !0,
      width: we,
      title: { title: this._localeService.t("find-replace.dialog.title") },
      children: { label: "FindReplaceDialog" },
      destroyOnClose: !0,
      mask: !1,
      maskClosable: !1,
      defaultPosition: ni(),
      preservePositionOnDestroy: !0,
      onClose: () => this.closePanel()
    }), this._closingListenerDisposable = O(this._univerInstanceService.focused$.pipe(oe(this.dispose$)).subscribe((e) => {
      (!e || !this._univerInstanceService.getUniverSheetInstance(e)) && this.closePanel();
    }));
  }
  closePanel() {
    this._closingListenerDisposable && (this._closingListenerDisposable.dispose(), this._closingListenerDisposable = null, this._dialogService.close(ce), this._findReplaceService.terminate(), queueMicrotask(() => this._layoutService.focus()));
  }
};
w = ei([
  v(0, fe),
  v(1, St),
  v(2, vt),
  v(3, U),
  v(4, f),
  v(5, Ct),
  v(6, me),
  v(7, $(B)),
  v(8, $(Mt))
], w);
function ni() {
  const { innerWidth: t } = window;
  return { x: t - we - ti, y: ii };
}
const si = "find-replace.config", le = {};
var ri = Object.getOwnPropertyDescriptor, ai = (t, e, n, i) => {
  for (var s = i > 1 ? void 0 : i ? ri(e, n) : e, r = t.length - 1, a; r >= 0; r--)
    (a = t[r]) && (s = a(s) || s);
  return s;
}, de = (t, e) => (n, i) => e(n, i, t);
const oi = "UNIVER_FIND_REPLACE_PLUGIN";
var V;
let he = (V = class extends ht {
  constructor(t = le, e, n) {
    super(), this._config = t, this._injector = e, this._configService = n;
    const { ...i } = ut(
      {},
      le,
      this._config
    );
    this._configService.setConfig(si, i);
  }
  onStarting() {
    [
      [w],
      [f, { useClass: Y }]
    ].forEach((t) => this._injector.add(t));
  }
  onRendered() {
    this._injector.get(w);
  }
}, o(V, "pluginName", oi), V);
he = ai([
  de(1, $(ue)),
  de(2, dt)
], he);
export {
  Z as FindBy,
  q as FindDirection,
  gi as FindModel,
  w as FindReplaceController,
  K as FindReplaceModel,
  Nt as FindReplaceState,
  z as FindScope,
  Pe as GoToNextMatchOperation,
  Te as GoToPreviousMatchOperation,
  f as IFindReplaceService,
  x as OpenFindDialogOperation,
  ie as OpenReplaceDialogOperation,
  ye as ReplaceAllMatchesCommand,
  De as ReplaceCurrentMatchCommand,
  he as UniverFindReplacePlugin,
  te as createInitFindReplaceState
};
