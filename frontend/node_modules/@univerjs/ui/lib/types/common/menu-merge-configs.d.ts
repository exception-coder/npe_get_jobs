import { MenuConfig, MenuItemConfig } from '../services/menu/menu';
export declare function mergeMenuConfigs<T = MenuConfig>(baseConfig: T, additionalConfig: MenuItemConfig | null): T;
