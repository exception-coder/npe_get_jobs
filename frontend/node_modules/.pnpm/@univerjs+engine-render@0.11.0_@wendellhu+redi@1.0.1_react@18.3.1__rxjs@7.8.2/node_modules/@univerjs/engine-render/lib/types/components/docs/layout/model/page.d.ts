import { ITable } from '@univerjs/core';
import { IDocumentSkeletonPage, ISkeletonResourceReference, BreakType } from '../../../../basics/i-document-skeleton-cached';
import { ISectionBreakConfig } from '../../../../basics/interfaces';
import { DataStreamTreeNode } from '../../view-model/data-stream-tree-node';
import { DocumentViewModel } from '../../view-model/document-view-model';
import { ILayoutContext } from '../tools';
export declare function createSkeletonPage(ctx: ILayoutContext, sectionBreakConfig: ISectionBreakConfig, skeletonResourceReference: ISkeletonResourceReference, pageNumber?: number, breakType?: BreakType): IDocumentSkeletonPage;
export declare function createNullCellPage(ctx: ILayoutContext, sectionBreakConfig: ISectionBreakConfig, tableConfig: ITable, row: number, col: number, availableHeight?: number, maxCellPageHeight?: number): {
    page: IDocumentSkeletonPage;
    sectionBreakConfig: ISectionBreakConfig;
};
export declare function createSkeletonCellPages(ctx: ILayoutContext, viewModel: DocumentViewModel, cellNode: DataStreamTreeNode, sectionBreakConfig: ISectionBreakConfig, tableConfig: ITable, row: number, col: number, availableHeight?: number, maxCellPageHeight?: number): IDocumentSkeletonPage[];
