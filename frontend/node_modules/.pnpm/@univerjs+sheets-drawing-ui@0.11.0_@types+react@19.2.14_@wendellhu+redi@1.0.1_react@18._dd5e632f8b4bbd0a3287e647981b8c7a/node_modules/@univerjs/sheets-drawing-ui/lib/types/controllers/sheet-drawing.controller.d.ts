import { Disposable, ICommandService } from '@univerjs/core';
import { IDrawingManagerService } from '@univerjs/drawing';
import { SheetsSelectionsService } from '@univerjs/sheets';
import { ComponentManager, IMenuManagerService, IShortcutService } from '@univerjs/ui';
export declare class SheetDrawingUIController extends Disposable {
    private readonly _componentManager;
    private readonly _menuManagerService;
    private readonly _commandService;
    private readonly _shortcutService;
    private readonly _drawingManagerService;
    private readonly _sheetsSelectionsService;
    constructor(_componentManager: ComponentManager, _menuManagerService: IMenuManagerService, _commandService: ICommandService, _shortcutService: IShortcutService, _drawingManagerService: IDrawingManagerService, _sheetsSelectionsService: SheetsSelectionsService);
    private _initCustomComponents;
    private _initMenus;
    private _initCommands;
    private _initShortcuts;
    private _init;
}
