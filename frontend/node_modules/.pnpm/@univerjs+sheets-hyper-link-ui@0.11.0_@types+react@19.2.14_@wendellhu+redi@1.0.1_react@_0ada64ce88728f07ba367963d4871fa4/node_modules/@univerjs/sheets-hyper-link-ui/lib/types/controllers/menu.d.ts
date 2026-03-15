import { IAccessor } from '@univerjs/core';
import { IMenuItem, IShortcutItem, MenuItemType } from '@univerjs/ui';
export declare const genZenEditorMenuId: (id: string) => string;
export declare const insertLinkMenuFactory: (accessor: IAccessor) => IMenuItem;
export declare const zenEditorInsertLinkMenuFactory: (accessor: IAccessor) => IMenuItem;
export declare const insertLinkMenuToolbarFactory: (accessor: IAccessor) => {
    id: string;
    hidden$: import('rxjs').Observable<boolean>;
    disabled$: import('rxjs').Observable<boolean>;
    tooltip: string;
    commandId: string;
    type: MenuItemType;
    icon: string;
};
export declare const zenEditorInsertLinkMenuToolbarFactory: (accessor: IAccessor) => {
    id: string;
    hidden$: import('rxjs').Observable<boolean>;
    disabled$: import('rxjs').Observable<boolean>;
    tooltip: string;
    commandId: string;
    type: MenuItemType;
    icon: string;
};
export declare const InsertLinkShortcut: IShortcutItem;
