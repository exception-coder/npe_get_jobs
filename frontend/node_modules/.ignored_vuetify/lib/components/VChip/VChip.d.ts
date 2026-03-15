/* eslint-disable complexity */
// Styles

import { IconValue } from '../../composables/icons.js';
// Types
import type { PropType } from 'vue';
export type VChipSlots = {
    default: {
        isSelected: boolean | undefined;
        selectedClass: boolean | (string | undefined)[] | undefined;
        select: ((value: boolean) => void) | undefined;
        toggle: (() => void) | undefined;
        value: unknown;
        disabled: boolean;
    };
    label: never;
    prepend: never;
    append: never;
    close: never;
    filter: never;
};
export declare const makeVChipProps: <Defaults extends {
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
    value?: unknown;
    disabled?: unknown;
    selectedClass?: unknown;
    size?: unknown;
    href?: unknown;
    replace?: unknown;
    to?: unknown;
    exact?: unknown;
    activeClass?: unknown;
    appendAvatar?: unknown;
    appendIcon?: unknown;
    baseColor?: unknown;
    closable?: unknown;
    closeIcon?: unknown;
    closeLabel?: unknown;
    draggable?: unknown;
    filter?: unknown;
    filterIcon?: unknown;
    label?: unknown;
    link?: unknown;
    pill?: unknown;
    prependAvatar?: unknown;
    prependIcon?: unknown;
    ripple?: unknown;
    text?: unknown;
    modelValue?: unknown;
    onClick?: unknown;
    onClickOnce?: unknown;
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
    value: unknown extends Defaults["value"] ? null : {
        type: PropType<unknown extends Defaults["value"] ? any : any>;
        default: unknown extends Defaults["value"] ? any : any;
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    selectedClass: unknown extends Defaults["selectedClass"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"]>;
        default: unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"];
    };
    size: unknown extends Defaults["size"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["size"] ? string | number : string | number | Defaults["size"]>;
        default: unknown extends Defaults["size"] ? string | number : Defaults["size"] | NonNullable<string | number>;
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
    activeClass: unknown extends Defaults["activeClass"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["activeClass"] ? string : string | Defaults["activeClass"]>;
        default: unknown extends Defaults["activeClass"] ? string : string | Defaults["activeClass"];
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
    draggable: unknown extends Defaults["draggable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["draggable"] ? boolean : boolean | Defaults["draggable"]>;
        default: unknown extends Defaults["draggable"] ? boolean : boolean | Defaults["draggable"];
    };
    filter: unknown extends Defaults["filter"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["filter"] ? boolean : boolean | Defaults["filter"]>;
        default: unknown extends Defaults["filter"] ? boolean : boolean | Defaults["filter"];
    };
    filterIcon: unknown extends Defaults["filterIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["filterIcon"] ? IconValue : Defaults["filterIcon"] | IconValue>;
        default: unknown extends Defaults["filterIcon"] ? IconValue : Defaults["filterIcon"] | NonNullable<IconValue>;
    };
    label: unknown extends Defaults["label"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["label"] ? boolean : boolean | Defaults["label"]>;
        default: unknown extends Defaults["label"] ? boolean : boolean | Defaults["label"];
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
    pill: unknown extends Defaults["pill"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["pill"] ? boolean : boolean | Defaults["pill"]>;
        default: unknown extends Defaults["pill"] ? boolean : boolean | Defaults["pill"];
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
    text: unknown extends Defaults["text"] ? {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    } : Omit<{
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["text"] ? string | number | boolean : string | number | boolean | Defaults["text"]>;
        default: unknown extends Defaults["text"] ? string | number | boolean : Defaults["text"] | NonNullable<string | number | boolean>;
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
    onClick: unknown extends Defaults["onClick"] ? PropType<(args_0: MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onClick"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick"]>;
        default: unknown extends Defaults["onClick"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick"];
    };
    onClickOnce: unknown extends Defaults["onClickOnce"] ? PropType<(args_0: MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onClickOnce"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClickOnce"]>;
        default: unknown extends Defaults["onClickOnce"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClickOnce"];
    };
};
export declare const VChip: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        disabled: boolean;
        size: string | number;
        replace: boolean;
        exact: boolean;
        closable: boolean;
        closeIcon: IconValue;
        closeLabel: string;
        draggable: boolean;
        filter: boolean;
        filterIcon: IconValue;
        label: boolean;
        pill: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        };
        modelValue: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        color?: string | undefined;
        value?: any;
        selectedClass?: string | undefined;
        href?: string | undefined;
        to?: string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric | undefined;
        activeClass?: string | undefined;
        appendAvatar?: string | undefined;
        appendIcon?: IconValue | undefined;
        baseColor?: string | undefined;
        link?: boolean | undefined;
        prependAvatar?: string | undefined;
        prependIcon?: IconValue | undefined;
        text?: string | number | boolean | undefined;
        onClick?: ((args_0: MouseEvent) => void) | undefined;
        onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
    } & {
        $children?: {
            default?: ((arg: {
                isSelected: boolean | undefined;
                selectedClass: boolean | (string | undefined)[] | undefined;
                select: ((value: boolean) => void) | undefined;
                toggle: (() => void) | undefined;
                value: unknown;
                disabled: boolean;
            }) => import("vue").VNodeChild) | undefined;
            label?: (() => import("vue").VNodeChild) | undefined;
            prepend?: (() => import("vue").VNodeChild) | undefined;
            append?: (() => import("vue").VNodeChild) | undefined;
            close?: (() => import("vue").VNodeChild) | undefined;
            filter?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            isSelected: boolean | undefined;
            selectedClass: boolean | (string | undefined)[] | undefined;
            select: ((value: boolean) => void) | undefined;
            toggle: (() => void) | undefined;
            value: unknown;
            disabled: boolean;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                isSelected: boolean | undefined;
                selectedClass: boolean | (string | undefined)[] | undefined;
                select: ((value: boolean) => void) | undefined;
                toggle: (() => void) | undefined;
                value: unknown;
                disabled: boolean;
            }) => import("vue").VNodeChild) | undefined;
            label?: false | (() => import("vue").VNodeChild) | undefined;
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
            append?: false | (() => import("vue").VNodeChild) | undefined;
            close?: false | (() => import("vue").VNodeChild) | undefined;
            filter?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:close"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            isSelected: boolean | undefined;
            selectedClass: boolean | (string | undefined)[] | undefined;
            select: ((value: boolean) => void) | undefined;
            toggle: (() => void) | undefined;
            value: unknown;
            disabled: boolean;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:filter"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        onClick?: ((e: KeyboardEvent | MouseEvent) => any) | undefined;
        "onClick:close"?: ((e: MouseEvent) => any) | undefined;
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }, () => false | JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "click:close": (e: MouseEvent) => true;
        "update:modelValue": (value: boolean) => true;
        "group:selected": (val: {
            value: boolean;
        }) => true;
        click: (e: KeyboardEvent | MouseEvent) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        disabled: boolean;
        size: string | number;
        replace: boolean;
        exact: boolean;
        closable: boolean;
        closeIcon: IconValue;
        closeLabel: string;
        draggable: boolean;
        filter: boolean;
        filterIcon: IconValue;
        label: boolean;
        link: boolean;
        pill: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined;
        text: string | number | boolean;
        modelValue: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: {
            isSelected: boolean | undefined;
            selectedClass: boolean | (string | undefined)[] | undefined;
            select: ((value: boolean) => void) | undefined;
            toggle: (() => void) | undefined;
            value: unknown;
            disabled: boolean;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        label: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        prepend: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        append: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        close: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        filter: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        disabled: boolean;
        size: string | number;
        replace: boolean;
        exact: boolean;
        closable: boolean;
        closeIcon: IconValue;
        closeLabel: string;
        draggable: boolean;
        filter: boolean;
        filterIcon: IconValue;
        label: boolean;
        pill: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        };
        modelValue: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        color?: string | undefined;
        value?: any;
        selectedClass?: string | undefined;
        href?: string | undefined;
        to?: string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric | undefined;
        activeClass?: string | undefined;
        appendAvatar?: string | undefined;
        appendIcon?: IconValue | undefined;
        baseColor?: string | undefined;
        link?: boolean | undefined;
        prependAvatar?: string | undefined;
        prependIcon?: IconValue | undefined;
        text?: string | number | boolean | undefined;
        onClick?: ((args_0: MouseEvent) => void) | undefined;
        onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
    } & {
        $children?: {
            default?: ((arg: {
                isSelected: boolean | undefined;
                selectedClass: boolean | (string | undefined)[] | undefined;
                select: ((value: boolean) => void) | undefined;
                toggle: (() => void) | undefined;
                value: unknown;
                disabled: boolean;
            }) => import("vue").VNodeChild) | undefined;
            label?: (() => import("vue").VNodeChild) | undefined;
            prepend?: (() => import("vue").VNodeChild) | undefined;
            append?: (() => import("vue").VNodeChild) | undefined;
            close?: (() => import("vue").VNodeChild) | undefined;
            filter?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            isSelected: boolean | undefined;
            selectedClass: boolean | (string | undefined)[] | undefined;
            select: ((value: boolean) => void) | undefined;
            toggle: (() => void) | undefined;
            value: unknown;
            disabled: boolean;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                isSelected: boolean | undefined;
                selectedClass: boolean | (string | undefined)[] | undefined;
                select: ((value: boolean) => void) | undefined;
                toggle: (() => void) | undefined;
                value: unknown;
                disabled: boolean;
            }) => import("vue").VNodeChild) | undefined;
            label?: false | (() => import("vue").VNodeChild) | undefined;
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
            append?: false | (() => import("vue").VNodeChild) | undefined;
            close?: false | (() => import("vue").VNodeChild) | undefined;
            filter?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:close"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            isSelected: boolean | undefined;
            selectedClass: boolean | (string | undefined)[] | undefined;
            select: ((value: boolean) => void) | undefined;
            toggle: (() => void) | undefined;
            value: unknown;
            disabled: boolean;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:filter"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        onClick?: ((e: KeyboardEvent | MouseEvent) => any) | undefined;
        "onClick:close"?: ((e: MouseEvent) => any) | undefined;
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }, () => false | JSX.Element, {}, {}, {}, {
        style: import("vue").StyleValue;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        disabled: boolean;
        size: string | number;
        replace: boolean;
        exact: boolean;
        closable: boolean;
        closeIcon: IconValue;
        closeLabel: string;
        draggable: boolean;
        filter: boolean;
        filterIcon: IconValue;
        label: boolean;
        link: boolean;
        pill: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined;
        text: string | number | boolean;
        modelValue: boolean;
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
    disabled: boolean;
    size: string | number;
    replace: boolean;
    exact: boolean;
    closable: boolean;
    closeIcon: IconValue;
    closeLabel: string;
    draggable: boolean;
    filter: boolean;
    filterIcon: IconValue;
    label: boolean;
    pill: boolean;
    ripple: boolean | {
        class?: string | undefined;
        keys?: string[] | undefined;
    };
    modelValue: boolean;
} & {
    theme?: string | undefined;
    class?: any;
    border?: string | number | boolean | undefined;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    color?: string | undefined;
    value?: any;
    selectedClass?: string | undefined;
    href?: string | undefined;
    to?: string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric | undefined;
    activeClass?: string | undefined;
    appendAvatar?: string | undefined;
    appendIcon?: IconValue | undefined;
    baseColor?: string | undefined;
    link?: boolean | undefined;
    prependAvatar?: string | undefined;
    prependIcon?: IconValue | undefined;
    text?: string | number | boolean | undefined;
    onClick?: ((args_0: MouseEvent) => void) | undefined;
    onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
} & {
    $children?: {
        default?: ((arg: {
            isSelected: boolean | undefined;
            selectedClass: boolean | (string | undefined)[] | undefined;
            select: ((value: boolean) => void) | undefined;
            toggle: (() => void) | undefined;
            value: unknown;
            disabled: boolean;
        }) => import("vue").VNodeChild) | undefined;
        label?: (() => import("vue").VNodeChild) | undefined;
        prepend?: (() => import("vue").VNodeChild) | undefined;
        append?: (() => import("vue").VNodeChild) | undefined;
        close?: (() => import("vue").VNodeChild) | undefined;
        filter?: (() => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | ((arg: {
        isSelected: boolean | undefined;
        selectedClass: boolean | (string | undefined)[] | undefined;
        select: ((value: boolean) => void) | undefined;
        toggle: (() => void) | undefined;
        value: unknown;
        disabled: boolean;
    }) => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | ((arg: {
            isSelected: boolean | undefined;
            selectedClass: boolean | (string | undefined)[] | undefined;
            select: ((value: boolean) => void) | undefined;
            toggle: (() => void) | undefined;
            value: unknown;
            disabled: boolean;
        }) => import("vue").VNodeChild) | undefined;
        label?: false | (() => import("vue").VNodeChild) | undefined;
        prepend?: false | (() => import("vue").VNodeChild) | undefined;
        append?: false | (() => import("vue").VNodeChild) | undefined;
        close?: false | (() => import("vue").VNodeChild) | undefined;
        filter?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:close"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | ((arg: {
        isSelected: boolean | undefined;
        selectedClass: boolean | (string | undefined)[] | undefined;
        select: ((value: boolean) => void) | undefined;
        toggle: (() => void) | undefined;
        value: unknown;
        disabled: boolean;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:filter"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:label"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    onClick?: ((e: KeyboardEvent | MouseEvent) => any) | undefined;
    "onClick:close"?: ((e: MouseEvent) => any) | undefined;
    "onGroup:selected"?: ((val: {
        value: boolean;
    }) => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, () => false | JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "click:close": (e: MouseEvent) => true;
    "update:modelValue": (value: boolean) => true;
    "group:selected": (val: {
        value: boolean;
    }) => true;
    click: (e: KeyboardEvent | MouseEvent) => true;
}, string, {
    style: import("vue").StyleValue;
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
    disabled: boolean;
    size: string | number;
    replace: boolean;
    exact: boolean;
    closable: boolean;
    closeIcon: IconValue;
    closeLabel: string;
    draggable: boolean;
    filter: boolean;
    filterIcon: IconValue;
    label: boolean;
    link: boolean;
    pill: boolean;
    ripple: boolean | {
        class?: string | undefined;
        keys?: string[] | undefined;
    } | undefined;
    text: string | number | boolean;
    modelValue: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: {
        isSelected: boolean | undefined;
        selectedClass: boolean | (string | undefined)[] | undefined;
        select: ((value: boolean) => void) | undefined;
        toggle: (() => void) | undefined;
        value: unknown;
        disabled: boolean;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    label: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    prepend: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    append: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    close: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    filter: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
    tag: Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
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
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    size: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: PropType<string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric>;
    exact: BooleanConstructor;
    activeClass: StringConstructor;
    appendAvatar: StringConstructor;
    appendIcon: PropType<IconValue>;
    baseColor: StringConstructor;
    closable: BooleanConstructor;
    closeIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    closeLabel: {
        type: StringConstructor;
        default: string;
    };
    draggable: BooleanConstructor;
    filter: BooleanConstructor;
    filterIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    label: BooleanConstructor;
    link: {
        type: BooleanConstructor;
        default: undefined;
    };
    pill: BooleanConstructor;
    prependAvatar: StringConstructor;
    prependIcon: PropType<IconValue>;
    ripple: {
        type: PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    };
    text: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    onClick: PropType<(args_0: MouseEvent) => void>;
    onClickOnce: PropType<(args_0: MouseEvent) => void>;
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
    tag: Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
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
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    size: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: PropType<string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric>;
    exact: BooleanConstructor;
    activeClass: StringConstructor;
    appendAvatar: StringConstructor;
    appendIcon: PropType<IconValue>;
    baseColor: StringConstructor;
    closable: BooleanConstructor;
    closeIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    closeLabel: {
        type: StringConstructor;
        default: string;
    };
    draggable: BooleanConstructor;
    filter: BooleanConstructor;
    filterIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    label: BooleanConstructor;
    link: {
        type: BooleanConstructor;
        default: undefined;
    };
    pill: BooleanConstructor;
    prependAvatar: StringConstructor;
    prependIcon: PropType<IconValue>;
    ripple: {
        type: PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    };
    text: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    onClick: PropType<(args_0: MouseEvent) => void>;
    onClickOnce: PropType<(args_0: MouseEvent) => void>;
}>>;
export type VChip = InstanceType<typeof VChip>;
