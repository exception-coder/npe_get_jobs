export declare const makeVCarouselItemProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    rounded?: unknown;
    tile?: unknown;
    value?: unknown;
    disabled?: unknown;
    selectedClass?: unknown;
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    eager?: unknown;
    aspectRatio?: unknown;
    contentClass?: unknown;
    inline?: unknown;
    absolute?: unknown;
    alt?: unknown;
    cover?: unknown;
    color?: unknown;
    draggable?: unknown;
    gradient?: unknown;
    lazySrc?: unknown;
    options?: unknown;
    sizes?: unknown;
    src?: unknown;
    crossorigin?: unknown;
    referrerpolicy?: unknown;
    srcset?: unknown;
    position?: unknown;
    reverseTransition?: unknown;
    transition?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    class: unknown extends Defaults["class"] ? import("vue").PropType<any> : {
        type: import("vue").PropType<unknown extends Defaults["class"] ? any : any>;
        default: unknown extends Defaults["class"] ? any : any;
    };
    style: unknown extends Defaults["style"] ? {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    } : Omit<{
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["style"] ? import("vue").StyleValue : Defaults["style"] | import("vue").StyleValue>;
        default: unknown extends Defaults["style"] ? import("vue").StyleValue : Defaults["style"] | NonNullable<import("vue").StyleValue>;
    };
    rounded: unknown extends Defaults["rounded"] ? {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    } : Omit<{
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["rounded"] ? string | number | boolean : string | number | boolean | Defaults["rounded"]>;
        default: unknown extends Defaults["rounded"] ? string | number | boolean : Defaults["rounded"] | NonNullable<string | number | boolean>;
    };
    tile: unknown extends Defaults["tile"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"]>;
        default: unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"];
    };
    value: unknown extends Defaults["value"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["value"] ? any : any>;
        default: unknown extends Defaults["value"] ? any : any;
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    selectedClass: unknown extends Defaults["selectedClass"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"]>;
        default: unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"];
    };
    height: unknown extends Defaults["height"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : Defaults["height"] | NonNullable<string | number>;
    };
    maxHeight: unknown extends Defaults["maxHeight"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["maxHeight"] ? string | number : string | number | Defaults["maxHeight"]>;
        default: unknown extends Defaults["maxHeight"] ? string | number : Defaults["maxHeight"] | NonNullable<string | number>;
    };
    maxWidth: unknown extends Defaults["maxWidth"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["maxWidth"] ? string | number : string | number | Defaults["maxWidth"]>;
        default: unknown extends Defaults["maxWidth"] ? string | number : Defaults["maxWidth"] | NonNullable<string | number>;
    };
    minHeight: unknown extends Defaults["minHeight"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["minHeight"] ? string | number : string | number | Defaults["minHeight"]>;
        default: unknown extends Defaults["minHeight"] ? string | number : Defaults["minHeight"] | NonNullable<string | number>;
    };
    minWidth: unknown extends Defaults["minWidth"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["minWidth"] ? string | number : string | number | Defaults["minWidth"]>;
        default: unknown extends Defaults["minWidth"] ? string | number : Defaults["minWidth"] | NonNullable<string | number>;
    };
    width: unknown extends Defaults["width"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : Defaults["width"] | NonNullable<string | number>;
    };
    eager: unknown extends Defaults["eager"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"]>;
        default: unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"];
    };
    aspectRatio: unknown extends Defaults["aspectRatio"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["aspectRatio"] ? string | number : string | number | Defaults["aspectRatio"]>;
        default: unknown extends Defaults["aspectRatio"] ? string | number : Defaults["aspectRatio"] | NonNullable<string | number>;
    };
    contentClass: unknown extends Defaults["contentClass"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["contentClass"] ? any : any>;
        default: unknown extends Defaults["contentClass"] ? any : any;
    };
    inline: unknown extends Defaults["inline"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["inline"] ? boolean : boolean | Defaults["inline"]>;
        default: unknown extends Defaults["inline"] ? boolean : boolean | Defaults["inline"];
    };
    absolute: unknown extends Defaults["absolute"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"]>;
        default: unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"];
    };
    alt: unknown extends Defaults["alt"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["alt"] ? string : string | Defaults["alt"]>;
        default: unknown extends Defaults["alt"] ? string : string | Defaults["alt"];
    };
    cover: unknown extends Defaults["cover"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["cover"] ? boolean : boolean | Defaults["cover"]>;
        default: unknown extends Defaults["cover"] ? boolean : boolean | Defaults["cover"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    draggable: unknown extends Defaults["draggable"] ? {
        type: import("vue").PropType<"false" | "true" | boolean>;
        default: undefined;
    } : Omit<{
        type: import("vue").PropType<"false" | "true" | boolean>;
        default: undefined;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["draggable"] ? "false" | "true" | boolean : "false" | "true" | boolean | Defaults["draggable"]>;
        default: unknown extends Defaults["draggable"] ? "false" | "true" | boolean : Defaults["draggable"] | NonNullable<"false" | "true" | boolean>;
    };
    gradient: unknown extends Defaults["gradient"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["gradient"] ? string : string | Defaults["gradient"]>;
        default: unknown extends Defaults["gradient"] ? string : string | Defaults["gradient"];
    };
    lazySrc: unknown extends Defaults["lazySrc"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["lazySrc"] ? string : string | Defaults["lazySrc"]>;
        default: unknown extends Defaults["lazySrc"] ? string : string | Defaults["lazySrc"];
    };
    options: unknown extends Defaults["options"] ? {
        type: import("vue").PropType<IntersectionObserverInit>;
        default: () => {
            root: undefined;
            rootMargin: undefined;
            threshold: undefined;
        };
    } : Omit<{
        type: import("vue").PropType<IntersectionObserverInit>;
        default: () => {
            root: undefined;
            rootMargin: undefined;
            threshold: undefined;
        };
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["options"] ? IntersectionObserverInit : IntersectionObserverInit | Defaults["options"]>;
        default: unknown extends Defaults["options"] ? IntersectionObserverInit : IntersectionObserverInit | Defaults["options"];
    };
    sizes: unknown extends Defaults["sizes"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["sizes"] ? string : string | Defaults["sizes"]>;
        default: unknown extends Defaults["sizes"] ? string : string | Defaults["sizes"];
    };
    src: unknown extends Defaults["src"] ? {
        type: import("vue").PropType<string | import("../VImg/VImg.js").srcObject>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<string | import("../VImg/VImg.js").srcObject>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["src"] ? string | import("../VImg/VImg.js").srcObject : string | import("../VImg/VImg.js").srcObject | Defaults["src"]>;
        default: unknown extends Defaults["src"] ? string | import("../VImg/VImg.js").srcObject : Defaults["src"] | NonNullable<string | import("../VImg/VImg.js").srcObject>;
    };
    crossorigin: unknown extends Defaults["crossorigin"] ? import("vue").PropType<"" | "anonymous" | "use-credentials"> : {
        type: import("vue").PropType<unknown extends Defaults["crossorigin"] ? "" | "anonymous" | "use-credentials" : "" | "anonymous" | "use-credentials" | Defaults["crossorigin"]>;
        default: unknown extends Defaults["crossorigin"] ? "" | "anonymous" | "use-credentials" : Defaults["crossorigin"] | NonNullable<"" | "anonymous" | "use-credentials">;
    };
    referrerpolicy: unknown extends Defaults["referrerpolicy"] ? import("vue").PropType<"no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url"> : {
        type: import("vue").PropType<unknown extends Defaults["referrerpolicy"] ? "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" : "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" | Defaults["referrerpolicy"]>;
        default: unknown extends Defaults["referrerpolicy"] ? "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" : Defaults["referrerpolicy"] | NonNullable<"no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url">;
    };
    srcset: unknown extends Defaults["srcset"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["srcset"] ? string : string | Defaults["srcset"]>;
        default: unknown extends Defaults["srcset"] ? string : string | Defaults["srcset"];
    };
    position: unknown extends Defaults["position"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["position"] ? string : string | Defaults["position"]>;
        default: unknown extends Defaults["position"] ? string : string | Defaults["position"];
    };
    reverseTransition: unknown extends Defaults["reverseTransition"] ? {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    } : Omit<{
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["reverseTransition"] ? string | boolean : string | boolean | Defaults["reverseTransition"]>;
        default: unknown extends Defaults["reverseTransition"] ? string | boolean : Defaults["reverseTransition"] | NonNullable<string | boolean>;
    };
    transition: unknown extends Defaults["transition"] ? {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    } : Omit<{
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["transition"] ? string | boolean : string | boolean | Defaults["transition"]>;
        default: unknown extends Defaults["transition"] ? string | boolean : Defaults["transition"] | NonNullable<string | boolean>;
    };
};
export declare const VCarouselItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tile: boolean;
        disabled: boolean;
        eager: boolean;
        inline: boolean;
        absolute: boolean;
        cover: boolean;
        options: IntersectionObserverInit;
        src: string | import("../VImg/VImg.js").srcObject;
    } & {
        class?: any;
        rounded?: string | number | boolean | undefined;
        value?: any;
        selectedClass?: string | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
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
        reverseTransition?: string | boolean | undefined;
        transition?: string | boolean | undefined;
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
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        rounded: string | number | boolean;
        tile: boolean;
        disabled: boolean;
        eager: boolean;
        inline: boolean;
        absolute: boolean;
        cover: boolean;
        draggable: "false" | "true" | boolean;
        options: IntersectionObserverInit;
        src: string | import("../VImg/VImg.js").srcObject;
        reverseTransition: string | boolean;
        transition: string | boolean;
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
        disabled: boolean;
        eager: boolean;
        inline: boolean;
        absolute: boolean;
        cover: boolean;
        options: IntersectionObserverInit;
        src: string | import("../VImg/VImg.js").srcObject;
    } & {
        class?: any;
        rounded?: string | number | boolean | undefined;
        value?: any;
        selectedClass?: string | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
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
        reverseTransition?: string | boolean | undefined;
        transition?: string | boolean | undefined;
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
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        rounded: string | number | boolean;
        tile: boolean;
        disabled: boolean;
        eager: boolean;
        inline: boolean;
        absolute: boolean;
        cover: boolean;
        draggable: "false" | "true" | boolean;
        options: IntersectionObserverInit;
        src: string | import("../VImg/VImg.js").srcObject;
        reverseTransition: string | boolean;
        transition: string | boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    tile: boolean;
    disabled: boolean;
    eager: boolean;
    inline: boolean;
    absolute: boolean;
    cover: boolean;
    options: IntersectionObserverInit;
    src: string | import("../VImg/VImg.js").srcObject;
} & {
    class?: any;
    rounded?: string | number | boolean | undefined;
    value?: any;
    selectedClass?: string | undefined;
    height?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    width?: string | number | undefined;
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
    reverseTransition?: string | boolean | undefined;
    transition?: string | boolean | undefined;
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
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    style: import("vue").StyleValue;
    rounded: string | number | boolean;
    tile: boolean;
    disabled: boolean;
    eager: boolean;
    inline: boolean;
    absolute: boolean;
    cover: boolean;
    draggable: "false" | "true" | boolean;
    options: IntersectionObserverInit;
    src: string | import("../VImg/VImg.js").srcObject;
    reverseTransition: string | boolean;
    transition: string | boolean;
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
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    minHeight: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    eager: BooleanConstructor;
    aspectRatio: (NumberConstructor | StringConstructor)[];
    contentClass: null;
    inline: BooleanConstructor;
    absolute: BooleanConstructor;
    alt: StringConstructor;
    cover: BooleanConstructor;
    color: StringConstructor;
    draggable: {
        type: import("vue").PropType<"false" | "true" | boolean>;
        default: undefined;
    };
    gradient: StringConstructor;
    lazySrc: StringConstructor;
    options: {
        type: import("vue").PropType<IntersectionObserverInit>;
        default: () => {
            root: undefined;
            rootMargin: undefined;
            threshold: undefined;
        };
    };
    sizes: StringConstructor;
    src: {
        type: import("vue").PropType<string | import("../VImg/VImg.js").srcObject>;
        default: string;
    };
    crossorigin: import("vue").PropType<"" | "anonymous" | "use-credentials">;
    referrerpolicy: import("vue").PropType<"no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url">;
    srcset: StringConstructor;
    position: StringConstructor;
    reverseTransition: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    };
    transition: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    };
}, import("vue").ExtractPropTypes<{
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    minHeight: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    eager: BooleanConstructor;
    aspectRatio: (NumberConstructor | StringConstructor)[];
    contentClass: null;
    inline: BooleanConstructor;
    absolute: BooleanConstructor;
    alt: StringConstructor;
    cover: BooleanConstructor;
    color: StringConstructor;
    draggable: {
        type: import("vue").PropType<"false" | "true" | boolean>;
        default: undefined;
    };
    gradient: StringConstructor;
    lazySrc: StringConstructor;
    options: {
        type: import("vue").PropType<IntersectionObserverInit>;
        default: () => {
            root: undefined;
            rootMargin: undefined;
            threshold: undefined;
        };
    };
    sizes: StringConstructor;
    src: {
        type: import("vue").PropType<string | import("../VImg/VImg.js").srcObject>;
        default: string;
    };
    crossorigin: import("vue").PropType<"" | "anonymous" | "use-credentials">;
    referrerpolicy: import("vue").PropType<"no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url">;
    srcset: StringConstructor;
    position: StringConstructor;
    reverseTransition: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    };
    transition: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    };
}>>;
export type VCarouselItem = InstanceType<typeof VCarouselItem>;
