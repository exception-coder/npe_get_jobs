import { IRange, LocaleType, Nullable } from '@univerjs/core';
import { IFunctionNames } from '../basics/function';
import { BaseReferenceObject, FunctionVariantType, NodeValueType } from '../engine/reference-object/base-reference-object';
import { ArrayBinarySearchType, ArrayOrderSearchType } from '../engine/utils/compare';
import { ArrayValueObject } from '../engine/value-object/array-value-object';
import { BaseValueObject, ErrorValueObject } from '../engine/value-object/base-value-object';
import { FormulaFunctionResultValueType, FormulaFunctionValueType } from '../engine/value-object/primitive-object';
import { FormulaDataModel } from '../models/formula-data.model';
import { IDefinedNameMapItem } from '../services/defined-names.service';
export declare class BaseFunction {
    private _name;
    private _unitId;
    private _subUnitId;
    private _row;
    private _column;
    private _definedNames;
    private _locale;
    private _sheetOrder;
    private _sheetNameMap;
    protected _formulaDataModel: Nullable<FormulaDataModel>;
    protected _rowCount: number;
    protected _columnCount: number;
    /**
     * Whether the function needs to expand the parameters
     */
    needsExpandParams: boolean;
    /**
     * Whether the function needs to pass in reference object
     */
    needsReferenceObject: boolean;
    /**
     * Whether the function needs handle locale
     */
    needsLocale: boolean;
    /**
     * Whether the function needs sheets info
     */
    needsSheetsInfo: boolean;
    /**
     * Whether the function needs function methods in FormulaDataModel
     */
    needsFormulaDataModel: boolean;
    /**
     * Whether the function needs the number of rows and columns in the sheet
     */
    needsSheetRowColumnCount: boolean;
    /**
     * Whether the function needs to filter out rows
     */
    needsFilteredOutRows: boolean;
    /**
     * Minimum number of parameters
     */
    minParams: number;
    /**
     * Maximum number of parameters
     */
    maxParams: number;
    constructor(_name: IFunctionNames);
    get name(): IFunctionNames;
    get unitId(): Nullable<string>;
    get subUnitId(): Nullable<string>;
    get row(): number;
    get column(): number;
    dispose(): void;
    /**
     * In Excel, to inject a defined name into a function that has positioning capabilities,
     * such as using the INDIRECT function to reference a named range,
     * you can write it as follows:
     * =INDIRECT("DefinedName1")
     */
    getDefinedName(name: string): import('..').IDefinedNamesServiceParam | null;
    setDefinedNames(definedNames: IDefinedNameMapItem): void;
    getLocale(): LocaleType;
    setLocale(locale: LocaleType): void;
    getSheetsInfo(): {
        sheetOrder: string[];
        sheetNameMap: {
            [sheetId: string]: string;
        };
    };
    setSheetsInfo({ sheetOrder, sheetNameMap, }: {
        sheetOrder: string[];
        sheetNameMap: {
            [sheetId: string]: string;
        };
    }): void;
    setFormulaDataModel(_formulaDataModel: FormulaDataModel): void;
    setSheetRowColumnCount(rowCount: number, columnCount: number): void;
    isAsync(): boolean;
    isAddress(): boolean;
    isCustom(): boolean;
    isArgumentsIgnoreNumberPattern(): boolean;
    setRefInfo(unitId: string, subUnitId: string, row: number, column: number): void;
    calculateCustom(...arg: Array<FormulaFunctionValueType>): FormulaFunctionResultValueType | Promise<FormulaFunctionResultValueType>;
    calculate(...arg: BaseValueObject[]): NodeValueType;
    checkArrayType(variant: FunctionVariantType): boolean;
    /**
     * Starting with 1
     * For instance, The column number (starting with 1 for the left-most column of table_array) that contains the return value.
     * https://support.microsoft.com/en-us/office/vlookup-function-0bbc8083-26fe-4963-8ab8-93a18ad188a1
     * @param indexNum
     */
    getIndexNumValue(indexNum: BaseValueObject, defaultValue?: number): number | ErrorValueObject;
    /**
     * A logical value that specifies 1/TRUE , 0/FALSE, default 1
     * For instance range_lookup, A logical value that specifies whether you want VLOOKUP to find an approximate or an exact match
     * Approximate match - 1/TRUE
     * Exact match - 0/FALSE
     * https://support.microsoft.com/en-us/office/vlookup-function-0bbc8083-26fe-4963-8ab8-93a18ad188a1
     * For instance A1, A logical value that specifies what type of reference is contained in the cell ref_text.
     * If a1 is TRUE or omitted, ref_text is interpreted as an A1-style reference.
     * If a1 is FALSE, ref_text is interpreted as an R1C1-style reference.
     * https://support.microsoft.com/zh-cn/office/indirect-%E5%87%BD%E6%95%B0-474b3a3a-8a26-4f44-b491-92b6306fa261
     * @param logicValueObject
     */
    getZeroOrOneByOneDefault(logicValueObject?: BaseValueObject): number | undefined;
    /**
     * A logical value that specifies 1/TRUE , 0/FALSE, -1, default 1.
     * The difference from getZeroOrOneByOneDefault is that we need to get -1
     * @param logicValueObject
     */
    getMatchTypeValue(logicValueObject?: BaseValueObject): number | undefined;
    binarySearch(value: BaseValueObject, searchArray: ArrayValueObject, resultArray: ArrayValueObject, searchType?: ArrayBinarySearchType, matchType?: ArrayOrderSearchType): BaseValueObject;
    private _getOneFirstByRaw;
    private _getOneLastByRaw;
    equalSearch(value: BaseValueObject, searchArray: ArrayValueObject, resultArray: ArrayValueObject, isFirst?: boolean): BaseValueObject;
    fuzzySearch(value: BaseValueObject, searchArray: ArrayValueObject, resultArray: ArrayValueObject, isFirst?: boolean): BaseValueObject;
    orderSearch(value: BaseValueObject, searchArray: ArrayValueObject, resultArray: ArrayValueObject, searchType?: ArrayOrderSearchType, isDesc?: boolean): BaseValueObject;
    binarySearchExpand(value: BaseValueObject, searchArray: ArrayValueObject, resultArray: ArrayValueObject, axis?: number, searchType?: ArrayBinarySearchType, matchType?: ArrayOrderSearchType): ErrorValueObject | ArrayValueObject | undefined;
    equalSearchExpand(value: BaseValueObject, searchArray: ArrayValueObject, resultArray: ArrayValueObject, isFirst?: boolean, axis?: number): ErrorValueObject | ArrayValueObject | undefined;
    fuzzySearchExpand(value: BaseValueObject, searchArray: ArrayValueObject, resultArray: ArrayValueObject, isFirst?: boolean, axis?: number): ErrorValueObject | ArrayValueObject | undefined;
    orderSearchExpand(value: BaseValueObject, searchArray: ArrayValueObject, resultArray: ArrayValueObject, searchType?: ArrayOrderSearchType, isDesc?: boolean, axis?: number): ErrorValueObject | ArrayValueObject | undefined;
    flattenArray(variants: BaseValueObject[], ignoreLogicalValuesAndText?: boolean): ArrayValueObject | BaseValueObject;
    private _includingLogicalValuesAndText;
    createReferenceObject(reference: BaseReferenceObject, range: IRange): ErrorValueObject | BaseReferenceObject;
    private _setReferenceDefault;
}
