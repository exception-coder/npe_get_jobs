var u = Object.defineProperty;
var p = (a, e, t) => e in a ? u(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var c = (a, e, t) => p(a, typeof e != "symbol" ? e + "" : e, t);
import { Inject as m, Injector as _, IUniverInstanceService as f, Disposable as v } from "@univerjs/core";
import { IFindReplaceService as g, FindReplaceModel as y, createInitFindReplaceState as S, FindReplaceState as b, FindBy as h } from "@univerjs/find-replace";
import { FRange as F } from "@univerjs/sheets/facade";
import { FUniver as d } from "@univerjs/core/facade";
var w = Object.getOwnPropertyDescriptor, C = (a, e, t, s) => {
  for (var n = s > 1 ? void 0 : s ? w(e, t) : e, i = a.length - 1, r; i >= 0; i--)
    (r = a[i]) && (n = r(n) || n);
  return n;
}, o = (a, e) => (t, s) => e(t, s, a);
let l = class extends v {
  constructor(e, t, s, n) {
    super();
    c(this, "_state", new b());
    c(this, "_model");
    c(this, "_complete");
    this._injector = t, this._univerInstanceService = s, this._findReplaceService = n;
    const i = this._findReplaceService.getProviders();
    this._model = this._injector.createInstance(y, this._state, i);
    const r = {
      ...S(),
      ...e
    };
    this._state.changeState(r);
  }
  findAll() {
    return !this._state.findCompleted || !this._complete ? [] : this._complete.results.map((e) => this._findMatchToFRange(e));
  }
  findNext() {
    var t;
    if (!this._state.findCompleted || !this._complete)
      return null;
    const e = (t = this._model) == null ? void 0 : t.moveToNextMatch();
    return e ? this._findMatchToFRange(e) : null;
  }
  findPrevious() {
    var t;
    const e = (t = this._model) == null ? void 0 : t.moveToPreviousMatch();
    return e ? this._findMatchToFRange(e) : null;
  }
  getCurrentMatch() {
    var t;
    if (!this._state.findCompleted || !this._complete)
      throw new Error("Find operation is not completed.");
    const e = (t = this._model) == null ? void 0 : t.currentMatch$.value;
    return e ? this._findMatchToFRange(e) : null;
  }
  async matchCaseAsync(e) {
    return this._state.changeState({ caseSensitive: e, findCompleted: !1 }), new Promise((t) => {
      const s = this._state.stateUpdates$.subscribe(async (n) => {
        n.findCompleted === !0 && (s.unsubscribe(), await this.ensureCompleteAsync(), t(this));
      });
    });
  }
  async matchEntireCellAsync(e) {
    return this._state.changeState({ matchesTheWholeCell: e, findCompleted: !1 }), new Promise((t) => {
      const s = this._state.stateUpdates$.subscribe(async (n) => {
        n.findCompleted === !0 && (s.unsubscribe(), await this.ensureCompleteAsync(), t(this));
      });
    });
  }
  async matchFormulaTextAsync(e) {
    return this._state.changeState({ findBy: e ? h.FORMULA : h.VALUE, findCompleted: !1 }), new Promise((t) => {
      const s = this._state.stateUpdates$.subscribe(async (n) => {
        n.findCompleted === !0 && (s.unsubscribe(), await this.ensureCompleteAsync(), t(this));
      });
    });
  }
  async replaceAllWithAsync(e) {
    var s, n, i;
    await this._state.changeState({ replaceRevealed: !0, replaceString: e });
    const t = (i = (n = await ((s = this._model) == null ? void 0 : s.replaceAll())) == null ? void 0 : n.success) != null ? i : 0;
    return this._state.changeState({ replaceRevealed: !1 }), t;
  }
  async replaceWithAsync(e) {
    var t;
    return await this._state.changeState({ replaceRevealed: !0, replaceString: e }), await ((t = this._model) == null ? void 0 : t.replace()), this._state.changeState({ replaceRevealed: !1 }), !0;
  }
  async ensureCompleteAsync() {
    var e;
    this._complete = await ((e = this._model) == null ? void 0 : e.start());
  }
  _findMatchToFRange(e) {
    const { unitId: t } = e, { subUnitId: s, range: n } = e.range, i = this._univerInstanceService.getUnit(t), r = i.getSheetBySheetId(s);
    return this._injector.createInstance(F, i, r, n);
  }
};
l = C([
  o(1, m(_)),
  o(2, f),
  o(3, g)
], l);
class R extends d {
  async createTextFinderAsync(e) {
    const t = { findString: e }, s = this._injector.createInstance(l, t);
    return await s.ensureCompleteAsync(), s;
  }
}
d.extend(R);
