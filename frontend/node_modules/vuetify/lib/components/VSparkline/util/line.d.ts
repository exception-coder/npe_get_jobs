// Types
import type { PropType } from 'vue';
export type SparklineItem = string | number | {
    value: number;
};
export declare const makeLineProps: <Defaults extends {
    autoDraw?: unknown;
    autoDrawDuration?: unknown;
    autoDrawEasing?: unknown;
    color?: unknown;
    gradient?: unknown;
    gradientDirection?: unknown;
    height?: unknown;
    labels?: unknown;
    labelSize?: unknown;
    lineWidth?: unknown;
    id?: unknown;
    itemValue?: unknown;
    modelValue?: unknown;
    min?: unknown;
    max?: unknown;
    padding?: unknown;
    showLabels?: unknown;
    smooth?: unknown;
    width?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    autoDraw: unknown extends Defaults["autoDraw"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["autoDraw"] ? boolean : boolean | Defaults["autoDraw"]>;
        default: unknown extends Defaults["autoDraw"] ? boolean : boolean | Defaults["autoDraw"];
    };
    autoDrawDuration: unknown extends Defaults["autoDrawDuration"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["autoDrawDuration"] ? string | number : string | number | Defaults["autoDrawDuration"]>;
        default: unknown extends Defaults["autoDrawDuration"] ? string | number : Defaults["autoDrawDuration"] | NonNullable<string | number>;
    };
    autoDrawEasing: unknown extends Defaults["autoDrawEasing"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["autoDrawEasing"] ? string : string | Defaults["autoDrawEasing"]>;
        default: unknown extends Defaults["autoDrawEasing"] ? string : string | Defaults["autoDrawEasing"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    gradient: unknown extends Defaults["gradient"] ? {
        type: PropType<string[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<string[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["gradient"] ? string[] : string[] | Defaults["gradient"]>;
        default: unknown extends Defaults["gradient"] ? string[] : string[] | Defaults["gradient"];
    };
    gradientDirection: unknown extends Defaults["gradientDirection"] ? {
        type: PropType<"bottom" | "left" | "right" | "top">;
        validator: (val: string) => boolean;
        default: string;
    } : Omit<{
        type: PropType<"bottom" | "left" | "right" | "top">;
        validator: (val: string) => boolean;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["gradientDirection"] ? "bottom" | "left" | "right" | "top" : "bottom" | "left" | "right" | "top" | Defaults["gradientDirection"]>;
        default: unknown extends Defaults["gradientDirection"] ? "bottom" | "left" | "right" | "top" : Defaults["gradientDirection"] | NonNullable<"bottom" | "left" | "right" | "top">;
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
    labels: unknown extends Defaults["labels"] ? {
        type: PropType<SparklineItem[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<SparklineItem[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["labels"] ? SparklineItem[] : SparklineItem[] | Defaults["labels"]>;
        default: unknown extends Defaults["labels"] ? SparklineItem[] : SparklineItem[] | Defaults["labels"];
    };
    labelSize: unknown extends Defaults["labelSize"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["labelSize"] ? string | number : string | number | Defaults["labelSize"]>;
        default: unknown extends Defaults["labelSize"] ? string | number : Defaults["labelSize"] | NonNullable<string | number>;
    };
    lineWidth: unknown extends Defaults["lineWidth"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["lineWidth"] ? string | number : string | number | Defaults["lineWidth"]>;
        default: unknown extends Defaults["lineWidth"] ? string | number : Defaults["lineWidth"] | NonNullable<string | number>;
    };
    id: unknown extends Defaults["id"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["id"] ? string : string | Defaults["id"]>;
        default: unknown extends Defaults["id"] ? string : string | Defaults["id"];
    };
    itemValue: unknown extends Defaults["itemValue"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["itemValue"] ? string : string | Defaults["itemValue"]>;
        default: unknown extends Defaults["itemValue"] ? string : string | Defaults["itemValue"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: PropType<SparklineItem[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<SparklineItem[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["modelValue"] ? SparklineItem[] : SparklineItem[] | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? SparklineItem[] : SparklineItem[] | Defaults["modelValue"];
    };
    min: unknown extends Defaults["min"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["min"] ? string | number : string | number | Defaults["min"]>;
        default: unknown extends Defaults["min"] ? string | number : Defaults["min"] | NonNullable<string | number>;
    };
    max: unknown extends Defaults["max"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["max"] ? string | number : string | number | Defaults["max"]>;
        default: unknown extends Defaults["max"] ? string | number : Defaults["max"] | NonNullable<string | number>;
    };
    padding: unknown extends Defaults["padding"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["padding"] ? string | number : string | number | Defaults["padding"]>;
        default: unknown extends Defaults["padding"] ? string | number : Defaults["padding"] | NonNullable<string | number>;
    };
    showLabels: unknown extends Defaults["showLabels"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["showLabels"] ? boolean : boolean | Defaults["showLabels"]>;
        default: unknown extends Defaults["showLabels"] ? boolean : boolean | Defaults["showLabels"];
    };
    smooth: unknown extends Defaults["smooth"] ? (BooleanConstructor | NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["smooth"] ? string | number | boolean : string | number | boolean | Defaults["smooth"]>;
        default: unknown extends Defaults["smooth"] ? string | number | boolean : Defaults["smooth"] | NonNullable<string | number | boolean>;
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
