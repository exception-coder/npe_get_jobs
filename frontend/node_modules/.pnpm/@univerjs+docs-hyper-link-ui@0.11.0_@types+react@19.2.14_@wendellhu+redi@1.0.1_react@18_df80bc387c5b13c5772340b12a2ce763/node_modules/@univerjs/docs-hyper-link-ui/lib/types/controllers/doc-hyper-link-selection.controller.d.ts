import { Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { DocHyperLinkPopupService } from '../services/hyper-link-popup.service';
export declare class DocHyperLinkSelectionController extends Disposable {
    private readonly _commandService;
    private readonly _univerInstanceService;
    private readonly _docHyperLinkService;
    constructor(_commandService: ICommandService, _univerInstanceService: IUniverInstanceService, _docHyperLinkService: DocHyperLinkPopupService);
    private _initSelectionChange;
}
