import { ICellData, IRange, Nullable } from '@univerjs/core';
import { IRuntimeUnitDataType, IUnitData, IUnitSheetNameMap, IUnitStylesData } from '../../basics/common';
import { BaseValueObject } from '../value-object/base-value-object';
import { FormulaAstLRU } from '../../basics/cache-lru';
import { ObjectClassType } from '../../basics/object-class-type';
import { ArrayValueObject } from '../value-object/array-value-object';
import { StringValueObject } from '../value-object/primitive-object';
export type NodeValueType = BaseValueObject | BaseReferenceObject | AsyncObject | AsyncArrayObject;
export type FunctionVariantType = BaseValueObject | BaseReferenceObject;
export declare const FORMULA_REF_TO_ARRAY_CACHE: FormulaAstLRU<ArrayValueObject>;
export declare class BaseReferenceObject extends ObjectClassType {
    private _token;
    private _forcedSheetId;
    private _forcedSheetName;
    private _defaultSheetId;
    private _rangeData;
    private _unitData;
    private _unitStylesData;
    private _filteredOutRows;
    private _defaultUnitId;
    private _forcedUnitId;
    private _runtimeData;
    private _arrayFormulaCellData;
    private _runtimeArrayFormulaCellData;
    private _runtimeFeatureCellData;
    private _refOffsetX;
    private _refOffsetY;
    constructor(_token: string);
    dispose(): void;
    getToken(): string;
    setToken(token: string): void;
    isExceedRange(): boolean;
    setRefOffset(x?: number, y?: number): void;
    getRefOffset(): {
        x: number;
        y: number;
    };
    getRangePosition(): {
        startRow: number;
        endRow: number;
        startColumn: number;
        endColumn: number;
        rangeType?: import('@univerjs/core').RANGE_TYPE;
        startAbsoluteRefType?: import('@univerjs/core').AbsoluteRefType;
        endAbsoluteRefType?: import('@univerjs/core').AbsoluteRefType;
        unitId?: string;
        sheetId?: string;
    };
    isReferenceObject(): boolean;
    iterator(callback: (valueObject: Nullable<BaseValueObject>, rowIndex: number, columnIndex: number) => Nullable<boolean>): Nullable<boolean>;
    getFirstCell(): BaseValueObject | StringValueObject;
    getRangeData(): IRange;
    setRangeData(range: IRange): void;
    getUnitId(): string;
    getSheetId(): string;
    setForcedUnitIdDirect(unitId: string): void;
    getForcedUnitId(): string;
    setForcedSheetId(sheetNameMap: IUnitSheetNameMap): void;
    setForcedSheetIdDirect(sheetId: string): void;
    getForcedSheetId(): Nullable<string>;
    setForcedSheetName(sheetName: string): void;
    getForcedSheetName(): string;
    setDefaultSheetId(sheetId: string): void;
    getDefaultSheetId(): string;
    setDefaultUnitId(unitId: string): void;
    getDefaultUnitId(): string;
    getUnitData(): IUnitData;
    setUnitData(unitData: IUnitData): void;
    getUnitStylesData(): IUnitStylesData;
    setUnitStylesData(unitStylesData: IUnitStylesData): void;
    getFilteredOutRows(): number[];
    setFilteredOutRows(filteredOutRows: number[]): void;
    getRuntimeData(): IRuntimeUnitDataType;
    setRuntimeData(runtimeData: IRuntimeUnitDataType): void;
    getArrayFormulaCellData(): IRuntimeUnitDataType;
    setArrayFormulaCellData(unitData: IRuntimeUnitDataType): void;
    getRuntimeArrayFormulaCellData(): IRuntimeUnitDataType;
    setRuntimeArrayFormulaCellData(unitData: IRuntimeUnitDataType): void;
    getRuntimeFeatureCellData(): {
        [featureId: string]: IRuntimeUnitDataType;
    };
    setRuntimeFeatureCellData(unitData: {
        [featureId: string]: IRuntimeUnitDataType;
    }): void;
    getActiveSheetRowCount(): number;
    getActiveSheetColumnCount(): number;
    getRowCount(): number;
    getColumnCount(): number;
    getRowData(): import('@univerjs/core').IObjectArrayPrimitiveType<Partial<import('@univerjs/core').IRowData>>;
    getColumnData(): import('@univerjs/core').IObjectArrayPrimitiveType<Partial<import('@univerjs/core').IColumnData>>;
    isCell(): boolean;
    isColumn(): boolean;
    isRow(): boolean;
    isRange(): boolean;
    isTable(): boolean;
    unionBy(referenceObject: BaseReferenceObject): NodeValueType;
    unionRange(rangeData1: IRange, rangeData2: IRange): IRange;
    getCellValueObject(cell: ICellData): BaseValueObject | StringValueObject;
    private _getPatternByCell;
    getCellByRow(row: number): BaseValueObject | StringValueObject;
    getCellByColumn(column: number): BaseValueObject | StringValueObject;
    getCurrentActiveSheetData(): import('../../basics/common').ISheetItem;
    getCurrentStylesData(): import('@univerjs/core').Styles;
    getCurrentRuntimeSheetData(): import('@univerjs/core').ObjectMatrix<Nullable<ICellData>> | undefined;
    getCurrentActiveArrayFormulaCellData(): import('@univerjs/core').ObjectMatrix<Nullable<ICellData>> | undefined;
    getCurrentRuntimeActiveArrayFormulaCellData(): import('@univerjs/core').ObjectMatrix<Nullable<ICellData>> | undefined;
    getCellData(row: number, column: number): Nullable<ICellData>;
    getRuntimeFeatureCellValue(row: number, column: number): ICellData | undefined;
    getCellByPosition(rowRaw?: number, columnRaw?: number): BaseValueObject | StringValueObject;
    /**
     * Get the pattern of the cell
     * @param unitId
     * @param sheetId
     * @param row
     * @param column
     * @returns
     */
    getCellPattern(unitId: string, sheetId: string, row: number, column: number): string;
    toArrayValueObject(useCache?: boolean): ArrayValueObject;
    toUnitRange(): {
        range: {
            startRow: number;
            endRow: number;
            startColumn: number;
            endColumn: number;
            rangeType?: import('@univerjs/core').RANGE_TYPE;
            startAbsoluteRefType?: import('@univerjs/core').AbsoluteRefType;
            endAbsoluteRefType?: import('@univerjs/core').AbsoluteRefType;
            unitId?: string;
            sheetId?: string;
        };
        sheetId: string;
        unitId: string;
    };
    private _checkIfWorksheetMiss;
    private _getBlankArrayValueObject;
}
export declare class AsyncObject extends ObjectClassType {
    private _promise;
    constructor(_promise: Promise<BaseValueObject>);
    isAsyncObject(): boolean;
    getValue(): Promise<BaseValueObject>;
}
export declare class AsyncArrayObject extends ObjectClassType {
    private _promiseList;
    constructor(_promiseList: Array<Array<BaseValueObject | AsyncObject>>);
    isAsyncArrayObject(): boolean;
    getValue(): Promise<ArrayValueObject>;
}
