import { Disposable, ICommandService, IConfigService } from '@univerjs/core';
import { FormulaDataModel } from '@univerjs/engine-formula';
import { SheetInterceptorService } from '@univerjs/sheets';
export declare class ArrayFormulaCellInterceptorController extends Disposable {
    private readonly _commandService;
    private readonly _configService;
    private _sheetInterceptorService;
    private readonly _formulaDataModel;
    constructor(_commandService: ICommandService, _configService: IConfigService, _sheetInterceptorService: SheetInterceptorService, _formulaDataModel: FormulaDataModel);
    private _initialize;
    private _commandExecutedListener;
    private _writeArrayFormulaToSnapshot;
    private _initInterceptorCellContent;
}
