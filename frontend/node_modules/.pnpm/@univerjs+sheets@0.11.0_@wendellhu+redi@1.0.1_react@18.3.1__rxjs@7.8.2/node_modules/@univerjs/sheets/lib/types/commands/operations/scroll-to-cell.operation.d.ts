import { IOperation, IRange } from '@univerjs/core';
export interface IScrollToCellOperationParams {
    range: IRange;
    unitId: string;
}
export declare const ScrollToCellOperation: IOperation<IScrollToCellOperationParams>;
