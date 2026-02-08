import { ICommand, IRange } from '@univerjs/core';
import { ISheetCommandSharedParams } from '../utils/interface';
export interface IReorderRangeCommandParams extends ISheetCommandSharedParams {
    range: IRange;
    order: {
        [key: number]: number;
    };
}
export declare const ReorderRangeCommandId: "sheet.command.reorder-range";
export declare const ReorderRangeCommand: ICommand<IReorderRangeCommandParams>;
