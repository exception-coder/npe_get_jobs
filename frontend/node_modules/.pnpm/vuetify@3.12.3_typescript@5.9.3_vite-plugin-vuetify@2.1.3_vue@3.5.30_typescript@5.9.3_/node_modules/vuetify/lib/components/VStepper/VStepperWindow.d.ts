// Types
import type { VWindowSlots } from '../VWindow/VWindow.js';
import type { GenericProps } from '../../util/index.js';
export declare const makeVStepperWindowProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    tag?: unknown;
    reverse?: unknown;
    verticalArrows?: unknown;
    direction?: unknown;
    modelValue?: unknown;
    disabled?: unknown;
    selectedClass?: unknown;
    crossfade?: unknown;
    transitionDuration?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    class: unknown extends Defaults["class"] ? import("vue").PropType<any> : {
        type: import("vue").PropType<unknown extends Defaults["class"] ? any : any>;
        default: unknown extends Defaults["class"] ? any : any;
    };
    style: unknown extends Defaults["style"] ? {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    } : Omit<{
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["style"] ? import("vue").StyleValue : Defaults["style"] | import("vue").StyleValue>;
        default: unknown extends Defaults["style"] ? import("vue").StyleValue : Defaults["style"] | NonNullable<import("vue").StyleValue>;
    };
    tag: unknown extends Defaults["tag"] ? {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : string | Defaults["tag"] | import("../../util/index.js").JSXComponent>;
        default: unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : Defaults["tag"] | NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    reverse: unknown extends Defaults["reverse"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["reverse"] ? boolean : boolean | Defaults["reverse"]>;
        default: unknown extends Defaults["reverse"] ? boolean : boolean | Defaults["reverse"];
    };
    verticalArrows: unknown extends Defaults["verticalArrows"] ? import("vue").PropType<"left" | "right" | boolean> : {
        type: import("vue").PropType<unknown extends Defaults["verticalArrows"] ? "left" | "right" | boolean : "left" | "right" | boolean | Defaults["verticalArrows"]>;
        default: unknown extends Defaults["verticalArrows"] ? "left" | "right" | boolean : Defaults["verticalArrows"] | NonNullable<"left" | "right" | boolean>;
    };
    direction: unknown extends Defaults["direction"] ? {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
    } : Omit<{
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["direction"] ? "horizontal" | "vertical" : "horizontal" | "vertical" | Defaults["direction"]>;
        default: unknown extends Defaults["direction"] ? "horizontal" | "vertical" : Defaults["direction"] | NonNullable<"horizontal" | "vertical">;
    };
    modelValue: unknown extends Defaults["modelValue"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? any : any>;
        default: unknown extends Defaults["modelValue"] ? any : any;
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    selectedClass: unknown extends Defaults["selectedClass"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"]>;
        default: unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"];
    };
    crossfade: unknown extends Defaults["crossfade"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["crossfade"] ? boolean : boolean | Defaults["crossfade"]>;
        default: unknown extends Defaults["crossfade"] ? boolean : boolean | Defaults["crossfade"];
    };
    transitionDuration: unknown extends Defaults["transitionDuration"] ? NumberConstructor : {
        type: import("vue").PropType<unknown extends Defaults["transitionDuration"] ? number : number | Defaults["transitionDuration"]>;
        default: unknown extends Defaults["transitionDuration"] ? number : number | Defaults["transitionDuration"];
    };
};
export declare const VStepperWindow: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tag: string | import("../../util/index.js").JSXComponent;
        reverse: boolean;
        direction: "horizontal" | "vertical";
        disabled: boolean;
        selectedClass: string;
        crossfade: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        verticalArrows?: "left" | "right" | boolean | undefined;
        transitionDuration?: number | undefined;
    } & {}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        "update:modelValue": (v: unknown) => true;
    }, "$children" | "modelValue" | "update:modelValue" | "v-slot:additional" | "v-slot:default" | "v-slot:next" | "v-slot:prev" | "v-slots">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        reverse: boolean;
        direction: "horizontal" | "vertical";
        disabled: boolean;
        selectedClass: string;
        crossfade: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: {
            group: import("../../composables/group.js").GroupProvide;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        additional: (arg: {
            group: import("../../composables/group.js").GroupProvide;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        prev: (arg: {
            props: {
                icon: import("../../composables/icons.js").IconValue;
                class: string;
                onClick: () => void;
                "aria-label": string;
            };
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        next: (arg: {
            props: {
                icon: import("../../composables/icons.js").IconValue;
                class: string;
                onClick: () => void;
                "aria-label": string;
            };
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        tag: string | import("../../util/index.js").JSXComponent;
        reverse: boolean;
        direction: "horizontal" | "vertical";
        disabled: boolean;
        selectedClass: string;
        crossfade: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        verticalArrows?: "left" | "right" | boolean | undefined;
        transitionDuration?: number | undefined;
    } & {}, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        reverse: boolean;
        direction: "horizontal" | "vertical";
        disabled: boolean;
        selectedClass: string;
        crossfade: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    tag: string | import("../../util/index.js").JSXComponent;
    reverse: boolean;
    direction: "horizontal" | "vertical";
    disabled: boolean;
    selectedClass: string;
    crossfade: boolean;
} & {
    theme?: string | undefined;
    class?: any;
    verticalArrows?: "left" | "right" | boolean | undefined;
    transitionDuration?: number | undefined;
} & {}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    "update:modelValue": (v: unknown) => true;
}, "$children" | "modelValue" | "update:modelValue" | "v-slot:additional" | "v-slot:default" | "v-slot:next" | "v-slot:prev" | "v-slots">, string, {
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    reverse: boolean;
    direction: "horizontal" | "vertical";
    disabled: boolean;
    selectedClass: string;
    crossfade: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: {
        group: import("../../composables/group.js").GroupProvide;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    additional: (arg: {
        group: import("../../composables/group.js").GroupProvide;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    prev: (arg: {
        props: {
            icon: import("../../composables/icons.js").IconValue;
            class: string;
            onClick: () => void;
            "aria-label": string;
        };
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    next: (arg: {
        props: {
            icon: import("../../composables/icons.js").IconValue;
            class: string;
            onClick: () => void;
            "aria-label": string;
        };
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <TModel>(props: {
    modelValue?: TModel | undefined;
    "onUpdate:modelValue"?: ((value: TModel) => void) | undefined;
}, slots: VWindowSlots) => GenericProps<{
    modelValue?: TModel | undefined;
    "onUpdate:modelValue"?: ((value: TModel) => void) | undefined;
}, VWindowSlots>) & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    reverse: BooleanConstructor;
    verticalArrows: import("vue").PropType<"left" | "right" | boolean>;
    direction: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
    };
    modelValue: null;
    disabled: BooleanConstructor;
    selectedClass: {
        type: StringConstructor;
        default: string;
    };
    crossfade: BooleanConstructor;
    transitionDuration: NumberConstructor;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    reverse: BooleanConstructor;
    verticalArrows: import("vue").PropType<"left" | "right" | boolean>;
    direction: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
    };
    modelValue: null;
    disabled: BooleanConstructor;
    selectedClass: {
        type: StringConstructor;
        default: string;
    };
    crossfade: BooleanConstructor;
    transitionDuration: NumberConstructor;
}>>;
export type VStepperWindow = InstanceType<typeof VStepperWindow>;
