import { IDisposable, Nullable } from '@univerjs/core';
import { IFunctionNames } from '@univerjs/engine-formula';
import { Observable } from 'rxjs';
export interface IStatusBarService {
    state$: Observable<Nullable<IStatusBarServiceStatus>>;
    dispose(): void;
    setState(param: IStatusBarServiceStatus | null): void;
    getState(): Readonly<Nullable<IStatusBarServiceStatus>>;
    getFunctions(): Readonly<IStatusBarFunction[]>;
}
export interface IStatusBarServiceStatus {
    values: Array<{
        func: IFunctionNames;
        value: number;
    }>;
    pattern: Nullable<string>;
}
export interface IStatusBarFunction {
    func: IFunctionNames;
    filter?: (status: IStatusBarServiceStatus) => boolean;
}
export declare class StatusBarService implements IStatusBarService, IDisposable {
    private readonly _functions;
    private readonly _state$;
    readonly state$: Observable<Nullable<IStatusBarServiceStatus>>;
    dispose(): void;
    setState(param: IStatusBarServiceStatus | null): void;
    getState(): Readonly<Nullable<IStatusBarServiceStatus>>;
    getFunctions(): Readonly<IStatusBarFunction[]>;
    addFunctions(functions: IStatusBarFunction[]): void;
}
export declare const IStatusBarService: import('@wendellhu/redi').IdentifierDecorator<StatusBarService>;
