import { IDocumentBody, Nullable } from '@univerjs/core';
import { IDocumentSkeletonGlyph } from './i-document-skeleton-cached';
export declare function hasListGlyph(glyph: Nullable<IDocumentSkeletonGlyph>): boolean;
export declare function isIndentByGlyph(glyph: Nullable<IDocumentSkeletonGlyph>, body?: IDocumentBody): boolean;
export declare function isLastGlyph(glyph: Nullable<IDocumentSkeletonGlyph>): boolean;
export declare function isFirstGlyph(glyph: Nullable<IDocumentSkeletonGlyph>): boolean;
export declare function getParagraphByGlyph(glyph: Nullable<IDocumentSkeletonGlyph>, body?: IDocumentBody): {
    paragraphStart: number;
    paragraphEnd: number;
    startIndex: number;
    paragraphStyle?: import('@univerjs/core').IParagraphStyle;
    bullet?: import('@univerjs/core').IBullet;
} | undefined;
export declare function isPlaceholderOrSpace(glyph: Nullable<IDocumentSkeletonGlyph>): boolean;
export declare function isSameLine(glyph1: Nullable<IDocumentSkeletonGlyph>, glyph2: Nullable<IDocumentSkeletonGlyph>): boolean;
