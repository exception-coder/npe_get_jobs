import { Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { DocSelectionManagerService } from '../services/doc-selection-manager.service';
export declare class DocCustomRangeController extends Disposable {
    private readonly _commandService;
    private readonly _textSelectionManagerService;
    private readonly _univerInstanceService;
    constructor(_commandService: ICommandService, _textSelectionManagerService: DocSelectionManagerService, _univerInstanceService: IUniverInstanceService);
    private _transformCustomRange;
    private _initSelectionChange;
}
