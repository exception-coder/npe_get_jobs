import { HTTPEvent, HTTPRequestMethod, HTTPResponse, IPostRequestParams, IRequestParams, HTTPService } from '@univerjs/network';
import { Observable } from 'rxjs';
import { Injector } from '@univerjs/core';
import { FBase } from '@univerjs/core/facade';
/**
 * This Facade provides a set of methods to make HTTP requests. You should not
 * create an instance of this class directly, instead, use `getNetwork` of
 * {@link FUniver} instead.
 *
 * @hideconstructor
 */
export declare class FNetwork extends FBase {
    protected readonly _injector: Injector;
    protected readonly _httpService: HTTPService;
    constructor(_injector: Injector, _httpService: HTTPService);
    /**
     * Send a GET request to the server.
     * @param {string} url - The requested URL.
     * @param {IRequestParams} [params] - Query parameters.
     * @returns {Promise<HTTPResponse>} Network response.
     */
    get<T>(url: string, params?: IRequestParams): Promise<HTTPResponse<T>>;
    /**
     * Send a POST request to the server.
     * @param {string} url - The requested URL.
     * @param {IPostRequestParams} [params] - Query parameters.
     * @returns {Promise<HTTPResponse>} Network response.
     */
    post<T>(url: string, params?: IPostRequestParams): Promise<HTTPResponse<T>>;
    /**
     * Send a PUT request to the server.
     * @param {string} url - The requested URL
     * @param {IPostRequestParams} [params] - Query parameters
     * @returns {Promise<HTTPResponse>} Network response
     */
    put<T>(url: string, params?: IPostRequestParams): Promise<HTTPResponse<T>>;
    /**
     * Send DELETE request to the server.
     * @param {string} url - The requested URL
     * @param {IRequestParams} [params] - Query parameters
     * @returns {Promise<HTTPResponse>} Network response
     */
    delete<T>(url: string, params?: IRequestParams): Promise<HTTPResponse<T>>;
    /**
     * Send PATCH request to the server.
     * @param {string} url - The requested URL
     * @param {IPostRequestParams} [params] - Query parameters
     * @returns {Promise<HTTPResponse>} Network response
     */
    patch<T>(url: string, params?: IPostRequestParams): Promise<HTTPResponse<T>>;
    /**
     * Request for a stream of server-sent events. Instead of a single response, the server sends a stream of responses,
     * Univer wraps the stream in an [`Observable`](https://rxjs.dev/guide/observable) which you can call `subscribe` on.
     * @param {HTTPRequestMethod} method - HTTP request method
     * @param {string} url - The requested URL
     * @param {IPostRequestParams} [params] - params Query parameters
     * @returns {Observable<HTTPEvent>} An observable that emits the network response.
     */
    getSSE<T>(method: HTTPRequestMethod, url: string, params?: IPostRequestParams): Observable<HTTPEvent<T>>;
}
