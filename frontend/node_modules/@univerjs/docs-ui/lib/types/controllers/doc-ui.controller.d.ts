import { Disposable, ICommandService, IConfigService, Injector, IUniverInstanceService } from '@univerjs/core';
import { ComponentManager, ILayoutService, IMenuManagerService, IShortcutService, IUIPartsService } from '@univerjs/ui';
export declare class DocUIController extends Disposable {
    protected readonly _injector: Injector;
    protected readonly _componentManager: ComponentManager;
    protected readonly _commandService: ICommandService;
    protected readonly _layoutService: ILayoutService;
    protected readonly _menuManagerService: IMenuManagerService;
    protected readonly _uiPartsService: IUIPartsService;
    protected readonly _univerInstanceService: IUniverInstanceService;
    protected readonly _shortcutService: IShortcutService;
    protected readonly _configService: IConfigService;
    constructor(_injector: Injector, _componentManager: ComponentManager, _commandService: ICommandService, _layoutService: ILayoutService, _menuManagerService: IMenuManagerService, _uiPartsService: IUIPartsService, _univerInstanceService: IUniverInstanceService, _shortcutService: IShortcutService, _configService: IConfigService);
    private _initCustomComponents;
    private _initUiParts;
    private _initMenus;
    private _initShortCut;
    private _init;
    private _initCommands;
    private _initFocusHandler;
}
