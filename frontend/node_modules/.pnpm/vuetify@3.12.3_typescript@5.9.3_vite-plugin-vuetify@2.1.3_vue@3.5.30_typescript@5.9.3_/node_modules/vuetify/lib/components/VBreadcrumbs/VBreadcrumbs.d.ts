// Styles

import { IconValue } from '../../composables/icons.js';
// Types
import type { PropType } from 'vue';
import type { LinkProps } from '../../composables/router.js';
import type { GenericProps } from '../../util/index.js';
export type InternalBreadcrumbItem = Partial<LinkProps> & {
    title: string;
    disabled?: boolean;
};
export type BreadcrumbItem = string | InternalBreadcrumbItem;
export declare const makeVBreadcrumbsProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    density?: unknown;
    rounded?: unknown;
    tile?: unknown;
    tag?: unknown;
    activeClass?: unknown;
    activeColor?: unknown;
    bgColor?: unknown;
    color?: unknown;
    disabled?: unknown;
    divider?: unknown;
    icon?: unknown;
    items?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
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
    density: unknown extends Defaults["density"] ? {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["density"] ? import("../../composables/density.js").Density : Defaults["density"] | import("../../composables/density.js").Density>;
        default: unknown extends Defaults["density"] ? import("../../composables/density.js").Density : Defaults["density"] | NonNullable<import("../../composables/density.js").Density>;
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
    tile: unknown extends Defaults["tile"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"]>;
        default: unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"];
    };
    tag: unknown extends Defaults["tag"] ? Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    } : Omit<Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : string | Defaults["tag"] | import("../../util/index.js").JSXComponent>;
        default: unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : Defaults["tag"] | NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    activeClass: unknown extends Defaults["activeClass"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["activeClass"] ? string : string | Defaults["activeClass"]>;
        default: unknown extends Defaults["activeClass"] ? string : string | Defaults["activeClass"];
    };
    activeColor: unknown extends Defaults["activeColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"]>;
        default: unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"];
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    divider: unknown extends Defaults["divider"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["divider"] ? string : string | Defaults["divider"]>;
        default: unknown extends Defaults["divider"] ? string : string | Defaults["divider"];
    };
    icon: unknown extends Defaults["icon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["icon"] ? IconValue : Defaults["icon"] | IconValue>;
        default: unknown extends Defaults["icon"] ? IconValue : Defaults["icon"] | NonNullable<IconValue>;
    };
    items: unknown extends Defaults["items"] ? {
        type: PropType<readonly BreadcrumbItem[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<readonly BreadcrumbItem[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["items"] ? readonly BreadcrumbItem[] : readonly BreadcrumbItem[] | Defaults["items"]>;
        default: unknown extends Defaults["items"] ? readonly BreadcrumbItem[] : readonly BreadcrumbItem[] | Defaults["items"];
    };
};
export declare const VBreadcrumbs: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        disabled: boolean;
        divider: string;
    } & {
        class?: any;
        rounded?: string | number | boolean | undefined;
        activeClass?: string | undefined;
        activeColor?: string | undefined;
        bgColor?: string | undefined;
        color?: string | undefined;
        icon?: IconValue | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "items" | "v-slot:default" | "v-slot:divider" | "v-slot:item" | "v-slot:prepend" | "v-slot:title" | "v-slots">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        disabled: boolean;
        divider: string;
    }, true, {}, import("vue").SlotsType<Partial<{
        prepend: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        title: (arg: {
            item: InternalBreadcrumbItem;
            index: number;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        divider: (arg: {
            item: BreadcrumbItem;
            index: number;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        item: (arg: {
            item: InternalBreadcrumbItem;
            index: number;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
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
        density: import("../../composables/density.js").Density;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        disabled: boolean;
        divider: string;
    } & {
        class?: any;
        rounded?: string | number | boolean | undefined;
        activeClass?: string | undefined;
        activeColor?: string | undefined;
        bgColor?: string | undefined;
        color?: string | undefined;
        icon?: IconValue | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        disabled: boolean;
        divider: string;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    density: import("../../composables/density.js").Density;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    disabled: boolean;
    divider: string;
} & {
    class?: any;
    rounded?: string | number | boolean | undefined;
    activeClass?: string | undefined;
    activeColor?: string | undefined;
    bgColor?: string | undefined;
    color?: string | undefined;
    icon?: IconValue | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "items" | "v-slot:default" | "v-slot:divider" | "v-slot:item" | "v-slot:prepend" | "v-slot:title" | "v-slots">, string, {
    style: import("vue").StyleValue;
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    disabled: boolean;
    divider: string;
}, {}, string, import("vue").SlotsType<Partial<{
    prepend: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    title: (arg: {
        item: InternalBreadcrumbItem;
        index: number;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    divider: (arg: {
        item: BreadcrumbItem;
        index: number;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    item: (arg: {
        item: InternalBreadcrumbItem;
        index: number;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T extends BreadcrumbItem>(props: {
    items?: T[] | undefined;
}, slots: {
    prepend: never;
    title: {
        item: InternalBreadcrumbItem;
        index: number;
    };
    divider: {
        item: T;
        index: number;
    };
    item: {
        item: InternalBreadcrumbItem;
        index: number;
    };
    default: never;
}) => GenericProps<{
    items?: T[] | undefined;
}, {
    prepend: never;
    title: {
        item: InternalBreadcrumbItem;
        index: number;
    };
    divider: {
        item: T;
        index: number;
    };
    item: {
        item: InternalBreadcrumbItem;
        index: number;
    };
    default: never;
}>) & import("../../util/index.js").FilterPropsOptions<{
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    tag: Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    activeClass: StringConstructor;
    activeColor: StringConstructor;
    bgColor: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    divider: {
        type: StringConstructor;
        default: string;
    };
    icon: PropType<IconValue>;
    items: {
        type: PropType<readonly BreadcrumbItem[]>;
        default: () => never[];
    };
}, import("vue").ExtractPropTypes<{
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    tag: Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    activeClass: StringConstructor;
    activeColor: StringConstructor;
    bgColor: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    divider: {
        type: StringConstructor;
        default: string;
    };
    icon: PropType<IconValue>;
    items: {
        type: PropType<readonly BreadcrumbItem[]>;
        default: () => never[];
    };
}>>;
export type VBreadcrumbs = InstanceType<typeof VBreadcrumbs>;
