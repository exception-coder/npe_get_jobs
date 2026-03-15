import { IAccessor, IMutationInfo, IObjectMatrixPrimitiveType, IRange, Nullable, Dimension, ObjectMatrix } from '@univerjs/core';
import { IDeleteRangeMutationParams, IInsertRangeMutationParams } from '../../basics/interfaces/mutation-interface';
/**
 * Generate undo mutation of a `InsertRangeMutation`
 *
 * @param {IAccessor} accessor - injector accessor
 * @param {IInsertRangeMutationParams} params - do mutation params
 * @returns {IDeleteRangeMutationParams} undo mutation params
 */
export declare const InsertRangeUndoMutationFactory: (accessor: IAccessor, params: IInsertRangeMutationParams) => IDeleteRangeMutationParams;
/**
 * InsertRange is not a mutation but combination of `SetRangeValuesMutation` and `MoveRangeMutation`.
 * @param accessor
 * @param params
 * @returns
 */
export declare function getInsertRangeMutations(accessor: IAccessor, params: IInsertRangeMutationParams): {
    redo: IMutationInfo<object>[];
    undo: IMutationInfo<object>[];
};
export declare function getRemoveRangeMutations(accessor: IAccessor, params: IDeleteRangeMutationParams): {
    redo: IMutationInfo<object>[];
    undo: IMutationInfo<object>[];
};
export declare function handleInsertRangeMutation<T>(cellMatrix: ObjectMatrix<T>, range: IRange, lastEndRow: number, lastEndColumn: number, shiftDimension: Dimension, cellValue?: IObjectMatrixPrimitiveType<T>): void;
/**
 * Generate undo mutation of a `DeleteRangeMutation`
 *
 * @param {IAccessor} accessor - injector accessor
 * @param {IDeleteRangeMutationParams} params - do mutation params
 * @returns {IInsertRangeMutationParams} undo mutation params
 */
export declare const DeleteRangeUndoMutationFactory: (accessor: IAccessor, params: IDeleteRangeMutationParams) => Nullable<IInsertRangeMutationParams>;
export declare function handleDeleteRangeMutation<T>(cellMatrix: ObjectMatrix<T>, range: IRange, lastEndRow: number, lastEndColumn: number, shiftDimension: Dimension): void;
