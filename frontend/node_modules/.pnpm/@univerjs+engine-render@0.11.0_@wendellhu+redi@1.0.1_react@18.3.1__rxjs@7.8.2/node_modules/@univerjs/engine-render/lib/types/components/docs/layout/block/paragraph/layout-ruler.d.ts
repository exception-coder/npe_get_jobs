import { IDocumentSkeletonDrawing, IDocumentSkeletonGlyph, IDocumentSkeletonLine, IDocumentSkeletonPage } from '../../../../../basics/i-document-skeleton-cached';
import { IParagraphConfig, ISectionBreakConfig } from '../../../../../basics/interfaces';
import { ILayoutContext } from '../../tools';
import { BreakPointType } from '../../line-breaker/break';
export declare function layoutParagraph(ctx: ILayoutContext, glyphGroup: IDocumentSkeletonGlyph[], pages: IDocumentSkeletonPage[], sectionBreakConfig: ISectionBreakConfig, paragraphConfig: IParagraphConfig, isParagraphFirstShapedText: boolean, breakPointType?: BreakPointType): IDocumentSkeletonPage[];
export declare function updateInlineDrawingPosition(line: IDocumentSkeletonLine, paragraphInlineSkeDrawings?: Map<string, IDocumentSkeletonDrawing>, blockAnchorTop?: number): void;
