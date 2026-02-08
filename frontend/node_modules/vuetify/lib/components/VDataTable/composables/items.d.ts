// Types
import type { PropType, Ref } from 'vue';
import type { CellProps, DataTableItem, InternalDataTableHeader, RowProps } from '../types.js';
import type { SelectItemKey } from '../../../util/index.js';
export interface DataTableItemProps {
    items: any[];
    itemValue: SelectItemKey;
    itemSelectable: SelectItemKey;
    returnObject: boolean;
}
// Composables
export declare const makeDataTableItemsProps: <Defaults extends {
    items?: unknown;
    itemValue?: unknown;
    itemSelectable?: unknown;
    rowProps?: unknown;
    cellProps?: unknown;
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
    rowProps: unknown extends Defaults["rowProps"] ? PropType<RowProps<any>> : {
        type: PropType<unknown extends Defaults["rowProps"] ? RowProps<any> : Defaults["rowProps"] | RowProps<any>>;
        default: unknown extends Defaults["rowProps"] ? RowProps<any> : Defaults["rowProps"] | NonNullable<RowProps<any>>;
    };
    cellProps: unknown extends Defaults["cellProps"] ? PropType<CellProps<any>> : {
        type: PropType<unknown extends Defaults["cellProps"] ? CellProps<any> : Defaults["cellProps"] | CellProps<any>>;
        default: unknown extends Defaults["cellProps"] ? CellProps<any> : Defaults["cellProps"] | NonNullable<CellProps<any>>;
    };
    returnObject: unknown extends Defaults["returnObject"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"]>;
        default: unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"];
    };
};
export declare function transformItem(props: Omit<DataTableItemProps, 'items'>, item: any, index: number, columns: InternalDataTableHeader[]): DataTableItem;
export declare function transformItems(props: Omit<DataTableItemProps, 'items'>, items: DataTableItemProps['items'], columns: InternalDataTableHeader[]): DataTableItem[];
export declare function useDataTableItems(props: DataTableItemProps, columns: Ref<InternalDataTableHeader[]>): {
    items: import("vue").ComputedRef<DataTableItem<any>[]>;
};
