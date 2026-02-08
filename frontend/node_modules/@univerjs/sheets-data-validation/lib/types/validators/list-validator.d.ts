import { CellValue, DataValidationOperator, ICellData, IDataValidationRule, ISheetDataValidationRule, IStyleData, Nullable } from '@univerjs/core';
import { IFormulaResult, IFormulaValidResult, IValidatorCellInfo, BaseDataValidator } from '@univerjs/data-validation';
import { LexerTreeBuilder } from '@univerjs/engine-formula';
import { DataValidationFormulaService } from '../services/dv-formula.service';
export declare function getRuleFormulaResultSet(result: Nullable<Nullable<ICellData>[][]>): string[];
export declare function isValidListFormula(formula: string, lexer: LexerTreeBuilder): boolean | undefined;
export declare class ListValidator extends BaseDataValidator {
    protected formulaService: DataValidationFormulaService;
    private _lexer;
    private _univerInstanceService;
    order: number;
    readonly offsetFormulaByRange = false;
    id: string;
    title: string;
    operators: DataValidationOperator[];
    scopes: string | string[];
    skipDefaultFontRender: (rule: ISheetDataValidationRule) => boolean;
    validatorFormula(rule: IDataValidationRule, unitId: string, subUnitId: string): IFormulaValidResult;
    getExtraStyle(rule: IDataValidationRule, value: Nullable<CellValue>, { style: defaultStyle }: {
        style: IStyleData;
    }): Nullable<IStyleData>;
    parseCellValue(cellValue: CellValue): string[];
    parseFormula(rule: IDataValidationRule, unitId: string, subUnitId: string): Promise<IFormulaResult<number | undefined>>;
    isValidType(cellInfo: IValidatorCellInfo<Nullable<CellValue>>, formula: IFormulaResult<string[] | undefined>, rule: IDataValidationRule): Promise<boolean>;
    generateRuleName(): string;
    generateRuleErrorMessage(): string;
    getList(rule: IDataValidationRule, currentUnitId?: string, currentSubUnitId?: string): string[];
    getListAsync(rule: IDataValidationRule, currentUnitId?: string, currentSubUnitId?: string): Promise<string[]>;
    getListWithColor(rule: IDataValidationRule, currentUnitId?: string, currentSubUnitId?: string): {
        label: string;
        color: string;
    }[];
    getListWithColorMap(rule: IDataValidationRule, currentUnitId?: string, currentSubUnitId?: string): Record<string, string>;
}
