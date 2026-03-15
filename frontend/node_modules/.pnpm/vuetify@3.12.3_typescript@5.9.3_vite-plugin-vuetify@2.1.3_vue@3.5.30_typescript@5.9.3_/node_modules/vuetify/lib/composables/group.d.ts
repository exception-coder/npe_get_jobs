// Types
import type { ComponentInternalInstance, ExtractPropTypes, InjectionKey, PropType, Ref } from 'vue';
import type { EventProp } from '../util/index.js';
export interface GroupItem {
    id: string;
    value: Ref<unknown>;
    disabled: Ref<boolean | undefined>;
    useIndexAsValue?: boolean;
}
export interface GroupProps {
    disabled: boolean;
    modelValue: unknown;
    multiple?: boolean;
    mandatory?: boolean | 'force' | undefined;
    max?: number | undefined;
    selectedClass: string | undefined;
    'onUpdate:modelValue': EventProp<[unknown]> | undefined;
}
export interface GroupProvide {
    register: (item: GroupItem, cmp: ComponentInternalInstance) => void;
    unregister: (id: string) => void;
    select: (id: string, value: boolean) => void;
    selected: Ref<Readonly<string[]>>;
    isSelected: (id: string) => boolean;
    prev: () => void;
    next: () => void;
    selectedClass: Ref<string | undefined>;
    items: Readonly<Ref<{
        id: string;
        value: unknown;
        disabled: boolean | undefined;
    }[]>>;
    disabled: Ref<boolean | undefined>;
    getItemIndex: (value: unknown) => number;
}
export interface GroupItemProvide {
    id: string;
    isSelected: Ref<boolean>;
    isFirst: Ref<boolean>;
    isLast: Ref<boolean>;
    toggle: () => void;
    select: (value: boolean) => void;
    selectedClass: Ref<(string | undefined)[] | false>;
    value: Ref<unknown>;
    disabled: Ref<boolean | undefined>;
    group: GroupProvide;
    register: () => void;
    unregister: () => void;
}
export declare const makeGroupProps: <Defaults extends {
    modelValue?: unknown;
    multiple?: unknown;
    mandatory?: unknown;
    max?: unknown;
    selectedClass?: unknown;
    disabled?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: null;
        default: undefined;
    } : Omit<{
        type: null;
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["modelValue"] ? any : any>;
        default: unknown extends Defaults["modelValue"] ? any : any;
    };
    multiple: unknown extends Defaults["multiple"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["multiple"] ? boolean : boolean | Defaults["multiple"]>;
        default: unknown extends Defaults["multiple"] ? boolean : boolean | Defaults["multiple"];
    };
    mandatory: unknown extends Defaults["mandatory"] ? PropType<"force" | boolean> : {
        type: PropType<unknown extends Defaults["mandatory"] ? "force" | boolean : "force" | boolean | Defaults["mandatory"]>;
        default: unknown extends Defaults["mandatory"] ? "force" | boolean : Defaults["mandatory"] | NonNullable<"force" | boolean>;
    };
    max: unknown extends Defaults["max"] ? NumberConstructor : {
        type: PropType<unknown extends Defaults["max"] ? number : number | Defaults["max"]>;
        default: unknown extends Defaults["max"] ? number : number | Defaults["max"];
    };
    selectedClass: unknown extends Defaults["selectedClass"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"]>;
        default: unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
};
export declare const makeGroupItemProps: <Defaults extends {
    value?: unknown;
    disabled?: unknown;
    selectedClass?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    value: unknown extends Defaults["value"] ? null : {
        type: PropType<unknown extends Defaults["value"] ? any : any>;
        default: unknown extends Defaults["value"] ? any : any;
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    selectedClass: unknown extends Defaults["selectedClass"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"]>;
        default: unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"];
    };
};
export interface GroupItemProps extends ExtractPropTypes<ReturnType<typeof makeGroupItemProps>> {
    'onGroup:selected': EventProp<[{
        value: boolean;
    }]> | undefined;
}
// Composables
export declare function useGroupItem(props: GroupItemProps, injectKey: InjectionKey<GroupProvide>, required?: true): GroupItemProvide;
export declare function useGroupItem(props: GroupItemProps, injectKey: InjectionKey<GroupProvide>, required: false): GroupItemProvide | null;
export declare function useGroup(props: GroupProps, injectKey: InjectionKey<GroupProvide>): GroupProvide;
