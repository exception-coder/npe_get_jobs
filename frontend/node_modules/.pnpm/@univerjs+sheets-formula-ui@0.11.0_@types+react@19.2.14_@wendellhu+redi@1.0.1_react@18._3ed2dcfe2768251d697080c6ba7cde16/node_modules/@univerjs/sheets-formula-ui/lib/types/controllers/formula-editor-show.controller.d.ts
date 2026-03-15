import { Workbook, Disposable, ICommandService, ILogService, ThemeService } from '@univerjs/core';
import { IRenderContext, IRenderModule, SpreadsheetSkeleton, IRenderManagerService } from '@univerjs/engine-render';
import { FormulaDataModel } from '@univerjs/engine-formula';
import { SheetInterceptorService } from '@univerjs/sheets';
import { SheetSkeletonManagerService } from '@univerjs/sheets-ui';
/**
 * For Array formula in cell editing
 */
export declare class FormulaEditorShowController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _sheetInterceptorService;
    private readonly _formulaDataModel;
    private readonly _themeService;
    private readonly _renderManagerService;
    private readonly _sheetSkeletonManagerService;
    private readonly _commandService;
    private readonly _logService;
    private _previousShape;
    private _skeleton;
    constructor(_context: IRenderContext<Workbook>, _sheetInterceptorService: SheetInterceptorService, _formulaDataModel: FormulaDataModel, _themeService: ThemeService, _renderManagerService: IRenderManagerService, _sheetSkeletonManagerService: SheetSkeletonManagerService, _commandService: ICommandService, _logService: ILogService);
    private _initSkeletonChangeListener;
    protected _changeRuntime(skeleton: SpreadsheetSkeleton): void;
    private _initInterceptorEditorStart;
    private _commandExecutedListener;
    private _displayArrayFormulaRangeShape;
    private _createArrayFormulaRangeShape;
    private _removeArrayFormulaRangeShape;
    private _refreshArrayFormulaRangeShape;
    private _checkCurrentSheet;
    private _updateArrayFormulaRangeShape;
    private _refreshArrayFormulaRangeShapeByRow;
}
