import { IRange, IUnitRange, Nullable } from '@univerjs/core';
import { IFormulaReferenceMoveParam } from './ref-range-formula';
export interface IUnitRangeWithOffset extends IUnitRange {
    refOffsetX: number;
    refOffsetY: number;
    sheetName: string;
}
export declare enum OriginRangeEdgeType {
    UP = 0,
    DOWN = 1,
    LEFT = 2,
    RIGHT = 3,
    ALL = 4
}
export declare function getNewRangeByMoveParam(unitRangeWidthOffset: IUnitRangeWithOffset, formulaReferenceMoveParam: IFormulaReferenceMoveParam, currentFormulaUnitId: string, currentFormulaSheetId: string): string | undefined;
/**
 * Determine the range of the moving selection,
 * and check if it is at the edge of the reference range of the formula.
 * @param originRange
 * @param fromRange
 */
export declare function checkMoveEdge(originRange: IRange, fromRange: IRange): Nullable<OriginRangeEdgeType>;
