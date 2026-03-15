import { IRangeThemeRangeInfo, SheetRangeThemeModel } from '../model/range-theme-model';
import { RangeThemeStyle } from '../model/range-theme-util';
import { Disposable } from '@univerjs/core';
export declare class SheetRangeThemeService extends Disposable {
    private _sheetRangeThemeModel;
    constructor(_sheetRangeThemeModel: SheetRangeThemeModel);
    /**
     * Register a custom range theme style.
     * @param {string} unitId Which unit to register the range theme style.
     * @param {RangeThemeStyle} rangeThemeStyle The range theme style to register.
     */
    registerRangeTheme(unitId: string, rangeThemeStyle: RangeThemeStyle): void;
    removeRangeThemeRule(themeName: string, rangeInfo: IRangeThemeRangeInfo): void;
    /**
     * Get custom register themes name list
     * @param {string} unitId Which unit to register the range theme style.
     * @returns {string[]} The list of custom register themes name.
     */
    getALLRegisterThemes(unitId: string): string[];
    /**
     * Register range theme style to the range.
     * @param {string} themeName The defined theme name.
     * @param {IRangeThemeRangeInfo} rangeInfo The range info to apply the theme style.
     */
    registerRangeThemeStyle(themeName: string, rangeInfo: IRangeThemeRangeInfo): void;
    /**
     * Get applied range theme style name.
     * @param {IRangeThemeRangeInfo} rangeInfo The range info to get the applied theme style.
     * @returns {string | undefined} The applied theme style name or not exist.
     */
    getAppliedRangeThemeStyle(rangeInfo: IRangeThemeRangeInfo): string | undefined;
    /**
     * Get registered build-in range theme style
     */
    getRegisteredRangeThemes(): string[];
}
