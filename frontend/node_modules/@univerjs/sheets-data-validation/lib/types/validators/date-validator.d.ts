import { CellValue, IDataValidationRule, IDataValidationRuleBase, DataValidationOperator } from '@univerjs/core';
import { IFormulaResult, IFormulaValidResult, IValidatorCellInfo, BaseDataValidator } from '@univerjs/data-validation';
import { ISheetLocationBase } from '@univerjs/sheets';
export declare class DateValidator extends BaseDataValidator {
    id: string;
    title: string;
    order: number;
    operators: DataValidationOperator[];
    scopes: string | string[];
    private readonly _customFormulaService;
    private readonly _lexerTreeBuilder;
    parseFormula(rule: IDataValidationRule, unitId: string, subUnitId: string, row: number, column: number): Promise<IFormulaResult<number | undefined>>;
    isValidType(info: IValidatorCellInfo): Promise<boolean>;
    private _validatorSingleFormula;
    validatorFormula(rule: IDataValidationRule, unitId: string, subUnitId: string): IFormulaValidResult;
    normalizeFormula(rule: IDataValidationRule, _unitId: string, _subUnitId: string): {
        formula1: string | undefined;
        formula2: string | undefined;
    };
    transform(cellInfo: IValidatorCellInfo<CellValue>, _formula: IFormulaResult, _rule: IDataValidationRule): IValidatorCellInfo<number>;
    get operatorNames(): string[];
    generateRuleName(rule: IDataValidationRuleBase): string;
    generateRuleErrorMessage(rule: IDataValidationRuleBase, pos: ISheetLocationBase): string;
}
