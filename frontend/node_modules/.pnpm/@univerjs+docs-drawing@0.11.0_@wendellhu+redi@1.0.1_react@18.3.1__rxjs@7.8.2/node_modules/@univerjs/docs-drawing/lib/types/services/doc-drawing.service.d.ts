import { IDocDrawingBase } from '@univerjs/core';
import { IDocFloatDomData, IImageData, IUnitDrawingService, UnitDrawingService } from '@univerjs/drawing';
export interface IDocImage extends IImageData, IDocDrawingBase {
}
/**
 * test type
 */
export interface IDocShape extends IDocDrawingBase {
}
export interface IDocFloatDom extends IDocFloatDomData, IDocDrawingBase {
}
export type IDocDrawing = IDocImage | IDocFloatDom | IDocShape;
type OptionalField<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type IDocUpdateDrawing = OptionalField<IDocDrawing, 'drawingType' | 'layoutType' | 'docTransform' | 'description' | 'title'>;
export declare class DocDrawingService extends UnitDrawingService<IDocDrawing> {
}
export interface IDocDrawingService extends IUnitDrawingService<IDocDrawing> {
}
export declare const IDocDrawingService: import('@wendellhu/redi').IdentifierDecorator<IDocDrawingService>;
export {};
