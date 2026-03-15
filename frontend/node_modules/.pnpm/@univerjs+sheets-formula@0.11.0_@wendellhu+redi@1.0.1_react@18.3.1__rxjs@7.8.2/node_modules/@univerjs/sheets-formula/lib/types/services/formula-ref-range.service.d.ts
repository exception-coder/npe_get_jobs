import { IDisposable, IMutationInfo, IRange, Disposable, Injector, IUniverInstanceService } from '@univerjs/core';
import { EffectRefRangeParams, RefRangeService } from '@univerjs/sheets';
import { LexerTreeBuilder } from '@univerjs/engine-formula';
export type FormulaChangeMap = Record<string, Record<string, Record<string, string>>>;
export type FormulaChangeCallback = (formulaString: string) => {
    redos: IMutationInfo[];
    undos: IMutationInfo[];
};
export type RangeFormulaChangeCallback = (infos: {
    formulas: string[];
    ranges: IRange[];
}[]) => {
    redos: IMutationInfo[];
    undos: IMutationInfo[];
};
export declare class FormulaRefRangeService extends Disposable {
    private readonly _refRangeService;
    private readonly _lexerTreeBuilder;
    private readonly _univerInstanceService;
    private readonly _injector;
    constructor(_refRangeService: RefRangeService, _lexerTreeBuilder: LexerTreeBuilder, _univerInstanceService: IUniverInstanceService, _injector: Injector);
    transformFormulaByEffectCommand(unitId: string, subUnitId: string, formula: string, params: EffectRefRangeParams): string;
    registerFormula(unitId: string, subUnitId: string, formula: string, callback: FormulaChangeCallback): IDisposable;
    private _getFormulaDependcy;
    registerRangeFormula(unitId: string, subUnitId: string, oldRanges: IRange[], formulas: string[], callback: RangeFormulaChangeCallback): IDisposable;
}
