import { IAccessor } from '@univerjs/core';
import { IMenuButtonItem, IMenuSelectorItem } from '@univerjs/ui';
export declare const CLEAR_SELECTION_MENU_ID = "sheet.menu.clear-selection";
export declare function ClearSelectionMenuItemFactory(accessor: IAccessor): IMenuSelectorItem<string>;
export declare function ClearSelectionContentMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare function ClearSelectionFormatMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare function ClearSelectionAllMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
