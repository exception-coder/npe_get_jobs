import { Nullable } from '@univerjs/core';
import { IDocumentSkeletonPage, IDocumentSkeletonTable } from '../../../../../basics/i-document-skeleton-cached';
import { ISectionBreakConfig } from '../../../../../basics/interfaces';
import { DataStreamTreeNode } from '../../../view-model/data-stream-tree-node';
import { DocumentViewModel } from '../../../view-model/document-view-model';
import { ILayoutContext } from '../../tools';
import { IShapedText } from './shaping';
export declare function lineBreaking(ctx: ILayoutContext, viewModel: DocumentViewModel, shapedTextList: IShapedText[], curPage: IDocumentSkeletonPage, paragraphNode: DataStreamTreeNode, sectionBreakConfig: ISectionBreakConfig, tableSkeleton: Nullable<IDocumentSkeletonTable>): IDocumentSkeletonPage[];
