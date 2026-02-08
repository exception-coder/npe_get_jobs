import { Nullable, DataValidationStatus } from '@univerjs/core';
import { IDataValidationError } from './f-workbook';
import { FRange } from '@univerjs/sheets/facade';
import { FDataValidation } from './f-data-validation';
/**
 * @ignore
 */
export interface IFRangeDataValidationMixin {
    /**
     * Set a data validation rule to current range. if rule is null, clear data validation rule.
     * @param {Nullable<FDataValidation>} rule data validation rule, build by `FUniver.newDataValidation`
     * @returns current range
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Create a data validation rule that requires a number between 1 and 10 for the range A1:B10
     * const fRange = fWorksheet.getRange('A1:B10');
     * const rule = univerAPI.newDataValidation()
     *   .requireNumberBetween(1, 10)
     *   .setOptions({
     *     allowBlank: true,
     *     showErrorMessage: true,
     *     error: 'Please enter a number between 1 and 10'
     *   })
     *   .build();
     * fRange.setDataValidation(rule);
     * ```
     */
    setDataValidation(rule: Nullable<FDataValidation>): FRange;
    /**
     * Get first data validation rule in current range.
     * @returns {Nullable<FDataValidation>} data validation rule
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Create a data validation rule that requires a number equal to 20 for the range A1:B10
     * const fRange = fWorksheet.getRange('A1:B10');
     * const rule = univerAPI.newDataValidation()
     *   .requireNumberEqualTo(20)
     *   .build();
     * fRange.setDataValidation(rule);
     * console.log(fRange.getDataValidation().getCriteriaValues());
     *
     * // Change the rule criteria to require a number between 1 and 10
     * fRange.getDataValidation().setCriteria(
     *   univerAPI.Enum.DataValidationType.DECIMAL,
     *   [univerAPI.Enum.DataValidationOperator.BETWEEN, '1', '10']
     * );
     *
     * // Print the new rule criteria values
     * console.log(fRange.getDataValidation().getCriteriaValues());
     * ```
     */
    getDataValidation(): Nullable<FDataValidation>;
    /**
     * Get all data validation rules in current range.
     * @returns {FDataValidation[]} all data validation rules
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Create a data validation rule that requires a number equal to 20 for the range A1:B10
     * const fRange1 = fWorksheet.getRange('A1:B10');
     * const rule1 = univerAPI.newDataValidation()
     *   .requireNumberEqualTo(20)
     *   .build();
     * fRange1.setDataValidation(rule1);
     *
     * // Create a data validation rule that requires a number between 1 and 10 for the range C1:D10
     * const fRange2 = fWorksheet.getRange('C1:D10');
     * const rule2 = univerAPI.newDataValidation()
     *   .requireNumberBetween(1, 10)
     *   .build();
     * fRange2.setDataValidation(rule2);
     *
     * // Get all data validation rules in the range A1:D10
     * const range = fWorksheet.getRange('A1:D10');
     * const rules = range.getDataValidations();
     * console.log(rules.length); // 2
     * ```
     */
    getDataValidations(): FDataValidation[];
    /**
     * Get data validation validator status for current range.
     * @returns {Promise<DataValidationStatus[][]>} matrix of validator status
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Set some values in the range A1:B10
     * const fRange = fWorksheet.getRange('A1:B10');
     * fRange.setValues([
     *   [1, 2],
     *   [3, 4],
     *   [5, 6],
     *   [7, 8],
     *   [9, 10],
     *   [11, 12],
     *   [13, 14],
     *   [15, 16],
     *   [17, 18],
     *   [19, 20]
     * ]);
     *
     * // Create a data validation rule that requires a number between 1 and 10 for the range A1:B10
     * const rule = univerAPI.newDataValidation()
     *   .requireNumberBetween(1, 10)
     *   .build();
     * fRange.setDataValidation(rule);
     *
     * // Get the validator status for the cell B2
     * const status = await fWorksheet.getRange('B2').getValidatorStatus();
     * console.log(status?.[0]?.[0]); // 'valid'
     *
     * // Get the validator status for the cell B10
     * const status2 = await fWorksheet.getRange('B10').getValidatorStatus();
     * console.log(status2?.[0]?.[0]); // 'invalid'
     * ```
     */
    getValidatorStatus(): Promise<DataValidationStatus[][]>;
    /**
     * Get data validation errors for a specific range in current worksheet.
     * @returns A promise that resolves to an array of validation errors in the specified range.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const fRange = fWorksheet.getRange('A1:B10');
     * const errors = await fRange.getDataValidationErrorAsync();
     *
     * console.log(errors);
     * ```
     */
    getDataValidationErrorAsync(): Promise<IDataValidationError[]>;
}
/**
 * @ignore
 */
export declare class FRangeDataValidationMixin extends FRange implements IFRangeDataValidationMixin {
    setDataValidation(rule: Nullable<FDataValidation>): FRange;
    getDataValidation(): Nullable<FDataValidation>;
    getDataValidations(): FDataValidation[];
    getValidatorStatus(): Promise<DataValidationStatus[][]>;
    getDataValidationErrorAsync(): Promise<IDataValidationError[]>;
    private _collectValidationErrorsForRange;
    private _createDataValidationError;
}
declare module '@univerjs/sheets/facade' {
    interface FRange extends IFRangeDataValidationMixin {
    }
}
