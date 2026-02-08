import { ICellData, ICommand, IObjectArrayPrimitiveType } from '@univerjs/core';
import { IReplaceAllResult } from '@univerjs/find-replace';
export interface ISheetReplaceCommandParams {
    unitId: string;
    replacements: ISheetReplacement[];
}
export interface ISheetReplacement {
    count: number;
    subUnitId: string;
    value: IObjectArrayPrimitiveType<ICellData>;
}
/**
 * This command is used for the SheetFindReplaceController to deal with replacing, including undo redo.
 *
 */
export declare const SheetReplaceCommand: ICommand<ISheetReplaceCommandParams, IReplaceAllResult>;
