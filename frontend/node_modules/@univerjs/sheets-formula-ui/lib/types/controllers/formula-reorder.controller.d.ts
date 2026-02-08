import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { FormulaDataModel, LexerTreeBuilder } from '@univerjs/engine-formula';
import { SheetInterceptorService } from '@univerjs/sheets';
export declare class FormulaReorderController extends Disposable {
    private readonly _sheetInterceptorService;
    private readonly _univerInstanceService;
    private readonly _formulaDataModel;
    private readonly _lexerTreeBuilder;
    constructor(_sheetInterceptorService: SheetInterceptorService, _univerInstanceService: IUniverInstanceService, _formulaDataModel: FormulaDataModel, _lexerTreeBuilder: LexerTreeBuilder);
    private _initialize;
    private _reorderFormula;
}
