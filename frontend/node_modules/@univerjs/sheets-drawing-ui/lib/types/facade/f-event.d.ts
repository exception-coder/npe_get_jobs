import { IDrawingSearch } from '@univerjs/core';
import { IEventBase, FEventName } from '@univerjs/core/facade';
import { ISheetFloatDom, ISheetImage } from '@univerjs/sheets-drawing';
import { FWorkbook } from '@univerjs/sheets/facade';
import { FOverGridImage } from './f-over-grid-image';
/**
 * @ignore
 */
interface IFDrawingEventNameMixin {
    /**
     * Triggered before float dom insertion.
     * @see {@link IBeforeFloatDomAddParam}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.BeforeFloatDomAdd, (params) => {
     *   console.log(params);
     *   // do something
     *   const { workbook, drawings } = params;
     *   // Cancel the insertion operation
     *   params.cancel = true;
     * })
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    readonly BeforeFloatDomAdd: 'BeforeFloatDomAdd';
    /**
     * Triggered after float dom insertion.
     * @see {@link IFloatDomAddedParam}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.FloatDomAdded, (params) => {
     *   console.log(params);
     *   // do something
     *   const { workbook, drawings } = params;
     * })
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    readonly FloatDomAdded: 'FloatDomAdded';
    /**
     * Triggered before float dom update.
     * @see {@link IBeforeFloatDomUpdateParam}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.BeforeFloatDomUpdate, (params) => {
     *   console.log(params);
     *   // do something
     *   const { workbook, drawings } = params;
     *   // Cancel the update operation
     *   params.cancel = true;
     * })
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    readonly BeforeFloatDomUpdate: 'BeforeFloatDomUpdate';
    /**
     * Triggered after float dom update.
     * @see {@link IFloatDomUpdatedParam}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.FloatDomUpdated, (params) => {
     *   console.log(params);
     *   // do something
     *   const { workbook, drawings } = params;
     * })
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    readonly FloatDomUpdated: 'FloatDomUpdated';
    /**
     * Triggered before float dom deletion.
     * @see {@link IBeforeFloatDomDeleteParam}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.BeforeFloatDomDelete, (params) => {
     *   console.log(params);
     *   // do something
     *   const { workbook, drawings } = params;
     *   // Cancel the deletion operation
     *   params.cancel = true;
     * })
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    readonly BeforeFloatDomDelete: 'BeforeFloatDomDelete';
    /**
     * Triggered after float dom deletion.
     * @see {@link IFloatDomDeletedParam}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.FloatDomDeleted, (params) => {
     *   console.log(params);
     *   // do something
     *   const { workbook, drawings } = params;
     * })
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    readonly FloatDomDeleted: 'FloatDomDeleted';
    /**
     * Triggered before floating image insertion.
     * @see {@link IBeforeOverGridImageInsertParam}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.BeforeOverGridImageInsert, (params) => {
     *   console.log(params);
     *   // do something
     *   const { workbook, insertImageParams } = params;
     *   // Cancel the insertion operation
     *   params.cancel = true;
     * })
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    readonly BeforeOverGridImageInsert: 'BeforeOverGridImageInsert';
    /**
     * Triggered after floating image insertion.
     * @see {@link IOverGridImageInsertedParam}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.OverGridImageInserted, (params) => {
     *   console.log(params);
     *   // do something
     *   const { workbook, images } = params;
     * })
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    readonly OverGridImageInserted: 'OverGridImageInserted';
    /**
     * Triggered before floating image removal.
     * @see {@link IBeforeOverGridImageRemoveParam}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.BeforeOverGridImageRemove, (params) => {
     *   console.log(params);
     *   // do something
     *   const { workbook, images } = params;
     *   // Cancel the removal operation
     *   params.cancel = true;
     * })
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    readonly BeforeOverGridImageRemove: 'BeforeOverGridImageRemove';
    /**
     * Triggered after floating image removal.
     * @see {@link IOverGridImageRemovedParam}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.OverGridImageRemoved, (params) => {
     *   console.log(params);
     *   // do something
     *   const { workbook, removeImageParams } = params;
     * })
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    readonly OverGridImageRemoved: 'OverGridImageRemoved';
    /**
     * Triggered before floating image change.
     * @see {@link IBeforeOverGridImageChangeParam}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.BeforeOverGridImageChange, (params) => {
     *   console.log(params);
     *   // do something
     *   const { workbook, images } = params;
     *   // Cancel the image change
     *   params.cancel = true;
     * })
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    readonly BeforeOverGridImageChange: 'BeforeOverGridImageChange';
    /**
     * Triggered after floating image change.
     * @see {@link IOverGridImageChangedParam}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.OverGridImageChanged, (params) => {
     *   console.log(params);
     *   // do something
     *   const { workbook, images } = params;
     * })
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    readonly OverGridImageChanged: 'OverGridImageChanged';
    /**
     * Triggered before floating image selection.
     * @see {@link IBeforeOverGridImageSelectParam}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.BeforeOverGridImageSelect, (params) => {
     *   console.log(params);
     *   // do something
     *   const { workbook, selectedImages, oldSelectedImages } = params;
     *   // cancel the selection operation
     *   params.cancel = true;
     * })
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    readonly BeforeOverGridImageSelect: 'BeforeOverGridImageSelect';
    /**
     * Triggered after floating image selection.
     * @see {@link IOverGridImageSelectedParam}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.OverGridImageSelected, (params) => {
     *   console.log(params);
     *   // do something
     *   const { workbook, selectedImages } = params;
     * })
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    readonly OverGridImageSelected: 'OverGridImageSelected';
}
export declare class FDrawingEventNameMixin extends FEventName implements IFDrawingEventNameMixin {
    get BeforeFloatDomAdd(): 'BeforeFloatDomAdd';
    get FloatDomAdded(): 'FloatDomAdded';
    get BeforeFloatDomUpdate(): 'BeforeFloatDomUpdate';
    get FloatDomUpdated(): 'FloatDomUpdated';
    get BeforeFloatDomDelete(): 'BeforeFloatDomDelete';
    get FloatDomDeleted(): 'FloatDomDeleted';
    get BeforeOverGridImageChange(): 'BeforeOverGridImageChange';
    get OverGridImageChanged(): 'OverGridImageChanged';
    get BeforeOverGridImageInsert(): 'BeforeOverGridImageInsert';
    get OverGridImageInserted(): 'OverGridImageInserted';
    get BeforeOverGridImageRemove(): 'BeforeOverGridImageRemove';
    get OverGridImageRemoved(): 'OverGridImageRemoved';
    get BeforeOverGridImageSelect(): 'BeforeOverGridImageSelect';
    get OverGridImageSelected(): 'OverGridImageSelected';
}
export interface IBeforeOverGridImageChangeParamObject {
    /**
     * Parameters of the image to be updated. {@link ISheetImage}
     */
    changeParam: Partial<ISheetImage>;
    /**
     * Instance of the image to be updated. {@link FOverGridImage}
     */
    image: FOverGridImage;
}
export interface IBeforeOverGridImageChangeParam extends IEventBase {
    /**
     * The workbook instance currently being operated on. {@link FWorkbook}
     */
    workbook: FWorkbook;
    /**
     * Collection of parameters of the images to be updated, there may be multiple images to be updated. {@link IBeforeOverGridImageChangeParamObject}
     */
    images: IBeforeOverGridImageChangeParamObject[];
}
export interface IOverGridImageChangedParam extends IEventBase {
    /**
     * The workbook instance currently being operated on. {@link FWorkbook}
     */
    workbook: FWorkbook;
    /**
     * Instances of the images after the update. {@link FOverGridImage}
     */
    images: FOverGridImage[];
}
export interface IBeforeOverGridImageInsertParam extends IEventBase {
    /**
     * The workbook instance currently being operated on. {@link FWorkbook}
     */
    workbook: FWorkbook;
    /**
     * Collection of parameters of the images to be inserted. {@link ISheetImage}
     */
    insertImageParams: ISheetImage[];
}
export interface IOverGridImageInsertedParam extends IEventBase {
    /**
     * The workbook instance currently being operated on. {@link FWorkbook}
     */
    workbook: FWorkbook;
    /**
     * Collection of instances of the images after insertion. {@link FOverGridImage}
     */
    images: FOverGridImage[];
}
export interface IBeforeOverGridImageRemoveParam extends IEventBase {
    /**
     * The workbook instance currently being operated on. {@link FWorkbook}
     */
    workbook: FWorkbook;
    /**
     * Collection of instances of the images to be removed. {@link FOverGridImage}
     */
    images: FOverGridImage[];
}
export interface IOverGridImageRemovedParam extends IEventBase {
    /**
     * The workbook instance currently being operated on. {@link FWorkbook}
     */
    workbook: FWorkbook;
    /**
     * Collection of parameters of the images after removal. {@link ISheetImage}
     */
    removeImageParams: IDrawingSearch[];
}
export interface IBeforeOverGridImageSelectParam extends IEventBase {
    /**
     * The workbook instance currently being operated on. {@link FWorkbook}
     */
    workbook: FWorkbook;
    /**
     * The images before selection. {@link FOverGridImage}
     */
    oldSelectedImages: FOverGridImage[];
    selectedImages: FOverGridImage[];
}
export interface IOverGridImageSelectedParam extends IEventBase {
    /**
     * The workbook instance currently being operated on. {@link FWorkbook}
     */
    workbook: FWorkbook;
    /**
     * The selected images. {@link FOverGridImage}
     */
    selectedImages: FOverGridImage[];
}
/**
 * @ignore
 */
