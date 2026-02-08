import { IUser, Nullable } from '@univerjs/core';
import { UniverRenderingContext } from '../../../context';
import { IImageWatermarkConfig, ITextWatermarkConfig, IUserInfoWatermarkConfig, IWatermarkConfigWithType } from './type';
export declare function renderWatermark(ctx: UniverRenderingContext, config: IWatermarkConfigWithType, image: Nullable<HTMLImageElement>, userInfo: Nullable<IUser>): void;
export declare function renderUserInfoWatermark(ctx: UniverRenderingContext, config: IUserInfoWatermarkConfig, userInfo: Nullable<IUser>): void;
export declare function renderTextWatermark(ctx: UniverRenderingContext, config: ITextWatermarkConfig): void;
export declare function renderImageWatermark(ctx: UniverRenderingContext, config: IImageWatermarkConfig, image: Nullable<HTMLImageElement>): void;
