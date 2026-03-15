import { ITransformState } from '@univerjs/core';
import { Vector2 } from './vector2';
import { IRect } from './interfaces';
export declare const INITIAL_MATRIX: number[];
export declare class Transform {
    dirty: boolean;
    private _m;
    constructor(m?: number[]);
    static create(m?: number[]): Transform;
    reset(): void;
    /**
     * Copy universheet.Transform object
     * @method
     * @name universheet.Transform#copy
     * @returns {universheet.Transform}
     * @example
     * const tr = shape.getTransform().copy()
     */
    copy(): Transform;
    copyInto(tr: Transform): void;
    /**
     * Transform point
     * @method
     * @name universheet.Transform#point
     * @param {object} point 2D point(x, y)
     * @returns {object} 2D point(x, y)
     */
    applyPoint(point: Vector2, ignoreOffset?: boolean): Vector2;
    /**
     * Apply translation
     * @method
     * @name universheet.Transform#translate
     * @param {number} x
     * @param {number} y
     * @returns {universheet.Transform}
     */
    translate(x: number, y: number): this;
    /**
     * Apply scale
     * @method
     * @name universheet.Transform#scale
     * @param {number} sx
     * @param {number} sy
     * @returns {universheet.Transform}
     */
    scale(sx: number, sy: number): this;
    /**
     * Apply rotation
     * @method
     * @name universheet.Transform#rotate
     * @param {number} Degree  Angle in Degree
     * @returns {universheet.Transform}
     */
    rotate(deg: number): this;
    /**
     * Returns the translation
     * @method
     * @name universheet.Transform#getTranslation
     * @returns {object} 2D point(x, y)
     */
    getTranslation(): {
        x: number;
        y: number;
    };
    /**
     * Apply skew
     * @method
     * @name universheet.Transform#skew
     * @param {number} sx
     * @param {number} sy
     * @returns {universheet.Transform}
     */
    skew(sx: number, sy: number): this;
    /**
     * Transform multiplication
     * @method
     * @name universheet.Transform#multiply
     * @param {universheet.Transform} matrix
     * @returns {universheet.Transform}
     */
    multiply(matrix: Transform): this;
    /**
     * Invert the matrix
     * @method
     * @name universheet.Transform#invert
     * @returns {universheet.Transform}
     */
    invert(): this;
    /**
     * return matrix
     * @method
     * @name universheet.Transform#getMatrix
     */
    getMatrix(): number[];
    /**
     * return matrix
     * @method
     * @name universheet.Transform#getMatrix
     */
    getMatrixByAccurate(accurate?: number): number[];
    /**
     * set to absolute position via translation
     * @method
     * @name universheet.Transform#setAbsolutePosition
     * @returns {universheet.Transform}
     */
    setAbsolutePosition(coord: Vector2): this;
    /**
     * convert transformation matrix back into node's attributes
     * @method
     * @name universheet.Transform#decompose
     * @returns {universheet.Transform}
     */
    decompose(): {
        x: number;
        y: number;
        angle: number;
        scaleX: number;
        scaleY: number;
        skewX: number;
        skewY: number;
    };
    makeBoundingBoxFromPoints(points: Vector2[]): IRect;
    composeMatrix(options: ITransformState): this;
    clone(): Transform;
    /**
     * Returns a transform matrix starting from an object of the same kind of
     * the one returned from qrDecompose, useful also if you want to calculate some
     * transformations from an object that is not enLived yet.
     * is called DimensionsTransformMatrix because those properties are the one that influence
     * the size of the resulting box of the object.
     * @param  {object} options
     * @param  {number} [options.scaleX]
     * @param  {number} [options.scaleY]
     * @param  {boolean} [options.flipX]
     * @param  {boolean} [options.flipY]
     * @param  {number} [options.skewX]
     * @param  {number} [options.skewX]
     * @return {number[]} transform matrix
     */
    private _calcDimensionsMatrix;
    convert2DOMMatrix2D(): {
        a: number;
        b: number;
        c: number;
        d: number;
        e: number;
        f: number;
    };
}
