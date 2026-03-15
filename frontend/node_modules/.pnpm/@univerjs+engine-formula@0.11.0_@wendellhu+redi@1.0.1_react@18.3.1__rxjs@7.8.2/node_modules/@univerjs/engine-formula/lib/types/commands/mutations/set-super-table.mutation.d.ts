import { IMutation } from '@univerjs/core';
import { ISuperTable } from '../../basics/common';
import { ISuperTableOptionParam } from '../../services/super-table.service';
export interface ISetSuperTableMutationSearchParam {
    unitId: string;
    tableName: string;
}
export interface ISetSuperTableMutationParam extends ISetSuperTableMutationSearchParam {
    reference: ISuperTable;
}
/**
 * In the formula engine, the mutation is solely responsible for communication between the worker and the main thread.
 * It requires setting local to true during execution.
 */
export declare const SetSuperTableMutation: IMutation<ISetSuperTableMutationParam>;
export declare const RemoveSuperTableMutation: IMutation<ISetSuperTableMutationSearchParam>;
export declare const SetSuperTableOptionMutation: IMutation<ISuperTableOptionParam>;
