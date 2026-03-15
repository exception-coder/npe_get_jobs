import { IDisposable, Disposable, Injector } from '@univerjs/core';
import { IConfirmPartMethodOptions } from '../../views/components/confirm-part/interface';
import { IConfirmService } from './confirm.service';
import { BehaviorSubject } from 'rxjs';
import { IUIPartsService } from '../parts/parts.service';
export declare class DesktopConfirmService extends Disposable implements IConfirmService {
    protected readonly _injector: Injector;
    protected readonly _uiPartsService: IUIPartsService;
    private _confirmOptions;
    readonly confirmOptions$: BehaviorSubject<IConfirmPartMethodOptions[]>;
    constructor(_injector: Injector, _uiPartsService: IUIPartsService);
    open(option: IConfirmPartMethodOptions): IDisposable;
    confirm(params: IConfirmPartMethodOptions): Promise<boolean>;
    close(id: string): void;
    protected _initUIPart(): void;
}
