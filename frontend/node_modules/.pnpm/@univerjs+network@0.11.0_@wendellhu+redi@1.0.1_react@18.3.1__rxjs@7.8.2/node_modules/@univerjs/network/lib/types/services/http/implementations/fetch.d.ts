import { HTTPRequest } from '../request';
import { HTTPEvent } from '../response';
import { IHTTPImplementation } from './implementation';
import { ILogService } from '@univerjs/core';
import { Observable } from 'rxjs';
/**
 * An HTTP implementation using Fetch API. This implementation can both run in browser and Node.js.
 *
 * It does not support streaming response yet (May 12, 2024).
 */
export declare class FetchHTTPImplementation implements IHTTPImplementation {
    private readonly _logService;
    constructor(_logService: ILogService);
    send(request: HTTPRequest): Observable<HTTPEvent<any>>;
    private _send;
    private _readBody;
}
