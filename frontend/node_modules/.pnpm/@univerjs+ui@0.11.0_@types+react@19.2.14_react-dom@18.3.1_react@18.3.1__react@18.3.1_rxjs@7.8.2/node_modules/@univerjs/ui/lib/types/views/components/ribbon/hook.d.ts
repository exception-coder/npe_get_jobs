import { IDisplayMenuItem, IMenuItem } from '../../../services/menu/menu';
export interface IToolbarItemStatus {
    disabled: boolean;
    value: any;
    activated: boolean;
    hidden: boolean;
}
/**
 * Subscribe to a menu item's status change and return the latest status.
 * @param menuItem The menu item
 * @returns The menu item's status
 */
export declare function useToolbarItemStatus(menuItem: IDisplayMenuItem<IMenuItem>): IToolbarItemStatus;
