import { IRange } from '@univerjs/core';
import { IArrayFormulaRangeType, IArrayFormulaUnitCellType, IFormulaData } from '@univerjs/engine-formula';
export interface IRefRangeWithPosition {
    row: number;
    column: number;
    range: IRange;
}
export declare function checkFormulaDataNull(formulaData: IFormulaData, unitId: string, sheetId: string): boolean;
export declare function removeFormulaData(formulaData: IFormulaData | IArrayFormulaRangeType | IArrayFormulaUnitCellType, unitId: string, sheetId?: string): {
    [unitId]: {
        [sheetId]: null;
    };
} | {
    [unitId]: null;
} | undefined;
