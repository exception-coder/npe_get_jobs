import { IOperation } from '@univerjs/core';
import { ITextRangeWithStyle, ITextSelectionStyle } from '@univerjs/engine-render';
export interface ISetTextSelectionsOperationParams {
    unitId: string;
    subUnitId: string;
    segmentId: string;
    isEditing: boolean;
    style: ITextSelectionStyle;
    ranges: ITextRangeWithStyle[];
}
export declare const SetTextSelectionsOperation: IOperation<ISetTextSelectionsOperationParams>;
