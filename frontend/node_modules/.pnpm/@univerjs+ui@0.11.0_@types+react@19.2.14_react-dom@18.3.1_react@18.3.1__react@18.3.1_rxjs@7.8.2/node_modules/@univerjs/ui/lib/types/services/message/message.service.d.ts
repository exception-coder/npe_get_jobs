import { IDisposable } from '@univerjs/core';
import { IMessageProps } from '@univerjs/design';
export declare const IMessageService: import('@wendellhu/redi').IdentifierDecorator<IMessageService>;
export interface IMessageService {
    show(options: IMessageProps): IDisposable;
    remove(id: string): void;
    removeAll(): void;
}
