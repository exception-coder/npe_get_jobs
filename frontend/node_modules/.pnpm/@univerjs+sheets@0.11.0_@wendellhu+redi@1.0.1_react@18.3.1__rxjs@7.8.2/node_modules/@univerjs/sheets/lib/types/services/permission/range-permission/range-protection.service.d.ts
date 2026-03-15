import { Disposable, IPermissionService, IResourceManagerService, IUniverInstanceService } from '@univerjs/core';
import { RangeProtectionRuleModel } from '../../../model/range-protection-rule.model';
import { RangeProtectionCache } from '../../../model/range-protection.cache';
export declare class RangeProtectionService extends Disposable {
    private _selectionProtectionRuleModel;
    private _permissionService;
    private _resourceManagerService;
    private _selectionProtectionCache;
    private _univerInstanceService;
    constructor(_selectionProtectionRuleModel: RangeProtectionRuleModel, _permissionService: IPermissionService, _resourceManagerService: IResourceManagerService, _selectionProtectionCache: RangeProtectionCache, _univerInstanceService: IUniverInstanceService);
    private _initRuleChange;
    private _initSnapshot;
}
