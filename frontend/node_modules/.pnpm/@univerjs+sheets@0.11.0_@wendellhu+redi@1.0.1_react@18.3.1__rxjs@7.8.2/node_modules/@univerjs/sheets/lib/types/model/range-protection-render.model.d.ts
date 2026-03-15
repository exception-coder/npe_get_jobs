import { IRange, IPermissionService } from '@univerjs/core';
import { UnitAction } from '@univerjs/protocol';
import { RangeProtectionRuleModel } from './range-protection-rule.model';
export type ICellPermission = Record<UnitAction, boolean> & {
    ruleId?: string;
    ranges?: IRange[];
};
export declare class RangeProtectionRenderModel {
    private _selectionProtectionRuleModel;
    private _permissionService;
    private _cache;
    constructor(_selectionProtectionRuleModel: RangeProtectionRuleModel, _permissionService: IPermissionService);
    private _init;
    private _createKey;
    getCellInfo(unitId: string, subUnitId: string, row: number, col: number): ICellPermission[];
    clear(): void;
}
