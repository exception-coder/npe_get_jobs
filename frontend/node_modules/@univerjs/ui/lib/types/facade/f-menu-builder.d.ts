import { MenuSchemaType, IMenuManagerService, MenuManagerPosition, RibbonPosition, RibbonStartGroup } from '@univerjs/ui';
import { ICommandService, Injector } from '@univerjs/core';
import { FBase } from '@univerjs/core/facade';
/**
 * @ignore
 */
export interface IFacadeMenuItem {
    /**
     * The unique identifier of the menu item.
     */
    id: string;
    /**
     * Icon of the menu item.
     */
    icon?: string;
    /**
     * Title of the menu item.
     */
    title: string;
    /**
     * The tooltip to show when the mouse hovers over the menu item.
     */
    tooltip?: string;
    /**
     * The command to execute when the menu item is clicked. It can also be a callback function to
     * execute any custom logic.
     */
    action: string | (() => void);
    /**
     * The order of the menu item in the submenu.
     */
    order?: number;
}
/**
 * @ignore
 */
export interface IFacadeSubmenuItem {
    /**
     * The unique identifier of the menu item.
     */
    id: string;
    /**
     * Icon of the menu item.
     */
    icon?: string;
    /**
     * Title of the menu item.
     */
    title: string;
    /**
     * The tooltip to show when the mouse hovers over the menu item.
     */
    tooltip?: string;
    /**
     * The order of the menu item in the submenu.
     */
    order?: number;
}
/**
 * @ignore
 */
declare abstract class FMenuBase extends FBase {
    protected abstract readonly _menuManagerService: IMenuManagerService;
    abstract __getSchema(): {
        [key: string]: MenuSchemaType;
    };
    /**
     * Append the menu to any menu position on Univer UI.
     * @param {string | string[]} path - Some predefined path to append the menu. The paths can be an array,
     * or an array joined by `|` separator. Since lots of submenus reuse the same name,
     * you may need to specify their parent menus as well.
     *
     * @example
     * ```typescript
     * // This menu item will appear on every `contextMenu.others` section.
     * univerAPI.createMenu({
     *   id: 'custom-menu-id-1',
     *   title: 'Custom Menu 1',
     *   action: () => {
     *     console.log('Custom Menu 1 clicked');
     *   },
     * }).appendTo('contextMenu.others');
     *
     * // This menu item will only appear on the `contextMenu.others` section on the main area.
     * univerAPI.createMenu({
     *   id: 'custom-menu-id-2',
     *   title: 'Custom Menu 2',
     *   action: () => {
     *     console.log('Custom Menu 2 clicked');
     *   },
     * }).appendTo(['contextMenu.mainArea', 'contextMenu.others']);
     * ```
     */
    appendTo(path: string | string[]): void;
}
/**
 * This is the builder for adding a menu to Univer. You shall never construct this
 * class by yourself. Instead, call `createMenu` of {@link FUniver} to create a instance.
 *
 * Please notice that until the `appendTo` method is called, the menu item is not added to the UI.
 *
 * Please note that this menu cannot have submenus. If you want to
 * have submenus, please use {@link FSubmenu}.
 *
 * @hideconstructor
 */
export declare class FMenu extends FMenuBase {
    private readonly _item;
    protected readonly _injector: Injector;
    protected readonly _commandService: ICommandService;
    protected readonly _menuManagerService: IMenuManagerService;
    static RibbonStartGroup: typeof RibbonStartGroup;
    static RibbonPosition: typeof RibbonPosition;
    static MenuManagerPosition: typeof MenuManagerPosition;
    private _commandToRegister;
    private _buildingSchema;
    constructor(_item: IFacadeMenuItem, _injector: Injector, _commandService: ICommandService, _menuManagerService: IMenuManagerService);
    /**
     * @ignore
     */
    __getSchema(): {
        [key: string]: MenuSchemaType;
    };
}
/**
 * This is the builder for add a menu that can contains submenus to Univer. You shall
 * never construct this class by yourself. Instead, call `createSubmenu` of {@link FUniver} to
 * create a instance.
 *
 * Please notice that until the `appendTo` method is called, the menu item is not added to the UI.
 *
 * @hideconstructor
 */
export declare class FSubmenu extends FMenuBase {
    private readonly _item;
    protected readonly _injector: Injector;
    protected readonly _menuManagerService: IMenuManagerService;
    private _menuByGroups;
    private _submenus;
    private _buildingSchema;
    constructor(_item: IFacadeSubmenuItem, _injector: Injector, _menuManagerService: IMenuManagerService);
    /**
     * Add a menu to the submenu. It can be a {@link FMenu} or a {@link FSubmenu}.
     * @param {FMenu | FSubmenu} submenu - Menu to add to the submenu.
     * @returns {FSubmenu} The FSubmenu itself for chaining calls.
     * @example
     * ```typescript
     * // Create two leaf menus.
     * const menu1 = univerAPI.createMenu({
     *   id: 'submenu-nested-1',
     *   title: 'Item 1',
     *   action: () => {
     *     console.log('Item 1 clicked');
     *   }
     * });
     * const menu2 = univerAPI.createMenu({
     *   id: 'submenu-nested-2',
     *   title: 'Item 2',
     *   action: () => {
     *     console.log('Item 2 clicked');
     *   }
     * });
     *
     * // Add the leaf menus to a submenu.
     * const submenu = univerAPI.createSubmenu({ id: 'submenu-nested', title: 'Nested Submenu' })
     *   .addSubmenu(menu1)
     *   .addSeparator()
     *   .addSubmenu(menu2);
     *
     * // Create a root submenu append to the `contextMenu.others` section.
     * univerAPI.createSubmenu({ id: 'custom-submenu', title: 'Custom Submenu' })
     *   .addSubmenu(submenu)
     *   .appendTo('contextMenu.others');
     * ```
     */
    addSubmenu(submenu: FMenu | FSubmenu): this;
    /**
     * Add a separator to the submenu.
     * @returns {FSubmenu} The FSubmenu itself for chaining calls.
     * @example
     * ```typescript
     * // Create two leaf menus.
     * const menu1 = univerAPI.createMenu({
     *   id: 'submenu-nested-1',
     *   title: 'Item 1',
     *   action: () => {
     *     console.log('Item 1 clicked');
     *   }
     * });
     * const menu2 = univerAPI.createMenu({
     *   id: 'submenu-nested-2',
     *   title: 'Item 2',
     *   action: () => {
     *     console.log('Item 2 clicked');
     *   }
     * });
     *
     * // Add the leaf menus to a submenu and add a separator between them.
     * // Append the submenu to the `contextMenu.others` section.
     * univerAPI.createSubmenu({ id: 'submenu-nested', title: 'Nested Submenu' })
     *   .addSubmenu(menu1)
     *   .addSeparator()
     *   .addSubmenu(menu2)
     *   .appendTo('contextMenu.others');
     * ```
     */
    addSeparator(): this;
    /**
     * @ignore
     */
    __getSchema(): {
        [key: string]: MenuSchemaType;
    };
}
export {};
