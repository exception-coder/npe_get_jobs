import { IRangeThemeStyleItem, IRangeThemeStyleJSON } from '@univerjs/sheets';
import { ITableDefaultThemeStyle } from './config.schema';
export declare const customEmptyThemeWithBorderStyle: Omit<IRangeThemeStyleJSON, 'name'>;
export declare const processStyleWithBorderStyle: (key: keyof Omit<IRangeThemeStyleJSON, "name">, style: IRangeThemeStyleItem) => IRangeThemeStyleItem | {
    bd: {
        t: {
            s: import('@univerjs/core').BorderStyleTypes;
            cl: {
                rgb: string;
            };
        };
        b?: undefined;
        r?: undefined;
        l?: undefined;
    };
    ht?: import('@univerjs/core').Nullable<import('@univerjs/core').HorizontalAlign>;
    vt?: import('@univerjs/core').Nullable<import('@univerjs/core').VerticalAlign>;
    bg?: import('@univerjs/core').Nullable<import('@univerjs/core').IColorStyle>;
    cl?: import('@univerjs/core').Nullable<import('@univerjs/core').IColorStyle>;
    bl?: import('@univerjs/core').BooleanNumber | undefined;
    ol?: import('@univerjs/core').ITextDecoration | undefined;
} | {
    bd: {
        b: {
            s: import('@univerjs/core').BorderStyleTypes;
            cl: {
                rgb: string;
            };
        };
        t?: undefined;
        r?: undefined;
        l?: undefined;
    };
    ht?: import('@univerjs/core').Nullable<import('@univerjs/core').HorizontalAlign>;
    vt?: import('@univerjs/core').Nullable<import('@univerjs/core').VerticalAlign>;
    bg?: import('@univerjs/core').Nullable<import('@univerjs/core').IColorStyle>;
    cl?: import('@univerjs/core').Nullable<import('@univerjs/core').IColorStyle>;
    bl?: import('@univerjs/core').BooleanNumber | undefined;
    ol?: import('@univerjs/core').ITextDecoration | undefined;
} | {
    bd: {
        r: {
            s: import('@univerjs/core').BorderStyleTypes;
            cl: {
                rgb: string;
            };
        };
        t?: undefined;
        b?: undefined;
        l?: undefined;
    };
    ht?: import('@univerjs/core').Nullable<import('@univerjs/core').HorizontalAlign>;
    vt?: import('@univerjs/core').Nullable<import('@univerjs/core').VerticalAlign>;
    bg?: import('@univerjs/core').Nullable<import('@univerjs/core').IColorStyle>;
    cl?: import('@univerjs/core').Nullable<import('@univerjs/core').IColorStyle>;
    bl?: import('@univerjs/core').BooleanNumber | undefined;
    ol?: import('@univerjs/core').ITextDecoration | undefined;
} | {
    bd: {
        l: {
            s: import('@univerjs/core').BorderStyleTypes;
            cl: {
                rgb: string;
            };
        };
        t?: undefined;
        b?: undefined;
        r?: undefined;
    };
    ht?: import('@univerjs/core').Nullable<import('@univerjs/core').HorizontalAlign>;
    vt?: import('@univerjs/core').Nullable<import('@univerjs/core').VerticalAlign>;
    bg?: import('@univerjs/core').Nullable<import('@univerjs/core').IColorStyle>;
    cl?: import('@univerjs/core').Nullable<import('@univerjs/core').IColorStyle>;
    bl?: import('@univerjs/core').BooleanNumber | undefined;
    ol?: import('@univerjs/core').ITextDecoration | undefined;
};
export declare const tableThemeConfig: ITableDefaultThemeStyle[];
