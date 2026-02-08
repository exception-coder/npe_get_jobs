import { ITextRange, ITextRangeParam } from '../../../../sheets/typedef';
import { IDocumentBody } from '../../../../types/interfaces';
import { DocumentDataModel } from '../../document-data-model';
import { JSONXActions } from '../../json-x/json-x';
export interface IAddDrawingParam {
    selection: ITextRangeParam;
    documentDataModel: DocumentDataModel;
    drawings: any[];
}
export declare function getCustomBlockIdsInSelections(body: IDocumentBody, selections: ITextRange[]): string[];
export declare function getRichTextEditPath(docDataModel: DocumentDataModel, segmentId?: string): string[];
export declare const addDrawing: (param: IAddDrawingParam) => false | JSONXActions;
