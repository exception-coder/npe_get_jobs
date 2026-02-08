import { IDocumentData, IRange, IStyleData } from '@univerjs/core';
/**
 * The entire list of DOM spans is parsed into a rich-text JSON style sheet
 * @param $dom
 * @returns
 */
export declare function handleDomToJson($dom: HTMLElement): IDocumentData | string;
/**
 * A single span parses out the ITextStyle style sheet
 * @param $dom
 * @returns
 */
export declare function handleStringToStyle($dom?: HTMLElement, cssStyle?: string): IStyleData & Record<string, unknown>;
/**
 * split span text
 * @param text
 * @returns
 */
export declare function splitSpanText(text: string): string[];
export declare function handleTableColgroup(table: string): any[];
export declare function handleTableRowGroup(table: string): any[];
export declare function handelTableToJson(table: string): any[];
export declare function handlePlainToJson(plain: string): any[];
export declare function handleTableMergeData(data: any[], selection?: IRange): {
    data: any[];
    mergeData: {
        startRow: any;
        endRow: any;
        startColumn: any;
        endColumn: any;
    }[];
};
export declare function handelExcelToJson(html: string): any[] | undefined;
