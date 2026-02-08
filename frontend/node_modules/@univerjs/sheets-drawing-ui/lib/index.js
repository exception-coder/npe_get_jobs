var yr = Object.defineProperty;
var Tr = (i, t, e) => t in i ? yr(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var ee = (i, t, e) => Tr(i, typeof t != "symbol" ? t + "" : t, e);
import { precisionTo as pt, IRenderManagerService as J, transformObjectOutOfGroup as Er, getGroupState as Or, getCurrentTypeOfRenderer as sn, CURSOR_TYPE as Ur, RENDER_CLASS_TYPE as Oe, Rect as Ue, ObjectType as mn, DRAWING_OBJECT_LAYER_INDEX as Ft, SHEET_VIEWPORT_KEY as xn } from "@univerjs/engine-render";
import { convertPositionSheetOverGridToAbsolute as Pr, SheetSkeletonManagerService as V, ISheetSelectionRenderService as xe, attachRangeWithCoord as Yn, SheetCanvasPopManagerService as Ar, HoverManagerService as Nr, IEditorBridgeService as kr, IAutoFillService as Wr, EditingRenderController as Br, SetCellEditVisibleOperation as pn, PREDEFINED_HOOK_NAME as We, COPY_TYPE as ve, discreteRangeToRange as wn, virtualizeDiscreteRanges as jr, ISheetClipboardService as $r, SetZoomRatioOperation as _n, SetScrollOperation as Fr, SheetPrintInterceptorService as xr, getCurrentRangeDisable$ as Yr } from "@univerjs/sheets-ui";
import { CommandType as Z, ICommandService as X, IUndoRedoService as Ye, sequenceExecute as Gn, DrawingTypeEnum as B, ArrangeTypeEnum as wt, Inject as A, IContextService as Xn, LocaleService as nt, Injector as Ge, Disposable as ne, createDocumentModelWithStyle as Vt, ObjectRelativeFromV as Sn, ObjectRelativeFromH as vn, WrapTextType as In, PositionedObjectLayoutType as Cn, BooleanNumber as Dn, BuildTextUtils as Ht, ImageSourceType as Rn, generateRandomId as Qe, FOCUSING_COMMON_DRAWINGS as $e, IUniverInstanceService as Se, UniverInstanceType as F, Direction as _e, IImageIoService as Gr, RxDisposable as Xr, DOCS_NORMAL_EDITOR_UNIT_ID_KEY as Ze, DOCS_ZEN_EDITOR_UNIT_ID_KEY as Be, InterceptorEffectEnum as Lr, ObjectMatrix as Vr, DOCS_FORMULA_BAR_EDITOR_UNIT_ID_KEY as Hr, IPermissionService as zr, UserManagerService as Kr, LifecycleService as Jr, LifecycleStages as Zr, DisposableCollection as _t, fromEventSubject as qr, Tools as je, PRINT_CHART_COMPONENT_KEY as Qr, Rectangle as ei, FOCUSING_FX_BAR_EDITOR as ti, EDITOR_ACTIVATED as ni, FOCUSING_PANEL_EDITOR as ri, DependentOn as ii, IConfigService as si, Plugin as oi, merge as ai, registerDependencies as ci, touchDependencies as xt } from "@univerjs/core";
import { ISheetDrawingService as re, DrawingApplyType as U, SetDrawingApplyMutation as P, SheetDrawingAnchorType as O, UniverSheetsDrawingPlugin as di } from "@univerjs/sheets-drawing";
import { SheetInterceptorService as At, SheetsSelectionsService as on, SetRangeValuesCommand as bn, getSheetCommandTarget as se, INTERCEPTOR_POINT as li, InterceptCellContentPriority as ui, WorkbookViewPermission as Mn, WorksheetViewPermission as yn, WorkbookEditablePermission as zt, WorksheetEditPermission as Kt, SetFrozenMutation as hi, SetWorksheetRowAutoHeightMutation as gi, COMMAND_LISTENER_SKELETON_CHANGE as fi, InsertRowCommand as Ln, InsertColCommand as Vn, RemoveRowCommand as Hn, RemoveColCommand as zn, DeleteRangeMoveLeftCommand as Kn, DeleteRangeMoveUpCommand as Jn, InsertRangeMoveDownCommand as Zn, InsertRangeMoveRightCommand as qn, DeltaRowHeightCommand as Jt, SetRowHeightCommand as Zt, DeltaColumnWidthCommand as Qn, SetColWidthCommand as er, SetRowHiddenCommand as tr, SetSpecificRowsVisibleCommand as nr, SetSpecificColsVisibleCommand as rr, SetColHiddenCommand as ir, MoveColsCommand as sr, MoveRowsCommand as or, MoveRangeCommand as ar, SetRowVisibleMutation as mi, SetRowHiddenMutation as pi, SetColVisibleMutation as wi, SetColHiddenMutation as _i, SetWorksheetRowHeightMutation as Si, SetWorksheetColWidthMutation as vi, SetWorksheetActiveOperation as Ii, RangeProtectionPermissionEditPoint as Ci } from "@univerjs/sheets";
import { MessageType as pe, render as Di, unmount as Ri, clsx as bi, RadioGroup as Mi, Radio as Yt } from "@univerjs/design";
import { docDrawingPositionToTransform as Tn, ReplaceSnapshotCommand as yi, InnerPasteCommand as Ti } from "@univerjs/docs-ui";
import { IImageIoService as Ei, IDrawingManagerService as ie, DRAWING_IMAGE_ALLOW_IMAGE_LIST as En, DRAWING_IMAGE_COUNT_LIMIT as On, ImageUploadStatusType as Pe, DRAWING_IMAGE_ALLOW_SIZE as Un, getImageSize as Gt, SetDrawingSelectedOperation as Nt, DRAWING_IMAGE_WIDTH_LIMIT as Pn, DRAWING_IMAGE_HEIGHT_LIMIT as An, ImageSourceType as Oi, getDrawingShapeKeyByDrawingSearch as Ie, UniverDrawingPlugin as Ui } from "@univerjs/drawing";
import { ILocalFileService as Pi, IMessageService as cr, ISidebarService as Ai, IDialogService as Ni, IClipboardInterfaceService as ki, CanvasFloatDomService as Wi, PrintFloatDomSingle as Bi, ComponentManager as dr, connectInjector as ji, useDependency as qe, getMenuHiddenObservable as an, MenuItemType as cn, RibbonInsertGroup as $i, KeyCode as Fe, IMenuManagerService as Fi, IShortcutService as xi } from "@univerjs/ui";
import { DocDrawingController as Yi, UniverDocsDrawingPlugin as Gi } from "@univerjs/docs-drawing";
import { ImageCropperObject as Xi, COMPONENT_IMAGE_POPUP_MENU as Li, OpenImageCropOperation as Vi, ImageResetSizeOperation as Hi, DrawingRenderService as lr, DrawingCommonPanel as zi, UniverDrawingUIPlugin as Ki } from "@univerjs/drawing-ui";
import { takeUntil as Nn, throttleTime as Ji, combineLatest as St, switchMap as we, EMPTY as fe, tap as kn, map as Re, distinctUntilChanged as Wn, Subject as Xt, filter as Zi, take as qi, BehaviorSubject as ke, of as Bn } from "rxjs";
import { jsx as oe, jsxs as qt } from "react/jsx-runtime";
import { useMemo as Qi, useState as Qt, useEffect as ur } from "react";
function z(i, t, e) {
  const { from: n, to: r, flipY: s = !1, flipX: o = !1, angle: a = 0, skewX: d = 0, skewY: u = 0 } = i, c = e.getCurrent();
  if (c == null)
    return;
  const l = Pr(
    c.unitId,
    c.sheetId,
    { from: n, to: r },
    e
  );
  let { left: g, top: h, width: f, height: p } = l;
  const m = e.getCurrentSkeleton(), _ = m.rowHeaderWidth + m.columnTotalWidth, v = m.columnHeaderHeight + m.rowTotalHeight;
  return g + f > _ && (g = _ - f), h + p > v && (h = v - p), {
    flipY: s,
    flipX: o,
    angle: a,
    skewX: d,
    skewY: u,
    left: g,
    top: h,
    width: f,
    height: p
  };
}
function $(i, t) {
  const { left: e = 0, top: n = 0, width: r = 0, height: s = 0, flipY: o = !1, flipX: a = !1, angle: d = 0, skewX: u = 0, skewY: c = 0 } = i, l = t.getCellWithCoordByOffset(e, n);
  if (l == null)
    return;
  const g = {
    column: l.actualColumn,
    columnOffset: pt(e - l.startX, 1),
    row: l.actualRow,
    rowOffset: pt(n - l.startY, 1)
  }, h = t.getCellWithCoordByOffset(e + r, n + s);
  if (h == null)
    return;
  const f = {
    column: h.actualColumn,
    columnOffset: pt(e + r - h.startX, 1),
    row: h.actualRow,
    rowOffset: pt(n + s - h.startY, 1)
  };
  return {
    flipY: o,
    flipX: a,
    angle: d,
    skewX: u,
    skewY: c,
    from: g,
    to: f
  };
}
const Y = {
  id: "sheet.operation.clear-drawing-transformer",
  type: Z.MUTATION,
  handler: (i, t) => {
    const e = i.get(J);
    return t.forEach((n) => {
      var r, s;
      (s = (r = e.getRenderById(n)) == null ? void 0 : r.scene.getTransformer()) == null || s.debounceRefreshControls();
    }), !0;
  }
}, rt = {
  id: "sheet.command.remove-sheet-image",
  type: Z.COMMAND,
  handler: (i, t) => {
    var v, I, R;
    const e = i.get(X), n = i.get(Ye), r = i.get(At), s = i.get(re);
    if (!t) return !1;
    const { drawings: o } = t, a = [];
    o.forEach((S) => {
      const { unitId: C } = S;
      a.push(C);
    });
    const d = s.getBatchRemoveOp(o), { unitId: u, subUnitId: c, undo: l, redo: g, objects: h } = d, f = r.onCommandExecute({ id: rt.id, params: t }), p = { id: P.id, params: { unitId: u, subUnitId: c, op: g, objects: h, type: U.REMOVE } }, m = { id: P.id, params: { unitId: u, subUnitId: c, op: l, objects: h, type: U.INSERT } };
    return Gn([...(v = f.preRedos) != null ? v : [], p, ...f.redos], e) ? (n.pushUndoRedo({
      unitID: u,
      undoMutations: [
        ...(I = f.preUndos) != null ? I : [],
        m,
        ...f.undos,
        { id: Y.id, params: a }
      ],
      redoMutations: [
        ...(R = f.preRedos) != null ? R : [],
        p,
        ...f.redos,
        { id: Y.id, params: a }
      ]
    }), !0) : !1;
  }
}, hr = {
  id: "sheet.command.delete-drawing",
  type: Z.COMMAND,
  handler: (i) => {
    const t = i.get(X), n = i.get(re).getFocusDrawings();
    if (n.length === 0)
      return !1;
    const r = n[0].unitId, s = n.map((o) => {
      const { unitId: a, subUnitId: d, drawingId: u, drawingType: c } = o;
      return {
        unitId: a,
        subUnitId: d,
        drawingId: u,
        drawingType: c
      };
    });
    return t.executeCommand(rt.id, {
      unitId: r,
      drawings: s
    });
  }
};
function es(i) {
  const t = [];
  return i.forEach((e) => {
    const { parent: n, children: r } = e, { unitId: s, subUnitId: o, drawingId: a } = n, d = Or(0, 0, r.map((l) => l.transform || {})), u = r.map((l) => {
      const g = l.transform || { left: 0, top: 0 }, { unitId: h, subUnitId: f, drawingId: p } = l;
      return {
        unitId: h,
        subUnitId: f,
        drawingId: p,
        transform: {
          ...g,
          left: g.left - d.left,
          top: g.top - d.top
        },
        groupId: a
      };
    }), c = {
      unitId: s,
      subUnitId: o,
      drawingId: a,
      drawingType: B.DRAWING_GROUP,
      transform: d
    };
    t.push({
      parent: c,
      children: u
    });
  }), t;
}
function ts(i) {
  const t = [];
  return i.forEach((e) => {
    const { parent: n, children: r } = e, { unitId: s, subUnitId: o, drawingId: a, transform: d = { width: 0, height: 0 } } = n;
    if (d == null)
      return;
    const u = r.map((l) => {
      const { transform: g } = l, { unitId: h, subUnitId: f, drawingId: p } = l, m = Er(g || {}, d, d.width || 0, d.height || 0);
      return {
        unitId: h,
        subUnitId: f,
        drawingId: p,
        transform: m,
        groupId: void 0
      };
    }), c = {
      unitId: s,
      subUnitId: o,
      drawingId: a,
      drawingType: B.DRAWING_GROUP,
      transform: {
        left: 0,
        top: 0
      }
    };
    t.push({
      parent: c,
      children: u
    });
  }), t;
}
const gr = {
  id: "sheet.command.group-sheet-image",
  type: Z.COMMAND,
  handler: (i, t) => {
    const e = i.get(X), n = i.get(Ye), r = i.get(re);
    if (!t) return !1;
    const s = [];
    t.forEach(({ parent: h, children: f }) => {
      s.push(h.unitId), f.forEach((p) => {
        s.push(p.unitId);
      });
    });
    const o = r.getGroupDrawingOp(t), { unitId: a, subUnitId: d, undo: u, redo: c, objects: l } = o;
    return e.syncExecuteCommand(P.id, { op: c, unitId: a, subUnitId: d, objects: l, type: U.GROUP }) ? (n.pushUndoRedo({
      unitID: a,
      undoMutations: [
        { id: P.id, params: { op: u, unitId: a, subUnitId: d, objects: ts(l), type: U.UNGROUP } },
        { id: Y.id, params: s }
      ],
      redoMutations: [
        { id: P.id, params: { op: c, unitId: a, subUnitId: d, objects: l, type: U.GROUP } },
        { id: Y.id, params: s }
      ]
    }), !0) : !1;
  }
}, kt = {
  id: "sheet.command.insert-sheet-image",
  type: Z.COMMAND,
  handler: (i, t) => {
    var v, I, R;
    const e = i.get(X), n = i.get(Ye), r = i.get(re), s = i.get(At);
    if (!t) return !1;
    const o = t.drawings, a = o.map((S) => S.unitId), d = r.getBatchAddOp(o), { unitId: u, subUnitId: c, undo: l, redo: g, objects: h } = d, f = s.onCommandExecute({ id: kt.id, params: t }), p = { id: P.id, params: { op: g, unitId: u, subUnitId: c, objects: h, type: U.INSERT } }, m = { id: P.id, params: { op: l, unitId: u, subUnitId: c, objects: h, type: U.REMOVE } };
    return Gn([...(v = f.preRedos) != null ? v : [], p, ...f.redos], e) ? (n.pushUndoRedo({
      unitID: u,
      undoMutations: [
        ...(I = f.preUndos) != null ? I : [],
        m,
        ...f.undos,
        { id: Y.id, params: a }
      ],
      redoMutations: [
        ...(R = f.preRedos) != null ? R : [],
        p,
        ...f.redos,
        { id: Y.id, params: a }
      ]
    }), !0) : !1;
  }
}, fr = {
  id: "sheet.command.set-drawing-arrange",
  type: Z.COMMAND,
  handler: (i, t) => {
    const e = i.get(X), n = i.get(Ye);
    if (!t) return !1;
    const r = i.get(re), { unitId: s, subUnitId: o, drawingIds: a, arrangeType: d } = t, u = { unitId: s, subUnitId: o, drawingIds: a };
    let c;
    if (d === wt.forward ? c = r.getForwardDrawingsOp(u) : d === wt.backward ? c = r.getBackwardDrawingOp(u) : d === wt.front ? c = r.getFrontDrawingsOp(u) : d === wt.back && (c = r.getBackDrawingsOp(u)), c == null)
      return !1;
    const { objects: l, redo: g, undo: h } = c;
    return e.syncExecuteCommand(P.id, { op: g, unitId: s, subUnitId: o, objects: l, type: U.ARRANGE }) ? (n.pushUndoRedo({
      unitID: s,
      undoMutations: [
        { id: P.id, params: { op: h, unitId: s, subUnitId: o, objects: l, type: U.ARRANGE } }
      ],
      redoMutations: [
        { id: P.id, params: { op: g, unitId: s, subUnitId: o, objects: l, type: U.ARRANGE } }
      ]
    }), !0) : !1;
  }
}, Wt = {
  id: "sheet.command.set-sheet-image",
  type: Z.COMMAND,
  handler: (i, t) => {
    const e = i.get(X), n = i.get(Ye), r = i.get(re);
    if (!t) return !1;
    const { drawings: s } = t, o = r.getBatchUpdateOp(s), { unitId: a, subUnitId: d, undo: u, redo: c, objects: l } = o;
    return e.syncExecuteCommand(P.id, { unitId: a, subUnitId: d, op: c, objects: l, type: U.UPDATE }) ? (n.pushUndoRedo({
      unitID: a,
      undoMutations: [
        { id: P.id, params: { unitId: a, subUnitId: d, op: u, objects: l, type: U.UPDATE } },
        { id: Y.id, params: [a] }
      ],
      redoMutations: [
        { id: P.id, params: { unitId: a, subUnitId: d, op: c, objects: l, type: U.UPDATE } },
        { id: Y.id, params: [a] }
      ]
    }), !0) : !1;
  }
}, mr = {
  id: "sheet.command.ungroup-sheet-image",
  type: Z.COMMAND,
  handler: (i, t) => {
    const e = i.get(X), n = i.get(Ye), r = i.get(re);
    if (!t) return !1;
    const s = [];
    t.forEach(({ parent: h, children: f }) => {
      s.push(h.unitId), f.forEach((p) => {
        s.push(p.unitId);
      });
    });
    const o = r.getUngroupDrawingOp(t), { unitId: a, subUnitId: d, undo: u, redo: c, objects: l } = o;
    return e.syncExecuteCommand(P.id, { op: c, unitId: a, subUnitId: d, objects: l, type: U.UNGROUP }) ? (n.pushUndoRedo({
      unitID: a,
      undoMutations: [
        { id: P.id, params: { op: u, unitId: a, subUnitId: d, objects: es(l), type: U.GROUP } },
        { id: Y.id, params: s }
      ],
      redoMutations: [
        { id: P.id, params: { op: c, unitId: a, subUnitId: d, objects: l, type: U.UNGROUP } },
        { id: Y.id, params: s }
      ]
    }), !0) : !1;
  }
};
var ns = Object.getOwnPropertyDescriptor, rs = (i, t, e, n) => {
  for (var r = n > 1 ? void 0 : n ? ns(t, e) : t, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (r = o(r) || r);
  return r;
}, te = (i, t) => (e, n) => t(e, n, i);
function is(i, t, e) {
  const n = e * Math.PI / 180, r = Math.abs(i * Math.cos(n)) + Math.abs(t * Math.sin(n)), s = Math.abs(i * Math.sin(n)) + Math.abs(t * Math.cos(n));
  return { rotatedWidth: r, rotatedHeight: s };
}
function en(i, t, e, n, r) {
  var v;
  const { rotatedHeight: s, rotatedWidth: o } = is(e, n, r), d = i.get(J).getRenderById(t.unitId);
  if (!d)
    return !1;
  const c = (v = d.with(V).getSkeletonParam(t.subUnitId)) == null ? void 0 : v.skeleton;
  if (c == null)
    return !1;
  const l = c.getCellByIndex(t.row, t.col), g = l.mergeInfo.endX - l.mergeInfo.startX - 2, h = l.mergeInfo.endY - l.mergeInfo.startY - 2, f = o / s, m = Math.ceil(Math.min(g, h * f)) / o, _ = !m || Number.isNaN(m) ? 1e-3 : m;
  return {
    width: e * _,
    height: n * _
  };
}
let et = class extends ne {
  constructor(t, e, n, r, s, o, a, d, u, c, l, g, h) {
    super();
    ee(this, "_workbookSelections");
    this._context = t, this._skeletonManagerService = e, this._commandService = n, this._selectionRenderService = r, this._imageIoService = s, this._fileOpenerService = o, this._sheetDrawingService = a, this._drawingManagerService = d, this._contextService = u, this._messageService = c, this._localeService = l, this._injector = h, this._workbookSelections = g.getWorkbookSelections(this._context.unitId), this._updateImageListener(), this._updateOrderListener(), this._groupDrawingListener(), this._focusDrawingListener();
  }
  async insertFloatImage() {
    const t = await this._fileOpenerService.openFile({
      multiple: !0,
      accept: En.map((n) => `.${n.replace("image/", "")}`).join(",")
    }), e = t.length;
    return e > On ? (this._messageService.show({
      type: pe.Error,
      content: this._localeService.t("update-status.exceedMaxCount", String(On))
    }), !1) : e === 0 ? !1 : (t.forEach(async (n) => await this.insertFloatImageByFile(n)), !0);
  }
  async insertCellImage() {
    const e = (await this._fileOpenerService.openFile({
      multiple: !1,
      accept: En.map((n) => `.${n.replace("image/", "")}`).join(",")
    }))[0];
    return e ? (await this._insertCellImage(e), !0) : !1;
  }
  insertCellImageByFile(t, e) {
    return this._insertCellImage(t, e);
  }
  async insertFloatImageByFile(t) {
    let e;
    try {
      e = await this._imageIoService.saveImage(t);
    } catch (v) {
      const I = v.message;
      I === Pe.ERROR_EXCEED_SIZE ? this._messageService.show({
        type: pe.Error,
        content: this._localeService.t("update-status.exceedMaxSize", String(Un / (1024 * 1024)))
      }) : I === Pe.ERROR_IMAGE_TYPE ? this._messageService.show({
        type: pe.Error,
        content: this._localeService.t("update-status.invalidImageType")
      }) : I === Pe.ERROR_IMAGE && this._messageService.show({
        type: pe.Error,
        content: this._localeService.t("update-status.invalidImage")
      });
    }
    if (e == null)
      return;
    const n = this._getUnitInfo(), { unitId: r, subUnitId: s } = n, { imageId: o, imageSourceType: a, source: d, base64Cache: u } = e, { width: c, height: l, image: g } = await Gt(u || ""), { width: h, height: f } = this._context.scene;
    this._imageIoService.addImageSourceCache(d, a, g);
    let p = 1;
    if (c > Pn || l > An) {
      const v = Pn / c, I = An / l;
      p = Math.max(v, I);
    }
    const m = this._getImagePosition(c * p, l * p, h, f);
    if (m == null)
      return;
    const _ = {
      unitId: r,
      subUnitId: s,
      drawingId: o,
      drawingType: B.DRAWING_IMAGE,
      imageSourceType: a,
      source: d,
      transform: z(m, this._selectionRenderService, this._skeletonManagerService),
      sheetTransform: m
    };
    return this._commandService.executeCommand(kt.id, {
      unitId: r,
      drawings: [_]
    });
  }
  // eslint-disable-next-line max-lines-per-function
  async _insertCellImage(t, e) {
    var I, R;
    let n;
    try {
      n = await this._imageIoService.saveImage(t);
    } catch (S) {
      const C = S.message;
      C === Pe.ERROR_EXCEED_SIZE ? this._messageService.show({
        type: pe.Error,
        content: this._localeService.t("update-status.exceedMaxSize", String(Un / (1024 * 1024)))
      }) : C === Pe.ERROR_IMAGE_TYPE ? this._messageService.show({
        type: pe.Error,
        content: this._localeService.t("update-status.invalidImageType")
      }) : C === Pe.ERROR_IMAGE && this._messageService.show({
        type: pe.Error,
        content: this._localeService.t("update-status.invalidImage")
      });
    }
    if (n == null)
      return !1;
    const { imageId: r, imageSourceType: s, source: o, base64Cache: a } = n, { width: d, height: u, image: c } = await Gt(a || "");
    this._imageIoService.addImageSourceCache(o, s, c);
    const l = this._workbookSelections.getCurrentLastSelection();
    if (!l)
      return !1;
    let g = l.primary.actualRow, h = l.primary.actualColumn;
    l.primary.isMerged && (g = l.primary.startRow, h = l.primary.startColumn);
    const f = Vt("", {}), p = en(
      this._injector,
      {
        unitId: this._context.unitId,
        subUnitId: this._context.unit.getActiveSheet().getSheetId(),
        row: g,
        col: h
      },
      d,
      u,
      0
    );
    if (!p)
      return !1;
    const m = {
      size: {
        width: p.width,
        height: p.height
      },
      positionH: {
        relativeFrom: vn.PAGE,
        posOffset: 0
      },
      positionV: {
        relativeFrom: Sn.PARAGRAPH,
        posOffset: 0
      },
      angle: 0
    }, _ = {
      unitId: f.getUnitId(),
      subUnitId: f.getUnitId(),
      drawingId: r,
      drawingType: B.DRAWING_IMAGE,
      imageSourceType: s,
      source: o,
      transform: Tn(m),
      docTransform: m,
      behindDoc: Dn.FALSE,
      title: "",
      description: "",
      layoutType: Cn.INLINE,
      // Insert inline drawing by default.
      wrapText: In.BOTH_SIDES,
      distB: 0,
      distL: 0,
      distR: 0,
      distT: 0
    }, v = Ht.drawing.add({
      documentDataModel: f,
      drawings: [_],
      selection: {
        collapsed: !0,
        startOffset: 0,
        endOffset: 0
      }
    });
    return v ? (f.apply(v), this._commandService.syncExecuteCommand(bn.id, {
      value: {
        [(I = e == null ? void 0 : e.row) != null ? I : g]: {
          [(R = e == null ? void 0 : e.col) != null ? R : h]: {
            p: f.getSnapshot(),
            t: 1
          }
        }
      },
      unitId: e == null ? void 0 : e.unitId,
      subUnitId: e == null ? void 0 : e.subUnitId
    })) : !1;
  }
  // eslint-disable-next-line max-lines-per-function
  async insertCellImageByUrl(t, e) {
    var g, h;
    const { width: n, height: r, image: s } = await Gt(t || "");
    this._imageIoService.addImageSourceCache(t, Rn.URL, s);
    const o = this._workbookSelections.getCurrentLastSelection();
    if (!o)
      return !1;
    const a = Vt("", {}), d = en(
      this._injector,
      {
        unitId: this._context.unitId,
        subUnitId: this._context.unit.getActiveSheet().getSheetId(),
        row: o.primary.actualRow,
        col: o.primary.actualColumn
      },
      n,
      r,
      0
    );
    if (!d)
      return !1;
    const u = {
      size: {
        width: d.width,
        height: d.height
      },
      positionH: {
        relativeFrom: vn.PAGE,
        posOffset: 0
      },
      positionV: {
        relativeFrom: Sn.PARAGRAPH,
        posOffset: 0
      },
      angle: 0
    }, c = {
      unitId: a.getUnitId(),
      subUnitId: a.getUnitId(),
      drawingId: Qe(),
      drawingType: B.DRAWING_IMAGE,
      imageSourceType: Rn.URL,
      source: t,
      transform: Tn(u),
      docTransform: u,
      behindDoc: Dn.FALSE,
      title: "",
      description: "",
      layoutType: Cn.INLINE,
      // Insert inline drawing by default.
      wrapText: In.BOTH_SIDES,
      distB: 0,
      distL: 0,
      distR: 0,
      distT: 0
    }, l = Ht.drawing.add({
      documentDataModel: a,
      drawings: [c],
      selection: {
        collapsed: !0,
        startOffset: 0,
        endOffset: 0
      }
    });
    return l ? (a.apply(l), this._commandService.syncExecuteCommand(bn.id, {
      value: {
        [(g = e == null ? void 0 : e.row) != null ? g : o.primary.actualRow]: {
          [(h = e == null ? void 0 : e.col) != null ? h : o.primary.actualColumn]: {
            p: a.getSnapshot(),
            t: 1
          }
        }
      },
      unitId: e == null ? void 0 : e.unitId,
      subUnitId: e == null ? void 0 : e.subUnitId
    })) : !1;
  }
  _getUnitInfo() {
    const t = this._context.unit, e = t.getActiveSheet(), n = t.getUnitId(), r = e.getSheetId();
    return {
      unitId: n,
      subUnitId: r
    };
  }
  _getImagePosition(t, e, n, r) {
    const s = this._workbookSelections.getCurrentSelections();
    let o = {
      startRow: 0,
      endRow: 0,
      startColumn: 0,
      endColumn: 0
    };
    s && s.length > 0 && (o = s[s.length - 1].range);
    const a = Yn(this._skeletonManagerService.getCurrent().skeleton, o);
    if (a == null)
      return;
    let { startColumn: d, startRow: u, startX: c, startY: l } = a, g = !1;
    if (c + t > n && (c = n - t, c < 0 && (c = 0, t = n), g = !0), l + e > r && (l = r - e, l < 0 && (l = 0, e = r), g = !0), g) {
      const m = this._selectionRenderService.getCellWithCoordByOffset(c, l);
      if (m == null)
        return;
      c = m.startX, l = m.startY, d = m.actualColumn, u = m.actualRow;
    }
    const h = {
      column: d,
      columnOffset: 0,
      row: u,
      rowOffset: 0
    }, f = this._selectionRenderService.getCellWithCoordByOffset(c + t, l + e);
    if (f == null)
      return;
    const p = {
      column: f.actualColumn,
      columnOffset: c + t - f.startX,
      row: f.actualRow,
      rowOffset: l + e - f.startY
    };
    return {
      from: h,
      to: p
    };
  }
  _updateOrderListener() {
    this.disposeWithMe(this._drawingManagerService.featurePluginOrderUpdate$.subscribe((t) => {
      const { unitId: e, subUnitId: n, drawingIds: r, arrangeType: s } = t;
      this._commandService.executeCommand(fr.id, {
        unitId: e,
        subUnitId: n,
        drawingIds: r,
        arrangeType: s
      });
    }));
  }
  _updateImageListener() {
    this.disposeWithMe(this._drawingManagerService.featurePluginUpdate$.subscribe((t) => {
      const e = [];
      t.length !== 0 && (t.forEach((n) => {
        const { unitId: r, subUnitId: s, drawingId: o, drawingType: a, transform: d } = n;
        if (d == null)
          return;
        const u = this._sheetDrawingService.getDrawingByParam({ unitId: r, subUnitId: s, drawingId: o });
        if (u == null || u.unitId !== this._context.unitId)
          return;
        const c = $({ ...u.transform, ...d }, this._selectionRenderService);
        if (c == null)
          return;
        const l = {
          ...n,
          transform: { ...u.transform, ...d, ...z(c, this._selectionRenderService, this._skeletonManagerService) },
          sheetTransform: { ...c }
        };
        e.push(l);
      }), e.length > 0 && this._commandService.executeCommand(Wt.id, {
        unitId: t[0].unitId,
        drawings: e
      }));
    }));
  }
  _groupDrawingListener() {
    this.disposeWithMe(this._drawingManagerService.featurePluginGroupUpdate$.subscribe((t) => {
      this._commandService.executeCommand(gr.id, t);
      const { unitId: e, subUnitId: n, drawingId: r } = t[0].parent;
      this._commandService.syncExecuteCommand(Nt.id, [{ unitId: e, subUnitId: n, drawingId: r }]);
    })), this.disposeWithMe(this._drawingManagerService.featurePluginUngroupUpdate$.subscribe((t) => {
      this._commandService.executeCommand(mr.id, t);
    }));
  }
  _focusDrawingListener() {
    this.disposeWithMe(
      this._drawingManagerService.focus$.subscribe((t) => {
        t == null || t.length === 0 ? (this._contextService.setContextValue($e, !1), this._sheetDrawingService.focusDrawing([])) : (this._contextService.setContextValue($e, !0), this._sheetDrawingService.focusDrawing(t));
      })
    );
  }
};
et = rs([
  te(1, A(V)),
  te(2, X),
  te(3, xe),
  te(4, Ei),
  te(5, Pi),
  te(6, re),
  te(7, ie),
  te(8, Xn),
  te(9, cr),
  te(10, A(nt)),
  te(11, A(on)),
  te(12, A(Ge))
], et);
const Bt = {
  id: "sheet.command.insert-float-image",
  type: Z.COMMAND,
  handler: async (i, t) => {
    var o, a;
    const e = i.get(Se), n = i.get(J), r = (o = sn(
      F.UNIVER_SHEET,
      e,
      n
    )) == null ? void 0 : o.with(et);
    if (!r)
      return !1;
    const s = t == null ? void 0 : t.files;
    if (s) {
      const d = s.map((u) => r.insertFloatImageByFile(u));
      return (await Promise.all(d)).every((u) => u);
    } else
      return (a = r.insertFloatImage()) != null ? a : !1;
  }
}, dn = {
  id: "sheet.command.insert-cell-image",
  type: Z.COMMAND,
  handler: (i) => {
    var n, r;
    const t = i.get(Se), e = i.get(J);
    return (r = (n = sn(
      F.UNIVER_SHEET,
      t,
      e
    )) == null ? void 0 : n.with(et).insertCellImage()) != null ? r : !1;
  }
}, it = {
  id: "sheet.command.move-drawing",
  type: Z.COMMAND,
  handler: (i, t) => {
    const e = i.get(X), n = i.get(re), r = i.get(xe), { direction: s } = t, o = n.getFocusDrawings();
    if (o.length === 0)
      return !1;
    const a = o[0].unitId, d = o.map((c) => {
      const { transform: l } = c;
      if (l == null)
        return null;
      const g = { ...l }, { left: h = 0, top: f = 0 } = l;
      return s === _e.UP ? g.top = f - 1 : s === _e.DOWN ? g.top = f + 1 : s === _e.LEFT ? g.left = h - 1 : s === _e.RIGHT && (g.left = h + 1), {
        ...c,
        transform: g,
        sheetTransform: $(g, r)
      };
    }).filter((c) => c != null);
    return e.syncExecuteCommand(Wt.id, {
      unitId: a,
      drawings: d
    }) ? (e.syncExecuteCommand(Y.id, [a]), !0) : !1;
  }
}, pr = "COMPONENT_SHEET_DRAWING_PANEL", wr = {
  id: "sidebar.operation.sheet-image",
  type: Z.COMMAND,
  handler: async (i, t) => {
    const e = i.get(Ai), n = i.get(nt), r = i.get(Se), s = i.get(X);
    if (!se(r)) return !1;
    switch (t.value) {
      case "open":
        e.open({
          header: { title: n.t("sheetImage.panel.title") },
          children: { label: pr },
          onClose: () => {
            s.syncExecuteCommand(Nt.id, []);
          },
          width: 360
        });
        break;
      case "close":
      default:
        e.close();
        break;
    }
    return !0;
  }
}, _r = {
  id: "sheet.operation.edit-sheet-image",
  type: Z.OPERATION,
  handler: (i, t) => {
    const e = i.get(X);
    return t == null ? !1 : (e.syncExecuteCommand(Nt.id, [t]), e.executeCommand(wr.id, { value: "open" }), !0);
  }
}, ss = "sheets-drawing-ui.config", jn = {};
var os = Object.getOwnPropertyDescriptor, as = (i, t, e, n) => {
  for (var r = n > 1 ? void 0 : n ? os(t, e) : t, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (r = o(r) || r);
  return r;
}, ce = (i, t) => (e, n) => t(e, n, i);
let Rt = class extends Xr {
  constructor(t, e, n, r, s, o, a, d, u, c) {
    super();
    ee(this, "_initImagePopupMenu", /* @__PURE__ */ new Set());
    this._injector = t, this._localeService = e, this._drawingManagerService = n, this._canvasPopManagerService = r, this._renderManagerService = s, this._univerInstanceService = o, this._messageService = a, this._contextService = d, this._ioService = u, this._commandService = c, this._init();
  }
  _init() {
    this._univerInstanceService.getCurrentTypeOfUnit$(F.UNIVER_SHEET).pipe(Nn(this.dispose$)).subscribe((t) => this._create(t)), this._univerInstanceService.getTypeOfUnitDisposed$(F.UNIVER_SHEET).pipe(Nn(this.dispose$)).subscribe((t) => this._dispose(t)), this._univerInstanceService.getAllUnitsForType(F.UNIVER_SHEET).forEach((t) => this._create(t)), this._setupLoadingStatus();
  }
  _setupLoadingStatus() {
    const t = "image-upload-loading";
    let e;
    this.disposeWithMe(this._ioService.change$.subscribe((n) => {
      n > 0 && !e ? e = this._messageService.show({
        id: t,
        type: pe.Loading,
        content: `${this._localeService.t("uploadLoading.loading")}: ${n}`,
        duration: 0
      }) : n === 0 && (e == null || e.dispose(), e = void 0);
    }));
  }
  _dispose(t) {
    super.dispose();
    const e = t.getUnitId();
    this._renderManagerService.removeRender(e);
  }
  _create(t) {
    if (!t)
      return;
    const e = t.getUnitId();
    this._renderManagerService.has(e) && !this._initImagePopupMenu.has(e) && (this._popupMenuListener(e), this._initImagePopupMenu.add(e));
  }
  _hasCropObject(t) {
    const e = t.getAllObjectsByOrder();
    for (const n of e)
      if (n instanceof Xi)
        return !0;
    return !1;
  }
  _popupMenuListener(t) {
    var s;
    const e = (s = this._renderManagerService.getRenderById(t)) == null ? void 0 : s.scene;
    if (!e)
      return;
    const n = e.getTransformerByCreate();
    if (!n)
      return;
    let r;
    this.disposeWithMe(
      n.createControl$.subscribe(() => {
        if (this._contextService.setContextValue($e, !0), this._hasCropObject(e))
          return;
        const o = n.getSelectedObjectMap();
        if (o.size > 1) {
          r == null || r.dispose();
          return;
        }
        const a = o.values().next().value;
        if (!a)
          return;
        const d = a.oKey, u = this._drawingManagerService.getDrawingOKey(d);
        if (!u)
          return;
        const { unitId: c, subUnitId: l, drawingId: g, drawingType: h } = u, f = u.data;
        if (f && f.disablePopup)
          return;
        r == null || r.dispose();
        const p = this._canvasPopManagerService.getFeatureMenu(c, l, g, h);
        r = this.disposeWithMe(this._canvasPopManagerService.attachPopupToObject(a, {
          componentKey: Li,
          direction: "horizontal",
          offset: [2, 0],
          extraProps: {
            menuItems: p || this._getImageMenuItems(c, l, g, h)
          }
        }));
      })
    ), this.disposeWithMe(
      n.clearControl$.subscribe(() => {
        r == null || r.dispose(), this._contextService.setContextValue($e, !1), this._commandService.syncExecuteCommand(Nt.id, []);
      })
    ), this.disposeWithMe(
      this._contextService.contextChanged$.subscribe((o) => {
        o[$e] === !1 && (r == null || r.dispose());
      })
    ), this.disposeWithMe(
      n.changing$.subscribe(() => {
        r == null || r.dispose();
      })
    );
  }
  _getImageMenuItems(t, e, n, r) {
    return [
      {
        label: "image-popup.edit",
        index: 0,
        commandId: _r.id,
        commandParams: { unitId: t, subUnitId: e, drawingId: n },
        disable: r === B.DRAWING_DOM
      },
      {
        label: "image-popup.delete",
        index: 1,
        commandId: rt.id,
        commandParams: { unitId: t, drawings: [{ unitId: t, subUnitId: e, drawingId: n }] },
        disable: !1
      },
      {
        label: "image-popup.crop",
        index: 2,
        commandId: Vi.id,
        commandParams: { unitId: t, subUnitId: e, drawingId: n },
        disable: r === B.DRAWING_DOM
      },
      {
        label: "image-popup.reset",
        index: 3,
        commandId: Hi.id,
        commandParams: [{ unitId: t, subUnitId: e, drawingId: n }],
        disable: r === B.DRAWING_DOM
      }
    ];
  }
};
Rt = as([
  ce(0, A(Ge)),
  ce(1, A(nt)),
  ce(2, ie),
  ce(3, A(Ar)),
  ce(4, J),
  ce(5, Se),
  ce(6, cr),
  ce(7, Xn),
  ce(8, Gr),
  ce(9, X)
], Rt);
var cs = Object.getOwnPropertyDescriptor, ds = (i, t, e, n) => {
  for (var r = n > 1 ? void 0 : n ? cs(t, e) : t, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (r = o(r) || r);
  return r;
}, vt = (i, t) => (e, n) => t(e, n, i);
let tn = class extends ne {
  constructor(t, e, n, r, s) {
    super();
    ee(this, "_isSetCursor", !1);
    this._context = t, this._hoverManagerService = e, this._selectionsService = n, this._drawingRenderService = r, this._sheetSkeletonManagerService = s, this._initHover(), this._initImageClick();
  }
  _initHover() {
    this.disposeWithMe(this._hoverManagerService.currentRichTextNoDistinct$.pipe(Ji(33)).subscribe((t) => {
      var n, r;
      let e = [];
      t !== null && (e = this._selectionsService.getWorkbookSelections(this._context.unitId).getCurrentSelections()), e.length > 0 && (t == null ? void 0 : t.unitId) === this._context.unitId && (t != null && t.drawing) && e.length === 1 && ((n = e[0].primary) == null ? void 0 : n.actualRow) === t.row && ((r = e[0].primary) == null ? void 0 : r.actualColumn) === t.col ? (this._isSetCursor = !0, this._context.scene.setCursor(Ur.ZOOM_IN)) : this._isSetCursor && (this._isSetCursor = !1, this._context.scene.resetCursor());
    }));
  }
  _initImageClick() {
    this.disposeWithMe(this._hoverManagerService.currentClickedCell$.subscribe((t) => {
      var e;
      if (t != null && t.drawing && this._isSetCursor) {
        const n = t.drawing.drawing.drawingOrigin, r = (e = this._sheetSkeletonManagerService.getCurrentSkeleton()) == null ? void 0 : e.imageCacheMap.getImage(n.imageSourceType, n.source);
        if (!r) return;
        this._drawingRenderService.previewImage("preview-cell-image", r.src, r.width, r.height), this._context.scene.resetCursor(), this._isSetCursor = !1;
      }
    }));
  }
};
tn = ds([
  vt(1, A(Nr)),
  vt(2, A(on)),
  vt(3, A(lr)),
  vt(4, A(V))
], tn);
var ls = Object.getOwnPropertyDescriptor, us = (i, t, e, n) => {
  for (var r = n > 1 ? void 0 : n ? ls(t, e) : t, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (r = o(r) || r);
  return r;
}, It = (i, t) => (e, n) => t(e, n, i);
let nn = class extends ne {
  constructor(i, t, e, n, r) {
    super(), this._context = i, this._sheetDrawingService = t, this._drawingManagerService = e, this._sheetSelectionRenderService = n, this._sheetSkeletonManagerService = r, this._init();
  }
  _init() {
    this._drawingInitializeListener();
  }
  _drawingInitializeListener() {
    this._sheetDrawingService.initializeNotification(this._context.unitId);
    const i = this._sheetDrawingService.getDrawingDataForUnit(this._context.unitId);
    for (const t in i) {
      const e = i[t];
      for (const n in e.data) {
        const r = e.data[n];
        r.sheetTransform && (r.transform = z(r.sheetTransform, this._sheetSelectionRenderService, this._sheetSkeletonManagerService));
      }
    }
    this._drawingManagerService.registerDrawingData(this._context.unitId, this._sheetDrawingService.getDrawingDataForUnit(this._context.unitId)), this._drawingManagerService.initializeNotification(this._context.unitId);
  }
};
nn = us([
  It(1, re),
  It(2, ie),
  It(3, A(xe)),
  It(4, A(V))
], nn);
var hs = Object.getOwnPropertyDescriptor, gs = (i, t, e, n) => {
  for (var r = n > 1 ? void 0 : n ? hs(t, e) : t, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (r = o(r) || r);
  return r;
}, Ae = (i, t) => (e, n) => t(e, n, i);
function Sr(i, t, e) {
  var n, r, s, o;
  if (((r = (n = e == null ? void 0 : e.p) == null ? void 0 : n.body) == null ? void 0 : r.dataStream.length) === 3 && ((o = (s = e.p) == null ? void 0 : s.drawingsOrder) == null ? void 0 : o.length) === 1) {
    const a = e.p.drawings[e.p.drawingsOrder[0]], d = en(
      i,
      {
        unitId: t.unitId,
        subUnitId: t.subUnitId,
        row: t.row,
        col: t.col
      },
      a.docTransform.size.width,
      a.docTransform.size.height,
      a.docTransform.angle
    );
    if (d)
      return a.transform.width = d.width, a.transform.height = d.height, a.docTransform.size.width = d.width, a.docTransform.size.height = d.height, a.transform.left = 0, a.transform.top = 0, a.docTransform.positionH.posOffset = 0, a.docTransform.positionV.posOffset = 0, e.p.documentStyle.pageSize.width = 1 / 0, e.p.documentStyle.pageSize.height = 1 / 0, !0;
  }
  return !1;
}
let bt = class extends ne {
  constructor(i, t, e, n, r, s) {
    super(), this._commandService = i, this._sheetInterceptorService = t, this._injector = e, this._drawingManagerService = n, this._docDrawingController = r, this._editorBridgeService = s, this._handleInitEditor(), this._initCellContentInterceptor();
  }
  _handleInitEditor() {
    this.disposeWithMe(this._editorBridgeService.visible$.subscribe((i) => {
      i.visible ? i.visible && (this._drawingManagerService.removeDrawingDataForUnit(Ze), this._docDrawingController.loadDrawingDataForUnit(Ze), this._drawingManagerService.initializeNotification(Ze)) : this._drawingManagerService.removeDrawingDataForUnit(Ze);
    })), this.disposeWithMe(this._commandService.onCommandExecuted((i) => {
      i.id === yi.id && i.params.unitId === Be && (this._drawingManagerService.removeDrawingDataForUnit(Be), this._docDrawingController.loadDrawingDataForUnit(Be), this._drawingManagerService.initializeNotification(Be));
    }));
  }
  _initCellContentInterceptor() {
    this.disposeWithMe(
      this._sheetInterceptorService.intercept(
        li.CELL_CONTENT,
        {
          effect: Lr.Style,
          priority: ui.CELL_IMAGE,
          handler: (i, t, e) => {
            var n;
            return i != null && i.p && ((n = i.p.drawingsOrder) != null && n.length) && (i === t.rawData && (i = { ...t.rawData }), i.interceptorStyle || (i.interceptorStyle = {}), i.interceptorStyle.tr = { a: 0 }, Sr(this._injector, { unitId: t.unitId, subUnitId: t.subUnitId, row: t.row, col: t.col }, i)), e(i);
          }
        }
      )
    );
  }
};
bt = gs([
  Ae(0, X),
  Ae(1, A(At)),
  Ae(2, A(Ge)),
  Ae(3, ie),
  Ae(4, A(Yi)),
  Ae(5, A(kr))
], bt);
var fs = Object.getOwnPropertyDescriptor, ms = (i, t, e, n) => {
  for (var r = n > 1 ? void 0 : n ? fs(t, e) : t, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (r = o(r) || r);
  return r;
}, $n = (i, t) => (e, n) => t(e, n, i);
let Mt = class extends ne {
  constructor(i, t) {
    super(), this._autoFillService = i, this._injector = t, this._initAutoFillHooks();
  }
  _initAutoFillHooks() {
    this.disposeWithMe(
      this._autoFillService.addHook({
        id: "sheet-cell-image-autofill",
        onBeforeSubmit: (i, t, e, n) => {
          new Vr(n).forValue((r, s, o) => {
            Sr(this._injector, { unitId: i.unitId, subUnitId: i.subUnitId, row: r, col: s }, o);
          });
        }
      })
    );
  }
};
Mt = ms([
  $n(0, A(Wr)),
  $n(1, A(Ge))
], Mt);
var ps = Object.getOwnPropertyDescriptor, ws = (i, t, e, n) => {
  for (var r = n > 1 ? void 0 : n ? ps(t, e) : t, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (r = o(r) || r);
  return r;
}, He = (i, t) => (e, n) => t(e, n, i);
const _s = [
  Ze,
  Hr,
  Be
];
let yt = class extends ne {
  constructor(i, t, e, n, r) {
    super(), this._commandService = i, this._univerInstanceService = t, this._dialogService = e, this._renderManagerService = n, this._localeService = r, this._initDocImageCopyPasteHooks();
  }
  _setCellImage(i) {
    var r;
    const t = Vt("", {}), e = (r = sn(F.UNIVER_SHEET, this._univerInstanceService, this._renderManagerService)) == null ? void 0 : r.with(Br), n = Ht.drawing.add({
      documentDataModel: t,
      drawings: [i],
      selection: {
        collapsed: !0,
        startOffset: 0,
        endOffset: 0
      }
    });
    n && (t.apply(n), e && e.submitCellData(t));
  }
  _initDocImageCopyPasteHooks() {
    this.disposeWithMe(
      this._commandService.beforeCommandExecuted((i) => {
        var t, e;
        if (i.id === Ti.id) {
          const n = i.params, { doc: r } = n, s = this._univerInstanceService.getCurrentUnitOfType(F.UNIVER_DOC);
          if (s == null || !Object.keys((t = r.drawings) != null ? t : {}).length)
            return;
          const o = s.getUnitId();
          if (_s.includes(o)) {
            if (o !== Be) {
              const a = () => {
                this._dialogService.close("sheet-cell-image-copy-paste"), this._commandService.syncExecuteCommand(pn.id, {
                  visible: !1
                });
              };
              ((e = s.getBody()) == null ? void 0 : e.dataStream) === `\r
` ? (this._commandService.syncExecuteCommand(pn.id, {
                visible: !1
              }), this._setCellImage(Object.values(r.drawings)[0])) : this._dialogService.open({
                id: "sheet-cell-image-copy-paste",
                title: {
                  label: this._localeService.t("cell-image.pasteTitle")
                },
                children: {
                  label: this._localeService.t("cell-image.pasteContent")
                },
                width: 320,
                destroyOnClose: !0,
                onClose: a,
                showOk: !0,
                showCancel: !0,
                onOk: () => {
                  a(), this._setCellImage(Object.values(r.drawings)[0]);
                },
                onCancel: a
              });
            }
            throw new Error("Sheet cell image copy paste is not supported in this unit");
          }
        }
      })
    );
  }
};
yt = ws([
  He(0, X),
  He(1, Se),
  He(2, Ni),
  He(3, J),
  He(4, A(nt))
], yt);
var Ss = Object.getOwnPropertyDescriptor, vs = (i, t, e, n) => {
  for (var r = n > 1 ? void 0 : n ? Ss(t, e) : t, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (r = o(r) || r);
  return r;
}, ze = (i, t) => (e, n) => t(e, n, i);
const vr = "image/png";
function Is(i) {
  const t = i.split(","), e = atob(t[1]), n = e.length, r = new Uint8Array(n);
  for (let s = 0; s < n; s++)
    r[s] = e.charCodeAt(s);
  return new Blob([r], { type: vr });
}
function Cs(i) {
  const t = new ClipboardItem({ [vr]: Is(i) });
  navigator.clipboard.write([t]).catch((e) => {
    console.error("Could not copy image using clipboard API: ", e);
  });
}
function Ds() {
  function i() {
    const n = document.createElement("input");
    return n.style.position = "absolute", n.style.height = "1px", n.style.width = "1px", n.style.opacity = "0", n;
  }
  const t = document.activeElement, e = i();
  return document.body.appendChild(e), e.focus(), () => {
    e.blur(), document.body.removeChild(e), t instanceof HTMLElement && t.focus();
  };
}
const Fn = [
  We.SPECIAL_PASTE_COL_WIDTH,
  We.SPECIAL_PASTE_VALUE,
  We.SPECIAL_PASTE_FORMAT,
  We.SPECIAL_PASTE_FORMULA
];
let Tt = class extends ne {
  constructor(t, e, n, r, s) {
    super();
    ee(this, "_copyInfo");
    this._sheetClipboardService = t, this._renderManagerService = e, this._drawingService = n, this._clipboardInterfaceService = r, this._commandService = s, this._initCopyPaste();
  }
  get _focusedDrawings() {
    return this._drawingService.getFocusDrawings();
  }
  // eslint-disable-next-line max-lines-per-function
  _initCopyPaste() {
    this._sheetClipboardService.addClipboardHook({
      id: "SHEET_IMAGE_UI_PLUGIN",
      onBeforeCopy: (t, e, n, r) => {
        const s = this._focusedDrawings;
        if (s.length > 0) {
          const [o] = s;
          if (r === ve.CUT) {
            const d = {
              unitId: t,
              drawings: [o]
            };
            this._commandService.executeCommand(rt.id, d);
          }
          setTimeout(() => {
            const d = Ds();
            o.drawingType === B.DRAWING_IMAGE && o.imageSourceType === Oi.BASE64 ? Cs(o.source) : this._clipboardInterfaceService.writeText(""), d();
          }, 200);
          const a = {
            unitId: o.unitId,
            subUnitId: o.subUnitId,
            drawings: [o]
          };
          this._copyInfo = a;
        } else {
          const o = this._createDrawingsCopyInfoByRange(t, e, n);
          this._copyInfo = o;
        }
      },
      onPasteCells: (t, e, n, r) => {
        if (!this._copyInfo)
          return { redos: [], undos: [] };
        const { copyType: s = ve.COPY, pasteType: o } = r, { range: a } = t || {}, { range: d, unitId: u, subUnitId: c } = e;
        return this._copyInfo.copyRange ? this._generateRangeDrawingsPasteMutations({ pasteType: o, unitId: u, subUnitId: c, pasteRange: d }, { copyRange: a, copyType: s }) : this._generateSingleDrawingPasteMutations({ pasteTo: e, pasteType: o }, ve.COPY);
      },
      onPastePlainText: (t, e) => ({ undos: [], redos: [] }),
      onPasteUnrecognized: (t) => this._copyInfo ? this._generateSingleDrawingPasteMutations({ pasteTo: t, pasteType: We.DEFAULT_PASTE }, ve.COPY) : { undos: [], redos: [] },
      onPasteFiles: (t, e) => {
        if (this._copyInfo)
          return this._generateSingleDrawingPasteMutations({ pasteTo: t, pasteType: We.DEFAULT_PASTE }, ve.COPY);
        {
          const n = e.filter((r) => r.type.includes("image"));
          if (n.length)
            return {
              undos: [],
              redos: [
                {
                  id: Bt.id,
                  params: { files: n }
                }
              ]
            };
        }
        return { undos: [], redos: [] };
      }
    });
  }
  _createDrawingsCopyInfoByRange(t, e, n) {
    var g;
    const r = (g = this._renderManagerService.getRenderById(t)) == null ? void 0 : g.with(V);
    if (!r) return;
    const s = r.attachRangeWithCoord(n);
    if (!s)
      return;
    const { startX: o, endX: a, startY: d, endY: u } = s, c = this._drawingService.getDrawingData(t, e), l = this._focusedDrawings.slice();
    if (Object.keys(c).forEach((h) => {
      const f = c[h], { transform: p } = f;
      if (f.anchorType !== O.Both || !p)
        return;
      const { left: m = 0, top: _ = 0, width: v = 0, height: I = 0 } = p, { drawingStartX: R, drawingEndX: S, drawingStartY: C, drawingEndY: w } = {
        drawingStartX: m,
        drawingEndX: m + v,
        drawingStartY: _,
        drawingEndY: _ + I
      };
      o <= R && S <= a && d <= C && w <= u && l.push(f);
    }), l.length)
      return {
        copyRange: n,
        drawings: l,
        unitId: t,
        subUnitId: e
      };
  }
  _generateSingleDrawingPasteMutations(t, e) {
    const { pasteType: n, pasteTo: r } = t;
    if (Fn.includes(n))
      return { redos: [], undos: [] };
    const { unitId: s, subUnitId: o, range: a } = r, d = this._renderManagerService.getRenderById(s), u = d == null ? void 0 : d.with(V), c = d == null ? void 0 : d.with(xe), l = this._copyInfo;
    if (!u || !c)
      return { redos: [], undos: [] };
    const { drawings: g } = l, h = wn(a);
    return this._generateMutations(g, {
      unitId: s,
      subUnitId: o,
      isCut: e === ve.CUT,
      getTransform: (f, p) => {
        var v;
        const m = u.attachRangeWithCoord({
          startRow: h.startRow,
          endRow: h.endRow,
          startColumn: h.startColumn,
          endColumn: h.endColumn
        }), _ = {
          ...f,
          left: m == null ? void 0 : m.startX,
          top: m == null ? void 0 : m.startY
        };
        return {
          transform: _,
          sheetTransform: (v = $(_, c)) != null ? v : p
        };
      }
    });
  }
  _generateMutations(t, e) {
    const {
      unitId: n,
      subUnitId: r,
      getTransform: s,
      isCut: o
    } = e, a = [], d = [], { _drawingService: u } = this;
    return t.forEach((c) => {
      const { transform: l, sheetTransform: g } = c;
      if (!l)
        return;
      const h = s(l, g), f = {
        ...c,
        unitId: n,
        subUnitId: r,
        drawingId: o ? c.drawingId : Qe(),
        transform: h.transform,
        sheetTransform: h.sheetTransform
      };
      if (o) {
        const { undo: p, redo: m, objects: _ } = u.getBatchUpdateOp([f]);
        a.push({
          id: P.id,
          params: {
            unitId: n,
            subUnitId: r,
            type: U.UPDATE,
            op: m,
            objects: _
          }
        }), d.push({
          id: P.id,
          params: {
            unitId: n,
            subUnitId: r,
            type: U.UPDATE,
            op: p,
            objects: _
          }
        });
      } else {
        const { undo: p, redo: m, objects: _ } = u.getBatchAddOp([f]);
        a.push({ id: P.id, params: { op: m, unitId: n, subUnitId: r, objects: _, type: U.INSERT } }), d.push({ id: P.id, params: { op: p, unitId: n, subUnitId: r, objects: _, type: U.REMOVE } });
      }
    }), { redos: a, undos: d };
  }
  // eslint-disable-next-line max-lines-per-function
  _generateRangeDrawingsPasteMutations(t, e) {
    var y;
    const {
      unitId: n,
      subUnitId: r,
      pasteType: s,
      pasteRange: o
    } = t, {
      copyRange: a,
      copyType: d
    } = e;
    if (Fn.includes(s))
      return { redos: [], undos: [] };
    const u = (y = this._renderManagerService.getRenderById(n)) == null ? void 0 : y.with(V);
    if (!u || !this._copyInfo)
      return { redos: [], undos: [] };
    const { drawings: c } = this._copyInfo;
    if (!a)
      return this._generateSingleDrawingPasteMutations({
        pasteTo: { unitId: n, subUnitId: r, range: wn(o) },
        pasteType: s
      }, d);
    const { ranges: [l, g], mapFunc: h } = jr([a, o]), { row: f, col: p } = h(l.startRow, l.startColumn), { row: m, col: _ } = h(g.startRow, g.startColumn), v = u.attachRangeWithCoord({
      startRow: f,
      endRow: f,
      startColumn: p,
      endColumn: p
    }), I = u.attachRangeWithCoord({
      startRow: m,
      endRow: m,
      startColumn: _,
      endColumn: _
    });
    if (!v || !I || !this._copyInfo)
      return { redos: [], undos: [] };
    const R = I.startX - v.startX, S = I.startY - v.startY, C = m - f, w = _ - p;
    return this._generateMutations(c, {
      unitId: n,
      subUnitId: r,
      getTransform: (D, T) => {
        var E, M;
        return {
          transform: {
            ...D,
            left: ((E = D == null ? void 0 : D.left) != null ? E : 0) + R,
            top: ((M = D == null ? void 0 : D.top) != null ? M : 0) + S
          },
          sheetTransform: {
            ...T,
            to: {
              ...T.to,
              row: T.to.row + C,
              column: T.to.column + w
            },
            from: {
              ...T.from,
              row: T.from.row + C,
              column: T.from.column + w
            }
          }
        };
      },
      isCut: d === ve.CUT
    });
  }
};
Tt = vs([
  ze(0, $r),
  ze(1, J),
  ze(2, ie),
  ze(3, ki),
  ze(4, X)
], Tt);
var Rs = Object.getOwnPropertyDescriptor, bs = (i, t, e, n) => {
  for (var r = n > 1 ? void 0 : n ? Rs(t, e) : t, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (r = o(r) || r);
  return r;
}, Ke = (i, t) => (e, n) => t(e, n, i);
let Et = class extends ne {
  constructor(i, t, e, n, r) {
    super(), this._drawingManagerService = i, this._renderManagerService = t, this._permissionService = e, this._univerInstanceService = n, this._userManagerService = r, this._initDrawingVisible(), this._initDrawingEditable(), this._initViewPermissionChange(), this._initEditPermissionChange();
  }
  _initDrawingVisible() {
    const i = this._univerInstanceService.getCurrentTypeOfUnit$(F.UNIVER_SHEET), t = this._userManagerService.currentUser$, e = St([i, t]);
    this.disposeWithMe(
      e.pipe(
        we(([n, r]) => n ? n.activeSheet$.pipe(
          kn((s) => {
            if (!s) {
              this._drawingManagerService.setDrawingVisible(!1);
              return;
            }
            const o = n.getUnitId(), a = s.getSheetId();
            this._permissionService.composePermission([
              new Mn(o).id,
              new yn(o, a).id
            ]).every((u) => u.value) ? this._drawingManagerService.setDrawingVisible(!0) : this._handleDrawingVisibilityFalse(n, s);
          })
        ) : (this._drawingManagerService.setDrawingVisible(!1), fe))
      ).subscribe()
    );
  }
  _handleDrawingVisibilityFalse(i, t) {
    this._drawingManagerService.setDrawingVisible(!1);
    const e = i.getUnitId(), n = t.getSheetId(), r = this._drawingManagerService.getDrawingData(e, n), s = Object.values(r), o = this._renderManagerService.getRenderById(e), a = o == null ? void 0 : o.scene;
    if (!a)
      return;
    a.getAllObjectsByOrder().forEach((u) => {
      u.classType === Oe.IMAGE && s.some((c) => u.oKey.includes(c.drawingId)) && a.removeObject(u);
    });
  }
  _initDrawingEditable() {
    const i = this._univerInstanceService.getCurrentTypeOfUnit$(F.UNIVER_SHEET), t = this._userManagerService.currentUser$, e = St([i, t]);
    this.disposeWithMe(
      e.pipe(
        we(([n, r]) => n ? n.activeSheet$.pipe(
          kn((s) => {
            if (!s) {
              this._drawingManagerService.setDrawingEditable(!1);
              return;
            }
            const o = n.getUnitId(), a = s.getSheetId();
            this._permissionService.composePermission([
              new zt(o).id,
              new Kt(o, a).id
            ]).every((u) => u.value) ? this._drawingManagerService.setDrawingEditable(!0) : this._handleDrawingEditableFalse(n, s);
          })
        ) : (this._drawingManagerService.setDrawingEditable(!1), fe))
      ).subscribe()
    );
  }
  _handleDrawingEditableFalse(i, t) {
    this._drawingManagerService.setDrawingEditable(!1);
    const e = i.getUnitId(), n = t.getSheetId(), r = this._drawingManagerService.getDrawingData(e, n), s = Object.values(r), o = this._renderManagerService.getRenderById(e), a = o == null ? void 0 : o.scene;
    if (!a)
      return;
    a.getAllObjectsByOrder().forEach((u) => {
      u.classType === Oe.IMAGE && s.some((c) => u.oKey.includes(c.drawingId)) && a.detachTransformerFrom(u);
    });
  }
  _initViewPermissionChange() {
    const i = this._univerInstanceService.getCurrentTypeOfUnit$(F.UNIVER_SHEET), t = this._userManagerService.currentUser$;
    this.disposeWithMe(
      St([i, t]).pipe(
        we(([e, n]) => e ? e.activeSheet$.pipe(
          we((r) => {
            if (!r)
              return fe;
            const s = e.getUnitId(), o = r.getSheetId(), a = this._renderManagerService.getRenderById(s), d = a == null ? void 0 : a.scene;
            if (!d)
              return fe;
            const u = d.getTransformerByCreate();
            return this._permissionService.composePermission$([
              new Mn(s).id,
              new yn(s, o).id
            ]).pipe(
              Re((l) => l.every((g) => g.value)),
              Wn()
            ).pipe(
              Re((l) => ({
                permission: l,
                scene: d,
                transformer: u,
                unitId: s,
                subUnitId: o
              }))
            );
          })
        ) : fe)
      ).subscribe({
        next: ({ permission: e, scene: n, transformer: r, unitId: s, subUnitId: o }) => {
          this._drawingManagerService.setDrawingVisible(e);
          const a = n.getAllObjectsByOrder(), d = this._drawingManagerService.getDrawingData(s, o), u = Object.values(d);
          e ? this._drawingManagerService.addNotification(u) : (a.forEach((c) => {
            c.classType === Oe.IMAGE && u.some((l) => c.oKey.includes(l.drawingId)) && n.removeObject(c);
          }), r.clearSelectedObjects());
        },
        complete: () => {
          this._drawingManagerService.setDrawingVisible(!0);
          const e = this._univerInstanceService.getCurrentUnitForType(F.UNIVER_SHEET), n = e == null ? void 0 : e.getActiveSheet(), r = e == null ? void 0 : e.getUnitId(), s = n == null ? void 0 : n.getSheetId();
          if (!r || !s)
            return;
          const o = this._drawingManagerService.getDrawingData(r, s), a = Object.values(o);
          this._drawingManagerService.addNotification(a);
        }
      })
    );
  }
  _initEditPermissionChange() {
    const i = this._univerInstanceService.getCurrentTypeOfUnit$(F.UNIVER_SHEET), t = this._userManagerService.currentUser$;
    this.disposeWithMe(
      St([i, t]).pipe(
        we(([e, n]) => e ? e.activeSheet$.pipe(
          we((r) => {
            if (!r)
              return fe;
            const s = e.getUnitId(), o = r.getSheetId(), a = this._renderManagerService.getRenderById(s), d = a == null ? void 0 : a.scene;
            if (!d)
              return fe;
            const u = d.getTransformerByCreate();
            return this._permissionService.composePermission$([
              new zt(s).id,
              new Kt(s, o).id
            ]).pipe(
              Re((l) => l.every((g) => g.value)),
              Wn()
            ).pipe(
              Re((l) => ({
                permission: l,
                scene: d,
                transformer: u,
                unitId: s,
                subUnitId: o
              }))
            );
          })
        ) : fe)
      ).subscribe({
        next: ({ permission: e, scene: n, transformer: r, unitId: s, subUnitId: o }) => {
          this._drawingManagerService.setDrawingEditable(e);
          const a = n.getAllObjectsByOrder(), d = this._drawingManagerService.getDrawingData(s, o), u = Object.values(d);
          e ? (a.forEach((c) => {
            c.classType === Oe.IMAGE && u.some((l) => c.oKey.includes(l.drawingId)) && n.attachTransformerTo(c);
          }), this._drawingManagerService.addNotification(u)) : (a.forEach((c) => {
            c.classType === Oe.IMAGE && u.some((l) => c.oKey.includes(l.drawingId)) && n.detachTransformerFrom(c);
          }), r.clearSelectedObjects());
        },
        complete: () => {
          const e = this._univerInstanceService.getCurrentUnitForType(F.UNIVER_SHEET);
          if (!e)
            return;
          const n = e.getUnitId(), r = e.getActiveSheet();
          if (!r)
            return;
          const s = r.getSheetId(), o = this._renderManagerService.getRenderById(n), a = o == null ? void 0 : o.scene;
          if (!a)
            return;
          const d = this._drawingManagerService.getDrawingData(n, s), u = Object.values(d);
          this._drawingManagerService.setDrawingEditable(!0), a.getAllObjectsByOrder().forEach((l) => {
            l.classType === Oe.IMAGE && u.some((g) => l.oKey.includes(g.drawingId)) && a.detachTransformerFrom(l);
          });
        }
      })
    );
  }
};
Et = bs([
  Ke(0, ie),
  Ke(1, J),
  Ke(2, zr),
  Ke(3, Se),
  Ke(4, A(Kr))
], Et);
var Ms = Object.getOwnPropertyDescriptor, ys = (i, t, e, n) => {
  for (var r = n > 1 ? void 0 : n ? Ms(t, e) : t, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (r = o(r) || r);
  return r;
}, Ce = (i, t) => (e, n) => t(e, n, i);
function Ir(i, t, e, n, r, s = !1) {
  const { scaleX: o, scaleY: a } = t.getAncestorScale(), d = t.getViewport(xn.VIEW_MAIN), u = n.getFreeze(), { startColumn: c, startRow: l, xSplit: g, ySplit: h } = u, f = {
    left: !0,
    // left means the left of pic is in a viewMainLeft
    top: !0
  };
  if (!d)
    return {
      ...i,
      absolute: f
    };
  const { left: p, right: m, top: _, bottom: v } = i;
  let { top: I, left: R, viewportScrollX: S, viewportScrollY: C } = d;
  const { boundsOfViewArea: w, scrollDirectionResponse: y } = r || {}, { rowHeaderWidth: D, columnHeaderHeight: T } = e, E = {
    top: s ? 0 : T,
    left: s ? 0 : D
  };
  w && (je.isDefine(E.top) && (E.top = w.top), je.isDefine(E.left) && (E.left = w.left)), y === "HORIZONTAL" && (C = 0), y === "VERTICAL" && (S = 0);
  let M = 0, b = 0;
  const N = e.rowStartY(l - h) + T, x = e.colStartX(c - g) + D, q = e.rowStartY(l) + T, H = e.colStartX(c) + D;
  if (g === 0)
    f.left = !1, M = (p - S) * o, b = (m - S) * o;
  else {
    const k = p - (x - D), ae = m - (x - D);
    m < H ? (M = k * o, b = ae * o) : p <= H && m >= H ? (M = k * o, b = Math.max(R, (m - S) * o)) : p > H && (f.left = !1, M = Math.max((p - S) * o, R), b = Math.max((m - S) * o, R));
  }
  let L = 0, G = 0;
  if (h === 0)
    f.top = !1, L = (_ - C) * a, G = (v - C) * a;
  else {
    const k = _ - (N - T), ae = v - (N - T);
    v < q ? (L = k * a, G = ae * a) : _ <= q && v >= q ? (L = k * a, G = Math.max(I, (v - C) * a)) : _ > q && (f.top = !1, L = Math.max((_ - C) * a, I), G = Math.max((v - C) * a, I));
  }
  return M = Math.max(M, E.left), L = Math.max(L, E.top), b = Math.max(b, E.left), G = Math.max(G, E.top), {
    left: M,
    right: b,
    top: L,
    bottom: G,
    absolute: f
  };
}
const ge = (i, t, e, n, r) => {
  const { left: s, top: o, width: a, height: d, angle: u } = i, c = {
    left: s,
    right: s + a,
    top: o,
    bottom: o + d
  }, l = Ir(c, t, e, n, r), { scaleX: g, scaleY: h } = t.getAncestorScale();
  return {
    startX: l.left,
    endX: l.right,
    startY: l.top,
    endY: l.bottom,
    rotate: u,
    width: a * g,
    height: d * h,
    absolute: l.absolute
  };
};
let tt = class extends ne {
  constructor(t, e, n, r, s, o, a) {
    super();
    /**
     * for update dom container position when scrolling and zoom
     */
    ee(this, "_domLayerInfoMap", /* @__PURE__ */ new Map());
    ee(this, "_transformChange$", new Xt());
    ee(this, "transformChange$", this._transformChange$.asObservable());
    ee(this, "_add$", new Xt());
    ee(this, "add$", this._add$.asObservable());
    ee(this, "_remove$", new Xt());
    ee(this, "remove$", this._remove$.asObservable());
    this._renderManagerService = t, this._univerInstanceService = e, this._commandService = n, this._drawingManagerService = r, this._canvasFloatDomService = s, this._sheetDrawingService = o, this._lifecycleService = a, this._drawingAddListener(), this._featureUpdateListener(), this._deleteListener(), this._bindScrollEvent();
  }
  _bindScrollEvent() {
    this._lifecycleService.lifecycle$.pipe(Zi((t) => t === Zr.Rendered), qi(1)).subscribe(() => {
      this._scrollUpdateListener();
    });
  }
  getFloatDomInfo(t) {
    return this._domLayerInfoMap.get(t);
  }
  getFloatDomsBySubUnitId(t, e) {
    return Array.from(this._domLayerInfoMap.values()).filter((n) => n.subUnitId === e && n.unitId === t);
  }
  _getSceneAndTransformerByDrawingSearch(t) {
    if (t == null)
      return;
    const e = this._renderManagerService.getRenderById(t), n = e == null ? void 0 : e.scene;
    if (e == null || n == null)
      return null;
    const r = n.getTransformerByCreate(), s = e.engine.getCanvasElement();
    return { scene: n, transformer: r, renderUnit: e, canvas: s };
  }
  // eslint-disable-next-line max-lines-per-function
  _drawingAddListener() {
    this.disposeWithMe(
      // eslint-disable-next-line max-lines-per-function
      this._drawingManagerService.add$.subscribe((t) => {
        t.forEach((e) => {
          var K;
          const { unitId: n, subUnitId: r, drawingId: s } = e, o = se(this._univerInstanceService, { unitId: n, subUnitId: r }), a = this._drawingManagerService.getDrawingByParam(e), d = this._univerInstanceService.getUnit(n, F.UNIVER_SHEET);
          if (!d)
            return;
          const u = d.getActiveSheet().getSheetId();
          if (!a || !o)
            return;
          const c = (K = this._renderManagerService.getRenderById(n)) == null ? void 0 : K.with(V).getSkeletonParam(r);
          if (!c)
            return;
          const { transform: l, drawingType: g, data: h } = a;
          if (g !== B.DRAWING_DOM && g !== B.DRAWING_CHART)
            return;
          const f = this._getSceneAndTransformerByDrawingSearch(n);
          if (f == null)
            return;
          const { scene: p, canvas: m } = f;
          if (l == null)
            return !0;
          if (u !== r)
            return;
          const { left: _, top: v, width: I, height: R, angle: S, flipX: C, flipY: w, skewX: y, skewY: D } = l, T = Ie({ unitId: n, subUnitId: r, drawingId: s }), E = p.getObject(T);
          if (E != null) {
            E.transformByState({ left: _, top: v, width: I, height: R, angle: S, flipX: C, flipY: w, skewX: y, skewY: D });
            return;
          }
          const M = {
            left: _,
            top: v,
            width: I,
            height: R,
            zIndex: this._drawingManagerService.getDrawingOrder(n, r).length - 1
          }, b = g === B.DRAWING_CHART;
          if (M.rotateEnabled = !1, b) {
            const k = h ? h.backgroundColor : "white";
            M.fill = k, h && h.border && (M.stroke = h.border), M.paintFirst = "stroke", M.strokeWidth = 1, M.borderEnabled = !1, M.radius = 8;
          }
          const N = new Ue(T, M);
          b && N.setObjectType(mn.CHART), p.addObject(N, Ft), a.allowTransform !== !1 && p.attachTransformerTo(N);
          const x = new _t(), q = ge(N, f.renderUnit.scene, c.skeleton, o.worksheet), H = new ke(q), L = {
            dispose: x,
            rect: N,
            position$: H,
            unitId: n,
            subUnitId: r,
            id: s
          };
          this._canvasFloatDomService.addFloatDom({
            position$: H,
            id: s,
            componentKey: a.componentKey,
            onPointerDown: (k) => {
              m.dispatchEvent(new PointerEvent(k.type, k));
            },
            onPointerMove: (k) => {
              m.dispatchEvent(new PointerEvent(k.type, k));
            },
            onPointerUp: (k) => {
              m.dispatchEvent(new PointerEvent(k.type, k));
            },
            onWheel: (k) => {
              m.dispatchEvent(new WheelEvent(k.type, k));
            },
            data: h,
            unitId: n
          });
          const G = N.onTransformChange$.subscribeEvent(() => {
            const k = ge(N, f.renderUnit.scene, c.skeleton, o.worksheet);
            H.next(
              k
            );
          });
          x.add(() => {
            this._canvasFloatDomService.removeFloatDom(s);
          }), G && x.add(G), this._domLayerInfoMap.set(s, L);
        });
      })
    ), this.disposeWithMe(
      this._drawingManagerService.remove$.subscribe((t) => {
        t.forEach((e) => {
          var l;
          const { unitId: n, subUnitId: r, drawingId: s } = e, o = Ie({ unitId: n, subUnitId: r, drawingId: s }), a = this._getSceneAndTransformerByDrawingSearch(n);
          if (a == null)
            return;
          const { transformer: d, scene: u } = a, c = u.getObject(o);
          c != null && c.oKey && (d.clearControlByIds([c == null ? void 0 : c.oKey]), (l = u.getTransformer()) == null || l.clearSelectedObjects());
        });
      })
    );
  }
  _scrollUpdateListener() {
    const t = (e, n) => {
      var d;
      const r = this._getSceneAndTransformerByDrawingSearch(e), s = Array.from(this._domLayerInfoMap.keys()).map((u) => ({ id: u, ...this._domLayerInfoMap.get(u) })).filter((u) => u.subUnitId === n && u.unitId === e).map((u) => u.id), o = se(this._univerInstanceService, { unitId: e, subUnitId: n }), a = (d = this._renderManagerService.getRenderById(e)) == null ? void 0 : d.with(V).getSkeletonParam(n);
      !r || !o || !a || s.forEach((u) => {
        const c = this._domLayerInfoMap.get(u);
        if (c) {
          const l = ge(c.rect, r.renderUnit.scene, a.skeleton, o.worksheet, c);
          c.position$.next(l);
        }
      });
    };
    this.disposeWithMe(
      this._univerInstanceService.getCurrentTypeOfUnit$(F.UNIVER_SHEET).pipe(
        we((e) => e ? e.activeSheet$ : Bn(null)),
        Re((e) => {
          if (!e) return null;
          const n = e.getUnitId(), r = this._renderManagerService.getRenderById(n);
          return r ? { render: r, unitId: n, subUnitId: e.getSheetId() } : null;
        }),
        we(
          (e) => e ? qr(e.render.scene.getViewport(xn.VIEW_MAIN).onScrollAfter$).pipe(Re(() => ({ unitId: e.unitId, subUnitId: e.subUnitId }))) : Bn(null)
        )
      ).subscribe((e) => {
        if (!e) return;
        const { unitId: n, subUnitId: r } = e;
        t(n, r);
      })
    ), this.disposeWithMe(this._commandService.onCommandExecuted((e) => {
      if (e.id === _n.id) {
        const n = e.params, { unitId: r } = n;
        Array.from(this._domLayerInfoMap.values()).filter((o) => o.unitId === r).map((o) => o.subUnitId).forEach((o) => {
          t(r, o);
        });
      } else if (e.id === hi.id) {
        const { unitId: n, subUnitId: r } = e.params;
        t(n, r);
      }
    }));
  }
  updateFloatDomProps(t, e, n, r) {
    const s = this._domLayerInfoMap.get(n), o = this._getSceneAndTransformerByDrawingSearch(t);
    if (s && o) {
      const { scene: a } = o, d = Ie({ unitId: t, subUnitId: e, drawingId: n }), u = a.getObject(d);
      u && u instanceof Ue && u.setProps(r);
    }
  }
  _getPosition(t, e) {
    var g;
    const { startX: n, endX: r, startY: s, endY: o } = t, a = (g = this._renderManagerService.getRenderById(e)) == null ? void 0 : g.with(xe);
    if (a == null)
      return;
    const d = a.getCellWithCoordByOffset(n, s);
    if (d == null)
      return;
    const u = {
      column: d.actualColumn,
      columnOffset: n - d.startX,
      row: d.actualRow,
      rowOffset: s - d.startY
    }, c = a.getCellWithCoordByOffset(r, o);
    if (c == null)
      return;
    const l = {
      column: c.actualColumn,
      columnOffset: r - c.startX,
      row: c.actualRow,
      rowOffset: o - c.startY
    };
    return {
      from: u,
      to: l
    };
  }
  _featureUpdateListener() {
    this.disposeWithMe(
      this._drawingManagerService.update$.subscribe((t) => {
        t.forEach((e) => {
          const n = this._drawingManagerService.getDrawingByParam(e);
          if (!n || n.drawingType !== B.DRAWING_DOM && n.drawingType !== B.DRAWING_CHART)
            return;
          const r = {
            ...n.transform
          };
          this._transformChange$.next({ id: e.drawingId, value: r }), this._canvasFloatDomService.updateFloatDom(e.drawingId, {
            ...n
          });
          const s = this._getSceneAndTransformerByDrawingSearch(e.unitId);
          if (s && n.drawingType !== B.DRAWING_CHART) {
            const { scene: o } = s, a = this._domLayerInfoMap.get(e.drawingId);
            a != null && a.rect && (n.allowTransform === !1 ? o.detachTransformerFrom(a.rect) : o.attachTransformerTo(a.rect));
          }
        });
      })
    );
  }
  _deleteListener() {
    this.disposeWithMe(
      this._drawingManagerService.remove$.subscribe((t) => {
        t.forEach((e) => {
          this._removeDom(e.drawingId);
        });
      })
    );
  }
  // CreateFloatDomCommand --> floatDomService.addFloatDomToPosition
  addFloatDomToPosition(t, e) {
    const n = se(this._univerInstanceService, {
      unitId: t.unitId,
      subUnitId: t.subUnitId
    });
    if (!n)
      throw new Error("cannot find current target!");
    const { unitId: r, subUnitId: s } = n, { initPosition: o, componentKey: a, data: d, allowTransform: u = !0 } = t, c = e != null ? e : Qe(), l = this._getPosition(o, r);
    if (l == null)
      return;
    const g = {
      unitId: r,
      subUnitId: s,
      drawingId: c,
      drawingType: t.type || B.DRAWING_DOM,
      componentKey: a,
      sheetTransform: l,
      transform: {
        left: o.startX,
        top: o.startY,
        width: o.endX - o.startX,
        height: o.endY - o.startY
      },
      data: d,
      allowTransform: u
    };
    return this._commandService.executeCommand(kt.id, {
      unitId: r,
      drawings: [g]
    }), this._add$.next({ unitId: r, subUnitId: s, id: c }), {
      id: c,
      dispose: () => {
        this._removeDom(c, !0);
      }
    };
  }
  _removeDom(t, e = !1) {
    const n = this._domLayerInfoMap.get(t);
    if (!n)
      return;
    const { unitId: r, subUnitId: s } = n;
    this._domLayerInfoMap.delete(t), n.dispose.dispose();
    const o = this._getSceneAndTransformerByDrawingSearch(r);
    if (o && o.scene.removeObject(n.rect), e) {
      const a = this._drawingManagerService.getDrawingByParam({ unitId: r, subUnitId: s, drawingId: t });
      if (!a)
        return;
      const d = this._sheetDrawingService.getBatchRemoveOp([a]), { redo: u, objects: c } = d;
      this._commandService.syncExecuteCommand(P.id, { unitId: r, subUnitId: s, op: u, objects: c, type: U.REMOVE });
    }
  }
  // eslint-disable-next-line max-lines-per-function, complexity
  addFloatDomToRange(t, e, n, r) {
    var C, w, y;
    const s = se(this._univerInstanceService, {
      unitId: e.unitId,
      subUnitId: e.subUnitId
    });
    if (!s)
      throw new Error("cannot find current target!");
    const { unitId: o, subUnitId: a } = s, d = this._getSceneAndTransformerByDrawingSearch(o);
    if (!d) return;
    const u = this._renderManagerService.getRenderById(o);
    if (!u) return;
    const c = (C = this._renderManagerService.getRenderById(o)) == null ? void 0 : C.with(V).getWorksheetSkeleton(a);
    if (!c) return;
    const { componentKey: l, data: g, allowTransform: h = !0 } = e, f = r != null ? r : Qe(), { position: p, position$: m } = this._createRangePositionObserver(t, u, c.skeleton);
    if (this._getPosition(p, o) == null)
      return;
    const v = d.scene, { scaleX: I } = v.getAncestorScale(), R = Ct(p, n, I), S = {
      unitId: o,
      subUnitId: a,
      drawingId: f,
      drawingType: e.type || B.DRAWING_DOM,
      componentKey: l,
      transform: {
        left: R.startX,
        top: R.startY,
        width: R.width,
        height: R.height
      },
      data: g,
      allowTransform: h
    };
    {
      const { unitId: D, subUnitId: T, drawingId: E } = S, M = se(this._univerInstanceService, { unitId: D, subUnitId: T }), b = S, N = this._univerInstanceService.getUnit(D, F.UNIVER_SHEET);
      if (!N)
        return;
      const x = N.getActiveSheet().getSheetId();
      if (!b || !M)
        return;
      const q = (w = this._renderManagerService.getRenderById(D)) == null ? void 0 : w.with(V);
      if (!q)
        return;
      const H = q.getWorksheetSkeleton(T);
      if (!H)
        return;
      const { transform: L, drawingType: G, data: K } = b;
      if (G !== B.DRAWING_DOM && G !== B.DRAWING_CHART)
        return;
      const k = this._getSceneAndTransformerByDrawingSearch(D);
      if (k == null)
        return;
      const { scene: ae, canvas: be } = k;
      if (L == null || x !== T)
        return;
      const { left: ot, top: at, width: ct, height: dt, angle: jt, flipX: $t, flipY: lt, skewX: ut, skewY: Me } = L, ht = Ie({ unitId: D, subUnitId: T, drawingId: E }), de = ae.getObject(ht);
      if (de != null) {
        de.transformByState({ left: ot, top: at, width: ct, height: dt, angle: jt, flipX: $t, flipY: lt, skewX: ut, skewY: Me });
        return;
      }
      const Q = {
        left: ot,
        // from floatDomParam.transform
        top: at,
        width: ct,
        height: dt,
        zIndex: this._drawingManagerService.getDrawingOrder(D, T).length - 1
      }, ye = G === B.DRAWING_CHART;
      if (ye) {
        const W = K ? K.backgroundColor : "white";
        Q.fill = W, Q.rotateEnabled = !1, K && K.border && (Q.stroke = K.border), Q.paintFirst = "stroke", Q.strokeWidth = 1, Q.borderEnabled = !1, Q.radius = 8;
      }
      const le = new Ue(ht, Q);
      ye && le.setObjectType(mn.CHART), ae.addObject(le, Ft), b.allowTransform !== !1 && ae.attachTransformerTo(le);
      const ue = new _t(), gt = ae.getMainViewport(), { rowHeaderWidth: Te, columnHeaderHeight: Xe } = H.skeleton, ft = {
        top: Xe,
        left: Te,
        bottom: gt.bottom,
        right: gt.right
      }, he = {
        dispose: ue,
        rect: le,
        boundsOfViewArea: ft,
        domAnchor: n,
        unitId: D,
        subUnitId: T
      }, j = ge(le, k.renderUnit.scene, H.skeleton, M.worksheet, he), Ee = new ke(j);
      he.position$ = Ee;
      let Le = {
        position$: Ee,
        id: E,
        componentKey: b.componentKey,
        onPointerDown: () => {
        },
        onPointerMove: () => {
        },
        onPointerUp: () => {
        },
        onWheel: (W) => {
          be.dispatchEvent(new WheelEvent(W.type, W));
        },
        data: K,
        unitId: D
      };
      e.eventPassThrough && (Le = {
        ...Le,
        onPointerDown: (W) => {
          be.dispatchEvent(new PointerEvent(W.type, W));
        },
        onPointerMove: (W) => {
          be.dispatchEvent(new PointerEvent(W.type, W));
        },
        onPointerUp: (W) => {
          be.dispatchEvent(new PointerEvent(W.type, W));
        }
      }), this._canvasFloatDomService.addFloatDom(Le), this.disposeWithMe(m.subscribe((W) => {
        var un, hn, gn, fn;
        const ln = Ct({
          startX: W.startX,
          startY: W.startY,
          endX: W.endX,
          endY: W.endY,
          width: (un = n.width) != null ? un : W.width,
          height: (hn = n.height) != null ? hn : W.height,
          absolute: {
            left: p.absolute.left,
            top: p.absolute.top
          }
        }, n), Rr = Ie({ unitId: D, subUnitId: T, drawingId: E }), br = new Ue(Rr, {
          left: ln.startX,
          top: ln.startY,
          width: (gn = n.width) != null ? gn : W.width,
          height: (fn = n.height) != null ? fn : W.height,
          zIndex: this._drawingManagerService.getDrawingOrder(D, T).length - 1
        }), Mr = ge(br, k.renderUnit.scene, H.skeleton, M.worksheet, he);
        Ee.next(Mr);
      }));
      const Ve = (y = this._renderManagerService.getRenderById(D)) == null ? void 0 : y.with(V);
      Ve == null || Ve.currentSkeleton$.subscribe((W) => {
        W && H.sheetId !== W.sheetId && this._removeDom(f, !0);
      });
      const mt = le.onTransformChange$.subscribeEvent(() => {
        const W = ge(le, k.renderUnit.scene, H.skeleton, M.worksheet, he);
        Ee.next(
          W
        );
      });
      ue.add(() => {
        this._canvasFloatDomService.removeFloatDom(E);
      }), mt && ue.add(mt), this._domLayerInfoMap.set(E, he);
    }
    return {
      id: f,
      dispose: () => {
        this._removeDom(f, !0);
      }
    };
  }
  // eslint-disable-next-line max-lines-per-function, complexity
  addFloatDomToColumnHeader(t, e, n, r) {
    var R, S, C;
    const s = se(this._univerInstanceService, {
      unitId: e.unitId,
      subUnitId: e.subUnitId
    });
    if (!s)
      throw new Error("cannot find current target!");
    const { unitId: o, subUnitId: a } = s;
    if (!this._getSceneAndTransformerByDrawingSearch(o)) return;
    const u = this._renderManagerService.getRenderById(o);
    if (!u) return;
    const c = (R = this._renderManagerService.getRenderById(o)) == null ? void 0 : R.with(V).getWorksheetSkeleton(a);
    if (!c) return;
    const { componentKey: l, data: g, allowTransform: h = !0 } = e, f = r != null ? r : Qe(), { position: p, position$: m } = this._createRangePositionObserver({
      startRow: 0,
      endRow: 0,
      startColumn: t,
      endColumn: t
    }, u, c.skeleton), _ = p;
    if (_.startY = 0, this._getPosition(p, o) == null)
      return;
    const I = {
      unitId: o,
      subUnitId: a,
      drawingId: f,
      drawingType: e.type || B.DRAWING_DOM,
      componentKey: l,
      transform: {
        left: _.startX,
        top: _.startY,
        width: _.width,
        height: _.height
      },
      data: g,
      allowTransform: h
    };
    {
      const { unitId: w, subUnitId: y, drawingId: D } = I, T = se(this._univerInstanceService, { unitId: w, subUnitId: y }), E = I, M = this._univerInstanceService.getUnit(w, F.UNIVER_SHEET);
      if (!M)
        return;
      const b = M.getActiveSheet().getSheetId();
      if (!E || !T)
        return;
      const N = (S = this._renderManagerService.getRenderById(w)) == null ? void 0 : S.with(V);
      if (!N)
        return;
      const x = N.getWorksheetSkeleton(y);
      if (!x)
        return;
      const { transform: q, data: H } = E, L = this._getSceneAndTransformerByDrawingSearch(w);
      if (L == null)
        return;
      const { scene: G, canvas: K } = L;
      if (q == null || b !== y)
        return;
      const { left: k, top: ae, width: be, height: ot, angle: at, flipX: ct, flipY: dt, skewX: jt, skewY: $t } = q, lt = Ie({ unitId: w, subUnitId: y, drawingId: D }), ut = G.getObject(lt);
      if (ut != null) {
        ut.transformByState({ left: k, top: ae, width: be, height: ot, angle: at, flipX: ct, flipY: dt, skewX: jt, skewY: $t });
        return;
      }
      const Me = Ct({
        startX: _.startX,
        startY: 0,
        endX: p.endX,
        endY: p.endY,
        width: n.width,
        height: n.height,
        absolute: {
          left: p.absolute.left,
          top: p.absolute.top
        }
      }, n), ht = {
        left: Me.startX,
        top: Me.startY,
        width: Me.width,
        height: Me.height,
        zIndex: this._drawingManagerService.getDrawingOrder(w, y).length - 1
      }, de = new Ue(lt, ht);
      G.addObject(de, Ft), E.allowTransform !== !1 && G.attachTransformerTo(de);
      const Q = new _t(), ye = G.getMainViewport(), le = {
        top: 0,
        //viewMain.top,
        left: ye.left,
        bottom: ye.bottom,
        right: ye.right
      }, ue = {
        dispose: Q,
        rect: de,
        // position$,
        unitId: w,
        subUnitId: y,
        boundsOfViewArea: le,
        domAnchor: n,
        scrollDirectionResponse: "HORIZONTAL"
        /* HORIZONTAL */
      }, gt = ge(de, L.renderUnit.scene, x.skeleton, T.worksheet, ue), Te = new ke(gt);
      ue.position$ = Te;
      let Xe = {
        position$: Te,
        id: D,
        componentKey: E.componentKey,
        onPointerDown: () => {
        },
        onPointerMove: () => {
        },
        onPointerUp: () => {
        },
        onWheel: (j) => {
          K.dispatchEvent(new WheelEvent(j.type, j));
        },
        data: H,
        unitId: w
      };
      e.eventPassThrough && (Xe = {
        ...Xe,
        onPointerDown: (j) => {
          K.dispatchEvent(new PointerEvent(j.type, j));
        },
        onPointerMove: (j) => {
          K.dispatchEvent(new PointerEvent(j.type, j));
        },
        onPointerUp: (j) => {
          K.dispatchEvent(new PointerEvent(j.type, j));
        }
      }), this._canvasFloatDomService.addFloatDom(Xe);
      const ft = de.onTransformChange$.subscribeEvent(() => {
        const j = ge(de, L.renderUnit.scene, x.skeleton, T.worksheet, ue);
        Te.next(
          j
        );
      });
      this.disposeWithMe(m.subscribe((j) => {
        const Ee = Ct({
          startX: j.startX,
          startY: 0,
          endX: j.endX,
          endY: j.endY,
          width: n.width,
          height: n.height,
          absolute: {
            left: p.absolute.left,
            top: p.absolute.top
          }
        }, n), Le = Ie({ unitId: w, subUnitId: y, drawingId: D }), Ve = new Ue(Le, {
          left: Ee.startX,
          top: 0,
          width: n.width,
          height: n.height,
          zIndex: this._drawingManagerService.getDrawingOrder(w, y).length - 1
        }), mt = ge(Ve, L.renderUnit.scene, x.skeleton, T.worksheet, ue);
        Te.next(mt);
      }));
      const he = (C = this._renderManagerService.getRenderById(w)) == null ? void 0 : C.with(V);
      he == null || he.currentSkeleton$.subscribe((j) => {
        j && c.sheetId !== j.sheetId && this._removeDom(f, !0);
      }), Q.add(() => {
        this._canvasFloatDomService.removeFloatDom(D);
      }), ft && Q.add(ft), this._domLayerInfoMap.set(D, ue);
    }
    return {
      id: f,
      dispose: () => {
        this._removeDom(f, !0);
      }
    };
  }
  /**
   * Unlike _createCellPositionObserver, this accept a range not a single cell.
   *
   * @param initialRow
   * @param initialCol
   * @param currentRender
   * @param skeleton
   * @param activeViewport
   * @returns position of cell to canvas.
   */
  // eslint-disable-next-line max-lines-per-function
  _createRangePositionObserver(t, e, n) {
    let { startRow: r, startColumn: s } = t;
    const o = Je(r, s, n), a = new ke(o), d = Je(t.endRow, t.endColumn, n), u = new ke(d), c = () => {
      const m = Je(r, s, n), _ = Je(t.endRow, t.endColumn, n);
      a.next(m), u.next(_);
    }, l = new _t();
    l.add(e.engine.clientRect$.subscribe(() => c())), l.add(this._commandService.onCommandExecuted((m) => {
      if (m.id === gi.id && m.params.rowsAutoHeightInfo.findIndex((v) => v.row === r) > -1) {
        c();
        return;
      }
      (fi.indexOf(m.id) > -1 || m.id === Fr.id || m.id === _n.id) && c();
    }));
    const g = (m, _) => {
      r = m, s = _, c();
    }, h = () => ({
      rotate: 0,
      width: d.right - o.left,
      height: d.bottom - o.top,
      absolute: {
        left: !0,
        top: !0
      },
      startX: o.left,
      startY: o.top,
      endX: d.right,
      endY: d.bottom
    }), f = a.pipe(
      Re((m) => {
        const _ = Je(t.endRow, t.endColumn, n);
        return {
          rotate: 0,
          width: _.right - m.left,
          height: _.bottom - m.top,
          absolute: {
            left: !0,
            top: !0
          },
          startX: m.left,
          startY: m.top,
          endX: _.right,
          endY: _.bottom
        };
      })
    ), p = h();
    return {
      position$: f,
      position: p,
      updateRowCol: g,
      topLeftPos$: a,
      rightBottomPos$: u,
      disposable: l
    };
  }
};
tt = ys([
  Ce(0, A(J)),
  Ce(1, Se),
  Ce(2, A(X)),
  Ce(3, ie),
  Ce(4, A(Wi)),
  Ce(5, re),
  Ce(6, A(Jr))
], tt);
function Je(i, t, e) {
  const n = e.getCellWithCoordByIndex(i, t), r = n.isMergedMainCell ? n.mergeInfo : n;
  return {
    left: r.startX,
    right: r.endX,
    top: r.startY,
    bottom: r.endY
  };
}
function Ct(i, t, e) {
  var u, c;
  e = e != null ? e : 1;
  const n = i.endX - i.startX, r = i.endY - i.startY, s = (u = t == null ? void 0 : t.width) != null ? u : n, o = (c = t == null ? void 0 : t.height) != null ? c : r;
  let a = 0, d = 0;
  if (t) {
    if (t.horizonOffsetAlign === "right") {
      const l = Dt(t.marginX, n * e);
      a = i.endX - l - s;
    } else
      a = i.startX + Dt(t.marginX, n);
    if (t.verticalOffsetAlign === "bottom") {
      const l = Dt(t.marginY, r * e);
      d = i.endY - l - o;
    } else
      d = i.startY + Dt(t.marginY, r);
  }
  return {
    rotate: 0,
    startX: a,
    startY: d,
    endX: i.endX,
    endY: i.endY,
    width: s,
    height: o,
    absolute: {
      left: i.absolute.left,
      top: i.absolute.top
    }
  };
}
function Dt(i, t) {
  if (i === void 0) return 0;
  if (typeof i == "number") return i;
  const e = Number.parseFloat(i);
  return t * e / 100;
}
const Ts = (i) => {
  const { floatDomInfos: t, scene: e, skeleton: n, worksheet: r } = i, s = Qi(() => t.map((o) => {
    const { width: a, height: d, angle: u, left: c, top: l } = o.transform, g = Ir(
      {
        left: c != null ? c : 0,
        right: (c != null ? c : 0) + (a != null ? a : 0),
        top: l != null ? l : 0,
        bottom: (l != null ? l : 0) + (d != null ? d : 0)
      },
      e,
      n,
      r,
      void 0,
      !0
    ), { scaleX: h, scaleY: f } = e.getAncestorScale(), p = {
      startX: g.left,
      endX: g.right,
      startY: g.top,
      endY: g.bottom,
      rotate: u,
      width: a * h,
      height: d * f,
      absolute: g.absolute
    }, m = {
      position$: new ke(p),
      position: p,
      id: o.drawingId,
      componentKey: o.componentKey,
      onPointerMove: () => {
      },
      onPointerDown: () => {
      },
      onPointerUp: () => {
      },
      onWheel: () => {
      },
      unitId: o.unitId,
      data: o.data
    };
    return [o.drawingId, m];
  }), [t, e, n, r]);
  return /* @__PURE__ */ oe("div", { style: { position: "absolute", top: 0, left: 0 }, children: s.map(([o, a]) => /* @__PURE__ */ oe(Bi, { layer: a, id: o, position: a.position }, o)) });
};
var Es = Object.getOwnPropertyDescriptor, Os = (i, t, e, n) => {
  for (var r = n > 1 ? void 0 : n ? Es(t, e) : t, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (r = o(r) || r);
  return r;
}, De = (i, t) => (e, n) => t(e, n, i);
let Ot = class extends ne {
  constructor(i, t, e, n, r, s, o) {
    super(), this._sheetPrintInterceptorService = i, this._drawingRenderService = t, this._drawingManagerService = e, this._renderManagerService = n, this._canvasFloatDomManagerService = r, this._componetManager = s, this._injector = o, this._initPrinting(), this._initPrintingDom();
  }
  _initPrinting() {
    this.disposeWithMe(
      this._sheetPrintInterceptorService.interceptor.intercept(
        this._sheetPrintInterceptorService.interceptor.getInterceptPoints().PRINTING_COMPONENT_COLLECT,
        {
          handler: (i, t, e) => {
            const { unitId: n, scene: r, subUnitId: s } = t, o = this._drawingManagerService.getDrawingDataForUnit(n), a = o == null ? void 0 : o[s];
            return a && a.order.forEach((d) => {
              const u = a.data[d];
              u.drawingType !== B.DRAWING_CHART && u.drawingType !== B.DRAWING_DOM && this._drawingRenderService.renderDrawing(u, r);
            }), e();
          }
        }
      )
    ), this.disposeWithMe(
      this._sheetPrintInterceptorService.interceptor.intercept(
        this._sheetPrintInterceptorService.interceptor.getInterceptPoints().PRINTING_RANGE,
        {
          handler: (i, t, e) => {
            const { unitId: n, subUnitId: r } = t, s = this._renderManagerService.getRenderById(n);
            if (!s)
              return e(i);
            const o = s.with(V).getSkeletonParam(r);
            if (!o)
              return e(i);
            const a = this._drawingManagerService.getDrawingDataForUnit(n), d = a == null ? void 0 : a[t.subUnitId];
            if (!d)
              return e(i);
            const { scaleX: u, scaleY: c } = s.scene, l = i ? { ...i } : { startColumn: 0, endColumn: 0, endRow: 0, startRow: 0 }, g = d.order.map((h) => d.data[h]);
            return g.length ? (g.forEach((h) => {
              if (!h.groupId && h.transform && je.isDefine(h.transform.left) && je.isDefine(h.transform.top) && je.isDefine(h.transform.width) && je.isDefine(h.transform.height)) {
                const f = o.skeleton.getCellIndexByOffset(h.transform.left, h.transform.top, u, c, { x: 0, y: 0 }), p = o.skeleton.getCellIndexByOffset(h.transform.left + h.transform.width, h.transform.top + h.transform.height, u, c, { x: 0, y: 0 });
                f.column < l.startColumn && (l.startColumn = f.column), f.row < l.startRow && (l.startRow = f.row), l.endRow < p.row && (l.endRow = p.row), l.endColumn < p.column && (l.endColumn = p.column);
              }
            }), e(l)) : e(i);
          }
        }
      )
    );
  }
  _initPrintingDom() {
    this.disposeWithMe(
      this._sheetPrintInterceptorService.interceptor.intercept(
        this._sheetPrintInterceptorService.interceptor.getInterceptPoints().PRINTING_DOM_COLLECT,
        {
          handler: (i, t, e) => {
            const { unitId: n, subUnitId: r } = t, s = this._drawingManagerService.getDrawingDataForUnit(n), o = s == null ? void 0 : s[r];
            if (o) {
              const a = o.order.map((u) => {
                const c = o.data[u];
                if (c.drawingType === B.DRAWING_CHART)
                  return {
                    ...c,
                    componentKey: this._componetManager.get(Qr)
                  };
                if (c.drawingType === B.DRAWING_DOM) {
                  const l = this._sheetPrintInterceptorService.getPrintComponent(c.componentKey);
                  return {
                    ...c,
                    componentKey: this._componetManager.get(l || c.componentKey)
                  };
                }
                return null;
              }).filter(Boolean), d = ji(Ts, this._injector);
              return Di(
                /* @__PURE__ */ oe(d, { floatDomInfos: a, scene: t.scene, skeleton: t.skeleton, worksheet: t.worksheet }),
                t.root
              ), i == null || i.add(() => {
                Ri(t.root);
              }), e(i);
            }
          }
        }
      )
    );
  }
};
Ot = Os([
  De(0, A(xr)),
  De(1, A(lr)),
  De(2, ie),
  De(3, J),
  De(4, A(tt)),
  De(5, A(dr)),
  De(6, A(Ge))
], Ot);
var Us = Object.getOwnPropertyDescriptor, Ps = (i, t, e, n) => {
  for (var r = n > 1 ? void 0 : n ? Us(t, e) : t, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (r = o(r) || r);
  return r;
}, me = (i, t) => (e, n) => t(e, n, i);
const As = [
  Ln.id,
  Vn.id,
  Hn.id,
  zn.id,
  Kn.id,
  Jn.id,
  Zn.id,
  qn.id,
  Jt.id,
  Zt.id,
  Qn.id,
  er.id,
  tr.id,
  nr.id,
  rr.id,
  ir.id,
  sr.id,
  or.id,
  ar.id
], Ns = [
  mi.id,
  pi.id,
  wi.id,
  _i.id,
  Si.id,
  vi.id
];
let rn = class extends ne {
  constructor(i, t, e, n, r, s, o, a, d) {
    super(), this._context = i, this._renderManagerService = t, this._commandService = e, this._selectionRenderService = n, this._skeletonManagerService = r, this._sheetInterceptorService = s, this._sheetDrawingService = o, this._drawingManagerService = a, this._univerInstanceService = d, this._sheetInterceptorListener(), this._commandListener(), this._sheetRefreshListener();
  }
  _sheetInterceptorListener() {
    this.disposeWithMe(
      this._sheetInterceptorService.interceptAfterCommand({
        /* eslint-disable-next-line complexity */
        getMutations: (i) => {
          if (!As.includes(i.id))
            return { redos: [], undos: [] };
          if (i.params == null)
            return { redos: [], undos: [] };
          const t = i.id;
          if (t === Ln.id)
            return this._moveRowInterceptor(i.params, "insert");
          if ([sr.id, or.id, ar.id].includes(t))
            return this._moveRangeInterceptor(i.params);
          if (t === Vn.id)
            return this._moveColInterceptor(i.params, "insert");
          if (t === Hn.id)
            return this._moveRowInterceptor(i.params, "remove");
          if (t === zn.id)
            return this._moveColInterceptor(i.params, "remove");
          if (t === Kn.id) {
            const { range: e } = i.params;
            return this._getRangeMoveUndo(
              e,
              0
              /* deleteLeft */
            );
          } else if (t === Jn.id) {
            const { range: e } = i.params;
            return this._getRangeMoveUndo(
              e,
              1
              /* deleteUp */
            );
          } else if (t === Zn.id) {
            const { range: e } = i.params;
            return this._getRangeMoveUndo(
              e,
              2
              /* insertDown */
            );
          } else if (t === qn.id) {
            const { range: e } = i.params;
            return this._getRangeMoveUndo(
              e,
              3
              /* insertRight */
            );
          } else if (t === tr.id || t === nr.id) {
            const e = i.params, { unitId: n, subUnitId: r, ranges: s } = e;
            return this._getDrawingUndoForRowVisible(n, r, s);
          } else if (t === rr.id || t === ir.id) {
            const e = i.params, { unitId: n, subUnitId: r, ranges: s } = e;
            return this._getDrawingUndoForColVisible(n, r, s);
          } else if (t === Jt.id || t === Zt.id || t === Qn.id || t === er.id) {
            const e = i.params, { unitId: n, subUnitId: r, ranges: s } = e, o = t === Jt.id || t === Zt.id;
            return this._getDrawingUndoForRowAndColSize(n, r, s, o);
          }
          return { redos: [], undos: [] };
        }
      })
    );
  }
  _getRangeMoveUndo(i, t) {
    const e = se(this._univerInstanceService);
    if (e == null)
      return { redos: [], undos: [] };
    const n = e.unitId, r = e.subUnitId, s = [], o = [], a = this._sheetDrawingService.getDrawingData(n, r), d = [], u = [];
    if (Object.keys(a).forEach((c) => {
      const l = a[c], { updateDrawings: g, deleteDrawings: h } = this._getUpdateOrDeleteDrawings(i, t, l);
      d.push(...g), u.push(...h);
    }), d.length === 0 && u.length === 0)
      return { redos: [], undos: [] };
    if (d.length > 0) {
      const c = this._sheetDrawingService.getBatchUpdateOp(d), { undo: l, redo: g, objects: h } = c;
      s.push({ id: P.id, params: { unitId: n, subUnitId: r, op: g, objects: h, type: U.UPDATE } }), o.push({ id: P.id, params: { unitId: n, subUnitId: r, op: l, objects: h, type: U.UPDATE } });
    }
    if (u.length > 0) {
      const c = this._sheetDrawingService.getBatchRemoveOp(u), l = c.undo, g = c.redo, h = c.objects;
      s.push({ id: P.id, params: { unitId: n, subUnitId: r, op: g, objects: h, type: U.REMOVE } }), o.push({ id: P.id, params: { unitId: n, subUnitId: r, op: l, objects: h, type: U.INSERT } });
    }
    return s.push({ id: Y.id, params: [n] }), o.push({ id: Y.id, params: [n] }), {
      redos: s,
      undos: o
    };
  }
  _getUpdateOrDeleteDrawings(i, t, e) {
    const n = [], r = [], { sheetTransform: s, anchorType: o = O.Position, transform: a, unitId: d, subUnitId: u, drawingId: c } = e, { from: l, to: g } = s, { row: h, column: f } = l, { row: p, column: m } = g;
    if (s == null || a == null)
      return {
        updateDrawings: n,
        deleteDrawings: r
      };
    const { startRow: _, endRow: v, startColumn: I, endColumn: R } = i;
    let S = null, C = null;
    if (t === 0 && h >= _ && p <= v)
      if (f >= I && m <= R)
        r.push({ unitId: d, subUnitId: u, drawingId: c });
      else {
        const w = this._shrinkCol(s, a, I, R, o);
        S = w == null ? void 0 : w.newSheetTransform, C = w == null ? void 0 : w.newTransform;
      }
    else if (t === 1 && f >= I && m <= R)
      if (h >= _ && p <= v)
        r.push({ unitId: d, subUnitId: u, drawingId: c });
      else {
        const w = this._shrinkRow(s, a, _, v, o);
        S = w == null ? void 0 : w.newSheetTransform, C = w == null ? void 0 : w.newTransform;
      }
    else if (t === 2) {
      const w = this._expandRow(s, a, _, v, o);
      S = w == null ? void 0 : w.newSheetTransform, C = w == null ? void 0 : w.newTransform;
    } else if (t === 3) {
      const w = this._expandCol(s, a, I, R, o);
      S = w == null ? void 0 : w.newSheetTransform, C = w == null ? void 0 : w.newTransform;
    }
    if (S != null && C != null) {
      const w = z(S, this._selectionRenderService, this._skeletonManagerService);
      n.push({ ...e, sheetTransform: S, transform: w });
    }
    return { updateDrawings: n, deleteDrawings: r };
  }
  _remainDrawingSize(i, t, e) {
    const n = $({ ...i }, this._selectionRenderService);
    n != null && t.push({
      ...e,
      sheetTransform: n
    });
  }
  // eslint-disable-next-line max-lines-per-function
  _getDrawingUndoForColVisible(i, t, e) {
    const n = this._drawingManagerService.getDrawingData(i, t), r = [], s = [];
    if (Object.keys(n).forEach((c) => {
      const l = n[c], { sheetTransform: g, transform: h, anchorType: f = O.Position } = l;
      if (f === O.None)
        this._remainDrawingSize(h, r, l);
      else {
        const { from: p, to: m } = g, { row: _, column: v } = p, { row: I, column: R } = m;
        for (let S = 0; S < e.length; S++) {
          const C = e[S], { startRow: w, endRow: y, startColumn: D, endColumn: T } = C;
          if (R < D)
            continue;
          if (f === O.Position) {
            let b = null, N = null;
            if (v >= D && v <= T) {
              const x = this._skeletonManagerService.attachRangeWithCoord({ startColumn: v, endColumn: T, startRow: p.row, endRow: m.row });
              if (x == null)
                return;
              N = { ...h, left: x.startX };
            }
            if (N != null && (b = $(N, this._selectionRenderService), b != null && N != null)) {
              r.push({ ...l, sheetTransform: b, transform: N });
              break;
            }
            this._remainDrawingSize(h, r, l);
            continue;
          }
          if (v >= D && R <= T)
            continue;
          let E = null, M = null;
          if (v >= D && v <= T) {
            const b = this._skeletonManagerService.attachRangeWithCoord({ startColumn: v, endColumn: T, startRow: p.row, endRow: m.row });
            if (b == null)
              return;
            M = {
              ...h,
              left: (b == null ? void 0 : b.startX) || 0,
              width: ((h == null ? void 0 : h.width) || 0) - b.endX + b.startX
            };
          } else if (R >= D && R <= T) {
            const b = this._skeletonManagerService.attachRangeWithCoord({ startColumn: D, endColumn: R, startRow: p.row, endRow: m.row });
            if (b == null)
              return;
            M = {
              ...h,
              left: b.startX - ((h == null ? void 0 : h.width) || 0)
            };
          } else {
            const b = this._skeletonManagerService.attachRangeWithCoord({ startColumn: D, endColumn: T, startRow: p.row, endRow: m.row });
            if (b == null)
              return;
            if (M = {
              ...h,
              width: ((h == null ? void 0 : h.width) || 0) - b.endX + b.startX
            }, E = $(M, this._selectionRenderService), E != null && M != null) {
              s.push({ ...l, sheetTransform: E, transform: M });
              break;
            }
          }
          if (M != null && (E = $(M, this._selectionRenderService)), M != null && E != null) {
            r.push({ ...l, sheetTransform: E, transform: M });
            break;
          } else
            this._remainDrawingSize(h, r, l);
        }
      }
    }), r.length === 0 && s.length === 0)
      return { redos: [], undos: [] };
    const { redos: o, undos: a } = this._createUndoAndRedoMutation(i, t, r), d = [], u = [];
    if (s.length > 0) {
      const { redos: c, undos: l } = this._createUndoAndRedoMutation(i, t, s);
      d.push(...c), u.push(...l);
    }
    return {
      redos: o,
      undos: a,
      preRedos: d,
      preUndos: u
    };
  }
  _createUndoAndRedoMutation(i, t, e) {
    const n = this._sheetDrawingService.getBatchUpdateOp(e), { undo: r, redo: s, objects: o } = n, a = [
      { id: P.id, params: { unitId: i, subUnitId: t, op: s, objects: o, type: U.UPDATE } },
      { id: Y.id, params: [i] }
    ], d = [
      { id: P.id, params: { unitId: i, subUnitId: t, op: r, objects: o, type: U.UPDATE } },
      { id: Y.id, params: [i] }
    ];
    return {
      redos: a,
      undos: d
    };
  }
  // eslint-disable-next-line max-lines-per-function
  _getDrawingUndoForRowVisible(i, t, e) {
    const n = this._drawingManagerService.getDrawingData(i, t), r = [], s = [];
    if (Object.keys(n).forEach((c) => {
      const l = n[c], { sheetTransform: g, transform: h, anchorType: f = O.Position } = l;
      if (f === O.None)
        this._remainDrawingSize(h, r, l);
      else {
        const { from: p, to: m } = g, { row: _, column: v } = p, { row: I, column: R } = m;
        for (let S = 0; S < e.length; S++) {
          const C = e[S], { startRow: w, endRow: y, startColumn: D, endColumn: T } = C;
          if (I < w)
            continue;
          if (f === O.Position) {
            let b = null, N = null;
            if (_ >= w && _ <= y) {
              const x = this._skeletonManagerService.attachRangeWithCoord({ startColumn: p.column, endColumn: m.column, startRow: _, endRow: y });
              if (x == null)
                return;
              N = { ...h, top: x.startY };
            }
            if (N != null && (b = $(N, this._selectionRenderService), b != null && N != null)) {
              r.push({ ...l, sheetTransform: b, transform: N });
              break;
            }
            this._remainDrawingSize(h, r, l);
            continue;
          }
          if (_ >= w && I <= y)
            continue;
          let E = null, M = null;
          if (_ >= w && _ <= y) {
            const b = this._skeletonManagerService.attachRangeWithCoord({ startColumn: p.column, endColumn: m.column, startRow: _, endRow: y });
            if (b == null)
              return;
            M = {
              ...h,
              top: (b == null ? void 0 : b.startY) || 0,
              height: ((h == null ? void 0 : h.height) || 0) - b.endY + b.startY
            };
          } else if (I >= w && I <= y) {
            const b = this._skeletonManagerService.attachRangeWithCoord({ startColumn: p.column, endColumn: m.column, startRow: w, endRow: I });
            if (b == null)
              return;
            M = {
              ...h,
              top: b.startY - ((h == null ? void 0 : h.height) || 0)
            };
          } else {
            const b = this._skeletonManagerService.attachRangeWithCoord({ startColumn: p.column, endColumn: m.column, startRow: w, endRow: y });
            if (b == null)
              return;
            if (M = {
              ...h,
              height: ((h == null ? void 0 : h.height) || 0) - b.endY + b.startY
            }, E = $(M, this._selectionRenderService), E != null && M != null) {
              s.push({ ...l, sheetTransform: E, transform: M });
              break;
            }
          }
          if (M != null && (E = $(M, this._selectionRenderService)), M != null && E != null) {
            r.push({ ...l, sheetTransform: E, transform: M });
            break;
          } else
            this._remainDrawingSize(h, r, l);
        }
      }
    }), r.length === 0 && s.length === 0)
      return { redos: [], undos: [] };
    const { redos: o, undos: a } = this._createUndoAndRedoMutation(i, t, r), d = [], u = [];
    if (s.length > 0) {
      const { redos: c, undos: l } = this._createUndoAndRedoMutation(i, t, s);
      d.push(...c), u.push(...l);
    }
    return {
      redos: o,
      undos: a,
      preRedos: d,
      preUndos: u
    };
  }
  _getDrawingUndoForRowAndColSize(i, t, e, n) {
    const r = this._drawingManagerService.getDrawingData(i, t), s = [];
    return Object.keys(r).forEach((o) => {
      const a = r[o], { sheetTransform: d, transform: u, anchorType: c = O.Position } = a;
      if (c === O.None)
        this._remainDrawingSize(u, s, a);
      else {
        const { from: l, to: g } = d, { row: h, column: f } = l, { row: p, column: m } = g;
        for (let _ = 0; _ < e.length; _++) {
          const v = e[_], { startRow: I, endRow: R, startColumn: S, endColumn: C } = v;
          if (p < I || m < S)
            continue;
          if (c === O.Position && (h <= I && p >= R || f <= S && m >= C)) {
            this._remainDrawingSize(u, s, a);
            continue;
          }
          const w = z({ ...d }, this._selectionRenderService, this._skeletonManagerService);
          if (w != null) {
            s.push({
              ...a,
              transform: w
            });
            break;
          }
        }
      }
    }), s.length === 0 ? { redos: [], undos: [] } : this._createUndoAndRedoMutation(i, t, s);
  }
  _getUnitIdAndSubUnitId(i, t) {
    let e, n;
    if (t === "insert")
      e = i.unitId, n = i.subUnitId;
    else {
      const r = se(this._univerInstanceService);
      if (r == null)
        return;
      e = r.unitId, n = r.subUnitId;
    }
    return { unitId: e, subUnitId: n };
  }
  _moveRangeInterceptor(i) {
    var I, R;
    const { toRange: t, fromRange: e } = i, n = se(this._univerInstanceService);
    if (!n)
      return { redos: [], undos: [] };
    const { unitId: r, subUnitId: s } = n, o = (R = (I = this._renderManagerService.getRenderById(r)) == null ? void 0 : I.with(V)) == null ? void 0 : R.getCurrentSkeleton();
    if (!o)
      return { redos: [], undos: [] };
    const a = Yn(o, e);
    if (!a)
      return { redos: [], undos: [] };
    const { startX: d, endX: u, startY: c, endY: l } = a, g = this._sheetDrawingService.getDrawingData(r, s), h = [];
    Object.keys(g).forEach((S) => {
      const C = g[S];
      if (C.anchorType !== O.Both)
        return;
      const { transform: w } = C;
      if (!w)
        return;
      const { left: y = 0, top: D = 0, width: T = 0, height: E = 0 } = w, { drawingStartX: M, drawingEndX: b, drawingStartY: N, drawingEndY: x } = {
        drawingStartX: y,
        drawingEndX: y + T,
        drawingStartY: D,
        drawingEndY: D + E
      };
      d <= M && b <= u && c <= N && x <= l && h.push(C);
    });
    const f = [], p = [], m = t.startRow - e.startRow, _ = t.startColumn - e.startColumn, v = h.map((S) => {
      const C = S.sheetTransform, w = {
        to: { ...C.to, row: C.to.row + m, column: C.to.column + _ },
        from: { ...C.from, row: C.from.row + m, column: C.from.column + _ }
      }, y = z(w, this._selectionRenderService, this._skeletonManagerService);
      return {
        unitId: r,
        subUnitId: s,
        drawingId: S.drawingId,
        transform: y,
        sheetTransform: w
      };
    });
    if (v.length) {
      const S = this._sheetDrawingService.getBatchUpdateOp(v), { undo: C, redo: w, objects: y } = S;
      f.push({ id: P.id, params: { unitId: r, subUnitId: s, op: w, objects: y, type: U.UPDATE } }), p.push({ id: P.id, params: { unitId: r, subUnitId: s, op: C, objects: y, type: U.UPDATE } });
    }
    return { redos: f, undos: p };
  }
  _moveRowInterceptor(i, t) {
    const e = this._getUnitIdAndSubUnitId(i, t);
    if (e == null)
      return { redos: [], undos: [] };
    const { unitId: n, subUnitId: r } = e, { range: s } = i, o = s.startRow, a = s.endRow, d = [], u = [], c = this._sheetDrawingService.getDrawingData(n, r), l = [], g = [];
    if (Object.keys(c).forEach((h) => {
      const f = c[h], { sheetTransform: p, transform: m, anchorType: _ = O.Position } = f;
      if (p == null || m == null)
        return;
      let v, I;
      if (t === "insert") {
        const S = this._expandRow(p, m, o, a, _);
        v = S == null ? void 0 : S.newSheetTransform, I = S == null ? void 0 : S.newTransform;
      } else {
        const { from: S, to: C } = p, { row: w } = S, { row: y } = C;
        if (_ === O.Both && w >= o && y <= a)
          g.push({ unitId: n, subUnitId: r, drawingId: h });
        else {
          const D = this._shrinkRow(p, m, o, a, _);
          v = D == null ? void 0 : D.newSheetTransform, I = D == null ? void 0 : D.newTransform;
        }
      }
      if (!v || !I)
        return;
      const R = { unitId: n, subUnitId: r, drawingId: h, transform: I, sheetTransform: v };
      l.push(R);
    }), l.length === 0 && g.length === 0)
      return { redos: [], undos: [] };
    if (l.length > 0) {
      const h = this._sheetDrawingService.getBatchUpdateOp(l), { undo: f, redo: p, objects: m } = h;
      d.push({ id: P.id, params: { unitId: n, subUnitId: r, op: p, objects: m, type: U.UPDATE } }), u.push({ id: P.id, params: { unitId: n, subUnitId: r, op: f, objects: m, type: U.UPDATE } });
    }
    if (g.length > 0) {
      const h = this._sheetDrawingService.getBatchRemoveOp(g), f = h.undo, p = h.redo, m = h.objects;
      d.push({ id: P.id, params: { unitId: n, subUnitId: r, op: p, objects: m, type: U.REMOVE } }), u.push({ id: P.id, params: { unitId: n, subUnitId: r, op: f, objects: m, type: U.INSERT } });
    }
    return d.push({ id: Y.id, params: [n] }), u.push({ id: Y.id, params: [n] }), {
      redos: d,
      undos: u
    };
  }
  _moveColInterceptor(i, t) {
    const e = this._getUnitIdAndSubUnitId(i, t);
    if (e == null)
      return { redos: [], undos: [] };
    const { unitId: n, subUnitId: r } = e, { range: s } = i, o = s.startColumn, a = s.endColumn, d = [], u = [], c = this._sheetDrawingService.getDrawingData(n, r), l = [], g = [];
    if (Object.keys(c).forEach((h) => {
      const f = c[h], { sheetTransform: p, transform: m, anchorType: _ = O.Position } = f;
      if (p == null || m == null)
        return;
      let v, I;
      if (t === "insert") {
        const S = this._expandCol(p, m, o, a, _);
        v = S == null ? void 0 : S.newSheetTransform, I = S == null ? void 0 : S.newTransform;
      } else {
        const { from: S, to: C } = p, { column: w } = S, { column: y } = C;
        if (_ === O.Both && w >= o && y <= a)
          g.push({ unitId: n, subUnitId: r, drawingId: h });
        else {
          const D = this._shrinkCol(p, m, o, a, _);
          v = D == null ? void 0 : D.newSheetTransform, I = D == null ? void 0 : D.newTransform;
        }
      }
      if (!v || !I)
        return;
      const R = { unitId: n, subUnitId: r, drawingId: h, transform: I, sheetTransform: v };
      l.push(R);
    }), l.length === 0 && g.length === 0)
      return { redos: [], undos: [] };
    if (l.length > 0) {
      const h = this._sheetDrawingService.getBatchUpdateOp(l), { undo: f, redo: p, objects: m } = h;
      d.push({ id: P.id, params: { unitId: n, subUnitId: r, op: p, objects: m, type: U.UPDATE } }), u.push({ id: P.id, params: { unitId: n, subUnitId: r, op: f, objects: m, type: U.UPDATE } });
    }
    if (g.length > 0) {
      const h = this._sheetDrawingService.getBatchRemoveOp(g), f = h.undo, p = h.redo, m = h.objects;
      d.push({ id: P.id, params: { unitId: n, subUnitId: r, op: p, objects: m, type: U.REMOVE } }), u.push({ id: P.id, params: { unitId: n, subUnitId: r, op: f, objects: m, type: U.INSERT } });
    }
    return d.push({ id: Y.id, params: [n] }), u.push({ id: Y.id, params: [n] }), { redos: d, undos: u };
  }
  _expandCol(i, t, e, n, r = O.Position) {
    const s = n - e + 1, { from: o, to: a } = i, { column: d } = o, { column: u } = a;
    if (r === O.None)
      return {
        newSheetTransform: $({ ...t }, this._selectionRenderService),
        newTransform: t
      };
    let c = null, l = null;
    if (d >= e) {
      const g = this._skeletonManagerService.attachRangeWithCoord({ startColumn: e, endColumn: n, startRow: o.row, endRow: a.row });
      if (g == null)
        return;
      l = { ...t, left: (t.left || 0) + g.endX - g.startX }, c = $(l, this._selectionRenderService);
    } else if (u >= n)
      if (r === O.Both)
        c = {
          from: { ...o },
          to: { ...a, column: u + s }
        }, l = z(c, this._selectionRenderService, this._skeletonManagerService);
      else
        return {
          newSheetTransform: $({ ...t }, this._selectionRenderService),
          newTransform: t
        };
    return c != null && l != null ? {
      newSheetTransform: c,
      newTransform: l
    } : null;
  }
  _shrinkCol(i, t, e, n, r = O.Position) {
    const s = n - e + 1, { from: o, to: a } = i, { column: d } = o, { column: u } = a;
    if (r === O.None)
      return {
        newSheetTransform: $({ ...t }, this._selectionRenderService),
        newTransform: t
      };
    let c = null, l = null;
    if (d > n)
      c = {
        from: { ...o, column: d - s },
        to: { ...a, column: u - s }
      }, l = z(c, this._selectionRenderService, this._skeletonManagerService);
    else {
      if (d >= e && u <= n)
        return null;
      if (d < e && u > n)
        if (r === O.Both)
          c = {
            from: { ...o },
            to: { ...a, column: u - s }
          }, l = z(c, this._selectionRenderService, this._skeletonManagerService);
        else
          return {
            newSheetTransform: $({ ...t }, this._selectionRenderService),
            newTransform: t
          };
      else if (d >= e && d <= n) {
        if (d === e)
          l = { ...t, left: (t.left || 0) - i.from.columnOffset };
        else {
          const g = this._skeletonManagerService.attachRangeWithCoord({ startColumn: e, endColumn: d - 1, startRow: o.row, endRow: a.row });
          if (g == null)
            return;
          l = { ...t, left: (t.left || 0) - g.endX + g.startX - i.from.columnOffset };
        }
        c = $(l, this._selectionRenderService);
      } else if (u >= e && u <= n && r === O.Both) {
        const g = this._skeletonManagerService.attachRangeWithCoord({
          startColumn: e - 1,
          endColumn: e - 1,
          startRow: o.row,
          endRow: a.row
        });
        if (g == null)
          return;
        c = {
          from: { ...o },
          to: { ...a, column: e - 1, columnOffset: g.endX - g.startX }
        }, l = z(c, this._selectionRenderService, this._skeletonManagerService);
      }
    }
    return c != null && l != null ? {
      newSheetTransform: c,
      newTransform: l
    } : null;
  }
  _expandRow(i, t, e, n, r = O.Position) {
    const s = n - e + 1, { from: o, to: a } = i, { row: d } = o, { row: u } = a;
    if (r === O.None)
      return {
        newSheetTransform: $({ ...t }, this._selectionRenderService),
        newTransform: t
      };
    let c = null, l = null;
    if (d >= e) {
      const g = this._skeletonManagerService.attachRangeWithCoord({ startRow: e, endRow: n, startColumn: o.column, endColumn: a.column });
      if (g == null)
        return;
      l = { ...t, top: (t.top || 0) + g.endY - g.startY }, c = $(l, this._selectionRenderService);
    } else if (u >= n)
      if (r === O.Both)
        c = {
          from: { ...o },
          to: {
            ...a,
            row: u + s
          }
        }, l = z(c, this._selectionRenderService, this._skeletonManagerService);
      else
        return {
          newSheetTransform: $({ ...t }, this._selectionRenderService),
          newTransform: t
        };
    return c != null && l != null ? {
      newSheetTransform: c,
      newTransform: l
    } : null;
  }
  _shrinkRow(i, t, e, n, r = O.Position) {
    const s = n - e + 1, { from: o, to: a } = i, { row: d } = o, { row: u } = a;
    if (r === O.None)
      return {
        newSheetTransform: $({ ...t }, this._selectionRenderService),
        newTransform: t
      };
    let c = null, l = null;
    if (d > n)
      c = {
        from: { ...o, row: d - s },
        to: { ...a, row: u - s }
      }, l = z(c, this._selectionRenderService, this._skeletonManagerService);
    else {
      if (d >= e && u <= n)
        return null;
      if (d < e && u > n)
        if (r === O.Both)
          c = {
            from: { ...o },
            to: { ...a, row: u - s }
          }, l = z(c, this._selectionRenderService, this._skeletonManagerService);
        else
          return {
            newSheetTransform: $({ ...t }, this._selectionRenderService),
            newTransform: t
          };
      else if (d >= e && d <= n) {
        if (d === e)
          l = { ...t, top: (t.top || 0) - i.from.rowOffset };
        else {
          const g = this._skeletonManagerService.attachRangeWithCoord({ startRow: e, endRow: d - 1, startColumn: o.column, endColumn: a.column });
          if (g == null)
            return;
          l = { ...t, top: (t.top || 0) - g.endY + g.startY - i.from.rowOffset };
        }
        c = $(l, this._selectionRenderService);
      } else if (u >= e && u <= n && r === O.Both) {
        const g = this._skeletonManagerService.attachRangeWithCoord({ startColumn: o.column, endColumn: o.column, startRow: e - 1, endRow: e - 1 });
        if (g == null)
          return;
        c = {
          from: { ...o },
          to: { ...a, row: e - 1, rowOffset: g.endY - g.startY }
        }, l = z(c, this._selectionRenderService, this._skeletonManagerService);
      }
    }
    return c != null && l != null ? {
      newSheetTransform: c,
      newTransform: l
    } : null;
  }
  _commandListener() {
    this.disposeWithMe(
      // TODO@weird94: this should subscribe to the command service
      // but the skeleton changes like other render modules. These two signals are not equivalent.
      // As a temp solution, I subscribed to activate$ here.
      this._commandService.onCommandExecuted((i) => {
        if (i.id === Ii.id) {
          const { unitId: t, subUnitId: e } = i.params;
          this._updateDrawings(t, e);
        }
      })
    ), this.disposeWithMe(
      this._context.activated$.subscribe((i) => {
        const { unit: t, unitId: e } = this._context;
        if (i) {
          const n = t.getActiveSheet().getSheetId();
          this._updateDrawings(e, n);
        } else
          this._clearDrawings(e);
      })
    );
  }
  _clearDrawings(i) {
    setTimeout(() => {
      const t = this._drawingManagerService.drawingManagerData, e = [];
      Object.keys(t).forEach((n) => {
        const r = t[n];
        r != null && Object.keys(r).forEach((s) => {
          const o = r[s].data;
          o != null && Object.keys(o).forEach((a) => {
            n === i && e.push(o[a]);
          });
        });
      }), this._drawingManagerService.removeNotification(e);
    });
  }
  _updateDrawings(i, t) {
    setTimeout(() => {
      const e = this._drawingManagerService.drawingManagerData, n = [], r = [];
      Object.keys(e).forEach((s) => {
        const o = e[s];
        o != null && Object.keys(o).forEach((a) => {
          const d = o[a].data;
          d != null && Object.keys(d).forEach((u) => {
            if (s === i && a === t) {
              const c = d[u];
              c.transform = z(c.sheetTransform, this._selectionRenderService, this._skeletonManagerService), n.push(d[u]);
            } else
              r.push(d[u]);
          });
        });
      }), this._drawingManagerService.removeNotification(r), this._drawingManagerService.addNotification(n);
    }, 0);
  }
  _sheetRefreshListener() {
    this.disposeWithMe(
      this._commandService.onCommandExecuted((i) => {
        Ns.includes(i.id) && requestIdleCallback(() => {
          const t = i.params, { unitId: e, subUnitId: n, ranges: r } = t;
          this._refreshDrawingTransform(e, n, r);
        });
      })
    );
  }
  _refreshDrawingTransform(i, t, e) {
    const n = this._drawingManagerService.getDrawingData(i, t), r = [];
    Object.keys(n).forEach((s) => {
      const o = n[s], { sheetTransform: a, transform: d, anchorType: u = O.Position } = o;
      if (u === O.None)
        return !0;
      const { from: c, to: l } = a, { row: g, column: h } = c, { row: f, column: p } = l;
      for (let m = 0; m < e.length; m++) {
        const _ = e[m], { startRow: v, endRow: I, startColumn: R, endColumn: S } = _;
        if (ei.intersects(
          {
            startRow: v,
            endRow: I,
            startColumn: R,
            endColumn: S
          },
          {
            startRow: g,
            endRow: f,
            startColumn: h,
            endColumn: p
          }
        ) || g > I || h > S) {
          const C = u === O.Position, w = z(a, this._selectionRenderService, this._skeletonManagerService);
          r.push({
            ...o,
            transform: {
              ...w,
              width: C ? d == null ? void 0 : d.width : w == null ? void 0 : w.width,
              height: C ? d == null ? void 0 : d.height : w == null ? void 0 : w.height
            }
          });
          break;
        }
      }
    }), r.length !== 0 && (this._drawingManagerService.refreshTransform(r), this._commandService.syncExecuteCommand(Y.id, [i]));
  }
};
rn = Ps([
  me(1, J),
  me(2, X),
  me(3, xe),
  me(4, A(V)),
  me(5, A(At)),
  me(6, re),
  me(7, ie),
  me(8, Se)
], rn);
const ks = (i) => {
  var v;
  const t = qe(X), e = qe(nt), n = qe(ie), r = qe(J), { drawings: s } = i, o = s[0];
  if (o == null)
    return;
  const { unitId: a } = o, d = r.getRenderById(a), u = d == null ? void 0 : d.scene;
  if (u == null)
    return;
  const c = u.getTransformerByCreate(), [l, g] = Qt(!0), h = (v = o.anchorType) != null ? v : O.Position, [f, p] = Qt(h);
  function m(I, R) {
    const S = [];
    return I.forEach((C) => {
      const { oKey: w } = C, y = R.getDrawingOKey(w);
      if (y == null)
        return S.push(null), !0;
      const { unitId: D, subUnitId: T, drawingId: E, drawingType: M, anchorType: b, sheetTransform: N } = y;
      S.push({
        unitId: D,
        subUnitId: T,
        drawingId: E,
        anchorType: b,
        sheetTransform: N,
        drawingType: M
      });
    }), S;
  }
  ur(() => {
    const I = c.clearControl$.subscribe((S) => {
      S === !0 && g(!1);
    }), R = c.changeStart$.subscribe((S) => {
      var y;
      const { objects: C } = S, w = m(C, n);
      if (w.length === 0)
        g(!1);
      else if (w.length >= 1) {
        g(!0);
        const D = ((y = w[0]) == null ? void 0 : y.anchorType) || O.Position;
        p(D);
      }
    });
    return () => {
      R.unsubscribe(), I.unsubscribe();
    };
  }, []);
  function _(I) {
    p(I);
    const R = n.getFocusDrawings();
    if (R.length === 0)
      return;
    const S = R.map((C) => ({
      unitId: C.unitId,
      subUnitId: C.subUnitId,
      drawingId: C.drawingId,
      anchorType: I
    }));
    t.executeCommand(Wt.id, {
      unitId: R[0].unitId,
      drawings: S
    });
  }
  return /* @__PURE__ */ qt(
    "div",
    {
      className: bi("univer-grid univer-gap-2 univer-py-2 univer-text-gray-400", {
        "univer-hidden": !l
      }),
      children: [
        /* @__PURE__ */ oe(
          "header",
          {
            className: "univer-text-gray-600 dark:!univer-text-gray-200",
            children: /* @__PURE__ */ oe("div", { children: e.t("drawing-anchor.title") })
          }
        ),
        /* @__PURE__ */ oe("div", { children: /* @__PURE__ */ qt(Mi, { value: f, onChange: _, direction: "vertical", children: [
          /* @__PURE__ */ oe(Yt, { value: O.Both, children: e.t("drawing-anchor.both") }),
          /* @__PURE__ */ oe(Yt, { value: O.Position, children: e.t("drawing-anchor.position") }),
          /* @__PURE__ */ oe(Yt, { value: O.None, children: e.t("drawing-anchor.none") })
        ] }) })
      ]
    }
  );
}, Ws = () => {
  const i = qe(ie), t = i.getFocusDrawings(), [e, n] = Qt(t);
  return ur(() => {
    const r = i.focus$.subscribe((s) => {
      n(s);
    });
    return () => {
      r.unsubscribe();
    };
  }, []), !!(e != null && e.length) && /* @__PURE__ */ qt("div", { className: "univer-text-sm", children: [
    /* @__PURE__ */ oe(zi, { drawings: e }),
    /* @__PURE__ */ oe(ks, { drawings: e })
  ] });
}, Cr = "sheet.menu.image";
function Bs(i) {
  return {
    id: Cr,
    type: cn.SUBITEMS,
    icon: "AddImageIcon",
    tooltip: "sheetImage.title",
    hidden$: an(i, F.UNIVER_SHEET),
    disabled$: Yr(i, { workbookTypes: [zt], worksheetTypes: [Kt], rangeTypes: [Ci] })
  };
}
function js(i) {
  return {
    id: Bt.id,
    title: "sheetImage.upload.float",
    type: cn.BUTTON,
    hidden$: an(i, F.UNIVER_SHEET)
  };
}
function $s(i) {
  return {
    id: dn.id,
    title: "sheetImage.upload.cell",
    type: cn.BUTTON,
    hidden$: an(i, F.UNIVER_SHEET)
  };
}
const Fs = {
  [$i.MEDIA]: {
    [Cr]: {
      order: 0,
      menuItemFactory: Bs,
      [Bt.id]: {
        order: 0,
        menuItemFactory: js
      },
      [dn.id]: {
        order: 1,
        menuItemFactory: $s
      }
    }
  }
};
function st(i) {
  return !i.getContextValue(ti) && !i.getContextValue(ni) && !i.getContextValue(ri) && i.getContextValue($e);
}
const xs = {
  id: it.id,
  description: "shortcut.drawing-move-down",
  group: "4_drawing-view",
  binding: Fe.ARROW_DOWN,
  priority: 100,
  preconditions: st,
  staticParameters: {
    direction: _e.DOWN
  }
}, Ys = {
  id: it.id,
  description: "shortcut.drawing-move-up",
  group: "4_drawing-view",
  binding: Fe.ARROW_UP,
  priority: 100,
  preconditions: st,
  staticParameters: {
    direction: _e.UP
  }
}, Gs = {
  id: it.id,
  description: "shortcut.drawing-move-left",
  group: "4_drawing-view",
  binding: Fe.ARROW_LEFT,
  priority: 100,
  preconditions: st,
  staticParameters: {
    direction: _e.LEFT
  }
}, Xs = {
  id: it.id,
  description: "shortcut.drawing-move-right",
  group: "4_drawing-view",
  binding: Fe.ARROW_RIGHT,
  priority: 100,
  preconditions: st,
  staticParameters: {
    direction: _e.RIGHT
  }
}, Ls = {
  id: hr.id,
  description: "shortcut.drawing-delete",
  group: "4_drawing-view",
  // when focusing on any other input tag do not trigger this shortcut
  preconditions: st,
  binding: Fe.DELETE,
  mac: Fe.BACKSPACE
};
var Vs = Object.getOwnPropertyDescriptor, Hs = (i, t, e, n) => {
  for (var r = n > 1 ? void 0 : n ? Vs(t, e) : t, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (r = o(r) || r);
  return r;
}, Ne = (i, t) => (e, n) => t(e, n, i);
let Ut = class extends ne {
  constructor(i, t, e, n, r, s) {
    super(), this._componentManager = i, this._menuManagerService = t, this._commandService = e, this._shortcutService = n, this._drawingManagerService = r, this._sheetsSelectionsService = s, this._init();
  }
  _initCustomComponents() {
    const i = this._componentManager;
    this.disposeWithMe(i.register(pr, Ws));
  }
  _initMenus() {
    this._menuManagerService.mergeMenu(Fs);
  }
  _initCommands() {
    [
      Bt,
      dn,
      kt,
      rt,
      Wt,
      wr,
      Y,
      _r,
      gr,
      mr,
      it,
      hr,
      fr
    ].forEach((i) => this.disposeWithMe(this._commandService.registerCommand(i)));
  }
  _initShortcuts() {
    [
      // sheet drawing shortcuts
      xs,
      Ys,
      Gs,
      Xs,
      Ls
    ].forEach((i) => {
      this.disposeWithMe(this._shortcutService.registerShortcut(i));
    });
  }
  _init() {
    this._initCommands(), this._initCustomComponents(), this._initMenus(), this._initShortcuts();
  }
};
Ut = Hs([
  Ne(0, A(dr)),
  Ne(1, Fi),
  Ne(2, X),
  Ne(3, xi),
  Ne(4, ie),
  Ne(5, A(on))
], Ut);
var zs = Object.defineProperty, Ks = Object.getOwnPropertyDescriptor, Js = (i, t, e) => t in i ? zs(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, Zs = (i, t, e, n) => {
  for (var r = n > 1 ? void 0 : n ? Ks(t, e) : t, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (r = o(r) || r);
  return r;
}, Lt = (i, t) => (e, n) => t(e, n, i), Dr = (i, t, e) => Js(i, typeof t != "symbol" ? t + "" : t, e);
const qs = "SHEET_IMAGE_UI_PLUGIN";
let Pt = class extends oi {
  constructor(i = jn, t, e, n) {
    super(), this._config = i, this._injector = t, this._renderManagerService = e, this._configService = n;
    const { menu: r, ...s } = ai(
      {},
      jn,
      this._config
    );
    r && this._configService.setConfig("menu", r, { merge: !0 }), this._configService.setConfig(ss, s);
  }
  onStarting() {
    ci(this._injector, [
      [tt],
      [Ut],
      [Rt],
      [Ot],
      [Et],
      [Tt],
      [bt],
      [Mt],
      [yt]
    ]), xt(this._injector, [
      [tt]
    ]);
  }
  onReady() {
    xt(this._injector, [
      [Tt],
      [yt]
    ]);
  }
  onRendered() {
    this._registerRenderModules(), xt(this._injector, [
      [Et],
      [Ot],
      [Ut],
      [bt],
      [Mt]
    ]);
  }
  onSteady() {
    this._injector.get(Rt);
  }
  _registerRenderModules() {
    [
      [et],
      [rn],
      [nn],
      [tn]
    ].forEach((i) => {
      this.disposeWithMe(this._renderManagerService.registerRenderModule(F.UNIVER_SHEET, i));
    });
  }
};
Dr(Pt, "type", F.UNIVER_SHEET);
Dr(Pt, "pluginName", qs);
Pt = Zs([
  ii(Ui, Gi, Ki, di),
  Lt(1, A(Ge)),
  Lt(2, J),
  Lt(3, si)
], Pt);
export {
  Y as ClearSheetDrawingTransformerOperation,
  hr as DeleteDrawingsCommand,
  _r as EditSheetDrawingOperation,
  gr as GroupSheetDrawingCommand,
  Bt as InsertFloatImageCommand,
  kt as InsertSheetDrawingCommand,
  it as MoveDrawingsCommand,
  rt as RemoveSheetDrawingCommand,
  Cr as SHEETS_IMAGE_MENU_ID,
  fr as SetDrawingArrangeCommand,
  Wt as SetSheetDrawingCommand,
  tt as SheetCanvasFloatDomManagerService,
  et as SheetDrawingUpdateController,
  wr as SidebarSheetDrawingOperation,
  mr as UngroupSheetDrawingCommand,
  Pt as UniverSheetsDrawingUIPlugin,
  ge as calcSheetFloatDomPosition,
  z as drawingPositionToTransform,
  $ as transformToDrawingPosition
};
