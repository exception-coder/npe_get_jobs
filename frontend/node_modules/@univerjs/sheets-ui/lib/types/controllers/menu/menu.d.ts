import { IAccessor, HorizontalAlign, VerticalAlign, WrapStrategy } from '@univerjs/core';
import { IMenuButtonItem, IMenuSelectorItem } from '@univerjs/ui';
export declare enum SheetMenuPosition {
    ROW_HEADER_CONTEXT_MENU = "ROW_HEADER_CONTEXT_MENU",
    COL_HEADER_CONTEXT_MENU = "COL_HEADER_CONTEXT_MENU",
    SHEET_BAR = "SHEET_BAR",
    SHEET_FOOTER = "SHEET_FOOTER"
}
export declare function FormatPainterMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare function BoldMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare function ItalicMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare function UnderlineMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare function StrikeThroughMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare function FontFamilySelectorMenuItemFactory(accessor: IAccessor): IMenuSelectorItem<string>;
export declare function FontSizeSelectorMenuItemFactory(accessor: IAccessor): IMenuSelectorItem<number>;
export declare function ResetTextColorMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare function TextColorSelectorMenuItemFactory(accessor: IAccessor): IMenuSelectorItem<string, string | undefined>;
export declare function ResetBackgroundColorMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare function BackgroundColorSelectorMenuItemFactory(accessor: IAccessor): IMenuSelectorItem<string, string | undefined>;
export declare const HORIZONTAL_ALIGN_CHILDREN: {
    label: string;
    icon: string;
    value: HorizontalAlign;
}[];
export declare function HorizontalAlignMenuItemFactory(accessor: IAccessor): IMenuSelectorItem<HorizontalAlign>;
export declare const VERTICAL_ALIGN_CHILDREN: {
    label: string;
    icon: string;
    value: VerticalAlign;
}[];
export declare function VerticalAlignMenuItemFactory(accessor: IAccessor): IMenuSelectorItem<VerticalAlign>;
export declare const TEXT_WRAP_CHILDREN: {
    label: string;
    icon: string;
    value: WrapStrategy;
}[];
export declare function WrapTextMenuItemFactory(accessor: IAccessor): IMenuSelectorItem<WrapStrategy>;
export declare const TEXT_ROTATE_CHILDREN: ({
    label: string;
    icon: string;
    value: number;
} | {
    label: string;
    icon: string;
    value: string;
})[];
export declare function TextRotateMenuItemFactory(accessor: IAccessor): IMenuSelectorItem<number | string>;
export declare function CopyMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare function CutMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare function PasteMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare const PASTE_SPECIAL_MENU_ID = "sheet.menu.paste-special";
export declare function PasteSpacialMenuItemFactory(accessor: IAccessor): IMenuSelectorItem;
export declare function PasteValueMenuItemFactory(accessor: IAccessor): IMenuButtonItem<string>;
export declare function PasteFormatMenuItemFactory(accessor: IAccessor): IMenuButtonItem<string>;
export declare function PasteColWidthMenuItemFactory(accessor: IAccessor): IMenuButtonItem<string>;
export declare function PasteBesidesBorderMenuItemFactory(accessor: IAccessor): IMenuButtonItem<string>;
export declare function FitContentMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare function ColAutoWidthMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare const SHEET_FROZEN_MENU_ID = "sheet.menu.sheet-frozen";
export declare function SheetFrozenMenuItemFactory(accessor: IAccessor): IMenuSelectorItem<string>;
export declare const SHEET_FROZEN_HEADER_MENU_ID = "sheet.header-menu.sheet-frozen";
export declare function SheetFrozenHeaderMenuItemFactory(accessor: IAccessor): IMenuSelectorItem<string>;
export declare function FrozenMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare function FrozenRowMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare function FrozenColMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare function CancelFrozenMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare function HideRowMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare function HideColMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare function ShowRowMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare function ShowColMenuItemFactory(accessor: IAccessor): IMenuButtonItem;
export declare function SetRowHeightMenuItemFactory(accessor: IAccessor): IMenuButtonItem<number>;
export declare function SetColWidthMenuItemFactory(accessor: IAccessor): IMenuButtonItem<number>;
