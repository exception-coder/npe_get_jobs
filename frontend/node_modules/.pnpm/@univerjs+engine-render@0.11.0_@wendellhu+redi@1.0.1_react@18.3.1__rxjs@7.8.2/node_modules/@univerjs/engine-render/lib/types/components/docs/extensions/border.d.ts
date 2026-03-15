import { IScale } from '@univerjs/core';
import { IDocumentSkeletonGlyph } from '../../../basics/i-document-skeleton-cached';
import { UniverRenderingContext } from '../../../context';
import { docExtension } from '../doc-extension';
export declare class Border extends docExtension {
    uKey: string;
    Z_INDEX: number;
    private _preBorderStyle;
    private _preBorderColor;
    draw(ctx: UniverRenderingContext, parentScale: IScale, glyph: IDocumentSkeletonGlyph): void;
    clearCache(): void;
    private _createBorderCache;
}
