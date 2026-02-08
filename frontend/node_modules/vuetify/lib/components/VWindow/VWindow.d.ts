// Styles

// Types
import type { ComputedRef, InjectionKey, PropType, Ref } from 'vue';
import type { GroupItemProvide, GroupProvide } from '../../composables/group.js';
import type { IconValue } from '../../composables/icons.js';
import type { TouchHandlers } from '../../directives/touch/index.js';
import type { GenericProps } from '../../util/index.js';
export type VWindowSlots = {
    default: {
        group: GroupProvide;
    };
    additional: {
        group: GroupProvide;
    };
    prev: {
        props: ControlProps;
    };
    next: {
        props: ControlProps;
    };
};
type WindowProvide = {
    transition: ComputedRef<undefined | string>;
    transitionCount: Ref<number>;
    transitionHeight: Ref<undefined | string>;
    isReversed: Ref<boolean>;
    rootRef: Ref<HTMLElement | undefined>;
};
type ControlProps = {
    icon: IconValue;
    class: string;
    onClick: () => void;
    'aria-label': string;
};
export declare const VWindowSymbol: InjectionKey<WindowProvide>;
export declare const VWindowGroupSymbol: InjectionKey<GroupItemProvide>;
export declare const makeVWindowProps: <Defaults extends {
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
    continuous: unknown extends Defaults["continuous"] ? BooleanConstructor : {
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
    showArrows: unknown extends Defaults["showArrows"] ? {
        type: (BooleanConstructor | StringConstructor)[];
        validator: (v: any) => boolean;
    } : Omit<{
        type: (BooleanConstructor | StringConstructor)[];
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["showArrows"] ? string | boolean : string | boolean | Defaults["showArrows"]>;
        default: unknown extends Defaults["showArrows"] ? string | boolean : Defaults["showArrows"] | NonNullable<string | boolean>;
    };
    verticalArrows: unknown extends Defaults["verticalArrows"] ? PropType<"left" | "right" | boolean> : {
        type: PropType<unknown extends Defaults["verticalArrows"] ? "left" | "right" | boolean : "left" | "right" | boolean | Defaults["verticalArrows"]>;
        default: unknown extends Defaults["verticalArrows"] ? "left" | "right" | boolean : Defaults["verticalArrows"] | NonNullable<"left" | "right" | boolean>;
    };
    touch: unknown extends Defaults["touch"] ? {
        type: PropType<boolean | TouchHandlers>;
        default: undefined;
    } : Omit<{
        type: PropType<boolean | TouchHandlers>;
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["touch"] ? boolean | TouchHandlers : boolean | TouchHandlers | Defaults["touch"]>;
        default: unknown extends Defaults["touch"] ? boolean | TouchHandlers : Defaults["touch"] | NonNullable<boolean | TouchHandlers>;
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
    mandatory: unknown extends Defaults["mandatory"] ? {
        type: PropType<"force" | boolean>;
        default: "force";
    } : Omit<{
        type: PropType<"force" | boolean>;
        default: "force";
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
};
export declare const VWindow: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tag: string | import("../../util/index.js").JSXComponent;
        continuous: boolean;
        nextIcon: IconValue;
        prevIcon: IconValue;
        reverse: boolean;
        direction: "horizontal" | "vertical";
        disabled: boolean;
        selectedClass: string;
        mandatory: "force" | boolean;
        crossfade: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        showArrows?: string | boolean | undefined;
        verticalArrows?: "left" | "right" | boolean | undefined;
        touch?: boolean | TouchHandlers | undefined;
        transitionDuration?: number | undefined;
    } & {}, {
        group: GroupProvide;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        "update:modelValue": (value: any) => true;
    }, "$children" | "modelValue" | "update:modelValue" | "v-slot:additional" | "v-slot:default" | "v-slot:next" | "v-slot:prev" | "v-slots">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        continuous: boolean;
        nextIcon: IconValue;
        prevIcon: IconValue;
        reverse: boolean;
        touch: boolean | TouchHandlers;
        direction: "horizontal" | "vertical";
        disabled: boolean;
        selectedClass: string;
        mandatory: "force" | boolean;
        crossfade: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: {
            group: GroupProvide;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        additional: (arg: {
            group: GroupProvide;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        prev: (arg: {
            props: ControlProps;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        next: (arg: {
            props: ControlProps;
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
        direction: "horizontal" | "vertical";
        disabled: boolean;
        selectedClass: string;
        mandatory: "force" | boolean;
        crossfade: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        showArrows?: string | boolean | undefined;
        verticalArrows?: "left" | "right" | boolean | undefined;
        touch?: boolean | TouchHandlers | undefined;
        transitionDuration?: number | undefined;
    } & {}, {
        group: GroupProvide;
    }, {}, {}, {}, {
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        continuous: boolean;
        nextIcon: IconValue;
        prevIcon: IconValue;
        reverse: boolean;
        touch: boolean | TouchHandlers;
        direction: "horizontal" | "vertical";
        disabled: boolean;
        selectedClass: string;
        mandatory: "force" | boolean;
        crossfade: boolean;
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
    direction: "horizontal" | "vertical";
    disabled: boolean;
    selectedClass: string;
    mandatory: "force" | boolean;
    crossfade: boolean;
} & {
    theme?: string | undefined;
    class?: any;
    showArrows?: string | boolean | undefined;
    verticalArrows?: "left" | "right" | boolean | undefined;
    touch?: boolean | TouchHandlers | undefined;
    transitionDuration?: number | undefined;
} & {}, {
    group: GroupProvide;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    "update:modelValue": (value: any) => true;
}, "$children" | "modelValue" | "update:modelValue" | "v-slot:additional" | "v-slot:default" | "v-slot:next" | "v-slot:prev" | "v-slots">, string, {
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    continuous: boolean;
    nextIcon: IconValue;
    prevIcon: IconValue;
    reverse: boolean;
    touch: boolean | TouchHandlers;
    direction: "horizontal" | "vertical";
    disabled: boolean;
    selectedClass: string;
    mandatory: "force" | boolean;
    crossfade: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: {
        group: GroupProvide;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    additional: (arg: {
        group: GroupProvide;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    prev: (arg: {
        props: ControlProps;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    next: (arg: {
        props: ControlProps;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T>(props: {
    modelValue?: T | undefined;
    "onUpdate:modelValue"?: ((value: T) => void) | undefined;
}, slots: VWindowSlots) => GenericProps<{
    modelValue?: T | undefined;
    "onUpdate:modelValue"?: ((value: T) => void) | undefined;
}, VWindowSlots>) & import("../../util/index.js").FilterPropsOptions<{
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
    continuous: BooleanConstructor;
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    reverse: BooleanConstructor;
    showArrows: {
        type: (BooleanConstructor | StringConstructor)[];
        validator: (v: any) => boolean;
    };
    verticalArrows: PropType<"left" | "right" | boolean>;
    touch: {
        type: PropType<boolean | TouchHandlers>;
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
    mandatory: {
        type: PropType<"force" | boolean>;
        default: "force";
    };
    crossfade: BooleanConstructor;
    transitionDuration: NumberConstructor;
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
    continuous: BooleanConstructor;
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    reverse: BooleanConstructor;
    showArrows: {
        type: (BooleanConstructor | StringConstructor)[];
        validator: (v: any) => boolean;
    };
    verticalArrows: PropType<"left" | "right" | boolean>;
    touch: {
        type: PropType<boolean | TouchHandlers>;
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
    mandatory: {
        type: PropType<"force" | boolean>;
        default: "force";
    };
    crossfade: BooleanConstructor;
    transitionDuration: NumberConstructor;
}>>;
export type VWindow = InstanceType<typeof VWindow>;

