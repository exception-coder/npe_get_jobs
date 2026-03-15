// Styles

// Types
import type { PropType } from 'vue';
// not intended for public use, this is passed in by vuetify-loader
export interface srcObject {
    src?: string;
    srcset?: string;
    lazySrc?: string;
    aspect: number;
}
export type VImgSlots = {
    default: never;
    placeholder: never;
    error: never;
    sources: never;
};
export declare const makeVImgProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    rounded?: unknown;
    tile?: unknown;
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    transition?: unknown;
    aspectRatio?: unknown;
    contentClass?: unknown;
    inline?: unknown;
    absolute?: unknown;
    alt?: unknown;
    cover?: unknown;
    color?: unknown;
    draggable?: unknown;
    eager?: unknown;
    gradient?: unknown;
    lazySrc?: unknown;
    options?: unknown;
    sizes?: unknown;
    src?: unknown;
    crossorigin?: unknown;
    referrerpolicy?: unknown;
    srcset?: unknown;
    position?: unknown;
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
    transition: unknown extends Defaults["transition"] ? import("vue").Prop<string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component | undefined;
    }) | null> : {
        type: PropType<unknown extends Defaults["transition"] ? string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null : string | boolean | Defaults["transition"] | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
        default: unknown extends Defaults["transition"] ? string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null : Defaults["transition"] | NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
    };
    aspectRatio: unknown extends Defaults["aspectRatio"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["aspectRatio"] ? string | number : string | number | Defaults["aspectRatio"]>;
        default: unknown extends Defaults["aspectRatio"] ? string | number : Defaults["aspectRatio"] | NonNullable<string | number>;
    };
    contentClass: unknown extends Defaults["contentClass"] ? null : {
        type: PropType<unknown extends Defaults["contentClass"] ? any : any>;
        default: unknown extends Defaults["contentClass"] ? any : any;
    };
    inline: unknown extends Defaults["inline"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["inline"] ? boolean : boolean | Defaults["inline"]>;
        default: unknown extends Defaults["inline"] ? boolean : boolean | Defaults["inline"];
    };
    absolute: unknown extends Defaults["absolute"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"]>;
        default: unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"];
    };
    alt: unknown extends Defaults["alt"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["alt"] ? string : string | Defaults["alt"]>;
        default: unknown extends Defaults["alt"] ? string : string | Defaults["alt"];
    };
    cover: unknown extends Defaults["cover"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["cover"] ? boolean : boolean | Defaults["cover"]>;
        default: unknown extends Defaults["cover"] ? boolean : boolean | Defaults["cover"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    draggable: unknown extends Defaults["draggable"] ? {
        type: PropType<"false" | "true" | boolean>;
        default: undefined;
    } : Omit<{
        type: PropType<"false" | "true" | boolean>;
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["draggable"] ? "false" | "true" | boolean : "false" | "true" | boolean | Defaults["draggable"]>;
        default: unknown extends Defaults["draggable"] ? "false" | "true" | boolean : Defaults["draggable"] | NonNullable<"false" | "true" | boolean>;
    };
    eager: unknown extends Defaults["eager"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"]>;
        default: unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"];
    };
    gradient: unknown extends Defaults["gradient"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["gradient"] ? string : string | Defaults["gradient"]>;
        default: unknown extends Defaults["gradient"] ? string : string | Defaults["gradient"];
    };
    lazySrc: unknown extends Defaults["lazySrc"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["lazySrc"] ? string : string | Defaults["lazySrc"]>;
        default: unknown extends Defaults["lazySrc"] ? string : string | Defaults["lazySrc"];
    };
    options: unknown extends Defaults["options"] ? {
        type: PropType<IntersectionObserverInit>;
        // For more information on types, navigate to:
        // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
        default: () => {
            root: undefined;
            rootMargin: undefined;
            threshold: undefined;
        };
    } : Omit<{
        type: PropType<IntersectionObserverInit>;
        // For more information on types, navigate to:
        // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
        default: () => {
            root: undefined;
            rootMargin: undefined;
            threshold: undefined;
        };
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["options"] ? IntersectionObserverInit : IntersectionObserverInit | Defaults["options"]>;
        default: unknown extends Defaults["options"] ? IntersectionObserverInit : IntersectionObserverInit | Defaults["options"];
    };
    sizes: unknown extends Defaults["sizes"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["sizes"] ? string : string | Defaults["sizes"]>;
        default: unknown extends Defaults["sizes"] ? string : string | Defaults["sizes"];
    };
    src: unknown extends Defaults["src"] ? {
        type: PropType<string | srcObject>;
        default: string;
    } : Omit<{
        type: PropType<string | srcObject>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["src"] ? string | srcObject : string | srcObject | Defaults["src"]>;
        default: unknown extends Defaults["src"] ? string | srcObject : Defaults["src"] | NonNullable<string | srcObject>;
    };
    crossorigin: unknown extends Defaults["crossorigin"] ? PropType<"" | "anonymous" | "use-credentials"> : {
        type: PropType<unknown extends Defaults["crossorigin"] ? "" | "anonymous" | "use-credentials" : "" | "anonymous" | "use-credentials" | Defaults["crossorigin"]>;
        default: unknown extends Defaults["crossorigin"] ? "" | "anonymous" | "use-credentials" : Defaults["crossorigin"] | NonNullable<"" | "anonymous" | "use-credentials">;
    };
    referrerpolicy: unknown extends Defaults["referrerpolicy"] ? PropType<"no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url"> : {
        type: PropType<unknown extends Defaults["referrerpolicy"] ? "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" : "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" | Defaults["referrerpolicy"]>;
        default: unknown extends Defaults["referrerpolicy"] ? "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" : Defaults["referrerpolicy"] | NonNullable<"no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url">;
    };
    srcset: unknown extends Defaults["srcset"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["srcset"] ? string : string | Defaults["srcset"]>;
        default: unknown extends Defaults["srcset"] ? string : string | Defaults["srcset"];
    };
    position: unknown extends Defaults["position"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["position"] ? string : string | Defaults["position"]>;
        default: unknown extends Defaults["position"] ? string : string | Defaults["position"];
    };
};
export declare const VImg: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tile: boolean;
        inline: boolean;
        absolute: boolean;
        cover: boolean;
        eager: boolean;
        options: IntersectionObserverInit;
        src: string | srcObject;
    } & {
        class?: any;
        rounded?: string | number | boolean | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        transition?: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null | undefined;
        aspectRatio?: string | number | undefined;
        contentClass?: any;
        alt?: string | undefined;
        color?: string | undefined;
        draggable?: "false" | "true" | boolean | undefined;
        gradient?: string | undefined;
        lazySrc?: string | undefined;
        sizes?: string | undefined;
        crossorigin?: "" | "anonymous" | "use-credentials" | undefined;
        referrerpolicy?: "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" | undefined;
        srcset?: string | undefined;
        position?: string | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            placeholder?: (() => import("vue").VNodeChild) | undefined;
            error?: (() => import("vue").VNodeChild) | undefined;
            sources?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            placeholder?: false | (() => import("vue").VNodeChild) | undefined;
            error?: false | (() => import("vue").VNodeChild) | undefined;
            sources?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:error"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:placeholder"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:sources"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        onError?: ((value: string | undefined) => any) | undefined;
        onLoad?: ((value: string | undefined) => any) | undefined;
        onLoadstart?: ((value: string | undefined) => any) | undefined;
    }, {
        currentSrc: import("vue").ShallowRef<string, string>;
        image: import("vue").Ref<HTMLImageElement | undefined, HTMLImageElement | undefined>;
        state: import("vue").ShallowRef<"error" | "idle" | "loaded" | "loading", "error" | "idle" | "loaded" | "loading">;
        naturalWidth: import("vue").ShallowRef<number | undefined, number | undefined>;
        naturalHeight: import("vue").ShallowRef<number | undefined, number | undefined>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        loadstart: (value: string | undefined) => true;
        load: (value: string | undefined) => true;
        error: (value: string | undefined) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        rounded: string | number | boolean;
        tile: boolean;
        inline: boolean;
        absolute: boolean;
        cover: boolean;
        draggable: "false" | "true" | boolean;
        eager: boolean;
        options: IntersectionObserverInit;
        src: string | srcObject;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        placeholder: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        error: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        sources: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        tile: boolean;
        inline: boolean;
        absolute: boolean;
        cover: boolean;
        eager: boolean;
        options: IntersectionObserverInit;
        src: string | srcObject;
    } & {
        class?: any;
        rounded?: string | number | boolean | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        transition?: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null | undefined;
        aspectRatio?: string | number | undefined;
        contentClass?: any;
        alt?: string | undefined;
        color?: string | undefined;
        draggable?: "false" | "true" | boolean | undefined;
        gradient?: string | undefined;
        lazySrc?: string | undefined;
        sizes?: string | undefined;
        crossorigin?: "" | "anonymous" | "use-credentials" | undefined;
        referrerpolicy?: "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" | undefined;
        srcset?: string | undefined;
        position?: string | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            placeholder?: (() => import("vue").VNodeChild) | undefined;
            error?: (() => import("vue").VNodeChild) | undefined;
            sources?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            placeholder?: false | (() => import("vue").VNodeChild) | undefined;
            error?: false | (() => import("vue").VNodeChild) | undefined;
            sources?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:error"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:placeholder"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:sources"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        onError?: ((value: string | undefined) => any) | undefined;
        onLoad?: ((value: string | undefined) => any) | undefined;
        onLoadstart?: ((value: string | undefined) => any) | undefined;
    }, {
        currentSrc: import("vue").ShallowRef<string, string>;
        image: import("vue").Ref<HTMLImageElement | undefined, HTMLImageElement | undefined>;
        state: import("vue").ShallowRef<"error" | "idle" | "loaded" | "loading", "error" | "idle" | "loaded" | "loading">;
        naturalWidth: import("vue").ShallowRef<number | undefined, number | undefined>;
        naturalHeight: import("vue").ShallowRef<number | undefined, number | undefined>;
    }, {}, {}, {}, {
        style: import("vue").StyleValue;
        rounded: string | number | boolean;
        tile: boolean;
        inline: boolean;
        absolute: boolean;
        cover: boolean;
        draggable: "false" | "true" | boolean;
        eager: boolean;
        options: IntersectionObserverInit;
        src: string | srcObject;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    tile: boolean;
    inline: boolean;
    absolute: boolean;
    cover: boolean;
    eager: boolean;
    options: IntersectionObserverInit;
    src: string | srcObject;
} & {
    class?: any;
    rounded?: string | number | boolean | undefined;
    height?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    width?: string | number | undefined;
    transition?: string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component | undefined;
    }) | null | undefined;
    aspectRatio?: string | number | undefined;
    contentClass?: any;
    alt?: string | undefined;
    color?: string | undefined;
    draggable?: "false" | "true" | boolean | undefined;
    gradient?: string | undefined;
    lazySrc?: string | undefined;
    sizes?: string | undefined;
    crossorigin?: "" | "anonymous" | "use-credentials" | undefined;
    referrerpolicy?: "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" | undefined;
    srcset?: string | undefined;
    position?: string | undefined;
} & {
    $children?: {
        default?: (() => import("vue").VNodeChild) | undefined;
        placeholder?: (() => import("vue").VNodeChild) | undefined;
        error?: (() => import("vue").VNodeChild) | undefined;
        sources?: (() => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
        placeholder?: false | (() => import("vue").VNodeChild) | undefined;
        error?: false | (() => import("vue").VNodeChild) | undefined;
        sources?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:error"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:placeholder"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:sources"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    onError?: ((value: string | undefined) => any) | undefined;
    onLoad?: ((value: string | undefined) => any) | undefined;
    onLoadstart?: ((value: string | undefined) => any) | undefined;
}, {
    currentSrc: import("vue").ShallowRef<string, string>;
    image: import("vue").Ref<HTMLImageElement | undefined, HTMLImageElement | undefined>;
    state: import("vue").ShallowRef<"error" | "idle" | "loaded" | "loading", "error" | "idle" | "loaded" | "loading">;
    naturalWidth: import("vue").ShallowRef<number | undefined, number | undefined>;
    naturalHeight: import("vue").ShallowRef<number | undefined, number | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    loadstart: (value: string | undefined) => true;
    load: (value: string | undefined) => true;
    error: (value: string | undefined) => true;
}, string, {
    style: import("vue").StyleValue;
    rounded: string | number | boolean;
    tile: boolean;
    inline: boolean;
    absolute: boolean;
    cover: boolean;
    draggable: "false" | "true" | boolean;
    eager: boolean;
    options: IntersectionObserverInit;
    src: string | srcObject;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    placeholder: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    error: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    sources: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    minHeight: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    transition: import("vue").Prop<string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component | undefined;
    }) | null>;
    aspectRatio: (NumberConstructor | StringConstructor)[];
    contentClass: null;
    inline: BooleanConstructor;
    absolute: BooleanConstructor;
    alt: StringConstructor;
    cover: BooleanConstructor;
    color: StringConstructor;
    draggable: {
        type: PropType<"false" | "true" | boolean>;
        default: undefined;
    };
    eager: BooleanConstructor;
    gradient: StringConstructor;
    lazySrc: StringConstructor;
    options: {
        type: PropType<IntersectionObserverInit>;
        // For more information on types, navigate to:
        // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
        default: () => {
            root: undefined;
            rootMargin: undefined;
            threshold: undefined;
        };
    };
    sizes: StringConstructor;
    src: {
        type: PropType<string | srcObject>;
        default: string;
    };
    crossorigin: PropType<"" | "anonymous" | "use-credentials">;
    referrerpolicy: PropType<"no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url">;
    srcset: StringConstructor;
    position: StringConstructor;
}, import("vue").ExtractPropTypes<{
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    minHeight: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    transition: import("vue").Prop<string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component | undefined;
    }) | null>;
    aspectRatio: (NumberConstructor | StringConstructor)[];
    contentClass: null;
    inline: BooleanConstructor;
    absolute: BooleanConstructor;
    alt: StringConstructor;
    cover: BooleanConstructor;
    color: StringConstructor;
    draggable: {
        type: PropType<"false" | "true" | boolean>;
        default: undefined;
    };
    eager: BooleanConstructor;
    gradient: StringConstructor;
    lazySrc: StringConstructor;
    options: {
        type: PropType<IntersectionObserverInit>;
        // For more information on types, navigate to:
        // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
        default: () => {
            root: undefined;
            rootMargin: undefined;
            threshold: undefined;
        };
    };
    sizes: StringConstructor;
    src: {
        type: PropType<string | srcObject>;
        default: string;
    };
    crossorigin: PropType<"" | "anonymous" | "use-credentials">;
    referrerpolicy: PropType<"no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url">;
    srcset: StringConstructor;
    position: StringConstructor;
}>>;
export type VImg = InstanceType<typeof VImg>;
