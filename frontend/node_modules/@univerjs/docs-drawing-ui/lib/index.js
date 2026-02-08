var Pn = Object.defineProperty;
var xn = (r, e, t) => e in r ? Pn(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var me = (r, e, t) => xn(r, typeof e != "symbol" ? e + "" : e, t);
import { CommandType as q, ICommandService as j, IUniverInstanceService as z, TextX as _t, JSONX as $, MemoryCursor as Nn, TextXActionType as Y, IUndoRedoService as Kt, BuildTextUtils as Un, ArrangeTypeEnum as Ze, Tools as Ae, Inject as Z, IContextService as Yt, LocaleService as lt, Disposable as xe, WrapTextType as $e, PositionedObjectLayoutType as k, BooleanNumber as se, DrawingTypeEnum as Pe, ObjectRelativeFromV as W, ObjectRelativeFromH as J, FOCUSING_COMMON_DRAWINGS as nt, UniverInstanceType as ve, Direction as he, DisposableCollection as Ln, toDisposable as ze, fromEventSubject as Zt, generateRandomId as Qt, DocumentFlavor as pt, DOCS_ZEN_EDITOR_UNIT_ID_KEY as St, FOCUSING_UNIVER_EDITOR as Bn, UndoCommand as Fn, RedoCommand as kn, Injector as Jt, DOC_DRAWING_PRINTING_COMPONENT_KEY as Wn, throttle as Et, COLORS as Gn, RxDisposable as Hn, LifecycleService as jn, LifecycleStages as Rt, DependentOn as Vn, IConfigService as $n, Plugin as zn, merge as Xn } from "@univerjs/core";
import { IDocDrawingService as Ne, UniverDocsDrawingPlugin as qn } from "@univerjs/docs-drawing";
import { RichTextEditingMutation as ee, DocSelectionManagerService as Dt, DocSkeletonManagerService as te } from "@univerjs/docs";
import { DocSelectionRenderService as Me, getRichTextEditPath as Xe, getCustomBlockIdsInSelections as Kn, docDrawingPositionToTransform as en, VIEWPORT_KEY as tn, SetDocZoomRatioOperation as nn, DocPrintInterceptorService as Yn, NodePositionConvertToCursor as At, getOneTextSelectionRange as Pt, getAnchorBounding as Zn, TEXT_RANGE_LAYER_INDEX as Qn, getDocObject as Jn, DocCanvasPopManagerService as ei, IEditorService as ti } from "@univerjs/docs-ui";
import { IRenderManagerService as Q, DocumentEditArea as Fe, getCurrentTypeOfRenderer as ni, CURSOR_TYPE as xt, Liquid as rn, PageLayoutType as Nt, DocumentSkeletonPageType as Ut, Vector2 as ii, Rect as ri, getColor as si, TRANSFORM_CHANGE_OBSERVABLE_TYPE as oi } from "@univerjs/engine-render";
import { MessageType as Lt, clsx as sn, InputNumber as Be, Select as Bt, Checkbox as ai, RadioGroup as Ft, Radio as Te, render as ci, unmount as di } from "@univerjs/design";
import { IImageIoService as gi, IDrawingManagerService as fe, DRAWING_IMAGE_ALLOW_IMAGE_LIST as li, DRAWING_IMAGE_COUNT_LIMIT as kt, ImageUploadStatusType as mt, DRAWING_IMAGE_ALLOW_SIZE as ui, getImageSize as hi, getDrawingShapeKeyByDrawingSearch as fi, DRAWING_IMAGE_WIDTH_LIMIT as Wt, DRAWING_IMAGE_HEIGHT_LIMIT as Gt, UniverDrawingPlugin as pi } from "@univerjs/drawing";
import { IMessageService as mi, ILocalFileService as wi, ISidebarService as vi, CanvasFloatDomService as Ii, useDependency as we, getMenuHiddenObservable as on, MenuItemType as an, RibbonInsertGroup as _i, KeyCode as ke, ComponentManager as cn, IMenuManagerService as Si, IShortcutService as Di, PrintFloatDomSingle as Oi, connectInjector as Ti, UniverUIPlugin as Mi } from "@univerjs/ui";
import { BehaviorSubject as Ot, debounceTime as dn, map as Ht, switchMap as yi, of as bi, Observable as Ci, takeUntil as jt, filter as Vt } from "rxjs";
import { DrawingRenderService as gn, DrawingCommonPanel as Ei, ImageCropperObject as Ri, COMPONENT_IMAGE_POPUP_MENU as Ai, OpenImageCropOperation as Pi, ImageResetSizeOperation as xi, UniverDrawingUIPlugin as Ni } from "@univerjs/drawing-ui";
import { jsxs as X, jsx as M } from "react/jsx-runtime";
import { useState as re, useEffect as Tt, useMemo as Ui } from "react";
const Mt = {
  id: "doc.command.remove-doc-image",
  type: q.COMMAND,
  // eslint-disable-next-line max-lines-per-function
  handler: (r, e) => {
    var C, y, A, L;
    const t = r.get(j), n = r.get(z), i = r.get(Q), s = n.getCurrentUniverDocInstance();
    if (e == null || s == null)
      return !1;
    const o = i.getRenderById(e.unitId).with(Me), { drawings: c } = e, d = (C = o.getSegment()) != null ? C : "", a = new _t(), g = $.getInstance(), u = (A = (y = s.getSelfOrHeaderFooterModel(d).getBody()) == null ? void 0 : y.customBlocks) != null ? A : [], l = c.map((R) => u.find((v) => v.blockId === R.drawingId)).filter((R) => !!R).sort((R, v) => R.startIndex > v.startIndex ? 1 : -1), f = c[0].unitId, h = new Nn();
    h.reset();
    const m = l[0].startIndex, p = [
      {
        startOffset: m,
        endOffset: m
      }
    ], w = {
      id: ee.id,
      params: {
        unitId: f,
        actions: [],
        textRanges: p
      }
    }, D = [];
    for (const R of l) {
      const { startIndex: v } = R;
      v > h.cursor && a.push({
        t: Y.RETAIN,
        len: v - h.cursor
      }), a.push({
        t: Y.DELETE,
        len: 1
      }), h.moveCursorTo(v + 1);
    }
    const S = Xe(s, d);
    D.push(g.editOp(a.serialize(), S));
    for (const R of l) {
      const { blockId: v } = R, N = ((L = s.getDrawings()) != null ? L : {})[v], x = s.getDrawingsOrder().indexOf(v), H = g.removeOp(["drawings", v], N), I = g.removeOp(["drawingsOrder", x], v);
      D.push(H), D.push(I);
    }
    return w.params.actions = D.reduce((R, v) => $.compose(R, v), null), !!t.syncExecuteCommand(w.id, w.params);
  }
}, ln = {
  id: "doc.command.delete-drawing",
  type: q.COMMAND,
  handler: (r) => {
    const e = r.get(j), n = r.get(Ne).getFocusDrawings();
    if (n.length === 0)
      return !1;
    const { unitId: i } = n[0], s = n.map((o) => {
      const { unitId: c, subUnitId: d, drawingId: a, drawingType: g } = o;
      return {
        unitId: c,
        subUnitId: d,
        drawingId: a,
        drawingType: g
      };
    });
    return e.executeCommand(Mt.id, {
      unitId: i,
      drawings: s
    });
  }
}, un = {
  id: "doc.command.group-doc-image",
  type: q.COMMAND,
  handler: (r, e) => {
    r.get(j), r.get(Kt);
    const t = r.get(Ne);
    if (!e) return !1;
    const n = [];
    e.forEach(({ parent: g, children: u }) => {
      n.push(g.unitId), u.forEach((l) => {
        n.push(l.unitId);
      });
    });
    const i = t.getGroupDrawingOp(e), { unitId: s, subUnitId: o, undo: c, redo: d, objects: a } = i;
    return !1;
  }
}, yt = {
  id: "doc.command.insert-doc-image",
  type: q.COMMAND,
  // eslint-disable-next-line max-lines-per-function
  handler: (r, e) => {
    var y, A, L, R;
    if (e == null)
      return !1;
    const t = r.get(j), n = r.get(Dt), i = r.get(z), s = n.getActiveTextRange(), o = i.getCurrentUniverDocInstance();
    if (s == null || o == null)
      return !1;
    const c = o.getUnitId(), { drawings: d } = e, { collapsed: a, startOffset: g, segmentId: u } = s, l = o.getSelfOrHeaderFooterModel(u).getBody();
    if (l == null)
      return !1;
    const f = new _t(), h = $.getInstance(), m = [], p = (A = (y = o.getSnapshot().drawingsOrder) == null ? void 0 : y.length) != null ? A : 0;
    let w = 0;
    if (a)
      g > 0 && f.push({
        t: Y.RETAIN,
        len: g
      });
    else {
      const v = Un.selection.delete([s], l, 0, null, !1);
      f.push(...v);
      const N = Kn(l, [s]), G = (L = o.getDrawings()) != null ? L : {}, x = (R = o.getDrawingsOrder()) != null ? R : [], H = N.sort((I, _) => x.indexOf(I) > x.indexOf(_) ? -1 : x.indexOf(I) < x.indexOf(_) ? 1 : 0);
      if (H.length > 0)
        for (const I of H) {
          const _ = G[I], E = x.indexOf(I);
          if (_ == null || E < 0)
            continue;
          const T = h.removeOp(["drawings", I], _), U = h.removeOp(["drawingsOrder", E], I);
          m.push(T), m.push(U), w++;
        }
    }
    f.push({
      t: Y.INSERT,
      body: {
        dataStream: "\b".repeat(d.length),
        customBlocks: d.map((v, N) => ({
          startIndex: N,
          blockId: v.drawingId
        }))
      },
      len: d.length
    });
    const D = Xe(o, u), S = h.editOp(f.serialize(), D);
    m.push(S);
    for (const v of d) {
      const { drawingId: N } = v, G = h.insertOp(["drawings", N], v), x = h.insertOp(["drawingsOrder", p - w], N);
      m.push(G), m.push(x);
    }
    const O = {
      id: ee.id,
      params: {
        unitId: c,
        actions: [],
        textRanges: []
      }
    };
    return O.params.actions = m.reduce((v, N) => $.compose(v, N), null), !!t.syncExecuteCommand(O.id, O.params);
  }
}, hn = {
  id: "doc.command.set-drawing-arrange",
  type: q.COMMAND,
  handler: (r, e) => {
    const t = r.get(j), n = r.get(Ne);
    if (e == null)
      return !1;
    const { unitId: i, subUnitId: s, drawingIds: o, arrangeType: c } = e, d = { unitId: i, subUnitId: s, drawingIds: o };
    let a;
    if (c === Ze.forward ? a = n.getForwardDrawingsOp(d) : c === Ze.backward ? a = n.getBackwardDrawingOp(d) : c === Ze.front ? a = n.getFrontDrawingsOp(d) : c === Ze.back && (a = n.getBackDrawingsOp(d)), a == null)
      return !1;
    const { redo: g } = a;
    if (g == null)
      return !1;
    const u = [];
    let l = Ae.deepClone(g);
    l = l.slice(3), l.unshift("drawingsOrder"), u.push(l);
    const f = {
      id: ee.id,
      params: {
        unitId: i,
        actions: [],
        textRanges: null
      }
    };
    return f.params.actions = u.reduce((m, p) => $.compose(m, p), null), !!t.syncExecuteCommand(f.id, f.params);
  }
}, fn = {
  id: "doc.command.ungroup-doc-image",
  type: q.COMMAND,
  handler: (r, e) => {
    r.get(j), r.get(Kt);
    const t = r.get(Ne);
    if (!e) return !1;
    const n = [];
    e.forEach(({ parent: g, children: u }) => {
      n.push(g.unitId), u.forEach((l) => {
        n.push(l.unitId);
      });
    });
    const i = t.getUngroupDrawingOp(e), { unitId: s, subUnitId: o, undo: c, redo: d, objects: a } = i;
    return !1;
  }
};
class ut {
  constructor() {
    me(this, "_refreshDrawings$", new Ot(null));
    me(this, "refreshDrawings$", this._refreshDrawings$.asObservable());
  }
  refreshDrawings(e) {
    this._refreshDrawings$.next(e);
  }
}
var Li = Object.getOwnPropertyDescriptor, Bi = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Li(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (i = o(i) || i);
  return i;
}, le = (r, e) => (t, n) => e(t, n, r);
let it = class extends xe {
  constructor(r, e, t, n, i, s, o, c, d, a, g, u, l) {
    super(), this._context = r, this._commandService = e, this._docSelectionManagerService = t, this._renderManagerSrv = n, this._imageIoService = i, this._docDrawingService = s, this._drawingManagerService = o, this._contextService = c, this._messageService = d, this._localeService = a, this._docSelectionRenderService = g, this._docRefreshDrawingsService = u, this._fileOpenerService = l, this._updateOrderListener(), this._groupDrawingListener(), this._focusDrawingListener(), this._transformDrawingListener(), this._editAreaChangeListener();
  }
  dispose() {
    super.dispose(), delete this._context;
  }
  async insertDocImage() {
    const r = await this._fileOpenerService.openFile({
      multiple: !0,
      accept: li.map((t) => `.${t.replace("image/", "")}`).join(",")
    }), e = r.length;
    return e > kt ? (this._messageService.show({
      type: Lt.Error,
      content: this._localeService.t("update-status.exceedMaxCount", String(kt))
    }), !1) : e === 0 ? !1 : (await this._insertFloatImages(r), !0);
  }
  // eslint-disable-next-line max-lines-per-function
  async _insertFloatImages(r) {
    let e = [];
    try {
      e = await Promise.all(r.map((i) => this._imageIoService.saveImage(i)));
    } catch (i) {
      const s = i.message;
      let o = "";
      switch (s) {
        case mt.ERROR_EXCEED_SIZE:
          o = this._localeService.t("update-status.exceedMaxSize", String(ui / (1024 * 1024)));
          break;
        case mt.ERROR_IMAGE_TYPE:
          o = this._localeService.t("update-status.invalidImageType");
          break;
        case mt.ERROR_IMAGE:
          o = this._localeService.t("update-status.invalidImage");
          break;
      }
      this._messageService.show({
        type: Lt.Error,
        content: o
      });
    }
    if (e.length === 0)
      return;
    const { unitId: t } = this._context, n = [];
    for (const i of e) {
      if (i == null)
        continue;
      const { imageId: s, imageSourceType: o, source: c, base64Cache: d } = i, { width: a, height: g, image: u } = await hi(d || "");
      this._imageIoService.addImageSourceCache(s, o, u);
      let l = 1;
      if (a > Wt || g > Gt) {
        const p = Wt / a, w = Gt / g;
        l = Math.min(p, w);
      }
      const f = this._getImagePosition(a * l, g * l);
      if (f == null)
        return;
      const h = {
        unitId: t,
        subUnitId: t,
        drawingId: s,
        drawingType: Pe.DRAWING_IMAGE,
        imageSourceType: o,
        source: c,
        transform: en(f),
        docTransform: f,
        behindDoc: se.FALSE,
        title: "",
        description: "",
        layoutType: k.INLINE,
        // Insert inline drawing by default.
        wrapText: $e.BOTH_SIDES,
        distB: 0,
        distL: 0,
        distR: 0,
        distT: 0
      };
      this._isInsertInHeaderFooter() && (h.isMultiTransform = se.TRUE, h.transforms = h.transform ? [h.transform] : null), n.push(h);
    }
    this._commandService.executeCommand(yt.id, {
      unitId: t,
      drawings: n
    });
  }
  _isInsertInHeaderFooter() {
    var n;
    const { unitId: r } = this._context, e = (n = this._renderManagerSrv.getRenderById(r)) == null ? void 0 : n.with(te).getViewModel(), t = e == null ? void 0 : e.getEditArea();
    return t === Fe.HEADER || t === Fe.FOOTER;
  }
  _getImagePosition(r, e) {
    const t = this._docSelectionRenderService.getActiveTextRange(), n = (t == null ? void 0 : t.getAbsolutePosition()) || {
      left: 0
    };
    return {
      size: {
        width: r,
        height: e
      },
      positionH: {
        relativeFrom: J.PAGE,
        posOffset: n.left
      },
      positionV: {
        relativeFrom: W.PARAGRAPH,
        posOffset: 0
      },
      angle: 0
    };
  }
  _updateOrderListener() {
    this.disposeWithMe(
      this._drawingManagerService.featurePluginOrderUpdate$.subscribe((r) => {
        const { unitId: e, subUnitId: t, drawingIds: n, arrangeType: i } = r;
        this._commandService.executeCommand(hn.id, {
          unitId: e,
          subUnitId: t,
          drawingIds: n,
          arrangeType: i
        });
      })
    );
  }
  _groupDrawingListener() {
    this.disposeWithMe(
      this._drawingManagerService.featurePluginGroupUpdate$.subscribe((r) => {
        this._commandService.executeCommand(un.id, r);
      })
    ), this.disposeWithMe(
      this._drawingManagerService.featurePluginUngroupUpdate$.subscribe((r) => {
        this._commandService.executeCommand(fn.id, r);
      })
    );
  }
  _getCurrentSceneAndTransformer() {
    const { scene: r, mainComponent: e } = this._context;
    if (r == null || e == null)
      return;
    const t = r.getTransformerByCreate(), { docsLeft: n, docsTop: i } = e.getOffsetConfig();
    return { scene: r, transformer: t, docsLeft: n, docsTop: i };
  }
  _transformDrawingListener() {
    const r = this._getCurrentSceneAndTransformer();
    if (r && r.transformer)
      this.disposeWithMe(r.transformer.changeEnd$.pipe(dn(30)).subscribe((e) => {
        this._docSelectionManagerService.refreshSelection();
      }));
    else
      throw new Error("transformer is not init");
  }
  _focusDrawingListener() {
    this.disposeWithMe(
      this._drawingManagerService.focus$.subscribe((r) => {
        var i;
        const { transformer: e, docsLeft: t, docsTop: n } = (i = this._getCurrentSceneAndTransformer()) != null ? i : {};
        if (r == null || r.length === 0)
          this._contextService.setContextValue(nt, !1), this._docDrawingService.focusDrawing([]), e && e.resetProps({
            zeroTop: 0,
            zeroLeft: 0
          });
        else {
          this._contextService.setContextValue(nt, !0), this._docDrawingService.focusDrawing(r), this._setDrawingSelections(r);
          const s = this._docSelectionRenderService.getSegment(), o = this._findSegmentIdByDrawingId(r[0].drawingId);
          s !== o && this._docSelectionRenderService.setSegment(o), e && e.resetProps({
            zeroTop: n,
            zeroLeft: t
          });
        }
      })
    );
  }
  _findSegmentIdByDrawingId(r) {
    var o, c, d;
    const { unit: e } = this._context, { body: t, headers: n = {}, footers: i = {} } = e.getSnapshot();
    if (((o = t == null ? void 0 : t.customBlocks) != null ? o : []).some((a) => a.blockId === r))
      return "";
    for (const a of Object.keys(n))
      if ((c = n[a].body.customBlocks) != null && c.some((g) => g.blockId === r))
        return a;
    for (const a of Object.keys(i))
      if ((d = i[a].body.customBlocks) != null && d.some((g) => g.blockId === r))
        return a;
    return "";
  }
  // Update drawings edit status and opacity. You can not edit header footer images when you are editing body. and vice verse.
  _updateDrawingsEditStatus() {
    var c;
    const { unit: r, scene: e, unitId: t } = this._context, n = (c = this._renderManagerSrv.getRenderById(t)) == null ? void 0 : c.with(te).getViewModel();
    if (n == null || r == null)
      return;
    const i = r.getSnapshot(), { drawings: s = {} } = i, o = n.getEditArea() === Fe.BODY;
    for (const d of Object.keys(s)) {
      const a = s[d], g = fi({ unitId: t, drawingId: a.drawingId, subUnitId: t }), u = e.fuzzyMathObjects(g, !0);
      if (u.length)
        for (const l of u) {
          e.detachTransformerFrom(l);
          try {
            l.setOpacity(0.5);
          } catch {
          }
          if (o && a.isMultiTransform !== se.TRUE || !o && a.isMultiTransform === se.TRUE) {
            a.allowTransform !== !1 && e.attachTransformerTo(l);
            try {
              l.setOpacity(1);
            } catch {
            }
          }
        }
    }
  }
  _editAreaChangeListener() {
    var t;
    const { unitId: r } = this._context, e = (t = this._renderManagerSrv.getRenderById(r)) == null ? void 0 : t.with(te).getViewModel();
    e != null && (this._updateDrawingsEditStatus(), this.disposeWithMe(
      e.editAreaChange$.subscribe(() => {
        this._updateDrawingsEditStatus();
      })
    ), this.disposeWithMe(
      this._docRefreshDrawingsService.refreshDrawings$.subscribe((n) => {
        n != null && queueMicrotask(() => {
          this._updateDrawingsEditStatus();
        });
      })
    ), this.disposeWithMe(
      this._commandService.onCommandExecuted(async (n) => {
        n.id === ee.id && queueMicrotask(() => {
          this._updateDrawingsEditStatus();
        });
      })
    ));
  }
  _setDrawingSelections(r) {
    var i, s;
    const { unit: e } = this._context, t = (s = (i = e.getSnapshot().body) == null ? void 0 : i.customBlocks) != null ? s : [], n = r.map((o) => {
      const c = o.drawingId, d = t.find((a) => a.blockId === c);
      return d ? d.startIndex : null;
    }).filter((o) => o !== null).map((o) => ({ startOffset: o, endOffset: o + 1 }));
    this._docSelectionManagerService.replaceDocRanges(n);
  }
};
it = Bi([
  le(1, j),
  le(2, Z(Dt)),
  le(3, Q),
  le(4, gi),
  le(5, Ne),
  le(6, fe),
  le(7, Yt),
  le(8, mi),
  le(9, Z(lt)),
  le(10, Z(Me)),
  le(11, Z(ut)),
  le(12, wi)
], it);
const pn = {
  id: "doc.command.insert-float-image",
  type: q.COMMAND,
  handler: (r) => {
    var n, i;
    const e = r.get(z), t = r.get(Q);
    return (i = (n = ni(ve.UNIVER_DOC, e, t)) == null ? void 0 : n.with(it).insertDocImage()) != null ? i : !1;
  }
};
var ue = /* @__PURE__ */ ((r) => (r.INLINE = "inline", r.BEHIND_TEXT = "behindText", r.IN_FRONT_OF_TEXT = "inFrontOfText", r.WRAP_SQUARE = "wrapSquare", r.WRAP_TOP_AND_BOTTOM = "wrapTopAndBottom", r))(ue || {});
const Fi = {
  inline: k.INLINE,
  wrapSquare: k.WRAP_SQUARE,
  wrapTopAndBottom: k.WRAP_TOP_AND_BOTTOM,
  inFrontOfText: k.WRAP_NONE,
  behindText: k.WRAP_NONE
};
function mn(r, e, t, n, i, s, o) {
  var f, h;
  const c = new _t(), d = $.getInstance(), a = [], g = s.getSelfOrHeaderFooterModel(e).getBody(), u = s.getSelfOrHeaderFooterModel(r).getBody();
  if (g == null || u == null)
    return;
  const l = (h = (f = g.customBlocks) == null ? void 0 : f.find((m) => m.blockId === i)) == null ? void 0 : h.startIndex;
  if (l != null) {
    if (n = Math.min(u.dataStream.length - 2, n), r === e) {
      if (n < l ? (n > 0 && c.push({
        t: Y.RETAIN,
        len: n
      }), c.push({
        t: Y.INSERT,
        body: {
          dataStream: "\b",
          customBlocks: [{
            startIndex: 0,
            blockId: i
          }]
        },
        len: 1
      }), c.push({
        t: Y.RETAIN,
        len: l - n
      }), c.push({
        t: Y.DELETE,
        len: 1
      })) : (l > 0 && c.push({
        t: Y.RETAIN,
        len: l
      }), c.push({
        t: Y.DELETE,
        len: 1
      }), n - l - 1 > 0 && c.push({
        t: Y.RETAIN,
        len: n - l - 1
      }), c.push({
        t: Y.INSERT,
        body: {
          dataStream: "\b",
          customBlocks: [{
            startIndex: 0,
            blockId: i
          }]
        },
        len: 1
      })), n !== l) {
        const m = Xe(s, e), p = d.editOp(c.serialize(), m);
        a.push(p);
      }
    } else {
      l > 0 && c.push({
        t: Y.RETAIN,
        len: l
      }), c.push({
        t: Y.DELETE,
        len: 1
      });
      let m = Xe(s, e), p = d.editOp(c.serialize(), m);
      a.push(p), c.empty(), n > 0 && c.push({
        t: Y.RETAIN,
        len: n
      }), c.push({
        t: Y.INSERT,
        body: {
          dataStream: "\b",
          customBlocks: [{
            startIndex: 0,
            blockId: i
          }]
        },
        len: 1
      }), m = Xe(s, r), p = d.editOp(c.serialize(), m), a.push(p), o.setSegment(r), o.setSegmentPage(t);
    }
    return a;
  }
}
const wn = {
  id: "doc.command.update-doc-drawing-wrapping-style",
  type: q.COMMAND,
  // eslint-disable-next-line max-lines-per-function, complexity
  handler: (r, e) => {
    var A, L;
    if (e == null)
      return !1;
    const { drawings: t, wrappingStyle: n, unitId: i } = e, s = r.get(j), o = r.get(z), d = r.get(Q).getRenderById(i), a = d == null ? void 0 : d.with(te).getSkeleton().getSkeletonData(), g = d == null ? void 0 : d.with(te).getViewModel(), u = d == null ? void 0 : d.scene, l = o.getCurrentUniverDocInstance();
    if (l == null || a == null || u == null || g == null)
      return !1;
    const f = g.getEditArea(), h = u.getTransformerByCreate(), { pages: m, skeHeaders: p, skeFooters: w } = a, D = $.getInstance(), S = [], { drawings: O = {} } = l.getSnapshot();
    for (const R of t) {
      const { drawingId: v } = R, N = O[v].layoutType, G = Fi[n];
      if (N !== G) {
        const _ = D.replaceOp(["drawings", v, "layoutType"], N, G);
        S.push(_);
      }
      if (n === "behindText" || n === "inFrontOfText") {
        const _ = O[v].behindDoc, E = n === "behindText" ? se.TRUE : se.FALSE;
        if (_ !== E) {
          const T = D.replaceOp(["drawings", v, "behindDoc"], _, E);
          S.push(T);
        }
      }
      if (n === "inline")
        continue;
      let x = null, H = 0, I = 0;
      for (const _ of m) {
        const { headerId: E, footerId: T, marginTop: U, marginLeft: B, marginBottom: b, pageWidth: P, pageHeight: V } = _;
        switch (f) {
          case Fe.HEADER: {
            const F = (A = p.get(E)) == null ? void 0 : A.get(P);
            F != null && F.skeDrawings.has(v) && (x = F.skeDrawings.get(v), H = F.marginTop, I = B);
            break;
          }
          case Fe.FOOTER: {
            const F = (L = w.get(T)) == null ? void 0 : L.get(P);
            F != null && F.skeDrawings.has(v) && (x = F.skeDrawings.get(v), H = V - b + F.marginTop, I = B);
            break;
          }
          case Fe.BODY: {
            _.skeDrawings.has(v) && (x = _.skeDrawings.get(v), H = U, I = B);
            break;
          }
        }
        if (x != null)
          break;
      }
      if (x != null) {
        const { aTop: _, aLeft: E } = x, T = O[v].docTransform.positionH;
        let U = E;
        T.relativeFrom === J.MARGIN ? U -= I : T.relativeFrom === J.COLUMN && (U -= x.columnLeft);
        const B = {
          relativeFrom: T.relativeFrom,
          posOffset: U
        };
        if (T.posOffset !== B.posOffset) {
          const F = D.replaceOp(["drawings", v, "docTransform", "positionH"], T, B);
          S.push(F);
        }
        const b = O[v].docTransform.positionV;
        let P = _;
        b.relativeFrom === W.PAGE ? P += H : b.relativeFrom === W.LINE ? P -= x.lineTop : b.relativeFrom === W.PARAGRAPH && (P -= x.blockAnchorTop);
        const V = {
          relativeFrom: b.relativeFrom,
          posOffset: P
        };
        if (b.posOffset !== V.posOffset) {
          const F = D.replaceOp(["drawings", v, "docTransform", "positionV"], b, V);
          S.push(F);
        }
      }
    }
    const C = {
      id: ee.id,
      params: {
        unitId: i,
        actions: [],
        textRanges: null
      }
    };
    C.params.actions = S.reduce((R, v) => $.compose(R, v), null);
    const y = s.syncExecuteCommand(C.id, C.params);
    return h.refreshControls(), !!y;
  }
}, vn = {
  id: "doc.command.update-doc-drawing-distance",
  type: q.COMMAND,
  handler: (r, e) => {
    if (e == null)
      return !1;
    const t = r.get(j), i = r.get(z).getCurrentUniverDocInstance();
    if (i == null)
      return !1;
    const { drawings: s, dist: o, unitId: c } = e, d = $.getInstance(), a = [], { drawings: g = {} } = i.getSnapshot();
    for (const f of s) {
      const { drawingId: h } = f;
      for (const [m, p] of Object.entries(o)) {
        const w = g[h][m];
        if (w !== p) {
          const D = d.replaceOp(["drawings", h, m], w, p);
          a.push(D);
        }
      }
    }
    const u = {
      id: ee.id,
      params: {
        unitId: c,
        actions: [],
        textRanges: null
      }
    };
    return u.params.actions = a.reduce((f, h) => $.compose(f, h), null), !!t.syncExecuteCommand(u.id, u.params);
  }
}, In = {
  id: "doc.command.update-doc-drawing-wrap-text",
  type: q.COMMAND,
  handler: (r, e) => {
    if (e == null)
      return !1;
    const t = r.get(j), i = r.get(z).getCurrentUniverDocInstance();
    if (i == null)
      return !1;
    const { drawings: s, wrapText: o, unitId: c } = e, d = $.getInstance(), a = [], { drawings: g = {} } = i.getSnapshot();
    for (const f of s) {
      const { drawingId: h } = f, m = g[h].wrapText;
      if (m !== o) {
        const p = d.replaceOp(["drawings", h, "wrapText"], m, o);
        a.push(p);
      }
    }
    const u = {
      id: ee.id,
      params: {
        unitId: c,
        actions: [],
        textRanges: null
      }
    };
    return u.params.actions = a.reduce((f, h) => $.compose(f, h), null), !!t.syncExecuteCommand(u.id, u.params);
  }
}, qe = {
  id: "doc.command.update-drawing-doc-transform",
  type: q.COMMAND,
  handler: (r, e) => {
    if (e == null)
      return !1;
    const t = r.get(j), n = r.get(z), s = r.get(Q).getRenderById(e.unitId), o = s == null ? void 0 : s.scene;
    if (o == null)
      return !1;
    const c = o.getTransformerByCreate(), d = n.getCurrentUniverDocInstance();
    if (d == null)
      return !1;
    const { drawings: a, unitId: g } = e, u = $.getInstance(), l = [], { drawings: f = {} } = d.getSnapshot();
    for (const p of a) {
      const { drawingId: w, key: D, value: S } = p, O = f[w].docTransform[D];
      if (!Ae.diffValue(O, S)) {
        const C = u.replaceOp(["drawings", w, "docTransform", D], O, S);
        l.push(C);
      }
    }
    const h = {
      id: ee.id,
      params: {
        unitId: g,
        actions: [],
        textRanges: null,
        debounce: !0
      }
    };
    h.params.actions = l.reduce((p, w) => $.compose(p, w), null);
    const m = t.syncExecuteCommand(h.id, h.params);
    return c.refreshControls(), !!m;
  }
}, _n = {
  id: "doc.command.move-inline-drawing",
  type: q.COMMAND,
  handler: (r, e) => {
    var L, R;
    if (e == null)
      return !1;
    const t = r.get(Q), n = (L = t.getRenderById(e.unitId)) == null ? void 0 : L.with(Me), i = r.get(ut), s = t.getRenderById(e.unitId), o = s == null ? void 0 : s.scene, c = s == null ? void 0 : s.with(te).getSkeleton();
    if (o == null || n == null)
      return !1;
    const d = o.getTransformerByCreate(), a = r.get(j), u = r.get(z).getCurrentUniverDocInstance();
    if (u == null)
      return !1;
    const { drawing: l, unitId: f, offset: h, segmentId: m, segmentPage: p, needRefreshDrawings: w } = e;
    if (w)
      return i.refreshDrawings(c), d.refreshControls(), !0;
    const D = [], { drawingId: S } = l, O = (R = n.getSegment()) != null ? R : "", C = mn(
      m,
      O,
      p,
      h,
      S,
      u,
      n
    );
    if (C == null || C.length === 0)
      return i.refreshDrawings(c), d.refreshControls(), !1;
    D.push(...C);
    const y = {
      id: ee.id,
      params: {
        unitId: f,
        actions: [],
        textRanges: null
      }
    };
    y.params.actions = D.reduce((v, N) => $.compose(v, N), null);
    const A = a.syncExecuteCommand(y.id, y.params);
    return d.refreshControls(), !!A;
  }
}, Sn = {
  id: "doc.command.transform-non-inline-drawing",
  type: q.COMMAND,
  // eslint-disable-next-line max-lines-per-function
  handler: (r, e) => {
    var x, H;
    if (e == null)
      return !1;
    const t = r.get(Q), n = (x = t.getRenderById(e.unitId)) == null ? void 0 : x.with(Me), i = t.getRenderById(e.unitId), s = i == null ? void 0 : i.scene;
    if (s == null || n == null)
      return !1;
    const o = s.getTransformerByCreate(), c = r.get(j), a = r.get(z).getCurrentUniverDocInstance();
    if (a == null)
      return !1;
    const { drawing: g, unitId: u, offset: l, docTransform: f, segmentId: h, segmentPage: m } = e, p = [], { drawingId: w } = g, D = (H = n.getSegment()) != null ? H : "", S = mn(
      h,
      D,
      m,
      l,
      w,
      a,
      n
    );
    if (S == null)
      return !1;
    S.length > 0 && p.push(...S);
    const O = $.getInstance(), { drawings: C = {} } = a.getSnapshot(), y = C[w].docTransform, { positionH: A, positionV: L, size: R, angle: v } = y;
    if (!Ae.diffValue(A, f.positionH)) {
      const I = O.replaceOp(["drawings", w, "docTransform", "positionH"], A, f.positionH);
      p.push(I);
    }
    if (!Ae.diffValue(L, f.positionV)) {
      const I = O.replaceOp(["drawings", w, "docTransform", "positionV"], L, f.positionV);
      p.push(I);
    }
    if (!Ae.diffValue(R, f.size)) {
      const I = O.replaceOp(["drawings", w, "docTransform", "size"], R, f.size);
      p.push(I);
    }
    if (!Ae.diffValue(v, f.angle)) {
      const I = O.replaceOp(["drawings", w, "docTransform", "angle"], v, f.angle);
      p.push(I);
    }
    const N = {
      id: ee.id,
      params: {
        unitId: u,
        actions: [],
        textRanges: null,
        debounce: !0
      }
    };
    N.params.actions = p.reduce((I, _) => $.compose(I, _), null);
    const G = c.syncExecuteCommand(N.id, N.params);
    return o.refreshControls(), !!G;
  }
}, Ke = {
  id: "doc.command.move-drawing",
  type: q.COMMAND,
  handler: (r, e) => {
    const t = r.get(j), n = r.get(Ne), i = r.get(z), s = r.get(Q), { direction: o } = e, c = n.getFocusDrawings();
    if (c.length === 0)
      return !1;
    const d = c[0].unitId, a = s.getRenderById(d), g = a == null ? void 0 : a.scene;
    if (g == null)
      return !1;
    const u = g.getTransformerByCreate(), l = i.getUniverDocInstance(d), f = c.map((m) => {
      var y, A, L, R, v;
      const { drawingId: p } = m, w = (y = l == null ? void 0 : l.getSnapshot().drawings) == null ? void 0 : y[p];
      if (w == null || w.layoutType === k.INLINE)
        return null;
      const { positionH: D, positionV: S } = w.docTransform, O = { ...D }, C = { ...S };
      return o === he.UP ? C.posOffset = ((A = C.posOffset) != null ? A : 0) - 2 : o === he.DOWN ? C.posOffset = ((L = C.posOffset) != null ? L : 0) + 2 : o === he.LEFT ? O.posOffset = ((R = O.posOffset) != null ? R : 0) - 2 : o === he.RIGHT && (O.posOffset = ((v = O.posOffset) != null ? v : 0) + 2), {
        drawingId: p,
        key: o === he.UP || o === he.DOWN ? "positionV" : "positionH",
        value: o === he.UP || o === he.DOWN ? C : O
      };
    }).filter((m) => m != null);
    if (f.length === 0)
      return !1;
    const h = t.syncExecuteCommand(qe.id, {
      unitId: d,
      subUnitId: d,
      drawings: f
    });
    return u.refreshControls(), !!h;
  }
}, ki = {
  id: "doc.operation.clear-drawing-transformer",
  type: q.MUTATION,
  handler: (r, e) => {
    const t = r.get(Q);
    return e.forEach((n) => {
      var i, s;
      (s = (i = t.getRenderById(n)) == null ? void 0 : i.scene.getTransformer()) == null || s.debounceRefreshControls();
    }), !0;
  }
}, Dn = "COMPONENT_DOC_DRAWING_PANEL", On = {
  id: "sidebar.operation.doc-image",
  type: q.COMMAND,
  handler: async (r, e) => {
    const t = r.get(vi), n = r.get(lt), i = r.get(fe);
    switch (e.value) {
      case "open":
        t.open({
          header: { title: n.t("docImage.panel.title") },
          children: { label: Dn },
          onClose: () => {
            i.focusDrawing(null);
          },
          width: 360
        });
        break;
      case "close":
      default:
        t.close();
        break;
    }
    return !0;
  }
}, Tn = {
  id: "doc.operation.edit-doc-image",
  type: q.OPERATION,
  handler: (r, e) => {
    const t = r.get(fe), n = r.get(j);
    return e == null ? !1 : (t.focusDrawing([e]), n.executeCommand(On.id, { value: "open" }), !0);
  }
};
var Wi = Object.getOwnPropertyDescriptor, Gi = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Wi(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (i = o(i) || i);
  return i;
}, Le = (r, e) => (t, n) => e(t, n, r);
function Mn(r, e, t = 1, n = 0) {
  const { top: i, left: s, bottom: o, right: c } = r, d = c - s, a = o - i, g = e.getViewport(tn.VIEW_MAIN), { viewportScrollX: u, viewportScrollY: l } = g, { scaleX: f, scaleY: h } = e.getAncestorScale();
  return {
    startX: (s - u) * f,
    startY: (i - l) * h,
    endX: (s + d - u) * f,
    endY: (i + a - l) * h,
    width: d * f,
    height: a * h,
    rotate: n,
    absolute: {
      left: !1,
      top: !1
    },
    opacity: t != null ? t : 1
  };
}
function wt(r, e) {
  const { top: t, left: n, width: i, height: s, angle: o, opacity: c } = r;
  return Mn({ top: t, left: n, bottom: t + s, right: n + i }, e.scene, c, o);
}
let rt = class extends xe {
  constructor(e, t, n, i, s, o) {
    super();
    me(this, "_domLayerInfoMap", /* @__PURE__ */ new Map());
    this._renderManagerService = e, this._drawingManagerService = t, this._drawingRenderService = n, this._canvasFloatDomService = i, this._univerInstanceService = s, this._commandService = o, this._initialize();
  }
  dispose() {
    super.dispose();
  }
  _initialize() {
    this._drawingAddRemoveListener(), this._initScrollAndZoomEvent();
  }
  _getSceneAndTransformerByDrawingSearch(e) {
    if (e == null)
      return;
    const t = this._renderManagerService.getRenderById(e);
    if (t == null)
      return null;
    const n = t.scene, i = n.getTransformerByCreate();
    return { scene: n, transformer: i, renderUnit: t, canvas: t.engine.getCanvasElement() };
  }
  _drawingAddRemoveListener() {
    this.disposeWithMe(
      this._drawingManagerService.add$.subscribe((e) => {
        this._insertRects(e);
      })
    ), this.disposeWithMe(
      this._drawingManagerService.remove$.subscribe((e) => {
        e.forEach((t) => {
          this._removeDom(t.drawingId);
        });
      })
    );
  }
  _insertRects(e) {
    e.forEach(async (t) => {
      const { unitId: n } = t;
      if (!this._univerInstanceService.getUnit(n, ve.UNIVER_DOC))
        return;
      const s = this._getSceneAndTransformerByDrawingSearch(n);
      if (s == null)
        return;
      const o = this._drawingManagerService.getDrawingByParam(t);
      if (o == null)
        return;
      const c = await this._drawingRenderService.renderFloatDom(o, s.scene);
      if (!(c == null || c.length === 0))
        for (const d of c) {
          this._addHoverForRect(d);
          const a = new Ln(), g = wt(d, s.renderUnit), u = new Ot(g), l = s.canvas, f = o.data, h = {
            dispose: a,
            rect: d,
            position$: u,
            unitId: n
          };
          this._canvasFloatDomService.addFloatDom({
            position$: u,
            id: o.drawingId,
            componentKey: o.componentKey,
            onPointerDown: (p) => {
              l.dispatchEvent(new PointerEvent(p.type, p));
            },
            onPointerMove: (p) => {
              l.dispatchEvent(new PointerEvent(p.type, p));
            },
            onPointerUp: (p) => {
              l.dispatchEvent(new PointerEvent(p.type, p));
            },
            onWheel: (p) => {
              l.dispatchEvent(new WheelEvent(p.type, p));
            },
            data: f,
            unitId: n
          });
          const m = d.onTransformChange$.subscribeEvent(() => {
            const p = wt(d, s.renderUnit);
            u.next(
              p
            );
          });
          a.add(() => {
            this._canvasFloatDomService.removeFloatDom(o.drawingId);
          }), m && a.add(m), this._domLayerInfoMap.set(o.drawingId, h);
        }
    });
  }
  _addHoverForRect(e) {
    this.disposeWithMe(
      ze(
        e.onPointerEnter$.subscribeEvent(() => {
          e.cursor = xt.GRAB;
        })
      )
    ), this.disposeWithMe(
      ze(
        e.onPointerLeave$.subscribeEvent(() => {
          e.cursor = xt.DEFAULT;
        })
      )
    );
  }
  _removeDom(e) {
    const t = this._domLayerInfoMap.get(e);
    if (!t)
      return;
    const { unitId: n } = t;
    this._domLayerInfoMap.delete(e), t.dispose.dispose();
    const i = this._getSceneAndTransformerByDrawingSearch(n);
    i && i.scene.removeObject(t.rect);
  }
  _initScrollAndZoomEvent() {
    const e = (t) => {
      const n = this._getSceneAndTransformerByDrawingSearch(t);
      n && this._domLayerInfoMap.forEach((i) => {
        if (i.unitId !== t) return;
        const s = wt(i.rect, n.renderUnit);
        i.position$.next(s);
      });
    };
    this.disposeWithMe(
      this._univerInstanceService.getCurrentTypeOfUnit$(ve.UNIVER_DOC).pipe(
        Ht((t) => {
          if (!t) return null;
          const n = t.getUnitId(), i = this._renderManagerService.getRenderById(n);
          return i ? { render: i, unitId: n } : null;
        }),
        yi(
          (t) => t ? Zt(t.render.scene.getViewport(tn.VIEW_MAIN).onScrollAfter$).pipe(Ht(() => ({ unitId: t.unitId }))) : bi(null)
        )
      ).subscribe((t) => {
        if (!t) return;
        const { unitId: n } = t;
        e(n);
      })
    ), this.disposeWithMe(this._commandService.onCommandExecuted((t) => {
      if (t.id === nn.id) {
        const n = t.params, { unitId: i } = n;
        e(i);
      }
    }));
  }
  insertFloatDom(e, t) {
    var m, p, w;
    const n = this._univerInstanceService.getCurrentUnitOfType(ve.UNIVER_DOC);
    if (!n) return !1;
    const i = this._getSceneAndTransformerByDrawingSearch(n.getUnitId());
    if (!i) return !1;
    const c = (m = i.renderUnit.with(te).getSkeleton().getSkeletonData()) == null ? void 0 : m.pages[0];
    if (!c) return !1;
    const { pageWidth: d, marginLeft: a, marginRight: g } = c, u = d - a - g, l = {
      size: {
        width: (p = t.width) != null ? p : u,
        height: t.height
      },
      positionH: {
        relativeFrom: J.PAGE,
        posOffset: 0
      },
      positionV: {
        relativeFrom: W.PAGE,
        posOffset: 0
      },
      angle: 0
    }, f = (w = t.drawingId) != null ? w : Qt(), h = {
      unitId: n.getUnitId(),
      drawings: [
        {
          drawingId: f,
          drawingType: Pe.DRAWING_DOM,
          subUnitId: n.getUnitId(),
          unitId: n.getUnitId(),
          ...e,
          title: "",
          description: "",
          docTransform: l,
          layoutType: k.INLINE,
          transform: en(l)
        }
      ]
    };
    return this._commandService.syncExecuteCommand(yt.id, h), f;
  }
};
rt = Gi([
  Le(0, Q),
  Le(1, fe),
  Le(2, Z(gn)),
  Le(3, Z(Ii)),
  Le(4, z),
  Le(5, j)
], rt);
const Hi = "docs-drawing-ui.config", $t = {}, zt = -1e3, Xt = 1e3, ji = (r) => {
  const e = we(j), t = we(lt), n = we(fe), i = we(Q), s = we(z), { drawings: o } = r, c = o[0];
  if (c == null)
    return;
  const { unitId: d } = c, a = s.getUniverDocInstance(d), g = a == null ? void 0 : a.getSnapshot().documentStyle.documentFlavor, u = i.getRenderById(d), l = u == null ? void 0 : u.scene;
  if (l == null)
    return;
  const f = l.getTransformerByCreate(), h = [{
    label: t.t("image-position.column"),
    value: String(J.COLUMN)
  }, {
    label: t.t("image-position.page"),
    value: String(J.PAGE)
  }, {
    label: t.t("image-position.margin"),
    value: String(J.MARGIN)
  }], m = [{
    label: t.t("image-position.line"),
    value: String(W.LINE),
    disabled: g === pt.MODERN
  }, {
    label: t.t("image-position.page"),
    value: String(W.PAGE),
    disabled: g === pt.MODERN
  }, {
    label: t.t("image-position.margin"),
    value: String(W.MARGIN),
    disabled: g === pt.MODERN
  }, {
    label: t.t("image-position.paragraph"),
    value: String(W.PARAGRAPH)
  }], [p, w] = re(!0), [D, S] = re({
    relativeFrom: J.PAGE,
    posOffset: 0
  }), [O, C] = re({
    relativeFrom: W.PAGE,
    posOffset: 0
  }), [y, A] = re(!0), [L, R] = re(!0);
  function v(_, E) {
    var b;
    _ === "positionH" ? S(E) : C(E);
    const T = n.getFocusDrawings();
    if (T.length === 0)
      return;
    const U = T.map((P) => ({
      unitId: P.unitId,
      subUnitId: P.subUnitId,
      drawingId: P.drawingId
    }));
    e.executeCommand(qe.id, {
      unitId: T[0].unitId,
      subUnitId: T[0].unitId,
      drawings: U.map((P) => ({
        drawingId: P.drawingId,
        key: _,
        value: E
      }))
    });
    const B = (b = i.getRenderById(d)) == null ? void 0 : b.with(Me);
    B && B.blur(), f.refreshControls();
  }
  function N(_) {
    var ie, Ie, _e;
    const E = D.relativeFrom, T = D.posOffset, U = Number(_);
    if (E === U)
      return;
    const B = n.getFocusDrawings();
    if (B.length === 0)
      return;
    const b = B[0].drawingId, P = B[0].unitId;
    let V = null, F = 0;
    const K = (ie = i.getRenderById(P)) == null ? void 0 : ie.with(te).getSkeleton(), oe = K == null ? void 0 : K.getSkeletonData();
    if (oe == null)
      return;
    const { pages: Ue, skeHeaders: ye, skeFooters: We } = oe;
    for (const ce of Ue) {
      const { marginLeft: Se, skeDrawings: De, headerId: be, footerId: Ce, pageWidth: Oe } = ce;
      if (De.has(b)) {
        V = De.get(b), F = Se;
        break;
      }
      const de = (Ie = ye.get(be)) == null ? void 0 : Ie.get(Oe);
      if (de != null && de.skeDrawings.has(b)) {
        V = de == null ? void 0 : de.skeDrawings.get(b), F = Se;
        break;
      }
      const ge = (_e = We.get(Ce)) == null ? void 0 : _e.get(Oe);
      if (ge != null && ge.skeDrawings.has(b)) {
        V = ge == null ? void 0 : ge.skeDrawings.get(b), F = Se;
        break;
      }
    }
    if (V == null)
      return;
    let ae = 0;
    E === J.COLUMN ? ae -= V.columnLeft : E === J.MARGIN && (ae -= F), U === J.COLUMN ? ae += V.columnLeft : U === J.MARGIN ? ae += F : J.PAGE;
    const ne = {
      relativeFrom: U,
      posOffset: (T != null ? T : 0) - ae
    };
    v("positionH", ne);
  }
  function G(_) {
    var De, be, Ce, Oe, de, ge;
    const E = O.relativeFrom, T = O.posOffset, U = Number(_);
    if (E === U)
      return;
    const B = n.getFocusDrawings();
    if (B.length === 0)
      return;
    const { drawingId: b, unitId: P } = B[0], V = s.getUniverDocInstance(P), F = (De = i.getRenderById(P)) == null ? void 0 : De.with(te).getSkeleton(), K = (be = i.getRenderById(P)) == null ? void 0 : be.with(Me), oe = K == null ? void 0 : K.getSegment(), Ue = K == null ? void 0 : K.getSegmentPage(), ye = (Oe = (Ce = V == null ? void 0 : V.getSelfOrHeaderFooterModel(oe).getBody()) == null ? void 0 : Ce.customBlocks) == null ? void 0 : Oe.find((Ee) => Ee.blockId === b);
    if (ye == null || F == null || K == null)
      return;
    const { startIndex: We } = ye, ae = F.findNodeByCharIndex(We, oe, Ue), ne = (de = ae == null ? void 0 : ae.parent) == null ? void 0 : de.parent, ie = ne == null ? void 0 : ne.parent, Ie = ie == null ? void 0 : ie.lines.find((Ee) => Ee.paragraphIndex === (ne == null ? void 0 : ne.paragraphIndex) && Ee.paragraphStart), _e = (ge = ie == null ? void 0 : ie.parent) == null ? void 0 : ge.parent;
    if (ae == null || ne == null || Ie == null || ie == null || _e == null)
      return;
    let ce = 0;
    E === W.PARAGRAPH ? ce -= Ie.top : E === W.LINE ? ce -= ne.top : E === W.PAGE && (ce += _e.marginTop), U === W.PARAGRAPH ? ce += Ie.top : U === W.LINE ? ce += ne.top : U === W.PAGE && (ce -= _e.marginTop);
    const Se = {
      relativeFrom: U,
      posOffset: (T != null ? T : 0) - ce
    };
    v("positionV", Se);
  }
  function x(_) {
    var P;
    const E = a == null ? void 0 : a.getSnapshot(), T = (P = E == null ? void 0 : E.drawings) == null ? void 0 : P[_.drawingId];
    if (T == null)
      return;
    const { layoutType: U } = T, {
      positionH: B,
      positionV: b
    } = T.docTransform;
    S(B), C(b), w(U === k.INLINE), A(b.relativeFrom === W.PARAGRAPH || b.relativeFrom === W.LINE);
  }
  function H() {
    const _ = n.getFocusDrawings();
    _.length !== 0 && x(_[0]);
  }
  function I(_) {
    A(_), G(String(_ ? W.PARAGRAPH : W.PAGE));
  }
  return Tt(() => {
    H();
    const _ = n.focus$.subscribe((T) => {
      if (T.length === 0) {
        R(!1);
        return;
      }
      R(!0), x(T[0]);
    }), E = e.onCommandExecuted(async (T) => {
      T.id === ee.id && H();
    });
    return () => {
      _.unsubscribe(), E.dispose();
    };
  }, []), /* @__PURE__ */ X(
    "div",
    {
      className: sn("univer-grid univer-gap-2 univer-py-2 univer-text-gray-400", {
        "univer-hidden": !L
      }),
      children: [
        /* @__PURE__ */ M(
          "header",
          {
            className: "univer-text-gray-600 dark:!univer-text-gray-200",
            children: /* @__PURE__ */ M("div", { children: t.t("image-position.title") })
          }
        ),
        /* @__PURE__ */ M(
          "div",
          {
            className: "univer-text-gray-600 dark:!univer-text-gray-200",
            children: /* @__PURE__ */ M("div", { children: t.t("image-position.horizontal") })
          }
        ),
        /* @__PURE__ */ X(
          "div",
          {
            className: "univer-grid univer-grid-cols-2 univer-gap-2 [&>div]:univer-grid [&>div]:univer-gap-2",
            children: [
              /* @__PURE__ */ X("div", { children: [
                /* @__PURE__ */ M("span", { children: t.t("image-position.absolutePosition") }),
                /* @__PURE__ */ M(
                  Be,
                  {
                    min: zt,
                    max: Xt,
                    precision: 1,
                    disabled: p,
                    value: D.posOffset,
                    onChange: (_) => {
                      v("positionH", {
                        relativeFrom: D.relativeFrom,
                        posOffset: _
                      });
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ X("div", { children: [
                /* @__PURE__ */ M("span", { children: t.t("image-position.toTheRightOf") }),
                /* @__PURE__ */ M(
                  Bt,
                  {
                    value: String(D.relativeFrom),
                    disabled: p,
                    options: h,
                    onChange: N
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ M(
          "div",
          {
            className: "univer-text-gray-600 dark:!univer-text-gray-200",
            children: /* @__PURE__ */ M("div", { children: t.t("image-position.vertical") })
          }
        ),
        /* @__PURE__ */ X(
          "div",
          {
            className: "univer-grid univer-grid-cols-2 univer-gap-2 [&>div]:univer-grid [&>div]:univer-gap-2",
            children: [
              /* @__PURE__ */ X("div", { children: [
                /* @__PURE__ */ M("span", { children: t.t("image-position.absolutePosition") }),
                /* @__PURE__ */ M(
                  Be,
                  {
                    min: zt,
                    max: Xt,
                    precision: 1,
                    disabled: p,
                    value: O.posOffset,
                    onChange: (_) => {
                      v("positionV", {
                        relativeFrom: O.relativeFrom,
                        posOffset: _
                      });
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ X("div", { children: [
                /* @__PURE__ */ M("span", { children: t.t("image-position.bellow") }),
                /* @__PURE__ */ M(
                  Bt,
                  {
                    disabled: p,
                    value: String(O.relativeFrom),
                    options: m,
                    onChange: G
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ M(
          "div",
          {
            className: "univer-text-gray-600 dark:!univer-text-gray-200",
            children: /* @__PURE__ */ M("div", { children: t.t("image-position.options") })
          }
        ),
        /* @__PURE__ */ M("div", { children: /* @__PURE__ */ M(
          ai,
          {
            disabled: p,
            checked: y,
            onChange: I,
            children: t.t("image-position.moveObjectWithText")
          }
        ) })
      ]
    }
  );
}, Qe = 0, Je = 100, Vi = (r) => {
  const e = we(j), t = we(lt), n = we(fe), i = we(Q), s = we(z), { drawings: o } = r, c = o[0];
  if (c == null)
    return null;
  const { unitId: d } = c, a = s.getUniverDocInstance(d), g = i.getRenderById(d);
  if ((g == null ? void 0 : g.scene) == null)
    return null;
  const [l, f] = re(!0), [h, m] = re(!0), [p, w] = re(!0), [D, S] = re(ue.INLINE), [O, C] = re(""), [y, A] = re({
    distT: 0,
    distL: 0,
    distB: 0,
    distR: 0
  }), [L, R] = re(!0);
  function v(I) {
    S(I);
    const _ = n.getFocusDrawings();
    if (_.length === 0)
      return;
    const { unitId: E, subUnitId: T } = _[0], U = _.map(({ unitId: B, subUnitId: b, drawingId: P }) => ({
      unitId: B,
      subUnitId: b,
      drawingId: P
    }));
    e.executeCommand(wn.id, {
      unitId: E,
      subUnitId: T,
      drawings: U,
      wrappingStyle: I
    });
  }
  function N(I) {
    C(I);
    const _ = n.getFocusDrawings();
    if (_.length === 0)
      return;
    const E = _.map((T) => ({
      unitId: T.unitId,
      subUnitId: T.subUnitId,
      drawingId: T.drawingId
    }));
    e.executeCommand(In.id, {
      unitId: _[0].unitId,
      subUnitId: _[0].unitId,
      drawings: E,
      wrapText: I
    });
  }
  function G(I, _) {
    if (I == null)
      return;
    const E = { ...y, [_]: I };
    A(E);
    const T = n.getFocusDrawings();
    if (T.length === 0)
      return;
    const U = T.map((B) => ({
      unitId: B.unitId,
      subUnitId: B.subUnitId,
      drawingId: B.drawingId
    }));
    e.executeCommand(vn.id, {
      unitId: T[0].unitId,
      subUnitId: T[0].unitId,
      drawings: U,
      dist: {
        [_]: I
      }
    });
  }
  function x() {
    const I = n.getFocusDrawings();
    I.length !== 0 && H(I[0]);
  }
  function H(I) {
    var K, oe;
    const _ = (oe = (K = a == null ? void 0 : a.getSnapshot()) == null ? void 0 : K.drawings) == null ? void 0 : oe[I.drawingId];
    if (_ == null)
      return;
    const {
      distT: E = 0,
      distL: T = 0,
      distB: U = 0,
      distR: B = 0,
      layoutType: b = k.INLINE,
      behindDoc: P = se.FALSE,
      wrapText: V = $e.BOTH_SIDES
    } = _;
    if (A({
      distT: E,
      distL: T,
      distB: U,
      distR: B
    }), C(V), f(b !== k.WRAP_SQUARE), b === k.WRAP_NONE || b === k.INLINE ? m(!0) : m(!1), b === k.WRAP_NONE || b === k.INLINE || b === k.WRAP_TOP_AND_BOTTOM ? w(!0) : w(!1), b === k.WRAP_NONE)
      P === se.TRUE ? S(ue.BEHIND_TEXT) : S(ue.IN_FRONT_OF_TEXT);
    else
      switch (b) {
        case k.INLINE:
          S(ue.INLINE);
          break;
        case k.WRAP_SQUARE:
          S(ue.WRAP_SQUARE);
          break;
        case k.WRAP_TOP_AND_BOTTOM:
          S(ue.WRAP_TOP_AND_BOTTOM);
          break;
        default:
          throw new Error(`Unsupported layout type: ${b}`);
      }
  }
  return Tt(() => {
    x();
    const I = n.focus$.subscribe((E) => {
      if (E.length === 0) {
        R(!1);
        return;
      }
      R(!0), H(E[0]);
    }), _ = e.onCommandExecuted(async (E) => {
      E.id === ee.id && x();
    });
    return () => {
      I.unsubscribe(), _.dispose();
    };
  }, []), /* @__PURE__ */ X(
    "div",
    {
      className: sn("univer-grid univer-gap-2 univer-py-2 univer-text-gray-400", {
        "univer-hidden": !L
      }),
      children: [
        /* @__PURE__ */ M(
          "header",
          {
            className: "univer-text-gray-600 dark:!univer-text-gray-200",
            children: /* @__PURE__ */ M("div", { children: t.t("image-text-wrap.title") })
          }
        ),
        /* @__PURE__ */ M(
          "div",
          {
            className: "univer-text-gray-600 dark:!univer-text-gray-200",
            children: /* @__PURE__ */ M("div", { children: t.t("image-text-wrap.wrappingStyle") })
          }
        ),
        /* @__PURE__ */ M("div", { children: /* @__PURE__ */ X(Ft, { value: D, onChange: v, direction: "vertical", children: [
          /* @__PURE__ */ M(Te, { value: ue.INLINE, children: t.t("image-text-wrap.inline") }),
          /* @__PURE__ */ M(Te, { value: ue.WRAP_SQUARE, children: t.t("image-text-wrap.square") }),
          /* @__PURE__ */ M(Te, { value: ue.WRAP_TOP_AND_BOTTOM, children: t.t("image-text-wrap.topAndBottom") }),
          /* @__PURE__ */ M(Te, { value: ue.BEHIND_TEXT, children: t.t("image-text-wrap.behindText") }),
          /* @__PURE__ */ M(Te, { value: ue.IN_FRONT_OF_TEXT, children: t.t("image-text-wrap.inFrontText") })
        ] }) }),
        /* @__PURE__ */ M(
          "div",
          {
            className: "univer-text-gray-600 dark:!univer-text-gray-200",
            children: /* @__PURE__ */ M("div", { children: t.t("image-text-wrap.wrapText") })
          }
        ),
        /* @__PURE__ */ M("div", { children: /* @__PURE__ */ X(Ft, { disabled: l, value: O, onChange: N, direction: "horizontal", children: [
          /* @__PURE__ */ M(Te, { value: $e.BOTH_SIDES, children: t.t("image-text-wrap.bothSide") }),
          /* @__PURE__ */ M(Te, { value: $e.LEFT, children: t.t("image-text-wrap.leftOnly") }),
          /* @__PURE__ */ M(Te, { value: $e.RIGHT, children: t.t("image-text-wrap.rightOnly") })
        ] }) }),
        /* @__PURE__ */ M(
          "div",
          {
            className: "univer-text-gray-600 dark:!univer-text-gray-200",
            children: /* @__PURE__ */ M("div", { children: t.t("image-text-wrap.distanceFromText") })
          }
        ),
        /* @__PURE__ */ X(
          "div",
          {
            className: "univer-grid univer-grid-cols-2 univer-gap-2 [&>div]:univer-grid [&>div]:univer-gap-2",
            children: [
              /* @__PURE__ */ X("div", { children: [
                /* @__PURE__ */ M("span", { children: t.t("image-text-wrap.top") }),
                /* @__PURE__ */ M(
                  Be,
                  {
                    min: Qe,
                    max: Je,
                    disabled: h,
                    precision: 1,
                    value: y.distT,
                    onChange: (I) => {
                      G(I, "distT");
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ X("div", { children: [
                /* @__PURE__ */ M("span", { children: t.t("image-text-wrap.left") }),
                /* @__PURE__ */ M(
                  Be,
                  {
                    min: Qe,
                    max: Je,
                    disabled: p,
                    precision: 1,
                    value: y.distL,
                    onChange: (I) => {
                      G(I, "distL");
                    }
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ X(
          "div",
          {
            className: "univer-grid univer-grid-cols-2 univer-gap-2 [&>div]:univer-grid [&>div]:univer-gap-2",
            children: [
              /* @__PURE__ */ X("div", { children: [
                /* @__PURE__ */ M("span", { children: t.t("image-text-wrap.bottom") }),
                /* @__PURE__ */ M(
                  Be,
                  {
                    min: Qe,
                    max: Je,
                    disabled: h,
                    precision: 1,
                    value: y.distB,
                    onChange: (I) => {
                      G(I, "distB");
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ X("div", { children: [
                /* @__PURE__ */ M("span", { children: t.t("image-text-wrap.right") }),
                /* @__PURE__ */ M(
                  Be,
                  {
                    min: Qe,
                    max: Je,
                    disabled: p,
                    precision: 1,
                    value: y.distR,
                    onChange: (I) => {
                      G(I, "distR");
                    }
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}, $i = () => {
  const r = we(fe), e = r.getFocusDrawings(), [t, n] = re(e);
  return Tt(() => {
    const i = r.focus$.subscribe((s) => {
      n(s);
    });
    return () => {
      i.unsubscribe();
    };
  }, []), !!(t != null && t.length) && /* @__PURE__ */ X("div", { className: "univer-text-sm", children: [
    /* @__PURE__ */ M(Ei, { drawings: t, hasAlign: !1, hasCropper: !1, hasGroup: !1, hasTransform: !1 }),
    /* @__PURE__ */ M(Vi, { drawings: t }),
    /* @__PURE__ */ M(ji, { drawings: t })
  ] });
}, yn = "doc.menu.image", bn = pn.id, zi = (r) => {
  const e = r.get(Dt), t = r.get(z);
  return new Ci((n) => {
    const i = e.textSelection$.subscribe(() => {
      var o;
      const s = e.getActiveTextRange();
      if (s) {
        const { segmentId: c, startOffset: d, endOffset: a } = s, g = t.getCurrentUniverDocInstance(), u = (o = g == null ? void 0 : g.getSelfOrHeaderFooterModel(c).getBody()) == null ? void 0 : o.tables;
        if (u && u.length && u.some((l) => {
          const { startIndex: f, endIndex: h } = l;
          return d >= f && d < h || a >= f && a < h;
        })) {
          n.next(!0);
          return;
        }
      } else {
        n.next(!0);
        return;
      }
      n.next(!1);
    });
    return () => i.unsubscribe();
  });
};
function Xi(r) {
  return {
    id: yn,
    type: an.SUBITEMS,
    icon: "AddImageIcon",
    tooltip: "docImage.title",
    disabled$: zi(r),
    hidden$: on(r, ve.UNIVER_DOC, void 0, St)
  };
}
function qi(r) {
  return {
    id: bn,
    title: "docImage.upload.float",
    type: an.BUTTON,
    hidden$: on(r, ve.UNIVER_DOC, void 0, St)
  };
}
const Ki = {
  [_i.MEDIA]: {
    [yn]: {
      order: 0,
      menuItemFactory: Xi,
      [bn]: {
        order: 0,
        menuItemFactory: qi
      }
    }
  }
};
function Ye(r) {
  return r.getContextValue(Bn) && r.getContextValue(nt);
}
const Yi = {
  id: Ke.id,
  description: "shortcut.drawing-move-down",
  group: "4_drawing-view",
  binding: ke.ARROW_DOWN,
  priority: 100,
  preconditions: Ye,
  staticParameters: {
    direction: he.DOWN
  }
}, Zi = {
  id: Ke.id,
  description: "shortcut.drawing-move-up",
  group: "4_drawing-view",
  binding: ke.ARROW_UP,
  priority: 100,
  preconditions: Ye,
  staticParameters: {
    direction: he.UP
  }
}, Qi = {
  id: Ke.id,
  description: "shortcut.drawing-move-left",
  group: "4_drawing-view",
  binding: ke.ARROW_LEFT,
  priority: 100,
  preconditions: Ye,
  staticParameters: {
    direction: he.LEFT
  }
}, Ji = {
  id: Ke.id,
  description: "shortcut.drawing-move-right",
  group: "4_drawing-view",
  binding: ke.ARROW_RIGHT,
  priority: 100,
  preconditions: Ye,
  staticParameters: {
    direction: he.RIGHT
  }
}, er = {
  id: ln.id,
  description: "shortcut.drawing-delete",
  group: "4_drawing-view",
  // when focusing on any other input tag do not trigger this shortcut
  preconditions: Ye,
  binding: ke.DELETE,
  mac: ke.BACKSPACE
};
var tr = Object.getOwnPropertyDescriptor, nr = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? tr(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (i = o(i) || i);
  return i;
}, et = (r, e) => (t, n) => e(t, n, r);
let st = class extends xe {
  constructor(r, e, t, n) {
    super(), this._componentManager = r, this._menuManagerService = e, this._commandService = t, this._shortcutService = n, this._init();
  }
  _initCustomComponents() {
    const r = this._componentManager;
    this.disposeWithMe(r.register(Dn, $i));
  }
  _initMenus() {
    this._menuManagerService.mergeMenu(Ki);
  }
  _initCommands() {
    [
      pn,
      yt,
      wn,
      vn,
      In,
      qe,
      _n,
      Sn,
      Mt,
      On,
      ki,
      Tn,
      un,
      fn,
      Ke,
      ln,
      hn
    ].forEach((r) => this.disposeWithMe(this._commandService.registerCommand(r)));
  }
  _initShortcuts() {
    [
      // sheet drawing shortcuts
      Yi,
      Zi,
      Qi,
      Ji,
      er
    ].forEach((r) => {
      this.disposeWithMe(this._shortcutService.registerShortcut(r));
    });
  }
  _init() {
    this._initCommands(), this._initCustomComponents(), this._initMenus(), this._initShortcuts();
  }
};
st = nr([
  et(0, Z(cn)),
  et(1, Si),
  et(2, j),
  et(3, Di)
], st);
var ir = Object.getOwnPropertyDescriptor, rr = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? ir(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (i = o(i) || i);
  return i;
}, He = (r, e) => (t, n) => e(t, n, r);
function sr(r) {
  var n, i, s, o;
  if ($.isNoop(r) || !Array.isArray(r))
    return null;
  const e = r.find((c) => Array.isArray(c) && (c == null ? void 0 : c[0]) === "drawings");
  if (e == null || !Array.isArray(e) || e.length < 3 || typeof e[1] == "string" && typeof e[2] != "object" || Array.isArray(e[1]) && typeof e[1][1] != "object")
    return null;
  const t = [];
  if (Array.isArray(e == null ? void 0 : e[1]))
    for (const c of e)
      Array.isArray(c) && t.push({
        type: (n = c == null ? void 0 : c[1]) != null && n.i ? "add" : "remove",
        drawingId: c == null ? void 0 : c[0],
        drawing: (i = c == null ? void 0 : c[1]) == null ? void 0 : i.i
      });
  else
    t.push({
      type: (s = e[2]) != null && s.i ? "add" : "remove",
      drawingId: e[1],
      drawing: (o = e[2]) == null ? void 0 : o.i
    });
  return t;
}
function or(r) {
  if (!Array.isArray(r) || r.length < 3 || r[0] !== "drawingsOrder")
    return [];
  const e = [];
  for (let t = 1; t < r.length; t++) {
    const n = r[t];
    if (Array.isArray(n) && typeof n[0] == "number" && typeof n[1] == "object")
      e.push(n[0]);
    else {
      e.length = 0;
      break;
    }
  }
  return e;
}
let ot = class extends xe {
  constructor(r, e, t, n, i) {
    super(), this._univerInstanceService = r, this._commandService = e, this._drawingManagerService = t, this._docDrawingService = n, this._renderManagerService = i, this._initialize();
  }
  _initialize() {
    this._commandExecutedListener();
  }
  _commandExecutedListener() {
    this.disposeWithMe(
      this._commandService.beforeCommandExecuted((r) => {
        if (r.id !== ee.id)
          return;
        const e = r.params, { unitId: t, actions: n } = e, i = sr(n);
        if (i != null)
          for (const { type: s, drawingId: o, drawing: c } of i)
            s === "add" ? this._addDrawings(t, [c]) : this._removeDrawings(t, [o]);
      })
    ), this.disposeWithMe(
      this._commandService.onCommandExecuted((r) => {
        if (r.id !== ee.id)
          return;
        const e = r.params, { unitId: t, actions: n } = e;
        or(n).length > 0 && this._updateDrawingsOrder(t);
      })
    ), this.disposeWithMe(
      this._commandService.onCommandExecuted((r) => {
        var o;
        if (r.id !== Fn.id && r.id !== kn.id)
          return;
        const e = (o = this._univerInstanceService.getCurrentUniverDocInstance()) == null ? void 0 : o.getUnitId(), t = this._drawingManagerService.getFocusDrawings();
        if (e == null || t.length === 0)
          return;
        const n = this._renderManagerService.getRenderById(e), i = n == null ? void 0 : n.scene;
        if (i == null)
          return !1;
        i.getTransformerByCreate().refreshControls();
      })
    );
  }
  _addDrawings(r, e) {
    const t = this._drawingManagerService, n = this._docDrawingService, i = this._docDrawingService.getBatchAddOp(e), { subUnitId: s, redo: o, objects: c } = i;
    t.applyJson1(r, s, o), n.applyJson1(r, s, o), t.addNotification(c), n.addNotification(c);
  }
  _removeDrawings(r, e) {
    const t = this._drawingManagerService, n = this._docDrawingService, i = this._docDrawingService.getBatchRemoveOp(e.map((d) => ({
      unitId: r,
      subUnitId: r,
      drawingId: d
    }))), { subUnitId: s, redo: o, objects: c } = i;
    t.applyJson1(r, s, o), n.applyJson1(r, s, o), t.removeNotification(c), n.removeNotification(c);
  }
  _updateDrawingsOrder(r) {
    const e = this._univerInstanceService.getUniverDocInstance(r);
    if (e == null)
      return;
    const t = e.getSnapshot().drawingsOrder;
    if (t == null)
      return;
    const n = this._drawingManagerService, i = this._docDrawingService;
    n.setDrawingOrder(r, r, t), i.setDrawingOrder(r, r, t);
    const s = {
      unitId: r,
      subUnitId: r,
      drawingIds: t
    };
    n.orderNotification(s), i.orderNotification(s);
  }
};
ot = rr([
  He(0, z),
  He(1, j),
  He(2, fe),
  He(3, Ne),
  He(4, Q)
], ot);
const ar = (r) => {
  const { floatDomInfos: e, scene: t, offset: n, bound: i } = r, s = i.right - i.left, o = i.bottom - i.top, c = Ui(() => e.map((d) => {
    const { width: a = 0, height: g = 0, left: u = 0, top: l = 0 } = d.transform, h = Mn(
      {
        left: u,
        right: u + a,
        top: l,
        bottom: l + g
      },
      t
    ), m = {
      position$: new Ot(h),
      position: h,
      id: d.drawingId,
      componentKey: d.componentKey,
      onPointerMove: () => {
      },
      onPointerDown: () => {
      },
      onPointerUp: () => {
      },
      onWheel: () => {
      },
      unitId: d.unitId,
      data: d.data
    };
    return [d.drawingId, m];
  }).filter(([d, a]) => !(a.position.endX < 0 || a.position.endY < 0 || a.position.startX > s || a.position.startY > o)), [e, t, n, s, o]);
  return /* @__PURE__ */ M("div", { className: "univer-absolute univer-left-0 univer-top-0", children: c.map(([d, a]) => /* @__PURE__ */ M(Oi, { layer: a, id: d, position: a.position }, d)) });
};
var cr = Object.getOwnPropertyDescriptor, dr = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? cr(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (i = o(i) || i);
  return i;
}, je = (r, e) => (t, n) => e(t, n, r);
let at = class extends xe {
  constructor(r, e, t, n, i) {
    super(), this._docPrintInterceptorService = r, this._drawingRenderService = e, this._drawingManagerService = t, this._componetManager = n, this._injector = i, this._initPrinting(), this._initPrintingDom();
  }
  _initPrinting() {
    this.disposeWithMe(
      this._docPrintInterceptorService.interceptor.intercept(
        this._docPrintInterceptorService.interceptor.getInterceptPoints().PRINTING_COMPONENT_COLLECT,
        {
          handler: (r, e, t) => {
            const { unitId: n, scene: i } = e, s = this._drawingManagerService.getDrawingDataForUnit(n), o = s == null ? void 0 : s[n];
            return o && o.order.forEach((c) => {
              const d = o.data[c];
              d.drawingType !== Pe.DRAWING_CHART && d.drawingType !== Pe.DRAWING_DOM && this._drawingRenderService.renderDrawing(d, i);
            }), t();
          }
        }
      )
    );
  }
  _initPrintingDom() {
    this.disposeWithMe(
      this._docPrintInterceptorService.interceptor.intercept(
        this._docPrintInterceptorService.interceptor.getInterceptPoints().PRINTING_DOM_COLLECT,
        {
          handler: (r, e, t) => {
            const { unitId: n } = e, i = this._drawingManagerService.getDrawingDataForUnit(n), s = i == null ? void 0 : i[n];
            if (s) {
              const o = s.order.map((d) => {
                const a = s.data[d];
                if (a.drawingType === Pe.DRAWING_CHART)
                  return {
                    ...a,
                    componentKey: this._componetManager.get(Wn)
                  };
                if (a.drawingType === Pe.DRAWING_DOM) {
                  const g = this._docPrintInterceptorService.getPrintComponent(a.componentKey);
                  return {
                    ...a,
                    componentKey: this._componetManager.get(g || a.componentKey)
                  };
                }
                return null;
              }).filter(Boolean), c = Ti(ar, this._injector);
              return ci(
                /* @__PURE__ */ M(
                  c,
                  {
                    unitId: n,
                    floatDomInfos: o,
                    scene: e.scene,
                    skeleton: e.skeleton,
                    offset: e.offset,
                    bound: e.bound
                  }
                ),
                e.root
              ), r == null || r.add(() => {
                di(e.root);
              }), t(r);
            }
          }
        }
      )
    );
  }
};
at = dr([
  je(0, Z(Yn)),
  je(1, Z(gn)),
  je(2, fe),
  je(3, Z(cn)),
  je(4, Z(Jt))
], at);
var gr = Object.getOwnPropertyDescriptor, lr = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? gr(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (i = o(i) || i);
  return i;
}, tt = (r, e) => (t, n) => e(t, n, r);
const ur = "__InlineDrawingAnchor__";
function qt(r) {
  const { path: e } = r;
  return e.some((t) => t === "cells");
}
let ct = class extends xe {
  constructor(e, t, n, i) {
    super();
    me(this, "_liquid", new rn());
    me(this, "_listenerOnImageMap", /* @__PURE__ */ new Set());
    // Use to cache the drawings is under transforming or scaling.
    me(this, "_transformerCache", /* @__PURE__ */ new Map());
    me(this, "_anchorShape");
    this._commandService = e, this._univerInstanceService = t, this._drawingManagerService = n, this._renderManagerService = i, this._init();
  }
  _init() {
    this._listenDrawingFocus();
  }
  _listenDrawingFocus() {
    this.disposeWithMe(
      this._drawingManagerService.add$.subscribe((e) => {
        if (e.length !== 0)
          for (const t of e) {
            const { unitId: n } = t;
            this._listenerOnImageMap.has(n) || (this._listenTransformerChange(n), this._listenerOnImageMap.add(n));
          }
      })
    );
  }
  // Only handle one drawing transformer change.
  // eslint-disable-next-line max-lines-per-function
  _listenTransformerChange(e) {
    var i;
    const t = (i = this._getSceneAndTransformerByDrawingSearch(e)) == null ? void 0 : i.transformer;
    if (t == null)
      return;
    this.disposeWithMe(
      ze(
        t.changeStart$.subscribe((s) => {
          var c;
          this._transformerCache.clear();
          const { objects: o } = s;
          for (const d of o.values()) {
            const { oKey: a, width: g, height: u, left: l, top: f, angle: h } = d, m = this._drawingManagerService.getDrawingOKey(a);
            if (m == null)
              continue;
            const p = this._univerInstanceService.getUniverDocInstance(m.unitId), w = (c = p == null ? void 0 : p.getSnapshot().drawings) == null ? void 0 : c[m.drawingId];
            if ((w == null ? void 0 : w.layoutType) === k.INLINE)
              try {
                d.setOpacity(0.2);
              } catch {
              }
            w != null && this._transformerCache.set(m.drawingId, {
              drawing: w,
              top: f,
              left: l,
              width: g,
              height: u,
              angle: h
            });
          }
        })
      )
    );
    const n = Et(this._updateMultipleDrawingDocTransform.bind(this), 50);
    Et(this._nonInlineDrawingTransform.bind(this), 50), this.disposeWithMe(
      ze(
        t.changing$.subscribe((s) => {
          const { objects: o, offsetX: c, offsetY: d } = s;
          if (o.size > 1)
            n(o);
          else if (o.size === 1) {
            const a = this._transformerCache.values().next().value, g = o.values().next().value, { width: u, height: l, top: f, left: h, angle: m } = g;
            if (a && u === a.width && l === a.height && f === a.top && h === a.left && m === a.angle)
              return;
            a && (a.drawing.layoutType, k.INLINE), a && a.drawing.layoutType === k.INLINE && c != null && d != null && this._updateInlineDrawingAnchor(a.drawing, c, d);
          }
        })
      )
    ), this.disposeWithMe(
      ze(
        // eslint-disable-next-line complexity
        t.changeEnd$.subscribe((s) => {
          const { objects: o, offsetX: c, offsetY: d } = s;
          for (const a of o.values()) {
            const g = this._drawingManagerService.getDrawingOKey(a.oKey);
            if (g == null)
              continue;
            const u = this._transformerCache.get(g == null ? void 0 : g.drawingId);
            if ((u == null ? void 0 : u.drawing.layoutType) === k.INLINE)
              try {
                a.setOpacity(1);
              } catch {
              }
          }
          if (this._anchorShape && this._anchorShape.hide(), o.size > 1)
            this._updateMultipleDrawingDocTransform(o);
          else if (o.size === 1) {
            const a = this._transformerCache.values().next().value, g = o.values().next().value, { width: u, height: l, top: f, left: h, angle: m } = g;
            if (a && u === a.width && l === a.height && f === a.top && h === a.left && m === a.angle)
              return;
            a && a.drawing.layoutType === k.INLINE ? u !== a.width || l !== a.height || m !== a.angle ? this._updateDrawingSize(a, g) : c != null && d != null && this._moveInlineDrawing(a.drawing, c, d) : a && this._nonInlineDrawingTransform(a.drawing, g);
          }
          this._transformerCache.clear();
        })
      )
    );
  }
  // eslint-disable-next-line max-lines-per-function
  _updateMultipleDrawingDocTransform(e) {
    if (e.size < 1)
      return;
    const t = [];
    let n, i;
    for (const s of e.values()) {
      const { oKey: o, left: c, top: d, angle: a } = s;
      let { width: g, height: u } = s;
      const l = this._drawingManagerService.getDrawingOKey(o);
      if (l == null)
        continue;
      n == null && (n = l.unitId), i == null && (i = l.subUnitId);
      const f = this._transformerCache.get(l.drawingId);
      if (f == null)
        continue;
      const { drawing: h, top: m, left: p, width: w, height: D, angle: S } = f, { width: O, height: C } = this._getPageContentSize(h);
      if (g = Math.min(g, O), u = Math.min(u, C), (w !== g || D !== u) && t.push({
        drawingId: l.drawingId,
        key: "size",
        value: {
          width: g,
          height: u
        }
      }), S !== a && t.push({
        drawingId: l.drawingId,
        key: "angle",
        value: a
      }), m !== d || p !== c) {
        const y = d - m, A = c - p;
        y !== 0 && t.push({
          drawingId: l.drawingId,
          key: "positionV",
          value: {
            relativeFrom: h.docTransform.positionV.relativeFrom,
            posOffset: h.docTransform.positionV.posOffset + y
          }
        }), A !== 0 && t.push({
          drawingId: l.drawingId,
          key: "positionH",
          value: {
            relativeFrom: h.docTransform.positionH.relativeFrom,
            posOffset: h.docTransform.positionH.posOffset + A
          }
        });
      }
    }
    t.length > 0 && n && i && this._commandService.executeCommand(qe.id, {
      unitId: n,
      subUnitId: i,
      drawings: t
    });
  }
  // TODO: @JOCS, Use to draw and update the drawing anchor.
  _updateDrawingAnchor(e) {
    if (this._transformerCache.size !== 1)
      return;
    const t = this._transformerCache.values().next().value, n = e.values().next().value;
    this._getDrawingAnchor(t.drawing, n);
  }
  _updateInlineDrawingAnchor(e, t, n) {
    var s;
    if (this._transformerCache.size !== 1)
      return;
    const { contentBoxPointGroup: i } = (s = this._getInlineDrawingAnchor(e, t, n)) != null ? s : {};
    i != null && this._createOrUpdateInlineAnchor(e.unitId, i);
  }
  _getInlineDrawingAnchor(e, t, n) {
    var x, H;
    const i = this._renderManagerService.getRenderById(e.unitId), s = i == null ? void 0 : i.with(te).getSkeleton();
    if (i == null)
      return;
    const { mainComponent: o, scene: c } = i, d = o, a = c.getViewports()[0], {
      pageLayoutType: g = Nt.VERTICAL,
      pageMarginLeft: u,
      pageMarginTop: l
    } = d.getOffsetConfig();
    let f = null, h = !1, m = -1, p = "";
    const w = 0.5, D = this._getTransformCoordForDocumentOffset(d, a, t, n);
    if (D == null)
      return;
    const S = (x = this._renderManagerService.getRenderById(e.unitId)) == null ? void 0 : x.with(Me);
    if (S == null)
      return;
    const O = s == null ? void 0 : s.findNodeByCoord(D, g, u, l, {
      strict: !1,
      segmentId: S.getSegment(),
      segmentPage: S.getSegmentPage()
    });
    if (O) {
      const { node: I, ratioX: _, segmentPage: E, segmentId: T } = O;
      h = _ < w, f = I, m = E, p = T;
    }
    if (f == null)
      return;
    const C = s == null ? void 0 : s.findPositionByGlyph(f, m), y = this._getDocObject();
    if (C == null || s == null || y == null || qt(C))
      return;
    const A = {
      ...C,
      isBack: h
    }, L = y.document.getOffsetConfig(), R = new At(L, s), { cursorList: v, contentBoxPointGroup: N } = R.getRangePointData(A, A), { startOffset: G } = (H = Pt(v)) != null ? H : {};
    if (G != null)
      return { offset: G, contentBoxPointGroup: N, segmentId: p, segmentPage: m };
  }
  // eslint-disable-next-line max-lines-per-function, complexity
  _getDrawingAnchor(e, t) {
    var Ie, _e, ce, Se, De, be, Ce, Oe, de, ge, Ee;
    const n = this._renderManagerService.getRenderById(e.unitId), i = n == null ? void 0 : n.with(te).getSkeleton(), s = i == null ? void 0 : i.getSkeletonData();
    if (s == null || n == null)
      return;
    const { pages: o, skeHeaders: c, skeFooters: d } = s, { mainComponent: a, scene: g } = n, u = a, l = g.getViewports()[0], { pageLayoutType: f = Nt.VERTICAL, pageMarginLeft: h, pageMarginTop: m, docsLeft: p, docsTop: w } = u.getOffsetConfig(), { left: D, top: S, angle: O } = t;
    let { width: C, height: y } = t;
    const { positionV: A, positionH: L } = e.docTransform, { width: R, height: v } = this._getPageContentSize(e);
    C = Math.min(C, R), y = Math.min(y, v);
    let N = null, G = "", x = -1;
    const H = !1, I = {
      ...e.docTransform,
      size: {
        width: C,
        height: y
      },
      angle: O
    }, { x: _, y: E } = g.getViewportScrollXY(l), T = this._getTransformCoordForDocumentOffset(u, l, D - _, S - E);
    if (T == null)
      return;
    const U = (Ie = this._renderManagerService.getRenderById(e.unitId)) == null ? void 0 : Ie.with(Me);
    if (U == null)
      return;
    const B = i == null ? void 0 : i.findNodeByCoord(T, f, h, m, {
      strict: !1,
      segmentId: U.getSegment(),
      segmentPage: U.getSegmentPage()
    });
    if (B) {
      const { node: pe, segmentPage: ht, segmentId: ft } = B;
      N = pe, x = ht, G = ft;
    }
    if (N == null)
      return;
    const b = (_e = N.parent) == null ? void 0 : _e.parent, P = b == null ? void 0 : b.parent, V = (ce = P == null ? void 0 : P.lines.find((pe) => pe.paragraphIndex === (b == null ? void 0 : b.paragraphIndex) && pe.paragraphStart)) != null ? ce : P == null ? void 0 : P.lines[0], F = (Se = P == null ? void 0 : P.parent) == null ? void 0 : Se.parent;
    if (b == null || P == null || V == null || F == null)
      return;
    this._liquid.reset();
    const K = F.type;
    for (const pe of o) {
      const { headerId: ht, footerId: ft, pageHeight: En, pageWidth: bt, marginLeft: Ct, marginBottom: Rn } = pe, An = o.indexOf(pe);
      if (x > -1 && An === x) {
        switch (K) {
          case Ut.HEADER: {
            const Ge = (De = c.get(ht)) == null ? void 0 : De.get(bt);
            if (Ge)
              this._liquid.translatePagePadding({
                marginTop: Ge.marginTop,
                marginLeft: Ct
              });
            else
              throw new Error("header skeleton not found");
            break;
          }
          case Ut.FOOTER: {
            const Ge = (be = d.get(ft)) == null ? void 0 : be.get(bt);
            if (Ge)
              this._liquid.translatePagePadding({
                marginTop: En - Rn + Ge.marginTop,
                marginLeft: Ct
              });
            else
              throw new Error("footer skeleton not found");
            break;
          }
        }
        break;
      }
      if (this._liquid.translatePagePadding(pe), pe === F)
        break;
      this._liquid.restorePagePadding(pe), this._liquid.translatePage(pe, f, h, m);
    }
    switch (A.relativeFrom === W.LINE ? N = b.divides[0].glyphGroup[0] : N = (ge = (de = (Oe = (Ce = V.divides) == null ? void 0 : Ce[0]) == null ? void 0 : Oe.glyphGroup) == null ? void 0 : de[0]) != null ? ge : N, I.positionH = {
      relativeFrom: L.relativeFrom,
      posOffset: D - this._liquid.x - p
    }, L.relativeFrom) {
      case J.MARGIN: {
        I.positionH.posOffset = D - this._liquid.x - p - F.marginLeft;
        break;
      }
      case J.COLUMN: {
        I.positionH.posOffset = D - this._liquid.x - p - P.left;
        break;
      }
    }
    switch (I.positionV = {
      relativeFrom: A.relativeFrom,
      posOffset: S - this._liquid.y - w
    }, A.relativeFrom) {
      case W.PAGE: {
        I.positionV.posOffset = S - this._liquid.y - w - F.marginTop;
        break;
      }
      case W.LINE: {
        I.positionV.posOffset = S - this._liquid.y - w - b.top;
        break;
      }
      case W.PARAGRAPH: {
        I.positionV.posOffset = S - this._liquid.y - w - V.top;
        break;
      }
    }
    if (N == null)
      return;
    const oe = i == null ? void 0 : i.findPositionByGlyph(N, x), Ue = this._getDocObject();
    if (oe == null || i == null || Ue == null || qt(oe))
      return;
    const ye = {
      ...oe,
      isBack: H
    }, We = Ue.document.getOffsetConfig(), ae = new At(We, i), { cursorList: ne } = ae.getRangePointData(ye, ye), { startOffset: ie } = (Ee = Pt(ne)) != null ? Ee : {};
    if (ie != null)
      return { offset: ie, docTransform: I, segmentId: G, segmentPage: x };
  }
  // Update drawing when use transformer to resize it.
  _updateDrawingSize(e, t) {
    const n = [], { drawing: i, width: s, height: o, angle: c } = e, { unitId: d, subUnitId: a } = i;
    let { width: g, height: u, angle: l } = t;
    const { width: f, height: h } = this._getPageContentSize(i);
    g = Math.min(f, g), u = Math.min(h, u), (g !== s || u !== o) && n.push({
      drawingId: i.drawingId,
      key: "size",
      value: {
        width: g,
        height: u
      }
    }), l !== c && n.push({
      drawingId: i.drawingId,
      key: "angle",
      value: l
    }), n.length > 0 && d && a && this._commandService.executeCommand(qe.id, {
      unitId: d,
      subUnitId: a,
      drawings: n
    });
  }
  // Update inline drawing when use transformer to move it.
  _moveInlineDrawing(e, t, n) {
    const i = this._getInlineDrawingAnchor(e, t, n), { offset: s, segmentId: o, segmentPage: c } = i != null ? i : {};
    return this._commandService.executeCommand(_n.id, {
      unitId: e.unitId,
      subUnitId: e.unitId,
      drawing: e,
      offset: s,
      segmentId: o,
      segmentPage: c,
      needRefreshDrawings: s == null
    });
  }
  // Limit the drawing to the page area, mainly in the vertical direction,
  // and the upper and lower limits cannot exceed the page margin area.
  _limitDrawingInPage(e, t) {
    const n = this._renderManagerService.getRenderById(e.unitId), { left: i, top: s, width: o, height: c, angle: d } = t, a = n == null ? void 0 : n.with(te).getSkeleton(), g = a == null ? void 0 : a.getSkeletonData(), { pages: u } = g != null ? g : {};
    if (g == null || n == null || u == null)
      return {
        left: i,
        top: s,
        width: o,
        height: c,
        angle: d
      };
    const { mainComponent: l } = n, f = l, { top: h, pageLayoutType: m, pageMarginLeft: p, pageMarginTop: w } = f;
    let D = s;
    this._liquid.reset();
    for (const S of u) {
      const { marginBottom: O, pageHeight: C } = S, y = u.indexOf(S), A = u[y + 1];
      if (A == null)
        continue;
      if (Ae.hasIntersectionBetweenTwoRanges(
        s,
        s + c,
        this._liquid.y + h + C - O,
        this._liquid.y + h + C + w + A.marginTop
      )) {
        const R = s + c / 2, v = this._liquid.y + h + C + w / 2;
        R < v ? D = Math.min(s, this._liquid.y + h + C - O - c) : D = Math.max(s, this._liquid.y + h + C + w + A.marginTop);
      }
      this._liquid.translatePage(S, m, p, w);
    }
    return {
      left: i,
      top: D,
      width: o,
      height: c,
      angle: d
    };
  }
  _nonInlineDrawingTransform(e, t, n = !1) {
    const i = e.isMultiTransform === se.TRUE ? t : this._limitDrawingInPage(e, t);
    if (n && i.top !== t.top)
      return;
    const s = this._getDrawingAnchor(e, i), { offset: o, docTransform: c, segmentId: d, segmentPage: a } = s != null ? s : {};
    return o == null || c == null ? this._updateMultipleDrawingDocTransform(/* @__PURE__ */ new Map([[e.drawingId, t]])) : this._commandService.executeCommand(Sn.id, {
      unitId: e.unitId,
      subUnitId: e.unitId,
      drawing: e,
      offset: o,
      docTransform: c,
      segmentId: d,
      segmentPage: a
    });
  }
  _getSceneAndTransformerByDrawingSearch(e) {
    if (e == null)
      return;
    const t = this._renderManagerService.getRenderById(e), n = t == null ? void 0 : t.scene;
    if (n == null)
      return;
    const i = n.getTransformerByCreate();
    return { scene: n, transformer: i };
  }
  _getTransformCoordForDocumentOffset(e, t, n, i) {
    const { documentTransform: s } = e.getOffsetConfig(), o = t.transformVector2SceneCoord(ii.FromArray([n, i]));
    if (o)
      return s.clone().invert().applyPoint(o);
  }
  _createOrUpdateInlineAnchor(e, t) {
    const n = this._renderManagerService.getRenderById(e);
    if (n == null)
      return;
    const { mainComponent: i, scene: s } = n, o = i, {
      docsLeft: c,
      docsTop: d
    } = o.getOffsetConfig(), a = Zn(t), { left: g, top: u, height: l } = a, f = g + c, h = u + d;
    if (this._anchorShape) {
      this._anchorShape.transformByState({ left: f, top: h, height: l }), this._anchorShape.show();
      return;
    }
    const m = 6, p = new ri(ur + Qt(m), {
      left: f,
      top: h,
      height: l,
      strokeWidth: 2,
      stroke: si(Gn.darkGray, 1),
      evented: !1
    });
    this._anchorShape = p, s.addObject(p, Qn);
  }
  _getDocObject() {
    return Jn(this._univerInstanceService, this._renderManagerService);
  }
  _getPageContentSize(e) {
    const t = this._renderManagerService.getRenderById(e.unitId), n = t == null ? void 0 : t.with(te).getSkeleton(), i = 500, s = 500, o = n == null ? void 0 : n.getSkeletonData();
    if (o == null || t == null)
      return {
        width: i,
        height: s
      };
    const { pages: c } = o;
    let d = null;
    for (const a of c) {
      const { skeDrawings: g } = a;
      if (g.has(e.drawingId)) {
        d = a;
        break;
      }
    }
    if (d) {
      const { pageWidth: a, pageHeight: g, marginLeft: u, marginBottom: l, marginRight: f, marginTop: h } = d;
      return {
        width: Math.max(i, a - u - f),
        height: Math.max(s, g - h - l)
      };
    } else
      return {
        width: i,
        height: s
      };
  }
};
ct = lr([
  tt(0, j),
  tt(1, z),
  tt(2, fe),
  tt(3, Q)
], ct);
var hr = Object.getOwnPropertyDescriptor, fr = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? hr(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (i = o(i) || i);
  return i;
}, Ve = (r, e) => (t, n) => e(t, n, r);
let dt = class extends Hn {
  constructor(e, t, n, i, s) {
    super();
    me(this, "_initImagePopupMenu", /* @__PURE__ */ new Set());
    me(this, "_disposePopups", []);
    this._drawingManagerService = e, this._canvasPopManagerService = t, this._renderManagerService = n, this._univerInstanceService = i, this._contextService = s, this._init();
  }
  _init() {
    this.disposeWithMe(
      this._univerInstanceService.getCurrentTypeOfUnit$(ve.UNIVER_DOC).pipe(jt(this.dispose$)).subscribe((e) => this._create(e))
    ), this.disposeWithMe(
      this._univerInstanceService.getTypeOfUnitDisposed$(ve.UNIVER_DOC).pipe(jt(this.dispose$)).subscribe((e) => this._dispose(e))
    ), this._univerInstanceService.getAllUnitsForType(ve.UNIVER_DOC).forEach((e) => this._create(e));
  }
  _dispose(e) {
    const t = e.getUnitId();
    this._disposePopups.length && (this._disposePopups.forEach((n) => n.dispose()), this._disposePopups.length = 0), this._renderManagerService.removeRender(t);
  }
  _create(e) {
    if (!e)
      return;
    const t = e.getUnitId();
    this._renderManagerService.has(t) && !this._initImagePopupMenu.has(t) && (this._popupMenuListener(t), this._initImagePopupMenu.add(t));
  }
  _hasCropObject(e) {
    const t = e.getAllObjects();
    for (const n of t)
      if (n instanceof Ri)
        return !0;
    return !1;
  }
  // eslint-disable-next-line max-lines-per-function
  _popupMenuListener(e) {
    var s;
    const t = (s = this._renderManagerService.getRenderById(e)) == null ? void 0 : s.scene;
    if (!t)
      return;
    const n = t.getTransformerByCreate();
    if (!n)
      return;
    const i = this._disposePopups;
    this.disposeWithMe(
      n.createControl$.subscribe(
        () => {
          if (this._hasCropObject(t))
            return;
          const o = n.getSelectedObjectMap();
          if (i.forEach((w) => w.dispose()), i.length = 0, o.size > 1)
            return;
          const c = o.values().next().value;
          if (!c)
            return;
          const d = c.oKey, a = this._drawingManagerService.getDrawingOKey(d);
          if (!a || a.drawingType === Pe.DRAWING_DOM)
            return;
          const { unitId: g, subUnitId: u, drawingId: l, drawingType: f } = a, h = this._canvasPopManagerService.attachPopupToObject(
            c,
            {
              componentKey: Ai,
              direction: "horizontal",
              offset: [2, 0],
              extraProps: {
                menuItems: this._getImageMenuItems(g, u, l, f)
              }
            },
            g
          );
          i.push(this.disposeWithMe(h)), !this._drawingManagerService.getFocusDrawings().find((w) => w.unitId === g && w.subUnitId === u && w.drawingId === l) && this._drawingManagerService.focusDrawing([{
            unitId: g,
            subUnitId: u,
            drawingId: l
          }]);
        }
      )
    ), this.disposeWithMe(
      n.clearControl$.subscribe(
        () => {
          i.forEach((o) => o.dispose()), i.length = 0, this._contextService.setContextValue(nt, !1), this._drawingManagerService.focusDrawing(null);
        }
      )
    ), this.disposeWithMe(
      n.changing$.subscribe(
        () => {
          i.forEach((o) => o.dispose()), i.length = 0;
        }
      )
    ), this.disposeWithMe(
      n.changeStart$.subscribe(() => {
        i.forEach((o) => o.dispose()), i.length = 0;
      })
    );
  }
  _getImageMenuItems(e, t, n, i) {
    return [
      {
        label: "image-popup.edit",
        index: 0,
        commandId: Tn.id,
        commandParams: { unitId: e, subUnitId: t, drawingId: n },
        // disable: !!SHEET_EDITOR_UNITS.includes(unitId) || drawingType === DrawingTypeEnum.DRAWING_DOM,
        disable: !0
      },
      {
        label: "image-popup.delete",
        index: 1,
        commandId: Mt.id,
        commandParams: { unitId: e, drawings: [{ unitId: e, subUnitId: t, drawingId: n }] },
        disable: !1
      },
      {
        label: "image-popup.crop",
        index: 2,
        commandId: Pi.id,
        commandParams: { unitId: e, subUnitId: t, drawingId: n },
        disable: !0
        // TODO: @JOCS, feature is not ready.
      },
      {
        label: "image-popup.reset",
        index: 3,
        commandId: xi.id,
        commandParams: [{ unitId: e, subUnitId: t, drawingId: n }],
        disable: !0
        // TODO: @JOCS, feature is not ready.
      }
    ];
  }
};
dt = fr([
  Ve(0, fe),
  Ve(1, Z(ei)),
  Ve(2, Q),
  Ve(3, z),
  Ve(4, Yt)
], dt);
var pr = Object.getOwnPropertyDescriptor, mr = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? pr(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (i = o(i) || i);
  return i;
}, Re = (r, e) => (t, n) => e(t, n, r);
let It = class extends xe {
  constructor(e, t, n, i, s, o, c, d) {
    super();
    me(this, "_liquid", new rn());
    this._context = e, this._docSkeletonManagerService = t, this._commandService = n, this._editorService = i, this._drawingManagerService = s, this._docRefreshDrawingsService = o, this._univerInstanceService = c, this._lifecycleService = d, this._initialize(), this._commandExecutedListener();
  }
  _initialize() {
    this._initialRenderRefresh(), this._drawingInitializeListener(), this._initResize();
  }
  _initialRenderRefresh() {
    this.disposeWithMe(
      this._docSkeletonManagerService.currentSkeleton$.subscribe((e) => {
        e != null && this._refreshDrawing(e);
      })
    ), this.disposeWithMe(
      this._docRefreshDrawingsService.refreshDrawings$.subscribe((e) => {
        e != null && this._refreshDrawing(e);
      })
    );
  }
  _commandExecutedListener() {
    const e = [ee.id, nn.id];
    this.disposeWithMe(
      this._commandService.onCommandExecuted((t) => {
        if (e.includes(t.id)) {
          const n = t.params, { unitId: i } = n, { unitId: s, mainComponent: o } = this._context;
          if (i !== s)
            return;
          const c = this._docSkeletonManagerService.getSkeleton();
          if (c == null)
            return;
          if (this._editorService.isEditor(s) && s !== St) {
            o == null || o.makeDirty();
            return;
          }
          this._refreshDrawing(c);
        }
      })
    );
  }
  _initResize() {
    this.disposeWithMe(
      Zt(this._context.engine.onTransformChange$).pipe(
        Vt((e) => e.type === oi.resize),
        dn(16)
      ).subscribe(() => {
        var n;
        const e = this._docSkeletonManagerService.getSkeleton(), { scene: t } = this._context;
        (n = t.getTransformer()) == null || n.refreshControls(), this._refreshDrawing(e);
      })
    );
  }
  _refreshDrawing(e) {
    var D, S;
    const t = e == null ? void 0 : e.getSkeletonData(), { mainComponent: n, unitId: i } = this._context, s = n;
    if (!t)
      return;
    const { left: o, top: c, pageLayoutType: d, pageMarginLeft: a, pageMarginTop: g } = s, { pages: u, skeHeaders: l, skeFooters: f } = t, h = {};
    this._liquid.reset();
    for (let O = 0, C = u.length; O < C; O++) {
      const y = u[O], { headerId: A, footerId: L, pageWidth: R } = y;
      if (A) {
        const v = (D = l.get(A)) == null ? void 0 : D.get(R);
        v && this._calculateDrawingPosition(
          i,
          v,
          o,
          c,
          h,
          v.marginTop,
          y.marginLeft
        );
      }
      if (L) {
        const v = (S = f.get(L)) == null ? void 0 : S.get(R);
        v && this._calculateDrawingPosition(
          i,
          v,
          o,
          c,
          h,
          y.pageHeight - y.marginBottom + v.marginTop,
          y.marginLeft
        );
      }
      this._calculateDrawingPosition(i, y, o, c, h, y.marginTop, y.marginLeft), this._liquid.translatePage(y, d, a, g);
    }
    const m = Object.values(h), p = m.filter((O) => !O.isMultiTransform), w = m.filter((O) => O.isMultiTransform);
    p.length > 0 && this._drawingManagerService.refreshTransform(p), this._handleMultiDrawingsTransform(w);
  }
  _handleMultiDrawingsTransform(e) {
    const { scene: t, unitId: n } = this._context, i = t.getTransformerByCreate();
    e.forEach((d) => {
      const a = this._drawingManagerService.getDrawingByParam(d);
      a != null && (a.transform = d.transform, a.transforms = d.transforms, a.isMultiTransform = d.isMultiTransform);
    });
    const o = [...i.getSelectedObjectMap().keys()], c = Object.values(this._drawingManagerService.getDrawingData(n, n)).filter((d) => d.isMultiTransform === se.TRUE);
    this._drawingManagerService.removeNotification(c), e.length > 0 && this._drawingManagerService.addNotification(e);
    for (const d of o) {
      const a = t.getObject(d);
      a && i.setSelectedControl(a);
    }
  }
  _calculateDrawingPosition(e, t, n, i, s, o, c) {
    const { skeDrawings: d } = t;
    this._liquid.translatePagePadding({
      marginTop: o,
      marginLeft: c
    }), d.forEach((a) => {
      const { aLeft: g, aTop: u, height: l, width: f, angle: h, drawingId: m, drawingOrigin: p } = a, w = p.layoutType === k.WRAP_NONE && p.behindDoc === se.TRUE, { isMultiTransform: D = se.FALSE } = p, S = {
        left: g + n + this._liquid.x,
        top: u + i + this._liquid.y,
        width: f,
        height: l,
        angle: h
      };
      s[m] == null ? s[m] = {
        unitId: e,
        subUnitId: e,
        drawingId: m,
        behindText: w,
        transform: S,
        transforms: [S],
        isMultiTransform: D
      } : D === se.TRUE && s[m].transforms.push(S);
    }), this._liquid.restorePagePadding({
      marginTop: o,
      marginLeft: c
    });
  }
  _drawingInitializeListener() {
    const e = () => {
      const t = this._docSkeletonManagerService.getSkeleton();
      t != null && (this._refreshDrawing(t), this._drawingManagerService.initializeNotification(this._context.unitId));
    };
    this._lifecycleService.stage >= Rt.Rendered ? this._docSkeletonManagerService.getSkeleton() ? e() : setTimeout(e, 500) : this.disposeWithMe(this._lifecycleService.lifecycle$.pipe(Vt((t) => t === Rt.Rendered)).subscribe(e));
  }
};
It = mr([
  Re(1, Z(te)),
  Re(2, j),
  Re(3, ti),
  Re(4, fe),
  Re(5, Z(ut)),
  Re(6, z),
  Re(7, Z(jn))
], It);
var wr = Object.defineProperty, vr = Object.getOwnPropertyDescriptor, Ir = (r, e, t) => e in r ? wr(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, _r = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? vr(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (i = o(i) || i);
  return i;
}, vt = (r, e) => (t, n) => e(t, n, r), Cn = (r, e, t) => Ir(r, typeof e != "symbol" ? e + "" : e, t);
const Sr = "DOC_DRAWING_UI_PLUGIN";
let gt = class extends zn {
  constructor(r = $t, e, t, n) {
    super(), this._config = r, this._injector = e, this._renderManagerSrv = t, this._configService = n;
    const { ...i } = Xn(
      {},
      $t,
      this._config
    );
    this._configService.setConfig(Hi, i);
  }
  onStarting() {
    [
      [st],
      [dt],
      [ct],
      [ot],
      [ut],
      [rt],
      [at]
    ].forEach((e) => this._injector.add(e));
  }
  onReady() {
    [
      [it],
      [It]
    ].forEach((r) => this._renderManagerSrv.registerRenderModule(ve.UNIVER_DOC, r)), this._injector.get(ot), this._injector.get(st), this._injector.get(ct), this._injector.get(at);
  }
  onRendered() {
    this._injector.get(dt), this._injector.get(rt);
  }
};
Cn(gt, "type", ve.UNIVER_DOC);
Cn(gt, "pluginName", Sr);
gt = _r([
  Vn(Ni, pi, qn, Mi),
  vt(1, Z(Jt)),
  vt(2, Q),
  vt(3, $n)
], gt);
export {
  ki as ClearDocDrawingTransformerOperation,
  yn as DOCS_IMAGE_MENU_ID,
  ln as DeleteDocDrawingsCommand,
  rt as DocFloatDomController,
  Tn as EditDocDrawingOperation,
  un as GroupDocDrawingCommand,
  yt as InsertDocDrawingCommand,
  pn as InsertDocImageCommand,
  Ke as MoveDocDrawingsCommand,
  Mt as RemoveDocDrawingCommand,
  hn as SetDocDrawingArrangeCommand,
  On as SidebarDocDrawingOperation,
  fn as UngroupDocDrawingCommand,
  gt as UniverDocsDrawingUIPlugin
};
