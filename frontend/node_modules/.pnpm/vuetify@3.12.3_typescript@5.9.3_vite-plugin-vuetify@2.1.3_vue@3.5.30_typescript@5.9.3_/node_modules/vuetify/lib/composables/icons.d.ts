// Types
import type { InjectionKey, MaybeRefOrGetter, PropType } from 'vue';
import type { JSXComponent } from '../util/index.js';
export type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
export declare const IconValue: PropType<IconValue>;
export interface IconAliases {
    [name: string]: IconValue;
    collapse: IconValue;
    complete: IconValue;
    cancel: IconValue;
    close: IconValue;
    delete: IconValue;
    clear: IconValue;
    success: IconValue;
    info: IconValue;
    warning: IconValue;
    error: IconValue;
    prev: IconValue;
    next: IconValue;
    checkboxOn: IconValue;
    checkboxOff: IconValue;
    checkboxIndeterminate: IconValue;
    delimiter: IconValue;
    sortAsc: IconValue;
    sortDesc: IconValue;
    expand: IconValue;
    menu: IconValue;
    subgroup: IconValue;
    dropdown: IconValue;
    radioOn: IconValue;
    radioOff: IconValue;
    edit: IconValue;
    ratingEmpty: IconValue;
    ratingFull: IconValue;
    ratingHalf: IconValue;
    loading: IconValue;
    first: IconValue;
    last: IconValue;
    unfold: IconValue;
    file: IconValue;
    plus: IconValue;
    minus: IconValue;
    calendar: IconValue;
    treeviewCollapse: IconValue;
    treeviewExpand: IconValue;
    eyeDropper: IconValue;
    upload: IconValue;
    color: IconValue;
    // Font Awesome does not have most of these icons!
    command: IconValue;
    ctrl: IconValue;
    space: IconValue;
    shift: IconValue;
    alt: IconValue;
    enter: IconValue;
    arrowup: IconValue;
    arrowdown: IconValue;
    arrowleft: IconValue;
    arrowright: IconValue;
    backspace: IconValue;
}
export interface IconProps {
    tag: string | JSXComponent;
    icon?: IconValue;
    disabled?: boolean;
}
type IconComponent = JSXComponent<IconProps>;
export interface IconSet {
    component: IconComponent;
}
export type InternalIconOptions = {
    defaultSet: string;
    aliases: Partial<IconAliases>;
    sets: Record<string, IconSet>;
};
export type IconOptions = Partial<InternalIconOptions>;
type IconInstance = {
    component: IconComponent;
    icon?: IconValue;
};
export declare const IconSymbol: InjectionKey<InternalIconOptions>;
export declare const makeIconProps: <Defaults extends {
    icon?: unknown;
    tag?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    icon: unknown extends Defaults["icon"] ? {
        type: PropType<IconValue>;
    } : Omit<{
        type: PropType<IconValue>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["icon"] ? IconValue : Defaults["icon"] | IconValue>;
        default: unknown extends Defaults["icon"] ? IconValue : Defaults["icon"] | NonNullable<IconValue>;
    };
    tag: unknown extends Defaults["tag"] ? {
        type: PropType<string | JSXComponent>;
        required: true;
    } : Omit<{
        type: PropType<string | JSXComponent>;
        required: true;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["tag"] ? string | JSXComponent : string | Defaults["tag"] | JSXComponent>;
        default: unknown extends Defaults["tag"] ? string | JSXComponent : Defaults["tag"] | NonNullable<string | JSXComponent>;
    };
};
export declare const VComponentIcon: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        tag: string | JSXComponent;
    } & {
        icon?: IconValue | undefined;
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
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
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
        tag: string | JSXComponent;
    } & {
        icon?: IconValue | undefined;
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
    }, () => JSX.Element, {}, {}, {}, {}>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    tag: string | JSXComponent;
} & {
    icon?: IconValue | undefined;
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../util/index.js").FilterPropsOptions<{
    icon: {
        type: PropType<IconValue>;
    };
    tag: {
        type: PropType<string | JSXComponent>;
        required: true;
    };
}, import("vue").ExtractPropTypes<{
    icon: {
        type: PropType<IconValue>;
    };
    tag: {
        type: PropType<string | JSXComponent>;
        required: true;
    };
}>>;
export type VComponentIcon = InstanceType<typeof VComponentIcon>;
export declare const VSvgIcon: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        icon: {
            type: PropType<IconValue>;
        };
        tag: {
            type: PropType<string | JSXComponent>;
            required: true;
        };
    }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        icon: {
            type: PropType<IconValue>;
        };
        tag: {
            type: PropType<string | JSXComponent>;
            required: true;
        };
    }>>, () => JSX.Element, {}, {}, {}, {}>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    icon: {
        type: PropType<IconValue>;
    };
    tag: {
        type: PropType<string | JSXComponent>;
        required: true;
    };
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../util/index.js").FilterPropsOptions<{
    icon: {
        type: PropType<IconValue>;
    };
    tag: {
        type: PropType<string | JSXComponent>;
        required: true;
    };
}, import("vue").ExtractPropTypes<{
    icon: {
        type: PropType<IconValue>;
    };
    tag: {
        type: PropType<string | JSXComponent>;
        required: true;
    };
}>>;
export type VSvgIcon = InstanceType<typeof VSvgIcon>;
export declare const VLigatureIcon: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        icon: {
            type: PropType<IconValue>;
        };
        tag: {
            type: PropType<string | JSXComponent>;
            required: true;
        };
    }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        icon: {
            type: PropType<IconValue>;
        };
        tag: {
            type: PropType<string | JSXComponent>;
            required: true;
        };
    }>>, () => JSX.Element, {}, {}, {}, {}>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    icon: {
        type: PropType<IconValue>;
    };
    tag: {
        type: PropType<string | JSXComponent>;
        required: true;
    };
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../util/index.js").FilterPropsOptions<{
    icon: {
        type: PropType<IconValue>;
    };
    tag: {
        type: PropType<string | JSXComponent>;
        required: true;
    };
}, import("vue").ExtractPropTypes<{
    icon: {
        type: PropType<IconValue>;
    };
    tag: {
        type: PropType<string | JSXComponent>;
        required: true;
    };
}>>;
export type VLigatureIcon = InstanceType<typeof VLigatureIcon>;
export declare const VClassIcon: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        icon: {
            type: PropType<IconValue>;
        };
        tag: {
            type: PropType<string | JSXComponent>;
            required: true;
        };
    }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        icon: {
            type: PropType<IconValue>;
        };
        tag: {
            type: PropType<string | JSXComponent>;
            required: true;
        };
    }>>, () => JSX.Element, {}, {}, {}, {}>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    icon: {
        type: PropType<IconValue>;
    };
    tag: {
        type: PropType<string | JSXComponent>;
        required: true;
    };
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../util/index.js").FilterPropsOptions<{
    icon: {
        type: PropType<IconValue>;
    };
    tag: {
        type: PropType<string | JSXComponent>;
        required: true;
    };
}, import("vue").ExtractPropTypes<{
    icon: {
        type: PropType<IconValue>;
    };
    tag: {
        type: PropType<string | JSXComponent>;
        required: true;
    };
}>>;
export type VClassIcon = InstanceType<typeof VClassIcon>;
export declare const useIcon: (props: MaybeRefOrGetter<IconValue | undefined>) => {
    iconData: import("vue").ComputedRef<IconInstance>;
};

