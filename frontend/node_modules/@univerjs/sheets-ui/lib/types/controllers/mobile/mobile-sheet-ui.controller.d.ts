import { Disposable, ICommandService, IConfigService, Injector } from '@univerjs/core';
import { ComponentManager, ILayoutService, IMenuManagerService, IShortcutService, IUIPartsService } from '@univerjs/ui';
export declare class SheetUIMobileController extends Disposable {
    protected readonly _injector: Injector;
    protected readonly _componentManager: ComponentManager;
    protected readonly _layoutService: ILayoutService;
    protected readonly _commandService: ICommandService;
    protected readonly _shortcutService: IShortcutService;
    protected readonly _menuManagerService: IMenuManagerService;
    protected readonly _uiPartsService: IUIPartsService;
    protected readonly _configService: IConfigService;
    constructor(_injector: Injector, _componentManager: ComponentManager, _layoutService: ILayoutService, _commandService: ICommandService, _shortcutService: IShortcutService, _menuManagerService: IMenuManagerService, _uiPartsService: IUIPartsService, _configService: IConfigService);
    private _init;
    private _initComponents;
    private _initCommands;
    private _initMenus;
    private _initShortcuts;
    private _initWorkbenchParts;
    private _initFocusHandler;
}
