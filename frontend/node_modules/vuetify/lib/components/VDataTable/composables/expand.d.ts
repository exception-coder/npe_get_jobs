// Types
import type { InjectionKey, PropType, Ref } from 'vue';
import type { DataTableItem } from '../types.js';
export declare const makeDataTableExpandProps: <Defaults extends {
    expandOnClick?: unknown;
    showExpand?: unknown;
    expanded?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    expandOnClick: unknown extends Defaults["expandOnClick"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["expandOnClick"] ? boolean : boolean | Defaults["expandOnClick"]>;
        default: unknown extends Defaults["expandOnClick"] ? boolean : boolean | Defaults["expandOnClick"];
    };
    showExpand: unknown extends Defaults["showExpand"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["showExpand"] ? boolean : boolean | Defaults["showExpand"]>;
        default: unknown extends Defaults["showExpand"] ? boolean : boolean | Defaults["showExpand"];
    };
    expanded: unknown extends Defaults["expanded"] ? {
        type: PropType<readonly string[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<readonly string[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["expanded"] ? readonly string[] : readonly string[] | Defaults["expanded"]>;
        default: unknown extends Defaults["expanded"] ? readonly string[] : readonly string[] | Defaults["expanded"];
    };
};
export declare const VDataTableExpandedKey: InjectionKey<{
    expand: (item: DataTableItem, value: boolean) => void;
    expanded: Ref<Set<string>>;
    expandOnClick: Ref<boolean | undefined>;
    isExpanded: (item: DataTableItem) => boolean;
    toggleExpand: (item: DataTableItem) => void;
}>;
type ExpandProps = {
    expandOnClick: boolean;
    expanded: readonly string[];
    'onUpdate:expanded': ((value: any[]) => void) | undefined;
};
export declare function provideExpanded(props: ExpandProps): {
    expand: (item: DataTableItem<any>, value: boolean) => void;
    expanded: Ref<Set<string>, Set<string>> & {
        readonly externalValue: readonly string[];
    };
    expandOnClick: Readonly<Ref<boolean, boolean>>;
    isExpanded: (item: DataTableItem<any>) => boolean;
    toggleExpand: (item: DataTableItem<any>) => void;
};
export declare function useExpanded(): {
    expand: (item: DataTableItem<any>, value: boolean) => void;
    expanded: Ref<Set<string>, Set<string>>;
    expandOnClick: Ref<boolean | undefined, boolean | undefined>;
    isExpanded: (item: DataTableItem<any>) => boolean;
    toggleExpand: (item: DataTableItem<any>) => void;
};

