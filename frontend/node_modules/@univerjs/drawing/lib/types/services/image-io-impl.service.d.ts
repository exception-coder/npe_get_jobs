import { Nullable } from '@univerjs/core';
import { Observable } from 'rxjs';
import { IImageIoService, IImageIoServiceParam, ImageSourceType } from './image-io.service';
export declare class ImageIoService implements IImageIoService {
    private _waitCount;
    private _change$;
    change$: Observable<number>;
    setWaitCount(count: number): void;
    private _imageSourceCache;
    getImageSourceCache(source: string, imageSourceType: ImageSourceType): HTMLImageElement | undefined;
    addImageSourceCache(source: string, imageSourceType: ImageSourceType, imageSource: Nullable<HTMLImageElement>): void;
    getImage(imageId: string): Promise<string>;
    saveImage(imageFile: File): Promise<Nullable<IImageIoServiceParam>>;
    private _decreaseWaiting;
}
