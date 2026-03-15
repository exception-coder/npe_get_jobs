// Types
import type { GenericProps, TemplateRef } from '../../util/index.js';
export declare const makeVVirtualScrollItemProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    renderless?: unknown;
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
    renderless: unknown extends Defaults["renderless"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["renderless"] ? boolean : boolean | Defaults["renderless"]>;
        default: unknown extends Defaults["renderless"] ? boolean : boolean | Defaults["renderless"];
    };
};
export declare const VVirtualScrollItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    } & {
        class?: any;
    } & {
        "onUpdate:height"?: ((height: number) => any) | undefined;
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        "update:height": (height: number) => true;
    }, "$children" | "renderless" | "v-slot:default" | "v-slots">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: {
            itemRef: TemplateRef;
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
    } & {
        class?: any;
    } & {
        "onUpdate:height"?: ((height: number) => any) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
} & {
    class?: any;
} & {
    "onUpdate:height"?: ((height: number) => any) | undefined;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    "update:height": (height: number) => true;
}, "$children" | "renderless" | "v-slot:default" | "v-slots">, string, {
    style: import("vue").StyleValue;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: {
        itemRef: TemplateRef;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <Renderless extends boolean = false>(props: {
    renderless?: Renderless | undefined;
}, slots: {
    default: Renderless extends true ? {
        itemRef: TemplateRef;
    } : never;
}) => GenericProps<{
    renderless?: Renderless | undefined;
}, {
    default: Renderless extends true ? {
        itemRef: TemplateRef;
    } : never;
}>) & import("../../util/index.js").FilterPropsOptions<{
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    renderless: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    renderless: BooleanConstructor;
}>>;
