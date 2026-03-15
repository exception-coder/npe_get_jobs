import { Disposable, ICommandService } from '@univerjs/core';
import { ComponentManager, IMenuManagerService } from '@univerjs/ui';
export declare class DocThreadCommentUIController extends Disposable {
    private readonly _commandService;
    private readonly _menuManagerService;
    private readonly _componentManager;
    constructor(_commandService: ICommandService, _menuManagerService: IMenuManagerService, _componentManager: ComponentManager);
    private _initCommands;
    private _initMenus;
    private _initComponents;
}
