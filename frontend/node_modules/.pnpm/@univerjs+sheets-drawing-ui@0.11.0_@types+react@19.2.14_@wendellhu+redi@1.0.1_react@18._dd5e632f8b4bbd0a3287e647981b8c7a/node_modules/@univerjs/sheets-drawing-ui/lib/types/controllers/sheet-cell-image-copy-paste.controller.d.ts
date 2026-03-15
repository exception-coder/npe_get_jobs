import { Disposable, ICommandService, IUniverInstanceService, LocaleService } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { IDialogService } from '@univerjs/ui';
export declare class SheetCellImageCopyPasteController extends Disposable {
    private readonly _commandService;
    private readonly _univerInstanceService;
    private readonly _dialogService;
    private readonly _renderManagerService;
    private readonly _localeService;
    constructor(_commandService: ICommandService, _univerInstanceService: IUniverInstanceService, _dialogService: IDialogService, _renderManagerService: IRenderManagerService, _localeService: LocaleService);
    private _setCellImage;
    private _initDocImageCopyPasteHooks;
}
