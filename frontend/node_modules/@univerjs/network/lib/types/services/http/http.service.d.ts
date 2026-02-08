import { IDisposable, Disposable } from '@univerjs/core';
import { Observable } from 'rxjs';
import { HTTPResponseType } from './http';
import { HTTPInterceptorFn } from './interceptor';
import { HTTPRequestMethod } from './request';
import { HTTPEvent, HTTPResponse } from './response';
import { IHTTPImplementation } from './implementations/implementation';
export interface IRequestParams {
    /** Query params. These params would be append to the url before the request is sent. */
    params?: {
        [param: string]: string | number | boolean;
    };
    /** Query headers. */
    headers?: {
        [key: string]: string | number | boolean;
    };
    /** Expected types of the response data. */
    responseType?: HTTPResponseType;
    withCredentials?: boolean;
    /**
     * Should report progress.
     */
    reportProgress?: boolean;
}
export interface IPostRequestParams extends IRequestParams {
    body?: unknown;
}
/**
 * Register an HTTP interceptor. Interceptor could modify requests, responses, headers or errors.
 */
export interface IHTTPInterceptor {
    /** The priority of the interceptor. The higher the value, the earlier the interceptor is called. */
    priority?: number;
    /** The interceptor function. */
    interceptor: HTTPInterceptorFn;
}
/**
 * This service provides http request methods and allows to register http interceptors.
 *
 * You can use interceptors to:
 *
 * 1. modify requests (headers included) before they are sent, or modify responses
 * before they are returned to the caller.
 * 2. threshold, logging, caching, etc.
 * 3. authentication, authorization, etc.
 */
export declare class HTTPService extends Disposable {
    private readonly _http;
    private _interceptors;
    private _pipe;
    constructor(_http: IHTTPImplementation);
    /**
     * Register an HTTP interceptor.
     *
     * @param interceptor the http interceptor
     * @returns a disposable handler to remove the interceptor
     */
    registerHTTPInterceptor(interceptor: IHTTPInterceptor): IDisposable;
    get<T>(url: string, params?: IRequestParams): Promise<HTTPResponse<T>>;
    post<T>(url: string, params?: IPostRequestParams): Promise<HTTPResponse<T>>;
    put<T>(url: string, params?: IPostRequestParams): Promise<HTTPResponse<T>>;
    delete<T>(url: string, params?: IRequestParams): Promise<HTTPResponse<T>>;
    patch<T>(url: string, params?: IPostRequestParams): Promise<HTTPResponse<T>>;
    /**
     * The HTTP request implementations. Normally you should use the `get`, `post`, `put`, `delete`,
     * `patch` methods instead.
     * @param method HTTP request method, e.g. GET, POST, PUT, DELETE, etc.
     * @param url The URL to send the request to.
     * @param options Optional parameters for the request.
     * @returns A promise that resolves to the HTTP response.
     */
    request<T>(method: HTTPRequestMethod, url: string, options?: IRequestParams): Promise<HTTPResponse<T>>;
    /**
     * Send an HTTP request. It returns an observable that emits HTTP events. For example, it can be used to
     * send Server-Sent Events (SSE) requests.
     * @deprecated Please use `stream` method instead.
     * @param method HTTP request method, e.g. GET, POST, PUT, DELETE, etc.
     * @param url The URL to send the request to.
     * @param _params Optional parameters for the request.
     * @returns An observable of the HTTP event.
     */
    stream<T>(method: HTTPRequestMethod, url: string, _params?: IRequestParams): Observable<HTTPEvent<T>>;
    /**
     * Send a Server-Sent Events (SSE) request. It returns an observable that emits HTTP events. It is the observable
     * pair of the `request` method.
     * @deprecated Please use `stream` method instead.
     * @param method HTTP request method, e.g. GET, POST, PUT, DELETE, etc.
     * @param url The URL to send the request to.
     * @param _params Optional parameters for the request.
     * @returns An observable of the HTTP event.
     */
    getSSE<T>(method: HTTPRequestMethod, url: string, _params?: IPostRequestParams): Observable<HTTPEvent<T>>;
    private _runInterceptorsAndImplementation;
}
