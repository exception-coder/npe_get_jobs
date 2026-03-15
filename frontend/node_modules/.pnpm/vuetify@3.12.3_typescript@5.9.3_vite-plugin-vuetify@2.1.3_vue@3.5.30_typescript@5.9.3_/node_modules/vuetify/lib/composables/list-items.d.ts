// Types
import type { PropType } from 'vue';
import type { InternalItem } from './filter.js';
import type { SelectItemKey, ValueComparator } from '../util/index.js';
export interface ListItem<T = any> extends InternalItem<T> {
    title: string;
    props: {
        [key: string]: any;
        title: string;
        value: any;
    };
    children: ListItem<T>[] | undefined;
    type: string;
}
export interface ItemProps {
    items: any[];
    itemTitle: SelectItemKey;
    itemValue: SelectItemKey;
    itemChildren: SelectItemKey;
    itemProps: SelectItemKey;
    itemType: SelectItemKey;
    returnObject: boolean;
    valueComparator: ValueComparator | undefined;
}
// Composables
export declare const makeItemsProps: <Defaults extends {
    items?: unknown;
    itemTitle?: unknown;
    itemValue?: unknown;
    itemChildren?: unknown;
    itemProps?: unknown;
    itemType?: unknown;
    returnObject?: unknown;
    valueComparator?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    items: unknown extends Defaults["items"] ? {
        type: PropType<any[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<any[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["items"] ? any[] : any[] | Defaults["items"]>;
        default: unknown extends Defaults["items"] ? any[] : any[] | Defaults["items"];
    };
    itemTitle: unknown extends Defaults["itemTitle"] ? {
        type: PropType<SelectItemKey>;
        default: string;
    } : Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["itemTitle"] ? SelectItemKey : Defaults["itemTitle"] | SelectItemKey>;
        default: unknown extends Defaults["itemTitle"] ? SelectItemKey : Defaults["itemTitle"] | NonNullable<SelectItemKey>;
    };
    itemValue: unknown extends Defaults["itemValue"] ? {
        type: PropType<SelectItemKey>;
        default: string;
    } : Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["itemValue"] ? SelectItemKey : Defaults["itemValue"] | SelectItemKey>;
        default: unknown extends Defaults["itemValue"] ? SelectItemKey : Defaults["itemValue"] | NonNullable<SelectItemKey>;
    };
    itemChildren: unknown extends Defaults["itemChildren"] ? {
        type: PropType<SelectItemKey>;
        default: string;
    } : Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["itemChildren"] ? SelectItemKey : Defaults["itemChildren"] | SelectItemKey>;
        default: unknown extends Defaults["itemChildren"] ? SelectItemKey : Defaults["itemChildren"] | NonNullable<SelectItemKey>;
    };
    itemProps: unknown extends Defaults["itemProps"] ? {
        type: PropType<SelectItemKey>;
        default: string;
    } : Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["itemProps"] ? SelectItemKey : Defaults["itemProps"] | SelectItemKey>;
        default: unknown extends Defaults["itemProps"] ? SelectItemKey : Defaults["itemProps"] | NonNullable<SelectItemKey>;
    };
    itemType: unknown extends Defaults["itemType"] ? {
        type: PropType<SelectItemKey>;
        default: string;
    } : Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["itemType"] ? SelectItemKey : Defaults["itemType"] | SelectItemKey>;
        default: unknown extends Defaults["itemType"] ? SelectItemKey : Defaults["itemType"] | NonNullable<SelectItemKey>;
    };
    returnObject: unknown extends Defaults["returnObject"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"]>;
        default: unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"];
    };
    valueComparator: unknown extends Defaults["valueComparator"] ? PropType<ValueComparator> : {
        type: PropType<unknown extends Defaults["valueComparator"] ? ValueComparator : ValueComparator | Defaults["valueComparator"]>;
        default: unknown extends Defaults["valueComparator"] ? ValueComparator : ValueComparator | Defaults["valueComparator"];
    };
};
export declare function transformItem(props: Pick<ItemProps, typeof transformItem.neededProps[number]>, item: any): ListItem;
export declare function transformItems(props: Pick<ItemProps, typeof transformItem.neededProps[number]>, items: ItemProps['items']): ListItem<any>[];
export declare function useItems(props: ItemProps): {
    items: import("vue").ComputedRef<ListItem<any>[]>;
    transformIn: (value: any[]) => ListItem<any>[];
    transformOut: (value: ListItem<any>[]) => any[];
};
