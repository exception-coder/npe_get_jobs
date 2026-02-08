import { IDisposable, Disposable, Injector } from '@univerjs/core';
import { IDialogPartMethodOptions } from '../../views/components/dialog-part/interface';
import { IDialogService } from './dialog.service';
import { Subject } from 'rxjs';
import { IUIPartsService } from '../parts/parts.service';
export declare class DesktopDialogService extends Disposable implements IDialogService {
    protected readonly _injector: Injector;
    protected readonly _uiPartsService: IUIPartsService;
    protected _dialogOptions: IDialogPartMethodOptions[];
    protected readonly _dialogOptions$: Subject<IDialogPartMethodOptions[]>;
    constructor(_injector: Injector, _uiPartsService: IUIPartsService);
    dispose(): void;
    open(option: IDialogPartMethodOptions): IDisposable;
    close(id: string): void;
    closeAll(expectIds?: string[]): void;
    getDialogs$(): import('rxjs').Observable<IDialogPartMethodOptions[]>;
    protected _initUIPart(): void;
}
