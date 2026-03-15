import { CellValue, DataValidationOperator, IDataValidationRule, IDataValidationRuleBase } from '@univerjs/core';
import { IFormulaResult, IFormulaValidResult, IValidatorCellInfo, BaseDataValidator } from '@univerjs/data-validation';
export declare class AnyValidator extends BaseDataValidator {
    id: string;
    title: string;
    operators: DataValidationOperator[];
    scopes: string | string[];
    order: number;
    readonly offsetFormulaByRange = false;
    parseFormula(rule: IDataValidationRule, unitId: string, subUnitId: string): Promise<IFormulaResult>;
    validatorFormula(rule: IDataValidationRule, unitId: string, subUnitId: string): IFormulaValidResult;
    isValidType(cellInfo: IValidatorCellInfo<CellValue>, formula: IFormulaResult, rule: IDataValidationRule): Promise<boolean>;
    generateRuleErrorMessage(rule: IDataValidationRuleBase): string;
}
