import { Disposable, Injector } from '@univerjs/core';
import { IMenuManagerService } from '@univerjs/ui';
export declare class ConditionalFormattingMenuController extends Disposable {
    private _injector;
    private readonly _menuManagerService;
    private _sidebarDisposable;
    constructor(_injector: Injector, _menuManagerService: IMenuManagerService);
}
