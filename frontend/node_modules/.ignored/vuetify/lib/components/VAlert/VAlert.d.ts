// Styles

import { IconValue } from '../../composables/icons.js';
// Types
import type { PropType } from 'vue';
export declare const makeVAlertProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
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
    location?: unknown;
    position?: unknown;
    iconSize?: unknown;
    iconSizes?: unknown;
    border?: unknown;
    borderColor?: unknown;
    closable?: unknown;
    closeIcon?: unknown;
    closeLabel?: unknown;
    icon?: unknown;
    modelValue?: unknown;
    prominent?: unknown;
    title?: unknown;
    text?: unknown;
    type?: unknown;
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
    location: unknown extends Defaults["location"] ? PropType<import("../../util/index.js").Anchor | null> : {
        type: PropType<unknown extends Defaults["location"] ? import("../../util/index.js").Anchor | null : Defaults["location"] | import("../../util/index.js").Anchor | null>;
        default: unknown extends Defaults["location"] ? import("../../util/index.js").Anchor | null : Defaults["location"] | NonNullable<import("../../util/index.js").Anchor | null>;
    };
    position: unknown extends Defaults["position"] ? {
        type: PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["position"] ? "absolute" | "fixed" | "relative" | "static" | "sticky" : "absolute" | "fixed" | "relative" | "static" | "sticky" | Defaults["position"]>;
        default: unknown extends Defaults["position"] ? "absolute" | "fixed" | "relative" | "static" | "sticky" : Defaults["position"] | NonNullable<"absolute" | "fixed" | "relative" | "static" | "sticky">;
    };
    iconSize: unknown extends Defaults["iconSize"] ? PropType<string | number> : {
        type: PropType<unknown extends Defaults["iconSize"] ? string | number : string | number | Defaults["iconSize"]>;
        default: unknown extends Defaults["iconSize"] ? string | number : Defaults["iconSize"] | NonNullable<string | number>;
    };
    iconSizes: unknown extends Defaults["iconSizes"] ? {
        type: PropType<[import("../../labs/VIconBtn/VIconBtn.js").VIconBtnSizes, number][]>;
        default: () => (string | number)[][];
    } : Omit<{
        type: PropType<[import("../../labs/VIconBtn/VIconBtn.js").VIconBtnSizes, number][]>;
        default: () => (string | number)[][];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["iconSizes"] ? [import("../../labs/VIconBtn/VIconBtn.js").VIconBtnSizes, number][] : [import("../../labs/VIconBtn/VIconBtn.js").VIconBtnSizes, number][] | Defaults["iconSizes"]>;
        default: unknown extends Defaults["iconSizes"] ? [import("../../labs/VIconBtn/VIconBtn.js").VIconBtnSizes, number][] : [import("../../labs/VIconBtn/VIconBtn.js").VIconBtnSizes, number][] | Defaults["iconSizes"];
    };
    border: unknown extends Defaults["border"] ? {
        type: PropType<"bottom" | "end" | "start" | "top" | boolean>;
        validator: (val: string | boolean) => boolean;
    } : Omit<{
        type: PropType<"bottom" | "end" | "start" | "top" | boolean>;
        validator: (val: string | boolean) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["border"] ? "bottom" | "end" | "start" | "top" | boolean : "bottom" | "end" | "start" | "top" | boolean | Defaults["border"]>;
        default: unknown extends Defaults["border"] ? "bottom" | "end" | "start" | "top" | boolean : Defaults["border"] | NonNullable<"bottom" | "end" | "start" | "top" | boolean>;
    };
    borderColor: unknown extends Defaults["borderColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["borderColor"] ? string : string | Defaults["borderColor"]>;
        default: unknown extends Defaults["borderColor"] ? string : string | Defaults["borderColor"];
    };
    closable: unknown extends Defaults["closable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["closable"] ? boolean : boolean | Defaults["closable"]>;
        default: unknown extends Defaults["closable"] ? boolean : boolean | Defaults["closable"];
    };
    closeIcon: unknown extends Defaults["closeIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["closeIcon"] ? IconValue : Defaults["closeIcon"] | IconValue>;
        default: unknown extends Defaults["closeIcon"] ? IconValue : Defaults["closeIcon"] | NonNullable<IconValue>;
    };
    closeLabel: unknown extends Defaults["closeLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["closeLabel"] ? string : string | Defaults["closeLabel"]>;
        default: unknown extends Defaults["closeLabel"] ? string : string | Defaults["closeLabel"];
    };
    icon: unknown extends Defaults["icon"] ? {
        type: PropType<false | IconValue>;
        default: null;
    } : Omit<{
        type: PropType<false | IconValue>;
        default: null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["icon"] ? false | IconValue : false | Defaults["icon"] | IconValue>;
        default: unknown extends Defaults["icon"] ? false | IconValue : Defaults["icon"] | NonNullable<false | IconValue>;
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: BooleanConstructor;
        default: boolean;
    } : Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["modelValue"] ? boolean : boolean | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? boolean : boolean | Defaults["modelValue"];
    };
    prominent: unknown extends Defaults["prominent"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["prominent"] ? boolean : boolean | Defaults["prominent"]>;
        default: unknown extends Defaults["prominent"] ? boolean : boolean | Defaults["prominent"];
    };
    title: unknown extends Defaults["title"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["title"] ? string : string | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string : string | Defaults["title"];
    };
    text: unknown extends Defaults["text"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["text"] ? string : string | Defaults["text"]>;
        default: unknown extends Defaults["text"] ? string : string | Defaults["text"];
    };
    type: unknown extends Defaults["type"] ? {
        type: PropType<"error" | "info" | "success" | "warning">;
        validator: (val: "error" | "info" | "success" | "warning") => boolean;
    } : Omit<{
        type: PropType<"error" | "info" | "success" | "warning">;
        validator: (val: "error" | "info" | "success" | "warning") => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["type"] ? "error" | "info" | "success" | "warning" : "error" | "info" | "success" | "warning" | Defaults["type"]>;
        default: unknown extends Defaults["type"] ? "error" | "info" | "success" | "warning" : Defaults["type"] | NonNullable<"error" | "info" | "success" | "warning">;
    };
};
export type VAlertSlots = {
    default: never;
    prepend: never;
    title: never;
    text: never;
    append: never;
    close: {
        props: Record<string, any>;
    };
};
export declare const VAlert: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        iconSizes: [import("../../labs/VIconBtn/VIconBtn.js").VIconBtnSizes, number][];
        closable: boolean;
        closeIcon: IconValue;
        closeLabel: string;
        icon: false | IconValue;
        modelValue: boolean;
        prominent: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        color?: string | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        location?: import("../../util/index.js").Anchor | null | undefined;
        position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
        iconSize?: string | number | undefined;
        border?: "bottom" | "end" | "start" | "top" | boolean | undefined;
        borderColor?: string | undefined;
        title?: string | undefined;
        text?: string | undefined;
        type?: "error" | "info" | "success" | "warning" | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            prepend?: (() => import("vue").VNodeChild) | undefined;
            title?: (() => import("vue").VNodeChild) | undefined;
            text?: (() => import("vue").VNodeChild) | undefined;
            append?: (() => import("vue").VNodeChild) | undefined;
            close?: ((arg: {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
            title?: false | (() => import("vue").VNodeChild) | undefined;
            text?: false | (() => import("vue").VNodeChild) | undefined;
            append?: false | (() => import("vue").VNodeChild) | undefined;
            close?: false | ((arg: {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:close"?: false | ((arg: {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:text"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onClick:close"?: ((e: MouseEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }, () => false | JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "click:close": (e: MouseEvent) => true;
        "update:modelValue": (value: boolean) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        iconSizes: [import("../../labs/VIconBtn/VIconBtn.js").VIconBtnSizes, number][];
        closable: boolean;
        closeIcon: IconValue;
        closeLabel: string;
        icon: false | IconValue;
        modelValue: boolean;
        prominent: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        prepend: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        title: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        text: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        append: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        close: (arg: {
            props: Record<string, any>;
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
        iconSizes: [import("../../labs/VIconBtn/VIconBtn.js").VIconBtnSizes, number][];
        closable: boolean;
        closeIcon: IconValue;
        closeLabel: string;
        icon: false | IconValue;
        modelValue: boolean;
        prominent: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        color?: string | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        location?: import("../../util/index.js").Anchor | null | undefined;
        position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
        iconSize?: string | number | undefined;
        border?: "bottom" | "end" | "start" | "top" | boolean | undefined;
        borderColor?: string | undefined;
        title?: string | undefined;
        text?: string | undefined;
        type?: "error" | "info" | "success" | "warning" | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            prepend?: (() => import("vue").VNodeChild) | undefined;
            title?: (() => import("vue").VNodeChild) | undefined;
            text?: (() => import("vue").VNodeChild) | undefined;
            append?: (() => import("vue").VNodeChild) | undefined;
            close?: ((arg: {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
            title?: false | (() => import("vue").VNodeChild) | undefined;
            text?: false | (() => import("vue").VNodeChild) | undefined;
            append?: false | (() => import("vue").VNodeChild) | undefined;
            close?: false | ((arg: {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:close"?: false | ((arg: {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:text"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onClick:close"?: ((e: MouseEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }, () => false | JSX.Element, {}, {}, {}, {
        style: import("vue").StyleValue;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        iconSizes: [import("../../labs/VIconBtn/VIconBtn.js").VIconBtnSizes, number][];
        closable: boolean;
        closeIcon: IconValue;
        closeLabel: string;
        icon: false | IconValue;
        modelValue: boolean;
        prominent: boolean;
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
    iconSizes: [import("../../labs/VIconBtn/VIconBtn.js").VIconBtnSizes, number][];
    closable: boolean;
    closeIcon: IconValue;
    closeLabel: string;
    icon: false | IconValue;
    modelValue: boolean;
    prominent: boolean;
} & {
    theme?: string | undefined;
    class?: any;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    color?: string | undefined;
    height?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    width?: string | number | undefined;
    location?: import("../../util/index.js").Anchor | null | undefined;
    position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
    iconSize?: string | number | undefined;
    border?: "bottom" | "end" | "start" | "top" | boolean | undefined;
    borderColor?: string | undefined;
    title?: string | undefined;
    text?: string | undefined;
    type?: "error" | "info" | "success" | "warning" | undefined;
} & {
    $children?: {
        default?: (() => import("vue").VNodeChild) | undefined;
        prepend?: (() => import("vue").VNodeChild) | undefined;
        title?: (() => import("vue").VNodeChild) | undefined;
        text?: (() => import("vue").VNodeChild) | undefined;
        append?: (() => import("vue").VNodeChild) | undefined;
        close?: ((arg: {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
        prepend?: false | (() => import("vue").VNodeChild) | undefined;
        title?: false | (() => import("vue").VNodeChild) | undefined;
        text?: false | (() => import("vue").VNodeChild) | undefined;
        append?: false | (() => import("vue").VNodeChild) | undefined;
        close?: false | ((arg: {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:close"?: false | ((arg: {
        props: Record<string, any>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:text"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    "onClick:close"?: ((e: MouseEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, () => false | JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "click:close": (e: MouseEvent) => true;
    "update:modelValue": (value: boolean) => true;
}, string, {
    style: import("vue").StyleValue;
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
    iconSizes: [import("../../labs/VIconBtn/VIconBtn.js").VIconBtnSizes, number][];
    closable: boolean;
    closeIcon: IconValue;
    closeLabel: string;
    icon: false | IconValue;
    modelValue: boolean;
    prominent: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    prepend: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    title: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    text: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    append: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    close: (arg: {
        props: Record<string, any>;
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
    location: PropType<import("../../util/index.js").Anchor | null>;
    position: {
        type: PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    iconSize: PropType<string | number>;
    iconSizes: {
        type: PropType<[import("../../labs/VIconBtn/VIconBtn.js").VIconBtnSizes, number][]>;
        default: () => (string | number)[][];
    };
    border: {
        type: PropType<"bottom" | "end" | "start" | "top" | boolean>;
        validator: (val: string | boolean) => boolean;
    };
    borderColor: StringConstructor;
    closable: BooleanConstructor;
    closeIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    closeLabel: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: PropType<false | IconValue>;
        default: null;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    prominent: BooleanConstructor;
    title: StringConstructor;
    text: StringConstructor;
    type: {
        type: PropType<"error" | "info" | "success" | "warning">;
        validator: (val: "error" | "info" | "success" | "warning") => boolean;
    };
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
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
    location: PropType<import("../../util/index.js").Anchor | null>;
    position: {
        type: PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    iconSize: PropType<string | number>;
    iconSizes: {
        type: PropType<[import("../../labs/VIconBtn/VIconBtn.js").VIconBtnSizes, number][]>;
        default: () => (string | number)[][];
    };
    border: {
        type: PropType<"bottom" | "end" | "start" | "top" | boolean>;
        validator: (val: string | boolean) => boolean;
    };
    borderColor: StringConstructor;
    closable: BooleanConstructor;
    closeIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    closeLabel: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: PropType<false | IconValue>;
        default: null;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    prominent: BooleanConstructor;
    title: StringConstructor;
    text: StringConstructor;
    type: {
        type: PropType<"error" | "info" | "success" | "warning">;
        validator: (val: "error" | "info" | "success" | "warning") => boolean;
    };
}>>;
export type VAlert = InstanceType<typeof VAlert>;
