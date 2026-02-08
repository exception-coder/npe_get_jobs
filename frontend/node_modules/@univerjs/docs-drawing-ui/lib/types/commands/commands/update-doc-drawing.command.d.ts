import { ICommand, IDocDrawingBase, IDocDrawingPosition, IObjectPositionH, IObjectPositionV, ISize } from '@univerjs/core';
export declare enum TextWrappingStyle {
    INLINE = "inline",
    BEHIND_TEXT = "behindText",
    IN_FRONT_OF_TEXT = "inFrontOfText",
    WRAP_SQUARE = "wrapSquare",
    WRAP_TOP_AND_BOTTOM = "wrapTopAndBottom"
}
/**
 * The command to update drawing wrapping style.
 */
export declare const UpdateDocDrawingWrappingStyleCommand: ICommand;
/**
 * The command to update drawing wrap text.
 */
export declare const UpdateDocDrawingDistanceCommand: ICommand;
/**
 * The command to update drawing wrap text.
 */
export declare const UpdateDocDrawingWrapTextCommand: ICommand;
export interface IDrawingDocTransform {
    drawingId: string;
    key: 'size' | 'angle' | 'positionH' | 'positionV';
    value: ISize | number | IObjectPositionH | IObjectPositionV;
}
export interface IUpdateDrawingDocTransformParams {
    unitId: string;
    subUnitId: string;
    drawings: IDrawingDocTransform[];
}
/**
 * The command to update drawing position.
 */
export declare const UpdateDrawingDocTransformCommand: ICommand;
export interface IMoveInlineDrawingParams {
    unitId: string;
    subUnitId: string;
    drawing: IDocDrawingBase;
    offset: number;
    segmentId: string;
    segmentPage: number;
    needRefreshDrawings?: boolean;
}
/**
 * The command to move inline drawing.
 */
export declare const IMoveInlineDrawingCommand: ICommand;
export interface ITransformNonInlineDrawingParams {
    unitId: string;
    subUnitId: string;
    drawing: IDocDrawingBase;
    offset: number;
    docTransform: IDocDrawingPosition;
    segmentId: string;
    segmentPage: number;
}
/**
 * The command to transform non-inline drawing.
 */
export declare const ITransformNonInlineDrawingCommand: ICommand;
