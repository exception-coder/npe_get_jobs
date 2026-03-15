import { IDisposable, IDocumentBody, Disposable, ICommandService, ILogService, IUniverInstanceService, SliceBodyType } from '@univerjs/core';
import { ITextRangeWithStyle } from '@univerjs/engine-render';
import { DocSelectionManagerService } from '@univerjs/docs';
import { ImageSourceType } from '@univerjs/drawing';
import { IClipboardInterfaceService } from '@univerjs/ui';
export interface IClipboardPropertyItem {
}
export interface IDocClipboardHook {
    onCopyProperty?(start: number, end: number): IClipboardPropertyItem;
    onCopyContent?(start: number, end: number): string;
    onBeforePaste?: (body: IDocumentBody) => IDocumentBody;
    onBeforePasteImage?: (file: File) => Promise<{
        source: string;
        imageSourceType: ImageSourceType;
    } | null>;
}
export interface IDocClipboardService {
    copy(sliceType?: SliceBodyType, ranges?: ITextRangeWithStyle[]): Promise<boolean>;
    cut(ranges?: ITextRangeWithStyle[]): Promise<boolean>;
    paste(items: ClipboardItem[]): Promise<boolean>;
    legacyPaste(options: {
        html?: string;
        text?: string;
        files: File[];
    }): Promise<boolean>;
    addClipboardHook(hook: IDocClipboardHook): IDisposable;
}
export declare const IDocClipboardService: import('@wendellhu/redi').IdentifierDecorator<IDocClipboardService>;
export declare class DocClipboardService extends Disposable implements IDocClipboardService {
    private readonly _univerInstanceService;
    private readonly _logService;
    private readonly _commandService;
    private readonly _clipboardInterfaceService;
    private readonly _docSelectionManagerService;
    private _clipboardHooks;
    private _htmlToUDM;
    private _umdToHtml;
    constructor(_univerInstanceService: IUniverInstanceService, _logService: ILogService, _commandService: ICommandService, _clipboardInterfaceService: IClipboardInterfaceService, _docSelectionManagerService: DocSelectionManagerService);
    copy(sliceType?: SliceBodyType, ranges?: ITextRangeWithStyle[]): Promise<boolean>;
    cut(ranges?: ITextRangeWithStyle[]): Promise<boolean>;
    paste(items: ClipboardItem[]): Promise<boolean>;
    legacyPaste(options: {
        html?: string;
        text?: string;
        files: File[];
    }): Promise<boolean>;
    private _cut;
    private _paste;
    private _setClipboardData;
    addClipboardHook(hook: IDocClipboardHook): IDisposable;
    private _getDocumentBodyInRanges;
    private _genDocDataFromClipboardItems;
    private _genDocDataFromHtmlAndText;
    private _createImagePasteHtml;
}
