export declare const makeVStepperVerticalActionsProps: <Defaults extends {
    color?: unknown;
    disabled?: unknown;
    prevText?: unknown;
    nextText?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    disabled: unknown extends Defaults["disabled"] ? {
        type: import("vue").PropType<"next" | "prev" | boolean>;
        default: boolean;
    } : Omit<{
        type: import("vue").PropType<"next" | "prev" | boolean>;
        default: boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? "next" | "prev" | boolean : "next" | "prev" | boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? "next" | "prev" | boolean : Defaults["disabled"] | NonNullable<"next" | "prev" | boolean>;
    };
    prevText: unknown extends Defaults["prevText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["prevText"] ? string : string | Defaults["prevText"]>;
        default: unknown extends Defaults["prevText"] ? string : string | Defaults["prevText"];
    };
    nextText: unknown extends Defaults["nextText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["nextText"] ? string : string | Defaults["nextText"]>;
        default: unknown extends Defaults["nextText"] ? string : string | Defaults["nextText"];
    };
};
export declare const VStepperVerticalActions: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        disabled: "next" | "prev" | boolean;
        prevText: string;
        nextText: string;
    } & {
        color?: string | undefined;
    } & {
        $children?: {
            prev?: ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            next?: ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | {} | import("vue").VNodeChild;
        "v-slots"?: {
            prev?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            next?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:next"?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:prev"?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onClick:next"?: (() => any) | undefined;
        "onClick:prev"?: (() => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "click:prev": () => true;
        "click:next": () => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        disabled: "next" | "prev" | boolean;
        prevText: string;
        nextText: string;
    }, true, {}, import("vue").SlotsType<Partial<{
        prev: (arg: {
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        next: (arg: {
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
    }, {
        disabled: "next" | "prev" | boolean;
        prevText: string;
        nextText: string;
    } & {
        color?: string | undefined;
    } & {
        $children?: {
            prev?: ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            next?: ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | {} | import("vue").VNodeChild;
        "v-slots"?: {
            prev?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            next?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:next"?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:prev"?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onClick:next"?: (() => any) | undefined;
        "onClick:prev"?: (() => any) | undefined;
    }, {}, {}, {}, {}, {
        disabled: "next" | "prev" | boolean;
        prevText: string;
        nextText: string;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    disabled: "next" | "prev" | boolean;
    prevText: string;
    nextText: string;
} & {
    color?: string | undefined;
} & {
    $children?: {
        prev?: ((arg: {
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        next?: ((arg: {
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | {} | import("vue").VNodeChild;
    "v-slots"?: {
        prev?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        next?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:next"?: false | ((arg: {
        props: {
            onClick: () => void;
        };
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:prev"?: false | ((arg: {
        props: {
            onClick: () => void;
        };
    }) => import("vue").VNodeChild) | undefined;
} & {
    "onClick:next"?: (() => any) | undefined;
    "onClick:prev"?: (() => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "click:prev": () => true;
    "click:next": () => true;
}, string, {
    disabled: "next" | "prev" | boolean;
    prevText: string;
    nextText: string;
}, {}, string, import("vue").SlotsType<Partial<{
    prev: (arg: {
        props: {
            onClick: () => void;
        };
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    next: (arg: {
        props: {
            onClick: () => void;
        };
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    color: StringConstructor;
    disabled: {
        type: import("vue").PropType<"next" | "prev" | boolean>;
        default: boolean;
    };
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
}, import("vue").ExtractPropTypes<{
    color: StringConstructor;
    disabled: {
        type: import("vue").PropType<"next" | "prev" | boolean>;
        default: boolean;
    };
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
}>>;
export type VStepperVerticalActions = InstanceType<typeof VStepperVerticalActions>;
