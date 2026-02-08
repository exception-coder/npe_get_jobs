import { IAccessor, IMutation } from '@univerjs/core';
export interface ISetFrozenMutationParams {
    unitId: string;
    subUnitId: string;
    startRow: number;
    startColumn: number;
    /**
     * Number of frozen rows.
     * if row freeze start at 7, end at 10, then ySplit is 3
     */
    ySplit: number;
    /**
     * Number of frozen columns.
     * if column freeze start at 7, end at 10, then xSplit is 3
     */
    xSplit: number;
    resetScroll?: boolean;
}
export declare const SetFrozenMutationFactory: (accessor: IAccessor, params: ISetFrozenMutationParams) => ISetFrozenMutationParams;
export declare const SetFrozenMutation: IMutation<ISetFrozenMutationParams>;
