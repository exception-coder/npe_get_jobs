import { Observable } from 'rxjs';
import { Disposable, Injector } from '@univerjs/core';
import { IHTTPImplementation } from '../implementations/implementation';
import { HTTPRequest } from '../request';
import { HTTPEvent, HTTPResponse, HTTPResponseError } from '../response';
/**
 * A mocked HTTP implementation service for testing purposes. Besides methods in the interface, it
 * provides several public methods to control the process of http request.
 */
export declare class MockHTTPImplementation extends Disposable implements IHTTPImplementation {
    private readonly _newRequest$;
    readonly newRequest$: Observable<HTTPRequest>;
    private readonly _handlers;
    dispose(): void;
    send(request: HTTPRequest): Observable<HTTPEvent<any>>;
    /**
     * Get a handler to interact with the request.
     * @param uid the request's unique identifier
     * @returns the handler for the request
     */
    getHandler(uid: number): IMockHTTPHandler;
}
export interface IMockHTTPHandler {
    /**
     * Emit a response event to the observer.
     */
    emitResponse<T>(response: HTTPResponse<T>): void;
    /**
     * Emit an error event to the observer.
     */
    emitError(error: HTTPResponseError): void;
}
export declare function createHTTPTestBed(): {
    injector: Injector;
};
