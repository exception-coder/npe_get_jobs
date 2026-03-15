import { IScale } from '@univerjs/core';
import { IDocumentSkeletonGlyph } from '../../../basics/i-document-skeleton-cached';
import { UniverRenderingContext } from '../../../context';
import { docExtension } from '../doc-extension';
export declare class Line extends docExtension {
    uKey: string;
    Z_INDEX: number;
    private _preBackgroundColor;
    draw(ctx: UniverRenderingContext, parentScale: IScale, glyph: IDocumentSkeletonGlyph): void;
    clearCache(): void;
    private _drawLine;
    private _drawLineTo;
    private _setLineType;
    private _isWave;
    private _isDouble;
}
