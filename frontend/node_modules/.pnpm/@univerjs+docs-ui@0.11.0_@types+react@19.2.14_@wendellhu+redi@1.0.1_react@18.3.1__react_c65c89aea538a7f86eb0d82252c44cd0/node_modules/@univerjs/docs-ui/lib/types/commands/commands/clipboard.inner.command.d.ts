import { DocumentDataModel, ICommand, IDocumentBody, IDocumentData, ITextRange, JSONXActions, Nullable } from '@univerjs/core';
import { DocumentViewModel, IRectRangeWithStyle, ITextRangeWithStyle } from '@univerjs/engine-render';
export declare function getCustomBlockIdsInSelections(body: IDocumentBody, selections: ITextRange[]): string[];
export interface IInnerPasteCommandParams {
    segmentId: string;
    doc: Partial<IDocumentData>;
    textRanges: ITextRangeWithStyle[];
}
export declare const InnerPasteCommand: ICommand<IInnerPasteCommandParams>;
export declare function getCutActionsFromDocRanges(textRanges: Readonly<Nullable<ITextRangeWithStyle[]>>, rectRanges: Readonly<Nullable<IRectRangeWithStyle[]>>, docDataModel: DocumentDataModel, viewModel: DocumentViewModel, segmentId: string): JSONXActions;
export interface IInnerCutCommandParams {
    segmentId: string;
    textRanges: ITextRangeWithStyle[];
    selections?: ITextRange[];
    rectRanges?: IRectRangeWithStyle[];
}
export declare const CutContentCommand: ICommand<IInnerCutCommandParams>;
