import { CollaborationUIEventService, ILocalCacheService } from '@univerjs-pro/collaboration-client';
import { Disposable, LocaleService } from '@univerjs/core';
import { IBeforeCloseService, IMessageService, INotificationService } from '@univerjs/ui';
/**
 * This controller is responsible for the general UI of the collaboration client.
 */
export declare class CollaborationClientUIController extends Disposable {
    private readonly _beforeCloseService;
    protected readonly _localCacheService: ILocalCacheService;
    private readonly _collaborationUIEventService;
    protected readonly _messageService: IMessageService;
    private readonly _notificationService;
    protected readonly _localeService: LocaleService;
    constructor(_beforeCloseService: IBeforeCloseService, _localCacheService: ILocalCacheService, _collaborationUIEventService: CollaborationUIEventService, _messageService: IMessageService, _notificationService: INotificationService, _localeService: LocaleService);
    private _setupBeforeClosingHandler;
    private _initEvent;
}
