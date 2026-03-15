import { Disposable, ICommandService, IConfigService, Injector, IUniverInstanceService } from '@univerjs/core';
import { FormulaDataModel, IDefinedNamesService, LexerTreeBuilder } from '@univerjs/engine-formula';
import { SheetInterceptorService } from '@univerjs/sheets';
/**
 * Update formula process
 *
 * 1. Command intercepts, converts the command information to adapt refRange, offsets the formula content, and obtains the formula that requires offset content.
 *
 * 2. Use refRange to offset the formula position and return undo/redo data to setRangeValues mutation
 *      - Redo data: Delete the old value at the old position on the match, and add the new value at the new position (the new value first checks whether the old position has offset content, if so, use the new offset content, if not, take the old value)
 *      - Undo data: the old position on the match saves the old value, and the new position delete value. Using undos when undoing will operate the data after the offset position.
 *
 * 3. onCommandExecuted, before formula calculation, use the setRangeValues information to delete the old formulaData, ArrayFormula and ArrayFormulaCellData, and send the worker (complementary setRangeValues after collaborative conflicts, normal operation triggers formula update, undo/redo are captured and processed here)
 */
export declare class UpdateFormulaController extends Disposable {
    private readonly _univerInstanceService;
    private readonly _commandService;
    private readonly _lexerTreeBuilder;
    private readonly _formulaDataModel;
    private _sheetInterceptorService;
    private readonly _definedNamesService;
    private readonly _configService;
    readonly _injector: Injector;
    constructor(_univerInstanceService: IUniverInstanceService, _commandService: ICommandService, _lexerTreeBuilder: LexerTreeBuilder, _formulaDataModel: FormulaDataModel, _sheetInterceptorService: SheetInterceptorService, _definedNamesService: IDefinedNamesService, _configService: IConfigService, _injector: Injector);
    private _commandExecutedListener;
    private _handleSetRangeValuesMutation;
    private _handleWorkbookDisposed;
    private _handleInsertSheetMutation;
    private _handleWorkbookAdded;
    private _getDirtyDataByCalculationMode;
    private _getUpdateFormula;
    private _getFormulaReferenceMoveInfo;
}
