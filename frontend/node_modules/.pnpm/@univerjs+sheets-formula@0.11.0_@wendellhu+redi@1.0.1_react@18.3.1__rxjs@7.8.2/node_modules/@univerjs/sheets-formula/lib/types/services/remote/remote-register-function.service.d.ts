import { IFunctionService } from '@univerjs/engine-formula';
export interface IRemoteRegisterFunctionService {
    registerFunctions(serializedFuncs: Array<[string, string]>): Promise<void>;
    registerAsyncFunctions(serializedFuncs: Array<[string, string]>): Promise<void>;
    unregisterFunctions(names: string[]): Promise<void>;
}
export declare const RemoteRegisterFunctionServiceName = "sheets-formula.remote-register-function.service";
export declare const IRemoteRegisterFunctionService: import('@wendellhu/redi').IdentifierDecorator<IRemoteRegisterFunctionService>;
/**
 * This class should resident in the remote process.
 */
export declare class RemoteRegisterFunctionService implements IRemoteRegisterFunctionService {
    private readonly _functionService;
    constructor(_functionService: IFunctionService);
    registerFunctions(serializedFuncs: Array<[string, string]>): Promise<void>;
    registerAsyncFunctions(serializedFuncs: Array<[string, string]>): Promise<void>;
    unregisterFunctions(names: string[]): Promise<void>;
}
