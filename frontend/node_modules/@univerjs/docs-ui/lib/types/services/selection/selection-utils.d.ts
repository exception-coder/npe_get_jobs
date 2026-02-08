import { Nullable } from '@univerjs/core';
import { Documents, DocumentSkeleton, Engine, IDocumentSkeletonGlyph, INodePosition, IRectRangeWithStyle, ITextRangeWithStyle, ITextSelectionStyle, Scene } from '@univerjs/engine-render';
import { IDocRange } from './range-interface';
import { RectRange } from './rect-range';
import { TextRange } from './text-range';
interface IDocRangeList {
    textRanges: TextRange[];
    rectRanges: RectRange[];
}
export declare function getTextRangeFromCharIndex(startOffset: number, endOffset: number, scene: Scene, document: Documents, skeleton: DocumentSkeleton, style: ITextSelectionStyle, segmentId: string, segmentPage: number, startIsBack?: boolean, endIsBack?: boolean): Nullable<TextRange>;
export declare function getRectRangeFromCharIndex(startOffset: number, endOffset: number, scene: Scene, document: Documents, skeleton: DocumentSkeleton, style: ITextSelectionStyle, segmentId: string, segmentPage: number): Nullable<RectRange>;
export declare function getRangeListFromCharIndex(startOffset: number, endOffset: number, scene: Scene, document: Documents, skeleton: DocumentSkeleton, style: ITextSelectionStyle, segmentId: string, segmentPage: number): Nullable<IDocRangeList>;
export declare function getRangeListFromSelection(anchorPosition: INodePosition, focusPosition: INodePosition, scene: Scene, document: Documents, skeleton: DocumentSkeleton, style: ITextSelectionStyle, segmentId: string, segmentPage: number): Nullable<IDocRangeList>;
export declare function getCanvasOffsetByEngine(engine: Nullable<Engine>): {
    left: number;
    top: number;
};
export declare function getParagraphInfoByGlyph(node: IDocumentSkeletonGlyph): {
    st: number;
    ed: number;
    content: string;
    nodeIndex: number;
} | undefined;
export declare function serializeTextRange(textRange: IDocRange): ITextRangeWithStyle;
export declare function serializeRectRange(rectRange: RectRange): IRectRangeWithStyle;
export {};
