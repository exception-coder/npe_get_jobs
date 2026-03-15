import { ICustomDecoration, IDocumentBody, ITextRun } from '../../../types/interfaces/i-document-data';
import { IRetainAction } from './action-types';
import { UpdateDocsAttributeType } from '../../../shared/command-enum';
export declare enum SliceBodyType {
    copy = 0,
    cut = 1
}
export declare function getTextRunSlice(body: IDocumentBody, startOffset: number, endOffset: number, returnEmptyTextRuns?: boolean): ITextRun[] | undefined;
export declare function getTableSlice(body: IDocumentBody, startOffset: number, endOffset: number): {
    startIndex: number;
    endIndex: number;
    tableId: string;
}[];
export declare function getParagraphsSlice(body: IDocumentBody, startOffset: number, endOffset: number): {
    startIndex: number;
    paragraphStyle?: import('../../..').IParagraphStyle;
    bullet?: import('../../..').IBullet;
}[] | undefined;
export declare function getSectionBreakSlice(body: IDocumentBody, startOffset: number, endOffset: number): {
    startIndex: number;
    pageNumberStart?: number;
    pageSize?: import('../../..').ISize;
    pageOrient?: import('../../..').PageOrientType;
    documentFlavor?: import('../../..').DocumentFlavor;
    marginHeader?: number;
    marginFooter?: number;
    renderConfig?: import('../../..').IDocumentRenderConfig;
    marginTop?: number;
    marginBottom?: number;
    marginRight?: number;
    marginLeft?: number;
    charSpace?: number;
    linePitch?: number;
    gridType?: import('../../..').GridType;
    columnProperties?: import('../../..').ISectionColumnProperties[];
    columnSeparatorType?: import('../../..').ColumnSeparatorType;
    contentDirection?: import('../../..').TextDirection;
    sectionType?: import('../../..').SectionType;
    sectionTypeNext?: import('../../..').SectionType;
    textDirection?: import('../../..').TextDirectionType;
    defaultHeaderId?: string;
    defaultFooterId?: string;
    evenPageHeaderId?: string;
    evenPageFooterId?: string;
    firstPageHeaderId?: string;
    firstPageFooterId?: string;
    useFirstPageHeaderFooter?: import('../../..').BooleanNumber;
    evenAndOddHeaders?: import('../../..').BooleanNumber;
}[] | undefined;
export declare function getCustomBlockSlice(body: IDocumentBody, startOffset: number, endOffset: number): {
    startIndex: number;
    blockType?: import('../../..').BlockType;
    blockId: string;
}[] | undefined;
export declare function getBodySlice(body: IDocumentBody, startOffset: number, endOffset: number, returnEmptyArray?: boolean, type?: SliceBodyType): IDocumentBody;
export declare function normalizeBody(body: IDocumentBody): IDocumentBody;
export declare function getCustomRangeSlice(body: IDocumentBody, startOffset: number, endOffset: number): {
    customRanges?: undefined;
    leftOffset?: undefined;
    rightOffset?: undefined;
} | {
    customRanges: {
        startIndex: number;
        endIndex: number;
        rangeId: string;
        rangeType: import('../../..').CustomRangeType | number;
        wholeEntity?: boolean;
        properties?: Record<string, any> | undefined;
    }[];
    leftOffset: number;
    rightOffset: number;
};
export declare function getCustomDecorationSlice(body: IDocumentBody, startOffset: number, endOffset: number): ICustomDecoration[] | undefined;
export declare function composeBody(thisBody: IDocumentBody, otherBody: IDocumentBody, coverType?: UpdateDocsAttributeType): IDocumentBody;
export declare function isUselessRetainAction(action: IRetainAction): boolean;
