import { IDrawingSearch } from '@univerjs/core';
export interface IImagePopupMenuItem {
    label: string;
    index: number;
    commandId: string;
    commandParams?: IDrawingSearch[];
    disable: boolean;
}
export interface IImagePopupMenuExtraProps {
    menuItems: IImagePopupMenuItem[];
}
export interface IImagePopupMenuProps {
    popup: {
        extraProps?: IImagePopupMenuExtraProps;
    };
}
export declare function ImagePopupMenu(props: IImagePopupMenuProps): import("react/jsx-runtime").JSX.Element | null;
