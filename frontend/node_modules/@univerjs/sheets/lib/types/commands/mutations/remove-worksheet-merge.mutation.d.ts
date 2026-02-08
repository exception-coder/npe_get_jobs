import { IAccessor, IMutation } from '@univerjs/core';
import { IAddWorksheetMergeMutationParams, IRemoveWorksheetMergeMutationParams } from '../../basics/interfaces/mutation-interface';
export declare const RemoveMergeUndoMutationFactory: (accessor: IAccessor, params: IRemoveWorksheetMergeMutationParams) => IAddWorksheetMergeMutationParams;
export declare const RemoveWorksheetMergeMutation: IMutation<IRemoveWorksheetMergeMutationParams>;
