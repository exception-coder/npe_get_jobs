import { Disposable } from '@univerjs/core';
import { ComponentManager, IMenuManagerService } from '@univerjs/ui';
export declare class SheetTableMenuController extends Disposable {
    private _componentManager;
    private _menuManagerService;
    constructor(_componentManager: ComponentManager, _menuManagerService: IMenuManagerService);
    private _initComponents;
    private _initMenu;
}
