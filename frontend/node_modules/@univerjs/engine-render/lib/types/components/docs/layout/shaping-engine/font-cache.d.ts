import { Nullable } from '@univerjs/core';
import { IDocumentSkeletonBoundingBox, IDocumentSkeletonFontStyle } from '../../../../basics/i-document-skeleton-cached';
import { IOpenTypeGlyphInfo } from './text-shaping';
export declare const DEFAULT_MEASURE_TEXT = "0";
export interface IMeasureTextCache {
    fontBoundingBoxAscent: number;
    fontBoundingBoxDescent: number;
    actualBoundingBoxAscent: number;
    actualBoundingBoxDescent: number;
    width: number;
}
export declare class FontCache {
    private static _getTextHeightCache;
    private static _context;
    private static _fontDataMap;
    private static _globalFontMeasureCache;
    static get globalFontMeasureCache(): Map<string, Map<string, IMeasureTextCache>>;
    static setFontMeasureCache(fontStyle: string, content: string, tm: IMeasureTextCache): void;
    static clearFontMeasureCache(path: string): boolean;
    static getFontMeasureCache(fontStyle: string, content: string): Nullable<IMeasureTextCache>;
    static autoCleanFontMeasureCache(cacheLimit?: number): boolean;
    static getBaselineOffsetInfo(fontFamily: string, fontSize: number): {
        sbr: number;
        sbo: number;
        spr: number;
        spo: number;
    };
    static getTextSizeByDom(text: string, fontStyle: string): {
        width: number;
        height: number;
    };
    static getTextSize(content: string, fontStyle: IDocumentSkeletonFontStyle): IDocumentSkeletonBoundingBox;
    static getBBoxFromGlyphInfo(glyphInfo: IOpenTypeGlyphInfo, fontStyle: IDocumentSkeletonFontStyle): {
        width: number;
        ba: number;
        bd: number;
        aba: number;
        abd: number;
        sp: number;
        sbr: number;
        spr: number;
        sbo: number;
        spo: number;
    };
    /**
     * Measure text on another canvas.
     * @param content
     * @param fontString
     * @returns IMeasureTextCache
     */
    static getMeasureText(content: string, fontString: string): IMeasureTextCache;
    private static _clearMeasureCache;
    /**
     * Vertical Metrics https://glyphsapp.com/learn/vertical-metrics
     * @param fontFamily
     * @param fontSize
     * @param content
     * @returns
     */
    private static _getBoundingBoxByFont;
    private static _calculateBoundingBoxByMeasureText;
}
