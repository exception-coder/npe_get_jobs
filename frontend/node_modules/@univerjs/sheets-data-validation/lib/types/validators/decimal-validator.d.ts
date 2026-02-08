import { CellValue, IDataValidationRule, IDataValidationRuleBase, Nullable, DataValidationOperator } from '@univerjs/core';
import { IFormulaResult, IFormulaValidResult, IValidatorCellInfo, BaseDataValidator } from '@univerjs/data-validation';
import { ISheetLocationBase } from '@univerjs/sheets';
export declare function getCellValueNumber(cellValue: CellValue): number;
export declare class DecimalValidator extends BaseDataValidator {
    private readonly _customFormulaService;
    id: string;
    private readonly _lexerTreeBuilder;
    title: string;
    order: number;
    operators: DataValidationOperator[];
    scopes: string | string[];
    private _isFormulaOrNumber;
    isValidType(cellInfo: IValidatorCellInfo<CellValue>, formula: IFormulaResult, rule: IDataValidationRule): Promise<boolean>;
    transform(cellInfo: IValidatorCellInfo<CellValue>, formula: IFormulaResult, rule: IDataValidationRule): {
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
    private _parseNumber;
    parseFormula(rule: IDataValidationRule, unitId: string, subUnitId: string, row: number, column: number): Promise<IFormulaResult>;
    validatorFormula(rule: IDataValidationRule, unitId: string, subUnitId: string): IFormulaValidResult;
    generateRuleErrorMessage(rule: IDataValidationRuleBase, position: ISheetLocationBase): string;
}
