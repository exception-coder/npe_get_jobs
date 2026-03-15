import { IRotationSkewFlipTransform, ISize, DrawingTypeEnum, ICommandService, ImageSourceType, Injector } from '@univerjs/core';
import { ICellOverGridPosition } from '@univerjs/sheets';
import { ISheetImage, SheetDrawingAnchorType } from '@univerjs/sheets-drawing';
import { FBase } from '@univerjs/core/facade';
export interface IFOverGridImage extends Omit<ISheetImage, 'sheetTransform' | 'transform'>, ICellOverGridPosition, IRotationSkewFlipTransform, Required<ISize> {
}
/**
 * @hideconstructor
 */
export declare class FOverGridImageBuilder {
    protected readonly _injector: Injector;
    private _image;
    constructor(unitId: string, subUnitId: string, _injector: Injector);
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
    setImage(image: ISheetImage): FOverGridImageBuilder;
    /**
     * Set the source of the image.
     * @param {string} source - The source of the image
     * @param {ImageSourceType} [sourceType] - The source type of the image, default is URL
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
    setSource(source: string): FOverGridImageBuilder;
    setSource(source: string, sourceType?: ImageSourceType): FOverGridImageBuilder;
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
    getSource(): string;
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
    getSourceType(): ImageSourceType;
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
    setColumn(column: number): FOverGridImageBuilder;
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
    setRow(row: number): FOverGridImageBuilder;
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
    setColumnOffset(offset: number): FOverGridImageBuilder;
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
    setRowOffset(offset: number): FOverGridImageBuilder;
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
    setWidth(width: number): FOverGridImageBuilder;
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
    setHeight(height: number): FOverGridImageBuilder;
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
    setAnchorType(anchorType: SheetDrawingAnchorType): FOverGridImageBuilder;
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
    setCropTop(top: number): FOverGridImageBuilder;
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
    setCropLeft(left: number): FOverGridImageBuilder;
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
    setCropBottom(bottom: number): FOverGridImageBuilder;
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
    setCropRight(right: number): FOverGridImageBuilder;
    private _initializeSrcRect;
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
    setRotate(angle: number): FOverGridImageBuilder;
    setUnitId(unitId: string): FOverGridImageBuilder;
    setSubUnitId(subUnitId: string): FOverGridImageBuilder;
    buildAsync(): Promise<ISheetImage>;
}
/**
 * @hideconstructor
 */
export declare class FOverGridImage extends FBase {
    private _image;
    protected readonly _commandService: ICommandService;
    protected readonly _injector: Injector;
    constructor(_image: ISheetImage, _commandService: ICommandService, _injector: Injector);
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
    getId(): string;
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
    getType(): DrawingTypeEnum;
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
    remove(): boolean;
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
    toBuilder(): FOverGridImageBuilder;
    /**
     * Set the source of the image
     * @param {string} source - The source of the image
     * @returns {boolean} true if the source is set successfully, otherwise false
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const image = fWorksheet.getImages()[0];
     * const result = image?.setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4');
     * console.log(result);
     * ```
     */
    setSource(source: string): boolean;
    /**
     * Set the source of the image, change image display.
     * @param {string} source - The source of the image
     * @param {ImageSourceType} [sourceType] - The source type of the image, default is URL
     * @returns {boolean} true if the source is set successfully, otherwise false
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const image = fWorksheet.getImages()[0];
     * const result = image?.setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL);
     * console.log(result);
     * ```
     */
    setSource(source: string, sourceType?: ImageSourceType): boolean;
    /**
     * Set the position of the image
     * @param {number} row - The row index of the image start position
     * @param {number} column - The column index of the image start position
     * @returns {boolean} true if the position is set successfully, otherwise false
     * @example
     * ```ts
     * // set the position of the image, the start position is F6 cell.
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const image = fWorksheet.getImages()[0];
     * const result = image?.setPositionAsync(5, 5);
     * console.log(result);
     * ```
     */
    setPositionAsync(row: number, column: number): Promise<boolean>;
    /**
     * @param {number} row - The row index of the image start position
     * @param {number} column - The column index of the image start position
     * @param {number} rowOffset - The row offset of the image start position, pixel unit
     * @param {number} columnOffset - The column offset of the image start position, pixel unit
     * @returns {boolean} true if the position is set successfully, otherwise false
     * @example
     * ```ts
     * // set the position of the image, the start position is F6 cell, and the offset is 10px.
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const image = fWorksheet.getImages()[0];
     * const result = image?.setPositionAsync(5, 5, 10, 10);
     * console.log(result);
     * ```
     */
    setPositionAsync(row: number, column: number, rowOffset?: number, columnOffset?: number): Promise<boolean>;
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
    setSizeAsync(width: number, height: number): Promise<boolean>;
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
    setCrop(top?: number, left?: number, bottom?: number, right?: number): boolean;
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
    setRotate(angle: number): boolean;
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
    setForward(): boolean;
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
    setBackward(): boolean;
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
    setBack(): boolean;
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
    setFront(): boolean;
}
