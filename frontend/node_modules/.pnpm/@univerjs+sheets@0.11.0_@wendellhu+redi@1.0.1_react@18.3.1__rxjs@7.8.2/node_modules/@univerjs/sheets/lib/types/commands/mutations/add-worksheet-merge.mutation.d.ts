import { IAccessor, IMutation } from '@univerjs/core';
import { IAddWorksheetMergeMutationParams, IRemoveWorksheetMergeMutationParams } from '../../basics/interfaces/mutation-interface';
export declare const AddMergeUndoMutationFactory: (accessor: IAccessor, params: IAddWorksheetMergeMutationParams) => IRemoveWorksheetMergeMutationParams;
export declare const AddWorksheetMergeMutation: IMutation<IAddWorksheetMergeMutationParams>;
