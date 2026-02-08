import { IRange, Disposable } from '@univerjs/core';
export declare class SelectAllService extends Disposable {
    rangesStack: IRange[];
    selectedRangeWorksheet: string;
}
