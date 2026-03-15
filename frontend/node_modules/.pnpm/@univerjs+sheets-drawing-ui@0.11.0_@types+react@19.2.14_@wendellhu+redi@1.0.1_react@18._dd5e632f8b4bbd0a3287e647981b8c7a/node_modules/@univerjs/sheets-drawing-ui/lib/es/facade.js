var q = Object.defineProperty;
var J = (o, r, t) => r in o ? q(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t;
var P = (o, r, t) => J(o, typeof r != "symbol" ? r + "" : r, t);
import { Inject as H, Injector as K, ICommandService as N, ImageSourceType as E, ArrangeTypeEnum as C, DrawingTypeEnum as I, generateRandomId as Q, toDisposable as T, CanceledError as S, UniverInstanceType as Z, IUniverInstanceService as ee } from "@univerjs/core";
import { FBase as te, FEnum as z, FEventName as X, FUniver as Y } from "@univerjs/core/facade";
import { getImageSize as re, IDrawingManagerService as p, SetDrawingSelectedOperation as W } from "@univerjs/drawing";
import { IRenderManagerService as y, getCurrentTypeOfRenderer as ie } from "@univerjs/engine-render";
import { RemoveSheetDrawingCommand as k, SetSheetDrawingCommand as f, SetDrawingArrangeCommand as R, SheetCanvasFloatDomManagerService as D, transformToDrawingPosition as j, InsertSheetDrawingCommand as b, SheetDrawingUpdateController as ne } from "@univerjs/sheets-drawing-ui";
import { SheetSkeletonManagerService as M, ISheetSelectionRenderService as A, convertPositionSheetOverGridToAbsolute as oe, convertPositionCellToSheetOverGrid as se } from "@univerjs/sheets-ui";
import { ISheetDrawingService as w, SheetDrawingAnchorType as ae } from "@univerjs/sheets-drawing";
import { transformComponentKey as U } from "@univerjs/sheets-ui/facade";
import { FWorksheet as $, FRange as L } from "@univerjs/sheets/facade";
import { ComponentManager as G } from "@univerjs/ui";
var de = Object.getOwnPropertyDescriptor, V = (o, r, t, e) => {
  for (var i = e > 1 ? void 0 : e ? de(r, t) : r, n = o.length - 1, s; n >= 0; n--)
    (s = o[n]) && (i = s(i) || i);
  return i;
}, x = (o, r) => (t, e) => r(t, e, o);
function ce(o, r) {
  const { from: t, to: e, flipY: i = !1, flipX: n = !1, angle: s = 0, skewX: a = 0, skewY: d = 0 } = o.sheetTransform, { column: g, columnOffset: c, row: m, rowOffset: l } = t, _ = oe(
    o.unitId,
    o.subUnitId,
    { from: t, to: e },
    r
  ), { width: h, height: u } = _;
  return {
    ...o,
    column: g,
    columnOffset: c,
    row: m,
    rowOffset: l,
    width: h,
    height: u,
    flipY: i,
    flipX: n,
    angle: s,
    skewX: a,
    skewY: d
  };
}
function ge(o, r, t) {
  const { column: e, columnOffset: i, row: n, rowOffset: s, flipY: a = !1, flipX: d = !1, angle: g = 0, skewX: c = 0, skewY: m = 0, width: l, height: _ } = o, h = se(
    o.unitId,
    o.subUnitId,
    { column: e, columnOffset: i, row: n, rowOffset: s },
    l,
    _,
    r,
    t
  ), { sheetTransform: u, transform: B } = h;
  return {
    ...o,
    sheetTransform: {
      ...u,
      flipY: a,
      flipX: d,
      angle: g,
      skewX: c,
      skewY: m
    },
    transform: {
      ...B,
      flipY: a,
      flipX: d,
      angle: g,
      skewX: c,
      skewY: m
    }
  };
}
let F = class {
  constructor(o, r, t) {
    P(this, "_image");
    this._injector = t, this._image = {
      drawingId: Q(6),
      drawingType: I.DRAWING_IMAGE,
      imageSourceType: E.BASE64,
      source: "",
      unitId: o,
      subUnitId: r,
      column: 0,
      columnOffset: 0,
      row: 0,
      rowOffset: 0,
      width: 0,
      height: 0
    };
  }
  /**
   * Set the initial image configuration for the image builder.
   * @param {ISheetImage} image - The image configuration
   * @returns {FOverGridImageBuilder} The `FOverGridImageBuilder` for chaining
   * @example
   * ```ts
   * // create a new image builder and set initial image configuration.
   * // then build `ISheetImage` and insert it into the sheet, position is start from F6 cell.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = await fWorksheet.newOverGridImage()
   *   .setImage({
   *     drawingId: '123456',
   *     drawingType: univerAPI.Enum.DrawingType.DRAWING_IMAGE,
   *     imageSourceType: univerAPI.Enum.ImageSourceType.BASE64,
   *     source: 'https://avatars.githubusercontent.com/u/61444807?s=48&v=4',
   *     unitId: fWorkbook.getId(),
   *     subUnitId: fWorksheet.getSheetId(),
   *   })
   *   .setColumn(5)
   *   .setRow(5)
   *   .buildAsync();
   * fWorksheet.insertImages([image]);
   * ```
   */
  setImage(o) {
    const t = this._injector.get(y).getRenderById(o.unitId);
    if (!t)
      throw new Error(`Render Unit with unitId ${o.unitId} not found`);
    const e = t.with(M);
    return o.sheetTransform == null && (o.sheetTransform = {
      from: {
        column: 0,
        columnOffset: 0,
        row: 0,
        rowOffset: 0
      },
      to: {
        column: 0,
        columnOffset: 0,
        row: 0,
        rowOffset: 0
      }
    }), this._image = ce(o, e), this;
  }
  setSource(o, r) {
    const t = r != null ? r : E.URL;
    return this._image.source = o, this._image.imageSourceType = t, this;
  }
  /**
   * Get the source of the image
   * @returns {string} The source of the image
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const images = fWorksheet.getImages();
   * images.forEach((image) => {
   *   console.log(image, image.toBuilder().getSource());
   * });
   * ```
   */
  getSource() {
    return this._image.source;
  }
  /**
   * Get the source type of the image
   * @returns {ImageSourceType} The source type of the image
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const images = fWorksheet.getImages();
   * images.forEach((image) => {
   *   console.log(image, image.toBuilder().getSourceType());
   * });
   * ```
   */
  getSourceType() {
    return this._image.imageSourceType;
  }
  /**
   * Set the horizontal position of the image
   * @param {number} column - The column index of the image start position, start at 0
   * @returns {FOverGridImageBuilder} The `FOverGridImageBuilder` for chaining
   * @example
   * ```ts
   * // create a new image builder and set image source.
   * // then build `ISheetImage` and insert it into the sheet, position is start from F6 cell.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = await fWorksheet.newOverGridImage()
   *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
   *   .setColumn(5)
   *   .setRow(5)
   *   .buildAsync();
   * fWorksheet.insertImages([image]);
   * ```
   */
  setColumn(o) {
    return this._image.column = o, this;
  }
  /**
   * Set the vertical position of the image
   * @param {number} row - The row index of the image start position, start at 0
   * @returns {FOverGridImageBuilder} The `FOverGridImageBuilder` for chaining
   * @example
   * ```ts
   * // create a new image builder and set image source.
   * // then build `ISheetImage` and insert it into the sheet, position is start from F6 cell.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = await fWorksheet.newOverGridImage()
   *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
   *   .setColumn(5)
   *   .setRow(5)
   *   .buildAsync();
   * fWorksheet.insertImages([image]);
   * ```
   */
  setRow(o) {
    return this._image.row = o, this;
  }
  /**
   * Set the horizontal offset of the image
   * @param {number} offset - The column offset of the image start position, pixel unit
   * @returns {FOverGridImageBuilder} The `FOverGridImageBuilder` for chaining
   * @example
   * ```ts
   * // create a new image builder and set image source.
   * // then build `ISheetImage` and insert it into the sheet, position is start from F6 cell and horizontal offset is 10px.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = await fWorksheet.newOverGridImage()
   *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
   *   .setColumn(5)
   *   .setRow(5)
   *   .setColumnOffset(10)
   *   .buildAsync();
   * fWorksheet.insertImages([image]);
   * ```
   */
  setColumnOffset(o) {
    return this._image.columnOffset = o, this;
  }
  /**
   * Set the vertical offset of the image
   * @param {number} offset - The row offset of the image start position, pixel unit
   * @returns {FOverGridImageBuilder} The `FOverGridImageBuilder` for chaining
   * @example
   * ```ts
   * // create a new image builder and set image source.
   * // then build `ISheetImage` and insert it into the sheet, position is start from F6 cell and vertical offset is 10px.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = await fWorksheet.newOverGridImage()
   *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
   *   .setColumn(5)
   *   .setRow(5)
   *   .setRowOffset(10)
   *   .buildAsync();
   * fWorksheet.insertImages([image]);
   * ```
   */
  setRowOffset(o) {
    return this._image.rowOffset = o, this;
  }
  /**
   * Set the width of the image
   * @param {number} width - The width of the image, pixel unit
   * @returns {FOverGridImageBuilder} The `FOverGridImageBuilder` for chaining
   * @example
   * ```ts
   * // create a new image builder and set image source.
   * // then build `ISheetImage` and insert it into the sheet, position is start from F6 cell, width is 120px and height is 50px.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = await fWorksheet.newOverGridImage()
   *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
   *   .setColumn(5)
   *   .setRow(5)
   *   .setWidth(120)
   *   .setHeight(50)
   *   .buildAsync();
   * fWorksheet.insertImages([image]);
   * ```
   */
  setWidth(o) {
    return this._image.width = o, this;
  }
  /**
   * Set the height of the image
   * @param {number} height - The height of the image, pixel unit
   * @returns {FOverGridImageBuilder} The `FOverGridImageBuilder` for chaining
   * @example
   * ```ts
   * // create a new image builder and set image source.
   * // then build `ISheetImage` and insert it into the sheet, position is start from F6 cell, width is 120px and height is 50px.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = await fWorksheet.newOverGridImage()
   *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
   *   .setColumn(5)
   *   .setRow(5)
   *   .setWidth(120)
   *   .setHeight(50)
   *   .buildAsync();
   * fWorksheet.insertImages([image]);
   * ```
   */
  setHeight(o) {
    return this._image.height = o, this;
  }
  /**
   * Set the anchor type of the image, whether the position and size change with the cell
   * @param {SheetDrawingAnchorType} anchorType - The anchor type of the image
   * @returns {FOverGridImageBuilder} The `FOverGridImageBuilder` for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // image1 position is start from A6 cell, anchor type is Position.
   * // Only the position of the drawing follows the cell changes. When rows or columns are inserted or deleted, the position of the drawing changes, but the size remains the same.
   * const image1 = await fWorksheet.newOverGridImage()
   *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
   *   .setColumn(0)
   *   .setRow(5)
   *   .setAnchorType(univerAPI.Enum.SheetDrawingAnchorType.Position)
   *   .buildAsync();
   *
   * // image2 position is start from C6 cell, anchor type is Both.
   * // The size and position of the drawing follow the cell changes. When rows or columns are inserted or deleted, the size and position of the drawing change accordingly.
   * const image2 = await fWorksheet.newOverGridImage()
   *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
   *   .setColumn(2)
   *   .setRow(5)
   *   .setAnchorType(univerAPI.Enum.SheetDrawingAnchorType.Both)
   *   .buildAsync();
   *
   * // image3 position is start from E6 cell, anchor type is None.
   * // The size and position of the drawing do not follow the cell changes. When rows or columns are inserted or deleted, the position and size of the drawing remain unchanged.
   * const image3 = await fWorksheet.newOverGridImage()
   *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
   *   .setColumn(4)
   *   .setRow(5)
   *   .setAnchorType(univerAPI.Enum.SheetDrawingAnchorType.None)
   *   .buildAsync();
   *
   * // insert images into the sheet
   * fWorksheet.insertImages([image1, image2, image3]);
   *
   * // after 2 seconds, set the row height of the 5th row to 100px and insert a row before the 5th row.
   * // then observe the position and size changes of the images.
   * setTimeout(() => {
   *   fWorksheet.setRowHeight(5, 100).insertRowBefore(5);
   * }, 2000);
   * ```
   */
  setAnchorType(o) {
    return this._image.anchorType = o, this;
  }
  /**
   * Set the cropping region of the image by defining the top edges, thereby displaying the specific part of the image you want.
   * @param {number} top - The number of pixels to crop from the top of the image
   * @returns {FOverGridImageBuilder} The `FOverGridImageBuilder` for chaining
   * @example
   * ```ts
   * // create a new image builder and set image source.
   * // then build `ISheetImage` and insert it into the sheet, position is start from F6 cell, top crop is 10px.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = await fWorksheet.newOverGridImage()
   *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
   *   .setColumn(5)
   *   .setRow(5)
   *   .setCropTop(10)
   *   .buildAsync();
   * fWorksheet.insertImages([image]);
   * ```
   */
  setCropTop(o) {
    return this._initializeSrcRect(), this._image.srcRect.top = o, this;
  }
  /**
   * Set the cropping region of the image by defining the left edges, thereby displaying the specific part of the image you want.
   * @param {number} left - The number of pixels to crop from the left side of the image
   * @returns {FOverGridImageBuilder} The `FOverGridImageBuilder` for chaining
   * @example
   * ```ts
   * // create a new image builder and set image source.
   * // then build `ISheetImage` and insert it into the sheet, position is start from F6 cell, left crop is 10px.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = await fWorksheet.newOverGridImage()
   *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
   *   .setColumn(5)
   *   .setRow(5)
   *   .setCropLeft(10)
   *   .buildAsync();
   * fWorksheet.insertImages([image]);
   * ```
   */
  setCropLeft(o) {
    return this._initializeSrcRect(), this._image.srcRect.left = o, this;
  }
  /**
   * Set the cropping region of the image by defining the bottom edges, thereby displaying the specific part of the image you want.
   * @param {number} bottom - The number of pixels to crop from the bottom of the image
   * @returns {FOverGridImageBuilder} The `FOverGridImageBuilder` for chaining
   * @example
   * ```ts
   * // create a new image builder and set image source.
   * // then build `ISheetImage` and insert it into the sheet, position is start from F6 cell, bottom crop is 10px.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = await fWorksheet.newOverGridImage()
   *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
   *   .setColumn(5)
   *   .setRow(5)
   *   .setCropBottom(10)
   *   .buildAsync();
   * fWorksheet.insertImages([image]);
   * ```
   */
  setCropBottom(o) {
    return this._initializeSrcRect(), this._image.srcRect.bottom = o, this;
  }
  /**
   * Set the cropping region of the image by defining the right edges, thereby displaying the specific part of the image you want.
   * @param {number} right - The number of pixels to crop from the right side of the image
   * @returns {FOverGridImageBuilder} The `FOverGridImageBuilder` for chaining
   * @example
   * ```ts
   * // create a new image builder and set image source.
   * // then build `ISheetImage` and insert it into the sheet, position is start from F6 cell, right crop is 10px.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = await fWorksheet.newOverGridImage()
   *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
   *   .setColumn(5)
   *   .setRow(5)
   *   .setCropRight(10)
   *   .buildAsync();
   * fWorksheet.insertImages([image]);
   * ```
   */
  setCropRight(o) {
    return this._initializeSrcRect(), this._image.srcRect.right = o, this;
  }
  _initializeSrcRect() {
    this._image.srcRect == null && (this._image.srcRect = {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    });
  }
  /**
   * Set the rotation angle of the image
   * @param {number} angle - Degree of rotation of the image, for example, 90, 180, 270, etc.
   * @returns {FOverGridImageBuilder} The `FOverGridImageBuilder` for chaining
   * @example
   * ```ts
   * // create a new image builder and set image source.
   * // then build `ISheetImage` and insert it into the sheet, position is start from F6 cell, rotate 90 degrees.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = await fWorksheet.newOverGridImage()
   *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
   *   .setColumn(5)
   *   .setRow(5)
   *   .setRotate(90)
   *   .buildAsync();
   * fWorksheet.insertImages([image]);
   * ```
   */
  setRotate(o) {
    return this._image.angle = o, this;
  }
  setUnitId(o) {
    return this._image.unitId = o, this;
  }
  setSubUnitId(o) {
    return this._image.subUnitId = o, this;
  }
  async buildAsync() {
    const r = this._injector.get(y).getRenderById(this._image.unitId);
    if (!r)
      throw new Error(`Render Unit with unitId ${this._image.unitId} not found`);
    const t = r.with(A), e = r.with(M);
    if (this._image.width === 0 || this._image.height === 0) {
      const i = await re(this._image.source), n = i.width, s = i.height;
      this._image.width === 0 && (this._image.width = n), this._image.height === 0 && (this._image.height = s);
    }
    return ge(this._image, t, e);
  }
};
F = V([
  x(2, H(K))
], F);
let v = class extends te {
  constructor(o, r, t) {
    super(), this._image = o, this._commandService = r, this._injector = t;
  }
  /**
   * Get the id of the image
   * @returns {string} The id of the image
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const images = fWorksheet.getImages();
   * images.forEach((image) => {
   *   console.log(image, image.getId());
   * });
   * ```
   */
  getId() {
    return this._image.drawingId;
  }
  /**
   * Get the drawing type of the image
   * @returns {DrawingTypeEnum} The drawing type of the image
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const images = fWorksheet.getImages();
   * images.forEach((image) => {
   *   console.log(image, image.getType());
   * });
   * ```
   */
  getType() {
    return this._image.drawingType;
  }
  /**
   * Remove the image from the sheet
   * @returns {boolean} true if the image is removed successfully, otherwise false
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = fWorksheet.getImages()[0];
   * const result = image?.remove();
   * console.log(result);
   * ```
   */
  remove() {
    return this._commandService.syncExecuteCommand(k.id, { unitId: this._image.unitId, drawings: [this._image] });
  }
  /**
   * Convert the image to a FOverGridImageBuilder
   * @returns {FOverGridImageBuilder} The builder FOverGridImageBuilder
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const images = fWorksheet.getImages();
   * images.forEach((image) => {
   *   console.log(image, image.toBuilder().getSource());
   * });
   * ```
   */
  toBuilder() {
    const o = this._injector.createInstance(F);
    return o.setImage(this._image), o;
  }
  setSource(o, r) {
    const t = r != null ? r : E.URL;
    return this._image.source = o, this._image.imageSourceType = t, this._commandService.syncExecuteCommand(f.id, { unitId: this._image.unitId, drawings: [this._image] });
  }
  async setPositionAsync(o, r, t, e) {
    const i = this.toBuilder();
    i.setColumn(r), i.setRow(o), t != null && i.setRowOffset(t), e != null && i.setColumnOffset(e);
    const n = await i.buildAsync();
    return this._commandService.syncExecuteCommand(f.id, { unitId: this._image.unitId, drawings: [n] });
  }
  /**
   * Set the size of the image
   * @param {number} width - The width of the image, pixel unit
   * @param {number} height - The height of the image, pixel unit
   * @returns {boolean} true if the size is set successfully, otherwise false
   * @example
   * ```ts
   * // set the image width 120px and height 50px
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = fWorksheet.getImages()[0];
   * const result = image?.setSizeAsync(120, 50);
   * console.log(result);
   * ```
   */
  async setSizeAsync(o, r) {
    const t = this.toBuilder();
    t.setWidth(o), t.setHeight(r);
    const e = await t.buildAsync();
    return this._commandService.syncExecuteCommand(f.id, { unitId: this._image.unitId, drawings: [e] });
  }
  /**
   * Set the cropping region of the image by defining the top, bottom, left, and right edges, thereby displaying the specific part of the image you want.
   * @param {number} top - The number of pixels to crop from the top of the image
   * @param {number} left - The number of pixels to crop from the left side of the image
   * @param {number} bottom - The number of pixels to crop from the bottom of the image
   * @param {number} right - The number of pixels to crop from the right side of the image
   * @returns {boolean} true if the crop is set successfully, otherwise false
   * @example
   * ```ts
   * // set the crop of the image, top 10px, left 10px, bottom 10px, right 10px.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = fWorksheet.getImages()[0];
   * const result = image?.setCrop(10, 10, 10, 10);
   * console.log(result);
   * ```
   */
  setCrop(o, r, t, e) {
    return this._image.srcRect == null && (this._image.srcRect = {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    }), o != null && (this._image.srcRect.top = o), r != null && (this._image.srcRect.left = r), t != null && (this._image.srcRect.bottom = t), e != null && (this._image.srcRect.right = e), this._commandService.syncExecuteCommand(f.id, { unitId: this._image.unitId, drawings: [this._image] });
  }
  /**
   * Set the rotation angle of the image
   * @param {number} angle - Degree of rotation of the image, for example, 90, 180, 270, etc.
   * @returns {boolean} true if the rotation is set successfully, otherwise false
   * @example
   * ```ts
   * // set 90 degrees rotation of the image
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = fWorksheet.getImages()[0];
   * const result = image?.setRotate(90);
   * console.log(result);
   * ```
   */
  setRotate(o) {
    return this._image.sheetTransform.angle = o, this._image.transform && (this._image.transform.angle = o), this._commandService.syncExecuteCommand(f.id, { unitId: this._image.unitId, drawings: [this._image] });
  }
  /**
   * Move the image layer forward by one level
   * @returns {boolean} true if the image is moved forward successfully, otherwise false
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = fWorksheet.getImages()[0];
   * const result = image?.setForward();
   * console.log(result);
   * ```
   */
  setForward() {
    return this._commandService.syncExecuteCommand(R.id, {
      unitId: this._image.unitId,
      subUnitId: this._image.subUnitId,
      drawingIds: [this._image.drawingId],
      arrangeType: C.forward
    });
  }
  /**
   * Move the image layer backward by one level
   * @returns {boolean} true if the image is moved backward successfully, otherwise false
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = fWorksheet.getImages()[0];
   * const result = image?.setBackward();
   * console.log(result);
   * ```
   */
  setBackward() {
    return this._commandService.syncExecuteCommand(R.id, {
      unitId: this._image.unitId,
      subUnitId: this._image.subUnitId,
      drawingIds: [this._image.drawingId],
      arrangeType: C.backward
    });
  }
  /**
   * Move the image layer to the bottom layer
   * @returns {boolean} true if the image is moved to the bottom layer successfully, otherwise false
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = fWorksheet.getImages()[0];
   * const result = image?.setBack();
   * console.log(result);
   * ```
   */
  setBack() {
    return this._commandService.syncExecuteCommand(R.id, {
      unitId: this._image.unitId,
      subUnitId: this._image.subUnitId,
      drawingIds: [this._image.drawingId],
      arrangeType: C.back
    });
  }
  /**
   * Move the image layer to the top layer
   * @returns {boolean} true if the image is moved to the top layer successfully, otherwise false
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const image = fWorksheet.getImages()[0];
   * const result = image?.setFront();
   * console.log(result);
   * ```
   */
  setFront() {
    return this._commandService.syncExecuteCommand(R.id, {
      unitId: this._image.unitId,
      subUnitId: this._image.subUnitId,
      drawingIds: [this._image.drawingId],
      arrangeType: C.front
    });
  }
};
v = V([
  x(1, N),
  x(2, H(K))
], v);
class me extends $ {
  getFloatDomById(r) {
    const e = this._injector.get(D).getFloatDomInfo(r);
    if (!e) return null;
    const { unitId: i, subUnitId: n } = e, { rect: s } = e, a = s.getState(), { left: d = 0, top: g = 0, width: c = 0, height: m = 0, flipX: l = !1, flipY: _ = !1, angle: h = 0, skewX: u = 0, skewY: B = 0 } = a, O = this._injector.get(w).getDrawingByParam({
      drawingId: e.id,
      unitId: i,
      subUnitId: n
    });
    return O ? {
      position: {
        left: d,
        top: g,
        width: c,
        height: m,
        flipX: l,
        flipY: _,
        angle: h,
        skewX: u,
        skewY: B
      },
      componentKey: O.componentKey,
      allowTransform: O.allowTransform,
      data: O.data,
      id: e.id
    } : null;
  }
  getAllFloatDoms() {
    const r = this._injector.get(D), t = this._workbook.getUnitId(), e = this._worksheet.getSheetId();
    return Array.from(r.getFloatDomsBySubUnitId(t, e).values()).map((i) => {
      const { rect: n } = i, s = this._injector.get(w).getDrawingByParam({
        drawingId: i.id,
        unitId: t,
        subUnitId: e
      }), { left: a, top: d, width: g, height: c, flipX: m, flipY: l, angle: _, skewX: h, skewY: u } = n.getState();
      return {
        position: {
          left: a,
          top: d,
          width: g,
          height: c,
          flipX: m,
          flipY: l,
          angle: _,
          skewX: h,
          skewY: u
        },
        componentKey: s.componentKey,
        allowTransform: s.allowTransform,
        data: s.data,
        id: i.id
      };
    });
  }
  updateFloatDom(r, t) {
    var h, u;
    const i = this._injector.get(D).getFloatDomInfo(r);
    if (!i) return this;
    const { unitId: n, subUnitId: s } = i, a = this._injector.get(w).getDrawingByParam({
      unitId: n,
      subUnitId: s,
      drawingId: r
    }), d = this._injector.get(y);
    if (!d.getRenderById(n)) return this;
    if (!this.getSkeleton()) return this;
    const m = (h = d.getRenderById(this.getWorkbook().getUnitId())) == null ? void 0 : h.with(A);
    if (!m) return this;
    const l = {
      ...a,
      componentKey: t.componentKey || a.componentKey,
      allowTransform: t.allowTransform !== void 0 ? t.allowTransform : a.allowTransform,
      data: t.data || a.data,
      sheetTransform: t.position && (u = j(
        t.position,
        m
      )) != null ? u : a.sheetTransform,
      transform: {
        ...a.transform,
        ...t.position
        // Merge with existing transform
      }
    };
    if (!this._commandService.syncExecuteCommand(f.id, { unitId: n, subUnitId: s, drawings: [l] }))
      throw new Error("updateFloatDom failed");
    return this;
  }
  batchUpdateFloatDoms(r) {
    var s;
    const t = this._injector.get(D), e = this._injector.get(w), i = this._injector.get(y), n = [];
    for (const a of r) {
      const d = t.getFloatDomInfo(a.id);
      if (!d) continue;
      const { unitId: g, subUnitId: c } = d, m = e.getDrawingByParam({
        unitId: g,
        subUnitId: c,
        drawingId: a.id
      });
      if (!m) continue;
      const l = i.getRenderById(g);
      if (!l || !this.getSkeleton()) continue;
      const h = l.with(A);
      if (!h) return this;
      const u = {
        ...m,
        componentKey: a.config.componentKey || m.componentKey,
        allowTransform: a.config.allowTransform !== void 0 ? a.config.allowTransform : m.allowTransform,
        data: a.config.data || m.data,
        sheetTransform: a.config.position && (s = j(
          a.config.position,
          h
        )) != null ? s : m.sheetTransform,
        transform: {
          ...m.transform,
          ...a.config.position
          // Merge with existing transform
        }
      };
      n.push(u);
    }
    if (n.length > 0) {
      const a = this._workbook.getUnitId(), d = this._worksheet.getSheetId();
      if (!this._commandService.syncExecuteCommand(f.id, { unitId: a, subUnitId: d, drawings: n }))
        throw new Error("batchUpdateFloatDoms failed");
    }
    return this;
  }
  removeFloatDom(r) {
    const e = this._injector.get(D).getFloatDomInfo(r);
    if (!e) return this;
    const { unitId: i, subUnitId: n } = e, a = this._injector.get(w).getDrawingByParam({
      unitId: i,
      subUnitId: n,
      drawingId: r
    });
    if (!a) return this;
    if (!this._commandService.syncExecuteCommand(k.id, {
      unitId: i,
      drawings: [a]
    }))
      throw new Error("removeFloatDom failed");
    return this;
  }
  addFloatDomToPosition(r, t) {
    const e = this._workbook.getUnitId(), i = this._worksheet.getSheetId(), { key: n, disposableCollection: s } = U(r, this._injector.get(G)), d = this._injector.get(D).addFloatDomToPosition({ ...r, componentKey: n, unitId: e, subUnitId: i }, t);
    return d ? (s.add(d.dispose), {
      id: d.id,
      dispose: () => {
        s.dispose(), d.dispose();
      }
    }) : (s.dispose(), null);
  }
  addFloatDomToRange(r, t, e, i) {
    const n = this._workbook.getUnitId(), s = this._worksheet.getSheetId(), { key: a, disposableCollection: d } = U(t, this._injector.get(G)), c = this._injector.get(D).addFloatDomToRange(r.getRange(), { ...t, componentKey: a, unitId: n, subUnitId: s }, e, i);
    return c ? (d.add(c.dispose), {
      id: c.id,
      dispose: () => {
        d.dispose(), c.dispose();
      }
    }) : (d.dispose(), null);
  }
  addFloatDomToColumnHeader(r, t, e, i) {
    const n = this._workbook.getUnitId(), s = this._worksheet.getSheetId(), { key: a, disposableCollection: d } = U(t, this._injector.get(G)), c = this._injector.get(D).addFloatDomToColumnHeader(r, { ...t, componentKey: a, unitId: n, subUnitId: s }, e, i);
    return c ? (d.add(c.dispose), {
      id: c.id,
      dispose: () => {
        d.dispose(), c.dispose();
      }
    }) : (d.dispose(), null);
  }
  async insertImage(r, t, e, i, n) {
    const s = this.newOverGridImage();
    if (typeof r == "string")
      s.setSource(r);
    else {
      const g = await r.getBlob().getDataAsString();
      s.setSource(g, E.BASE64);
    }
    t !== void 0 ? s.setColumn(t) : s.setColumn(0), e !== void 0 ? s.setRow(e) : s.setRow(0), i !== void 0 ? s.setColumnOffset(i) : s.setColumnOffset(0), n !== void 0 ? s.setRowOffset(n) : s.setRowOffset(0);
    const a = await s.buildAsync();
    return this._commandService.syncExecuteCommand(b.id, { unitId: this._fWorkbook.getId(), drawings: [a] });
  }
  insertImages(r) {
    const t = r.map((e) => (e.unitId = this._fWorkbook.getId(), e.subUnitId = this.getSheetId(), e));
    return this._commandService.syncExecuteCommand(b.id, { unitId: this._fWorkbook.getId(), drawings: t }), this;
  }
  deleteImages(r) {
    const t = r.map((e) => ({
      unitId: this._fWorkbook.getId(),
      drawingId: e.getId(),
      subUnitId: this.getSheetId(),
      drawingType: e.getType()
    }));
    return this._commandService.syncExecuteCommand(k.id, { unitId: this._fWorkbook.getId(), drawings: t }), this;
  }
  getImages() {
    const t = this._injector.get(w).getDrawingData(this._fWorkbook.getId(), this.getSheetId()), e = [];
    for (const i in t) {
      const n = t[i];
      n.drawingType === I.DRAWING_IMAGE && e.push(this._injector.createInstance(v, n));
    }
    return e;
  }
  getImageById(r) {
    const e = this._injector.get(w).getDrawingByParam({ unitId: this._fWorkbook.getId(), subUnitId: this.getSheetId(), drawingId: r });
    return e && e.drawingType === I.DRAWING_IMAGE ? this._injector.createInstance(v, e) : null;
  }
  getActiveImages() {
    const t = this._injector.get(w).getFocusDrawings(), e = [];
    for (const i in t) {
      const n = t[i];
      e.push(this._injector.createInstance(v, n));
    }
    return e;
  }
  updateImages(r) {
    return this._commandService.syncExecuteCommand(f.id, { unitId: this._fWorkbook.getId(), drawings: r }), this;
  }
  onImageInserted(r) {
    const t = this._injector.get(w);
    return T(t.add$.subscribe((e) => {
      const i = e.map(
        (n) => this._injector.createInstance(v, t.getDrawingByParam(n))
      );
      r(i);
    }));
  }
  onImageDeleted(r) {
    const t = this._injector.get(w);
    return T(t.remove$.subscribe((e) => {
      const i = e.map(
        (n) => this._injector.createInstance(v, t.getDrawingByParam(n))
      );
      r(i);
    }));
  }
  onImageChanged(r) {
    const t = this._injector.get(w);
    return T(t.update$.subscribe((e) => {
      const i = e.map(
        (n) => this._injector.createInstance(v, t.getDrawingByParam(n))
      );
      r(i);
    }));
  }
  newOverGridImage() {
    const r = this._fWorkbook.getId(), t = this.getSheetId();
    return this._injector.createInstance(F, r, t);
  }
}
$.extend(me);
class he extends z {
  get DrawingType() {
    return I;
  }
  get ImageSourceType() {
    return E;
  }
  get SheetDrawingAnchorType() {
    return ae;
  }
}
z.extend(he);
class le extends X {
  get BeforeFloatDomAdd() {
    return "BeforeFloatDomAdd";
  }
  get FloatDomAdded() {
    return "FloatDomAdded";
  }
  get BeforeFloatDomUpdate() {
    return "BeforeFloatDomUpdate";
  }
  get FloatDomUpdated() {
    return "FloatDomUpdated";
  }
  get BeforeFloatDomDelete() {
    return "BeforeFloatDomDelete";
  }
  get FloatDomDeleted() {
    return "FloatDomDeleted";
  }
  get BeforeOverGridImageChange() {
    return "BeforeOverGridImageChange";
  }
  get OverGridImageChanged() {
    return "OverGridImageChanged";
  }
  get BeforeOverGridImageInsert() {
    return "BeforeOverGridImageInsert";
  }
  get OverGridImageInserted() {
    return "OverGridImageInserted";
  }
  get BeforeOverGridImageRemove() {
    return "BeforeOverGridImageRemove";
  }
  get OverGridImageRemoved() {
    return "OverGridImageRemoved";
  }
  get BeforeOverGridImageSelect() {
    return "BeforeOverGridImageSelect";
  }
  get OverGridImageSelected() {
    return "OverGridImageSelected";
  }
}
X.extend(le);
class ue extends Y {
  /**
   * @ignore
   */
  // eslint-disable-next-line max-lines-per-function
  _initialize(r) {
    const t = r.get(N);
    this.registerEventHandler(
      this.Event.BeforeFloatDomAdd,
      () => t.beforeCommandExecuted((e) => {
        if (e.id !== b.id) return;
        const i = e.params, n = this.getActiveWorkbook();
        if (n == null || i == null)
          return;
        const { drawings: s } = i, a = s.filter(
          (g) => g.drawingType === I.DRAWING_DOM
        );
        if (a.length === 0)
          return;
        const d = {
          workbook: n,
          drawings: a
        };
        if (this.fireEvent(this.Event.BeforeFloatDomAdd, d), d.cancel)
          throw new S();
      })
    ), this.registerEventHandler(
      this.Event.FloatDomAdded,
      () => t.onCommandExecuted((e) => {
        if (e.id !== b.id) return;
        const i = e.params, n = this.getActiveWorkbook();
        if (n == null || i == null)
          return;
        const { drawings: s } = i, a = s.filter(
          (d) => d.drawingType === I.DRAWING_DOM
        );
        a.length !== 0 && this.fireEvent(this.Event.FloatDomAdded, {
          workbook: n,
          drawings: a
        });
      })
    ), this.registerEventHandler(
      this.Event.BeforeOverGridImageInsert,
      () => t.beforeCommandExecuted((e) => {
        if (e.id !== b.id) return;
        const i = e.params, n = this.getActiveWorkbook();
        if (n == null || i == null)
          return;
        const { drawings: s } = i, a = {
          workbook: n,
          insertImageParams: s
        };
        if (this.fireEvent(this.Event.BeforeOverGridImageInsert, a), a.cancel)
          throw new S();
      })
    ), this.registerEventHandler(
      this.Event.BeforeOverGridImageRemove,
      () => t.beforeCommandExecuted((e) => {
        if (e.id !== k.id) return;
        const i = e.params, n = this.getActiveWorkbook();
        if (n == null || i == null)
          return;
        const s = r.get(p), { drawings: a } = i, d = a.map((c) => s.getDrawingByParam(c)), g = {
          workbook: n,
          images: this._createFOverGridImage(d)
        };
        if (this.fireEvent(this.Event.BeforeOverGridImageRemove, g), g.cancel)
          throw new S();
      })
    ), this.registerEventHandler(
      this.Event.BeforeOverGridImageChange,
      () => t.beforeCommandExecuted((e) => {
        if (e.id !== f.id) return;
        const i = e.params, n = this.getActiveWorkbook();
        if (n == null || i == null)
          return;
        const { drawings: s } = i, a = r.get(p), d = [];
        s.forEach((c) => {
          const m = a.getDrawingByParam(c);
          m != null && d.push({
            changeParam: c,
            image: this._injector.createInstance(v, m)
          });
        });
        const g = {
          workbook: n,
          images: d
        };
        if (this.fireEvent(this.Event.BeforeOverGridImageChange, g), g.cancel)
          throw a.updateNotification(s), new S();
      })
    ), this.registerEventHandler(
      this.Event.BeforeFloatDomUpdate,
      () => t.beforeCommandExecuted((e) => {
        if (e.id !== f.id) return;
        const i = e.params, n = this.getActiveWorkbook();
        if (n == null || i == null)
          return;
        const { drawings: s } = i, a = r.get(p), d = [];
        if (s.forEach((c) => {
          const m = a.getDrawingByParam(c);
          (m == null ? void 0 : m.drawingType) === I.DRAWING_DOM && d.push(m);
        }), d.length === 0)
          return;
        const g = {
          workbook: n,
          drawings: d
        };
        if (this.fireEvent(this.Event.BeforeFloatDomUpdate, g), g.cancel)
          throw a.updateNotification(s), new S();
      })
    ), this.registerEventHandler(
      this.Event.FloatDomUpdated,
      () => t.onCommandExecuted((e) => {
        if (e.id !== f.id) return;
        const i = e.params, n = this.getActiveWorkbook();
        if (n == null || i == null)
          return;
        const { drawings: s } = i, a = r.get(p), d = [];
        s.forEach((g) => {
          const c = a.getDrawingByParam(g);
          (c == null ? void 0 : c.drawingType) === I.DRAWING_DOM && d.push(c);
        }), d.length !== 0 && this.fireEvent(this.Event.FloatDomUpdated, {
          workbook: n,
          drawings: d
        });
      })
    ), this.registerEventHandler(
      this.Event.BeforeFloatDomDelete,
      () => t.beforeCommandExecuted((e) => {
        if (e.id !== k.id) return;
        const i = e.params, n = this.getActiveWorkbook();
        if (n == null || i == null)
          return;
        const s = r.get(p), { drawings: a } = i, d = a.map((c) => s.getDrawingByParam(c)).filter(
          (c) => (c == null ? void 0 : c.drawingType) === I.DRAWING_DOM
        );
        if (d.length === 0)
          return;
        const g = {
          workbook: n,
          drawings: d
        };
        if (this.fireEvent(this.Event.BeforeFloatDomDelete, g), g.cancel)
          throw new S();
      })
    ), this.registerEventHandler(
      this.Event.FloatDomDeleted,
      () => t.onCommandExecuted((e) => {
        if (e.id !== k.id) return;
        const i = e.params, n = this.getActiveWorkbook();
        if (n == null || i == null)
          return;
        const { drawings: s } = i;
        this.fireEvent(this.Event.FloatDomDeleted, {
          workbook: n,
          drawings: s.filter((a) => a.drawingType === I.DRAWING_DOM).map((a) => a.drawingId)
        });
      })
    ), this.registerEventHandler(
      this.Event.BeforeOverGridImageSelect,
      () => t.beforeCommandExecuted((e) => {
        if (e.id !== W.id) return;
        const i = e.params, n = this.getActiveWorkbook();
        if (n == null)
          return;
        const s = r.get(p), a = s.getFocusDrawings(), d = i.map((c) => s.getDrawingByParam(c)), g = {
          workbook: n,
          selectedImages: this._createFOverGridImage(d),
          oldSelectedImages: this._createFOverGridImage(a)
        };
        if (this.fireEvent(this.Event.BeforeOverGridImageSelect, g), g.cancel)
          throw new S();
      })
    ), this.registerEventHandler(
      this.Event.OverGridImageInserted,
      () => t.onCommandExecuted((e) => {
        if (e.id !== b.id) return;
        const i = e.params, n = this.getActiveWorkbook();
        if (n == null || i == null)
          return;
        const { drawings: s } = i;
        this.fireEvent(this.Event.OverGridImageInserted, {
          workbook: n,
          images: this._createFOverGridImage(s)
        });
      })
    ), this.registerEventHandler(
      this.Event.OverGridImageRemoved,
      () => t.onCommandExecuted((e) => {
        if (e.id !== k.id) return;
        const i = e.params, n = this.getActiveWorkbook();
        if (n == null || i == null)
          return;
        const { drawings: s } = i;
        this.fireEvent(this.Event.OverGridImageRemoved, {
          workbook: n,
          removeImageParams: s
        });
      })
    ), this.registerEventHandler(
      this.Event.OverGridImageChanged,
      () => t.onCommandExecuted((e) => {
        if (e.id !== f.id) return;
        const i = e.params, n = this.getActiveWorkbook();
        if (n == null || i == null)
          return;
        const { drawings: s } = i, a = r.get(p), d = s.map((g) => this._injector.createInstance(v, a.getDrawingByParam(g)));
        this.fireEvent(this.Event.OverGridImageChanged, {
          workbook: n,
          images: d
        });
      })
    ), this.registerEventHandler(
      this.Event.OverGridImageSelected,
      () => t.onCommandExecuted((e) => {
        if (e.id !== W.id) return;
        const i = e.params, n = this.getActiveWorkbook();
        if (n == null)
          return;
        const s = r.get(p), a = i.map((d) => s.getDrawingByParam(d));
        this.fireEvent(this.Event.OverGridImageSelected, {
          workbook: n,
          selectedImages: this._createFOverGridImage(a)
        });
      })
    );
  }
  _createFOverGridImage(r) {
    return r.map((t) => this._injector.createInstance(v, t));
  }
}
Y.extend(ue);
class fe extends L {
  async insertCellImageAsync(r) {
    var n;
    const t = this._injector.get(y), e = (n = ie(Z.UNIVER_SHEET, this._injector.get(ee), t)) == null ? void 0 : n.with(ne);
    if (!e)
      return !1;
    const i = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      row: this.getRow(),
      col: this.getColumn()
    };
    return typeof r == "string" ? e.insertCellImageByUrl(r, i) : e.insertCellImageByFile(r, i);
  }
}
L.extend(fe);
