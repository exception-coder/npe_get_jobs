import { ICommand, IMutationInfo, IRange, Nullable } from '@univerjs/core';
import { ISheetCommandSharedParams } from '@univerjs/sheets';
import { IAutoFilter, IFilterColumn } from '../../models/types';
import { ISetSheetsFilterCriteriaMutationParams } from '../mutations/sheets-filter.mutation';
/**
 * Parameters of command {@link SetSheetFilterRangeCommand}.
 * @property {IRange} range - the range to be set as filter range.
 */
export interface ISetSheetFilterRangeCommandParams extends ISheetCommandSharedParams {
    range: IRange;
}
/**
 * A {@link CommandType.COMMAND} to set filter range in a Worksheet. Its params {@link ISetSheetFilterRangeCommandParams}
 * is required. If the {@link FilterModel} does not exist, it will be created.
 */
export declare const SetSheetFilterRangeCommand: ICommand<ISetSheetFilterRangeCommandParams>;
/**
 * A {@link CommandType.COMMAND} to remove filter in a Worksheet. Its params {@link ISheetCommandSharedParams} is
 * required. If the {@link FilterModel} does not exist, it will fail to execute.
 */
export declare const RemoveSheetFilterCommand: ICommand<ISheetCommandSharedParams>;
/**
 * A {@link CommandType.COMMAND} to toggle filter in the current {@link Worksheet}.
 */
export declare const SmartToggleSheetsFilterCommand: ICommand;
/**
 * Parameters of command {@link SetSheetsFilterCriteriaCommand}.
 * @property {number} col - the column index of the filter criteria
 * @property {Nullable<IFilterColumn>} criteria - the filter criteria to be set
 */
export interface ISetSheetsFilterCriteriaCommandParams extends ISheetCommandSharedParams {
    col: number;
    criteria: Nullable<IFilterColumn>;
}
/**
 * A {@link CommandType.COMMAND} to set filter criteria to a column in the targeting {@link FilterModel}. Its params
 * {@link ISetSheetsFilterCriteriaCommandParams} is required.
 */
export declare const SetSheetsFilterCriteriaCommand: ICommand<ISetSheetsFilterCriteriaCommandParams>;
/**
 * A {@link CommandType.COMMAND} to clear all filter criteria in the targeting {@link FilterModel}. Its params
 * {@link ISheetCommandSharedParams} is required.
 */
export declare const ClearSheetsFilterCriteriaCommand: ICommand<ISheetCommandSharedParams>;
/**
 * A {@link CommandType.COMMAND} forcing the currently active {@link FilterModel} to re-calculate all filter criteria.
 * Its params {@link ISheetCommandSharedParams} is required.
 */
export declare const ReCalcSheetsFilterCommand: ICommand<ISheetCommandSharedParams>;
/**
 * Transform a {@link FilterModel} to a list of mutations to set the filter criteria.
 * @param unitId - the unit id of the {@link Workbook}
 * @param subUnitId - the sub unit id of the {@link Worksheet}
 * @param autoFilter - the to be destructed {@link FilterModel}
 * @returns {IMutationInfo<ISetSheetsFilterCriteriaMutationParams>} a list of mutations those can be used to
 * reconstruct the {@link FilterModel}
 */
export declare function destructFilterCriteria(unitId: string, subUnitId: string, autoFilter: IAutoFilter): IMutationInfo<ISetSheetsFilterCriteriaMutationParams>[];
