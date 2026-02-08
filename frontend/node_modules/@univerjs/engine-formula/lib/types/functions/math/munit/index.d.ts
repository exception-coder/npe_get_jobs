import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Munit extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(dimension: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
