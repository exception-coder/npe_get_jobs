import { IUser } from '@univerjs/core';
import { UniverRenderingContext } from '../../../context';
import { IWatermarkConfigWithType } from './type';
import { Layer } from '../../../layer';
export declare class WatermarkLayer extends Layer {
    private _config;
    private _image;
    private _user;
    render(ctx?: UniverRenderingContext, isMaxLayer?: boolean): this;
    updateConfig(config?: IWatermarkConfigWithType, user?: IUser): void;
    private _renderWatermark;
}
