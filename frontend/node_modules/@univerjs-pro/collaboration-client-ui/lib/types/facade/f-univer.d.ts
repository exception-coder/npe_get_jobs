import { FUniver } from '@univerjs/core/facade';
/**
 * @ignore
 */
export interface IFUniverNodeRuntimeMixin {
    /**
     * Execute a function in a Uniscript on the server.
     * @param scriptNameOrId The name or the ID of the Uniscript to run. Name should end with ".us".
     * @param func The function in the Uniscript to run
     * @param params Parameters to the function
     */
    runOnServer(scriptNameOrId: string, func: string, ...params: any[]): Promise<string>;
}
export declare class FUniverNodeRuntimeMixin extends FUniver implements IFUniverNodeRuntimeMixin {
    runOnServer(scriptNameOrId: string, func: string, ...params: any[]): Promise<string>;
}
declare module '@univerjs/core/facade' {
    interface FUniver extends IFUniverNodeRuntimeMixin {
    }
}
