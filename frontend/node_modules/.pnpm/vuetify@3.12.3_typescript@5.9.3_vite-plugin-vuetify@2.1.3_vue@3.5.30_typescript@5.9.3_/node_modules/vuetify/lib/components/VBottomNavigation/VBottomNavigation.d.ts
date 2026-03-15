// Styles

// Types
import type { GenericProps } from '../../util/index.js';
export declare const makeVBottomNavigationProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    name?: unknown;
    order?: unknown;
    absolute?: unknown;
    border?: unknown;
    density?: unknown;
    elevation?: unknown;
    rounded?: unknown;
    tile?: unknown;
    tag?: unknown;
    modelValue?: unknown;
    multiple?: unknown;
    mandatory?: unknown;
    max?: unknown;
    selectedClass?: unknown;
    disabled?: unknown;
    baseColor?: unknown;
    bgColor?: unknown;
    color?: unknown;
    grow?: unknown;
    mode?: unknown;
    height?: unknown;
    active?: unknown;
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
    name: unknown extends Defaults["name"] ? Omit<{
        type: StringConstructor;
    }, "default" | "type"> & {
        type: import("vue").PropType<string>;
        default: string;
    } : Omit<Omit<{
        type: StringConstructor;
    }, "default" | "type"> & {
        type: import("vue").PropType<string>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["name"] ? string : string | Defaults["name"]>;
        default: unknown extends Defaults["name"] ? string : string | Defaults["name"];
    };
    order: unknown extends Defaults["order"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["order"] ? string | number : string | number | Defaults["order"]>;
        default: unknown extends Defaults["order"] ? string | number : Defaults["order"] | NonNullable<string | number>;
    };
    absolute: unknown extends Defaults["absolute"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"]>;
        default: unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"];
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
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: null;
        default: undefined;
    } : Omit<{
        type: null;
        default: undefined;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? any : any>;
        default: unknown extends Defaults["modelValue"] ? any : any;
    };
    multiple: unknown extends Defaults["multiple"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["multiple"] ? boolean : boolean | Defaults["multiple"]>;
        default: unknown extends Defaults["multiple"] ? boolean : boolean | Defaults["multiple"];
    };
    mandatory: unknown extends Defaults["mandatory"] ? import("vue").PropType<"force" | boolean> : {
        type: import("vue").PropType<unknown extends Defaults["mandatory"] ? "force" | boolean : "force" | boolean | Defaults["mandatory"]>;
        default: unknown extends Defaults["mandatory"] ? "force" | boolean : Defaults["mandatory"] | NonNullable<"force" | boolean>;
    };
    max: unknown extends Defaults["max"] ? NumberConstructor : {
        type: import("vue").PropType<unknown extends Defaults["max"] ? number : number | Defaults["max"]>;
        default: unknown extends Defaults["max"] ? number : number | Defaults["max"];
    };
    selectedClass: unknown extends Defaults["selectedClass"] ? {
        type: import("vue").PropType<string>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<string>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"]>;
        default: unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    baseColor: unknown extends Defaults["baseColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"]>;
        default: unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"];
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    grow: unknown extends Defaults["grow"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["grow"] ? boolean : boolean | Defaults["grow"]>;
        default: unknown extends Defaults["grow"] ? boolean : boolean | Defaults["grow"];
    };
    mode: unknown extends Defaults["mode"] ? {
        type: StringConstructor;
        validator: (v: any) => boolean;
    } : Omit<{
        type: StringConstructor;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["mode"] ? string : string | Defaults["mode"]>;
        default: unknown extends Defaults["mode"] ? string : string | Defaults["mode"];
    };
    height: unknown extends Defaults["height"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : Defaults["height"] | NonNullable<string | number>;
    };
    active: unknown extends Defaults["active"] ? {
        type: BooleanConstructor;
        default: boolean;
    } : Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"]>;
        default: unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"];
    };
};
export declare const VBottomNavigation: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        name: string;
        order: string | number;
        absolute: boolean;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        multiple: boolean;
        selectedClass: string;
        disabled: boolean;
        grow: boolean;
        height: string | number;
        active: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        mandatory?: "force" | boolean | undefined;
        max?: number | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        color?: string | undefined;
        mode?: string | undefined;
    } & {
        "onUpdate:active"?: ((value: any) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        "update:active": (value: any) => true;
        "update:modelValue": (value: any) => true;
    }, "$children" | "modelValue" | "update:modelValue" | "v-slot:default" | "v-slots">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        name: string;
        order: string | number;
        absolute: boolean;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        multiple: boolean;
        selectedClass: string;
        disabled: boolean;
        grow: boolean;
        height: string | number;
        active: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        name: string;
        order: string | number;
        absolute: boolean;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        multiple: boolean;
        selectedClass: string;
        disabled: boolean;
        grow: boolean;
        height: string | number;
        active: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        mandatory?: "force" | boolean | undefined;
        max?: number | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        color?: string | undefined;
        mode?: string | undefined;
    } & {
        "onUpdate:active"?: ((value: any) => any) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        name: string;
        order: string | number;
        absolute: boolean;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        multiple: boolean;
        selectedClass: string;
        disabled: boolean;
        grow: boolean;
        height: string | number;
        active: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    name: string;
    order: string | number;
    absolute: boolean;
    density: import("../../composables/density.js").Density;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    multiple: boolean;
    selectedClass: string;
    disabled: boolean;
    grow: boolean;
    height: string | number;
    active: boolean;
} & {
    theme?: string | undefined;
    class?: any;
    border?: string | number | boolean | undefined;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    mandatory?: "force" | boolean | undefined;
    max?: number | undefined;
    baseColor?: string | undefined;
    bgColor?: string | undefined;
    color?: string | undefined;
    mode?: string | undefined;
} & {
    "onUpdate:active"?: ((value: any) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    "update:active": (value: any) => true;
    "update:modelValue": (value: any) => true;
}, "$children" | "modelValue" | "update:modelValue" | "v-slot:default" | "v-slots">, string, {
    style: import("vue").StyleValue;
    name: string;
    order: string | number;
    absolute: boolean;
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    multiple: boolean;
    selectedClass: string;
    disabled: boolean;
    grow: boolean;
    height: string | number;
    active: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T>(props: {
    modelValue?: T | undefined;
    "onUpdate:modelValue"?: ((value: T) => void) | undefined;
}, slots: {
    default: never;
}) => GenericProps<{
    modelValue?: T | undefined;
    "onUpdate:modelValue"?: ((value: T) => void) | undefined;
}, {
    default: never;
}>) & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    name: Omit<{
        type: StringConstructor;
    }, "default" | "type"> & {
        type: import("vue").PropType<string>;
        default: string;
    };
    order: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    absolute: BooleanConstructor;
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
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: import("vue").PropType<"force" | boolean>;
    max: NumberConstructor;
    selectedClass: {
        type: import("vue").PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    baseColor: StringConstructor;
    bgColor: StringConstructor;
    color: StringConstructor;
    grow: BooleanConstructor;
    mode: {
        type: StringConstructor;
        validator: (v: any) => boolean;
    };
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    name: Omit<{
        type: StringConstructor;
    }, "default" | "type"> & {
        type: import("vue").PropType<string>;
        default: string;
    };
    order: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    absolute: BooleanConstructor;
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
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: import("vue").PropType<"force" | boolean>;
    max: NumberConstructor;
    selectedClass: {
        type: import("vue").PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    baseColor: StringConstructor;
    bgColor: StringConstructor;
    color: StringConstructor;
    grow: BooleanConstructor;
    mode: {
        type: StringConstructor;
        validator: (v: any) => boolean;
    };
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>;
export type VBottomNavigation = InstanceType<typeof VBottomNavigation>;
