import { Disposable, ICommandService } from '@univerjs/core';
import { ComponentManager, IMenuManagerService } from '@univerjs/ui';
export declare class SheetsNoteUIController extends Disposable {
    private readonly _componentManager;
    private readonly _menuManagerService;
    private readonly _commandService;
    constructor(_componentManager: ComponentManager, _menuManagerService: IMenuManagerService, _commandService: ICommandService);
    private _initComponents;
    private _initMenu;
    private _initCommands;
}
