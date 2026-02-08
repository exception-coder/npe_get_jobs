/**
 * Copyright 2023-present DreamNum Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export interface IRgbColor {
    b: number;
    g: number;
    r: number;
    a?: number;
}
interface IHslColor {
    h: number;
    l: number;
    s: number;
    a?: number;
}
interface IHsvColor {
    h: number;
    s: number;
    v: number;
    a?: number;
}
type Color = IRgbColor | IHslColor | IHsvColor;
export declare const RGB_PAREN = "rgb(";
export declare const RGBA_PAREN = "rgba(";
export declare const COLORS: {
    [key: string]: number[];
};
export declare class ColorKit {
    private _color;
    private _rgbColor;
    private _isValid;
    static mix(color1: string | Color | ColorKit, color2: string | Color | ColorKit, amount: number): ColorKit;
    static getContrastRatio(foreground: string | Color | ColorKit, background: string | Color | ColorKit): number;
    constructor(color: string | Color | ColorKit | undefined);
    get isValid(): boolean;
    toRgb(): IRgbColor;
    toRgbString(): string;
    toString(): string;
    toHexString(allowShort?: boolean): string;
    toHsv(): IHsvColor;
    toHsl(): IHslColor;
    lighten(amount?: number): ColorKit;
    darken(amount?: number): ColorKit;
    setAlpha(value: number): ColorKit;
    getLuminance(): number;
    getBrightness(): number;
    getAlpha(): number;
    isDark(): boolean;
    isLight(): boolean;
    private _setNullColor;
}
export declare function isBlackColor(color: string): boolean;
export declare function isWhiteColor(color: string): boolean;
export {};
