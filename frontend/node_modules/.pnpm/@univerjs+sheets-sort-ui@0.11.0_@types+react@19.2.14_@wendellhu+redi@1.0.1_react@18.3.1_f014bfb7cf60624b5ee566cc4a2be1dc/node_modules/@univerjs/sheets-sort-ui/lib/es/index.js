var Ve = Object.defineProperty;
var Ge = (e, t, r) => t in e ? Ve(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Y = (e, t, r) => Ge(e, typeof t != "symbol" ? t + "" : t, r);
import { LocaleService as H, IUniverInstanceService as xe, Inject as M, ICommandService as _e, Disposable as We, UniverInstanceType as q, Tools as qe, LocaleType as me, CommandType as I, throttle as ze, Injector as ye, RxDisposable as Ye, DependentOn as Xe, IConfigService as Ke, Plugin as Je, merge as Qe } from "@univerjs/core";
import { jsxs as g, jsx as c } from "react/jsx-runtime";
import { SheetsSelectionsService as et, getPrimaryForRange as tt, SetSelectionsOperation as rt, expandToContinuousRange as ve, getSheetCommandTarget as nt, RangeProtectionPermissionEditPoint as b, WorksheetSortPermission as O, WorksheetEditPermission as N, WorkbookEditablePermission as L } from "@univerjs/sheets";
import { SheetsSortService as Ie, SortType as $, SortRangeCommand as ot, UniverSheetsSortPlugin as st } from "@univerjs/sheets-sort";
import { useDependency as R, IConfirmService as it, useObservable as ct, MenuItemType as f, getMenuHiddenObservable as we, ContextMenuPosition as at, ContextMenuGroup as lt, RibbonDataGroup as dt, IMenuManagerService as ut, IDialogService as ht, ILayoutService as gt, IUIPartsService as Ct, ComponentManager as mt, connectInjector as vt } from "@univerjs/ui";
import { BehaviorSubject as ft, takeUntil as St } from "rxjs";
import { RadioGroup as Me, Radio as F, Checkbox as pt, clsx as X, DraggableList as xt, scrollbarClassName as Re, Button as V, Dropdown as _t, ButtonGroup as yt } from "@univerjs/design";
import { useState as P, useRef as Ee, createElement as p, forwardRef as w, useCallback as T, useEffect as Te } from "react";
import { serializeRange as It } from "@univerjs/engine-formula";
import { getCurrentRangeDisable$ as k, getCurrentExclusiveRangeInterest$ as wt, SheetsRenderService as Mt, SheetsUIPart as Rt } from "@univerjs/sheets-ui";
const Et = (e) => {
  const [t, r] = P("0"), n = R(H);
  return /* @__PURE__ */ g("div", { className: "univer-text-sm", children: [
    /* @__PURE__ */ c("div", { className: "extend-confirm-desc", children: n.t("sheets-sort.dialog.sort-reminder-desc") }),
    /* @__PURE__ */ g(
      Me,
      {
        className: "univer-mt-4",
        value: t,
        direction: "vertical",
        onChange: (o) => {
          r(o), e.onChange(o);
        },
        children: [
          /* @__PURE__ */ c(F, { value: "0", children: n.t("sheets-sort.dialog.sort-reminder-no") }),
          /* @__PURE__ */ c(F, { value: "1", children: n.t("sheets-sort.dialog.sort-reminder-ext") })
        ]
      }
    )
  ] });
};
var Tt = Object.getOwnPropertyDescriptor, bt = (e, t, r, n) => {
  for (var o = n > 1 ? void 0 : n ? Tt(t, r) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = i(o) || o);
  return o;
}, D = (e, t) => (r, n) => t(r, n, e);
const B = {
  MERGE_ERROR: "sheets-sort.error.merge-size",
  EMPTY_ERROR: "sheets-sort.error.empty",
  SINGLE_ERROR: "sheets-sort.error.single",
  FORMULA_ARRAY: "sheets-sort.error.formula-array"
};
let C = class extends We {
  constructor(t, r, n, o, s, i) {
    super();
    Y(this, "_customSortState$", new ft(null));
    Y(this, "customSortState$", this._customSortState$.asObservable());
    this._univerInstanceService = t, this._confirmService = r, this._selectionManagerService = n, this._sheetsSortService = o, this._localeService = s, this._commandService = i;
  }
  async triggerSortDirectly(t, r, n) {
    const o = n || await this._detectSortLocation(r);
    if (!o || !this._check(o))
      return !1;
    const i = {
      orderRules: [{
        type: t ? $.ASC : $.DESC,
        colIndex: o.colIndex
      }],
      range: o.range
    };
    return this._sheetsSortService.applySort(i, o.unitId, o.subUnitId), !0;
  }
  async triggerSortCustomize() {
    const t = await this._detectSortLocation();
    return !t || !this._check(t) ? !1 : (this.showCustomSortPanel(t), !0);
  }
  customSortState() {
    return this._customSortState$.getValue();
  }
  getTitles(t) {
    var l, u;
    const r = (l = this.customSortState()) == null ? void 0 : l.location;
    if (!r)
      return [];
    const { unitId: n, subUnitId: o, range: s } = r, i = (u = this._univerInstanceService.getUnit(n)) == null ? void 0 : u.getSheetBySheetId(o);
    if (!i)
      return [];
    const a = Ot(this._localeService);
    return Array.from({ length: s.endColumn - s.startColumn + 1 }, (_, v) => {
      var m;
      const E = (m = i.getCell(s.startRow, v + s.startColumn)) == null ? void 0 : m.v;
      return {
        index: v + s.startColumn,
        label: t ? `${E != null ? E : a(v + s.startColumn)}` : a(v + s.startColumn)
      };
    });
  }
  setSelection(t, r, n) {
    var i;
    const o = (i = this._univerInstanceService.getUnit(t)) == null ? void 0 : i.getSheetBySheetId(r);
    if (!o)
      return;
    const s = {
      unitId: t,
      subUnitId: r,
      selections: [{ range: n, primary: tt(n, o), style: null }]
    };
    this._commandService.executeCommand(rt.id, s);
  }
  async showCheckError(t) {
    return await this._confirmService.confirm({
      id: "sort-range-check-error",
      title: {
        title: this._localeService.t("info.tooltip")
      },
      children: {
        title: /* @__PURE__ */ c("div", { children: this._localeService.t(t) })
      },
      cancelText: this._localeService.t("sheets-sort.dialog.cancel"),
      confirmText: this._localeService.t("sheets-sort.dialog.confirm")
    });
  }
  async showExtendConfirm() {
    let t = !1;
    return await this._confirmService.confirm({
      id: "extend-sort-range-dialog",
      title: {
        title: this._localeService.t("sheets-sort.dialog.sort-reminder")
      },
      children: {
        title: /* @__PURE__ */ c(
          Et,
          {
            onChange: (n) => {
              t = n === "1";
            }
          }
        )
      },
      width: 400,
      cancelText: this._localeService.t("sheets-sort.dialog.cancel"),
      confirmText: this._localeService.t("sheets-sort.dialog.confirm")
    }) ? t ? "extend" : "keep" : "cancel";
  }
  showCustomSortPanel(t) {
    this._customSortState$.next({ location: t, show: !0 });
  }
  closeCustomSortPanel() {
    this._customSortState$.next({ show: !1 });
  }
  _check(t) {
    return this._sheetsSortService.singleCheck(t) ? this._sheetsSortService.mergeCheck(t) ? this._sheetsSortService.formulaCheck(t) ? this._sheetsSortService.emptyCheck(t) ? !0 : (this.showCheckError(B.EMPTY_ERROR), !1) : (this.showCheckError(B.FORMULA_ARRAY), !1) : (this.showCheckError(B.MERGE_ERROR), !1) : (this.showCheckError(B.SINGLE_ERROR), !1);
  }
  async _detectSortLocation(t) {
    const r = this._univerInstanceService.getCurrentUnitForType(q.UNIVER_SHEET), n = r.getActiveSheet(), o = r.getUnitId(), s = n.getSheetId(), i = this._selectionManagerService.getCurrentLastSelection();
    if (!i)
      return null;
    let a;
    if (t === !0)
      a = ve(i.range, { up: !0, down: !0, left: !0, right: !0 }, n), this.setSelection(o, s, a);
    else if (t === !1)
      a = i.range;
    else {
      const l = await this.showExtendConfirm();
      if (l === "cancel")
        return null;
      l === "keep" ? a = i.range : (a = ve(i.range, { up: !0, down: !0, left: !0, right: !0 }, n), this.setSelection(o, s, a));
    }
    return {
      range: a,
      unitId: o,
      subUnitId: s,
      colIndex: i.primary.actualColumn
    };
  }
};
C = bt([
  D(0, xe),
  D(1, it),
  D(2, M(et)),
  D(3, M(Ie)),
  D(4, M(H)),
  D(5, _e)
], C);
function Ot(e) {
  return (t) => {
    const r = qe.chatAtABC(t);
    switch (e.getCurrentLocale()) {
      case me.ZH_CN:
        return `"${r}"列`;
      case me.EN_US:
        return `Column "${r}"`;
      default:
        return `Column "${r}"`;
    }
  };
}
const J = {
  id: "sheet.command.sort-range-asc",
  type: I.COMMAND,
  handler: async (e) => await e.get(C).triggerSortDirectly(!0, !1)
}, Q = {
  id: "sheet.command.sort-range-asc-ext",
  type: I.COMMAND,
  handler: async (e) => await e.get(C).triggerSortDirectly(!0, !0)
}, ee = {
  id: "sheet.command.sort-range-desc",
  type: I.COMMAND,
  handler: async (e) => await e.get(C).triggerSortDirectly(!1, !1)
}, te = {
  id: "sheet.command.sort-range-desc-ext",
  type: I.COMMAND,
  handler: async (e) => await e.get(C).triggerSortDirectly(!1, !0)
}, re = {
  id: "sheet.command.sort-range-custom",
  type: I.COMMAND,
  handler: async (e) => await e.get(C).triggerSortCustomize()
}, ne = {
  id: "sheet.command.sort-range-asc-ctx",
  type: I.COMMAND,
  handler: async (e) => await e.get(C).triggerSortDirectly(!0, !1)
}, oe = {
  id: "sheet.command.sort-range-asc-ext-ctx",
  type: I.COMMAND,
  handler: async (e) => await e.get(C).triggerSortDirectly(!0, !0)
}, se = {
  id: "sheet.command.sort-range-desc-ctx",
  type: I.COMMAND,
  handler: async (e) => await e.get(C).triggerSortDirectly(!1, !1)
}, ie = {
  id: "sheet.command.sort-range-desc-ext-ctx",
  type: I.COMMAND,
  handler: async (e) => await e.get(C).triggerSortDirectly(!1, !0)
}, ce = {
  id: "sheet.command.sort-range-custom-ctx",
  type: I.COMMAND,
  handler: async (e) => await e.get(C).triggerSortCustomize()
}, Nt = "sheets-sort-ui.config", fe = {};
function x({ ref: e, ...t }) {
  const { icon: r, id: n, className: o, extend: s, ...i } = t, a = `univerjs-icon univerjs-icon-${n} ${o || ""}`.trim(), l = Ee(`_${Dt()}`);
  return be(r, `${n}`, {
    defIds: r.defIds,
    idSuffix: l.current
  }, {
    ref: e,
    className: a,
    ...i
  }, s);
}
function be(e, t, r, n, o) {
  return p(e.tag, {
    key: t,
    ...Lt(e, r, o),
    ...n
  }, (kt(e, r).children || []).map((s, i) => be(s, `${t}-${e.tag}-${i}`, r, void 0, o)));
}
function Lt(e, t, r) {
  const n = { ...e.attrs };
  r != null && r.colorChannel1 && n.fill === "colorChannel1" && (n.fill = r.colorChannel1), e.tag === "mask" && n.id && (n.id = n.id + t.idSuffix), Object.entries(n).forEach(([s, i]) => {
    s === "mask" && typeof i == "string" && (n[s] = i.replace(/url\(#(.*)\)/, `url(#$1${t.idSuffix})`));
  });
  const { defIds: o } = t;
  return !o || o.length === 0 || (e.tag === "use" && n["xlink:href"] && (n["xlink:href"] = n["xlink:href"] + t.idSuffix), Object.entries(n).forEach(([s, i]) => {
    typeof i == "string" && (n[s] = i.replace(/url\(#(.*)\)/, `url(#$1${t.idSuffix})`));
  })), n;
}
function kt(e, t) {
  var n;
  const { defIds: r } = t;
  return !r || r.length === 0 ? e : e.tag === "defs" && ((n = e.children) != null && n.length) ? {
    ...e,
    children: e.children.map((o) => typeof o.attrs.id == "string" && r && r.includes(o.attrs.id) ? {
      ...o,
      attrs: {
        ...o.attrs,
        id: o.attrs.id + t.idSuffix
      }
    } : o)
  } : e;
}
function Dt() {
  return Math.random().toString(36).substring(2, 8);
}
x.displayName = "UniverIcon";
const $t = {
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
}, ae = w(function(t, r) {
  return p(x, Object.assign({}, t, {
    id: "ascending-icon",
    ref: r,
    icon: $t
  }));
});
ae.displayName = "AscendingIcon";
const Ht = {
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
      d: "M14.1544 3.75557C14.3887 3.98988 14.3887 4.36978 14.1544 4.6041L6.51409 12.2444C6.40157 12.3569 6.24896 12.4201 6.08983 12.4201C5.9307 12.4201 5.77808 12.3569 5.66556 12.2444L1.84541 8.42425C1.6111 8.18993 1.6111 7.81003 1.84541 7.57572C2.07973 7.34141 2.45963 7.34141 2.69394 7.57572L6.08983 10.9716L13.3059 3.75557C13.5402 3.52126 13.9201 3.52126 14.1544 3.75557Z",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }
  }]
}, Oe = w(function(t, r) {
  return p(x, Object.assign({}, t, {
    id: "check-mark-icon",
    ref: r,
    icon: Ht
  }));
});
Oe.displayName = "CheckMarkIcon";
const At = {
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
        d: "M9.77445 9.24306L9.77457 11.9573C9.77458 12.2887 9.50597 12.5574 9.17459 12.5574C8.84322 12.5574 8.57458 12.2888 8.57457 11.9574L8.57439 7.79509C8.57438 7.46372 8.84299 7.19508 9.17436 7.19507C9.3281 7.19493 9.48196 7.25351 9.59925 7.3708L11.3465 9.11808C11.5808 9.3524 11.5808 9.7323 11.3465 9.96661C11.1122 10.2009 10.7323 10.2009 10.498 9.96661L9.77445 9.24306Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M6.22584 10.5094L6.22572 7.79514C6.22571 7.46377 6.49433 7.19513 6.8257 7.19512C7.15707 7.1951 7.42571 7.46372 7.42572 7.79509L7.4259 11.9574C7.42592 12.2888 7.1573 12.5574 6.82593 12.5574C6.67228 12.5575 6.51828 12.4989 6.40104 12.3817L4.65376 10.6344C4.41945 10.4001 4.41945 10.0202 4.65376 9.78588C4.88808 9.55156 5.26798 9.55156 5.50229 9.78588L6.22584 10.5094Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M1.14014 3.73989C1.14014 2.30396 2.3042 1.13989 3.74014 1.13989H12.2601C13.6961 1.13989 14.8601 2.30395 14.8601 3.73989V12.2599C14.8601 13.6958 13.6961 14.8599 12.2601 14.8599H3.74014C2.3042 14.8599 1.14014 13.6958 1.14014 12.2599V3.73989ZM2.34014 5.86724V12.2599C2.34014 13.0331 2.96694 13.6599 3.74014 13.6599H12.2601C13.0333 13.6599 13.6601 13.0331 13.6601 12.2599V5.86724H2.34014ZM13.6601 4.66724H2.34014V3.73989C2.34014 2.9667 2.96694 2.33989 3.74014 2.33989H12.2601C13.0333 2.33989 13.6601 2.96669 13.6601 3.73989V4.66724Z",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    }
  ]
}, Ne = w(function(t, r) {
  return p(x, Object.assign({}, t, {
    id: "custom-sort-icon",
    ref: r,
    icon: At
  }));
});
Ne.displayName = "CustomSortIcon";
const Ut = {
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
        d: "M4.75332 5.22217C3.86966 5.22217 3.15332 5.93851 3.15332 6.82217V13.1332C3.15332 14.2377 4.04875 15.1332 5.15332 15.1332H10.8465C11.9511 15.1332 12.8465 14.2377 12.8465 13.1331V6.82217C12.8465 5.93851 12.1302 5.22217 11.2465 5.22217H4.75332ZM4.35332 6.82217C4.35332 6.60125 4.53241 6.42217 4.75332 6.42217H11.2465C11.4674 6.42217 11.6465 6.60125 11.6465 6.82217V13.1331C11.6465 13.575 11.2884 13.9331 10.8465 13.9331H5.15332C4.71149 13.9331 4.35332 13.575 4.35332 13.1332V6.82217Z",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    }
  ]
}, Le = w(function(t, r) {
  return p(x, Object.assign({}, t, {
    id: "delete-empty-icon",
    ref: r,
    icon: Ut
  }));
});
Le.displayName = "DeleteEmptyIcon";
const Pt = {
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
}, le = w(function(t, r) {
  return p(x, Object.assign({}, t, {
    id: "descending-icon",
    ref: r,
    icon: Pt
  }));
});
le.displayName = "DescendingIcon";
const Zt = {
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
      d: "M1.9064 3.20024C1.57503 3.20024 1.3064 2.93161 1.3064 2.60024C1.3064 2.26887 1.57503 2.00024 1.9064 2.00024H4.57306C4.90443 2.00024 5.17306 2.26887 5.17306 2.60024C5.17306 2.93161 4.90443 3.20024 4.57306 3.20024H1.9064ZM1.3064 6.19985C1.3064 6.53122 1.57503 6.79985 1.9064 6.79985H5.9064C6.23777 6.79985 6.5064 6.53122 6.5064 6.19985C6.5064 5.86848 6.23777 5.59985 5.9064 5.59985H1.9064C1.57503 5.59985 1.3064 5.86848 1.3064 6.19985ZM1.9064 10.3997C1.57503 10.3997 1.3064 10.1311 1.3064 9.79971C1.3064 9.46834 1.57503 9.19971 1.9064 9.19971H7.23973C7.5711 9.19971 7.83973 9.46834 7.83973 9.79971C7.83973 10.1311 7.5711 10.3997 7.23973 10.3997H1.9064ZM1.9064 13.9996C1.57503 13.9996 1.3064 13.7309 1.3064 13.3996C1.3064 13.0682 1.57503 12.7996 1.9064 12.7996H8.57306C8.90443 12.7996 9.17306 13.0682 9.17306 13.3996C9.17306 13.7309 8.90443 13.9996 8.57306 13.9996H1.9064Z",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }
  }, {
    tag: "path",
    attrs: {
      fill: "currentColor",
      d: "M12.4267 14.2667C12.4267 14.5981 12.1581 14.8667 11.8267 14.8667C11.4953 14.8667 11.2267 14.5981 11.2267 14.2667V3.18198L9.98447 4.42422C9.75015 4.65853 9.37026 4.65853 9.13594 4.42422C8.90163 4.1899 8.90163 3.81 9.13594 3.57569L11.4026 1.30902C11.6369 1.07471 12.0168 1.07471 12.2511 1.30902L14.5178 3.57569C14.7521 3.81 14.7521 4.1899 14.5178 4.42422C14.2835 4.65853 13.9036 4.65853 13.6693 4.42422L12.4267 3.18165V14.2667Z"
    }
  }]
}, ke = w(function(t, r) {
  return p(x, Object.assign({}, t, {
    id: "expand-ascending-icon",
    ref: r,
    icon: Zt
  }));
});
ke.displayName = "ExpandAscendingIcon";
const jt = {
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
      d: "M1.9064 12.7998C1.57503 12.7998 1.3064 13.0684 1.3064 13.3998C1.3064 13.7311 1.57503 13.9998 1.9064 13.9998H4.57306C4.90443 13.9998 5.17306 13.7311 5.17306 13.3998C5.17306 13.0684 4.90443 12.7998 4.57306 12.7998H1.9064ZM1.3064 9.80015C1.3064 9.46878 1.57503 9.20015 1.9064 9.20015H5.9064C6.23777 9.20015 6.5064 9.46878 6.5064 9.80015C6.5064 10.1315 6.23777 10.4001 5.9064 10.4001H1.9064C1.57503 10.4001 1.3064 10.1315 1.3064 9.80015ZM1.9064 5.60029C1.57503 5.60029 1.3064 5.86892 1.3064 6.20029C1.3064 6.53166 1.57503 6.80029 1.9064 6.80029H7.23973C7.5711 6.80029 7.83973 6.53166 7.83973 6.20029C7.83973 5.86892 7.5711 5.60029 7.23973 5.60029H1.9064ZM1.9064 2.00044C1.57503 2.00044 1.3064 2.26907 1.3064 2.60044C1.3064 2.93181 1.57503 3.20044 1.9064 3.20044H8.57306C8.90443 3.20044 9.17306 2.93181 9.17306 2.60044C9.17306 2.26907 8.90443 2.00044 8.57306 2.00044H1.9064Z",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }
  }, {
    tag: "path",
    attrs: {
      fill: "currentColor",
      d: "M12.4267 1.7333C12.4267 1.40193 12.1581 1.1333 11.8267 1.1333C11.4953 1.1333 11.2267 1.40193 11.2267 1.7333V12.818L9.98447 11.5758C9.75015 11.3415 9.37026 11.3415 9.13594 11.5758C8.90163 11.8101 8.90163 12.19 9.13594 12.4243L11.4026 14.691C11.6369 14.9253 12.0168 14.9253 12.2511 14.691L14.5178 12.4243C14.7521 12.19 14.7521 11.8101 14.5178 11.5758C14.2835 11.3415 13.9036 11.3415 13.6693 11.5758L12.4267 12.8183V1.7333Z"
    }
  }]
}, De = w(function(t, r) {
  return p(x, Object.assign({}, t, {
    id: "expand-descending-icon",
    ref: r,
    icon: jt
  }));
});
De.displayName = "ExpandDescendingIcon";
const Bt = {
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
      d: "M8.6 1.99991C8.60001 1.66854 8.33138 1.39991 8.00001 1.3999C7.66864 1.3999 7.40001 1.66853 7.4 1.9999L7.39996 7.3999H1.9999C1.66853 7.3999 1.3999 7.66853 1.3999 7.9999C1.3999 8.33127 1.66853 8.5999 1.9999 8.5999H7.39995L7.3999 13.9999C7.3999 14.3313 7.66853 14.5999 7.9999 14.5999C8.33127 14.5999 8.5999 14.3313 8.5999 13.9999L8.59995 8.5999H13.9999C14.3313 8.5999 14.5999 8.33127 14.5999 7.9999C14.5999 7.66853 14.3313 7.3999 13.9999 7.3999H8.59996L8.6 1.99991Z"
    }
  }]
}, K = w(function(t, r) {
  return p(x, Object.assign({}, t, {
    id: "increase-icon",
    ref: r,
    icon: Bt
  }));
});
K.displayName = "IncreaseIcon";
const Ft = {
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
}, $e = w(function(t, r) {
  return p(x, Object.assign({}, t, {
    id: "more-down-icon",
    ref: r,
    icon: Ft
  }));
});
$e.displayName = "MoreDownIcon";
const Vt = {
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
        d: "M6 5C6.55228 5 7 4.55228 7 4C7 3.44772 6.55228 3 6 3C5.44772 3 5 3.44772 5 4C5 4.55228 5.44772 5 6 5Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M6 9C6.55228 9 7 8.55229 7 8C7 7.44772 6.55228 7 6 7C5.44772 7 5 7.44772 5 8C5 8.55229 5.44772 9 6 9Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M10 5C10.5523 5 11 4.55228 11 4C11 3.44772 10.5523 3 10 3C9.44771 3 9 3.44772 9 4C9 4.55228 9.44771 5 10 5Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M11 8C11 8.55229 10.5523 9 10 9C9.44771 9 9 8.55229 9 8C9 7.44772 9.44771 7 10 7C10.5523 7 11 7.44772 11 8Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M10 13C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11C9.44771 11 9 11.4477 9 12C9 12.5523 9.44771 13 10 13Z"
      }
    }
  ]
}, He = w(function(t, r) {
  return p(x, Object.assign({}, t, {
    id: "sequence-icon",
    ref: r,
    icon: Vt
  }));
});
He.displayName = "SequenceIcon";
function Gt() {
  const e = R(C), t = ct(e.customSortState$);
  return !t || !t.location ? null : /* @__PURE__ */ c(Wt, { state: t });
}
function Wt({ state: e }) {
  const t = R(Ie), r = R(H), n = R(C), [o, s] = P(!1), [i, a] = P(0), l = Ee(null), { range: u, unitId: _, subUnitId: v } = e.location, E = n.getTitles(o), [m, A] = P([
    { type: $.ASC, colIndex: u.startColumn }
  ]), j = T((d, S) => {
    const U = [...m];
    S === null ? U.splice(d, 1) : U[d] = S, A(U);
  }, [m]), h = T(
    ze(() => {
      const d = [...m], S = zt(u, m);
      S !== null && (d.push({ type: $.ASC, colIndex: S }), A(d));
    }, 200),
    [m, u]
  ), z = T((d, S) => {
    t.applySort({ range: u, orderRules: d, hasTitle: S }), n.closeCustomSortPanel();
  }, [t, n, u]), je = T(() => {
    n.closeCustomSortPanel();
  }, [n]), Be = T((d) => {
    s(d), d ? n.setSelection(_, v, { ...u, startRow: u.startRow + 1 }) : n.setSelection(_, v, u);
  }, [n, u, v, _]);
  Te(() => {
    l.current && m.length > 5 && (l.current.scrollTop = l.current.scrollHeight);
  }, [m]);
  const Fe = m.length < E.length, Ce = m.map((d) => ({ ...d, id: `${d.colIndex}` }));
  return /* @__PURE__ */ g("div", { children: [
    /* @__PURE__ */ g("div", { onMouseDown: (d) => {
      d.stopPropagation();
    }, children: [
      /* @__PURE__ */ g("div", { className: "univer-flex univer-items-center univer-justify-between", children: [
        /* @__PURE__ */ c(pt, { checked: o, onChange: (d) => Be(!!d), children: r.t("sheets-sort.dialog.first-row-check") }),
        Fe ? /* @__PURE__ */ g(
          "div",
          {
            className: "univer-flex univer-cursor-pointer univer-select-none univer-items-center univer-text-base",
            onClick: h,
            children: [
              /* @__PURE__ */ c(K, {}),
              /* @__PURE__ */ c("span", { className: "univer-ml-1.5", children: r.t("sheets-sort.dialog.add-condition") })
            ]
          }
        ) : /* @__PURE__ */ g(
          "div",
          {
            className: "univer-flex univer-cursor-pointer univer-select-none univer-items-center univer-text-base univer-text-primary-500 disabled:univer-cursor-not-allowed disabled:univer-divide-opacity-30 disabled:univer-text-gray-800",
            children: [
              /* @__PURE__ */ c(K, {}),
              /* @__PURE__ */ c("span", { className: "univer-ml-1.5 univer-text-xs", children: r.t("sheets-sort.dialog.add-condition") })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ c(
        "div",
        {
          ref: l,
          className: X("univer-max-h-[310px] univer-overflow-y-auto univer-overflow-x-hidden", Re),
          onScroll: (d) => {
            const S = d.currentTarget.scrollTop;
            a(S);
          },
          children: /* @__PURE__ */ c(
            xt,
            {
              className: "[&_.react-grid-item]:univer-transition-none [&_.react-grid-placeholder]:univer-rounded [&_.react-grid-placeholder]:!univer-bg-gray-200",
              list: Ce,
              onListChange: A,
              idKey: "id",
              draggableHandle: "[data-u-comp=sort-panel-item-handler]",
              itemRender: (d) => /* @__PURE__ */ c(
                qt,
                {
                  titles: E,
                  list: Ce,
                  item: d,
                  onChange: (S, U) => j(U, S),
                  scrollPosition: i
                }
              ),
              rowHeight: 32,
              margin: [0, 12]
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ g("div", { className: "univer-mt-5 univer-flex univer-justify-end", children: [
      /* @__PURE__ */ c(
        V,
        {
          className: "univer-ml-3",
          onClick: () => je(),
          children: r.t("sheets-sort.dialog.cancel")
        }
      ),
      /* @__PURE__ */ c(
        V,
        {
          className: "univer-ml-3",
          variant: "primary",
          onClick: () => z(m, o),
          children: r.t("sheets-sort.dialog.confirm")
        }
      )
    ] })
  ] });
}
function qt(e) {
  var j;
  const { list: t, item: r, titles: n, onChange: o, scrollPosition: s } = e, i = R(H), a = n.filter((h) => !t.some((z) => z.colIndex === h.index) || h.index === r.colIndex), l = t.findIndex((h) => h.colIndex === r.colIndex), u = T((h) => {
    o({ ...r, colIndex: h.index }, l), v(!1);
  }, [l, r, o]), [_, v] = P(!1), E = (h) => {
    v(h);
  };
  Te(() => {
    v(!1);
  }, [s]);
  const m = t.length > 1, A = (j = n.find((h) => h.index === r.colIndex)) == null ? void 0 : j.label;
  return /* @__PURE__ */ g("div", { className: "univer-grid univer-grid-flow-col univer-grid-cols-2 univer-items-center univer-gap-2", children: [
    /* @__PURE__ */ g("div", { className: "univer-flex univer-items-center", children: [
      /* @__PURE__ */ c(
        "div",
        {
          "data-u-comp": "sort-panel-item-handler",
          className: "univer-flex univer-cursor-pointer univer-items-center univer-justify-center univer-text-base univer-text-gray-700",
          children: /* @__PURE__ */ c(He, {})
        }
      ),
      /* @__PURE__ */ c(
        _t,
        {
          overlay: /* @__PURE__ */ c(
            "ul",
            {
              className: X("univer-my-0 univer-box-border univer-grid univer-max-h-[310px] univer-w-[var(--radix-popper-anchor-width)] univer-items-center univer-gap-1 univer-overflow-y-auto univer-overflow-x-hidden univer-rounded-lg univer-border univer-bg-white univer-p-1 univer-text-base univer-shadow-lg", Re),
              children: a.map((h) => /* @__PURE__ */ g(
                "li",
                {
                  onClick: () => u(h),
                  className: "univer-relative univer-box-border univer-flex univer-h-7 univer-cursor-pointer univer-list-none univer-items-center univer-justify-between univer-rounded univer-px-2 univer-text-sm univer-transition-all hover:univer-bg-gray-100 dark:hover:!univer-bg-gray-700",
                  children: [
                    /* @__PURE__ */ c("span", { className: "univer-max-w-[220px] univer-truncate", children: h.label }),
                    /* @__PURE__ */ c("span", { children: h.index === r.colIndex && /* @__PURE__ */ c(Oe, {}) })
                  ]
                },
                h.index
              ))
            }
          ),
          open: _,
          onOpenChange: E,
          children: /* @__PURE__ */ g(
            "div",
            {
              className: X("univer-ml-2 univer-flex univer-w-full univer-items-center univer-justify-between univer-overflow-hidden univer-rounded-md univer-py-1.5 univer-text-sm univer-text-gray-900 dark:!univer-text-white"),
              children: [
                /* @__PURE__ */ c(
                  "span",
                  {
                    className: "univer-max-w-[220px] univer-truncate",
                    children: A
                  }
                ),
                /* @__PURE__ */ c($e, {})
              ]
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ g("div", { className: "univer-flex univer-items-center univer-justify-end univer-gap-2", children: [
      /* @__PURE__ */ g(
        Me,
        {
          value: r.type,
          onChange: (h) => {
            o({ ...r, type: h }, l);
          },
          children: [
            /* @__PURE__ */ c(F, { value: $.ASC, children: i.t("sheets-sort.general.sort-asc") }),
            /* @__PURE__ */ c(F, { value: $.DESC, children: i.t("sheets-sort.general.sort-desc") })
          ]
        }
      ),
      /* @__PURE__ */ c(
        "a",
        {
          className: "univer-flex univer-cursor-pointer univer-items-center univer-text-sm univer-transition-colors hover:univer-text-red-500",
          onClick: () => o(null, l),
          children: !m && /* @__PURE__ */ c(Le, {})
        }
      )
    ] })
  ] });
}
function zt(e, t) {
  const { startColumn: r, endColumn: n } = e, o = new Set(t.map((s) => s == null ? void 0 : s.colIndex));
  for (let s = r; s <= n; s++)
    if (!o.has(s))
      return s;
  return null;
}
function Yt(e) {
  const { range: t, colIndex: r, onClose: n } = e, o = R(C), s = R(xe), i = R(H), a = T((l) => {
    const { unitId: u, subUnitId: _ } = nt(s) || {};
    if (t && u && _) {
      const v = { ...t, startRow: t.startRow + 1 };
      o.triggerSortDirectly(l, !1, { unitId: u, subUnitId: _, range: v, colIndex: r });
    } else
      throw new Error(`Cannot find the target to sort. unitId: ${u}, subUnitId: ${_}, range: ${t}, colIndex: ${r}`);
    n();
  }, [t, r, o, s, n]);
  return /* @__PURE__ */ g(yt, { className: "univer-mb-3 univer-w-full univer-grid-cols-2", children: [
    /* @__PURE__ */ g(V, { onClick: () => a(!0), children: [
      /* @__PURE__ */ c(ae, {}),
      i.t("sheets-sort.general.sort-asc")
    ] }),
    /* @__PURE__ */ g(V, { onClick: () => a(!1), children: [
      /* @__PURE__ */ c(le, {}),
      i.t("sheets-sort.general.sort-desc")
    ] })
  ] });
}
const Ae = "sheet.menu.sheets-sort", Ue = "sheet.menu.sheets-sort-ctx", Z = "AscendingIcon", de = "ExpandAscendingIcon", ue = "DescendingIcon", he = "ExpandDescendingIcon", ge = "CustomSortIcon";
function Xt(e) {
  return {
    id: Ae,
    type: f.SUBITEMS,
    icon: Z,
    tooltip: "sheets-sort.general.sort",
    hidden$: we(e, q.UNIVER_SHEET),
    disabled$: k(e, { workbookTypes: [L], worksheetTypes: [O, N], rangeTypes: [b] })
  };
}
function Kt(e) {
  return {
    id: J.id,
    icon: Z,
    title: "sheets-sort.general.sort-asc-cur",
    type: f.BUTTON,
    hidden$: wt(e)
  };
}
function Jt(e) {
  return {
    id: Q.id,
    title: "sheets-sort.general.sort-asc-ext",
    icon: de,
    type: f.BUTTON
  };
}
function Qt(e) {
  return {
    id: ee.id,
    title: "sheets-sort.general.sort-desc-cur",
    icon: ue,
    type: f.BUTTON
  };
}
function er(e) {
  return {
    id: te.id,
    title: "sheets-sort.general.sort-desc-ext",
    icon: he,
    type: f.BUTTON
  };
}
function tr(e) {
  return {
    id: re.id,
    title: "sheets-sort.general.sort-custom",
    type: f.BUTTON,
    icon: ge
  };
}
function rr(e) {
  return {
    id: Ue,
    title: "sheets-sort.general.sort",
    type: f.SUBITEMS,
    icon: Z,
    hidden$: we(e, q.UNIVER_SHEET),
    disabled$: k(e, {
      workbookTypes: [L],
      worksheetTypes: [O, N],
      rangeTypes: [b]
    })
  };
}
function nr(e) {
  return {
    id: ne.id,
    title: "sheets-sort.general.sort-asc-cur",
    type: f.BUTTON,
    icon: Z,
    disabled$: k(e, { workbookTypes: [L], worksheetTypes: [O, N], rangeTypes: [b] })
  };
}
function or(e) {
  return {
    id: oe.id,
    title: "sheets-sort.general.sort-asc-ext",
    type: f.BUTTON,
    icon: de,
    disabled$: k(e, { workbookTypes: [L], worksheetTypes: [O, N], rangeTypes: [b] })
  };
}
function sr(e) {
  return {
    id: se.id,
    title: "sheets-sort.general.sort-desc-cur",
    type: f.BUTTON,
    icon: ue,
    disabled$: k(e, { workbookTypes: [L], worksheetTypes: [O, N], rangeTypes: [b] })
  };
}
function ir(e) {
  return {
    id: ie.id,
    title: "sheets-sort.general.sort-desc-ext",
    type: f.BUTTON,
    icon: he,
    disabled$: k(e, { workbookTypes: [L], worksheetTypes: [O, N], rangeTypes: [b] })
  };
}
function cr(e) {
  return {
    id: ce.id,
    title: "sheets-sort.general.sort-custom",
    type: f.BUTTON,
    icon: ge,
    disabled$: k(e, { workbookTypes: [L], worksheetTypes: [O, N], rangeTypes: [b] })
  };
}
const ar = {
  [dt.ORGANIZATION]: {
    [Ae]: {
      order: 3,
      menuItemFactory: Xt,
      [J.id]: {
        order: 0,
        menuItemFactory: Kt
      },
      [Q.id]: {
        order: 1,
        menuItemFactory: Jt
      },
      [ee.id]: {
        order: 2,
        menuItemFactory: Qt
      },
      [te.id]: {
        order: 3,
        menuItemFactory: er
      },
      [re.id]: {
        order: 4,
        menuItemFactory: tr
      }
    }
  },
  [at.MAIN_AREA]: {
    [lt.DATA]: {
      [Ue]: {
        order: 0,
        menuItemFactory: rr,
        [ne.id]: {
          order: 0,
          menuItemFactory: nr
        },
        [oe.id]: {
          order: 1,
          menuItemFactory: or
        },
        [se.id]: {
          order: 2,
          menuItemFactory: sr
        },
        [ie.id]: {
          order: 3,
          menuItemFactory: ir
        },
        [ce.id]: {
          order: 4,
          menuItemFactory: cr
        }
      }
    }
  }
};
var lr = Object.getOwnPropertyDescriptor, dr = (e, t, r, n) => {
  for (var o = n > 1 ? void 0 : n ? lr(t, r) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = i(o) || o);
  return o;
}, y = (e, t) => (r, n) => t(r, n, e);
const Se = "custom-sort-dialog", Pe = 560, ur = 128;
let G = class extends Ye {
  constructor(e, t, r, n, o, s, i, a, l, u) {
    super(), this._commandService = e, this._menuManagerService = t, this._dialogService = r, this._layoutService = n, this._uiPartsService = o, this._sheetRenderService = s, this._localeService = i, this._sheetsSortUIService = a, this._injector = l, this._componentManager = u, this._initCommands(), this._initMenu(), this._initUI();
  }
  _initMenu() {
    this._menuManagerService.mergeMenu(ar);
  }
  _initCommands() {
    [
      J,
      Q,
      ee,
      te,
      re,
      ne,
      oe,
      se,
      ie,
      ce
    ].forEach((e) => this.disposeWithMe(this._commandService.registerCommand(e))), this.disposeWithMe(this._sheetRenderService.registerSkeletonChangingMutations(ot.id));
  }
  _initUI() {
    this.disposeWithMe(
      this._uiPartsService.registerComponent(Rt.FILTER_PANEL_EMBED_POINT, () => vt(Yt, this._injector))
    ), [
      ["CustomSortPanel", Gt],
      [Z, ae],
      [de, ke],
      [ue, le],
      [he, De],
      [ge, Ne]
    ].forEach(([e, t]) => {
      this.disposeWithMe(
        this._componentManager.register(e, t)
      );
    }), this._sheetsSortUIService.customSortState$.pipe(St(this.dispose$)).subscribe((e) => {
      e && e.show && e.location ? this._openCustomSortPanel(e.location) : e && !(e != null && e.show) && this._closePanel();
    });
  }
  _openCustomSortPanel(e) {
    this._dialogService.open({
      id: Se,
      draggable: !0,
      width: Pe,
      title: { title: `${this._localeService.t("sheets-sort.general.sort-custom")}: ${It(e.range)}` },
      children: { label: "CustomSortPanel" },
      destroyOnClose: !0,
      defaultPosition: hr(),
      preservePositionOnDestroy: !1,
      onClose: () => this._closePanel(),
      mask: !0
    });
  }
  _closePanel() {
    this._dialogService.close(Se), queueMicrotask(() => this._layoutService.focus());
  }
};
G = dr([
  y(0, _e),
  y(1, ut),
  y(2, ht),
  y(3, gt),
  y(4, Ct),
  y(5, M(Mt)),
  y(6, M(H)),
  y(7, M(C)),
  y(8, M(ye)),
  y(9, M(mt))
], G);
function hr() {
  return { x: (window.innerWidth - Pe) / 2, y: ur };
}
var gr = Object.defineProperty, Cr = Object.getOwnPropertyDescriptor, mr = (e, t, r) => t in e ? gr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, vr = (e, t, r, n) => {
  for (var o = n > 1 ? void 0 : n ? Cr(t, r) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = i(o) || o);
  return o;
}, pe = (e, t) => (r, n) => t(r, n, e), Ze = (e, t, r) => mr(e, typeof t != "symbol" ? t + "" : t, r);
const fr = "SHEET_SORT_UI_PLUGIN";
let W = class extends Je {
  constructor(e = fe, t, r) {
    super(), this._config = e, this._injector = t, this._configService = r;
    const { ...n } = Qe(
      {},
      fe,
      this._config
    );
    this._configService.setConfig(Nt, n);
  }
  onStarting() {
    [
      [C],
      [G]
    ].forEach((e) => this._injector.add(e));
  }
  onRendered() {
    this._injector.get(G);
  }
};
Ze(W, "type", q.UNIVER_SHEET);
Ze(W, "pluginName", fr);
W = vr([
  Xe(st),
  pe(1, M(ye)),
  pe(2, Ke)
], W);
export {
  J as SortRangeAscCommand,
  Q as SortRangeAscExtCommand,
  oe as SortRangeAscExtInCtxMenuCommand,
  ne as SortRangeAscInCtxMenuCommand,
  re as SortRangeCustomCommand,
  ce as SortRangeCustomInCtxMenuCommand,
  ee as SortRangeDescCommand,
  te as SortRangeDescExtCommand,
  ie as SortRangeDescExtInCtxMenuCommand,
  se as SortRangeDescInCtxMenuCommand,
  W as UniverSheetsSortUIPlugin
};
