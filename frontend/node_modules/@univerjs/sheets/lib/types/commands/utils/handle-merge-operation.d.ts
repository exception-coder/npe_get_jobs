import { IAccessor, IRange } from '@univerjs/core';
import { IAddMergeCommandParams } from '../commands/add-worksheet-merge.command';
import { ISetSelectionsOperationParams } from '../operations/selection.operation';
export declare const AddMergeRedoSelectionsOperationFactory: (accessor: IAccessor, params: IAddMergeCommandParams, ranges: IRange[]) => {
    id: string;
    params: ISetSelectionsOperationParams;
} | null;
export declare const AddMergeUndoSelectionsOperationFactory: (accessor: IAccessor, params: IAddMergeCommandParams) => {
    id: string;
    params: ISetSelectionsOperationParams;
} | null;
