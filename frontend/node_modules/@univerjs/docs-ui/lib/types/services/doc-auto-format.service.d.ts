import { DocumentDataModel, ICommandInfo, ICustomRange, IDisposable, IParagraphRange, Nullable, Disposable, IUniverInstanceService } from '@univerjs/core';
import { ITextRangeWithStyle } from '@univerjs/engine-render';
import { DocSelectionManagerService } from '@univerjs/docs';
export interface IAutoFormatContext {
    unit: DocumentDataModel;
    selection: ITextRangeWithStyle;
    /**
     * is selection at doc body
     */
    isBody: boolean;
    /**
     * selection relative paragraphs
     */
    paragraphs: IParagraphRange[];
    /**
     * selection relative custom ranges
     */
    customRanges: ICustomRange[];
    commandId: string;
    commandParams: Nullable<object>;
}
export interface IAutoFormat {
    id: string;
    match: (context: IAutoFormatContext) => boolean;
    getMutations: (context: IAutoFormatContext) => ICommandInfo[];
    priority?: number;
}
/**
 * service for auto-formatting, handle shortcut like `Space` or `Tab`.
 */
export declare class DocAutoFormatService extends Disposable {
    private readonly _univerInstanceService;
    private readonly _textSelectionManagerService;
    private _matches;
    constructor(_univerInstanceService: IUniverInstanceService, _textSelectionManagerService: DocSelectionManagerService);
    registerAutoFormat(match: IAutoFormat): IDisposable;
    onAutoFormat(id: string, params: Nullable<object>): ICommandInfo[];
}
