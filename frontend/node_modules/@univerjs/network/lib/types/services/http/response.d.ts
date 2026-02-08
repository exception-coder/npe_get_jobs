import { HTTPHeaders } from './headers';
import { HTTPRequest } from './request';
export type HTTPEvent<T> = HTTPResponse<T> | HTTPProgress;
export declare enum HTTPEventType {
    DownloadProgress = 0,
    Response = 1
}
interface IHTTPEvent {
    type: HTTPEventType;
}
export type HTTPResponseBody = string | ArrayBuffer | Blob | object | null;
/**
 * Wraps success response info.
 */
export declare class HTTPResponse<T> implements IHTTPEvent {
    readonly type = HTTPEventType.Response;
    readonly body: T;
    readonly headers: HTTPHeaders;
    readonly status: number;
    readonly statusText: string;
    constructor({ body, headers, status, statusText, }: {
        body: T;
        headers: HTTPHeaders;
        status: number;
        statusText: string;
    });
}
/**
 * Progress event for HTTP request. Usually used for reporting download/upload progress or SSE streaming.
 */
export declare class HTTPProgress implements IHTTPEvent {
    /**
     * Total number of bytes to download. Depending on the request or
     * response, this may not be computable and thus may not be present.
     */
    readonly total: number | undefined;
    /**
     * Number of bytes downloaded.
     */
    readonly loaded: number;
    /**
     * The partial response body as downloaded so far.
     *
     * Only present if the responseType was `text`.
     */
    readonly partialText?: string | undefined;
    readonly type = HTTPEventType.DownloadProgress;
    constructor(
    /**
     * Total number of bytes to download. Depending on the request or
     * response, this may not be computable and thus may not be present.
     */
    total: number | undefined, 
    /**
     * Number of bytes downloaded.
     */
    loaded: number, 
    /**
     * The partial response body as downloaded so far.
     *
     * Only present if the responseType was `text`.
     */
    partialText?: string | undefined);
}
export declare class ResponseHeader {
    readonly headers: HTTPHeaders;
    readonly status: number;
    readonly statusText: string;
    constructor(headers: HTTPHeaders, status: number, statusText: string);
}
export declare class HTTPResponseError {
    readonly request: HTTPRequest;
    readonly headers?: HTTPHeaders;
    readonly status?: number;
    readonly statusText?: string;
    readonly error: any;
    constructor({ request, headers, status, statusText, error, }: {
        request: HTTPRequest;
        headers?: HTTPHeaders;
        status?: number;
        statusText?: string;
        error: any;
    });
}
export {};
