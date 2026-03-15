var Ie = Object.defineProperty;
var Se = (e, t, r) => t in e ? Ie(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Z = (e, t, r) => Se(e, typeof t != "symbol" ? t + "" : t, r);
import { CommandType as E, ICommandService as M, CustomDecorationType as Y, sequenceExecute as te, Inject as p, Disposable as j, UniverInstanceType as _, SHEET_EDITOR_UNITS as Oe, IUniverInstanceService as A, Injector as ne, isInternalEditorID as re, UserManagerService as Me, BuildTextUtils as De, DependentOn as be, IConfigService as Te, Plugin as xe, merge as Ue } from "@univerjs/core";
import { addCustomDecorationBySelectionFactory as Re, deleteCustomDecorationFactory as ye, DocSelectionRenderService as Ee, DocBackScrollRenderController as Ae, DocRenderController as $e } from "@univerjs/docs-ui";
import { IThreadCommentDataSourceService as Pe, AddCommentMutation as we, getDT as Ne, ThreadCommentModel as oe } from "@univerjs/thread-comment";
import { SetActiveCommentOperation as ie, ThreadCommentPanelService as U, ThreadCommentPanel as Ve, UniverThreadCommentUIPlugin as je } from "@univerjs/thread-comment-ui";
import { DocSelectionManagerService as B, DocSkeletonManagerService as Be, RichTextEditingMutation as se, SetTextSelectionsOperation as Fe, DocInterceptorService as He, DOC_INTERCEPTOR_POINT as Le } from "@univerjs/docs";
import { IRenderManagerService as F, withCurrentTypeOfRenderer as We, DocumentEditArea as X } from "@univerjs/engine-render";
import { ISidebarService as H, getMenuHiddenObservable as de, MenuItemType as ce, useDependency as y, useObservable as K, ContextMenuPosition as Ze, ContextMenuGroup as Ke, RibbonInsertGroup as Ge, IMenuManagerService as Je, ComponentManager as qe } from "@univerjs/ui";
import { BehaviorSubject as Ye, Observable as ae, debounceTime as me, filter as ze } from "rxjs";
import { jsx as Qe } from "react/jsx-runtime";
import { useMemo as G, useState as Xe, useEffect as ke, useRef as et, createElement as le, forwardRef as tt } from "react";
const nt = "DOC_THREAD_COMMENT_UI_PLUGIN", I = "default_doc", ue = {
  id: "docs.command.add-comment",
  type: E.COMMAND,
  async handler(e, t) {
    if (!t)
      return !1;
    const { comment: r, unitId: n } = t, i = await e.get(Pe).addComment(r), s = e.get(M), d = Re(
      e,
      {
        id: i.threadId,
        type: Y.COMMENT,
        unitId: n
      }
    );
    if (d) {
      const l = {
        id: we.id,
        params: {
          unitId: n,
          subUnitId: I,
          comment: i
        }
      }, C = {
        id: ie.id,
        params: {
          unitId: n,
          subUnitId: I,
          commentId: i.id
        }
      };
      return (await te([l, d, C], s)).result;
    }
    return !1;
  }
}, Ce = {
  id: "docs.command.delete-comment",
  type: E.COMMAND,
  async handler(e, t) {
    if (!t)
      return !1;
    const { commentId: r, unitId: n } = t, o = e.get(M), i = ye(e, {
      id: r,
      unitId: n
    });
    return i ? (await te([i], o)).result : !1;
  }
};
var rt = Object.getOwnPropertyDescriptor, ot = (e, t, r, n) => {
  for (var o = n > 1 ? void 0 : n ? rt(t, r) : t, i = e.length - 1, s; i >= 0; i--)
    (s = e[i]) && (o = s(o) || o);
  return o;
}, k = (e, t) => (r, n) => t(r, n, e);
let x = class extends j {
  constructor(t, r) {
    super();
    Z(this, "_addingComment$", new Ye(void 0));
    Z(this, "addingComment$", this._addingComment$.asObservable());
    this._sidebarService = t, this._threadCommentPanelService = r, this.disposeWithMe(() => {
      this._addingComment$.complete();
    });
  }
  get addingComment() {
    return this._addingComment$.getValue();
  }
  startAdd(t) {
    this._addingComment$.next(t);
  }
  endAdd() {
    this._addingComment$.next(void 0);
  }
};
x = ot([
  k(0, H),
  k(1, p(U))
], x);
const he = (e) => {
  var s;
  const t = e.get(F), r = e.get(B), n = (s = We(
    _.UNIVER_DOC,
    Be,
    e.get(A),
    t
  )) == null ? void 0 : s.getSkeleton(), o = n == null ? void 0 : n.getViewModel().getEditArea();
  if (o === X.FOOTER || o === X.HEADER)
    return !0;
  const i = r.getActiveTextRange();
  return !!(i == null || i.collapsed);
};
function it(e) {
  return {
    id: L.id,
    type: ce.BUTTON,
    icon: "CommentIcon",
    title: "threadCommentUI.panel.addComment",
    tooltip: "threadCommentUI.panel.addComment",
    hidden$: de(e, _.UNIVER_DOC, void 0, Oe),
    disabled$: new ae(function(t) {
      const n = e.get(B).textSelection$.pipe(me(16)).subscribe(() => {
        t.next(he(e));
      });
      return () => {
        n.unsubscribe();
      };
    })
  };
}
function st(e) {
  return {
    id: Q.id,
    type: ce.BUTTON,
    icon: "CommentIcon",
    title: "threadCommentUI.panel.addComment",
    tooltip: "threadCommentUI.panel.addComment",
    hidden$: de(e, _.UNIVER_DOC)
  };
}
const O = () => {
  const e = y(A), t = y(ne), r = G(() => e.getCurrentTypeOfUnit$(_.UNIVER_DOC).pipe(ze((c) => !!c && !re(c.getUnitId()))), [e]), n = K(r), o = G(() => new ae((c) => c.next(I)), []), i = y(B), s = G(
    () => i.textSelection$.pipe(me(16)),
    [i.textSelection$]
  );
  K(s);
  const d = y(M), l = y(x), C = K(l.addingComment$), [a, h] = Xe([]);
  if (ke(() => {
    var D;
    const c = /* @__PURE__ */ new Set(), m = n == null ? void 0 : n.getCustomDecorations();
    h((D = m == null ? void 0 : m.map((u) => u.id).filter((u) => {
      const S = c.has(u);
      return c.add(u), !S;
    })) != null ? D : []);
    const v = d.onCommandExecuted((u) => {
      var S;
      if (u.id === se.id) {
        const R = /* @__PURE__ */ new Set(), W = n == null ? void 0 : n.getCustomDecorations();
        h((S = W == null ? void 0 : W.map(($) => $.id).filter(($) => {
          const ve = R.has($);
          return R.add($), !ve;
        })) != null ? S : []);
      }
    });
    return () => {
      v.dispose();
    };
  }, [d, n]), !n)
    return null;
  const g = he(t), f = n.getUnitId();
  return /* @__PURE__ */ Qe(
    Ve,
    {
      unitId: f,
      subUnitId$: o,
      type: _.UNIVER_DOC,
      onAdd: () => {
        d.executeCommand(L.id);
      },
      getSubUnitName: () => "",
      disableAdd: g,
      tempComment: C,
      onAddComment: (c) => {
        if (!c.parentId) {
          const m = {
            unitId: f,
            range: C,
            comment: c
          };
          return d.executeCommand(ue.id, m), l.endAdd(), !1;
        }
        return !0;
      },
      onDeleteComment: (c) => {
        if (!c.parentId) {
          const m = {
            unitId: f,
            commentId: c.id
          };
          return d.executeCommand(Ce.id, m), !1;
        }
        return !0;
      },
      showComments: a
    }
  );
};
O.componentKey = "univer.doc.thread-comment-panel";
const P = {
  id: "docs.operation.show-comment-panel",
  type: E.OPERATION,
  handler(e, t) {
    var o;
    const r = e.get(U), n = e.get(H);
    return (!r.panelVisible || ((o = n.options.children) == null ? void 0 : o.label) !== O.componentKey) && (n.open({
      header: { title: "threadCommentUI.panel.title" },
      children: { label: O.componentKey },
      width: 320,
      onClose: () => r.setPanelVisible(!1)
    }), r.setPanelVisible(!0)), t && r.setActiveComment(t == null ? void 0 : t.activeComment), !0;
  }
}, Q = {
  id: "docs.operation.toggle-comment-panel",
  type: E.OPERATION,
  handler(e) {
    var n;
    const t = e.get(U), r = e.get(H);
    return !t.panelVisible || ((n = r.options.children) == null ? void 0 : n.label) !== O.componentKey ? (r.open({
      header: { title: "threadCommentUI.panel.title" },
      children: { label: O.componentKey },
      width: 320,
      onClose: () => t.setPanelVisible(!1)
    }), t.setPanelVisible(!0)) : (r.close(), t.setPanelVisible(!1), t.setActiveComment(null)), !0;
  }
}, L = {
  id: "docs.operation.start-add-comment",
  type: E.OPERATION,
  handler(e) {
    var u, S, R;
    const t = e.get(U), n = e.get(A).getCurrentUnitForType(_.UNIVER_DOC), o = e.get(B), i = e.get(F), s = e.get(Me), d = e.get(x), l = e.get(M), C = e.get(H), a = o.getActiveTextRange();
    if (!n || !a)
      return !1;
    const h = (u = i.getRenderById(n.getUnitId())) == null ? void 0 : u.with(Ee);
    if (h == null || h.setReserveRangesStatus(!0), a.collapsed)
      return t.panelVisible ? (t.setPanelVisible(!1), C.close()) : l.executeCommand(P.id), !0;
    l.executeCommand(P.id);
    const g = n.getUnitId(), f = ((R = (S = n.getBody()) == null ? void 0 : S.dataStream) != null ? R : "").slice(a.startOffset, a.endOffset), c = De.transform.getPlainText(f), m = I, v = "", D = {
      unitId: g,
      subUnitId: m,
      id: v,
      ref: c,
      dT: Ne(),
      personId: s.getCurrentUser().userID,
      text: {
        dataStream: `\r
`
      },
      startOffset: a.startOffset,
      endOffset: a.endOffset,
      collapsed: !0,
      threadId: v
    };
    return h == null || h.blur(), d.startAdd(D), t.setActiveComment({
      unitId: g,
      subUnitId: m,
      commentId: v
    }), !0;
  }
}, dt = "docs-thread-comment-ui.config", ee = {};
var ct = Object.getOwnPropertyDescriptor, at = (e, t, r, n) => {
  for (var o = n > 1 ? void 0 : n ? ct(t, r) : t, i = e.length - 1, s; i >= 0; i--)
    (s = e[i]) && (o = s(o) || o);
  return o;
}, b = (e, t) => (r, n) => t(r, n, e);
let w = class extends j {
  constructor(e, t, r, n, o, i) {
    super(), this._threadCommentPanelService = e, this._univerInstanceService = t, this._commandService = r, this._docThreadCommentService = n, this._renderManagerService = o, this._threadCommentModel = i, this._initSelectionChange(), this._initActiveCommandChange();
  }
  _initSelectionChange() {
    let e;
    this.disposeWithMe(
      this._commandService.onCommandExecuted((t) => {
        var r, n, o, i;
        if (t.id === Fe.id) {
          const s = t.params, { unitId: d, ranges: l } = s;
          if (re(d)) return;
          const C = this._univerInstanceService.getUnit(d, _.UNIVER_DOC), a = l[0];
          if ((e == null ? void 0 : e.startOffset) === (a == null ? void 0 : a.startOffset) && (e == null ? void 0 : e.endOffset) === (a == null ? void 0 : a.endOffset))
            return;
          if (e = a, a && C) {
            const { startOffset: h, endOffset: g, collapsed: f } = a;
            let c;
            if (f ? c = (n = (r = C.getBody()) == null ? void 0 : r.customDecorations) == null ? void 0 : n.find((m) => m.startIndex <= h && m.endIndex >= g - 1) : c = (i = (o = C.getBody()) == null ? void 0 : o.customDecorations) == null ? void 0 : i.find((m) => m.startIndex <= h && m.endIndex >= g - 1), c) {
              const m = this._threadCommentModel.getComment(d, I, c.id);
              m && !m.resolved && this._commandService.executeCommand(P.id, {
                activeComment: {
                  unitId: d,
                  subUnitId: I,
                  commentId: c.id
                }
              });
              return;
            }
          }
          if (!this._threadCommentPanelService.activeCommentId)
            return;
          this._commandService.executeCommand(ie.id);
        }
      })
    );
  }
  _initActiveCommandChange() {
    this.disposeWithMe(this._threadCommentPanelService.activeCommentId$.subscribe((e) => {
      var t, r, n, o;
      if (e) {
        const i = this._univerInstanceService.getUnit(e.unitId);
        if (i) {
          const s = (t = this._renderManagerService.getRenderById(e.unitId)) == null ? void 0 : t.with(Ae), d = (n = (r = i.getBody()) == null ? void 0 : r.customDecorations) == null ? void 0 : n.find((l) => l.id === e.commentId);
          d && s && s.scrollToRange({
            startOffset: d.startIndex,
            endOffset: d.endIndex,
            collapsed: !1
          });
        }
      }
      (!e || e.commentId !== ((o = this._docThreadCommentService.addingComment) == null ? void 0 : o.id)) && this._docThreadCommentService.endAdd();
    }));
  }
};
w = at([
  b(0, p(U)),
  b(1, A),
  b(2, M),
  b(3, p(x)),
  b(4, F),
  b(5, p(oe))
], w);
function fe({ ref: e, ...t }) {
  const { icon: r, id: n, className: o, extend: i, ...s } = t, d = `univerjs-icon univerjs-icon-${n} ${o || ""}`.trim(), l = et(`_${ut()}`);
  return ge(r, `${n}`, {
    defIds: r.defIds,
    idSuffix: l.current
  }, {
    ref: e,
    className: d,
    ...s
  }, i);
}
function ge(e, t, r, n, o) {
  return le(e.tag, {
    key: t,
    ...mt(e, r, o),
    ...n
  }, (lt(e, r).children || []).map((i, s) => ge(i, `${t}-${e.tag}-${s}`, r, void 0, o)));
}
function mt(e, t, r) {
  const n = { ...e.attrs };
  r != null && r.colorChannel1 && n.fill === "colorChannel1" && (n.fill = r.colorChannel1), e.tag === "mask" && n.id && (n.id = n.id + t.idSuffix), Object.entries(n).forEach(([i, s]) => {
    i === "mask" && typeof s == "string" && (n[i] = s.replace(/url\(#(.*)\)/, `url(#$1${t.idSuffix})`));
  });
  const { defIds: o } = t;
  return !o || o.length === 0 || (e.tag === "use" && n["xlink:href"] && (n["xlink:href"] = n["xlink:href"] + t.idSuffix), Object.entries(n).forEach(([i, s]) => {
    typeof s == "string" && (n[i] = s.replace(/url\(#(.*)\)/, `url(#$1${t.idSuffix})`));
  })), n;
}
function lt(e, t) {
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
function ut() {
  return Math.random().toString(36).substring(2, 8);
}
fe.displayName = "UniverIcon";
const Ct = {
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
}, pe = tt(function(t, r) {
  return le(fe, Object.assign({}, t, {
    id: "comment-icon",
    ref: r,
    icon: Ct
  }));
});
pe.displayName = "CommentIcon";
const ht = {
  [Ge.MEDIA]: {
    [Q.id]: {
      order: 3,
      menuItemFactory: st
    }
  },
  [Ze.MAIN_AREA]: {
    [Ke.DATA]: {
      [L.id]: {
        order: 1,
        menuItemFactory: it
      }
    }
  }
};
var ft = Object.getOwnPropertyDescriptor, gt = (e, t, r, n) => {
  for (var o = n > 1 ? void 0 : n ? ft(t, r) : t, i = e.length - 1, s; i >= 0; i--)
    (s = e[i]) && (o = s(o) || o);
  return o;
}, J = (e, t) => (r, n) => t(r, n, e);
let N = class extends j {
  constructor(e, t, r) {
    super(), this._commandService = e, this._menuManagerService = t, this._componentManager = r, this._initCommands(), this._initMenus(), this._initComponents();
  }
  _initCommands() {
    [
      ue,
      Ce,
      P,
      L,
      Q
    ].forEach((e) => {
      this.disposeWithMe(this._commandService.registerCommand(e));
    });
  }
  _initMenus() {
    this._menuManagerService.mergeMenu(ht);
  }
  _initComponents() {
    [
      [O.componentKey, O],
      ["CommentIcon", pe]
    ].forEach(([e, t]) => {
      this.disposeWithMe(
        this._componentManager.register(e, t)
      );
    });
  }
};
N = gt([
  J(0, M),
  J(1, Je),
  J(2, p(qe))
], N);
var pt = Object.getOwnPropertyDescriptor, _t = (e, t, r, n) => {
  for (var o = n > 1 ? void 0 : n ? pt(t, r) : t, i = e.length - 1, s; i >= 0; i--)
    (s = e[i]) && (o = s(o) || o);
  return o;
}, T = (e, t) => (r, n) => t(r, n, e);
let z = class extends j {
  constructor(e, t, r, n, o, i, s) {
    super(), this._context = e, this._docInterceptorService = t, this._threadCommentPanelService = r, this._docRenderController = n, this._univerInstanceService = o, this._threadCommentModel = i, this._commandService = s, this._interceptorViewModel(), this._initReRender(), this._initSyncComments();
  }
  _initReRender() {
    this.disposeWithMe(this._threadCommentPanelService.activeCommentId$.subscribe((e) => {
      var r;
      if (e) {
        this._docRenderController.reRender(e.unitId);
        return;
      }
      const t = (r = this._univerInstanceService.getCurrentUnitForType(_.UNIVER_DOC)) == null ? void 0 : r.getUnitId();
      t && this._docRenderController.reRender(t);
    })), this.disposeWithMe(this._threadCommentModel.commentUpdate$.subscribe((e) => {
      e.type === "resolve" && this._docRenderController.reRender(e.unitId);
    }));
  }
  _interceptorViewModel() {
    this._docInterceptorService.intercept(Le.CUSTOM_DECORATION, {
      handler: (e, t, r) => {
        if (!e)
          return r(e);
        const { unitId: n, index: o, customDecorations: i } = t, s = this._threadCommentPanelService.activeCommentId, { commentId: d, unitId: l } = s || {}, C = i.find((f) => f.id === d), a = this._threadCommentModel.getComment(n, I, e.id);
        if (!a)
          return r({
            ...e,
            show: !1
          });
        const h = C && o >= C.startIndex && o <= C.endIndex, g = l === n && e.id === d;
        return r({
          ...e,
          active: g || h,
          show: !a.resolved
        });
      }
    });
  }
  _initSyncComments() {
    var o, i, s;
    const e = this._context.unit.getUnitId(), t = I, r = (s = (i = (o = this._context.unit.getBody()) == null ? void 0 : o.customDecorations) == null ? void 0 : i.filter((d) => d.type === Y.COMMENT).map((d) => d.id)) != null ? s : [];
    r.forEach((d) => {
      this._threadCommentModel.getComment(e, t, d) || this._threadCommentModel.addComment(e, t, { id: d, threadId: d, ref: "", dT: "", personId: "", text: { dataStream: "" }, unitId: e, subUnitId: t });
    }), r.length && this._threadCommentModel.syncThreadComments(this._context.unit.getUnitId(), I, r);
    let n = r.sort();
    this.disposeWithMe(this._commandService.onCommandExecuted((d) => {
      var l, C, a;
      if (d.id === se.id) {
        if (d.params.unitId !== this._context.unit.getUnitId())
          return;
        const g = (a = (C = (l = this._context.unit.getBody()) == null ? void 0 : l.customDecorations) == null ? void 0 : C.filter((c) => c.type === Y.COMMENT).map((c) => c.id)) != null ? a : [], f = g.sort();
        if (JSON.stringify(n) !== JSON.stringify(f)) {
          const c = new Set(n), m = new Set(f), v = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Set();
          g.forEach((u) => {
            c.has(u) || v.add(u);
          }), n.forEach((u) => {
            m.has(u) || D.add(u);
          }), n = f, v.forEach((u) => {
            this._threadCommentModel.getComment(e, t, u) || this._threadCommentModel.addComment(e, t, { id: u, threadId: u, ref: "", dT: "", personId: "", text: { dataStream: "" }, unitId: e, subUnitId: t });
          }), this._threadCommentModel.syncThreadComments(e, t, [...v]);
        }
      }
    }));
  }
};
z = _t([
  T(1, p(He)),
  T(2, p(U)),
  T(3, p($e)),
  T(4, A),
  T(5, p(oe)),
  T(6, M)
], z);
var vt = Object.defineProperty, It = Object.getOwnPropertyDescriptor, St = (e, t, r) => t in e ? vt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ot = (e, t, r, n) => {
  for (var o = n > 1 ? void 0 : n ? It(t, r) : t, i = e.length - 1, s; i >= 0; i--)
    (s = e[i]) && (o = s(o) || o);
  return o;
}, q = (e, t) => (r, n) => t(r, n, e), _e = (e, t, r) => St(e, typeof t != "symbol" ? t + "" : t, r);
let V = class extends xe {
  constructor(e = ee, t, r, n) {
    super(), this._config = e, this._injector = t, this._renderManagerSrv = r, this._configService = n;
    const { menu: o, ...i } = Ue(
      {},
      ee,
      this._config
    );
    o && this._configService.setConfig("menu", o, { merge: !0 }), this._configService.setConfig(dt, i);
  }
  onStarting() {
    [
      [N],
      [w],
      [x]
    ].forEach((e) => {
      this._injector.add(e);
    });
  }
  onRendered() {
    this._initRenderModule(), this._injector.get(w), this._injector.get(N);
  }
  _initRenderModule() {
    [z].forEach((e) => {
      this._renderManagerSrv.registerRenderModule(_.UNIVER_DOC, e);
    });
  }
};
_e(V, "pluginName", nt);
_e(V, "type", _.UNIVER_DOC);
V = Ot([
  be(je),
  q(1, p(ne)),
  q(2, F),
  q(3, Te)
], V);
export {
  ue as AddDocCommentComment,
  Ce as DeleteDocCommentComment,
  P as ShowCommentPanelOperation,
  L as StartAddCommentOperation,
  V as UniverDocsThreadCommentUIPlugin
};
