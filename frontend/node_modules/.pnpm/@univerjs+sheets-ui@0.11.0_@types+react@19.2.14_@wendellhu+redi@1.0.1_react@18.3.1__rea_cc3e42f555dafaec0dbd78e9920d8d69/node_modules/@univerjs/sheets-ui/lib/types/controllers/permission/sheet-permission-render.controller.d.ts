import { IRenderContext, IRenderModule, IRenderManagerService } from '@univerjs/engine-render';
import { MenuConfig, ComponentManager } from '@univerjs/ui';
import { Disposable, IConfigService, Injector, IPermissionService } from '@univerjs/core';
import { RangeProtectionRuleModel, WorksheetProtectionRuleModel } from '@univerjs/sheets';
import { SheetSkeletonManagerService } from '../../services/sheet-skeleton-manager.service';
export interface IUniverSheetsPermissionMenuConfig {
    menu: MenuConfig;
}
export declare class SheetPermissionRenderManagerController extends Disposable {
    private _injector;
    private _componentManager;
    constructor(_injector: Injector, _componentManager: ComponentManager);
    private _init;
    private _initComponents;
    private _initUiPartComponents;
}
export declare class SheetPermissionRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private _rangeProtectionRuleModel;
    private _sheetSkeletonManagerService;
    private _permissionService;
    private _configService;
    private _rangeProtectionCanViewRenderExtension;
    private _rangeProtectionCanNotViewRenderExtension;
    constructor(_context: IRenderContext, _rangeProtectionRuleModel: RangeProtectionRuleModel, _sheetSkeletonManagerService: SheetSkeletonManagerService, _permissionService: IPermissionService, _configService: IConfigService);
    private _initRender;
    private _initSkeleton;
}
export declare class WorksheetProtectionRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private _renderManagerService;
    private _sheetSkeletonManagerService;
    private _worksheetProtectionRuleModel;
    private _configService;
    private _worksheetProtectionRenderExtension;
    constructor(_context: IRenderContext, _renderManagerService: IRenderManagerService, _sheetSkeletonManagerService: SheetSkeletonManagerService, _worksheetProtectionRuleModel: WorksheetProtectionRuleModel, _configService: IConfigService);
    private _initRender;
    private _initSkeleton;
}
