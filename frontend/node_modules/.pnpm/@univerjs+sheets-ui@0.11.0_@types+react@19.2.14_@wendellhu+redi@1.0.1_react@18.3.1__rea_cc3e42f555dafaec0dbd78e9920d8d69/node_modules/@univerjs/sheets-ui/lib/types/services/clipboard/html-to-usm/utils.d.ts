import { IParagraph, IParagraphStyle, ITextRun, Nullable } from '@univerjs/core';
import { ICellDataWithSpanInfo } from '../type';
export default function parseToDom(rawHtml: string): HTMLBodyElement;
export declare function getParagraphStyle(el: HTMLElement): Nullable<IParagraphStyle>;
export declare function generateParagraphs(dataStream: string, prevParagraph?: IParagraph): IParagraph[];
export declare function convertToCellStyle(cell: ICellDataWithSpanInfo, dataStream: string, textRuns: ITextRun[] | undefined): ICellDataWithSpanInfo | {
    s: import('@univerjs/core').ITextStyle | undefined;
    p?: Nullable<import('@univerjs/core').IDocumentData>;
    v?: Nullable<import('@univerjs/core').CellValue>;
    t?: Nullable<import('@univerjs/core').CellValueType>;
    f?: Nullable<string>;
    ref?: Nullable<string>;
    si?: Nullable<string>;
    custom?: import('@univerjs/core').CustomData;
    rowSpan?: number;
    colSpan?: number;
    plain?: string;
};
