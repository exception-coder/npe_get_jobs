import { IDataValidationRule, IDisposable, IExecutionOptions, Nullable, ObjectMatrix, DataValidationStatus } from '@univerjs/core';
import { IRuleChange } from '@univerjs/data-validation';
import { IAddSheetDataValidationCommandParams, IRemoveSheetAllDataValidationCommandParams, IRemoveSheetDataValidationCommandParams, IUpdateSheetDataValidationOptionsCommandParams, IUpdateSheetDataValidationRangeCommandParams, IUpdateSheetDataValidationSettingCommandParams, IValidStatusChange, SheetDataValidationModel } from '@univerjs/sheets-data-validation';
import { FWorkbook } from '@univerjs/sheets/facade';
export interface IDataValidationError {
    sheetName: string;
    /** The row of the cell that triggered the error */
    row: number;
    column: number;
    /** The ID of the rule that triggered the error */
    ruleId: string;
    /** The input value that triggered the error */
    inputValue: string | number | boolean | null;
    /** The rule content snapshot (optional, to avoid tracing back to the rule after modification) */
    rule?: IDataValidationRule;
}
/**
 * @ignore
 */
export interface IFWorkbookDataValidationMixin {
    /**
     * Get data validation validator status for current workbook.
     * @returns A promise that resolves to a matrix of validator status.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const status = await fWorkbook.getValidatorStatus();
     * console.log(status);
     * ```
     */
    getValidatorStatus(): Promise<Record<string, ObjectMatrix<Nullable<DataValidationStatus>>>>;
    /**
     * Get all data validation errors for current workbook.
     * @returns A promise that resolves to an array of validation errors.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const errors = await fWorkbook.getAllDataValidationError();
     * console.log(errors);
     * ```
     */
    getAllDataValidationErrorAsync(): Promise<IDataValidationError[]>;
    /**
     * @deprecated Use `univerAPI.addEvent(univerAPI.Event.SheetDataValidationChanged, (event) => { ... })` instead
     */
    onDataValidationChange(callback: (ruleChange: IRuleChange) => void): IDisposable;
    /**
     * @deprecated Use `univerAPI.addEvent(univerAPI.Event.SheetDataValidatorStatusChanged, (event) => { ... })` instead
     */
    onDataValidationStatusChange(callback: (statusChange: IValidStatusChange) => void): IDisposable;
    /**
     * @deprecated Use `univerAPI.addEvent(univerAPI.Event.BeforeSheetDataValidationAdd, (event) => { ... })` instead
     */
    onBeforeAddDataValidation(this: FWorkbook, callback: (params: IAddSheetDataValidationCommandParams, options: IExecutionOptions | undefined) => void | false): IDisposable;
    /**
     * @deprecated Use `univerAPI.addEvent(univerAPI.Event.BeforeSheetDataValidationCriteriaUpdate, (event) => { ... })` instead
     */
    onBeforeUpdateDataValidationCriteria(this: FWorkbook, callback: (params: IUpdateSheetDataValidationSettingCommandParams, options: IExecutionOptions | undefined) => void | false): IDisposable;
    /**
     * @deprecated Use `univerAPI.addEvent(univerAPI.Event.BeforeSheetDataValidationRangeUpdate, (event) => { ... })` instead
     */
    onBeforeUpdateDataValidationRange(this: FWorkbook, callback: (params: IUpdateSheetDataValidationRangeCommandParams, options: IExecutionOptions | undefined) => void | false): IDisposable;
    /**
     * @deprecated Use `univerAPI.addEvent(univerAPI.Event.BeforeSheetDataValidationOptionsUpdate, (event) => { ... })` instead
     */
    onBeforeUpdateDataValidationOptions(this: FWorkbook, callback: (params: IUpdateSheetDataValidationOptionsCommandParams, options: IExecutionOptions | undefined) => void | false): IDisposable;
    /**
     * @deprecated Use `univerAPI.addEvent(univerAPI.Event.BeforeSheetDataValidationDelete, (event) => { ... })` instead
     */
    onBeforeDeleteDataValidation(this: FWorkbook, callback: (params: IRemoveSheetDataValidationCommandParams, options: IExecutionOptions | undefined) => void | false): IDisposable;
    /**
     * @deprecated Use `univerAPI.addEvent(univerAPI.Event.BeforeSheetDataValidationDeleteAll, (event) => { ... })` instead
     */
    onBeforeDeleteAllDataValidation(this: FWorkbook, callback: (params: IRemoveSheetAllDataValidationCommandParams, options: IExecutionOptions | undefined) => void | false): IDisposable;
}
/**
 * @ignore
 */
export declare class FWorkbookDataValidationMixin extends FWorkbook implements IFWorkbookDataValidationMixin {
    _dataValidationModel: SheetDataValidationModel;
    _initialize(): void;
    getValidatorStatus(): Promise<Record<string, ObjectMatrix<Nullable<DataValidationStatus>>>>;
    getAllDataValidationErrorAsync(): Promise<IDataValidationError[]>;
    private _collectValidationErrorsForSheet;
    private _collectValidationErrorsForRange;
    private _createDataValidationError;
    onDataValidationChange(callback: (ruleChange: IRuleChange) => void): IDisposable;
    onDataValidationStatusChange(callback: (statusChange: IValidStatusChange) => void): IDisposable;
    onBeforeAddDataValidation(callback: (params: IAddSheetDataValidationCommandParams, options: IExecutionOptions | undefined) => void | false): IDisposable;
    onBeforeUpdateDataValidationCriteria(callback: (params: IUpdateSheetDataValidationSettingCommandParams, options: IExecutionOptions | undefined) => void | false): IDisposable;
    onBeforeUpdateDataValidationRange(callback: (params: IUpdateSheetDataValidationRangeCommandParams, options: IExecutionOptions | undefined) => void | false): IDisposable;
    onBeforeUpdateDataValidationOptions(callback: (params: IUpdateSheetDataValidationOptionsCommandParams, options: IExecutionOptions | undefined) => void | false): IDisposable;
    onBeforeDeleteDataValidation(callback: (params: IRemoveSheetDataValidationCommandParams, options: IExecutionOptions | undefined) => void | false): IDisposable;
    onBeforeDeleteAllDataValidation(callback: (params: IRemoveSheetAllDataValidationCommandParams, options: IExecutionOptions | undefined) => void | false): IDisposable;
}
declare module '@univerjs/sheets/facade' {
    interface FWorkbook extends IFWorkbookDataValidationMixin {
    }
}
