// Types
import type { PropType } from 'vue';
import type { GroupableItem } from '../../VDataTable/composables/group.js';
import type { SelectableItem } from '../../VDataTable/composables/select.js';
import type { InternalItem } from '../../../composables/filter.js';
import type { SelectItemKey } from '../../../util/index.js';
export interface DataIteratorItemProps {
    items: any[];
    itemValue: SelectItemKey;
    itemSelectable: SelectItemKey;
    returnObject: boolean;
}
export interface DataIteratorItem<T = any> extends Omit<InternalItem<T>, 'type'>, GroupableItem<T>, SelectableItem {
    value: unknown;
}
// Composables
export declare const makeDataIteratorItemsProps: <Defaults extends {
    items?: unknown;
    itemValue?: unknown;
    itemSelectable?: unknown;
    returnObject?: unknown;
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
    itemSelectable: unknown extends Defaults["itemSelectable"] ? {
        type: PropType<SelectItemKey>;
        default: null;
    } : Omit<{
        type: PropType<SelectItemKey>;
        default: null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["itemSelectable"] ? SelectItemKey : Defaults["itemSelectable"] | SelectItemKey>;
        default: unknown extends Defaults["itemSelectable"] ? SelectItemKey : Defaults["itemSelectable"] | NonNullable<SelectItemKey>;
    };
    returnObject: unknown extends Defaults["returnObject"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"]>;
        default: unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"];
    };
};
export declare function transformItem(props: Omit<DataIteratorItemProps, 'items'>, item: any): DataIteratorItem;
export declare function transformItems(props: Omit<DataIteratorItemProps, 'items'>, items: DataIteratorItemProps['items']): DataIteratorItem<any>[];
export declare function useDataIteratorItems(props: DataIteratorItemProps): {
    items: import("vue").ComputedRef<DataIteratorItem<any>[]>;
};
