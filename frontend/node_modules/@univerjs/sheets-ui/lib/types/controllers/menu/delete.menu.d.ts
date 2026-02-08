import { IAccessor } from '@univerjs/core';
import { IMenuButtonItem, IMenuSelectorItem } from '@univerjs/ui';
export declare const DELETE_RANGE_MENU_ID = "sheet.menu.delete";
export declare function DeleteRangeMenuItemFactory(accessor: IAccessor): IMenuSelectorItem<string>;
export declare function RemoveColMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare function RemoveRowMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare function DeleteRangeMoveLeftMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare function DeleteRangeMoveUpMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
