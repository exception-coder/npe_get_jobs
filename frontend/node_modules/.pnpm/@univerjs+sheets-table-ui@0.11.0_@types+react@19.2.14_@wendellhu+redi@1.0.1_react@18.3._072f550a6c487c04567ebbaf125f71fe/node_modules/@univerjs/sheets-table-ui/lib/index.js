var En = Object.defineProperty;
var $n = (r, e, t) => e in r ? En(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var U = (r, e, t) => $n(r, typeof e != "symbol" ? e + "" : e, t);
import { Inject as N, IUniverInstanceService as pe, ICommandService as te, LocaleService as ne, Disposable as Le, ObjectMatrix as Ln, cellToRange as Zt, Rectangle as be, Injector as ke, IPermissionService as jt, IContextService as wt, CommandType as qt, IConfigService as Yt, ThemeService as kn, RxDisposable as Qt, VerticalAlign as rt, InterceptorEffectEnum as Pn, ErrorService as On, ColorKit as he, UniverInstanceType as Ye, DependentOn as Dn, Plugin as Bn, merge as Fn, registerDependencies as Vn, touchDependencies as Hn } from "@univerjs/core";
import { IRenderManagerService as Gt, SHEET_VIEWPORT_KEY as An, convertTransformToOffsetX as Un, convertTransformToOffsetY as Wn, Rect as Et, Shape as Zn } from "@univerjs/engine-render";
import { TableManager as re, SheetTableService as jn, SetSheetTableFilterCommand as $t, isConditionFilter as qn, isManualFilter as Yn, TableDateCompareTypeEnum as o, TableStringCompareTypeEnum as Z, TableConditionTypeEnum as F, TableNumberCompareTypeEnum as k, SheetsTableSortStateEnum as ze, TableColumnFilterTypeEnum as Lt, AddSheetTableCommand as Qn, SHEET_TABLE_CUSTOM_THEME_PREFIX as Gn, DeleteSheetTableCommand as Xn, SetSheetTableCommand as ft, SheetsTableButtonStateEnum as Re, processStyleWithBorderStyle as kt, customEmptyThemeWithBorderStyle as zn, AddTableThemeCommand as Kn, RemoveTableThemeCommand as Jn, SheetTableRemoveColCommand as Xt, SheetTableRemoveRowCommand as zt, SheetTableInsertColCommand as Kt, SheetTableInsertRowCommand as Jt, SheetsTableController as en, UniverSheetsTablePlugin as er } from "@univerjs/sheets-table";
import { SheetCanvasPopManagerService as tr, SheetSkeletonManagerService as lt, SheetScrollManagerService as nr, SetZoomRatioOperation as rr, SetScrollOperation as ir, getSheetObject as ar, getCoordByCell as sr, getCurrentRangeDisable$ as or, SelectAllCommand as lr } from "@univerjs/sheets-ui";
import { useDependency as M, ComponentManager as tn, IDialogService as nn, ISidebarService as cr, useObservable as Te, IUIPartsService as ur, BuiltInUIPart as dr, connectInjector as hr, MenuItemType as ye, getMenuHiddenObservable as vr, ContextMenuPosition as gr, ContextMenuGroup as br, RibbonDataGroup as mr, IMenuManagerService as pr } from "@univerjs/ui";
import { startWith as rn, distinctUntilChanged as fr, Subject as Cr, BehaviorSubject as Pt, merge as It, filter as Sr, debounceTime as _r, switchMap as we, of as J, map as Tr, takeUntil as wr } from "rxjs";
import { jsxs as T, jsx as l, Fragment as yt } from "react/jsx-runtime";
import { Dropdown as Ne, clsx as D, borderClassName as H, CascaderList as Ir, Input as Rt, InputNumber as gt, DatePicker as yr, DateRangePicker as Rr, Select as Mr, Checkbox as Ot, scrollbarClassName as xr, ButtonGroup as Nr, Button as _e, Segmented as Er, ColorPicker as Ke } from "@univerjs/design";
import { useRef as $r, createElement as ie, forwardRef as le, useState as q, useMemo as an, useCallback as Dt, useEffect as sn } from "react";
import { SetRangeValuesMutation as Lr, WorkbookEditablePermission as on, getSheetCommandTarget as ct, SheetsSelectionsService as ut, isSingleCellSelection as kr, expandToContinuousRange as Pr, SetRangeThemeMutation as ln, WorkbookPermissionService as cn, SheetRangeThemeModel as un, SheetInterceptorService as dn, SetVerticalTextAlignCommand as Or, INTERCEPTOR_POINT as Dr, RangeThemeStyle as Br, getPrimaryForRange as Bt, SetSelectionsOperation as Ft } from "@univerjs/sheets";
import { SortRangeCommand as Fr, SortType as Vt } from "@univerjs/sheets-sort";
import { serializeRange as Ht, deserializeRangeWithSheet as Vr } from "@univerjs/engine-formula";
import { RangeSelector as Hr } from "@univerjs/sheets-formula-ui";
const Ar = "SHEET_TABLE_UI_PLUGIN", ge = "SHEETS_TABLE_FILTER_PANEL_OPENED_KEY", Ur = "UNIVER_SHEET_Table_FILTER_PANEL_ID", hn = "TABLE_TOOLBAR_BUTTON", xe = "TABLE_SELECTOR_DIALOG", Wr = "SHEET_TABLE_THEME_PANEL_ID", vn = "SHEET_TABLE_THEME_PANEL", bt = "table-custom-", Zr = "table-default-", ve = "rgb(255, 255, 255)", X = "none", Je = "1px solid rgb(var(--grey-200))";
function ae({ ref: r, ...e }) {
  const { icon: t, id: n, className: i, extend: a, ...s } = e, c = `univerjs-icon univerjs-icon-${n} ${i || ""}`.trim(), u = $r(`_${Yr()}`);
  return gn(t, `${n}`, {
    defIds: t.defIds,
    idSuffix: u.current
  }, {
    ref: r,
    className: c,
    ...s
  }, a);
}
function gn(r, e, t, n, i) {
  return ie(r.tag, {
    key: e,
    ...jr(r, t, i),
    ...n
  }, (qr(r, t).children || []).map((a, s) => gn(a, `${e}-${r.tag}-${s}`, t, void 0, i)));
}
function jr(r, e, t) {
  const n = { ...r.attrs };
  t != null && t.colorChannel1 && n.fill === "colorChannel1" && (n.fill = t.colorChannel1), r.tag === "mask" && n.id && (n.id = n.id + e.idSuffix), Object.entries(n).forEach(([a, s]) => {
    a === "mask" && typeof s == "string" && (n[a] = s.replace(/url\(#(.*)\)/, `url(#$1${e.idSuffix})`));
  });
  const { defIds: i } = e;
  return !i || i.length === 0 || (r.tag === "use" && n["xlink:href"] && (n["xlink:href"] = n["xlink:href"] + e.idSuffix), Object.entries(n).forEach(([a, s]) => {
    typeof s == "string" && (n[a] = s.replace(/url\(#(.*)\)/, `url(#$1${e.idSuffix})`));
  })), n;
}
function qr(r, e) {
  var n;
  const { defIds: t } = e;
  return !t || t.length === 0 ? r : r.tag === "defs" && ((n = r.children) != null && n.length) ? {
    ...r,
    children: r.children.map((i) => typeof i.attrs.id == "string" && t && t.includes(i.attrs.id) ? {
      ...i,
      attrs: {
        ...i.attrs,
        id: i.attrs.id + e.idSuffix
      }
    } : i)
  } : r;
}
function Yr() {
  return Math.random().toString(36).substring(2, 8);
}
ae.displayName = "UniverIcon";
const Qr = {
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
        d: "M12.4208 14.4667C12.4208 14.798 12.1522 15.0667 11.8208 15.0667C11.4895 15.0667 11.2208 14.798 11.2208 14.4667V2.98193L9.97861 4.22417C9.7443 4.45848 9.3644 4.45848 9.13008 4.22417C8.89577 3.98985 8.89577 3.60995 9.13008 3.37564L11.3967 1.10897C11.6311 0.874657 12.011 0.874657 12.2453 1.10897L14.5119 3.37564C14.7463 3.60995 14.7463 3.98985 14.5119 4.22417C14.2776 4.45848 13.8977 4.45848 13.6634 4.22417L12.4208 2.9816V14.4667Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M1.98967 10.2798C1.6583 10.2798 1.38967 10.0112 1.38967 9.67983C1.38967 9.34846 1.6583 9.07983 1.98967 9.07983H6.50138C6.74406 9.07983 6.96284 9.22602 7.05571 9.45022C7.14858 9.67443 7.09725 9.9325 6.92565 10.1041L3.43819 13.5916H6.50138C6.83276 13.5916 7.10138 13.8602 7.10138 14.1916C7.10138 14.5229 6.83276 14.7916 6.50138 14.7916H1.98967C1.74699 14.7916 1.52821 14.6454 1.43534 14.4212C1.34247 14.197 1.3938 13.9389 1.5654 13.7673L5.05286 10.2798H1.98967Z",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M5.1846 1.86439C4.8641 0.989866 3.62725 0.989866 3.30674 1.86439L1.34882 7.20672C1.23479 7.51786 1.39458 7.86252 1.70571 7.97655C2.01684 8.09058 2.3615 7.93079 2.47553 7.61966L3.06159 6.02055L3.06338 6.02056H5.42975L6.01581 7.61966C6.12984 7.93079 6.4745 8.09058 6.78563 7.97655C7.09677 7.86252 7.25655 7.51786 7.14252 7.20672L5.1846 1.86439ZM4.98996 4.82056L4.24567 2.78971L3.50138 4.82056H4.98996Z",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    }
  ]
}, bn = le(function(e, t) {
  return ie(ae, Object.assign({}, e, {
    id: "ascending-icon",
    ref: t,
    icon: Qr
  }));
});
bn.displayName = "AscendingIcon";
const Gr = {
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
        d: "M5.3313 1.4667C5.3313 1.13533 5.59993 0.866699 5.9313 0.866699H10.069C10.4004 0.866699 10.669 1.13533 10.669 1.4667C10.669 1.79807 10.4004 2.0667 10.069 2.0667H5.9313C5.59993 2.0667 5.3313 1.79807 5.3313 1.4667Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M1.09985 3.64443C1.09985 3.31306 1.36848 3.04443 1.69985 3.04443H14.2999C14.6312 3.04443 14.8999 3.31306 14.8999 3.64443C14.8999 3.9758 14.6312 4.24443 14.2999 4.24443H1.69985C1.36848 4.24443 1.09985 3.9758 1.09985 3.64443Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M6.12398 8.30171C6.35829 8.0674 6.73819 8.0674 6.97251 8.30171L8.00007 9.32928L9.02764 8.30171C9.26195 8.0674 9.64185 8.0674 9.87617 8.30171C10.1105 8.53603 10.1105 8.91593 9.87617 9.15024L8.8486 10.1778L9.87617 11.2054C10.1105 11.4397 10.1105 11.8196 9.87617 12.0539C9.64185 12.2882 9.26195 12.2882 9.02764 12.0539L8.00007 11.0263L6.97251 12.0539C6.73819 12.2882 6.35829 12.2882 6.12398 12.0539C5.88966 11.8196 5.88966 11.4397 6.12398 11.2054L7.15154 10.1778L6.12398 9.15024C5.88966 8.91593 5.88966 8.53603 6.12398 8.30171Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M4.75332 5.22217C3.86966 5.22217 3.15332 5.93851 3.15332 6.82217V12.5331C3.15332 13.9691 4.31738 15.1332 5.75332 15.1332H10.2465C11.6825 15.1332 12.8465 13.9691 12.8465 12.5331V6.82217C12.8465 5.93851 12.1302 5.22217 11.2465 5.22217H4.75332ZM4.35332 6.82217C4.35332 6.60125 4.53241 6.42217 4.75332 6.42217H11.2465C11.4674 6.42217 11.6465 6.60125 11.6465 6.82217V12.5331C11.6465 13.3063 11.0197 13.9332 10.2465 13.9332H5.75332C4.98012 13.9332 4.35332 13.3063 4.35332 12.5331V6.82217Z",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    }
  ]
}, mn = le(function(e, t) {
  return ie(ae, Object.assign({}, e, {
    id: "delete-icon",
    ref: t,
    icon: Gr
  }));
});
mn.displayName = "DeleteIcon";
const Xr = {
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
        d: "M12.4208 1.53335C12.4208 1.20198 12.1522 0.93335 11.8208 0.93335C11.4895 0.93335 11.2208 1.20198 11.2208 1.53335V13.0181L9.97861 11.7758C9.7443 11.5415 9.3644 11.5415 9.13008 11.7758C8.89577 12.0101 8.89577 12.39 9.13008 12.6244L11.3967 14.891C11.6311 15.1253 12.011 15.1253 12.2453 14.891L14.5119 12.6244C14.7463 12.39 14.7463 12.0101 14.5119 11.7758C14.2776 11.5415 13.8977 11.5415 13.6634 11.7758L12.4208 13.0184V1.53335Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M1.98967 10.2798C1.6583 10.2798 1.38967 10.0112 1.38967 9.67983C1.38967 9.34846 1.6583 9.07983 1.98967 9.07983H6.50138C6.74406 9.07983 6.96284 9.22602 7.05571 9.45022C7.14858 9.67443 7.09725 9.9325 6.92565 10.1041L3.43819 13.5916H6.50138C6.83276 13.5916 7.10138 13.8602 7.10138 14.1916C7.10138 14.5229 6.83276 14.7916 6.50138 14.7916H1.98967C1.74699 14.7916 1.52821 14.6454 1.43534 14.4212C1.34247 14.197 1.3938 13.9389 1.5654 13.7673L5.05286 10.2798H1.98967Z",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M5.1846 1.86439C4.8641 0.989866 3.62725 0.989866 3.30674 1.86439L1.34882 7.20672C1.23479 7.51786 1.39458 7.86252 1.70571 7.97655C2.01684 8.09058 2.3615 7.93079 2.47553 7.61966L3.06159 6.02055L3.06338 6.02056H5.42975L6.01581 7.61966C6.12984 7.93079 6.4745 8.09058 6.78563 7.97655C7.09677 7.86252 7.25655 7.51786 7.14252 7.20672L5.1846 1.86439ZM4.98996 4.82056L4.24567 2.78971L3.50138 4.82056H4.98996Z",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    }
  ]
}, pn = le(function(e, t) {
  return ie(ae, Object.assign({}, e, {
    id: "descending-icon",
    ref: t,
    icon: Xr
  }));
});
pn.displayName = "DescendingIcon";
const zr = {
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
      d: "M8.85869 12.9216C8.38445 13.4708 7.61555 13.4708 7.14131 12.9216L0.358114 5.06726C-0.406895 4.18144 0.134916 2.66683 1.2168 2.66683L14.7832 2.66683C15.8651 2.66683 16.4069 4.18144 15.6419 5.06726L8.85869 12.9216Z"
    }
  }]
}, je = le(function(e, t) {
  return ie(ae, Object.assign({}, e, {
    id: "dropdown-icon",
    ref: t,
    icon: zr
  }));
});
je.displayName = "DropdownIcon";
const Kr = {
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
      d: "M3.33333 3.33333V6H6V3.33333H3.33333ZM2 3.238C2 2.55427 2.55427 2 3.238 2H6.09533C6.77906 2 7.33333 2.55427 7.33333 3.238V6.09533C7.33333 6.77906 6.77906 7.33333 6.09533 7.33333H3.238C2.55427 7.33333 2 6.77906 2 6.09533V3.238ZM10 3.33333V6H12.6667V3.33333H10ZM8.66667 3.238C8.66667 2.55427 9.22094 2 9.90467 2H12.762C13.4457 2 14 2.55427 14 3.238V6.09533C14 6.77906 13.4457 7.33333 12.762 7.33333H9.90467C9.22094 7.33333 8.66667 6.77906 8.66667 6.09533V3.238ZM3.33333 10V12.6667H6V10H3.33333ZM2 9.90467C2 9.22094 2.55427 8.66667 3.238 8.66667H6.09533C6.77906 8.66667 7.33333 9.22094 7.33333 9.90467V12.762C7.33333 13.4457 6.77906 14 6.09533 14H3.238C2.55427 14 2 13.4457 2 12.762V9.90467ZM10 10V12.6667H12.6667V10H10ZM8.66667 9.90467C8.66667 9.22094 9.22094 8.66667 9.90467 8.66667H12.762C13.4457 8.66667 14 9.22094 14 9.90467V12.762C14 13.4457 13.4457 14 12.762 14H9.90467C9.22094 14 8.66667 13.4457 8.66667 12.762V9.90467Z",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }
  }]
}, fn = le(function(e, t) {
  return ie(ae, Object.assign({}, e, {
    id: "grid-outline-icon",
    ref: t,
    icon: Kr
  }));
});
fn.displayName = "GridOutlineIcon";
const Jr = {
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
      d: "M11.3536 6.14645C11.5488 6.34171 11.5488 6.65829 11.3536 6.85355L8.35355 9.85355C8.15829 10.0488 7.84171 10.0488 7.64645 9.85355L4.64645 6.85355C4.45118 6.65829 4.45118 6.34171 4.64645 6.14645C4.84171 5.95118 5.15829 5.95118 5.35355 6.14645L8 8.79289L10.6464 6.14645C10.8417 5.95118 11.1583 5.95118 11.3536 6.14645Z",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }
  }]
}, Mt = le(function(e, t) {
  return ie(ae, Object.assign({}, e, {
    id: "more-down-icon",
    ref: t,
    icon: Jr
  }));
});
Mt.displayName = "MoreDownIcon";
const ei = {
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
      d: "M3.80068 2.57257L7.27955 2.57256C7.61092 2.57256 7.87954 2.30393 7.87954 1.97256C7.87954 1.64119 7.61091 1.37256 7.27954 1.37256L3.80068 1.37257C2.36473 1.37257 1.20067 2.53665 1.20068 3.97259L1.20074 12.3001C1.20075 13.736 2.36481 14.9 3.80074 14.9H12.1282C13.5641 14.9 14.7282 13.736 14.7282 12.3V8.82116C14.7282 8.48979 14.4595 8.22116 14.1282 8.22116C13.7968 8.22116 13.5282 8.48979 13.5282 8.82116V12.3C13.5282 13.0732 12.9014 13.7 12.1282 13.7H3.80074C3.02754 13.7 2.40074 13.0732 2.40074 12.3001L2.40068 3.97258C2.40068 3.19938 3.02748 2.57257 3.80068 2.57257Z"
    }
  }, {
    tag: "path",
    attrs: {
      fill: "currentColor",
      d: "M14.0072 2.0955C13.0997 1.18757 11.6278 1.18794 10.7207 2.09632L6.17749 6.646C6.10294 6.72065 6.04543 6.81056 6.00889 6.90954L4.59817 10.7315C4.51713 10.951 4.57116 11.1977 4.73657 11.3633C4.90198 11.5288 5.14858 11.5831 5.36823 11.5023L9.20237 10.0916C9.30186 10.055 9.3922 9.99722 9.46714 9.92224L14.0073 5.37972C14.9139 4.47266 14.9138 3.00252 14.0072 2.0955ZM11.5698 2.94424C12.0083 2.50513 12.7198 2.50496 13.1585 2.94384C13.5968 3.38229 13.5968 4.09294 13.1585 4.53141L8.69127 9.00102L6.1742 9.92713L7.09912 7.42132L11.5698 2.94424Z",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }
  }]
}, Cn = le(function(e, t) {
  return ie(ae, Object.assign({}, e, {
    id: "rename-icon",
    ref: t,
    icon: ei
  }));
});
Cn.displayName = "RenameIcon";
const ti = {
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
      d: "M1.7643 4.13354C1.7643 2.82523 2.82488 1.76465 4.13319 1.76465H11.8665C13.1748 1.76465 14.2354 2.82524 14.2354 4.13354V11.8669C14.2354 13.1752 13.1748 14.2358 11.8665 14.2358H4.13318C2.82488 14.2358 1.7643 13.1752 1.7643 11.8669V6.1462C1.76388 6.13711 1.76367 6.12797 1.76367 6.11878C1.76367 6.10959 1.76388 6.10045 1.7643 6.09136V4.13354ZM2.94652 6.70989V11.8669C2.94652 12.5222 3.47781 13.0535 4.13318 13.0535H5.52732V6.70989H2.94652ZM5.52732 5.52767H2.94652V4.13354C2.94652 3.47816 3.47781 2.94687 4.13319 2.94687H5.52732V5.52767ZM6.70954 6.70989V13.0535H11.8665C12.5219 13.0535 13.0532 12.5222 13.0532 11.8669V6.70989L6.70954 6.70989ZM13.0532 5.52767L6.70954 5.52767V2.94687H11.8665C12.5219 2.94687 13.0532 3.47816 13.0532 4.13354V5.52767Z",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }
  }]
}, Sn = le(function(e, t) {
  return ie(ae, Object.assign({}, e, {
    id: "table-icon",
    ref: t,
    icon: ti
  }));
});
Sn.displayName = "TableIcon";
const ni = {
  tag: "svg",
  attrs: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 17 16",
    width: "1em",
    height: "1em"
  },
  children: [
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M8.01281 1.36643C8.79386 0.585377 10.0602 0.585378 10.8412 1.36643L12.9223 3.44752C13.7034 4.22857 13.7034 5.4949 12.9223 6.27595L9.36445 9.83383C8.5834 10.6149 7.31707 10.6149 6.53602 9.83383L4.45493 7.75273C3.67388 6.97168 3.67388 5.70535 4.45493 4.9243L8.01281 1.36643ZM9.9927 2.21495C9.68028 1.90253 9.17375 1.90253 8.86133 2.21495L5.30346 5.77283L5.29671 5.77966L10.839 6.66224L12.0738 5.42742C12.3862 5.115 12.3862 4.60847 12.0738 4.29605L9.9927 2.21495Z",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M14.5179 9.48875C14.5179 9.99175 14.1101 10.3995 13.607 10.3995C13.1041 10.3995 12.6963 9.99175 12.6963 9.48875C12.6963 9.1773 13.0455 8.59966 13.3114 8.20487C13.4549 7.99177 13.7591 7.99177 13.9027 8.20486C14.1687 8.59965 14.5179 9.1773 14.5179 9.48875Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "colorChannel1",
        d: "M1.98682 13.4992C1.98682 12.5603 2.74793 11.7992 3.68682 11.7992H14.2868C15.2257 11.7992 15.9868 12.5603 15.9868 13.4992V13.4992C15.9868 14.4381 15.2257 15.1992 14.2868 15.1992H3.68682C2.74793 15.1992 1.98682 14.4381 1.98682 13.4992V13.4992Z"
      }
    }
  ]
}, _n = le(function(e, t) {
  return ie(ae, Object.assign({}, e, {
    id: "paint-bucket-double-icon",
    ref: t,
    icon: ni
  }));
});
_n.displayName = "PaintBucketDoubleIcon";
var me = /* @__PURE__ */ ((r) => (r.Items = "items", r.Condition = "condition", r))(me || {}), ri = Object.getOwnPropertyDescriptor, ii = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? ri(e, t) : e, a = r.length - 1, s; a >= 0; a--)
    (s = r[a]) && (i = s(i) || i);
  return i;
}, We = (r, e) => (t, n) => e(t, n, r);
let Ee = class extends Le {
  constructor(e, t, n, i, a) {
    super();
    U(this, "_itemsCache", /* @__PURE__ */ new Map());
    this._tableManager = e, this._sheetTableService = t, this._univerInstanceService = n, this._commandService = i, this._localeService = a, this._registerTableFilterChangeEvent();
  }
  _registerTableFilterChangeEvent() {
    this._commandService.onCommandExecuted((e) => {
      if (e.id === Lr.id) {
        const { unitId: t, subUnitId: n, cellValue: i } = e.params, a = this._tableManager.getTablesBySubunitId(t, n);
        if (!a.length)
          return;
        new Ln(i).forValue((c, u, h) => {
          const d = Zt(c, u), v = a.find((f) => {
            const w = f.getTableFilterRange();
            return be.intersects(w, d);
          });
          if (v) {
            const f = u - v.getRange().startColumn;
            this._itemsCache.delete(v.getId() + f);
          }
        });
      } else if (e.id === $t.id) {
        const { unitId: t, tableId: n } = e.params, i = this._tableManager.getTable(t, n);
        if (!i)
          return;
        const a = i.getSubunitId();
        this._tableManager.getTablesBySubunitId(t, a).forEach((c) => {
          const u = c.getRange();
          for (let h = u.startColumn; h <= u.endColumn; h++)
            this._itemsCache.delete(c.getId() + h);
        });
      }
    });
  }
  getTableFilterPanelInitProps(e, t, n, i) {
    const a = this._tableManager.getTable(e, n), s = a.getRange(), c = a.getTableFilterColumn(i - s.startColumn);
    return {
      unitId: e,
      subUnitId: t,
      tableFilter: c,
      currentFilterBy: qn(c) ? me.Condition : me.Items,
      tableId: n,
      columnIndex: i - s.startColumn
    };
  }
  getTableFilterCheckedItems(e, t, n) {
    const i = this._tableManager.getTable(e, t), a = [];
    if (i) {
      const s = i.getTableFilterColumn(n);
      s && Yn(s) && a.push(...s.values);
    }
    return a;
  }
  setTableFilter(e, t, n, i) {
    if (!this._tableManager.getTable(e, t))
      return;
    const s = {
      unitId: e,
      tableId: t,
      column: n,
      tableFilter: i
    };
    this._commandService.executeCommand($t.id, s);
  }
  getTableFilterItems(e, t, n, i) {
    var E;
    if (this._itemsCache.has(n + i))
      return this._itemsCache.get(n + i) || { data: [], itemsCountMap: /* @__PURE__ */ new Map(), allItemsCount: 0 };
    const a = this._tableManager.getTable(e, n);
    if (!a)
      return { data: [], itemsCountMap: /* @__PURE__ */ new Map(), allItemsCount: 0 };
    const s = a.getTableFilterRange(), { startRow: c, endRow: u, startColumn: h } = s, d = h + i, v = (E = this._univerInstanceService.getUnit(e)) == null ? void 0 : E.getSheetBySheetId(t);
    if (!v)
      return { data: [], itemsCountMap: /* @__PURE__ */ new Map(), allItemsCount: 0 };
    const f = [], w = /* @__PURE__ */ new Map();
    let S = 0;
    for (let C = c; C <= u; C++) {
      if (v.isRowFiltered(C))
        continue;
      let I = this._sheetTableService.getCellValueWithConditionType(v, C, d);
      I === void 0 && (I = this._localeService.t("sheets-table.condition.empty")), w.has(I) || f.push({
        title: I,
        key: `${d}_${C}`,
        leaf: !0
      }), S++, w.set(I, (w.get(I) || 0) + 1);
    }
    return this._itemsCache.set(n + i, { data: f, itemsCountMap: w, allItemsCount: S }), { data: f, itemsCountMap: w, allItemsCount: S };
  }
};
Ee = ii([
  We(0, N(re)),
  We(1, N(jn)),
  We(2, N(pe)),
  We(3, te),
  We(4, N(ne))
], Ee);
var j = /* @__PURE__ */ ((r) => (r.DatePicker = "DatePicker", r.DateRange = "DateRange", r.Input = "Input", r.Inputs = "Inputs", r.Select = "Select", r.None = "None", r))(j || {});
function ai(r) {
  const t = r.get(ne).t;
  return [
    {
      value: F.String,
      label: t(`sheets-table.condition.${F.String}`),
      children: [
        {
          value: Z.Equal,
          label: t(`sheets-table.string.compare.${Z.Equal}`)
        },
        {
          value: Z.NotEqual,
          label: t(`sheets-table.string.compare.${Z.NotEqual}`)
        },
        {
          value: Z.Contains,
          label: t(`sheets-table.string.compare.${Z.Contains}`)
        },
        {
          value: Z.NotContains,
          label: t(`sheets-table.string.compare.${Z.NotContains}`)
        },
        {
          value: Z.StartsWith,
          label: t(`sheets-table.string.compare.${Z.StartsWith}`)
        },
        {
          value: Z.EndsWith,
          label: t(`sheets-table.string.compare.${Z.EndsWith}`)
        }
      ]
    },
    {
      value: F.Number,
      label: t(`sheets-table.condition.${F.Number}`),
      children: [
        {
          value: k.Equal,
          label: t(`sheets-table.number.compare.${k.Equal}`)
        },
        {
          value: k.NotEqual,
          label: t(`sheets-table.number.compare.${k.NotEqual}`)
        },
        {
          value: k.GreaterThan,
          label: t(`sheets-table.number.compare.${k.GreaterThan}`)
        },
        {
          value: k.GreaterThanOrEqual,
          label: t(`sheets-table.number.compare.${k.GreaterThanOrEqual}`)
        },
        {
          value: k.LessThan,
          label: t(`sheets-table.number.compare.${k.LessThan}`)
        },
        {
          value: k.LessThanOrEqual,
          label: t(`sheets-table.number.compare.${k.LessThanOrEqual}`)
        },
        {
          value: k.Between,
          label: t(`sheets-table.number.compare.${k.Between}`)
        },
        {
          value: k.NotBetween,
          label: t(`sheets-table.number.compare.${k.NotBetween}`)
        },
        {
          value: k.Above,
          label: t(`sheets-table.number.compare.${k.Above}`)
        },
        {
          value: k.Below,
          label: t(`sheets-table.number.compare.${k.Below}`)
        }
        // {
        //     value: TableNumberCompareTypeEnum.TopN,
        //     label: t(`sheets-table.number.compare.${TableNumberCompareTypeEnum.TopN}`),
        // },
      ]
    },
    {
      value: F.Date,
      label: t(`sheets-table.condition.${F.Date}`),
      children: [
        {
          value: o.Equal,
          label: t(`sheets-table.date.compare.${o.Equal}`)
        },
        {
          value: o.NotEqual,
          label: t(`sheets-table.date.compare.${o.NotEqual}`)
        },
        {
          value: o.After,
          label: t(`sheets-table.date.compare.${o.After}`)
        },
        {
          value: o.AfterOrEqual,
          label: t(`sheets-table.date.compare.${o.AfterOrEqual}`)
        },
        {
          value: o.Before,
          label: t(`sheets-table.date.compare.${o.Before}`)
        },
        {
          value: o.BeforeOrEqual,
          label: t(`sheets-table.date.compare.${o.BeforeOrEqual}`)
        },
        {
          value: o.Between,
          label: t(`sheets-table.date.compare.${o.Between}`)
        },
        {
          value: o.NotBetween,
          label: t(`sheets-table.date.compare.${o.NotBetween}`)
        },
        {
          value: o.Today,
          label: t(`sheets-table.date.compare.${o.Today}`)
        },
        {
          value: o.Yesterday,
          label: t(`sheets-table.date.compare.${o.Yesterday}`)
        },
        {
          value: o.Tomorrow,
          label: t(`sheets-table.date.compare.${o.Tomorrow}`)
        },
        {
          value: o.ThisWeek,
          label: t(`sheets-table.date.compare.${o.ThisWeek}`)
        },
        {
          value: o.LastWeek,
          label: t(`sheets-table.date.compare.${o.LastWeek}`)
        },
        {
          value: o.NextWeek,
          label: t(`sheets-table.date.compare.${o.NextWeek}`)
        },
        {
          value: o.ThisMonth,
          label: t(`sheets-table.date.compare.${o.ThisMonth}`)
        },
        {
          value: o.LastMonth,
          label: t(`sheets-table.date.compare.${o.LastMonth}`)
        },
        {
          value: o.NextMonth,
          label: t(`sheets-table.date.compare.${o.NextMonth}`)
        },
        {
          value: o.ThisYear,
          label: t(`sheets-table.date.compare.${o.ThisYear}`)
        },
        {
          value: o.LastYear,
          label: t(`sheets-table.date.compare.${o.LastYear}`)
        },
        {
          value: o.NextYear,
          label: t(`sheets-table.date.compare.${o.NextYear}`)
        },
        {
          value: o.Quarter,
          label: t(`sheets-table.date.compare.${o.Quarter}`)
        },
        {
          value: o.Month,
          label: t(`sheets-table.date.compare.${o.Month}`)
        }
      ]
    }
  ];
}
function si(r, e) {
  if (!e)
    return [];
  const n = r.get(ne).t;
  switch (e) {
    case o.Quarter:
      return [
        {
          value: o.Q1,
          label: n(`sheets-table.date.compare.${o.Q1}`)
        },
        {
          value: o.Q2,
          label: n(`sheets-table.date.compare.${o.Q2}`)
        },
        {
          value: o.Q3,
          label: n(`sheets-table.date.compare.${o.Q3}`)
        },
        {
          value: o.Q4,
          label: n(`sheets-table.date.compare.${o.Q4}`)
        }
      ];
    case o.Month:
      return [
        {
          value: o.M1,
          label: n(`sheets-table.date.compare.${o.M1}`)
        },
        {
          value: o.M2,
          label: n(`sheets-table.date.compare.${o.M2}`)
        },
        {
          value: o.M3,
          label: n(`sheets-table.date.compare.${o.M3}`)
        },
        {
          value: o.M4,
          label: n(`sheets-table.date.compare.${o.M4}`)
        },
        {
          value: o.M5,
          label: n(`sheets-table.date.compare.${o.M5}`)
        },
        {
          value: o.M6,
          label: n(`sheets-table.date.compare.${o.M6}`)
        },
        {
          value: o.M7,
          label: n(`sheets-table.date.compare.${o.M7}`)
        },
        {
          value: o.M8,
          label: n(`sheets-table.date.compare.${o.M8}`)
        },
        {
          value: o.M9,
          label: n(`sheets-table.date.compare.${o.M9}`)
        },
        {
          value: o.M10,
          label: n(`sheets-table.date.compare.${o.M10}`)
        },
        {
          value: o.M11,
          label: n(`sheets-table.date.compare.${o.M11}`)
        },
        {
          value: o.M12,
          label: n(`sheets-table.date.compare.${o.M12}`)
        }
      ];
    default:
      return [];
  }
}
const xt = /* @__PURE__ */ new Set([
  o.Equal,
  o.NotEqual,
  o.After,
  o.AfterOrEqual,
  o.Before,
  o.BeforeOrEqual
]);
function oi(r, e) {
  return e ? r === F.String ? j.Input : r === F.Number ? e === k.Between || e === k.NotBetween ? j.Inputs : j.Input : r === F.Date ? e === o.Between || e === o.NotBetween ? j.DateRange : e === o.Quarter || e === o.Month ? j.Select : xt.has(e) ? j.DatePicker : j.None : j.None : j.None;
}
function li(r) {
  if (!r || r.filterType !== "condition")
    return {
      type: F.String,
      compareType: Z.Equal,
      info: {}
    };
  const e = r.filterInfo, { conditionType: t, compareType: n } = e;
  if (t === F.Date)
    if (n === o.Between || n === o.NotBetween) {
      let i;
      return Array.isArray(e.expectedValue) && (i = e.expectedValue.map((a) => typeof a == "string" ? new Date(a) : a)), {
        type: t,
        compare: n,
        info: {
          dateRange: i
        }
      };
    } else {
      if (n === o.Today || n === o.Yesterday || n === o.Tomorrow || n === o.ThisWeek || n === o.LastWeek || n === o.NextWeek || n === o.ThisMonth || n === o.LastMonth || n === o.NextMonth || n === o.ThisYear || n === o.LastYear || n === o.NextYear)
        return {
          type: t,
          compare: n,
          info: {}
        };
      if (xt.has(n)) {
        let i;
        if (typeof e.expectedValue == "string")
          i = new Date(e.expectedValue);
        else if (Array.isArray(e.expectedValue))
          for (let a = 0; a < e.expectedValue.length; a++)
            typeof e.expectedValue[a] == "string" && (e.expectedValue[a] = new Date(e.expectedValue[a]));
        return {
          type: t,
          compare: n,
          info: {
            date: i
          }
        };
      } else
        return (/* @__PURE__ */ new Set([o.Q1, o.Q2, o.Q3, o.Q4])).has(n) ? {
          type: t,
          compare: o.Quarter,
          info: {
            dateSelect: e.compareType
          }
        } : {
          type: t,
          compare: o.Month,
          info: {
            dateSelect: e.compareType
          }
        };
    }
  else {
    if (t === F.Number)
      return n === k.Between || n === k.NotBetween ? {
        type: t,
        compare: n,
        info: {
          numberRange: e.expectedValue
        }
      } : {
        type: t,
        compare: n,
        info: {
          number: e.expectedValue
        }
      };
    if (t === F.String)
      return {
        type: t,
        compare: n,
        info: {
          string: e.expectedValue
        }
      };
  }
  return {
    type: F.String,
    compare: Z.Equal,
    info: {}
  };
}
const ci = (r) => {
  var w, S, E, C, $, I, B, R;
  const { conditionInfo: e, onChange: t } = r, n = M(ne), [i, a] = q(!1), s = M(ke), c = ai(s), u = (g, x, y) => {
    t({
      type: x != null ? x : e.type,
      compare: y != null ? y : e.compare,
      info: g
    });
  }, h = (g) => {
    var O;
    const x = g[0], y = g[1];
    y && a(!1);
    const m = {};
    x === F.Date ? y === o.Quarter ? m.dateSelect = o.Q1 : y === o.Month ? m.dateSelect = o.M1 : xt.has(y) ? m.date = /* @__PURE__ */ new Date() : m.dateRange = [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()] : x === F.Number ? m.number = 0 : x === F.String && (m.string = ""), u(m, g[0], (O = g[1]) != null ? O : Z.Equal);
  }, d = oi(e.type, e.compare);
  let v = "";
  e.compare ? v = `${n.t(`sheets-table.condition.${e.type}`)} - ${n.t(`sheets-table.${e.type}.compare.${e.compare}`)}` : v = n.t(`sheets-table.condition.${e.type}`);
  const f = si(s, e.compare);
  return /* @__PURE__ */ T("div", { children: [
    /* @__PURE__ */ l(
      Ne,
      {
        align: "start",
        open: i,
        onOpenChange: a,
        overlay: /* @__PURE__ */ l(
          Ir,
          {
            value: [e.type, e.compare],
            options: c,
            onChange: h,
            contentClassName: "univer-flex-1",
            wrapperClassName: "!univer-h-[150px]"
          }
        ),
        children: /* @__PURE__ */ T(
          "div",
          {
            className: D("univer-box-border univer-flex univer-h-8 univer-w-full univer-items-center univer-justify-between univer-rounded-md univer-bg-white univer-px-2 univer-text-sm univer-transition-colors univer-duration-200 hover:univer-border-primary-600 focus:univer-border-primary-600 focus:univer-outline-none focus:univer-ring-2 dark:!univer-bg-gray-700 dark:!univer-text-white", H),
            children: [
              /* @__PURE__ */ l("span", { children: v }),
              /* @__PURE__ */ l(Mt, {})
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ T("div", { className: "univer-mt-3 univer-w-full", children: [
      d === j.Input && /* @__PURE__ */ l(yt, { children: e.type === F.String ? /* @__PURE__ */ l(
        Rt,
        {
          className: "univer-w-full",
          placeholder: "请输入",
          value: e.info.string,
          onChange: (g) => u({ string: g })
        }
      ) : /* @__PURE__ */ l(
        gt,
        {
          className: "univer-h-7 univer-w-full",
          value: e.info.number,
          controls: !1,
          onChange: (g) => {
            g !== null && u({ number: g });
          }
        }
      ) }),
      d === j.DatePicker && /* @__PURE__ */ l("div", { id: "univer-table-date-picker-wrapper", children: /* @__PURE__ */ l(
        yr,
        {
          className: "univer-w-full",
          value: (w = e.info.date) != null ? w : /* @__PURE__ */ new Date(),
          onValueChange: (g) => u({ date: g })
        }
      ) }),
      d === j.DateRange && /* @__PURE__ */ l("div", { id: "univer-table-date-range-wrapper", children: /* @__PURE__ */ l(
        Rr,
        {
          className: "univer-w-full",
          value: [(E = (S = e.info.dateRange) == null ? void 0 : S[0]) != null ? E : /* @__PURE__ */ new Date(), ($ = (C = e.info.dateRange) == null ? void 0 : C[1]) != null ? $ : /* @__PURE__ */ new Date()],
          onValueChange: (g) => {
            u(g ? { dateRange: g } : {});
          }
        }
      ) }),
      d === j.Inputs && /* @__PURE__ */ T("div", { className: "univer-flex univer-items-center univer-gap-2", children: [
        /* @__PURE__ */ l(
          gt,
          {
            className: "univer-w-full",
            value: (I = e.info.numberRange) == null ? void 0 : I[0],
            onChange: (g) => {
              var x;
              g !== null && u({ numberRange: [g, (x = e.info.numberRange) == null ? void 0 : x[1]] });
            },
            controls: !1
          }
        ),
        /* @__PURE__ */ l("span", { children: " - " }),
        /* @__PURE__ */ l(
          gt,
          {
            className: "univer-w-full",
            value: (B = e.info.numberRange) == null ? void 0 : B[1],
            controls: !1,
            onChange: (g) => {
              var x;
              g !== null && u({ numberRange: [(x = e.info.numberRange) == null ? void 0 : x[0], g] });
            }
          }
        )
      ] }),
      d === j.Select && /* @__PURE__ */ l(
        Mr,
        {
          className: "univer-w-full",
          value: (R = e.info.dateSelect) != null ? R : f[0].value,
          options: f,
          onChange: (g) => u({ dateSelect: g })
        }
      )
    ] })
  ] });
}, ui = (r) => {
  let e = 0;
  return r.forEach((t) => {
    e += t;
  }), e;
};
function di(r) {
  const { unitId: e, tableId: t, subUnitId: n, columnIndex: i, checkedItemSet: a, setCheckedItemSet: s, tableFilter: c } = r, u = M(ne), h = M(Ee), { data: d, itemsCountMap: v, allItemsCount: f } = h.getTableFilterItems(e, n, t, i), [w, S] = q(c === void 0 ? !0 : a.size === v.size), [E, C] = q(w ? f : ui(v)), $ = !w && a.size > 0, [I, B] = q(""), R = an(() => I ? d.filter((m) => String(m.title).toLowerCase().includes(I.toLowerCase())) : d, [I, d]), g = Dt(() => {
    w ? (a.clear(), s(new Set(a)), S(!1)) : (R.forEach((m) => {
      a.add(m.title);
    }), s(new Set(a)), S(!0));
  }, [w]), x = Dt((m) => {
    m === "" ? (S(!0), d.forEach((O) => {
      a.add(O.title);
    }), C(f)) : (a.clear(), S(!1), C(0)), B(m);
  }, []), y = (m) => {
    if (w) {
      S(!1);
      const O = /* @__PURE__ */ new Set();
      for (const { title: L } of d)
        m !== L && O.add(L);
      C(f - v.get(m)), s(O);
    } else
      a.has(m) ? (a.delete(m), C(E - v.get(m))) : (a.add(m), C(E + v.get(m))), s(new Set(a));
  };
  return /* @__PURE__ */ T("div", { className: "univer-flex univer-h-full univer-flex-col", children: [
    /* @__PURE__ */ l(Rt, { autoFocus: !0, value: I, placeholder: u.t("sheets-table.filter.search-placeholder"), onChange: x }),
    /* @__PURE__ */ l(
      "div",
      {
        className: D("univer-mt-2 univer-box-border univer-flex univer-h-[180px] univer-max-h-[180px] univer-flex-grow univer-flex-col univer-overflow-hidden univer-rounded-md univer-py-1.5 univer-pl-2", H),
        children: /* @__PURE__ */ l(
          "div",
          {
            className: D("univer-h-40 univer-overflow-y-auto univer-py-1 univer-pl-2", xr),
            children: /* @__PURE__ */ T("div", { className: "univer-h-full", children: [
              /* @__PURE__ */ l("div", { className: "univer-flex univer-items-center univer-px-2 univer-py-1", children: /* @__PURE__ */ l(
                Ot,
                {
                  indeterminate: $,
                  disabled: d.length === 0,
                  checked: w,
                  onChange: g,
                  children: /* @__PURE__ */ T("div", { className: "univer-flex univer-h-5 univer-flex-1 univer-items-center univer-text-sm", children: [
                    /* @__PURE__ */ l("span", { className: "univer-inline-block univer-truncate", children: `${u.t("sheets-table.filter.select-all")}` }),
                    /* @__PURE__ */ l("span", { className: "univer-ml univer-text-gray-400", children: `(${E}/${I ? R.length : f})` })
                  ] })
                }
              ) }),
              R.map((m) => /* @__PURE__ */ l(
                "div",
                {
                  className: "univer-flex univer-items-center univer-px-2 univer-py-1",
                  children: /* @__PURE__ */ l(
                    Ot,
                    {
                      checked: w || a.has(m.title),
                      onChange: () => {
                        y(m.title);
                      },
                      children: /* @__PURE__ */ T("div", { className: "univer-flex univer-h-5 univer-flex-1 univer-text-sm", children: [
                        /* @__PURE__ */ l("span", { className: "univer-inline-block univer-truncate", children: m.title }),
                        /* @__PURE__ */ l("span", { className: "univer-ml-1 univer-text-gray-400", children: `(${v.get(m.title) || 0})` })
                      ] })
                    }
                  )
                },
                m.key
              ))
            ] })
          }
        )
      }
    )
  ] });
}
function hi() {
  var de;
  const r = M(ne), e = vi(r), t = M(Ee), n = M(re), i = M(te), a = M(jt), s = M($e), c = s.getCurrentTableFilterInfo(), u = t.getTableFilterPanelInitProps(c.unitId, c.subUnitId, c.tableId, c.column), { unitId: h, subUnitId: d, tableId: v, tableFilter: f, currentFilterBy: w, columnIndex: S } = u, { data: E } = t.getTableFilterItems(h, d, v, S), C = t.getTableFilterCheckedItems(h, v, S), [$, I] = q(new Set(C)), [B, R] = q(w || me.Items), [g, x] = q(() => {
    const b = u.tableFilter;
    return li(b);
  }), y = n.getTable(h, v);
  if (!y) return null;
  const m = y.getTableFilters(), O = m.getSortState();
  O.columnIndex === S && (O.sortState, ze.Asc), O.columnIndex === S && (O.sortState, ze.Desc);
  const L = () => {
    s.closeFilterPanel();
  }, Y = () => {
    L();
  }, V = (b) => {
    const P = y.getTableFilterRange();
    i.executeCommand(Fr.id, {
      unitId: h,
      subUnitId: d,
      range: P,
      orderRules: [{ colIndex: S + P.startColumn, type: b ? Vt.ASC : Vt.DESC }],
      hasTitle: !1
    }), m.setSortState(S, b ? ze.Asc : ze.Desc), L();
  }, G = () => {
    if (B === me.Items) {
      const b = [];
      for (const Q of E)
        $.has(Q.title) && b.push(Q.title);
      const P = y.getTableFilterColumn(S);
      if (P) {
        if (P.values.join(",") === b.join(",")) {
          L();
          return;
        }
      } else if (b.length === 0) {
        L();
        return;
      }
      const A = {
        filterType: Lt.manual,
        values: b
      };
      t.setTableFilter(h, v, S, A);
    } else {
      let b;
      g.compare === o.Quarter || g.compare === o.Month ? b = {
        conditionType: g.type,
        compareType: Object.values(g.info)[0]
      } : b = {
        conditionType: g.type,
        compareType: g.compare,
        expectedValue: Object.values(g.info)[0]
      };
      const P = {
        filterType: Lt.condition,
        // @ts-ignore
        filterInfo: b
      };
      t.setTableFilter(h, v, S, P);
    }
    L();
  }, ce = () => {
    t.setTableFilter(h, v, S, void 0), L();
  }, ue = new on(h).id, fe = (de = a.getPermissionPoint(ue)) == null ? void 0 : de.value;
  return /* @__PURE__ */ T(
    "div",
    {
      className: "univer-box-border univer-flex univer-min-w-[312px] univer-flex-col univer-rounded-[10px] univer-bg-white univer-p-4 univer-shadow-lg dark:!univer-border-gray-600 dark:!univer-bg-gray-700",
      children: [
        fe && /* @__PURE__ */ l("div", { className: "univer-mb-3 univer-flex", children: /* @__PURE__ */ T(Nr, { className: "univer-mb-3 !univer-flex univer-w-full", children: [
          /* @__PURE__ */ T(_e, { className: "univer-w-1/2", onClick: () => V(!0), children: [
            /* @__PURE__ */ l(bn, { className: "univer-mr-1" }),
            r.t("sheets-sort.general.sort-asc")
          ] }),
          /* @__PURE__ */ T(_e, { className: "univer-w-1/2", onClick: () => V(!1), children: [
            /* @__PURE__ */ l(pn, { className: "univer-mr-1" }),
            r.t("sheets-sort.general.sort-desc")
          ] })
        ] }) }),
        /* @__PURE__ */ l("div", { className: "univer-w-full", children: /* @__PURE__ */ l(
          Er,
          {
            value: B,
            items: e,
            onChange: (b) => R(b)
          }
        ) }),
        /* @__PURE__ */ l("div", { className: "univer-z-10 univer-h-60", children: /* @__PURE__ */ l("div", { className: "univer-mt-3 univer-h-full univer-w-full", children: B === me.Items ? /* @__PURE__ */ l(
          di,
          {
            tableFilter: f,
            unitId: h,
            subUnitId: d,
            tableId: v,
            columnIndex: S,
            checkedItemSet: $,
            setCheckedItemSet: I
          }
        ) : /* @__PURE__ */ l(
          ci,
          {
            tableFilter: f,
            unitId: h,
            subUnitId: d,
            tableId: v,
            columnIndex: S,
            conditionInfo: g,
            onChange: x
          }
        ) }) }),
        /* @__PURE__ */ T(
          "div",
          {
            className: "univer-flex-wrap-nowrap univer-mt-4 univer-inline-flex univer-flex-shrink-0 univer-flex-grow-0 univer-justify-between univer-gap-6 univer-overflow-hidden",
            children: [
              /* @__PURE__ */ l(
                _e,
                {
                  disabled: f === void 0,
                  onClick: ce,
                  children: r.t("sheets-table.filter.clear-filter")
                }
              ),
              /* @__PURE__ */ T("div", { children: [
                /* @__PURE__ */ l(_e, { className: "univer-mr-2", onClick: Y, children: r.t("sheets-table.filter.cancel") }),
                /* @__PURE__ */ l(_e, { variant: "primary", onClick: G, children: r.t("sheets-table.filter.confirm") })
              ] })
            ]
          }
        )
      ]
    }
  );
}
function vi(r) {
  const e = r.getCurrentLocale();
  return an(() => [
    { label: r.t("sheets-table.filter.by-values"), value: me.Items },
    { label: r.t("sheets-table.filter.by-conditions"), value: me.Condition }
  ], [e, r]);
}
var gi = Object.getOwnPropertyDescriptor, bi = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? gi(e, t) : e, a = r.length - 1, s; a >= 0; a--)
    (s = r[a]) && (i = s(i) || i);
  return i;
}, et = (r, e) => (t, n) => e(t, n, r);
let $e = class extends Le {
  constructor(e, t, n, i) {
    super();
    U(this, "_popupDisposable");
    U(this, "_currentTableFilterInfo", null);
    this._componentManager = e, this._contextService = t, this._sheetCanvasPopupService = n, this._dialogService = i, this._initComponents(), this._initUIPopup();
  }
  setCurrentTableFilterInfo(e) {
    this._currentTableFilterInfo = e;
  }
  clearCurrentTableFilterInfo() {
    this._currentTableFilterInfo = null;
  }
  getCurrentTableFilterInfo() {
    return this._currentTableFilterInfo;
  }
  _initComponents() {
    [
      [ge, hi]
    ].forEach(([e, t]) => {
      this.disposeWithMe(this._componentManager.register(e, t));
    });
  }
  _initUIPopup() {
    this.disposeWithMe(this._contextService.subscribeContextValue$(ge).pipe(rn(void 0), fr()).subscribe((e) => {
      e ? this._openFilterPopup() : e === !1 && this._closeFilterPopup();
    }));
  }
  closeFilterPanel() {
    this._contextService.setContextValue(ge, !1);
  }
  _openFilterPopup() {
    const e = this._currentTableFilterInfo;
    if (!e)
      throw new Error("[SheetsFilterUIController]: no filter model when opening filter popup!");
    const { row: t, column: n } = e;
    this._popupDisposable = this._sheetCanvasPopupService.attachPopupToCell(t, n, {
      componentKey: ge,
      direction: "horizontal",
      onClickOutside: () => {
        this._dialogService.close(Ur), this._contextService.setContextValue(ge, !1);
      },
      offset: [5, 0],
      portal: !0
    });
  }
  _closeFilterPopup() {
    var e;
    (e = this._popupDisposable) == null || e.dispose(), this._popupDisposable = null, this.clearCurrentTableFilterInfo();
  }
};
$e = bi([
  et(0, N(tn)),
  et(1, wt),
  et(2, N(tr)),
  et(3, N(nn))
], $e);
const Ct = {
  type: qt.OPERATION,
  id: "sheet.operation.open-table-filter-panel",
  async handler(r, e) {
    if (!e)
      return !1;
    const { row: t, col: n, unitId: i, subUnitId: a, tableId: s } = e, c = r.get(re), u = r.get(wt), h = r.get($e);
    return c.getTable(i, s) ? (u.getContextValue(ge) || (h.setCurrentTableFilterInfo({ unitId: i, subUnitId: a, row: t, tableId: s, column: n }), u.setContextValue(ge, !0)), !0) : !1;
  }
}, Nt = {
  type: qt.OPERATION,
  id: "sheet.operation.open-table-selector",
  async handler(r) {
    var w;
    const e = r.get(pe), t = r.get(te), n = ct(e);
    if (!n)
      return !1;
    const { unitId: i, subUnitId: a, worksheet: s } = n, u = r.get(ut).getCurrentLastSelection(), h = (w = u == null ? void 0 : u.range) != null ? w : { startRow: 0, endRow: 0, startColumn: 0, endColumn: 0 }, v = kr(u) ? Pr(h, { up: !0, left: !0, right: !0, down: !0 }, s) : h, f = await Tn(r, i, a, v);
    return f ? (t.executeCommand(Qn.id, { ...f }), !0) : !1;
  }
};
async function Tn(r, e, t, n, i) {
  const a = r.get(nn), s = r.get(ne);
  return new Promise((c) => {
    const u = {
      unitId: e,
      subUnitId: t,
      range: n,
      tableId: i,
      onConfirm: (h) => {
        c(h), a.close(xe);
      },
      onCancel: () => {
        c(null), a.close(xe);
      }
    };
    a.open({
      id: xe,
      title: { title: s.t("sheets-table.selectRange") },
      draggable: !0,
      destroyOnClose: !0,
      mask: !1,
      maskClosable: !1,
      children: {
        label: {
          name: xe,
          props: u
        }
      },
      width: 300,
      onClose: () => {
        c(null), a.close(xe);
      }
    });
  });
}
const wn = "sheets-table-ui.config", At = {
  anchorHeight: 24,
  anchorBackgroundColor: "rgb(134,139,156)"
};
var mi = Object.getOwnPropertyDescriptor, pi = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? mi(e, t) : e, a = r.length - 1, s; a >= 0; a--)
    (s = r[a]) && (i = s(i) || i);
  return i;
}, fi = (r, e) => (t, n) => e(t, n, r);
let Ie = class extends Le {
  constructor(e) {
    super();
    U(this, "_refreshTable", new Cr());
    U(this, "refreshTable$", this._refreshTable.asObservable());
    this._commandService = e, this._initListener();
  }
  _initListener() {
    this.disposeWithMe(
      this._commandService.onCommandExecuted((e) => {
        if (e.id === ln.id) {
          const t = e.params, { styleName: n } = t;
          n.startsWith(Gn) && this._refreshTable.next(Math.random());
        }
      })
    );
  }
};
Ie = pi([
  fi(0, N(te))
], Ie);
const Ci = () => {
  var fe, de;
  const [r, e] = q(""), [t, n] = q(""), i = M(cr), [a, s] = q({}), c = M(ke), u = M(it), h = Te(u.anchorPosition$), d = M(te), v = M(pe), f = M(cn), w = Te(f.unitPermissionInitStateChange$, !1), S = M(re), E = M(un), C = M(Ie), $ = Te(C.refreshTable$), I = M(ne), B = M(ut), R = Te(B.selectionChanged$, [{ range: Zt(0, 0), primary: null }]), [, g] = q(Math.random()), y = M(Yt).getConfig(wn), m = (fe = y == null ? void 0 : y.anchorHeight) != null ? fe : 24, O = (de = y == null ? void 0 : y.anchorBackgroundColor) != null ? de : "rgb(53,91,183)", L = (b, P) => {
    s((A) => ({
      ...A,
      [b]: P
    }));
  };
  if (sn(() => {
    g(Math.random());
  }, [$]), !(h != null && h.length))
    return null;
  const Y = ct(v);
  if (!Y) return null;
  const { unitId: V, subUnitId: G } = Y, ce = (b, P) => {
    var Q;
    if (((Q = S.getTableById(V, b)) == null ? void 0 : Q.getDisplayName()) === P) {
      e(""), n("");
      return;
    }
    d.executeCommand(ft.id, {
      tableId: b,
      unitId: V,
      name: P
    }), n(""), e("");
  }, ue = async (b) => {
    const P = S.getTableById(V, b);
    if (!P) return;
    const A = P.getRange(), Q = await Tn(c, V, G, A, b);
    Q && d.executeCommand(ft.id, {
      tableId: b,
      unitId: V,
      updateRange: {
        newRange: Q.range
      }
    });
  };
  return w ? /* @__PURE__ */ l("div", { className: "univer-absolute univer-z-50 univer-h-0 univer-w-0", children: h.map((b) => {
    var Oe, De, p, _, z, K, se;
    const P = S.getTableById(V, b.tableId);
    if (!P) return null;
    const A = E.getRangeThemeStyle(V, P.getTableStyleId()), Q = (p = (De = (Oe = A == null ? void 0 : A.getHeaderRowStyle()) == null ? void 0 : Oe.bg) == null ? void 0 : De.rgb) != null ? p : O, Qe = (K = (z = (_ = A == null ? void 0 : A.getHeaderRowStyle()) == null ? void 0 : _.cl) == null ? void 0 : z.rgb) != null ? K : "rgb(255, 255, 255)", Ge = P.getRange();
    if (!(R != null && R.length))
      return null;
    const Xe = R[R.length - 1].range, Pe = !be.intersects(Ge, Xe) && b.y <= 20;
    return /* @__PURE__ */ T(
      "div",
      {
        className: D("univer-shadow-xs univer-absolute univer-box-border univer-cursor-pointer univer-items-center univer-rounded-xl univer-pl-2 univer-pr-2", H, {
          "univer-flex": !Pe,
          "univer-hidden": Pe
        }),
        style: {
          left: b.x,
          top: Math.max(b.y, 0),
          backgroundColor: Q,
          color: Qe,
          borderWidth: "0.5px",
          height: m ? `${m}px` : "24px"
        },
        children: [
          /* @__PURE__ */ l("div", { className: "univer-text-nowrap", children: r === b.tableId ? /* @__PURE__ */ l(
            Rt,
            {
              className: "univer-h-[18px] univer-min-w-16 univer-rounded-none",
              inputClass: "univer-h-[18px] univer-w-[80px]",
              value: t,
              onChange: (W) => n(W),
              onBlur: () => ce(b.tableId, t),
              onKeyDown: (W) => {
                W.key === "Enter" && ce(b.tableId, t);
              },
              autoFocus: r === b.tableId
            }
          ) : /* @__PURE__ */ l("div", { className: "univer-h-[18px] univer-max-w-24 univer-truncate univer-text-sm", children: b.tableName }) }),
          /* @__PURE__ */ l(
            Ne,
            {
              align: "start",
              overlay: /* @__PURE__ */ T("div", { className: "univer-pb-2 univer-pt-2", children: [
                /* @__PURE__ */ T(
                  "div",
                  {
                    className: "univer-flex univer-min-w-32 univer-cursor-pointer univer-items-center univer-gap-2 univer-pb-1 univer-pl-2 univer-pr-2 univer-pt-1 univer-text-sm hover:univer-bg-gray-200",
                    onClick: () => {
                      e(b.tableId), n(b.tableName);
                    },
                    children: [
                      /* @__PURE__ */ l(Cn, {}),
                      I.t("sheets-table.rename")
                    ]
                  }
                ),
                /* @__PURE__ */ l(
                  "div",
                  {
                    className: "univer-mb-1 univer-mt-1 univer-h-px univer-w-full univer-bg-gray-200"
                  }
                ),
                /* @__PURE__ */ T(
                  "div",
                  {
                    onClick: () => ue(b.tableId),
                    className: "univer-flex univer-min-w-32 univer-cursor-pointer univer-items-center univer-gap-2 univer-pb-1 univer-pl-2 univer-pr-2 univer-pt-1 univer-text-sm hover:univer-bg-gray-200",
                    children: [
                      /* @__PURE__ */ l(fn, {}),
                      I.t("sheets-table.updateRange")
                    ]
                  }
                ),
                /* @__PURE__ */ T(
                  "div",
                  {
                    className: "univer-flex univer-min-w-32 univer-cursor-pointer univer-items-center univer-gap-2 univer-pb-1 univer-pl-2 univer-pr-2 univer-pt-1 univer-text-sm hover:univer-bg-gray-200",
                    onClick: () => {
                      L(b.tableId, !1);
                      const W = S.getTableById(V, b.tableId);
                      if (!W) return;
                      const Ce = W.getTableConfig(), Se = {
                        id: Wr,
                        header: { title: I.t("sheets-table.tableStyle") },
                        children: {
                          label: vn,
                          oldConfig: Ce,
                          unitId: V,
                          subUnitId: G,
                          tableId: b.tableId
                        },
                        width: 330
                      };
                      i.open(Se);
                    },
                    children: [
                      /* @__PURE__ */ l(
                        _n,
                        {
                          extend: { colorChannel1: "rgb(53,91,183)" }
                        }
                      ),
                      I.t("sheets-table.setTheme")
                    ]
                  }
                ),
                /* @__PURE__ */ l(
                  "div",
                  {
                    className: "univer-mb-1 univer-mt-1 univer-h-px univer-w-full univer-bg-gray-200"
                  }
                ),
                /* @__PURE__ */ T(
                  "div",
                  {
                    className: "univer-flex univer-min-w-32 univer-cursor-pointer univer-items-center univer-pb-1 univer-pl-2 univer-pr-2 univer-pt-1 univer-text-sm hover:univer-bg-gray-200",
                    onClick: () => {
                      L(b.tableId, !1), d.executeCommand(Xn.id, {
                        tableId: b.tableId,
                        subUnitId: G,
                        unitId: V
                      });
                    },
                    children: [
                      /* @__PURE__ */ l(mn, { className: "univer-mr-2" }),
                      I.t("sheets-table.removeTable")
                    ]
                  }
                )
              ] }),
              open: (se = a[b.tableId]) != null ? se : !1,
              onOpenChange: (W) => {
                L(b.tableId, W);
              },
              children: /* @__PURE__ */ l(Mt, {})
            },
            b.tableId
          )
        ]
      },
      b.tableId
    );
  }) }) : null;
};
var Si = Object.getOwnPropertyDescriptor, _i = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Si(e, t) : e, a = r.length - 1, s; a >= 0; a--)
    (s = r[a]) && (i = s(i) || i);
  return i;
}, ee = (r, e) => (t, n) => e(t, n, r);
let it = class extends Le {
  constructor(e, t, n, i, a, s, c, u, h, d, v) {
    super();
    U(this, "_anchorVisible$", new Pt(!0));
    U(this, "_timer");
    U(this, "_anchorPosition$", new Pt([]));
    U(this, "anchorPosition$", this._anchorPosition$.asObservable());
    this._context = e, this._injector = t, this._sheetSkeletonManagerService = n, this._renderManagerService = i, this._commandService = a, this._univerInstanceService = s, this._uiPartsService = c, this._tableManager = u, this._scrollManagerService = h, this._workbookPermissionService = d, this._permissionService = v, this._initUI(), this._initListener(), this._initTableAnchor();
  }
  _initUI() {
    this.disposeWithMe(
      this._uiPartsService.registerComponent(dr.CONTENT, () => hr(Ci, this._injector))
    );
  }
  _initListener() {
    this.disposeWithMe(
      this._commandService.onCommandExecuted((e) => {
        (e.id === rr.id || e.id === ir.id) && (this._anchorVisible$.next(!1), this._timer && clearTimeout(this._timer), this._timer = setTimeout(() => {
          this._anchorVisible$.next(!0);
        }, 300));
      })
    );
  }
  _initTableAnchor() {
    this.disposeWithMe(
      It(
        this._context.unit.activeSheet$,
        this._sheetSkeletonManagerService.currentSkeleton$,
        this._scrollManagerService.validViewportScrollInfo$,
        this._tableManager.tableAdd$,
        this._tableManager.tableDelete$,
        this._tableManager.tableNameChanged$,
        this._tableManager.tableRangeChanged$,
        this._tableManager.tableThemeChanged$,
        this._workbookPermissionService.unitPermissionInitStateChange$.pipe(Sr((e) => e)),
        this._permissionService.permissionPointUpdate$.pipe(_r(300)),
        this._anchorVisible$
      ).subscribe(() => {
        var h;
        if (!this._anchorVisible$.getValue()) {
          this._anchorPosition$.next([]);
          return;
        }
        const t = this._context.unit, n = t.getActiveSheet(), i = n == null ? void 0 : n.getSheetId(), a = this._tableManager.getTableList(this._context.unitId).filter((d) => d.subUnitId === i), s = this._renderManagerService.getRenderById(this._context.unitId);
        if (!s) {
          this._anchorPosition$.next([]);
          return;
        }
        if (!((h = this._permissionService.getPermissionPoint(new on(t.getUnitId()).id)) == null ? void 0 : h.value)) {
          this._anchorPosition$.next([]);
          return;
        }
        const u = a.reduce((d, v) => {
          const { startRow: f, startColumn: w } = v.range, S = s.with(lt), E = ar(this._univerInstanceService, this._renderManagerService);
          if (!E) return d;
          const { scene: C } = E, $ = C.getViewport(An.VIEW_MAIN);
          if (!$) return d;
          const I = C == null ? void 0 : C.scaleX, B = C == null ? void 0 : C.scaleY, R = C == null ? void 0 : C.getViewportScrollXY($);
          if (!I || !C || !B || !R) return d;
          const g = S.getCurrentSkeleton();
          if (!g) return d;
          const x = g.getNoMergeCellWithCoordByIndex(f, w), y = Un(x.startX, I, R), m = Wn(x.startY, B, R) - 25 - 4;
          return m >= -10 && y >= 45 && d.push({
            x: y,
            y: m,
            tableId: v.id,
            tableName: v.name
          }), d;
        }, []);
        this._anchorPosition$.next(u);
      })
    );
  }
};
it = _i([
  ee(1, N(ke)),
  ee(2, N(lt)),
  ee(3, Gt),
  ee(4, te),
  ee(5, pe),
  ee(6, ur),
  ee(7, N(re)),
  ee(8, N(nr)),
  ee(9, N(cn)),
  ee(10, N(jt))
], it);
const Me = 16;
new Path2D("M3.30363 3C2.79117 3 2.51457 3.60097 2.84788 3.99024L6.8 8.60593V12.5662C6.8 12.7184 6.8864 12.8575 7.02289 12.9249L8.76717 13.7863C8.96655 13.8847 9.2 13.7396 9.2 13.5173V8.60593L13.1521 3.99024C13.4854 3.60097 13.2088 3 12.6964 3H3.30363Z");
class Ut {
  static drawNoSetting(e, t, n, i) {
    e.save(), Et.drawWith(e, {
      radius: 2,
      width: Me,
      height: Me,
      fill: i
    }), e.lineCap = "square", e.strokeStyle = n, e.scale(t / Me, t / Me), e.beginPath(), e.lineWidth = 1, e.lineCap = "round", e.moveTo(3, 4), e.lineTo(13, 4), e.moveTo(4.5, 8), e.lineTo(11.5, 8), e.moveTo(6, 12), e.lineTo(10, 12), e.stroke(), e.restore();
  }
  static drawIconByPath(e, t, n, i) {
    e.save(), e.strokeStyle = n, e.fillStyle = i, Et.drawWith(e, {
      radius: 2,
      width: Me,
      height: Me,
      fill: i
    }), t.forEach((a) => {
      const s = new Path2D(a);
      e.fillStyle = n, e.fill(s, "evenodd");
    }), e.restore();
  }
}
const Ti = [
  "M3.30363 3C2.79117 3 2.51457 3.60097 2.84788 3.99024L6.8 8.60593V12.5662C6.8 12.7184 6.8864 12.8575 7.02289 12.9249L8.76717 13.7863C8.96655 13.8847 9.2 13.7396 9.2 13.5173V8.60593L13.1521 3.99024C13.4854 3.60097 13.2088 3 12.6964 3H3.30363Z"
], wi = [
  "M12.4008 13.1831C12.6907 13.1831 12.9258 12.9481 12.9258 12.6581V4.60873L14.013 5.69597C14.218 5.901 14.5505 5.901 14.7555 5.69597C14.9605 5.49094 14.9605 5.15853 14.7555 4.95351L12.7721 2.97017C12.5671 2.76515 12.2347 2.76515 12.0297 2.97017L10.0463 4.95351C9.84132 5.15853 9.84132 5.49094 10.0463 5.69597C10.2514 5.901 10.5838 5.901 10.7888 5.69597L11.8758 4.60901V12.6581C11.8758 12.9481 12.1108 13.1831 12.4008 13.1831Z",
  "M1.28069 4.85447C0.842195 4.33439 1.21191 3.5391 1.89218 3.5391H8.59333C9.2736 3.5391 9.64331 4.33439 9.20482 4.85447L6.51052 8.0501V11.6601C6.51052 12.2245 5.94174 12.6114 5.41683 12.404L4.48092 12.0343C4.1756 11.9136 3.97498 11.6187 3.97498 11.2904V8.0501L1.28069 4.85447Z"
], Ii = [
  "M12.4008 2.81641C12.6907 2.81641 12.9258 3.05146 12.9258 3.34141V11.3908L14.013 10.3036C14.218 10.0986 14.5505 10.0986 14.7555 10.3036C14.9605 10.5086 14.9605 10.841 14.7555 11.046L12.7721 13.0294C12.5671 13.2344 12.2347 13.2344 12.0297 13.0294L10.0463 11.046C9.84132 10.841 9.84132 10.5086 10.0463 10.3036C10.2514 10.0986 10.5838 10.0986 10.7888 10.3036L11.8758 11.3905V3.34141C11.8758 3.05146 12.1108 2.81641 12.4008 2.81641Z",
  "M1.28069 4.85444C0.842195 4.33435 1.21191 3.53906 1.89218 3.53906H8.59333C9.2736 3.53906 9.64331 4.33435 9.20482 4.85443L6.51052 8.05006V11.6601C6.51052 12.2245 5.94174 12.6113 5.41683 12.404L4.48092 12.0342C4.1756 11.9136 3.97498 11.6186 3.97498 11.2903V8.05006L1.28069 4.85444Z"
], yi = [
  "M11.9003 13.7046C11.9003 13.9969 11.6633 14.2339 11.371 14.2339C11.0787 14.2339 10.8417 13.9969 10.8417 13.7046V3.57272L9.74577 4.66862C9.53906 4.87534 9.20391 4.87534 8.9972 4.66862C8.79048 4.46191 8.79048 4.12676 8.9972 3.92005L10.9969 1.92039C11.2036 1.71368 11.5387 1.71368 11.7454 1.92039L13.7451 3.92005C13.9518 4.12676 13.9518 4.46191 13.7451 4.66862C13.5384 4.87534 13.2032 4.87534 12.9965 4.66862L11.9003 3.57243V13.7046Z",
  "M2.69779 10.0113C2.40546 10.0113 2.16847 9.77429 2.16847 9.48196C2.16847 9.18962 2.40546 8.95264 2.69779 8.95264H6.67804C6.89213 8.95264 7.08514 9.0816 7.16707 9.2794C7.249 9.47719 7.20371 9.70486 7.05233 9.85624L3.97569 12.9329H6.67804C6.97038 12.9329 7.20736 13.1699 7.20736 13.4622C7.20736 13.7545 6.97038 13.9915 6.67804 13.9915H2.69779C2.4837 13.9915 2.29069 13.8626 2.20876 13.6648C2.12684 13.467 2.17212 13.2393 2.32351 13.0879L5.40015 10.0113H2.69779Z",
  "M5.51638 2.58693C5.23363 1.81542 4.14248 1.81543 3.85973 2.58693L2.13245 7.29995C2.03185 7.57443 2.17281 7.87849 2.4473 7.97909C2.72178 8.07969 3.02584 7.93872 3.12644 7.66424L3.64346 6.25351L3.64504 6.25351H5.73266L6.24968 7.66424C6.35027 7.93872 6.65433 8.07969 6.92882 7.97909C7.2033 7.87849 7.34426 7.57443 7.24367 7.29995L5.51638 2.58693ZM5.34467 5.19487L4.68806 3.40325L4.03144 5.19487H5.34467Z"
], Ri = [
  "M11.9003 2.29495C11.9003 2.00261 11.6633 1.76562 11.371 1.76562C11.0787 1.76562 10.8417 2.00261 10.8417 2.29495V12.4268L9.74577 11.3309C9.53906 11.1242 9.20391 11.1242 8.9972 11.3309C8.79048 11.5376 8.79048 11.8727 8.9972 12.0795L10.9969 14.0791C11.2036 14.2858 11.5387 14.2858 11.7454 14.0791L13.7451 12.0795C13.9518 11.8727 13.9518 11.5376 13.7451 11.3309C13.5384 11.1242 13.2032 11.1242 12.9965 11.3309L11.9003 12.4271V2.29495Z",
  "M2.69792 10.0113C2.40558 10.0113 2.16859 9.77429 2.16859 9.48196C2.16859 9.18962 2.40558 8.95264 2.69792 8.95264H6.67816C6.89225 8.95264 7.08526 9.0816 7.16719 9.2794C7.24912 9.47719 7.20384 9.70486 7.05245 9.85624L3.97581 12.9329H6.67816C6.9705 12.9329 7.20749 13.1699 7.20749 13.4622C7.20749 13.7545 6.9705 13.9915 6.67816 13.9915H2.69792C2.48383 13.9915 2.29082 13.8626 2.20889 13.6648C2.12696 13.467 2.17224 13.2393 2.32363 13.0879L5.40027 10.0113H2.69792Z",
  "M5.5165 2.58693C5.23375 1.81542 4.1426 1.81543 3.85985 2.58693L2.13257 7.29995C2.03197 7.57443 2.17294 7.8785 2.44742 7.97909C2.7219 8.07969 3.02596 7.93872 3.12656 7.66424L3.64358 6.25351L3.64516 6.25351H5.73278L6.2498 7.66424C6.35039 7.93872 6.65446 8.07969 6.92894 7.97909C7.20342 7.8785 7.34438 7.57443 7.24379 7.29995L5.5165 2.58693ZM5.34479 5.19487L4.68818 3.40325L4.03156 5.19487H5.34479Z"
];
var Mi = Object.getOwnPropertyDescriptor, xi = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Mi(e, t) : e, a = r.length - 1, s; a >= 0; a--)
    (s = r[a]) && (i = s(i) || i);
  return i;
}, mt = (r, e) => (t, n) => e(t, n, r);
const oe = 16, qe = 1;
let St = class extends Zn {
  constructor(e, t, n, i, a) {
    super(e, t);
    U(this, "_cellWidth", 0);
    U(this, "_cellHeight", 0);
    U(this, "_filterParams");
    U(this, "_hovered", !1);
    this._contextService = n, this._commandService = i, this._themeService = a, this.setShapeProps(t), this.onPointerDown$.subscribeEvent((s) => this.onPointerDown(s)), this.onPointerEnter$.subscribeEvent(() => this.onPointerEnter()), this.onPointerLeave$.subscribeEvent(() => this.onPointerLeave());
  }
  setShapeProps(e) {
    typeof e.cellHeight < "u" && (this._cellHeight = e.cellHeight), typeof e.cellWidth < "u" && (this._cellWidth = e.cellWidth), typeof e.filterParams < "u" && (this._filterParams = e.filterParams), this.transformByState({
      width: e.width,
      height: e.height
    });
  }
  _draw(e) {
    const t = this._cellHeight, n = this._cellWidth, i = oe - n, a = oe - t;
    e.save();
    const s = new Path2D();
    s.rect(i, a, n, t), e.clip(s);
    const { buttonState: c } = this._filterParams, u = this._themeService.getColorFromTheme("primary.600"), h = this._hovered ? this._themeService.getColorFromTheme("gray.50") : "rgba(255, 255, 255, 1.0)";
    let d;
    switch (c) {
      case Re.FilteredSortNone:
        d = Ti;
        break;
      case Re.FilteredSortAsc:
        d = wi;
        break;
      case Re.FilteredSortDesc:
        d = Ii;
        break;
      case Re.FilterNoneSortNone:
        break;
      case Re.FilterNoneSortAsc:
        d = yi;
        break;
      case Re.FilterNoneSortDesc:
        d = Ri;
        break;
    }
    d ? Ut.drawIconByPath(e, d, u, h) : c !== void 0 && Ut.drawNoSetting(e, oe, u, h), e.restore();
  }
  onPointerDown(e) {
    if (e.button === 2)
      return;
    const { row: t, col: n, unitId: i, subUnitId: a, tableId: s } = this._filterParams;
    this._contextService.getContextValue(ge) || !this._commandService.hasCommand(Ct.id) || setTimeout(() => {
      const u = {
        row: t,
        col: n,
        unitId: i,
        subUnitId: a,
        tableId: s
      };
      this._commandService.executeCommand(Ct.id, u);
    }, 200);
  }
  onPointerEnter() {
    this._hovered = !0, this.makeDirty(!0);
  }
  onPointerLeave() {
    this._hovered = !1, this.makeDirty(!0);
  }
};
St = xi([
  mt(2, wt),
  mt(3, te),
  mt(4, N(kn))
], St);
var Ni = Object.getOwnPropertyDescriptor, Ei = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Ni(e, t) : e, a = r.length - 1, s; a >= 0; a--)
    (s = r[a]) && (i = s(i) || i);
  return i;
}, Ze = (r, e) => (t, n) => e(t, n, r);
const $i = 5e3, Li = (r, e, t, n) => {
  switch (n) {
    case rt.TOP:
      return r + qe;
    case rt.MIDDLE:
      return r + Math.max(0, (t - oe) / 2);
    case rt.BOTTOM:
    default:
      return e - oe - qe;
  }
};
let _t = class extends Qt {
  constructor(e, t, n, i, a, s) {
    super();
    U(this, "_buttonRenderDisposable", null);
    U(this, "_tableFilterButtonShapes", []);
    this._context = e, this._injector = t, this._sheetSkeletonManagerService = n, this._sheetInterceptorService = i, this._tableManager = a, this._commandService = s, this._initRenderer(), this._initCommandExecuted();
  }
  dispose() {
    super.dispose(), this._disposeRendering();
  }
  _initRenderer() {
    const e = this._tableManager;
    this._sheetSkeletonManagerService.currentSkeleton$.pipe(
      we((t) => {
        var c;
        if (!t) return J(null);
        const { unit: n, unitId: i } = this._context, a = ((c = n.getActiveSheet()) == null ? void 0 : c.getSheetId()) || "", s = () => ({
          unitId: i,
          worksheetId: a,
          tableFilterRanges: this._tableManager.getSheetFilterRangeWithState(n.getUnitId(), a),
          skeleton: t.skeleton
        });
        return It(
          e.tableAdd$,
          e.tableNameChanged$,
          e.tableRangeChanged$,
          e.tableThemeChanged$,
          e.tableDelete$,
          e.tableFilterChanged$
        ).pipe(
          Tr(() => s()),
          rn(s())
        );
      }),
      wr(this.dispose$)
    ).subscribe((t) => {
      this._disposeRendering(), !(!t || !t.tableFilterRanges) && this._renderButtons(t);
    });
  }
  _initCommandExecuted() {
    this.disposeWithMe(
      this._commandService.onCommandExecuted((e) => {
        var c;
        if (e.id !== Or.id)
          return;
        const { unit: t, unitId: n } = this._context, i = ((c = t.getActiveSheet()) == null ? void 0 : c.getSheetId()) || "", a = this._sheetSkeletonManagerService.getCurrentSkeleton();
        if (!a)
          return;
        const s = {
          unitId: n,
          worksheetId: i,
          tableFilterRanges: this._tableManager.getSheetFilterRangeWithState(t.getUnitId(), i),
          skeleton: a
        };
        this._disposeRendering(), !(!s || !s.tableFilterRanges) && this._renderButtons(s);
      })
    );
  }
  _renderButtons(e) {
    const { tableFilterRanges: t, unitId: n, skeleton: i, worksheetId: a } = e, { unit: s, scene: c } = this._context, u = s.getSheetBySheetId(a);
    if (u) {
      for (const { range: h, states: d, tableId: v } of t) {
        const { startRow: f, startColumn: w, endColumn: S } = h;
        this._interceptCellContent(n, a, h);
        for (let E = w; E <= S; E++) {
          const C = `sheets-table-filter-button-${f}-${E}`, $ = sr(f, E, c, i), I = u.getCellStyle(f, E), B = (I == null ? void 0 : I.vt) || rt.BOTTOM, { startX: R, startY: g, endX: x, endY: y } = $, m = x - R, O = y - g;
          if (O <= qe || m <= qe)
            continue;
          const L = d[E - w], Y = x - oe - qe, V = Li(g, y, O, B), G = {
            left: Y,
            top: V,
            height: oe,
            width: oe,
            zIndex: $i,
            cellHeight: O,
            cellWidth: m,
            filterParams: { unitId: n, subUnitId: a, row: f, col: E, buttonState: L, tableId: v }
          }, ce = this._injector.createInstance(St, C, G);
          this._tableFilterButtonShapes.push(ce);
        }
      }
      c.addObjects(this._tableFilterButtonShapes), c.makeDirty();
    }
  }
  _interceptCellContent(e, t, n) {
    const { startRow: i, startColumn: a, endColumn: s } = n;
    this._buttonRenderDisposable = this._sheetInterceptorService.intercept(Dr.CELL_CONTENT, {
      effect: Pn.Style,
      handler: (c, u, h) => {
        const { row: d, col: v, unitId: f, subUnitId: w } = u;
        return f !== e || w !== t || d !== i || v < a || v > s || ((!c || c === u.rawData) && (c = { ...u.rawData }), c.fontRenderExtension = {
          ...c == null ? void 0 : c.fontRenderExtension,
          rightOffset: oe
        }), h(c);
      },
      priority: 10
    });
  }
  _disposeRendering() {
    var e;
    this._tableFilterButtonShapes.forEach((t) => t.dispose()), (e = this._buttonRenderDisposable) == null || e.dispose(), this._buttonRenderDisposable = null, this._tableFilterButtonShapes = [];
  }
};
_t = Ei([
  Ze(1, N(ke)),
  Ze(2, N(lt)),
  Ze(3, N(dn)),
  Ze(4, N(re)),
  Ze(5, te)
], _t);
const ki = (r) => {
  const { unitId: e, subUnitId: t, range: n, onCancel: i, onConfirm: a, tableId: s } = r, c = M(re), [u, h] = q(n), [d, v] = q(""), f = M(ne), w = M(pe);
  return /* @__PURE__ */ T(yt, { children: [
    /* @__PURE__ */ l(
      Hr,
      {
        maxRangeCount: 1,
        unitId: e,
        subUnitId: t,
        initialValue: Ht(n),
        onChange: (S, E) => {
          const C = Ht(n), $ = Vr(E).range, I = ct(w, { unitId: e, subUnitId: t });
          if (!I)
            return;
          if (I.worksheet.getMergeData().some((L) => be.intersects($, L))) {
            v(f.t("sheets-table.tableRangeWithMergeError"));
            return;
          }
          if (c.getTablesBySubunitId(e, t).some((L) => {
            if (L.getId() === s)
              return !1;
            const Y = L.getRange();
            return be.intersects($, Y);
          })) {
            v(f.t("sheets-table.tableRangeWithOtherTableError"));
            return;
          }
          const { startRow: y, endRow: m } = $;
          if (y === m) {
            v(f.t("sheets-table.tableRangeSingleRowError"));
            return;
          }
          if (C !== E) {
            if (s) {
              const L = c.getTableById(e, s);
              if (L) {
                const Y = L.getRange();
                if (be.intersects($, Y) && Y.startRow === $.startRow) {
                  h($), v(""), a({
                    unitId: e,
                    subUnitId: t,
                    range: $
                  });
                  return;
                } else {
                  v(f.t("sheets-table.updateError"));
                  return;
                }
              }
            }
            h($), v("");
          }
        },
        supportAcrossSheet: !1
      }
    ),
    d && /* @__PURE__ */ l("div", { className: "univer-mt-1 univer-text-xs univer-text-red-500", children: d }),
    /* @__PURE__ */ T("div", { className: "univer-mt-4 univer-flex univer-justify-end", children: [
      /* @__PURE__ */ l(_e, { onClick: i, children: f.t("sheets-table.cancel") }),
      /* @__PURE__ */ l(
        _e,
        {
          variant: "primary",
          onClick: () => {
            d || a({
              unitId: e,
              subUnitId: t,
              range: u
            });
          },
          className: "univer-ml-2",
          children: f.t("sheets-table.confirm")
        }
      )
    ] })
  ] });
}, Pi = (r) => {
  var P, A, Q, dt, Qe, Ge, ht, Xe, vt, Pe, Oe, De;
  const { unitId: e, subUnitId: t, tableId: n } = r, i = M(te), a = M(ne), s = M(re), c = s.getTableById(e, n), u = M(un), h = M(Ie), d = Te(u.rangeThemeMapChange$), v = Te(h.refreshTable$), f = M(On), [, w] = q(Math.random()), S = Te(s.tableThemeChanged$, {
    theme: c == null ? void 0 : c.getTableStyleId(),
    oldTheme: c == null ? void 0 : c.getTableStyleId(),
    unitId: e,
    subUnitId: t,
    tableId: n
  }), E = u.getRegisteredRangeThemes().filter((p) => p == null ? void 0 : p.startsWith(Zr)), C = u.getALLRegisteredTheme(e).filter((p) => p == null ? void 0 : p.startsWith(bt)), $ = c == null ? void 0 : c.getTableStyleId(), I = C.find((p) => p === $), B = I || C[0], R = u.getCustomRangeThemeStyle(e, B), g = (Q = (A = (P = R == null ? void 0 : R.getHeaderRowStyle()) == null ? void 0 : P.bg) == null ? void 0 : A.rgb) != null ? Q : ve, x = (Ge = (Qe = (dt = R == null ? void 0 : R.getFirstRowStyle()) == null ? void 0 : dt.bg) == null ? void 0 : Qe.rgb) != null ? Ge : ve, y = (vt = (Xe = (ht = R == null ? void 0 : R.getSecondRowStyle()) == null ? void 0 : ht.bg) == null ? void 0 : Xe.rgb) != null ? vt : ve, m = (De = (Oe = (Pe = R == null ? void 0 : R.getLastRowStyle()) == null ? void 0 : Pe.bg) == null ? void 0 : Oe.rgb) != null ? De : ve, [O, L] = q(null), Y = (p) => {
    i.executeCommand(ft.id, {
      unitId: e,
      tableId: n,
      theme: p
    });
  }, V = () => {
    if (C.length >= 11) {
      f.emit(a.t("sheets-table.customTooMore"));
      return;
    }
    const p = C[C.length - 1];
    let _ = `${bt}1`;
    if (p) {
      const K = Number(p.split("-")[2]);
      _ = `${bt}${K + 1}`;
    }
    const z = new Br(_, { ...zn });
    i.executeCommand(Kn.id, {
      unitId: e,
      tableId: n,
      themeStyle: z
    });
  }, G = (p, _) => {
    i.executeCommand(ln.id, {
      unitId: e,
      subUnitId: t,
      styleName: p,
      style: _
    });
  }, ce = (p) => {
    i.executeCommand(Jn.id, {
      unitId: e,
      tableId: n,
      themeName: p
    });
  };
  if (sn(() => {
    w(Math.random());
  }, [d, v]), !c) return null;
  const ue = new he(g).isDark(), fe = new he(x).isDark(), de = new he(y).isDark(), b = new he(m).isDark();
  return /* @__PURE__ */ T("div", { children: [
    /* @__PURE__ */ l("h5", { children: a.t("sheets-table.defaultStyle") }),
    /* @__PURE__ */ l("div", { className: "univer-flex univer-gap-2", children: E.map((p) => {
      var Ce, Se, Be, Fe, Ve, He, Ae, Ue;
      const _ = u.getDefaultRangeThemeStyle(p), z = ((Se = (Ce = _ == null ? void 0 : _.getHeaderRowStyle()) == null ? void 0 : Ce.bg) == null ? void 0 : Se.rgb) || ve, K = ((Fe = (Be = _ == null ? void 0 : _.getFirstRowStyle()) == null ? void 0 : Be.bg) == null ? void 0 : Fe.rgb) || ve, se = ((He = (Ve = _ == null ? void 0 : _.getSecondRowStyle()) == null ? void 0 : Ve.bg) == null ? void 0 : He.rgb) || ve, W = ((Ue = (Ae = _ == null ? void 0 : _.getLastRowStyle()) == null ? void 0 : Ae.bg) == null ? void 0 : Ue.rgb) || ve;
      return /* @__PURE__ */ T(
        "div",
        {
          className: D("univer-h-10 univer-w-8 univer-cursor-pointer univer-border univer-border-solid univer-border-gray-200 univer-p-px [&>div]:univer-box-border [&>div]:univer-h-2.5", {
            "univer-border-blue-500": p === S.theme
          }),
          onClick: () => Y(p),
          children: [
            /* @__PURE__ */ l("div", { style: { background: z, border: `${X}` } }),
            /* @__PURE__ */ l("div", { style: { background: K, border: `${X}` } }),
            /* @__PURE__ */ l("div", { style: { background: se, border: `${X}` } }),
            /* @__PURE__ */ l("div", { style: { background: W, border: `${X}` } })
          ]
        },
        p
      );
    }) }),
    /* @__PURE__ */ l("h5", { children: a.t("sheets-table.customStyle") }),
    /* @__PURE__ */ T("div", { className: D("univer-w-full univer-rounded-sm", H), children: [
      /* @__PURE__ */ T("div", { className: "univer-flex univer-flex-wrap univer-gap-2 univer-p-2", children: [
        /* @__PURE__ */ l(
          "div",
          {
            className: D("univer-h-10 univer-w-8 univer-cursor-pointer univer-p-px univer-text-center univer-leading-10", H),
            onClick: V,
            children: "+"
          }
        ),
        C.map((p) => {
          var Ce, Se, Be, Fe, Ve, He, Ae, Ue;
          const _ = u.getCustomRangeThemeStyle(e, p), z = (Se = (Ce = _ == null ? void 0 : _.getHeaderRowStyle()) == null ? void 0 : Ce.bg) == null ? void 0 : Se.rgb, K = (Fe = (Be = _ == null ? void 0 : _.getFirstRowStyle()) == null ? void 0 : Be.bg) == null ? void 0 : Fe.rgb, se = (He = (Ve = _ == null ? void 0 : _.getSecondRowStyle()) == null ? void 0 : Ve.bg) == null ? void 0 : He.rgb, W = (Ue = (Ae = _ == null ? void 0 : _.getLastRowStyle()) == null ? void 0 : Ae.bg) == null ? void 0 : Ue.rgb;
          return /* @__PURE__ */ T(
            "div",
            {
              className: D("univer-relative univer-h-10 univer-w-8 univer-cursor-pointer univer-border univer-border-solid univer-border-gray-200 univer-p-px", {
                "univer-border-blue-500": p === S.theme
              }),
              onClick: () => Y(p),
              onMouseEnter: () => L(p),
              onMouseLeave: () => L(null),
              children: [
                /* @__PURE__ */ l("div", { className: "univer-box-border univer-h-2.5", style: { background: z != null ? z : X, border: `${z ? X : Je}` } }),
                /* @__PURE__ */ l("div", { className: "univer-box-border univer-h-2.5", style: { background: K != null ? K : X, border: `${K ? X : Je}` } }),
                /* @__PURE__ */ l("div", { className: "univer-box-border univer-h-2.5", style: { background: se != null ? se : X, border: `${se ? X : Je}` } }),
                /* @__PURE__ */ l("div", { className: "univer-box-border univer-h-2.5", style: { background: W != null ? W : X, border: `${W ? X : Je}` } }),
                /* @__PURE__ */ l(
                  "div",
                  {
                    className: "univer-absolute univer-right-[-3px] univer-top-[-3px] univer-h-3 univer-w-3 univer-rounded-md univer-bg-gray-200 univer-text-center univer-text-xs univer-leading-[10px]",
                    style: { display: O === p ? "block" : "none" },
                    onClick: (Nn) => {
                      Nn.stopPropagation(), ce(p);
                    },
                    children: "x"
                  }
                )
              ]
            },
            p
          );
        })
      ] }),
      I && /* @__PURE__ */ T(yt, { children: [
        /* @__PURE__ */ l("div", { className: "univer-h-px univer-w-full univer-bg-gray-200" }),
        /* @__PURE__ */ T("div", { className: "univer-flex univer-flex-col univer-gap-2 univer-p-2", children: [
          /* @__PURE__ */ T("div", { className: "univer-flex univer-h-9 univer-gap-2", children: [
            /* @__PURE__ */ l(
              "div",
              {
                className: D("univer-box-border univer-h-full univer-w-52 univer-rounded-sm univer-text-center univer-leading-9", H, {
                  "univer-text-white": ue,
                  "univer-text-gray-900": !ue
                }),
                style: {
                  background: g
                },
                children: a.t("sheets-table.header")
              }
            ),
            /* @__PURE__ */ l(
              Ne,
              {
                overlay: /* @__PURE__ */ l("div", { className: "univer-p-2", children: /* @__PURE__ */ l(
                  Ke,
                  {
                    value: g,
                    onChange: (p) => {
                      const _ = kt("headerRowStyle", {
                        bg: {
                          rgb: p
                        },
                        cl: {
                          rgb: new he(p).isDark() ? "#fff" : "#000"
                        }
                      });
                      G(c.getTableStyleId(), { headerRowStyle: _ });
                    }
                  }
                ) }),
                children: /* @__PURE__ */ T(
                  "div",
                  {
                    className: D("univer-flex univer-cursor-pointer univer-items-center univer-gap-2 univer-rounded-sm univer-bg-white univer-p-1", H),
                    children: [
                      /* @__PURE__ */ l(
                        "div",
                        {
                          className: D("univer-h-4 univer-w-4 univer-rounded-lg univer-bg-gray-400", H, {
                            "univer-text-white": ue,
                            "univer-text-gray-900": !ue
                          }),
                          style: {
                            background: g
                          }
                        }
                      ),
                      /* @__PURE__ */ l(je, { className: "univer-h-2 univer-w-2" })
                    ]
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ T("div", { className: "univer-flex univer-h-9 univer-gap-2", children: [
            /* @__PURE__ */ l(
              "div",
              {
                className: D("univer-box-border univer-h-full univer-w-52 univer-rounded-sm univer-text-center univer-leading-9", H, {
                  "univer-text-white": fe,
                  "univer-text-gray-900": !fe
                }),
                style: {
                  background: x
                },
                children: a.t("sheets-table.firstLine")
              }
            ),
            /* @__PURE__ */ l(
              Ne,
              {
                overlay: /* @__PURE__ */ l("div", { className: "univer-p-2", children: /* @__PURE__ */ l(
                  Ke,
                  {
                    value: x,
                    onChange: (p) => {
                      G(c.getTableStyleId(), {
                        firstRowStyle: {
                          bg: {
                            rgb: p
                          },
                          cl: {
                            rgb: new he(p).isDark() ? "#fff" : "#000"
                          }
                        }
                      });
                    }
                  }
                ) }),
                children: /* @__PURE__ */ T(
                  "div",
                  {
                    className: D("univer-flex univer-cursor-pointer univer-items-center univer-gap-2 univer-rounded-sm univer-bg-white univer-p-1", H),
                    children: [
                      /* @__PURE__ */ l(
                        "div",
                        {
                          className: D("univer-h-4 univer-w-4 univer-rounded-lg univer-bg-gray-400", H),
                          style: { background: x }
                        }
                      ),
                      /* @__PURE__ */ l(je, { className: "univer-h-2 univer-w-2" })
                    ]
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ T("div", { className: "univer-flex univer-h-9 univer-gap-2", children: [
            /* @__PURE__ */ l(
              "div",
              {
                className: D("univer-box-border univer-h-full univer-w-52 univer-rounded-sm univer-text-center univer-leading-9", H, {
                  "univer-text-white": de,
                  "univer-text-gray-900": !de
                }),
                style: {
                  background: y
                },
                children: a.t("sheets-table.secondLine")
              }
            ),
            /* @__PURE__ */ l(
              Ne,
              {
                overlay: /* @__PURE__ */ l("div", { className: "univer-p-2", children: /* @__PURE__ */ l(
                  Ke,
                  {
                    value: y,
                    onChange: (p) => G(c.getTableStyleId(), {
                      secondRowStyle: {
                        bg: {
                          rgb: p
                        },
                        cl: {
                          rgb: new he(p).isDark() ? "#fff" : "#000"
                        }
                      }
                    })
                  }
                ) }),
                children: /* @__PURE__ */ T(
                  "div",
                  {
                    className: D("univer-flex univer-cursor-pointer univer-items-center univer-gap-2 univer-rounded-sm univer-bg-white univer-p-1", H),
                    children: [
                      /* @__PURE__ */ l(
                        "div",
                        {
                          className: D("univer-h-4 univer-w-4 univer-rounded-lg univer-bg-gray-400", H),
                          style: { background: y }
                        }
                      ),
                      /* @__PURE__ */ l(je, { className: "univer-h-2 univer-w-2" })
                    ]
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ T("div", { className: "univer-flex univer-h-9 univer-gap-2", children: [
            /* @__PURE__ */ l(
              "div",
              {
                className: D("univer-box-border univer-h-full univer-w-52 univer-rounded-sm univer-text-center univer-leading-9", H, {
                  "univer-text-white": b,
                  "univer-text-gray-900": !b
                }),
                style: {
                  background: m
                },
                children: a.t("sheets-table.footer")
              }
            ),
            /* @__PURE__ */ l(
              Ne,
              {
                overlay: /* @__PURE__ */ l("div", { className: "univer-p-2", children: /* @__PURE__ */ l(
                  Ke,
                  {
                    value: m,
                    onChange: (p) => {
                      const _ = kt("lastRowStyle", {
                        bg: {
                          rgb: p
                        },
                        cl: {
                          rgb: new he(p).isDark() ? "#fff" : "#000"
                        }
                      });
                      G(c.getTableStyleId(), { lastRowStyle: _ });
                    }
                  }
                ) }),
                children: /* @__PURE__ */ T(
                  "div",
                  {
                    className: D("univer-flex univer-cursor-pointer univer-items-center univer-gap-2 univer-rounded-sm univer-bg-white univer-p-1", H),
                    children: [
                      /* @__PURE__ */ l(
                        "div",
                        {
                          className: D("univer-h-4 univer-w-4 univer-rounded-lg univer-bg-gray-400", H),
                          style: { background: m }
                        }
                      ),
                      /* @__PURE__ */ l(je, { className: "univer-h-2 univer-w-2" })
                    ]
                  }
                )
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
}, In = "sheet.table.context-insert_menu-id", yn = "sheet.table.context-remove_menu-id";
function Oi(r) {
  return {
    id: Nt.id,
    type: ye.BUTTON,
    icon: hn,
    tooltip: "sheets-table.title",
    title: "sheets-table.title",
    hidden$: vr(r, Ye.UNIVER_SHEET),
    disabled$: or(r, {}, !0)
  };
}
function Di(r) {
  return {
    id: In,
    type: ye.SUBITEMS,
    icon: "InsertDoubleIcon",
    title: "sheets-table.insert.main",
    hidden$: Rn(r)
  };
}
function Bi(r) {
  return {
    id: yn,
    type: ye.SUBITEMS,
    icon: "ReduceDoubleIcon",
    title: "sheets-table.remove.main",
    hidden$: Rn(r)
  };
}
function Fi(r) {
  return {
    id: Jt.id,
    type: ye.BUTTON,
    title: "sheets-table.insert.row",
    hidden$: Mn(r)
  };
}
function Vi(r) {
  return {
    id: Kt.id,
    title: "sheets-table.insert.col",
    type: ye.BUTTON
  };
}
function Hi(r) {
  return {
    id: zt.id,
    type: ye.BUTTON,
    title: "sheets-table.remove.row",
    hidden$: Mn(r)
  };
}
function Ai(r) {
  return {
    id: Xt.id,
    title: "sheets-table.remove.col",
    type: ye.BUTTON
  };
}
function Rn(r) {
  const e = r.get(ut);
  return r.get(pe).getCurrentTypeOfUnit$(Ye.UNIVER_SHEET).pipe(
    we((i) => i ? i.activeSheet$.pipe(
      we((a) => a ? e.selectionMoveEnd$.pipe(
        we((s) => {
          if (!s.length || s.length > 1) return J(!0);
          const u = s[0].range, d = r.get(en).getContainerTableWithRange(i.getUnitId(), a.getSheetId(), u);
          return J(!d);
        })
      ) : J(!0))
    ) : J(!0))
  );
}
function Mn(r) {
  const e = r.get(ut);
  return r.get(pe).getCurrentTypeOfUnit$(Ye.UNIVER_SHEET).pipe(
    we((i) => i ? i.activeSheet$.pipe(
      we((a) => a ? e.selectionMoveEnd$.pipe(
        we((s) => {
          if (!s.length || s.length > 1) return J(!0);
          const u = s[0].range, d = r.get(en).getContainerTableWithRange(i.getUnitId(), a.getSheetId(), u);
          if (!d)
            return J(!0);
          const v = d.getRange();
          return u.startRow === v.startRow ? J(!0) : J(!1);
        })
      ) : J(!0))
    ) : J(!0))
  );
}
const Ui = {
  [mr.ORGANIZATION]: {
    [Nt.id]: {
      order: 0,
      menuItemFactory: Oi
    }
  },
  [gr.MAIN_AREA]: {
    [br.LAYOUT]: {
      [In]: {
        order: 5,
        menuItemFactory: Di,
        [Jt.id]: {
          order: 1,
          menuItemFactory: Fi
        },
        [Kt.id]: {
          order: 2,
          menuItemFactory: Vi
        }
      },
      [yn]: {
        order: 6,
        menuItemFactory: Bi,
        [zt.id]: {
          order: 1,
          menuItemFactory: Hi
        },
        [Xt.id]: {
          order: 2,
          menuItemFactory: Ai
        }
      }
    }
  }
};
var Wi = Object.getOwnPropertyDescriptor, Zi = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Wi(e, t) : e, a = r.length - 1, s; a >= 0; a--)
    (s = r[a]) && (i = s(i) || i);
  return i;
}, Wt = (r, e) => (t, n) => e(t, n, r);
let at = class extends Le {
  constructor(r, e) {
    super(), this._componentManager = r, this._menuManagerService = e, this._initComponents(), this._initMenu();
  }
  _initComponents() {
    [
      [hn, Sn],
      [xe, ki],
      [vn, Pi]
    ].forEach(([r, e]) => {
      this.disposeWithMe(this._componentManager.register(r, e));
    });
  }
  _initMenu() {
    this._menuManagerService.mergeMenu(Ui);
  }
};
at = Zi([
  Wt(0, N(tn)),
  Wt(1, N(pr))
], at);
var ji = Object.getOwnPropertyDescriptor, qi = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? ji(e, t) : e, a = r.length - 1, s; a >= 0; a--)
    (s = r[a]) && (i = s(i) || i);
  return i;
}, tt = (r, e) => (t, n) => e(t, n, r);
let Tt = class extends Qt {
  constructor(r, e, t, n, i) {
    super(), this._context = r, this._injector = e, this._sheetSkeletonManagerService = t, this._tableManager = n, this._sheetTableThemeUIController = i, this._initListener();
  }
  _dirtySkeleton() {
    var e;
    (e = this._context.mainComponent) == null || e.makeDirty();
    const r = this._sheetSkeletonManagerService.getCurrentParam();
    if (r) {
      const t = { ...r, dirty: !0 };
      this._sheetSkeletonManagerService.reCalculate(t);
    }
  }
  _initListener() {
    const r = this._tableManager, e = this._dirtySkeleton.bind(this);
    this.disposeWithMe(
      It(
        r.tableAdd$,
        r.tableDelete$,
        r.tableNameChanged$,
        r.tableRangeChanged$,
        r.tableThemeChanged$,
        r.tableFilterChanged$,
        r.tableInitStatus$,
        this._sheetTableThemeUIController.refreshTable$
      ).subscribe(
        e
      )
    );
  }
};
Tt = qi([
  tt(1, N(ke)),
  tt(2, N(lt)),
  tt(3, N(re)),
  tt(4, N(Ie))
], Tt);
var Yi = Object.getOwnPropertyDescriptor, Qi = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Yi(e, t) : e, a = r.length - 1, s; a >= 0; a--)
    (s = r[a]) && (i = s(i) || i);
  return i;
}, pt = (r, e) => (t, n) => e(t, n, r);
let st = class extends Le {
  constructor(r, e, t) {
    super(), this._sheetInterceptorService = r, this._univerInstanceService = e, this._tableManager = t, this._initSelectionChange();
  }
  _initSelectionChange() {
    this.disposeWithMe(
      this._sheetInterceptorService.interceptCommand({
        getMutations: (r) => {
          if (r.id === lr.id) {
            const e = ct(this._univerInstanceService);
            if (!e)
              return { redos: [], undos: [] };
            const t = r.params, { range: n } = t, { unitId: i, subUnitId: a, worksheet: s } = e, u = this._tableManager.getTablesBySubunitId(i, a).find((h) => {
              const d = h.getRange();
              return be.contains(d, n);
            });
            if (u) {
              const h = u.getRange(), d = {
                ...h,
                startRow: h.startRow + 1
              };
              return be.equals(h, n) ? { undos: [], redos: [] } : be.equals(d, n) ? {
                undos: [],
                redos: [
                  {
                    id: Ft.id,
                    params: {
                      unitId: i,
                      subUnitId: a,
                      selections: [
                        {
                          range: h,
                          primary: Bt(h, s)
                        }
                      ]
                    }
                  }
                ]
              } : {
                undos: [],
                redos: [
                  {
                    id: Ft.id,
                    params: {
                      unitId: i,
                      subUnitId: a,
                      selections: [
                        {
                          range: d,
                          primary: Bt(d, s)
                        }
                      ]
                    }
                  }
                ]
              };
            }
          }
          return { redos: [], undos: [] };
        }
      })
    );
  }
};
st = Qi([
  pt(0, N(dn)),
  pt(1, N(pe)),
  pt(2, N(re))
], st);
var Gi = Object.defineProperty, Xi = Object.getOwnPropertyDescriptor, zi = (r, e, t) => e in r ? Gi(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, Ki = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Xi(e, t) : e, a = r.length - 1, s; a >= 0; a--)
    (s = r[a]) && (i = s(i) || i);
  return i;
}, nt = (r, e) => (t, n) => e(t, n, r), xn = (r, e, t) => zi(r, typeof e != "symbol" ? e + "" : e, t);
let ot = class extends Bn {
  constructor(r = At, e, t, n, i) {
    super(), this._config = r, this._injector = e, this._commandService = t, this._configService = n, this._renderManagerService = i;
    const { menu: a, ...s } = Fn(
      {},
      At,
      this._config
    );
    a && this._configService.setConfig("menu", a, { merge: !0 }), this._configService.setConfig(wn, s), this._initRegisterCommand();
  }
  onStarting() {
    Vn(this._injector, [
      [$e],
      [Ee],
      [at],
      [Ie],
      [st]
    ]);
  }
  onReady() {
    Hn(this._injector, [
      [$e],
      [Ee],
      [at],
      [Ie],
      [st]
    ]);
  }
  onRendered() {
    this._registerRenderModules();
  }
  _registerRenderModules() {
    const r = [
      [_t],
      [Tt]
    ];
    this._config.hideAnchor !== !0 && r.push([it]), r.forEach((e) => {
      this.disposeWithMe(this._renderManagerService.registerRenderModule(Ye.UNIVER_SHEET, e));
    });
  }
  _initRegisterCommand() {
    [
      Ct,
      Nt
    ].forEach((r) => this._commandService.registerCommand(r));
  }
};
xn(ot, "pluginName", Ar);
xn(ot, "type", Ye.UNIVER_SHEET);
ot = Ki([
  Dn(er),
  nt(1, N(ke)),
  nt(2, N(te)),
  nt(3, Yt),
  nt(4, Gt)
], ot);
export {
  ot as UniverSheetsTableUIPlugin
};
