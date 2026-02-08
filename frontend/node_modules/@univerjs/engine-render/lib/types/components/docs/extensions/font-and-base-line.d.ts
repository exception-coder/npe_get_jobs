import { IScale } from '@univerjs/core';
import { IBoundRectNoAngle } from '../../../basics';
import { IDocumentSkeletonGlyph } from '../../../basics/i-document-skeleton-cached';
import { UniverRenderingContext } from '../../../context';
import { IDrawInfo } from '../../extension';
import { docExtension } from '../doc-extension';
/**
 * Singleton
 */
export declare class FontAndBaseLine extends docExtension {
    uKey: string;
    Z_INDEX: number;
    private _preFontColor;
    /**
     * ctx.font = val;  then ctx.font is not exactly the same as val
     * that is because canvas would normalize the font string, remove default value and convert pt to px.
     * so we need a map to store actual value and set value
     */
    actualFontMap: Record<string, string>;
    constructor();
    draw(ctx: UniverRenderingContext, _parentScale: IScale, glyph: IDocumentSkeletonGlyph, _?: IBoundRectNoAngle, more?: IDrawInfo): void;
    private _fillText;
    clearCache(): void;
}
