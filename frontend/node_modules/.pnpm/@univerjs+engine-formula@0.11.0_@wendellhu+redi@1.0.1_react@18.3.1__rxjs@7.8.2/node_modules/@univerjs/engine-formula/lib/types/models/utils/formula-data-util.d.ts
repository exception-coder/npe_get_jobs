import { ICellData, IRange, Nullable, ObjectMatrix } from '@univerjs/core';
import { IFormulaDataItem, IFormulaIdMap } from '../../basics/common';
export declare function updateFormulaDataByCellValue(sheetFormulaDataMatrix: ObjectMatrix<Nullable<IFormulaDataItem>>, newSheetFormulaDataMatrix: ObjectMatrix<IFormulaDataItem | null>, formulaIdMap: {
    [formulaId: string]: IFormulaIdMap;
}, deleteFormulaIdMap: Map<string, string | IFormulaIdMap>, r: number, c: number, cell: Nullable<ICellData>): void;
export declare function clearArrayFormulaCellDataByCell(arrayFormulaRangeMatrix: ObjectMatrix<IRange>, arrayFormulaCellDataMatrix: ObjectMatrix<Nullable<ICellData>>, r: number, c: number): true | undefined;
