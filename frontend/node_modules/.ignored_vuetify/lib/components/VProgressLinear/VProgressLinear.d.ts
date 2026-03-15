// Styles

export declare const makeVProgressLinearProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    rounded?: unknown;
    tile?: unknown;
    tag?: unknown;
    location?: unknown;
    chunkCount?: unknown;
    chunkWidth?: unknown;
    chunkGap?: unknown;
    absolute?: unknown;
    active?: unknown;
    bgColor?: unknown;
    bgOpacity?: unknown;
    bufferValue?: unknown;
    bufferColor?: unknown;
    bufferOpacity?: unknown;
    clickable?: unknown;
    color?: unknown;
    height?: unknown;
    indeterminate?: unknown;
    max?: unknown;
    modelValue?: unknown;
    opacity?: unknown;
    reverse?: unknown;
    stream?: unknown;
    striped?: unknown;
    roundedBar?: unknown;
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
    rounded: unknown extends Defaults["rounded"] ? {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    } : Omit<{
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["rounded"] ? string | number | boolean : string | number | boolean | Defaults["rounded"]>;
        default: unknown extends Defaults["rounded"] ? string | number | boolean : Defaults["rounded"] | NonNullable<string | number | boolean>;
    };
    tile: unknown extends Defaults["tile"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"]>;
        default: unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"];
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
    location: unknown extends Defaults["location"] ? {
        type: import("vue").PropType<import("../../util/index.js").Anchor | null>;
        default: NonNullable<import("../../util/index.js").Anchor | null>;
    } : Omit<{
        type: import("vue").PropType<import("../../util/index.js").Anchor | null>;
        default: NonNullable<import("../../util/index.js").Anchor | null>;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["location"] ? import("../../util/index.js").Anchor | null : Defaults["location"] | import("../../util/index.js").Anchor | null>;
        default: unknown extends Defaults["location"] ? import("../../util/index.js").Anchor | null : Defaults["location"] | NonNullable<import("../../util/index.js").Anchor | null>;
    };
    chunkCount: unknown extends Defaults["chunkCount"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["chunkCount"] ? string | number : string | number | Defaults["chunkCount"]>;
        default: unknown extends Defaults["chunkCount"] ? string | number : Defaults["chunkCount"] | NonNullable<string | number>;
    };
    chunkWidth: unknown extends Defaults["chunkWidth"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["chunkWidth"] ? string | number : string | number | Defaults["chunkWidth"]>;
        default: unknown extends Defaults["chunkWidth"] ? string | number : Defaults["chunkWidth"] | NonNullable<string | number>;
    };
    chunkGap: unknown extends Defaults["chunkGap"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["chunkGap"] ? string | number : string | number | Defaults["chunkGap"]>;
        default: unknown extends Defaults["chunkGap"] ? string | number : Defaults["chunkGap"] | NonNullable<string | number>;
    };
    absolute: unknown extends Defaults["absolute"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"]>;
        default: unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"];
    };
    active: unknown extends Defaults["active"] ? {
        type: BooleanConstructor;
        default: boolean;
    } : Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"]>;
        default: unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"];
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    bgOpacity: unknown extends Defaults["bgOpacity"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["bgOpacity"] ? string | number : string | number | Defaults["bgOpacity"]>;
        default: unknown extends Defaults["bgOpacity"] ? string | number : Defaults["bgOpacity"] | NonNullable<string | number>;
    };
    bufferValue: unknown extends Defaults["bufferValue"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["bufferValue"] ? string | number : string | number | Defaults["bufferValue"]>;
        default: unknown extends Defaults["bufferValue"] ? string | number : Defaults["bufferValue"] | NonNullable<string | number>;
    };
    bufferColor: unknown extends Defaults["bufferColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["bufferColor"] ? string : string | Defaults["bufferColor"]>;
        default: unknown extends Defaults["bufferColor"] ? string : string | Defaults["bufferColor"];
    };
    bufferOpacity: unknown extends Defaults["bufferOpacity"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["bufferOpacity"] ? string | number : string | number | Defaults["bufferOpacity"]>;
        default: unknown extends Defaults["bufferOpacity"] ? string | number : Defaults["bufferOpacity"] | NonNullable<string | number>;
    };
    clickable: unknown extends Defaults["clickable"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["clickable"] ? boolean : boolean | Defaults["clickable"]>;
        default: unknown extends Defaults["clickable"] ? boolean : boolean | Defaults["clickable"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    height: unknown extends Defaults["height"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : Defaults["height"] | NonNullable<string | number>;
    };
    indeterminate: unknown extends Defaults["indeterminate"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["indeterminate"] ? boolean : boolean | Defaults["indeterminate"]>;
        default: unknown extends Defaults["indeterminate"] ? boolean : boolean | Defaults["indeterminate"];
    };
    max: unknown extends Defaults["max"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["max"] ? string | number : string | number | Defaults["max"]>;
        default: unknown extends Defaults["max"] ? string | number : Defaults["max"] | NonNullable<string | number>;
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? string | number : string | number | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? string | number : Defaults["modelValue"] | NonNullable<string | number>;
    };
    opacity: unknown extends Defaults["opacity"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["opacity"] ? string | number : string | number | Defaults["opacity"]>;
        default: unknown extends Defaults["opacity"] ? string | number : Defaults["opacity"] | NonNullable<string | number>;
    };
    reverse: unknown extends Defaults["reverse"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["reverse"] ? boolean : boolean | Defaults["reverse"]>;
        default: unknown extends Defaults["reverse"] ? boolean : boolean | Defaults["reverse"];
    };
    stream: unknown extends Defaults["stream"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["stream"] ? boolean : boolean | Defaults["stream"]>;
        default: unknown extends Defaults["stream"] ? boolean : boolean | Defaults["stream"];
    };
    striped: unknown extends Defaults["striped"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["striped"] ? boolean : boolean | Defaults["striped"]>;
        default: unknown extends Defaults["striped"] ? boolean : boolean | Defaults["striped"];
    };
    roundedBar: unknown extends Defaults["roundedBar"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["roundedBar"] ? boolean : boolean | Defaults["roundedBar"]>;
        default: unknown extends Defaults["roundedBar"] ? boolean : boolean | Defaults["roundedBar"];
    };
};
export declare const VProgressLinear: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        location: import("../../util/index.js").Anchor | null;
        chunkCount: string | number;
        chunkWidth: string | number;
        chunkGap: string | number;
        absolute: boolean;
        active: boolean;
        bufferValue: string | number;
        clickable: boolean;
        height: string | number;
        indeterminate: boolean;
        max: string | number;
        modelValue: string | number;
        reverse: boolean;
        stream: boolean;
        striped: boolean;
        roundedBar: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        rounded?: string | number | boolean | undefined;
        bgColor?: string | undefined;
        bgOpacity?: string | number | undefined;
        bufferColor?: string | undefined;
        bufferOpacity?: string | number | undefined;
        color?: string | undefined;
        opacity?: string | number | undefined;
    } & {
        $children?: {
            default?: ((arg: {
                value: number;
                buffer: number;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            value: number;
            buffer: number;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                value: number;
                buffer: number;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            value: number;
            buffer: number;
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: number) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        location: import("../../util/index.js").Anchor | null;
        chunkCount: string | number;
        chunkWidth: string | number;
        chunkGap: string | number;
        absolute: boolean;
        active: boolean;
        bufferValue: string | number;
        clickable: boolean;
        height: string | number;
        indeterminate: boolean;
        max: string | number;
        modelValue: string | number;
        reverse: boolean;
        stream: boolean;
        striped: boolean;
        roundedBar: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: {
            value: number;
            buffer: number;
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
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        location: import("../../util/index.js").Anchor | null;
        chunkCount: string | number;
        chunkWidth: string | number;
        chunkGap: string | number;
        absolute: boolean;
        active: boolean;
        bufferValue: string | number;
        clickable: boolean;
        height: string | number;
        indeterminate: boolean;
        max: string | number;
        modelValue: string | number;
        reverse: boolean;
        stream: boolean;
        striped: boolean;
        roundedBar: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        rounded?: string | number | boolean | undefined;
        bgColor?: string | undefined;
        bgOpacity?: string | number | undefined;
        bufferColor?: string | undefined;
        bufferOpacity?: string | number | undefined;
        color?: string | undefined;
        opacity?: string | number | undefined;
    } & {
        $children?: {
            default?: ((arg: {
                value: number;
                buffer: number;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            value: number;
            buffer: number;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                value: number;
                buffer: number;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            value: number;
            buffer: number;
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        location: import("../../util/index.js").Anchor | null;
        chunkCount: string | number;
        chunkWidth: string | number;
        chunkGap: string | number;
        absolute: boolean;
        active: boolean;
        bufferValue: string | number;
        clickable: boolean;
        height: string | number;
        indeterminate: boolean;
        max: string | number;
        modelValue: string | number;
        reverse: boolean;
        stream: boolean;
        striped: boolean;
        roundedBar: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    location: import("../../util/index.js").Anchor | null;
    chunkCount: string | number;
    chunkWidth: string | number;
    chunkGap: string | number;
    absolute: boolean;
    active: boolean;
    bufferValue: string | number;
    clickable: boolean;
    height: string | number;
    indeterminate: boolean;
    max: string | number;
    modelValue: string | number;
    reverse: boolean;
    stream: boolean;
    striped: boolean;
    roundedBar: boolean;
} & {
    theme?: string | undefined;
    class?: any;
    rounded?: string | number | boolean | undefined;
    bgColor?: string | undefined;
    bgOpacity?: string | number | undefined;
    bufferColor?: string | undefined;
    bufferOpacity?: string | number | undefined;
    color?: string | undefined;
    opacity?: string | number | undefined;
} & {
    $children?: {
        default?: ((arg: {
            value: number;
            buffer: number;
        }) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | ((arg: {
        value: number;
        buffer: number;
    }) => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | ((arg: {
            value: number;
            buffer: number;
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: {
        value: number;
        buffer: number;
    }) => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: number) => true;
}, string, {
    style: import("vue").StyleValue;
    rounded: string | number | boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    location: import("../../util/index.js").Anchor | null;
    chunkCount: string | number;
    chunkWidth: string | number;
    chunkGap: string | number;
    absolute: boolean;
    active: boolean;
    bufferValue: string | number;
    clickable: boolean;
    height: string | number;
    indeterminate: boolean;
    max: string | number;
    modelValue: string | number;
    reverse: boolean;
    stream: boolean;
    striped: boolean;
    roundedBar: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: {
        value: number;
        buffer: number;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    location: {
        type: import("vue").PropType<import("../../util/index.js").Anchor | null>;
        default: NonNullable<import("../../util/index.js").Anchor | null>;
    };
    chunkCount: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    chunkWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    chunkGap: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    absolute: BooleanConstructor;
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    bgColor: StringConstructor;
    bgOpacity: (NumberConstructor | StringConstructor)[];
    bufferValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    bufferColor: StringConstructor;
    bufferOpacity: (NumberConstructor | StringConstructor)[];
    clickable: BooleanConstructor;
    color: StringConstructor;
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    indeterminate: BooleanConstructor;
    max: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    opacity: (NumberConstructor | StringConstructor)[];
    reverse: BooleanConstructor;
    stream: BooleanConstructor;
    striped: BooleanConstructor;
    roundedBar: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    location: {
        type: import("vue").PropType<import("../../util/index.js").Anchor | null>;
        default: NonNullable<import("../../util/index.js").Anchor | null>;
    };
    chunkCount: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    chunkWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    chunkGap: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    absolute: BooleanConstructor;
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    bgColor: StringConstructor;
    bgOpacity: (NumberConstructor | StringConstructor)[];
    bufferValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    bufferColor: StringConstructor;
    bufferOpacity: (NumberConstructor | StringConstructor)[];
    clickable: BooleanConstructor;
    color: StringConstructor;
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    indeterminate: BooleanConstructor;
    max: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    opacity: (NumberConstructor | StringConstructor)[];
    reverse: BooleanConstructor;
    stream: BooleanConstructor;
    striped: BooleanConstructor;
    roundedBar: BooleanConstructor;
}>>;
export type VProgressLinear = InstanceType<typeof VProgressLinear>;
