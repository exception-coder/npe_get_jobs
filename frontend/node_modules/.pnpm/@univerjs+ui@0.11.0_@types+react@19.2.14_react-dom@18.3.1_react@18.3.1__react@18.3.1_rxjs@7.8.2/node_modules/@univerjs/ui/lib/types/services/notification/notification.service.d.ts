import { IDisposable } from '@univerjs/core';
import { INotificationOptions } from '../../components/notification/Notification';
export declare const INotificationService: import('@wendellhu/redi').IdentifierDecorator<INotificationService>;
export interface INotificationService {
    show(params: INotificationOptions): IDisposable;
}
