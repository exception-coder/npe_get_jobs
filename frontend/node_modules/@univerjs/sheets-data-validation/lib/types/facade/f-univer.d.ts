import { Injector } from '@univerjs/core';
import { FUniver } from '@univerjs/core/facade';
import { FDataValidationBuilder } from './f-data-validation-builder';
/**
 * @ignore
 */
export interface IFUnvierDataValidationMixin {
    /**
     * Creates a new instance of FDataValidationBuilder
     * @returns {FDataValidationBuilder} A new instance of the FDataValidationBuilder class
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Create a new data validation rule that requires a number between 1 and 10 fot the range A1:B10
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
    newDataValidation(): FDataValidationBuilder;
}
export declare class FUnvierDataValidationMixin extends FUniver implements IFUnvierDataValidationMixin {
    /**
     * @deprecated use `univerAPI.newDataValidation()` as instead.
     * @returns {FDataValidationBuilder} A new instance of the FDataValidationBuilder class
     */
    static newDataValidation(): FDataValidationBuilder;
    newDataValidation(): FDataValidationBuilder;
    /**
     * @ignore
     */
    _initialize(injector: Injector): void;
}
declare module '@univerjs/core/facade' {
    /**
     * @ignore
     */
    namespace FUniver {
        /**
         * @deprecated use `univerAPI.newDataValidation()` as instead.
         * @returns {FDataValidationBuilder} A new instance of the FDataValidationBuilder class
         */
        function newDataValidation(): FDataValidationBuilder;
    }
    interface FUniver extends IFUnvierDataValidationMixin {
    }
}
