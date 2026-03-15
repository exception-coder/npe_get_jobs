// Types
import type { PropType } from 'vue';
import type { VListItemSlots } from '../../components/VList/VListItem.js';
export type VFileUploadItemSlots = {
    clear: {
        props: {
            onClick: () => void;
        };
    };
} & VListItemSlots;
export declare const makeVFileUploadItemProps: <Defaults extends {
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
    clearable?: unknown;
    file?: unknown;
    fileIcon?: unknown;
    showSize?: unknown;
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
    border: unknown extends Defaults["border"] ? {
        type: PropType<string | number | boolean>;
        default: NonNullable<string | number | boolean>;
    } : Omit<{
        type: PropType<string | number | boolean>;
        default: NonNullable<string | number | boolean>;
    }, "default" | "type"> & {
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
    rounded: unknown extends Defaults["rounded"] ? Omit<{
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<string | number | boolean>;
        default: NonNullable<string | number | boolean>;
    } : Omit<Omit<{
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<string | number | boolean>;
        default: NonNullable<string | number | boolean>;
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
    appendIcon: unknown extends Defaults["appendIcon"] ? PropType<import("../../composables/icons.js").IconValue> : {
        type: PropType<unknown extends Defaults["appendIcon"] ? import("../../composables/icons.js").IconValue : Defaults["appendIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["appendIcon"] ? import("../../composables/icons.js").IconValue : Defaults["appendIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    baseColor: unknown extends Defaults["baseColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"]>;
        default: unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    lines: unknown extends Defaults["lines"] ? {
        type: PropType<"one" | "three" | "two" | false>;
        default: NonNullable<"one" | "three" | "two" | false>;
    } : Omit<{
        type: PropType<"one" | "three" | "two" | false>;
        default: NonNullable<"one" | "three" | "two" | false>;
    }, "default" | "type"> & {
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
    prependIcon: unknown extends Defaults["prependIcon"] ? PropType<import("../../composables/icons.js").IconValue> : {
        type: PropType<unknown extends Defaults["prependIcon"] ? import("../../composables/icons.js").IconValue : Defaults["prependIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["prependIcon"] ? import("../../composables/icons.js").IconValue : Defaults["prependIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
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
    slim: unknown extends Defaults["slim"] ? BooleanConstructor : {
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
    clearable: unknown extends Defaults["clearable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["clearable"] ? boolean : boolean | Defaults["clearable"]>;
        default: unknown extends Defaults["clearable"] ? boolean : boolean | Defaults["clearable"];
    };
    file: unknown extends Defaults["file"] ? {
        type: PropType<File>;
        default: null;
    } : Omit<{
        type: PropType<File>;
        default: null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["file"] ? File : File | Defaults["file"]>;
        default: unknown extends Defaults["file"] ? File : File | Defaults["file"];
    };
    fileIcon: unknown extends Defaults["fileIcon"] ? {
        type: StringConstructor;
        // TODO: setup up a proper aliased icon
        default: string;
    } : Omit<{
        type: StringConstructor;
        // TODO: setup up a proper aliased icon
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["fileIcon"] ? string : string | Defaults["fileIcon"]>;
        default: unknown extends Defaults["fileIcon"] ? string : string | Defaults["fileIcon"];
    };
    showSize: unknown extends Defaults["showSize"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["showSize"] ? boolean : boolean | Defaults["showSize"]>;
        default: unknown extends Defaults["showSize"] ? boolean : boolean | Defaults["showSize"];
    };
};
export declare const VFileUploadItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        border: string | number | boolean;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        replace: boolean;
        exact: boolean;
        disabled: boolean;
        lines: "one" | "three" | "two" | false;
        nav: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        };
        slim: boolean;
        clearable: boolean;
        file: File;
        fileIcon: string;
        showSize: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        elevation?: string | number | undefined;
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
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        baseColor?: string | undefined;
        link?: boolean | undefined;
        prependAvatar?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        subtitle?: string | number | boolean | undefined;
        title?: string | number | boolean | undefined;
        value?: any;
        onClick?: ((args_0: KeyboardEvent | MouseEvent) => void) | undefined;
        onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
    } & {
        $children?: {
            prepend?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            clear?: ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            prepend?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            clear?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
    } & {
        onClick?: ((e: KeyboardEvent | MouseEvent) => any) | undefined;
        "onClick:remove"?: (() => any) | undefined;
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "click:remove": () => true;
        click: (e: KeyboardEvent | MouseEvent) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        border: string | number | boolean;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        replace: boolean;
        exact: boolean;
        active: boolean;
        disabled: boolean;
        lines: "one" | "three" | "two" | false;
        link: boolean;
        nav: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined;
        slim: boolean;
        subtitle: string | number | boolean;
        title: string | number | boolean;
        clearable: boolean;
        file: File;
        fileIcon: string;
        showSize: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        prepend: (arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        append: (arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        default: (arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        title: (arg: import("../../components/VList/VListItem.js").ListItemTitleSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        subtitle: (arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        clear: (arg: {
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
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        border: string | number | boolean;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        replace: boolean;
        exact: boolean;
        disabled: boolean;
        lines: "one" | "three" | "two" | false;
        nav: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        };
        slim: boolean;
        clearable: boolean;
        file: File;
        fileIcon: string;
        showSize: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        elevation?: string | number | undefined;
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
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        baseColor?: string | undefined;
        link?: boolean | undefined;
        prependAvatar?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        subtitle?: string | number | boolean | undefined;
        title?: string | number | boolean | undefined;
        value?: any;
        onClick?: ((args_0: KeyboardEvent | MouseEvent) => void) | undefined;
        onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
    } & {
        $children?: {
            prepend?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            clear?: ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            prepend?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            clear?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
    } & {
        onClick?: ((e: KeyboardEvent | MouseEvent) => any) | undefined;
        "onClick:remove"?: (() => any) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        border: string | number | boolean;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        replace: boolean;
        exact: boolean;
        active: boolean;
        disabled: boolean;
        lines: "one" | "three" | "two" | false;
        link: boolean;
        nav: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined;
        slim: boolean;
        subtitle: string | number | boolean;
        title: string | number | boolean;
        clearable: boolean;
        file: File;
        fileIcon: string;
        showSize: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    border: string | number | boolean;
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
    replace: boolean;
    exact: boolean;
    disabled: boolean;
    lines: "one" | "three" | "two" | false;
    nav: boolean;
    ripple: boolean | {
        class?: string | undefined;
        keys?: string[] | undefined;
    };
    slim: boolean;
    clearable: boolean;
    file: File;
    fileIcon: string;
    showSize: boolean;
} & {
    theme?: string | undefined;
    class?: any;
    elevation?: string | number | undefined;
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
    appendIcon?: import("../../composables/icons.js").IconValue | undefined;
    baseColor?: string | undefined;
    link?: boolean | undefined;
    prependAvatar?: string | undefined;
    prependIcon?: import("../../composables/icons.js").IconValue | undefined;
    subtitle?: string | number | boolean | undefined;
    title?: string | number | boolean | undefined;
    value?: any;
    onClick?: ((args_0: KeyboardEvent | MouseEvent) => void) | undefined;
    onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
} & {
    $children?: {
        prepend?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        append?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        default?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        title?: ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
        subtitle?: ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        clear?: ((arg: {
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        prepend?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        append?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        default?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        title?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
        subtitle?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        clear?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:append"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:clear"?: false | ((arg: {
        props: {
            onClick: () => void;
        };
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:subtitle"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:title"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
} & {
    onClick?: ((e: KeyboardEvent | MouseEvent) => any) | undefined;
    "onClick:remove"?: (() => any) | undefined;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "click:remove": () => true;
    click: (e: KeyboardEvent | MouseEvent) => true;
}, string, {
    style: import("vue").StyleValue;
    border: string | number | boolean;
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
    replace: boolean;
    exact: boolean;
    active: boolean;
    disabled: boolean;
    lines: "one" | "three" | "two" | false;
    link: boolean;
    nav: boolean;
    ripple: boolean | {
        class?: string | undefined;
        keys?: string[] | undefined;
    } | undefined;
    slim: boolean;
    subtitle: string | number | boolean;
    title: string | number | boolean;
    clearable: boolean;
    file: File;
    fileIcon: string;
    showSize: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    prepend: (arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    append: (arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    default: (arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    title: (arg: import("../../components/VList/VListItem.js").ListItemTitleSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    subtitle: (arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    clear: (arg: {
        props: {
            onClick: () => void;
        };
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
    border: {
        type: PropType<string | number | boolean>;
        default: NonNullable<string | number | boolean>;
    };
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    elevation: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    };
    rounded: Omit<{
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<string | number | boolean>;
        default: NonNullable<string | number | boolean>;
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
    appendIcon: PropType<import("../../composables/icons.js").IconValue>;
    baseColor: StringConstructor;
    disabled: BooleanConstructor;
    lines: {
        type: PropType<"one" | "three" | "two" | false>;
        default: NonNullable<"one" | "three" | "two" | false>;
    };
    link: {
        type: BooleanConstructor;
        default: undefined;
    };
    nav: BooleanConstructor;
    prependAvatar: StringConstructor;
    prependIcon: PropType<import("../../composables/icons.js").IconValue>;
    ripple: {
        type: PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    };
    slim: BooleanConstructor;
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
    clearable: BooleanConstructor;
    file: {
        type: PropType<File>;
        default: null;
    };
    fileIcon: {
        type: StringConstructor;
        // TODO: setup up a proper aliased icon
        default: string;
    };
    showSize: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    border: {
        type: PropType<string | number | boolean>;
        default: NonNullable<string | number | boolean>;
    };
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    elevation: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    };
    rounded: Omit<{
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<string | number | boolean>;
        default: NonNullable<string | number | boolean>;
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
    appendIcon: PropType<import("../../composables/icons.js").IconValue>;
    baseColor: StringConstructor;
    disabled: BooleanConstructor;
    lines: {
        type: PropType<"one" | "three" | "two" | false>;
        default: NonNullable<"one" | "three" | "two" | false>;
    };
    link: {
        type: BooleanConstructor;
        default: undefined;
    };
    nav: BooleanConstructor;
    prependAvatar: StringConstructor;
    prependIcon: PropType<import("../../composables/icons.js").IconValue>;
    ripple: {
        type: PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    };
    slim: BooleanConstructor;
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
    clearable: BooleanConstructor;
    file: {
        type: PropType<File>;
        default: null;
    };
    fileIcon: {
        type: StringConstructor;
        // TODO: setup up a proper aliased icon
        default: string;
    };
    showSize: BooleanConstructor;
}>>;
export type VFileUploadItem = InstanceType<typeof VFileUploadItem>;
