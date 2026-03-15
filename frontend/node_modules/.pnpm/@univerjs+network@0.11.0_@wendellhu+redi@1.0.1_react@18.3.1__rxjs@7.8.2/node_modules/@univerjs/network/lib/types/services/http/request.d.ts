import { HTTPHeaders } from './headers';
import { HTTPResponseType } from './http';
export type HTTPRequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
export declare function __TEST_ONLY_RESET_REQUEST_UID_DO_NOT_USE_IN_PRODUCTION(): void;
export declare class HTTPRequest {
    readonly method: HTTPRequestMethod;
    readonly url: string;
    readonly requestParams?: IHTTPRequestParams | undefined;
    get headers(): HTTPHeaders;
    get withCredentials(): boolean;
    get responseType(): HTTPResponseType;
    readonly uid: number;
    constructor(method: HTTPRequestMethod, url: string, requestParams?: IHTTPRequestParams | undefined);
    getUrlWithParams(): string;
    getBody(): string | FormData | null;
    getHeadersInit(): HeadersInit;
}
