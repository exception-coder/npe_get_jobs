// Types
import type { HSV } from '../../../util/colorUtils.js';
export declare function extractColor(color: HSV, input: any): any;
export declare function hasAlpha(color: any): boolean;
export declare const nullColor: {
    h: number;
    s: number;
    v: number;
    a: number;
};
export type ColorPickerMode = {
    inputProps: Record<string, unknown>;
    inputs: {
        [key: string]: any;
        getValue: (color: any) => number | string;
        getColor: (color: any, v: string) => any;
    }[];
    from: (color: any) => HSV;
    to: (color: HSV) => any;
};
export declare const modes: {
    rgb: {
        inputProps: Record<string, unknown>;
        from: (color: any) => HSV;
        to: (color: HSV) => any;
        inputs: {
            [key: string]: any;
            getValue: (color: any) => string | number;
            getColor: (color: any, v: string) => any;
        }[];
    };
    rgba: ColorPickerMode;
    hsl: {
        inputProps: Record<string, unknown>;
        from: (color: any) => HSV;
        to: (color: HSV) => any;
        inputs: {
            [key: string]: any;
            getValue: (color: any) => string | number;
            getColor: (color: any, v: string) => any;
        }[];
    };
    hsla: ColorPickerMode;
    hex: {
        inputProps: Record<string, unknown>;
        from: (color: any) => HSV;
        to: (color: HSV) => any;
        inputs: {
            label: string;
            getValue: (c: string) => string;
            getColor: (c: string, v: string) => string;
            localeKey: string;
        }[];
    };
    hexa: ColorPickerMode;
};
