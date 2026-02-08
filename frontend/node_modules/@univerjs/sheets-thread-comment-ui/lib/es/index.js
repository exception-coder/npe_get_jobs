var Re = Object.defineProperty;
var Ue = (t, e, r) => e in t ? Re(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var y = (t, e, r) => Ue(t, typeof e != "symbol" ? e + "" : e, r);
import { Inject as p, Disposable as $, DisposableCollection as $e, CommandType as Oe, IUniverInstanceService as x, InterceptorEffectEnum as ke, UniverInstanceType as M, Range as Ne, ICommandService as ne, RANGE_TYPE as se, Rectangle as De, Tools as xe, DependentOn as Ae, Injector as Ve, IConfigService as Be, Plugin as He, merge as Le } from "@univerjs/core";
import { SheetsSelectionsService as de, getSheetCommandTarget as je, SheetInterceptorService as Fe, INTERCEPTOR_POINT as We, SheetPermissionCheckController as ue, RangeProtectionPermissionViewPoint as G, WorksheetViewPermission as z, WorkbookCommentPermission as K, SetWorksheetActiveOperation as Ze } from "@univerjs/sheets";
import { SheetsThreadCommentModel as O, UniverSheetsThreadCommentPlugin as Ge } from "@univerjs/sheets-thread-comment";
import { ThreadCommentPanelService as re, SetActiveCommentOperation as q, ThreadCommentTree as ze, ThreadCommentPanel as Ke, ToggleSheetCommentPanelOperation as le, THREAD_COMMENT_PANEL as Ye, UniverThreadCommentUIPlugin as qe } from "@univerjs/thread-comment-ui";
import { UniverThreadCommentUIPlugin as dn } from "@univerjs/thread-comment-ui";
import { SheetCanvasPopManagerService as Je, CellPopupManagerService as Qe, ISheetClipboardService as Xe, COPY_TYPE as et, HoverManagerService as tt, IMarkSelectionService as pe, IEditorBridgeService as nt, SheetSkeletonManagerService as rt, ScrollToRangeOperation as ot, whenSheetEditorFocused as it, getCurrentRangeDisable$ as Ce } from "@univerjs/sheets-ui";
import { IZenZoneService as st, useDependency as E, useObservable as N, KeyCode as at, MetaKeys as ae, getMenuHiddenObservable as _e, MenuItemType as ve, ContextMenuPosition as ct, ContextMenuGroup as ht, RibbonInsertGroup as mt, IMenuManagerService as dt, ComponentManager as ut, IShortcutService as lt } from "@univerjs/ui";
import { BehaviorSubject as pt, debounceTime as oe, map as Ct } from "rxjs";
import { IRenderManagerService as Se } from "@univerjs/engine-render";
import { singleReferenceToGrid as D, serializeRange as _t } from "@univerjs/engine-formula";
import { IThreadCommentDataSourceService as vt, DeleteCommentMutation as te, AddCommentMutation as ce } from "@univerjs/thread-comment";
import { AddCommentCommand as ln, DeleteCommentCommand as pn, DeleteCommentTreeCommand as Cn, IThreadCommentDataSourceService as _n, ResolveCommentCommand as vn, UpdateCommentCommand as Sn } from "@univerjs/thread-comment";
import { useRef as fe, createElement as ge, forwardRef as St, useMemo as ft, useCallback as he, useEffect as gt } from "react";
import { jsx as Ie } from "react/jsx-runtime";
const Pe = "univer.sheet.thread-comment-modal", Te = "SHEET_THREAD_COMMENT";
var It = Object.getOwnPropertyDescriptor, Pt = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? It(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (o = s(o) || o);
  return o;
}, J = (t, e) => (r, n) => e(r, n, t);
let R = class extends $ {
  constructor(e, r, n) {
    super();
    y(this, "_lastPopup", null);
    y(this, "_activePopup");
    y(this, "_activePopup$", new pt(null));
    y(this, "activePopup$", this._activePopup$.asObservable());
    this._canvasPopupManagerService = e, this._zenZoneService = r, this._cellPopupManagerService = n, this._initZenVisible(), this.disposeWithMe(() => {
      this._activePopup$.complete();
    });
  }
  get activePopup() {
    return this._activePopup;
  }
  _initZenVisible() {
    this.disposeWithMe(this._zenZoneService.visible$.subscribe((e) => {
      e && this.hidePopup();
    }));
  }
  dispose() {
    super.dispose(), this.hidePopup();
  }
  showPopup(e, r) {
    var h;
    const { row: n, col: o, unitId: i, subUnitId: s } = e;
    if (this._activePopup && n === this._activePopup.row && o === this._activePopup.col && i === this._activePopup.unitId && s === ((h = this.activePopup) == null ? void 0 : h.subUnitId)) {
      this._activePopup = e, this._activePopup$.next(e);
      return;
    }
    if (this._lastPopup && this._lastPopup.dispose(), this._zenZoneService.visible)
      return;
    this._activePopup = e, this._activePopup$.next(e);
    const a = this._cellPopupManagerService.showPopup(
      {
        row: n,
        col: o,
        unitId: i,
        subUnitId: s
      },
      {
        componentKey: Pe,
        onClickOutside: () => {
          this.hidePopup();
        },
        direction: "horizontal",
        excludeOutside: [
          ...Array.from(document.querySelectorAll(".univer-thread-comment")),
          document.getElementById("thread-comment-add")
        ].filter(Boolean),
        priority: 2
      }
    );
    if (!a)
      throw new Error("[SheetsThreadCommentPopupService]: cannot show popup!");
    const c = new $e();
    c.add(a), c.add({
      dispose: () => {
        r == null || r();
      }
    }), this._lastPopup = c;
  }
  hidePopup() {
    this._activePopup && (this._lastPopup && this._lastPopup.dispose(), this._lastPopup = null, this._activePopup = null, this._activePopup$.next(null));
  }
  persistPopup() {
    !this._activePopup || !this._activePopup.temp || (this._activePopup = {
      ...this._activePopup,
      temp: !1
    }, this._activePopup$.next(this._activePopup));
  }
};
R = Pt([
  J(0, p(Je)),
  J(1, st),
  J(2, p(Qe))
], R);
const A = {
  type: Oe.OPERATION,
  id: "sheets.operation.show-comment-modal",
  handler(t) {
    var _;
    const e = t.get(de), r = t.get(x), n = t.get(R), o = t.get(re), i = (_ = e.getCurrentLastSelection()) == null ? void 0 : _.primary, s = t.get(O);
    if (!i)
      return !1;
    const a = je(r);
    if (!a)
      return !1;
    const { workbook: c, worksheet: h, unitId: d, subUnitId: m } = a, C = {
      workbook: c,
      worksheet: h,
      unitId: d,
      subUnitId: m,
      row: i.startRow,
      col: i.startColumn
    };
    n.showPopup(C);
    const l = s.getByLocation(d, m, i.startRow, i.startColumn);
    return l && o.setActiveComment({
      unitId: d,
      subUnitId: m,
      commentId: l,
      trigger: "context-menu"
    }), !0;
  }
}, Tt = "sheets-thread-comment.config", me = {};
var wt = Object.getOwnPropertyDescriptor, Mt = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? wt(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (o = s(o) || o);
  return o;
}, V = (t, e) => (r, n) => e(r, n, t);
let H = class extends $ {
  constructor(t, e, r, n) {
    super(), this._sheetInterceptorService = t, this._sheetsThreadCommentModel = e, this._univerInstanceService = r, this._renderManagerService = n, this._initViewModelIntercept(), this._initSkeletonChange();
  }
  _initViewModelIntercept() {
    this.disposeWithMe(
      this._sheetInterceptorService.intercept(
        We.CELL_CONTENT,
        {
          effect: ke.Style,
          handler: (t, e, r) => {
            const { row: n, col: o, unitId: i, subUnitId: s } = e;
            return this._sheetsThreadCommentModel.showCommentMarker(i, s, n, o) && ((!t || t === e.rawData) && (t = { ...e.rawData }), t.markers = {
              ...t == null ? void 0 : t.markers,
              tr: {
                color: "#FFBD37",
                size: 6
              }
            }), r(t);
          },
          priority: 100
        }
      )
    );
  }
  _initSkeletonChange() {
    const t = () => {
      var o;
      const e = this._univerInstanceService.getCurrentUnitForType(M.UNIVER_SHEET);
      if (!e) return;
      const r = e.getUnitId(), n = this._renderManagerService.getRenderById(r);
      (o = n == null ? void 0 : n.mainComponent) == null || o.makeForceDirty();
    };
    this.disposeWithMe(this._sheetsThreadCommentModel.commentUpdate$.pipe(oe(16)).subscribe(() => {
      t();
    }));
  }
};
H = Mt([
  V(0, p(Fe)),
  V(1, p(O)),
  V(2, x),
  V(3, Se)
], H);
var bt = Object.getOwnPropertyDescriptor, yt = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? bt(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (o = s(o) || o);
  return o;
}, Q = (t, e) => (r, n) => e(r, n, t);
const Et = (t, e, r) => {
  const n = D(t), o = r.row - e.row, i = r.column - e.column, s = {
    startColumn: n.column + i,
    startRow: n.row + o,
    endColumn: n.column + i,
    endRow: n.row + o
  };
  return _t(s);
};
let L = class extends $ {
  constructor(e, r, n) {
    super();
    y(this, "_copyInfo");
    this._sheetClipboardService = e, this._sheetsThreadCommentModel = r, this._threadCommentDataSourceService = n, this._initClipboardHook();
  }
  // eslint-disable-next-line max-lines-per-function
  _initClipboardHook() {
    this.disposeWithMe(
      this._sheetClipboardService.addClipboardHook({
        id: Te,
        onBeforeCopy: (e, r, n) => {
          this._copyInfo = {
            unitId: e,
            subUnitId: r,
            range: n
          };
        },
        // eslint-disable-next-line max-lines-per-function
        onPasteCells: (e, r, n, o) => {
          const { unitId: i, subUnitId: s, range: a } = r, c = {
            row: a.rows[0],
            column: a.cols[0]
          };
          if (o.copyType === et.CUT && this._copyInfo) {
            const { range: h, unitId: d, subUnitId: m } = this._copyInfo, C = {
              row: h.startRow,
              column: h.startColumn
            };
            if (!(i === d && s === m)) {
              const l = [];
              Ne.foreach(h, (g, u) => {
                const I = this._sheetsThreadCommentModel.getAllByLocation(d, m, g, u);
                this._threadCommentDataSourceService.syncUpdateMutationToColla ? I.forEach((v) => {
                  l.push(v);
                }) : I.forEach(({ children: v, ...T }) => {
                  T.parentId || l.push(T);
                });
              });
              const _ = [], f = [], U = [], k = [], Y = (g) => {
                _.unshift({
                  id: te.id,
                  params: {
                    unitId: d,
                    subUnitId: m,
                    commentId: g.id
                  }
                }), U.push({
                  id: ce.id,
                  params: {
                    unitId: i,
                    subUnitId: s,
                    comment: {
                      ...g,
                      ref: Et(g.ref, C, c),
                      unitId: i,
                      subUnitId: s
                    },
                    sync: !0
                  }
                }), f.push({
                  id: ce.id,
                  params: {
                    unitId: d,
                    subUnitId: m,
                    comment: g,
                    sync: !0
                  }
                }), k.unshift({
                  id: te.id,
                  params: {
                    unitId: i,
                    subUnitId: s,
                    commentId: g.id
                  }
                });
              };
              return l.forEach((g) => {
                Y(g);
              }), {
                redos: [..._, ...U],
                undos: [...k, ...f]
              };
            }
          }
          return {
            redos: [],
            undos: []
          };
        }
      })
    );
  }
};
L = yt([
  Q(0, p(Xe)),
  Q(1, p(O)),
  Q(2, vt)
], L);
var Rt = Object.getOwnPropertyDescriptor, Ut = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? Rt(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (o = s(o) || o);
  return o;
}, B = (t, e) => (r, n) => e(r, n, t);
let j = class extends $ {
  constructor(t, e, r, n) {
    super(), this._hoverManagerService = t, this._sheetsThreadCommentPopupService = e, this._sheetsThreadCommentModel = r, this._sheetPermissionCheckController = n, this._initHoverEvent();
  }
  _initHoverEvent() {
    this.disposeWithMe(
      this._hoverManagerService.currentCell$.pipe(oe(100)).subscribe((t) => {
        const e = this._sheetsThreadCommentPopupService.activePopup;
        if (t && (e && e.temp || !e)) {
          const { location: r } = t, { unitId: n, subUnitId: o, row: i, col: s } = r, a = this._sheetsThreadCommentModel.getByLocation(n, o, i, s);
          if (a) {
            if (!this._sheetPermissionCheckController.permissionCheckWithRanges({
              workbookTypes: [K],
              worksheetTypes: [z],
              rangeTypes: [G]
            }, [{ startRow: i, startColumn: s, endRow: i, endColumn: s }]))
              return;
            const h = this._sheetsThreadCommentModel.getComment(n, o, a);
            h && !h.resolved && this._sheetsThreadCommentPopupService.showPopup({
              unitId: n,
              subUnitId: o,
              row: i,
              col: s,
              commentId: a,
              temp: !0
            });
          } else
            e && this._sheetsThreadCommentPopupService.hidePopup();
        }
      })
    );
  }
};
j = Ut([
  B(0, p(tt)),
  B(1, p(R)),
  B(2, p(O)),
  B(3, p(ue))
], j);
var $t = Object.getOwnPropertyDescriptor, Ot = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? $t(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (o = s(o) || o);
  return o;
}, w = (t, e) => (r, n) => e(r, n, t);
let F = class extends $ {
  constructor(e, r, n, o, i, s, a, c, h, d) {
    super();
    y(this, "_isSwitchToCommenting", !1);
    y(this, "_selectionShapeInfo", null);
    this._commandService = e, this._sheetsThreadCommentPopupService = r, this._sheetsThreadCommentModel = n, this._threadCommentPanelService = o, this._univerInstanceService = i, this._sheetPermissionCheckController = s, this._markSelectionService = a, this._sheetSelectionService = c, this._editorBridgeService = h, this._renderManagerService = d, this._initCommandListener(), this._initPanelListener(), this._initMarkSelection(), this._initSelectionUpdateListener(), this._initEditorBridge();
  }
  _handleSelectionChange(e, r, n) {
    var C, l, _;
    const o = (C = e[0]) == null ? void 0 : C.range, i = this._renderManagerService.getRenderById(r), s = (l = i == null ? void 0 : i.with(rt).getSkeletonParam(n)) == null ? void 0 : l.skeleton;
    if (!s || !o)
      return;
    const a = s.getCellWithCoordByIndex(o.startRow, o.startColumn);
    if ((((_ = o.rangeType) != null ? _ : se.NORMAL) !== se.NORMAL || o.endColumn - o.startColumn > 0 || o.endRow - o.startRow > 0) && !((a.isMerged || a.isMergedMainCell) && De.equals(a.mergeInfo, o))) {
      this._threadCommentPanelService.activeCommentId && this._commandService.executeCommand(q.id);
      return;
    }
    const h = a.actualRow, d = a.actualColumn;
    if (!this._sheetsThreadCommentModel.showCommentMarker(r, n, h, d)) {
      this._threadCommentPanelService.activeCommentId && this._commandService.executeCommand(q.id);
      return;
    }
    const m = this._sheetsThreadCommentModel.getByLocation(r, n, h, d);
    m && this._commandService.executeCommand(q.id, {
      unitId: r,
      subUnitId: n,
      commentId: m
    });
  }
  _initSelectionUpdateListener() {
    this.disposeWithMe(
      this._sheetSelectionService.selectionMoveEnd$.subscribe((e) => {
        if (this._isSwitchToCommenting)
          return;
        const r = this._sheetSelectionService.currentSelectionParam;
        r && this._handleSelectionChange(e, r.unitId, r.sheetId);
      })
    );
  }
  _initEditorBridge() {
    this.disposeWithMe(
      this._editorBridgeService.visible$.subscribe((e) => {
        e.visible && this._sheetsThreadCommentPopupService.hidePopup();
      })
    );
  }
  _initCommandListener() {
    this._commandService.onCommandExecuted((e) => {
      if (e.id === te.id) {
        const r = e.params, n = this._sheetsThreadCommentPopupService.activePopup;
        if (!n)
          return;
        const { unitId: o, subUnitId: i, commentId: s } = n;
        r.unitId === o && r.subUnitId === i && r.commentId === s && this._sheetsThreadCommentPopupService.hidePopup();
      }
    });
  }
  _initPanelListener() {
    this.disposeWithMe(this._threadCommentPanelService.activeCommentId$.subscribe(async (e) => {
      var r;
      if (e) {
        const { unitId: n, subUnitId: o, commentId: i, trigger: s } = e, a = this._sheetsThreadCommentModel.getComment(n, o, i);
        if (!a || a.resolved)
          return;
        const c = this._univerInstanceService.getCurrentUnitForType(M.UNIVER_SHEET);
        if (!c || c.getUnitId() !== n)
          return;
        this._isSwitchToCommenting = !0, ((r = c.getActiveSheet()) == null ? void 0 : r.getSheetId()) !== o && await this._commandService.executeCommand(Ze.id, {
          unitId: n,
          subUnitId: o
        }), this._isSwitchToCommenting = !1;
        const m = D(a.ref), { row: C, column: l } = m;
        if (!this._sheetPermissionCheckController.permissionCheckWithRanges({
          workbookTypes: [K],
          worksheetTypes: [z],
          rangeTypes: [G]
        }, [{ startRow: C, startColumn: l, endRow: C, endColumn: l }]))
          return;
        const f = 1;
        if (await this._commandService.executeCommand(ot.id, {
          range: {
            startRow: Math.max(m.row - f, 0),
            endRow: m.row + f,
            startColumn: Math.max(m.column - f, 0),
            endColumn: m.column + f
          }
        }), this._editorBridgeService.isVisible().visible)
          return;
        this._sheetsThreadCommentPopupService.showPopup({
          unitId: n,
          subUnitId: o,
          row: m.row,
          col: m.column,
          commentId: a.id,
          trigger: s
        });
      } else
        this._sheetsThreadCommentPopupService.hidePopup();
    }));
  }
  _initMarkSelection() {
    this.disposeWithMe(this._threadCommentPanelService.activeCommentId$.pipe(oe(100)).subscribe((e) => {
      var C, l;
      if (!e) {
        this._selectionShapeInfo && (this._markSelectionService.removeShape(this._selectionShapeInfo.shapeId), this._selectionShapeInfo = null);
        return;
      }
      const { unitId: r, subUnitId: n, commentId: o } = e;
      this._selectionShapeInfo && (this._markSelectionService.removeShape(this._selectionShapeInfo.shapeId), this._selectionShapeInfo = null);
      const i = this._sheetsThreadCommentModel.getComment(r, n, o);
      if (!i)
        return;
      const s = D(i.ref), { row: a, column: c } = s;
      if (Number.isNaN(a) || Number.isNaN(c))
        return null;
      const h = (C = this._univerInstanceService.getCurrentUnitForType(M.UNIVER_SHEET)) == null ? void 0 : C.getSheetBySheetId(n), d = (l = h == null ? void 0 : h.getMergedCell(a, c)) != null ? l : {
        startColumn: c,
        endColumn: c,
        startRow: a,
        endRow: a
      }, m = this._markSelectionService.addShape(
        {
          range: d,
          style: {
            // hasAutoFill: false,
            fill: "rgba(255, 189, 55, 0.35)",
            strokeWidth: 1,
            stroke: "#FFBD37",
            widgets: {}
          },
          primary: null
        },
        [],
        -1
      );
      m && (this._selectionShapeInfo = {
        ...e,
        shapeId: m
      });
    }));
  }
};
F = Ot([
  w(0, ne),
  w(1, p(R)),
  w(2, p(O)),
  w(3, p(re)),
  w(4, x),
  w(5, p(ue)),
  w(6, pe),
  w(7, p(de)),
  w(8, nt),
  w(9, Se)
], F);
function we({ ref: t, ...e }) {
  const { icon: r, id: n, className: o, extend: i, ...s } = e, a = `univerjs-icon univerjs-icon-${n} ${o || ""}`.trim(), c = fe(`_${Dt()}`);
  return Me(r, `${n}`, {
    defIds: r.defIds,
    idSuffix: c.current
  }, {
    ref: t,
    className: a,
    ...s
  }, i);
}
function Me(t, e, r, n, o) {
  return ge(t.tag, {
    key: e,
    ...kt(t, r, o),
    ...n
  }, (Nt(t, r).children || []).map((i, s) => Me(i, `${e}-${t.tag}-${s}`, r, void 0, o)));
}
function kt(t, e, r) {
  const n = { ...t.attrs };
  r != null && r.colorChannel1 && n.fill === "colorChannel1" && (n.fill = r.colorChannel1), t.tag === "mask" && n.id && (n.id = n.id + e.idSuffix), Object.entries(n).forEach(([i, s]) => {
    i === "mask" && typeof s == "string" && (n[i] = s.replace(/url\(#(.*)\)/, `url(#$1${e.idSuffix})`));
  });
  const { defIds: o } = e;
  return !o || o.length === 0 || (t.tag === "use" && n["xlink:href"] && (n["xlink:href"] = n["xlink:href"] + e.idSuffix), Object.entries(n).forEach(([i, s]) => {
    typeof s == "string" && (n[i] = s.replace(/url\(#(.*)\)/, `url(#$1${e.idSuffix})`));
  })), n;
}
function Nt(t, e) {
  var n;
  const { defIds: r } = e;
  return !r || r.length === 0 ? t : t.tag === "defs" && ((n = t.children) != null && n.length) ? {
    ...t,
    children: t.children.map((o) => typeof o.attrs.id == "string" && r && r.includes(o.attrs.id) ? {
      ...o,
      attrs: {
        ...o.attrs,
        id: o.attrs.id + e.idSuffix
      }
    } : o)
  } : t;
}
function Dt() {
  return Math.random().toString(36).substring(2, 8);
}
we.displayName = "UniverIcon";
const xt = {
  tag: "svg",
  attrs: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 17 17",
    width: "1em",
    height: "1em"
  },
  children: [
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M5.83725 6.78345C6.22188 6.78345 6.53368 7.10742 6.53368 7.50706V8.41159C6.53368 8.81123 6.22188 9.13521 5.83725 9.13521C5.45263 9.13521 5.14082 8.81123 5.14082 8.41159V7.50706C5.14082 7.10742 5.45263 6.78345 5.83725 6.78345ZM8.73904 6.78345C9.12366 6.78345 9.43546 7.10742 9.43546 7.50706V8.41159C9.43546 8.81123 9.12366 9.13521 8.73904 9.13521C8.35441 9.13521 8.04261 8.81123 8.04261 8.41159V7.50706C8.04261 7.10742 8.35441 6.78345 8.73904 6.78345ZM11.6408 6.78345C12.0254 6.78345 12.3372 7.10742 12.3372 7.50706V8.41159C12.3372 8.81123 12.0254 9.13521 11.6408 9.13521C11.2562 9.13521 10.9444 8.81123 10.9444 8.41159V7.50706C10.9444 7.10742 11.2562 6.78345 11.6408 6.78345Z",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M5.83725 6.78345C6.22188 6.78345 6.53368 7.10742 6.53368 7.50706V8.41159C6.53368 8.81123 6.22188 9.13521 5.83725 9.13521C5.45263 9.13521 5.14082 8.81123 5.14082 8.41159V7.50706C5.14082 7.10742 5.45263 6.78345 5.83725 6.78345Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M8.73904 6.78345C9.12366 6.78345 9.43546 7.10742 9.43546 7.50706V8.41159C9.43546 8.81123 9.12366 9.13521 8.73904 9.13521C8.35441 9.13521 8.04261 8.81123 8.04261 8.41159V7.50706C8.04261 7.10742 8.35441 6.78345 8.73904 6.78345Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M11.6408 6.78345C12.0254 6.78345 12.3372 7.10742 12.3372 7.50706V8.41159C12.3372 8.81123 12.0254 9.13521 11.6408 9.13521C11.2562 9.13521 10.9444 8.81123 10.9444 8.41159V7.50706C10.9444 7.10742 11.2562 6.78345 11.6408 6.78345Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M1.84351 3.41861C1.84351 3.01861 2.15531 2.69434 2.53993 2.69434H14.9381C15.3228 2.69434 15.6346 3.01861 15.6346 3.41861V12.4611C15.6346 12.8612 15.3228 13.1854 14.9381 13.1854H8.82117L6.06643 14.6179C5.85054 14.7301 5.59416 14.7181 5.38884 14.5862C5.18352 14.4542 5.05855 14.2211 5.05855 13.9701V13.1854H2.53993C2.15531 13.1854 1.84351 12.8612 1.84351 12.4611L1.84351 3.41861ZM6.45141 12.7982L8.34531 12.0135C8.44201 11.9632 8.54864 11.9371 8.65676 11.9371H14.2417C14.3522 11.9371 14.4417 11.8475 14.4417 11.7371V4.14271C14.4417 4.03225 14.3522 3.94271 14.2417 3.94271H3.23636C3.12591 3.94271 3.03636 4.03225 3.03636 4.14271L3.03636 11.7371C3.03636 11.8475 3.12591 11.9371 3.23636 11.9371L5.75498 11.9371C6.1396 11.9371 6.45141 12.0611 6.45141 12.4611V12.7982Z",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    }
  ]
}, be = St(function(e, r) {
  return ge(we, Object.assign({}, e, {
    id: "comment-icon",
    ref: r,
    icon: xt
  }));
});
be.displayName = "CommentIcon";
const At = () => {
  const t = E(x), e = E(R), r = N(e.activePopup$), n = E(O);
  if (N(n.commentUpdate$), !r)
    return null;
  const { row: o, col: i, unitId: s, subUnitId: a, trigger: c } = r, h = n.getByLocation(s, a, o, i), d = `${xe.chatAtABC(i)}${o + 1}`, m = () => {
    e.hidePopup();
  }, C = (l) => {
    var _, f, U;
    return (U = (f = (_ = t.getCurrentUnitForType(M.UNIVER_SHEET)) == null ? void 0 : _.getSheetBySheetId(l)) == null ? void 0 : f.getName()) != null ? U : "";
  };
  return /* @__PURE__ */ Ie(
    ze,
    {
      onClick: () => {
        e.persistPopup();
      },
      prefix: "cell",
      id: h,
      unitId: s,
      subUnitId: a,
      type: M.UNIVER_SHEET,
      refStr: d,
      onClose: m,
      getSubUnitName: C,
      autoFocus: c === "context-menu"
    }
  );
}, Vt = () => {
  var g;
  const t = E(pe), e = E(x), r = E(R), n = e.getCurrentUnitForType(M.UNIVER_SHEET), o = n.getUnitId(), i = E(ne), s = ft(() => n.activeSheet$.pipe(Ct((u) => u == null ? void 0 : u.getSheetId())), [n.activeSheet$]), a = N(s, (g = n.getActiveSheet()) == null ? void 0 : g.getSheetId()), c = fe(null), h = E(re), d = N(h.activeCommentId$), m = N(h.panelVisible$, h.panelVisible), C = he((u) => {
    const I = n.getSheets(), v = {};
    I.forEach((P, S) => {
      v[P.getSheetId()] = S;
    });
    const T = (P) => P.map((S) => {
      var ie;
      const b = D(S.ref), Ee = [(ie = v[S.subUnitId]) != null ? ie : 0, b.row, b.column];
      return { ...S, p: Ee };
    }).sort((S, b) => S.p[0] === b.p[0] ? S.p[1] === b.p[1] ? S.p[2] - b.p[2] : S.p[1] - b.p[1] : S.p[0] - b.p[0]);
    return [
      ...T(u.filter((P) => !P.resolved)),
      ...T(u.filter((P) => P.resolved))
    ];
  }, [n]), l = he((u) => {
    var I;
    if (u.unitId === o && u.subUnitId === a && !u.resolved) {
      const { row: v, column: T } = D(u.ref), P = n.getSheetBySheetId(u.subUnitId), S = (I = P == null ? void 0 : P.getMergedCell(v, T)) != null ? I : {
        startColumn: T,
        endColumn: T,
        startRow: v,
        endRow: v
      };
      if (!Number.isNaN(v) && !Number.isNaN(T))
        return t.addShape({
          range: S,
          style: {
            // hasAutoFill: false,
            fill: "rgb(255, 189, 55, 0.35)",
            strokeWidth: 1,
            stroke: "#FFBD37",
            widgets: {}
          },
          primary: null
        });
    }
    return null;
  }, [t, a, o]), _ = (u) => {
    var I, v;
    return (v = (I = n.getSheetBySheetId(u)) == null ? void 0 : I.getName()) != null ? v : "";
  }, f = () => {
    i.executeCommand(A.id);
  }, U = (u) => {
    d && d.unitId === u.unitId && d.subUnitId === u.subUnitId && d.commentId === u.id || (c.current && (t.removeShape(c.current), c.current = null), c.current = l(u));
  }, k = () => {
    c.current && (t.removeShape(c.current), c.current = null);
  }, Y = (u, I) => {
    I && r.hidePopup();
  };
  return gt(() => {
    !m && c.current && t.removeShape(c.current);
  }, [t, m]), /* @__PURE__ */ Ie(
    Ke,
    {
      unitId: o,
      subUnitId$: s,
      type: M.UNIVER_SHEET,
      onAdd: f,
      getSubUnitName: _,
      onResolve: Y,
      sortComments: C,
      onItemEnter: U,
      onItemLeave: k,
      onDeleteComment: () => (k(), !0)
    }
  );
}, Bt = (t) => ({
  id: A.id,
  type: ve.BUTTON,
  icon: "CommentIcon",
  title: "sheetThreadComment.menu.addComment",
  hidden$: _e(t, M.UNIVER_SHEET),
  disabled$: Ce(t, {
    workbookTypes: [K],
    worksheetTypes: [z],
    rangeTypes: [G]
  })
}), Ht = (t) => ({
  id: le.id,
  type: ve.BUTTON,
  icon: "CommentIcon",
  tooltip: "sheetThreadComment.menu.commentManagement",
  disabled$: Ce(t, {
    workbookTypes: [K],
    worksheetTypes: [z],
    rangeTypes: [G]
  }),
  hidden$: _e(t, M.UNIVER_SHEET)
}), Lt = {
  id: A.id,
  binding: at.M | ae.CTRL_COMMAND | ae.ALT,
  preconditions: it
}, jt = {
  [mt.MEDIA]: {
    [le.id]: {
      order: 2,
      menuItemFactory: Ht
    }
  },
  [ct.MAIN_AREA]: {
    [ht.OTHERS]: {
      [A.id]: {
        order: 0,
        menuItemFactory: Bt
      }
    }
  }
};
var Ft = Object.getOwnPropertyDescriptor, Wt = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? Ft(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (o = s(o) || o);
  return o;
}, X = (t, e) => (r, n) => e(r, n, t);
let W = class extends $ {
  constructor(t, e, r) {
    super(), this._menuManagerService = t, this._componentManager = e, this._shortcutService = r, this._initMenu(), this._initShortcut(), this._initComponent();
  }
  _initShortcut() {
    this._shortcutService.registerShortcut(Lt);
  }
  _initMenu() {
    this._menuManagerService.mergeMenu(jt);
  }
  _initComponent() {
    [
      [Pe, At],
      [Ye, Vt],
      ["CommentIcon", be]
    ].forEach(([t, e]) => {
      this.disposeWithMe(
        this._componentManager.register(t, e)
      );
    });
  }
};
W = Wt([
  X(0, dt),
  X(1, p(ut)),
  X(2, lt)
], W);
var Zt = Object.defineProperty, Gt = Object.getOwnPropertyDescriptor, zt = (t, e, r) => e in t ? Zt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Kt = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? Gt(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (o = s(o) || o);
  return o;
}, ee = (t, e) => (r, n) => e(r, n, t), ye = (t, e, r) => zt(t, typeof e != "symbol" ? e + "" : e, r);
let Z = class extends He {
  constructor(t = me, e, r, n) {
    super(), this._config = t, this._injector = e, this._commandService = r, this._configService = n;
    const { menu: o, ...i } = Le(
      {},
      me,
      this._config
    );
    o && this._configService.setConfig("menu", o, { merge: !0 }), this._configService.setConfig(Tt, i);
  }
  onStarting() {
    [
      [W],
      [H],
      [L],
      [j],
      [F],
      [R]
    ].forEach((t) => {
      this._injector.add(t);
    }), [A].forEach((t) => {
      this._commandService.registerCommand(t);
    }), this._injector.get(W);
  }
  onReady() {
    this._injector.get(H);
  }
  onRendered() {
    this._injector.get(L), this._injector.get(j), this._injector.get(F);
  }
};
ye(Z, "pluginName", Te);
ye(Z, "type", M.UNIVER_SHEET);
Z = Kt([
  Ae(qe, Ge),
  ee(1, p(Ve)),
  ee(2, p(ne)),
  ee(3, Be)
], Z);
export {
  ln as AddCommentCommand,
  pn as DeleteCommentCommand,
  Cn as DeleteCommentTreeCommand,
  _n as IThreadCommentDataSourceService,
  vn as ResolveCommentCommand,
  Te as SHEETS_THREAD_COMMENT,
  R as SheetsThreadCommentPopupService,
  A as ShowAddSheetCommentModalOperation,
  Z as UniverSheetsThreadCommentUIPlugin,
  dn as UniverThreadCommentUIPlugin,
  Sn as UpdateCommentCommand
};
