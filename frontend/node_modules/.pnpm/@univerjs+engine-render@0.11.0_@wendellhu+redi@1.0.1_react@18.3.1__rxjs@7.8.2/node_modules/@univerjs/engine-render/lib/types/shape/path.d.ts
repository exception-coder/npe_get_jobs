import { UniverRenderingContext } from '../context';
import { IShapeProps, Shape } from './shape';
interface IPathDataArray {
    command: string;
    points: number[];
    start: {
        x: number;
        y: number;
    };
    pathLength: number;
}
export interface IPathProps extends IShapeProps {
    data?: string;
    dataArray?: IPathDataArray[];
}
export declare const PATH_OBJECT_ARRAY: string[];
export declare class Path extends Shape<IPathProps> {
    private _dataArray;
    private _pathLength;
    private _selfRectCache;
    private _reCalculateCache;
    constructor(key?: string, props?: IPathProps);
    get dataArray(): IPathDataArray[];
    static drawWith(ctx: UniverRenderingContext, props: IPathProps | Path): void;
    static getLineLength(x1: number, y1: number, x2: number, y2: number): number;
    static getPointOnLine(dist: number, P1x: number, P1y: number, P2x: number, P2y: number, fromX?: number, fromY?: number): {
        x: number;
        y: number;
    };
    static getPointOnCubicBezier(pct: number, P1x: number, P1y: number, P2x: number, P2y: number, P3x: number, P3y: number, P4x: number, P4y: number): {
        x: number;
        y: number;
    };
    static getPointOnQuadraticBezier(pct: number, P1x: number, P1y: number, P2x: number, P2y: number, P3x: number, P3y: number): {
        x: number;
        y: number;
    };
    static getPointOnEllipticalArc(cx: number, cy: number, rx: number, ry: number, theta: number, psi: number): {
        x: number;
        y: number;
    };
    static parsePathData(data: string): IPathDataArray[];
    static calcLength(x: number, y: number, cmd: string, points: number[]): number;
    static convertEndpointToCenterParameterization(x1: number, y1: number, x2: number, y2: number, fa: number, fs: number, rx: number, ry: number, psiDeg: number): number[];
    toJson(): {
        [x: string]: any;
    };
    getState(): {
        left: number;
        top: number;
        width: number;
        height: number;
        scaleX: number;
        scaleY: number;
        angle: number;
        skewX: number;
        skewY: number;
        flipX: boolean;
        flipY: boolean;
    };
    getRect(): {
        left: number;
        top: number;
        width: number;
        height: number;
    };
    /**
     * Return length of the path.
     * @method
     * @returns {number} length
     * @example
     * var length = path.getLength();
     */
    getLength(): number;
    /**
     * Get point on path at specific length of the path
     * @method
     * @param {number} length length
     * @returns {object} point {x,y} point
     * @example
     * var point = path.getPointAtLength(10);
     */
    getPointAtLength(length: number): {
        x: number;
        y: number;
    } | null;
    protected _draw(ctx: UniverRenderingContext): void;
    private _setFixBoundingBox;
    private _getSelfRect;
}
export {};
