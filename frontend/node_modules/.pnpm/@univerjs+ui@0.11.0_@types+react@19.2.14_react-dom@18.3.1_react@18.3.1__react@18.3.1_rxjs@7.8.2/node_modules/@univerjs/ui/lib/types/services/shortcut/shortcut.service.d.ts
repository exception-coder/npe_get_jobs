import { IDisposable, Disposable, ICommandService, IContextService } from '@univerjs/core';
import { Observable } from 'rxjs';
import { KeyCode } from './keycode';
import { ILayoutService } from '../layout/layout.service';
import { IPlatformService } from '../platform/platform.service';
/**
 * A shortcut item that could be registered to the {@link IShortcutService}.
 */
export interface IShortcutItem<P extends object = object> {
    /** Id of the shortcut item. It should reuse the corresponding {@link ICommand}'s id. */
    id: string;
    /** Description of the shortcut. */
    description?: string;
    /** If two shortcuts have the same binding, the one with higher priority would be check first. */
    priority?: number;
    /**
     * A callback that will be triggered to examine if the shortcut should be invoked. The `{@link IContextService}`
     * would be passed to the callback.
     */
    preconditions?: (contextService: IContextService) => boolean;
    /**
     * The binding of the shortcut. It should be a combination of {@link KeyCode} and {@link MetaKeys}.
     *
     * A command can be bound to several bindings, with different static parameters perhaps.
     *
     * @example { binding: KeyCode.ENTER | MetaKeys.ALT }
     */
    binding?: KeyCode | number;
    /**
     * The binding of the shortcut for macOS. If the property is not specified, the default binding would be used.
     */
    mac?: number;
    /**
     * The binding of the shortcut for Windows. If the property is not specified, the default binding would be used.
     */
    win?: number;
    /**
     * The binding of the shortcut for Linux. If the property is not specified, the default binding would be used.
     */
    linux?: number;
    /**
     * The group of the menu item should belong to. The shortcut item would be rendered in the
     * panel if this is set.
     *
     * @example { group: '10_global-shortcut' }
     */
    group?: string;
    /**
     * Static parameters of this shortcut. Would be send to {@link ICommandService.executeCommand} as the second
     * parameter when the corresponding command is executed.
     *
     * You can define multi shortcuts with the same command id but different static parameters.
     */
    staticParameters?: P;
}
/**
 * The dependency injection identifier of the {@link IShortcutService}.
 */
export declare const IShortcutService: import('@wendellhu/redi').IdentifierDecorator<IShortcutService>;
/**
 * The interface of the shortcut service.
 */
export interface IShortcutService {
    /**
     * An observable that emits when the shortcuts are changed.
     */
    shortcutChanged$: Observable<void>;
    /**
     * Make the shortcut service ignore all keyboard events.
     * @returns {IDisposable} a disposable that could be used to cancel the force escaping.
     */
    forceEscape(): IDisposable;
    /**
     * Used by API to force disable all shortcut keys, which will not be restored by selection
     * @returns {IDisposable} a disposable that could be used to cancel the force disabling.
     */
    forceDisable(): IDisposable;
    /**
     * Dispatch a keyboard event to the shortcut service and check if there is a shortcut that matches the event.
     * @param e - the keyboard event to be dispatched.
     */
    dispatch(e: KeyboardEvent): IShortcutItem<object> | undefined;
    /**
     * Register a shortcut item to the shortcut service.
     * @param {IShortcutItem} shortcut - the shortcut item to be registered.
     * @returns {IDisposable} a disposable that could be used to unregister the shortcut.
     */
    registerShortcut(shortcut: IShortcutItem): IDisposable;
    /**
     * Get the display string of the shortcut item.
     * @param shortcut - the shortcut item to get the display string.
     * @returns {string | null} The display string of the shortcut. For example `Ctrl+Enter`.
     */
    getShortcutDisplay(shortcut: IShortcutItem): string | null;
    /**
     * Get the display string of the shortcut of the command.
     * @param id the id of the command to get the shortcut display.
     * @returns {string | null} the display string of the shortcut. For example `Ctrl+Enter`.
     */
    getShortcutDisplayOfCommand(id: string): string | null;
    /**
     * Get all the shortcuts registered in the shortcut service.
     * @returns {IShortcutItem[]} all the shortcuts registered in the shortcut service.
     */
    getAllShortcuts(): IShortcutItem[];
}
/**
 * @ignore
 */
export declare class ShortcutService extends Disposable implements IShortcutService {
    private readonly _commandService;
    private readonly _platformService;
    private readonly _contextService;
    private readonly _layoutService?;
    private readonly _shortCutMapping;
    private readonly _commandIDMapping;
    private readonly _shortcutChanged$;
    readonly shortcutChanged$: Observable<void>;
    private _forceEscaped;
    private _forceDisabled;
    constructor(_commandService: ICommandService, _platformService: IPlatformService, _contextService: IContextService, _layoutService?: ILayoutService | undefined);
    getAllShortcuts(): IShortcutItem[];
    registerShortcut(shortcut: IShortcutItem): IDisposable;
    getShortcutDisplayOfCommand(id: string): string | null;
    getShortcutDisplay(shortcut: IShortcutItem): string | null;
    private _emitShortcutChanged;
    forceEscape(): IDisposable;
    forceDisable(): IDisposable;
    private _resolveKeyboardEvent;
    dispatch(e: KeyboardEvent): IShortcutItem<object> | undefined;
    private _getBindingFromItem;
    private _deriveBindingFromEvent;
}
