import { IMutation } from '@univerjs/core';
/**
 *
 * Register function in main thread, then send function to worker thread.
 *
 * In the formula engine, the mutation is solely responsible for communication between the worker and the main thread.
 * It requires setting local to true during execution.
 */
export interface IRegisterFunctionMutationParam {
    /**
     * function string, function name
     */
    functions: [[string, string]];
}
export declare const RegisterFunctionMutation: IMutation<IRegisterFunctionMutationParam>;
