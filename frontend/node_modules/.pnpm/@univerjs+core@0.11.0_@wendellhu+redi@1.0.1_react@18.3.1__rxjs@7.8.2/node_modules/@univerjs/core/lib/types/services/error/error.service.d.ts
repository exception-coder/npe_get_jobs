import { Disposable } from '../../shared/lifecycle';
export interface IError {
    errorKey: string;
}
export declare class ErrorService extends Disposable {
    private readonly _error$;
    error$: import('rxjs').Observable<IError>;
    dispose(): void;
    emit(key: string): void;
}
