// Types
import type { InjectionKey, MaybeRefOrGetter, PropType, Ref } from 'vue';
import type { ActiveStrategy } from './activeStrategies.js';
import type { OpenStrategy } from './openStrategies.js';
import type { SelectStrategy } from './selectStrategies.js';
import type { EventProp } from '../../util/index.js';
export type ActiveStrategyProp = 'single-leaf' | 'leaf' | 'independent' | 'single-independent' | ActiveStrategy | ((mandatory: boolean) => ActiveStrategy);
export type SelectStrategyProp = 'single-leaf' | 'leaf' | 'independent' | 'single-independent' | 'classic' | 'trunk' | SelectStrategy | ((mandatory: boolean) => SelectStrategy);
export type OpenStrategyProp = 'single' | 'multiple' | 'list' | OpenStrategy;
export interface NestedProps {
    activatable: boolean;
    selectable: boolean;
    activeStrategy: ActiveStrategyProp | undefined;
    selectStrategy: SelectStrategyProp | undefined;
    openStrategy: OpenStrategyProp | undefined;
    activated: any;
    selected: any;
    opened: any;
    mandatory: boolean;
    'onUpdate:activated': EventProp<[any]> | undefined;
    'onUpdate:selected': EventProp<[any]> | undefined;
    'onUpdate:opened': EventProp<[any]> | undefined;
}
type NestedProvide = {
    id: Ref<unknown>;
    isGroupActivator?: boolean;
    root: {
        children: Ref<Map<unknown, unknown[]>>;
        parents: Ref<Map<unknown, unknown>>;
        disabled: Ref<Set<unknown>>;
        activatable: Ref<boolean>;
        selectable: Ref<boolean>;
        opened: Ref<Set<unknown>>;
        activated: Ref<Set<unknown>>;
        selected: Ref<Map<unknown, 'on' | 'off' | 'indeterminate'>>;
        selectedValues: Ref<unknown[]>;
        register: (id: unknown, parentId: unknown, isDisabled: boolean, isGroup?: boolean) => void;
        unregister: (id: unknown) => void;
        open: (id: unknown, value: boolean, event?: Event) => void;
        activate: (id: unknown, value: boolean, event?: Event) => void;
        select: (id: unknown, value: boolean, event?: Event) => void;
        openOnSelect: (id: unknown, value: boolean, event?: Event) => void;
        getPath: (id: unknown) => unknown[];
    };
};
export declare const VNestedSymbol: InjectionKey<NestedProvide>;
export declare const emptyNested: NestedProvide;
export declare const makeNestedProps: <Defaults extends {
    activatable?: unknown;
    selectable?: unknown;
    activeStrategy?: unknown;
    selectStrategy?: unknown;
    openStrategy?: unknown;
    opened?: unknown;
    activated?: unknown;
    selected?: unknown;
    mandatory?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    activatable: unknown extends Defaults["activatable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["activatable"] ? boolean : boolean | Defaults["activatable"]>;
        default: unknown extends Defaults["activatable"] ? boolean : boolean | Defaults["activatable"];
    };
    selectable: unknown extends Defaults["selectable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["selectable"] ? boolean : boolean | Defaults["selectable"]>;
        default: unknown extends Defaults["selectable"] ? boolean : boolean | Defaults["selectable"];
    };
    activeStrategy: unknown extends Defaults["activeStrategy"] ? PropType<ActiveStrategyProp> : {
        type: PropType<unknown extends Defaults["activeStrategy"] ? ActiveStrategyProp : Defaults["activeStrategy"] | ActiveStrategyProp>;
        default: unknown extends Defaults["activeStrategy"] ? ActiveStrategyProp : Defaults["activeStrategy"] | NonNullable<ActiveStrategyProp>;
    };
    selectStrategy: unknown extends Defaults["selectStrategy"] ? PropType<SelectStrategyProp> : {
        type: PropType<unknown extends Defaults["selectStrategy"] ? SelectStrategyProp : Defaults["selectStrategy"] | SelectStrategyProp>;
        default: unknown extends Defaults["selectStrategy"] ? SelectStrategyProp : Defaults["selectStrategy"] | NonNullable<SelectStrategyProp>;
    };
    openStrategy: unknown extends Defaults["openStrategy"] ? PropType<OpenStrategyProp> : {
        type: PropType<unknown extends Defaults["openStrategy"] ? OpenStrategyProp : Defaults["openStrategy"] | OpenStrategyProp>;
        default: unknown extends Defaults["openStrategy"] ? OpenStrategyProp : Defaults["openStrategy"] | NonNullable<OpenStrategyProp>;
    };
    opened: unknown extends Defaults["opened"] ? null : {
        type: PropType<unknown extends Defaults["opened"] ? any : any>;
        default: unknown extends Defaults["opened"] ? any : any;
    };
    activated: unknown extends Defaults["activated"] ? null : {
        type: PropType<unknown extends Defaults["activated"] ? any : any>;
        default: unknown extends Defaults["activated"] ? any : any;
    };
    selected: unknown extends Defaults["selected"] ? null : {
        type: PropType<unknown extends Defaults["selected"] ? any : any>;
        default: unknown extends Defaults["selected"] ? any : any;
    };
    mandatory: unknown extends Defaults["mandatory"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["mandatory"] ? boolean : boolean | Defaults["mandatory"]>;
        default: unknown extends Defaults["mandatory"] ? boolean : boolean | Defaults["mandatory"];
    };
};
export declare const useNested: (props: NestedProps) => {
    children: Ref<Map<unknown, unknown[]>, Map<unknown, unknown[]>>;
    parents: Ref<Map<unknown, unknown>, Map<unknown, unknown>>;
    disabled: Ref<Set<unknown>, Set<unknown>>;
    activatable: Ref<boolean, boolean>;
    selectable: Ref<boolean, boolean>;
    opened: Ref<Set<unknown>, Set<unknown>>;
    activated: Ref<Set<unknown>, Set<unknown>>;
    selected: Ref<Map<unknown, "indeterminate" | "off" | "on">, Map<unknown, "indeterminate" | "off" | "on">>;
    selectedValues: Ref<unknown[], unknown[]>;
    register: (id: unknown, parentId: unknown, isDisabled: boolean, isGroup?: boolean | undefined) => void;
    unregister: (id: unknown) => void;
    open: (id: unknown, value: boolean, event?: Event | undefined) => void;
    activate: (id: unknown, value: boolean, event?: Event | undefined) => void;
    select: (id: unknown, value: boolean, event?: Event | undefined) => void;
    openOnSelect: (id: unknown, value: boolean, event?: Event | undefined) => void;
    getPath: (id: unknown) => unknown[];
};
export declare const useNestedItem: (id: unknown, isDisabled: MaybeRefOrGetter<boolean>, isGroup: boolean) => {
    root: {
        children: Ref<Map<unknown, unknown[]>, Map<unknown, unknown[]>>;
        parents: Ref<Map<unknown, unknown>, Map<unknown, unknown>>;
        disabled: Ref<Set<unknown>, Set<unknown>>;
        activatable: Ref<boolean, boolean>;
        selectable: Ref<boolean, boolean>;
        opened: Ref<Set<unknown>, Set<unknown>>;
        activated: Ref<Set<unknown>, Set<unknown>>;
        selected: Ref<Map<unknown, "indeterminate" | "off" | "on">, Map<unknown, "indeterminate" | "off" | "on">>;
        selectedValues: Ref<unknown[], unknown[]>;
        register: (id: unknown, parentId: unknown, isDisabled: boolean, isGroup?: boolean | undefined) => void;
        unregister: (id: unknown) => void;
        open: (id: unknown, value: boolean, event?: Event | undefined) => void;
        activate: (id: unknown, value: boolean, event?: Event | undefined) => void;
        select: (id: unknown, value: boolean, event?: Event | undefined) => void;
        openOnSelect: (id: unknown, value: boolean, event?: Event | undefined) => void;
        getPath: (id: unknown) => unknown[];
    };
    id: import("vue").ComputedRef<{} | null>;
    open: (open: boolean, e: Event) => void;
    openOnSelect: (open: boolean, e?: Event | undefined) => void;
    isOpen: import("vue").ComputedRef<boolean>;
    parent: import("vue").ComputedRef<unknown>;
    activate: (activated: boolean, e?: Event | undefined) => void;
    isActivated: import("vue").ComputedRef<boolean>;
    select: (selected: boolean, e?: Event | undefined) => void;
    isSelected: import("vue").ComputedRef<boolean>;
    isIndeterminate: import("vue").ComputedRef<boolean>;
    isLeaf: import("vue").ComputedRef<boolean>;
    isGroupActivator: boolean | undefined;
};
export declare const useNestedGroupActivator: () => void;

