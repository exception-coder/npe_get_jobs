import { IMutationInfo, Disposable, DisposableCollection, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { IAddRangeProtectionMutationParams } from '../../../commands/mutations/add-range-protection.mutation';
import { IDeleteRangeProtectionMutationParams } from '../../../commands/mutations/delete-range-protection.mutation';
import { ISetRangeProtectionMutationParams } from '../../../commands/mutations/set-range-protection.mutation';
import { EffectRefRangeParams } from '../../../services/ref-range/type';
import { RangeProtectionRenderModel } from '../../../model/range-protection-render.model';
import { RangeProtectionRuleModel } from '../../../model/range-protection-rule.model';
import { RangeProtectionCache } from '../../../model/range-protection.cache';
import { RefRangeService } from '../../../services/ref-range/ref-range.service';
import { SheetInterceptorService } from '../../sheet-interceptor/sheet-interceptor.service';
export declare class RangeProtectionRefRangeService extends Disposable {
    private _selectionProtectionRuleModel;
    private _univerInstanceService;
    private readonly _commandService;
    private readonly _refRangeService;
    private readonly _selectionProtectionRenderModel;
    private readonly _rangeProtectionCache;
    private readonly _sheetInterceptorService;
    private readonly _rangeProtectionRuleModel;
    disposableCollection: DisposableCollection;
    constructor(_selectionProtectionRuleModel: RangeProtectionRuleModel, _univerInstanceService: IUniverInstanceService, _commandService: ICommandService, _refRangeService: RefRangeService, _selectionProtectionRenderModel: RangeProtectionRenderModel, _rangeProtectionCache: RangeProtectionCache, _sheetInterceptorService: SheetInterceptorService, _rangeProtectionRuleModel: RangeProtectionRuleModel);
    private _onRefRangeChange;
    refRangeHandle(config: EffectRefRangeParams, unitId: string, subUnitId: string): {
        redos: {
            id: string;
            params: ISetRangeProtectionMutationParams;
        }[];
        undos: {
            id: string;
            params: ISetRangeProtectionMutationParams;
        }[];
    } | {
        redos: IMutationInfo<IDeleteRangeProtectionMutationParams | IAddRangeProtectionMutationParams | ISetRangeProtectionMutationParams>[];
        undos: IMutationInfo<IDeleteRangeProtectionMutationParams | IAddRangeProtectionMutationParams | ISetRangeProtectionMutationParams>[];
    };
    private _getRefRangeMutationsByDeleteCols;
    private _getRefRangeMutationsByDeleteRows;
    private _getRefRangeMutationsByInsertCols;
    private _getRefRangeMutationsByInsertRows;
    private _getRefRangeMutationsByMoveRows;
    private _getRefRangeMutationsByMoveCols;
    private _correctPermissionRange;
    private _checkIsRightRange;
    private _initReBuildCache;
    private _initRemoveSheet;
}
