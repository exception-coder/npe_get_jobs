import { IUnitRange, LocaleType, Nullable, Disposable, IUniverInstanceService, LocaleService } from '@univerjs/core';
import { IArrayFormulaRangeType, IDirtyUnitFeatureMap, IDirtyUnitOtherFormulaMap, IDirtyUnitSheetDefinedNameMap, IDirtyUnitSheetNameMap, IFormulaData, IFormulaDatasetConfig, IRuntimeUnitDataType, IUnitData, IUnitExcludedCell, IUnitRowData, IUnitSheetNameMap, IUnitStylesData } from '../basics/common';
import { FormulaDataModel } from '../models/formula-data.model';
import { ISheetRowFilteredService } from './sheet-row-filtered.service';
export interface IFormulaDirtyData {
    forceCalculation: boolean;
    dirtyRanges: IUnitRange[];
    dirtyNameMap: IDirtyUnitSheetNameMap;
    dirtyDefinedNameMap: IDirtyUnitSheetDefinedNameMap;
    dirtyUnitFeatureMap: IDirtyUnitFeatureMap;
    dirtyUnitOtherFormulaMap: IDirtyUnitOtherFormulaMap;
    clearDependencyTreeCache: IDirtyUnitSheetNameMap;
    maxIteration?: number;
    rowData?: IUnitRowData;
}
export interface IFormulaCurrentConfigService {
    load(config: IFormulaDatasetConfig): void;
    getUnitData(): IUnitData;
    /**
     * Get the unit styles data.
     */
    getUnitStylesData(): IUnitStylesData;
    getFormulaData(): IFormulaData;
    getSheetNameMap(): IUnitSheetNameMap;
    isForceCalculate(): boolean;
    getDirtyRanges(): IUnitRange[];
    getDirtyNameMap(): IDirtyUnitSheetNameMap;
    getDirtyDefinedNameMap(): IDirtyUnitSheetDefinedNameMap;
    getDirtyUnitFeatureMap(): IDirtyUnitFeatureMap;
    registerUnitData(unitData: IUnitData): void;
    registerFormulaData(formulaData: IFormulaData): void;
    registerSheetNameMap(sheetNameMap: IUnitSheetNameMap): void;
    getExcludedRange(): Nullable<IUnitExcludedCell>;
    loadDirtyRangesAndExcludedCell(dirtyRanges: IUnitRange[], excludedCell?: IUnitExcludedCell): void;
    getArrayFormulaCellData(): IRuntimeUnitDataType;
    getArrayFormulaRange(): IArrayFormulaRangeType;
    getSheetName(unitId: string, sheetId: string): string;
    getDirtyUnitOtherFormulaMap(): IDirtyUnitOtherFormulaMap;
    getExecuteUnitId(): Nullable<string>;
    getExecuteSubUnitId(): Nullable<string>;
    setExecuteUnitId(unitId: string): void;
    setExecuteSubUnitId(subUnitId: string): void;
    getDirtyData(): IFormulaDirtyData;
    getClearDependencyTreeCache(): IDirtyUnitSheetNameMap;
    getLocale(): LocaleType;
    getSheetsInfo(): {
        sheetOrder: string[];
        sheetNameMap: {
            [sheetId: string]: string;
        };
    };
    getSheetRowColumnCount(unitId: string, sheetId: string): {
        rowCount: number;
        columnCount: number;
    };
    getFilteredOutRows(unitId: string, sheetId: string, startRow: number, endRow: number): number[];
}
export declare class FormulaCurrentConfigService extends Disposable implements IFormulaCurrentConfigService {
    private readonly _univerInstanceService;
    private readonly _localeService;
    private readonly _formulaDataModel;
    private readonly _sheetRowFilteredService;
    private _unitData;
    private _unitStylesData;
    private _arrayFormulaCellData;
    private _arrayFormulaRange;
    private _formulaData;
    private _sheetNameMap;
    private _forceCalculate;
    private _clearDependencyTreeCache;
    private _dirtyRanges;
    private _dirtyNameMap;
    private _dirtyDefinedNameMap;
    private _dirtyUnitFeatureMap;
    private _dirtyUnitOtherFormulaMap;
    private _excludedCell;
    private _sheetIdToNameMap;
    private _executeUnitId;
    private _executeSubUnitId;
    constructor(_univerInstanceService: IUniverInstanceService, _localeService: LocaleService, _formulaDataModel: FormulaDataModel, _sheetRowFilteredService: ISheetRowFilteredService);
    dispose(): void;
    getExecuteUnitId(): Nullable<string>;
    getExecuteSubUnitId(): Nullable<string>;
    setExecuteUnitId(unitId: string): void;
    setExecuteSubUnitId(subUnitId: string): void;
    getExcludedRange(): Nullable<IUnitExcludedCell>;
    getUnitData(): IUnitData;
    getUnitStylesData(): IUnitStylesData;
    getFormulaData(): IFormulaData;
    getArrayFormulaCellData(): IRuntimeUnitDataType;
    getArrayFormulaRange(): IArrayFormulaRangeType;
    getSheetNameMap(): IUnitSheetNameMap;
    isForceCalculate(): boolean;
    getDirtyRanges(): IUnitRange[];
    getDirtyNameMap(): IDirtyUnitSheetNameMap;
    getDirtyDefinedNameMap(): IDirtyUnitSheetDefinedNameMap;
    getDirtyUnitFeatureMap(): IDirtyUnitFeatureMap;
    getDirtyUnitOtherFormulaMap(): IDirtyUnitOtherFormulaMap;
    getSheetName(unitId: string, sheetId: string): string;
    getClearDependencyTreeCache(): IDirtyUnitSheetNameMap;
    getLocale(): LocaleType;
    getSheetsInfo(): {
        sheetOrder: string[];
        sheetNameMap: {
            [sheetId: string]: string;
        };
    };
    getSheetRowColumnCount(unitId: string, sheetId: string): {
        rowCount: number;
        columnCount: number;
    };
    getFilteredOutRows(unitId: string, sheetId: string, startRow: number, endRow: number): number[];
    load(config: IFormulaDatasetConfig): void;
    getDirtyData(): IFormulaDirtyData;
    loadDirtyRangesAndExcludedCell(dirtyRanges: IUnitRange[], excludedCell?: IUnitExcludedCell): void;
    registerUnitData(unitData: IUnitData): void;
    registerFormulaData(formulaData: IFormulaData): void;
    registerSheetNameMap(sheetNameMap: IUnitSheetNameMap): void;
    private _mergeNameMap;
    private _loadSheetData;
    /**
     * There is no filter information in the worker, it must be passed in from the main thread after it is ready
     * @param rowData
     */
    private _applyUnitRowData;
}
export declare const IFormulaCurrentConfigService: import('@wendellhu/redi').IdentifierDecorator<FormulaCurrentConfigService>;
