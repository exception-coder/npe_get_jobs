// Types
import type { PropType } from 'vue';
export declare const makeVPieSegmentProps: <Defaults extends {
    reveal?: unknown;
    active?: unknown;
    rotate?: unknown;
    value?: unknown;
    color?: unknown;
    innerCut?: unknown;
    hoverScale?: unknown;
    gap?: unknown;
    rounded?: unknown;
    animation?: unknown;
    pattern?: unknown;
    hideSlice?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    reveal: unknown extends Defaults["reveal"] ? {
        type: PropType<boolean | {
            duration?: number | undefined;
        }>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean | {
            duration?: number | undefined;
        }>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["reveal"] ? boolean | {
            duration?: number | undefined;
        } : boolean | {
            duration?: number | undefined;
        } | Defaults["reveal"]>;
        default: unknown extends Defaults["reveal"] ? boolean | {
            duration?: number | undefined;
        } : Defaults["reveal"] | NonNullable<boolean | {
            duration?: number | undefined;
        }>;
    };
    active: unknown extends Defaults["active"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"]>;
        default: unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"];
    };
    rotate: unknown extends Defaults["rotate"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["rotate"] ? string | number : string | number | Defaults["rotate"]>;
        default: unknown extends Defaults["rotate"] ? string | number : Defaults["rotate"] | NonNullable<string | number>;
    };
    value: unknown extends Defaults["value"] ? {
        type: NumberConstructor;
        default: number;
    } : Omit<{
        type: NumberConstructor;
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["value"] ? number : number | Defaults["value"]>;
        default: unknown extends Defaults["value"] ? number : number | Defaults["value"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    innerCut: unknown extends Defaults["innerCut"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["innerCut"] ? string | number : string | number | Defaults["innerCut"]>;
        default: unknown extends Defaults["innerCut"] ? string | number : Defaults["innerCut"] | NonNullable<string | number>;
    };
    hoverScale: unknown extends Defaults["hoverScale"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["hoverScale"] ? string | number : string | number | Defaults["hoverScale"]>;
        default: unknown extends Defaults["hoverScale"] ? string | number : Defaults["hoverScale"] | NonNullable<string | number>;
    };
    gap: unknown extends Defaults["gap"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["gap"] ? string | number : string | number | Defaults["gap"]>;
        default: unknown extends Defaults["gap"] ? string | number : Defaults["gap"] | NonNullable<string | number>;
    };
    rounded: unknown extends Defaults["rounded"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["rounded"] ? string | number : string | number | Defaults["rounded"]>;
        default: unknown extends Defaults["rounded"] ? string | number : Defaults["rounded"] | NonNullable<string | number>;
    };
    animation: unknown extends Defaults["animation"] ? {
        type: PropType<boolean | {
            duration?: number | undefined;
            easing?: "easeInCubic" | "easeInOutCubic" | "easeInOutQuad" | "easeInOutQuart" | "easeInOutQuint" | "easeInQuad" | "easeInQuart" | "easeInQuint" | "easeOutCubic" | "easeOutQuad" | "easeOutQuart" | "easeOutQuint" | "instant" | "linear" | undefined;
        }>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean | {
            duration?: number | undefined;
            easing?: "easeInCubic" | "easeInOutCubic" | "easeInOutQuad" | "easeInOutQuart" | "easeInOutQuint" | "easeInQuad" | "easeInQuart" | "easeInQuint" | "easeOutCubic" | "easeOutQuad" | "easeOutQuart" | "easeOutQuint" | "instant" | "linear" | undefined;
        }>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["animation"] ? boolean | {
            duration?: number | undefined;
            easing?: "easeInCubic" | "easeInOutCubic" | "easeInOutQuad" | "easeInOutQuart" | "easeInOutQuint" | "easeInQuad" | "easeInQuart" | "easeInQuint" | "easeOutCubic" | "easeOutQuad" | "easeOutQuart" | "easeOutQuint" | "instant" | "linear" | undefined;
        } : boolean | {
            duration?: number | undefined;
            easing?: "easeInCubic" | "easeInOutCubic" | "easeInOutQuad" | "easeInOutQuart" | "easeInOutQuint" | "easeInQuad" | "easeInQuart" | "easeInQuint" | "easeOutCubic" | "easeOutQuad" | "easeOutQuart" | "easeOutQuint" | "instant" | "linear" | undefined;
        } | Defaults["animation"]>;
        default: unknown extends Defaults["animation"] ? boolean | {
            duration?: number | undefined;
            easing?: "easeInCubic" | "easeInOutCubic" | "easeInOutQuad" | "easeInOutQuart" | "easeInOutQuint" | "easeInQuad" | "easeInQuart" | "easeInQuint" | "easeOutCubic" | "easeOutQuad" | "easeOutQuart" | "easeOutQuint" | "instant" | "linear" | undefined;
        } : Defaults["animation"] | NonNullable<boolean | {
            duration?: number | undefined;
            easing?: "easeInCubic" | "easeInOutCubic" | "easeInOutQuad" | "easeInOutQuart" | "easeInOutQuint" | "easeInQuad" | "easeInQuart" | "easeInQuint" | "easeOutCubic" | "easeOutQuad" | "easeOutQuart" | "easeOutQuint" | "instant" | "linear" | undefined;
        }>;
    };
    pattern: unknown extends Defaults["pattern"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["pattern"] ? string : string | Defaults["pattern"]>;
        default: unknown extends Defaults["pattern"] ? string : string | Defaults["pattern"];
    };
    hideSlice: unknown extends Defaults["hideSlice"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideSlice"] ? boolean : boolean | Defaults["hideSlice"]>;
        default: unknown extends Defaults["hideSlice"] ? boolean : boolean | Defaults["hideSlice"];
    };
};
export declare const VPieSegment: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        reveal: boolean | {
            duration?: number | undefined;
        };
        active: boolean;
        value: number;
        hoverScale: string | number;
        animation: boolean | {
            duration?: number | undefined;
            easing?: "easeInCubic" | "easeInOutCubic" | "easeInOutQuad" | "easeInOutQuart" | "easeInOutQuint" | "easeInQuad" | "easeInQuart" | "easeInQuint" | "easeOutCubic" | "easeOutQuad" | "easeOutQuart" | "easeOutQuint" | "instant" | "linear" | undefined;
        };
        hideSlice: boolean;
    } & {
        rotate?: string | number | undefined;
        color?: string | undefined;
        innerCut?: string | number | undefined;
        gap?: string | number | undefined;
        rounded?: string | number | undefined;
        pattern?: string | undefined;
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
        "onUpdate:active"?: ((val: boolean) => any) | undefined;
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:active": (val: boolean) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        reveal: boolean | {
            duration?: number | undefined;
        };
        active: boolean;
        value: number;
        hoverScale: string | number;
        animation: boolean | {
            duration?: number | undefined;
            easing?: "easeInCubic" | "easeInOutCubic" | "easeInOutQuad" | "easeInOutQuart" | "easeInOutQuint" | "easeInQuad" | "easeInQuart" | "easeInQuint" | "easeOutCubic" | "easeOutQuad" | "easeOutQuart" | "easeOutQuint" | "instant" | "linear" | undefined;
        };
        hideSlice: boolean;
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
        reveal: boolean | {
            duration?: number | undefined;
        };
        active: boolean;
        value: number;
        hoverScale: string | number;
        animation: boolean | {
            duration?: number | undefined;
            easing?: "easeInCubic" | "easeInOutCubic" | "easeInOutQuad" | "easeInOutQuart" | "easeInOutQuint" | "easeInQuad" | "easeInQuart" | "easeInQuint" | "easeOutCubic" | "easeOutQuad" | "easeOutQuart" | "easeOutQuint" | "instant" | "linear" | undefined;
        };
        hideSlice: boolean;
    } & {
        rotate?: string | number | undefined;
        color?: string | undefined;
        innerCut?: string | number | undefined;
        gap?: string | number | undefined;
        rounded?: string | number | undefined;
        pattern?: string | undefined;
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
        "onUpdate:active"?: ((val: boolean) => any) | undefined;
    }, () => JSX.Element, {}, {}, {}, {
        reveal: boolean | {
            duration?: number | undefined;
        };
        active: boolean;
        value: number;
        hoverScale: string | number;
        animation: boolean | {
            duration?: number | undefined;
            easing?: "easeInCubic" | "easeInOutCubic" | "easeInOutQuad" | "easeInOutQuart" | "easeInOutQuint" | "easeInQuad" | "easeInQuart" | "easeInQuint" | "easeOutCubic" | "easeOutQuad" | "easeOutQuart" | "easeOutQuint" | "instant" | "linear" | undefined;
        };
        hideSlice: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    reveal: boolean | {
        duration?: number | undefined;
    };
    active: boolean;
    value: number;
    hoverScale: string | number;
    animation: boolean | {
        duration?: number | undefined;
        easing?: "easeInCubic" | "easeInOutCubic" | "easeInOutQuad" | "easeInOutQuart" | "easeInOutQuint" | "easeInQuad" | "easeInQuart" | "easeInQuint" | "easeOutCubic" | "easeOutQuad" | "easeOutQuart" | "easeOutQuint" | "instant" | "linear" | undefined;
    };
    hideSlice: boolean;
} & {
    rotate?: string | number | undefined;
    color?: string | undefined;
    innerCut?: string | number | undefined;
    gap?: string | number | undefined;
    rounded?: string | number | undefined;
    pattern?: string | undefined;
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
    "onUpdate:active"?: ((val: boolean) => any) | undefined;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:active": (val: boolean) => true;
}, string, {
    reveal: boolean | {
        duration?: number | undefined;
    };
    active: boolean;
    value: number;
    hoverScale: string | number;
    animation: boolean | {
        duration?: number | undefined;
        easing?: "easeInCubic" | "easeInOutCubic" | "easeInOutQuad" | "easeInOutQuart" | "easeInOutQuint" | "easeInQuad" | "easeInQuart" | "easeInQuint" | "easeOutCubic" | "easeOutQuad" | "easeOutQuart" | "easeOutQuint" | "instant" | "linear" | undefined;
    };
    hideSlice: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    reveal: {
        type: PropType<boolean | {
            duration?: number | undefined;
        }>;
        default: boolean;
    };
    active: BooleanConstructor;
    rotate: (NumberConstructor | StringConstructor)[];
    value: {
        type: NumberConstructor;
        default: number;
    };
    color: StringConstructor;
    innerCut: (NumberConstructor | StringConstructor)[];
    hoverScale: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    gap: (NumberConstructor | StringConstructor)[];
    rounded: (NumberConstructor | StringConstructor)[];
    animation: {
        type: PropType<boolean | {
            duration?: number | undefined;
            easing?: "easeInCubic" | "easeInOutCubic" | "easeInOutQuad" | "easeInOutQuart" | "easeInOutQuint" | "easeInQuad" | "easeInQuart" | "easeInQuint" | "easeOutCubic" | "easeOutQuad" | "easeOutQuart" | "easeOutQuint" | "instant" | "linear" | undefined;
        }>;
        default: boolean;
    };
    pattern: StringConstructor;
    hideSlice: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    reveal: {
        type: PropType<boolean | {
            duration?: number | undefined;
        }>;
        default: boolean;
    };
    active: BooleanConstructor;
    rotate: (NumberConstructor | StringConstructor)[];
    value: {
        type: NumberConstructor;
        default: number;
    };
    color: StringConstructor;
    innerCut: (NumberConstructor | StringConstructor)[];
    hoverScale: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    gap: (NumberConstructor | StringConstructor)[];
    rounded: (NumberConstructor | StringConstructor)[];
    animation: {
        type: PropType<boolean | {
            duration?: number | undefined;
            easing?: "easeInCubic" | "easeInOutCubic" | "easeInOutQuad" | "easeInOutQuart" | "easeInOutQuint" | "easeInQuad" | "easeInQuart" | "easeInQuint" | "easeOutCubic" | "easeOutQuad" | "easeOutQuart" | "easeOutQuint" | "instant" | "linear" | undefined;
        }>;
        default: boolean;
    };
    pattern: StringConstructor;
    hideSlice: BooleanConstructor;
}>>;
export type VPieSegment = InstanceType<typeof VPieSegment>;
