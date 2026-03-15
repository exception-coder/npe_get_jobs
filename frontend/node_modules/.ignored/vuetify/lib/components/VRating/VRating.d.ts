// Styles

import { IconValue } from '../../composables/icons.js';
// Types
import type { Prop } from 'vue';
type VRatingItemSlot = {
    value: number;
    index: number;
    isFilled: boolean;
    isHovered: boolean;
    icon: IconValue;
    color?: string;
    props: Record<string, unknown>;
    rating: number;
};
type VRatingItemLabelSlot = {
    value: number;
    index: number;
    label?: string;
};
export declare const makeVRatingProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    density?: unknown;
    tag?: unknown;
    size?: unknown;
    name?: unknown;
    itemAriaLabel?: unknown;
    activeColor?: unknown;
    color?: unknown;
    clearable?: unknown;
    disabled?: unknown;
    emptyIcon?: unknown;
    fullIcon?: unknown;
    halfIncrements?: unknown;
    hover?: unknown;
    length?: unknown;
    readonly?: unknown;
    modelValue?: unknown;
    itemLabels?: unknown;
    itemLabelPosition?: unknown;
    ripple?: unknown;
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
    tag: unknown extends Defaults["tag"] ? {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : string | Defaults["tag"] | import("../../util/index.js").JSXComponent>;
        default: unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : Defaults["tag"] | NonNullable<string | import("../../util/index.js").JSXComponent>;
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
    name: unknown extends Defaults["name"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["name"] ? string : string | Defaults["name"]>;
        default: unknown extends Defaults["name"] ? string : string | Defaults["name"];
    };
    itemAriaLabel: unknown extends Defaults["itemAriaLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["itemAriaLabel"] ? string : string | Defaults["itemAriaLabel"]>;
        default: unknown extends Defaults["itemAriaLabel"] ? string : string | Defaults["itemAriaLabel"];
    };
    activeColor: unknown extends Defaults["activeColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"]>;
        default: unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    clearable: unknown extends Defaults["clearable"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["clearable"] ? boolean : boolean | Defaults["clearable"]>;
        default: unknown extends Defaults["clearable"] ? boolean : boolean | Defaults["clearable"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    emptyIcon: unknown extends Defaults["emptyIcon"] ? {
        type: import("vue").PropType<IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["emptyIcon"] ? IconValue : Defaults["emptyIcon"] | IconValue>;
        default: unknown extends Defaults["emptyIcon"] ? IconValue : Defaults["emptyIcon"] | NonNullable<IconValue>;
    };
    fullIcon: unknown extends Defaults["fullIcon"] ? {
        type: import("vue").PropType<IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["fullIcon"] ? IconValue : Defaults["fullIcon"] | IconValue>;
        default: unknown extends Defaults["fullIcon"] ? IconValue : Defaults["fullIcon"] | NonNullable<IconValue>;
    };
    halfIncrements: unknown extends Defaults["halfIncrements"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["halfIncrements"] ? boolean : boolean | Defaults["halfIncrements"]>;
        default: unknown extends Defaults["halfIncrements"] ? boolean : boolean | Defaults["halfIncrements"];
    };
    hover: unknown extends Defaults["hover"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hover"] ? boolean : boolean | Defaults["hover"]>;
        default: unknown extends Defaults["hover"] ? boolean : boolean | Defaults["hover"];
    };
    length: unknown extends Defaults["length"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["length"] ? string | number : string | number | Defaults["length"]>;
        default: unknown extends Defaults["length"] ? string | number : Defaults["length"] | NonNullable<string | number>;
    };
    readonly: unknown extends Defaults["readonly"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"]>;
        default: unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? string | number : string | number | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? string | number : Defaults["modelValue"] | NonNullable<string | number>;
    };
    itemLabels: unknown extends Defaults["itemLabels"] ? Prop<string[]> : {
        type: import("vue").PropType<unknown extends Defaults["itemLabels"] ? string[] : string[] | Defaults["itemLabels"]>;
        default: unknown extends Defaults["itemLabels"] ? string[] : string[] | Defaults["itemLabels"];
    };
    itemLabelPosition: unknown extends Defaults["itemLabelPosition"] ? {
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["itemLabelPosition"] ? string : string | Defaults["itemLabelPosition"]>;
        default: unknown extends Defaults["itemLabelPosition"] ? string : string | Defaults["itemLabelPosition"];
    };
    ripple: unknown extends Defaults["ripple"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["ripple"] ? boolean : boolean | Defaults["ripple"]>;
        default: unknown extends Defaults["ripple"] ? boolean : boolean | Defaults["ripple"];
    };
};
export declare const VRating: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        density: import("../../composables/density.js").Density;
        tag: string | import("../../util/index.js").JSXComponent;
        size: string | number;
        itemAriaLabel: string;
        clearable: boolean;
        disabled: boolean;
        emptyIcon: IconValue;
        fullIcon: IconValue;
        halfIncrements: boolean;
        hover: boolean;
        length: string | number;
        readonly: boolean;
        modelValue: string | number;
        itemLabelPosition: string;
        ripple: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        name?: string | undefined;
        activeColor?: string | undefined;
        color?: string | undefined;
        itemLabels?: string[] | undefined;
    } & {
        $children?: {
            item?: ((arg: VRatingItemSlot) => import("vue").VNodeChild) | undefined;
            "item-label"?: ((arg: VRatingItemLabelSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | {} | import("vue").VNodeChild;
        "v-slots"?: {
            item?: false | ((arg: VRatingItemSlot) => import("vue").VNodeChild) | undefined;
            "item-label"?: false | ((arg: VRatingItemLabelSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:item"?: false | ((arg: VRatingItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:item-label"?: false | ((arg: VRatingItemLabelSlot) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: string | number) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        density: import("../../composables/density.js").Density;
        tag: string | import("../../util/index.js").JSXComponent;
        size: string | number;
        itemAriaLabel: string;
        clearable: boolean;
        disabled: boolean;
        emptyIcon: IconValue;
        fullIcon: IconValue;
        halfIncrements: boolean;
        hover: boolean;
        length: string | number;
        readonly: boolean;
        modelValue: string | number;
        itemLabelPosition: string;
        ripple: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        item: (arg: VRatingItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "item-label": (arg: VRatingItemLabelSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        tag: string | import("../../util/index.js").JSXComponent;
        size: string | number;
        itemAriaLabel: string;
        clearable: boolean;
        disabled: boolean;
        emptyIcon: IconValue;
        fullIcon: IconValue;
        halfIncrements: boolean;
        hover: boolean;
        length: string | number;
        readonly: boolean;
        modelValue: string | number;
        itemLabelPosition: string;
        ripple: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        name?: string | undefined;
        activeColor?: string | undefined;
        color?: string | undefined;
        itemLabels?: string[] | undefined;
    } & {
        $children?: {
            item?: ((arg: VRatingItemSlot) => import("vue").VNodeChild) | undefined;
            "item-label"?: ((arg: VRatingItemLabelSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | {} | import("vue").VNodeChild;
        "v-slots"?: {
            item?: false | ((arg: VRatingItemSlot) => import("vue").VNodeChild) | undefined;
            "item-label"?: false | ((arg: VRatingItemLabelSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:item"?: false | ((arg: VRatingItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:item-label"?: false | ((arg: VRatingItemLabelSlot) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        density: import("../../composables/density.js").Density;
        tag: string | import("../../util/index.js").JSXComponent;
        size: string | number;
        itemAriaLabel: string;
        clearable: boolean;
        disabled: boolean;
        emptyIcon: IconValue;
        fullIcon: IconValue;
        halfIncrements: boolean;
        hover: boolean;
        length: string | number;
        readonly: boolean;
        modelValue: string | number;
        itemLabelPosition: string;
        ripple: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    density: import("../../composables/density.js").Density;
    tag: string | import("../../util/index.js").JSXComponent;
    size: string | number;
    itemAriaLabel: string;
    clearable: boolean;
    disabled: boolean;
    emptyIcon: IconValue;
    fullIcon: IconValue;
    halfIncrements: boolean;
    hover: boolean;
    length: string | number;
    readonly: boolean;
    modelValue: string | number;
    itemLabelPosition: string;
    ripple: boolean;
} & {
    theme?: string | undefined;
    class?: any;
    name?: string | undefined;
    activeColor?: string | undefined;
    color?: string | undefined;
    itemLabels?: string[] | undefined;
} & {
    $children?: {
        item?: ((arg: VRatingItemSlot) => import("vue").VNodeChild) | undefined;
        "item-label"?: ((arg: VRatingItemLabelSlot) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | {} | import("vue").VNodeChild;
    "v-slots"?: {
        item?: false | ((arg: VRatingItemSlot) => import("vue").VNodeChild) | undefined;
        "item-label"?: false | ((arg: VRatingItemLabelSlot) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:item"?: false | ((arg: VRatingItemSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:item-label"?: false | ((arg: VRatingItemLabelSlot) => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => true;
}, string, {
    style: import("vue").StyleValue;
    density: import("../../composables/density.js").Density;
    tag: string | import("../../util/index.js").JSXComponent;
    size: string | number;
    itemAriaLabel: string;
    clearable: boolean;
    disabled: boolean;
    emptyIcon: IconValue;
    fullIcon: IconValue;
    halfIncrements: boolean;
    hover: boolean;
    length: string | number;
    readonly: boolean;
    modelValue: string | number;
    itemLabelPosition: string;
    ripple: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    item: (arg: VRatingItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "item-label": (arg: VRatingItemLabelSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    density: {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    size: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    name: StringConstructor;
    itemAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    activeColor: StringConstructor;
    color: StringConstructor;
    clearable: BooleanConstructor;
    disabled: BooleanConstructor;
    emptyIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    fullIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    halfIncrements: BooleanConstructor;
    hover: BooleanConstructor;
    length: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    readonly: BooleanConstructor;
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    itemLabels: Prop<string[]>;
    itemLabelPosition: {
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    };
    ripple: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    density: {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    size: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    name: StringConstructor;
    itemAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    activeColor: StringConstructor;
    color: StringConstructor;
    clearable: BooleanConstructor;
    disabled: BooleanConstructor;
    emptyIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    fullIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    halfIncrements: BooleanConstructor;
    hover: BooleanConstructor;
    length: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    readonly: BooleanConstructor;
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    itemLabels: Prop<string[]>;
    itemLabelPosition: {
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    };
    ripple: BooleanConstructor;
}>>;
export type VRating = InstanceType<typeof VRating>;

