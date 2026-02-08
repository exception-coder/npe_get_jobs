import { ICustomBlock, ICustomDecoration, ICustomRange, ICustomTable, IDocumentBody, IParagraph, ISectionBreak, ITextRun } from '../../../../types/interfaces';
export declare function normalizeTextRuns(textRuns: ITextRun[], reserveEmptyTextRun?: boolean): ITextRun[];
/**
 * Inserting styled text content into the current document model.
 * @param body The current content object of the document model.
 * @param insertBody The newly added content object that includes complete text and textRun style information.
 * @param textLength The length of the inserted content text.
 * @param currentIndex Determining the index where the content will be inserted into the current content.
 */
export declare function insertTextRuns(body: IDocumentBody, insertBody: IDocumentBody, textLength: number, currentIndex: number): void;
/**
 * Based on the insertBody parameter, which includes a paragraph object,
 * you can add and adjust the position of paragraphs.
 * @param body The current content object of the document model.
 * @param insertBody The newly added content object that includes paragraph information.
 * @param textLength The length of the inserted content text.
 * @param currentIndex Determining the index where the content will be inserted into the current content.
 */
export declare function insertParagraphs(body: IDocumentBody, insertBody: IDocumentBody, textLength: number, currentIndex: number): void;
export declare function insertSectionBreaks(body: IDocumentBody, insertBody: IDocumentBody, textLength: number, currentIndex: number): void;
export declare function insertCustomBlocks(body: IDocumentBody, insertBody: IDocumentBody, textLength: number, currentIndex: number): void;
export declare function insertTables(body: IDocumentBody, insertBody: IDocumentBody, textLength: number, currentIndex: number): void;
export declare function sliceByParagraph(body: IDocumentBody): IDocumentBody[];
export declare function mergeContinuousRanges(ranges: ICustomRange[]): ICustomRange[];
export declare function splitCustomRangesByIndex(customRanges: ICustomRange[], currentIndex: number): void;
export declare function mergeContinuousDecorations(ranges: ICustomDecoration[]): ICustomDecoration[];
export declare function splitCustomDecoratesByIndex(customDecorations: ICustomDecoration[], currentIndex: number): void;
export declare function insertCustomRanges(body: IDocumentBody, insertBody: IDocumentBody, textLength: number, currentIndex: number): void;
export declare function mergeDecorations(customDecorations: ICustomDecoration[]): ICustomDecoration[];
export declare function insertCustomDecorations(body: IDocumentBody, insertBody: IDocumentBody, textLength: number, currentIndex: number): void;
export declare function deleteTextRuns(body: IDocumentBody, textLength: number, currentIndex: number): ITextRun[];
export declare function deleteParagraphs(body: IDocumentBody, textLength: number, currentIndex: number): IParagraph[];
export declare function deleteSectionBreaks(body: IDocumentBody, textLength: number, currentIndex: number): ISectionBreak[];
export declare function deleteCustomBlocks(body: IDocumentBody, textLength: number, currentIndex: number): ICustomBlock[];
export declare function deleteTables(body: IDocumentBody, textLength: number, currentIndex: number): ICustomTable[];
export declare function deleteCustomRanges(body: IDocumentBody, textLength: number, currentIndex: number): ICustomRange<Record<string, any>>[];
export declare function deleteCustomDecorations(body: IDocumentBody, textLength: number, currentIndex: number, needOffset?: boolean): ICustomDecoration[];
