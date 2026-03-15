import { ICellData, ICommand, IObjectMatrixPrimitiveType, IRange } from '@univerjs/core';
import { ISheetCommandSharedParams } from '../utils/interface';
export interface ISetRangeValuesCommandParams extends Partial<ISheetCommandSharedParams> {
    range?: IRange;
    /**
     * 1. ICellData: Normal cell data
     * 2. ICellData[][]: The two-dimensional array indicates the data of multiple cells
     * 3. IObjectMatrixPrimitiveType<ICellData>: Bring the row/column information MATRIX, indicating the data of multiple cells
     */
    value: ICellData | ICellData[][] | IObjectMatrixPrimitiveType<ICellData>;
    redoUndoId?: string;
}
/**
 * The command to set values for ranges.
 */
export declare const SetRangeValuesCommand: ICommand;
