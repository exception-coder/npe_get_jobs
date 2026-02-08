import { HTTPRequest } from '../request';
import { HTTPEvent } from '../response';
import { IHTTPImplementation } from './implementation';
import { ILogService } from '@univerjs/core';
import { Observable } from 'rxjs';
/**
 * An HTTP implementation using XHR. HTTP service provided by this service could only be async (we do not support sync XHR now).
 */
export declare class XHRHTTPImplementation implements IHTTPImplementation {
    private readonly _logService;
    constructor(_logService: ILogService);
    send(request: HTTPRequest): Observable<HTTPEvent<any>>;
}
