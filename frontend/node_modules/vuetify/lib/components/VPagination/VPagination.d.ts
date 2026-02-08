// Styles

import { IconValue } from '../../composables/icons.js';
type ItemSlot = {
    isActive: boolean;
    key: string | number;
    page: string;
    props: Record<string, any>;
};
type ControlSlot = {
    icon: IconValue;
    onClick: (e: Event) => void;
    disabled: boolean;
    'aria-label': string;
    'aria-disabled': boolean;
};
export type VPaginationSlots = {
    item: ItemSlot;
    first: ControlSlot;
    prev: ControlSlot;
    next: ControlSlot;
    last: ControlSlot;
};
export declare const makeVPaginationProps: <Defaults extends {
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
    size?: unknown;
    activeColor?: unknown;
    start?: unknown;
    modelValue?: unknown;
    disabled?: unknown;
    length?: unknown;
    totalVisible?: unknown;
    firstIcon?: unknown;
    prevIcon?: unknown;
    nextIcon?: unknown;
    lastIcon?: unknown;
    ariaLabel?: unknown;
    pageAriaLabel?: unknown;
    currentPageAriaLabel?: unknown;
    firstAriaLabel?: unknown;
    previousAriaLabel?: unknown;
    nextAriaLabel?: unknown;
    lastAriaLabel?: unknown;
    ellipsis?: unknown;
    showFirstLastPage?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
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
    border: unknown extends Defaults["border"] ? (BooleanConstructor | NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["border"] ? string | number | boolean : string | number | boolean | Defaults["border"]>;
        default: unknown extends Defaults["border"] ? string | number | boolean : Defaults["border"] | NonNullable<string | number | boolean>;
    };
    density: unknown extends Defaults["density"] ? {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["density"] ? import("../../composables/density.js").Density : Defaults["density"] | import("../../composables/density.js").Density>;
        default: unknown extends Defaults["density"] ? import("../../composables/density.js").Density : Defaults["density"] | NonNullable<import("../../composables/density.js").Density>;
    };
    elevation: unknown extends Defaults["elevation"] ? {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["elevation"] ? string | number : string | number | Defaults["elevation"]>;
        default: unknown extends Defaults["elevation"] ? string | number : Defaults["elevation"] | NonNullable<string | number>;
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
    tag: unknown extends Defaults["tag"] ? Omit<{
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    } : Omit<Omit<{
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : string | Defaults["tag"] | import("../../util/index.js").JSXComponent>;
        default: unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : Defaults["tag"] | NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    variant: unknown extends Defaults["variant"] ? Omit<{
        type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
    } : Omit<Omit<{
        type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["variant"] ? "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" : "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" : Defaults["variant"] | NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
    };
    size: unknown extends Defaults["size"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["size"] ? string | number : string | number | Defaults["size"]>;
        default: unknown extends Defaults["size"] ? string | number : Defaults["size"] | NonNullable<string | number>;
    };
    activeColor: unknown extends Defaults["activeColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"]>;
        default: unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"];
    };
    start: unknown extends Defaults["start"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["start"] ? string | number : string | number | Defaults["start"]>;
        default: unknown extends Defaults["start"] ? string | number : Defaults["start"] | NonNullable<string | number>;
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: NumberConstructor;
        default: (props: any) => number;
    } : Omit<{
        type: NumberConstructor;
        default: (props: any) => number;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? number : number | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? number : number | Defaults["modelValue"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    length: unknown extends Defaults["length"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (val: number) => boolean;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (val: number) => boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["length"] ? string | number : string | number | Defaults["length"]>;
        default: unknown extends Defaults["length"] ? string | number : Defaults["length"] | NonNullable<string | number>;
    };
    totalVisible: unknown extends Defaults["totalVisible"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["totalVisible"] ? string | number : string | number | Defaults["totalVisible"]>;
        default: unknown extends Defaults["totalVisible"] ? string | number : Defaults["totalVisible"] | NonNullable<string | number>;
    };
    firstIcon: unknown extends Defaults["firstIcon"] ? {
        type: import("vue").PropType<IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["firstIcon"] ? IconValue : Defaults["firstIcon"] | IconValue>;
        default: unknown extends Defaults["firstIcon"] ? IconValue : Defaults["firstIcon"] | NonNullable<IconValue>;
    };
    prevIcon: unknown extends Defaults["prevIcon"] ? {
        type: import("vue").PropType<IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["prevIcon"] ? IconValue : Defaults["prevIcon"] | IconValue>;
        default: unknown extends Defaults["prevIcon"] ? IconValue : Defaults["prevIcon"] | NonNullable<IconValue>;
    };
    nextIcon: unknown extends Defaults["nextIcon"] ? {
        type: import("vue").PropType<IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["nextIcon"] ? IconValue : Defaults["nextIcon"] | IconValue>;
        default: unknown extends Defaults["nextIcon"] ? IconValue : Defaults["nextIcon"] | NonNullable<IconValue>;
    };
    lastIcon: unknown extends Defaults["lastIcon"] ? {
        type: import("vue").PropType<IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["lastIcon"] ? IconValue : Defaults["lastIcon"] | IconValue>;
        default: unknown extends Defaults["lastIcon"] ? IconValue : Defaults["lastIcon"] | NonNullable<IconValue>;
    };
    ariaLabel: unknown extends Defaults["ariaLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["ariaLabel"] ? string : string | Defaults["ariaLabel"]>;
        default: unknown extends Defaults["ariaLabel"] ? string : string | Defaults["ariaLabel"];
    };
    pageAriaLabel: unknown extends Defaults["pageAriaLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["pageAriaLabel"] ? string : string | Defaults["pageAriaLabel"]>;
        default: unknown extends Defaults["pageAriaLabel"] ? string : string | Defaults["pageAriaLabel"];
    };
    currentPageAriaLabel: unknown extends Defaults["currentPageAriaLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["currentPageAriaLabel"] ? string : string | Defaults["currentPageAriaLabel"]>;
        default: unknown extends Defaults["currentPageAriaLabel"] ? string : string | Defaults["currentPageAriaLabel"];
    };
    firstAriaLabel: unknown extends Defaults["firstAriaLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["firstAriaLabel"] ? string : string | Defaults["firstAriaLabel"]>;
        default: unknown extends Defaults["firstAriaLabel"] ? string : string | Defaults["firstAriaLabel"];
    };
    previousAriaLabel: unknown extends Defaults["previousAriaLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["previousAriaLabel"] ? string : string | Defaults["previousAriaLabel"]>;
        default: unknown extends Defaults["previousAriaLabel"] ? string : string | Defaults["previousAriaLabel"];
    };
    nextAriaLabel: unknown extends Defaults["nextAriaLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["nextAriaLabel"] ? string : string | Defaults["nextAriaLabel"]>;
        default: unknown extends Defaults["nextAriaLabel"] ? string : string | Defaults["nextAriaLabel"];
    };
    lastAriaLabel: unknown extends Defaults["lastAriaLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["lastAriaLabel"] ? string : string | Defaults["lastAriaLabel"]>;
        default: unknown extends Defaults["lastAriaLabel"] ? string : string | Defaults["lastAriaLabel"];
    };
    ellipsis: unknown extends Defaults["ellipsis"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["ellipsis"] ? string : string | Defaults["ellipsis"]>;
        default: unknown extends Defaults["ellipsis"] ? string : string | Defaults["ellipsis"];
    };
    showFirstLastPage: unknown extends Defaults["showFirstLastPage"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["showFirstLastPage"] ? boolean : boolean | Defaults["showFirstLastPage"]>;
        default: unknown extends Defaults["showFirstLastPage"] ? boolean : boolean | Defaults["showFirstLastPage"];
    };
};
export declare const VPagination: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        size: string | number;
        start: string | number;
        modelValue: number;
        disabled: boolean;
        length: string | number;
        firstIcon: IconValue;
        prevIcon: IconValue;
        nextIcon: IconValue;
        lastIcon: IconValue;
        ariaLabel: string;
        pageAriaLabel: string;
        currentPageAriaLabel: string;
        firstAriaLabel: string;
        previousAriaLabel: string;
        nextAriaLabel: string;
        lastAriaLabel: string;
        ellipsis: string;
        showFirstLastPage: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        color?: string | undefined;
        activeColor?: string | undefined;
        totalVisible?: string | number | undefined;
    } & {
        $children?: {
            item?: ((arg: ItemSlot) => import("vue").VNodeChild) | undefined;
            first?: ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
            prev?: ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
            next?: ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
            last?: ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | {} | import("vue").VNodeChild;
        "v-slots"?: {
            item?: false | ((arg: ItemSlot) => import("vue").VNodeChild) | undefined;
            first?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
            prev?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
            next?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
            last?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:first"?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: ItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:last"?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:next"?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prev"?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
    } & {
        onFirst?: ((value: number) => any) | undefined;
        onLast?: ((value: number) => any) | undefined;
        onNext?: ((value: number) => any) | undefined;
        onPrev?: ((value: number) => any) | undefined;
        "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: number) => true;
        first: (value: number) => true;
        prev: (value: number) => true;
        next: (value: number) => true;
        last: (value: number) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        size: string | number;
        start: string | number;
        modelValue: number;
        disabled: boolean;
        length: string | number;
        firstIcon: IconValue;
        prevIcon: IconValue;
        nextIcon: IconValue;
        lastIcon: IconValue;
        ariaLabel: string;
        pageAriaLabel: string;
        currentPageAriaLabel: string;
        firstAriaLabel: string;
        previousAriaLabel: string;
        nextAriaLabel: string;
        lastAriaLabel: string;
        ellipsis: string;
        showFirstLastPage: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        item: (arg: ItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        first: (arg: ControlSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        prev: (arg: ControlSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        next: (arg: ControlSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        last: (arg: ControlSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        size: string | number;
        start: string | number;
        modelValue: number;
        disabled: boolean;
        length: string | number;
        firstIcon: IconValue;
        prevIcon: IconValue;
        nextIcon: IconValue;
        lastIcon: IconValue;
        ariaLabel: string;
        pageAriaLabel: string;
        currentPageAriaLabel: string;
        firstAriaLabel: string;
        previousAriaLabel: string;
        nextAriaLabel: string;
        lastAriaLabel: string;
        ellipsis: string;
        showFirstLastPage: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        color?: string | undefined;
        activeColor?: string | undefined;
        totalVisible?: string | number | undefined;
    } & {
        $children?: {
            item?: ((arg: ItemSlot) => import("vue").VNodeChild) | undefined;
            first?: ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
            prev?: ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
            next?: ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
            last?: ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | {} | import("vue").VNodeChild;
        "v-slots"?: {
            item?: false | ((arg: ItemSlot) => import("vue").VNodeChild) | undefined;
            first?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
            prev?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
            next?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
            last?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:first"?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: ItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:last"?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:next"?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prev"?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
    } & {
        onFirst?: ((value: number) => any) | undefined;
        onLast?: ((value: number) => any) | undefined;
        onNext?: ((value: number) => any) | undefined;
        onPrev?: ((value: number) => any) | undefined;
        "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        size: string | number;
        start: string | number;
        modelValue: number;
        disabled: boolean;
        length: string | number;
        firstIcon: IconValue;
        prevIcon: IconValue;
        nextIcon: IconValue;
        lastIcon: IconValue;
        ariaLabel: string;
        pageAriaLabel: string;
        currentPageAriaLabel: string;
        firstAriaLabel: string;
        previousAriaLabel: string;
        nextAriaLabel: string;
        lastAriaLabel: string;
        ellipsis: string;
        showFirstLastPage: boolean;
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
    size: string | number;
    start: string | number;
    modelValue: number;
    disabled: boolean;
    length: string | number;
    firstIcon: IconValue;
    prevIcon: IconValue;
    nextIcon: IconValue;
    lastIcon: IconValue;
    ariaLabel: string;
    pageAriaLabel: string;
    currentPageAriaLabel: string;
    firstAriaLabel: string;
    previousAriaLabel: string;
    nextAriaLabel: string;
    lastAriaLabel: string;
    ellipsis: string;
    showFirstLastPage: boolean;
} & {
    theme?: string | undefined;
    class?: any;
    border?: string | number | boolean | undefined;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    color?: string | undefined;
    activeColor?: string | undefined;
    totalVisible?: string | number | undefined;
} & {
    $children?: {
        item?: ((arg: ItemSlot) => import("vue").VNodeChild) | undefined;
        first?: ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        prev?: ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        next?: ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        last?: ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | {} | import("vue").VNodeChild;
    "v-slots"?: {
        item?: false | ((arg: ItemSlot) => import("vue").VNodeChild) | undefined;
        first?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        prev?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        next?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        last?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:first"?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:item"?: false | ((arg: ItemSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:last"?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:next"?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:prev"?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
} & {
    onFirst?: ((value: number) => any) | undefined;
    onLast?: ((value: number) => any) | undefined;
    onNext?: ((value: number) => any) | undefined;
    onPrev?: ((value: number) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: number) => true;
    first: (value: number) => true;
    prev: (value: number) => true;
    next: (value: number) => true;
    last: (value: number) => true;
}, string, {
    style: import("vue").StyleValue;
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
    size: string | number;
    start: string | number;
    modelValue: number;
    disabled: boolean;
    length: string | number;
    firstIcon: IconValue;
    prevIcon: IconValue;
    nextIcon: IconValue;
    lastIcon: IconValue;
    ariaLabel: string;
    pageAriaLabel: string;
    currentPageAriaLabel: string;
    firstAriaLabel: string;
    previousAriaLabel: string;
    nextAriaLabel: string;
    lastAriaLabel: string;
    ellipsis: string;
    showFirstLastPage: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    item: (arg: ItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    first: (arg: ControlSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    prev: (arg: ControlSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    next: (arg: ControlSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    last: (arg: ControlSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
    density: {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
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
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    color: StringConstructor;
    variant: Omit<{
        type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
    };
    size: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    activeColor: StringConstructor;
    start: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    modelValue: {
        type: NumberConstructor;
        default: (props: any) => number;
    };
    disabled: BooleanConstructor;
    length: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (val: number) => boolean;
    };
    totalVisible: (NumberConstructor | StringConstructor)[];
    firstIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    nextIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    lastIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    ariaLabel: {
        type: StringConstructor;
        default: string;
    };
    pageAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    currentPageAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    firstAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    previousAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    nextAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    lastAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    ellipsis: {
        type: StringConstructor;
        default: string;
    };
    showFirstLastPage: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
    density: {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
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
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    color: StringConstructor;
    variant: Omit<{
        type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
    };
    size: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    activeColor: StringConstructor;
    start: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    modelValue: {
        type: NumberConstructor;
        default: (props: any) => number;
    };
    disabled: BooleanConstructor;
    length: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (val: number) => boolean;
    };
    totalVisible: (NumberConstructor | StringConstructor)[];
    firstIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    nextIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    lastIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    ariaLabel: {
        type: StringConstructor;
        default: string;
    };
    pageAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    currentPageAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    firstAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    previousAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    nextAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    lastAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    ellipsis: {
        type: StringConstructor;
        default: string;
    };
    showFirstLastPage: BooleanConstructor;
}>>;
export type VPagination = InstanceType<typeof VPagination>;

