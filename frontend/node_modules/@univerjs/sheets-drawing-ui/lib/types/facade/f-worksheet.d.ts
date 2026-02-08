import { IDisposable, ITransformState, Nullable } from '@univerjs/core';
import { IFBlobSource } from '@univerjs/core/facade';
import { ISheetImage } from '@univerjs/sheets-drawing';
import { ICanvasFloatDom, ICanvasFloatDomInfo, IDOMAnchor } from '@univerjs/sheets-drawing-ui';
import { IFComponentKey } from '@univerjs/sheets-ui/facade';
import { FRange, FWorksheet } from '@univerjs/sheets/facade';
import { FOverGridImage, FOverGridImageBuilder } from './f-over-grid-image';
export interface IFICanvasFloatDom extends Omit<ICanvasFloatDom, 'componentKey' | 'unitId' | 'subUnitId'>, IFComponentKey {
}
export interface IFCanvasFloatDomResult extends Omit<ICanvasFloatDom, 'componentKey' | 'unitId' | 'subUnitId' | 'initPosition'>, IFComponentKey, Pick<ICanvasFloatDomInfo, 'id'> {
    position: ITransformState;
    id: string;
}
/**
 * @ignore
 */
export interface IFWorksheetLegacy {
    /**
     * Get float dom by id
     * @param {string} id - float dom id
     * @returns {IFCanvasFloatDomResult | null} float dom info or null if not found
     * @example
     * ```ts
     * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
     * const floatDom = fWorksheet.getFloatDomById('myFloatDomId');
     * if (floatDom) {
     *   console.log('Float dom position:', floatDom.position);
     *   console.log('Component key:', floatDom.componentKey);
     *   console.log('Custom data:', floatDom.data);
     * }
     * ```
     */
    getFloatDomById(id: string): Nullable<IFCanvasFloatDomResult>;
    /**
     * Get all float doms in current worksheet
     * @returns {IFCanvasFloatDomResult[]} array of float dom info
     * @example
     * ```ts
     * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
     * const allFloatDoms = fWorksheet.getAllFloatDoms();
     * allFloatDoms.forEach(floatDom => {
     *   console.log('Float dom ID:', floatDom.id);
     *   console.log('Position:', floatDom.position);
     * });
     * ```
     */
    getAllFloatDoms(): IFCanvasFloatDomResult[];
    /**
     * Update float dom position and properties
     * @param {string} id - float dom id
     * @param {Partial<IFCanvasFloatDomResult>} config - new float dom config
     * @returns {FWorksheet} The worksheet instance for chaining
     * @example
     * ```ts
     * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
     * const firstFloatDom = fWorksheet.getAllFloatDoms()[0];
     *
     * if (!firstFloatDom) return;
     *
     * // Update first float dom position and size
     * fWorksheet.updateFloatDom(firstFloatDom.id, {
     *   position: {
     *     left: 100,
     *     top: 100,
     *     width: 200,
     *     height: 150,
     *     angle: 45, // rotate 45 degrees
     *   }
     * });
     *
     * // Update first float dom data
     * fWorksheet.updateFloatDom(firstFloatDom.id, {
     *   data: {
     *     label: 'Updated Label',
     *     color: '#ff0000'
     *   }
     * });
     *
     * // Disable the first float dom from transform
     * fWorksheet.updateFloatDom(firstFloatDom.id, {
     *   allowTransform: false
     * });
     * ```
     */
    updateFloatDom(id: string, config: Partial<IFCanvasFloatDomResult>): this;
    /**
     * Batch update float doms
     * @param {Array<{id: string, config: Partial<IFCanvasFloatDomResult>}>} updates - array of update configs
     * @returns {FWorksheet} The worksheet instance for chaining
     * @example
     * ```ts
     * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
     *
     * // Update multiple float doms at once
     * const allFloatDoms = fWorksheet.getAllFloatDoms();
     * fWorksheet.batchUpdateFloatDoms(allFloatDoms.map((floatDom, index) => {
     *   if (floatDom.id === 'MyFloatDomId') {
     *     return {
     *       id: floatDom.id,
     *       config: {
     *         position: {
     *           left: 100,
     *           top: 100
     *         },
     *         data: {
     *           label: 'Updated'
     *         }
     *       }
     *     }
     *   }
     *
     *   return {
     *     id: floatDom.id,
     *     config: {
     *       position: {
     *         left: 300,
     *         top: 100
     *       }
     *     }
     *   }
     * }));
     * ```
     */
    batchUpdateFloatDoms(updates: Array<{
        id: string;
        config: Partial<IFCanvasFloatDomResult>;
    }>): this;
    /**
     * Remove float dom by id
     * @param {string} id - float dom id
     * @returns {FWorksheet} The worksheet instance for chaining
     * @example
     * ```ts
     * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
     * const firstFloatDom = fWorksheet.getAllFloatDoms()[0];
     *
     * if (!firstFloatDom) return;
     *
     * // Remove the first float dom
     * fWorksheet.removeFloatDom(firstFloatDom.id);
     * ```
     */
    removeFloatDom(id: string): this;
    /**
     * Add a float dom to position.
     * @param {IFICanvasFloatDom} layer - The float dom layer configuration.
     * @param {string} [id] - The float dom id, if not given will be auto generated.
     * @returns float dom id and dispose function
     * @example
     * ```tsx
     * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
     *
     * // You should register components at an appropriate time (e.g., when Univer is loaded)
     * // This is a React component. For Vue3 components, the third parameter should be `{ framework: 'vue3' }`
     * univerAPI.registerComponent(
     *   'myFloatDom',
     *   ({ data }) => (
     *     <div style={{ width: '100%', height: '100%', background: '#fff', border: '1px solid #ccc', boxSizing: 'border-box' }}>
     *       popup content:
     *       {' '}
     *       {data?.label}
     *     </div>
     *   ),
     * );
     *
     * // Add a floating DOM
     * // If disposable is null, floating DOM addition failed
     * const disposable = fWorksheet.addFloatDomToPosition({
     *   componentKey: 'myFloatDom',
     *   initPosition: {
     *     startX: 100,
     *     endX: 300,
     *     startY: 100,
     *     endY: 200,
     *   },
     *
     *   // Component data
     *   data: {
     *     label: 'hahah',
     *   },
     * });
     * console.log(disposable?.id); // The id of the floating DOM
     *
     * // Remove the floating DOM after 2 seconds
     * setTimeout(() => {
     *   disposable?.dispose();
     * }, 2000);
     * ```
     */
    addFloatDomToPosition(layer: IFICanvasFloatDom, id?: string): Nullable<{
        id: string;
        dispose: () => void;
    }>;
    /**
     * Add dom over range to FloatDOM, And FloatDOM is registerComponent(BuiltInUIPart.CONTENT)
     * @param {FRange} range - The range to add the float dom.
     * @param {Partial<IFICanvasFloatDom>} layer - The float dom layer configuration.
     * @param {Partial<IDOMAnchor>} domLayout - The anchor configuration of the float dom.
     * @param {string} [id] - The float dom id, if not given will be auto generated
     * @returns float dom id and dispose function
     * @example
     * ```tsx
     * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
     *
     * // Register a range loading component
     * const RangeLoading = () => {
     *   const divStyle = {
     *     width: '100%',
     *     height: '100%',
     *     backgroundColor: '#fff',
     *     border: '1px solid #ccc',
     *     boxSizing: 'border-box' as const,
     *     display: 'flex',
     *     justifyContent: 'center',
     *     alignItems: 'center',
     *     textAlign: 'center' as const,
     *     transformOrigin: 'top left',
     *   };
     *
     *   return (
     *     <div style={divStyle}>
     *       Loading...
     *     </div>
     *   );
     * };
     * univerAPI.registerComponent('RangeLoading', RangeLoading);
     *
     * // Add the range loading component covering the range A1:C3
     * const fRange = fWorksheet.getRange('A1:C3');
     * const disposable = fWorksheet.addFloatDomToRange(fRange, { componentKey: 'RangeLoading' }, {}, 'myRangeLoading');
     * console.log(disposable?.id); // The id of the floating DOM
     *
     * // Remove the floating DOM after 2 seconds
     * setTimeout(() => {
     *   disposable?.dispose();
     * }, 2000);
     *
     * // another example-------------------
     * // Register a float button component
     * const FloatButton = () => {
     *   const divStyle = {
     *     width: '100px',
     *     height: '30px',
     *     backgroundColor: '#fff',
     *     border: '1px solid #ccc',
     *     boxSizing: 'border-box' as const,
     *     display: 'flex',
     *     justifyContent: 'center',
     *     alignItems: 'center',
     *     textAlign: 'center' as const,
     *     cursor: 'pointer',
     *   };
     *
     *   const clickHandler = () => {
     *     console.warn('click');
     *   };
     *
     *   return (
     *     <div style={divStyle} onClick={clickHandler}>
     *       FloatButton
     *     </div>
     *   );
     * };
     * univerAPI.registerComponent('FloatButton', FloatButton);
     *
     * // Add the float button to the range A5:C7, position is start from A5 cell, and width is 100px, height is 30px, margin is 100% of range width and height
     * const fRange2 = fWorksheet.getRange('A5:C7');
     * const disposable2 = fWorksheet.addFloatDomToRange(
     *   fRange2,
     *   {
     *     componentKey: 'FloatButton',
     *   },
     *   {
     *     width: 100,
     *     height: 30,
     *     marginX: '100%', // margin percent to range width, or pixel
     *     marginY: '100%'
     *   },
     *   'myFloatButton'
     * );
     * console.log(disposable2?.id); // The id of the floating DOM
     * ```
     */
    addFloatDomToRange(range: FRange, layer: Partial<IFICanvasFloatDom>, domLayout: Partial<IDOMAnchor>, id?: string): Nullable<{
        id: string;
        dispose: () => void;
    }>;
    /**
     * Add dom at column header, And FloatDOM is registerComponent(BuiltInUIPart.CONTENT)
     * @param {number} column - The column index to add the float dom.
     * @param {Partial<IFICanvasFloatDom>} layer - The float dom layer configuration.
     * @param {IDOMAnchor} domPos - The anchor configuration of the float dom.
     * @param {string} [id] - The float dom id, if not given will be auto generated
     * @returns float dom id and dispose function
     * @example
     * ```ts
     * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
     *
     * // Register a float button component
     * const FloatButton = () => {
     *   const divStyle = {
     *     width: '100px',
     *     height: '30px',
     *     backgroundColor: '#fff',
     *     border: '1px solid #ccc',
     *     boxSizing: 'border-box' as const,
     *     display: 'flex',
     *     justifyContent: 'center',
     *     alignItems: 'center',
     *     textAlign: 'center' as const,
     *     cursor: 'pointer',
     *   };
     *
     *   const clickHandler = () => {
     *     console.warn('click');
     *   };
     *
     *   return (
     *     <div style={divStyle} onClick={clickHandler}>
     *       FloatButton
     *     </div>
     *   );
     * };
     * univerAPI.registerComponent('FloatButton', FloatButton);
     *
     * // Add the float button to the column D header, position is right align, width is 100px, height is 30px, margin is 0
     * const disposable = fWorksheet.addFloatDomToColumnHeader(
     *   3,
     *   {
     *     componentKey: 'FloatButton',
     *     allowTransform: false,
     *   },
     *   {
     *     width: 100,
     *     height: 30,
     *     marginX: 0,
     *     marginY: 0,
     *     horizonOffsetAlign: 'right',
     *   },
     *   'myFloatButton'
     * );
     * console.log(disposable?.id); // The id of the floating DOM
     *
     * // Remove the float button after 2 seconds
     * setTimeout(() => {
     *   disposable?.dispose();
     * }, 2000);
     * ```
     */
    addFloatDomToColumnHeader(column: number, layer: Partial<IFICanvasFloatDom>, domPos: IDOMAnchor, id?: string): Nullable<{
        id: string;
        dispose: () => void;
    }>;
    /**
     * Insert an image to the sheet
     * @param {string} url - The image url
     * @returns true if the image is inserted successfully
     * @example
     * ```ts
     * // Insert an image to the sheet, default position is A1
     * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
     * const result = await fWorksheet.insertImage('https://avatars.githubusercontent.com/u/61444807?s=48&v=4');
     * console.log(result);
     * ```
     */
    insertImage(url: string): Promise<boolean>;
    /**
     * @param {string} url - The image url
     * @param {number} column - The column index to insert the image
     * @param {number} row - The row index to insert the image
     * @returns True if the image is inserted successfully
     * @example
     * ```ts
     * // Insert an image to the sheet, position is F6
     * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
     * const result = await fWorksheet.insertImage('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', 5, 5);
     * console.log(result);
     * ```
     */
    insertImage(url: string, column: number, row: number): Promise<boolean>;
    /**
     * @param {string} url - The image url
     * @param {number} column - The column index to insert the image
     * @param {number} row - The row index to insert the image
     * @param {number} offsetX - The column offset, pixel unit
     * @param {number} offsetY - The row offset, pixel unit
     * @returns True if the image is inserted successfully
     * @example
     * ```ts
     * // Insert an image to the sheet, position is F6, offset is 10px
     * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
     * const result = await fWorksheet.insertImage('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', 5, 5, 10, 10);
     * console.log(result);
     * ```
     */
    insertImage(url: string, column: number, row: number, offsetX: number, offsetY: number): Promise<boolean>;
    insertImage(url: IFBlobSource): Promise<boolean>;
    insertImage(url: IFBlobSource, column: number, row: number): Promise<boolean>;
    insertImage(url: IFBlobSource, column: number, row: number, offsetX: number, offsetY: number): Promise<boolean>;
    insertImage(url: IFBlobSource | string, column: number, row: number, offsetX: number, offsetY: number): Promise<boolean>;
    /**
     * Insert images to the sheet
     * @param {ISheetImage[]} sheetImages - The images to insert
     * @returns {FWorksheet} The FWorksheet instance for chaining
     * @example
     * ```ts
     * // create a new image builder and set image source.
     * // then build `ISheetImage` and insert it into the sheet, position is start from F6 cell, width is 500px, height is 300px
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const image = await fWorksheet.newOverGridImage()
     *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
     *   .setColumn(5)
     *   .setRow(5)
     *   .setWidth(500)
     *   .setHeight(300)
     *   .buildAsync();
     * fWorksheet.insertImages([image]);
     *
     * // update the image width to 100px and height to 50px
     * setTimeout(async () => {
     *   const imageBuilder = fWorksheet.getImageById(image.drawingId).toBuilder();
     *   const newImage = await imageBuilder.setWidth(100).setHeight(50).buildAsync();
     *   fWorksheet.updateImages([newImage]);
     * }, 4000);
     * ```
     */
    insertImages(sheetImages: ISheetImage[]): FWorksheet;
    /**
     * Get all images of the sheet.
     * @returns {FOverGridImage[]} The FOverGridImage instances
     * @example
     * ```ts
     * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
     * const images = fWorksheet.getImages();
     * images.forEach((image) => {
     *   console.log(image, image.getId());
     * });
     * ```
     */
    getImages(): FOverGridImage[];
    /**
     * Get image by drawing id
     * @param {string} id - The drawing id of the image
     * @returns {FOverGridImage | null} The FOverGridImage instance
     * @example
     * ```ts
     * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
     * const image = fWorksheet.getImageById('xxxx');
     * console.log(image);
     * ```
     */
    getImageById(id: string): FOverGridImage | null;
    /**
     * Delete images from the sheet
     * @param {FOverGridImage[]} sheetImages - The images to delete
     * @returns {FWorksheet} The FWorksheet instance for chaining
     * @example
     * ```ts
     * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
     * const image = fWorksheet.getImages()[0];
     *
     * // Delete the first image of the sheet
     * fWorksheet.deleteImages([image]);
     * ```
     */
    deleteImages(sheetImages: FOverGridImage[]): FWorksheet;
    /**
     * Update images to the sheet
     * @param {ISheetImage[]} sheetImages - The images to update
     * @returns {FWorksheet} The FWorksheet instance for chaining
     * @example
     * ```ts
     * // create a new image builder and set image source.
     * // then build `ISheetImage` and insert it into the sheet, position is start from F6 cell, width is 500px, height is 300px
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const image = await fWorksheet.newOverGridImage()
     *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
     *   .setColumn(5)
     *   .setRow(5)
     *   .setWidth(500)
     *   .setHeight(300)
     *   .buildAsync();
     * fWorksheet.insertImages([image]);
     *
     * // update the image width to 100px and height to 50px after 4 seconds
     * setTimeout(async () => {
     *   const imageBuilder = fWorksheet.getImageById(image.drawingId).toBuilder();
     *   const newImage = await imageBuilder.setWidth(100).setHeight(50).buildAsync();
     *   fWorksheet.updateImages([newImage]);
     * }, 4000);
     * ```
     */
    updateImages(sheetImages: ISheetImage[]): FWorksheet;
    /**
     * Get the current selected images.
     * @returns {FOverGridImage[]} The FOverGridImage instances
     * @example
     * ```ts
     * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
     * const images = fWorksheet.getActiveImages();
     * images.forEach((image) => {
     *   console.log(image, image.getId());
     * });
     * ```
     */
    getActiveImages(): FOverGridImage[];
    /**
     * Hook when a image is inserted.
     * @param {function(FOverGridImage[]: void)} callback - The callback function when a image is inserted.
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.OverGridImageInserted, (params) => {})` as instead
     */
    onImageInserted(callback: (images: FOverGridImage[]) => void): IDisposable;
    /**
     * Hook when a image is deleted.
     * @param {function(FOverGridImage[]: void)} callback - The callback function when a image is deleted.
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.OverGridImageRemoved, (params) => {})` as instead
     */
    onImageDeleted(callback: (images: FOverGridImage[]) => void): IDisposable;
    /**
     * Hook when a image is changed.
     * @param {function(FOverGridImage[]: void)} callback - The callback function when a image is changed.
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.OverGridImageChanged, (params) => {})` as instead
     */
    onImageChanged(callback: (images: FOverGridImage[]) => void): IDisposable;
    /**
     * Create a new over grid image builder.
     * @returns {FOverGridImageBuilder} The FOverGridImageBuilder instance
     * @example
     * ```ts
     * // create a new image builder and set image source.
     * // then build `ISheetImage` and insert it into the sheet, position is start from F6 cell, width is 500px, height is 300px
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const image = await fWorksheet.newOverGridImage()
     *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', univerAPI.Enum.ImageSourceType.URL)
     *   .setColumn(5)
     *   .setRow(5)
     *   .setWidth(500)
     *   .setHeight(300)
     *   .buildAsync();
     * fWorksheet.insertImages([image]);
     * ```
     */
    newOverGridImage(): FOverGridImageBuilder;
}
export declare class FWorksheetLegacy extends FWorksheet implements IFWorksheetLegacy {
    getFloatDomById(id: string): Nullable<IFCanvasFloatDomResult>;
    getAllFloatDoms(): IFCanvasFloatDomResult[];
    updateFloatDom(id: string, config: Partial<Omit<IFCanvasFloatDomResult, 'id'>>): this;
    batchUpdateFloatDoms(updates: Array<{
        id: string;
        config: Partial<Omit<IFCanvasFloatDomResult, 'id'>>;
    }>): this;
    removeFloatDom(id: string): this;
    addFloatDomToPosition(layer: IFICanvasFloatDom, id?: string): Nullable<{
        id: string;
        dispose: () => void;
    }>;
    addFloatDomToRange(fRange: FRange, layer: IFICanvasFloatDom, domLayout: IDOMAnchor, id?: string): Nullable<{
        id: string;
        dispose: () => void;
    }>;
    addFloatDomToColumnHeader(column: number, layer: IFICanvasFloatDom, domLayout: IDOMAnchor, id?: string): Nullable<{
        id: string;
        dispose: () => void;
    }>;
    insertImage(url: IFBlobSource | string, column?: number, row?: number, offsetX?: number, offsetY?: number): Promise<boolean>;
    insertImages(sheetImages: ISheetImage[]): FWorksheet;
    deleteImages(sheetImages: FOverGridImage[]): FWorksheet;
    getImages(): FOverGridImage[];
    getImageById(id: string): FOverGridImage | null;
    getActiveImages(): FOverGridImage[];
    updateImages(sheetImages: ISheetImage[]): FWorksheet;
    onImageInserted(callback: (images: FOverGridImage[]) => void): IDisposable;
    onImageDeleted(callback: (images: FOverGridImage[]) => void): IDisposable;
    onImageChanged(callback: (images: FOverGridImage[]) => void): IDisposable;
    newOverGridImage(): FOverGridImageBuilder;
}
declare module '@univerjs/sheets/facade' {
    interface FWorksheet extends IFWorksheetLegacy {
    }
}
