import { CellValue, IDataValidationRule, IDataValidationRuleBase, IStyleData, Nullable, Workbook, Worksheet, DataValidationOperator, Injector, LocaleService } from '@univerjs/core';
import { CellValueType } from '@univerjs/protocol';
import { ISheetLocationBase } from '@univerjs/sheets';
import { IBaseDataValidationWidget } from './base-widget';
export declare const FORMULA1 = "{FORMULA1}";
export declare const FORMULA2 = "{FORMULA2}";
export declare const TYPE = "{TYPE}";
export interface IValidatorCellInfo<DataType = Nullable<CellValue>> {
    value: DataType;
    interceptValue: Nullable<CellValue>;
    row: number;
    column: number;
    unitId: string;
    subUnitId: string;
    worksheet: Worksheet;
    workbook: Workbook;
    t: Nullable<CellValueType>;
}
export interface IFormulaResult<T = any> {
    formula1: T;
    formula2: T;
    isFormulaValid: boolean;
}
export interface IFormulaValidResult {
    success: boolean;
    formula1?: string;
    formula2?: string;
}
export declare enum DataValidatorDropdownType {
    DATE = "date",
    TIME = "time",
    DATETIME = "datetime",
    LIST = "list",
    MULTIPLE_LIST = "multipleList",
    COLOR = "color",
    CASCADE = "cascade"
}
export declare abstract class BaseDataValidator {
    readonly localeService: LocaleService;
    readonly injector: Injector;
    abstract id: string;
    abstract title: string;
    abstract operators: DataValidationOperator[];
    abstract scopes: string[] | string;
    abstract order: number;
    offsetFormulaByRange: boolean;
    formulaInput: string | undefined;
    canvasRender: Nullable<IBaseDataValidationWidget>;
    dropdownType: DataValidatorDropdownType | undefined;
    optionsInput: string | undefined;
    constructor(localeService: LocaleService, injector: Injector);
    get operatorNames(): string[];
    get titleStr(): string;
    skipDefaultFontRender: ((rule: IDataValidationRule, cellValue: Nullable<CellValue>, pos: any) => boolean) | undefined;
    generateRuleName(rule: IDataValidationRuleBase): string;
    generateRuleErrorMessage(rule: IDataValidationRuleBase, position: ISheetLocationBase): string;
    getExtraStyle(rule: IDataValidationRuleBase, value: Nullable<CellValue>, ctx: {
        style: IStyleData;
    }, row: number, column: number): Nullable<IStyleData>;
    getRuleFinalError(rule: IDataValidationRule, position: ISheetLocationBase): string;
    isEmptyCellValue(cellValue: Nullable<CellValue>): cellValue is null | undefined | void;
    abstract parseFormula(rule: IDataValidationRule, unitId: string, subUnitId: string, row: number, column: number): Promise<IFormulaResult<number | undefined>>;
    abstract validatorFormula(rule: IDataValidationRule, unitId: string, subUnitId: string): IFormulaValidResult;
    normalizeFormula(rule: IDataValidationRule, unitId: string, subUnitId: string): {
        formula1: string | undefined;
        formula2: string | undefined;
    };
    isValidType(cellInfo: IValidatorCellInfo, formula: IFormulaResult, rule: IDataValidationRule): Promise<boolean>;
    transform(cellInfo: IValidatorCellInfo, formula: IFormulaResult, rule: IDataValidationRule): IValidatorCellInfo<number>;
    validatorIsEqual(cellInfo: IValidatorCellInfo<CellValue>, formula: IFormulaResult, rule: IDataValidationRule): Promise<boolean>;
    validatorIsNotEqual(cellInfo: IValidatorCellInfo<number>, formula: IFormulaResult, _rule: IDataValidationRule): Promise<boolean>;
    validatorIsBetween(cellInfo: IValidatorCellInfo<number>, formula: IFormulaResult, _rule: IDataValidationRule): Promise<boolean>;
    validatorIsNotBetween(cellInfo: IValidatorCellInfo<number>, formula: IFormulaResult, _rule: IDataValidationRule): Promise<boolean>;
    validatorIsGreaterThan(cellInfo: IValidatorCellInfo<number>, formula: IFormulaResult, _rule: IDataValidationRule): Promise<boolean>;
    validatorIsGreaterThanOrEqual(cellInfo: IValidatorCellInfo<number>, formula: IFormulaResult, _rule: IDataValidationRule): Promise<boolean>;
    validatorIsLessThan(cellInfo: IValidatorCellInfo<number>, formula: IFormulaResult, _rule: IDataValidationRule): Promise<boolean>;
    validatorIsLessThanOrEqual(cellInfo: IValidatorCellInfo<number>, formula: IFormulaResult, _rule: IDataValidationRule): Promise<boolean>;
    validator(cellInfo: IValidatorCellInfo, rule: IDataValidationRule): Promise<boolean>;
}
