import { IAccessor, ICommandInfo, IMutationInfo, IRange, Nullable, RANGE_TYPE } from '@univerjs/core';
import { IInsertColMutationParams, IInsertRowMutationParams, IRemoveColMutationParams, IRemoveRowsMutationParams, IRemoveSheetMutationParams } from '../../basics';
import { IInsertColCommandParams, IInsertRowCommandParams } from '../../commands/commands/insert-row-col.command';
import { IRemoveRowColCommandInterceptParams } from '../../commands/commands/remove-row-col.command';
import { IMoveRangeMutationParams } from '../../commands/mutations/move-range.mutation';
import { IMoveColumnsMutationParams, IMoveRowsMutationParams } from '../../commands/mutations/move-rows-cols.mutation';
import { ISheetCommandSharedParams } from '../../commands/utils/interface';
import { EffectRefRangeParams, IDeleteRangeMoveLeftCommand, IDeleteRangeMoveUpCommand, IInsertColCommand, IInsertRangeMoveDownCommand, IInsertRangeMoveRightCommand, IInsertRowCommand, IMoveColsCommand, IMoveRangeCommand, IMoveRowsCommand, IOperator, IRemoveRowColCommand, IReorderRangeCommand } from './type';
import { SheetsSelectionsService } from '../selections/selection.service';
export declare const handleRangeTypeInput: (range: IRange) => {
    rangeType?: RANGE_TYPE;
    startAbsoluteRefType?: import('@univerjs/core').AbsoluteRefType;
    endAbsoluteRefType?: import('@univerjs/core').AbsoluteRefType;
    startRow: number;
    endRow: number;
    unitId?: string;
    sheetId?: string;
    startColumn: number;
    endColumn: number;
};
export declare const handleRangeTypeOutput: (range: IRange, maxRow: number, maxCol: number) => {
    rangeType?: RANGE_TYPE;
    startAbsoluteRefType?: import('@univerjs/core').AbsoluteRefType;
    endAbsoluteRefType?: import('@univerjs/core').AbsoluteRefType;
    startRow: number;
    endRow: number;
    unitId?: string;
    sheetId?: string;
    startColumn: number;
    endColumn: number;
};
export declare const rotateRange: (range: IRange) => IRange;
interface ILine {
    start: number;
    end: number;
}
/**
 * see docs/tldr/ref-range/move-rows-cols.tldr
 */
export declare const handleBaseMoveRowsCols: (fromRange: ILine, toRange: ILine, effectRange: ILine) => {
    length: number;
    step: number;
};
export declare const handleMoveRows: (params: IMoveRowsCommand, targetRange: IRange) => IOperator[];
export declare const handleMoveRowsCommon: (params: IMoveRowsCommand, targetRange: IRange) => IRange[];
export declare const handleReorderRangeCommon: (param: IReorderRangeCommand, targetRange: IRange) => IRange[];
export declare const handleMoveCols: (params: IMoveColsCommand, targetRange: IRange) => IOperator[];
export declare const handleMoveColsCommon: (params: IMoveColsCommand, targetRange: IRange) => IRange[];
export declare const handleMoveRange: (param: IMoveRangeCommand, targetRange: IRange) => IOperator[];
export declare const handleMoveRangeCommon: (param: IMoveRangeCommand, targetRange: IRange) => IRange[];
export declare const handleBaseRemoveRange: (_removeRange: IRange, _targetRange: IRange) => {
    step: number;
    length: number;
} | null;
export declare const handleIRemoveCol: (param: IRemoveRowColCommand, targetRange: IRange) => IOperator[];
export declare const handleIRemoveRow: (param: IRemoveRowColCommand, targetRange: IRange, rangeFilteredRows?: number[]) => IOperator[];
export declare const handleReorderRange: (param: IReorderRangeCommand, targetRange: IRange) => IOperator[];
/**
 * see docs/tldr/ref-range/insert-rows-cols.tldr
 * calculate insert steps(move step) or expand size(length) to ref range.
 *
 * @param _insertRange inserted range
 * @param _targetRange ref range
 * @returns {step: number, length: number} step means inserted count of row/col before ref range, that would cause range move few cells(steps) afterward.
 * length means expand size of row/col in ref range, that would make ref range larger than before.
 */
