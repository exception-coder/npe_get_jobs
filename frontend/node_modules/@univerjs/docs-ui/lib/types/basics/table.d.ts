import { Nullable } from '@univerjs/core';
import { IDocumentSkeletonLine, IDocumentSkeletonPage, IDocumentSkeletonTable } from '@univerjs/engine-render';
export declare function firstLineInTable(table: IDocumentSkeletonTable): IDocumentSkeletonLine;
export declare function lastLineInTable(table: IDocumentSkeletonTable): IDocumentSkeletonLine | undefined;
export declare function findTableAfterLine(line: IDocumentSkeletonLine, page: IDocumentSkeletonPage): IDocumentSkeletonTable | null;
export declare function findLineBeforeAndAfterTable(table: Nullable<IDocumentSkeletonTable>): {
    lineBeforeTable: null;
    lineAfterTable: null;
};
export declare function findBellowCell(cell: IDocumentSkeletonPage): Nullable<IDocumentSkeletonPage>;
export declare function findAboveCell(cell: IDocumentSkeletonPage): Nullable<IDocumentSkeletonPage>;
export declare function findTableBeforeLine(line: IDocumentSkeletonLine, page: IDocumentSkeletonPage): IDocumentSkeletonTable | null;
export declare function firstLineInCell(cell: IDocumentSkeletonPage): IDocumentSkeletonLine;
export declare function lastLineInCell(cell: IDocumentSkeletonPage): IDocumentSkeletonLine;
export declare function isFirstLineInCell(line: IDocumentSkeletonLine, cell: IDocumentSkeletonPage): boolean;
export declare function isLastLineInCell(line: IDocumentSkeletonLine, cell: IDocumentSkeletonPage): boolean;
