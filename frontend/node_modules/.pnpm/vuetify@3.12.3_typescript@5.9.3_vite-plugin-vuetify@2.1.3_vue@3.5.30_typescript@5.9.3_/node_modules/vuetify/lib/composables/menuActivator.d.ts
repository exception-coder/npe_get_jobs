// Types
import type { MaybeRefOrGetter } from 'vue';
// Types
export interface MenuActivatorProps {
    closeText: string;
    openText: string;
}
// Composables
export declare const makeMenuActivatorProps: <Defaults extends {
    closeText?: unknown;
    openText?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    closeText: unknown extends Defaults["closeText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["closeText"] ? string : string | Defaults["closeText"]>;
        default: unknown extends Defaults["closeText"] ? string : string | Defaults["closeText"];
    };
    openText: unknown extends Defaults["openText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["openText"] ? string : string | Defaults["openText"]>;
        default: unknown extends Defaults["openText"] ? string : string | Defaults["openText"];
    };
};
export declare function useMenuActivator(props: MenuActivatorProps, isOpen: MaybeRefOrGetter<boolean>): {
    menuId: import("vue").ComputedRef<string>;
    ariaExpanded: Readonly<import("vue").Ref<boolean, boolean>>;
    ariaControls: Readonly<import("vue").Ref<string, string>>;
};
