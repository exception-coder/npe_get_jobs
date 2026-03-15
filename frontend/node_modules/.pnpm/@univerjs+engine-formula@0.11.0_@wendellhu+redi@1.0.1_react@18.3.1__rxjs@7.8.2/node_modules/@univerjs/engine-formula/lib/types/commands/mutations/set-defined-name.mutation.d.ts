import { IAccessor, IMutation } from '@univerjs/core';
export interface ISetDefinedNameMutationSearchParam {
    unitId: string;
    id: string;
}
export interface ISetDefinedNameMutationParam extends ISetDefinedNameMutationSearchParam {
    name: string;
    formulaOrRefString: string;
    comment?: string;
    localSheetId?: string;
    hidden?: boolean;
}
/**
 * Generate undo mutation of a `SetDefinedNameMutation`
 * @param accessor
 * @param params
 * @returns
 */
export declare const SetDefinedNameMutationFactory: (accessor: IAccessor, params: ISetDefinedNameMutationParam) => ISetDefinedNameMutationParam;
/**
 * In the formula engine, the mutation is solely responsible for communication between the worker and the main thread.
 * It requires setting local to true during execution.
 */
export declare const SetDefinedNameMutation: IMutation<ISetDefinedNameMutationParam>;
export declare const RemoveDefinedNameMutation: IMutation<ISetDefinedNameMutationParam>;
