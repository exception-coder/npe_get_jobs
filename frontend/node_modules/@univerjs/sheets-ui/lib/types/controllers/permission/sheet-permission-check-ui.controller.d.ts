import { Disposable, DisposableCollection, ICommandService, IContextService, IPermissionService, IUniverInstanceService, LocaleService } from '@univerjs/core';
import { RangeProtectionRuleModel, SheetPermissionCheckController } from '@univerjs/sheets';
import { IDialogService } from '@univerjs/ui';
import { IAutoFillService } from '../../services/auto-fill/auto-fill.service';
export declare class SheetPermissionCheckUIController extends Disposable {
    private readonly _commandService;
    private readonly _univerInstanceService;
    private readonly _permissionService;
    private readonly _dialogService;
    private _rangeProtectionRuleModel;
    private _autoFillService;
    private readonly _localeService;
    private readonly _contextService;
    private readonly _sheetPermissionCheckController;
    disposableCollection: DisposableCollection;
    constructor(_commandService: ICommandService, _univerInstanceService: IUniverInstanceService, _permissionService: IPermissionService, _dialogService: IDialogService, _rangeProtectionRuleModel: RangeProtectionRuleModel, _autoFillService: IAutoFillService, _localeService: LocaleService, _contextService: IContextService, _sheetPermissionCheckController: SheetPermissionCheckController);
    private _initUIEvent;
    private _haveNotPermissionHandle;
    private _getPermissionCheck;
    private _initialize;
    private _commandExecutedListener;
    private _permissionCheckByPaste;
    private _permissionCheckByAutoFillCommand;
}
