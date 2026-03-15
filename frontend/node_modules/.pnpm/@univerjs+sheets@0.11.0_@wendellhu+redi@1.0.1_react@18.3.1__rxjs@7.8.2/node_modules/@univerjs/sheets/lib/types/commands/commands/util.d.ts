import { IRange, Nullable, SheetSkeleton, Worksheet, ObjectMatrix } from '@univerjs/core';
export declare function getRangesHeight(ranges: IRange[], worksheet: Worksheet): ObjectMatrix<number>;
export declare function getSuitableRangesInView(ranges: IRange[], skeleton: Nullable<SheetSkeleton>): {
    suitableRanges: IRange[];
    remainingRanges: IRange[];
};
