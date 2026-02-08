import { IconValue } from '../../composables/icons.js';
// Types
import type { PropType } from 'vue';
interface ExpansionPanelTitleSlot {
    collapseIcon: IconValue;
    disabled: boolean | undefined;
    expanded: boolean;
    expandIcon: IconValue;
    readonly: boolean;
}
export type VExpansionPanelTitleSlots = {
    default: ExpansionPanelTitleSlot;
    actions: ExpansionPanelTitleSlot;
};
export declare const makeVExpansionPanelTitleProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    color?: unknown;
    expandIcon?: unknown;
    collapseIcon?: unknown;
    hideActions?: unknown;
    focusable?: unknown;
    static?: unknown;
    ripple?: unknown;
    readonly?: unknown;
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
    height: unknown extends Defaults["height"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : Defaults["height"] | NonNullable<string | number>;
    };
    maxHeight: unknown extends Defaults["maxHeight"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["maxHeight"] ? string | number : string | number | Defaults["maxHeight"]>;
        default: unknown extends Defaults["maxHeight"] ? string | number : Defaults["maxHeight"] | NonNullable<string | number>;
    };
    maxWidth: unknown extends Defaults["maxWidth"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["maxWidth"] ? string | number : string | number | Defaults["maxWidth"]>;
        default: unknown extends Defaults["maxWidth"] ? string | number : Defaults["maxWidth"] | NonNullable<string | number>;
    };
    minHeight: unknown extends Defaults["minHeight"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["minHeight"] ? string | number : string | number | Defaults["minHeight"]>;
        default: unknown extends Defaults["minHeight"] ? string | number : Defaults["minHeight"] | NonNullable<string | number>;
    };
    minWidth: unknown extends Defaults["minWidth"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["minWidth"] ? string | number : string | number | Defaults["minWidth"]>;
        default: unknown extends Defaults["minWidth"] ? string | number : Defaults["minWidth"] | NonNullable<string | number>;
    };
    width: unknown extends Defaults["width"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : Defaults["width"] | NonNullable<string | number>;
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    expandIcon: unknown extends Defaults["expandIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["expandIcon"] ? IconValue : Defaults["expandIcon"] | IconValue>;
        default: unknown extends Defaults["expandIcon"] ? IconValue : Defaults["expandIcon"] | NonNullable<IconValue>;
    };
    collapseIcon: unknown extends Defaults["collapseIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["collapseIcon"] ? IconValue : Defaults["collapseIcon"] | IconValue>;
        default: unknown extends Defaults["collapseIcon"] ? IconValue : Defaults["collapseIcon"] | NonNullable<IconValue>;
    };
    hideActions: unknown extends Defaults["hideActions"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"]>;
        default: unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"];
    };
    focusable: unknown extends Defaults["focusable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["focusable"] ? boolean : boolean | Defaults["focusable"]>;
        default: unknown extends Defaults["focusable"] ? boolean : boolean | Defaults["focusable"];
    };
    static: unknown extends Defaults["static"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["static"] ? boolean : boolean | Defaults["static"]>;
        default: unknown extends Defaults["static"] ? boolean : boolean | Defaults["static"];
    };
    ripple: unknown extends Defaults["ripple"] ? {
        type: PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["ripple"] ? boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined : boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | Defaults["ripple"] | undefined>;
        default: unknown extends Defaults["ripple"] ? boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined : Defaults["ripple"] | NonNullable<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
    };
    readonly: unknown extends Defaults["readonly"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"]>;
        default: unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"];
    };
};
export declare const VExpansionPanelTitle: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        expandIcon: IconValue;
        collapseIcon: IconValue;
        hideActions: boolean;
        focusable: boolean;
        static: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        };
        readonly: boolean;
    } & {
        class?: any;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
    } & {
        $children?: {
            default?: ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
            actions?: ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
            actions?: false | ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:actions"?: false | ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        expandIcon: IconValue;
        collapseIcon: IconValue;
        hideActions: boolean;
        focusable: boolean;
        static: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined;
        readonly: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: ExpansionPanelTitleSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        actions: (arg: ExpansionPanelTitleSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        expandIcon: IconValue;
        collapseIcon: IconValue;
        hideActions: boolean;
        focusable: boolean;
        static: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        };
        readonly: boolean;
    } & {
        class?: any;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
    } & {
        $children?: {
            default?: ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
            actions?: ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
            actions?: false | ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:actions"?: false | ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        expandIcon: IconValue;
        collapseIcon: IconValue;
        hideActions: boolean;
        focusable: boolean;
        static: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined;
        readonly: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    expandIcon: IconValue;
    collapseIcon: IconValue;
    hideActions: boolean;
    focusable: boolean;
    static: boolean;
    ripple: boolean | {
        class?: string | undefined;
        keys?: string[] | undefined;
    };
    readonly: boolean;
} & {
    class?: any;
    height?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
} & {
    $children?: {
        default?: ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
        actions?: ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
        actions?: false | ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:actions"?: false | ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    style: import("vue").StyleValue;
    expandIcon: IconValue;
    collapseIcon: IconValue;
    hideActions: boolean;
    focusable: boolean;
    static: boolean;
    ripple: boolean | {
        class?: string | undefined;
        keys?: string[] | undefined;
    } | undefined;
    readonly: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: ExpansionPanelTitleSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    actions: (arg: ExpansionPanelTitleSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    minHeight: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    color: StringConstructor;
    expandIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    collapseIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    hideActions: BooleanConstructor;
    focusable: BooleanConstructor;
    static: BooleanConstructor;
    ripple: {
        type: PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    };
    readonly: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    minHeight: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    color: StringConstructor;
    expandIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    collapseIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    hideActions: BooleanConstructor;
    focusable: BooleanConstructor;
    static: BooleanConstructor;
    ripple: {
        type: PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    };
    readonly: BooleanConstructor;
}>>;
export type VExpansionPanelTitle = InstanceType<typeof VExpansionPanelTitle>;

