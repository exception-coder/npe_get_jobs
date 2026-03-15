import { IStyleBase, Nullable } from '@univerjs/core';
interface IFontData {
    readonly family: string;
    readonly fullName: string;
    readonly postscriptName: string;
    readonly style: string;
}
interface IFontWithBuffer {
    readonly font: IFontData;
    readonly buffer: ArrayBuffer;
}
declare enum FontStyle {
    Normal = 0,
    Italic = 1,
    Oblique = 2
}
declare enum FontWeight {
    THIN = 100,
    EXTRALIGHT = 200,
    LIGHT = 300,
    REGULAR = 400,
    MEDIUM = 500,
    SEMIBOLD = 600,
    BOLD = 700,
    EXTRABOLD = 800,
    BLACK = 900
}
interface IFontVariant {
    style: FontStyle;
    weight: FontWeight;
}
export interface IFontInfo {
    family: string;
    variant: IFontVariant;
}
declare class FontLibrary {
    isReady: boolean;
    private _fontBook;
    constructor();
    private _loadFontsToBook;
    findBestMatchFontByStyle(style: IStyleBase): Nullable<IFontWithBuffer>;
    getValidFontFamilies(families: string[]): string[];
}
export declare const fontLibrary: FontLibrary;
export {};
