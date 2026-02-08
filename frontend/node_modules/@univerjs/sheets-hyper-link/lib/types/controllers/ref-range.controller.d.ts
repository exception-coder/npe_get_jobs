import { Disposable, ICommandService } from '@univerjs/core';
import { RefRangeService, SheetsSelectionsService } from '@univerjs/sheets';
import { HyperLinkModel } from '../models/hyper-link.model';
export declare class SheetsHyperLinkRefRangeController extends Disposable {
    private readonly _refRangeService;
    private readonly _hyperLinkModel;
    private readonly _selectionManagerService;
    private readonly _commandService;
    private _disposableMap;
    private _watchDisposableMap;
    private _rangeDisableMap;
    private _rangeWatcherMap;
    constructor(_refRangeService: RefRangeService, _hyperLinkModel: HyperLinkModel, _selectionManagerService: SheetsSelectionsService, _commandService: ICommandService);
    private _handlePositionChange;
    private _registerPosition;
    private _watchPosition;
    private _unregisterPosition;
    private _unwatchPosition;
    private _registerRange;
    private _unregisterRange;
    private _unwatchRange;
    private _initData;
    private _initRefRange;
}
