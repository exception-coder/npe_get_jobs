import { Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { SheetRangeThemeModel } from '../model/range-theme-model';
export declare class ZebraCrossingCacheController extends Disposable {
    private readonly _commandService;
    private readonly _sheetRangeThemeModel;
    private readonly _univerInstanceService;
    private _zebraCacheUpdateSubject;
    constructor(_commandService: ICommandService, _sheetRangeThemeModel: SheetRangeThemeModel, _univerInstanceService: IUniverInstanceService);
    private _init;
    /**
     * Update the zebra crossing cache for a specific unit and sub-unit.
     * @param {string} unitId - The ID of the unit.
     * @param {string} subUnitId - The ID of the sub-unit.
     */
    updateZebraCrossingCache(unitId: string, subUnitId: string): void;
    private _initializeCommandListener;
    private _initTriggerCacheUpdateListener;
}
