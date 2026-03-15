import { Workbook, Disposable } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { SheetDataValidationModel } from '@univerjs/sheets-data-validation';
import { SheetSkeletonManagerService } from '@univerjs/sheets-ui';
export declare class SheetsDataValidationReRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _sheetDataValidationModel;
    private readonly _sheetSkeletonManagerService;
    constructor(_context: IRenderContext<Workbook>, _sheetDataValidationModel: SheetDataValidationModel, _sheetSkeletonManagerService: SheetSkeletonManagerService);
    private _initSkeletonChange;
}
