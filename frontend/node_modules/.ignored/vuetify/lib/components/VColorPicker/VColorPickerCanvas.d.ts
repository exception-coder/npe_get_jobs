// Styles

// Types
import type { PropType } from 'vue';
import type { HSV } from '../../util/index.js';
export declare const makeVColorPickerCanvasProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    color?: unknown;
    disabled?: unknown;
    dotSize?: unknown;
    height?: unknown;
    width?: unknown;
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
    color: unknown extends Defaults["color"] ? {
        type: PropType<HSV | null>;
    } : Omit<{
        type: PropType<HSV | null>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["color"] ? HSV | null : HSV | Defaults["color"] | null>;
        default: unknown extends Defaults["color"] ? HSV | null : HSV | Defaults["color"];
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
    width: unknown extends Defaults["width"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : Defaults["width"] | NonNullable<string | number>;
    };
};
export declare const VColorPickerCanvas: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        class: PropType<any>;
        style: {
            type: PropType<import("vue").StyleValue>;
            default: null;
        };
        color: {
            type: PropType<HSV | null>;
        };
        disabled: BooleanConstructor;
        dotSize: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        height: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        width: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
    }>> & {
        "onUpdate:color"?: ((color: HSV) => any) | undefined;
        "onUpdate:position"?: ((hue: any) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:color": (color: HSV) => true;
        "update:position": (hue: any) => true;
    }, import("vue").PublicProps, {
        style: import("vue").StyleValue;
        disabled: boolean;
        dotSize: string | number;
        height: string | number;
        width: string | number;
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
        color: {
            type: PropType<HSV | null>;
        };
        disabled: BooleanConstructor;
        dotSize: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        height: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        width: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
    }>> & {
        "onUpdate:color"?: ((color: HSV) => any) | undefined;
        "onUpdate:position"?: ((hue: any) => any) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        disabled: boolean;
        dotSize: string | number;
        height: string | number;
        width: string | number;
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
    color: {
        type: PropType<HSV | null>;
    };
    disabled: BooleanConstructor;
    dotSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>> & {
    "onUpdate:color"?: ((color: HSV) => any) | undefined;
    "onUpdate:position"?: ((hue: any) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:color": (color: HSV) => true;
    "update:position": (hue: any) => true;
}, string, {
    style: import("vue").StyleValue;
    disabled: boolean;
    dotSize: string | number;
    height: string | number;
    width: string | number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    color: {
        type: PropType<HSV | null>;
    };
    disabled: BooleanConstructor;
    dotSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, import("vue").ExtractPropTypes<{
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    color: {
        type: PropType<HSV | null>;
    };
    disabled: BooleanConstructor;
    dotSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>>;
export type VColorPickerCanvas = InstanceType<typeof VColorPickerCanvas>;
