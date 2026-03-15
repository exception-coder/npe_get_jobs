import { IPosition, BorderStyleTypes } from '@univerjs/core';
import { UniverRenderingContext } from '../context';
import { IDocumentSkeletonLine } from './i-document-skeleton-cached';
import { BORDER_TYPE as BORDER_LTRB, ORIENTATION_TYPE } from './const';
import { Vector2 } from './vector2';
export interface IContext2D extends CanvasRenderingContext2D {
    webkitBackingStorePixelRatio: number;
    mozBackingStorePixelRatio: number;
    msBackingStorePixelRatio: number;
    oBackingStorePixelRatio: number;
    backingStorePixelRatio: number;
}
export declare function getDevicePixelRatio(): number;
/**
 *
 * @param ctx canvas context
 * @param type top bottom left right
 * @param lineWidthBuffer Solving the problem of mitered corners in the drawing of borders thicker than 2 pixels, caused by the line segments being centered.
 * @param position border draw position
 */
export declare function drawLineByBorderType(ctx: UniverRenderingContext, type: BORDER_LTRB, lineWidthBuffer: number, position: IPosition): void;
export declare function drawDiagonalineByBorderType(ctx: UniverRenderingContext, style: BorderStyleTypes, type: BORDER_LTRB, position: IPosition): void;
export declare function clearLineByBorderType(ctx: UniverRenderingContext, type: BORDER_LTRB, position: IPosition): void;
export declare function setLineType(ctx: UniverRenderingContext, style: BorderStyleTypes): void;
export declare function getLineOffset(): number;
export declare function getLineWith(width: number): number;
export declare function getLineWidth(style: BorderStyleTypes): number;
export declare function calculateRectRotate(startPoint: Vector2, centerPoint: Vector2, radiusCenter: number, radiusVertex: number, offsetPoint?: Vector2): Vector2;
export declare function getRotateOrientation(angle: number): ORIENTATION_TYPE;
export declare function getRotateOffsetAndFarthestHypotenuse(lines: IDocumentSkeletonLine[], rectWidth: number, vertexAngle: number): {
    rotateTranslateXList: number[];
    rotatedHeight: number;
    rotatedWidth: number;
    fixOffsetX: number;
    fixOffsetY: number;
    rotateTranslateY: number;
};
/**
 * Align the resolution, an alignment needs to be done in special cases where the resolution is 1.5, 1.25, etc.
 * @returns {left: number, top: number} offset
 */
export declare function getTranslateInSpreadContextWithPixelRatio(): {
    left: number;
    top: number;
};
