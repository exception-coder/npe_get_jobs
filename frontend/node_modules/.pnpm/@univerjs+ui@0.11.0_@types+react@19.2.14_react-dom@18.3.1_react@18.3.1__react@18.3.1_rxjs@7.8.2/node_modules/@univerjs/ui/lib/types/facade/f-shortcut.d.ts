import { IShortcutItem, IShortcutService } from '@univerjs/ui';
import { Injector, IUniverInstanceService } from '@univerjs/core';
import { FBase } from '@univerjs/core/facade';
import { IRenderManagerService } from '@univerjs/engine-render';
/**
 * The Facade API object to handle shortcuts in Univer
 * @hideconstructor
 */
export declare class FShortcut extends FBase {
    protected readonly _injector: Injector;
    private _renderManagerService;
    protected readonly _univerInstanceService: IUniverInstanceService;
    protected readonly _shortcutService: IShortcutService;
    private _forceDisableDisposable;
    constructor(_injector: Injector, _renderManagerService: IRenderManagerService, _univerInstanceService: IUniverInstanceService, _shortcutService: IShortcutService);
    /**
     * Enable shortcuts of Univer.
     * @returns {FShortcut} The Facade API instance itself for chaining.
     *
     * @example
     * ```typescript
     * fShortcut.enableShortcut(); // Use the FShortcut instance used by disableShortcut before, do not create a new instance
     * ```
     */
    enableShortcut(): this;
    /**
     * Disable shortcuts of Univer.
     * @returns {FShortcut} The Facade API instance itself for chaining.
     *
     * @example
     * ```typescript
     * const fShortcut = univerAPI.getShortcut();
     * fShortcut.disableShortcut();
     * ```
     */
    disableShortcut(): this;
    /**
     * Trigger shortcut of Univer by a KeyboardEvent and return the matched shortcut item.
     * @param {KeyboardEvent} e - The KeyboardEvent to trigger.
     * @returns {IShortcutItem<object> | undefined} The matched shortcut item.
     *
     * @example
     * ```typescript
     * // Assum the current sheet is empty sheet.
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const fRange = fWorksheet.getRange('A1');
     *
     * // Set A1 cell active and set value to 'Hello Univer'.
     * fRange.activate();
     * fRange.setValue('Hello Univer');
     * console.log(fRange.getCellStyle().bold); // false
     *
     * // Set A1 cell bold by shortcut.
     * const fShortcut = univerAPI.getShortcut();
     * const pseudoEvent = new KeyboardEvent('keydown', {
     *   key: 'b',
     *   ctrlKey: true,
     *   keyCode: univerAPI.Enum.KeyCode.B
     * });
     * const ifShortcutItem = fShortcut.triggerShortcut(pseudoEvent);
     * if (ifShortcutItem) {
     *   const commandId = ifShortcutItem.id;
     *   console.log(fRange.getCellStyle().bold); // true
     * }
     * ```
     */
    triggerShortcut(e: KeyboardEvent): IShortcutItem<object> | undefined;
    /**
     * Dispatch a KeyboardEvent to the shortcut service and return the matched shortcut item.
     * @param {KeyboardEvent} e - The KeyboardEvent to dispatch.
     * @returns {IShortcutItem<object> | undefined} The matched shortcut item.
     *
     * @example
     * ```typescript
     * const fShortcut = univerAPI.getShortcut();
     * const pseudoEvent = new KeyboardEvent('keydown', { key: 's', ctrlKey: true });
     * const ifShortcutItem = fShortcut.dispatchShortcutEvent(pseudoEvent);
     * if (ifShortcutItem) {
     *   const commandId = ifShortcutItem.id;
     *   // Do something with the commandId.
     * }
     * ```
     */
    dispatchShortcutEvent(e: KeyboardEvent): IShortcutItem<object> | undefined;
}
