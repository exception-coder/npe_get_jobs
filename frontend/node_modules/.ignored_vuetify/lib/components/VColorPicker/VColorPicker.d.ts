// Styles

// Types
import type { PropType } from 'vue';
export declare const makeVColorPickerProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    border?: unknown;
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
    hideEyeDropper?: unknown;
    eyeDropperIcon?: unknown;
    color?: unknown;
    bgColor?: unknown;
    divided?: unknown;
    landscape?: unknown;
    title?: unknown;
    hideHeader?: unknown;
    hideTitle?: unknown;
    canvasHeight?: unknown;
    disabled?: unknown;
    dotSize?: unknown;
    hideCanvas?: unknown;
    hideSliders?: unknown;
    hideInputs?: unknown;
    mode?: unknown;
    modes?: unknown;
    showSwatches?: unknown;
    swatches?: unknown;
    swatchesMaxHeight?: unknown;
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
    hideEyeDropper: unknown extends Defaults["hideEyeDropper"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideEyeDropper"] ? boolean : boolean | Defaults["hideEyeDropper"]>;
        default: unknown extends Defaults["hideEyeDropper"] ? boolean : boolean | Defaults["hideEyeDropper"];
    };
    eyeDropperIcon: unknown extends Defaults["eyeDropperIcon"] ? {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["eyeDropperIcon"] ? import("../../composables/icons.js").IconValue : Defaults["eyeDropperIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["eyeDropperIcon"] ? import("../../composables/icons.js").IconValue : Defaults["eyeDropperIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    divided: unknown extends Defaults["divided"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["divided"] ? boolean : boolean | Defaults["divided"]>;
        default: unknown extends Defaults["divided"] ? boolean : boolean | Defaults["divided"];
    };
    landscape: unknown extends Defaults["landscape"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["landscape"] ? boolean : boolean | Defaults["landscape"]>;
        default: unknown extends Defaults["landscape"] ? boolean : boolean | Defaults["landscape"];
    };
    title: unknown extends Defaults["title"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["title"] ? string : string | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string : string | Defaults["title"];
    };
    hideHeader: unknown extends Defaults["hideHeader"] ? {
        type: PropType<boolean>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["hideHeader"] ? boolean : boolean | Defaults["hideHeader"]>;
        default: unknown extends Defaults["hideHeader"] ? boolean : boolean | Defaults["hideHeader"];
    };
    hideTitle: unknown extends Defaults["hideTitle"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideTitle"] ? boolean : boolean | Defaults["hideTitle"]>;
        default: unknown extends Defaults["hideTitle"] ? boolean : boolean | Defaults["hideTitle"];
    };
    canvasHeight: unknown extends Defaults["canvasHeight"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["canvasHeight"] ? string | number : string | number | Defaults["canvasHeight"]>;
        default: unknown extends Defaults["canvasHeight"] ? string | number : Defaults["canvasHeight"] | NonNullable<string | number>;
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    dotSize: unknown extends Defaults["dotSize"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["dotSize"] ? string | number : string | number | Defaults["dotSize"]>;
        default: unknown extends Defaults["dotSize"] ? string | number : Defaults["dotSize"] | NonNullable<string | number>;
    };
    hideCanvas: unknown extends Defaults["hideCanvas"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideCanvas"] ? boolean : boolean | Defaults["hideCanvas"]>;
        default: unknown extends Defaults["hideCanvas"] ? boolean : boolean | Defaults["hideCanvas"];
    };
    hideSliders: unknown extends Defaults["hideSliders"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideSliders"] ? boolean : boolean | Defaults["hideSliders"]>;
        default: unknown extends Defaults["hideSliders"] ? boolean : boolean | Defaults["hideSliders"];
    };
    hideInputs: unknown extends Defaults["hideInputs"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideInputs"] ? boolean : boolean | Defaults["hideInputs"]>;
        default: unknown extends Defaults["hideInputs"] ? boolean : boolean | Defaults["hideInputs"];
    };
    mode: unknown extends Defaults["mode"] ? {
        type: PropType<"hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba">;
        default: string;
        validator: (v: string) => boolean;
    } : Omit<{
        type: PropType<"hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba">;
        default: string;
        validator: (v: string) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["mode"] ? "hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba" : "hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba" | Defaults["mode"]>;
        default: unknown extends Defaults["mode"] ? "hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba" : Defaults["mode"] | NonNullable<"hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba">;
    };
    modes: unknown extends Defaults["modes"] ? {
        type: PropType<readonly ("hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba")[]>;
        default: () => string[];
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<readonly ("hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba")[]>;
        default: () => string[];
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["modes"] ? readonly ("hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba")[] : readonly ("hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba")[] | Defaults["modes"]>;
        default: unknown extends Defaults["modes"] ? readonly ("hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba")[] : readonly ("hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba")[] | Defaults["modes"];
    };
    showSwatches: unknown extends Defaults["showSwatches"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["showSwatches"] ? boolean : boolean | Defaults["showSwatches"]>;
        default: unknown extends Defaults["showSwatches"] ? boolean : boolean | Defaults["showSwatches"];
    };
    swatches: unknown extends Defaults["swatches"] ? PropType<readonly (readonly (string | number | {
        readonly h: number;
        readonly s: number;
        readonly l: number;
        readonly a?: number | undefined;
    } | {
        readonly h: number;
        readonly s: number;
        readonly v: number;
        readonly a?: number | undefined;
    } | {
        readonly r: number;
        readonly g: number;
        readonly b: number;
        readonly a?: number | undefined;
    })[])[]> : {
        type: PropType<unknown extends Defaults["swatches"] ? readonly (readonly (string | number | {
            readonly h: number;
            readonly s: number;
            readonly l: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly v: number;
            readonly a?: number | undefined;
        } | {
            readonly r: number;
            readonly g: number;
            readonly b: number;
            readonly a?: number | undefined;
        })[])[] : readonly (readonly (string | number | {
            readonly h: number;
            readonly s: number;
            readonly l: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly v: number;
            readonly a?: number | undefined;
        } | {
            readonly r: number;
            readonly g: number;
            readonly b: number;
            readonly a?: number | undefined;
        })[])[] | Defaults["swatches"]>;
        default: unknown extends Defaults["swatches"] ? readonly (readonly (string | number | {
            readonly h: number;
            readonly s: number;
            readonly l: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly v: number;
            readonly a?: number | undefined;
        } | {
            readonly r: number;
            readonly g: number;
            readonly b: number;
            readonly a?: number | undefined;
        })[])[] : readonly (readonly (string | number | {
            readonly h: number;
            readonly s: number;
            readonly l: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly v: number;
            readonly a?: number | undefined;
        } | {
            readonly r: number;
            readonly g: number;
            readonly b: number;
            readonly a?: number | undefined;
        })[])[] | Defaults["swatches"];
    };
    swatchesMaxHeight: unknown extends Defaults["swatchesMaxHeight"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["swatchesMaxHeight"] ? string | number : string | number | Defaults["swatchesMaxHeight"]>;
        default: unknown extends Defaults["swatchesMaxHeight"] ? string | number : Defaults["swatchesMaxHeight"] | NonNullable<string | number>;
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: PropType<string | Record<string, unknown> | null | undefined>;
    } : Omit<{
        type: PropType<string | Record<string, unknown> | null | undefined>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["modelValue"] ? string | Record<string, unknown> | null | undefined : string | Record<string, unknown> | Defaults["modelValue"] | null | undefined>;
        default: unknown extends Defaults["modelValue"] ? string | Record<string, unknown> | null | undefined : Defaults["modelValue"] | NonNullable<string | Record<string, unknown> | null | undefined>;
    };
};
export declare const VColorPicker: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        theme: StringConstructor;
        class: PropType<any>;
        style: {
            type: PropType<import("vue").StyleValue>;
            default: null;
        };
        border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
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
        hideEyeDropper: BooleanConstructor;
        eyeDropperIcon: {
            type: PropType<import("../../composables/icons.js").IconValue>;
            default: string;
        };
        color: StringConstructor;
        bgColor: StringConstructor;
        divided: BooleanConstructor;
        landscape: BooleanConstructor;
        title: StringConstructor;
        hideHeader: {
            type: PropType<boolean>;
            default: boolean;
        };
        hideTitle: BooleanConstructor;
        canvasHeight: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        disabled: BooleanConstructor;
        dotSize: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        hideCanvas: BooleanConstructor;
        hideSliders: BooleanConstructor;
        hideInputs: BooleanConstructor;
        mode: {
            type: PropType<"hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba">;
            default: string;
            validator: (v: string) => boolean;
        };
        modes: {
            type: PropType<readonly ("hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba")[]>;
            default: () => string[];
            validator: (v: any) => boolean;
        };
        showSwatches: BooleanConstructor;
        swatches: PropType<readonly (readonly (string | number | {
            readonly h: number;
            readonly s: number;
            readonly l: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly v: number;
            readonly a?: number | undefined;
        } | {
            readonly r: number;
            readonly g: number;
            readonly b: number;
            readonly a?: number | undefined;
        })[])[]>;
        swatchesMaxHeight: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        modelValue: {
            type: PropType<string | Record<string, unknown> | null | undefined>;
        };
    }>> & {
        "onUpdate:mode"?: ((mode: "hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba") => any) | undefined;
        "onUpdate:modelValue"?: ((color: any) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (color: any) => true;
        "update:mode": (mode: "hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba") => true;
    }, import("vue").PublicProps, {
        style: import("vue").StyleValue;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        hideEyeDropper: boolean;
        eyeDropperIcon: import("../../composables/icons.js").IconValue;
        divided: boolean;
        landscape: boolean;
        hideHeader: boolean;
        hideTitle: boolean;
        canvasHeight: string | number;
        disabled: boolean;
        dotSize: string | number;
        hideCanvas: boolean;
        hideSliders: boolean;
        hideInputs: boolean;
        mode: "hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba";
        modes: readonly ("hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba")[];
        showSwatches: boolean;
        swatchesMaxHeight: string | number;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        theme: StringConstructor;
        class: PropType<any>;
        style: {
            type: PropType<import("vue").StyleValue>;
            default: null;
        };
        border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
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
        hideEyeDropper: BooleanConstructor;
        eyeDropperIcon: {
            type: PropType<import("../../composables/icons.js").IconValue>;
            default: string;
        };
        color: StringConstructor;
        bgColor: StringConstructor;
        divided: BooleanConstructor;
        landscape: BooleanConstructor;
        title: StringConstructor;
        hideHeader: {
            type: PropType<boolean>;
            default: boolean;
        };
        hideTitle: BooleanConstructor;
        canvasHeight: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        disabled: BooleanConstructor;
        dotSize: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        hideCanvas: BooleanConstructor;
        hideSliders: BooleanConstructor;
        hideInputs: BooleanConstructor;
        mode: {
            type: PropType<"hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba">;
            default: string;
            validator: (v: string) => boolean;
        };
        modes: {
            type: PropType<readonly ("hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba")[]>;
            default: () => string[];
            validator: (v: any) => boolean;
        };
        showSwatches: BooleanConstructor;
        swatches: PropType<readonly (readonly (string | number | {
            readonly h: number;
            readonly s: number;
            readonly l: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly v: number;
            readonly a?: number | undefined;
        } | {
            readonly r: number;
            readonly g: number;
            readonly b: number;
            readonly a?: number | undefined;
        })[])[]>;
        swatchesMaxHeight: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        modelValue: {
            type: PropType<string | Record<string, unknown> | null | undefined>;
        };
    }>> & {
        "onUpdate:mode"?: ((mode: "hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba") => any) | undefined;
        "onUpdate:modelValue"?: ((color: any) => any) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        hideEyeDropper: boolean;
        eyeDropperIcon: import("../../composables/icons.js").IconValue;
        divided: boolean;
        landscape: boolean;
        hideHeader: boolean;
        hideTitle: boolean;
        canvasHeight: string | number;
        disabled: boolean;
        dotSize: string | number;
        hideCanvas: boolean;
        hideSliders: boolean;
        hideInputs: boolean;
        mode: "hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba";
        modes: readonly ("hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba")[];
        showSwatches: boolean;
        swatchesMaxHeight: string | number;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
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
    hideEyeDropper: BooleanConstructor;
    eyeDropperIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    color: StringConstructor;
    bgColor: StringConstructor;
    divided: BooleanConstructor;
    landscape: BooleanConstructor;
    title: StringConstructor;
    hideHeader: {
        type: PropType<boolean>;
        default: boolean;
    };
    hideTitle: BooleanConstructor;
    canvasHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    disabled: BooleanConstructor;
    dotSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    hideCanvas: BooleanConstructor;
    hideSliders: BooleanConstructor;
    hideInputs: BooleanConstructor;
    mode: {
        type: PropType<"hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba">;
        default: string;
        validator: (v: string) => boolean;
    };
    modes: {
        type: PropType<readonly ("hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba")[]>;
        default: () => string[];
        validator: (v: any) => boolean;
    };
    showSwatches: BooleanConstructor;
    swatches: PropType<readonly (readonly (string | number | {
        readonly h: number;
        readonly s: number;
        readonly l: number;
        readonly a?: number | undefined;
    } | {
        readonly h: number;
        readonly s: number;
        readonly v: number;
        readonly a?: number | undefined;
    } | {
        readonly r: number;
        readonly g: number;
        readonly b: number;
        readonly a?: number | undefined;
    })[])[]>;
    swatchesMaxHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    modelValue: {
        type: PropType<string | Record<string, unknown> | null | undefined>;
    };
}>> & {
    "onUpdate:mode"?: ((mode: "hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba") => any) | undefined;
    "onUpdate:modelValue"?: ((color: any) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (color: any) => true;
    "update:mode": (mode: "hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba") => true;
}, string, {
    style: import("vue").StyleValue;
    rounded: string | number | boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    hideEyeDropper: boolean;
    eyeDropperIcon: import("../../composables/icons.js").IconValue;
    divided: boolean;
    landscape: boolean;
    hideHeader: boolean;
    hideTitle: boolean;
    canvasHeight: string | number;
    disabled: boolean;
    dotSize: string | number;
    hideCanvas: boolean;
    hideSliders: boolean;
    hideInputs: boolean;
    mode: "hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba";
    modes: readonly ("hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba")[];
    showSwatches: boolean;
    swatchesMaxHeight: string | number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
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
    hideEyeDropper: BooleanConstructor;
    eyeDropperIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    color: StringConstructor;
    bgColor: StringConstructor;
    divided: BooleanConstructor;
    landscape: BooleanConstructor;
    title: StringConstructor;
    hideHeader: {
        type: PropType<boolean>;
        default: boolean;
    };
    hideTitle: BooleanConstructor;
    canvasHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    disabled: BooleanConstructor;
    dotSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    hideCanvas: BooleanConstructor;
    hideSliders: BooleanConstructor;
    hideInputs: BooleanConstructor;
    mode: {
        type: PropType<"hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba">;
        default: string;
        validator: (v: string) => boolean;
    };
    modes: {
        type: PropType<readonly ("hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba")[]>;
        default: () => string[];
        validator: (v: any) => boolean;
    };
    showSwatches: BooleanConstructor;
    swatches: PropType<readonly (readonly (string | number | {
        readonly h: number;
        readonly s: number;
        readonly l: number;
        readonly a?: number | undefined;
    } | {
        readonly h: number;
        readonly s: number;
        readonly v: number;
        readonly a?: number | undefined;
    } | {
        readonly r: number;
        readonly g: number;
        readonly b: number;
        readonly a?: number | undefined;
    })[])[]>;
    swatchesMaxHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    modelValue: {
        type: PropType<string | Record<string, unknown> | null | undefined>;
    };
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
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
    hideEyeDropper: BooleanConstructor;
    eyeDropperIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    color: StringConstructor;
    bgColor: StringConstructor;
    divided: BooleanConstructor;
    landscape: BooleanConstructor;
    title: StringConstructor;
    hideHeader: {
        type: PropType<boolean>;
        default: boolean;
    };
    hideTitle: BooleanConstructor;
    canvasHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    disabled: BooleanConstructor;
    dotSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    hideCanvas: BooleanConstructor;
    hideSliders: BooleanConstructor;
    hideInputs: BooleanConstructor;
    mode: {
        type: PropType<"hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba">;
        default: string;
        validator: (v: string) => boolean;
    };
    modes: {
        type: PropType<readonly ("hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba")[]>;
        default: () => string[];
        validator: (v: any) => boolean;
    };
    showSwatches: BooleanConstructor;
    swatches: PropType<readonly (readonly (string | number | {
        readonly h: number;
        readonly s: number;
        readonly l: number;
        readonly a?: number | undefined;
    } | {
        readonly h: number;
        readonly s: number;
        readonly v: number;
        readonly a?: number | undefined;
    } | {
        readonly r: number;
        readonly g: number;
        readonly b: number;
        readonly a?: number | undefined;
    })[])[]>;
    swatchesMaxHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    modelValue: {
        type: PropType<string | Record<string, unknown> | null | undefined>;
    };
}>>;
export type VColorPicker = InstanceType<typeof VColorPicker>;
