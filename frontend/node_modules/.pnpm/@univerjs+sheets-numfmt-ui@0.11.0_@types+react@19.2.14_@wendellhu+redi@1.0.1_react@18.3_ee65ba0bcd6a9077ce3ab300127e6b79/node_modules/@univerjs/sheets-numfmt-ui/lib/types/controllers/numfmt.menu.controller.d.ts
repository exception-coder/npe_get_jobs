import { Disposable } from '@univerjs/core';
import { ComponentManager, IMenuManagerService } from '@univerjs/ui';
export declare class NumfmtMenuController extends Disposable {
    private _componentManager;
    private readonly _menuManagerService;
    constructor(_componentManager: ComponentManager, _menuManagerService: IMenuManagerService);
    private _initMenu;
}
