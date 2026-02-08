import { IAccessor, IMutation, Worksheet } from '@univerjs/core';
import { IInsertColMutationParams, IInsertRowMutationParams, IRemoveColMutationParams, IRemoveRowsMutationParams } from '../../basics/interfaces/mutation-interface';
export declare const RemoveRowsUndoMutationFactory: (params: IRemoveRowsMutationParams, worksheet: Worksheet) => IInsertRowMutationParams;
export declare const RemoveRowMutation: IMutation<IRemoveRowsMutationParams>;
export declare const RemoveColMutationFactory: (accessor: IAccessor, params: IRemoveColMutationParams) => IInsertColMutationParams;
export declare const RemoveColMutation: IMutation<IRemoveColMutationParams>;
