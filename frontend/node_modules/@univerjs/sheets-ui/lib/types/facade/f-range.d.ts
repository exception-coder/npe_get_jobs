import { ICellWithCoord, IDisposable, ISelectionCell, Nullable, DisposableCollection } from '@univerjs/core';
import { ISelectionStyle } from '@univerjs/sheets';
import { ICanvasPopup, ICellAlert, IDropdownParam } from '@univerjs/sheets-ui';
import { ComponentType, ComponentManager } from '@univerjs/ui';
import { FRange } from '@univerjs/sheets/facade';
export interface IFComponentKey {
    /**
     * The key of the component to be rendered in the popup.
     * if key is a string, it will be query from the component registry.
     * if key is a React or Vue3 component, it will be rendered directly.
     */
    componentKey: string | ComponentType;
    /**
     * If componentKey is a Vue3 component, this must be set to true
     */
    isVue3?: boolean;
}
export interface IFCanvasPopup extends Omit<ICanvasPopup, 'componentKey'>, IFComponentKey {
}
/**
 * @ignore
 */
interface IFRangeSheetsUIMixin {
    /**
     * Return this cell information, including whether it is merged and cell coordinates
     * @returns {ICellWithCoord} cell location and coordinate.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const fRange = fWorksheet.getRange('H6');
     * console.log(fRange.getCell());
     * ```
     */
    getCell(this: FRange): ICellWithCoord;
    /**
     * Returns the coordinates of this cell,does not include units
     * @returns {DOMRect} coordinates of the cell， top, right, bottom, left
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const fRange = fWorksheet.getRange('H6');
     * console.log(fRange.getCellRect());
     * ```
     */
    getCellRect(this: FRange): DOMRect;
    /**
     * Generate HTML content for the range.
     * @returns {string} HTML content of the range.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const fRange = fWorksheet.getRange('A1:B2');
     * fRange.setValues([
     *   [1, 2],
     *   [3, 4]
     * ]);
     * console.log(fRange.generateHTML());
     * ```
     */
    generateHTML(this: FRange): string;
    /**
     * Attach a popup to the start cell of current range.
     * If current worksheet is not active, the popup will not be shown.
     * Be careful to manager the detach disposable object, if not dispose correctly, it might memory leaks.
     * @param {IFCanvasPopup} popup The popup to attach
     * @returns {Nullable<IDisposable>} The disposable object to detach the popup, if the popup is not attached, return `null`.
     * @example
     * ```ts
     * // Register a custom popup component
     * univerAPI.registerComponent(
     *   'myPopup',
     *   () => React.createElement('div', {
     *     style: {
     *       color: 'red',
     *       fontSize: '14px'
     *     }
     *   }, 'Custom Popup')
     * );
     *
     * // Attach the popup to the start cell of range C3:E5
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const fRange = fWorksheet.getRange('C3:E5');
     * const disposable = fRange.attachPopup({
     *   componentKey: 'myPopup'
     * });
     *
     * // Detach the popup after 5 seconds
     * setTimeout(() => {
     *   disposable.dispose();
     * }, 5000);
     * ```
     */
    attachPopup(popup: IFCanvasPopup): Nullable<IDisposable>;
    /**
     * Attach an alert popup to the start cell of current range.
     * @param {Omit<ICellAlert, 'location'>} alert The alert to attach
     * @returns {IDisposable} The disposable object to detach the alert.
     * @example
     * ```ts
     * // Attach an alert popup to the start cell of range C3:E5
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const fRange = fWorksheet.getRange('C3:E5');
     *
     * const disposable = fRange.attachAlertPopup({
     *   title: 'Warning',
     *   message: 'This is an warning message',
     *   type: 1
     * });
     *
     * // Detach the alert after 5 seconds
     * setTimeout(() => {
     *   disposable.dispose();
     * }, 5000);
     * ```
     */
    attachAlertPopup(alert: Omit<ICellAlert, 'location'>): IDisposable;
    /**
     * Attach a DOM popup to the current range.
     * @param {IFCanvasPopup} alert The alert to attach
     * @returns {Nullable<IDisposable>} The disposable object to detach the alert.
     * @example
     * ```ts
     * // Register a custom popup component
     * univerAPI.registerComponent(
     *   'myPopup',
     *   () => React.createElement('div', {
     *     style: {
     *       background: 'red',
     *       fontSize: '14px'
     *     }
     *   }, 'Custom Popup')
     * );
     *
     * // Attach the popup to the range C3:E5
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const fRange = fWorksheet.getRange('C3:E5');
     * const disposable = fRange.attachRangePopup({
     *   componentKey: 'myPopup',
     *   direction: 'top' // 'vertical' | 'horizontal' | 'top' | 'right' | 'left' | 'bottom' | 'bottom-center' | 'top-center'
     * });
     * ```
     */
    attachRangePopup(popup: IFCanvasPopup): Nullable<IDisposable>;
    /**
     * Highlight the range with the specified style and primary cell.
     * @param {Nullable<Partial<ISelectionStyle>>} style - style for highlight range.
     * @param {Nullable<ISelectionCell>} primary - primary cell for highlight range.
     * @returns {IDisposable} The disposable object to remove the highlight.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Highlight the range C3:E5 with default style
     * const fRange = fWorksheet.getRange('C3:E5');
     * fRange.highlight();
     *
     * // Highlight the range C7:E9 with custom style and primary cell D8
     * const fRange2 = fWorksheet.getRange('C7:E9');
     * const primaryCell = fWorksheet.getRange('D8').getRange();
     * const disposable = fRange2.highlight(
     *   {
     *     stroke: 'red',
     *     fill: 'yellow'
     *   },
     *   {
     *     ...primaryCell,
     *     actualRow: primaryCell.startRow,
     *     actualColumn: primaryCell.startColumn
     *   }
     * );
     *
     * // Remove the range C7:E9 highlight after 5 seconds
     * setTimeout(() => {
     *   disposable.dispose();
     * }, 5000);
     * ```
     */
    highlight(style?: Nullable<Partial<ISelectionStyle>>, primary?: Nullable<ISelectionCell>): IDisposable;
    /**
     * Show a dropdown at the current range.
     * @param {IDropdownParam} param - The parameters for the dropdown.
     * @returns {IDisposable} The disposable object to hide the dropdown.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const fRange = fWorksheet.getRange('C3:E5');
     * fRange.showDropdown({ type: 'list', props: { options: [{ label: 'Option 1', value: 'option1' }, { label: 'Option 2', value: 'option2' }] } });
     * ```
     */
    showDropdown(param: IDropdownParam): IDisposable;
}
declare module '@univerjs/sheets/facade' {
    interface FRange extends IFRangeSheetsUIMixin {
    }
}
/**
 * Transform component key
 * @param {IFComponentKey} component - The component key to transform.
 * @param {ComponentManager} componentManager - The component manager to use for registration.
 * @returns {string} The transformed component key.
 */
export declare function transformComponentKey(component: IFComponentKey, componentManager: ComponentManager): {
    key: string;
    disposableCollection: DisposableCollection;
};
export {};
