import { IObjectFullState } from '../basics/interfaces';
import { IPoint, Vector2 } from '../basics/vector2';
import { UniverRenderingContext } from '../context';
import { IShapeProps, Shape } from './shape';
export interface IRegularPolygonProps extends IShapeProps {
    pointsGroup: IPoint[][];
}
export declare const REGULAR_POLYGON_OBJECT_ARRAY: string[];
export declare class RegularPolygon extends Shape<IRegularPolygonProps> {
    private _pointsGroup;
    constructor(key?: string, props?: IRegularPolygonProps);
    get pointsGroup(): IPoint[][];
    static drawWith(ctx: UniverRenderingContext, props: IRegularPolygonProps | RegularPolygon): void;
    isHit(coord: Vector2): boolean;
    private _contains;
    private _isOnLine;
    updatePointGroup(pointGroup: IPoint[][]): void;
    resizePolygon(preValue: IObjectFullState): void;
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
    protected _draw(ctx: UniverRenderingContext): void;
    private _setFixBoundingBox;
    private _getSelfRect;
}
