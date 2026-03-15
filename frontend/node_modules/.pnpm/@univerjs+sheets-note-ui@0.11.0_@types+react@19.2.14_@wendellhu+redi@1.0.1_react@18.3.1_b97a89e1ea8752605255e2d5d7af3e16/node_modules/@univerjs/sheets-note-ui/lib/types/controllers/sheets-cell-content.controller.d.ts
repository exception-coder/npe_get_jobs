import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { SheetInterceptorService } from '@univerjs/sheets';
import { SheetsNoteModel } from '@univerjs/sheets-note';
export declare class SheetsCellContentController extends Disposable {
    private readonly _sheetInterceptorService;
    private readonly _sheetsNoteModel;
    private readonly _renderManagerService;
    private readonly _univerInstanceService;
    constructor(_sheetInterceptorService: SheetInterceptorService, _sheetsNoteModel: SheetsNoteModel, _renderManagerService: IRenderManagerService, _univerInstanceService: IUniverInstanceService);
    private _initViewModelIntercept;
    private _initSkeletonChange;
}
