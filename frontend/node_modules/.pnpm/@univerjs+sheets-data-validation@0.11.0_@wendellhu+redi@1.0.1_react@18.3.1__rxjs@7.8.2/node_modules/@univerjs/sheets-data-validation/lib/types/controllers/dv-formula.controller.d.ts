import { Disposable, IPermissionService, IUniverInstanceService } from '@univerjs/core';
import { LexerTreeBuilder } from '@univerjs/engine-formula';
export declare class DataValidationFormulaController extends Disposable {
    private readonly _univerInstanceService;
    private readonly _permissionService;
    private readonly _lexerTreeBuilder;
    constructor(_univerInstanceService: IUniverInstanceService, _permissionService: IPermissionService, _lexerTreeBuilder: LexerTreeBuilder);
    getFormulaRefCheck(formulaString: string): boolean;
}
