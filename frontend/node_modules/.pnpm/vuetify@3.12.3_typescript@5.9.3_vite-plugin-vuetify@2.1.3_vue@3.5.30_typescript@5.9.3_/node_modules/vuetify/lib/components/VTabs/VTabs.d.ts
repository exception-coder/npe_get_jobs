// Styles

// Types
import type { PropType } from 'vue';
import type { GenericProps } from '../../util/index.js';
export type TabItem = string | number | Record<string, any>;
export type VTabsSlot<T> = {
    item: T;
};
export type VTabsSlots<T> = {
    default: never;
    tab: VTabsSlot<T>;
    item: VTabsSlot<T>;
    window: never;
    prev: never;
    next: never;
} & {
    [key: `tab.${string}`]: VTabsSlot<T>;
    [key: `item.${string}`]: VTabsSlot<T>;
};
export declare const makeVTabsProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    mobile?: unknown;
    mobileBreakpoint?: unknown;
    density?: unknown;
    tag?: unknown;
    modelValue?: unknown;
    multiple?: unknown;
    mandatory?: unknown;
    max?: unknown;
    selectedClass?: unknown;
    disabled?: unknown;
    spaced?: unknown;
    centerActive?: unknown;
    scrollToActive?: unknown;
    contentClass?: unknown;
    direction?: unknown;
    symbol?: unknown;
    nextIcon?: unknown;
    prevIcon?: unknown;
    showArrows?: unknown;
    sliderTransition?: unknown;
    sliderTransitionDuration?: unknown;
    alignTabs?: unknown;
    color?: unknown;
    fixedTabs?: unknown;
    items?: unknown;
    stacked?: unknown;
    bgColor?: unknown;
    grow?: unknown;
    height?: unknown;
    hideSlider?: unknown;
    inset?: unknown;
    insetPadding?: unknown;
    insetRadius?: unknown;
    sliderColor?: unknown;
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
    density: unknown extends Defaults["density"] ? {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["density"] ? import("../../composables/density.js").Density : Defaults["density"] | import("../../composables/density.js").Density>;
        default: unknown extends Defaults["density"] ? import("../../composables/density.js").Density : Defaults["density"] | NonNullable<import("../../composables/density.js").Density>;
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
    mandatory: unknown extends Defaults["mandatory"] ? {
        type: PropType<"force" | boolean>;
        default: NonNullable<"force" | boolean>;
    } : Omit<{
        type: PropType<"force" | boolean>;
        default: NonNullable<"force" | boolean>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["mandatory"] ? "force" | boolean : "force" | boolean | Defaults["mandatory"]>;
        default: unknown extends Defaults["mandatory"] ? "force" | boolean : Defaults["mandatory"] | NonNullable<"force" | boolean>;
    };
    max: unknown extends Defaults["max"] ? NumberConstructor : {
        type: PropType<unknown extends Defaults["max"] ? number : number | Defaults["max"]>;
        default: unknown extends Defaults["max"] ? number : number | Defaults["max"];
    };
    selectedClass: unknown extends Defaults["selectedClass"] ? Omit<{
        type: PropType<string>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<string>;
        default: string;
    } : Omit<Omit<{
        type: PropType<string>;
        default: string;
    }, "default" | "type"> & {
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
    spaced: unknown extends Defaults["spaced"] ? PropType<"both" | "end" | "start"> : {
        type: PropType<unknown extends Defaults["spaced"] ? "both" | "end" | "start" : "both" | "end" | "start" | Defaults["spaced"]>;
        default: unknown extends Defaults["spaced"] ? "both" | "end" | "start" : Defaults["spaced"] | NonNullable<"both" | "end" | "start">;
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
        default: import("vue").InjectionKey<import("../../composables/group.js").GroupProvide>;
    } : Omit<{
        type: null;
        default: import("vue").InjectionKey<import("../../composables/group.js").GroupProvide>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["symbol"] ? any : any>;
        default: unknown extends Defaults["symbol"] ? any : any;
    };
    nextIcon: unknown extends Defaults["nextIcon"] ? {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["nextIcon"] ? import("../../composables/icons.js").IconValue : Defaults["nextIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["nextIcon"] ? import("../../composables/icons.js").IconValue : Defaults["nextIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    prevIcon: unknown extends Defaults["prevIcon"] ? {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["prevIcon"] ? import("../../composables/icons.js").IconValue : Defaults["prevIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["prevIcon"] ? import("../../composables/icons.js").IconValue : Defaults["prevIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
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
    sliderTransition: unknown extends Defaults["sliderTransition"] ? PropType<"fade" | "grow" | "shift"> : {
        type: PropType<unknown extends Defaults["sliderTransition"] ? "fade" | "grow" | "shift" : "fade" | "grow" | "shift" | Defaults["sliderTransition"]>;
        default: unknown extends Defaults["sliderTransition"] ? "fade" | "grow" | "shift" : Defaults["sliderTransition"] | NonNullable<"fade" | "grow" | "shift">;
    };
    sliderTransitionDuration: unknown extends Defaults["sliderTransitionDuration"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["sliderTransitionDuration"] ? string | number : string | number | Defaults["sliderTransitionDuration"]>;
        default: unknown extends Defaults["sliderTransitionDuration"] ? string | number : Defaults["sliderTransitionDuration"] | NonNullable<string | number>;
    };
    alignTabs: unknown extends Defaults["alignTabs"] ? {
        type: PropType<"center" | "end" | "start" | "title">;
        default: string;
    } : Omit<{
        type: PropType<"center" | "end" | "start" | "title">;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["alignTabs"] ? "center" | "end" | "start" | "title" : "center" | "end" | "start" | "title" | Defaults["alignTabs"]>;
        default: unknown extends Defaults["alignTabs"] ? "center" | "end" | "start" | "title" : Defaults["alignTabs"] | NonNullable<"center" | "end" | "start" | "title">;
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    fixedTabs: unknown extends Defaults["fixedTabs"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["fixedTabs"] ? boolean : boolean | Defaults["fixedTabs"]>;
        default: unknown extends Defaults["fixedTabs"] ? boolean : boolean | Defaults["fixedTabs"];
    };
    items: unknown extends Defaults["items"] ? {
        type: PropType<readonly TabItem[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<readonly TabItem[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["items"] ? readonly TabItem[] : readonly TabItem[] | Defaults["items"]>;
        default: unknown extends Defaults["items"] ? readonly TabItem[] : readonly TabItem[] | Defaults["items"];
    };
    stacked: unknown extends Defaults["stacked"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["stacked"] ? boolean : boolean | Defaults["stacked"]>;
        default: unknown extends Defaults["stacked"] ? boolean : boolean | Defaults["stacked"];
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    grow: unknown extends Defaults["grow"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["grow"] ? boolean : boolean | Defaults["grow"]>;
        default: unknown extends Defaults["grow"] ? boolean : boolean | Defaults["grow"];
    };
    height: unknown extends Defaults["height"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : Defaults["height"] | NonNullable<string | number>;
    };
    hideSlider: unknown extends Defaults["hideSlider"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideSlider"] ? boolean : boolean | Defaults["hideSlider"]>;
        default: unknown extends Defaults["hideSlider"] ? boolean : boolean | Defaults["hideSlider"];
    };
    inset: unknown extends Defaults["inset"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["inset"] ? boolean : boolean | Defaults["inset"]>;
        default: unknown extends Defaults["inset"] ? boolean : boolean | Defaults["inset"];
    };
    insetPadding: unknown extends Defaults["insetPadding"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["insetPadding"] ? string | number : string | number | Defaults["insetPadding"]>;
        default: unknown extends Defaults["insetPadding"] ? string | number : Defaults["insetPadding"] | NonNullable<string | number>;
    };
    insetRadius: unknown extends Defaults["insetRadius"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["insetRadius"] ? string | number : string | number | Defaults["insetRadius"]>;
        default: unknown extends Defaults["insetRadius"] ? string | number : Defaults["insetRadius"] | NonNullable<string | number>;
    };
    sliderColor: unknown extends Defaults["sliderColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["sliderColor"] ? string : string | Defaults["sliderColor"]>;
        default: unknown extends Defaults["sliderColor"] ? string : string | Defaults["sliderColor"];
    };
};
export declare const VTabs: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        mobile: boolean | null;
        density: import("../../composables/density.js").Density;
        tag: string | import("../../util/index.js").JSXComponent;
        multiple: boolean;
        mandatory: "force" | boolean;
        selectedClass: string;
        disabled: boolean;
        centerActive: boolean;
        scrollToActive: boolean;
        direction: "horizontal" | "vertical";
        symbol: any;
        nextIcon: import("../../composables/icons.js").IconValue;
        prevIcon: import("../../composables/icons.js").IconValue;
        alignTabs: "center" | "end" | "start" | "title";
        fixedTabs: boolean;
        stacked: boolean;
        grow: boolean;
        hideSlider: boolean;
        inset: boolean;
    } & {
        class?: any;
        mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
        max?: number | undefined;
        spaced?: "both" | "end" | "start" | undefined;
        contentClass?: any;
        showArrows?: string | boolean | undefined;
        sliderTransition?: "fade" | "grow" | "shift" | undefined;
        sliderTransitionDuration?: string | number | undefined;
        color?: string | undefined;
        bgColor?: string | undefined;
        height?: string | number | undefined;
        insetPadding?: string | number | undefined;
        insetRadius?: string | number | undefined;
        sliderColor?: string | undefined;
    } & {}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        "update:modelValue": (v: unknown) => true;
    }, "$children" | "items" | "modelValue" | "update:modelValue" | "v-slot:default" | "v-slot:item" | "v-slot:next" | "v-slot:prev" | "v-slot:tab" | "v-slot:window" | "v-slots" | `v-slot:item.${string}` | `v-slot:tab.${string}`>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        mobile: boolean | null;
        density: import("../../composables/density.js").Density;
        tag: string | import("../../util/index.js").JSXComponent;
        multiple: boolean;
        mandatory: "force" | boolean;
        selectedClass: string;
        disabled: boolean;
        centerActive: boolean;
        scrollToActive: boolean;
        direction: "horizontal" | "vertical";
        symbol: any;
        nextIcon: import("../../composables/icons.js").IconValue;
        prevIcon: import("../../composables/icons.js").IconValue;
        alignTabs: "center" | "end" | "start" | "title";
        fixedTabs: boolean;
        stacked: boolean;
        grow: boolean;
        height: string | number;
        hideSlider: boolean;
        inset: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        [x: `tab.${string}`]: (arg: VTabsSlot<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        [x: `item.${string}`]: (arg: VTabsSlot<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        tab: (arg: VTabsSlot<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        item: (arg: VTabsSlot<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        window: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        prev: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        next: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        density: import("../../composables/density.js").Density;
        tag: string | import("../../util/index.js").JSXComponent;
        multiple: boolean;
        mandatory: "force" | boolean;
        selectedClass: string;
        disabled: boolean;
        centerActive: boolean;
        scrollToActive: boolean;
        direction: "horizontal" | "vertical";
        symbol: any;
        nextIcon: import("../../composables/icons.js").IconValue;
        prevIcon: import("../../composables/icons.js").IconValue;
        alignTabs: "center" | "end" | "start" | "title";
        fixedTabs: boolean;
        stacked: boolean;
        grow: boolean;
        hideSlider: boolean;
        inset: boolean;
    } & {
        class?: any;
        mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
        max?: number | undefined;
        spaced?: "both" | "end" | "start" | undefined;
        contentClass?: any;
        showArrows?: string | boolean | undefined;
        sliderTransition?: "fade" | "grow" | "shift" | undefined;
        sliderTransitionDuration?: string | number | undefined;
        color?: string | undefined;
        bgColor?: string | undefined;
        height?: string | number | undefined;
        insetPadding?: string | number | undefined;
        insetRadius?: string | number | undefined;
        sliderColor?: string | undefined;
    } & {}, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        mobile: boolean | null;
        density: import("../../composables/density.js").Density;
        tag: string | import("../../util/index.js").JSXComponent;
        multiple: boolean;
        mandatory: "force" | boolean;
        selectedClass: string;
        disabled: boolean;
        centerActive: boolean;
        scrollToActive: boolean;
        direction: "horizontal" | "vertical";
        symbol: any;
        nextIcon: import("../../composables/icons.js").IconValue;
        prevIcon: import("../../composables/icons.js").IconValue;
        alignTabs: "center" | "end" | "start" | "title";
        fixedTabs: boolean;
        stacked: boolean;
        grow: boolean;
        height: string | number;
        hideSlider: boolean;
        inset: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    mobile: boolean | null;
    density: import("../../composables/density.js").Density;
    tag: string | import("../../util/index.js").JSXComponent;
    multiple: boolean;
    mandatory: "force" | boolean;
    selectedClass: string;
    disabled: boolean;
    centerActive: boolean;
    scrollToActive: boolean;
    direction: "horizontal" | "vertical";
    symbol: any;
    nextIcon: import("../../composables/icons.js").IconValue;
    prevIcon: import("../../composables/icons.js").IconValue;
    alignTabs: "center" | "end" | "start" | "title";
    fixedTabs: boolean;
    stacked: boolean;
    grow: boolean;
    hideSlider: boolean;
    inset: boolean;
} & {
    class?: any;
    mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
    max?: number | undefined;
    spaced?: "both" | "end" | "start" | undefined;
    contentClass?: any;
    showArrows?: string | boolean | undefined;
    sliderTransition?: "fade" | "grow" | "shift" | undefined;
    sliderTransitionDuration?: string | number | undefined;
    color?: string | undefined;
    bgColor?: string | undefined;
    height?: string | number | undefined;
    insetPadding?: string | number | undefined;
    insetRadius?: string | number | undefined;
    sliderColor?: string | undefined;
} & {}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    "update:modelValue": (v: unknown) => true;
}, "$children" | "items" | "modelValue" | "update:modelValue" | "v-slot:default" | "v-slot:item" | "v-slot:next" | "v-slot:prev" | "v-slot:tab" | "v-slot:window" | "v-slots" | `v-slot:item.${string}` | `v-slot:tab.${string}`>, string, {
    style: import("vue").StyleValue;
    mobile: boolean | null;
    density: import("../../composables/density.js").Density;
    tag: string | import("../../util/index.js").JSXComponent;
    multiple: boolean;
    mandatory: "force" | boolean;
    selectedClass: string;
    disabled: boolean;
    centerActive: boolean;
    scrollToActive: boolean;
    direction: "horizontal" | "vertical";
    symbol: any;
    nextIcon: import("../../composables/icons.js").IconValue;
    prevIcon: import("../../composables/icons.js").IconValue;
    alignTabs: "center" | "end" | "start" | "title";
    fixedTabs: boolean;
    stacked: boolean;
    grow: boolean;
    height: string | number;
    hideSlider: boolean;
    inset: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    [x: `tab.${string}`]: (arg: VTabsSlot<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    [x: `item.${string}`]: (arg: VTabsSlot<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    tab: (arg: VTabsSlot<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    item: (arg: VTabsSlot<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    window: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    prev: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    next: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <TModel, T = TabItem>(props: {
    items?: T[] | undefined;
    modelValue?: TModel | undefined;
    "onUpdate:modelValue"?: ((value: TModel) => void) | undefined;
}, slots: VTabsSlots<T>) => GenericProps<{
    items?: T[] | undefined;
    modelValue?: TModel | undefined;
    "onUpdate:modelValue"?: ((value: TModel) => void) | undefined;
}, VTabsSlots<T>>) & import("../../util/index.js").FilterPropsOptions<{
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
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: {
        type: PropType<"force" | boolean>;
        default: NonNullable<"force" | boolean>;
    };
    max: NumberConstructor;
    selectedClass: Omit<{
        type: PropType<string>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    spaced: PropType<"both" | "end" | "start">;
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
        default: import("vue").InjectionKey<import("../../composables/group.js").GroupProvide>;
    };
    nextIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    showArrows: {
        type: (BooleanConstructor | StringConstructor)[];
        validator: (v: any) => boolean;
    };
    sliderTransition: PropType<"fade" | "grow" | "shift">;
    sliderTransitionDuration: (NumberConstructor | StringConstructor)[];
    alignTabs: {
        type: PropType<"center" | "end" | "start" | "title">;
        default: string;
    };
    color: StringConstructor;
    fixedTabs: BooleanConstructor;
    items: {
        type: PropType<readonly TabItem[]>;
        default: () => never[];
    };
    stacked: BooleanConstructor;
    bgColor: StringConstructor;
    grow: BooleanConstructor;
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    hideSlider: BooleanConstructor;
    inset: BooleanConstructor;
    insetPadding: (NumberConstructor | StringConstructor)[];
    insetRadius: (NumberConstructor | StringConstructor)[];
    sliderColor: StringConstructor;
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
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: {
        type: PropType<"force" | boolean>;
        default: NonNullable<"force" | boolean>;
    };
    max: NumberConstructor;
    selectedClass: Omit<{
        type: PropType<string>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    spaced: PropType<"both" | "end" | "start">;
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
        default: import("vue").InjectionKey<import("../../composables/group.js").GroupProvide>;
    };
    nextIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    showArrows: {
        type: (BooleanConstructor | StringConstructor)[];
        validator: (v: any) => boolean;
    };
    sliderTransition: PropType<"fade" | "grow" | "shift">;
    sliderTransitionDuration: (NumberConstructor | StringConstructor)[];
    alignTabs: {
        type: PropType<"center" | "end" | "start" | "title">;
        default: string;
    };
    color: StringConstructor;
    fixedTabs: BooleanConstructor;
    items: {
        type: PropType<readonly TabItem[]>;
        default: () => never[];
    };
    stacked: BooleanConstructor;
    bgColor: StringConstructor;
    grow: BooleanConstructor;
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    hideSlider: BooleanConstructor;
    inset: BooleanConstructor;
    insetPadding: (NumberConstructor | StringConstructor)[];
    insetRadius: (NumberConstructor | StringConstructor)[];
    sliderColor: StringConstructor;
}>>;
export type VTabs = InstanceType<typeof VTabs>;
