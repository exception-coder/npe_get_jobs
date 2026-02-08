import { IShortcutItem, IShortcutService } from '../services/shortcut/shortcut.service';
import { Disposable, ICommandService } from '@univerjs/core';
export declare const CopyShortcutItem: IShortcutItem;
export declare const CutShortcutItem: IShortcutItem;
/**
 * This shortcut item is just for displaying shortcut info, do not use it.
 */
export declare const OnlyDisplayPasteShortcutItem: IShortcutItem;
export declare const UndoShortcutItem: IShortcutItem;
export declare const RedoShortcutItem: IShortcutItem;
/**
 * Define shared UI behavior across Univer business. Including undo / redo and clipboard operations.
 */
export declare class SharedController extends Disposable {
    private readonly _shortcutService;
    private readonly _commandService;
    constructor(_shortcutService: IShortcutService, _commandService: ICommandService);
    initialize(): void;
    private _registerCommands;
    private _registerShortcuts;
}
