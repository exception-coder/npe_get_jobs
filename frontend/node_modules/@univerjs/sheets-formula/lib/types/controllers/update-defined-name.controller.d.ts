import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { IDefinedNamesService, LexerTreeBuilder } from '@univerjs/engine-formula';
import { SheetInterceptorService } from '@univerjs/sheets';
export declare class UpdateDefinedNameController extends Disposable {
    private readonly _definedNamesService;
    private readonly _univerInstanceService;
    private _sheetInterceptorService;
    private readonly _lexerTreeBuilder;
    constructor(_definedNamesService: IDefinedNamesService, _univerInstanceService: IUniverInstanceService, _sheetInterceptorService: SheetInterceptorService, _lexerTreeBuilder: LexerTreeBuilder);
    private _initialize;
    private _commandExecutedListener;
    private _getUpdateDefinedNameMutations;
    private _removeSheet;
}
