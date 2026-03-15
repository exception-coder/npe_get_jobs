import { IDocumentSkeletonPage } from '../../../../../basics/i-document-skeleton-cached';
import { ISectionBreakConfig } from '../../../../../basics/interfaces';
import { DataStreamTreeNode } from '../../../view-model/data-stream-tree-node';
import { DocumentViewModel } from '../../../view-model/document-view-model';
import { ILayoutContext } from '../../tools';
export declare function dealWidthParagraph(ctx: ILayoutContext, viewModel: DocumentViewModel, paragraphNode: DataStreamTreeNode, curPage: IDocumentSkeletonPage, sectionBreakConfig: ISectionBreakConfig): IDocumentSkeletonPage[];
