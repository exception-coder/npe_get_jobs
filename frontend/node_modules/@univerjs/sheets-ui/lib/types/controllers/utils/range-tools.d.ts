import { ICellData, IObjectMatrixPrimitiveType, IRange } from '@univerjs/core';
export interface IDiscreteRange {
    rows: number[];
    cols: number[];
}
export declare function discreteRangeToRange(discreteRange: IDiscreteRange): IRange;
export declare function virtualizeDiscreteRanges(ranges: IDiscreteRange[]): {
    ranges: IRange[];
    mapFunc: (row: number, col: number) => {
        row: number;
        col: number;
    };
};
export declare function generateNullCellValueRowCol(range: IDiscreteRange[]): IObjectMatrixPrimitiveType<ICellData>;
