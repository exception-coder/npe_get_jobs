import { Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { RefRangeService } from '@univerjs/sheets';
export declare class SheetsHyperLinkRichTextRefRangeController extends Disposable {
    private readonly _commandService;
    private readonly _univerInstanceService;
    private readonly _refRangeService;
    private _refRangeMap;
    constructor(_commandService: ICommandService, _univerInstanceService: IUniverInstanceService, _refRangeService: RefRangeService);
    private _enusreMap;
    private _isLegalRangeUrl;
    private _registerRange;
    private _initWorkbookLoad;
    private _initWorkbookUnload;
    private _initSetRangesListener;
}
