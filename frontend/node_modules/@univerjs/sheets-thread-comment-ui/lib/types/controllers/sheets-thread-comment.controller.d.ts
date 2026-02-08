import { Disposable } from '@univerjs/core';
import { ComponentManager, IMenuManagerService, IShortcutService } from '@univerjs/ui';
export declare class SheetsThreadCommentController extends Disposable {
    private readonly _menuManagerService;
    private readonly _componentManager;
    private readonly _shortcutService;
    constructor(_menuManagerService: IMenuManagerService, _componentManager: ComponentManager, _shortcutService: IShortcutService);
    private _initShortcut;
    private _initMenu;
    private _initComponent;
}
