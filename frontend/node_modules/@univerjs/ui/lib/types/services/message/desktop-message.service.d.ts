import { IDisposable, Disposable, Injector } from '@univerjs/core';
import { IMessageProps } from '@univerjs/design';
import { IMessageService } from './message.service';
import { IUIPartsService } from '../parts/parts.service';
export declare class DesktopMessageService extends Disposable implements IMessageService {
    protected readonly _injector: Injector;
    protected readonly _uiPartsService: IUIPartsService;
    constructor(_injector: Injector, _uiPartsService: IUIPartsService);
    protected _initUIPart(): void;
    dispose(): void;
    show(options: IMessageProps): IDisposable;
    remove(id: string): void;
    removeAll(): void;
}
