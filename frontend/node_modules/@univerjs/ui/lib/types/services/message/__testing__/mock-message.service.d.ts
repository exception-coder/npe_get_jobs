import { IDisposable } from '@univerjs/core';
import { IMessageProps } from '@univerjs/design';
import { IMessageService } from '../message.service';
/**
 * This is a mocked message service for testing purposes.
 *
 * @ignore
 */
export declare class MockMessageService implements IMessageService {
    show(_options: IMessageProps): IDisposable;
    remove(_id: string): void;
    removeAll(): void;
    setContainer(): void;
    getContainer(): HTMLElement | undefined;
}
