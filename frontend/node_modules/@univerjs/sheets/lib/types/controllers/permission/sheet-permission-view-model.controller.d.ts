import { Disposable, IPermissionService } from '@univerjs/core';
import { RangeProtectionCache } from '../../model/range-protection.cache';
import { WorksheetProtectionRuleModel } from '../../services/permission/worksheet-permission';
import { SheetInterceptorService } from '../../services/sheet-interceptor/sheet-interceptor.service';
export declare class SheetPermissionViewModelController extends Disposable {
    private _permissionService;
    private _worksheetProtectionRuleModel;
    private _sheetInterceptorService;
    private _rangeProtectionCache;
    constructor(_permissionService: IPermissionService, _worksheetProtectionRuleModel: WorksheetProtectionRuleModel, _sheetInterceptorService: SheetInterceptorService, _rangeProtectionCache: RangeProtectionCache);
    private _initViewModelByRangeInterceptor;
    private _initViewModelBySheetInterceptor;
}
