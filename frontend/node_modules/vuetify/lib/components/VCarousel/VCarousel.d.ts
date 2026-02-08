// Styles

// Composables
import { IconValue } from '../../composables/icons.js';
// Types
import type { PropType } from 'vue';
import type { VWindowSlots } from '../VWindow/VWindow.js';
import type { GroupProvide } from '../../composables/group.js';
import type { GenericProps } from '../../util/index.js';
export declare const makeVCarouselProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    tag?: unknown;
    continuous?: unknown;
    nextIcon?: unknown;
    prevIcon?: unknown;
    reverse?: unknown;
    showArrows?: unknown;
    verticalArrows?: unknown;
    touch?: unknown;
    direction?: unknown;
    modelValue?: unknown;
    disabled?: unknown;
    selectedClass?: unknown;
    mandatory?: unknown;
    crossfade?: unknown;
    transitionDuration?: unknown;
    color?: unknown;
    cycle?: unknown;
    delimiterIcon?: unknown;
    height?: unknown;
    hideDelimiters?: unknown;
    hideDelimiterBackground?: unknown;
    interval?: unknown;
    progress?: unknown;
    verticalDelimiters?: unknown;
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
    continuous: unknown extends Defaults["continuous"] ? {
        type: PropType<boolean>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["continuous"] ? boolean : boolean | Defaults["continuous"]>;
        default: unknown extends Defaults["continuous"] ? boolean : boolean | Defaults["continuous"];
    };
    nextIcon: unknown extends Defaults["nextIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["nextIcon"] ? IconValue : Defaults["nextIcon"] | IconValue>;
        default: unknown extends Defaults["nextIcon"] ? IconValue : Defaults["nextIcon"] | NonNullable<IconValue>;
    };
    prevIcon: unknown extends Defaults["prevIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["prevIcon"] ? IconValue : Defaults["prevIcon"] | IconValue>;
        default: unknown extends Defaults["prevIcon"] ? IconValue : Defaults["prevIcon"] | NonNullable<IconValue>;
    };
    reverse: unknown extends Defaults["reverse"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["reverse"] ? boolean : boolean | Defaults["reverse"]>;
        default: unknown extends Defaults["reverse"] ? boolean : boolean | Defaults["reverse"];
    };
    showArrows: unknown extends Defaults["showArrows"] ? Omit<{
        type: (BooleanConstructor | StringConstructor)[];
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<string | boolean>;
        default: NonNullable<string | boolean>;
    } : Omit<Omit<{
        type: (BooleanConstructor | StringConstructor)[];
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<string | boolean>;
        default: NonNullable<string | boolean>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["showArrows"] ? string | boolean : string | boolean | Defaults["showArrows"]>;
        default: unknown extends Defaults["showArrows"] ? string | boolean : Defaults["showArrows"] | NonNullable<string | boolean>;
    };
    verticalArrows: unknown extends Defaults["verticalArrows"] ? PropType<"left" | "right" | boolean> : {
        type: PropType<unknown extends Defaults["verticalArrows"] ? "left" | "right" | boolean : "left" | "right" | boolean | Defaults["verticalArrows"]>;
        default: unknown extends Defaults["verticalArrows"] ? "left" | "right" | boolean : Defaults["verticalArrows"] | NonNullable<"left" | "right" | boolean>;
    };
    touch: unknown extends Defaults["touch"] ? {
        type: PropType<boolean | import("../../directives/touch/index.js").TouchHandlers>;
        default: undefined;
    } : Omit<{
        type: PropType<boolean | import("../../directives/touch/index.js").TouchHandlers>;
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["touch"] ? boolean | import("../../directives/touch/index.js").TouchHandlers : boolean | import("../../directives/touch/index.js").TouchHandlers | Defaults["touch"]>;
        default: unknown extends Defaults["touch"] ? boolean | import("../../directives/touch/index.js").TouchHandlers : Defaults["touch"] | NonNullable<boolean | import("../../directives/touch/index.js").TouchHandlers>;
    };
    direction: unknown extends Defaults["direction"] ? {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    } : Omit<{
        type: PropType<"horizontal" | "vertical">;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["direction"] ? "horizontal" | "vertical" : "horizontal" | "vertical" | Defaults["direction"]>;
        default: unknown extends Defaults["direction"] ? "horizontal" | "vertical" : Defaults["direction"] | NonNullable<"horizontal" | "vertical">;
    };
    modelValue: unknown extends Defaults["modelValue"] ? null : {
        type: PropType<unknown extends Defaults["modelValue"] ? any : any>;
        default: unknown extends Defaults["modelValue"] ? any : any;
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    selectedClass: unknown extends Defaults["selectedClass"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"]>;
        default: unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"];
    };
    mandatory: unknown extends Defaults["mandatory"] ? Omit<{
        type: PropType<"force" | boolean>;
        default: "force";
    }, "default" | "type"> & {
        type: PropType<"force" | boolean>;
        default: NonNullable<"force" | boolean>;
    } : Omit<Omit<{
        type: PropType<"force" | boolean>;
        default: "force";
    }, "default" | "type"> & {
        type: PropType<"force" | boolean>;
        default: NonNullable<"force" | boolean>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["mandatory"] ? "force" | boolean : "force" | boolean | Defaults["mandatory"]>;
        default: unknown extends Defaults["mandatory"] ? "force" | boolean : Defaults["mandatory"] | NonNullable<"force" | boolean>;
    };
    crossfade: unknown extends Defaults["crossfade"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["crossfade"] ? boolean : boolean | Defaults["crossfade"]>;
        default: unknown extends Defaults["crossfade"] ? boolean : boolean | Defaults["crossfade"];
    };
    transitionDuration: unknown extends Defaults["transitionDuration"] ? NumberConstructor : {
        type: PropType<unknown extends Defaults["transitionDuration"] ? number : number | Defaults["transitionDuration"]>;
        default: unknown extends Defaults["transitionDuration"] ? number : number | Defaults["transitionDuration"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    cycle: unknown extends Defaults["cycle"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["cycle"] ? boolean : boolean | Defaults["cycle"]>;
        default: unknown extends Defaults["cycle"] ? boolean : boolean | Defaults["cycle"];
    };
    delimiterIcon: unknown extends Defaults["delimiterIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["delimiterIcon"] ? IconValue : Defaults["delimiterIcon"] | IconValue>;
        default: unknown extends Defaults["delimiterIcon"] ? IconValue : Defaults["delimiterIcon"] | NonNullable<IconValue>;
    };
    height: unknown extends Defaults["height"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : Defaults["height"] | NonNullable<string | number>;
    };
    hideDelimiters: unknown extends Defaults["hideDelimiters"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideDelimiters"] ? boolean : boolean | Defaults["hideDelimiters"]>;
        default: unknown extends Defaults["hideDelimiters"] ? boolean : boolean | Defaults["hideDelimiters"];
    };
    hideDelimiterBackground: unknown extends Defaults["hideDelimiterBackground"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideDelimiterBackground"] ? boolean : boolean | Defaults["hideDelimiterBackground"]>;
        default: unknown extends Defaults["hideDelimiterBackground"] ? boolean : boolean | Defaults["hideDelimiterBackground"];
    };
    interval: unknown extends Defaults["interval"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (value: string | number) => boolean;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (value: string | number) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["interval"] ? string | number : string | number | Defaults["interval"]>;
        default: unknown extends Defaults["interval"] ? string | number : Defaults["interval"] | NonNullable<string | number>;
    };
    progress: unknown extends Defaults["progress"] ? (BooleanConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["progress"] ? string | boolean : string | boolean | Defaults["progress"]>;
        default: unknown extends Defaults["progress"] ? string | boolean : Defaults["progress"] | NonNullable<string | boolean>;
    };
    verticalDelimiters: unknown extends Defaults["verticalDelimiters"] ? PropType<"left" | "right" | boolean> : {
        type: PropType<unknown extends Defaults["verticalDelimiters"] ? "left" | "right" | boolean : "left" | "right" | boolean | Defaults["verticalDelimiters"]>;
        default: unknown extends Defaults["verticalDelimiters"] ? "left" | "right" | boolean : Defaults["verticalDelimiters"] | NonNullable<"left" | "right" | boolean>;
    };
};
type VCarouselSlots = Omit<VWindowSlots, 'additional'> & {
    item: {
        props: Record<string, any>;
        item: {
            id: string;
            value: unknown;
            disabled: boolean | undefined;
        };
    };
};
export declare const VCarousel: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tag: string | import("../../util/index.js").JSXComponent;
        continuous: boolean;
        nextIcon: IconValue;
        prevIcon: IconValue;
        reverse: boolean;
        showArrows: string | boolean;
        direction: "horizontal" | "vertical";
        disabled: boolean;
        selectedClass: string;
        mandatory: "force" | boolean;
        crossfade: boolean;
        cycle: boolean;
        delimiterIcon: IconValue;
        height: string | number;
        hideDelimiters: boolean;
        hideDelimiterBackground: boolean;
        interval: string | number;
    } & {
        theme?: string | undefined;
        class?: any;
        verticalArrows?: "left" | "right" | boolean | undefined;
        touch?: boolean | import("../../directives/touch/index.js").TouchHandlers | undefined;
        transitionDuration?: number | undefined;
        color?: string | undefined;
        progress?: string | boolean | undefined;
        verticalDelimiters?: "left" | "right" | boolean | undefined;
    } & {}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        "update:modelValue": (value: any) => true;
    }, "$children" | "modelValue" | "update:modelValue" | "v-slot:default" | "v-slot:item" | "v-slot:next" | "v-slot:prev" | "v-slots">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        continuous: boolean;
        nextIcon: IconValue;
        prevIcon: IconValue;
        reverse: boolean;
        showArrows: string | boolean;
        touch: boolean | import("../../directives/touch/index.js").TouchHandlers;
        direction: "horizontal" | "vertical";
        disabled: boolean;
        selectedClass: string;
        mandatory: "force" | boolean;
        crossfade: boolean;
        cycle: boolean;
        delimiterIcon: IconValue;
        height: string | number;
        hideDelimiters: boolean;
        hideDelimiterBackground: boolean;
        interval: string | number;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: {
            group: GroupProvide;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        prev: (arg: {
            props: {
                icon: IconValue;
                class: string;
                onClick: () => void;
                "aria-label": string;
            };
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        next: (arg: {
            props: {
                icon: IconValue;
                class: string;
                onClick: () => void;
                "aria-label": string;
            };
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        item: (arg: {
            props: Record<string, any>;
            item: {
                id: string;
                value: unknown;
                disabled: boolean | undefined;
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
        tag: string | import("../../util/index.js").JSXComponent;
        continuous: boolean;
        nextIcon: IconValue;
        prevIcon: IconValue;
        reverse: boolean;
        showArrows: string | boolean;
        direction: "horizontal" | "vertical";
        disabled: boolean;
        selectedClass: string;
        mandatory: "force" | boolean;
        crossfade: boolean;
        cycle: boolean;
        delimiterIcon: IconValue;
        height: string | number;
        hideDelimiters: boolean;
        hideDelimiterBackground: boolean;
        interval: string | number;
    } & {
        theme?: string | undefined;
        class?: any;
        verticalArrows?: "left" | "right" | boolean | undefined;
        touch?: boolean | import("../../directives/touch/index.js").TouchHandlers | undefined;
        transitionDuration?: number | undefined;
        color?: string | undefined;
        progress?: string | boolean | undefined;
        verticalDelimiters?: "left" | "right" | boolean | undefined;
    } & {}, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        continuous: boolean;
        nextIcon: IconValue;
        prevIcon: IconValue;
        reverse: boolean;
        showArrows: string | boolean;
        touch: boolean | import("../../directives/touch/index.js").TouchHandlers;
        direction: "horizontal" | "vertical";
        disabled: boolean;
        selectedClass: string;
        mandatory: "force" | boolean;
        crossfade: boolean;
        cycle: boolean;
        delimiterIcon: IconValue;
        height: string | number;
        hideDelimiters: boolean;
        hideDelimiterBackground: boolean;
        interval: string | number;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    tag: string | import("../../util/index.js").JSXComponent;
    continuous: boolean;
    nextIcon: IconValue;
    prevIcon: IconValue;
    reverse: boolean;
    showArrows: string | boolean;
    direction: "horizontal" | "vertical";
    disabled: boolean;
    selectedClass: string;
    mandatory: "force" | boolean;
    crossfade: boolean;
    cycle: boolean;
    delimiterIcon: IconValue;
    height: string | number;
    hideDelimiters: boolean;
    hideDelimiterBackground: boolean;
    interval: string | number;
} & {
    theme?: string | undefined;
    class?: any;
    verticalArrows?: "left" | "right" | boolean | undefined;
    touch?: boolean | import("../../directives/touch/index.js").TouchHandlers | undefined;
    transitionDuration?: number | undefined;
    color?: string | undefined;
    progress?: string | boolean | undefined;
    verticalDelimiters?: "left" | "right" | boolean | undefined;
} & {}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    "update:modelValue": (value: any) => true;
}, "$children" | "modelValue" | "update:modelValue" | "v-slot:default" | "v-slot:item" | "v-slot:next" | "v-slot:prev" | "v-slots">, string, {
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    continuous: boolean;
    nextIcon: IconValue;
    prevIcon: IconValue;
    reverse: boolean;
    showArrows: string | boolean;
    touch: boolean | import("../../directives/touch/index.js").TouchHandlers;
    direction: "horizontal" | "vertical";
    disabled: boolean;
    selectedClass: string;
    mandatory: "force" | boolean;
    crossfade: boolean;
    cycle: boolean;
    delimiterIcon: IconValue;
    height: string | number;
    hideDelimiters: boolean;
    hideDelimiterBackground: boolean;
    interval: string | number;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: {
        group: GroupProvide;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    prev: (arg: {
        props: {
            icon: IconValue;
            class: string;
            onClick: () => void;
            "aria-label": string;
        };
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    next: (arg: {
        props: {
            icon: IconValue;
            class: string;
            onClick: () => void;
            "aria-label": string;
        };
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    item: (arg: {
        props: Record<string, any>;
        item: {
            id: string;
            value: unknown;
            disabled: boolean | undefined;
        };
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T>(props: {
    modelValue?: T | undefined;
    "onUpdate:modelValue"?: ((value: T) => void) | undefined;
}, slots: VCarouselSlots) => GenericProps<{
    modelValue?: T | undefined;
    "onUpdate:modelValue"?: ((value: T) => void) | undefined;
}, VCarouselSlots>) & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    continuous: {
        type: PropType<boolean>;
        default: boolean;
    };
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    reverse: BooleanConstructor;
    showArrows: Omit<{
        type: (BooleanConstructor | StringConstructor)[];
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<string | boolean>;
        default: NonNullable<string | boolean>;
    };
    verticalArrows: PropType<"left" | "right" | boolean>;
    touch: {
        type: PropType<boolean | import("../../directives/touch/index.js").TouchHandlers>;
        default: undefined;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    modelValue: null;
    disabled: BooleanConstructor;
    selectedClass: {
        type: StringConstructor;
        default: string;
    };
    mandatory: Omit<{
        type: PropType<"force" | boolean>;
        default: "force";
    }, "default" | "type"> & {
        type: PropType<"force" | boolean>;
        default: NonNullable<"force" | boolean>;
    };
    crossfade: BooleanConstructor;
    transitionDuration: NumberConstructor;
    color: StringConstructor;
    cycle: BooleanConstructor;
    delimiterIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    hideDelimiters: BooleanConstructor;
    hideDelimiterBackground: BooleanConstructor;
    interval: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (value: string | number) => boolean;
    };
    progress: (BooleanConstructor | StringConstructor)[];
    verticalDelimiters: PropType<"left" | "right" | boolean>;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    continuous: {
        type: PropType<boolean>;
        default: boolean;
    };
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    reverse: BooleanConstructor;
    showArrows: Omit<{
        type: (BooleanConstructor | StringConstructor)[];
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<string | boolean>;
        default: NonNullable<string | boolean>;
    };
    verticalArrows: PropType<"left" | "right" | boolean>;
    touch: {
        type: PropType<boolean | import("../../directives/touch/index.js").TouchHandlers>;
        default: undefined;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    modelValue: null;
    disabled: BooleanConstructor;
    selectedClass: {
        type: StringConstructor;
        default: string;
    };
    mandatory: Omit<{
        type: PropType<"force" | boolean>;
        default: "force";
    }, "default" | "type"> & {
        type: PropType<"force" | boolean>;
        default: NonNullable<"force" | boolean>;
    };
    crossfade: BooleanConstructor;
    transitionDuration: NumberConstructor;
    color: StringConstructor;
    cycle: BooleanConstructor;
    delimiterIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    hideDelimiters: BooleanConstructor;
    hideDelimiterBackground: BooleanConstructor;
    interval: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (value: string | number) => boolean;
    };
    progress: (BooleanConstructor | StringConstructor)[];
    verticalDelimiters: PropType<"left" | "right" | boolean>;
}>>;
export type VCarousel = InstanceType<typeof VCarousel>;

