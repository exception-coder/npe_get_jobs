import { Nullable } from '../types';
import { ColorType, ThemeColors, ThemeColorType } from '../../types/enum';
/**
 * @deprecated
 */
export declare class ColorBuilder {
    private _themeValue;
    private _themeColors;
    private _themeTint;
    private _rgbValue;
    private _colorType;
    constructor();
    asRgbColor(): RgbColor;
    asThemeColor(): ThemeColor;
    build(): Nullable<Color>;
    setRgbColor(cssString: string): ColorBuilder;
    setThemeColors(value: ThemeColors): void;
    setThemeTint(value: number): void;
    setThemeColor(theme: ThemeColorType): ColorBuilder;
    getColorType(): ColorType;
}
/**
 * @deprecated
 */
export declare class Color {
    protected _builder: ColorBuilder;
    constructor(builder: ColorBuilder);
    static rgbColorToHexValue(color: RgbColor): string;
    static hexValueToRgbColor(hexValue: string): RgbColor;
    static hexToRgbString(hex: string): Nullable<string>;
    asRgbColor(): RgbColor;
    asThemeColor(): ThemeColor;
    getColorType(): ColorType;
    clone(): Color;
    equals(color: Color): boolean;
}
export declare class HLSColor {
    private _saturation;
    private _hue;
    private _lightness;
    private _alpha;
    constructor(rgbColor: RgbColor);
    asRgbColor(): RgbColor;
    getLightness(): number;
    getHue(): number;
    getSaturation(): number;
    getAlpha(): number;
    setColor(t1: number, t2: number, t3: number): number;
    setLightness(lightness: number): void;
}
export declare class RgbColor extends Color {
    static RGB_COLOR_AMT: number;
    static RGBA_EXTRACT: RegExp;
    static RGB_EXTRACT: RegExp;
    private _cssString;
    private _red;
    private _green;
    private _blue;
    private _alpha;
    constructor(cssString: string, builder: ColorBuilder);
    asHexString(): string;
    getRed(): number;
    getGreen(): number;
    getBlue(): number;
    getAlpha(): number;
    getColorType(): ColorType;
    clone(): RgbColor;
    asThemeColor(): ThemeColor;
    equals(color: Color): boolean;
    getCssString(): string;
}
export declare class ThemeColor extends Color {
    private static _cacheThemeColor;
    private _themeColorType;
    private _themeTint;
    private _themeColors;
    constructor(theme: ThemeColorType, themeTint: number, themeColors: ThemeColors, builder: ColorBuilder);
    lumValue(tint: number, lum: number): number;
    asRgbColor(): RgbColor;
    clone(): ThemeColor;
    equals(color: Color): boolean;
    getColorType(): ColorType;
    getThemeColorType(): ThemeColorType;
}
