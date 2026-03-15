import { MenuItemGroupProps, MenuItemProps, MenuProps, MenuRef, SubMenuProps } from 'rc-menu';
import { ComponentType } from 'react';
import './index.css';
/** @deprecated */
export declare const Menu: import('react').ForwardRefExoticComponent<MenuProps & {
    wrapperClass?: string;
} & import('react').RefAttributes<MenuRef>>;
/** @deprecated */
export declare function MenuItem(props: MenuItemProps): import("react/jsx-runtime").JSX.Element;
/** @deprecated */
export declare function SubMenu(props: SubMenuProps): import("react/jsx-runtime").JSX.Element;
/** @deprecated */
export declare function MenuItemGroup(props: MenuItemGroupProps): import("react/jsx-runtime").JSX.Element;
export interface ITinyMenuItem {
    onClick: () => void;
    className: string;
    Icon: ComponentType<{
        className?: string;
    }>;
    key: string;
    active?: boolean;
    tooltip?: string;
}
export interface ITinyMenuGroupProps {
    items: ITinyMenuItem[];
}
export declare function TinyMenuGroup({ items }: ITinyMenuGroupProps): import("react/jsx-runtime").JSX.Element;
