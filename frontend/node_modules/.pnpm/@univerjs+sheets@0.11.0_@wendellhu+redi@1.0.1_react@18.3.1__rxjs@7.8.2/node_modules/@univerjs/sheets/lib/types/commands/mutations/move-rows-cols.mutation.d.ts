import { IAccessor, IMutation, IRange } from '@univerjs/core';
export interface IMoveRowsMutationParams {
    unitId: string;
    subUnitId: string;
    /**
     * The rows to be moved.
     */
    sourceRange: IRange;
    /**
     * The destination range to move the source rows to. Note that the range is before the movement has occurred.
     */
    targetRange: IRange;
}
/**
 * Get an undo mutation for the move rows mutation.
 * @param accessor
 * @param params
 */
export declare function MoveRowsMutationUndoFactory(_accessor: IAccessor | null, params: IMoveRowsMutationParams): IMoveRowsMutationParams;
export declare const MoveRowsMutation: IMutation<IMoveRowsMutationParams>;
export interface IMoveColumnsMutationParams {
    unitId: string;
    subUnitId: string;
    /**
     * The cols to be moved.
     */
    sourceRange: IRange;
    /**
     * The destination range to move the source cols to. Note that the range is before the movement has occurred.
     */
    targetRange: IRange;
}
export declare function MoveColsMutationUndoFactory(_accessor: IAccessor | null, params: IMoveColumnsMutationParams): IMoveColumnsMutationParams;
export declare const MoveColsMutation: IMutation<IMoveColumnsMutationParams>;
