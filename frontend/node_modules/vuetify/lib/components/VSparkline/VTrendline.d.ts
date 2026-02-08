// Types
export type VTrendlineSlots = {
    default: void;
    label: {
        index: number;
        value: string;
    };
};
export type SparklineItem = number | {
    value: number;
};
export type SparklineText = {
    x: number;
    value: string;
};
export interface Boundary {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
}
export interface Point {
    x: number;
    y: number;
    value: number;
}
export declare const makeVTrendlineProps: <Defaults extends {
    autoDraw?: unknown;
    autoDrawDuration?: unknown;
    autoDrawEasing?: unknown;
    color?: unknown;
    gradient?: unknown;
    gradientDirection?: unknown;
    height?: unknown;
    labels?: unknown;
    labelSize?: unknown;
    lineWidth?: unknown;
    id?: unknown;
    itemValue?: unknown;
    modelValue?: unknown;
    min?: unknown;
    max?: unknown;
    padding?: unknown;
    showLabels?: unknown;
    smooth?: unknown;
    width?: unknown;
    fill?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    autoDraw: unknown extends Defaults["autoDraw"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["autoDraw"] ? boolean : boolean | Defaults["autoDraw"]>;
        default: unknown extends Defaults["autoDraw"] ? boolean : boolean | Defaults["autoDraw"];
    };
    autoDrawDuration: unknown extends Defaults["autoDrawDuration"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["autoDrawDuration"] ? string | number : string | number | Defaults["autoDrawDuration"]>;
        default: unknown extends Defaults["autoDrawDuration"] ? string | number : Defaults["autoDrawDuration"] | NonNullable<string | number>;
    };
    autoDrawEasing: unknown extends Defaults["autoDrawEasing"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["autoDrawEasing"] ? string : string | Defaults["autoDrawEasing"]>;
        default: unknown extends Defaults["autoDrawEasing"] ? string : string | Defaults["autoDrawEasing"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    gradient: unknown extends Defaults["gradient"] ? {
        type: import("vue").PropType<string[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<string[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["gradient"] ? string[] : string[] | Defaults["gradient"]>;
        default: unknown extends Defaults["gradient"] ? string[] : string[] | Defaults["gradient"];
    };
    gradientDirection: unknown extends Defaults["gradientDirection"] ? {
        type: import("vue").PropType<"bottom" | "left" | "right" | "top">;
        validator: (val: string) => boolean;
        default: string;
    } : Omit<{
        type: import("vue").PropType<"bottom" | "left" | "right" | "top">;
        validator: (val: string) => boolean;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["gradientDirection"] ? "bottom" | "left" | "right" | "top" : "bottom" | "left" | "right" | "top" | Defaults["gradientDirection"]>;
        default: unknown extends Defaults["gradientDirection"] ? "bottom" | "left" | "right" | "top" : Defaults["gradientDirection"] | NonNullable<"bottom" | "left" | "right" | "top">;
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
    labels: unknown extends Defaults["labels"] ? {
        type: import("vue").PropType<import("./util/line.js").SparklineItem[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<import("./util/line.js").SparklineItem[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["labels"] ? import("./util/line.js").SparklineItem[] : import("./util/line.js").SparklineItem[] | Defaults["labels"]>;
        default: unknown extends Defaults["labels"] ? import("./util/line.js").SparklineItem[] : import("./util/line.js").SparklineItem[] | Defaults["labels"];
    };
    labelSize: unknown extends Defaults["labelSize"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["labelSize"] ? string | number : string | number | Defaults["labelSize"]>;
        default: unknown extends Defaults["labelSize"] ? string | number : Defaults["labelSize"] | NonNullable<string | number>;
    };
    lineWidth: unknown extends Defaults["lineWidth"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["lineWidth"] ? string | number : string | number | Defaults["lineWidth"]>;
        default: unknown extends Defaults["lineWidth"] ? string | number : Defaults["lineWidth"] | NonNullable<string | number>;
    };
    id: unknown extends Defaults["id"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["id"] ? string : string | Defaults["id"]>;
        default: unknown extends Defaults["id"] ? string : string | Defaults["id"];
    };
    itemValue: unknown extends Defaults["itemValue"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["itemValue"] ? string : string | Defaults["itemValue"]>;
        default: unknown extends Defaults["itemValue"] ? string : string | Defaults["itemValue"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: import("vue").PropType<import("./util/line.js").SparklineItem[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<import("./util/line.js").SparklineItem[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? import("./util/line.js").SparklineItem[] : import("./util/line.js").SparklineItem[] | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? import("./util/line.js").SparklineItem[] : import("./util/line.js").SparklineItem[] | Defaults["modelValue"];
    };
    min: unknown extends Defaults["min"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["min"] ? string | number : string | number | Defaults["min"]>;
        default: unknown extends Defaults["min"] ? string | number : Defaults["min"] | NonNullable<string | number>;
    };
    max: unknown extends Defaults["max"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["max"] ? string | number : string | number | Defaults["max"]>;
        default: unknown extends Defaults["max"] ? string | number : Defaults["max"] | NonNullable<string | number>;
    };
    padding: unknown extends Defaults["padding"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["padding"] ? string | number : string | number | Defaults["padding"]>;
        default: unknown extends Defaults["padding"] ? string | number : Defaults["padding"] | NonNullable<string | number>;
    };
    showLabels: unknown extends Defaults["showLabels"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["showLabels"] ? boolean : boolean | Defaults["showLabels"]>;
        default: unknown extends Defaults["showLabels"] ? boolean : boolean | Defaults["showLabels"];
    };
    smooth: unknown extends Defaults["smooth"] ? (BooleanConstructor | NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["smooth"] ? string | number | boolean : string | number | boolean | Defaults["smooth"]>;
        default: unknown extends Defaults["smooth"] ? string | number | boolean : Defaults["smooth"] | NonNullable<string | number | boolean>;
    };
    width: unknown extends Defaults["width"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : Defaults["width"] | NonNullable<string | number>;
    };
    fill: unknown extends Defaults["fill"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["fill"] ? boolean : boolean | Defaults["fill"]>;
        default: unknown extends Defaults["fill"] ? boolean : boolean | Defaults["fill"];
    };
};
export declare const VTrendline: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        autoDraw: boolean;
        autoDrawEasing: string;
        gradient: string[];
        gradientDirection: "bottom" | "left" | "right" | "top";
        height: string | number;
        labels: import("./util/line.js").SparklineItem[];
        labelSize: string | number;
        lineWidth: string | number;
        itemValue: string;
        modelValue: import("./util/line.js").SparklineItem[];
        padding: string | number;
        showLabels: boolean;
        width: string | number;
        fill: boolean;
    } & {
        autoDrawDuration?: string | number | undefined;
        color?: string | undefined;
        id?: string | undefined;
        min?: string | number | undefined;
        max?: string | number | undefined;
        smooth?: string | number | boolean | undefined;
    } & {
        $children?: {
            default?: ((arg: void) => import("vue").VNodeChild) | undefined;
            label?: ((arg: {
                index: number;
                value: string;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: void) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: void) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: {
                index: number;
                value: string;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: void) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: {
            index: number;
            value: string;
        }) => import("vue").VNodeChild) | undefined;
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        autoDraw: boolean;
        autoDrawEasing: string;
        gradient: string[];
        gradientDirection: "bottom" | "left" | "right" | "top";
        height: string | number;
        labels: import("./util/line.js").SparklineItem[];
        labelSize: string | number;
        lineWidth: string | number;
        itemValue: string;
        modelValue: import("./util/line.js").SparklineItem[];
        padding: string | number;
        showLabels: boolean;
        width: string | number;
        fill: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: void) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        label: (arg: {
            index: number;
            value: string;
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
        autoDraw: boolean;
        autoDrawEasing: string;
        gradient: string[];
        gradientDirection: "bottom" | "left" | "right" | "top";
        height: string | number;
        labels: import("./util/line.js").SparklineItem[];
        labelSize: string | number;
        lineWidth: string | number;
        itemValue: string;
        modelValue: import("./util/line.js").SparklineItem[];
        padding: string | number;
        showLabels: boolean;
        width: string | number;
        fill: boolean;
    } & {
        autoDrawDuration?: string | number | undefined;
        color?: string | undefined;
        id?: string | undefined;
        min?: string | number | undefined;
        max?: string | number | undefined;
        smooth?: string | number | boolean | undefined;
    } & {
        $children?: {
            default?: ((arg: void) => import("vue").VNodeChild) | undefined;
            label?: ((arg: {
                index: number;
                value: string;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: void) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: void) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: {
                index: number;
                value: string;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: void) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: {
            index: number;
            value: string;
        }) => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        autoDraw: boolean;
        autoDrawEasing: string;
        gradient: string[];
        gradientDirection: "bottom" | "left" | "right" | "top";
        height: string | number;
        labels: import("./util/line.js").SparklineItem[];
        labelSize: string | number;
        lineWidth: string | number;
        itemValue: string;
        modelValue: import("./util/line.js").SparklineItem[];
        padding: string | number;
        showLabels: boolean;
        width: string | number;
        fill: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    autoDraw: boolean;
    autoDrawEasing: string;
    gradient: string[];
    gradientDirection: "bottom" | "left" | "right" | "top";
    height: string | number;
    labels: import("./util/line.js").SparklineItem[];
    labelSize: string | number;
    lineWidth: string | number;
    itemValue: string;
    modelValue: import("./util/line.js").SparklineItem[];
    padding: string | number;
    showLabels: boolean;
    width: string | number;
    fill: boolean;
} & {
    autoDrawDuration?: string | number | undefined;
    color?: string | undefined;
    id?: string | undefined;
    min?: string | number | undefined;
    max?: string | number | undefined;
    smooth?: string | number | boolean | undefined;
} & {
    $children?: {
        default?: ((arg: void) => import("vue").VNodeChild) | undefined;
        label?: ((arg: {
            index: number;
            value: string;
        }) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | ((arg: void) => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | ((arg: void) => import("vue").VNodeChild) | undefined;
        label?: false | ((arg: {
            index: number;
            value: string;
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: void) => import("vue").VNodeChild) | undefined;
    "v-slot:label"?: false | ((arg: {
        index: number;
        value: string;
    }) => import("vue").VNodeChild) | undefined;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    autoDraw: boolean;
    autoDrawEasing: string;
    gradient: string[];
    gradientDirection: "bottom" | "left" | "right" | "top";
    height: string | number;
    labels: import("./util/line.js").SparklineItem[];
    labelSize: string | number;
    lineWidth: string | number;
    itemValue: string;
    modelValue: import("./util/line.js").SparklineItem[];
    padding: string | number;
    showLabels: boolean;
    width: string | number;
    fill: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: void) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    label: (arg: {
        index: number;
        value: string;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    autoDraw: BooleanConstructor;
    autoDrawDuration: (NumberConstructor | StringConstructor)[];
    autoDrawEasing: {
        type: StringConstructor;
        default: string;
    };
    color: StringConstructor;
    gradient: {
        type: import("vue").PropType<string[]>;
        default: () => never[];
    };
    gradientDirection: {
        type: import("vue").PropType<"bottom" | "left" | "right" | "top">;
        validator: (val: string) => boolean;
        default: string;
    };
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    labels: {
        type: import("vue").PropType<import("./util/line.js").SparklineItem[]>;
        default: () => never[];
    };
    labelSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    lineWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    id: StringConstructor;
    itemValue: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<import("./util/line.js").SparklineItem[]>;
        default: () => never[];
    };
    min: (NumberConstructor | StringConstructor)[];
    max: (NumberConstructor | StringConstructor)[];
    padding: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showLabels: BooleanConstructor;
    smooth: (BooleanConstructor | NumberConstructor | StringConstructor)[];
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    fill: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    autoDraw: BooleanConstructor;
    autoDrawDuration: (NumberConstructor | StringConstructor)[];
    autoDrawEasing: {
        type: StringConstructor;
        default: string;
    };
    color: StringConstructor;
    gradient: {
        type: import("vue").PropType<string[]>;
        default: () => never[];
    };
    gradientDirection: {
        type: import("vue").PropType<"bottom" | "left" | "right" | "top">;
        validator: (val: string) => boolean;
        default: string;
    };
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    labels: {
        type: import("vue").PropType<import("./util/line.js").SparklineItem[]>;
        default: () => never[];
    };
    labelSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    lineWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    id: StringConstructor;
    itemValue: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<import("./util/line.js").SparklineItem[]>;
        default: () => never[];
    };
    min: (NumberConstructor | StringConstructor)[];
    max: (NumberConstructor | StringConstructor)[];
    padding: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showLabels: BooleanConstructor;
    smooth: (BooleanConstructor | NumberConstructor | StringConstructor)[];
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    fill: BooleanConstructor;
}>>;
export type VTrendline = InstanceType<typeof VTrendline>;
