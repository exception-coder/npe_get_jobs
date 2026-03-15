import { ICellData, IObjectMatrixPrimitiveType, IRange, IUnitRange, Nullable, Disposable, IUniverInstanceService, ObjectMatrix } from '@univerjs/core';
import { IArrayFormulaRangeType, IArrayFormulaUnitCellType, IFormulaData, IFormulaDataItem, IRuntimeUnitDataType, IUnitData, IUnitRowData, IUnitSheetNameMap, IUnitStylesData } from '../basics/common';
import { LexerTreeBuilder } from '../engine/analysis/lexer-tree-builder';
export interface IRangeChange {
    oldCell: IRange;
    newCell: IRange | null;
}
export declare class FormulaDataModel extends Disposable {
    private readonly _univerInstanceService;
    private readonly _lexerTreeBuilder;
    private _arrayFormulaRange;
    private _arrayFormulaCellData;
    constructor(_univerInstanceService: IUniverInstanceService, _lexerTreeBuilder: LexerTreeBuilder);
    dispose(): void;
    clearPreviousArrayFormulaCellData(clearArrayFormulaCellData: IRuntimeUnitDataType): void;
    mergeArrayFormulaCellData(unitData: IRuntimeUnitDataType): void;
    getFormulaData(): IFormulaData;
    getSheetFormulaData(unitId: string, sheetId: string): Nullable<IObjectMatrixPrimitiveType<Nullable<IFormulaDataItem>>>;
    getArrayFormulaRange(): IArrayFormulaRangeType;
    setArrayFormulaRange(value: IArrayFormulaRangeType): void;
    getArrayFormulaCellData(): IArrayFormulaUnitCellType;
    setArrayFormulaCellData(value: IArrayFormulaUnitCellType): void;
    mergeArrayFormulaRange(formulaData: IArrayFormulaRangeType): void;
    deleteArrayFormulaRange(unitId: string, sheetId: string, row: number, column: number): void;
    getCalculateData(): {
        allUnitData: IUnitData;
        unitStylesData: IUnitStylesData;
        unitSheetNameMap: IUnitSheetNameMap;
    };
    /**
     * Get the hidden rows that are filtered or manually hidden.
     *
     * For formulas that are sensitive to hidden rows.
     */
    getHiddenRowsFiltered(): IUnitRowData;
    updateFormulaData(unitId: string, sheetId: string, cellValue: IObjectMatrixPrimitiveType<Nullable<ICellData>>): IObjectMatrixPrimitiveType<IFormulaDataItem | null>;
    updateArrayFormulaRange(unitId: string, sheetId: string, cellValue: IObjectMatrixPrimitiveType<Nullable<ICellData>>): void;
    updateArrayFormulaCellData(unitId: string, sheetId: string, cellValue: IObjectMatrixPrimitiveType<Nullable<ICellData>>): void;
    getFormulaStringByCell(row: number, column: number, sheetId: string, unitId: string): Nullable<string>;
    /**
     * Function to get all formula ranges
     * @returns
     */
    getFormulaDirtyRanges(): IUnitRange[];
    private _getSheetFormulaIdMap;
}
export declare function initSheetFormulaData(formulaData: IFormulaData, unitId: string, sheetId: string, cellMatrix: ObjectMatrix<Nullable<ICellData>>): IFormulaData;
