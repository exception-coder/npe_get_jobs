import { IAccessor, Disposable, IConfigService, Injector } from '@univerjs/core';
import { Observable, Subject } from 'rxjs';
import { IMenuItem } from '../menu/menu';
export declare const IMenuManagerService: import('@wendellhu/redi').IdentifierDecorator<IMenuManagerService>;
export interface IMenuSchema {
    key: string;
    order: number;
    title?: string;
    item?: IMenuItem;
    children?: IMenuSchema[];
    tiny?: boolean;
}
export interface IMenuManagerService {
    readonly menuChanged$: Observable<void>;
    mergeMenu(source: MenuSchemaType, target?: MenuSchemaType): void;
    appendRootMenu(source: MenuSchemaType): void;
    getMenuByPositionKey(position: string): IMenuSchema[];
    getFlatMenuByPositionKey(position: string): IMenuSchema[];
}
export type MenuSchemaType = {
    order?: number;
    menuItemFactory?: (accessor: IAccessor) => IMenuItem;
    title?: string;
} | {
    [key: string]: MenuSchemaType;
};
export declare class MenuManagerService extends Disposable implements IMenuManagerService {
    private readonly _injector;
    private readonly _configService;
    readonly menuChanged$: Subject<void>;
    private _menu;
    constructor(_injector: Injector, _configService: IConfigService);
    dispose(): void;
    /**
     * Merge source menu to target menu recursively
     * @param source
     * @param target default is root menu
     */
    mergeMenu(source: MenuSchemaType, target?: MenuSchemaType): void;
    appendRootMenu(source: MenuSchemaType): void;
    private _buildMenuSchema;
    /**
     * Get menu schema by position key
     * @param key
     * @returns Menu schema array or empty array if not found
     */
    getMenuByPositionKey(key: string): IMenuSchema[];
    /**
     * Get flat menu schema by position key
     * @param key
     * @returns Flat menu schema array or empty array if not found
     */
    getFlatMenuByPositionKey(key: string): IMenuSchema[];
}
