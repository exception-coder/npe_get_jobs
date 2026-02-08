import { IAccessor } from '@univerjs/core';
import { IMenuSelectorItem, MenuItemType } from '@univerjs/ui';
import { Observable } from 'rxjs';
export declare const MENU_OPTIONS: (currencySymbol: string) => Array<{
    label: string;
    pattern: string | null;
} | "|">;
export declare const CurrencySymbolIconMenuItem: (accessor: IAccessor) => {
    icon: Observable<string>;
    id: string;
    title: string;
    tooltip: string;
    type: MenuItemType;
    hidden$: Observable<boolean>;
    disabled$: Observable<boolean>;
};
export declare const AddDecimalMenuItem: (accessor: IAccessor) => {
    icon: string;
    id: string;
    title: string;
    tooltip: string;
    type: MenuItemType;
    hidden$: Observable<boolean>;
    disabled$: Observable<boolean>;
};
export declare const SubtractDecimalMenuItem: (accessor: IAccessor) => {
    icon: string;
    id: string;
    title: string;
    tooltip: string;
    type: MenuItemType;
    hidden$: Observable<boolean>;
    disabled$: Observable<boolean>;
};
export declare const PercentMenuItem: (accessor: IAccessor) => {
    icon: string;
    id: string;
    title: string;
    tooltip: string;
    type: MenuItemType;
    hidden$: Observable<boolean>;
    disabled$: Observable<boolean>;
};
export declare const FactoryOtherMenuItem: (accessor: IAccessor) => IMenuSelectorItem;