export declare const handleBaseInsertRange: (_insertRange: IRange, _targetRange: IRange) => {
    step: number;
    length: number;
};
export declare const handleInsertRow: (param: IInsertRowCommand, targetRange: IRange) => IOperator[];
export declare const handleInsertCol: (param: IInsertColCommand, targetRange: IRange) => IOperator[];
export declare const handleInsertRangeMoveDown: (param: IInsertRangeMoveDownCommand, targetRange: IRange) => IOperator[];
export declare const handleInsertRangeMoveDownCommon: (param: IInsertRangeMoveDownCommand, targetRange: IRange) => IRange[];
export declare const handleInsertRangeMoveRight: (param: IInsertRangeMoveRightCommand, targetRange: IRange) => IOperator[];
export declare const handleInsertRangeMoveRightCommon: (param: IInsertRangeMoveRightCommand, targetRange: IRange) => IRange[];
export declare const handleDeleteRangeMoveLeft: (param: IDeleteRangeMoveLeftCommand, targetRange: IRange) => IOperator[];
export declare const handleDeleteRangeMoveLeftCommon: (param: IDeleteRangeMoveLeftCommand, targetRange: IRange) => IRange[];
export declare const handleDeleteRangeMoveUp: (param: IDeleteRangeMoveUpCommand, targetRange: IRange) => IOperator[];
export declare const handleDeleteRangeMoveUpCommon: (param: IDeleteRangeMoveUpCommand, targetRange: IRange) => IRange[];
export declare const handleRemoveRowCommon: (param: IRemoveRowColCommandInterceptParams, targetRange: IRange) => IRange[];
export declare const handleInsertRowCommon: (info: ICommandInfo<IInsertRowCommandParams>, targetRange: IRange) => IRange[];
export declare const handleInsertColCommon: (info: ICommandInfo<IInsertColCommandParams>, targetRange: IRange) => IRange[];
export declare const runRefRangeMutations: (operators: IOperator[], range: IRange) => IRange | null;
export declare const handleDefaultRangeChangeWithEffectRefCommands: (range: IRange, commandInfo: ICommandInfo) => IRange | null;
export declare const handleDefaultRangeChangeWithEffectRefCommandsSkipNoInterests: (range: IRange, commandInfo: ICommandInfo, deps: {
    selectionManagerService: SheetsSelectionsService;
}) => IRange | null;
export type MutationsAffectRange = ISheetCommandSharedParams | IRemoveSheetMutationParams | IMoveRowsMutationParams | IMoveColumnsMutationParams | IRemoveRowsMutationParams | IRemoveColMutationParams | IInsertColMutationParams | IInsertRowMutationParams | IMoveRangeMutationParams;
export declare const handleCommonDefaultRangeChangeWithEffectRefCommands: (range: IRange, commandInfo: ICommandInfo) => IRange[];
export declare const handleCommonRangeChangeWithEffectRefCommandsSkipNoInterests: (range: IRange, commandInfo: ICommandInfo, deps: {
    selectionManagerService: SheetsSelectionsService;
}) => IRange | IRange[];
/**
 * This function should work as a pure function.
 *
 * @pure
 * @param range
 * @param mutation
 * @returns the adjusted range
 */
export declare function adjustRangeOnMutation(range: Readonly<IRange>, mutation: IMutationInfo<MutationsAffectRange>): Nullable<IRange>;
export declare function getEffectedRangesOnCommand(command: EffectRefRangeParams, deps: {
    selectionManagerService: SheetsSelectionsService;
}): IRange[];
export declare function getEffectedRangesOnMutation(mutation: IMutationInfo<MutationsAffectRange>): IRange[] | undefined;
export declare function getSeparateEffectedRangesOnCommand(accessor: IAccessor, command: EffectRefRangeParams): {
    unitId: string;
    subUnitId: string;
    ranges: IRange[];
};
export {};
