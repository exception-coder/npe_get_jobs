import { Disposable, ErrorService } from '@univerjs/core';
import { IMessageService } from '../../services/message/message.service';
export declare class ErrorController extends Disposable {
    private readonly _errorService;
    private readonly _messageService;
    constructor(_errorService: ErrorService, _messageService: IMessageService);
}
