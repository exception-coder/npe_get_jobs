import { Disposable, ICommandService, LocaleService } from '@univerjs/core';
import { SheetPermissionCheckController } from '@univerjs/sheets';
export declare class ConditionalFormattingPermissionController extends Disposable {
    private _localeService;
    private readonly _commandService;
    private readonly _sheetPermissionCheckController;
    constructor(_localeService: LocaleService, _commandService: ICommandService, _sheetPermissionCheckController: SheetPermissionCheckController);
    private _commandExecutedListener;
}
