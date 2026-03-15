import { Nullable, Disposable, ICommandService, IResourceManagerService, IUniverInstanceService } from '@univerjs/core';
import { IAutoFilter } from '../models/types';
import { FilterModel } from '../models/filter-model';
type WorksheetID = string;
export interface ISheetsFilterResource {
    [key: WorksheetID]: IAutoFilter;
}
export declare const SHEET_FILTER_SNAPSHOT_ID = "SHEET_FILTER_PLUGIN";
/**
 * This service is responsible for managing filter models, especially their lifecycle.
 */
export declare class SheetsFilterService extends Disposable {
    private readonly _resourcesManagerService;
    private readonly _univerInstanceService;
    private readonly _commandService;
    private readonly _filterModels;
    private readonly _loadedUnitId$;
    readonly loadedUnitId$: import('rxjs').Observable<Nullable<string>>;
    private readonly _errorMsg$;
    readonly errorMsg$: import('rxjs').Observable<Nullable<string>>;
    private readonly _activeFilterModel$;
    /** An observable value emitting the current Workbook's active Worksheet's filter model (if there is one). */
    readonly activeFilterModel$: import('rxjs').Observable<Nullable<FilterModel>>;
    /** The current Workbook's active Worksheet's filter model (if there is one). */
    get activeFilterModel(): Nullable<FilterModel>;
    constructor(_resourcesManagerService: IResourceManagerService, _univerInstanceService: IUniverInstanceService, _commandService: ICommandService);
    /**
     *
     * @param unitId
     * @param subUnitId
     */
    ensureFilterModel(unitId: string, subUnitId: string): FilterModel;
    getFilterModel(unitId: string, subUnitId: string): Nullable<FilterModel>;
    removeFilterModel(unitId: string, subUnitId: string): boolean;
    setFilterErrorMsg(content: string): void;
    private _updateActiveFilterModel;
    private _initActiveFilterModel;
    private _serializeAutoFiltersForUnit;
    private _deserializeAutoFiltersForUnit;
    dispose(): void;
    private _initModel;
    private _cacheFilterModel;
}
export {};
