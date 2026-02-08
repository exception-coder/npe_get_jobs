import { Disposable, ICommandService, Injector } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { ComponentManager, IMenuManagerService, IShortcutService, IUIPartsService } from '@univerjs/ui';
export declare class FormulaUIController extends Disposable {
    private readonly _injector;
    private readonly _menuManagerService;
    private readonly _commandService;
    private readonly _shortcutService;
    private readonly _uiPartsService;
    private readonly _renderManagerService;
    private readonly _componentManager;
    constructor(_injector: Injector, _menuManagerService: IMenuManagerService, _commandService: ICommandService, _shortcutService: IShortcutService, _uiPartsService: IUIPartsService, _renderManagerService: IRenderManagerService, _componentManager: ComponentManager);
    private _initialize;
    private _registerMenus;
    private _registerCommands;
    private _registerShortcuts;
    private _registerComponents;
    private _registerRenderModules;
}
