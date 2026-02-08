import { Observable } from 'rxjs';
import { HTTPRequest } from '../request';
import { HTTPEvent } from '../response';
/**
 * HTTP service could be implemented differently on platforms.
 */
export interface IHTTPImplementation {
    /**
     * Send a request. The result would be returned in an observable for possible stream response.
     * @param request the request to be sent
     */
    send(request: HTTPRequest): Observable<HTTPEvent<any>>;
}
export declare const IHTTPImplementation: import('@wendellhu/redi').IdentifierDecorator<IHTTPImplementation>;
