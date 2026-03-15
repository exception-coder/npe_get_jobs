import { IMutation, IRange, Nullable } from '@univerjs/core';
import { ISheetCommandSharedParams } from '@univerjs/sheets';
import { IFilterColumn } from '../../models/types';
/**
 * Parameters of mutation {@link SetSheetsFilterRangeMutation}.
 * @property range - the range to be set as filter range.
 */
export interface ISetSheetsFilterRangeMutationParams extends ISheetCommandSharedParams {
    range: IRange;
}
/**
 * A {@link CommandType.MUTATION} to set filter range in a {@link Worksheet}. If no {@link FilterModel} exists,
 * a new `FilterModel` will be created.
 *
 * Since there could only be a filter on a worksheet, when you want to update the range, you
 * don't necessarily need to remove the filter first, you can just execute this mutation.
 */
export declare const SetSheetsFilterRangeMutation: IMutation<ISetSheetsFilterRangeMutationParams>;
/**
 * Parameters of mutation {@link SetSheetsFilterCriteriaMutation}.
 * @property {number} col - the column index to set filter criteria.
 * @property {IFilterColumn | null} criteria - the filter criteria to set. If it is `null`, the criteria will be removed.
 * @property {boolean} [reCalc=true] - if it should trigger calculation on this `FilterColumn`.
 */
export interface ISetSheetsFilterCriteriaMutationParams extends ISheetCommandSharedParams {
    col: number;
    criteria: Nullable<IFilterColumn>;
    reCalc?: boolean;
}
/**
 * A {@link CommandType.MUTATION} to set filter criteria of a given column of a {@link FilterModel}.
 */
export declare const SetSheetsFilterCriteriaMutation: IMutation<ISetSheetsFilterCriteriaMutationParams>;
/**
 * A {@link CommandType.MUTATION} to remove a {@link FilterModel} in a {@link Worksheet}.
 */
export declare const RemoveSheetsFilterMutation: IMutation<ISheetCommandSharedParams>;
/**
 * A {@link CommandType.MUTATION} to re-calculate a {@link FilterModel}.
 */
export declare const ReCalcSheetsFilterMutation: IMutation<ISheetCommandSharedParams>;
