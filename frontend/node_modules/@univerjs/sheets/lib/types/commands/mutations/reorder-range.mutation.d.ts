import { IMutation, IRange } from '@univerjs/core';
import { ISheetCommandSharedParams } from '../../commands/utils/interface';
export interface IReorderRangeMutationParams extends ISheetCommandSharedParams {
    range: IRange;
    order: {
        [key: number]: number;
    };
}
export declare const ReorderRangeUndoMutationFactory: (params: IReorderRangeMutationParams) => IReorderRangeMutationParams;
export declare const ReorderRangeMutation: IMutation<IReorderRangeMutationParams>;
