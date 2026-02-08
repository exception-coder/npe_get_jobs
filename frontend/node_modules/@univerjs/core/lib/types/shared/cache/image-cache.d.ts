import { Injector } from '@wendellhu/redi';
import { ImageSourceType } from '../../services/image-io/image-io.service';
export declare class ImageCacheMap {
    private _injector;
    private _imageCacheMap;
    constructor(_injector: Injector, maxSize?: number);
    private _getImageCacheKey;
    getImage(imageSourceType: ImageSourceType, source: string, onLoad?: () => void, onError?: () => void): HTMLImageElement | null;
}