export interface IBeforeFloatDomAddParam extends IEventBase {
    /**
     * The workbook instance currently being operated on. {@link FWorkbook}
     */
    workbook: FWorkbook;
    /**
     * Collection of float dom drawings to be added.
     */
    drawings: ISheetFloatDom[];
}
export interface IFloatDomAddedParam extends IEventBase {
    /**
     * The workbook instance currently being operated on. {@link FWorkbook}
     */
    workbook: FWorkbook;
    /**
     * Collection of float dom drawings that were added.
     */
    drawings: ISheetFloatDom[];
}
export interface IBeforeFloatDomUpdateParam extends IEventBase {
    /**
     * The workbook instance currently being operated on. {@link FWorkbook}
     */
    workbook: FWorkbook;
    /**
     * Collection of float dom drawings to be updated.
     */
    drawings: ISheetFloatDom[];
}
export interface IFloatDomUpdatedParam extends IEventBase {
    /**
     * The workbook instance currently being operated on. {@link FWorkbook}
     */
    workbook: FWorkbook;
    /**
     * Collection of float dom drawings that were updated.
     */
    drawings: ISheetFloatDom[];
}
export interface IBeforeFloatDomDeleteParam extends IEventBase {
    /**
     * The workbook instance currently being operated on. {@link FWorkbook}
     */
    workbook: FWorkbook;
    /**
     * Collection of float dom drawings to be deleted.
     */
    drawings: ISheetFloatDom[];
}
export interface IFloatDomDeletedParam extends IEventBase {
    /**
     * The workbook instance currently being operated on. {@link FWorkbook}
     */
    workbook: FWorkbook;
    /**
     * Collection of float dom drawing ids that were deleted.
     */
    drawings: string[];
}
interface IFSheetsUIEventParamConfig {
    BeforeOverGridImageChange: IBeforeOverGridImageChangeParam;
    OverGridImageChanged: IOverGridImageChangedParam;
    BeforeOverGridImageInsert: IBeforeOverGridImageInsertParam;
    OverGridImageInserted: IOverGridImageInsertedParam;
    BeforeOverGridImageRemove: IBeforeOverGridImageRemoveParam;
    OverGridImageRemoved: IOverGridImageRemovedParam;
    BeforeOverGridImageSelect: IBeforeOverGridImageSelectParam;
    OverGridImageSelected: IOverGridImageSelectedParam;
    BeforeFloatDomAdd: IBeforeFloatDomAddParam;
    FloatDomAdded: IFloatDomAddedParam;
    BeforeFloatDomUpdate: IBeforeFloatDomUpdateParam;
    FloatDomUpdated: IFloatDomUpdatedParam;
    BeforeFloatDomDelete: IBeforeFloatDomDeleteParam;
    FloatDomDeleted: IFloatDomDeletedParam;
}
declare module '@univerjs/core/facade' {
    interface FEventName extends IFDrawingEventNameMixin {
    }
    interface IEventParamConfig extends IFSheetsUIEventParamConfig {
    }
}
export {};
