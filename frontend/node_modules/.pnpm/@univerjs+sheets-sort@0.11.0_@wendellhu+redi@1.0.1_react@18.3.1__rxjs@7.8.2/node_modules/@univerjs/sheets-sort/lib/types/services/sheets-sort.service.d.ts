import { ISheetRangeLocation } from '@univerjs/sheets';
import { ICellValueCompareFn } from '../commands/commands/sheets-sort.command';
import { ISortOption } from './interface';
import { Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { FormulaDataModel } from '@univerjs/engine-formula';
export declare class SheetsSortService extends Disposable {
    private readonly _univerInstanceService;
    private readonly _commandService;
    private readonly _formulaDataModel;
    private _compareFns;
    constructor(_univerInstanceService: IUniverInstanceService, _commandService: ICommandService, _formulaDataModel: FormulaDataModel);
    mergeCheck(location: ISheetRangeLocation): boolean;
    emptyCheck(location: ISheetRangeLocation): boolean;
    singleCheck(location: ISheetRangeLocation): boolean;
    formulaCheck(location: ISheetRangeLocation): boolean;
    registerCompareFn(fn: ICellValueCompareFn): void;
    getAllCompareFns(): ICellValueCompareFn[];
    applySort(sortOption: ISortOption, unitId?: string, subUnitId?: string): void;
}
