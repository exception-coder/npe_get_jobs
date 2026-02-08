var ge = Object.defineProperty;
var fe = (h, e, t) => e in h ? ge(h, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : h[e] = t;
var f = (h, e, t) => fe(h, typeof e != "symbol" ? e + "" : e, t);
import { CommandType as H, IUndoRedoService as _e, ICommandService as O, Rectangle as Se, Inject as k, Injector as A, IContextService as Z, IUniverInstanceService as q, ThemeService as me, Disposable as ee, EDITOR_ACTIVATED as pe, UniverInstanceType as te, fromCallback as F, ColorKit as ve, rotate as L, groupBy as Ie, ObjectMatrix as Ce, Tools as Re, replaceInDocumentBody as ke, DependentOn as we, IConfigService as be, Plugin as Me, merge as xe } from "@univerjs/core";
import { SetRangeValuesCommand as ie, SheetsSelectionsService as ye, SelectRangeCommand as Ue, SetWorksheetActiveOperation as Pe, SetSelectionsOperation as Be, SetWorksheetActivateCommand as Fe, UniverSheetsPlugin as j } from "@univerjs/sheets";
import { Shape as We, Rect as He, IRenderManagerService as ne, RENDER_RAW_FORMULA_KEY as Te } from "@univerjs/engine-render";
import { FindReplaceController as Ee, IFindReplaceService as Oe, FindModel as Ae, FindBy as b, FindScope as R, FindDirection as w, UniverFindReplacePlugin as Ne } from "@univerjs/find-replace";
import { SheetSkeletonManagerService as De, getCoordByCell as V, getSheetObject as $e, ScrollToCellCommand as Le } from "@univerjs/sheets-ui";
import { filter as M, Subject as G, throttleTime as je, merge as Ve, skip as Ge, debounceTime as Ye } from "rxjs";
const se = {
  id: "sheet.command.replace",
  type: H.COMMAND,
  handler: async (h, e) => {
    const t = h.get(_e), i = h.get(O), { unitId: n, replacements: r } = e, s = t.__tempBatchingUndoRedo(n), o = await Promise.all(r.map((c) => i.executeCommand(ie.id, {
      unitId: n,
      subUnitId: c.subUnitId,
      value: c.value
    })));
    return s.dispose(), Ke(o, r);
  }
};
function Ke(h, e) {
  let t = 0, i = 0;
  return h.forEach((n, r) => {
    const s = e[r].count;
    n ? t += s : i += s;
  }), { success: t, failure: i };
}
class Qe extends We {
  constructor(t, i) {
    super(t, i);
    f(this, "_activated", !1);
    f(this, "_inHiddenRange", !1);
    f(this, "_color");
    i && this.setShapeProps(i);
  }
  setShapeProps(t) {
    this._activated = !!t.activated, typeof t.inHiddenRange < "u" && (this._inHiddenRange = t.inHiddenRange), typeof t.color < "u" && (this._color = t.color), this.transformByState({
      width: t.width,
      height: t.height
    });
  }
  _draw(t) {
    const i = this._activated, n = `rgba(${this._color.r}, ${this._color.g}, ${this._color.b}, 0.35)`, r = `rgb(${this._color.r}, ${this._color.g}, ${this._color.b})`;
    He.drawWith(t, {
      width: this.width,
      height: this.height,
      fill: n,
      stroke: i ? r : void 0,
      strokeWidth: i ? 2 : 0,
      evented: !1
    });
  }
}
function Y(h, e) {
  return h.startRow === e.startRow && h.startColumn === e.startColumn;
}
function K(h, e) {
  return h.startRow < e.startRow || h.startRow === e.startRow && h.startColumn <= e.startColumn;
}
function Q(h, e) {
  return h.startColumn < e.startColumn || h.startColumn === e.startColumn && h.startRow <= e.startRow;
}
function Xe(h, e) {
  return h.startRow > e.startRow || h.startRow === e.startRow && h.startColumn >= e.startColumn;
}
function ze(h, e) {
  return h.startColumn > e.startColumn || h.startColumn === e.startColumn && h.startRow >= e.startRow;
}
function Je(h, e) {
  const { range: t } = h, { startRow: i, startColumn: n } = t, r = e.getMergedCell(i, n);
  return r ? Se.equals(t, r) : t.endRow === t.startRow && t.endColumn === t.startColumn;
}
var Ze = Object.getOwnPropertyDescriptor, N = (h, e, t, i) => {
  for (var n = i > 1 ? void 0 : i ? Ze(e, t) : e, r = h.length - 1, s; r >= 0; r--)
    (s = h[r]) && (n = s(n) || n);
  return n;
}, m = (h, e) => (t, i) => e(t, i, h);
let x = class extends ee {
  constructor(e, t, i, n, r) {
    super();
    f(this, "_provider");
    this._injector = e, this._findReplaceController = t, this._contextService = i, this._findReplaceService = n, this._commandService = r, this._init(), this._initCommands();
  }
  dispose() {
    super.dispose(), this._findReplaceController.closePanel(), this._provider.dispose();
  }
  _init() {
    const e = this._injector.createInstance(E);
    this._provider = e, this.disposeWithMe(this._findReplaceService.registerFindReplaceProvider(e)), this.disposeWithMe(this._contextService.subscribeContextValue$(pe).pipe(M((t) => !!t)).subscribe(() => this._findReplaceController.closePanel()));
  }
  _initCommands() {
    [se].forEach((e) => this.disposeWithMe(this._commandService.registerCommand(e)));
  }
};
x = N([
  m(0, k(A)),
  m(1, k(Ee)),
  m(2, Z),
  m(3, Oe),
  m(4, O)
], x);
const qe = "sheets-find-replace-provider", et = 1e4;
let T = class extends Ae {
  constructor(e, t, i, n, r, s, o, c) {
    super();
    // We can directly inject the `FindReplaceService` here, and call its methods instead of using the observables.
    f(this, "_matchesUpdate$", new G());
    f(this, "matchesUpdate$", this._matchesUpdate$.asObservable());
    f(this, "_activelyChangingMatch$", new G());
    f(this, "activelyChangingMatch$", this._activelyChangingMatch$.asObservable());
    /** Hold matches by the worksheet they are in. Make it easier to track the next (or previous) match when searching in the whole workbook. */
    f(this, "_matchesByWorksheet", /* @__PURE__ */ new Map());
    /** Hold all matches in the currently searching scope. */
    f(this, "_matches", []);
    /** Position of the current focused ISheetCellMatch, starting from 1. */
    f(this, "_matchesPosition", 0);
    f(this, "_activeHighlightIndex", -1);
    f(this, "_highlightShapes", []);
    f(this, "_currentHighlightShape", null);
    /** This properties holds the query params during this searching session. */
    f(this, "_query", null);
    f(this, "_workbookSelections");
    this._workbook = e, this._sheetSkeletonManagerService = t, this._univerInstanceService = i, this._renderManagerService = n, this._commandService = r, this._contextService = s, this._themeService = o, this._workbookSelections = c.getWorkbookSelections(this.unitId);
  }
  get _matchesCount() {
    return this._matches.length;
  }
  get unitId() {
    return this._workbook.getUnitId();
  }
  get matchesCount() {
    return this._matchesCount;
  }
  get matchesPosition() {
    return this._matchesPosition;
  }
  get currentMatch() {
    return this._matchesPosition > 0 ? this._matches[this._matchesPosition - 1] : null;
  }
  dispose() {
    super.dispose(), this._disposeHighlights(), this._toggleDisplayRawFormula(!1);
  }
  getMatches() {
    return this._matches;
  }
  start(e) {
    switch (this._query = e, e.findBy === b.FORMULA ? this._toggleDisplayRawFormula(!0) : this._toggleDisplayRawFormula(!1), e.findScope) {
      case R.UNIT:
        this.findInWorkbook(e);
        break;
      case R.SUBUNIT:
      default:
        this.findInActiveWorksheet(e);
        break;
    }
  }
  focusSelection() {
    const e = this.currentMatch;
    e && this._commandService.executeCommand(Ue.id, {
      unitId: e.unitId,
      subUnit: e.range.subUnitId,
      range: e.range.range
    });
  }
  _toggleDisplayRawFormula(e) {
    this._contextService.setContextValue(Te, e);
  }
  /**
   * Find all matches in the current workbook no matter which worksheet is activated.
   * @param query the query object
   * @returns the query complete event
   */
  findInWorkbook(e) {
    const t = this._workbook.getUnitId();
    let i, n = !0;
    const r = () => {
      const s = this._workbook.getSheets().filter((o) => !o.isSheetHidden()).map((o) => {
        const c = this._findInWorksheet(o, e, t), l = o.getSheetId(), { results: a } = c;
        return a.length ? this._matchesByWorksheet.set(l, c.results) : this._matchesByWorksheet.delete(l), c;
      });
      this._matches = s.map((o) => o.results).flat(), this._updateFindHighlight(), n ? (i = { results: this._matches }, n = !1) : this._matchesUpdate$.next(this._matches);
    };
    return this.disposeWithMe(this._sheetSkeletonManagerService.currentSkeleton$.subscribe(() => {
      this._updateFindHighlight(), this._updateCurrentHighlightShape(this._activeHighlightIndex);
    })), this.disposeWithMe(
      F(this._commandService.onCommandExecuted.bind(this._commandService)).pipe(M(([s, o]) => s.id === Pe.id && !(o != null && o.fromFindReplace))).subscribe(() => {
        const s = this._workbook.getActiveSheet();
        if (!s)
          return;
        const o = s.getSheetId();
        this._matchesByWorksheet.has(o) && this._findNextMatchOnActiveSheetChange(s);
      })
    ), this.disposeWithMe(
      F(this._commandService.onCommandExecuted.bind(this._commandService)).pipe(
        M(
          ([s]) => s.type === H.MUTATION && s.params.unitId === this._workbook.getUnitId()
        ),
        je(600, void 0, { leading: !1, trailing: !0 })
      ).subscribe(() => r())
    ), r(), i;
  }
  /**
   * This method is used in `findInWorkbook`. When the active sheet changes, this method helps to find the next match
   * in the new worksheet.
   */
  _findNextMatchOnActiveSheetChange(e) {
    let t, i, n = 0;
    const r = this._matchesByWorksheet.get(e.getSheetId()), s = this._workbookSelections.getCurrentSelections();
    s != null && s.length ? ([t, n] = this._findNextMatchByRange(r, s[0].range), i = r.findIndex((o) => o === t)) : (t = r[0], i = 0, n = this._matches.findIndex((o) => o === t)), this._matchesPosition = n + 1, this._activelyChangingMatch$.next(t), this._activeHighlightIndex = i, this._updateFindHighlight(), this._updateCurrentHighlightShape(i);
  }
  /**
   * Find all matches (only) in the currently activated worksheet.
   * @param query the query object
   * @returns the query complete event
   */
  findInActiveWorksheet(e) {
    const t = this._workbook.getUnitId(), i = () => {
      var d;
      const c = this._workbook.getActiveSheet();
      if (!c) return !1;
      const l = this._workbookSelections.getCurrentSelections();
      return (d = l == null ? void 0 : l.some((u) => !Je(u, c))) != null ? d : !1;
    };
    let n, r = !0, s = !1;
    const o = () => {
      const c = this._workbook.getActiveSheet();
      if (!c) return { results: [] };
      const l = this.currentMatch;
      s = i();
      const a = this._workbookSelections.getCurrentSelections(), d = s ? this._findInSelections(c, a, e, t) : this._findInWorksheet(c, e, t);
      return this._matches = d.results, this._matchesPosition = this._tryRestoreLastMatchesPosition(l, this._matches), r ? (n = d, r = !1) : this._matchesUpdate$.next(this._matches), this._updateFindHighlight(), d;
    };
    return this.disposeWithMe(this._sheetSkeletonManagerService.currentSkeleton$.subscribe(() => this._updateFindHighlight())), this.disposeWithMe(
      Ve(
        F(this._commandService.onCommandExecuted.bind(this._commandService)).pipe(
          M(([c]) => {
            if (c.type === H.MUTATION && c.params.unitId === this._workbook.getUnitId())
              return !0;
            if (c.id === Be.id && c.params.unitId === t) {
              const l = i();
              return l === !1 && s === !1 ? !1 : (s = l, !0);
            }
            return !1;
          })
        ),
        // activeSheet$ is a BehaviorSubject, so we need to skip the first
        this._workbook.activeSheet$.pipe(Ge(1))
      ).pipe(Ye(200)).subscribe(() => o())
    ), o(), n;
  }
  _findInRange(e, t, i, n, r) {
    const s = [], o = e.getSheetId(), c = (t.findDirection === w.COLUMN ? e.iterateByColumn : e.iterateByRow).bind(e)(i);
    for (const l of c) {
      const { row: a, col: d, colSpan: u, rowSpan: _, value: S } = l;
      if (r != null && r(a, d) || !S || e.getRowFiltered(a))
        continue;
      const { hit: I, replaceable: C, isFormula: p } = tt(e, a, d, t, S);
      if (I) {
        const U = {
          provider: qe,
          unitId: n,
          replaceable: C,
          isFormula: p,
          range: {
            subUnitId: o,
            range: {
              startRow: a,
              startColumn: d,
              endColumn: d + (u != null ? u : 1) - 1,
              endRow: a + (_ != null ? _ : 1) - 1
            }
          }
        };
        s.push(U);
      }
    }
    return { results: s };
  }
  _findInSelections(e, t, i, n) {
    const { findDirection: r } = i, s = r === w.ROW ? K : Q, o = /* @__PURE__ */ new Set();
    return { results: t.map((l) => this._findInRange(e, i, l.range, n, (a, d) => {
      const u = `${a}-${d}`;
      return o.has(u) ? !0 : (o.add(u), !1);
    }).results).flat().sort((l, a) => s(l.range.range, a.range.range) ? -1 : 1) };
  }
  /** Find matches in a given worksheet. */
  _findInWorksheet(e, t, i) {
    const n = e.getRowCount(), r = e.getColumnCount(), s = { startRow: 0, startColumn: 0, endRow: n - 1, endColumn: r - 1 };
    return this._findInRange(e, t, s, i);
  }
  _disposeHighlights() {
    var e;
    this._highlightShapes.forEach((t) => {
      var i;
      (i = t.getScene()) == null || i.makeDirty(), t.dispose();
    }), this._highlightShapes = [], (e = this._currentHighlightShape) == null || e.dispose(), this._currentHighlightShape = null;
  }
  _updateFindHighlight() {
    var d;
    this._disposeHighlights();
    const e = (d = this._sheetSkeletonManagerService.getCurrent()) == null ? void 0 : d.skeleton;
    if (!e)
      return;
    const t = this._workbook.getUnitId(), i = this._renderManagerService.getRenderById(t);
    if (i == null)
      return;
    const { scene: n } = i, r = this._matches, s = this._themeService.getColorFromTheme("yellow.400"), o = new ve(s).toRgb(), c = this._workbook.getActiveSheet();
    if (!c)
      return;
    const l = c.getSheetId(), a = r.filter((u) => u.range.subUnitId === l).map((u, _) => {
      const { startColumn: S, startRow: I, endColumn: C, endRow: p } = u.range.range, U = V(I, S, n, e), oe = V(p, C, n, e), { startX: D, startY: $ } = U, { endX: he, endY: ce } = oe;
      let P = !0;
      for (let v = I; v <= p; v++)
        if (c.getRowRawVisible(v)) {
          P = !1;
          break;
        }
      let B = !0;
      for (let v = S; v <= C; v++)
        if (c.getColVisible(v)) {
          B = !1;
          break;
        }
      const ae = P || B, le = B ? 2 : he - D, de = P ? 2 : ce - $, ue = {
        left: D,
        top: $,
        color: o,
        width: le,
        height: de,
        evented: !1,
        inHiddenRange: ae,
        zIndex: et
      };
      return new Qe(`find-highlight-${_}`, ue);
    });
    n.addObjects(a), this._highlightShapes = a, n.makeDirty();
  }
  _updateCurrentHighlightShape(e) {
    var t;
    if ((t = this._currentHighlightShape) == null || t.setShapeProps({ activated: !1 }), this._currentHighlightShape = null, e !== void 0) {
      const i = this._highlightShapes[e];
      if (!i)
        return;
      this._currentHighlightShape = i, i.setShapeProps({ activated: !0 });
    }
  }
  _getSheetObject() {
    return $e(this._univerInstanceService, this._renderManagerService);
  }
  _focusMatch(e) {
    var i;
    const t = e.range.subUnitId;
    t !== ((i = this._workbook.getActiveSheet()) == null ? void 0 : i.getSheetId()) && this._commandService.executeCommand(Fe.id, { unitId: this._workbook.getUnitId(), subUnitId: t }, { fromFindReplace: !0 }), this._commandService.executeCommand(
      Le.id,
      { range: e.range.range },
      { fromFindReplace: !0 }
    );
  }
  _tryRestoreLastMatchesPosition(e, t) {
    if (!e) return 0;
    const { subUnitId: i } = e.range, { startColumn: n, startRow: r } = e.range.range, s = t.findIndex((o) => {
      if (i !== o.range.subUnitId)
        return !1;
      const { startColumn: c, startRow: l } = o.range.range;
      return c === n && l === r;
    });
    return s > -1 ? s + 1 : 0;
  }
  moveToNextMatch(e) {
    var o, c, l, a, d;
    if (!this._matches.length)
      return null;
    const t = (o = e == null ? void 0 : e.loop) != null ? o : !1, i = (c = e == null ? void 0 : e.stayIfOnMatch) != null ? c : !1, n = (l = e == null ? void 0 : e.noFocus) != null ? l : !1, r = (a = e == null ? void 0 : e.ignoreSelection) != null ? a : !1, s = this._findNextMatch(t, i, r);
    if (s) {
      const [u, _] = s;
      return this._matchesPosition = _ + 1, this._query.findScope === R.UNIT ? this._activeHighlightIndex = this._matchesByWorksheet.get(u.range.subUnitId).findIndex((S) => S === u) : this._activeHighlightIndex = _, n || this._focusMatch(u), ((d = this._workbook.getActiveSheet()) == null ? void 0 : d.getSheetId()) === u.range.subUnitId && this._updateCurrentHighlightShape(this._activeHighlightIndex), u;
    }
    return this._matchesPosition = 0, this._updateCurrentHighlightShape(), null;
  }
  moveToPreviousMatch(e) {
    var o, c, l, a, d;
    if (!this._matches.length)
      return null;
    const t = (o = e == null ? void 0 : e.loop) != null ? o : !1, i = (c = e == null ? void 0 : e.stayIfOnMatch) != null ? c : !1, n = (l = e == null ? void 0 : e.noFocus) != null ? l : !1, r = (a = e == null ? void 0 : e.ignoreSelection) != null ? a : !1, s = this._findPreviousMatch(t, i, r);
    if (s) {
      const [u, _] = s;
      return this._matchesPosition = _ + 1, this._query.findScope === R.UNIT ? this._activeHighlightIndex = this._matchesByWorksheet.get(u.range.subUnitId).findIndex((S) => S === u) : this._activeHighlightIndex = _, n || this._focusMatch(u), ((d = this._workbook.getActiveSheet()) == null ? void 0 : d.getSheetId()) === u.range.subUnitId && this._updateCurrentHighlightShape(this._activeHighlightIndex), u;
    }
    return this._matchesPosition = 0, this._updateCurrentHighlightShape(), null;
  }
  _findPreviousMatch(e = !1, t = !1, i = !1) {
    var o;
    if (this.currentMatch) {
      const c = this._matches.findIndex((u) => u === this.currentMatch);
      if (t)
        return [this.currentMatch, c];
      const l = c - 1;
      if (!e && l < 0)
        return null;
      const a = this._matches.length, d = (l + a) % a;
      return [this._matches[d], d];
    }
    const n = this._workbookSelections.getCurrentLastSelection();
    if (i || !n) {
      const c = this._matches.length - 1;
      return [this._matches[c], c];
    }
    if (this._query.findScope !== R.UNIT)
      return this._findPreviousMatchByRange(this._matches, n.range);
    const r = (o = this._workbook.getActiveSheet()) == null ? void 0 : o.getSheetId();
    if (!r)
      return null;
    const s = this._findPreviousWorksheetThatHasAMatch(r, e);
    return s ? this._findPreviousMatchByRange(this._matchesByWorksheet.get(s), n.range) : null;
  }
  _findNextMatch(e = !1, t = !1, i = !1) {
    var o;
    if (this.currentMatch) {
      const c = this._matches.findIndex((u) => u === this.currentMatch);
      if (t)
        return [this.currentMatch, c];
      const l = c + 1, a = this._matches.length;
      if (!e && l >= a)
        return null;
      const d = l % a;
      return [this._matches[d], d];
    }
    const n = this._workbookSelections.getCurrentLastSelection();
    if (i || !n)
      return [this._matches[0], 0];
    if (this._query.findScope !== R.UNIT)
      return this._findNextMatchByRange(this._matches, n.range, t);
    const r = (o = this._workbook.getActiveSheet()) == null ? void 0 : o.getSheetId();
    if (!r)
      return null;
    const s = this._findNextWorksheetThatHasAMatch(r, e);
    return s ? this._findNextMatchByRange(this._matchesByWorksheet.get(s), n.range) : null;
  }
  _findPreviousWorksheetThatHasAMatch(e, t = !1) {
    const i = this._workbook.getSheetOrders(), n = i.findIndex((o) => o === e), s = (t ? L(i, n + 1) : i.slice(0, n + 1)).findLast((o) => this._matchesByWorksheet.has(o));
    return s != null ? s : null;
  }
  _findNextWorksheetThatHasAMatch(e, t = !1) {
    const i = this._workbook.getSheetOrders(), n = i.findIndex((o) => o === e), s = (t ? L(i, n) : i.slice(n)).find((o) => this._matchesByWorksheet.has(o));
    return s != null ? s : null;
  }
  _findNextMatchByRange(e, t, i = !1) {
    const n = this._query.findDirection === w.ROW;
    let r = e.findIndex((o) => {
      const c = o.range.range;
      if (!(n ? K(t, c) : Q(t, c)))
        return !1;
      const a = Y(t, c);
      return i ? a : !a;
    });
    r === -1 && (r = e.length - 1);
    const s = e[r];
    return [s, this._matches.findIndex((o) => o === s)];
  }
  _findPreviousMatchByRange(e, t, i = !1) {
    const n = this._query.findDirection === w.ROW;
    let r = this._matches.findLastIndex((o) => {
      const c = o.range.range;
      if (!(n ? Xe(t, c) : ze(t, c)))
        return !1;
      const a = Y(t, c);
      return i ? a : !a;
    });
    r === -1 && (r = 0);
    const s = e[r];
    return [s, this._matches.findIndex((o) => o === s)];
  }
  async replace(e) {
    if (this._matchesCount === 0 || !this.currentMatch || !this._query || !this.currentMatch.replaceable)
      return !1;
    const t = this.currentMatch.range, i = this._workbook.getSheetBySheetId(this.currentMatch.range.subUnitId), n = this._getReplacedCellData(
      this.currentMatch,
      i,
      this._query.findBy === b.FORMULA,
      this._query.findString,
      e,
      this._query.caseSensitive ? "g" : "ig"
    ), r = {
      unitId: this.currentMatch.unitId,
      subUnitId: t.subUnitId,
      value: {
        [t.range.startRow]: {
          [t.range.startColumn]: n
        }
      }
    };
    return this._commandService.executeCommand(ie.id, r);
  }
  async replaceAll(e) {
    if (this._matchesCount === 0 || !this._query)
      return { success: 0, failure: 0 };
    const t = this._workbook.getUnitId(), { findString: i, caseSensitive: n, findBy: r } = this._query, s = r === b.FORMULA, o = n ? "g" : "ig", c = [];
    return Ie(this._matches.filter((a) => a.replaceable), (a) => a.range.subUnitId).forEach((a, d) => {
      const u = new Ce(), _ = this._workbook.getSheetBySheetId(d);
      a.forEach((S) => {
        const { startColumn: I, startRow: C } = S.range.range, p = this._getReplacedCellData(S, _, s, i, e, o);
        p && u.setValue(C, I, p);
      }), c.push({
        count: a.length,
        subUnitId: d,
        value: u.getMatrix()
      });
    }), c ? this._commandService.executeCommand(se.id, {
      unitId: t,
      replacements: c
    }) : { success: 0, failure: 0 };
  }
  _getReplacedCellData(e, t, i, n, r, s) {
    var _;
    const o = e.range.range, { startRow: c, startColumn: l } = o, a = t.getCellRaw(c, l);
    if (e.isFormula)
      return i ? { f: a.f.replace(new RegExp(X(n), s), r), v: null } : null;
    if (!!((_ = a.p) != null && _.body)) {
      const S = Re.deepClone(a.p);
      return ke(S.body, n, r, this._query.caseSensitive), { p: S };
    }
    return { v: a.v.toString().replace(new RegExp(X(n), s), r) };
  }
};
T = N([
  m(2, q),
  m(3, ne),
  m(4, O),
  m(5, Z),
  m(6, k(me)),
  m(7, k(ye))
], T);
function X(h) {
  return h.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
let E = class extends ee {
  constructor(e, t, i) {
    super();
    /**
     * Hold all find results in this kind of univer business instances (Workbooks).
     */
    f(this, "_findModelsByUnitId", /* @__PURE__ */ new Map());
    this._univerInstanceService = e, this._renderManagerService = t, this._injector = i;
  }
  async find(e) {
    this._terminate();
    const t = this._univerInstanceService.getCurrentUnitOfType(te.UNIVER_SHEET);
    if (!t) return [];
    const i = this._preprocessQuery(e), n = this._renderManagerService.getRenderById(t.getUnitId()).with(De), r = this._injector.createInstance(T, t, n);
    return this._findModelsByUnitId.set(t.getUnitId(), r), r.start(i), [r];
  }
  terminate() {
    this._terminate();
  }
  _terminate() {
    this._findModelsByUnitId.forEach((e) => e.dispose()), this._findModelsByUnitId.clear();
  }
  /**
   * Parsed the query object before do actual searching in favor of performance.
   * @param query the raw query object
   * @returns the parsed query object
   */
  _preprocessQuery(e) {
    let t = e.caseSensitive ? e.findString : e.findString.toLowerCase();
    return t = t.trim(), {
      ...e,
      findString: t
    };
  }
};
E = N([
  m(0, q),
  m(1, ne),
  m(2, k(A))
], E);
const g = { hit: !1, replaceable: !1, isFormula: !1, rawData: null };
function tt(h, e, t, i, n) {
  const { findBy: r } = i, s = r === b.FORMULA, o = h.getCellRaw(e, t);
  return g.rawData = o, !(o != null && o.f) ? (g.isFormula = !1, W(n, i) ? o ? (g.hit = !0, g.replaceable = !0) : (g.hit = !0, g.replaceable = !1) : (g.hit = !1, g.replaceable = !1), g) : (g.isFormula = !0, s ? W({ v: o.f }, i) ? (g.hit = !0, g.replaceable = !0, g) : (g.hit = !1, g.replaceable = !1, g) : (g.replaceable = !1, W(n, i) ? g.hit = !0 : g.hit = !1, g));
}
function W(h, e) {
  let t = it(h);
  return t ? e.matchesTheWholeCell ? (t = nt(t), e.caseSensitive ? t === e.findString : t.toLowerCase() === e.findString) : e.caseSensitive ? t.indexOf(e.findString) > -1 : t.toLowerCase().indexOf(e.findString) > -1 : !1;
}
function it(h) {
  var t, i, n;
  const e = (n = (i = (t = h == null ? void 0 : h.p) == null ? void 0 : t.body) == null ? void 0 : i.dataStream) != null ? n : h == null ? void 0 : h.v;
  return typeof e == "number" ? `${e}` : typeof e == "boolean" ? e ? "1" : "0" : e;
}
function nt(h) {
  return h.replace(/^ +/g, "").replace(/ +$/g, "");
}
const st = "sheets-find-replace.config", z = {};
var rt = Object.defineProperty, ot = Object.getOwnPropertyDescriptor, ht = (h, e, t) => e in h ? rt(h, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : h[e] = t, ct = (h, e, t, i) => {
  for (var n = i > 1 ? void 0 : i ? ot(e, t) : e, r = h.length - 1, s; r >= 0; r--)
    (s = h[r]) && (n = s(n) || n);
  return n;
}, J = (h, e) => (t, i) => e(t, i, h), re = (h, e, t) => ht(h, typeof e != "symbol" ? e + "" : e, t);
const at = "SHEET_FIND_REPLACE_PLUGIN";
let y = class extends Me {
  constructor(h = z, e, t) {
    super(), this._config = h, this._injector = e, this._configService = t;
    const { ...i } = xe(
      {},
      z,
      this._config
    );
    this._configService.setConfig(st, i);
  }
  onStarting() {
    [[x]].forEach((h) => this._injector.add(h));
  }
  onSteady() {
    this._injector.get(x);
  }
};
re(y, "pluginName", at);
re(y, "type", te.UNIVER_SHEET);
y = ct([
  we(j, j, Ne),
  J(1, k(A)),
  J(2, be)
], y);
export {
  se as SheetReplaceCommand,
  x as SheetsFindReplaceController,
  y as UniverSheetsFindReplacePlugin
};
