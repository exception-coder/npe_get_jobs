import { IRange, Nullable, Disposable, ICommandService, IUniverInstanceService, LocaleService } from '@univerjs/core';
import { ISheetRangeLocation, SheetsSelectionsService } from '@univerjs/sheets';
import { SheetsSortService } from '@univerjs/sheets-sort';
import { IConfirmService } from '@univerjs/ui';
export declare enum EXTEND_TYPE {
    KEEP = "keep",
    EXTEND = "extend",
    CANCEL = "cancel"
}
export interface ICustomSortState {
    location?: ISheetSortLocation;
    show: boolean;
}
export interface ISheetSortLocation extends ISheetRangeLocation {
    colIndex: number;
}
export declare class SheetsSortUIService extends Disposable {
    private readonly _univerInstanceService;
    private readonly _confirmService;
    private readonly _selectionManagerService;
    private readonly _sheetsSortService;
    private readonly _localeService;
    private readonly _commandService;
    private readonly _customSortState$;
    readonly customSortState$: import('rxjs').Observable<Nullable<ICustomSortState>>;
    constructor(_univerInstanceService: IUniverInstanceService, _confirmService: IConfirmService, _selectionManagerService: SheetsSelectionsService, _sheetsSortService: SheetsSortService, _localeService: LocaleService, _commandService: ICommandService);
    triggerSortDirectly(asc: boolean, extend: boolean, sheetRangeLocation?: ISheetSortLocation): Promise<boolean>;
    triggerSortCustomize(): Promise<boolean>;
    customSortState(): Nullable<ICustomSortState>;
    getTitles(hasTitle: boolean): {
        index: number;
        label: string;
    }[];
    setSelection(unitId: string, subUnitId: string, range: IRange): void;
    showCheckError(content: string): Promise<boolean>;
    showExtendConfirm(): Promise<EXTEND_TYPE>;
    showCustomSortPanel(location: ISheetSortLocation): void;
    closeCustomSortPanel(): void;
    private _check;
    private _detectSortLocation;
}
