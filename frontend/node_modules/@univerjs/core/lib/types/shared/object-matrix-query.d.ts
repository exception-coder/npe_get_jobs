import { ObjectMatrix } from './object-matrix';
import { IRange } from '../sheets/typedef';
/**
 * @deprecated this function could cause memory out of use in large range.
 */
export declare function queryObjectMatrix<T>(matrix: ObjectMatrix<T>, match: (value: T) => boolean): IRange[];
export declare function multiSubtractMultiRanges(ranges1: IRange[], ranges2: IRange[]): IRange[];
