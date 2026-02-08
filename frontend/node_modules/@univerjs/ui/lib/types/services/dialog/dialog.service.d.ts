import { IDisposable } from '@univerjs/core';
import { Observable } from 'rxjs';
import { IDialogPartMethodOptions } from '../../views/components/dialog-part/interface';
export declare const IDialogService: import('@wendellhu/redi').IdentifierDecorator<IDialogService>;
export interface IDialogService {
    open(params: IDialogPartMethodOptions): IDisposable;
    close(id: string): void;
    /**
     * @description close all dialogs except the specified ones
     * @param {string[]} [expectIds] The specified dialog ids
     */
    closeAll(expectIds?: string[]): void;
    getDialogs$(): Observable<IDialogPartMethodOptions[]>;
}
