// Styles

// Types
import type { PropType } from 'vue';
export type VSliderThumbSlots = {
    'thumb-label': {
        modelValue: number;
    };
};
export declare const makeVSliderThumbProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    focused?: unknown;
    max?: unknown;
    min?: unknown;
    modelValue?: unknown;
    position?: unknown;
    ripple?: unknown;
    name?: unknown;
    noKeyboard?: unknown;
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
    focused: unknown extends Defaults["focused"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["focused"] ? boolean : boolean | Defaults["focused"]>;
        default: unknown extends Defaults["focused"] ? boolean : boolean | Defaults["focused"];
    };
    max: unknown extends Defaults["max"] ? {
        type: NumberConstructor;
        required: true;
    } : Omit<{
        type: NumberConstructor;
        required: true;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["max"] ? number : number | Defaults["max"]>;
        default: unknown extends Defaults["max"] ? number : number | Defaults["max"];
    };
    min: unknown extends Defaults["min"] ? {
        type: NumberConstructor;
        required: true;
    } : Omit<{
        type: NumberConstructor;
        required: true;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["min"] ? number : number | Defaults["min"]>;
        default: unknown extends Defaults["min"] ? number : number | Defaults["min"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: NumberConstructor;
        required: true;
    } : Omit<{
        type: NumberConstructor;
        required: true;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["modelValue"] ? number : number | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? number : number | Defaults["modelValue"];
    };
    position: unknown extends Defaults["position"] ? {
        type: NumberConstructor;
        required: true;
    } : Omit<{
        type: NumberConstructor;
        required: true;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["position"] ? number : number | Defaults["position"]>;
        default: unknown extends Defaults["position"] ? number : number | Defaults["position"];
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
    name: unknown extends Defaults["name"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["name"] ? string : string | Defaults["name"]>;
        default: unknown extends Defaults["name"] ? string : string | Defaults["name"];
    };
    noKeyboard: unknown extends Defaults["noKeyboard"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["noKeyboard"] ? boolean : boolean | Defaults["noKeyboard"]>;
        default: unknown extends Defaults["noKeyboard"] ? boolean : boolean | Defaults["noKeyboard"];
    };
};
export declare const VSliderThumb: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        focused: boolean;
        max: number;
        min: number;
        modelValue: number;
        position: number;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        };
        noKeyboard: boolean;
    } & {
        class?: any;
        name?: string | undefined;
    } & {
        $children?: {
            "thumb-label"?: ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | {} | import("vue").VNodeChild;
        "v-slots"?: {
            "thumb-label"?: false | ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:thumb-label"?: false | ((arg: {
            modelValue: number;
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: number) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (v: number) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        focused: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined;
        noKeyboard: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        "thumb-label": (arg: {
            modelValue: number;
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
        focused: boolean;
        max: number;
        min: number;
        modelValue: number;
        position: number;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        };
        noKeyboard: boolean;
    } & {
        class?: any;
        name?: string | undefined;
    } & {
        $children?: {
            "thumb-label"?: ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | {} | import("vue").VNodeChild;
        "v-slots"?: {
            "thumb-label"?: false | ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:thumb-label"?: false | ((arg: {
            modelValue: number;
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: number) => any) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        focused: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined;
        noKeyboard: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    focused: boolean;
    max: number;
    min: number;
    modelValue: number;
    position: number;
    ripple: boolean | {
        class?: string | undefined;
        keys?: string[] | undefined;
    };
    noKeyboard: boolean;
} & {
    class?: any;
    name?: string | undefined;
} & {
    $children?: {
        "thumb-label"?: ((arg: {
            modelValue: number;
        }) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | {} | import("vue").VNodeChild;
    "v-slots"?: {
        "thumb-label"?: false | ((arg: {
            modelValue: number;
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:thumb-label"?: false | ((arg: {
        modelValue: number;
    }) => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((v: number) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (v: number) => true;
}, string, {
    style: import("vue").StyleValue;
    focused: boolean;
    ripple: boolean | {
        class?: string | undefined;
        keys?: string[] | undefined;
    } | undefined;
    noKeyboard: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    "thumb-label": (arg: {
        modelValue: number;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    focused: BooleanConstructor;
    max: {
        type: NumberConstructor;
        required: true;
    };
    min: {
        type: NumberConstructor;
        required: true;
    };
    modelValue: {
        type: NumberConstructor;
        required: true;
    };
    position: {
        type: NumberConstructor;
        required: true;
    };
    ripple: {
        type: PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    };
    name: StringConstructor;
    noKeyboard: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    focused: BooleanConstructor;
    max: {
        type: NumberConstructor;
        required: true;
    };
    min: {
        type: NumberConstructor;
        required: true;
    };
    modelValue: {
        type: NumberConstructor;
        required: true;
    };
    position: {
        type: NumberConstructor;
        required: true;
    };
    ripple: {
        type: PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    };
    name: StringConstructor;
    noKeyboard: BooleanConstructor;
}>>;
export type VSliderThumb = InstanceType<typeof VSliderThumb>;
