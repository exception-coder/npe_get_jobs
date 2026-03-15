import { IRange, Nullable, Styles, Worksheet, Disposable, ILogService, IUniverInstanceService, LocaleService } from '@univerjs/core';
import { FilterColumn } from '@univerjs/sheets-filter';
import { IFilterByValueItem, IFilterByValueWithTreeItem } from '../services/sheets-filter-panel.service';
export interface ISheetsGenerateFilterValuesService {
    getFilterValues(params: {
        unitId: string;
        subUnitId: string;
        filteredOutRowsByOtherColumns: number[];
        filterColumn: Nullable<FilterColumn>;
        filters: boolean;
        blankChecked: boolean;
        iterateRange: IRange;
        alreadyChecked: string[];
    }): Promise<{
        filterTreeItems: IFilterByValueWithTreeItem[];
        filterTreeMapCache: Map<string, string[]>;
    }>;
}
export declare const SHEETS_GENERATE_FILTER_VALUES_SERVICE_NAME = "sheets-filter.generate-filter-values.service";
export declare const ISheetsGenerateFilterValuesService: import('@wendellhu/redi').IdentifierDecorator<ISheetsGenerateFilterValuesService>;
export declare class SheetsGenerateFilterValuesService extends Disposable {
    private readonly _localeService;
    private readonly _univerInstanceService;
    private readonly _logService;
    constructor(_localeService: LocaleService, _univerInstanceService: IUniverInstanceService, _logService: ILogService);
    getFilterValues(params: {
        unitId: string;
        subUnitId: string;
        filteredOutRowsByOtherColumns: number[];
        filterColumn: Nullable<FilterColumn>;
        filters: boolean;
        blankChecked: boolean;
        iterateRange: IRange;
        alreadyChecked: string[];
    }): Promise<never[] | {
        filterTreeItems: IFilterByValueWithTreeItem[];
        filterTreeMapCache: Map<string, string[]>;
    }>;
}
export declare function getFilterByValueItems(filters: boolean, blankChecked: boolean, localeService: LocaleService, iterateRange: IRange, worksheet: Worksheet, alreadyChecked: Set<string>, filteredOutRowsByOtherColumns: Set<number>): IFilterByValueItem[];
export declare function getFilterTreeByValueItems(filters: boolean, localeService: LocaleService, iterateRange: IRange, worksheet: Worksheet, filteredOutRowsByOtherColumns: Set<number>, filterColumn: Nullable<FilterColumn>, alreadyChecked: Set<string>, blankChecked: boolean, styles: Styles): {
    filterTreeItems: IFilterByValueWithTreeItem[];
    filterTreeMapCache: Map<string, string[]>;
};
