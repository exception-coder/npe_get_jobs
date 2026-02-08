import { Disposable, DisposableCollection, IUniverInstanceService, LocaleService } from '@univerjs/core';
import { SheetPermissionCheckController, SheetsSelectionsService } from '@univerjs/sheets';
import { ISheetClipboardService } from '../../services/clipboard/clipboard.service';
export declare const SHEET_PERMISSION_PASTE_PLUGIN = "SHEET_PERMISSION_PASTE_PLUGIN";
export declare class SheetPermissionInterceptorClipboardController extends Disposable {
    private readonly _univerInstanceService;
    private readonly _selectionManagerService;
    private readonly _localService;
    private _sheetClipboardService;
    private readonly _sheetPermissionCheckController;
    disposableCollection: DisposableCollection;
    constructor(_univerInstanceService: IUniverInstanceService, _selectionManagerService: SheetsSelectionsService, _localService: LocaleService, _sheetClipboardService: ISheetClipboardService, _sheetPermissionCheckController: SheetPermissionCheckController);
    private _initClipboardHook;
}
