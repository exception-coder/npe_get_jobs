import { Canvas } from '../canvas';
import { SHEET_VIEWPORT_KEY } from '../components/sheets/interfaces';
import { DeepImmutable, FloatArray } from './i-events';
import { Transform } from './transform';
export interface IPoint {
    x: number;
    y: number;
}
export declare class Vector2 implements IPoint {
    /** defines the first coordinate */
    x: number;
    /** defines the second coordinate */
    y: number;
    /**
     * Creates a new Vector2 from the given x and y coordinates
     * @param x defines the first coordinate
     * @param y defines the second coordinate
     */
    constructor(
    /** defines the first coordinate */
    x?: number, 
    /** defines the second coordinate */
    y?: number);
    /**
     * Gets a new Vector2(0, 0)
     * @returns a new Vector2
     */
    static Zero(): Vector2;
    /**
     * Gets a new Vector2(1, 1)
     * @returns a new Vector2
     */
    static One(): Vector2;
    /**
     * Gets a new Vector2 set from the given index element of the given array
     * @param array defines the data source
     * @param offset defines the offset in the data source
     * @returns a new Vector2
     */
    static FromArray(array: DeepImmutable<ArrayLike<number>>, offset?: number): Vector2;
    /**
     * Sets "result" from the given index element of the given array
     * @param array defines the data source
     * @param offset defines the offset in the data source
     * @param result defines the target vector
     */
    static FromArrayToRef(array: ArrayLike<number>, offset: number, result: Vector2): void;
    /**
     * Gets a new Vector2 located for "amount" (float) on the CatmullRom spline defined by the given four Vector2
     * @param value1 defines 1st point of control
     * @param value2 defines 2nd point of control
     * @param value3 defines 3rd point of control
     * @param value4 defines 4th point of control
     * @param amount defines the interpolation factor
     * @returns a new Vector2
     */
    static CatmullRom(value1: DeepImmutable<Vector2>, value2: DeepImmutable<Vector2>, value3: DeepImmutable<Vector2>, value4: DeepImmutable<Vector2>, amount: number): Vector2;
    /**
     * Returns a new Vector2 set with same the coordinates than "value" ones if the vector "value" is in the square defined by "min" and "max".
     * If a coordinate of "value" is lower than "min" coordinates, the returned Vector2 is given this "min" coordinate.
     * If a coordinate of "value" is greater than "max" coordinates, the returned Vector2 is given this "max" coordinate
     * @param value defines the value to clamp
     * @param min defines the lower limit
     * @param max defines the upper limit
     * @returns a new Vector2
     */
    static Clamp(value: DeepImmutable<Vector2>, min: DeepImmutable<Vector2>, max: DeepImmutable<Vector2>): Vector2;
    /**
     * Returns a new Vector2 located for "amount" (float) on the Hermite spline defined by the vectors "value1", "value2", "tangent1", "tangent2"
     * @param value1 defines the 1st control point
     * @param tangent1 defines the outgoing tangent
     * @param value2 defines the 2nd control point
     * @param tangent2 defines the incoming tangent
     * @param amount defines the interpolation factor
     * @returns a new Vector2
     */
    static Hermite(value1: DeepImmutable<Vector2>, tangent1: DeepImmutable<Vector2>, value2: DeepImmutable<Vector2>, tangent2: DeepImmutable<Vector2>, amount: number): Vector2;
    /**
     * Returns a new Vector2 which is the 1st derivative of the Hermite spline defined by the vectors "value1", "value2", "tangent1", "tangent2".
     * @param value1 defines the first control point
     * @param tangent1 defines the first tangent
     * @param value2 defines the second control point
     * @param tangent2 defines the second tangent
     * @param time define where the derivative must be done
     * @returns 1st derivative
     */
    static Hermite1stDerivative(value1: DeepImmutable<Vector2>, tangent1: DeepImmutable<Vector2>, value2: DeepImmutable<Vector2>, tangent2: DeepImmutable<Vector2>, time: number): Vector2;
    /**
     * Returns a new Vector2 which is the 1st derivative of the Hermite spline defined by the vectors "value1", "value2", "tangent1", "tangent2".
     * @param value1 defines the first control point
     * @param tangent1 defines the first tangent
     * @param value2 defines the second control point
     * @param tangent2 defines the second tangent
     * @param time define where the derivative must be done
     * @param result define where the derivative will be stored
     */
    static Hermite1stDerivativeToRef(value1: DeepImmutable<Vector2>, tangent1: DeepImmutable<Vector2>, value2: DeepImmutable<Vector2>, tangent2: DeepImmutable<Vector2>, time: number, result: Vector2): void;
    /**
     * Returns a new Vector2 located for "amount" (float) on the linear interpolation between the vector "start" adn the vector "end".
     * @param start defines the start vector
     * @param end defines the end vector
     * @param amount defines the interpolation factor
     * @returns a new Vector2
     */
    static Lerp(start: DeepImmutable<Vector2>, end: DeepImmutable<Vector2>, amount: number): Vector2;
    /**
     * Gets the dot product of the vector "left" and the vector "right"
     * @param left defines first vector
     * @param right defines second vector
     * @returns the dot product (float)
     */
    static Dot(left: DeepImmutable<Vector2>, right: DeepImmutable<Vector2>): number;
    /**
     * Returns a new Vector2 equal to the normalized given vector
     * @param vector defines the vector to normalize
     * @returns a new Vector2
     */
    static Normalize(vector: DeepImmutable<Vector2>): Vector2;
    /**
     * Normalize a given vector into a second one
     * @param vector defines the vector to normalize
     * @param result defines the vector where to store the result
     */
    static NormalizeToRef(vector: DeepImmutable<Vector2>, result: Vector2): void;
    /**
     * Gets a new Vector2 set with the minimal coordinate values from the "left" and "right" vectors
     * @param left defines 1st vector
     * @param right defines 2nd vector
     * @returns a new Vector2
     */
    static Minimize(left: DeepImmutable<Vector2>, right: DeepImmutable<Vector2>): Vector2;
    /**
     * Gets a new Vector2 set with the maximal coordinate values from the "left" and "right" vectors
     * @param left defines 1st vector
     * @param right defines 2nd vector
     * @returns a new Vector2
     */
    static Maximize(left: DeepImmutable<Vector2>, right: DeepImmutable<Vector2>): Vector2;
    /**
     * Determines if a given vector is included in a triangle
     * @param p defines the vector to test
     * @param p0 defines 1st triangle point
     * @param p1 defines 2nd triangle point
     * @param p2 defines 3rd triangle point
     * @returns true if the point "p" is in the triangle defined by the vectors "p0", "p1", "p2"
     */
    static PointInTriangle(p: DeepImmutable<Vector2>, p0: DeepImmutable<Vector2>, p1: DeepImmutable<Vector2>, p2: DeepImmutable<Vector2>): boolean;
    /**
     * Gets the distance between the vectors "value1" and "value2"
     * @param value1 defines first vector
     * @param value2 defines second vector
     * @returns the distance between vectors
     */
    static Distance(value1: DeepImmutable<Vector2>, value2: DeepImmutable<Vector2>): number;
    /**
     * Returns the squared distance between the vectors "value1" and "value2"
     * @param value1 defines first vector
     * @param value2 defines second vector
     * @returns the squared distance between vectors
     */
    static DistanceSquared(value1: DeepImmutable<Vector2>, value2: DeepImmutable<Vector2>): number;
    /**
     * Gets a new Vector2 located at the center of the vectors "value1" and "value2"
     * @param value1 defines first vector
     * @param value2 defines second vector
     * @returns a new Vector2
     */
    static Center(value1: DeepImmutable<Vector2>, value2: DeepImmutable<Vector2>): Vector2;
    /**
     * Gets the center of the vectors "value1" and "value2" and stores the result in the vector "ref"
     * @param value1 defines first vector
     * @param value2 defines second vector
     * @param ref defines third vector
     * @returns ref
     */
    static CenterToRef(value1: DeepImmutable<Vector2>, value2: DeepImmutable<Vector2>, ref: DeepImmutable<Vector2>): Vector2;
    /**
     * Gets the shortest distance (float) between the point "p" and the segment defined by the two points "segA" and "segB".
     * @param p defines the middle point
     * @param segA defines one point of the segment
     * @param segB defines the other point of the segment
     * @returns the shortest distance
     */
    static DistanceOfPointFromSegment(p: DeepImmutable<Vector2>, segA: DeepImmutable<Vector2>, segB: DeepImmutable<Vector2>): number;
    static create(x: number, y: number): Vector2;
    /**
     * Gets a string with the Vector2 coordinates
     * @returns a string with the Vector2 coordinates
     */
    toString(): string;
    /**
     * Gets class name
     * @returns the string "Vector2"
     */
    getClassName(): string;
    /**
     * Gets current vector hash code
     * @returns the Vector2 hash code as a number
     */
    getHashCode(): number;
    /**
     * Sets the Vector2 coordinates in the given array or Float32Array from the given index.
     * @param array defines the source array
     * @param index defines the offset in source array
     * @returns the current Vector2
     */
    toArray(array: FloatArray, index?: number): Vector2;
    /**
     * Update the current vector from an array
     * @param array defines the destination array
     * @param index defines the offset in the destination array
     * @returns the current Vector3
     */
    fromArray(array: FloatArray, index?: number): Vector2;
    /**
     * Copy the current vector to an array
     * @returns a new array with 2 elements: the Vector2 coordinates.
     */
    asArray(): number[];
    /**
     * Sets the Vector2 coordinates with the given Vector2 coordinates
     * @param source defines the source Vector2
     * @returns the current updated Vector2
     */
    copyFrom(source: DeepImmutable<Vector2>): Vector2;
    /**
     * Sets the Vector2 coordinates with the given floats
     * @param x defines the first coordinate
     * @param y defines the second coordinate
     * @returns the current updated Vector2
     */
    copyFromFloats(x: number, y: number): Vector2;
    /**
     * Sets the Vector2 coordinates with the given floats
     * @param x defines the first coordinate
     * @param y defines the second coordinate
     * @returns the current updated Vector2
     */
    set(x: number, y: number): Vector2;
    /**
     * Add another vector with the current one
     * @param otherVector defines the other vector
     * @returns a new Vector2 set with the addition of the current Vector2 and the given one coordinates
     */
    add(otherVector: DeepImmutable<Vector2>): Vector2;
    /**
     * Sets the "result" coordinates with the addition of the current Vector2 and the given one coordinates
     * @param otherVector defines the other vector
     * @param result defines the target vector
     * @returns the unmodified current Vector2
     */
    addToRef(otherVector: DeepImmutable<Vector2>, result: Vector2): Vector2;
    addByPoint(x: number, y: number): Vector2;
    /**
     * Set the Vector2 coordinates by adding the given Vector2 coordinates
     * @param otherVector defines the other vector
     * @returns the current updated Vector2
     */
    addInPlace(otherVector: DeepImmutable<Vector2>): Vector2;
    /**
     * Gets a new Vector2 set with the subtracted coordinates of the given one from the current Vector2
     * @param otherVector defines the other vector
     * @returns a new Vector2
     */
    subtract(otherVector: Vector2): Vector2;
    subtractByPoint(x: number, y: number): Vector2;
    /**
     * Sets the "result" coordinates with the subtraction of the given one from the current Vector2 coordinates.
     * @param otherVector defines the other vector
     * @param result defines the target vector
     * @returns the unmodified current Vector2
     */
    subtractToRef(otherVector: DeepImmutable<Vector2>, result: Vector2): Vector2;
    /**
     * Sets the current Vector2 coordinates by subtracting from it the given one coordinates
     * @param otherVector defines the other vector
     * @returns the current updated Vector2
     */
    subtractInPlace(otherVector: DeepImmutable<Vector2>): Vector2;
    /**
     * Multiplies in place the current Vector2 coordinates by the given ones
     * @param otherVector defines the other vector
     * @returns the current updated Vector2
     */
    multiplyInPlace(otherVector: DeepImmutable<Vector2>): Vector2;
    /**
     * Returns a new Vector2 set with the multiplication of the current Vector2 and the given one coordinates
     * @param otherVector defines the other vector
     * @returns a new Vector2
     */
    multiply(otherVector: DeepImmutable<Vector2>): Vector2;
    /**
     * Sets "result" coordinates with the multiplication of the current Vector2 and the given one coordinates
     * @param otherVector defines the other vector
     * @param result defines the target vector
     * @returns the unmodified current Vector2
     */
    multiplyToRef(otherVector: DeepImmutable<Vector2>, result: Vector2): Vector2;
    /**
     * Gets a new Vector2 set with the Vector2 coordinates multiplied by the given floats
     * @param x defines the first coordinate
     * @param y defines the second coordinate
     * @returns a new Vector2
     */
    multiplyByFloats(x: number, y: number): Vector2;
    /**
     * Returns a new Vector2 set with the Vector2 coordinates divided by the given one coordinates
     * @param otherVector defines the other vector
     * @returns a new Vector2
     */
    divide(otherVector: Vector2): Vector2;
    /**
     * Sets the "result" coordinates with the Vector2 divided by the given one coordinates
     * @param otherVector defines the other vector
     * @param result defines the target vector
     * @returns the unmodified current Vector2
     */
    divideToRef(otherVector: DeepImmutable<Vector2>, result: Vector2): Vector2;
    /**
     * Divides the current Vector2 coordinates by the given ones
     * @param otherVector defines the other vector
     * @returns the current updated Vector2
     */
    divideInPlace(otherVector: DeepImmutable<Vector2>): Vector2;
    /**
     * Gets a new Vector2 with current Vector2 negated coordinates
     * @returns a new Vector2
     */
    negate(): Vector2;
    /**
     * Negate this vector in place
     * @returns this
     */
    negateInPlace(): Vector2;
    /**
     * Negate the current Vector2 and stores the result in the given vector "result" coordinates
     * @param result defines the Vector3 object where to store the result
     * @returns the current Vector2
     */
    negateToRef(result: Vector2): Vector2;
    /**
     * Multiply the Vector2 coordinates by scale
     * @param scale defines the scaling factor
     * @returns the current updated Vector2
     */
    scaleInPlace(scale: number): Vector2;
    /**
     * Returns a new Vector2 scaled by "scale" from the current Vector2
     * @param scale defines the scaling factor
     * @returns a new Vector2
     */
    scale(scale: number): Vector2;
    /**
     * Scale the current Vector2 values by a factor to a given Vector2
     * @param scale defines the scale factor
     * @param result defines the Vector2 object where to store the result
     * @returns the unmodified current Vector2
     */
    scaleToRef(scale: number, result: Vector2): Vector2;
    /**
     * Scale the current Vector2 values by a factor and add the result to a given Vector2
     * @param scale defines the scale factor
     * @param result defines the Vector2 object where to store the result
     * @returns the unmodified current Vector2
     */
    scaleAndAddToRef(scale: number, result: Vector2): Vector2;
    /**
     * Gets a boolean if two vectors are equals
     * @param otherVector defines the other vector
     * @returns true if the given vector coordinates strictly equal the current Vector2 ones
     */
    equals(otherVector: DeepImmutable<Vector2>): boolean;
    /**
     * Gets a new Vector2 from current Vector2 floored values
     * eg (1.2, 2.31) returns (1, 2)
     * @returns a new Vector2
     */
    floor(): Vector2;
    /**
     * Gets a new Vector2 from current Vector2 fractional values
     * eg (1.2, 2.31) returns (0.2, 0.31)
     * @returns a new Vector2
     */
    fract(): Vector2;
    /**
     * Rotate the current vector into a given result vector
     * @param angle defines the rotation angle
     * @returns the current vector
     */
    rotate(angle: number): this;
    /**
     * Rotate the current vector into a given result vector
     * @param angle defines the rotation angle
     * @param result defines the result vector where to store the rotated vector
     * @returns the current vector
     */
    rotateToRef(angle: number, result: Vector2): this;
    rotateByPoint(angle: number, originPoint?: Vector2): this;
    transformCoordinateOnRotate(angle: number): this;
    /**
     * Gets the length of the vector
     * @returns the vector length (float)
     */
    length(): number;
    /**
     * Gets the vector squared length
     * @returns the vector squared length (float)
     */
    lengthSquared(): number;
    /**
     * Normalize the vector
     * @returns the current updated Vector2
     */
    normalize(): Vector2;
    /**
     * Gets a new Vector2 copied from the Vector2
     * @returns a new Vector2
     */
    clone(): Vector2;
}
export interface IBounds {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface IBoundRect {
    tl: Vector2;
    tr: Vector2;
    bl: Vector2;
    br: Vector2;
    dx: number;
    dy: number;
}
export interface IBoundRectNoAngle {
    left: number;
    top: number;
    right: number;
    bottom: number;
}
export interface IViewportInfo {
    viewBound: IBoundRectNoAngle;
    diffBounds: IBoundRectNoAngle[];
    /**
     * scroll right further diffX < 0
     * previewBound.x - viewbound.x
     */
    diffX: number;
    diffY: number;
    /**
     * The physical position of the frozen rows and columns on the canvas, used for drawImage.
     * For example, if the freezing starts from the fourth column, the left position would be 4 * column + rowHeaderWidth.
     * The physical position means the top and left values have already considered the scaling factor.
     */
    viewPortPosition: IBoundRectNoAngle;
    viewportKey: string | SHEET_VIEWPORT_KEY;
    /**
     * In the future, a number will be used to indicate the reason for the "dirty" status
     * Here, a binary value is used to facilitate computation.
     */
    isDirty?: number;
    isForceDirty?: boolean;
    allowCache?: boolean;
    cacheBound: IBoundRectNoAngle;
    diffCacheBounds: IBoundRectNoAngle[];
    cacheViewPortPosition: IBoundRectNoAngle;
    shouldCacheUpdate: number;
    sceneTrans: Transform;
    cacheCanvas?: Canvas;
    leftOrigin: number;
    topOrigin: number;
    bufferEdgeX: number;
    bufferEdgeY: number;
    updatePrevCacheBounds?: (viewbound: IBoundRectNoAngle) => void;
}
export interface IViewportInfos {
    left: number;
    right: number;
    top: number;
    bottom: number;
    width: number;
    height: number;
}
