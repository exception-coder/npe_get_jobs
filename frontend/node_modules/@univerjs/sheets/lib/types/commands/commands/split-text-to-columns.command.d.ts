import { IAccessor, IRange, CommandType } from '@univerjs/core';
import { SplitDelimiterEnum } from '../../basics/split-range-text';
export interface ISplitTextToColumnsCommandParams {
    unitId: string;
    subUnitId: string;
    range: IRange;
    delimiter?: SplitDelimiterEnum;
    customDelimiter?: string;
    treatMultipleDelimitersAsOne?: boolean;
}
export declare const SplitTextToColumnsCommand: {
    type: CommandType;
    id: string;
    handler: (accessor: IAccessor, params: ISplitTextToColumnsCommandParams) => boolean;
};
