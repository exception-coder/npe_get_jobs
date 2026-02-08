import { Disposable, ICommandService } from '@univerjs/core';
import { ComponentManager, IMenuManagerService, IShortcutService } from '@univerjs/ui';
export declare class DocDrawingUIController extends Disposable {
    private readonly _componentManager;
    private readonly _menuManagerService;
    private readonly _commandService;
    private readonly _shortcutService;
    constructor(_componentManager: ComponentManager, _menuManagerService: IMenuManagerService, _commandService: ICommandService, _shortcutService: IShortcutService);
    private _initCustomComponents;
    private _initMenus;
    private _initCommands;
    private _initShortcuts;
    private _init;
}
