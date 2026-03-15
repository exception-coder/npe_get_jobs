import { IAccessor, IMutation } from '@univerjs/core';
import { IInsertSheetMutationParams, IRemoveSheetMutationParams } from '../../basics/interfaces/mutation-interface';
/**
 * Generate undo mutation of a `InsertSheetMutation`
 *
 * @param {IAccessor} _accessor - injector accessor
 * @param {IInsertSheetMutationParams} params - do mutation params
 * @returns {IRemoveSheetMutationParams} undo mutation params
 */
export declare const InsertSheetUndoMutationFactory: (_accessor: IAccessor, params: IInsertSheetMutationParams) => IRemoveSheetMutationParams;
export declare const InsertSheetMutation: IMutation<IInsertSheetMutationParams, boolean>;
