import { ISrcRect, ITransformState, Nullable, PresetGeometryType } from '@univerjs/core';
import { IShapeProps, IViewportInfo, UniverRenderingContext, Vector2, Shape } from '@univerjs/engine-render';
export interface IImageCropperObjectProps extends IShapeProps {
    /**
     * 20.1.8.55 srcRect (Source Rectangle)
     */
    srcRect?: Nullable<ISrcRect>;
    /**
     * 20.1.9.18 prstGeom (Preset geometry)
     */
    prstGeom?: Nullable<PresetGeometryType>;
    applyTransform?: ITransformState;
    dragPadding?: number;
}
export declare class ImageCropperObject<T extends IImageCropperObjectProps = IImageCropperObjectProps> extends Shape<T> {
    private _srcRect;
    private _prstGeom;
    private _applyTransform;
    private _dragPadding;
    private _cacheCanvas;
    constructor(key?: string, props?: T);
    refreshSrcRect(value: Nullable<ISrcRect>, transform: Nullable<ITransformState>): void;
    get srcRect(): Nullable<ISrcRect>;
    dispose(): void;
    isHit(coord: Vector2): boolean;
    private _inSurround;
    render(mainCtx: UniverRenderingContext, bounds?: IViewportInfo): this;
    protected _draw(ctx: UniverRenderingContext): void;
    private _clipForApplyObject;
    private _applyProps;
    private _applyCache;
    private _initialCacheCanvas;
}
