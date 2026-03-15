import { IDisposable, Disposable, Injector } from '@univerjs/core';
import { INotificationOptions } from '../../components/notification/Notification';
import { INotificationService } from './notification.service';
import { IUIPartsService } from '../parts/parts.service';
export declare class DesktopNotificationService extends Disposable implements INotificationService {
    private readonly _injector;
    private readonly _uiPartsService;
    constructor(_injector: Injector, _uiPartsService: IUIPartsService);
    show(params: INotificationOptions): IDisposable;
    protected _initUIPart(): void;
}
