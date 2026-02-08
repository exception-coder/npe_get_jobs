import { ComponentProps, ReactNode } from 'react';
import { DropdownMenuContent } from './DropdownMenuPrimitive';
interface IDropdownMenuNormalItem {
    type: 'item';
    className?: string;
    children: ReactNode;
    disabled?: boolean;
    onSelect?: (item: DropdownMenuType) => void;
}
interface IDropdownMenuNormalSubItem {
    type: 'subItem';
    className?: string;
    children: ReactNode;
    options?: DropdownMenuType[];
    disabled?: boolean;
    onSelect?: (item: DropdownMenuType) => void;
}
interface IDropdownMenuSeparatorItem {
    type: 'separator';
    className?: string;
}
interface IDropdownMenuOption {
    label?: ReactNode;
    value?: string;
    disabled?: boolean;
}
interface IDropdownMenuRadioItem {
    type: 'radio';
    className?: string;
    value: string;
    hideIndicator?: boolean;
    options: (IDropdownMenuOption | IDropdownMenuSeparatorItem)[];
    onSelect?: (item: string) => void;
}
interface IDropdownMenuCheckItem {
    type: 'checkbox';
    className?: string;
    label?: ReactNode;
    value: string;
    disabled?: boolean;
    checked?: boolean;
    onSelect?: (item: string) => void;
}
type DropdownMenuType = IDropdownMenuNormalItem | IDropdownMenuNormalSubItem | IDropdownMenuSeparatorItem | IDropdownMenuRadioItem | IDropdownMenuCheckItem;
export interface IDropdownMenuProps extends ComponentProps<typeof DropdownMenuContent> {
    children: ReactNode;
    items: DropdownMenuType[];
    disabled?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}
export declare function DropdownMenu(props: IDropdownMenuProps): import("react/jsx-runtime").JSX.Element;
export {};
