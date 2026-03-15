import { Nullable, Disposable } from '@univerjs/core';
import { Observable } from 'rxjs';
export type SocketBodyType = string | ArrayBufferLike | Blob | ArrayBufferView;
/**
 * This service is responsible for establishing bidi-directional connection to a remote server.
 */
export declare const ISocketService: import('@wendellhu/redi').IdentifierDecorator<ISocketService>;
export interface ISocketService {
    createSocket(url: string): Nullable<ISocket>;
}
/**
 * An interface that represents a socket connection.
 */
export interface ISocket {
    URL: string;
    close(code?: number, reason?: string): void;
    /**
     * Send a message to the remote server.
     */
    send(data: SocketBodyType): void;
    close$: Observable<Event>;
    error$: Observable<Event>;
    message$: Observable<MessageEvent>;
    open$: Observable<Event>;
}
/**
 * This service create a WebSocket connection to a remote server.
 */
export declare class WebSocketService extends Disposable implements ISocketService {
    createSocket(URL: string): Nullable<ISocket>;
}
