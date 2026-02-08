import { IAccessor } from '@univerjs/core';
import { Observable } from 'rxjs';
export type OneOrMany<T> = T | T[];
export declare enum MenuItemType {
    /** Button style menu item. */
    BUTTON = 0,
    /** Menu item with submenus. Submenus could be other IMenuItem or an ID of a registered component. */
    SELECTOR = 1,
    /** Button style menu item with a dropdown menu. */
    BUTTON_SELECTOR = 2,
    /** Submenus have to specific features and do not invoke commands. */
    SUBITEMS = 3
}
interface IMenuItemBase<V> {
    /** ID of the menu item. Normally it should be the same as the ID of the command that it would invoke.  */
    id: string;
    /**
     * If two menus reuse the same command (e.g. copy & paste command). They should have the same command
     * id and different ids.
     */
    commandId?: string;
    subId?: string;
    title?: string;
    description?: string;
    icon?: string | Observable<string>;
    tooltip?: string;
    slot?: boolean;
    type: MenuItemType;
    /**
     * Custom label component id.
     */
    label?: string | {
        name: string;
        hoverable?: boolean;
        selectable?: boolean;
        props?: Record<string, any>;
    };
    hidden$?: Observable<boolean>;
    disabled$?: Observable<boolean>;
    params?: any;
    /** On observable value that should emit the value of the corresponding selection component. */
    value$?: Observable<V>;
}
export interface IMenuButtonItem<V = undefined> extends IMenuItemBase<V> {
    type: MenuItemType.BUTTON;
    activated$?: Observable<boolean>;
}
export interface IValueOption<T = undefined> {
    id?: string;
    value?: string | number;
    value$?: Observable<T>;
    slot?: boolean;
    label?: string | {
        name: string;
        hoverable?: boolean;
        selectable?: boolean;
        props?: Record<string, string | number | Array<{
            [x: string | number]: string;
        }>>;
    };
    icon?: string;
    tooltip?: string;
    style?: object;
    disabled?: boolean;
    commandId?: string;
}
export interface ICustomComponentProps<T> {
    value: T;
    onChange: (v: T) => void;
}
export interface IMenuSelectorItem<V = MenuItemDefaultValueType, T = undefined> extends IMenuItemBase<V> {
    type: MenuItemType.SELECTOR | MenuItemType.BUTTON_SELECTOR | MenuItemType.SUBITEMS;
    /**
     * If this property is set, changing the value of the selection will trigger the command with this id,
     * instead of {@link IMenuItemBase.id} or {@link IMenuItemBase.commandId}. At the same title,
     * clicking the button will trigger IMenuItemBase.id or IMenuItemBase.commandId.
     */
    selectionsCommandId?: string;
    /** Options or IDs of registered components. */
    selections?: Array<IValueOption<T>> | Observable<Array<IValueOption<T>>>;
    /** If `type` is `MenuItemType.BUTTON_SELECTOR`, this determines if the button is activated. */
    activated$?: Observable<boolean>;
}
export declare function isMenuSelectorItem<T extends MenuItemDefaultValueType>(v: IMenuItem): v is IMenuSelectorItem<T>;
export type MenuItemDefaultValueType = string | number | undefined;
export type IMenuItem = IMenuButtonItem<MenuItemDefaultValueType> | IMenuSelectorItem<MenuItemDefaultValueType, any>;
export type IDisplayMenuItem<T extends IMenuItem> = T & {
    shortcut?: string;
};
export type MenuItemConfig = Partial<Omit<IMenuItem, 'id' | 'subId' | 'value$' | 'hidden$' | 'disabled$' | 'activated$' | 'icon$'> & {
    hidden?: boolean;
    disabled?: boolean;
    activated?: boolean;
}>;
export type MenuConfig = Record<string, MenuItemConfig>;
export type IMenuItemFactory = (accessor: IAccessor, menuConfig?: MenuConfig) => IMenuItem;
export {};
