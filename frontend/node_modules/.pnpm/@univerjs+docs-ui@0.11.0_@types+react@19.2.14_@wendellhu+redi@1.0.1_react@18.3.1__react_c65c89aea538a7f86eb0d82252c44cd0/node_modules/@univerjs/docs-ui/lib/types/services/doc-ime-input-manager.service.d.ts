import { DocumentDataModel, Nullable, RxDisposable } from '@univerjs/core';
import { IRichTextEditingMutationParams } from '@univerjs/docs';
import { IRenderContext, IRenderModule, ITextRangeWithStyle } from '@univerjs/engine-render';
interface ICacheParams {
    undoCache: IRichTextEditingMutationParams[];
    redoCache: IRichTextEditingMutationParams[];
}
export declare class DocIMEInputManagerService extends RxDisposable implements IRenderModule {
    private readonly _context;
    private _previousActiveRange;
    private _undoMutationParamsCache;
    private _redoMutationParamsCache;
    constructor(_context: IRenderContext<DocumentDataModel>);
    clearUndoRedoMutationParamsCache(): void;
    getUndoRedoMutationParamsCache(): {
        undoCache: IRichTextEditingMutationParams[];
        redoCache: IRichTextEditingMutationParams[];
    };
    setUndoRedoMutationParamsCache({ undoCache, redoCache }: ICacheParams): void;
    getActiveRange(): Nullable<ITextRangeWithStyle>;
    setActiveRange(range: Nullable<ITextRangeWithStyle>): void;
    pushUndoRedoMutationParams(undoParams: IRichTextEditingMutationParams, redoParams: IRichTextEditingMutationParams): void;
    fetchComposedUndoRedoMutationParams(): {
        redoMutationParams: IRichTextEditingMutationParams;
        undoMutationParams: IRichTextEditingMutationParams;
        previousActiveRange: ITextRangeWithStyle;
    } | null;
    dispose(): void;
}
export {};
