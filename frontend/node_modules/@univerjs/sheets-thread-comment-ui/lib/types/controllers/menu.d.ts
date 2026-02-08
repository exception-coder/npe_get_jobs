import { IAccessor } from '@univerjs/core';
import { IShortcutItem, MenuItemType } from '@univerjs/ui';
export declare const threadCommentMenuFactory: (accessor: IAccessor) => {
    id: string;
    type: MenuItemType;
    icon: string;
    title: string;
    hidden$: import('rxjs').Observable<boolean>;
    disabled$: import('rxjs').Observable<boolean>;
};
export declare const threadPanelMenuFactory: (accessor: IAccessor) => {
    id: string;
    type: MenuItemType;
    icon: string;
    tooltip: string;
    disabled$: import('rxjs').Observable<boolean>;
    hidden$: import('rxjs').Observable<boolean>;
};
export declare const AddCommentShortcut: IShortcutItem;
