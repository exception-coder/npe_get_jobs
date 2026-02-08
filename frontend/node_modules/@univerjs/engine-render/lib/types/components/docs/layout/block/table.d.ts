import { ITable, Nullable } from '@univerjs/core';
import { IDocumentSkeletonPage, IDocumentSkeletonTable, IParagraphList, ISectionBreakConfig } from '../../../../basics';
import { DataStreamTreeNode } from '../../view-model/data-stream-tree-node';
import { DocumentViewModel } from '../../view-model/document-view-model';
import { ILayoutContext } from '../tools';
export declare function createTableSkeleton(ctx: ILayoutContext, curPage: IDocumentSkeletonPage, viewModel: DocumentViewModel, tableNode: DataStreamTreeNode, sectionBreakConfig: ISectionBreakConfig): Nullable<IDocumentSkeletonTable>;
export declare function rollbackListCache(listLevel: Map<string, IParagraphList[][]>, table: DataStreamTreeNode): void;
export interface ISlicedTableSkeletonParams {
    skeTables: IDocumentSkeletonTable[];
    fromCurrentPage: boolean;
}
export declare function createTableSkeletons(ctx: ILayoutContext, curPage: IDocumentSkeletonPage, viewModel: DocumentViewModel, tableNode: DataStreamTreeNode, sectionBreakConfig: ISectionBreakConfig, availableHeight: number): ISlicedTableSkeletonParams;
export declare function getNullTableSkeleton(st: number, ed: number, table: ITable): IDocumentSkeletonTable;
export declare function getTableSliceId(tableId: string, sliceIndex: number): string;
export declare function getTableIdAndSliceIndex(tableSliceId: string): {
    tableId: string;
    sliceIndex: number;
};
