import { IRange, ObjectMatrix, Disposable, IConfigService, IUniverInstanceService } from '@univerjs/core';
import { RenderManagerService } from '@univerjs/engine-render';
import { SheetInterceptorService, SheetsSelectionsService } from '@univerjs/sheets';
export declare const AFFECT_LAYOUT_STYLES: string[];
export declare class AutoHeightController extends Disposable {
    private readonly _renderManagerService;
    private readonly _sheetInterceptorService;
    private readonly _selectionManagerService;
    private readonly _univerInstanceService;
    private readonly _configService;
    constructor(_renderManagerService: RenderManagerService, _sheetInterceptorService: SheetInterceptorService, _selectionManagerService: SheetsSelectionsService, _univerInstanceService: IUniverInstanceService, _configService: IConfigService);
    private _processLazyAutoHeight;
    getUndoRedoParamsOfAutoHeight(ranges: IRange[], subUnitIdParam?: string, currentCellHeights?: ObjectMatrix<number>): {
        redos: any[];
        undos: any[];
    };
    private _initialize;
}
