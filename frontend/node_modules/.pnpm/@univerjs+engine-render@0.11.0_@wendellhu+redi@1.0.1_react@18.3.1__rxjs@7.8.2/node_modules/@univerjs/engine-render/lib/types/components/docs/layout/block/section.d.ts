import { Nullable } from '@univerjs/core';
import { IDocumentSkeletonPage } from '../../../../basics/i-document-skeleton-cached';
import { ISectionBreakConfig } from '../../../../basics/interfaces';
import { DataStreamTreeNode } from '../../view-model/data-stream-tree-node';
import { DocumentViewModel } from '../../view-model/document-view-model';
import { ILayoutContext } from '../tools';
export declare function dealWithSection(ctx: ILayoutContext, viewModel: DocumentViewModel, sectionNode: DataStreamTreeNode, curPage: IDocumentSkeletonPage, sectionBreakConfig: ISectionBreakConfig, layoutAnchor: Nullable<number>): {
    pages: IDocumentSkeletonPage[];
    renderedBlockIdMap: Map<string, boolean>;
};
