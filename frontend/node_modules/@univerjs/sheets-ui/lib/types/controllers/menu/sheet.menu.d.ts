import { IAccessor } from '@univerjs/core';
import { IMenuButtonItem, IMenuSelectorItem } from '@univerjs/ui';
export declare function DeleteSheetMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare function CopySheetMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare function RenameSheetMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare function ChangeColorSheetMenuItemFactory(accessor: IAccessor): IMenuSelectorItem<string>;
export declare function HideSheetMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare function UnHideSheetMenuItemFactory(accessor: IAccessor): IMenuSelectorItem<any>;
export declare function ShowMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
