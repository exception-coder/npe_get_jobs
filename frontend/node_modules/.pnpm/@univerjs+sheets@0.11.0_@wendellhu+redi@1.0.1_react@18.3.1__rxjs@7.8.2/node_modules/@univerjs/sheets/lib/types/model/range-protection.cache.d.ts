import { IRange, Disposable, IPermissionService, IUniverInstanceService } from '@univerjs/core';
import { UnitAction } from '@univerjs/protocol';
import { RangeProtectionRuleModel } from './range-protection-rule.model';
export declare class RangeProtectionCache extends Disposable {
    private readonly _ruleModel;
    private readonly _permissionService;
    private readonly _univerInstanceService;
    private readonly _cellRuleCache;
    private readonly _permissionIdCache;
    private readonly _cellInfoCache;
    private readonly _rowInfoCache;
    private readonly _colInfoCache;
    constructor(_ruleModel: RangeProtectionRuleModel, _permissionService: IPermissionService, _univerInstanceService: IUniverInstanceService);
    private _initCache;
    private _initUpdateCellInfoCache;
    private _initUpdateCellRuleCache;
    private _ensureRuleMap;
    private _ensureCellInfoMap;
    private _ensureRowColInfoMap;
    private _addCellRuleCache;
    private _deleteCellRuleCache;
    private _getSelectionActions;
    reBuildCache(unitId: string, subUnitId: string): void;
    getRowPermissionInfo(unitId: string, subUnitId: string, row: number, types: UnitAction[]): boolean;
    getColPermissionInfo(unitId: string, subUnitId: string, col: number, types: UnitAction[]): boolean;
    private _initUpdateRowColInfoCache;
    getCellInfo(unitId: string, subUnitId: string, row: number, col: number): (Partial<Record<UnitAction, boolean>> & {
        ruleId?: string;
        ranges?: IRange[];
    }) | {
        ruleId: string;
        ranges: IRange[];
        1: boolean;
        0: boolean;
        2: boolean;
        42: boolean;
    } | undefined;
    deleteUnit(unitId: string): void;
}
