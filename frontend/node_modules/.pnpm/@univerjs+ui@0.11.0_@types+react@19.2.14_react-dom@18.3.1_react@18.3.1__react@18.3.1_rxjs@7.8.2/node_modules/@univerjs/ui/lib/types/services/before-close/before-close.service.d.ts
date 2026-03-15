import { IDisposable } from '@univerjs/core';
import { INotificationService } from '../notification/notification.service';
export interface IBeforeCloseService {
    /**
     * Provide a callback to check if the web page could be closed safely.
     *
     * @param callback The callback to check if the web page could be closed safely.
     * It should return a string to show a message to the user. If the return value is undefined,
     * the web page could be closed safely.
     */
    registerBeforeClose(callback: () => string | undefined): IDisposable;
    /**
     * Provide a callback to be called when the web page is closed.
     *
     * @param callback The callback to be called when the web page is closed.
     */
    registerOnClose(callback: () => void): IDisposable;
}
export declare const IBeforeCloseService: import('@wendellhu/redi').IdentifierDecorator<IBeforeCloseService>;
export declare class DesktopBeforeCloseService implements IBeforeCloseService {
    private readonly _notificationService;
    private _beforeUnloadCallbacks;
    private _onCloseCallbacks;
    constructor(_notificationService: INotificationService);
    registerBeforeClose(callback: () => string | undefined): IDisposable;
    registerOnClose(callback: () => void): IDisposable;
    private _init;
}
