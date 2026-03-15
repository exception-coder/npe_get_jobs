// Styles

import { IconValue } from '../../composables/icons.js';
// Types
import type { InjectionKey, PropType } from 'vue';
import type { GroupProvide } from '../../composables/group.js';
import type { GenericProps } from '../../util/index.js';
export declare const VSlideGroupSymbol: InjectionKey<GroupProvide>;
interface SlideGroupSlot {
    next: GroupProvide['next'];
    prev: GroupProvide['prev'];
    select: GroupProvide['select'];
    isSelected: GroupProvide['isSelected'];
}
export type VSlideGroupSlots = {
    default: SlideGroupSlot;
    prev: SlideGroupSlot;
    next: SlideGroupSlot;
};
export declare const makeVSlideGroupProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    mobile?: unknown;
    mobileBreakpoint?: unknown;
    tag?: unknown;
    modelValue?: unknown;
    multiple?: unknown;
    mandatory?: unknown;
    max?: unknown;
    selectedClass?: unknown;
    disabled?: unknown;
    centerActive?: unknown;
    scrollToActive?: unknown;
    contentClass?: unknown;
    direction?: unknown;
    symbol?: unknown;
    nextIcon?: unknown;
    prevIcon?: unknown;
    showArrows?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    class: unknown extends Defaults["class"] ? PropType<any> : {
        type: PropType<unknown extends Defaults["class"] ? any : any>;
        default: unknown extends Defaults["class"] ? any : any;
    };
    style: unknown extends Defaults["style"] ? {
        type: PropType<import("vue").StyleValue>;
        default: null;
    } : Omit<{
        type: PropType<import("vue").StyleValue>;
        default: null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["style"] ? import("vue").StyleValue : Defaults["style"] | import("vue").StyleValue>;
        default: unknown extends Defaults["style"] ? import("vue").StyleValue : Defaults["style"] | NonNullable<import("vue").StyleValue>;
    };
    mobile: unknown extends Defaults["mobile"] ? Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<boolean | null>;
        default: NonNullable<boolean | null> | null;
    } : Omit<Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<boolean | null>;
        default: NonNullable<boolean | null> | null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["mobile"] ? boolean | null : boolean | Defaults["mobile"] | null>;
        default: unknown extends Defaults["mobile"] ? boolean | null : Defaults["mobile"] | NonNullable<boolean | null>;
    };
    mobileBreakpoint: unknown extends Defaults["mobileBreakpoint"] ? PropType<number | import("../../types.js").DisplayBreakpoint> : {
        type: PropType<unknown extends Defaults["mobileBreakpoint"] ? number | import("../../types.js").DisplayBreakpoint : number | Defaults["mobileBreakpoint"] | import("../../types.js").DisplayBreakpoint>;
        default: unknown extends Defaults["mobileBreakpoint"] ? number | import("../../types.js").DisplayBreakpoint : Defaults["mobileBreakpoint"] | NonNullable<number | import("../../types.js").DisplayBreakpoint>;
    };
    tag: unknown extends Defaults["tag"] ? {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    } : Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : string | Defaults["tag"] | import("../../util/index.js").JSXComponent>;
        default: unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : Defaults["tag"] | NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
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
    selectedClass: unknown extends Defaults["selectedClass"] ? {
        type: PropType<string>;
        default: string;
    } : Omit<{
        type: PropType<string>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"]>;
        default: unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    centerActive: unknown extends Defaults["centerActive"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["centerActive"] ? boolean : boolean | Defaults["centerActive"]>;
        default: unknown extends Defaults["centerActive"] ? boolean : boolean | Defaults["centerActive"];
    };
    scrollToActive: unknown extends Defaults["scrollToActive"] ? {
        type: BooleanConstructor;
        default: boolean;
    } : Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["scrollToActive"] ? boolean : boolean | Defaults["scrollToActive"]>;
        default: unknown extends Defaults["scrollToActive"] ? boolean : boolean | Defaults["scrollToActive"];
    };
    contentClass: unknown extends Defaults["contentClass"] ? null : {
        type: PropType<unknown extends Defaults["contentClass"] ? any : any>;
        default: unknown extends Defaults["contentClass"] ? any : any;
    };
    direction: unknown extends Defaults["direction"] ? {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    } : Omit<{
        type: PropType<"horizontal" | "vertical">;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["direction"] ? "horizontal" | "vertical" : "horizontal" | "vertical" | Defaults["direction"]>;
        default: unknown extends Defaults["direction"] ? "horizontal" | "vertical" : Defaults["direction"] | NonNullable<"horizontal" | "vertical">;
    };
    symbol: unknown extends Defaults["symbol"] ? {
        type: null;
        default: InjectionKey<GroupProvide>;
    } : Omit<{
        type: null;
        default: InjectionKey<GroupProvide>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["symbol"] ? any : any>;
        default: unknown extends Defaults["symbol"] ? any : any;
    };
    nextIcon: unknown extends Defaults["nextIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["nextIcon"] ? IconValue : Defaults["nextIcon"] | IconValue>;
        default: unknown extends Defaults["nextIcon"] ? IconValue : Defaults["nextIcon"] | NonNullable<IconValue>;
    };
    prevIcon: unknown extends Defaults["prevIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["prevIcon"] ? IconValue : Defaults["prevIcon"] | IconValue>;
        default: unknown extends Defaults["prevIcon"] ? IconValue : Defaults["prevIcon"] | NonNullable<IconValue>;
    };
    showArrows: unknown extends Defaults["showArrows"] ? {
        type: (BooleanConstructor | StringConstructor)[];
        validator: (v: any) => boolean;
    } : Omit<{
        type: (BooleanConstructor | StringConstructor)[];
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["showArrows"] ? string | boolean : string | boolean | Defaults["showArrows"]>;
        default: unknown extends Defaults["showArrows"] ? string | boolean : Defaults["showArrows"] | NonNullable<string | boolean>;
    };
};
export declare const VSlideGroup: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        mobile: boolean | null;
        tag: string | import("../../util/index.js").JSXComponent;
        multiple: boolean;
        selectedClass: string;
        disabled: boolean;
        centerActive: boolean;
        scrollToActive: boolean;
        direction: "horizontal" | "vertical";
        symbol: any;
        nextIcon: IconValue;
        prevIcon: IconValue;
    } & {
        class?: any;
        mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
        mandatory?: "force" | boolean | undefined;
        max?: number | undefined;
        contentClass?: any;
        showArrows?: string | boolean | undefined;
    } & {}, {
        selected: import("vue").Ref<readonly string[], readonly string[]>;
        scrollTo: (location: "next" | "prev") => void;
        scrollOffset: import("vue").ShallowRef<number, number>;
        focus: (location?: "first" | "last" | "next" | "prev" | undefined) => void;
        hasPrev: import("vue").ComputedRef<boolean>;
        hasNext: import("vue").ComputedRef<boolean>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        "update:modelValue": (value: any) => true;
    }, "$children" | "modelValue" | "update:modelValue" | "v-slot:default" | "v-slot:next" | "v-slot:prev" | "v-slots">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        mobile: boolean | null;
        tag: string | import("../../util/index.js").JSXComponent;
        multiple: boolean;
        selectedClass: string;
        disabled: boolean;
        centerActive: boolean;
        scrollToActive: boolean;
        direction: "horizontal" | "vertical";
        symbol: any;
        nextIcon: IconValue;
        prevIcon: IconValue;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: SlideGroupSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        prev: (arg: SlideGroupSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        next: (arg: SlideGroupSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        mobile: boolean | null;
        tag: string | import("../../util/index.js").JSXComponent;
        multiple: boolean;
        selectedClass: string;
        disabled: boolean;
        centerActive: boolean;
        scrollToActive: boolean;
        direction: "horizontal" | "vertical";
        symbol: any;
        nextIcon: IconValue;
        prevIcon: IconValue;
    } & {
        class?: any;
        mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
        mandatory?: "force" | boolean | undefined;
        max?: number | undefined;
        contentClass?: any;
        showArrows?: string | boolean | undefined;
    } & {}, {
        selected: import("vue").Ref<readonly string[], readonly string[]>;
        scrollTo: (location: "next" | "prev") => void;
        scrollOffset: import("vue").ShallowRef<number, number>;
        focus: (location?: "first" | "last" | "next" | "prev" | undefined) => void;
        hasPrev: import("vue").ComputedRef<boolean>;
        hasNext: import("vue").ComputedRef<boolean>;
    }, {}, {}, {}, {
        style: import("vue").StyleValue;
        mobile: boolean | null;
        tag: string | import("../../util/index.js").JSXComponent;
        multiple: boolean;
        selectedClass: string;
        disabled: boolean;
        centerActive: boolean;
        scrollToActive: boolean;
        direction: "horizontal" | "vertical";
        symbol: any;
        nextIcon: IconValue;
        prevIcon: IconValue;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    mobile: boolean | null;
    tag: string | import("../../util/index.js").JSXComponent;
    multiple: boolean;
    selectedClass: string;
    disabled: boolean;
    centerActive: boolean;
    scrollToActive: boolean;
    direction: "horizontal" | "vertical";
    symbol: any;
    nextIcon: IconValue;
    prevIcon: IconValue;
} & {
    class?: any;
    mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
    mandatory?: "force" | boolean | undefined;
    max?: number | undefined;
    contentClass?: any;
    showArrows?: string | boolean | undefined;
} & {}, {
    selected: import("vue").Ref<readonly string[], readonly string[]>;
    scrollTo: (location: "next" | "prev") => void;
    scrollOffset: import("vue").ShallowRef<number, number>;
    focus: (location?: "first" | "last" | "next" | "prev" | undefined) => void;
    hasPrev: import("vue").ComputedRef<boolean>;
    hasNext: import("vue").ComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    "update:modelValue": (value: any) => true;
}, "$children" | "modelValue" | "update:modelValue" | "v-slot:default" | "v-slot:next" | "v-slot:prev" | "v-slots">, string, {
    style: import("vue").StyleValue;
    mobile: boolean | null;
    tag: string | import("../../util/index.js").JSXComponent;
    multiple: boolean;
    selectedClass: string;
    disabled: boolean;
    centerActive: boolean;
    scrollToActive: boolean;
    direction: "horizontal" | "vertical";
    symbol: any;
    nextIcon: IconValue;
    prevIcon: IconValue;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: SlideGroupSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    prev: (arg: SlideGroupSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    next: (arg: SlideGroupSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T>(props: {
    modelValue?: T | undefined;
    "onUpdate:modelValue"?: ((value: T) => void) | undefined;
}, slots: VSlideGroupSlots) => GenericProps<{
    modelValue?: T | undefined;
    "onUpdate:modelValue"?: ((value: T) => void) | undefined;
}, VSlideGroupSlots>) & import("../../util/index.js").FilterPropsOptions<{
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    mobile: Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<boolean | null>;
        default: NonNullable<boolean | null> | null;
    };
    mobileBreakpoint: PropType<number | import("../../types.js").DisplayBreakpoint>;
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: PropType<"force" | boolean>;
    max: NumberConstructor;
    selectedClass: {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    centerActive: BooleanConstructor;
    scrollToActive: {
        type: BooleanConstructor;
        default: boolean;
    };
    contentClass: null;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    symbol: {
        type: null;
        default: InjectionKey<GroupProvide>;
    };
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    showArrows: {
        type: (BooleanConstructor | StringConstructor)[];
        validator: (v: any) => boolean;
    };
}, import("vue").ExtractPropTypes<{
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    mobile: Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<boolean | null>;
        default: NonNullable<boolean | null> | null;
    };
    mobileBreakpoint: PropType<number | import("../../types.js").DisplayBreakpoint>;
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: PropType<"force" | boolean>;
    max: NumberConstructor;
    selectedClass: {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    centerActive: BooleanConstructor;
    scrollToActive: {
        type: BooleanConstructor;
        default: boolean;
    };
    contentClass: null;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    symbol: {
        type: null;
        default: InjectionKey<GroupProvide>;
    };
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    showArrows: {
        type: (BooleanConstructor | StringConstructor)[];
        validator: (v: any) => boolean;
    };
}>>;
export type VSlideGroup = InstanceType<typeof VSlideGroup>;

