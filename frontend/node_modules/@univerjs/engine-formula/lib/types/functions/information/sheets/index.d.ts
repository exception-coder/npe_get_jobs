import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Sheets extends BaseFunction {
    minParams: number;
    maxParams: number;
    needsSheetsInfo: boolean;
    calculate(): BaseValueObject;
}
