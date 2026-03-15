import { ILogService, Injector, IPermissionService, IResourceManagerService, IUniverInstanceService, RxDisposable } from '@univerjs/core';
import { RangeProtectionRuleModel } from '../../../model/range-protection-rule.model';
import { WorksheetProtectionPointModel } from './worksheet-permission-point.model';
import { WorksheetProtectionRuleModel } from './worksheet-permission-rule.model';
export declare const RULE_MODEL_PLUGIN_NAME = "SHEET_WORKSHEET_PROTECTION_PLUGIN";
export declare const POINT_MODEL_PLUGIN_NAME = "SHEET_WORKSHEET_PROTECTION_POINT_PLUGIN";
export declare class WorksheetPermissionService extends RxDisposable {
    private _permissionService;
    private _univerInstanceService;
    readonly _injector: Injector;
    private _worksheetProtectionRuleModel;
    private _worksheetProtectionPointRuleModel;
    private _resourceManagerService;
    private _rangeProtectionRuleModel;
    private _logService;
    constructor(_permissionService: IPermissionService, _univerInstanceService: IUniverInstanceService, _injector: Injector, _worksheetProtectionRuleModel: WorksheetProtectionRuleModel, _worksheetProtectionPointRuleModel: WorksheetProtectionPointModel, _resourceManagerService: IResourceManagerService, _rangeProtectionRuleModel: RangeProtectionRuleModel, _logService: ILogService);
    private _init;
    private _initRuleChange;
    private _initRuleSnapshot;
    private _initPointSnapshot;
}
