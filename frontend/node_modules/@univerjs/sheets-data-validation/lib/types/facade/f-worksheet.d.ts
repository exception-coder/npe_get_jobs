import { Nullable, ObjectMatrix, DataValidationStatus } from '@univerjs/core';
import { IDataValidationError } from './f-workbook';
import { FWorksheet } from '@univerjs/sheets/facade';
import { FDataValidation } from './f-data-validation';
/**
 * @ignore
 */
export interface IFWorksheetDataValidationMixin {
    /**
     * Get all data validation rules in current sheet.
     * @returns {FDataValidation[]} All data validation rules
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const rules = fWorksheet.getDataValidations();
     * console.log(rules);
     * ```
     */
    getDataValidations(): FDataValidation[];
    /**
     * @deprecated use `getValidatorStatusAsync` instead
     */
    getValidatorStatus(): Promise<ObjectMatrix<Nullable<DataValidationStatus>>>;
    /**
     * Get data validation validator status for current sheet.
     * @returns {Promise<ObjectMatrix<Nullable<DataValidationStatus>>>} matrix of validator status
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const status = await fWorksheet.getValidatorStatusAsync();
     * console.log(status);
     * ```
     */
    getValidatorStatusAsync(): Promise<ObjectMatrix<Nullable<DataValidationStatus>>>;
    /**
     * get data validation rule by rule id
     * @param ruleId - the rule id
     * @returns {Nullable<FDataValidation>} data validation rule
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const rules = fWorksheet.getDataValidations();
     * console.log(fWorksheet.getDataValidation(rules[0]?.rule.uid));
     * ```
     */
    getDataValidation(ruleId: string): Nullable<FDataValidation>;
    /**
     * Get all data validation errors for current worksheet.
     * @returns A promise that resolves to an array of validation errors.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const errors = await fWorksheet.getAllDataValidationError();
     * console.log(errors);
     * ```
     */
    getAllDataValidationErrorAsync(): Promise<IDataValidationError[]>;
}
/**
 * @ignore
 */
export declare class FWorksheetDataValidationMixin extends FWorksheet implements IFWorksheetDataValidationMixin {
    getDataValidations(): FDataValidation[];
    getValidatorStatus(): Promise<ObjectMatrix<Nullable<DataValidationStatus>>>;
    getValidatorStatusAsync(): Promise<ObjectMatrix<Nullable<DataValidationStatus>>>;
    getDataValidation(ruleId: string): Nullable<FDataValidation>;
    getAllDataValidationErrorAsync(): Promise<IDataValidationError[]>;
    private _collectValidationErrorsForSheet;
    private _collectValidationErrorsForRange;
    private _createDataValidationError;
}
declare module '@univerjs/sheets/facade' {
    interface FWorksheet extends IFWorksheetDataValidationMixin {
    }
}
