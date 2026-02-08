// Styles

// Types
import type { PropType } from 'vue';
export type VDatePickerMonthsSlots = {
    month: {
        month: {
            text: string;
            value: number;
        };
        i: number;
        props: {
            onClick: () => void;
        };
    };
};
export declare const makeVDatePickerMonthsProps: <Defaults extends {
    color?: unknown;
    height?: unknown;
    min?: unknown;
    max?: unknown;
    modelValue?: unknown;
    year?: unknown;
    allowedMonths?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    height: unknown extends Defaults["height"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : Defaults["height"] | NonNullable<string | number>;
    };
    min: unknown extends Defaults["min"] ? PropType<unknown> : {
        type: PropType<unknown extends Defaults["min"] ? unknown : unknown>;
        default: unknown extends Defaults["min"] ? unknown : {} | Defaults["min"];
    };
    max: unknown extends Defaults["max"] ? PropType<unknown> : {
        type: PropType<unknown extends Defaults["max"] ? unknown : unknown>;
        default: unknown extends Defaults["max"] ? unknown : {} | Defaults["max"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? NumberConstructor : {
        type: PropType<unknown extends Defaults["modelValue"] ? number : number | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? number : number | Defaults["modelValue"];
    };
    year: unknown extends Defaults["year"] ? NumberConstructor : {
        type: PropType<unknown extends Defaults["year"] ? number : number | Defaults["year"]>;
        default: unknown extends Defaults["year"] ? number : number | Defaults["year"];
    };
    allowedMonths: unknown extends Defaults["allowedMonths"] ? PropType<number[] | ((date: number) => boolean)> : {
        type: PropType<unknown extends Defaults["allowedMonths"] ? number[] | ((date: number) => boolean) : number[] | ((date: number) => boolean) | Defaults["allowedMonths"]>;
        default: unknown extends Defaults["allowedMonths"] ? number[] | ((date: number) => boolean) : Defaults["allowedMonths"] | NonNullable<number[] | ((date: number) => boolean)>;
    };
};
export declare const VDatePickerMonths: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
        color?: string | undefined;
        height?: string | number | undefined;
        min?: unknown;
        max?: unknown;
        modelValue?: number | undefined;
        year?: number | undefined;
        allowedMonths?: number[] | ((date: number) => boolean) | undefined;
    } & {
        $children?: {
            month?: ((arg: {
                month: {
                    text: string;
                    value: number;
                };
                i: number;
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | {} | import("vue").VNodeChild;
        "v-slots"?: {
            month?: false | ((arg: {
                month: {
                    text: string;
                    value: number;
                };
                i: number;
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:month"?: false | ((arg: {
            month: {
                text: string;
                value: number;
            };
            i: number;
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((date: any) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (date: any) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
        month: (arg: {
            month: {
                text: string;
                value: number;
            };
            i: number;
            props: {
                onClick: () => void;
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
    }, {} & {
        color?: string | undefined;
        height?: string | number | undefined;
        min?: unknown;
        max?: unknown;
        modelValue?: number | undefined;
        year?: number | undefined;
        allowedMonths?: number[] | ((date: number) => boolean) | undefined;
    } & {
        $children?: {
            month?: ((arg: {
                month: {
                    text: string;
                    value: number;
                };
                i: number;
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | {} | import("vue").VNodeChild;
        "v-slots"?: {
            month?: false | ((arg: {
                month: {
                    text: string;
                    value: number;
                };
                i: number;
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:month"?: false | ((arg: {
            month: {
                text: string;
                value: number;
            };
            i: number;
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((date: any) => any) | undefined;
    }, {}, {}, {}, {}, {}>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{} & {
    color?: string | undefined;
    height?: string | number | undefined;
    min?: unknown;
    max?: unknown;
    modelValue?: number | undefined;
    year?: number | undefined;
    allowedMonths?: number[] | ((date: number) => boolean) | undefined;
} & {
    $children?: {
        month?: ((arg: {
            month: {
                text: string;
                value: number;
            };
            i: number;
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | {} | import("vue").VNodeChild;
    "v-slots"?: {
        month?: false | ((arg: {
            month: {
                text: string;
                value: number;
            };
            i: number;
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:month"?: false | ((arg: {
        month: {
            text: string;
            value: number;
        };
        i: number;
        props: {
            onClick: () => void;
        };
    }) => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((date: any) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (date: any) => true;
}, string, {}, {}, string, import("vue").SlotsType<Partial<{
    month: (arg: {
        month: {
            text: string;
            value: number;
        };
        i: number;
        props: {
            onClick: () => void;
        };
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    color: StringConstructor;
    height: (NumberConstructor | StringConstructor)[];
    min: PropType<unknown>;
    max: PropType<unknown>;
    modelValue: NumberConstructor;
    year: NumberConstructor;
    allowedMonths: PropType<number[] | ((date: number) => boolean)>;
}, import("vue").ExtractPropTypes<{
    color: StringConstructor;
    height: (NumberConstructor | StringConstructor)[];
    min: PropType<unknown>;
    max: PropType<unknown>;
    modelValue: NumberConstructor;
    year: NumberConstructor;
    allowedMonths: PropType<number[] | ((date: number) => boolean)>;
}>>;
export type VDatePickerMonths = InstanceType<typeof VDatePickerMonths>;
