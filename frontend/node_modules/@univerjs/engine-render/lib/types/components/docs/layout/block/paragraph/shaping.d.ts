import { IDocumentSkeletonGlyph } from '../../../../../basics/i-document-skeleton-cached';
import { ISectionBreakConfig } from '../../../../../basics/interfaces';
import { DataStreamTreeNode } from '../../../view-model/data-stream-tree-node';
import { DocumentViewModel } from '../../../view-model/document-view-model';
import { ILayoutContext } from '../../tools';
import { BreakPointType } from '../../line-breaker/break';
export interface IShapedText {
    text: string;
    glyphs: IDocumentSkeletonGlyph[];
    breakPointType: BreakPointType;
}
export declare function shaping(ctx: ILayoutContext, content: string, viewModel: DocumentViewModel, paragraphNode: DataStreamTreeNode, sectionBreakConfig: ISectionBreakConfig, useOpenType?: boolean): IShapedText[];
