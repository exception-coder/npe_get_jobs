// Styles

// Types
import type { PropType } from 'vue';
// Types
export type VDatePickerYearsSlots = {
    year: {
        year: {
            text: string;
            value: number;
        };
        i: number;
        props: {
            active: boolean;
            color?: string;
            rounded: boolean;
            text: string;
            variant: 'flat' | 'text';
            onClick: () => void;
        };
    };
};
export declare const makeVDatePickerYearsProps: <Defaults extends {
    color?: unknown;
    height?: unknown;
    min?: unknown;
    max?: unknown;
    modelValue?: unknown;
    allowedYears?: unknown;
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
    allowedYears: unknown extends Defaults["allowedYears"] ? PropType<number[] | ((date: number) => boolean)> : {
        type: PropType<unknown extends Defaults["allowedYears"] ? number[] | ((date: number) => boolean) : number[] | ((date: number) => boolean) | Defaults["allowedYears"]>;
        default: unknown extends Defaults["allowedYears"] ? number[] | ((date: number) => boolean) : Defaults["allowedYears"] | NonNullable<number[] | ((date: number) => boolean)>;
    };
};
export declare const VDatePickerYears: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
        color?: string | undefined;
        height?: string | number | undefined;
        min?: unknown;
        max?: unknown;
        modelValue?: number | undefined;
        allowedYears?: number[] | ((date: number) => boolean) | undefined;
    } & {
        $children?: {
            year?: ((arg: {
                year: {
                    text: string;
                    value: number;
                };
                i: number;
                props: {
                    active: boolean;
                    color?: string | undefined;
                    rounded: boolean;
                    text: string;
                    variant: "flat" | "text";
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | {} | import("vue").VNodeChild;
        "v-slots"?: {
            year?: false | ((arg: {
                year: {
                    text: string;
                    value: number;
                };
                i: number;
                props: {
                    active: boolean;
                    color?: string | undefined;
                    rounded: boolean;
                    text: string;
                    variant: "flat" | "text";
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:year"?: false | ((arg: {
            year: {
                text: string;
                value: number;
            };
            i: number;
            props: {
                active: boolean;
                color?: string | undefined;
                rounded: boolean;
                text: string;
                variant: "flat" | "text";
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((year: number) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (year: number) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
        year: (arg: {
            year: {
                text: string;
                value: number;
            };
            i: number;
            props: {
                active: boolean;
                color?: string | undefined;
                rounded: boolean;
                text: string;
                variant: "flat" | "text";
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
        allowedYears?: number[] | ((date: number) => boolean) | undefined;
    } & {
        $children?: {
            year?: ((arg: {
                year: {
                    text: string;
                    value: number;
                };
                i: number;
                props: {
                    active: boolean;
                    color?: string | undefined;
                    rounded: boolean;
                    text: string;
                    variant: "flat" | "text";
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | {} | import("vue").VNodeChild;
        "v-slots"?: {
            year?: false | ((arg: {
                year: {
                    text: string;
                    value: number;
                };
                i: number;
                props: {
                    active: boolean;
                    color?: string | undefined;
                    rounded: boolean;
                    text: string;
                    variant: "flat" | "text";
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:year"?: false | ((arg: {
            year: {
                text: string;
                value: number;
            };
            i: number;
            props: {
                active: boolean;
                color?: string | undefined;
                rounded: boolean;
                text: string;
                variant: "flat" | "text";
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((year: number) => any) | undefined;
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
    allowedYears?: number[] | ((date: number) => boolean) | undefined;
} & {
    $children?: {
        year?: ((arg: {
            year: {
                text: string;
                value: number;
            };
            i: number;
            props: {
                active: boolean;
                color?: string | undefined;
                rounded: boolean;
                text: string;
                variant: "flat" | "text";
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | {} | import("vue").VNodeChild;
    "v-slots"?: {
        year?: false | ((arg: {
            year: {
                text: string;
                value: number;
            };
            i: number;
            props: {
                active: boolean;
                color?: string | undefined;
                rounded: boolean;
                text: string;
                variant: "flat" | "text";
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:year"?: false | ((arg: {
        year: {
            text: string;
            value: number;
        };
        i: number;
        props: {
            active: boolean;
            color?: string | undefined;
            rounded: boolean;
            text: string;
            variant: "flat" | "text";
            onClick: () => void;
        };
    }) => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((year: number) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (year: number) => true;
}, string, {}, {}, string, import("vue").SlotsType<Partial<{
    year: (arg: {
        year: {
            text: string;
            value: number;
        };
        i: number;
        props: {
            active: boolean;
            color?: string | undefined;
            rounded: boolean;
            text: string;
            variant: "flat" | "text";
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
    allowedYears: PropType<number[] | ((date: number) => boolean)>;
}, import("vue").ExtractPropTypes<{
    color: StringConstructor;
    height: (NumberConstructor | StringConstructor)[];
    min: PropType<unknown>;
    max: PropType<unknown>;
    modelValue: NumberConstructor;
    allowedYears: PropType<number[] | ((date: number) => boolean)>;
}>>;
export type VDatePickerYears = InstanceType<typeof VDatePickerYears>;
