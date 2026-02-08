import { CellValue, DataValidationOperator, IDataValidationRule, IDataValidationRuleBase } from '@univerjs/core';
import { IFormulaResult, IFormulaValidResult, IValidatorCellInfo, BaseDataValidator } from '@univerjs/data-validation';
export declare class CustomFormulaValidator extends BaseDataValidator {
    id: string;
    title: string;
    operators: DataValidationOperator[];
    scopes: string | string[];
    order: number;
    private readonly _customFormulaService;
    private readonly _lexerTreeBuilder;
    validatorFormula(rule: IDataValidationRule, unitId: string, subUnitId: string): IFormulaValidResult;
    parseFormula(_rule: IDataValidationRule, _unitId: string, _subUnitId: string): Promise<IFormulaResult>;
    isValidType(cellInfo: IValidatorCellInfo<CellValue>, _formula: IFormulaResult, _rule: IDataValidationRule): Promise<boolean>;
    generateRuleErrorMessage(rule: IDataValidationRuleBase): string;
    generateRuleName(rule: IDataValidationRuleBase): string;
}
