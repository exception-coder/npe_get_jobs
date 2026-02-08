// Styles

// Types
import type { PropType } from 'vue';
import type { HSV } from '../../util/colorUtils.js';
export declare const makeVColorPickerEditProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    color?: unknown;
    disabled?: unknown;
    mode?: unknown;
    modes?: unknown;
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
    color: unknown extends Defaults["color"] ? PropType<HSV | null> : {
        type: PropType<unknown extends Defaults["color"] ? HSV | null : HSV | Defaults["color"] | null>;
        default: unknown extends Defaults["color"] ? HSV | null : HSV | Defaults["color"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
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
};
export declare const VColorPickerEdit: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        class: PropType<any>;
        style: {
            type: PropType<import("vue").StyleValue>;
            default: null;
        };
        color: PropType<HSV | null>;
        disabled: BooleanConstructor;
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
    }>> & {
        "onUpdate:color"?: ((color: HSV) => any) | undefined;
        "onUpdate:mode"?: ((mode: "hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba") => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:color": (color: HSV) => true;
        "update:mode": (mode: "hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba") => true;
    }, import("vue").PublicProps, {
        style: import("vue").StyleValue;
        disabled: boolean;
        mode: "hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba";
        modes: readonly ("hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba")[];
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        class: PropType<any>;
        style: {
            type: PropType<import("vue").StyleValue>;
            default: null;
        };
        color: PropType<HSV | null>;
        disabled: BooleanConstructor;
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
    }>> & {
        "onUpdate:color"?: ((color: HSV) => any) | undefined;
        "onUpdate:mode"?: ((mode: "hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba") => any) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        disabled: boolean;
        mode: "hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba";
        modes: readonly ("hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba")[];
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    color: PropType<HSV | null>;
    disabled: BooleanConstructor;
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
}>> & {
    "onUpdate:color"?: ((color: HSV) => any) | undefined;
    "onUpdate:mode"?: ((mode: "hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba") => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:color": (color: HSV) => true;
    "update:mode": (mode: "hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba") => true;
}, string, {
    style: import("vue").StyleValue;
    disabled: boolean;
    mode: "hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba";
    modes: readonly ("hex" | "hexa" | "hsl" | "hsla" | "rgb" | "rgba")[];
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    color: PropType<HSV | null>;
    disabled: BooleanConstructor;
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
}, import("vue").ExtractPropTypes<{
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    color: PropType<HSV | null>;
    disabled: BooleanConstructor;
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
}>>;
export type VColorPickerEdit = InstanceType<typeof VColorPickerEdit>;
