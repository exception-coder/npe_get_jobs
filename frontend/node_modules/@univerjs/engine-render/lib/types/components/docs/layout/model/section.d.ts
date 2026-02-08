import { ISectionColumnProperties, ColumnSeparatorType } from '@univerjs/core';
import { IDocumentSkeletonColumn, IDocumentSkeletonSection } from '../../../../basics/i-document-skeleton-cached';
export declare function createSkeletonSection(columnProperties?: ISectionColumnProperties[], columnSeparatorType?: ColumnSeparatorType, top?: number, left?: number, sectionWidth?: number, sectionHeight?: number): IDocumentSkeletonSection;
export declare function setColumnFullState(column: IDocumentSkeletonColumn, state: boolean): void;
