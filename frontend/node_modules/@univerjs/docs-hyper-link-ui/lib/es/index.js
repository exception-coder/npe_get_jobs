var Ue = Object.defineProperty;
var Te = (n, e, t) => e in n ? Ue(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var L = (n, e, t) => Te(n, typeof e != "symbol" ? e + "" : e, t);
import { CommandType as P, ICommandService as x, generateRandomId as He, CustomRangeType as b, IUniverInstanceService as k, UniverInstanceType as I, getBodySlice as Ce, LocaleService as Se, Tools as je, BuildTextUtils as ge, Inject as m, Disposable as D, DOCS_ZEN_EDITOR_UNIT_ID_KEY as Ae, DOCS_NORMAL_EDITOR_UNIT_ID_KEY as Ke, DependentOn as Fe, Injector as Be, IConfigService as Ve, Plugin as Ze, merge as Ye } from "@univerjs/core";
import { UniverDocsHyperLinkPlugin as We } from "@univerjs/docs-hyper-link";
import { IRenderManagerService as Ge } from "@univerjs/engine-render";
import { addCustomRangeBySelectionFactory as ze, DocSelectionManagerService as R, replaceSelectionFactory as qe, deleteCustomRangeFactory as Je, SetTextSelectionsOperation as Qe, DocSkeletonManagerService as Xe, DocInterceptorService as en, DOC_INTERCEPTOR_POINT as nn } from "@univerjs/docs";
import { DocCanvasPopManagerService as tn, DocEventManagerService as rn, DocRenderController as on, whenDocAndEditorFocused as sn } from "@univerjs/docs-ui";
import { BehaviorSubject as he, distinctUntilChanged as cn, pairwise as dn, Observable as an, debounceTime as ln } from "rxjs";
import { jsxs as O, jsx as h } from "react/jsx-runtime";
import { clsx as ye, FormLayout as ve, Input as fe, Button as me, borderClassName as xe, Tooltip as H, MessageType as un } from "@univerjs/design";
import { useDependency as C, useObservable as ke, KeyCode as Q, IMessageService as pn, MetaKeys as gn, getMenuHiddenObservable as hn, MenuItemType as vn, ContextMenuPosition as fn, ContextMenuGroup as mn, RibbonInsertGroup as In, ComponentManager as _n, IMenuManagerService as Cn, IShortcutService as Sn } from "@univerjs/ui";
import { useState as W, useEffect as yn, useRef as xn, createElement as E, forwardRef as Z } from "react";
const kn = "docs-hyper-link-ui.config", Ie = {}, Le = {
  type: P.COMMAND,
  id: "docs.command.add-hyper-link",
  async handler(n, e) {
    if (!e)
      return !1;
    const { payload: t, unitId: i, selections: r } = e, o = n.get(x), s = He(), c = ze(
      n,
      {
        rangeId: s,
        rangeType: b.HYPERLINK,
        properties: {
          url: t
        },
        unitId: i,
        selections: r
      }
    );
    return c ? o.syncExecuteCommand(c.id, c.params) : !1;
  }
}, Oe = {
  id: "docs.command.update-hyper-link",
  type: P.COMMAND,
  handler(n, e) {
    var p;
    if (!e)
      return !1;
    const { unitId: t, payload: i, segmentId: r, linkId: o } = e, s = n.get(x), c = n.get(k), u = n.get(R).getActiveTextRange(), v = c.getUnit(t, I.UNIVER_DOC);
    if (!u || !v)
      return !1;
    const g = (p = Ce(v.getSelfOrHeaderFooterModel(r).getBody(), u.startOffset, u.endOffset).textRuns) == null ? void 0 : p[0];
    g && (g.ed = e.label.length + 1);
    const d = qe(n, {
      unitId: t,
      body: {
        dataStream: `${e.label}`,
        customRanges: [{
          rangeId: o,
          rangeType: b.HYPERLINK,
          startIndex: 0,
          endIndex: e.label.length + 1,
          properties: {
            url: i
          }
        }],
        textRuns: g ? [g] : void 0
      },
      selection: {
        startOffset: u.startOffset,
        endOffset: u.endOffset,
        collapsed: !1,
        segmentId: r
      }
    });
    return d ? s.syncExecuteCommand(d.id, d.params) : !1;
  }
};
function Ln(n) {
  return /^[a-zA-Z]+:\/\//.test(n);
}
function On(n) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(n);
}
function wn(n) {
  return Ln(n) ? n : On(n) ? `mailto://${n}` : `https://${n}`;
}
const A = () => {
  const n = C(S), e = C(Se), t = ke(n.editingLink$), i = C(x), r = C(k), o = C(R), [s, c] = W(""), [l, u] = W(""), [v, f] = W(!1), g = je.isLegalUrl(s), d = t ? r.getUnit(t.unitId, I.UNIVER_DOC) : r.getCurrentUnitForType(I.UNIVER_DOC);
  yn(() => {
    var re, oe, se, ce, de, ae, le, ue, pe;
    const a = o.getActiveTextRange();
    if (!a)
      return;
    if (t) {
      const U = (re = d == null ? void 0 : d.getSelfOrHeaderFooterModel(t.segmentId)) == null ? void 0 : re.getBody(), T = (oe = U == null ? void 0 : U.customRanges) == null ? void 0 : oe.find((Y) => (t == null ? void 0 : t.linkId) === Y.rangeId && Y.startIndex === t.startIndex && Y.endIndex === t.endIndex);
      d && T && (c((ce = (se = T.properties) == null ? void 0 : se.url) != null ? ce : ""), u(ge.transform.getPlainText(Ce(U, T.startIndex, T.endIndex + 1).dataStream)));
      return;
    }
    const y = (de = d == null ? void 0 : d.getSelfOrHeaderFooterModel(a.segmentId)) == null ? void 0 : de.getBody(), ie = y ? a : null, $ = ie && ((le = ge.customRange.getCustomRangesInterestsWithSelection(ie, (ae = y == null ? void 0 : y.customRanges) != null ? ae : [])) == null ? void 0 : le[0]);
    d && $ && c((pe = (ue = $ == null ? void 0 : $.properties) == null ? void 0 : ue.url) != null ? pe : "");
  }, [d, t, o, r]);
  const p = () => {
    n.hideEditPopup();
  }, _ = () => {
    if (f(!0), !g || !d)
      return;
    const a = wn(s);
    if (!t)
      i.executeCommand(Le.id, {
        unitId: d.getUnitId(),
        payload: a
      });
    else {
      if (!l)
        return;
      i.executeCommand(Oe.id, {
        unitId: d.getUnitId(),
        payload: a,
        linkId: t.linkId,
        label: l,
        segmentId: t.segmentId
      });
    }
    n.hideEditPopup();
  };
  if (d)
    return /* @__PURE__ */ O(
      "div",
      {
        className: ye("univer-box-border univer-w-[328px] univer-rounded-xl univer-bg-white univer-px-6 univer-py-5 univer-shadow dark:!univer-bg-gray-900", xe),
        children: [
          /* @__PURE__ */ O("div", { children: [
            t ? /* @__PURE__ */ h(
              ve,
              {
                label: e.t("docLink.edit.label"),
                error: v && !l ? e.t("docLink.edit.labelError") : "",
                children: /* @__PURE__ */ h(
                  fe,
                  {
                    value: l,
                    onChange: u,
                    autoFocus: !0,
                    onKeyDown: (a) => {
                      a.keyCode === Q.ENTER && _();
                    }
                  }
                )
              }
            ) : null,
            /* @__PURE__ */ h(
              ve,
              {
                label: e.t("docLink.edit.address"),
                error: v && !g ? e.t("docLink.edit.addressError") : "",
                children: /* @__PURE__ */ h(
                  fe,
                  {
                    value: s,
                    onChange: c,
                    autoFocus: !0,
                    onKeyDown: (a) => {
                      a.keyCode === Q.ENTER && _();
                    }
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ O("div", { className: "univer-flex univer-justify-end univer-gap-3", children: [
            /* @__PURE__ */ h(me, { onClick: p, children: e.t("docLink.edit.cancel") }),
            /* @__PURE__ */ h(
              me,
              {
                variant: "primary",
                disabled: !s,
                onClick: _,
                children: e.t("docLink.edit.confirm")
              }
            )
          ] })
        ]
      }
    );
};
A.componentKey = "docs-hyper-link-edit";
function N({ ref: n, ...e }) {
  const { icon: t, id: i, className: r, extend: o, ...s } = e, c = `univerjs-icon univerjs-icon-${i} ${r || ""}`.trim(), l = xn(`_${Mn()}`);
  return we(t, `${i}`, {
    defIds: t.defIds,
    idSuffix: l.current
  }, {
    ref: n,
    className: c,
    ...s
  }, o);
}
function we(n, e, t, i, r) {
  return E(n.tag, {
    key: e,
    ...Pn(n, t, r),
    ...i
  }, (Rn(n, t).children || []).map((o, s) => we(o, `${e}-${n.tag}-${s}`, t, void 0, r)));
}
function Pn(n, e, t) {
  const i = { ...n.attrs };
  t != null && t.colorChannel1 && i.fill === "colorChannel1" && (i.fill = t.colorChannel1), n.tag === "mask" && i.id && (i.id = i.id + e.idSuffix), Object.entries(i).forEach(([o, s]) => {
    o === "mask" && typeof s == "string" && (i[o] = s.replace(/url\(#(.*)\)/, `url(#$1${e.idSuffix})`));
  });
  const { defIds: r } = e;
  return !r || r.length === 0 || (n.tag === "use" && i["xlink:href"] && (i["xlink:href"] = i["xlink:href"] + e.idSuffix), Object.entries(i).forEach(([o, s]) => {
    typeof s == "string" && (i[o] = s.replace(/url\(#(.*)\)/, `url(#$1${e.idSuffix})`));
  })), i;
}
function Rn(n, e) {
  var i;
  const { defIds: t } = e;
  return !t || t.length === 0 ? n : n.tag === "defs" && ((i = n.children) != null && i.length) ? {
    ...n,
    children: n.children.map((r) => typeof r.attrs.id == "string" && t && t.includes(r.attrs.id) ? {
      ...r,
      attrs: {
        ...r.attrs,
        id: r.attrs.id + e.idSuffix
      }
    } : r)
  } : n;
}
function Mn() {
  return Math.random().toString(36).substring(2, 8);
}
N.displayName = "UniverIcon";
const bn = {
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
      d: "M4.1302 12.4251C4.25802 13.7417 5.36779 14.7708 6.71792 14.7708H11.7179C13.1539 14.7708 14.3179 13.6067 14.3179 12.1708V6.1708C14.3179 4.78586 13.2351 3.65383 11.8698 3.57517C11.742 2.25858 10.6323 1.22949 9.28213 1.22949H4.28213C2.84619 1.22949 1.68213 2.39355 1.68213 3.82949V9.82949C1.68213 11.2144 2.76497 12.3465 4.1302 12.4251ZM10.6583 3.5708H6.71792C5.28198 3.5708 4.11792 4.73486 4.11792 6.1708V11.22C3.4221 11.1387 2.88213 10.5471 2.88213 9.82949V3.82949C2.88213 3.05629 3.50893 2.42949 4.28213 2.42949H9.28213C9.96695 2.42949 10.5369 2.92119 10.6583 3.5708ZM13.1179 6.1708C13.1179 5.3976 12.4911 4.7708 11.7179 4.7708H6.71792C5.94472 4.7708 5.31792 5.3976 5.31792 6.1708V12.1708C5.31792 12.944 5.94472 13.5708 6.71792 13.5708H11.7179C12.4911 13.5708 13.1179 12.944 13.1179 12.1708V6.1708Z",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }
  }]
}, Pe = Z(function(e, t) {
  return E(N, Object.assign({}, e, {
    id: "copy-icon",
    ref: t,
    icon: bn
  }));
});
Pe.displayName = "CopyIcon";
const Dn = {
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
      d: "M9.8816 1.97978C11.0177 0.843607 12.862 0.884962 14.0004 2.02342C15.1389 3.16188 15.1803 5.00612 14.0441 6.14228L11.399 8.78737C11.1608 9.02559 10.7746 9.02559 10.5363 8.78737C10.2981 8.54915 10.2981 8.16292 10.5363 7.9247L13.1814 5.2796C13.8195 4.64155 13.8217 3.57006 13.1378 2.8861C12.4538 2.20211 11.3823 2.20438 10.7443 2.84245L7.6976 5.88911L7.69317 5.89349C7.05959 6.53211 7.05894 7.60014 7.74132 8.28252C7.97954 8.52074 7.97954 8.90697 7.74132 9.14519C7.5031 9.38341 7.11687 9.38341 6.87865 9.14519C5.74016 8.00671 5.69884 6.16251 6.83497 5.02633L6.84021 5.02116L9.8816 1.97978Z"
    }
  }, {
    tag: "path",
    attrs: {
      fill: "currentColor",
      d: "M4.61426 7.2364C4.85248 6.99818 5.23871 6.99818 5.47693 7.2364C5.71515 7.47462 5.71515 7.86085 5.47693 8.09907L2.83183 10.7442C2.19375 11.3823 2.1915 12.4537 2.87547 13.1377C3.55945 13.8217 4.6309 13.8194 5.26899 13.1813L8.31566 10.1347C8.32262 10.1277 8.32971 10.121 8.33691 10.1144C8.34408 10.1064 8.3515 10.0986 8.35916 10.091C8.99721 9.45291 8.99949 8.38145 8.3155 7.69746C8.07728 7.45924 8.07728 7.07301 8.3155 6.83479C8.55372 6.59657 8.93995 6.59657 9.17817 6.83479C10.3166 7.97327 10.358 9.81748 9.22183 10.9536C9.21487 10.9606 9.20779 10.9673 9.20058 10.9739C9.19341 10.9819 9.18599 10.9897 9.17833 10.9973L6.13166 14.044C4.99548 15.1802 3.15127 15.1389 2.01279 14.0004C0.874362 12.8619 0.83297 11.0177 1.96916 9.8815L4.61426 7.2364Z"
    }
  }]
}, te = Z(function(e, t) {
  return E(N, Object.assign({}, e, {
    id: "link-icon",
    ref: t,
    icon: Dn
  }));
});
te.displayName = "LinkIcon";
const En = {
  tag: "svg",
  attrs: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 16 17",
    width: "1em",
    height: "1em"
  },
  children: [
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M12.5935 3.47302C11.6354 2.51492 10.082 2.51492 9.12388 3.47302L7.83534 4.76157C7.60102 4.99588 7.22112 4.99588 6.98681 4.76157C6.75249 4.52725 6.75249 4.14735 6.98681 3.91304L8.27535 2.62449C9.70209 1.19776 12.0153 1.19776 13.442 2.62449C14.8688 4.05123 14.8688 6.36442 13.442 7.79116L12.1535 9.0797C11.9192 9.31402 11.5393 9.31402 11.3049 9.0797C11.0706 8.84539 11.0706 8.46549 11.3049 8.23117L12.5935 6.94263C13.5516 5.98452 13.5516 4.43113 12.5935 3.47302Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M3.40637 12.6606C2.44827 11.7025 2.44827 10.1491 3.40637 9.19102L4.69492 7.90248C4.92923 7.66816 4.92923 7.28826 4.69492 7.05395C4.4606 6.81963 4.0807 6.81963 3.84639 7.05395L2.55784 8.34249C1.13111 9.76923 1.13111 12.0824 2.55784 13.5092C3.98458 14.9359 6.29777 14.9359 7.72451 13.5092L9.01305 12.2206C9.24737 11.9863 9.24737 11.6064 9.01305 11.3721C8.77874 11.1378 8.39884 11.1378 8.16452 11.3721L6.87598 12.6606C5.91787 13.6187 4.36448 13.6187 3.40637 12.6606Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M3.5852 2.80332C3.35088 2.569 2.97098 2.569 2.73667 2.80332C2.50235 3.03763 2.50235 3.41753 2.73667 3.65185L12.4151 13.3302C12.6494 13.5646 13.0293 13.5646 13.2636 13.3302C13.4979 13.0959 13.4979 12.716 13.2636 12.4817L3.5852 2.80332Z"
      }
    }
  ]
}, Re = Z(function(e, t) {
  return E(N, Object.assign({}, e, {
    id: "unlink-icon",
    ref: t,
    icon: En
  }));
});
Re.displayName = "UnlinkIcon";
const Nn = {
  tag: "svg",
  attrs: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 17 16",
    width: "1em",
    height: "1em"
  },
  children: [{
    tag: "path",
    attrs: {
      fill: "currentColor",
      d: "M12.6551 1.98906C11.7476 1.08113 10.2757 1.08149 9.3686 1.98987L4.82542 6.53955C4.75087 6.61421 4.69336 6.70411 4.65682 6.80309L3.2461 10.625C3.16506 10.8446 3.21909 11.0912 3.3845 11.2568C3.54991 11.4224 3.79651 11.4767 4.01616 11.3959L7.85031 9.98517C7.94979 9.94856 8.04014 9.89077 8.11508 9.81579L12.6552 5.27327C13.5618 4.36621 13.5618 2.89607 12.6551 1.98906ZM10.2177 2.83779C10.6562 2.39869 11.3677 2.39851 11.8064 2.8374C12.2447 3.27584 12.2447 3.9865 11.8065 4.42497L7.3392 8.89457L4.82213 9.82068L5.74706 7.31487L10.2177 2.83779Z",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }
  }, {
    tag: "path",
    attrs: {
      fill: "currentColor",
      d: "M1.79238 13.2999C1.46101 13.2999 1.19238 13.5685 1.19238 13.8999C1.19238 14.2313 1.46101 14.4999 1.79238 14.4999H14.4924C14.8238 14.4999 15.0924 14.2313 15.0924 13.8999C15.0924 13.5685 14.8238 13.2999 14.4924 13.2999H1.79238Z"
    }
  }]
}, Me = Z(function(e, t) {
  return E(N, Object.assign({}, e, {
    id: "write-icon",
    ref: t,
    icon: Nn
  }));
});
Me.displayName = "WriteIcon";
const be = {
  type: P.COMMAND,
  id: "docs.command.delete-hyper-link",
  async handler(n, e) {
    if (!e)
      return !1;
    const { unitId: t, linkId: i, segmentId: r } = e, o = n.get(x), s = Je(n, { unitId: t, rangeId: i, segmentId: r });
    return s ? await o.syncExecuteCommand(s.id, s.params) : !1;
  }
}, De = (n) => {
  const e = n.get(R), t = n.get(k), i = e.getTextRanges();
  if (!(i != null && i.length))
    return !0;
  const r = i[0];
  return !!(!t.getCurrentUnitForType(I.UNIVER_DOC) || !r || r.collapsed);
}, w = {
  type: P.OPERATION,
  id: "doc.operation.show-hyper-link-edit-popup",
  handler(n, e) {
    var s;
    const t = e == null ? void 0 : e.link, i = n.get(k);
    if (De(n) && !t)
      return !1;
    const r = n.get(S), o = (t == null ? void 0 : t.unitId) || ((s = i.getCurrentUnitForType(I.UNIVER_DOC)) == null ? void 0 : s.getUnitId());
    return o ? (r.showEditPopup(o, t), !0) : !1;
  }
}, X = {
  type: P.OPERATION,
  id: "doc.operation.toggle-hyper-link-info-popup",
  handler(n, e) {
    const t = n.get(S);
    return e ? (t.showInfoPopup(e), !0) : (t.hideInfoPopup(), !0);
  }
}, Ee = {
  type: P.OPERATION,
  id: "doc.operation.click-hyper-link",
  handler(n, e) {
    var u, v, f;
    if (!e)
      return !1;
    const { unitId: t, linkId: i, segmentId: r } = e, s = n.get(k).getUnit(t, I.UNIVER_DOC), c = s == null ? void 0 : s.getSelfOrHeaderFooterModel(r).getBody(), l = (f = (v = (u = c == null ? void 0 : c.customRanges) == null ? void 0 : u.find((g) => g.rangeId === i && g.rangeType === b.HYPERLINK)) == null ? void 0 : v.properties) == null ? void 0 : f.url;
    return l && window.open(l, "_blank", "noopener noreferrer"), !0;
  }
}, K = () => {
  var _, a;
  const n = C(S), e = C(x), t = C(pn), i = C(Se), r = ke(n.showingLink$), o = C(k);
  if (!r)
    return null;
  const { unitId: s, linkId: c, segmentId: l, startIndex: u, endIndex: v } = r, f = o.getUnit(s, I.UNIVER_DOC), g = f == null ? void 0 : f.getSelfOrHeaderFooterModel(l).getBody(), d = (_ = g == null ? void 0 : g.customRanges) == null ? void 0 : _.find((y) => y.rangeId === c && y.rangeType === b.HYPERLINK && y.startIndex === u && y.endIndex === v);
  if (!d)
    return null;
  const p = (a = d.properties) == null ? void 0 : a.url;
  return /* @__PURE__ */ O(
    "div",
    {
      className: ye("univer-box-border univer-flex univer-max-w-80 univer-items-center univer-justify-between univer-overflow-hidden univer-rounded-lg univer-bg-white univer-p-3 univer-shadow dark:!univer-bg-gray-900", xe),
      onClick: () => {
        n.hideInfoPopup();
      },
      children: [
        /* @__PURE__ */ O(
          "div",
          {
            className: "univer-flex univer-h-6 univer-flex-1 univer-cursor-pointer univer-items-center univer-truncate univer-text-sm univer-leading-5 univer-text-primary-500",
            onClick: () => window.open(p, void 0, "noopener noreferrer"),
            children: [
              /* @__PURE__ */ h(
                "div",
                {
                  className: "univer-mr-2 univer-flex univer-size-5 univer-flex-[0_0_auto] univer-items-center univer-justify-center univer-text-base univer-text-gray-900 dark:!univer-text-white",
                  children: /* @__PURE__ */ h(te, {})
                }
              ),
              /* @__PURE__ */ h(H, { showIfEllipsis: !0, title: p, children: /* @__PURE__ */ h("span", { className: "univer-flex-1 univer-truncate", children: p }) })
            ]
          }
        ),
        /* @__PURE__ */ O("div", { className: "univer-flex univer-h-6 univer-flex-[0_0_auto] univer-items-center univer-justify-center", children: [
          /* @__PURE__ */ h(
            "div",
            {
              className: "univer-ml-2 univer-flex univer-size-6 univer-cursor-pointer univer-items-center univer-justify-center univer-rounded univer-text-base",
              onClick: () => {
                navigator.clipboard.writeText(p), t.show({
                  content: i.t("docLink.info.coped"),
                  type: un.Info
                });
              },
              children: /* @__PURE__ */ h(H, { placement: "bottom", title: i.t("docLink.info.copy"), children: /* @__PURE__ */ h(Pe, {}) })
            }
          ),
          /* @__PURE__ */ h(
            "div",
            {
              className: "univer-ml-2 univer-flex univer-size-6 univer-cursor-pointer univer-items-center univer-justify-center univer-rounded univer-text-base",
              onClick: () => {
                e.executeCommand(w.id, {
                  link: r
                });
              },
              children: /* @__PURE__ */ h(H, { placement: "bottom", title: i.t("docLink.info.edit"), children: /* @__PURE__ */ h(Me, {}) })
            }
          ),
          /* @__PURE__ */ h(
            "div",
            {
              className: "univer-ml-2 univer-flex univer-size-6 univer-cursor-pointer univer-items-center univer-justify-center univer-rounded univer-text-base",
              onClick: () => {
                e.executeCommand(be.id, {
                  unitId: s,
                  linkId: d.rangeId,
                  segmentId: l
                });
              },
              children: /* @__PURE__ */ h(H, { placement: "bottom", title: i.t("docLink.info.cancel"), children: /* @__PURE__ */ h(Re, {}) })
            }
          )
        ] })
      ]
    }
  );
};
K.componentKey = "univer.doc.link-info-popup";
var $n = Object.getOwnPropertyDescriptor, Un = (n, e, t, i) => {
  for (var r = i > 1 ? void 0 : i ? $n(e, t) : e, o = n.length - 1, s; o >= 0; o--)
    (s = n[o]) && (r = s(r) || r);
  return r;
}, G = (n, e) => (t, i) => e(t, i, n);
let S = class extends D {
  constructor(e, t, i) {
    super();
    L(this, "_editingLink$", new he(null));
    L(this, "_showingLink$", new he(null));
    L(this, "editingLink$", this._editingLink$.asObservable());
    L(this, "showingLink$", this._showingLink$.asObservable());
    L(this, "_editPopup", null);
    L(this, "_infoPopup", null);
    this._docCanvasPopupManagerService = e, this._textSelectionManagerService = t, this._univerInstanceService = i, this.disposeWithMe(() => {
      this._editingLink$.complete(), this._showingLink$.complete();
    });
  }
  get editing() {
    return this._editingLink$.value;
  }
  get showing() {
    return this._showingLink$.value;
  }
  showEditPopup(e, t) {
    this._editPopup && this._editPopup.dispose(), this._editingLink$.next(t);
    const i = this._textSelectionManagerService.getTextRanges({ unitId: e, subUnitId: e });
    let r = i == null ? void 0 : i[i.length - 1];
    if (t) {
      const { segmentId: o, segmentPage: s, startIndex: c, endIndex: l } = t;
      r = {
        collapsed: !1,
        startOffset: c,
        endOffset: l + 1,
        segmentId: o,
        segmentPage: s
      }, this._textSelectionManagerService.replaceDocRanges([{
        startOffset: c,
        endOffset: l + 1
      }]);
    }
    return r ? (this._editPopup = this._docCanvasPopupManagerService.attachPopupToRange(
      r,
      {
        componentKey: A.componentKey,
        direction: "bottom"
      },
      e
    ), this._editPopup) : null;
  }
  hideEditPopup() {
    var e;
    this._editingLink$.next(null), (e = this._editPopup) == null || e.dispose();
  }
  showInfoPopup(e) {
    var u, v, f, g, d, p;
    const { linkId: t, unitId: i, segmentId: r, segmentPage: o, startIndex: s, endIndex: c } = e;
    if (!(((u = this.showing) == null ? void 0 : u.linkId) === t && ((v = this.showing) == null ? void 0 : v.unitId) === i && ((f = this.showing) == null ? void 0 : f.segmentId) === r && ((g = this.showing) == null ? void 0 : g.segmentPage) === o && ((d = this.showing) == null ? void 0 : d.startIndex) === s && ((p = this.showing) == null ? void 0 : p.endIndex) === c || (this._infoPopup && this._infoPopup.dispose(), !this._univerInstanceService.getUnit(i, I.UNIVER_DOC))))
      return this._showingLink$.next({ unitId: i, linkId: t, segmentId: r, segmentPage: o, startIndex: s, endIndex: c }), this._infoPopup = this._docCanvasPopupManagerService.attachPopupToRange(
        {
          collapsed: !1,
          startOffset: s,
          endOffset: c + 1,
          segmentId: r,
          segmentPage: o
        },
        {
          componentKey: K.componentKey,
          direction: "top-center",
          multipleDirection: "top",
          onClickOutside: () => {
            this.hideInfoPopup();
          }
        },
        i
      ), this._infoPopup;
  }
  hideInfoPopup() {
    var e;
    this._showingLink$.next(null), (e = this._infoPopup) == null || e.dispose();
  }
};
S = Un([
  G(0, m(tn)),
  G(1, m(R)),
  G(2, k)
], S);
var Tn = Object.getOwnPropertyDescriptor, Hn = (n, e, t, i) => {
  for (var r = i > 1 ? void 0 : i ? Tn(e, t) : e, o = n.length - 1, s; o >= 0; o--)
    (s = n[o]) && (r = s(r) || r);
  return r;
}, z = (n, e) => (t, i) => e(t, i, n);
let F = class extends D {
  constructor(n, e, t) {
    super(), this._commandService = n, this._univerInstanceService = e, this._docHyperLinkService = t, this._initSelectionChange();
  }
  _initSelectionChange() {
    this.disposeWithMe(
      this._commandService.onCommandExecuted((n) => {
        var e, t, i;
        if (n.id === Qe.id) {
          const r = n.params, { unitId: o, ranges: s, segmentId: c } = r, l = this._univerInstanceService.getUnit(o, I.UNIVER_DOC), u = s[0];
          if (u && l) {
            const { startOffset: v, endOffset: f, collapsed: g, segmentPage: d } = u, p = (t = (e = l.getSelfOrHeaderFooterModel(c)) == null ? void 0 : e.getBody()) == null ? void 0 : t.customRanges;
            if (g) {
              const _ = (i = p == null ? void 0 : p.findIndex((a) => a.startIndex < v && a.endIndex > f - 1)) != null ? i : -1;
              if (_ > -1) {
                const a = p[_];
                this._docHyperLinkService.showInfoPopup({ unitId: o, linkId: a.rangeId, segmentId: c, segmentPage: d, startIndex: a.startIndex, endIndex: a.endIndex });
                return;
              }
            } else if (p == null ? void 0 : p.find((a) => a.startIndex <= v && a.endIndex >= f - 1))
              return;
          }
          this._docHyperLinkService.hideInfoPopup(), this._docHyperLinkService.hideEditPopup();
        }
      })
    );
  }
};
F = Hn([
  z(0, x),
  z(1, k),
  z(2, m(S))
], F);
var jn = Object.getOwnPropertyDescriptor, An = (n, e, t, i) => {
  for (var r = i > 1 ? void 0 : i ? jn(e, t) : e, o = n.length - 1, s; o >= 0; o--)
    (s = n[o]) && (r = s(r) || r);
  return r;
}, M = (n, e) => (t, i) => e(t, i, n);
let ee = class extends D {
  constructor(n, e, t, i, r, o) {
    super(), this._context = n, this._docEventManagerService = e, this._commandService = t, this._hyperLinkPopupService = i, this._docSkeletonManagerService = r, this._docSelectionManagerService = o, !(this._context.unitId === Ae || this._context.unitId === Ke) && (this._initHover(), this._initClick());
  }
  get _skeleton() {
    return this._docSkeletonManagerService.getSkeleton();
  }
  _hideInfoPopup() {
    this._hyperLinkPopupService.showing && this._commandService.executeCommand(
      X.id
    );
  }
  _initHover() {
    this.disposeWithMe(
      this._docEventManagerService.hoverCustomRanges$.subscribe((n) => {
        var r;
        const e = n.find((o) => o.range.rangeType === b.HYPERLINK), t = this._docSelectionManagerService.getTextRanges(), i = t == null ? void 0 : t[0].segmentId;
        if (((r = e == null ? void 0 : e.segmentId) != null ? r : "") !== i) {
          this._hideInfoPopup();
          return;
        }
        e ? this._commandService.executeCommand(
          X.id,
          {
            unitId: this._context.unitId,
            linkId: e.range.rangeId,
            segmentId: e.segmentId,
            segmentPage: e.segmentPageIndex,
            rangeId: e.range.rangeId,
            startIndex: e.range.startIndex,
            endIndex: e.range.endIndex
          }
        ) : this._hideInfoPopup();
      })
    );
  }
  _initClick() {
    this.disposeWithMe(
      this._docEventManagerService.clickCustomRanges$.subscribe((n) => {
        const e = n.range;
        e && this._commandService.executeCommand(
          Ee.id,
          {
            unitId: this._context.unitId,
            linkId: e.rangeId,
            segmentId: n.segmentId
          }
        );
      })
    );
  }
};
ee = An([
  M(1, m(rn)),
  M(2, x),
  M(3, m(S)),
  M(4, m(Xe)),
  M(5, m(R))
], ee);
var Kn = Object.getOwnPropertyDescriptor, Fn = (n, e, t, i) => {
  for (var r = i > 1 ? void 0 : i ? Kn(e, t) : e, o = n.length - 1, s; o >= 0; o--)
    (s = n[o]) && (r = s(r) || r);
  return r;
}, q = (n, e) => (t, i) => e(t, i, n);
let ne = class extends D {
  constructor(n, e, t, i) {
    super(), this._context = n, this._docInterceptorService = e, this._hyperLinkService = t, this._docRenderController = i, this._init(), this._initReRender();
  }
  _init() {
    this._docInterceptorService.intercept(nn.CUSTOM_RANGE, {
      handler: (n, e, t) => {
        if (!n)
          return t(n);
        const { unitId: i, index: r } = e, o = this._hyperLinkService.showing;
        if (!o)
          return t({
            ...n,
            active: !1
          });
        const { linkId: s, unitId: c, startIndex: l, endIndex: u } = o, v = c === i && n.rangeId === s && r >= l && r <= u;
        return t({
          ...n,
          active: v
        });
      }
    });
  }
  _initReRender() {
    this.disposeWithMe(this._hyperLinkService.showingLink$.pipe(
      cn((n, e) => (n == null ? void 0 : n.linkId) === (e == null ? void 0 : e.linkId) && (n == null ? void 0 : n.unitId) === (e == null ? void 0 : e.unitId) && (n == null ? void 0 : n.startIndex) === (e == null ? void 0 : e.startIndex)),
      dn()
    ).subscribe(([n, e]) => {
      e ? e.unitId === this._context.unitId && this._docRenderController.reRender(e.unitId) : n && n.unitId === this._context.unitId && this._docRenderController.reRender(n.unitId);
    }));
  }
};
ne = Fn([
  q(1, m(en)),
  q(2, m(S)),
  q(3, m(on))
], ne);
const Ne = "doc-hyper-link-icon";
function _e(n) {
  return {
    id: w.id,
    type: vn.BUTTON,
    icon: Ne,
    title: "docLink.menu.tooltip",
    tooltip: "docLink.menu.tooltip",
    hidden$: hn(n, I.UNIVER_DOC),
    disabled$: new an(function(e) {
      const i = n.get(R).textSelection$.pipe(ln(16)).subscribe(() => {
        e.next(De(n));
      });
      return () => {
        i.unsubscribe();
      };
    })
  };
}
const Bn = {
  id: w.id,
  binding: gn.CTRL_COMMAND | Q.K,
  description: "docLink.menu.tooltip",
  preconditions: sn
}, Vn = {
  [In.MEDIA]: {
    [w.id]: {
      order: 1,
      menuItemFactory: _e
    }
  },
  [fn.MAIN_AREA]: {
    [mn.DATA]: {
      [w.id]: {
        order: 0,
        menuItemFactory: _e
      }
    }
  }
};
var Zn = Object.getOwnPropertyDescriptor, Yn = (n, e, t, i) => {
  for (var r = i > 1 ? void 0 : i ? Zn(e, t) : e, o = n.length - 1, s; o >= 0; o--)
    (s = n[o]) && (r = s(r) || r);
  return r;
}, j = (n, e) => (t, i) => e(t, i, n);
let B = class extends D {
  constructor(n, e, t, i) {
    super(), this._componentManager = n, this._commandService = e, this._menuManagerService = t, this._shortcutService = i, this._initComponents(), this._initCommands(), this._initMenus(), this._initShortcut();
  }
  _initComponents() {
    [
      [A.componentKey, A],
      [K.componentKey, K],
      [Ne, te]
    ].forEach(([n, e]) => {
      this.disposeWithMe(
        this._componentManager.register(n, e)
      );
    });
  }
  _initCommands() {
    [
      Le,
      Oe,
      be,
      w,
      X,
      Ee
    ].forEach((n) => {
      this._commandService.registerCommand(n);
    });
  }
  _initShortcut() {
    [Bn].forEach((n) => {
      this._shortcutService.registerShortcut(n);
    });
  }
  _initMenus() {
    this._menuManagerService.mergeMenu(Vn);
  }
};
B = Yn([
  j(0, m(_n)),
  j(1, x),
  j(2, Cn),
  j(3, Sn)
], B);
const Wn = "DOC_HYPER_LINK_UI_PLUGIN";
var Gn = Object.defineProperty, zn = Object.getOwnPropertyDescriptor, qn = (n, e, t) => e in n ? Gn(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t, Jn = (n, e, t, i) => {
  for (var r = i > 1 ? void 0 : i ? zn(e, t) : e, o = n.length - 1, s; o >= 0; o--)
    (s = n[o]) && (r = s(r) || r);
  return r;
}, J = (n, e) => (t, i) => e(t, i, n), $e = (n, e, t) => qn(n, typeof e != "symbol" ? e + "" : e, t);
let V = class extends Ze {
  constructor(n = Ie, e, t, i) {
    super(), this._config = n, this._injector = e, this._renderManagerSrv = t, this._configService = i;
    const { menu: r, ...o } = Ye(
      {},
      Ie,
      this._config
    );
    r && this._configService.setConfig("menu", r, { merge: !0 }), this._configService.setConfig(kn, o);
  }
  onStarting() {
    [
      [S],
      [B],
      [F]
    ].forEach((e) => {
      this._injector.add(e);
    }), this._injector.get(B);
  }
  onReady() {
    this._injector.get(F);
  }
  onRendered() {
    this._initRenderModule();
  }
  _initRenderModule() {
    [
      [ne],
      [ee]
    ].forEach((n) => {
      this._renderManagerSrv.registerRenderModule(I.UNIVER_DOC, n);
    });
  }
};
$e(V, "pluginName", Wn);
$e(V, "type", I.UNIVER_DOC);
V = Jn([
  Fe(We),
  J(1, m(Be)),
  J(2, Ge),
  J(3, Ve)
], V);
export {
  V as UniverDocsHyperLinkUIPlugin
};
