import { IRange, Nullable, Disposable, IResourceManagerService, IUniverInstanceService } from '@univerjs/core';
import { IRangeThemeStyleItem, IRangeThemeStyleJSON, RangeThemeStyle } from './range-theme-util';
import { SheetInterceptorService } from '../services/sheet-interceptor/sheet-interceptor.service';
export interface IRangeThemeRangeInfo {
    range: IRange;
    unitId: string;
    subUnitId: string;
}
export interface IRangeThemeStyleRule {
    rangeInfo: IRangeThemeRangeInfo;
    themeName: string;
}
interface ISheetRangeThemeModelJSON {
    rangeThemeStyleRuleMap: Record<string, IRangeThemeStyleRule>;
    rangeThemeStyleMapJson: Record<string, IRangeThemeStyleJSON>;
}
export declare class SheetRangeThemeModel extends Disposable {
    private _sheetInterceptorService;
    private _resourceManagerService;
    private readonly _univerInstanceService;
    private _rangeThemeStyleMap;
    private _rangeThemeStyleRuleMap;
    private _rTreeCollection;
    private _defaultRangeThemeMap;
    /**
     * This map is used to cache zebra crossing toggle ranges for each unitId and subUnitId, IRangeThemeStyleRule id
     */
    private _zebraCrossingCacheMap;
    private _rowVisibleFuncSet;
    private _rangeThemeMapChanged$;
    rangeThemeMapChange$: import('rxjs').Observable<{
        type: "add" | "remove";
        styleName: string;
    }>;
    constructor(_sheetInterceptorService: SheetInterceptorService, _resourceManagerService: IResourceManagerService, _univerInstanceService: IUniverInstanceService);
    private _initDefaultTheme;
    private _ensureRangeThemeStyleMap;
    private _ensureRangeThemeStyleRuleMap;
    private _ensureRTreeCollection;
    getDefaultRangeThemeStyle(name: string): RangeThemeStyle;
    getCustomRangeThemeStyle(unitId: string, name: string): RangeThemeStyle | undefined;
    private _getSheetRowVisibleFuncSet;
    private _getSheetRowVisibleHasInit;
    refreshSheetRowVisibleFuncSet(unitId: string, subUnitId: string): void;
    private _ensureZebraCrossingCache;
    /**
     * Register range theme styles
     * @param {string} themeName
     * @param {IRangeThemeRangeInfo} rangeInfo
     */
    registerRangeThemeRule(themeName: string, rangeInfo: IRangeThemeRangeInfo): void;
    getRegisteredRangeThemeStyle(rangeInfo: IRangeThemeRangeInfo): string | undefined;
    refreshZebraCrossingCacheBySheet(unitId: string, subUnitId: string): void;
    removeRangeThemeRule(themeName: string, rangeInfo: IRangeThemeRangeInfo): void;
    registerDefaultRangeTheme(rangeThemeStyle: RangeThemeStyle): void;
    unRegisterDefaultRangeTheme(themeName: string): void;
    getRegisteredRangeThemes(): string[];
    /**
     * Register custom range theme style.
     * @param {string} unitId The unit id.
     * @param {RangeThemeStyle} rangeThemeStyle The range theme style.
     */
    registerRangeThemeStyle(unitId: string, rangeThemeStyle: RangeThemeStyle): void;
    /**
     *  Unregister custom range theme style.
     * @param {string} unitId The unit id.
     * @param {string} name The name of the range theme style.
     */
    unregisterRangeThemeStyle(unitId: string, name: string): void;
    /**
     * Gets all custom register themes
     * @param {string} unitId Which unit to register the range theme style.
     * @return {string[]} The array of all custom registered themes.
     */
    getALLRegisteredTheme(unitId: string): string[];
    getRangeThemeStyle(unitId: string, name: string): RangeThemeStyle;
    getCellStyle(unitId: string, subUnitId: string, row: number, col: number): Nullable<IRangeThemeStyleItem>;
    private _registerIntercept;
    toJson(unitId: string): string;
    fromJSON(unitId: string, json: ISheetRangeThemeModelJSON): void;
    deleteUnitId(unitId: string): void;
    private _initSnapshot;
    dispose(): void;
}
export {};
