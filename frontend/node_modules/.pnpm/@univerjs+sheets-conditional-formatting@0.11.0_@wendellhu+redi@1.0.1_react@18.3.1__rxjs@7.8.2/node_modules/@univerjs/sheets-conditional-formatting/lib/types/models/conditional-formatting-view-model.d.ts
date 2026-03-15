import { Disposable, Injector, IUniverInstanceService } from '@univerjs/core';
import { ConditionalFormattingFormulaService } from '../services/conditional-formatting-formula.service';
import { ConditionalFormattingRuleModel } from './conditional-formatting-rule-model';
export declare const CONDITIONAL_FORMATTING_VIEWPORT_CACHE_LENGTH: number;
export declare class ConditionalFormattingViewModel extends Disposable {
    private _injector;
    private _conditionalFormattingRuleModel;
    private _conditionalFormattingFormulaService;
    private _univerInstanceService;
    private _calculateUnitManagers;
    private _rTreeManager;
    /**
     * 1nd-level cache
     */
    private _cellCache;
    private _markDirty$;
    /**
     * The rendering layer listens to this variable to determine whether a reRender is necessary.
     * @memberof ConditionalFormattingViewModel
     */
    markDirty$: import('rxjs').Observable<{
        cfId: string;
        unitId: string;
        subUnitId: string;
        isImmediately?: boolean;
    }>;
    constructor(_injector: Injector, _conditionalFormattingRuleModel: ConditionalFormattingRuleModel, _conditionalFormattingFormulaService: ConditionalFormattingFormulaService, _univerInstanceService: IUniverInstanceService);
    private _initCFFormulaListener;
    getCellCfs(unitId: string, subUnitId: string, row: number, col: number): {
        cfId: string;
        result: any;
        priority: number;
    }[] | undefined;
    private _getCellCfs;
    /**
     `isNeedResetPreComputingCache` indicates whether it is necessary to remove the 2nd-level cache for each rule individually.
     Generally, when the logic of a rule calculation is modified, the cache for that rule needs to be removed.
     Changes in style/priority do not require the clearing of the 2nd-level cache.
     Rule changes/region changes require the removal of the 2nd-level cache.
     There is also a situation where preComputing is asynchronously calculated.
     After the calculation is finished, it is only for marking as dirty, and the 2nd-level cache need to be cleared.
     * @param {boolean} [isNeedResetPreComputingCache]
     */
    private _markRuleDirtyAtOnce;
    /**
     * For the same condition format being marked dirty multiple times at the same time,
     * it will cause the style cache to be cleared, thereby causing the screen to flicker.
     * Here,multiple dirties are merged into one..
     */
    markRuleDirty: (unitId: string, subUnitId: string, cfId: string, isNeedResetPreComputingCache?: boolean) => void;
    dispose(): void;
    private _handleCustomFormulasSeparately;
    private _initRuleListener;
    private _ensureCalculateUnitManager;
    private _createRuleCalculateUnitInstance;
    private _createCacheKey;
    setCacheLength(length?: number): void;
}
