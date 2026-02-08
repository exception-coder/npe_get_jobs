import { Disposable, IPermissionService, IUniverInstanceService } from '@univerjs/core';
import { RangeProtectionRuleModel } from '../../../model/range-protection-rule.model';
import { WorksheetProtectionPointModel, WorksheetProtectionRuleModel } from '../worksheet-permission';
export declare class WorkbookPermissionService extends Disposable {
    private _permissionService;
    private _univerInstanceService;
    private _rangeProtectionRuleModel;
    private _worksheetProtectionRuleModel;
    private _worksheetProtectionPointModel;
    private _unitPermissionInitStateChange;
    unitPermissionInitStateChange$: import('rxjs').Observable<boolean>;
    constructor(_permissionService: IPermissionService, _univerInstanceService: IUniverInstanceService, _rangeProtectionRuleModel: RangeProtectionRuleModel, _worksheetProtectionRuleModel: WorksheetProtectionRuleModel, _worksheetProtectionPointModel: WorksheetProtectionPointModel);
    private _init;
    changeUnitInitState(state: boolean): void;
}
