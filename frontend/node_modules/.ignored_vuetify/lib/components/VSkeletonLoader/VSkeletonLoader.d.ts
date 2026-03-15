// Styles

// Types
import type { PropType, VNode } from 'vue';
type VSkeletonBone<T> = T | VSkeletonBone<T>[];
export type VSkeletonBones = VSkeletonBone<VNode>;
export type VSkeletonLoaderType = keyof typeof rootTypes;
export declare const rootTypes: {
    readonly actions: "button@2";
    readonly article: "heading, paragraph";
    readonly avatar: "avatar";
    readonly button: "button";
    readonly card: "image, heading";
    readonly "card-avatar": "image, list-item-avatar";
    readonly chip: "chip";
    readonly "date-picker": "list-item, heading, divider, date-picker-options, date-picker-days, actions";
    readonly "date-picker-options": "text, avatar@2";
    readonly "date-picker-days": "avatar@28";
    readonly divider: "divider";
    readonly heading: "heading";
    readonly image: "image";
    readonly "list-item": "text";
    readonly "list-item-avatar": "avatar, text";
    readonly "list-item-two-line": "sentences";
    readonly "list-item-avatar-two-line": "avatar, sentences";
    readonly "list-item-three-line": "paragraph";
    readonly "list-item-avatar-three-line": "avatar, paragraph";
    readonly ossein: "ossein";
    readonly paragraph: "text@3";
    readonly sentences: "text@2";
    readonly subtitle: "text";
    readonly table: "table-heading, table-thead, table-tbody, table-tfoot";
    readonly "table-heading": "chip, text";
    readonly "table-thead": "heading@6";
    readonly "table-tbody": "table-row-divider@6";
    readonly "table-row-divider": "table-row, divider";
    readonly "table-row": "text@6";
    readonly "table-tfoot": "text@2, avatar@2";
    readonly text: "text";
};
export declare const makeVSkeletonLoaderProps: <Defaults extends {
    theme?: unknown;
    elevation?: unknown;
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    boilerplate?: unknown;
    color?: unknown;
    loading?: unknown;
    loadingText?: unknown;
    type?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    elevation: unknown extends Defaults["elevation"] ? {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["elevation"] ? string | number : string | number | Defaults["elevation"]>;
        default: unknown extends Defaults["elevation"] ? string | number : Defaults["elevation"] | NonNullable<string | number>;
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
    boilerplate: unknown extends Defaults["boilerplate"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["boilerplate"] ? boolean : boolean | Defaults["boilerplate"]>;
        default: unknown extends Defaults["boilerplate"] ? boolean : boolean | Defaults["boilerplate"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    loading: unknown extends Defaults["loading"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["loading"] ? boolean : boolean | Defaults["loading"]>;
        default: unknown extends Defaults["loading"] ? boolean : boolean | Defaults["loading"];
    };
    loadingText: unknown extends Defaults["loadingText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["loadingText"] ? string : string | Defaults["loadingText"]>;
        default: unknown extends Defaults["loadingText"] ? string : string | Defaults["loadingText"];
    };
    type: unknown extends Defaults["type"] ? {
        type: PropType<"actions" | "article" | "avatar" | "button" | "card" | "card-avatar" | "chip" | "date-picker" | "date-picker-days" | "date-picker-options" | "divider" | "heading" | "image" | "list-item" | "list-item-avatar" | "list-item-avatar-three-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-two-line" | "ossein" | "paragraph" | "sentences" | "subtitle" | "table" | "table-heading" | "table-row" | "table-row-divider" | "table-tbody" | "table-tfoot" | "table-thead" | "text" | readonly ("actions" | "article" | "avatar" | "button" | "card" | "card-avatar" | "chip" | "date-picker" | "date-picker-days" | "date-picker-options" | "divider" | "heading" | "image" | "list-item" | "list-item-avatar" | "list-item-avatar-three-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-two-line" | "ossein" | "paragraph" | "sentences" | "subtitle" | "table" | "table-heading" | "table-row" | "table-row-divider" | "table-tbody" | "table-tfoot" | "table-thead" | "text" | (string & {}))[] | (string & {})>;
        default: string;
    } : Omit<{
        type: PropType<"actions" | "article" | "avatar" | "button" | "card" | "card-avatar" | "chip" | "date-picker" | "date-picker-days" | "date-picker-options" | "divider" | "heading" | "image" | "list-item" | "list-item-avatar" | "list-item-avatar-three-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-two-line" | "ossein" | "paragraph" | "sentences" | "subtitle" | "table" | "table-heading" | "table-row" | "table-row-divider" | "table-tbody" | "table-tfoot" | "table-thead" | "text" | readonly ("actions" | "article" | "avatar" | "button" | "card" | "card-avatar" | "chip" | "date-picker" | "date-picker-days" | "date-picker-options" | "divider" | "heading" | "image" | "list-item" | "list-item-avatar" | "list-item-avatar-three-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-two-line" | "ossein" | "paragraph" | "sentences" | "subtitle" | "table" | "table-heading" | "table-row" | "table-row-divider" | "table-tbody" | "table-tfoot" | "table-thead" | "text" | (string & {}))[] | (string & {})>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["type"] ? "actions" | "article" | "avatar" | "button" | "card" | "card-avatar" | "chip" | "date-picker" | "date-picker-days" | "date-picker-options" | "divider" | "heading" | "image" | "list-item" | "list-item-avatar" | "list-item-avatar-three-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-two-line" | "ossein" | "paragraph" | "sentences" | "subtitle" | "table" | "table-heading" | "table-row" | "table-row-divider" | "table-tbody" | "table-tfoot" | "table-thead" | "text" | readonly ("actions" | "article" | "avatar" | "button" | "card" | "card-avatar" | "chip" | "date-picker" | "date-picker-days" | "date-picker-options" | "divider" | "heading" | "image" | "list-item" | "list-item-avatar" | "list-item-avatar-three-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-two-line" | "ossein" | "paragraph" | "sentences" | "subtitle" | "table" | "table-heading" | "table-row" | "table-row-divider" | "table-tbody" | "table-tfoot" | "table-thead" | "text" | (string & {}))[] | (string & {}) : "actions" | "article" | "avatar" | "button" | "card" | "card-avatar" | "chip" | "date-picker" | "date-picker-days" | "date-picker-options" | "divider" | "heading" | "image" | "list-item" | "list-item-avatar" | "list-item-avatar-three-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-two-line" | "ossein" | "paragraph" | "sentences" | "subtitle" | "table" | "table-heading" | "table-row" | "table-row-divider" | "table-tbody" | "table-tfoot" | "table-thead" | "text" | readonly ("actions" | "article" | "avatar" | "button" | "card" | "card-avatar" | "chip" | "date-picker" | "date-picker-days" | "date-picker-options" | "divider" | "heading" | "image" | "list-item" | "list-item-avatar" | "list-item-avatar-three-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-two-line" | "ossein" | "paragraph" | "sentences" | "subtitle" | "table" | "table-heading" | "table-row" | "table-row-divider" | "table-tbody" | "table-tfoot" | "table-thead" | "text" | (string & {}))[] | Defaults["type"] | (string & {})>;
        default: unknown extends Defaults["type"] ? "actions" | "article" | "avatar" | "button" | "card" | "card-avatar" | "chip" | "date-picker" | "date-picker-days" | "date-picker-options" | "divider" | "heading" | "image" | "list-item" | "list-item-avatar" | "list-item-avatar-three-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-two-line" | "ossein" | "paragraph" | "sentences" | "subtitle" | "table" | "table-heading" | "table-row" | "table-row-divider" | "table-tbody" | "table-tfoot" | "table-thead" | "text" | readonly ("actions" | "article" | "avatar" | "button" | "card" | "card-avatar" | "chip" | "date-picker" | "date-picker-days" | "date-picker-options" | "divider" | "heading" | "image" | "list-item" | "list-item-avatar" | "list-item-avatar-three-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-two-line" | "ossein" | "paragraph" | "sentences" | "subtitle" | "table" | "table-heading" | "table-row" | "table-row-divider" | "table-tbody" | "table-tfoot" | "table-thead" | "text" | (string & {}))[] | (string & {}) : Defaults["type"] | NonNullable<"actions" | "article" | "avatar" | "button" | "card" | "card-avatar" | "chip" | "date-picker" | "date-picker-days" | "date-picker-options" | "divider" | "heading" | "image" | "list-item" | "list-item-avatar" | "list-item-avatar-three-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-two-line" | "ossein" | "paragraph" | "sentences" | "subtitle" | "table" | "table-heading" | "table-row" | "table-row-divider" | "table-tbody" | "table-tfoot" | "table-thead" | "text" | readonly ("actions" | "article" | "avatar" | "button" | "card" | "card-avatar" | "chip" | "date-picker" | "date-picker-days" | "date-picker-options" | "divider" | "heading" | "image" | "list-item" | "list-item-avatar" | "list-item-avatar-three-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-two-line" | "ossein" | "paragraph" | "sentences" | "subtitle" | "table" | "table-heading" | "table-row" | "table-row-divider" | "table-tbody" | "table-tfoot" | "table-thead" | "text" | (string & {}))[] | (string & {})>;
    };
};
export declare const VSkeletonLoader: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        boilerplate: boolean;
        loading: boolean;
        loadingText: string;
        type: "actions" | "article" | "avatar" | "button" | "card" | "card-avatar" | "chip" | "date-picker" | "date-picker-days" | "date-picker-options" | "divider" | "heading" | "image" | "list-item" | "list-item-avatar" | "list-item-avatar-three-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-two-line" | "ossein" | "paragraph" | "sentences" | "subtitle" | "table" | "table-heading" | "table-row" | "table-row-divider" | "table-tbody" | "table-tfoot" | "table-thead" | "text" | readonly ("actions" | "article" | "avatar" | "button" | "card" | "card-avatar" | "chip" | "date-picker" | "date-picker-days" | "date-picker-options" | "divider" | "heading" | "image" | "list-item" | "list-item-avatar" | "list-item-avatar-three-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-two-line" | "ossein" | "paragraph" | "sentences" | "subtitle" | "table" | "table-heading" | "table-row" | "table-row-divider" | "table-tbody" | "table-tfoot" | "table-thead" | "text" | (string & {}))[] | (string & {});
    } & {
        theme?: string | undefined;
        elevation?: string | number | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
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
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        boilerplate: boolean;
        loading: boolean;
        loadingText: string;
        type: "actions" | "article" | "avatar" | "button" | "card" | "card-avatar" | "chip" | "date-picker" | "date-picker-days" | "date-picker-options" | "divider" | "heading" | "image" | "list-item" | "list-item-avatar" | "list-item-avatar-three-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-two-line" | "ossein" | "paragraph" | "sentences" | "subtitle" | "table" | "table-heading" | "table-row" | "table-row-divider" | "table-tbody" | "table-tfoot" | "table-thead" | "text" | readonly ("actions" | "article" | "avatar" | "button" | "card" | "card-avatar" | "chip" | "date-picker" | "date-picker-days" | "date-picker-options" | "divider" | "heading" | "image" | "list-item" | "list-item-avatar" | "list-item-avatar-three-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-two-line" | "ossein" | "paragraph" | "sentences" | "subtitle" | "table" | "table-heading" | "table-row" | "table-row-divider" | "table-tbody" | "table-tfoot" | "table-thead" | "text" | (string & {}))[] | (string & {});
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        boilerplate: boolean;
        loading: boolean;
        loadingText: string;
        type: "actions" | "article" | "avatar" | "button" | "card" | "card-avatar" | "chip" | "date-picker" | "date-picker-days" | "date-picker-options" | "divider" | "heading" | "image" | "list-item" | "list-item-avatar" | "list-item-avatar-three-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-two-line" | "ossein" | "paragraph" | "sentences" | "subtitle" | "table" | "table-heading" | "table-row" | "table-row-divider" | "table-tbody" | "table-tfoot" | "table-thead" | "text" | readonly ("actions" | "article" | "avatar" | "button" | "card" | "card-avatar" | "chip" | "date-picker" | "date-picker-days" | "date-picker-options" | "divider" | "heading" | "image" | "list-item" | "list-item-avatar" | "list-item-avatar-three-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-two-line" | "ossein" | "paragraph" | "sentences" | "subtitle" | "table" | "table-heading" | "table-row" | "table-row-divider" | "table-tbody" | "table-tfoot" | "table-thead" | "text" | (string & {}))[] | (string & {});
    } & {
        theme?: string | undefined;
        elevation?: string | number | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
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
    }, {}, {}, {}, {}, {
        boilerplate: boolean;
        loading: boolean;
        loadingText: string;
        type: "actions" | "article" | "avatar" | "button" | "card" | "card-avatar" | "chip" | "date-picker" | "date-picker-days" | "date-picker-options" | "divider" | "heading" | "image" | "list-item" | "list-item-avatar" | "list-item-avatar-three-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-two-line" | "ossein" | "paragraph" | "sentences" | "subtitle" | "table" | "table-heading" | "table-row" | "table-row-divider" | "table-tbody" | "table-tfoot" | "table-thead" | "text" | readonly ("actions" | "article" | "avatar" | "button" | "card" | "card-avatar" | "chip" | "date-picker" | "date-picker-days" | "date-picker-options" | "divider" | "heading" | "image" | "list-item" | "list-item-avatar" | "list-item-avatar-three-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-two-line" | "ossein" | "paragraph" | "sentences" | "subtitle" | "table" | "table-heading" | "table-row" | "table-row-divider" | "table-tbody" | "table-tfoot" | "table-thead" | "text" | (string & {}))[] | (string & {});
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    boilerplate: boolean;
    loading: boolean;
    loadingText: string;
    type: "actions" | "article" | "avatar" | "button" | "card" | "card-avatar" | "chip" | "date-picker" | "date-picker-days" | "date-picker-options" | "divider" | "heading" | "image" | "list-item" | "list-item-avatar" | "list-item-avatar-three-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-two-line" | "ossein" | "paragraph" | "sentences" | "subtitle" | "table" | "table-heading" | "table-row" | "table-row-divider" | "table-tbody" | "table-tfoot" | "table-thead" | "text" | readonly ("actions" | "article" | "avatar" | "button" | "card" | "card-avatar" | "chip" | "date-picker" | "date-picker-days" | "date-picker-options" | "divider" | "heading" | "image" | "list-item" | "list-item-avatar" | "list-item-avatar-three-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-two-line" | "ossein" | "paragraph" | "sentences" | "subtitle" | "table" | "table-heading" | "table-row" | "table-row-divider" | "table-tbody" | "table-tfoot" | "table-thead" | "text" | (string & {}))[] | (string & {});
} & {
    theme?: string | undefined;
    elevation?: string | number | undefined;
    height?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    boilerplate: boolean;
    loading: boolean;
    loadingText: string;
    type: "actions" | "article" | "avatar" | "button" | "card" | "card-avatar" | "chip" | "date-picker" | "date-picker-days" | "date-picker-options" | "divider" | "heading" | "image" | "list-item" | "list-item-avatar" | "list-item-avatar-three-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-two-line" | "ossein" | "paragraph" | "sentences" | "subtitle" | "table" | "table-heading" | "table-row" | "table-row-divider" | "table-tbody" | "table-tfoot" | "table-thead" | "text" | readonly ("actions" | "article" | "avatar" | "button" | "card" | "card-avatar" | "chip" | "date-picker" | "date-picker-days" | "date-picker-options" | "divider" | "heading" | "image" | "list-item" | "list-item-avatar" | "list-item-avatar-three-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-two-line" | "ossein" | "paragraph" | "sentences" | "subtitle" | "table" | "table-heading" | "table-row" | "table-row-divider" | "table-tbody" | "table-tfoot" | "table-thead" | "text" | (string & {}))[] | (string & {});
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    elevation: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    };
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    minHeight: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    boilerplate: BooleanConstructor;
    color: StringConstructor;
    loading: BooleanConstructor;
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<"actions" | "article" | "avatar" | "button" | "card" | "card-avatar" | "chip" | "date-picker" | "date-picker-days" | "date-picker-options" | "divider" | "heading" | "image" | "list-item" | "list-item-avatar" | "list-item-avatar-three-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-two-line" | "ossein" | "paragraph" | "sentences" | "subtitle" | "table" | "table-heading" | "table-row" | "table-row-divider" | "table-tbody" | "table-tfoot" | "table-thead" | "text" | readonly ("actions" | "article" | "avatar" | "button" | "card" | "card-avatar" | "chip" | "date-picker" | "date-picker-days" | "date-picker-options" | "divider" | "heading" | "image" | "list-item" | "list-item-avatar" | "list-item-avatar-three-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-two-line" | "ossein" | "paragraph" | "sentences" | "subtitle" | "table" | "table-heading" | "table-row" | "table-row-divider" | "table-tbody" | "table-tfoot" | "table-thead" | "text" | (string & {}))[] | (string & {})>;
        default: string;
    };
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    elevation: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    };
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    minHeight: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    boilerplate: BooleanConstructor;
    color: StringConstructor;
    loading: BooleanConstructor;
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<"actions" | "article" | "avatar" | "button" | "card" | "card-avatar" | "chip" | "date-picker" | "date-picker-days" | "date-picker-options" | "divider" | "heading" | "image" | "list-item" | "list-item-avatar" | "list-item-avatar-three-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-two-line" | "ossein" | "paragraph" | "sentences" | "subtitle" | "table" | "table-heading" | "table-row" | "table-row-divider" | "table-tbody" | "table-tfoot" | "table-thead" | "text" | readonly ("actions" | "article" | "avatar" | "button" | "card" | "card-avatar" | "chip" | "date-picker" | "date-picker-days" | "date-picker-options" | "divider" | "heading" | "image" | "list-item" | "list-item-avatar" | "list-item-avatar-three-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-two-line" | "ossein" | "paragraph" | "sentences" | "subtitle" | "table" | "table-heading" | "table-row" | "table-row-divider" | "table-tbody" | "table-tfoot" | "table-thead" | "text" | (string & {}))[] | (string & {})>;
        default: string;
    };
}>>;
export type VSkeletonLoader = InstanceType<typeof VSkeletonLoader>;

