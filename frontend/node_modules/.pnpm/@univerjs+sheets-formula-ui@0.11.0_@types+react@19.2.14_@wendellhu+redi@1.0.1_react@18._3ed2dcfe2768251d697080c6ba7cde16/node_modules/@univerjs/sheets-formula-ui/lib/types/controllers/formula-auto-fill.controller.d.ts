import { AutoFillService } from '@univerjs/sheets-ui';
import { Disposable } from '@univerjs/core';
import { LexerTreeBuilder } from '@univerjs/engine-formula';
export declare class FormulaAutoFillController extends Disposable {
    private readonly _autoFillService;
    private readonly _lexerTreeBuilder;
    constructor(_autoFillService: AutoFillService, _lexerTreeBuilder: LexerTreeBuilder);
    private _registerAutoFill;
    private _fillCopyFormula;
}
