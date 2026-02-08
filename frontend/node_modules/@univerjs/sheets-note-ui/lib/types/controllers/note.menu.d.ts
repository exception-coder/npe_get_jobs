import { IAccessor } from '@univerjs/core';
import { IMenuItem } from '@univerjs/ui';
export declare const SHEET_NOTE_CONTEXT_MENU_ID = "sheet.menu.note";
export declare function sheetNoteContextMenuFactory(accessor: IAccessor): IMenuItem;
export declare function sheetDeleteNoteMenuFactory(accessor: IAccessor): IMenuItem;
export declare function sheetNoteToggleMenuFactory(accessor: IAccessor): IMenuItem;
