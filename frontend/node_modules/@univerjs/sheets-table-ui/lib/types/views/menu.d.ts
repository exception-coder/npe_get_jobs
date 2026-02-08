import { IAccessor } from '@univerjs/core';
import { IMenuItem, IMenuSelectorItem, MenuItemType } from '@univerjs/ui';
import { Observable } from 'rxjs';
export declare const SHEET_TABLE_CONTEXT_INSERT_MENU_ID = "sheet.table.context-insert_menu-id";
export declare const SHEET_TABLE_CONTEXT_REMOVE_MENU_ID = "sheet.table.context-remove_menu-id";
export declare function sheetTableToolbarInsertMenuFactory(accessor: IAccessor): IMenuItem;
export declare function SheetTableInsertContextMenuFactory(accessor: IAccessor): IMenuSelectorItem<string>;
export declare function SheetTableRemoveContextMenuFactory(accessor: IAccessor): IMenuSelectorItem<string>;
export declare function SheetTableInsertRowMenuFactory(accessor: IAccessor): {
    id: string;
    type: MenuItemType;
    title: string;
    hidden$: Observable<boolean>;
};
export declare function SheetTableInsertColMenuFactory(accessor: IAccessor): {
    id: string;
    title: string;
    type: MenuItemType;
};
export declare function SheetTableRemoveRowMenuFactory(accessor: IAccessor): {
    id: string;
    type: MenuItemType;
    title: string;
    hidden$: Observable<boolean>;
};
export declare function SheetTableRemoveColMenuFactory(accessor: IAccessor): {
    id: string;
    title: string;
    type: MenuItemType;
};
export declare function getSheetTableRowColOperationHidden$(accessor: IAccessor): Observable<boolean>;
export declare function getSheetTableHeaderOperationHidden$(accessor: IAccessor): Observable<boolean>;
