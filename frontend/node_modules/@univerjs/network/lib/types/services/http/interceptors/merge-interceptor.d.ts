import { Observable } from 'rxjs';
import { HTTPRequest } from '../request';
import { HTTPHandlerFn } from '../interceptor';
export declare const MergeInterceptorFactory: <T, C>(config: {
    /**
     *  Filter requests that need to be merged
     */
    isMatch: (requestConfig: HTTPRequest) => boolean;
    /**
     * Pre-process request parameters, the return value will be used as input parameters for subsequent operations
     * The result is used as an index key
     */
    getParamsFromRequest: (requestConfig: HTTPRequest) => T;
    /**
     * The request parameters are merged to initiate the request
     */
    mergeParamsToRequest: (list: T[], requestConfig: HTTPRequest) => HTTPRequest;
}, options?: {
    /**
     * Determine when to initiate a request
     * By default, requests up to 300ms are automatically aggregated
     */
    fetchCheck?: (currentConfig: HTTPRequest) => Promise<boolean>;
    /**
     * The result of the request is dispatched based on the request parameters.
     * By default each request gets the full result of the batch request
     */
    distributeResult?: (result: C, list: T[]) => {
        config: T;
        result: C;
    }[];
}) => (requestConfig: HTTPRequest, next: HTTPHandlerFn) => Observable<import('../response').HTTPEvent<unknown>>;
