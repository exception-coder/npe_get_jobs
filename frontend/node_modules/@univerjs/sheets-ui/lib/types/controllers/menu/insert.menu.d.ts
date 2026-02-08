import { IAccessor } from '@univerjs/core';
import { IMenuButtonItem, IMenuSelectorItem } from '@univerjs/ui';
export declare const COL_INSERT_MENU_ID = "sheet.menu.col-insert";
export declare function ColInsertMenuItemFactory(accessor: IAccessor): IMenuSelectorItem<string>;
export declare const ROW_INSERT_MENU_ID = "sheet.menu.row-insert";
export declare function RowInsertMenuItemFactory(accessor: IAccessor): IMenuSelectorItem<string>;
export declare const CELL_INSERT_MENU_ID = "sheet.menu.cell-insert";
export declare function CellInsertMenuItemFactory(accessor: IAccessor): IMenuSelectorItem<string>;
/**
 * context menu when right click cell
 * @param accessor
 * @returns
 */
export declare function InsertRowBeforeMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
/**
 * context menu when right click cell
 * @param accessor
 * @returns
 */
export declare function InsertRowBeforeCellMenuItemFactory(accessor: IAccessor): IMenuButtonItem<number>;
export declare function InsertRowAfterMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
/**
 * context menu when right click cell
 * @param accessor
 */
export declare function InsertColLeftCellMenuItemFactory(accessor: IAccessor): IMenuButtonItem<number>;
export declare function InsertColBeforeMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare function InsertColAfterMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare function InsertRangeMoveRightMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
/**
 * For insert range in cell context menu
 * @param accessor
 */
export declare function InsertRangeMoveDownMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
/**
 * Context menu in rowheader.
 * @param accessor
 */
export declare function InsertMultiRowsAfterHeaderMenuItemFactory(accessor: IAccessor): IMenuButtonItem<number>;
/**
 * Context menu in rowheader.
 * @param accessor
 */
export declare function InsertMultiRowsAboveHeaderMenuItemFactory(accessor: IAccessor): IMenuButtonItem<number>;
/**
 * Context menu in rowheader.
 * @param accessor
 */
export declare function InsertMultiColsLeftHeaderMenuItemFactory(accessor: IAccessor): IMenuButtonItem<number>;
/**
 * Context menu in rowheader.
 * @param accessor
 */
export declare function InsertMultiColsRightHeaderMenuItemFactory(accessor: IAccessor): IMenuButtonItem<number>;
