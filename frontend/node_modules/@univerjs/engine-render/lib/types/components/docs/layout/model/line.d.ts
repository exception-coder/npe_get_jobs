import { Nullable } from '@univerjs/core';
import { IParagraphConfig } from '../../../../basics';
import { IDocumentSkeletonDivide, IDocumentSkeletonDrawingAnchor, IDocumentSkeletonLine, IDocumentSkeletonPage, LineType } from '../../../../basics/i-document-skeleton-cached';
import { IFloatObject } from '../tools';
interface ILineBoundingBox {
    lineHeight: number;
    lineTop: number;
    contentHeight: number;
    paddingLeft?: number;
    paddingRight?: number;
    paddingTop?: number;
    paddingBottom?: number;
    marginTop?: number;
    spaceBelowApply?: number;
}
export declare function createSkeletonLine(paragraphIndex: number, lineType: LineType, lineBoundingBox: ILineBoundingBox, columnWidth: number, lineIndex: number | undefined, isParagraphStart: boolean | undefined, paragraphConfig: IParagraphConfig, page: IDocumentSkeletonPage, headerPage: Nullable<IDocumentSkeletonPage>, footerPage: Nullable<IDocumentSkeletonPage>): IDocumentSkeletonLine;
export declare function calculateLineTopByDrawings(lineHeight: number | undefined, lineTop: number | undefined, page: IDocumentSkeletonPage, headerPage: Nullable<IDocumentSkeletonPage>, footerPage: Nullable<IDocumentSkeletonPage>): number;
export declare function updateDivideInfo(divide: IDocumentSkeletonDivide, states: Partial<IDocumentSkeletonDivide>): void;
export declare function setLineMarginBottom(line: IDocumentSkeletonLine, marginBottom: number): void;
export declare function collisionDetection(floatObject: IFloatObject, lineHeight: number, lineTop: number, columnLeft: number, columnWidth: number): boolean;
export declare function getBoundingBox(angle: number, left: number, width: number, top: number, height: number): import('../../../..').IRect;
export declare function createAndUpdateBlockAnchor(paragraphIndex: number, line: IDocumentSkeletonLine, top: number, drawingAnchor?: Map<number, IDocumentSkeletonDrawingAnchor>): void;
export {};
