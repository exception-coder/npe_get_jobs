import { IDrawingParam, IRotationSkewFlipTransform, Serializable } from '@univerjs/core';
import { IImageData, IUnitDrawingService, UnitDrawingService } from '@univerjs/drawing';
import { ISheetOverGridPosition } from '@univerjs/sheets';
export declare enum SheetDrawingAnchorType {
    /**
     * Only the position of the drawing follows the cell changes. When rows or columns are inserted or deleted, the position of the drawing changes, but the size remains the same.
     */
    Position = "0",
    /**
     * The size and position of the drawing follow the cell changes. When rows or columns are inserted or deleted, the size and position of the drawing change accordingly.
     */
    Both = "1",
    /**
     * The size and position of the drawing do not follow the cell changes. When rows or columns are inserted or deleted, the position and size of the drawing remain unchanged.
     */
    None = "2"
}
export interface ISheetDrawingPosition extends IRotationSkewFlipTransform, ISheetOverGridPosition {
}
export interface ISheetDrawingBase {
    sheetTransform: ISheetDrawingPosition;
    anchorType?: SheetDrawingAnchorType;
}
export interface ISheetImage extends IImageData, ISheetDrawingBase {
}
/**
 * test type
 */
export interface ISheetShape extends IDrawingParam, ISheetDrawingBase {
}
export interface IFloatDomData extends IDrawingParam {
    componentKey: string;
    data?: Serializable;
    allowTransform?: boolean;
}
export interface ISheetFloatDom extends IFloatDomData, ISheetDrawingBase {
}
export type ISheetDrawing = ISheetImage | ISheetShape | ISheetFloatDom;
type OptionalField<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type ISheetUpdateDrawing = OptionalField<ISheetImage | ISheetShape, 'sheetTransform'>;
export declare class SheetDrawingService extends UnitDrawingService<ISheetDrawing> {
}
export interface ISheetDrawingService extends IUnitDrawingService<ISheetDrawing> {
}
export declare const ISheetDrawingService: import('@wendellhu/redi').IdentifierDecorator<ISheetDrawingService>;
export {};
