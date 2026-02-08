import { ICustomDecoration, ICustomRange, ICustomTable, IDocumentBody, IParagraph, ITextRun, ITextStyle, Nullable } from '@univerjs/core';
export declare function hasParagraphInTable(paragraph: IParagraph, tables: ICustomTable[]): boolean;
export declare function getTextRunAtPosition(body: IDocumentBody, position: number, defaultStyle: ITextStyle, cacheStyle: Nullable<ITextStyle>, isCellEditor?: boolean): ITextRun;
export declare function getCustomRangeAtPosition(customRanges: ICustomRange[], position: number, extendRange?: boolean): ICustomRange<Record<string, any>> | null | undefined;
export declare function getCustomDecorationAtPosition(customDecorations: ICustomDecoration[], position: number): ICustomDecoration[];
