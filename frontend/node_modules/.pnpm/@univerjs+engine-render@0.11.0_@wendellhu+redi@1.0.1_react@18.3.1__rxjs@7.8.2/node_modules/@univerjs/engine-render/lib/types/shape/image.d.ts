import { ISrcRect, Nullable, PresetGeometryType } from '@univerjs/core';
import { IObjectFullState, IViewportInfo, RENDER_CLASS_TYPE } from '../basics';
import { UniverRenderingContext } from '../context';
import { IShapeProps, Shape } from './shape';
import { ObjectType } from '../base-object';
export interface IImageProps extends IShapeProps {
    image?: HTMLImageElement;
    url?: string;
    success?: () => void;
    fail?: () => void;
    /**
     * 20.1.8.55 srcRect (Source Rectangle)
     */
    srcRect?: Nullable<ISrcRect>;
    /**
     * 20.1.9.18 prstGeom (Preset geometry)
     */
    prstGeom?: Nullable<PresetGeometryType>;
    opacity?: number;
}
export declare class Image extends Shape<IImageProps> {
    protected _props: IImageProps;
    protected _native: Nullable<HTMLImageElement>;
    private _renderByCropper;
    private _transformCalculateSrcRect;
    objectType: ObjectType;
    constructor(id: string, config: IImageProps);
    get srcRect(): Nullable<ISrcRect>;
    get prstGeom(): Nullable<PresetGeometryType>;
    get opacity(): number;
    setOpacity(opacity: number): void;
    get classType(): RENDER_CLASS_TYPE;
    transformByStateCloseCropper(option: IObjectFullState): void;
    changeSource(url: string): void;
    resetSize(): void;
    setPrstGeom(prstGeom?: Nullable<PresetGeometryType>): void;
    setSrcRect(srcRect?: Nullable<ISrcRect>): void;
    getProps(): IImageProps;
    getNative(): Nullable<HTMLImageElement>;
    getNativeSize(): {
        width: number;
        height: number;
    };
    closeRenderByCropper(): void;
    openRenderByCropper(): void;
    calculateTransformWithSrcRect(): {
        left: number;
        top: number;
        width: number;
        height: number;
        angle: number;
    };
    private _transformBySrcRect;
    render(mainCtx: UniverRenderingContext, bounds?: IViewportInfo): this;
    protected _draw(ctx: UniverRenderingContext): void;
    private _init;
    private _updateSrcRectByTransform;
}
