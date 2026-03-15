import { IconValue } from '../../composables/icons.js';
// Types
import type { InjectionKey, PropType, Ref } from 'vue';
export interface VFileUploadContext {
    files: Ref<readonly File[]>;
    disabled: Ref<boolean>;
    error: Ref<boolean>;
    onDrop: (files: File[]) => void;
    onClickBrowse: () => void;
    onClickRemove: (index: number) => void;
}
export declare const VFileUploadKey: InjectionKey<VFileUploadContext>;
export type VFileUploadDropzoneSlots = {
    default: {
        isDragging: boolean;
        hasFiles: boolean;
        files: readonly File[];
        props: {
            onClick: () => void;
        };
    };
    browse: {
        props: {
            onClick: (e: MouseEvent) => void;
        };
    };
    icon: never;
    title: never;
    divider: never;
    single: {
        file: File;
        props: {
            'onClick:remove': () => void;
        };
    };
    item: {
        file: File;
        props: {
            'onClick:remove': () => void;
        };
    };
    input: never;
};
export declare const makeVFileUploadDropzoneProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    border?: unknown;
    density?: unknown;
    elevation?: unknown;
    rounded?: unknown;
    tile?: unknown;
    tag?: unknown;
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    location?: unknown;
    position?: unknown;
    closeDelay?: unknown;
    openDelay?: unknown;
    length?: unknown;
    opacity?: unknown;
    thickness?: unknown;
    color?: unknown;
    browseText?: unknown;
    dividerText?: unknown;
    title?: unknown;
    subtitle?: unknown;
    icon?: unknown;
    clearable?: unknown;
    disabled?: unknown;
    error?: unknown;
    hideBrowse?: unknown;
    insetFileList?: unknown;
    multiple?: unknown;
    scrim?: unknown;
    showSize?: unknown;
    modelValue?: unknown;
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
    closeDelay: unknown extends Defaults["closeDelay"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["closeDelay"] ? string | number : string | number | Defaults["closeDelay"]>;
        default: unknown extends Defaults["closeDelay"] ? string | number : Defaults["closeDelay"] | NonNullable<string | number>;
    };
    openDelay: unknown extends Defaults["openDelay"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["openDelay"] ? string | number : string | number | Defaults["openDelay"]>;
        default: unknown extends Defaults["openDelay"] ? string | number : Defaults["openDelay"] | NonNullable<string | number>;
    };
    length: unknown extends Defaults["length"] ? {
        type: PropType<string | number>;
        default: NonNullable<string | number>;
    } : Omit<{
        type: PropType<string | number>;
        default: NonNullable<string | number>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["length"] ? string | number : string | number | Defaults["length"]>;
        default: unknown extends Defaults["length"] ? string | number : Defaults["length"] | NonNullable<string | number>;
    };
    opacity: unknown extends Defaults["opacity"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["opacity"] ? string | number : string | number | Defaults["opacity"]>;
        default: unknown extends Defaults["opacity"] ? string | number : Defaults["opacity"] | NonNullable<string | number>;
    };
    thickness: unknown extends Defaults["thickness"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["thickness"] ? string | number : string | number | Defaults["thickness"]>;
        default: unknown extends Defaults["thickness"] ? string | number : Defaults["thickness"] | NonNullable<string | number>;
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    browseText: unknown extends Defaults["browseText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["browseText"] ? string : string | Defaults["browseText"]>;
        default: unknown extends Defaults["browseText"] ? string : string | Defaults["browseText"];
    };
    dividerText: unknown extends Defaults["dividerText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["dividerText"] ? string : string | Defaults["dividerText"]>;
        default: unknown extends Defaults["dividerText"] ? string : string | Defaults["dividerText"];
    };
    title: unknown extends Defaults["title"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["title"] ? string : string | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string : string | Defaults["title"];
    };
    subtitle: unknown extends Defaults["subtitle"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["subtitle"] ? string : string | Defaults["subtitle"]>;
        default: unknown extends Defaults["subtitle"] ? string : string | Defaults["subtitle"];
    };
    icon: unknown extends Defaults["icon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["icon"] ? IconValue : Defaults["icon"] | IconValue>;
        default: unknown extends Defaults["icon"] ? IconValue : Defaults["icon"] | NonNullable<IconValue>;
    };
    clearable: unknown extends Defaults["clearable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["clearable"] ? boolean : boolean | Defaults["clearable"]>;
        default: unknown extends Defaults["clearable"] ? boolean : boolean | Defaults["clearable"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    error: unknown extends Defaults["error"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"]>;
        default: unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"];
    };
    hideBrowse: unknown extends Defaults["hideBrowse"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideBrowse"] ? boolean : boolean | Defaults["hideBrowse"]>;
        default: unknown extends Defaults["hideBrowse"] ? boolean : boolean | Defaults["hideBrowse"];
    };
    insetFileList: unknown extends Defaults["insetFileList"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["insetFileList"] ? boolean : boolean | Defaults["insetFileList"]>;
        default: unknown extends Defaults["insetFileList"] ? boolean : boolean | Defaults["insetFileList"];
    };
    multiple: unknown extends Defaults["multiple"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["multiple"] ? boolean : boolean | Defaults["multiple"]>;
        default: unknown extends Defaults["multiple"] ? boolean : boolean | Defaults["multiple"];
    };
    scrim: unknown extends Defaults["scrim"] ? {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    } : Omit<{
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["scrim"] ? string | boolean : string | boolean | Defaults["scrim"]>;
        default: unknown extends Defaults["scrim"] ? string | boolean : Defaults["scrim"] | NonNullable<string | boolean>;
    };
    showSize: unknown extends Defaults["showSize"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["showSize"] ? boolean : boolean | Defaults["showSize"]>;
        default: unknown extends Defaults["showSize"] ? boolean : boolean | Defaults["showSize"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: PropType<File[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<File[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["modelValue"] ? File[] : File[] | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? File[] : File[] | Defaults["modelValue"];
    };
};
export declare const VFileUploadDropzone: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        length: string | number;
        browseText: string;
        dividerText: string;
        title: string;
        icon: IconValue;
        clearable: boolean;
        disabled: boolean;
        error: boolean;
        hideBrowse: boolean;
        insetFileList: boolean;
        multiple: boolean;
        scrim: string | boolean;
        showSize: boolean;
        modelValue: File[];
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        location?: import("../../util/index.js").Anchor | null | undefined;
        position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        opacity?: string | number | undefined;
        thickness?: string | number | undefined;
        color?: string | undefined;
        subtitle?: string | undefined;
    } & {
        $children?: {
            default?: ((arg: {
                isDragging: boolean;
                hasFiles: boolean;
                files: readonly File[];
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            browse?: ((arg: {
                props: {
                    onClick: (e: MouseEvent) => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            icon?: (() => import("vue").VNodeChild) | undefined;
            title?: (() => import("vue").VNodeChild) | undefined;
            divider?: (() => import("vue").VNodeChild) | undefined;
            single?: ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            item?: ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            input?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            isDragging: boolean;
            hasFiles: boolean;
            files: readonly File[];
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                isDragging: boolean;
                hasFiles: boolean;
                files: readonly File[];
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            browse?: false | ((arg: {
                props: {
                    onClick: (e: MouseEvent) => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            icon?: false | (() => import("vue").VNodeChild) | undefined;
            title?: false | (() => import("vue").VNodeChild) | undefined;
            divider?: false | (() => import("vue").VNodeChild) | undefined;
            single?: false | ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            item?: false | ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            input?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:browse"?: false | ((arg: {
            props: {
                onClick: (e: MouseEvent) => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            isDragging: boolean;
            hasFiles: boolean;
            files: readonly File[];
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:divider"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:icon"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:input"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:single"?: false | ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onClick:browse"?: (() => any) | undefined;
        "onClick:remove"?: ((index: number) => any) | undefined;
        onDrop?: ((files: File[]) => any) | undefined;
    }, Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: import("vue").StyleValue;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
            border?: string | number | boolean | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            location?: import("../../util/index.js").Anchor | null | undefined;
            position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
            color?: string | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "rounded" | "style" | "tag" | "tile">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $host: Element | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
        } & {
            theme?: string | undefined;
            class?: any;
            border?: string | number | boolean | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            location?: import("../../util/index.js").Anchor | null | undefined;
            position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
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
            style: import("vue").StyleValue;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
        }, {}, string, import("vue").SlotsType<Partial<{
            default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
    }> & Omit<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        location?: import("../../util/index.js").Anchor | null | undefined;
        position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
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
    }, "rounded" | "style" | "tag" | "tile"> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {}, "$children" | "border" | "class" | "color" | "elevation" | "height" | "location" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "position" | "theme" | "v-slot:default" | "v-slots" | "width" | ("rounded" | "style" | "tag" | "tile") | keyof import("vue").VNodeProps>, `$${any}`> & {
        _allExposed: {} | {};
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "click:browse": () => true;
        "click:remove": (index: number) => true;
        drop: (files: File[]) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        length: string | number;
        browseText: string;
        dividerText: string;
        title: string;
        icon: IconValue;
        clearable: boolean;
        disabled: boolean;
        error: boolean;
        hideBrowse: boolean;
        insetFileList: boolean;
        multiple: boolean;
        scrim: string | boolean;
        showSize: boolean;
        modelValue: File[];
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: {
            isDragging: boolean;
            hasFiles: boolean;
            files: readonly File[];
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        browse: (arg: {
            props: {
                onClick: (e: MouseEvent) => void;
            };
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        icon: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        title: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        divider: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        single: (arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        item: (arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        input: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        length: string | number;
        browseText: string;
        dividerText: string;
        title: string;
        icon: IconValue;
        clearable: boolean;
        disabled: boolean;
        error: boolean;
        hideBrowse: boolean;
        insetFileList: boolean;
        multiple: boolean;
        scrim: string | boolean;
        showSize: boolean;
        modelValue: File[];
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        location?: import("../../util/index.js").Anchor | null | undefined;
        position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        opacity?: string | number | undefined;
        thickness?: string | number | undefined;
        color?: string | undefined;
        subtitle?: string | undefined;
    } & {
        $children?: {
            default?: ((arg: {
                isDragging: boolean;
                hasFiles: boolean;
                files: readonly File[];
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            browse?: ((arg: {
                props: {
                    onClick: (e: MouseEvent) => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            icon?: (() => import("vue").VNodeChild) | undefined;
            title?: (() => import("vue").VNodeChild) | undefined;
            divider?: (() => import("vue").VNodeChild) | undefined;
            single?: ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            item?: ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            input?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            isDragging: boolean;
            hasFiles: boolean;
            files: readonly File[];
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                isDragging: boolean;
                hasFiles: boolean;
                files: readonly File[];
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            browse?: false | ((arg: {
                props: {
                    onClick: (e: MouseEvent) => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            icon?: false | (() => import("vue").VNodeChild) | undefined;
            title?: false | (() => import("vue").VNodeChild) | undefined;
            divider?: false | (() => import("vue").VNodeChild) | undefined;
            single?: false | ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            item?: false | ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            input?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:browse"?: false | ((arg: {
            props: {
                onClick: (e: MouseEvent) => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            isDragging: boolean;
            hasFiles: boolean;
            files: readonly File[];
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:divider"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:icon"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:input"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:single"?: false | ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onClick:browse"?: (() => any) | undefined;
        "onClick:remove"?: ((index: number) => any) | undefined;
        onDrop?: ((files: File[]) => any) | undefined;
    }, Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: import("vue").StyleValue;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
            border?: string | number | boolean | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            location?: import("../../util/index.js").Anchor | null | undefined;
            position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
            color?: string | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "rounded" | "style" | "tag" | "tile">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $host: Element | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
        } & {
            theme?: string | undefined;
            class?: any;
            border?: string | number | boolean | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            location?: import("../../util/index.js").Anchor | null | undefined;
            position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
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
            style: import("vue").StyleValue;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
        }, {}, string, import("vue").SlotsType<Partial<{
            default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
    }> & Omit<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        location?: import("../../util/index.js").Anchor | null | undefined;
        position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
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
    }, "rounded" | "style" | "tag" | "tile"> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {}, "$children" | "border" | "class" | "color" | "elevation" | "height" | "location" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "position" | "theme" | "v-slot:default" | "v-slots" | "width" | ("rounded" | "style" | "tag" | "tile") | keyof import("vue").VNodeProps>, `$${any}`> & {
        _allExposed: {} | {};
    }, {}, {}, {}, {
        style: import("vue").StyleValue;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        length: string | number;
        browseText: string;
        dividerText: string;
        title: string;
        icon: IconValue;
        clearable: boolean;
        disabled: boolean;
        error: boolean;
        hideBrowse: boolean;
        insetFileList: boolean;
        multiple: boolean;
        scrim: string | boolean;
        showSize: boolean;
        modelValue: File[];
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    density: import("../../composables/density.js").Density;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    length: string | number;
    browseText: string;
    dividerText: string;
    title: string;
    icon: IconValue;
    clearable: boolean;
    disabled: boolean;
    error: boolean;
    hideBrowse: boolean;
    insetFileList: boolean;
    multiple: boolean;
    scrim: string | boolean;
    showSize: boolean;
    modelValue: File[];
} & {
    theme?: string | undefined;
    class?: any;
    border?: string | number | boolean | undefined;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    height?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    width?: string | number | undefined;
    location?: import("../../util/index.js").Anchor | null | undefined;
    position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
    closeDelay?: string | number | undefined;
    openDelay?: string | number | undefined;
    opacity?: string | number | undefined;
    thickness?: string | number | undefined;
    color?: string | undefined;
    subtitle?: string | undefined;
} & {
    $children?: {
        default?: ((arg: {
            isDragging: boolean;
            hasFiles: boolean;
            files: readonly File[];
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        browse?: ((arg: {
            props: {
                onClick: (e: MouseEvent) => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        icon?: (() => import("vue").VNodeChild) | undefined;
        title?: (() => import("vue").VNodeChild) | undefined;
        divider?: (() => import("vue").VNodeChild) | undefined;
        single?: ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        item?: ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        input?: (() => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | ((arg: {
        isDragging: boolean;
        hasFiles: boolean;
        files: readonly File[];
        props: {
            onClick: () => void;
        };
    }) => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | ((arg: {
            isDragging: boolean;
            hasFiles: boolean;
            files: readonly File[];
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        browse?: false | ((arg: {
            props: {
                onClick: (e: MouseEvent) => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        icon?: false | (() => import("vue").VNodeChild) | undefined;
        title?: false | (() => import("vue").VNodeChild) | undefined;
        divider?: false | (() => import("vue").VNodeChild) | undefined;
        single?: false | ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        item?: false | ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        input?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:browse"?: false | ((arg: {
        props: {
            onClick: (e: MouseEvent) => void;
        };
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | ((arg: {
        isDragging: boolean;
        hasFiles: boolean;
        files: readonly File[];
        props: {
            onClick: () => void;
        };
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:divider"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:icon"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:input"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:item"?: false | ((arg: {
        file: File;
        props: {
            "onClick:remove": () => void;
        };
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:single"?: false | ((arg: {
        file: File;
        props: {
            "onClick:remove": () => void;
        };
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    "onClick:browse"?: (() => any) | undefined;
    "onClick:remove"?: ((index: number) => any) | undefined;
    onDrop?: ((files: File[]) => any) | undefined;
}, Omit<Omit<{
    $: import("vue").ComponentInternalInstance;
    $data: {};
    $props: Partial<{
        style: import("vue").StyleValue;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
    }> & Omit<{
        theme?: string | undefined;
        class?: any;
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        location?: import("../../util/index.js").Anchor | null | undefined;
        position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
        color?: string | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "rounded" | "style" | "tag" | "tile">;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        default?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
    }>;
    $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
    $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
    $host: Element | null;
    $emit: (event: string, ...args: any[]) => void;
    $el: any;
    $options: import("vue").ComponentOptionsBase<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        location?: import("../../util/index.js").Anchor | null | undefined;
        position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
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
        style: import("vue").StyleValue;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
    }, {}, string, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
    rounded: string | number | boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
}> & Omit<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
} & {
    theme?: string | undefined;
    class?: any;
    border?: string | number | boolean | undefined;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    height?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    width?: string | number | undefined;
    location?: import("../../util/index.js").Anchor | null | undefined;
    position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
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
}, "rounded" | "style" | "tag" | "tile"> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {}, "$children" | "border" | "class" | "color" | "elevation" | "height" | "location" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "position" | "theme" | "v-slot:default" | "v-slots" | "width" | ("rounded" | "style" | "tag" | "tile") | keyof import("vue").VNodeProps>, `$${any}`> & {
    _allExposed: {} | {};
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "click:browse": () => true;
    "click:remove": (index: number) => true;
    drop: (files: File[]) => true;
}, string, {
    style: import("vue").StyleValue;
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    length: string | number;
    browseText: string;
    dividerText: string;
    title: string;
    icon: IconValue;
    clearable: boolean;
    disabled: boolean;
    error: boolean;
    hideBrowse: boolean;
    insetFileList: boolean;
    multiple: boolean;
    scrim: string | boolean;
    showSize: boolean;
    modelValue: File[];
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: {
        isDragging: boolean;
        hasFiles: boolean;
        files: readonly File[];
        props: {
            onClick: () => void;
        };
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    browse: (arg: {
        props: {
            onClick: (e: MouseEvent) => void;
        };
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    icon: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    title: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    divider: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    single: (arg: {
        file: File;
        props: {
            "onClick:remove": () => void;
        };
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    item: (arg: {
        file: File;
        props: {
            "onClick:remove": () => void;
        };
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    input: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
    closeDelay: (NumberConstructor | StringConstructor)[];
    openDelay: (NumberConstructor | StringConstructor)[];
    length: {
        type: PropType<string | number>;
        default: NonNullable<string | number>;
    };
    opacity: (NumberConstructor | StringConstructor)[];
    thickness: (NumberConstructor | StringConstructor)[];
    color: StringConstructor;
    browseText: {
        type: StringConstructor;
        default: string;
    };
    dividerText: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    subtitle: StringConstructor;
    icon: {
        type: PropType<IconValue>;
        default: string;
    };
    clearable: BooleanConstructor;
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    hideBrowse: BooleanConstructor;
    insetFileList: BooleanConstructor;
    multiple: BooleanConstructor;
    scrim: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    showSize: BooleanConstructor;
    modelValue: {
        type: PropType<File[]>;
        default: () => never[];
    };
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
    closeDelay: (NumberConstructor | StringConstructor)[];
    openDelay: (NumberConstructor | StringConstructor)[];
    length: {
        type: PropType<string | number>;
        default: NonNullable<string | number>;
    };
    opacity: (NumberConstructor | StringConstructor)[];
    thickness: (NumberConstructor | StringConstructor)[];
    color: StringConstructor;
    browseText: {
        type: StringConstructor;
        default: string;
    };
    dividerText: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    subtitle: StringConstructor;
    icon: {
        type: PropType<IconValue>;
        default: string;
    };
    clearable: BooleanConstructor;
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    hideBrowse: BooleanConstructor;
    insetFileList: BooleanConstructor;
    multiple: BooleanConstructor;
    scrim: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    showSize: BooleanConstructor;
    modelValue: {
        type: PropType<File[]>;
        default: () => never[];
    };
}>>;
export type VFileUploadDropzone = InstanceType<typeof VFileUploadDropzone>;
