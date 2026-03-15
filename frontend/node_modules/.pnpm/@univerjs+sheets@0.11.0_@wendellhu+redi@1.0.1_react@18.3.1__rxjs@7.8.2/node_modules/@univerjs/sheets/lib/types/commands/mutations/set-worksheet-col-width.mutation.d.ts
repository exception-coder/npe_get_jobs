import { IMutation, IObjectArrayPrimitiveType, IRange, Nullable, Worksheet } from '@univerjs/core';
export interface ISetWorksheetColWidthMutationParams {
    unitId: string;
    subUnitId: string;
    ranges: IRange[];
    colWidth: number | IObjectArrayPrimitiveType<Nullable<number>>;
}
/**
 * This factory is for generating undo mutations for command {@link DeltaColumnWidthCommand}.
 *
 * Note that this mutation may return multi mutations params if the column width is different
 * for each column in the range.
 */
export declare const SetWorksheetColWidthMutationFactory: (params: ISetWorksheetColWidthMutationParams, worksheet: Worksheet) => ISetWorksheetColWidthMutationParams;
/**
 * Set width of column manually
 */
export declare const SetWorksheetColWidthMutation: IMutation<ISetWorksheetColWidthMutationParams>;
