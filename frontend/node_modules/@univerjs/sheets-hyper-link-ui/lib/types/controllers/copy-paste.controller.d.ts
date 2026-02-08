import { Disposable, Injector } from '@univerjs/core';
import { HyperLinkModel } from '@univerjs/sheets-hyper-link';
import { ISheetClipboardService } from '@univerjs/sheets-ui';
import { SheetsHyperLinkResolverService } from '../services/resolver.service';
export declare class SheetsHyperLinkCopyPasteController extends Disposable {
    private _sheetClipboardService;
    private _hyperLinkModel;
    private _injector;
    private _resolverService;
    private _plainTextFilter;
    registerPlainTextFilter(filter: (text: string) => boolean): void;
    removePlainTextFilter(filter: (text: string) => boolean): void;
    private _filterPlainText;
    private _copyInfo;
    constructor(_sheetClipboardService: ISheetClipboardService, _hyperLinkModel: HyperLinkModel, _injector: Injector, _resolverService: SheetsHyperLinkResolverService);
    private _initCopyPaste;
    private _collect;
    private _generateMutations;
}
