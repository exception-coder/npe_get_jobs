// Styles

// Types
import type { PropType } from 'vue';
export declare const makeVTimePickerClockProps: <Defaults extends {
    allowedValues?: unknown;
    ampm?: unknown;
    color?: unknown;
    disabled?: unknown;
    displayedValue?: unknown;
    double?: unknown;
    format?: unknown;
    max?: unknown;
    min?: unknown;
    scrollable?: unknown;
    readonly?: unknown;
    rotate?: unknown;
    step?: unknown;
    modelValue?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    allowedValues: unknown extends Defaults["allowedValues"] ? PropType<(value: number) => boolean> : {
        type: PropType<unknown extends Defaults["allowedValues"] ? (value: number) => boolean : ((value: number) => boolean) | Defaults["allowedValues"]>;
        default: unknown extends Defaults["allowedValues"] ? (value: number) => boolean : ((value: number) => boolean) | Defaults["allowedValues"];
    };
    ampm: unknown extends Defaults["ampm"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["ampm"] ? boolean : boolean | Defaults["ampm"]>;
        default: unknown extends Defaults["ampm"] ? boolean : boolean | Defaults["ampm"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    displayedValue: unknown extends Defaults["displayedValue"] ? null : {
        type: PropType<unknown extends Defaults["displayedValue"] ? any : any>;
        default: unknown extends Defaults["displayedValue"] ? any : any;
    };
    double: unknown extends Defaults["double"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["double"] ? boolean : boolean | Defaults["double"]>;
        default: unknown extends Defaults["double"] ? boolean : boolean | Defaults["double"];
    };
    format: unknown extends Defaults["format"] ? {
        type: FunctionConstructor;
        default: (val: string | number) => string | number;
    } : Omit<{
        type: FunctionConstructor;
        default: (val: string | number) => string | number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["format"] ? Function : Function | Defaults["format"]>;
        default: unknown extends Defaults["format"] ? Function : Function | Defaults["format"];
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
    scrollable: unknown extends Defaults["scrollable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["scrollable"] ? boolean : boolean | Defaults["scrollable"]>;
        default: unknown extends Defaults["scrollable"] ? boolean : boolean | Defaults["scrollable"];
    };
    readonly: unknown extends Defaults["readonly"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"]>;
        default: unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"];
    };
    rotate: unknown extends Defaults["rotate"] ? {
        type: NumberConstructor;
        default: number;
    } : Omit<{
        type: NumberConstructor;
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["rotate"] ? number : number | Defaults["rotate"]>;
        default: unknown extends Defaults["rotate"] ? number : number | Defaults["rotate"];
    };
    step: unknown extends Defaults["step"] ? {
        type: NumberConstructor;
        default: number;
    } : Omit<{
        type: NumberConstructor;
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["step"] ? number : number | Defaults["step"]>;
        default: unknown extends Defaults["step"] ? number : number | Defaults["step"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: NumberConstructor;
    } : Omit<{
        type: NumberConstructor;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["modelValue"] ? number : number | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? number : number | Defaults["modelValue"];
    };
};
export declare const VTimePickerClock: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        ampm: boolean;
        disabled: boolean;
        double: boolean;
        format: Function;
        max: number;
        min: number;
        scrollable: boolean;
        readonly: boolean;
        rotate: number;
        step: number;
    } & {
        allowedValues?: ((value: number) => boolean) | undefined;
        color?: string | undefined;
        displayedValue?: any;
        modelValue?: number | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        onChange?: ((val: number) => any) | undefined;
        onInput?: ((val: number) => any) | undefined;
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (val: number) => true;
        input: (val: number) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        ampm: boolean;
        disabled: boolean;
        double: boolean;
        format: Function;
        scrollable: boolean;
        readonly: boolean;
        rotate: number;
        step: number;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        ampm: boolean;
        disabled: boolean;
        double: boolean;
        format: Function;
        max: number;
        min: number;
        scrollable: boolean;
        readonly: boolean;
        rotate: number;
        step: number;
    } & {
        allowedValues?: ((value: number) => boolean) | undefined;
        color?: string | undefined;
        displayedValue?: any;
        modelValue?: number | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        onChange?: ((val: number) => any) | undefined;
        onInput?: ((val: number) => any) | undefined;
    }, {}, {}, {}, {}, {
        ampm: boolean;
        disabled: boolean;
        double: boolean;
        format: Function;
        scrollable: boolean;
        readonly: boolean;
        rotate: number;
        step: number;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    ampm: boolean;
    disabled: boolean;
    double: boolean;
    format: Function;
    max: number;
    min: number;
    scrollable: boolean;
    readonly: boolean;
    rotate: number;
    step: number;
} & {
    allowedValues?: ((value: number) => boolean) | undefined;
    color?: string | undefined;
    displayedValue?: any;
    modelValue?: number | undefined;
} & {
    $children?: {
        default?: (() => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    onChange?: ((val: number) => any) | undefined;
    onInput?: ((val: number) => any) | undefined;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (val: number) => true;
    input: (val: number) => true;
}, string, {
    ampm: boolean;
    disabled: boolean;
    double: boolean;
    format: Function;
    scrollable: boolean;
    readonly: boolean;
    rotate: number;
    step: number;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    allowedValues: PropType<(value: number) => boolean>;
    ampm: BooleanConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    displayedValue: null;
    double: BooleanConstructor;
    format: {
        type: FunctionConstructor;
        default: (val: string | number) => string | number;
    };
    max: {
        type: NumberConstructor;
        required: true;
    };
    min: {
        type: NumberConstructor;
        required: true;
    };
    scrollable: BooleanConstructor;
    readonly: BooleanConstructor;
    rotate: {
        type: NumberConstructor;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: {
        type: NumberConstructor;
    };
}, import("vue").ExtractPropTypes<{
    allowedValues: PropType<(value: number) => boolean>;
    ampm: BooleanConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    displayedValue: null;
    double: BooleanConstructor;
    format: {
        type: FunctionConstructor;
        default: (val: string | number) => string | number;
    };
    max: {
        type: NumberConstructor;
        required: true;
    };
    min: {
        type: NumberConstructor;
        required: true;
    };
    scrollable: BooleanConstructor;
    readonly: BooleanConstructor;
    rotate: {
        type: NumberConstructor;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: {
        type: NumberConstructor;
    };
}>>;
export type VTimePickerClock = InstanceType<typeof VTimePickerClock>;
