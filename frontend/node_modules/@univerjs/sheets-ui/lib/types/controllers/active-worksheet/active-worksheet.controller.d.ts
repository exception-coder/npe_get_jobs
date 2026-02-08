import { Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
/**
 * This controller is responsible for changing the active worksheet when
 * worksheet tab related mutations executes. We cannot write this logic in
 * commands because it does not take collaborative editing into consideration.
 */
export declare class ActiveWorksheetController extends Disposable {
    private readonly _commandService;
    private readonly _univerInstanceService;
    private _previousSheetIndex;
    constructor(_commandService: ICommandService, _univerInstanceService: IUniverInstanceService);
    private _adjustActiveSheetOnHideSheet;
    private _beforeAdjustActiveSheetOnRemoveSheet;
    private _adjustActiveSheetOnRemoveSheet;
    private _adjustActiveSheetOnInsertSheet;
    private _adjustActiveSheetOnShowSheet;
    private _adjustActiveSheetOnSelection;
    private _switchToNextSheet;
}
