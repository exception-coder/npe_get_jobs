import { IAccessor, IMutation } from '@univerjs/core';
import { IInsertSheetMutationParams, IRemoveSheetMutationParams } from '../../basics/interfaces/mutation-interface';
/**
 * Generate undo mutation of a `RemoveSheetMutation`
 *
 * @param {IAccessor} accessor - injector accessor
 * @param {IRemoveSheetMutationParams} params - do mutation params
 * @returns {IInsertSheetMutationParams} undo mutation params
 */
export declare const RemoveSheetUndoMutationFactory: (accessor: IAccessor, params: IRemoveSheetMutationParams) => IInsertSheetMutationParams;
export declare const RemoveSheetMutation: IMutation<IRemoveSheetMutationParams, boolean>;
