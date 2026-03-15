import { CellValue, IDataValidationRule, IDataValidationRuleBase, Nullable, DataValidationOperator } from '@univerjs/core';
import { IFormulaResult, IFormulaValidResult, IValidatorCellInfo, BaseDataValidator } from '@univerjs/data-validation';
import { ISheetLocationBase } from '@univerjs/sheets';
export declare class TextLengthValidator extends BaseDataValidator {
    id: string;
    title: string;
    private readonly _lexerTreeBuilder;
    order: number;
    operators: DataValidationOperator[];
    scopes: string | string[];
    private readonly _customFormulaService;
    private _isFormulaOrInt;
    validatorFormula(rule: IDataValidationRule, _unitId: string, _subUnitId: string): IFormulaValidResult;
    private _parseNumber;
    parseFormula(rule: IDataValidationRule, unitId: string, subUnitId: string, row: number, column: number): Promise<IFormulaResult<number | undefined>>;
    transform(cellInfo: IValidatorCellInfo<CellValue>, _formula: IFormulaResult, _rule: IDataValidationRule): {
        value: number;
        interceptValue: Nullable<CellValue>;
        row: number;
        column: number;
        unitId: string;
        subUnitId: string;
        worksheet: import('@univerjs/core').Worksheet;
        workbook: import('@univerjs/core').Workbook;
        t: Nullable<import('@univerjs/protocol').CellValueType>;
    };
    isValidType(cellInfo: IValidatorCellInfo<number>, _formula: IFormulaResult, _rule: IDataValidationRule): Promise<boolean>;
    generateRuleErrorMessage(rule: IDataValidationRuleBase, pos: ISheetLocationBase): string;
}
