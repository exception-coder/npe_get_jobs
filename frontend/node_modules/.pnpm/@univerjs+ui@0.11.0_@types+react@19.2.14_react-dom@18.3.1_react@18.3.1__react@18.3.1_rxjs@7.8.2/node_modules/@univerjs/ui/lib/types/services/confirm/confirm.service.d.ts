import { IDisposable } from '@univerjs/core';
import { IConfirmPartMethodOptions } from '../../views/components/confirm-part/interface';
import { Subject } from 'rxjs';
export declare const IConfirmService: import('@wendellhu/redi').IdentifierDecorator<IConfirmService>;
export interface IConfirmService {
    readonly confirmOptions$: Subject<IConfirmPartMethodOptions[]>;
    open(params: IConfirmPartMethodOptions): IDisposable;
    confirm(params: IConfirmPartMethodOptions): Promise<boolean>;
    close(id: string): void;
}
/**
 * This is a mock service for testing purposes.
 */
export declare class TestConfirmService implements IConfirmService, IDisposable {
    readonly confirmOptions$: Subject<IConfirmPartMethodOptions[]>;
    dispose(): void;
    open(_params: IConfirmPartMethodOptions): IDisposable;
    confirm(_params: IConfirmPartMethodOptions): Promise<boolean>;
    close(_id: string): IDisposable;
}
