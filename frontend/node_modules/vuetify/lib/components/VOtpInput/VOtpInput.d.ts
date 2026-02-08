// Styles

// Types
import type { PropType } from 'vue';
// Types
export type VOtpInputSlots = {
    default: never;
    loader: never;
};
export declare const makeVOtpInputProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    focused?: unknown;
    "onUpdate:focused"?: unknown;
    rounded?: unknown;
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    loading?: unknown;
    bgColor?: unknown;
    color?: unknown;
    baseColor?: unknown;
    disabled?: unknown;
    error?: unknown;
    variant?: unknown;
    autofocus?: unknown;
    divider?: unknown;
    focusAll?: unknown;
    label?: unknown;
    length?: unknown;
    modelValue?: unknown;
    placeholder?: unknown;
    type?: unknown;
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
    focused: unknown extends Defaults["focused"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["focused"] ? boolean : boolean | Defaults["focused"]>;
        default: unknown extends Defaults["focused"] ? boolean : boolean | Defaults["focused"];
    };
    "onUpdate:focused": unknown extends Defaults["onUpdate:focused"] ? PropType<(args_0: boolean) => void> : {
        type: PropType<unknown extends Defaults["onUpdate:focused"] ? (args_0: boolean) => void : ((args_0: boolean) => void) | Defaults["onUpdate:focused"]>;
        default: unknown extends Defaults["onUpdate:focused"] ? (args_0: boolean) => void : ((args_0: boolean) => void) | Defaults["onUpdate:focused"];
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
    height: unknown extends Defaults["height"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : Defaults["height"] | NonNullable<string | number>;
    };
    maxHeight: unknown extends Defaults["maxHeight"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["maxHeight"] ? string | number : string | number | Defaults["maxHeight"]>;
        default: unknown extends Defaults["maxHeight"] ? string | number : Defaults["maxHeight"] | NonNullable<string | number>;
    };
    maxWidth: unknown extends Defaults["maxWidth"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["maxWidth"] ? string | number : string | number | Defaults["maxWidth"]>;
        default: unknown extends Defaults["maxWidth"] ? string | number : Defaults["maxWidth"] | NonNullable<string | number>;
    };
    minHeight: unknown extends Defaults["minHeight"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["minHeight"] ? string | number : string | number | Defaults["minHeight"]>;
        default: unknown extends Defaults["minHeight"] ? string | number : Defaults["minHeight"] | NonNullable<string | number>;
    };
    minWidth: unknown extends Defaults["minWidth"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["minWidth"] ? string | number : string | number | Defaults["minWidth"]>;
        default: unknown extends Defaults["minWidth"] ? string | number : Defaults["minWidth"] | NonNullable<string | number>;
    };
    width: unknown extends Defaults["width"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : Defaults["width"] | NonNullable<string | number>;
    };
    loading: unknown extends Defaults["loading"] ? (BooleanConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["loading"] ? string | boolean : string | boolean | Defaults["loading"]>;
        default: unknown extends Defaults["loading"] ? string | boolean : Defaults["loading"] | NonNullable<string | boolean>;
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    baseColor: unknown extends Defaults["baseColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"]>;
        default: unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"];
    };
    disabled: unknown extends Defaults["disabled"] ? {
        type: BooleanConstructor;
        default: null;
    } : Omit<{
        type: BooleanConstructor;
        default: null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    error: unknown extends Defaults["error"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"]>;
        default: unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"];
    };
    variant: unknown extends Defaults["variant"] ? Omit<{
        type: PropType<"filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<"filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined">;
        default: NonNullable<"filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined">;
    } : Omit<Omit<{
        type: PropType<"filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<"filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined">;
        default: NonNullable<"filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined">;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["variant"] ? "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined" : "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined" : Defaults["variant"] | NonNullable<"filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined">;
    };
    autofocus: unknown extends Defaults["autofocus"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["autofocus"] ? boolean : boolean | Defaults["autofocus"]>;
        default: unknown extends Defaults["autofocus"] ? boolean : boolean | Defaults["autofocus"];
    };
    divider: unknown extends Defaults["divider"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["divider"] ? string : string | Defaults["divider"]>;
        default: unknown extends Defaults["divider"] ? string : string | Defaults["divider"];
    };
    focusAll: unknown extends Defaults["focusAll"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["focusAll"] ? boolean : boolean | Defaults["focusAll"]>;
        default: unknown extends Defaults["focusAll"] ? boolean : boolean | Defaults["focusAll"];
    };
    label: unknown extends Defaults["label"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["label"] ? string : string | Defaults["label"]>;
        default: unknown extends Defaults["label"] ? string : string | Defaults["label"];
    };
    length: unknown extends Defaults["length"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["length"] ? string | number : string | number | Defaults["length"]>;
        default: unknown extends Defaults["length"] ? string | number : Defaults["length"] | NonNullable<string | number>;
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["modelValue"] ? string | number : string | number | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? string | number : Defaults["modelValue"] | NonNullable<string | number>;
    };
    placeholder: unknown extends Defaults["placeholder"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["placeholder"] ? string : string | Defaults["placeholder"]>;
        default: unknown extends Defaults["placeholder"] ? string : string | Defaults["placeholder"];
    };
    type: unknown extends Defaults["type"] ? {
        type: PropType<"number" | "password" | "text">;
        default: string;
    } : Omit<{
        type: PropType<"number" | "password" | "text">;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["type"] ? "number" | "password" | "text" : "number" | "password" | "text" | Defaults["type"]>;
        default: unknown extends Defaults["type"] ? "number" | "password" | "text" : Defaults["type"] | NonNullable<"number" | "password" | "text">;
    };
};
export declare const VOtpInput: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        focused: boolean;
        disabled: boolean;
        error: boolean;
        variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
        autofocus: boolean;
        focusAll: boolean;
        label: string;
        length: string | number;
        type: "number" | "password" | "text";
    } & {
        theme?: string | undefined;
        class?: any;
        "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
        rounded?: string | number | boolean | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        loading?: string | boolean | undefined;
        bgColor?: string | undefined;
        color?: string | undefined;
        baseColor?: string | undefined;
        divider?: string | undefined;
        modelValue?: string | number | undefined;
        placeholder?: string | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            loader?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            loader?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        onFinish?: ((val: string) => any) | undefined;
        "onUpdate:focused"?: ((val: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    }, {
        blur: () => void;
        focus: () => void;
        reset: () => void;
        isFocused: import("vue").Ref<boolean, boolean> & {
            readonly externalValue: boolean;
        };
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        finish: (val: string) => true;
        "update:focused": (val: boolean) => true;
        "update:modelValue": (val: string) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        focused: boolean;
        rounded: string | number | boolean;
        disabled: boolean;
        error: boolean;
        variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
        autofocus: boolean;
        focusAll: boolean;
        label: string;
        length: string | number;
        modelValue: string | number;
        type: "number" | "password" | "text";
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        loader: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        disabled: boolean;
        error: boolean;
        variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
        autofocus: boolean;
        focusAll: boolean;
        label: string;
        length: string | number;
        type: "number" | "password" | "text";
    } & {
        theme?: string | undefined;
        class?: any;
        "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
        rounded?: string | number | boolean | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        loading?: string | boolean | undefined;
        bgColor?: string | undefined;
        color?: string | undefined;
        baseColor?: string | undefined;
        divider?: string | undefined;
        modelValue?: string | number | undefined;
        placeholder?: string | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            loader?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            loader?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        onFinish?: ((val: string) => any) | undefined;
        "onUpdate:focused"?: ((val: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    }, {
        blur: () => void;
        focus: () => void;
        reset: () => void;
        isFocused: import("vue").Ref<boolean, boolean> & {
            readonly externalValue: boolean;
        };
    }, {}, {}, {}, {
        style: import("vue").StyleValue;
        focused: boolean;
        rounded: string | number | boolean;
        disabled: boolean;
        error: boolean;
        variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
        autofocus: boolean;
        focusAll: boolean;
        label: string;
        length: string | number;
        modelValue: string | number;
        type: "number" | "password" | "text";
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    focused: boolean;
    disabled: boolean;
    error: boolean;
    variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
    autofocus: boolean;
    focusAll: boolean;
    label: string;
    length: string | number;
    type: "number" | "password" | "text";
} & {
    theme?: string | undefined;
    class?: any;
    "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
    rounded?: string | number | boolean | undefined;
    height?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    width?: string | number | undefined;
    loading?: string | boolean | undefined;
    bgColor?: string | undefined;
    color?: string | undefined;
    baseColor?: string | undefined;
    divider?: string | undefined;
    modelValue?: string | number | undefined;
    placeholder?: string | undefined;
} & {
    $children?: {
        default?: (() => import("vue").VNodeChild) | undefined;
        loader?: (() => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
        loader?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:loader"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    onFinish?: ((val: string) => any) | undefined;
    "onUpdate:focused"?: ((val: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((val: string) => any) | undefined;
}, {
    blur: () => void;
    focus: () => void;
    reset: () => void;
    isFocused: import("vue").Ref<boolean, boolean> & {
        readonly externalValue: boolean;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    finish: (val: string) => true;
    "update:focused": (val: boolean) => true;
    "update:modelValue": (val: string) => true;
}, string, {
    style: import("vue").StyleValue;
    focused: boolean;
    rounded: string | number | boolean;
    disabled: boolean;
    error: boolean;
    variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
    autofocus: boolean;
    focusAll: boolean;
    label: string;
    length: string | number;
    modelValue: string | number;
    type: "number" | "password" | "text";
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    loader: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    focused: BooleanConstructor;
    "onUpdate:focused": PropType<(args_0: boolean) => void>;
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    minHeight: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    loading: (BooleanConstructor | StringConstructor)[];
    bgColor: StringConstructor;
    color: StringConstructor;
    baseColor: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    error: BooleanConstructor;
    variant: Omit<{
        type: PropType<"filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<"filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined">;
        default: NonNullable<"filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined">;
    };
    autofocus: BooleanConstructor;
    divider: StringConstructor;
    focusAll: BooleanConstructor;
    label: {
        type: StringConstructor;
        default: string;
    };
    length: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    placeholder: StringConstructor;
    type: {
        type: PropType<"number" | "password" | "text">;
        default: string;
    };
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    focused: BooleanConstructor;
    "onUpdate:focused": PropType<(args_0: boolean) => void>;
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    minHeight: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    loading: (BooleanConstructor | StringConstructor)[];
    bgColor: StringConstructor;
    color: StringConstructor;
    baseColor: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    error: BooleanConstructor;
    variant: Omit<{
        type: PropType<"filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<"filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined">;
        default: NonNullable<"filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined">;
    };
    autofocus: BooleanConstructor;
    divider: StringConstructor;
    focusAll: BooleanConstructor;
    label: {
        type: StringConstructor;
        default: string;
    };
    length: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    placeholder: StringConstructor;
    type: {
        type: PropType<"number" | "password" | "text">;
        default: string;
    };
}>>;
export type VOtpInput = InstanceType<typeof VOtpInput>;
