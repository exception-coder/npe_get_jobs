import { IDocumentBody, Nullable } from '@univerjs/core';
import { default as Opentype } from 'opentype.js';
interface IBoundingBox {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}
export interface IOpenTypeGlyphInfo {
    char: string;
    start: number;
    end: number;
    glyph: Nullable<Opentype.Glyph>;
    font: Nullable<Opentype.Font>;
    kerning: number;
    boundingBox: Nullable<IBoundingBox>;
}
export declare function textShape(body: IDocumentBody): IOpenTypeGlyphInfo[];
export {};
