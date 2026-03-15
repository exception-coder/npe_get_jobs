import { ICommand } from '@univerjs/core';
import { ITextRangeWithStyle } from '@univerjs/engine-render';
export interface IInsertCustomRangeCommandParams {
    unitId: string;
    rangeId?: string;
    textRanges?: ITextRangeWithStyle[];
    properties?: Record<string, any>;
    text: string;
    wholeEntity?: boolean;
}
export declare const InsertCustomRangeCommand: ICommand<IInsertCustomRangeCommandParams>;
