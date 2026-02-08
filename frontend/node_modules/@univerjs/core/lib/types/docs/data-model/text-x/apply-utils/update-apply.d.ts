import { IDocumentBody, ITextRun } from '../../../../types/interfaces';
import { UpdateDocsAttributeType } from '../../../../shared';
export declare function updateAttribute(body: IDocumentBody, updateBody: IDocumentBody, textLength: number, currentIndex: number, coverType: UpdateDocsAttributeType): IDocumentBody;
export declare function coverTextRuns(updateDataTextRuns: ITextRun[], originTextRuns: ITextRun[], coverType: UpdateDocsAttributeType): ITextRun[];
