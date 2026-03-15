import { MenuConfig, ComponentManager, IMenuManagerService, IShortcutService } from '@univerjs/ui';
import { Disposable, ICommandService } from '@univerjs/core';
export interface IDocHyperLinkUIConfig {
    menu: MenuConfig;
}
export declare class DocHyperLinkUIController extends Disposable {
    private readonly _componentManager;
    private readonly _commandService;
    private readonly _menuManagerService;
    private readonly _shortcutService;
    constructor(_componentManager: ComponentManager, _commandService: ICommandService, _menuManagerService: IMenuManagerService, _shortcutService: IShortcutService);
    private _initComponents;
    private _initCommands;
    private _initShortcut;
    private _initMenus;
}
