import { CellValue, DataValidationOperator, IDataValidationRule, IDataValidationRuleBase, ISheetDataValidationRule, Nullable, WrapStrategy } from '@univerjs/core';
import { IFormulaResult, IFormulaValidResult, IValidatorCellInfo, BaseDataValidator } from '@univerjs/data-validation';
export declare const CHECKBOX_FORMULA_1 = 1;
export declare const CHECKBOX_FORMULA_2 = 0;
interface ICheckboxFormulaResult extends IFormulaResult {
    originFormula1: Nullable<CellValue>;
    originFormula2: Nullable<CellValue>;
}
export declare const transformCheckboxValue: (value: Nullable<CellValue>) => Nullable<CellValue>;
export declare class CheckboxValidator extends BaseDataValidator {
    id: string;
    title: string;
    operators: DataValidationOperator[];
    scopes: string | string[];
    order: number;
    readonly offsetFormulaByRange = false;
    private _formulaService;
    skipDefaultFontRender: (rule: ISheetDataValidationRule, cellValue: Nullable<CellValue>, pos: {
        unitId: string;
        subUnitId: string;
        row: number;
        column: number;
    }) => boolean;
    validatorFormula(rule: IDataValidationRule, unitId: string, subUnitId: string): IFormulaValidResult;
    parseFormula(rule: IDataValidationRule, unitId: string, subUnitId: string): Promise<ICheckboxFormulaResult>;
    getExtraStyle(rule: IDataValidationRule, value: Nullable<CellValue>): {
        tb: WrapStrategy;
    };
    parseFormulaSync(rule: IDataValidationRule, unitId: string, subUnitId: string): ICheckboxFormulaResult;
    isValidType(cellInfo: IValidatorCellInfo<CellValue>, formula: IFormulaResult, rule: IDataValidationRule): Promise<boolean>;
    generateRuleErrorMessage(rule: IDataValidationRuleBase): string;
    generateRuleName(rule: IDataValidationRuleBase): string;
}
export {};
