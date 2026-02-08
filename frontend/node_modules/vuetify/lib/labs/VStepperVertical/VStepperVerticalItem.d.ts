// Styles

// Types
import type { StepperItemSlot } from '../../components/VStepper/VStepperItem.js';
export type StepperVerticalItemActionSlot<T = any> = StepperItemSlot<T> & {
    next: () => void;
    prev: () => void;
};
export type VStepperVerticalItemSlots<T = any> = {
    default: StepperItemSlot<T>;
    icon: StepperItemSlot<T>;
    subtitle: StepperItemSlot<T>;
    title: StepperItemSlot<T>;
    text: StepperItemSlot<T>;
    prev: StepperVerticalItemActionSlot<T>;
    next: StepperVerticalItemActionSlot<T>;
    actions: StepperVerticalItemActionSlot<T>;
};
export declare const makeVStepperVerticalItemProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    elevation?: unknown;
    rounded?: unknown;
    tile?: unknown;
    tag?: unknown;
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
    color?: unknown;
    expandIcon?: unknown;
    collapseIcon?: unknown;
    focusable?: unknown;
    static?: unknown;
    ripple?: unknown;
    readonly?: unknown;
    title?: unknown;
    text?: unknown;
    bgColor?: unknown;
    subtitle?: unknown;
    complete?: unknown;
    completeIcon?: unknown;
    editable?: unknown;
    editIcon?: unknown;
    error?: unknown;
    errorIcon?: unknown;
    icon?: unknown;
    rules?: unknown;
    hideActions?: unknown;
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
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    expandIcon: unknown extends Defaults["expandIcon"] ? Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    } : Omit<Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["expandIcon"] ? import("../../composables/icons.js").IconValue : Defaults["expandIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["expandIcon"] ? import("../../composables/icons.js").IconValue : Defaults["expandIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    collapseIcon: unknown extends Defaults["collapseIcon"] ? Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    } : Omit<Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["collapseIcon"] ? import("../../composables/icons.js").IconValue : Defaults["collapseIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["collapseIcon"] ? import("../../composables/icons.js").IconValue : Defaults["collapseIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    focusable: unknown extends Defaults["focusable"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["focusable"] ? boolean : boolean | Defaults["focusable"]>;
        default: unknown extends Defaults["focusable"] ? boolean : boolean | Defaults["focusable"];
    };
    static: unknown extends Defaults["static"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["static"] ? boolean : boolean | Defaults["static"]>;
        default: unknown extends Defaults["static"] ? boolean : boolean | Defaults["static"];
    };
    ripple: unknown extends Defaults["ripple"] ? {
        type: import("vue").PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    } : Omit<{
        type: import("vue").PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["ripple"] ? boolean | {
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
    readonly: unknown extends Defaults["readonly"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"]>;
        default: unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"];
    };
    title: unknown extends Defaults["title"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["title"] ? string : string | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string : string | Defaults["title"];
    };
    text: unknown extends Defaults["text"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["text"] ? string : string | Defaults["text"]>;
        default: unknown extends Defaults["text"] ? string : string | Defaults["text"];
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    subtitle: unknown extends Defaults["subtitle"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["subtitle"] ? string : string | Defaults["subtitle"]>;
        default: unknown extends Defaults["subtitle"] ? string : string | Defaults["subtitle"];
    };
    complete: unknown extends Defaults["complete"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["complete"] ? boolean : boolean | Defaults["complete"]>;
        default: unknown extends Defaults["complete"] ? boolean : boolean | Defaults["complete"];
    };
    completeIcon: unknown extends Defaults["completeIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["completeIcon"] ? import("../../composables/icons.js").IconValue : Defaults["completeIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["completeIcon"] ? import("../../composables/icons.js").IconValue : Defaults["completeIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    editable: unknown extends Defaults["editable"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["editable"] ? boolean : boolean | Defaults["editable"]>;
        default: unknown extends Defaults["editable"] ? boolean : boolean | Defaults["editable"];
    };
    editIcon: unknown extends Defaults["editIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["editIcon"] ? import("../../composables/icons.js").IconValue : Defaults["editIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["editIcon"] ? import("../../composables/icons.js").IconValue : Defaults["editIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    error: unknown extends Defaults["error"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"]>;
        default: unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"];
    };
    errorIcon: unknown extends Defaults["errorIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["errorIcon"] ? import("../../composables/icons.js").IconValue : Defaults["errorIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["errorIcon"] ? import("../../composables/icons.js").IconValue : Defaults["errorIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    icon: unknown extends Defaults["icon"] ? import("vue").PropType<import("../../composables/icons.js").IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["icon"] ? import("../../composables/icons.js").IconValue : Defaults["icon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["icon"] ? import("../../composables/icons.js").IconValue : Defaults["icon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    rules: unknown extends Defaults["rules"] ? {
        type: import("vue").PropType<readonly import("../../components/VStepper/VStepperItem.js").ValidationRule[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<readonly import("../../components/VStepper/VStepperItem.js").ValidationRule[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["rules"] ? readonly import("../../components/VStepper/VStepperItem.js").ValidationRule[] : readonly import("../../components/VStepper/VStepperItem.js").ValidationRule[] | Defaults["rules"]>;
        default: unknown extends Defaults["rules"] ? readonly import("../../components/VStepper/VStepperItem.js").ValidationRule[] : readonly import("../../components/VStepper/VStepperItem.js").ValidationRule[] | Defaults["rules"];
    };
    hideActions: unknown extends Defaults["hideActions"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"]>;
        default: unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"];
    };
};
export declare const VStepperVerticalItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        disabled: boolean;
        eager: boolean;
        expandIcon: import("../../composables/icons.js").IconValue;
        collapseIcon: import("../../composables/icons.js").IconValue;
        focusable: boolean;
        static: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        };
        readonly: boolean;
        complete: boolean;
        completeIcon: import("../../composables/icons.js").IconValue;
        editable: boolean;
        editIcon: import("../../composables/icons.js").IconValue;
        error: boolean;
        errorIcon: import("../../composables/icons.js").IconValue;
        rules: readonly import("../../components/VStepper/VStepperItem.js").ValidationRule[];
        hideActions: boolean;
    } & {
        class?: any;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        value?: any;
        selectedClass?: string | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        title?: string | undefined;
        text?: string | undefined;
        bgColor?: string | undefined;
        subtitle?: string | undefined;
        icon?: import("../../composables/icons.js").IconValue | undefined;
    } & {
        $children?: {
            default?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            icon?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            title?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            text?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            prev?: ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
            next?: ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
            actions?: ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            icon?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            text?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            prev?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
            next?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
            actions?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:actions"?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:icon"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:next"?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:prev"?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:text"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
    } & {
        "onClick:finish"?: (() => any) | undefined;
        "onClick:next"?: (() => any) | undefined;
        "onClick:prev"?: (() => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "click:next": () => true;
        "click:prev": () => true;
        "click:finish": () => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        disabled: boolean;
        eager: boolean;
        expandIcon: import("../../composables/icons.js").IconValue;
        collapseIcon: import("../../composables/icons.js").IconValue;
        focusable: boolean;
        static: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined;
        readonly: boolean;
        complete: boolean;
        completeIcon: import("../../composables/icons.js").IconValue;
        editable: boolean;
        editIcon: import("../../composables/icons.js").IconValue;
        error: boolean;
        errorIcon: import("../../composables/icons.js").IconValue;
        rules: readonly import("../../components/VStepper/VStepperItem.js").ValidationRule[];
        hideActions: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: StepperItemSlot<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        icon: (arg: StepperItemSlot<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        subtitle: (arg: StepperItemSlot<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        title: (arg: StepperItemSlot<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        text: (arg: StepperItemSlot<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        prev: (arg: StepperVerticalItemActionSlot<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        next: (arg: StepperVerticalItemActionSlot<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        actions: (arg: StepperVerticalItemActionSlot<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        tag: string | import("../../util/index.js").JSXComponent;
        disabled: boolean;
        eager: boolean;
        expandIcon: import("../../composables/icons.js").IconValue;
        collapseIcon: import("../../composables/icons.js").IconValue;
        focusable: boolean;
        static: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        };
        readonly: boolean;
        complete: boolean;
        completeIcon: import("../../composables/icons.js").IconValue;
        editable: boolean;
        editIcon: import("../../composables/icons.js").IconValue;
        error: boolean;
        errorIcon: import("../../composables/icons.js").IconValue;
        rules: readonly import("../../components/VStepper/VStepperItem.js").ValidationRule[];
        hideActions: boolean;
    } & {
        class?: any;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        value?: any;
        selectedClass?: string | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        title?: string | undefined;
        text?: string | undefined;
        bgColor?: string | undefined;
        subtitle?: string | undefined;
        icon?: import("../../composables/icons.js").IconValue | undefined;
    } & {
        $children?: {
            default?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            icon?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            title?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            text?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            prev?: ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
            next?: ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
            actions?: ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            icon?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            text?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            prev?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
            next?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
            actions?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:actions"?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:icon"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:next"?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:prev"?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:text"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
    } & {
        "onClick:finish"?: (() => any) | undefined;
        "onClick:next"?: (() => any) | undefined;
        "onClick:prev"?: (() => any) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        disabled: boolean;
        eager: boolean;
        expandIcon: import("../../composables/icons.js").IconValue;
        collapseIcon: import("../../composables/icons.js").IconValue;
        focusable: boolean;
        static: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined;
        readonly: boolean;
        complete: boolean;
        completeIcon: import("../../composables/icons.js").IconValue;
        editable: boolean;
        editIcon: import("../../composables/icons.js").IconValue;
        error: boolean;
        errorIcon: import("../../composables/icons.js").IconValue;
        rules: readonly import("../../components/VStepper/VStepperItem.js").ValidationRule[];
        hideActions: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    disabled: boolean;
    eager: boolean;
    expandIcon: import("../../composables/icons.js").IconValue;
    collapseIcon: import("../../composables/icons.js").IconValue;
    focusable: boolean;
    static: boolean;
    ripple: boolean | {
        class?: string | undefined;
        keys?: string[] | undefined;
    };
    readonly: boolean;
    complete: boolean;
    completeIcon: import("../../composables/icons.js").IconValue;
    editable: boolean;
    editIcon: import("../../composables/icons.js").IconValue;
    error: boolean;
    errorIcon: import("../../composables/icons.js").IconValue;
    rules: readonly import("../../components/VStepper/VStepperItem.js").ValidationRule[];
    hideActions: boolean;
} & {
    class?: any;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    value?: any;
    selectedClass?: string | undefined;
    height?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
    title?: string | undefined;
    text?: string | undefined;
    bgColor?: string | undefined;
    subtitle?: string | undefined;
    icon?: import("../../composables/icons.js").IconValue | undefined;
} & {
    $children?: {
        default?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        icon?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        subtitle?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        title?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        text?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        prev?: ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
        next?: ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
        actions?: ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        icon?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        subtitle?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        title?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        text?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        prev?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
        next?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
        actions?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:actions"?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
    "v-slot:icon"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
    "v-slot:next"?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
    "v-slot:prev"?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
    "v-slot:subtitle"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
    "v-slot:text"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
    "v-slot:title"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
} & {
    "onClick:finish"?: (() => any) | undefined;
    "onClick:next"?: (() => any) | undefined;
    "onClick:prev"?: (() => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "click:next": () => true;
    "click:prev": () => true;
    "click:finish": () => true;
}, string, {
    style: import("vue").StyleValue;
    rounded: string | number | boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    disabled: boolean;
    eager: boolean;
    expandIcon: import("../../composables/icons.js").IconValue;
    collapseIcon: import("../../composables/icons.js").IconValue;
    focusable: boolean;
    static: boolean;
    ripple: boolean | {
        class?: string | undefined;
        keys?: string[] | undefined;
    } | undefined;
    readonly: boolean;
    complete: boolean;
    completeIcon: import("../../composables/icons.js").IconValue;
    editable: boolean;
    editIcon: import("../../composables/icons.js").IconValue;
    error: boolean;
    errorIcon: import("../../composables/icons.js").IconValue;
    rules: readonly import("../../components/VStepper/VStepperItem.js").ValidationRule[];
    hideActions: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: StepperItemSlot<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    icon: (arg: StepperItemSlot<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    subtitle: (arg: StepperItemSlot<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    title: (arg: StepperItemSlot<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    text: (arg: StepperItemSlot<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    prev: (arg: StepperVerticalItemActionSlot<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    next: (arg: StepperVerticalItemActionSlot<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    actions: (arg: StepperVerticalItemActionSlot<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
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
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
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
    color: StringConstructor;
    expandIcon: Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    };
    collapseIcon: Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    };
    focusable: BooleanConstructor;
    static: BooleanConstructor;
    ripple: {
        type: import("vue").PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    };
    readonly: BooleanConstructor;
    title: StringConstructor;
    text: StringConstructor;
    bgColor: StringConstructor;
    subtitle: StringConstructor;
    complete: BooleanConstructor;
    completeIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    editable: BooleanConstructor;
    editIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    error: BooleanConstructor;
    errorIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    icon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    rules: {
        type: import("vue").PropType<readonly import("../../components/VStepper/VStepperItem.js").ValidationRule[]>;
        default: () => never[];
    };
    hideActions: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
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
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
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
    color: StringConstructor;
    expandIcon: Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    };
    collapseIcon: Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    };
    focusable: BooleanConstructor;
    static: BooleanConstructor;
    ripple: {
        type: import("vue").PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    };
    readonly: BooleanConstructor;
    title: StringConstructor;
    text: StringConstructor;
    bgColor: StringConstructor;
    subtitle: StringConstructor;
    complete: BooleanConstructor;
    completeIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    editable: BooleanConstructor;
    editIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    error: BooleanConstructor;
    errorIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    icon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    rules: {
        type: import("vue").PropType<readonly import("../../components/VStepper/VStepperItem.js").ValidationRule[]>;
        default: () => never[];
    };
    hideActions: BooleanConstructor;
}>>;
export type VStepperVerticalItem = InstanceType<typeof VStepperVerticalItem>;
