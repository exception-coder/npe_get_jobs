// Types
import type { ComponentPublicInstance, PropType, Ref } from 'vue';
import type { DelayProps } from '../../composables/delay.js';
interface ActivatorProps extends DelayProps {
    target: 'parent' | 'cursor' | (string & {}) | Element | ComponentPublicInstance | [x: number, y: number] | undefined;
    activator: 'parent' | (string & {}) | Element | ComponentPublicInstance | undefined;
    activatorProps: Record<string, any>;
    openOnClick: boolean | undefined;
    openOnHover: boolean;
    openOnFocus: boolean | undefined;
    closeOnContentClick: boolean;
}
export declare const makeActivatorProps: <Defaults extends {
    closeDelay?: unknown;
    openDelay?: unknown;
    target?: unknown;
    activator?: unknown;
    activatorProps?: unknown;
    openOnClick?: unknown;
    openOnHover?: unknown;
    openOnFocus?: unknown;
    closeOnContentClick?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    closeDelay: unknown extends Defaults["closeDelay"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["closeDelay"] ? string | number : string | number | Defaults["closeDelay"]>;
        default: unknown extends Defaults["closeDelay"] ? string | number : Defaults["closeDelay"] | NonNullable<string | number>;
    };
    openDelay: unknown extends Defaults["openDelay"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["openDelay"] ? string | number : string | number | Defaults["openDelay"]>;
        default: unknown extends Defaults["openDelay"] ? string | number : Defaults["openDelay"] | NonNullable<string | number>;
    };
    target: unknown extends Defaults["target"] ? PropType<"cursor" | "parent" | Element | [x: number, y: number] | ComponentPublicInstance | (string & {}) | undefined> : {
        type: PropType<unknown extends Defaults["target"] ? "cursor" | "parent" | Element | [x: number, y: number] | ComponentPublicInstance | (string & {}) | undefined : "cursor" | "parent" | Element | [x: number, y: number] | Defaults["target"] | ComponentPublicInstance | (string & {}) | undefined>;
        default: unknown extends Defaults["target"] ? "cursor" | "parent" | Element | [x: number, y: number] | ComponentPublicInstance | (string & {}) | undefined : Defaults["target"] | NonNullable<"cursor" | "parent" | Element | [x: number, y: number] | ComponentPublicInstance | (string & {}) | undefined>;
    };
    activator: unknown extends Defaults["activator"] ? PropType<"parent" | Element | ComponentPublicInstance | (string & {}) | undefined> : {
        type: PropType<unknown extends Defaults["activator"] ? "parent" | Element | ComponentPublicInstance | (string & {}) | undefined : "parent" | Element | Defaults["activator"] | ComponentPublicInstance | (string & {}) | undefined>;
        default: unknown extends Defaults["activator"] ? "parent" | Element | ComponentPublicInstance | (string & {}) | undefined : Defaults["activator"] | NonNullable<"parent" | Element | ComponentPublicInstance | (string & {}) | undefined>;
    };
    activatorProps: unknown extends Defaults["activatorProps"] ? {
        type: PropType<Record<string, any>>;
        default: () => {};
    } : Omit<{
        type: PropType<Record<string, any>>;
        default: () => {};
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["activatorProps"] ? Record<string, any> : Record<string, any> | Defaults["activatorProps"]>;
        default: unknown extends Defaults["activatorProps"] ? Record<string, any> : Record<string, any> | Defaults["activatorProps"];
    };
    openOnClick: unknown extends Defaults["openOnClick"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["openOnClick"] ? boolean : boolean | Defaults["openOnClick"]>;
        default: unknown extends Defaults["openOnClick"] ? boolean : boolean | Defaults["openOnClick"];
    };
    openOnHover: unknown extends Defaults["openOnHover"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["openOnHover"] ? boolean : boolean | Defaults["openOnHover"]>;
        default: unknown extends Defaults["openOnHover"] ? boolean : boolean | Defaults["openOnHover"];
    };
    openOnFocus: unknown extends Defaults["openOnFocus"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["openOnFocus"] ? boolean : boolean | Defaults["openOnFocus"]>;
        default: unknown extends Defaults["openOnFocus"] ? boolean : boolean | Defaults["openOnFocus"];
    };
    closeOnContentClick: unknown extends Defaults["closeOnContentClick"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["closeOnContentClick"] ? boolean : boolean | Defaults["closeOnContentClick"]>;
        default: unknown extends Defaults["closeOnContentClick"] ? boolean : boolean | Defaults["closeOnContentClick"];
    };
};
export declare function useActivator(props: ActivatorProps, { isActive, isTop, contentEl }: {
    isActive: Ref<boolean>;
    isTop: Ref<boolean>;
    contentEl: Ref<HTMLElement | undefined>;
}): {
    activatorEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    activatorRef: import("../../util/index.js").TemplateRef;
    target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
    targetEl: import("vue").ComputedRef<HTMLElement | undefined>;
    targetRef: import("../../util/index.js").TemplateRef;
    activatorEvents: import("vue").ComputedRef<Partial<{
        onClick: (e: MouseEvent) => void;
        onMouseenter: (e: MouseEvent) => void;
        onMouseleave: (e: MouseEvent) => void;
        onFocus: (e: FocusEvent) => void;
        onBlur: (e: FocusEvent) => void;
    }>>;
    contentEvents: import("vue").ComputedRef<Record<string, EventListener>>;
    scrimEvents: import("vue").ComputedRef<Record<string, EventListener>>;
};

