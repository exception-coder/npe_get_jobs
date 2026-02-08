import { IOperation } from '@univerjs/core';
export declare enum AlignType {
    default = "0",
    left = "1",
    center = "2",
    right = "3",
    top = "4",
    middle = "5",
    bottom = "6",
    horizon = "7",
    vertical = "8"
}
export interface ISetDrawingAlignOperationParams {
    alignType: AlignType;
}
export declare const SetDrawingAlignOperation: IOperation<ISetDrawingAlignOperationParams>;
