import { Observable } from 'rxjs';
import { Disposable } from '../../shared/lifecycle';
export interface IContextService {
    readonly contextChanged$: Observable<{
        [key: string]: boolean;
    }>;
    getContextValue(key: string): boolean;
    setContextValue(key: string, value: boolean): void;
    subscribeContextValue$(key: string): Observable<boolean>;
}
export declare const IContextService: import('@wendellhu/redi').IdentifierDecorator<IContextService>;
export declare class ContextService extends Disposable implements IContextService {
    private _contextChanged$;
    readonly contextChanged$: Observable<{
        [key: string]: boolean;
    }>;
    private readonly _contextMap;
    dispose(): void;
    getContextValue(key: string): boolean;
    setContextValue(key: string, value: boolean): void;
    subscribeContextValue$(key: string): Observable<boolean>;
}
