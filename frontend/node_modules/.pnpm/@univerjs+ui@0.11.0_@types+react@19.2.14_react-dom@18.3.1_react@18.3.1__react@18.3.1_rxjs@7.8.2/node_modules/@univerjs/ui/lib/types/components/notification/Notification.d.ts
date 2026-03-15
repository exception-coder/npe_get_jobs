import { IToasterProps, toast } from '@univerjs/design';
export declare function Notification(): import("react/jsx-runtime").JSX.Element;
export interface INotificationOptions {
    /** The title of the notification */
    title: Parameters<typeof toast>[0];
    /** The description of the notification */
    content?: string;
    /** The type of the notification */
    type?: 'success' | 'info' | 'warning' | 'error' | 'message' | 'loading';
    /** The placement of the notification */
    position?: IToasterProps['position'];
    /** The duration of the notification */
    duration?: number;
    expand?: boolean;
    /** The icon of the notification */
    icon?: React.ReactNode;
    closable?: boolean;
}
export declare const notification: {
    show: (options: INotificationOptions) => void;
};
