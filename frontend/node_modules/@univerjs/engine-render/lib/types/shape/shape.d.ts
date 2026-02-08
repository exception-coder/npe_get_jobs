import { IOffset, IScale, ISize, Nullable } from '@univerjs/core';
import { IObjectFullState } from '../basics/interfaces';
import { IViewportInfo, Vector2 } from '../basics/vector2';
import { UniverRenderingContext } from '../context';
import { BaseObject, ObjectType } from '../base-object';
export type LineJoin = 'round' | 'bevel' | 'miter';
export type LineCap = 'butt' | 'round' | 'square';
export type PaintFirst = 'fill' | 'stroke';
export interface IShapeProps extends IObjectFullState, ISize, IOffset, IScale {
    rotateEnabled?: boolean;
    resizeEnabled?: boolean;
    borderEnabled?: boolean;
    hoverCursor?: Nullable<string>;
    moveCursor?: string | null;
    fillRule?: string;
    globalCompositeOperation?: string;
    evented?: boolean;
    visible?: boolean;
    paintFirst?: PaintFirst;
    stroke?: Nullable<string | CanvasGradient>;
    strokeScaleEnabled?: boolean;
    fill?: Nullable<string | CanvasGradient>;
    fillAfterStrokeEnabled?: boolean;
    hitStrokeWidth?: number | string;
    strokeLineJoin?: LineJoin;
    strokeLineCap?: LineCap;
    shadowColor?: Nullable<string>;
    shadowBlur?: number;
    shadowOffset?: Nullable<Vector2>;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
    shadowOpacity?: number;
    shadowEnabled?: boolean;
    shadowForStrokeEnabled?: boolean;
    strokeDashArray?: Nullable<number[]>;
    strokeDashOffset?: number;
    strokeMiterLimit?: number;
    strokeWidth?: number;
    parent?: IScale;
}
export declare const SHAPE_OBJECT_ARRAY: string[];
export declare abstract class Shape<T extends IShapeProps> extends BaseObject {
    private _hoverCursor;
    private _moveCursor;
    private _fillRule;
    private _globalCompositeOperation;
    private _paintFirst;
    private _stroke;
    private _strokeScaleEnabled;
    private _fill;
    private _fillAfterStrokeEnabled;
    private _hitStrokeWidth;
    private _strokeLineJoin;
    private _strokeLineCap;
    private _shadowColor;
    private _shadowBlur;
    private _shadowOffset;
    private _shadowOffsetX;
    private _shadowOffsetY;
    private _shadowOpacity;
    private _shadowEnabled;
    private _shadowForStrokeEnabled;
    private _strokeDashArray;
    private _strokeDashOffset;
    private _strokeMiterLimit;
    private _type;
    objectType: ObjectType;
    constructor(key?: string, props?: T);
    get hoverCursor(): Nullable<string>;
    get moveCursor(): string | null;
    get fillRule(): string;
    get globalCompositeOperation(): string;
    get paintFirst(): PaintFirst;
    get stroke(): Nullable<string | CanvasGradient>;
    get strokeScaleEnabled(): boolean;
    get fill(): Nullable<string | CanvasGradient>;
    get fillAfterStrokeEnabled(): boolean;
    get hitStrokeWidth(): string | number;
    get strokeLineJoin(): LineJoin;
    get strokeLineCap(): LineCap;
    get shadowColor(): Nullable<string>;
    get shadowBlur(): number;
    get shadowOffset(): Nullable<Vector2>;
    get shadowOffsetX(): number;
    get shadowOffsetY(): number;
    get shadowOpacity(): number;
    get shadowEnabled(): boolean;
    get shadowForStrokeEnabled(): boolean;
    get strokeDashArray(): Nullable<number[]>;
    get strokeDashOffset(): number;
    get strokeMiterLimit(): number;
    static drawWith(ctx: UniverRenderingContext, props: IShapeProps): void;
    protected static _renderPaintInOrder(ctx: UniverRenderingContext, props: IShapeProps): void;
    /**
     * @private
     * @param {UniverRenderingContext} ctx SheetContext to render on
     */
    private static _renderFill;
    /**
     * @private
     * @param {UniverRenderingContext} ctx SheetContext to render on
     */
    private static _renderStroke;
    private static _removeShadow;
    private static _setFillStyles;
    private static _setStrokeStyles;
    render(mainCtx: UniverRenderingContext, bounds?: IViewportInfo): this;
    /**
     * if BASE_OBJECT_ARRAY_Set.has(key) not exist, then this[_key] = props[key],
     * @param props
     */
    setProps(props?: T): Shape<T>;
    toJson(): {
        [x: string]: any;
    };
    protected _draw(ctx: UniverRenderingContext, bounds?: IViewportInfo): void;
    private _initialProps;
}
