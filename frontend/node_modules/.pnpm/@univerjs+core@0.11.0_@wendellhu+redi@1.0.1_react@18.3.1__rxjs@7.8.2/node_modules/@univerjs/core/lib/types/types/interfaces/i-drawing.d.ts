import { IAbsoluteTransform } from '../../shared/shape';
import { Nullable } from '../../shared/types';
import { BooleanNumber } from '../enum/text-style';
/**
 * The layer type of Drawing, used to distinguish between forward, backward, front, and back
 */
export declare enum ArrangeTypeEnum {
    /**
     * Move the current object one layer up, possibly covering other objects
     */
    forward = 0,
    /**
     * Move the current object one layer down, possibly being covered by other objects
     */
    backward = 1,
    /**
     * Move the current object to the top layer
     */
    front = 2,
    /**
     * Move the current object to the bottom layer
     */
    back = 3
}
/**
 * Types of drawings, used to distinguish between images, shapes, charts, tables, SmartArt, videos, DrawingGroup, Unit, Dom, etc.
 */
export declare enum DrawingTypeEnum {
    /**
     * Unrecognized drawing type, requires user to determine
     */
    UNRECOGNIZED = -1,
    /**
     * Image
     */
    DRAWING_IMAGE = 0,
    /**
     * Shape, similar to shapes in Office, including circles, rectangles, lines, etc.
     */
    DRAWING_SHAPE = 1,
    /**
     * Chart
     */
    DRAWING_CHART = 2,
    /**
     * Table
     */
    DRAWING_TABLE = 3,
    /**
     * SmartArt, similar to SmartArt in Office
     */
    DRAWING_SMART_ART = 4,
    /**
     * Video
     */
    DRAWING_VIDEO = 5,
    /**
     * Drawing group
     */
    DRAWING_GROUP = 6,
    /**
     * Univer object, allows inserting images, tables, documents, slides as floating objects into the document
     */
    DRAWING_UNIT = 7,
    /**
     * Dom element, allows inserting HTML elements as floating objects into the document
     */
    DRAWING_DOM = 8
}
export type DrawingType = DrawingTypeEnum | number;
export interface IDrawingSpace {
    unitId: string;
    subUnitId: string;
}
export interface IDrawingSearch extends IDrawingSpace {
    drawingId: string;
}
export interface IRotationSkewFlipTransform {
    angle?: number;
    skewX?: number;
    skewY?: number;
    flipX?: boolean;
    flipY?: boolean;
}
export interface ITransformState extends IAbsoluteTransform, IRotationSkewFlipTransform {
}
export interface IDrawingParam extends IDrawingSearch {
    drawingType: DrawingType;
    transform?: Nullable<ITransformState>;
    transforms?: Nullable<ITransformState[]>;
    isMultiTransform?: BooleanNumber;
    groupId?: string;
    allowTransform?: boolean;
}
