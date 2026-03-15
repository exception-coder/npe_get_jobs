// Styles

import { IconValue } from '../../composables/icons.js';
// Types
import type { PropType } from 'vue';
import type { ToggleListItemSlot } from './shared.js';
import type { VListItemSlots } from '../VList/VListItem.js';
import type { IndentLineType } from '../../util/index.js';
export declare const makeVTreeviewItemProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    border?: unknown;
    density?: unknown;
    elevation?: unknown;
    rounded?: unknown;
    tile?: unknown;
    tag?: unknown;
    color?: unknown;
    variant?: unknown;
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    href?: unknown;
    replace?: unknown;
    to?: unknown;
    exact?: unknown;
    active?: unknown;
    activeClass?: unknown;
    activeColor?: unknown;
    appendAvatar?: unknown;
    appendIcon?: unknown;
    baseColor?: unknown;
    disabled?: unknown;
    lines?: unknown;
    link?: unknown;
    nav?: unknown;
    prependAvatar?: unknown;
    prependIcon?: unknown;
    ripple?: unknown;
    slim?: unknown;
    subtitle?: unknown;
    title?: unknown;
    value?: unknown;
    onClick?: unknown;
    onClickOnce?: unknown;
    loading?: unknown;
    hideActions?: unknown;
    hasCustomPrepend?: unknown;
    indentLines?: unknown;
    toggleIcon?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
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
    border: unknown extends Defaults["border"] ? (BooleanConstructor | NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["border"] ? string | number | boolean : string | number | boolean | Defaults["border"]>;
        default: unknown extends Defaults["border"] ? string | number | boolean : Defaults["border"] | NonNullable<string | number | boolean>;
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
    tag: unknown extends Defaults["tag"] ? {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    } : Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : string | Defaults["tag"] | import("../../util/index.js").JSXComponent>;
        default: unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : Defaults["tag"] | NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    variant: unknown extends Defaults["variant"] ? Omit<{
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
    } : Omit<Omit<{
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["variant"] ? "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" : "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" : Defaults["variant"] | NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
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
    href: unknown extends Defaults["href"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["href"] ? string : string | Defaults["href"]>;
        default: unknown extends Defaults["href"] ? string : string | Defaults["href"];
    };
    replace: unknown extends Defaults["replace"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["replace"] ? boolean : boolean | Defaults["replace"]>;
        default: unknown extends Defaults["replace"] ? boolean : boolean | Defaults["replace"];
    };
    to: unknown extends Defaults["to"] ? PropType<string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric> : {
        type: PropType<unknown extends Defaults["to"] ? string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric : string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric | Defaults["to"]>;
        default: unknown extends Defaults["to"] ? string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric : Defaults["to"] | NonNullable<string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric>;
    };
    exact: unknown extends Defaults["exact"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["exact"] ? boolean : boolean | Defaults["exact"]>;
        default: unknown extends Defaults["exact"] ? boolean : boolean | Defaults["exact"];
    };
    active: unknown extends Defaults["active"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"]>;
        default: unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"];
    };
    activeClass: unknown extends Defaults["activeClass"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["activeClass"] ? string : string | Defaults["activeClass"]>;
        default: unknown extends Defaults["activeClass"] ? string : string | Defaults["activeClass"];
    };
    activeColor: unknown extends Defaults["activeColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"]>;
        default: unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"];
    };
    appendAvatar: unknown extends Defaults["appendAvatar"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["appendAvatar"] ? string : string | Defaults["appendAvatar"]>;
        default: unknown extends Defaults["appendAvatar"] ? string : string | Defaults["appendAvatar"];
    };
    appendIcon: unknown extends Defaults["appendIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["appendIcon"] ? IconValue : Defaults["appendIcon"] | IconValue>;
        default: unknown extends Defaults["appendIcon"] ? IconValue : Defaults["appendIcon"] | NonNullable<IconValue>;
    };
    baseColor: unknown extends Defaults["baseColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"]>;
        default: unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    lines: unknown extends Defaults["lines"] ? PropType<"one" | "three" | "two" | false> : {
        type: PropType<unknown extends Defaults["lines"] ? "one" | "three" | "two" | false : "one" | "three" | "two" | false | Defaults["lines"]>;
        default: unknown extends Defaults["lines"] ? "one" | "three" | "two" | false : Defaults["lines"] | NonNullable<"one" | "three" | "two" | false>;
    };
    link: unknown extends Defaults["link"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["link"] ? boolean : boolean | Defaults["link"]>;
        default: unknown extends Defaults["link"] ? boolean : boolean | Defaults["link"];
    };
    nav: unknown extends Defaults["nav"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["nav"] ? boolean : boolean | Defaults["nav"]>;
        default: unknown extends Defaults["nav"] ? boolean : boolean | Defaults["nav"];
    };
    prependAvatar: unknown extends Defaults["prependAvatar"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["prependAvatar"] ? string : string | Defaults["prependAvatar"]>;
        default: unknown extends Defaults["prependAvatar"] ? string : string | Defaults["prependAvatar"];
    };
    prependIcon: unknown extends Defaults["prependIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["prependIcon"] ? IconValue : Defaults["prependIcon"] | IconValue>;
        default: unknown extends Defaults["prependIcon"] ? IconValue : Defaults["prependIcon"] | NonNullable<IconValue>;
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
    slim: unknown extends Defaults["slim"] ? {
        type: PropType<boolean>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["slim"] ? boolean : boolean | Defaults["slim"]>;
        default: unknown extends Defaults["slim"] ? boolean : boolean | Defaults["slim"];
    };
    subtitle: unknown extends Defaults["subtitle"] ? {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    } : Omit<{
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["subtitle"] ? string | number | boolean : string | number | boolean | Defaults["subtitle"]>;
        default: unknown extends Defaults["subtitle"] ? string | number | boolean : Defaults["subtitle"] | NonNullable<string | number | boolean>;
    };
    title: unknown extends Defaults["title"] ? {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    } : Omit<{
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["title"] ? string | number | boolean : string | number | boolean | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string | number | boolean : Defaults["title"] | NonNullable<string | number | boolean>;
    };
    value: unknown extends Defaults["value"] ? null : {
        type: PropType<unknown extends Defaults["value"] ? any : any>;
        default: unknown extends Defaults["value"] ? any : any;
    };
    onClick: unknown extends Defaults["onClick"] ? PropType<(args_0: KeyboardEvent | MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onClick"] ? (args_0: KeyboardEvent | MouseEvent) => void : ((args_0: KeyboardEvent | MouseEvent) => void) | Defaults["onClick"]>;
        default: unknown extends Defaults["onClick"] ? (args_0: KeyboardEvent | MouseEvent) => void : ((args_0: KeyboardEvent | MouseEvent) => void) | Defaults["onClick"];
    };
    onClickOnce: unknown extends Defaults["onClickOnce"] ? PropType<(args_0: MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onClickOnce"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClickOnce"]>;
        default: unknown extends Defaults["onClickOnce"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClickOnce"];
    };
    loading: unknown extends Defaults["loading"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["loading"] ? boolean : boolean | Defaults["loading"]>;
        default: unknown extends Defaults["loading"] ? boolean : boolean | Defaults["loading"];
    };
    hideActions: unknown extends Defaults["hideActions"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"]>;
        default: unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"];
    };
    hasCustomPrepend: unknown extends Defaults["hasCustomPrepend"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hasCustomPrepend"] ? boolean : boolean | Defaults["hasCustomPrepend"]>;
        default: unknown extends Defaults["hasCustomPrepend"] ? boolean : boolean | Defaults["hasCustomPrepend"];
    };
    indentLines: unknown extends Defaults["indentLines"] ? PropType<IndentLineType[]> : {
        type: PropType<unknown extends Defaults["indentLines"] ? IndentLineType[] : IndentLineType[] | Defaults["indentLines"]>;
        default: unknown extends Defaults["indentLines"] ? IndentLineType[] : IndentLineType[] | Defaults["indentLines"];
    };
    toggleIcon: unknown extends Defaults["toggleIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["toggleIcon"] ? IconValue : Defaults["toggleIcon"] | IconValue>;
        default: unknown extends Defaults["toggleIcon"] ? IconValue : Defaults["toggleIcon"] | NonNullable<IconValue>;
    };
};
export type VTreeviewItemSlots = VListItemSlots & {
    toggle: ToggleListItemSlot & {
        loading: boolean;
    };
};
export declare const VTreeviewItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        replace: boolean;
        exact: boolean;
        disabled: boolean;
        nav: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        };
        slim: boolean;
        loading: boolean;
        hideActions: boolean;
        hasCustomPrepend: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        color?: string | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        href?: string | undefined;
        to?: string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric | undefined;
        active?: boolean | undefined;
        activeClass?: string | undefined;
        activeColor?: string | undefined;
        appendAvatar?: string | undefined;
        appendIcon?: IconValue | undefined;
        baseColor?: string | undefined;
        lines?: "one" | "three" | "two" | false | undefined;
        link?: boolean | undefined;
        prependAvatar?: string | undefined;
        prependIcon?: IconValue | undefined;
        subtitle?: string | number | boolean | undefined;
        title?: string | number | boolean | undefined;
        value?: any;
        onClick?: ((args_0: KeyboardEvent | MouseEvent) => void) | undefined;
        onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
        indentLines?: IndentLineType[] | undefined;
        toggleIcon?: IconValue | undefined;
    } & {
        $children?: {
            prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            toggle?: ((arg: import("../VList/VListItem.js").ListItemSlot & {
                props: {
                    onClick: (e: PointerEvent) => void;
                };
            } & {
                loading: boolean;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            toggle?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
                props: {
                    onClick: (e: PointerEvent) => void;
                };
            } & {
                loading: boolean;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:toggle"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
            props: {
                onClick: (e: PointerEvent) => void;
            };
        } & {
            loading: boolean;
        }) => import("vue").VNodeChild) | undefined;
    } & {
        onToggleExpand?: ((value: PointerEvent) => any) | undefined;
    }, Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: import("vue").StyleValue;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            replace: boolean;
            exact: boolean;
            active: boolean;
            disabled: boolean;
            link: boolean;
            nav: boolean;
            ripple: boolean | {
                class?: string | undefined;
                keys?: string[] | undefined;
            } | undefined;
            slim: boolean;
            subtitle: string | number | boolean;
            title: string | number | boolean;
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                default?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
                subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                default?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
                subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            border?: string | number | boolean | undefined;
            density: import("../../composables/density.js").Density;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            color?: string | undefined;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            href?: string | undefined;
            replace: boolean;
            to?: string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric | undefined;
            exact: boolean;
            active?: boolean | undefined;
            activeClass?: string | undefined;
            activeColor?: string | undefined;
            appendAvatar?: string | undefined;
            appendIcon?: IconValue | undefined;
            baseColor?: string | undefined;
            disabled: boolean;
            lines?: "one" | "three" | "two" | false | undefined;
            link?: boolean | undefined;
            nav: boolean;
            prependAvatar?: string | undefined;
            prependIcon?: IconValue | undefined;
            ripple: boolean | {
                class?: string | undefined;
                keys?: string[] | undefined;
            };
            slim: boolean;
            subtitle?: string | number | boolean | undefined;
            title?: string | number | boolean | undefined;
            value?: any;
            onClick?: (((args_0: KeyboardEvent | MouseEvent) => void) & ((e: KeyboardEvent | MouseEvent) => any)) | undefined;
            onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
            "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "active" | "density" | "disabled" | "exact" | "link" | "nav" | "replace" | "ripple" | "rounded" | "slim" | "style" | "subtitle" | "tag" | "tile" | "title" | "variant">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            default?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $host: Element | null;
        $emit: (event: "click", e: KeyboardEvent | MouseEvent) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            density: import("../../composables/density.js").Density;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            replace: boolean;
            exact: boolean;
            disabled: boolean;
            nav: boolean;
            ripple: boolean | {
                class?: string | undefined;
                keys?: string[] | undefined;
            };
            slim: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            border?: string | number | boolean | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            color?: string | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            href?: string | undefined;
            to?: string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric | undefined;
            active?: boolean | undefined;
            activeClass?: string | undefined;
            activeColor?: string | undefined;
            appendAvatar?: string | undefined;
            appendIcon?: IconValue | undefined;
            baseColor?: string | undefined;
            lines?: "one" | "three" | "two" | false | undefined;
            link?: boolean | undefined;
            prependAvatar?: string | undefined;
            prependIcon?: IconValue | undefined;
            subtitle?: string | number | boolean | undefined;
            title?: string | number | boolean | undefined;
            value?: any;
            onClick?: ((args_0: KeyboardEvent | MouseEvent) => void) | undefined;
            onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
        } & {
            $children?: {
                prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                default?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
                subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                default?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
                subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
        } & {
            onClick?: ((e: KeyboardEvent | MouseEvent) => any) | undefined;
        }, {
            activate: (activated: boolean, e?: Event | undefined) => void;
            isActivated: import("vue").ComputedRef<boolean>;
            isGroupActivator: boolean | undefined;
            isSelected: import("vue").ComputedRef<boolean>;
            list: {
                filterable: import("vue").MaybeRefOrGetter<boolean>;
                hasPrepend: import("vue").Ref<boolean, boolean>;
                updateHasPrepend: (value: boolean) => void;
            } | null;
            select: (selected: boolean, e?: Event | undefined) => void;
            root: {
                children: import("vue").Ref<Map<unknown, unknown[]>, Map<unknown, unknown[]>>;
                parents: import("vue").Ref<Map<unknown, unknown>, Map<unknown, unknown>>;
                disabled: import("vue").Ref<Set<unknown>, Set<unknown>>;
                activatable: import("vue").Ref<boolean, boolean>;
                selectable: import("vue").Ref<boolean, boolean>;
                opened: import("vue").Ref<Set<unknown>, Set<unknown>>;
                activated: import("vue").Ref<Set<unknown>, Set<unknown>>;
                selected: import("vue").Ref<Map<unknown, "indeterminate" | "off" | "on">, Map<unknown, "indeterminate" | "off" | "on">>;
                selectedValues: import("vue").Ref<unknown[], unknown[]>;
                register: (id: unknown, parentId: unknown, isDisabled: boolean, isGroup?: boolean | undefined) => void;
                unregister: (id: unknown) => void;
                open: (id: unknown, value: boolean, event?: Event | undefined) => void;
                activate: (id: unknown, value: boolean, event?: Event | undefined) => void;
                select: (id: unknown, value: boolean, event?: Event | undefined) => void;
                openOnSelect: (id: unknown, value: boolean, event?: Event | undefined) => void;
                getPath: (id: unknown) => unknown[];
            };
            id: import("vue").ComputedRef<{} | null>;
            link: import("../../composables/router.js").UseLink;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (e: KeyboardEvent | MouseEvent) => true;
        }, string, {
            style: import("vue").StyleValue;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            replace: boolean;
            exact: boolean;
            active: boolean;
            disabled: boolean;
            link: boolean;
            nav: boolean;
            ripple: boolean | {
                class?: string | undefined;
                keys?: string[] | undefined;
            } | undefined;
            slim: boolean;
            subtitle: string | number | boolean;
            title: string | number | boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            prepend: (arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            append: (arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            default: (arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            title: (arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            subtitle: (arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: ((() => void)[] | (() => void)) | undefined;
            created?: ((() => void)[] | (() => void)) | undefined;
            beforeMount?: ((() => void)[] | (() => void)) | undefined;
            mounted?: ((() => void)[] | (() => void)) | undefined;
            beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
            updated?: ((() => void)[] | (() => void)) | undefined;
            activated?: ((() => void)[] | (() => void)) | undefined;
            deactivated?: ((() => void)[] | (() => void)) | undefined;
            beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
            beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
            destroyed?: ((() => void)[] | (() => void)) | undefined;
            unmounted?: ((() => void)[] | (() => void)) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<{
        style: import("vue").StyleValue;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        replace: boolean;
        exact: boolean;
        active: boolean;
        disabled: boolean;
        link: boolean;
        nav: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined;
        slim: boolean;
        subtitle: string | number | boolean;
        title: string | number | boolean;
    }> & Omit<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        replace: boolean;
        exact: boolean;
        disabled: boolean;
        nav: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        };
        slim: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        color?: string | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        href?: string | undefined;
        to?: string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric | undefined;
        active?: boolean | undefined;
        activeClass?: string | undefined;
        activeColor?: string | undefined;
        appendAvatar?: string | undefined;
        appendIcon?: IconValue | undefined;
        baseColor?: string | undefined;
        lines?: "one" | "three" | "two" | false | undefined;
        link?: boolean | undefined;
        prependAvatar?: string | undefined;
        prependIcon?: IconValue | undefined;
        subtitle?: string | number | boolean | undefined;
        title?: string | number | boolean | undefined;
        value?: any;
        onClick?: ((args_0: KeyboardEvent | MouseEvent) => void) | undefined;
        onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
    } & {
        $children?: {
            prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
    } & {
        onClick?: ((e: KeyboardEvent | MouseEvent) => any) | undefined;
    }, "activate" | "id" | "isActivated" | "isGroupActivator" | "isSelected" | "list" | "root" | "select" | ("active" | "density" | "disabled" | "exact" | "link" | "nav" | "replace" | "ripple" | "rounded" | "slim" | "style" | "subtitle" | "tag" | "tile" | "title" | "variant")> & import("vue").ShallowUnwrapRef<{
        activate: (activated: boolean, e?: Event | undefined) => void;
        isActivated: import("vue").ComputedRef<boolean>;
        isGroupActivator: boolean | undefined;
        isSelected: import("vue").ComputedRef<boolean>;
        list: {
            filterable: import("vue").MaybeRefOrGetter<boolean>;
            hasPrepend: import("vue").Ref<boolean, boolean>;
            updateHasPrepend: (value: boolean) => void;
        } | null;
        select: (selected: boolean, e?: Event | undefined) => void;
        root: {
            children: import("vue").Ref<Map<unknown, unknown[]>, Map<unknown, unknown[]>>;
            parents: import("vue").Ref<Map<unknown, unknown>, Map<unknown, unknown>>;
            disabled: import("vue").Ref<Set<unknown>, Set<unknown>>;
            activatable: import("vue").Ref<boolean, boolean>;
            selectable: import("vue").Ref<boolean, boolean>;
            opened: import("vue").Ref<Set<unknown>, Set<unknown>>;
            activated: import("vue").Ref<Set<unknown>, Set<unknown>>;
            selected: import("vue").Ref<Map<unknown, "indeterminate" | "off" | "on">, Map<unknown, "indeterminate" | "off" | "on">>;
            selectedValues: import("vue").Ref<unknown[], unknown[]>;
            register: (id: unknown, parentId: unknown, isDisabled: boolean, isGroup?: boolean | undefined) => void;
            unregister: (id: unknown) => void;
            open: (id: unknown, value: boolean, event?: Event | undefined) => void;
            activate: (id: unknown, value: boolean, event?: Event | undefined) => void;
            select: (id: unknown, value: boolean, event?: Event | undefined) => void;
            openOnSelect: (id: unknown, value: boolean, event?: Event | undefined) => void;
            getPath: (id: unknown) => unknown[];
        };
        id: import("vue").ComputedRef<{} | null>;
        link: import("../../composables/router.js").UseLink;
    }> & {} & import("vue").ComponentCustomProperties & {}, "$children" | "activeClass" | "activeColor" | "appendAvatar" | "appendIcon" | "baseColor" | "border" | "class" | "color" | "elevation" | "height" | "href" | "lines" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "onClick" | "onClickOnce" | "prependAvatar" | "prependIcon" | "theme" | "to" | "v-slot:append" | "v-slot:default" | "v-slot:prepend" | "v-slot:subtitle" | "v-slot:title" | "v-slots" | "value" | "width" | ("active" | "density" | "disabled" | "exact" | "link" | "nav" | "replace" | "ripple" | "rounded" | "slim" | "style" | "subtitle" | "tag" | "tile" | "title" | "variant") | keyof import("vue").VNodeProps>, `$${any}`> & {
        _allExposed: {
            activate: (activated: boolean, e?: Event | undefined) => void;
            isActivated: import("vue").ComputedRef<boolean>;
            isGroupActivator: boolean | undefined;
            isSelected: import("vue").ComputedRef<boolean>;
            list: {
                filterable: import("vue").MaybeRefOrGetter<boolean>;
                hasPrepend: import("vue").Ref<boolean, boolean>;
                updateHasPrepend: (value: boolean) => void;
            } | null;
            select: (selected: boolean, e?: Event | undefined) => void;
            root: {
                children: import("vue").Ref<Map<unknown, unknown[]>, Map<unknown, unknown[]>>;
                parents: import("vue").Ref<Map<unknown, unknown>, Map<unknown, unknown>>;
                disabled: import("vue").Ref<Set<unknown>, Set<unknown>>;
                activatable: import("vue").Ref<boolean, boolean>;
                selectable: import("vue").Ref<boolean, boolean>;
                opened: import("vue").Ref<Set<unknown>, Set<unknown>>;
                activated: import("vue").Ref<Set<unknown>, Set<unknown>>;
                selected: import("vue").Ref<Map<unknown, "indeterminate" | "off" | "on">, Map<unknown, "indeterminate" | "off" | "on">>;
                selectedValues: import("vue").Ref<unknown[], unknown[]>;
                register: (id: unknown, parentId: unknown, isDisabled: boolean, isGroup?: boolean | undefined) => void;
                unregister: (id: unknown) => void;
                open: (id: unknown, value: boolean, event?: Event | undefined) => void;
                activate: (id: unknown, value: boolean, event?: Event | undefined) => void;
                select: (id: unknown, value: boolean, event?: Event | undefined) => void;
                openOnSelect: (id: unknown, value: boolean, event?: Event | undefined) => void;
                getPath: (id: unknown) => unknown[];
            };
            id: import("vue").ComputedRef<{} | null>;
            link: import("../../composables/router.js").UseLink;
        } | {};
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        toggleExpand: (value: PointerEvent) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        replace: boolean;
        exact: boolean;
        active: boolean;
        disabled: boolean;
        link: boolean;
        nav: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined;
        slim: boolean;
        subtitle: string | number | boolean;
        title: string | number | boolean;
        loading: boolean;
        hideActions: boolean;
        hasCustomPrepend: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        prepend: (arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        append: (arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        default: (arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        title: (arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        subtitle: (arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        toggle: (arg: import("../VList/VListItem.js").ListItemSlot & {
            props: {
                onClick: (e: PointerEvent) => void;
            };
        } & {
            loading: boolean;
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
        density: import("../../composables/density.js").Density;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        replace: boolean;
        exact: boolean;
        disabled: boolean;
        nav: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        };
        slim: boolean;
        loading: boolean;
        hideActions: boolean;
        hasCustomPrepend: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        color?: string | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        href?: string | undefined;
        to?: string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric | undefined;
        active?: boolean | undefined;
        activeClass?: string | undefined;
        activeColor?: string | undefined;
        appendAvatar?: string | undefined;
        appendIcon?: IconValue | undefined;
        baseColor?: string | undefined;
        lines?: "one" | "three" | "two" | false | undefined;
        link?: boolean | undefined;
        prependAvatar?: string | undefined;
        prependIcon?: IconValue | undefined;
        subtitle?: string | number | boolean | undefined;
        title?: string | number | boolean | undefined;
        value?: any;
        onClick?: ((args_0: KeyboardEvent | MouseEvent) => void) | undefined;
        onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
        indentLines?: IndentLineType[] | undefined;
        toggleIcon?: IconValue | undefined;
    } & {
        $children?: {
            prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            toggle?: ((arg: import("../VList/VListItem.js").ListItemSlot & {
                props: {
                    onClick: (e: PointerEvent) => void;
                };
            } & {
                loading: boolean;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            toggle?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
                props: {
                    onClick: (e: PointerEvent) => void;
                };
            } & {
                loading: boolean;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:toggle"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
            props: {
                onClick: (e: PointerEvent) => void;
            };
        } & {
            loading: boolean;
        }) => import("vue").VNodeChild) | undefined;
    } & {
        onToggleExpand?: ((value: PointerEvent) => any) | undefined;
    }, Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: import("vue").StyleValue;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            replace: boolean;
            exact: boolean;
            active: boolean;
            disabled: boolean;
            link: boolean;
            nav: boolean;
            ripple: boolean | {
                class?: string | undefined;
                keys?: string[] | undefined;
            } | undefined;
            slim: boolean;
            subtitle: string | number | boolean;
            title: string | number | boolean;
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                default?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
                subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                default?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
                subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            border?: string | number | boolean | undefined;
            density: import("../../composables/density.js").Density;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            color?: string | undefined;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            href?: string | undefined;
            replace: boolean;
            to?: string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric | undefined;
            exact: boolean;
            active?: boolean | undefined;
            activeClass?: string | undefined;
            activeColor?: string | undefined;
            appendAvatar?: string | undefined;
            appendIcon?: IconValue | undefined;
            baseColor?: string | undefined;
            disabled: boolean;
            lines?: "one" | "three" | "two" | false | undefined;
            link?: boolean | undefined;
            nav: boolean;
            prependAvatar?: string | undefined;
            prependIcon?: IconValue | undefined;
            ripple: boolean | {
                class?: string | undefined;
                keys?: string[] | undefined;
            };
            slim: boolean;
            subtitle?: string | number | boolean | undefined;
            title?: string | number | boolean | undefined;
            value?: any;
            onClick?: (((args_0: KeyboardEvent | MouseEvent) => void) & ((e: KeyboardEvent | MouseEvent) => any)) | undefined;
            onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
            "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "active" | "density" | "disabled" | "exact" | "link" | "nav" | "replace" | "ripple" | "rounded" | "slim" | "style" | "subtitle" | "tag" | "tile" | "title" | "variant">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            default?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $host: Element | null;
        $emit: (event: "click", e: KeyboardEvent | MouseEvent) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            density: import("../../composables/density.js").Density;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            replace: boolean;
            exact: boolean;
            disabled: boolean;
            nav: boolean;
            ripple: boolean | {
                class?: string | undefined;
                keys?: string[] | undefined;
            };
            slim: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            border?: string | number | boolean | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            color?: string | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            href?: string | undefined;
            to?: string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric | undefined;
            active?: boolean | undefined;
            activeClass?: string | undefined;
            activeColor?: string | undefined;
            appendAvatar?: string | undefined;
            appendIcon?: IconValue | undefined;
            baseColor?: string | undefined;
            lines?: "one" | "three" | "two" | false | undefined;
            link?: boolean | undefined;
            prependAvatar?: string | undefined;
            prependIcon?: IconValue | undefined;
            subtitle?: string | number | boolean | undefined;
            title?: string | number | boolean | undefined;
            value?: any;
            onClick?: ((args_0: KeyboardEvent | MouseEvent) => void) | undefined;
            onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
        } & {
            $children?: {
                prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                default?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
                subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                default?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
                subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
        } & {
            onClick?: ((e: KeyboardEvent | MouseEvent) => any) | undefined;
        }, {
            activate: (activated: boolean, e?: Event | undefined) => void;
            isActivated: import("vue").ComputedRef<boolean>;
            isGroupActivator: boolean | undefined;
            isSelected: import("vue").ComputedRef<boolean>;
            list: {
                filterable: import("vue").MaybeRefOrGetter<boolean>;
                hasPrepend: import("vue").Ref<boolean, boolean>;
                updateHasPrepend: (value: boolean) => void;
            } | null;
            select: (selected: boolean, e?: Event | undefined) => void;
            root: {
                children: import("vue").Ref<Map<unknown, unknown[]>, Map<unknown, unknown[]>>;
                parents: import("vue").Ref<Map<unknown, unknown>, Map<unknown, unknown>>;
                disabled: import("vue").Ref<Set<unknown>, Set<unknown>>;
                activatable: import("vue").Ref<boolean, boolean>;
                selectable: import("vue").Ref<boolean, boolean>;
                opened: import("vue").Ref<Set<unknown>, Set<unknown>>;
                activated: import("vue").Ref<Set<unknown>, Set<unknown>>;
                selected: import("vue").Ref<Map<unknown, "indeterminate" | "off" | "on">, Map<unknown, "indeterminate" | "off" | "on">>;
                selectedValues: import("vue").Ref<unknown[], unknown[]>;
                register: (id: unknown, parentId: unknown, isDisabled: boolean, isGroup?: boolean | undefined) => void;
                unregister: (id: unknown) => void;
                open: (id: unknown, value: boolean, event?: Event | undefined) => void;
                activate: (id: unknown, value: boolean, event?: Event | undefined) => void;
                select: (id: unknown, value: boolean, event?: Event | undefined) => void;
                openOnSelect: (id: unknown, value: boolean, event?: Event | undefined) => void;
                getPath: (id: unknown) => unknown[];
            };
            id: import("vue").ComputedRef<{} | null>;
            link: import("../../composables/router.js").UseLink;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (e: KeyboardEvent | MouseEvent) => true;
        }, string, {
            style: import("vue").StyleValue;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            replace: boolean;
            exact: boolean;
            active: boolean;
            disabled: boolean;
            link: boolean;
            nav: boolean;
            ripple: boolean | {
                class?: string | undefined;
                keys?: string[] | undefined;
            } | undefined;
            slim: boolean;
            subtitle: string | number | boolean;
            title: string | number | boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            prepend: (arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            append: (arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            default: (arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            title: (arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            subtitle: (arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: ((() => void)[] | (() => void)) | undefined;
            created?: ((() => void)[] | (() => void)) | undefined;
            beforeMount?: ((() => void)[] | (() => void)) | undefined;
            mounted?: ((() => void)[] | (() => void)) | undefined;
            beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
            updated?: ((() => void)[] | (() => void)) | undefined;
            activated?: ((() => void)[] | (() => void)) | undefined;
            deactivated?: ((() => void)[] | (() => void)) | undefined;
            beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
            beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
            destroyed?: ((() => void)[] | (() => void)) | undefined;
            unmounted?: ((() => void)[] | (() => void)) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<{
        style: import("vue").StyleValue;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        replace: boolean;
        exact: boolean;
        active: boolean;
        disabled: boolean;
        link: boolean;
        nav: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined;
        slim: boolean;
        subtitle: string | number | boolean;
        title: string | number | boolean;
    }> & Omit<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        replace: boolean;
        exact: boolean;
        disabled: boolean;
        nav: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        };
        slim: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        color?: string | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        href?: string | undefined;
        to?: string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric | undefined;
        active?: boolean | undefined;
        activeClass?: string | undefined;
        activeColor?: string | undefined;
        appendAvatar?: string | undefined;
        appendIcon?: IconValue | undefined;
        baseColor?: string | undefined;
        lines?: "one" | "three" | "two" | false | undefined;
        link?: boolean | undefined;
        prependAvatar?: string | undefined;
        prependIcon?: IconValue | undefined;
        subtitle?: string | number | boolean | undefined;
        title?: string | number | boolean | undefined;
        value?: any;
        onClick?: ((args_0: KeyboardEvent | MouseEvent) => void) | undefined;
        onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
    } & {
        $children?: {
            prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
    } & {
        onClick?: ((e: KeyboardEvent | MouseEvent) => any) | undefined;
    }, "activate" | "id" | "isActivated" | "isGroupActivator" | "isSelected" | "list" | "root" | "select" | ("active" | "density" | "disabled" | "exact" | "link" | "nav" | "replace" | "ripple" | "rounded" | "slim" | "style" | "subtitle" | "tag" | "tile" | "title" | "variant")> & import("vue").ShallowUnwrapRef<{
        activate: (activated: boolean, e?: Event | undefined) => void;
        isActivated: import("vue").ComputedRef<boolean>;
        isGroupActivator: boolean | undefined;
        isSelected: import("vue").ComputedRef<boolean>;
        list: {
            filterable: import("vue").MaybeRefOrGetter<boolean>;
            hasPrepend: import("vue").Ref<boolean, boolean>;
            updateHasPrepend: (value: boolean) => void;
        } | null;
        select: (selected: boolean, e?: Event | undefined) => void;
        root: {
            children: import("vue").Ref<Map<unknown, unknown[]>, Map<unknown, unknown[]>>;
            parents: import("vue").Ref<Map<unknown, unknown>, Map<unknown, unknown>>;
            disabled: import("vue").Ref<Set<unknown>, Set<unknown>>;
            activatable: import("vue").Ref<boolean, boolean>;
            selectable: import("vue").Ref<boolean, boolean>;
            opened: import("vue").Ref<Set<unknown>, Set<unknown>>;
            activated: import("vue").Ref<Set<unknown>, Set<unknown>>;
            selected: import("vue").Ref<Map<unknown, "indeterminate" | "off" | "on">, Map<unknown, "indeterminate" | "off" | "on">>;
            selectedValues: import("vue").Ref<unknown[], unknown[]>;
            register: (id: unknown, parentId: unknown, isDisabled: boolean, isGroup?: boolean | undefined) => void;
            unregister: (id: unknown) => void;
            open: (id: unknown, value: boolean, event?: Event | undefined) => void;
            activate: (id: unknown, value: boolean, event?: Event | undefined) => void;
            select: (id: unknown, value: boolean, event?: Event | undefined) => void;
            openOnSelect: (id: unknown, value: boolean, event?: Event | undefined) => void;
            getPath: (id: unknown) => unknown[];
        };
        id: import("vue").ComputedRef<{} | null>;
        link: import("../../composables/router.js").UseLink;
    }> & {} & import("vue").ComponentCustomProperties & {}, "$children" | "activeClass" | "activeColor" | "appendAvatar" | "appendIcon" | "baseColor" | "border" | "class" | "color" | "elevation" | "height" | "href" | "lines" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "onClick" | "onClickOnce" | "prependAvatar" | "prependIcon" | "theme" | "to" | "v-slot:append" | "v-slot:default" | "v-slot:prepend" | "v-slot:subtitle" | "v-slot:title" | "v-slots" | "value" | "width" | ("active" | "density" | "disabled" | "exact" | "link" | "nav" | "replace" | "ripple" | "rounded" | "slim" | "style" | "subtitle" | "tag" | "tile" | "title" | "variant") | keyof import("vue").VNodeProps>, `$${any}`> & {
        _allExposed: {
            activate: (activated: boolean, e?: Event | undefined) => void;
            isActivated: import("vue").ComputedRef<boolean>;
            isGroupActivator: boolean | undefined;
            isSelected: import("vue").ComputedRef<boolean>;
            list: {
                filterable: import("vue").MaybeRefOrGetter<boolean>;
                hasPrepend: import("vue").Ref<boolean, boolean>;
                updateHasPrepend: (value: boolean) => void;
            } | null;
            select: (selected: boolean, e?: Event | undefined) => void;
            root: {
                children: import("vue").Ref<Map<unknown, unknown[]>, Map<unknown, unknown[]>>;
                parents: import("vue").Ref<Map<unknown, unknown>, Map<unknown, unknown>>;
                disabled: import("vue").Ref<Set<unknown>, Set<unknown>>;
                activatable: import("vue").Ref<boolean, boolean>;
                selectable: import("vue").Ref<boolean, boolean>;
                opened: import("vue").Ref<Set<unknown>, Set<unknown>>;
                activated: import("vue").Ref<Set<unknown>, Set<unknown>>;
                selected: import("vue").Ref<Map<unknown, "indeterminate" | "off" | "on">, Map<unknown, "indeterminate" | "off" | "on">>;
                selectedValues: import("vue").Ref<unknown[], unknown[]>;
                register: (id: unknown, parentId: unknown, isDisabled: boolean, isGroup?: boolean | undefined) => void;
                unregister: (id: unknown) => void;
                open: (id: unknown, value: boolean, event?: Event | undefined) => void;
                activate: (id: unknown, value: boolean, event?: Event | undefined) => void;
                select: (id: unknown, value: boolean, event?: Event | undefined) => void;
                openOnSelect: (id: unknown, value: boolean, event?: Event | undefined) => void;
                getPath: (id: unknown) => unknown[];
            };
            id: import("vue").ComputedRef<{} | null>;
            link: import("../../composables/router.js").UseLink;
        } | {};
    }, {}, {}, {}, {
        style: import("vue").StyleValue;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        replace: boolean;
        exact: boolean;
        active: boolean;
        disabled: boolean;
        link: boolean;
        nav: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined;
        slim: boolean;
        subtitle: string | number | boolean;
        title: string | number | boolean;
        loading: boolean;
        hideActions: boolean;
        hasCustomPrepend: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    density: import("../../composables/density.js").Density;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
    replace: boolean;
    exact: boolean;
    disabled: boolean;
    nav: boolean;
    ripple: boolean | {
        class?: string | undefined;
        keys?: string[] | undefined;
    };
    slim: boolean;
    loading: boolean;
    hideActions: boolean;
    hasCustomPrepend: boolean;
} & {
    theme?: string | undefined;
    class?: any;
    border?: string | number | boolean | undefined;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    color?: string | undefined;
    height?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    width?: string | number | undefined;
    href?: string | undefined;
    to?: string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric | undefined;
    active?: boolean | undefined;
    activeClass?: string | undefined;
    activeColor?: string | undefined;
    appendAvatar?: string | undefined;
    appendIcon?: IconValue | undefined;
    baseColor?: string | undefined;
    lines?: "one" | "three" | "two" | false | undefined;
    link?: boolean | undefined;
    prependAvatar?: string | undefined;
    prependIcon?: IconValue | undefined;
    subtitle?: string | number | boolean | undefined;
    title?: string | number | boolean | undefined;
    value?: any;
    onClick?: ((args_0: KeyboardEvent | MouseEvent) => void) | undefined;
    onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
    indentLines?: IndentLineType[] | undefined;
    toggleIcon?: IconValue | undefined;
} & {
    $children?: {
        prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        append?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        default?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
        subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        toggle?: ((arg: import("../VList/VListItem.js").ListItemSlot & {
            props: {
                onClick: (e: PointerEvent) => void;
            };
        } & {
            loading: boolean;
        }) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        default?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
        subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        toggle?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
            props: {
                onClick: (e: PointerEvent) => void;
            };
        } & {
            loading: boolean;
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:toggle"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
        props: {
            onClick: (e: PointerEvent) => void;
        };
    } & {
        loading: boolean;
    }) => import("vue").VNodeChild) | undefined;
} & {
    onToggleExpand?: ((value: PointerEvent) => any) | undefined;
}, Omit<Omit<{
    $: import("vue").ComponentInternalInstance;
    $data: {};
    $props: Partial<{
        style: import("vue").StyleValue;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        replace: boolean;
        exact: boolean;
        active: boolean;
        disabled: boolean;
        link: boolean;
        nav: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined;
        slim: boolean;
        subtitle: string | number | boolean;
        title: string | number | boolean;
    }> & Omit<{
        theme?: string | undefined;
        class?: any;
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        $children?: {
            prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
        border?: string | number | boolean | undefined;
        density: import("../../composables/density.js").Density;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        color?: string | undefined;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        href?: string | undefined;
        replace: boolean;
        to?: string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric | undefined;
        exact: boolean;
        active?: boolean | undefined;
        activeClass?: string | undefined;
        activeColor?: string | undefined;
        appendAvatar?: string | undefined;
        appendIcon?: IconValue | undefined;
        baseColor?: string | undefined;
        disabled: boolean;
        lines?: "one" | "three" | "two" | false | undefined;
        link?: boolean | undefined;
        nav: boolean;
        prependAvatar?: string | undefined;
        prependIcon?: IconValue | undefined;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        };
        slim: boolean;
        subtitle?: string | number | boolean | undefined;
        title?: string | number | boolean | undefined;
        value?: any;
        onClick?: (((args_0: KeyboardEvent | MouseEvent) => void) & ((e: KeyboardEvent | MouseEvent) => any)) | undefined;
        onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
        "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "active" | "density" | "disabled" | "exact" | "link" | "nav" | "replace" | "ripple" | "rounded" | "slim" | "style" | "subtitle" | "tag" | "tile" | "title" | "variant">;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        append?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        default?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
    }>;
    $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
    $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
    $host: Element | null;
    $emit: (event: "click", e: KeyboardEvent | MouseEvent) => void;
    $el: any;
    $options: import("vue").ComponentOptionsBase<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        replace: boolean;
        exact: boolean;
        disabled: boolean;
        nav: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        };
        slim: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        color?: string | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        href?: string | undefined;
        to?: string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric | undefined;
        active?: boolean | undefined;
        activeClass?: string | undefined;
        activeColor?: string | undefined;
        appendAvatar?: string | undefined;
        appendIcon?: IconValue | undefined;
        baseColor?: string | undefined;
        lines?: "one" | "three" | "two" | false | undefined;
        link?: boolean | undefined;
        prependAvatar?: string | undefined;
        prependIcon?: IconValue | undefined;
        subtitle?: string | number | boolean | undefined;
        title?: string | number | boolean | undefined;
        value?: any;
        onClick?: ((args_0: KeyboardEvent | MouseEvent) => void) | undefined;
        onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
    } & {
        $children?: {
            prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
    } & {
        onClick?: ((e: KeyboardEvent | MouseEvent) => any) | undefined;
    }, {
        activate: (activated: boolean, e?: Event | undefined) => void;
        isActivated: import("vue").ComputedRef<boolean>;
        isGroupActivator: boolean | undefined;
        isSelected: import("vue").ComputedRef<boolean>;
        list: {
            filterable: import("vue").MaybeRefOrGetter<boolean>;
            hasPrepend: import("vue").Ref<boolean, boolean>;
            updateHasPrepend: (value: boolean) => void;
        } | null;
        select: (selected: boolean, e?: Event | undefined) => void;
        root: {
            children: import("vue").Ref<Map<unknown, unknown[]>, Map<unknown, unknown[]>>;
            parents: import("vue").Ref<Map<unknown, unknown>, Map<unknown, unknown>>;
            disabled: import("vue").Ref<Set<unknown>, Set<unknown>>;
            activatable: import("vue").Ref<boolean, boolean>;
            selectable: import("vue").Ref<boolean, boolean>;
            opened: import("vue").Ref<Set<unknown>, Set<unknown>>;
            activated: import("vue").Ref<Set<unknown>, Set<unknown>>;
            selected: import("vue").Ref<Map<unknown, "indeterminate" | "off" | "on">, Map<unknown, "indeterminate" | "off" | "on">>;
            selectedValues: import("vue").Ref<unknown[], unknown[]>;
            register: (id: unknown, parentId: unknown, isDisabled: boolean, isGroup?: boolean | undefined) => void;
            unregister: (id: unknown) => void;
            open: (id: unknown, value: boolean, event?: Event | undefined) => void;
            activate: (id: unknown, value: boolean, event?: Event | undefined) => void;
            select: (id: unknown, value: boolean, event?: Event | undefined) => void;
            openOnSelect: (id: unknown, value: boolean, event?: Event | undefined) => void;
            getPath: (id: unknown) => unknown[];
        };
        id: import("vue").ComputedRef<{} | null>;
        link: import("../../composables/router.js").UseLink;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (e: KeyboardEvent | MouseEvent) => true;
    }, string, {
        style: import("vue").StyleValue;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        replace: boolean;
        exact: boolean;
        active: boolean;
        disabled: boolean;
        link: boolean;
        nav: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined;
        slim: boolean;
        subtitle: string | number | boolean;
        title: string | number | boolean;
    }, {}, string, import("vue").SlotsType<Partial<{
        prepend: (arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        append: (arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        default: (arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        title: (arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        subtitle: (arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
        beforeCreate?: ((() => void)[] | (() => void)) | undefined;
        created?: ((() => void)[] | (() => void)) | undefined;
        beforeMount?: ((() => void)[] | (() => void)) | undefined;
        mounted?: ((() => void)[] | (() => void)) | undefined;
        beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
        updated?: ((() => void)[] | (() => void)) | undefined;
        activated?: ((() => void)[] | (() => void)) | undefined;
        deactivated?: ((() => void)[] | (() => void)) | undefined;
        beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
        beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
        destroyed?: ((() => void)[] | (() => void)) | undefined;
        unmounted?: ((() => void)[] | (() => void)) | undefined;
        renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
        renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
        errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
    };
    $forceUpdate: () => void;
    $nextTick: typeof import("vue").nextTick;
    $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
} & Readonly<{
    style: import("vue").StyleValue;
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
    replace: boolean;
    exact: boolean;
    active: boolean;
    disabled: boolean;
    link: boolean;
    nav: boolean;
    ripple: boolean | {
        class?: string | undefined;
        keys?: string[] | undefined;
    } | undefined;
    slim: boolean;
    subtitle: string | number | boolean;
    title: string | number | boolean;
}> & Omit<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    density: import("../../composables/density.js").Density;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
    replace: boolean;
    exact: boolean;
    disabled: boolean;
    nav: boolean;
    ripple: boolean | {
        class?: string | undefined;
        keys?: string[] | undefined;
    };
    slim: boolean;
} & {
    theme?: string | undefined;
    class?: any;
    border?: string | number | boolean | undefined;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    color?: string | undefined;
    height?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    width?: string | number | undefined;
    href?: string | undefined;
    to?: string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric | undefined;
    active?: boolean | undefined;
    activeClass?: string | undefined;
    activeColor?: string | undefined;
    appendAvatar?: string | undefined;
    appendIcon?: IconValue | undefined;
    baseColor?: string | undefined;
    lines?: "one" | "three" | "two" | false | undefined;
    link?: boolean | undefined;
    prependAvatar?: string | undefined;
    prependIcon?: IconValue | undefined;
    subtitle?: string | number | boolean | undefined;
    title?: string | number | boolean | undefined;
    value?: any;
    onClick?: ((args_0: KeyboardEvent | MouseEvent) => void) | undefined;
    onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
} & {
    $children?: {
        prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        append?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        default?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
        subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        default?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
        subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
} & {
    onClick?: ((e: KeyboardEvent | MouseEvent) => any) | undefined;
}, "activate" | "id" | "isActivated" | "isGroupActivator" | "isSelected" | "list" | "root" | "select" | ("active" | "density" | "disabled" | "exact" | "link" | "nav" | "replace" | "ripple" | "rounded" | "slim" | "style" | "subtitle" | "tag" | "tile" | "title" | "variant")> & import("vue").ShallowUnwrapRef<{
    activate: (activated: boolean, e?: Event | undefined) => void;
    isActivated: import("vue").ComputedRef<boolean>;
    isGroupActivator: boolean | undefined;
    isSelected: import("vue").ComputedRef<boolean>;
    list: {
        filterable: import("vue").MaybeRefOrGetter<boolean>;
        hasPrepend: import("vue").Ref<boolean, boolean>;
        updateHasPrepend: (value: boolean) => void;
    } | null;
    select: (selected: boolean, e?: Event | undefined) => void;
    root: {
        children: import("vue").Ref<Map<unknown, unknown[]>, Map<unknown, unknown[]>>;
        parents: import("vue").Ref<Map<unknown, unknown>, Map<unknown, unknown>>;
        disabled: import("vue").Ref<Set<unknown>, Set<unknown>>;
        activatable: import("vue").Ref<boolean, boolean>;
        selectable: import("vue").Ref<boolean, boolean>;
        opened: import("vue").Ref<Set<unknown>, Set<unknown>>;
        activated: import("vue").Ref<Set<unknown>, Set<unknown>>;
        selected: import("vue").Ref<Map<unknown, "indeterminate" | "off" | "on">, Map<unknown, "indeterminate" | "off" | "on">>;
        selectedValues: import("vue").Ref<unknown[], unknown[]>;
        register: (id: unknown, parentId: unknown, isDisabled: boolean, isGroup?: boolean | undefined) => void;
        unregister: (id: unknown) => void;
        open: (id: unknown, value: boolean, event?: Event | undefined) => void;
        activate: (id: unknown, value: boolean, event?: Event | undefined) => void;
        select: (id: unknown, value: boolean, event?: Event | undefined) => void;
        openOnSelect: (id: unknown, value: boolean, event?: Event | undefined) => void;
        getPath: (id: unknown) => unknown[];
    };
    id: import("vue").ComputedRef<{} | null>;
    link: import("../../composables/router.js").UseLink;
}> & {} & import("vue").ComponentCustomProperties & {}, "$children" | "activeClass" | "activeColor" | "appendAvatar" | "appendIcon" | "baseColor" | "border" | "class" | "color" | "elevation" | "height" | "href" | "lines" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "onClick" | "onClickOnce" | "prependAvatar" | "prependIcon" | "theme" | "to" | "v-slot:append" | "v-slot:default" | "v-slot:prepend" | "v-slot:subtitle" | "v-slot:title" | "v-slots" | "value" | "width" | ("active" | "density" | "disabled" | "exact" | "link" | "nav" | "replace" | "ripple" | "rounded" | "slim" | "style" | "subtitle" | "tag" | "tile" | "title" | "variant") | keyof import("vue").VNodeProps>, `$${any}`> & {
    _allExposed: {
        activate: (activated: boolean, e?: Event | undefined) => void;
        isActivated: import("vue").ComputedRef<boolean>;
        isGroupActivator: boolean | undefined;
        isSelected: import("vue").ComputedRef<boolean>;
        list: {
            filterable: import("vue").MaybeRefOrGetter<boolean>;
            hasPrepend: import("vue").Ref<boolean, boolean>;
            updateHasPrepend: (value: boolean) => void;
        } | null;
        select: (selected: boolean, e?: Event | undefined) => void;
        root: {
            children: import("vue").Ref<Map<unknown, unknown[]>, Map<unknown, unknown[]>>;
            parents: import("vue").Ref<Map<unknown, unknown>, Map<unknown, unknown>>;
            disabled: import("vue").Ref<Set<unknown>, Set<unknown>>;
            activatable: import("vue").Ref<boolean, boolean>;
            selectable: import("vue").Ref<boolean, boolean>;
            opened: import("vue").Ref<Set<unknown>, Set<unknown>>;
            activated: import("vue").Ref<Set<unknown>, Set<unknown>>;
            selected: import("vue").Ref<Map<unknown, "indeterminate" | "off" | "on">, Map<unknown, "indeterminate" | "off" | "on">>;
            selectedValues: import("vue").Ref<unknown[], unknown[]>;
            register: (id: unknown, parentId: unknown, isDisabled: boolean, isGroup?: boolean | undefined) => void;
            unregister: (id: unknown) => void;
            open: (id: unknown, value: boolean, event?: Event | undefined) => void;
            activate: (id: unknown, value: boolean, event?: Event | undefined) => void;
            select: (id: unknown, value: boolean, event?: Event | undefined) => void;
            openOnSelect: (id: unknown, value: boolean, event?: Event | undefined) => void;
            getPath: (id: unknown) => unknown[];
        };
        id: import("vue").ComputedRef<{} | null>;
        link: import("../../composables/router.js").UseLink;
    } | {};
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    toggleExpand: (value: PointerEvent) => true;
}, string, {
    style: import("vue").StyleValue;
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
    replace: boolean;
    exact: boolean;
    active: boolean;
    disabled: boolean;
    link: boolean;
    nav: boolean;
    ripple: boolean | {
        class?: string | undefined;
        keys?: string[] | undefined;
    } | undefined;
    slim: boolean;
    subtitle: string | number | boolean;
    title: string | number | boolean;
    loading: boolean;
    hideActions: boolean;
    hasCustomPrepend: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    prepend: (arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    append: (arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    default: (arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    title: (arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    subtitle: (arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    toggle: (arg: import("../VList/VListItem.js").ListItemSlot & {
        props: {
            onClick: (e: PointerEvent) => void;
        };
    } & {
        loading: boolean;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    elevation: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    };
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    color: StringConstructor;
    variant: Omit<{
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
    };
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    minHeight: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    href: StringConstructor;
    replace: BooleanConstructor;
    to: PropType<string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric>;
    exact: BooleanConstructor;
    active: {
        type: BooleanConstructor;
        default: undefined;
    };
    activeClass: StringConstructor;
    activeColor: StringConstructor;
    appendAvatar: StringConstructor;
    appendIcon: PropType<IconValue>;
    baseColor: StringConstructor;
    disabled: BooleanConstructor;
    lines: PropType<"one" | "three" | "two" | false>;
    link: {
        type: BooleanConstructor;
        default: undefined;
    };
    nav: BooleanConstructor;
    prependAvatar: StringConstructor;
    prependIcon: PropType<IconValue>;
    ripple: {
        type: PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    };
    slim: {
        type: PropType<boolean>;
        default: boolean;
    };
    subtitle: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    title: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    value: null;
    onClick: PropType<(args_0: KeyboardEvent | MouseEvent) => void>;
    onClickOnce: PropType<(args_0: MouseEvent) => void>;
    loading: BooleanConstructor;
    hideActions: BooleanConstructor;
    hasCustomPrepend: BooleanConstructor;
    indentLines: PropType<IndentLineType[]>;
    toggleIcon: PropType<IconValue>;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    elevation: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    };
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    color: StringConstructor;
    variant: Omit<{
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
    };
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    minHeight: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    href: StringConstructor;
    replace: BooleanConstructor;
    to: PropType<string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric>;
    exact: BooleanConstructor;
    active: {
        type: BooleanConstructor;
        default: undefined;
    };
    activeClass: StringConstructor;
    activeColor: StringConstructor;
    appendAvatar: StringConstructor;
    appendIcon: PropType<IconValue>;
    baseColor: StringConstructor;
    disabled: BooleanConstructor;
    lines: PropType<"one" | "three" | "two" | false>;
    link: {
        type: BooleanConstructor;
        default: undefined;
    };
    nav: BooleanConstructor;
    prependAvatar: StringConstructor;
    prependIcon: PropType<IconValue>;
    ripple: {
        type: PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    };
    slim: {
        type: PropType<boolean>;
        default: boolean;
    };
    subtitle: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    title: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    value: null;
    onClick: PropType<(args_0: KeyboardEvent | MouseEvent) => void>;
    onClickOnce: PropType<(args_0: MouseEvent) => void>;
    loading: BooleanConstructor;
    hideActions: BooleanConstructor;
    hasCustomPrepend: BooleanConstructor;
    indentLines: PropType<IndentLineType[]>;
    toggleIcon: PropType<IconValue>;
}>>;
export type VTreeviewItem = InstanceType<typeof VTreeviewItem>;
