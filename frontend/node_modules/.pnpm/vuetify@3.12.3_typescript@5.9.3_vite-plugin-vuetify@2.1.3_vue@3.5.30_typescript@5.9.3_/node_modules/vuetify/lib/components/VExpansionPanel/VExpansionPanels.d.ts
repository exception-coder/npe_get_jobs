// Styles

// Types
import type { PropType } from 'vue';
import type { GenericProps } from '../../util/index.js';
export type VExpansionPanelSlot = {
    prev: () => void;
    next: () => void;
};
export type VExpansionPanelSlots = {
    default: VExpansionPanelSlot;
};
export declare const makeVExpansionPanelsProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    elevation?: unknown;
    rounded?: unknown;
    tile?: unknown;
    tag?: unknown;
    modelValue?: unknown;
    multiple?: unknown;
    mandatory?: unknown;
    max?: unknown;
    selectedClass?: unknown;
    disabled?: unknown;
    eager?: unknown;
    color?: unknown;
    expandIcon?: unknown;
    collapseIcon?: unknown;
    hideActions?: unknown;
    focusable?: unknown;
    static?: unknown;
    ripple?: unknown;
    readonly?: unknown;
    bgColor?: unknown;
    flat?: unknown;
    variant?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
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
    elevation: unknown extends Defaults["elevation"] ? {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["elevation"] ? string | number : string | number | Defaults["elevation"]>;
        default: unknown extends Defaults["elevation"] ? string | number : Defaults["elevation"] | NonNullable<string | number>;
    };
    rounded: unknown extends Defaults["rounded"] ? {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    } : Omit<{
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["rounded"] ? string | number | boolean : string | number | boolean | Defaults["rounded"]>;
        default: unknown extends Defaults["rounded"] ? string | number | boolean : Defaults["rounded"] | NonNullable<string | number | boolean>;
    };
    tile: unknown extends Defaults["tile"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"]>;
        default: unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"];
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
    selectedClass: unknown extends Defaults["selectedClass"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"]>;
        default: unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    eager: unknown extends Defaults["eager"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"]>;
        default: unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    expandIcon: unknown extends Defaults["expandIcon"] ? {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["expandIcon"] ? import("../../composables/icons.js").IconValue : Defaults["expandIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["expandIcon"] ? import("../../composables/icons.js").IconValue : Defaults["expandIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    collapseIcon: unknown extends Defaults["collapseIcon"] ? {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["collapseIcon"] ? import("../../composables/icons.js").IconValue : Defaults["collapseIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["collapseIcon"] ? import("../../composables/icons.js").IconValue : Defaults["collapseIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    hideActions: unknown extends Defaults["hideActions"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"]>;
        default: unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"];
    };
    focusable: unknown extends Defaults["focusable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["focusable"] ? boolean : boolean | Defaults["focusable"]>;
        default: unknown extends Defaults["focusable"] ? boolean : boolean | Defaults["focusable"];
    };
    static: unknown extends Defaults["static"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["static"] ? boolean : boolean | Defaults["static"]>;
        default: unknown extends Defaults["static"] ? boolean : boolean | Defaults["static"];
    };
    ripple: unknown extends Defaults["ripple"] ? {
        type: PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["ripple"] ? boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined : boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | Defaults["ripple"] | undefined>;
        default: unknown extends Defaults["ripple"] ? boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined : Defaults["ripple"] | NonNullable<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
    };
    readonly: unknown extends Defaults["readonly"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"]>;
        default: unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"];
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    flat: unknown extends Defaults["flat"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"]>;
        default: unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"];
    };
    variant: unknown extends Defaults["variant"] ? {
        type: PropType<"accordion" | "default" | "inset" | "popout">;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<"accordion" | "default" | "inset" | "popout">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["variant"] ? "accordion" | "default" | "inset" | "popout" : "accordion" | "default" | "inset" | "popout" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "accordion" | "default" | "inset" | "popout" : Defaults["variant"] | NonNullable<"accordion" | "default" | "inset" | "popout">;
    };
};
export declare const VExpansionPanels: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        multiple: boolean;
        disabled: boolean;
        eager: boolean;
        expandIcon: import("../../composables/icons.js").IconValue;
        collapseIcon: import("../../composables/icons.js").IconValue;
        hideActions: boolean;
        focusable: boolean;
        static: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        };
        readonly: boolean;
        flat: boolean;
        variant: "accordion" | "default" | "inset" | "popout";
    } & {
        theme?: string | undefined;
        class?: any;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        mandatory?: "force" | boolean | undefined;
        max?: number | undefined;
        selectedClass?: string | undefined;
        color?: string | undefined;
        bgColor?: string | undefined;
    } & {}, {
        next: () => void;
        prev: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        "update:modelValue": (val: unknown) => true;
    }, "$children" | "modelValue" | "update:modelValue" | "v-slot:default" | "v-slots">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        multiple: boolean;
        disabled: boolean;
        eager: boolean;
        expandIcon: import("../../composables/icons.js").IconValue;
        collapseIcon: import("../../composables/icons.js").IconValue;
        hideActions: boolean;
        focusable: boolean;
        static: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined;
        readonly: boolean;
        flat: boolean;
        variant: "accordion" | "default" | "inset" | "popout";
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: VExpansionPanelSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        multiple: boolean;
        disabled: boolean;
        eager: boolean;
        expandIcon: import("../../composables/icons.js").IconValue;
        collapseIcon: import("../../composables/icons.js").IconValue;
        hideActions: boolean;
        focusable: boolean;
        static: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        };
        readonly: boolean;
        flat: boolean;
        variant: "accordion" | "default" | "inset" | "popout";
    } & {
        theme?: string | undefined;
        class?: any;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        mandatory?: "force" | boolean | undefined;
        max?: number | undefined;
        selectedClass?: string | undefined;
        color?: string | undefined;
        bgColor?: string | undefined;
    } & {}, {
        next: () => void;
        prev: () => void;
    }, {}, {}, {}, {
        style: import("vue").StyleValue;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        multiple: boolean;
        disabled: boolean;
        eager: boolean;
        expandIcon: import("../../composables/icons.js").IconValue;
        collapseIcon: import("../../composables/icons.js").IconValue;
        hideActions: boolean;
        focusable: boolean;
        static: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined;
        readonly: boolean;
        flat: boolean;
        variant: "accordion" | "default" | "inset" | "popout";
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    multiple: boolean;
    disabled: boolean;
    eager: boolean;
    expandIcon: import("../../composables/icons.js").IconValue;
    collapseIcon: import("../../composables/icons.js").IconValue;
    hideActions: boolean;
    focusable: boolean;
    static: boolean;
    ripple: boolean | {
        class?: string | undefined;
        keys?: string[] | undefined;
    };
    readonly: boolean;
    flat: boolean;
    variant: "accordion" | "default" | "inset" | "popout";
} & {
    theme?: string | undefined;
    class?: any;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    mandatory?: "force" | boolean | undefined;
    max?: number | undefined;
    selectedClass?: string | undefined;
    color?: string | undefined;
    bgColor?: string | undefined;
} & {}, {
    next: () => void;
    prev: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    "update:modelValue": (val: unknown) => true;
}, "$children" | "modelValue" | "update:modelValue" | "v-slot:default" | "v-slots">, string, {
    style: import("vue").StyleValue;
    rounded: string | number | boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    multiple: boolean;
    disabled: boolean;
    eager: boolean;
    expandIcon: import("../../composables/icons.js").IconValue;
    collapseIcon: import("../../composables/icons.js").IconValue;
    hideActions: boolean;
    focusable: boolean;
    static: boolean;
    ripple: boolean | {
        class?: string | undefined;
        keys?: string[] | undefined;
    } | undefined;
    readonly: boolean;
    flat: boolean;
    variant: "accordion" | "default" | "inset" | "popout";
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: VExpansionPanelSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <TModel>(props: {
    modelValue?: TModel | undefined;
    "onUpdate:modelValue"?: ((value: TModel) => void) | undefined;
}, slots: VExpansionPanelSlots) => GenericProps<{
    modelValue?: TModel | undefined;
    "onUpdate:modelValue"?: ((value: TModel) => void) | undefined;
}, VExpansionPanelSlots>) & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    elevation: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    };
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
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
    selectedClass: StringConstructor;
    disabled: BooleanConstructor;
    eager: BooleanConstructor;
    color: StringConstructor;
    expandIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    collapseIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    hideActions: BooleanConstructor;
    focusable: BooleanConstructor;
    static: BooleanConstructor;
    ripple: {
        type: PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    };
    readonly: BooleanConstructor;
    bgColor: StringConstructor;
    flat: BooleanConstructor;
    variant: {
        type: PropType<"accordion" | "default" | "inset" | "popout">;
        default: string;
        validator: (v: any) => boolean;
    };
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    elevation: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    };
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
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
    selectedClass: StringConstructor;
    disabled: BooleanConstructor;
    eager: BooleanConstructor;
    color: StringConstructor;
    expandIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    collapseIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    hideActions: BooleanConstructor;
    focusable: BooleanConstructor;
    static: BooleanConstructor;
    ripple: {
        type: PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    };
    readonly: BooleanConstructor;
    bgColor: StringConstructor;
    flat: BooleanConstructor;
    variant: {
        type: PropType<"accordion" | "default" | "inset" | "popout">;
        default: string;
        validator: (v: any) => boolean;
    };
}>>;
export type VExpansionPanels = InstanceType<typeof VExpansionPanels>;
