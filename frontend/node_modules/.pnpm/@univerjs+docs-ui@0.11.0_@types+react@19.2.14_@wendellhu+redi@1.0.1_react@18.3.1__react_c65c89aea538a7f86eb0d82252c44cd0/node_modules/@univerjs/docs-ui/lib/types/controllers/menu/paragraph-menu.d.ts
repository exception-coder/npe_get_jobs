import { IAccessor, NamedStyleType } from '@univerjs/core';
import { IMenuItem, IMenuSelectorItem } from '@univerjs/ui';
export declare const HEADING_ICON_MAP: Record<NamedStyleType, {
    key: string;
    component: React.ComponentType<{
        className: string;
    }>;
}>;
export declare const H1HeadingMenuItemFactory: (accessor: IAccessor) => IMenuItem;
export declare const H2HeadingMenuItemFactory: (accessor: IAccessor) => IMenuItem;
export declare const H3HeadingMenuItemFactory: (accessor: IAccessor) => IMenuItem;
export declare const H4HeadingMenuItemFactory: (accessor: IAccessor) => IMenuItem;
export declare const H5HeadingMenuItemFactory: (accessor: IAccessor) => IMenuItem;
export declare const NormalTextHeadingMenuItemFactory: (accessor: IAccessor) => IMenuItem;
export declare const TitleHeadingMenuItemFactory: (accessor: IAccessor) => IMenuItem;
export declare const SubtitleHeadingMenuItemFactory: (accessor: IAccessor) => IMenuItem;
export declare const CopyCurrentParagraphMenuItemFactory: (accessor: IAccessor) => IMenuItem;
export declare const CutCurrentParagraphMenuItemFactory: (accessor: IAccessor) => IMenuItem;
export declare const DeleteCurrentParagraphMenuItemFactory: (accessor: IAccessor) => IMenuItem;
export declare const InsertBulletListBellowMenuItemFactory: (accessor: IAccessor) => IMenuItem;
export declare const InsertOrderListBellowMenuItemFactory: (accessor: IAccessor) => IMenuItem;
export declare const InsertCheckListBellowMenuItemFactory: (accessor: IAccessor) => IMenuItem;
export declare const InsertHorizontalLineBellowMenuItemFactory: (accessor: IAccessor) => IMenuItem;
export declare const INSERT_BELLOW_MENU_ID = "doc.menu.insert-bellow";
export declare function DocInsertBellowMenuItemFactory(accessor: IAccessor): IMenuSelectorItem<string>;
