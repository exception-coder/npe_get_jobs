import { IDisposable, Disposable, Injector } from '@univerjs/core';
import { IGalleryProps } from '@univerjs/design';
import { IGalleryService } from './gallery.service';
import { Subject } from 'rxjs';
import { IUIPartsService } from '../parts/parts.service';
export declare class DesktopGalleryService extends Disposable implements IGalleryService {
    protected readonly _injector: Injector;
    protected readonly _uiPartsService: IUIPartsService;
    constructor(_injector: Injector, _uiPartsService: IUIPartsService);
    gallery$: Subject<IGalleryProps>;
    dispose(): void;
    open(option: IGalleryProps): IDisposable;
    close(): void;
    protected _initUIPart(): void;
}
