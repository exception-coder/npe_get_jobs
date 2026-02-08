import { Disposable, ICommandService, Injector } from '@univerjs/core';
import { ComponentManager, IMenuManagerService, IShortcutService } from '@univerjs/ui';
export declare class SheetsHyperLinkUIController extends Disposable {
    private _componentManager;
    private _commandService;
    private readonly _menuManagerService;
    private _injector;
    private _shortcutService;
    constructor(_componentManager: ComponentManager, _commandService: ICommandService, _menuManagerService: IMenuManagerService, _injector: Injector, _shortcutService: IShortcutService);
    private _initComponents;
    private _initCommands;
    private _initMenus;
    private _initShortCut;
}
