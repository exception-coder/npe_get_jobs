import { IRange, IRangeCellData } from '@univerjs/core';
export interface ISelectionConfig {
    selection: IRange;
    cell?: IRangeCellData;
}
export interface ISelectionsConfig {
    [subUnitId: string]: ISelectionConfig[];
}
export interface IDiscreteRange {
    rows: number[];
    cols: number[];
}
