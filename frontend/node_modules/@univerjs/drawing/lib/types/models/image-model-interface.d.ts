import { IDrawingParam, ISrcRect, Nullable, PresetGeometryType, Serializable } from '@univerjs/core';
import { ImageSourceType } from '../services/image-io.service';
export interface IImageData extends IDrawingParam {
    imageSourceType: ImageSourceType;
    source: string;
    /**
     * 20.1.8.55 srcRect (Source Rectangle)
     */
    srcRect?: Nullable<ISrcRect>;
    /**
     * 20.1.9.18 prstGeom (Preset geometry)
     */
    prstGeom?: Nullable<PresetGeometryType>;
}
export interface IDocFloatDomDataBase {
    componentKey: string;
    data?: Serializable;
    allowTransform?: boolean;
}
export interface IDocFloatDomData extends IDrawingParam, IDocFloatDomDataBase {
}
