import { ICommand, IDocumentBody, IDocumentData, ITextRange } from '@univerjs/core';
import { ITextRangeWithStyle } from '@univerjs/engine-render';
export interface IReplaceSnapshotCommandParams {
    unitId: string;
    snapshot: IDocumentData;
    textRanges: ITextRangeWithStyle[];
    segmentId?: string;
    options: {
        [key: string]: boolean;
    };
}
export declare const ReplaceSnapshotCommand: ICommand<IReplaceSnapshotCommandParams>;
interface IReplaceContentCommandParams {
    unitId: string;
    body: IDocumentBody;
    textRanges: ITextRangeWithStyle[];
    segmentId?: string;
    options: {
        [key: string]: boolean;
    };
}
/**
 * @deprecated please use ReplaceSnapshotCommand instead.
 */
export declare const ReplaceContentCommand: ICommand<IReplaceContentCommandParams>;
interface ICoverContentCommandParams {
    unitId: string;
    body: IDocumentBody;
    segmentId?: string;
    textRanges?: ITextRangeWithStyle[];
}
export declare const CoverContentCommand: ICommand<ICoverContentCommandParams>;
export interface IReplaceSelectionCommandParams {
    unitId: string;
    selection?: ITextRange;
    body: IDocumentBody;
    textRanges?: ITextRangeWithStyle[];
}
export declare const ReplaceSelectionCommand: ICommand<IReplaceSelectionCommandParams>;
export declare const ReplaceTextRunsCommand: ICommand<IReplaceContentCommandParams>;
export {};
