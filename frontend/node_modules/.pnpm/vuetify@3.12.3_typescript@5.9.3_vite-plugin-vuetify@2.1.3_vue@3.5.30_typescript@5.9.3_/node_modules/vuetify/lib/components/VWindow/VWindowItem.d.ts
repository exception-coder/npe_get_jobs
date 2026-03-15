export declare const makeVWindowItemProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    value?: unknown;
    disabled?: unknown;
    selectedClass?: unknown;
    eager?: unknown;
    reverseTransition?: unknown;
    transition?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
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
    value: unknown extends Defaults["value"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["value"] ? any : any>;
        default: unknown extends Defaults["value"] ? any : any;
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    selectedClass: unknown extends Defaults["selectedClass"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"]>;
        default: unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"];
    };
    eager: unknown extends Defaults["eager"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"]>;
        default: unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"];
    };
    reverseTransition: unknown extends Defaults["reverseTransition"] ? {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    } : Omit<{
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["reverseTransition"] ? string | boolean : string | boolean | Defaults["reverseTransition"]>;
        default: unknown extends Defaults["reverseTransition"] ? string | boolean : Defaults["reverseTransition"] | NonNullable<string | boolean>;
    };
    transition: unknown extends Defaults["transition"] ? {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    } : Omit<{
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["transition"] ? string | boolean : string | boolean | Defaults["transition"]>;
        default: unknown extends Defaults["transition"] ? string | boolean : Defaults["transition"] | NonNullable<string | boolean>;
    };
};
export declare const VWindowItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        disabled: boolean;
        eager: boolean;
    } & {
        class?: any;
        value?: any;
        selectedClass?: string | undefined;
        reverseTransition?: string | boolean | undefined;
        transition?: string | boolean | undefined;
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
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    }, {
        groupItem: import("../../composables/group.js").GroupItemProvide;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "group:selected": (val: {
            value: boolean;
        }) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        disabled: boolean;
        eager: boolean;
        reverseTransition: string | boolean;
        transition: string | boolean;
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
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        disabled: boolean;
        eager: boolean;
    } & {
        class?: any;
        value?: any;
        selectedClass?: string | undefined;
        reverseTransition?: string | boolean | undefined;
        transition?: string | boolean | undefined;
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
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    }, {
        groupItem: import("../../composables/group.js").GroupItemProvide;
    }, {}, {}, {}, {
        style: import("vue").StyleValue;
        disabled: boolean;
        eager: boolean;
        reverseTransition: string | boolean;
        transition: string | boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    disabled: boolean;
    eager: boolean;
} & {
    class?: any;
    value?: any;
    selectedClass?: string | undefined;
    reverseTransition?: string | boolean | undefined;
    transition?: string | boolean | undefined;
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
    "onGroup:selected"?: ((val: {
        value: boolean;
    }) => any) | undefined;
}, {
    groupItem: import("../../composables/group.js").GroupItemProvide;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "group:selected": (val: {
        value: boolean;
    }) => true;
}, string, {
    style: import("vue").StyleValue;
    disabled: boolean;
    eager: boolean;
    reverseTransition: string | boolean;
    transition: string | boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    eager: BooleanConstructor;
    reverseTransition: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    };
    transition: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    };
}, import("vue").ExtractPropTypes<{
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    eager: BooleanConstructor;
    reverseTransition: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    };
    transition: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    };
}>>;
export type VWindowItem = InstanceType<typeof VWindowItem>;
