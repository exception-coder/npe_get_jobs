import { IAccessor, ICommand, IMutationInfo, IRange } from '@univerjs/core';
export interface IMoveRangeCommandParams {
    toRange: IRange;
    fromRange: IRange;
}
export declare const MoveRangeCommandId = "sheet.command.move-range";
export declare const MoveRangeCommand: ICommand;
export interface IRangeUnit {
    unitId: string;
    subUnitId: string;
    range: IRange;
}
export declare function getMoveRangeUndoRedoMutations(accessor: IAccessor, from: IRangeUnit, to: IRangeUnit, ignoreMerge?: boolean): {
    redos: IMutationInfo<object>[];
    undos: IMutationInfo<object>[];
} | null;
