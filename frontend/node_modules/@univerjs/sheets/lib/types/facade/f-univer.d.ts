import { ICommandInfo, ICreateUnitOptions, IDisposable, Injector, IWorkbookData, Nullable } from '@univerjs/core';
import { FWorksheet } from './f-worksheet';
import { FUniver } from '@univerjs/core/facade';
import { FDefinedNameBuilder } from './f-defined-name';
import { FPermission } from './f-permission';
import { FWorkbook } from './f-workbook';
/**
 * @ignore
 */
export interface IFUniverSheetsMixin {
    /**
     * @deprecated use `univerAPI.createWorkbook` instead.
     */
    createUniverSheet(data: Partial<IWorkbookData>): FWorkbook;
    /**
     * Create a new spreadsheet and get the API handler of that spreadsheet.
     * @param {Partial<IWorkbookData>} data The snapshot of the spreadsheet.
     * @param {ICreateUnitOptions} options The options of creating the spreadsheet.
     * @returns {FWorkbook} FWorkbook API instance.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.createWorkbook({ id: 'Sheet1', name: 'Sheet1' });
     * console.log(fWorkbook);
     * ```
     *
     * Add you can make the workbook not as the active workbook by setting options:
     * ```ts
     * const fWorkbook = univerAPI.createWorkbook({ id: 'Sheet1', name: 'Sheet1' }, { makeCurrent: false });
     * console.log(fWorkbook);
     * ```
     */
    createWorkbook(data: Partial<IWorkbookData>, options?: ICreateUnitOptions): FWorkbook;
    /**
     * Get the currently focused Univer spreadsheet.
     * @returns {FWorkbook | null} The currently focused Univer spreadsheet.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * console.log(fWorkbook);
     * ```
     */
    getActiveWorkbook(): FWorkbook | null;
    /**
     * @deprecated use `univerAPI.getActiveWorkbook` instead
     */
    getActiveUniverSheet(): FWorkbook | null;
    /**
     * Get the spreadsheet API handler by the spreadsheet id.
     * @param {string} id The spreadsheet id.
     * @returns {FWorkbook | null} The spreadsheet API instance.
     *
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getUniverSheet('Sheet1');
     * console.log(fWorkbook);
     *
     * const fWorkbook = univerAPI.getWorkbook('Sheet1');
     * console.log(fWorkbook);
     * ```
     */
    getUniverSheet(id: string): FWorkbook | null;
    getWorkbook(id: string): FWorkbook | null;
    /**
     * Get the PermissionInstance.
     * @deprecated This function is deprecated and will be removed in version 0.6.0. Please use the function with the same name on the `FWorkbook` instance instead.
     */
    getPermission(): FPermission;
    /**
     * @deprecated Use `univerAPI.addEvent(univerAPI.Event.UnitCreated, () => {})`
     */
    onUniverSheetCreated(callback: (workbook: FWorkbook) => void): IDisposable;
    /**
     * Create a new defined name builder.
     * @returns {FDefinedNameBuilder} - The defined name builder.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const definedNameBuilder = univerAPI.newDefinedName()
     *   .setRef('Sheet1!$A$1')
     *   .setName('MyDefinedName')
     *   .setComment('This is a comment');
     * console.log(definedNameBuilder);
     * fWorkbook.insertDefinedNameBuilder(definedNameBuilder.build());
     * ```
     */
    newDefinedName(): FDefinedNameBuilder;
    /**
     * Get the target of the sheet.
     * @param {string} unitId - The unitId of the sheet.
     * @param {string} subUnitId - The subUnitId of the sheet.
     * @returns {Nullable<{ workbook: FWorkbook; worksheet: FWorksheet }>} - The target of the sheet.
     * @example
     * ```ts
     * const unitId = 'workbook-01';
     * const subUnitId = 'sheet-0001';
     * const target = univerAPI.getSheetTarget(unitId, subUnitId);
     * if (!target) return;
     * const { workbook, worksheet } = target;
     * console.log(workbook, worksheet);
     * ```
     */
    getSheetTarget(unitId: string, subUnitId: string): Nullable<{
        workbook: FWorkbook;
        worksheet: FWorksheet;
    }>;
    /**
     * Get the target of the sheet.
     * @param {ICommandInfo<object>} commandInfo - The commandInfo of the command.
     * @returns {Nullable<{ workbook: FWorkbook; worksheet: FWorksheet }>} - The target of the sheet.
     * @example
     * ```ts
     * univerAPI.addEvent(univerAPI.Event.CommandExecuted, (event) => {
     *   const { options, ...commandInfo } = event;
     *   const target = univerAPI.getCommandSheetTarget(commandInfo);
     *   if (!target) return;
     *   const { workbook, worksheet } = target;
     *   console.log(workbook, worksheet);
     * });
     * ```
     */
    getCommandSheetTarget(commandInfo: ICommandInfo<object>): Nullable<{
        workbook: FWorkbook;
        worksheet: FWorksheet;
    }>;
    /**
     * Get the active sheet.
     * @returns {Nullable<{ workbook: FWorkbook; worksheet: FWorksheet }>} The active sheet.
     * @example
     * ```ts
     * const target = univerAPI.getActiveSheet();
     * if (!target) return;
     * const { workbook, worksheet } = target;
     * console.log(workbook, worksheet);
     * ```
     */
    getActiveSheet(): Nullable<{
        workbook: FWorkbook;
        worksheet: FWorksheet;
    }>;
    /**
     * Set whether to enable synchronize the frozen state to other users in real-time collaboration.
     * @param {boolean} enabled - Whether to enable freeze sync. Default is true.
     * @example
     * ```ts
     * // Disable freeze sync
     * univerAPI.setFreezeSync(false);
     * ```
     */
    setFreezeSync(enabled: boolean): void;
}
export declare class FUniverSheetsMixin extends FUniver implements IFUniverSheetsMixin {
    getCommandSheetTarget(commandInfo: ICommandInfo<object>): Nullable<{
        workbook: FWorkbook;
        worksheet: FWorksheet;
    }>;
    getSheetTarget(unitId: string, subUnitId: string): Nullable<{
        workbook: FWorkbook;
        worksheet: FWorksheet;
    }>;
    private _initWorkbookEvent;
    /**
     * @ignore
     */
    _initialize(injector: Injector): void;
    createUniverSheet(data: Partial<IWorkbookData>, options?: ICreateUnitOptions): FWorkbook;
    createWorkbook(data: Partial<IWorkbookData>, options?: ICreateUnitOptions): FWorkbook;
    getActiveWorkbook(): FWorkbook | null;
    getActiveUniverSheet(): FWorkbook | null;
    getUniverSheet(id: string): FWorkbook | null;
    getWorkbook(id: string): FWorkbook | null;
    getPermission(): FPermission;
    onUniverSheetCreated(callback: (workbook: FWorkbook) => void): IDisposable;
    newDefinedName(): FDefinedNameBuilder;
    getActiveSheet(): Nullable<{
        workbook: FWorkbook;
        worksheet: FWorksheet;
    }>;
    setFreezeSync(enabled: boolean): void;
    private _fireActiveSheetChanged;
    private _fireSheetDeleted;
    private _fireSheetMoved;
    private _fireSheetNameChanged;
    private _fireSheetTabColorChanged;
    private _fireSheetHideChanged;
}
declare module '@univerjs/core/facade' {
    interface FUniver extends IFUniverSheetsMixin {
    }
}
