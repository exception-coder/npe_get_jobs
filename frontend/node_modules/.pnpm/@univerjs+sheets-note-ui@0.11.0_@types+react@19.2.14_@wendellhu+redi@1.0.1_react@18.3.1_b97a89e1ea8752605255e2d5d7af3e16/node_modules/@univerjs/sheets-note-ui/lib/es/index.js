var me = Object.defineProperty;
var Se = (i, e, t) => e in i ? me(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var v = (i, e, t) => Se(i, typeof e != "symbol" ? e + "" : e, t);
import { Inject as h, IUniverInstanceService as D, Disposable as N, InterceptorEffectEnum as Pe, UniverInstanceType as I, DisposableCollection as Ne, RANGE_TYPE as J, Rectangle as Ie, ObjectMatrix as j, CommandType as Me, LocaleService as we, ICommandService as re, DependentOn as be, Injector as Ee, IConfigService as ye, Plugin as $e, merge as xe, touchDependencies as Q } from "@univerjs/core";
import { IRenderManagerService as B } from "@univerjs/engine-render";
import { SheetInterceptorService as He, INTERCEPTOR_POINT as Oe, SheetsSelectionsService as A, WorksheetEditPermission as oe, WorkbookEditablePermission as ne, getSheetCommandTarget as Te } from "@univerjs/sheets";
import { SheetsNoteModel as M, SheetUpdateNoteCommand as Le, SheetDeleteNoteCommand as F, SheetToggleNotePopupCommand as se, UniverSheetsNotePlugin as De } from "@univerjs/sheets-note";
import { debounceTime as Ue, BehaviorSubject as Ve, switchMap as Re, of as Ze, map as U, combineLatest as je } from "rxjs";
import { CellPopupManagerService as ae, IEditorBridgeService as ke, HoverManagerService as Be, SheetSkeletonManagerService as Ae, getCurrentRangeDisable$ as ce } from "@univerjs/sheets-ui";
import { debounceTime as Fe } from "rxjs/operators";
import { IZenZoneService as We, useDependency as b, useConfigValue as ze, useDebounceFn as Ge, MenuItemType as W, getMenuHiddenObservable as Ke, ContextMenuPosition as Ye, ContextMenuGroup as qe, ComponentManager as Je, IMenuManagerService as Qe } from "@univerjs/ui";
import { useRef as ue, createElement as V, forwardRef as z, useState as Xe, useEffect as et, useCallback as X } from "react";
import { jsx as tt } from "react/jsx-runtime";
import { Textarea as it, clsx as rt } from "@univerjs/design";
var ot = Object.getOwnPropertyDescriptor, nt = (i, e, t, r) => {
  for (var o = r > 1 ? void 0 : r ? ot(e, t) : e, s = i.length - 1, n; s >= 0; s--)
    (n = i[s]) && (o = n(o) || o);
  return o;
}, E = (i, e) => (t, r) => e(t, r, i);
let $ = class extends N {
  constructor(i, e, t, r) {
    super(), this._sheetInterceptorService = i, this._sheetsNoteModel = e, this._renderManagerService = t, this._univerInstanceService = r, this._initViewModelIntercept(), this._initSkeletonChange();
  }
  _initViewModelIntercept() {
    this.disposeWithMe(
      this._sheetInterceptorService.intercept(
        Oe.CELL_CONTENT,
        {
          effect: Pe.Style,
          handler: (i, e, t) => {
            const { row: r, col: o, unitId: s, subUnitId: n } = e;
            return this._sheetsNoteModel.getNote(s, n, r, o) && ((!i || i === e.rawData) && (i = { ...e.rawData }), i.markers = {
              ...i == null ? void 0 : i.markers,
              tr: {
                color: "#FFBD37",
                size: 6
              }
            }), t(i);
          },
          priority: 100
        }
      )
    );
  }
  _initSkeletonChange() {
    const i = () => {
      var o;
      const e = this._univerInstanceService.getCurrentUnitForType(I.UNIVER_SHEET);
      if (!e) return;
      const t = e.getUnitId(), r = this._renderManagerService.getRenderById(t);
      (o = r == null ? void 0 : r.mainComponent) == null || o.makeForceDirty();
    };
    this.disposeWithMe(this._sheetsNoteModel.change$.pipe(Ue(16)).subscribe(() => {
      i();
    }));
  }
};
$ = nt([
  E(0, h(He)),
  E(1, h(M)),
  E(2, B),
  E(3, D)
], $);
const G = "SHEET_NOTE_COMPONENT";
var st = Object.getOwnPropertyDescriptor, at = (i, e, t, r) => {
  for (var o = r > 1 ? void 0 : r ? st(e, t) : e, s = i.length - 1, n; s >= 0; s--)
    (n = i[s]) && (o = n(o) || o);
  return o;
}, ee = (i, e) => (t, r) => e(t, r, i);
let S = class extends N {
  constructor(e, t) {
    super();
    v(this, "_lastPopup", null);
    v(this, "_activePopup");
    v(this, "_activePopup$", new Ve(null));
    v(this, "activePopup$", this._activePopup$.asObservable());
    this._zenZoneService = e, this._cellPopupManagerService = t, this._initZenVisible(), this.disposeWithMe(() => {
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
  showPopup(e, t) {
    var c;
    const { row: r, col: o, unitId: s, subUnitId: n } = e;
    if (this._activePopup && r === this._activePopup.row && o === this._activePopup.col && s === this._activePopup.unitId && n === ((c = this.activePopup) == null ? void 0 : c.subUnitId)) {
      this._activePopup = e, this._activePopup$.next(e);
      return;
    }
    if (this._lastPopup && this._lastPopup.dispose(), this._zenZoneService.visible)
      return;
    this._activePopup = e, this._activePopup$.next(e);
    const a = this._cellPopupManagerService.showPopup(
      {
        unitId: s,
        subUnitId: n,
        row: r,
        col: o
      },
      {
        componentKey: G,
        onClickOutside: () => {
          this.hidePopup();
        },
        direction: "horizontal",
        extraProps: {
          location: e
        },
        priority: 3
      }
    );
    if (!a)
      throw new Error("[SheetsNotePopupService]: cannot show popup!");
    const u = new Ne();
    u.add(a), u.add({
      dispose: () => {
        t == null || t();
      }
    }), this._lastPopup = u;
  }
  hidePopup(e) {
    this._activePopup && (!e && !this._activePopup.temp || (this._lastPopup && this._lastPopup.dispose(), this._lastPopup = null, this._activePopup = null, this._activePopup$.next(null)));
  }
  persistPopup() {
    !this._activePopup || !this._activePopup.temp || (this._activePopup = {
      ...this._activePopup,
      temp: !1
    }, this._activePopup$.next(this._activePopup));
  }
};
S = at([
  ee(0, We),
  ee(1, h(ae))
], S);
var ct = Object.getOwnPropertyDescriptor, ut = (i, e, t, r) => {
  for (var o = r > 1 ? void 0 : r ? ct(e, t) : e, s = i.length - 1, n; s >= 0; s--)
    (n = i[s]) && (o = n(o) || o);
  return o;
}, m = (i, e) => (t, r) => e(t, r, i);
let x = class extends N {
  constructor(e, t, r, o, s, n) {
    super();
    v(this, "_isSwitchingSheet", !1);
    this._sheetsNotePopupService = e, this._sheetsNoteModel = t, this._sheetSelectionService = r, this._editorBridgeService = o, this._renderManagerService = s, this._hoverManagerService = n, this._initSelectionUpdateListener(), this._initEditorBridge(), this._initHoverEvent();
  }
  _handleSelectionChange(e, t, r) {
    var d, _, f;
    const o = (d = e[0]) == null ? void 0 : d.range, s = this._renderManagerService.getRenderById(t), n = (_ = s == null ? void 0 : s.with(Ae).getSkeletonParam(r)) == null ? void 0 : _.skeleton;
    if (!n || !o)
      return;
    const a = n.getCellWithCoordByIndex(o.startRow, o.startColumn);
    if ((((f = o.rangeType) != null ? f : J.NORMAL) !== J.NORMAL || o.endColumn - o.startColumn > 0 || o.endRow - o.startRow > 0) && !((a.isMerged || a.isMergedMainCell) && Ie.equals(a.mergeInfo, o))) {
      this._sheetsNotePopupService.hidePopup();
      return;
    }
    const c = a.actualRow, l = a.actualColumn, p = this._sheetsNoteModel.getNote(t, r, c, l);
    p != null && p.show || (p ? this._sheetsNotePopupService.showPopup({
      unitId: t,
      subUnitId: r,
      row: c,
      col: l
    }) : this._sheetsNotePopupService.hidePopup(!0));
  }
  _initSelectionUpdateListener() {
    this.disposeWithMe(
      this._sheetSelectionService.selectionMoveEnd$.subscribe((e) => {
        if (this._isSwitchingSheet)
          return;
        const t = this._sheetSelectionService.currentSelectionParam;
        t && this._handleSelectionChange(e, t.unitId, t.sheetId);
      })
    );
  }
  _initEditorBridge() {
    this.disposeWithMe(
      this._editorBridgeService.visible$.subscribe((e) => {
        e.visible && this._sheetsNotePopupService.hidePopup(!0);
      })
    );
  }
  _initHoverEvent() {
    this.disposeWithMe(
      this._hoverManagerService.currentCell$.pipe(Fe(100)).subscribe((e) => {
        if (!(e != null && e.location)) return;
        const { unitId: t, subUnitId: r, row: o, col: s } = e.location, n = this._sheetsNoteModel.getNote(t, r, o, s);
        n != null && n.show || (n ? this._sheetsNotePopupService.showPopup({
          unitId: t,
          subUnitId: r,
          row: o,
          col: s,
          temp: !0
        }) : this._sheetsNotePopupService.hidePopup());
      })
    );
  }
};
x = ut([
  m(0, h(S)),
  m(1, h(M)),
  m(2, h(A)),
  m(3, ke),
  m(4, B),
  m(5, h(Be))
], x);
const pe = "sheets-note-ui.config", te = {};
var pt = Object.getOwnPropertyDescriptor, lt = (i, e, t, r) => {
  for (var o = r > 1 ? void 0 : r ? pt(e, t) : e, s = i.length - 1, n; s >= 0; s--)
    (n = i[s]) && (o = n(o) || o);
  return o;
}, y = (i, e) => (t, r) => e(t, r, i);
let H = class extends N {
  constructor(e, t, r, o) {
    super();
    v(this, "_noteMatrix", new j());
    this._sheetsNoteModel = e, this._univerInstanceService = t, this._cellPopupManagerService = r, this._sheetsNotePopupService = o, this._initNoteChangeListener();
  }
  _showPopup(e, t, r, o) {
    return this._sheetsNotePopupService.hidePopup(!0), this._cellPopupManagerService.showPopup(
      {
        unitId: e,
        subUnitId: t,
        row: r,
        col: o
      },
      {
        componentKey: G,
        direction: "horizontal",
        extraProps: {
          location: {
            unitId: e,
            subUnitId: t,
            row: r,
            col: o
          }
        },
        priority: 3
      }
    );
  }
  dispose() {
    super.dispose(), this._noteMatrix.forValue((e, t, r) => {
      r.dispose();
    });
  }
  _initSheet(e, t) {
    var s;
    this._noteMatrix.forValue((n, a, u) => {
      u.dispose();
    }), this._noteMatrix = new j();
    const o = (n, a, u, c, l) => {
      const p = this._noteMatrix, d = p.getValue(u, c);
      if (l != null && l.show) {
        if (!d) {
          const _ = this._showPopup(n, a, u, c);
          _ && p.setValue(u, c, _);
        }
      } else
        d && (d.dispose(), p.realDeleteValue(u, c));
    };
    return (s = this._sheetsNoteModel.getSheetNotes(e, t)) == null || s.forValue((n, a, u) => {
      o(e, t, n, a, u);
    }), this._sheetsNoteModel.change$.subscribe((n) => {
      if (!(n.unitId !== e || n.sheetId !== t))
        switch (n.type) {
          case "ref": {
            const { unitId: a, sheetId: u, row: c, col: l, newPosition: p, note: d } = n, _ = this._noteMatrix;
            if (!d.show) return;
            const f = _.getValue(c, l);
            f && (f.dispose(), _.realDeleteValue(c, l));
            const P = this._showPopup(a, u, p.row, p.col);
            P && _.setValue(p.row, p.col, P);
            break;
          }
          case "update": {
            const { unitId: a, sheetId: u, row: c, col: l, note: p } = n;
            o(a, u, c, l, p);
            break;
          }
        }
    });
  }
  _initNoteChangeListener() {
    this.disposeWithMe(
      this._univerInstanceService.getCurrentTypeOfUnit$(I.UNIVER_SHEET).pipe(
        Re((e) => {
          var t;
          return (t = e == null ? void 0 : e.activeSheet$) != null ? t : Ze(null);
        })
      ).subscribe((e) => {
        if (e) {
          const t = this._initSheet(e.getUnitId(), e.getSheetId());
          return () => {
            t.unsubscribe();
          };
        } else
          this._noteMatrix.forValue((t, r, o) => {
            o.dispose();
          }), this._noteMatrix = new j();
      })
    );
  }
};
H = lt([
  y(0, h(M)),
  y(1, h(D)),
  y(2, h(ae)),
  y(3, h(S))
], H);
function R({ ref: i, ...e }) {
  const { icon: t, id: r, className: o, extend: s, ...n } = e, a = `univerjs-icon univerjs-icon-${r} ${o || ""}`.trim(), u = ue(`_${_t()}`);
  return le(t, `${r}`, {
    defIds: t.defIds,
    idSuffix: u.current
  }, {
    ref: i,
    className: a,
    ...n
  }, s);
}
function le(i, e, t, r, o) {
  return V(i.tag, {
    key: e,
    ...ht(i, t, o),
    ...r
  }, (dt(i, t).children || []).map((s, n) => le(s, `${e}-${i.tag}-${n}`, t, void 0, o)));
}
function ht(i, e, t) {
  const r = { ...i.attrs };
  t != null && t.colorChannel1 && r.fill === "colorChannel1" && (r.fill = t.colorChannel1), i.tag === "mask" && r.id && (r.id = r.id + e.idSuffix), Object.entries(r).forEach(([s, n]) => {
    s === "mask" && typeof n == "string" && (r[s] = n.replace(/url\(#(.*)\)/, `url(#$1${e.idSuffix})`));
  });
  const { defIds: o } = e;
  return !o || o.length === 0 || (i.tag === "use" && r["xlink:href"] && (r["xlink:href"] = r["xlink:href"] + e.idSuffix), Object.entries(r).forEach(([s, n]) => {
    typeof n == "string" && (r[s] = n.replace(/url\(#(.*)\)/, `url(#$1${e.idSuffix})`));
  })), r;
}
function dt(i, e) {
  var r;
  const { defIds: t } = e;
  return !t || t.length === 0 ? i : i.tag === "defs" && ((r = i.children) != null && r.length) ? {
    ...i,
    children: i.children.map((o) => typeof o.attrs.id == "string" && t && t.includes(o.attrs.id) ? {
      ...o,
      attrs: {
        ...o.attrs,
        id: o.attrs.id + e.idSuffix
      }
    } : o)
  } : i;
}
function _t() {
  return Math.random().toString(36).substring(2, 8);
}
R.displayName = "UniverIcon";
const Ct = {
  tag: "svg",
  attrs: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 16 16",
    width: "1em",
    height: "1em"
  },
  children: [
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M12.8481 8.00049V3.87451C12.8481 3.13737 12.2503 2.5398 11.5132 2.53955H4.48682C3.74952 2.53955 3.15186 3.13721 3.15186 3.87451V12.1255C3.15186 12.8628 3.74952 13.4604 4.48682 13.4604H6.99951L7.1333 13.4741C7.43655 13.536 7.66454 13.804 7.66455 14.1255C7.66455 14.447 7.43655 14.715 7.1333 14.7769L6.99951 14.7905H4.48682C3.01498 14.7905 1.82178 13.5973 1.82178 12.1255V3.87451C1.82178 2.40267 3.01498 1.20947 4.48682 1.20947H11.5132C12.9848 1.20972 14.1772 2.40283 14.1772 3.87451V8.00049C14.177 8.36738 13.8801 8.6643 13.5132 8.66455C13.1461 8.66455 12.8484 8.36754 12.8481 8.00049Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M10.1463 4.53859L10.2801 4.55226C10.5832 4.61419 10.8113 4.8822 10.8113 5.20363C10.8113 5.52506 10.5832 5.79306 10.2801 5.85499L10.1463 5.86867H5.85331C5.48604 5.86867 5.18827 5.5709 5.18827 5.20363C5.18827 4.83636 5.48604 4.53859 5.85331 4.53859H10.1463Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M8.11307 7.33497L8.24686 7.34865C8.54984 7.41069 8.77811 7.67869 8.77811 8.00001C8.77811 8.32134 8.54984 8.58933 8.24686 8.65138L8.11307 8.66505H5.85331C5.48604 8.66505 5.18827 8.36728 5.18827 8.00001C5.18827 7.63274 5.48604 7.33497 5.85331 7.33497H8.11307Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M6.98319 10.1314L7.11698 10.145C7.42003 10.207 7.64823 10.475 7.64823 10.7964C7.64823 11.1178 7.42003 11.3858 7.11698 11.4478L6.98319 11.4614H5.85331C5.48604 11.4614 5.18827 11.1637 5.18827 10.7964C5.18827 10.4291 5.48604 10.1314 5.85331 10.1314H6.98319Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M10.8813 14.4312V10.2925C10.8813 9.92522 11.1791 9.62745 11.5463 9.62745C11.9136 9.62745 12.2114 9.92522 12.2114 10.2925V14.4312C12.2112 14.7983 11.9135 15.0962 11.5463 15.0962C11.1791 15.0962 10.8814 14.7983 10.8813 14.4312Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M9.47697 11.6968H11.5463H13.6156C13.9829 11.6968 14.2807 11.9946 14.2807 12.3618C14.2807 12.7291 13.9829 13.0269 13.6156 13.0269H9.47697C9.10981 13.0267 8.81193 12.729 8.81193 12.3618C8.81193 11.9946 9.10981 11.6969 9.47697 11.6968Z"
      }
    }
  ]
}, he = z(function(e, t) {
  return V(R, Object.assign({}, e, {
    id: "add-note-icon",
    ref: t,
    icon: Ct
  }));
});
he.displayName = "AddNoteIcon";
const ft = {
  tag: "svg",
  attrs: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 16 16",
    width: "1em",
    height: "1em"
  },
  children: [
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M12.8481 8.00049V3.87451C12.8481 3.13737 12.2503 2.5398 11.5132 2.53955H4.48682C3.74952 2.53955 3.15186 3.13721 3.15186 3.87451V12.1255C3.15186 12.8628 3.74952 13.4604 4.48682 13.4604H6.99951L7.1333 13.4741C7.43655 13.536 7.66454 13.804 7.66455 14.1255C7.66455 14.447 7.43655 14.715 7.1333 14.7769L6.99951 14.7905H4.48682C3.01498 14.7905 1.82178 13.5973 1.82178 12.1255V3.87451C1.82178 2.40267 3.01498 1.20947 4.48682 1.20947H11.5132C12.9848 1.20972 14.1772 2.40283 14.1772 3.87451V8.00049C14.177 8.36738 13.8801 8.6643 13.5132 8.66455C13.1461 8.66455 12.8484 8.36754 12.8481 8.00049Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M10.1463 4.53859L10.2801 4.55226C10.5832 4.61419 10.8113 4.8822 10.8113 5.20363C10.8113 5.52506 10.5832 5.79306 10.2801 5.85499L10.1463 5.86867H5.85331C5.48604 5.86867 5.18827 5.5709 5.18827 5.20363C5.18827 4.83636 5.48604 4.53859 5.85331 4.53859H10.1463Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M8.11307 7.33497L8.24686 7.34865C8.54984 7.41069 8.77811 7.67869 8.77811 8.00001C8.77811 8.32134 8.54984 8.58933 8.24686 8.65138L8.11307 8.66505H5.85331C5.48604 8.66505 5.18827 8.36728 5.18827 8.00001C5.18827 7.63274 5.48604 7.33497 5.85331 7.33497H8.11307Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M6.98319 10.1314L7.11698 10.145C7.42003 10.207 7.64823 10.475 7.64823 10.7964C7.64823 11.1178 7.42003 11.3858 7.11698 11.4478L6.98319 11.4614H5.85331C5.48604 11.4614 5.18827 11.1637 5.18827 10.7964C5.18827 10.4291 5.48604 10.1314 5.85331 10.1314H6.98319Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M9.47489 11.6968H13.6175C13.9847 11.6968 14.2825 11.9946 14.2825 12.3618C14.2825 12.7291 13.9847 13.0269 13.6175 13.0269H9.47489C9.10762 13.0269 8.80985 12.7291 8.80985 12.3618C8.80985 11.9946 9.10762 11.6968 9.47489 11.6968Z"
      }
    }
  ]
}, de = z(function(e, t) {
  return V(R, Object.assign({}, e, {
    id: "delete-note-icon",
    ref: t,
    icon: ft
  }));
});
de.displayName = "DeleteNoteIcon";
const vt = {
  tag: "svg",
  attrs: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 16 16",
    width: "1em",
    height: "1em"
  },
  children: [
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M12.8481 8.00049V3.87451C12.8481 3.13737 12.2503 2.5398 11.5132 2.53955H4.48682C3.74952 2.53955 3.15186 3.13721 3.15186 3.87451V12.1255C3.15186 12.8628 3.74952 13.4604 4.48682 13.4604H6.99951L7.1333 13.4741C7.43655 13.536 7.66454 13.804 7.66455 14.1255C7.66455 14.447 7.43655 14.715 7.1333 14.7769L6.99951 14.7905H4.48682C3.01498 14.7905 1.82178 13.5973 1.82178 12.1255V3.87451C1.82178 2.40267 3.01498 1.20947 4.48682 1.20947H11.5132C12.9848 1.20972 14.1772 2.40283 14.1772 3.87451V8.00049C14.177 8.36738 13.8801 8.6643 13.5132 8.66455C13.1461 8.66455 12.8484 8.36754 12.8481 8.00049Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M10.1463 4.53859L10.2801 4.55226C10.5832 4.61419 10.8113 4.8822 10.8113 5.20363C10.8113 5.52506 10.5832 5.79306 10.2801 5.85499L10.1463 5.86867H5.85331C5.48604 5.86867 5.18827 5.5709 5.18827 5.20363C5.18827 4.83636 5.48604 4.53859 5.85331 4.53859H10.1463Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M8.11307 7.33497L8.24686 7.34865C8.54984 7.41069 8.77811 7.67869 8.77811 8.00001C8.77811 8.32134 8.54984 8.58933 8.24686 8.65138L8.11307 8.66505H5.85331C5.48604 8.66505 5.18827 8.36728 5.18827 8.00001C5.18827 7.63274 5.48604 7.33497 5.85331 7.33497H8.11307Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M6.98319 10.1314L7.11698 10.145C7.42003 10.207 7.64823 10.475 7.64823 10.7964C7.64823 11.1178 7.42003 11.3858 7.11698 11.4478L6.98319 11.4614H5.85331C5.48604 11.4614 5.18827 11.1637 5.18827 10.7964C5.18827 10.4291 5.48604 10.1314 5.85331 10.1314H6.98319Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M13.8743 12.6147C13.8742 12.5394 13.7749 12.2553 13.3909 11.9477C13.039 11.6659 12.5573 11.4614 12.0394 11.4614C11.5213 11.4614 11.0398 11.6666 10.6878 11.9487C10.3037 12.2565 10.2045 12.5399 10.2044 12.6147C10.2044 12.6893 10.3034 12.9737 10.6878 13.2817C11.0398 13.5636 11.5215 13.768 12.0394 13.768C12.5574 13.768 13.039 13.5635 13.3909 13.2817C13.7751 12.9739 13.8743 12.6897 13.8743 12.6147ZM15.2044 12.6147C15.2044 13.2772 14.7436 13.9027 14.223 14.3198C13.6701 14.7627 12.9019 15.0981 12.0394 15.0981C11.1768 15.0981 10.4085 14.7627 9.85577 14.3198C9.33533 13.9027 8.87433 13.2769 8.87433 12.6147C8.8744 11.9526 9.33541 11.3276 9.85577 10.9106C10.4086 10.4676 11.1767 10.1313 12.0394 10.1313C12.9018 10.1313 13.6701 10.4668 14.223 10.9096C14.7435 11.3267 15.2043 11.9523 15.2044 12.6147Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M12.0394 13.299C12.4172 13.299 12.7234 12.9927 12.7234 12.6149C12.7234 12.2371 12.4172 11.9308 12.0394 11.9308C11.6616 11.9308 11.3553 12.2371 11.3553 12.6149C11.3553 12.9927 11.6616 13.299 12.0394 13.299Z"
      }
    }
  ]
}, _e = z(function(e, t) {
  return V(R, Object.assign({}, e, {
    id: "hide-note-icon",
    ref: t,
    icon: vt
  }));
});
_e.displayName = "HideNoteIcon";
const O = {
  id: "sheet.operation.add-note-popup",
  type: Me.OPERATION,
  handler: async (i, e) => {
    const t = i.get(A), r = i.get(S), s = i.get(D).getCurrentUnitForType(I.UNIVER_SHEET);
    if (!s)
      return !1;
    const n = s.getActiveSheet(), a = t.getCurrentLastSelection();
    if (!(a != null && a.primary))
      return !1;
    const { primary: u } = a;
    return r.showPopup({
      unitId: s.getUnitId(),
      subUnitId: n.getSheetId(),
      row: u.actualRow,
      col: u.actualColumn,
      temp: !1,
      trigger: e == null ? void 0 : e.trigger
    }), !0;
  }
}, gt = (i) => {
  var P;
  const { popup: e } = i, t = b(M), r = b(we), o = b(B), s = ze(pe), n = (P = e.extraProps) == null ? void 0 : P.location;
  if (!n)
    return console.error("Popup extraProps or location is undefined."), null;
  const a = ue(null), u = o.getRenderById(n.unitId), [c, l] = Xe(null);
  et(() => {
    var Y, q;
    const { unitId: C, subUnitId: g, row: w, col: fe } = n, { width: ve = 160, height: ge = 72 } = (Y = s == null ? void 0 : s.defaultNoteSize) != null ? Y : {}, Z = (q = t.getNote(C, g, w, fe)) != null ? q : { width: ve, height: ge, note: "" };
    a.current && (l(Z), a.current.style.width = `${Z.width}px`, a.current.style.height = `${Z.height}px`);
  }, [n, a]);
  const p = b(re), d = Ge((C) => {
    n && (C.note ? p.executeCommand(Le.id, {
      unitId: n.unitId,
      sheetId: n.subUnitId,
      row: n.row,
      col: n.col,
      note: C
    }) : p.executeCommand(F.id, {
      unitId: n.unitId,
      sheetId: n.subUnitId,
      row: n.row,
      col: n.col
    }));
  }), _ = X((C) => {
    if (!c) return;
    const g = { ...c, note: C };
    l(g), d(g);
  }, [c]), f = X((C, g) => {
    if (!c) return;
    const w = { ...c, width: C, height: g };
    l(w), d(w);
  }, [c]);
  return /* @__PURE__ */ tt(
    it,
    {
      ref: a,
      "data-u-comp": "note-textarea",
      className: rt("univer-ml-px univer-min-h-1 univer-min-w-1 univer-bg-white !univer-text-sm univer-shadow dark:!univer-bg-gray-800"),
      value: c == null ? void 0 : c.note,
      placeholder: r.t("note.placeholder"),
      onResize: f,
      onValueChange: _,
      onWheel: (C) => {
        document.activeElement !== a.current && u.engine.getCanvasElement().dispatchEvent(new WheelEvent(C.type, C.nativeEvent));
      }
    }
  );
};
function K(i) {
  const e = i.get(A), t = i.get(D);
  return e.selectionMoveEnd$.pipe(U(() => {
    const r = e.getCurrentLastSelection();
    if (!(r != null && r.primary)) return !1;
    const o = Te(t);
    if (!o) return !1;
    const { actualColumn: s, actualRow: n } = r.primary;
    return !!i.get(M).getNote(o.unitId, o.subUnitId, n, s);
  }));
}
function mt(i) {
  return {
    id: O.id,
    type: W.BUTTON,
    title: "rightClick.addNote",
    icon: "AddNoteIcon",
    hidden$: je([Ke(i, I.UNIVER_SHEET), K(i)]).pipe(U(([e, t]) => e || t)),
    disabled$: ce(i, { workbookTypes: [ne], worksheetTypes: [oe] }),
    commandId: O.id
  };
}
function St(i) {
  return {
    id: F.id,
    type: W.BUTTON,
    title: "rightClick.deleteNote",
    icon: "DeleteNoteIcon",
    hidden$: K(i).pipe(U((e) => !e)),
    disabled$: ce(i, { workbookTypes: [ne], worksheetTypes: [oe] })
  };
}
function Pt(i) {
  return {
    id: se.id,
    type: W.BUTTON,
    title: "rightClick.toggleNote",
    icon: "HideNoteIcon",
    hidden$: K(i).pipe(U((e) => !e))
  };
}
const Nt = {
  [Ye.MAIN_AREA]: {
    [qe.OTHERS]: {
      order: 0,
      [O.id]: {
        order: 0,
        menuItemFactory: mt
      },
      [F.id]: {
        order: 0,
        menuItemFactory: St
      },
      [se.id]: {
        order: 0,
        menuItemFactory: Pt
      }
    }
  }
};
var It = Object.getOwnPropertyDescriptor, Mt = (i, e, t, r) => {
  for (var o = r > 1 ? void 0 : r ? It(e, t) : e, s = i.length - 1, n; s >= 0; s--)
    (n = i[s]) && (o = n(o) || o);
  return o;
}, k = (i, e) => (t, r) => e(t, r, i);
let T = class extends N {
  constructor(i, e, t) {
    super(), this._componentManager = i, this._menuManagerService = e, this._commandService = t, this._initComponents(), this._initMenu(), this._initCommands();
  }
  _initComponents() {
    [
      [G, gt],
      ["AddNoteIcon", he],
      ["DeleteNoteIcon", de],
      ["HideNoteIcon", _e]
    ].forEach(([i, e]) => {
      this.disposeWithMe(
        this._componentManager.register(i, e)
      );
    });
  }
  _initMenu() {
    this._menuManagerService.mergeMenu(Nt);
  }
  _initCommands() {
    this._commandService.registerCommand(O);
  }
};
T = Mt([
  k(0, h(Je)),
  k(1, h(Qe)),
  k(2, re)
], T);
var wt = Object.defineProperty, bt = Object.getOwnPropertyDescriptor, Et = (i, e, t) => e in i ? wt(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, yt = (i, e, t, r) => {
  for (var o = r > 1 ? void 0 : r ? bt(e, t) : e, s = i.length - 1, n; s >= 0; s--)
    (n = i[s]) && (o = n(o) || o);
  return o;
}, ie = (i, e) => (t, r) => e(t, r, i), Ce = (i, e, t) => Et(i, typeof e != "symbol" ? e + "" : e, t);
const $t = "SHEET_NOTE_UI_PLUGIN";
let L = class extends $e {
  constructor(i = te, e, t) {
    super(), this._config = i, this._injector = e, this._configService = t;
    const { menu: r, ...o } = xe(
      {},
      te,
      this._config
    );
    r && this._configService.setConfig("menu", r, { merge: !0 }), this._configService.setConfig(pe, o);
  }
  onStarting() {
    [
      [S],
      [$],
      [x],
      [T],
      [H]
    ].forEach((i) => {
      this._injector.add(i);
    });
  }
  onReady() {
    Q(this._injector, [
      [T],
      [$]
    ]);
  }
  onRendered() {
    Q(this._injector, [
      [x],
      [H]
    ]);
  }
};
Ce(L, "pluginName", $t);
Ce(L, "type", I.UNIVER_SHEET);
L = yt([
  be(De),
  ie(1, h(Ee)),
  ie(2, ye)
], L);
export {
  $ as SheetsCellContentController,
  gt as SheetsNote,
  x as SheetsNotePopupController,
  S as SheetsNotePopupService,
  L as UniverSheetsNoteUIPlugin
};
