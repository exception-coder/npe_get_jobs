import { IAccessor, IMutation } from '@univerjs/core';
import { IInsertColMutationParams, IInsertRowMutationParams, IRemoveColMutationParams, IRemoveRowsMutationParams } from '../../basics/interfaces/mutation-interface';
export declare const InsertRowMutationUndoFactory: (accessor: IAccessor, params: IInsertRowMutationParams) => IRemoveRowsMutationParams;
export declare const InsertRowMutation: IMutation<IInsertRowMutationParams>;
export declare const InsertColMutationUndoFactory: (accessor: IAccessor, params: IInsertColMutationParams) => IRemoveColMutationParams;
export declare const InsertColMutation: IMutation<IInsertColMutationParams>;
